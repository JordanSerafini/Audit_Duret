# Étude API Twilio - 2025

## Vue d'ensemble

Twilio est la plateforme leader mondiale de communications cloud (SMS, Voice, Video, WhatsApp). L'API SMS est la plus utilisée pour les notifications B2B.

## Informations sur l'API

### URLs et Documentation
- **Console Twilio**: https://console.twilio.com/
- **Documentation API**: https://www.twilio.com/docs/sms
- **Quickstart Python**: https://www.twilio.com/docs/sms/quickstart/python
- **Pricing**: https://www.twilio.com/sms/pricing/fr

### Stack technologique
- **REST API**: HTTPS
- **Authentification**: HTTP Basic Auth (AccountSID + AuthToken)
- **Format**: JSON / XML
- **SDKs**: Python, Node.js, PHP, Java, C#, Ruby, Go

## API SMS - Endpoints

### 1. Envoi SMS

**POST** `https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/Messages.json`

**Paramètres**:
```json
{
  "From": "+33123456789",  // Numéro Twilio
  "To": "+33612345678",     // Destinataire
  "Body": "Bonjour, RDV confirmé demain 10h. Duret Électricité"
}
```

**Réponse**:
```json
{
  "sid": "SM123abc",
  "date_created": "2025-11-19T10:00:00Z",
  "date_sent": null,
  "status": "queued",  // queued → sent → delivered
  "price": "-0.08",     // En EUR
  "to": "+33612345678"
}
```

### 2. Statut SMS

**GET** `https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}.json`

**Statuts possibles**:
- `queued`: En file d'attente
- `sending`: En cours d'envoi
- `sent`: Envoyé (pas encore livré)
- `delivered`: Livré ✅
- `failed`: Échec ❌
- `undelivered`: Non délivré

### 3. Réception SMS (Webhooks)

**Configuration**: Twilio envoie HTTP POST vers votre serveur

**URL Webhook**: `https://votre-domaine.fr/twilio/sms/receive`

**Payload**:
```
MessageSid=SM123abc
From=+33612345678
To=+33123456789
Body=Annule RDV demain
```

**Cas d'usage**: Client répond "STOP" → Désabonnement auto

## Authentification

### HTTP Basic Auth

**Credentials**:
- **Username**: Account SID (ex: `AC1234567890abcdef`)
- **Password**: Auth Token (ex: `your_auth_token_here`)

**Python**:
```python
from twilio.rest import Client

account_sid = 'AC1234...'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

message = client.messages.create(
    from_='+33123456789',
    to='+33612345678',
    body='Votre RDV est confirmé pour demain 10h.'
)

print(message.sid)
```

**cURL**:
```bash
curl -X POST https://api.twilio.com/2010-04-01/Accounts/AC1234.../Messages.json \
  -u 'AC1234...:your_auth_token' \
  -d 'From=+33123456789' \
  -d 'To=+33612345678' \
  -d 'Body=Test SMS'
```

## Pricing France (2025)

### Coût Envoi SMS

| Type | Prix unitaire |
|------|---------------|
| **SMS France** | 0.08€ / SMS |
| **SMS International** | Variable (0.10-0.50€) |

### Coût Réception SMS

| Type | Prix unitaire |
|------|---------------|
| **Réception** | Gratuit |

### Numéro Twilio France

| Type | Prix |
|------|------|
| **Numéro français virtuel** | 1€ / mois |
| **Setup** | Gratuit |

**Total setup**: 1€/mois + 0.08€/SMS

### Estimation Coûts Duret

**Hypothèses**:
- 500 SMS/mois (rappels RDV, confirmations, alertes)
- 1 numéro français

**Calcul**:
```
Numéro: 1€/mois
SMS: 500 × 0.08€ = 40€/mois
TOTAL = 41€/mois ≈ 500€/an
```

## Cas d'usage Duret

### 1. Rappel RDV Automatique

**Workflow**:
```
1. RDV créé Odoo (date J)
2. Cron Odoo (J-1 à 17h)
3. Envoi SMS: "Rappel: RDV demain 10h chez M. Dupont, 13 rue... Duret"
4. Réduction no-shows de 30%
```

**Template SMS**:
```
Bonjour {client_name},
Rappel: RDV {date} à {heure}
Adresse: {adresse_chantier}
Technicien: {tech_name}
Annulation: 01.XX.XX.XX.XX
Duret Électricité
```

**ROI**:
- Taux no-show: 15% → 10% (-5%)
- 2000 RDV/an × 5% × 150€ (coût déplacement perdu) = **15K€ économisés**

### 2. Confirmation Commande Urgente

**Workflow**:
```
1. Commande fournisseur urgente validée
2. SMS chef de chantier: "Commande #1234 validée, livraison prévue demain 14h"
```

### 3. Alerte Intervention Urgente

