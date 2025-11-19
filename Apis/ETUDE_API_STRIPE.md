# Étude API Stripe - 2025

## Vue d'ensemble

L'intégration du paiement en ligne est un levier majeur pour accélérer les encaissements clients (DSO). Stripe est la solution leader du marché, offrant une API robuste et une intégration native avec Odoo.

Cette étude analyse l'implémentation de Stripe pour permettre aux clients de Duret Électricité de régler leurs factures par carte bancaire instantanément.

## Informations sur l'API

- **Type**: REST API
- **Documentation**: https://stripe.com/docs/api
- **Authentification**: API Keys (Secret Key + Publishable Key)
- **Version**: Rolling versions (ex: 2023-10-16)
- **SDKs**: Python, Node.js, PHP, Java, etc.

## Endpoints Clés

### 1. Payment Intents (Cœur du système)
**Endpoint**: `POST /v1/payment_intents`

Permet de créer une intention de paiement sécurisée.

```bash
curl https://api.stripe.com/v1/payment_intents \
  -u sk_test_4eC39HqLyjWDarjtT1zdp7dc: \
  -d amount=2000 \
  -d currency=eur \
  -d "payment_method_types[]"=card \
  -d receipt_email="client@example.com"
```

### 2. Checkout Sessions (Page de paiement hébergée)
**Endpoint**: `POST /v1/checkout/sessions`

Idéal pour envoyer un lien de paiement par email.

```json
{
  "success_url": "https://duret-electricite.fr/success",
  "cancel_url": "https://duret-electricite.fr/cancel",
  "line_items": [
    {
      "price_data": {
        "currency": "eur",
        "product_data": {"name": "Facture F2025-001"},
        "unit_amount": 150000  // 1500.00€
      },
      "quantity": 1
    }
  ],
  "mode": "payment"
}
```

### 3. Webhooks (Confirmation paiement)
Stripe notifie Odoo quand le paiement est réussi.
- **Event**: `payment_intent.succeeded`
- **Event**: `checkout.session.completed`

## Intégration Odoo

### Option A : Module Natif (Recommandé)

Odoo dispose d'un connecteur Stripe certifié.

**Configuration**:
1. Créer compte Stripe.
2. Récupérer API Keys (Publishable / Secret).
3. Dans Odoo : `Comptabilité` > `Configuration` > `Fournisseurs de paiement`.
4. Activer Stripe et coller les clés.
5. Configurer le "Journal de paiement" (ex: Banque Stripe).

**Fonctionnalités natives**:
- Bouton "Payer maintenant" sur le Portail Client.
- Lien de paiement dans l'email de la facture.
- Tokenisation (enregistrement CB pour paiements futurs).
- Rapprochement automatique (via relevés Stripe).

### Option B : Liens de Paiement Custom (Via API)

Si besoin de scénarios complexes (ex: acompte 30% à la signature du devis).

```python
# models/sale_order.py

import stripe

class SaleOrder(models.Model):
    _inherit = 'sale.order'

    stripe_payment_link = fields.Char("Lien de paiement")

    def generate_down_payment_link(self):
        """Génère un lien pour payer l'acompte"""
        stripe.api_key = self.env['ir.config_parameter'].get_param('stripe.secret_key')
        
        amount_cents = int(self.amount_total * 0.30 * 100) # 30% acompte
        
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price_data': {
                    'currency': 'eur',
                    'product_data': {
                        'name': f"Acompte Devis {self.name}",
                    },
                    'unit_amount': amount_cents,
                },
                'quantity': 1,
            }],
            mode='payment',
            success_url=f'{self.get_portal_url()}&payment=success',
            cancel_url=f'{self.get_portal_url()}&payment=cancel',
        )
        
        self.stripe_payment_link = session.url
        return session.url
```

## Coûts & Tarification (2025)

### Frais Stripe (Europe)
- **Cartes européennes**: 1.5% + 0.25€
- **Cartes non-européennes**: 2.5% + 0.25€

**Exemple pour une facture de 1000€**:
- Frais: 15€ + 0.25€ = **15.25€**
- Net perçu: 984.75€

### Comparaison Virement vs Stripe

| Méthode | Coût | Délai | Avantage | Inconvénient |
|---------|------|-------|----------|--------------|
| **Virement** | 0€ | 2-4 jours | Gratuit | Client doit saisir l'IBAN (frictions) |
| **Chèque** | 0€ (hors traitement) | 5-10 jours | Habitude clients | Gestion lourde, risque impayé, délai |
| **Stripe** | ~1.5% | J+3 (payout) | **Instantané**, Facile | Coût transaction |

## ROI Estimé

### Hypothèses
- CA Annuel : 2M€
- Particuliers (Cible Stripe) : 30% du CA = 600K€
- Adoption Stripe : 20% des particuliers (120K€/an)

### Coût Annuel
- 120 000€ x 1.5% = **1 800€ / an** de frais.

### Gains
1. **Trésorerie (Cash Flow)**:
   - Réduction délai paiement de 15 jours en moyenne.
   - Valeur financière du cash accéléré.
2. **Réduction Impayés**:
   - Le paiement CB est souvent impulsif/immédiat à la réception de l'email.
   - Récupération de 5000€ d'impayés/an grâce à la facilité de paiement.
3. **Gain Administratif**:
   - Plus de chèques à remettre en banque.
   - Lettrage automatique (Odoo reconnaît la transaction Stripe).
   - Gain: 2h/mois = **1200€/an**.

### Bilan
- Coût: -1800€
- Gain Impayés: +5000€
- Gain Admin: +1200€
- **Net**: **+4400€ / an** + Trésorerie améliorée.

## Sécurité (DSP2 / SCA)

Stripe gère nativement la **Strong Customer Authentication (SCA)** requise en Europe (3D Secure v2).
- Odoo délègue entièrement la sécurité à Stripe (Hosted Checkout).
- Aucune donnée bancaire ne transite par les serveurs Duret.
- Conformité PCI-DSS simplifiée (SAQ A).

## Recommandations

1. **Utiliser le module natif Odoo** : Ne pas réinventer la roue. C'est robuste et maintenu par Odoo SA.
2. **Cibler les petits montants** : Activer Stripe pour les factures < 2000€ (Service, Dépannage). Pour les gros chantiers, privilégier le virement (économie des frais).
3. **Paiement Acompte** : Très pertinent pour valider un devis rapidement. "Payez 30% maintenant pour bloquer la date d'intervention".

### Planning
- **Semaine 1**: Création compte Stripe + Activation module Odoo (Test Mode).
- **Semaine 2**: Test interne (paiement 1€).
- **Semaine 3**: Activation Production pour factures "Dépannage".
- **Mois 2**: Bilan adoption clients.
