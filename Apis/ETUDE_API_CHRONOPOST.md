# Étude API Chronopost & DPD - 2025

## Vue d'ensemble

Pour une entreprise comme Duret Électricité, la visibilité sur les livraisons de matériel (câbles, tableaux, appareillage) est critique pour la planification des chantiers. Les principaux fournisseurs (Rexel, Sonepar) utilisent majoritairement **Chronopost** et **DPD** pour leurs expéditions express.

Cette étude couvre l'intégration des APIs de suivi de colis (Tracking) pour automatiser la réception et les alertes chantiers.

## Informations sur les APIs

### 1. Chronopost
- **Type**: SOAP (Majoritaire) / REST (Nouveau)
- **Documentation**: https://www.chronopost.fr/fr/aide/developpeurs
- **WSDL**: https://www.chronopost.fr/tracking-cxf/TrackingServiceWS?wsdl
- **Authentification**: Compte Chronopost (Account Number + Password)

### 2. DPD France
- **Type**: REST API
- **Documentation**: https://doc.dpd.fr/
- **Authentification**: OAuth 2.0 / API Key

## Endpoints Disponibles (Focus Tracking)

### Chronopost - trackSkybill (SOAP)

Bien que Chronopost modernise ses services, le service SOAP reste le plus robuste pour le tracking détaillé.

**Endpoint**: `https://www.chronopost.fr/tracking-cxf/TrackingServiceWS`

**Méthode**: `trackSkybillV2`

**Paramètres**:
- `language`: fr_FR
- `skybillNumber`: Numéro de colis (ex: XY123456789FR)

**Réponse XML (Simplifiée)**:
```xml
<return>
    <errorCode>0</errorCode>
    <listEventInfoComp>
        <events>
            <code>D</code>
            <date>2025-11-19T14:00:00</date>
            <description>Livraison effectuée</description>
            <officeLabel>ALBERTVILLE</officeLabel>
        </events>
        <events>
            <code>A</code>
            <date>2025-11-19T08:30:00</date>
            <description>En cours de livraison</description>
        </events>
    </listEventInfoComp>
</return>
```

### DPD - Shipment Trace (REST)

**Endpoint**: `GET /api/v1/track/{parcel_number}`

**Réponse JSON**:
```json
{
  "parcel_number": "25001234567890",
  "status": "DELIVERED",
  "events": [
    {
      "date": "2025-11-19T14:00:00",
      "status": "DELIVERED",
      "location": "Albertville",
      "description": "Livré au destinataire"
    }
  ]
}
```

## Authentification

### Chronopost
L'accès à l'API de tracking est souvent **ouvert** pour le suivi simple (trackSkybill), mais l'accès complet nécessite un compte client.
Pour Duret (qui est destinataire et non expéditeur), l'usage de l'API publique de tracking est généralement suffisant, ou l'utilisation d'une clé partenaire si fournie par Rexel/Sonepar.

### DPD
Nécessite souvent des credentials fournis par l'expéditeur ou un compte "Destinataire" (plus rare).
**Alternative**: Utiliser des agrégateurs comme **AfterShip** ou **Sendcloud** si l'accès direct est complexe.

## Cas d'usage Duret

### 1. Suivi Centralisé des Commandes Fournisseurs

**Problème**:
- Commandes Sonepar/Rexel passées.
- Date livraison théorique connue, mais retard possible.
- Chef de chantier appelle le bureau : "Mon câble est arrivé ?"

**Solution**:
- Odoo récupère le n° de tracking depuis l'EDI Sonepar/Rexel (ou email confirmation).
- Odoo interroge l'API Chronopost toutes les heures.
- Mise à jour statut commande achat : "En transit" → "Livré".

### 2. Alertes Retard Chantier

**Workflow**:
1. Commande prévue pour le 20/11 (Chantier Albertville).
2. API Chronopost renvoie statut "Retard / Problème adresse" le 20/11 à 09h.
3. **Odoo envoie SMS/Notif** au Chef de Chantier : "⚠️ Livraison Matériel retardée".
4. Chef de chantier réorganise les tâches de la journée.

### 3. Preuve de Livraison (POD)

