# 📊 ARCHITECTURE DATA-DRIVEN - Analytics & ML

> Exploitation des données chantiers pour pilotage intelligent

---

## 🎯 Vision Data-Driven

**Objectif :** Transformer les données chantiers (photos, rapports, incidents, temps) en insights actionnables pour :
- Prédire retards et dépassements budgets
- Optimiser affectation équipes
- Améliorer productivité chefs chantier
- Fournir KPIs temps réel direction

---

## 📐 Architecture Globale

```
┌──────────────────────────────────────────────────────────┐
│                  SOURCES DE DONNÉES                       │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ ┌─────────────┐  ┌─────────────┐  ┌──────────────┐      │
│ │   APP       │  │    WEB      │  │     ERP      │      │
│ │   MOBILE    │  │  DASHBOARD  │  │   EXISTANT   │      │
│ └──────┬──────┘  └──────┬──────┘  └──────┬───────┘      │
│        │                 │                 │              │
│        └─────────────────┴─────────────────┘              │
│                          │                                │
└──────────────────────────┼────────────────────────────────┘
                           │
              ┌────────────▼────────────┐
              │   DATA COLLECTION       │
              │   • API Events          │
              │   • Webhooks            │
              │   • ETL Batch           │
              └────────────┬────────────┘
                           │
              ┌────────────▼────────────┐
              │     DATA LAKE           │
              │   • Raw Data            │
              │   • PostgreSQL          │
              │   • ClickHouse          │
              │   • S3 Storage          │
              └────────────┬────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
    ┌────▼────┐    ┌───────▼──────┐   ┌────▼─────┐
    │   ETL   │    │  ML MODELS   │   │   BI     │
    │Transform│    │  Training    │   │Analytics │
    └────┬────┘    └───────┬──────┘   └────┬─────┘
         │                 │                 │
         └─────────────────┴─────────────────┘
                           │
              ┌────────────▼────────────┐
              │   DATA WAREHOUSE        │
              │   • Aggregated Data     │
              │   • KPIs                │
              │   • Predictions         │
              └────────────┬────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
    ┌────▼────┐    ┌───────▼──────┐   ┌────▼─────┐
    │Dashboard│    │   Alertes    │   │  API     │
    │Direction│    │  Proactives  │   │Consumers │
    └─────────┘    └──────────────┘   └──────────┘
```

---

## 📊 KPIs & Métriques

### 15 KPIs Temps Réel

#### 1. Chantiers (5 KPIs)

```yaml
KPI_1: Nombre Chantiers Actifs
  - Valeur actuelle
  - Evolution vs mois précédent
  - Répartition par taille (petit/moyen/gros)

KPI_2: Budget Global vs Réalisé
  - Total budgets tous chantiers
  - Total dépensé
  - % d'avancement global
  - Chantiers en dépassement

KPI_3: Planning vs Réel
  - Chantiers en avance
  - Chantiers en retard
  - Retard moyen (jours)

KPI_4: Taux Incidents par Chantier
  - Nombre incidents/chantier
  - Gravité moyenne
  - Temps résolution moyen

KPI_5: Satisfaction Client par Chantier
  - Note moyenne satisfaction
  - Evolution
  - Chantiers à risque
```

#### 2. Équipes (3 KPIs)

```yaml
KPI_6: Productivité Chefs Chantier
  - Rapports générés/jour
  - Temps moyen/rapport
  - Evolution

KPI_7: Charge Travail Bureau Études
  - Nombre demandes en file
  - Temps résolution moyen
  - SLA respecté (%)

KPI_8: Taux Utilisation Équipes
  - Heures facturables vs totales
  - Par chef
  - Par équipe
```

#### 3. Opérations (4 KPIs)

```yaml
KPI_9: Volume Photos/Jour
  - Total photos uploadées
  - Par chantier
  - Storage utilisé

KPI_10: Taux Incidents Tracés
  - % incidents enregistrés système
  - vs estimation total (baseline)

KPI_11: Temps Réponse Moyen
  - Incidents techniques
  - Demandes matériel
  - Questions BE

KPI_12: Taux Adoption App Mobile
  - % chefs utilisant quotidiennement
  - Fonctions les plus utilisées
  - Fonctions sous-utilisées
```

