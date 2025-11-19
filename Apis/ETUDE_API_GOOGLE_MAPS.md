# Étude API Google Maps - 2025

## Vue d'ensemble

Google Maps Platform propose un ensemble d'APIs permettant d'intégrer des fonctionnalités de cartographie, géolocalisation, et calcul d'itinéraires dans les applications professionnelles.

## Informations sur l'API

### URLs et Documentation
- **Console Google Cloud**: https://console.cloud.google.com/google/maps-apis/
- **Documentation**: https://developers.google.com/maps/documentation
- **Pricing Calculator**: https://mapsplatformtransition.withgoogle.com/calculator

### Stack technologique
- **REST API**: HTTP/HTTPS
- **Format**: JSON / XML
- **Authentification**: API Key (simple) OU OAuth 2.0 (avancé)
- **SDKs**: JavaScript, Python, Java, Node.js, Go, .NET

## APIs Disponibles

### 1. Maps JavaScript API
**Usage**: Affichage cartes web interactives

**Endpoint**: Chargement via CDN
```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
```

**Cas d'usage Duret**:
- 🗺️ Carte tous chantiers actifs (dashboard)
- 📍 Localisation client sur fiche CRM
- 🚧 Zones d'intervention par technicien

### 🧠 **PRIORITÉ IA** : Source géodonnées pour algorithme de planification
L'API Google Maps fournira les **coordonnées GPS** essentielles pour alimenter l'algorithme de planification dynamique (Vague 3). Ces données géographiques permettront d'optimiser automatiquement les tournées et de corréler les données météo aux chantiers spécifiques.

### 2. Geocoding API
**URL**: `https://maps.googleapis.com/maps/api/geocode/json`

**Fonctionnalité**: Adresse → Coordonnées GPS (et inverse)

**Exemple requête**:
```
GET https://maps.googleapis.com/maps/api/geocode/json
  ?address=13+Rue+de+la+Paix,Paris,France
  &key=YOUR_API_KEY
```

**Réponse**:
```json
{
  "results": [{
    "geometry": {
      "location": {
        "lat": 48.869102,
        "lng": 2.331584
      }
    },
    "formatted_address": "13 Rue de la Paix, 75002 Paris, France"
  }]
}
```

**Cas d'usage Duret**:
- 🏠 Géolocaliser automatiquement chaque nouveau client
- 📊 Calculer distance dépôt ↔ chantier
- 🎯 Identifier technicien le plus proche

### 3. Directions API
**URL**: `https://maps.googleapis.com/maps/api/directions/json`

**Fonctionnalité**: Calcul itinéraire optimisé A → B (multi-stops)

**Exemple requête**:
```
GET https://maps.googleapis.com/maps/api/directions/json
  ?origin=Paris,France
  &destination=Lyon,France
  &waypoints=optimize:true|Dijon,France|Mâcon,France
  &key=YOUR_API_KEY
```

**Paramètres**:
- `origin`: Point départ
- `destination`: Point arrivée
- `waypoints`: Points intermédiaires (max 25)
- `optimize:true`: Réorganise waypoints pour trajet optimal
- `mode`: driving (default), walking, bicycling, transit

**Réponse**:
```json
{
  "routes": [{
    "legs": [{
      "distance": {"value": 450000, "text": "450 km"},
      "duration": {"value": 15300, "text": "4 heures 15"},
      "steps": [...]
    }],
    "waypoint_order": [0, 1]  // Ordre optimisé
  }]
}
```

**Cas d'usage Duret**:
- 🚗 Optimiser tournée technicien (5-10 chantiers/jour)
- ⏱️ Estimer temps trajet pour devis déplacement
- 📅 Planification hebdomadaire optimale

### 4. Distance Matrix API
**URL**: `https://maps.googleapis.com/maps/api/distancematrix/json`

**Fonctionnalité**: Calcul distances/durées entre N origines × M destinations

**Exemple requête**:
```
GET https://maps.googleapis.com/maps/api/distancematrix/json
  ?origins=Paris|Lyon|Marseille
  &destinations=Bordeaux|Toulouse|Nantes
  &key=YOUR_API_KEY
```

**Réponse**: Matrice 3×3 avec distances et durées

**Cas d'usage Duret**:
- 📍 Affecter chantier au technicien le plus proche
- 💰 Calculer frais déplacement automatiques
- 📊 Analyser couverture géographique