- Récupération automatique de la signature ou photo de livraison.
- Stockage dans Odoo (Pièce jointe du Bon de Réception).
- Utile pour litiges ("Je n'ai rien reçu").

## Intégration Odoo

### Architecture Module `duret_delivery_tracking`

```python
# models/delivery_tracking.py

import requests
from zeep import Client  # Pour SOAP Chronopost

class PurchaseOrder(models.Model):
    _inherit = 'purchase.order'

    tracking_number = fields.Char("N° Suivi")
    carrier_type = fields.Selection([
        ('chronopost', 'Chronopost'),
        ('dpd', 'DPD'),
        ('geodis', 'Geodis')
    ], string="Transporteur")
    delivery_status = fields.Selection([
        ('draft', 'Non expédié'),
        ('transit', 'En transit'),
        ('issue', 'Problème / Retard'),
        ('delivered', 'Livré')
    ], default='draft')

    def action_check_delivery_status(self):
        """Cron job ou bouton manuel"""
        for order in self.search([('delivery_status', 'in', ['transit', 'draft'])]):
            if not order.tracking_number:
                continue
                
            if order.carrier_type == 'chronopost':
                status = self._check_chronopost(order.tracking_number)
            elif order.carrier_type == 'dpd':
                status = self._check_dpd(order.tracking_number)
            
            if status:
                order.write({'delivery_status': status})
                if status == 'issue':
                    order.activity_schedule(
                        'mail.mail_activity_data_warning',
                        summary='⚠️ Problème livraison détecté'
                    )

    def _check_chronopost(self, tracking_ref):
        wsdl = 'https://www.chronopost.fr/tracking-cxf/TrackingServiceWS?wsdl'
        client = Client(wsdl)
        
        try:
            result = client.service.trackSkybillV2(
                language='fr_FR', 
                skybillNumber=tracking_ref
            )
            
            if result.errorCode == 0 and result.listEventInfoComp:
                last_event = result.listEventInfoComp.events[0] # Plus récent
                code = last_event.code
                
                if code in ['D', 'D1', 'D2']: # Delivered codes
                    return 'delivered'
                elif code in ['A', 'T', 'S']: # Transit codes
                    return 'transit'
                else:
                    return 'issue'
        except Exception as e:
            _logger.error(f"Chronopost API Error: {e}")
            return None
```

## Planning d'implémentation

### Phase 1 : Collecte des N° de Tracking (Semaine 1-2)
- S'assurer que Rexel/Sonepar transmettent bien le lien de tracking dans leurs AR de commande (EDI ou Email).
- Parser ces infos pour remplir le champ `tracking_number` dans Odoo.

### Phase 2 : Connecteur Chronopost (Semaine 3)
- Implémentation script Python (Zeep pour SOAP).
- Tests avec numéros réels.

### Phase 3 : Notifications & Alertes (Semaine 4)
- Configuration règles d'automatisation Odoo.
- Envoi SMS/Email en cas de retard.

## ROI Estimé

### Gains
1. **Temps Administratif**: 
   - 15 min/jour (appels fournisseurs/chantiers) = 5h/mois.
   - Valeur: **3000€/an**.
2. **Productivité Chantier**:
   - Éviter 1 déplacement inutile par mois (équipe bloquée sans matériel).
   - 1 équipe (2h perdues) = 150€.
   - 12 mois = **1800€/an**.
3. **Qualité Service**:
   - Réactivité perçue par le client final.

### Coûts
- **Dev Module**: 3-5 jours (3000€).
- **API**: Gratuit (inclus dans service transport).

### Conclusion
- **Investissement faible**.
- **ROI rapide** (< 1 an).
- **Recommandation**: À faire en **Phase 2**, après la stabilisation des commandes d'achat Sonepar/Rexel.

## Alternatives (Agrégateurs)

Si Duret utilise beaucoup de transporteurs différents (Kuehne+Nagel, DB Schenker, etc.), utiliser une API d'agrégation comme **ShippyPro** ou **Sendcloud** peut être plus simple que de connecter chaque transporteur individuellement.

- **Coût**: ~50-100€/mois.
- **Avantage**: Une seule API pour tous.
- **Inconvénient**: Coût récurrent.

Pour l'instant, Chronopost/DPD couvrant 80% des flux express, l'intégration directe est plus économique.