#### 4. Financier (3 KPIs)

```yaml
KPI_13: Coûts Évités (ROI)
  - Temps rapports économisé
  - Litiges évités
  - Reprises travaux évitées

KPI_14: Dépassements Budgets Détectés
  - Nombre chantiers en dépassement
  - Montant total dépassements
  - Alertes proactives envoyées

KPI_15: Économies Optimisation
  - Déplacements optimisés
  - Matériel mieux suivi
  - Heures mieux affectées
```

---

## 🤖 Modèles Machine Learning

### Modèle #1 : Prédiction Retards Chantiers

**Objectif :** Prédire probabilité retard chantier 7-30j à l'avance

**Algorithme :** Gradient Boosting (XGBoost)

**Features (20 variables) :**
```python
Features:
  - budget_total
  - budget_consommé_pct
  - jours_écoulés / jours_prévus
  - nombre_incidents_total
  - nombre_incidents_critiques
  - temps_moyen_résolution_incidents
  - nombre_photos_uploaded (indicateur activité)
  - météo_7j_prévision (pluie/neige)
  - taille_équipe
  - expérience_chef_chantier (années)
  - nombre_modifications_plans
  - délai_moyen_réponse_BE
  - taux_présence_équipe (absences)
  - complexité_chantier (1-5)
  - historique_chantiers_similaires (retards passés)
  - saison (hiver/été)
  - jour_semaine
  - région_géographique
  - nombre_sous_traitants
  - budget_matériel_vs_prévu
```

**Target :** Retard (0/1) ou Jours de retard (régression)

**Output :**
- **Probabilité retard** : 0-100%
- **Retard estimé** : +X jours
- **Facteurs principaux** : Top 3 causes probables

**Actions automatiques :**
- Si probabilité > 70% → Alerte responsable affaire
- Si retard estimé > 10j → Alerte direction
- Suggestions correctives automatiques

**Métriques Performance :**
- Précision : 85%
- Rappel : 80%
- F1-score : 82%

---

### Modèle #2 : Optimisation Planning Équipes

**Objectif :** Suggérer affectation optimale équipes aux chantiers

**Algorithme :** Genetic Algorithm + Constraint Programming

**Contraintes :**
```python
Contraintes:
  - Compétences requises vs disponibles
  - Distance domicile-chantier (< 1h si possible)
  - Charge travail équilibrée
  - Continuité chef chantier (éviter changements)
  - Disponibilité outils/véhicules
  - Préférences chefs (si possibles)
```

**Objectif Optimisation :**
```python
Minimize:
  - Total km déplacements (coût + temps)
  - Surcharge équipes (équilibrage)
  - Nombre changements vs planning actuel

Maximize:
  - Compétences matchées
  - Satisfaction chefs (préférences)
  - Continuité équipes
```

**Output :**
- **Planning optimisé** : Affectations suggérées
- **Économies estimées** : -X km, -Y heures déplacement
- **Score optimisation** : 0-100

**Gains attendus :**
- -15% km déplacements = 8K€/an
- -10% temps déplacements = 20K€/an
- +10% satisfaction chefs

---

### Modèle #3 : Classification Automatique Incidents

**Objectif :** Classifier incidents automatiquement (type, gravité, urgence)

**Algorithme :** NLP (BERT fine-tuned) + Random Forest

**Inputs :**
```python
Inputs:
  - Texte description incident (NLP)
  - Photos incident (Computer Vision - optionnel Phase 3)
  - Chantier type
  - Historique incidents similaires
  - Heure/jour incident
```

**Outputs :**
```python
Classification:
  - Type: Sécurité / Technique / Matériel / Administratif
  - Gravité: Faible / Moyen / Élevé / Critique
  - Urgence: < 1h / < 4h / < 1j / < 3j
  - Routing: Bureau Études / Resp. Affaire / Direction
  - SLA suggéré: X heures
```

**Actions automatiques :**
- Routing vers bonne équipe
- SLA assigné automatiquement
- Priorisation file d'attente
- Alertes si gravité critique

**Métriques Performance :**
- Précision classification : 90%
- Temps classification : < 1s
- Satisfaction utilisateurs : 85%

