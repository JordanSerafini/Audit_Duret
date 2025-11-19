# 🔍 AUDIT : APIs COMPLÉMENTAIRES PERTINENTES

> **Date** : Novembre 2025  
> **Contexte** : Audit Duret Électricité - Opportunités d'intégration  
> **Statut** : 🎯 Analyse d'opportunité

---

## 🎯 OBJECTIF

Identifier et évaluer **d'autres APIs** pertinentes au-delà de Sonepar/Rexel pour automatiser davantage les processus de Duret.

---

## 📊 MATRICE DE PRIORISATION

| # | API | Cas d'usage | Priorité | ROI Estimé | Complexité |
|---|-----|-------------|----------|------------|------------|
| 1 | **Chronopost/DPD** | Suivi livraisons fournisseurs | 🟢 HAUTE | 15K€/an | ⭐⭐ Faible |
| 2 | **Google Maps API** | Géolocalisation chantiers, optimisation trajets | 🟢 HAUTE | 20K€/an | ⭐⭐ Faible |
| 3 | **Météo France API** | Planification chantiers (intempéries) | 🟡 MOYENNE | 10K€/an | ⭐ Très faible |
| 4 | **CONSUEL API** | Vérification conformité électrique | 🟢 HAUTE | 25K€/an | ⭐⭐⭐⭐ Élevée |
| 5 | **Open Banking** | Rapprochement bancaire automatique | 🟡 MOYENNE | 12K€/an | ⭐⭐⭐ Moyenne |
| 6 | **Twilio (SMS)** | Notifications chantiers, rappels | 🟢 HAUTE | 8K€/an | ⭐⭐ Faible |
| 7 | **SAGE API** | Intégration comptable temps réel | 🔴 CRITIQUE | 40K€/an | ⭐⭐⭐⭐⭐ Très élevée |
| 8 | **Qualibat API** | Vérification certifications sous-traitants | 🟡 MOYENNE | 5K€/an | ⭐⭐⭐ Moyenne |
| 9 | **SendGrid** | Emails transactionnels (devis, factures) | 🟢 HAUTE | 6K€/an | ⭐ Très faible |
| 10 | **Stripe/PayPlug** | Paiement en ligne clients | 🟢 HAUTE | 30K€/an | ⭐⭐ Faible |

---

## 🔴 PRIORITÉ CRITIQUE

### 1. 🏦 SAGE API (Comptabilité)

**Problème actuel** : Export CSV manuel quotidien Odoo → SAGE

**Opportunité API**
- **SAGE 100 API** : Disponible depuis 2023 (REST API)
- Endpoints : Factures, Paiements, Écritures comptables
- Authentification : API Key + OAuth 2.0

**Gains estimés**
- ✅ Sync temps réel (vs J+1 actuel)
- ✅ Réduction erreurs export/import
- ✅ Gain temps compta : **2h/jour** = 40K€/an

**Complexité**
- ⚠️ Nécessite SAGE 100 Cloud (vérifier version Duret)
- ⚠️ Développement module Odoo custom (15-20j)
- ⚠️ Tests exhaustifs (comptabilité = zéro erreur)

**Recommandation** : **GO si SAGE 100 Cloud**, sinon rester sur CSV.

---

## 🟢 PRIORITÉ HAUTE

### 2. 📍 Google Maps API (Géolocalisation)

**Cas d'usage**
1. **Carte chantiers** : Visualisation tous chantiers actifs sur carte
2. **Optimisation trajets** : Calcul meilleur itinéraire techniciens (multi-stops)
3. **Zone intervention** : Identification chantiers dans rayon X km
4. **Distance client** : Calcul automatique frais déplacement

**APIs Google Maps à utiliser**
- **Maps JavaScript API** : Affichage carte web
- **Directions API** : Calcul itinéraires optimisés
- **Distance Matrix API** : Calcul distances multiples points
- **Geocoding API** : Adresse → Coordonnées GPS

**Coût Google Maps**
- Gratuit jusqu'à 28 000 requêtes/mois
- Au-delà : ~5€ / 1000 requêtes
- Estimation Duret : **200€/mois** (50 chantiers actifs)

**Gains estimés**
- ⏱️ Optimisation trajets : **10% temps trajet économisé** = 20K€/an
- 📊 Planification améliorée (affectation technicien le plus proche)

**Implémentation Odoo**
```python
# Module: duret_maps_integration
@api.model
def get_optimized_route(self, chantier_ids):
    """Calcule itinéraire optimisé pour visiter N chantiers"""
    google_api_key = self.env['ir.config_parameter'].sudo().get_param('google.maps.api_key')
    
    # Récupère coordonnées chantiers
    chantiers = self.env['project.task'].browse(chantier_ids)
    waypoints = [f"{c.partner_id.partner_latitude},{c.partner_id.partner_longitude}" 
                 for c in chantiers]
    
    url = "https://maps.googleapis.com/maps/api/directions/json"
    params = {
        'origin': waypoints[0],
        'destination': waypoints[-1],
        'waypoints': '|'.join(waypoints[1:-1]),
        'optimize': 'true',  # Optimisation automatique
        'key': google_api_key
    }
    
    response = requests.get(url, params=params)
    return response.json()
```

