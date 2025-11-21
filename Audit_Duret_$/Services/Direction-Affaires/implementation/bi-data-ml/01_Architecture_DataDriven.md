# 📊 ARCHITECTURE DATA-DRIVEN - Direction & Gestion Affaires

> Business Intelligence & Analytics
> Dashboards temps réel + KPIs direction

---

## 🎯 Objectifs Data

### De l'aveuglement → Visibilité Temps Réel

**Situation Actuelle**
- ❌ Direction aveugle (3h pour compiler un chiffre)
- ❌ Pas de dashboards
- ❌ Pas de KPIs temps réel
- ❌ Données dispersées (Sage + Word + Excel perso)
- ❌ Aucune prédiction

**Cible**
- ✅ Dashboards temps réel (< 2s)
- ✅ 12 KPIs direction automatiques
- ✅ Visibilité affaires 360°
- ✅ Prédictions rentabilité (ML optionnel)
- ✅ Alertes intelligentes

---

## 🏗️ Architecture Data Globale

```
┌──────────────────────────────────────────────────────┐
│                  SOURCES DE DONNÉES                   │
├────────────┬──────────┬────────────┬─────────────────┤
│ Odoo ERP   │ PPSPS    │ Templates  │ Logs            │
│ (Affaires) │ Générés  │ Devis      │ Utilisateurs    │
└──────┬─────┴────┬─────┴──────┬─────┴─────────┬───────┘
       │          │            │               │
       └──────────┴────────────┴───────────────┘
                  │
     ┌────────────▼──────────────┐
     │    POSTGRESQL (Odoo DB)   │
     │  (Single source of truth) │
     └────────────┬──────────────┘
                  │
       ┌──────────┼──────────┐
       │          │          │
       ▼          ▼          ▼
  ┌────────┐ ┌────────┐ ┌────────┐
  │Dashbrd │ │ KPIs   │ │Alertes │
  │  Web   │ │ Auto   │ │ Temps  │
  │        │ │        │ │  Réel  │
  └────────┘ └────────┘ └────────┘
```

---

## 📥 Sources de Données

### Odoo ERP (Source Principale)

**Affaires**
```sql
affaires:
  - numero, nom
  - client_id
  - date_debut, date_fin
  - budget_total
  - budget_depense
  - avancement (%)
  - statut (devis, en_cours, termine)
  - ra_responsable_id
```

**Devis**
```sql
devis:
  - numero, date_creation
  - affaire_id, client_id
  - montant_total
  - nb_lignes
  - statut (brouillon, envoye, accepte, refuse)
  - template_utilise
  - temps_creation (secondes)
```

**PPSPS**
```sql
ppsps:
  - numero, version
  - affaire_id
  - date_creation
  - statut (brouillon, en_relecture, valide, envoye)
  - template_utilise
  - temps_generation (secondes)
  - nb_pages
  - valideur_be_id
  - date_validation
```

**Reliquats**
```sql
reliquats:
  - id, affaire_id
  - montant
  - date_identification
  - statut (identifie, en_cours, facture, perdu)
  - date_facturation
```

---

## 📊 Couche Analytics

### KPIs Direction (12 KPIs Temps Réel)

#### 1. Vue Globale
```
┌───────────────────────────────────────┐
│ Nombre Affaires Actives               │
│ • En cours: 18                        │
│ • En devis: 12                        │
│ • Terminées mois: 8                   │
└───────────────────────────────────────┘

┌───────────────────────────────────────┐
│ CA Prévisionnel                       │
│ • Devis envoyés: 850K€                │
│ • Affaires en cours: 3.2M€            │
│ • Objectif mois: 1.5M€ (68%)          │
└───────────────────────────────────────┘
```

#### 2. Performance Affaires
```
┌───────────────────────────────────────┐
│ Budget vs Dépensé                     │
│ • Budget total: 3.5M€                 │
│ • Dépensé: 2.1M€ (60%)                │
│ • Reste: 1.4M€                        │
└───────────────────────────────────────┘

┌───────────────────────────────────────┐
│ Rentabilité Moyenne                   │
│ • Marge moyenne: 18.5%                │
│ • Top affaire: 25.3%                  │
│ • Bottom affaire: 8.2%                │
└───────────────────────────────────────┘
```