---

## 📈 Dashboards & Visualisations

### Dashboard Direction (Executive)

**Fréquence Màj :** Temps réel (toutes les 5 min)

**KPIs Clés :**
```
┌────────────────────────────────────────────────────────┐
│          DASHBOARD DIRECTION - VUE GLOBALE             │
├────────────────────────────────────────────────────────┤
│                                                        │
│  Chantiers Actifs: 98          Budget Global: 12.5M€  │
│  En cours: 85 | Terminés: 13   Consommé: 8.2M€ (66%) │
│                                                        │
│  ┌─────────────────────────────────────────────────┐  │
│  │ Budget vs Réalisé (Graphique Ligne)            │  │
│  │ [Courbe temps réel consommation]                │  │
│  └─────────────────────────────────────────────────┘  │
│                                                        │
│  Incidents: 15 ouverts          Équipes: 12/15 actives│
│  Critiques: 2 | Moyens: 8       Utilisation: 93%      │
│                                                        │
│  ┌──────────────────┬───────────────────────────────┐ │
│  │ Chantiers Retard │  Chantiers Dépassement Budget│ │
│  │ • Lyon Tertiaire │  • Annecy Résidentiel        │ │
│  │   +5j (70% prob.)│    +15K€ (alerte envoyée)    │ │
│  │ • Grenoble Indus │  • Chambéry Commercial       │ │
│  │   +3j (85% prob.)│    +8K€ (en surveillance)    │ │
│  └──────────────────┴───────────────────────────────┘ │
│                                                        │
│  ROI Digital: +67K€/an    Satisfaction Équipes: 8.5/10│
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Filtres :**
- Par période (jour/semaine/mois/année)
- Par responsable affaire
- Par région
- Par type chantier

---

### Dashboard Responsable Affaire (Opérationnel)

**Fréquence Màj :** Temps réel

**Vues Disponibles :**

1. **Vue 360° Chantier**
```
┌────────────────────────────────────────────────────┐
│   CHANTIER: Lyon Tertiaire - Tour Oxygène          │
├────────────────────────────────────────────────────┤
│                                                    │
│ Budget: 850K€     Consommé: 620K€ (73%)           │
│ Durée: 180j       Écoulé: 145j (80%)              │
│                                                    │
│ ⚠️ ALERTE: Retard prédit +5j (probabilité 70%)   │
│ Facteurs: Incidents techniques (3), Météo         │
│                                                    │
│ Équipe: Marc (chef) + 4 ouvriers                  │
│ Incidents ouverts: 2 (1 moyen, 1 faible)          │
│ Photos: 1 250 | Rapports: 45                      │
│                                                    │
│ Timeline Récente:                                  │
│ • [2h ago] Incident technique résolu              │
│ • [5h ago] Rapport intervention envoyé client     │
│ • [1j ago] Photos avancement uploaded             │
│                                                    │
│ Actions Suggérées (IA):                            │
│ • Renforcer équipe +1 ouvrier (réduire retard)    │
│ • Contacter BE pour incident mur porteur           │
│ • Planifier réunion client (point avancement)     │
└────────────────────────────────────────────────────┘
```

2. **Liste Tous Chantiers (Tableau)**
- Colonnes : Nom, Budget, Avancement %, Retard prédit, Incidents, Actions
- Tri : Par retard, budget, urgence
- Filtres : Statut, risque, équipe

---

### Dashboard Bureau Études (Opérationnel)

**Fréquence Màj :** Temps réel

**Vue Principale : File Incidents**
```
┌────────────────────────────────────────────────────┐
│     FILE INCIDENTS BUREAU ÉTUDES                   │
├────────────────────────────────────────────────────┤
│                                                    │
│ En attente: 8 | En cours: 3 | Résolus aujourd'hui: 12│
│                                                    │
│ ┌───────────────────────────────────────────────┐ │
│ │ INCIDENT #245 | 🔴 URGENT | SLA: 45min restant│ │
│ │ Chantier: Lyon Tertiaire                      │ │
│ │ Type: Technique - Problème câblage            │ │
│ │ Chef: Marc | Créé il y a: 1h15                │ │
│ │ [Voir détails] [Prendre en charge]           │ │
│ └───────────────────────────────────────────────┘ │
│                                                    │
│ ┌───────────────────────────────────────────────┐ │
│ │ INCIDENT #244 | 🟠 NORMAL | SLA: 3h restant  │ │
│ │ Chantier: Annecy Résidentiel                  │ │
│ │ Type: Matériel - Besoin schéma électrique    │ │
│ │ Chef: Julie | Créé il y a: 45min              │ │
│ │ [Voir détails] [Prendre en charge]           │ │
│ └───────────────────────────────────────────────┘ │
│                                                    │
│ Statistiques Journée:                              │
│ • Temps résolution moyen: 1h20 (cible: < 2h) ✅  │
│ • Taux SLA respecté: 95% ✅                       │
│ • Satisfaction chefs: 9/10 ✅                     │
└────────────────────────────────────────────────────┘
```

---

## 🔧 Stack Technique Data

### Technologies Utilisées

```yaml
Data Collection:
  - Apache Kafka: Event streaming
  - Logstash: Log aggregation
  - Custom APIs: PostgreSQL → Data Lake