**Workflow**:
```
1. Appel client urgence (panne)
2. Odoo identifie technicien dispo + proche (Google Maps)
3. SMS technicien: "URGENT: Panne client XYZ, 13 rue..., Tel: 06..."
```

### 4. Statut Livraison

**Workflow**:
```
1. Livraison fournisseur reçue (scan BL mobile)
2. SMS chef chantier: "Livraison matériel reçue, disponible dépôt"
```

### 5. Relance Facture Impayée

**Workflow**:
```
1. Facture J+30 impayée
2. SMS client: "Facture #INV-001 (1500€) impayée. Règlement sous 7j SVP. Merci."
```

**⚠️ Limite légale**: Max 1 SMS relance/semaine (RGPD)

## Intégration Odoo

### Module Odoo SMS

**Odoo natif** (depuis v13):
- Module `sms` (core Odoo)
- Support Twilio out-of-the-box

**Configuration**:
```python
# Settings → Technical → SMS → Providers

Provider: Twilio
Account SID: AC123...
Auth Token: your_token
From Number: +33123456789
```

### Code Exemple - Envoi SMS

**Via API Odoo**:
```python
# Dans n'importe quel modèle Odoo

self.env['sms.sms'].create({
    'number': '+33612345678',
    'body': 'Votre RDV est confirmé pour demain 10h.'
}).send()
```

**Avec suivi statut**:
```python
sms = self.env['sms.sms'].create({
    'number': partner.mobile,
    'body': f'Rappel RDV {appointment.date} à {appointment.time}',
    'partner_id': partner.id
})

sms.send()

# Plus tard: vérifier statut
if sms.state == 'sent':
    _logger.info(f"SMS envoyé à {partner.name}")
elif sms.state == 'error':
    _logger.error(f"Échec SMS: {sms.failure_reason}")
```

### Automatisation - Rappel RDV J-1

**Cron Odoo** (scheduled action):
```python
# models/calendar_event.py

from odoo import models, fields, api
from datetime import datetime, timedelta

class CalendarEvent(models.Model):
    _inherit = 'calendar.event'
    
    sms_reminder_sent = fields.Boolean('SMS Reminder Sent', default=False)
    
    @api.model
    def send_sms_reminders(self):
        """Envoie SMS rappel J-1 (appelé par cron quotidien 17h)"""
        
        tomorrow = fields.Date.today() + timedelta(days=1)
        
        appointments = self.search([
            ('start_date', '>=', tomorrow),
            ('start_date', '<', tomorrow + timedelta(days=1)),
            ('sms_reminder_sent', '=', False),
            ('partner_ids.mobile', '!=', False)
        ])
        
        for appointment in appointments:
            for attendee in appointment.partner_ids filtered(lambda p: p.mobile):
                
                message = f"""Rappel: RDV {appointment.start_date.strftime('%d/%m')} à {appointment.start_datetime.strftime('%Hh%M')}
Adresse: {appointment.location or 'À confirmer'}
Technicien: {appointment.user_id.name}
Annulation: 01 XX XX XX XX
Duret Électricité"""
                
                self.env['sms.sms'].create({
                    'number': attendee.mobile,
                    'body': message,
                    'partner_id': attendee.id
                }).send()
            
            appointment.sms_reminder_sent = True
        
        _logger.info(f"{len(appointments)} SMS rappels envoyés")
```

**Cron Config** (Data XML):
```xml
<odoo>
    <data>
        <record id="cron_sms_appointment_reminder" model="ir.cron">
            <field name="name">SMS: Rappels RDV J-1</field>
            <field name="model_id" ref="model_calendar_event"/>
            <field name="state">code</field>
            <field name="code">model.send_sms_reminders()</field>
            <field name="interval_type">days</field>
            <field name="interval_number">1</field>
            <field name="numbercall">-1</field>
            <field name="active">True</field>
            <field name="doall">False</field>
            <field name="nextcall" eval="(DateTime.now() + timedelta(days=1)).replace(hour=17, minute=0)"/>
        </record>
    </data>
</odoo>
```

## Fonctionnalités Avancées

### 1. SMS avec Lien de Confirmation

```python
# Générer lien unique confirmation RDV
confirmation_token = secrets.token_urlsafe(16)
appointment.confirmation_token = confirmation_token

confirmation_url = f"https://duret-electricite.fr/rdv/confirm/{confirmation_token}"

message = f"""RDV {appointment.date} à {appointment.time}
Confirmer: {confirmation_url}
Annuler: https://duret-electricite.fr/rdv/cancel/{confirmation_token}"""

# Envoi SMS
```

**Page web confirmation** (Odoo Controllers):
```python
@http.route('/rdv/confirm/<string:token>', type='http', auth='public')
def confirm_appointment(self, token):
    appointment = request.env['calendar.event'].sudo().search([
        ('confirmation_token', '=', token)
    ], limit=1)
    
    if appointment:
        appointment.state = 'confirmed'
        return "✅ RDV confirmé. Merci!"
    else:
        return "❌ Lien invalide"
```