**Recommandation** : **GO Phase 2** (après apps mobile).

---

### 3. 📦 Chronopost / DPD API (Suivi Livraisons)

**Problème actuel** : Pas de visibilité sur livraisons fournisseurs (Sonepar, Rexel, autres)

**Opportunité**
- **Chronopost Tracking API** : Suivi colis temps réel
- **DPD API** : Suivi palettes
- **Geodis API** : Suivi fret

**Cas d'usage**
1. Chef de chantier reçoit notif "Livraison prévue 14h aujourd'hui"
2. Alerte si retard livraison (réorganisation planning)
3. Signature électronique réception (via app mobile)

**Intégration Odoo**
```python
# Lors de création commande fournisseur
def track_delivery(self, tracking_number, carrier='chronopost'):
    """Suivi livraison via API transporteur"""
    if carrier == 'chronopost':
        url = f"https://api.chronopost.fr/tracking/v1/{tracking_number}"
        headers = {'Authorization': f'Bearer {CHRONOPOST_API_KEY}'}
        response = requests.get(url, headers=headers)
        
        data = response.json()
        return {
            'status': data['status'],  # en_transit, livre, retard
            'eta': data['estimated_delivery'],
            'last_location': data['last_checkpoint']
        }
```

**Coût** : Gratuit (API fournie par transporteurs)

**Gains** :
- ⏱️ Moins d'appels "Où est ma commande ?" : 15K€/an
- 📊 Planification chantier améliorée

**Recommandation** : **GO Phase 2**.

---

### 4. 🔌 CONSUEL API (Conformité Électrique)

**Contexte** : CONSUEL = Organisme de contrôle obligatoire pour installations électriques

**Problème actuel** :
- Suivi CONSUEL dans Excel (Sophie)
- Relances manuelles pour obtenir attestations
- Pas de traçabilité

**Opportunité API CONSUEL** :
⚠️ **API NON PUBLIQUE** actuellement, mais :
- CONSUEL propose un **portail web** (login/password)
- Possibilité de **web scraping** (automatisation)
- OU négociation accès API privée (gros volumes)

**Alternative pragmatique** :
```
1. Module Odoo "CONSUEL Tracker"
2. Saisie manuelle n° CONSUEL + date dépôt
3. Rappels automatiques (J+30 si pas reçu)
4. Stockage attestations PDF (Odoo Documents)
```

**Gains sans API** : 10K€/an (automatisation rappels)  
**Gains avec API** : 25K€/an (sync auto statut CONSUEL)

**Recommandation** : 
- ✅ **Phase 1** : Module tracking manuel
- ⏳ **Phase 3** : Négocier accès API CONSUEL (si volume justifie)

---

### 5. 💳 Stripe / PayPlug (Paiement en ligne)

**Cas d'usage** : Permettre aux clients de **payer factures en ligne** (carte bancaire)

**Avantages**
- ⚡ Accélération encaissements (J+2 vs J+30-60 chèque/virement)
- 💰 Réduction impayés (-15%)
- 📊 Trésorerie améliorée

**Intégration Odoo**
- Module **Odoo Payment** natif (supporte Stripe, PayPlug)
- Ajout bouton "Payer en ligne" sur facture PDF
- Portail client Odoo : Consultation factures + Paiement CB

**Coût Stripe** :
- 1.5% + 0.25€ par transaction
- Exemple : Facture 5000€ → Frais 75.25€

**ROI** :
- Si 20% factures payées en ligne (200K€/mois)
  - Frais Stripe : ~4K€/mois
  - Gain trésorerie : **30 jours avancés** = Valeur significative
  - Réduction impayés : 15K€/an

**Recommandation** : **GO Phase 3** (après portail client).

---

### 6. 📱 Twilio (SMS Notifications)

**Cas d'usage**
1. **Rappel RDV** : SMS J-1 au client "RDV demain 10h"
2. **Alerte intervention** : SMS technicien "Urgent: Panne client X"
3. **Confirmation livraison** : SMS chef chantier "Livraison validée"
4. **Relance facture** : SMS J+30 "Facture impayée"

**Odoo Twilio**
- Module **Odoo SMS** natif (compatible Twilio)
- Configuration simple (API Key Twilio)

**Coût Twilio France**
- ~0.08€ / SMS
- Budget estimé : 500 SMS/mois = **40€/mois**

**Gains**
- ⏱️ Moins d'appels téléphoniques : 8K€/an
- 📊 Taux présence RDV amélioré (+10%)

**Recommandation** : **GO Phase 2** (facile à implémenter).

---

## 🟡 PRIORITÉ MOYENNE

### 7. 🌦️ Météo France API (Planification)

**Cas d'usage** : Adapter planning chantiers selon météo