### 5. Places API
**URL**: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json`

**Fonctionnalité**: Recherche lieux, autocomplétion adresses

**Cas d'usage Duret**:
- 🔍 Autocomplétion adresse client (formulaire CRM)
- 🏢 Validation adresse avant création fiche

### 6. Static Maps API
**URL**: `https://maps.googleapis.com/maps/api/staticmap`

**Fonctionnalité**: Génération image carte statique (sans JavaScript)

**Exemple**:
```
GET https://maps.googleapis.com/maps/api/staticmap
  ?center=48.8566,2.3522
  &zoom=13
  &size=600x400
  &markers=color:red|48.8566,2.3522
  &key=YOUR_API_KEY
```

**Cas d'usage Duret**:
- 📄 Carte mini sur devis PDF (localisation chantier)
- 📧 Email confirmation RDV avec plan accès

## Authentification

### API Key (Recommandé PME)

**Setup Simple**:
1. Créer projet Google Cloud Console
2. Activer APIs Maps nécessaires
3. Générer API Key
4. (Optionnel) Restreindre par IP / domaine

**Restrictions recommandées**:
```
- Application restrictions:
  → HTTP referrers: *.duret-electricite.fr/*
  → IP addresses: 203.0.113.0/24

- API restrictions:
  → Geocoding API
  → Directions API
  → Distance Matrix API
  → Maps JavaScript API
```

### Sécurisation

⚠️ **Ne JAMAIS exposer API Key côté client** pour Directions/Geocoding
- ✅ Appels via backend Odoo (serveur Python)
- ❌ Appels JavaScript frontend (key volable)

**Architecture recommandée**:
```
Frontend Odoo → Backend Odoo (Python) → Google Maps API
                  (avec API Key)
```

## Pricing (2025)

### Tarif par Requête