### 2. SMS Bidirectionnel (Réponses)

**Config Webhook Twilio**:
```
Console Twilio → Phone Numbers → [Votre numéro] → Messaging
  → Webhook: https://votre-odoo.com/twilio/sms/receive
```

**Controller Odoo**:
```python
@http.route('/twilio/sms/receive', type='http', auth='public', csrf=False, methods=['POST'])
def receive_sms(self, **kw):
    """Réception SMS clients"""
    
    from_number = kw.get('From')
    body = kw.get('Body', '').strip().upper()
    
    # Recherche client
    partner = request.env['res.partner'].sudo().search([
        ('mobile', '=', from_number)
    ], limit=1)
    
    if not partner:
        return "OK"  # Ignorer SMS inconnus
    
    # Traitement réponses
    if 'STOP' in body or 'DESABONNER' in body:
        partner.sms_opt_out = True
        # Envoi confirmation: "Vous êtes désabonné des SMS Duret"
    
    elif 'ANNULE' in body or 'CANCEL' in body:
        # Recherche RDV J+1
        appointment = request.env['calendar.event'].sudo().search([
            ('partner_ids', 'in', partner.id),
            ('start_date', '>', fields.Date.today()),
            ('start_date', '<=', fields.Date.today() + timedelta(days=7))
        ], limit=1)
        
        if appointment:
            appointment.state = 'cancelled'
            # Notif équipe
    
    # Log SMS reçu
    partner.message_post(
        body=f"📱 SMS reçu: {body}",
        message_type='comment'
    )
    
    return "OK"
```

### 3. Templates Personnalisés

**Odoo SMS Templates**:
```xml
<record id="sms_template_appointment_reminder" model="sms.template">
    <field name="name">Rappel RDV J-1</field>
    <field name="model_id" ref="model_calendar_event"/>
    <field name="body">Rappel: RDV ${object.start_date.strftime('%d/%m')} à ${object.start_datetime.strftime('%Hh%M')}
Lieu: ${object.location or 'NC'}
Technicien: ${object.user_id.name}
Duret Électricité</field>
</record>
```

## Limitations & Best Practices

### Limites Légales (France - RGPD)

1. ✅ **Consentement**: Client doit avoir accepté recevoir SMS
   - Checkbox opt-in formulaire
   - Possibilité désabonnement (STOP)

2. ✅ **Horaires autorisés**: 8h-20h en semaine, 9h-18h samedi
   - Bloquer envoi hors horaires

3. ✅ **Fréquence**: Max 1 SMS commercial/semaine
   - SMS transactionnels (rappel RDV) = OK

### Best Practices

**Longueur SMS**:
- 1 SMS = 160 caractères (sans accents)
- 1 SMS = 70 caractères (avec accents UTF-8)
- Au-delà: Concaténation (facturation multiple)

**Recommandation**: Limiter à 140 caractères

**Opt-out Automatique**:
```python
if partner.sms_opt_out:
    _logger.info(f"SMS non envoyé à {partner.name} (opt-out)")
    return
```

**Gestion Erreurs**:
```python
try:
    sms.send()
except Exception as e:
    _logger.error(f"Échec envoi SMS: {e}")
    # Fallback: Email si SMS échoue
    partner.email_send_reminder()
```

## Planning d'Implémentation

### Phase 1: Setup & Rappels RDV (Semaine 1-2)
- [ ] Création compte Twilio
- [ ] Achat numéro français (+33)
- [ ] Config Odoo SMS (Twilio)
- [ ] Template rappel RDV J-1
- [ ] Cron quotidien 17h
- [ ] Tests avec 10 RDV pilotes

### Phase 2: Notifications Chantiers (Semaine 3)
- [ ] SMS confirmation commande urgente
- [ ] SMS alerte intervention
- [ ] Tests techniciens

### Phase 3: Bidirectionnel (Semaine 4)
- [ ] Webhook Twilio → Odoo
- [ ] Gestion STOP / CANCEL
- [ ] Logs SMS reçus

## ROI Estimé

| Cas d'usage | Gain annuel |
|-------------|-------------|
| **Réduction no-shows RDV** | 15K€ |
| **Réactivité interventions urgentes** | 5K€ (satisfaction) |
| **Moins d'appels téléphoniques** | 3K€ (temps) |
| **TOTAL** | **23K€/an** |

**Coût**: 500€/an  
**Investissement dev**: 2K€

**Payback**: 2K€ / 23K€ = **1 mois**

## Recommandations

### ✅ GO Phase 2
- ROI excellent (payback 1 mois)
- Implémentation très simple (module Odoo natif)
- Coût faible (500€/an)

### Prioriser
1. **Rappels RDV** (ROI immédiat)
2. **Alertes urgentes** (réactivité)
3. **Bidirectionnel** (si volume le justifie)

---
*Dernière mise à jour: Novembre 2025*
