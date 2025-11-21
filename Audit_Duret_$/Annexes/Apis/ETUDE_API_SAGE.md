# Étude API SAGE - 2025

⚠️ **CHANGEMENT STRATÉGIQUE** : Suite à la validation de la migration Odoo, cette API ne sera utilisée que pour l'ETL initial (Extraction des historiques). Aucun connecteur permanent ne sera développé pour éviter la dette technique.

## Vue d'ensemble

SAGE est le leader français des logiciels de gestion et comptabilité pour PME. L'entreprise propose plusieurs solutions (SAGE 100 Cloud, SAGE 50, SAGE Business Cloud) avec des capacités d'intégration variables.

## Informations sur l'API

### Produit concerné
- **SAGE 100 Cloud**: Version cloud avec API REST disponible
- **SAGE 50**: Version desktop (API limitée)
- **SAGE Business Cloud Compta**: SaaS full cloud

### URLs et Documentation
- **Developer Portal**: https://developers.sage.com/
- **API Documentation**: https://developer.sage.com/api/
- **Support**: https://www.sage.com/fr-fr/support/

## État de l'API publique

### ✅ Disponibilité

**SAGE 100 Cloud** dispose d'une API REST moderne depuis 2021:
- **Authentification**: OAuth 2.0
- **Format**: JSON (REST API)
- **Protocole**: HTTPS
- **Versioning**: API v1, v2 disponibles

**SAGE Business Cloud** (Compta):
- API REST complète
- OAuth 2.0
- Webhooks disponibles
- Sandbox de test

## Endpoints disponibles

### 1. Gestion des Tiers (Clients/Fournisseurs)

#### GET /api/v2/customers
```json
{
  "method": "GET",
  "endpoint": "/api/v2/customers",
  "description": "Liste des clients",
  "params": {
    "page": 1,
    "per_page": 100,
    "updated_since": "2025-01-01"
  }
}
```

#### POST /api/v2/customers
- Création nouveau client
- Mise à jour client existant

### 2. Facturation

#### GET /api/v2/invoices
```json
{
  "method": "GET",
  "endpoint": "/api/v2/invoices",
  "description": "Liste des factures",
  "filters": {
    "status": ["draft", "posted", "paid"],
    "date_from": "2025-01-01",
    "customer_id": "123"
  }
}
```

#### POST /api/v2/invoices
- Création facture client
- Création facture fournisseur
- Validation facture

### 3. Paiements

#### GET /api/v2/payments
- Liste des paiements
- Statut règlements

#### POST /api/v2/payments
- Enregistrement paiement
- Lettrage automatique

### 4. Écritures Comptables

#### GET /api/v2/journal_entries
- Export écritures comptables
- Filtrage par journal, période

#### POST /api/v2/journal_entries
- Import écritures depuis système tiers
- **Cas d'usage Duret**: Sync Odoo → SAGE

### 5. Comptes Généraux

#### GET /api/v2/accounts
- Plan comptable
- Soldes comptes

### 6. Exports & Rapports

#### GET /api/v2/reports/balance
- Balance comptable
- Grand livre
- Compte de résultat

## Authentification

### OAuth 2.0 Flow

1. **Inscription App** sur Developer Portal SAGE
2. **Obtention**: Client ID + Client Secret
3. **Authorization Code Flow**:
   ```
   GET https://oauth.sage.com/authorize
   ?response_type=code
   &client_id={YOUR_CLIENT_ID}
   &redirect_uri={YOUR_REDIRECT_URI}
   &scope=full_access
   ```
4. **Token Exchange**:
   ```
   POST https://oauth.sage.com/token
   {
     "grant_type": "authorization_code",
     "code": "{AUTH_CODE}",
     "client_id": "{CLIENT_ID}",
     "client_secret": "{CLIENT_SECRET}"
   }
   ```

### Refresh Token
- **Durée Access Token**: 1 heure
- **Refresh Token**: 60 jours
- **Renouvellement auto**: Via grant_type=refresh_token

## Rate Limits

| Limite | Valeur |
|--------|--------|
| **Requêtes/minute** | 60 |
| **Requêtes/heure** | 3600 |
| **Requêtes/jour** | 50 000 |
| **Taille payload** | 5 MB |

**Gestion dépassement**:
- HTTP 429 (Too Many Requests)
- Header `Retry-After` en secondes

## Faisabilité d'intégration

### ✅ Points forts

1. **API Moderne**: REST JSON, OAuth 2.0 standard
2. **Documentation**: Complète sur developer portal
3. **Sandbox**: Environnement de test disponible
4. **SDKs**: Librairies Python, Node.js, .NET disponibles
5. **Support**: Forum développeur actif
6. **Webhooks**: Notifications temps réel (invoices, payments)

### ⚠️ Points d'attention

1. **Version SAGE**: API disponible uniquement SAGE 100 Cloud / Business Cloud
   - ⚠️ **Vérifier version Duret AVANT** implémentation
   - Si SAGE 50 desktop → Pas d'API, rester sur CSV