**Météo France - API Publique**
- Prévisions 7 jours
- Alertes vigilance (orange, rouge)
- Gratuit (usage non commercial) ou ~50€/mois (commercial)

**Intégration Odoo**
```python
def get_weather_forecast(self, chantier_id):
    """Récupère prévisions météo pour chantier"""
    chantier = self.env['project.task'].browse(chantier_id)
    lat = chantier.partner_id.partner_latitude
    lon = chantier.partner_id.partner_longitude
    
    url = f"https://api.meteofrance.com/forecast/v2/daily"
    params = {'lat': lat, 'lon': lon, 'days': 7}
    
    response = requests.get(url, params=params, headers={'Authorization': API_KEY})
    forecast = response.json()
    
    # Alerte si pluie ou vent fort
    if forecast['day1']['rain_probability'] > 70:
        return {'alert': True, 'message': 'Pluie prévue, reporter intervention'}
```

**Gains** : 10K€/an (moins d'interventions annulées)

**Recommandation** : **GO Phase 3** (nice-to-have).

---

### 8. 🏦 Open Banking (Rapprochement Bancaire)

**Problème actuel** : Import manuel relevés bancaires dans SAGE

**Directive DSP2** (Europe) : Banques doivent fournir API

**APIs disponibles**
- **Budget Insight** : Agrégateur multi-banques
- **Bridge API** : Connexion 300+ banques  européennes
- **Bankin API** : Alternative française

**Cas d'usage Duret**
1. Import auto relevés bancaires → Odoo/SAGE
2. Rapprochement auto factures ↔ virements
3. Alertes fraude (transaction suspecte)

**Coût** : ~200€/mois (abonnement agrégateur)

**Gains** : 12K€/an (temps compta économisé)

**Complexité** : ⭐⭐⭐ (Sécurité bancaire, règlementation)

**Recommandation** : **Évaluer Phase 3** (si comptable débordée).

---

### 9. 📜 Qualibat API (Certifications BTP)

**Contexte** : Vérifier certifications sous-traitants

**Qualibat** : Organisme de qualification BTP
- Actuellement : Vérification manuelle site web
- API privée existe (sur demande entreprises certifiées)

**Cas d'usage**
- Validation automatique sous-traitant avant commande
- Alerte si certification expirée

**Gains** : 5K€/an (conformité améliorée)

**Recommandation** : **Reporter Phase 4** (faible volume sous-traitants).

---

## ❌ NON PRIORITAIRES

### APIs à NE PAS implémenter (pour l'instant)

| API | Raison | Alternative |
|-----|--------|-------------|
| **Dropbox / Google Drive** | Odoo Documents suffit | Odoo Documents natif |
| **Slack / Teams** | Odoo Discuss suffit | Odoo Discuss (chat intégré) |
| **Zoom API** | Pas de besoin visio métier | Google Meet (déjà utilisé ?) |
| **LinkedIn API** | Pas de recrutement actif | Recrutement manuel |

---

## 📋 PLAN D'IMPLÉMENTATION RECOMMANDÉ

### Phase 1 (M1-6) : Fondations
✅ Sonepar API (fournisseur principal)  
✅ Rexel API (fournisseur secondaire)  
⏳ SAGE API (si SAGE Cloud disponible)

### Phase 2 (M7-12) : Logistique & Communication
- [ ] Chronopost/DPD API (suivi livraisons)
- [ ] Twilio SMS (notifications)
- [ ] SendGrid (emails transactionnels)
- [ ] Google Maps API (géolocalisation)

### Phase 3 (M13-18) : Optimisations
- [ ] Stripe/PayPlug (paiement en ligne)
- [ ] Météo France API (planification)
- [ ] CONSUEL Tracker (module custom)

### Phase 4 (M19-24) : Avancé
- [ ] Open Banking (si pertinent)
- [ ] Qualibat API (si volumes)
- [ ] CONSUEL API (si accès obtenu)

---

## 💰 TABLEAU RÉCAPITULATIF ROI

| API | Investissement | Gains/an | Payback | Phase |
|-----|---------------|----------|---------|-------|
| **SAGE API** | 30K€ | 40K€ | 9 mois | 1 |
| **Sonepar/Rexel** | 15K€ | 40K€ | 5 mois | 1 |
| **Google Maps** | 8K€ | 20K€ | 5 mois | 2 |
| **Chronopost/DPD** | 5K€ | 15K€ | 4 mois | 2 |
| **Twilio SMS** | 2K€ | 8K€ | 3 mois | 2 |
| **Stripe** | 5K€ | 30K€ | 2 mois | 3 |
| **Météo France** | 3K€ | 10K€ | 4 mois | 3 |
| **TOTAL** | **68K€** | **163K€** | **5 mois (global)** | 1-3 |

---

**📧 Contact** : Direction IT - Duret Électricité  
**🎯 Objectif** : Automatiser 90% des interactions externes  
**💰 ROI Additionnel APIs** : +163K€/an  
**⏱️ Timeline** : 18 mois (intégration progressive)