#### 3. Devis & PPSPS
```
┌───────────────────────────────────────┐
│ Devis en Cours                        │
│ • En rédaction: 8                     │
│ • Envoyés attente: 12                 │
│ • Taux transformation: 65%            │
│ • Temps moyen: 32 min ✅              │
└───────────────────────────────────────┘

┌───────────────────────────────────────┐
│ PPSPS Pipeline                        │
│ • À générer: 5                        │
│ • En validation BE: 3                 │
│ • Validés ce mois: 12                 │
│ • Temps moyen: 28 min ✅              │
└───────────────────────────────────────┘
```

#### 4. Reliquats
```
┌───────────────────────────────────────┐
│ Reliquats en Cours                    │
│ • Nombre: 28                          │
│ • Montant total: 145K€                │
│ • À facturer: 89K€                    │
│ • Ancienneté moyenne: 45j             │
└───────────────────────────────────────┘
```

#### 5. Performance RA
```
┌───────────────────────────────────────┐
│ Activité par RA                       │
│ • Laurent: 6 affaires (3.2)           │
│ • RA2: 5 affaires (2.8)               │
│ • RA3: 4 affaires (2.1)               │
│ • RA4: 3 affaires (1.9)               │
│   (Note: affaires + devis en cours)   │
└───────────────────────────────────────┘
```

#### 6. Alertes & Actions
```
┌───────────────────────────────────────┐
│ Alertes Importantes                   │
│ 🔴 3 reliquats > 90j non facturés     │
│ 🟠 5 devis attente > 10j sans réponse │
│ 🟠 2 PPSPS attente validation BE > 5j │
│ 🟢 Budget affaires sous contrôle      │
└───────────────────────────────────────┘
```

---

## 📈 Dashboards