| API | Prix / 1000 | Gratuit / mois |
|-----|-------------|----------------|
| **Geocoding** | 5$ | 40 000 req |
| **Directions** | 5$ | 10 000 req |
| **Distance Matrix** | 5$ | 10 000 req |
| **Maps JavaScript** | 7$ | 28 000 loads |
| **Places** | 17$ | 0 (0$ jusqu'à seuil) |
| **Static Maps** | 2$ | 28 000 req |

**Crédit mensuel gratuit**: **200$** offerts par Google

### Estimation Coûts Duret

**Hypothèses**:
- 50 chantiers actifs simultanément
- 100 nouveaux clients/mois (géocodage)
- 15 techniciens × 10 tournées optimisées/mois (Directions)

**Calcul**:
```
Geocoding: 100 clients × 1 req = 100 req/mois
  → 0.50$ (gratuit)

Directions: 15 × 10 tournées × 1 req = 150 req/mois
  → 0.75$ (gratuit)

Maps JavaScript: 200 loads/jour × 22 jours = 4400 loads/mois
  → 30$ (après crédit gratuit)

Distance Matrix (optionnel): 500 req/mois
  → 2.50$ (gratuit)

TOTAL = ~35$/mois = **40€/mois**
```

✅ **Budget réaliste**: **50€/mois** (sécurité)

## Cas d'usage Détaillés

### 1. Géolocalisation Automatique Clients

**Workflow**:
```
1. Commercial crée fiche client (Odoo CRM)
2. Saisie adresse manuelle
3. Trigger Python → Geocoding API
4. Stockage lat/lng dans partner_latitude, partner_longitude
5. Affichage marker sur carte dans fiche client
```

**Code Odoo**:
```python
# models/res_partner.py

from odoo import models, fields, api
import requests

class ResPartner(models.Model):
    _inherit = 'res.partner'
    
    partner_latitude = fields.Float('Latitude', digits=(10, 7))
    partner_longitude = fields.Float('Longitude', digits=(10, 7))
    
    @api.model_create_multi
    def create(self, vals_list):
        partners = super().create(vals_list)
        partners.geocode_address()
        return partners
    
    def geocode_address(self):
        """Géolocalise l'adresse via Google Geocoding API"""
        google_api_key = self.env['ir.config_parameter'].sudo().get_param('google.maps.api_key')
        
        for partner in self:
            if not partner.street:
                continue
                
            address = f"{partner.street}, {partner.zip} {partner.city}, {partner.country_id.name}"
            
            url = "https://maps.googleapis.com/maps/api/geocode/json"
            params = {'address': address, 'key': google_api_key}
            
            response = requests.get(url, params=params)
            data = response.json()
            
            if data['status'] == 'OK' and data['results']:
                location = data['results'][0]['geometry']['location']
                partner.write({
                    'partner_latitude': location['lat'],
                    'partner_longitude': location['lng']
                })
```

### 2. Optimisation Tournée Technicien

**Workflow**:
```
1. Manager sélectionne 8 chantiers pour Marc (technicien)
2. Clic "Optimiser Tournée"
3. Odoo appelle Directions API (optimize:true)
4. Google retourne ordre optimal
5. Odoo réorganise planning Marc
6. Marc reçoit itinéraire sur app mobile
```

**ROI**:
- Temps trajet économisé: **~15-20%** / tournée
- Exemple: 3h trajet → 2.5h → **30 min/jour** économisées
- **10h/mois** × 15 techniciens × 50€/h = **7500€/mois**

### 3. Affectation Chantier au Plus Proche

**Workflow**:
```
1. Nouveau chantier urgent
2. Odoo calcule distance chantier ↔ chaque technicien libre (Distance Matrix)
3. Affecte automatiquement au plus proche
4. Notif SMS technicien
```

## Intégration Odoo

### Module Recommandé

**Odoo App Store**: "Google Maps Integration"
- Module officiel disponible
- Géocodage automatique
- Carte dans vue formulaire
- Calcul distances

**OU Développement Custom**:
```python
# Module: duret_google_maps

class GoogleMapsAPI(models.AbstractModel):
    _name = 'duret.google.maps.api'
    
    def _get_api_key(self):
        return self.env['ir.config_parameter'].sudo().get_param('google.maps.api_key')
    
    def geocode(self, address):
        """Géocode une adresse"""
        ...
    
    def get_directions(self, origin, destination, waypoints=None):
        """Calcule itinéraire optimisé"""
        ...
    
    def calculate_distance_matrix(self, origins, destinations):
        """Calcule matrice distances"""
        ...
```

## Limitations & Best Practices

### Rate Limits
- **Aucune limite stricte** (paiement au volume)
- Mais recommandation Google: < 50 req/seconde

### Cache Recommandé
```python
# Cache coordonnées client (éviter géocodage répété)
if not partner.partner_latitude:
    partner.geocode_address()  # 1 seule fois
else:
    # Utiliser coordonnées existantes
    pass
```

### Gestion Erreurs
```python
response = requests.get(url, params=params, timeout=5)

if response.status_code == 200:
    data = response.json()
    
    if data['status'] == 'OK':
        # Succès
    elif data['status'] == 'ZERO_RESULTS':
        # Adresse introuvable
    elif data['status'] == 'OVER_QUERY_LIMIT':
        # Quota dépassé → retry + 1h
    else:
        # Autre erreur
```

## Planning d'Implémentation

### Phase 1: Géocodage Clients (Semaine 1-2)
- [ ] Setup Google Cloud Project
- [ ] Activer Geocoding API
- [ ] Module Odoo géocodage auto
- [ ] Migration clients existants (batch)

### Phase 2: Carte Dashboard (Semaine 3)
- [ ] Activer Maps JavaScript API
- [ ] Vue Odoo "Carte Chantiers"
- [ ] Markers colorés par statut

### Phase 3: Optimisation Tournées (Semaine 4-6)
- [ ] Activer Directions API
- [ ] Fonction "Optimiser Planning"
- [ ] Tests avec techniciens pilotes

## ROI Estimé

| Gain | Valeur annuelle |
|------|-----------------|
| **Temps trajet économisé** | 20K€ |
| **Affectation optimale** | 10K€ |
| **Satisfaction client** (ponctualité) | Qualitatif |
| **TOTAL** | **30K€/an** |

**Coût**: 600€/an (50€ × 12 mois)  
**Investissement dev**: 8K€ (one-time)

**Payback**: 8K€ / 30K€ = **3-4 mois**

## Recommandations

### ✅ GO Phase 2
- ROI excellent
- Implémentation simple (APIs standard)
- Déjà module Odoo existant

### Prioriser
1. **Géocodage** (base pour tout le reste)
2. **Carte Dashboard** (visibilité)
3. **Optimisation Tournées** (ROI max)

---
*Dernière mise à jour: Novembre 2025*