2. **Migration**: Si version ancienne, coût migration vers Cloud
3. **Authentification**: Setup OAuth complexe (vs API Key simple)
4. **Licence**: Accès API peut nécessiter licence supérieure (à vérifier)

## Prérequis pour l'intégration

### Côté SAGE
1. ✅ **SAGE 100 Cloud** OU **SAGE Business Cloud** (vérifier version Duret)
2. ✅ Compte SAGE Developer (gratuit)
3. ✅ Credentials OAuth (Client ID/Secret)
4. ✅ Licence SAGE avec accès API activé

### Côté Odoo
1. ✅ Module **duret_sage_sync** (développement custom)
2. ✅ Serveur avec accès internet (OAuth callback)
3. ✅ Certificat SSL (HTTPS requis pour OAuth)

## Cas d'usage Duret

### 1. Sync Factures Clients (Odoo → SAGE)

**Fréquence**: Quotidienne (batch J-1) OU Temps réel (webhook)

**Flux**:
```
1. Facture validée dans Odoo
2. Webhook Odoo → Module duret_sage_sync
3. API POST /api/v2/invoices vers SAGE
4. Récupération ID facture SAGE
5. Update Odoo (lien bidirectionnel)
```

**Données transférées**:
- Client (mapping Odoo ID ↔ SAGE ID)
- Lignes facture
- Montants TTC/HT
- TVA
- Mode paiement
- Échéance

### 2. Sync Factures Fournisseurs (Odoo → SAGE)

- Identique factures clients
- POST /api/v2/supplier_invoices

### 3. Sync Paiements (Bidirectionnel)

**Odoo → SAGE**:
```python
# Paiement enregistré Odoo
POST /api/v2/payments
{
  "invoice_id": "INV-2025-001",
  "amount": 1200.50,
  "payment_date": "2025-11-19",
  "payment_method": "bank_transfer",
  "reference": "VIR-123456"
}
```

**SAGE → Odoo** (via Webhook):
```
1. Paiement saisi SAGE (rapprochement bancaire)
2. SAGE envoie Webhook → Odoo
3. Odoo marque facture comme payée
```

### 4. Rapprochement Automatique

**Avantage API vs CSV**:
- ❌ CSV: Export J+1, import manuel, erreurs fréquentes
- ✅ API: Sync temps réel, lettrage auto, zéro erreur

## Architecture Technique Recommandée

### Option A: Sync Temps Réel (Recommandée)

```
┌────────────────────────────────────────┐
│         Odoo (ERP Duret)               │
│  - Factures                            │
│  - Paiements                           │
│  - Clients/Fournisseurs                │
└─────────────┬──────────────────────────┘
              │
              │ Module duret_sage_sync
              │ (Python - API calls + Webhooks)
              ▼
┌────────────────────────────────────────┐
│      SAGE 100 Cloud (Compta)           │
│  - Écritures comptables                │
│  - Lettrage                            │
│  - Rapports financiers                 │
└────────────────────────────────────────┘
```

### Option B: Sync Batch Quotidien (Si rate limit problème)

```
Odoo → Queue (Celery) → Traitement nuit (2h-6h) → SAGE API
```

## Développement Module Odoo

### Structure Module

```python
# addons/duret_sage_sync/
│
├── models/
│   ├── sage_connector.py        # Gestion OAuth + API calls
│   ├── sage_invoice_sync.py     # Sync factures
│   ├── sage_payment_sync.py     # Sync paiements
│   └── sage_partner_sync.py     # Sync tiers
│
├── controllers/
│   └── sage_webhook.py          # Réception webhooks SAGE
│
├── data/
│   └── sage_config.xml          # Config OAuth
│
└── security/
    └── ir.model.access.csv
```

### Code Exemple - Sync Facture

```python
# models/sage_invoice_sync.py

from odoo import models, fields, api
import requests

class AccountMove(models.Model):
    _inherit = 'account.move'
    
    sage_invoice_id = fields.Char('SAGE Invoice ID', readonly=True)
    sage_synced = fields.Boolean('Synced with SAGE', default=False)
    sage_sync_date = fields.Datetime('Last SAGE Sync')
    
    def action_post(self):
        """Override: Sync to SAGE after posting"""
        res = super().action_post()
        
        # Sync to SAGE if invoice
        if self.move_type in ['out_invoice', 'out_refund']:
            self.sync_to_sage()
        
        return res
    
    def sync_to_sage(self):
        """Synchronise facture vers SAGE API"""
        sage_api = self.env['duret.sage.connector'].get_instance()
        
        # Préparation données
        invoice_data = {
            'customer': {
                'id': self.partner_id.sage_id or None,
                'name': self.partner_id.name,
                'vat': self.partner_id.vat
            },
            'invoice_date': self.invoice_date.isoformat(),
            'due_date': self.invoice_date_due.isoformat(),
            'lines': [{
                'description': line.name,
                'account_code': line.account_id.code,
                'quantity': line.quantity,
                'unit_price': line.price_unit,
                'tax_rate': line.tax_ids[0].amount if line.tax_ids else 0,
                'amount': line.price_subtotal
            } for line in self.invoice_line_ids],
            'total_ht': self.amount_untaxed,
            'total_tax': self.amount_tax,
            'total_ttc': self.amount_total
        }
        
        # API Call
        try:
            response = sage_api.create_invoice(invoice_data)
            
            if response.status_code == 201:
                sage_invoice = response.json()
                self.write({
                    'sage_invoice_id': sage_invoice['id'],
                    'sage_synced': True,
                    'sage_sync_date': fields.Datetime.now()
                })
                _logger.info(f"Invoice {self.name} synced to SAGE: {sage_invoice['id']}")
            else:
                raise UserError(f"SAGE API Error: {response.text}")
                
        except Exception as e:
            _logger.error(f"Failed to sync invoice {self.name} to SAGE: {e}")
            # Créer alerte pour comptable
            self.message_post(
                body=f"⚠️ Échec sync SAGE: {e}",
                message_type='notification'
            )
```