### 1. Dashboard Direction (Marie)

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│ 🎯 DIRECTION - Vue Globale                          │
├──────────────────┬──────────────────┬───────────────┤
│ Affaires Actives │ CA Prévisionnel  │ Budget vs Réel│
│      18          │    3.2M€         │   60% utilisé │
├──────────────────┴──────────────────┴───────────────┤
│                                                      │
│ 📊 Graphique: CA par mois (12 derniers mois)        │
│                                                      │
├──────────────────────────────────────────────────────┤
│ 📋 Top 10 Affaires Actives (Budget, Avancement, RA) │
│                                                      │
├────────────────────────┬─────────────────────────────┤
│ 📈 Taux Transfo Devis  │ 🔴 Alertes (3 critiques)    │
│     65% (tendance ↗)   │                             │
└────────────────────────┴─────────────────────────────┘
```

**Filtres:**
- Période (mois, trimestre, année)
- RA responsable
- Type affaire (neuf, rénovation, tertiaire, industriel)
- Statut (devis, en cours, terminé)

**Exports:**
- PDF rapport hebdomadaire (auto email lundi 8h)
- Excel données brutes
- Graphiques PNG

### 2. Dashboard RA (Laurent)

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│ 👤 LAURENT - Mes Affaires                           │
├──────────────────┬──────────────────┬───────────────┤
│ Mes Affaires     │ Mes Devis        │ Mes PPSPS     │
│      6           │      8           │      5        │
├──────────────────┴──────────────────┴───────────────┤
│                                                      │
│ 📋 Liste Mes Affaires Actives (Budget, Avancement)  │
│                                                      │
├──────────────────────────────────────────────────────┤
│ ⏰ Mes Tâches Urgentes                               │
│ • 2 devis à finaliser                                │
│ • 1 PPSPS à générer                                  │
│ • 3 reliquats à relancer                             │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### 3. Dashboard BE (Thomas)

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│ 📝 BUREAU ÉTUDES - Validations PPSPS                │
├──────────────────┬──────────────────────────────────┤
│ À Valider (3)    │ Temps Moyen Validation: 18 min   │
├──────────────────┴──────────────────────────────────┤
│                                                      │
│ 📋 Liste PPSPS en Attente Validation                │
│                                                      │
├──────────────────────────────────────────────────────┤
│ 📈 Historique Validations (20 derniers)             │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## 🔔 Alertes Intelligentes

### Règles Automatiques

**Reliquats**
```
SI reliquat.age > 90 jours
ET reliquat.statut = 'identifie'
ALORS email_alerte(RA responsable, Direction)
```

**Devis Sans Réponse**
```
SI devis.statut = 'envoye'
ET devis.age > 10 jours
ALORS notification(RA responsable)
```

**PPSPS en Attente**
```
SI ppsps.statut = 'en_relecture'
ET ppsps.age > 5 jours
ALORS notification(Thomas BE)
```

**Budget Affaire Dépassé**
```
SI affaire.depense > affaire.budget * 1.1
ALORS email_alerte(RA, Direction)
```

---

## 🤖 Machine Learning (Optionnel Phase Avancée)

### Cas d'Usage ML

#### 1. Prédiction Rentabilité Devis
**Objectif:** Prédire marge finale affaire à partir devis initial

**Features:**
- Type affaire (neuf, rénovation, tertiaire, industriel)
- Budget devis
- Nombre lignes
- Client (historique)
- RA responsable (historique performance)
- Région géographique

**Modèle:** Régression (Random Forest / XGBoost)

**Output:** Marge prédite ± marge erreur

**Usage:**
- Aide décision acceptance devis
- Pricing optimization
- Identification affaires risquées

#### 2. Optimisation Pricing Devis
**Objectif:** Suggérer prix optimal par ligne devis

**Features:**
- Historique prix similaires acceptés/refusés
- Type client
- Concurrence région
- Quantités
- Délais

**Modèle:** Régression + Classification

**Output:** Fourchette prix optimale (min, optimal, max)

#### 3. Détection Anomalies Budgets
**Objectif:** Détecter affaires avec dérive budget

**Features:**
- Avancement vs budget dépensé
- Historique affaires similaires
- Écart budget prévisionnel
- Fréquence commandes matériel

**Modèle:** Isolation Forest (anomaly detection)

**Output:** Score anomalie + alerte si > seuil

---

## 🛠️ Stack Technique

### Backend Data
- **Base de données:** PostgreSQL (Odoo intégré)
- **ETL:** Python scripts (cron jobs)
- **Cache:** Redis (dashboard queries)
- **Queue:** Celery (rapports asynchrones)

### Frontend BI
- **Dashboards:** Odoo Studio (native) ou Metabase (externe)
- **Graphiques:** Chart.js / Plotly
- **Exports:** ReportLab (PDF), openpyxl (Excel)

### ML (Optionnel)
- **Framework:** Scikit-learn / XGBoost
- **Notebooks:** Jupyter (exploration)
- **Serving:** FastAPI (API ML)
- **Monitoring:** MLflow (tracking models)

---

## 📋 Métriques Clés Suivies

### Performance Système
- Temps réponse dashboard < 2s
- Données à jour < 1h
- Disponibilité dashboards > 99.5%

### Adoption Utilisateurs
- Direction consulte dashboard quotidiennement
- RA consultent hebdomadairement minimum
- Taux utilisation exports rapports > 80%

### Qualité Données
- Complétude affaires > 95%
- Cohérence budgets > 98%
- Données temps réel < 1h

---

## 🚀 Roadmap Data

### Phase 1 (M5-M6) - Dashboards Essentiels
- ✅ 3 dashboards (Direction, RA, BE)
- ✅ 12 KPIs temps réel
- ✅ Rapports automatiques hebdomadaires
- ✅ Alertes basiques

### Phase 2 (M7-M9) - Analytics Avancés (Optionnel)
- ✅ Historique 24 mois
- ✅ Prédictions tendances
- ✅ Comparaisons inter-périodes
- ✅ Drill-down affaires détaillé

### Phase 3 (M10-M12) - ML (Optionnel)
- ✅ Modèle prédiction rentabilité
- ✅ Optimisation pricing
- ✅ Détection anomalies budgets
- ✅ Recommandations IA

---

## ⚠️ CE DOCUMENT

Architecture Data/ML adaptée à Direction-Affaires:
- ✅ Dashboards temps réel (vs 3h compilation actuelle)
- ✅ KPIs automatiques (vs aucun actuellement)
- ✅ Alertes intelligentes (vs aucune traçabilité)
- ✅ ML optionnel phase avancée (pas prioritaire Phase 1-3)

Focus Phase 1 (M5-M6): Dashboards + KPIs essentiels
ML = Phase ultérieure optionnelle si budget/besoin

---

**Dernière mise à jour:** 2025-11-17
**Périmètre:** Direction & Gestion Affaires - BI & Analytics
