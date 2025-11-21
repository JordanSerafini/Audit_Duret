# Étude API Météo France - 2025

## Vue d'ensemble

Pour une entreprise de BTP/Électricité comme Duret, les conditions météorologiques impactent directement la **planification** et la **rentabilité** des chantiers extérieurs (Éclairage public, Réseaux, Bornes de recharge externes).

L'intégration de l'API Météo France dans Odoo permet d'anticiper les intempéries, d'adapter les plannings automatiquement et de justifier les retards auprès des clients (jours d'intempéries).

## Informations sur l'API

- **Fournisseur**: Météo France (Service Public)
- **Portail**: https://portail-api.meteofrance.fr/
- **Type**: REST API
- **Authentification**: OAuth 2.0 / API Key
- **Coût**: Gratuit (Open Data) pour l'essentiel des données.

## Endpoints Pertinents

### 1. Prévisions Quotidiennes (Vigilance & Planification)
**API**: `AROME` ou `ARPEGE` (Modèles haute résolution)

Permet de savoir si on peut travailler demain ou dans 3 jours.

**Données clés**:
- Précipitations (Pluie/Neige)
- Vent (Rafales > 50km/h = Danger nacelle)
- Température (Gel = Pas de béton/tranchée)
- Orages (Sécurité électrique)

### 2. Climatologie (Justification Intempéries)
**API**: `Climathèque`

Permet de récupérer les données *passées* pour justifier un retard contractuel ou une demande de chômage intempéries.

## Cas d'usage Duret (Logique Métier)

### 1. Sécurité & Planification Nacelle (Vent)

**Logique Métier**:
- L'utilisation de nacelles (éclairage public) est interdite si vent > 45-50 km/h.
- Si une équipe part et doit rentrer à cause du vent = 1/2 journée perdue (300€).

**Intégration Odoo**:
- Chaque soir à 17h, script Python vérifie la météo des chantiers "Extérieurs" du lendemain.
- Si Rafales > 45 km/h :
    - ⚠️ **Alerte** envoyée au Conducteur de Travaux.
    - Suggestion : "Basculer l'équipe Albertville sur Chantier Intérieur B".

### 2. Optimisation Tranchées & Réseaux (Pluie/Gel)

**Logique Métier**:
- Fortes pluies = Tranchées inondées, danger éboulement.
- Gel fort = Impossibilité de tirer des câbles (gaines cassantes) ou de faire du génie civil.

**Intégration Odoo**:
- Indicateur "Météo Compatible" sur la vue Planning Odoo.
- Icône 🌧️ ou ❄️ sur les tâches concernées.

### 3. Justification Retards (Contractuel)

**Logique Métier**:
- Les pénalités de retard ne s'appliquent pas en cas d'intempéries reconnues.
- Il faut fournir un relevé météo officiel.

**Intégration Odoo**:
- Bouton "Générer Rapport Intempéries" sur le projet.
- Odoo interroge l'API historique pour la période et le lieu.
- Génère un PDF : "Relevé Météo France - Semaine 42 - Pluie > 10mm".

## Implémentation Technique

### Script de Récupération (Python)

```python
import requests

def check_weather_alert(lat, lon, date_check):
    token = "VOTRE_TOKEN_METEO_FRANCE"
    url = "https://public-api.meteofrance.fr/public/DPM/v1/forecast/daily"
    
    params = {
        "lat": lat,
        "lon": lon,
        "dt": date_check
    }
    
    headers = {"Authorization": f"Bearer {token}"}
    response = requests.get(url, params=params, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        # Analyse des seuils métiers
        wind_speed = data['wind']['max_speed'] # en km/h
        rain_mm = data['rain']['24h']
        
        alerts = []
        if wind_speed > 45:
            alerts.append("VENT_FORT_NACELLE_INTERDITE")
        if rain_mm > 10:
            alerts.append("PLUIE_FORTE_TERRASSEMENT_DIFFICILE")
            
        return alerts
    return []
```

### Module Odoo `duret_weather`

1. **Modèle `project.task`**:
   - Champ `is_outdoor` (Booléen).
   - Champ `weather_alert` (Selection).
   
2. **Vue Planning**:
   - Coloration rouge des tâches si alerte météo.

3. **Cron Job**:
   - Tourne tous les matins à 06h00 et soirs à 17h00.

## Impact Opérationnel

### Bénéfices
1. **Prévention**:
   - Anticipation des conditions météo défavorables pour adapter les plannings.
   - Réduction des risques de sécurité (nacelles, travaux en hauteur).
2. **Gestion Contractuelle**:
   - Justification objective des retards dus aux intempéries.
   - Documentation automatisée pour les demandes de chômage intempéries.

### Coût
- **API**: Gratuit (Open Data).
- **Dev**: 2-3 jours (~2000€).

## Usage pour l'IA Prédictive

### 📊 Source de donnée critique pour l'algorithme de planification dynamique (Vague 3)

L'API Météo n'est pas qu'un outil de consultation - elle devient la **source de données d'entraînement** pour le futur algorithme d'optimisation des plannings.

**Stockage Data Lake** : Toutes les données météo doivent être archivées dans le Data Lake Odoo pour :
- **Corréler retards et intempéries** : Analyser les patterns historiques pour calibrer l'algorithme prédictif
- **Machine Learning sur 5 ans de données** : Prédire les périodes optimales par type de chantier (ex: "Éviter les tranchées en février")
- **Optimisation automatique** : L'algorithme ajustera automatiquement les plannings en fonction des prévisions à 10 jours

**Intégration IA** : Les données météo alimenteront l'Assistant de Planification Intelligente qui proposera les meilleurs créneaux pour maximiser la productivité.

---

## Recommandation
**GO Phase 2**. À intégrer après la géolocalisation des chantiers (Google Maps), car on a besoin des coordonnées GPS précises pour la météo locale.