Data Storage:
  - PostgreSQL: Données opérationnelles
  - ClickHouse: Analytics (colonnes)
  - S3: Data Lake (raw + archives)

Data Processing:
  - Apache Spark: ETL batch
  - dbt: Transformations SQL
  - Apache Airflow: Orchestration

Machine Learning:
  - Python: scikit-learn, XGBoost
  - TensorFlow/PyTorch: NLP
  - MLflow: Tracking expériences
  - FastAPI: Serving modèles

Business Intelligence:
  - Power BI / Tableau / Grafana
  - Custom Dashboards (React)
  - Superset (open-source)

Monitoring:
  - Prometheus: Métriques
  - Grafana: Visualisation
  - ELK: Logs
```

---

## 📅 Roadmap Data & ML

### Phase 1 (M1-M6) : Fondations

```
M1-M3: Setup Infrastructure
  ✅ Data Lake (S3 + PostgreSQL)
  ✅ ETL basiques (API events → Storage)
  ✅ Dashboards basiques (KPIs temps réel)

M4-M6: Analytics Avancés
  ✅ Data Warehouse (ClickHouse)
  ✅ Dashboards direction complets
  ✅ Alertes automatiques (seuils)
```

### Phase 2 (M7-M9) : Machine Learning

```
M7-M8: Entraînement Modèles
  ✅ Collecte données historiques
  ✅ Feature engineering
  ✅ Modèle prédiction retards
  ✅ Modèle classification incidents

M9: Déploiement ML
  ✅ API serving modèles
  ✅ Intégration dashboards
  ✅ Tests précision
```

### Phase 3 (M10-M12) : Optimisation & IA

```
M10-M11: Features Avancées
  ✅ Modèle optimisation planning
  ✅ Suggestions IA proactives
  ✅ Computer Vision (photos) - optionnel

M12: Industrialisation
  ✅ Retraining automatique modèles
  ✅ A/B testing prédictions
  ✅ Documentation complète
```

---

## 💰 Coûts Data & ML

| Composante | Setup | Run/an |
|------------|-------|--------|
| **Infrastructure Data** | Inclus cloud | 3K€ |
| **Licences BI (Power BI)** | - | 2K€ |
| **ML Training (compute)** | 5K€ | 1K€ |
| **Data Engineer (externe)** | 15K€ | - |
| **TOTAL** | **20K€** | **6K€/an** |

---

## 🎯 Gains Attendus Data & ML

| Gain | Montant/an |
|------|------------|
| Prédiction retards → Évitement | 40K€ |
| Optimisation planning équipes | 20K€ |
| Détection dépassements budgets proactive | 30K€ |
| Amélioration productivité BE (classification auto) | 15K€ |
| **TOTAL GAINS** | **105K€/an** |

**ROI Data & ML :** (105K€ - 6K€) / 20K€ = **495% an 1** ✅

---

**🤖 Conclusion : Data & IA = Multiplicateur de valeur de la plateforme**
**📈 ROI additionnel : +105K€/an avec investissement 20K€**