## Planning d'implémentation

### Phase 1: Vérification & Setup (Semaine 1-2)

1. ✅ **Audit version SAGE Duret**
   - Si SAGE 100 Cloud → GO
   - Si SAGE 50 desktop → Évaluer migration OU rester CSV

2. ✅ **Création compte Developer**
   - Inscription sur https://developers.sage.com/
   - Création App → Obtention Client ID/Secret

3. ✅ **Test Sandbox**
   - Connexion environnement test
   - Tests endpoints critiques

### Phase 2: Développement Module (Semaine 3-6)

1. 🔄 Module Odoo `duret_sage_sync`
2. 🔄 Gestion OAuth 2.0
3. 🔄 Sync Factures (bidir)
4. 🔄 Sync Paiements
5. 🔄 Gestion erreurs + retry logic
6. 🔄 Logs + monitoring

### Phase 3: Tests & Validation (Semaine 7-8)

1. 🔄 Tests unitaires
2. 🔄 Tests intégration (Odoo ↔ SAGE)
3. 🔄 Validation comptable (balance cohérente)
4. 🔄 Tests performance (rate limits)

### Phase 4: Go-Live (Semaine 9-10)

1. ⏳ Déploiement production
2. ⏳ Migration données historiques (optionnel)
3. ⏳ Formation comptable
4. ⏳ Monitoring J+30

## Coût d'Intégration

| Poste | Estimation |
|-------|-----------|
| **Développement module Odoo** | 15-20 jours (15K€) |
| **Tests & validation** | 5 jours (5K€) |
| **Formation & support** | 2 jours (2K€) |
| **Migration SAGE Cloud** (si nécessaire) | Variable (0-10K€) |
| **Licence SAGE avec API** | À vérifier (possiblement inclus) |
| **TOTAL** | **22-32K€** (one-time) |

**Coût récurrent**: 0€ (si licence SAGE actuelle suffit)

## Impact Opérationnel

### Gains Temps Comptabilité

| Tâche | Avant (CSV) | Après (API) | Impact |
|-------|-------------|-------------|------|
| **Export factures Odoo** | 30 min/jour | 0 (auto) | Suppression tâche manuelle |
| **Import SAGE** | 30 min/jour | 0 (auto) | Suppression tâche manuelle |
| **Correction erreurs** | 2h/semaine | 0 | Fiabilisation des données |
| **Lettrage manuel** | 4h/semaine | 1h/semaine (contrôle) | Gain de productivité |

**Bénéfices Qualitatifs**:
- ✅ Réduction drastique des erreurs comptables
- ✅ Trésorerie visible en temps réel (vs J+1)
- ✅ Rapprochement bancaire facilité
- ✅ Sécurisation des données financières

## Recommandations

### ✅ GO si...
1. SAGE 100 Cloud OU SAGE Business Cloud déjà déployé
2. Volume factures > 100/mois (sinon CSV suffit)
3. Comptable débordée (gain temps critique)
4. Budget 30K€ disponible

### ⏳ ATTENDRE si...
1. SAGE 50 desktop (migration lourde nécessaire)
2. Volume factures < 50/mois (ROI faible)
3. CSV actuel fonctionne bien

### Scénario Hybride (Recommandé)
1. **Phase 1**: Sync factures uniquement (MVP)
2. **Phase 2**: Ajout sync paiements si Phase 1 OK
3. **Phase 3**: Webhooks temps réel

## Contacts utiles

- **SAGE Developer Portal**: https://developers.sage.com/
- **Support API**: Via ticket sur Developer Portal
- **Documentation**: https://developer.sage.com/api/accounting/guides/
- **Forum**: https://community.sage.com/developer/

## Conclusion

### État actuel (2025)
- ✅ **API REST moderne disponible** (SAGE 100 Cloud)
- ✅ **OAuth 2.0 standard**
- ✅ **Documentation complète**
- ✅ **Sandbox de test**

### Recomm andation principale

**SI SAGE 100 Cloud: GO PHASE 1** (Sync factures)
- Impact immédiat sur la productivité
- Gain temps comptable significatif
- Réduction erreurs drastique

**SI SAGE 50 desktop: Évaluer migration Cloud**
- Coût migration vs ROI API
- Alternative: Améliorer process CSV

---
*Dernière mise à jour: Novembre 2025*
