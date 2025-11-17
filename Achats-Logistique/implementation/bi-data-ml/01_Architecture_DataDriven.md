# 📊 ARCHITECTURE DATA-DRIVEN - Achats & Logistique

> Volet 2/2 : Business Intelligence & Machine Learning
> Architecture data & analytics

---

## 🎯 Objectifs Data

### De l'analyse réactive → Prédictive

**Situation Actuelle**
- ❌ Aucune visibilité temps réel
- ❌ Reporting manuel sur Excel
- ❌ Pas de KPIs
- ❌ Décisions "au feeling"
- ❌ Impossible de piloter

**Cible**
- ✅ Dashboards temps réel
- ✅ KPIs automatiques
- ✅ Prédictions ML
- ✅ Décisions data-driven
- ✅ Optimisation continue

---

## 🏗️ Architecture Data Globale

```
┌─────────────────────────────────────────────────────┐
│                  SOURCES DE DONNÉES                  │
├──────────────┬──────────────┬──────────────┬────────┤
│ Plateforme   │ Sage MDE     │ APIs         │ Logs   │
│ E-Procurement│ (Legacy)     │ Fournisseurs │ Système│
└──────┬───────┴──────┬───────┴──────┬───────┴───┬────┘
       │              │              │           │
       └──────────────┴──────────────┴───────────┘
                      │
         ┌────────────▼─────────────┐
         │       DATA LAKE          │
         │  (Stockage brut)         │
         └────────────┬─────────────┘
                      │
         ┌────────────▼─────────────┐
         │    DATA WAREHOUSE        │
         │  (Données structurées)   │
         └────────────┬─────────────┘
                      │
       ┌──────────────┼──────────────┐
       │              │              │
       ▼              ▼              ▼
  ┌────────┐    ┌─────────┐    ┌─────────┐
  │   BI   │    │   ML    │    │Alertes  │
  │Dashbrd │    │ Models  │    │ Temps   │
  │        │    │         │    │  Réel   │
  └────────┘    └─────────┘    └─────────┘
```

---

## 📥 Couche Ingestion

### Sources de Données

**Données Transactionnelles**
```
┌─────────────────────────────────┐
│ Commandes                        │
│ - Créations                      │
│ - Modifications                  │
│ - Validations                    │
│ - Statuts                        │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ Articles & Stock                 │
│ - Mouvements                     │
│ - Inventaires                    │
│ - Valorisation                   │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ Fournisseurs                     │
│ - Prix                           │
│ - Livraisons                     │
│ - Performance                    │
└─────────────────────────────────┘
```

**Données Événementielles**
```
┌─────────────────────────────────┐
│ Logs Utilisateurs                │
│ - Connexions                     │
│ - Actions                        │
│ - Erreurs                        │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ Événements Système               │
│ - Notifications envoyées         │
│ - Workflows exécutés             │
│ - APIs appelées                  │
└─────────────────────────────────┘
```

### Modes d'Ingestion

**Temps Réel (Streaming)**
- Commandes créées/modifiées
- Mouvements stock
- Alertes critiques
- → Apache Kafka / RabbitMQ

**Batch (Planifié)**
- Sync Sage MDE (quotidien)
- Import tarifs fournisseurs
- Consolidation journalière
- → ETL Python / Airflow

---

## 🗄️ Couche Stockage

### Data Lake (Brut)

**Objectif:** Tout conserver, rien ne se perd

```
/data-lake/
├── /raw/
│   ├── /sage-mde/           # Exports Sage
│   ├── /api-rexel/          # Données Rexel
│   ├── /api-sonepar/        # Données Sonepar
│   ├── /logs/               # Logs applicatifs
│   └── /events/             # Événements
│
├── /processed/
│   ├── /commandes/          # Commandes nettoyées
│   ├── /articles/           # Catalogue unifié
│   └── /mouvements/         # Stock consolidé
│
└── /archive/
    └── /YYYY/MM/            # Archives historiques
```

**Technologie:** S3 / Azure Blob / MinIO

### Data Warehouse (Structuré)

**Modèle Dimensionnel**

```
FAIT: Commandes
├── id_commande
├── date_commande
├── id_article (FK)
├── id_fournisseur (FK)
├── id_chantier (FK)
├── id_emetteur (FK)
├── quantite
├── prix_unitaire
├── montant_total
├── statut
└── delai_livraison

DIM: Articles
├── id_article
├── reference
├── designation
├── categorie
├── fournisseur_principal
└── prix_moyen

DIM: Fournisseurs
├── id_fournisseur
├── nom
├── categorie
├── delai_moyen
└── taux_service

DIM: Chantiers
├── id_chantier
├── nom
├── localisation
├── responsable
└── budget_materiel

DIM: Temps
├── date
├── jour_semaine
├── semaine
├── mois
├── trimestre
└── annee
```

**Technologie:** PostgreSQL / Snowflake / BigQuery

---

## 📊 Couche Analytics

### 1. Dashboards BI

**Dashboard Direction (Christine)**

```
┌─────────────────────────────────────────┐
│ KPIs Globaux                             │
├──────────────┬──────────────┬───────────┤
│ Nb Commandes │ Taux Service │ Budget    │
│    1,234     │    94.2%     │ 85% conso │
├──────────────┴──────────────┴───────────┤
│ Évolution Mensuelle                      │
│ [Graphique tendances]                    │
├──────────────────────────────────────────┤
│ Top 5 Fournisseurs                       │
│ 1. Rexel         45%                     │
│ 2. Sonepar       32%                     │
│ ...                                      │
├──────────────────────────────────────────┤
│ Alertes Actives                          │
│ 🔴 3 retards livraison                   │
│ 🟠 Stock bas sur 12 articles             │
└──────────────────────────────────────────┘
```

**Dashboard Achats (Sylvie)**

```
┌─────────────────────────────────────────┐
│ Commandes en Cours                       │
├──────────────────────────────────────────┤
│ En attente validation:  15               │
│ Passées fournisseur:    42               │
│ En cours livraison:     28               │
│ Reliquats:              8  🔴            │
├──────────────────────────────────────────┤
│ Performance Fournisseurs                 │
│ [Tableau comparatif]                     │
├──────────────────────────────────────────┤
│ Écarts Prix                              │
│ [Alertes écarts > 10%]                   │
└──────────────────────────────────────────┘
```

**Dashboard Chantier (Julien)**

```
┌─────────────────────────────────────────┐
│ Affaire: Rénovation Lycée               │
├──────────────────────────────────────────┤
│ Budget matériel:    150,000€            │
│ Consommé:          112,340€ (75%)       │
│ Reste:              37,660€             │
├──────────────────────────────────────────┤
│ Commandes par Catégorie                 │
│ [Graphique répartition]                 │
├──────────────────────────────────────────┤
│ Prévision Fin Chantier                   │
│ Estimé: 142,500€ (+/- 5%)  🟢           │
└──────────────────────────────────────────┘
```

### 2. Reporting Automatique

**Rapports Quotidiens**
- Commandes du jour
- Livraisons attendues
- Reliquats en cours
- Alertes stock

**Rapports Hebdomadaires**
- Performance fournisseurs
- Consommation par chantier
- Top produits commandés
- Écarts budgétaires

**Rapports Mensuels**
- Analyse complète achats
- Tendances & saisonnalité
- Benchmarks
- Recommandations

---

## 🤖 Couche Machine Learning

### Modèles Prédictifs

**1. Prévision Besoins**

```python
# Modèle: LSTM (Séries temporelles)
Input:
  - Historique commandes (24 mois)
  - Saisonnalité
  - Chantiers en cours
  - Météo (si pertinent)

Output:
  - Prévision besoins 30/60/90 jours
  - Par article
  - Par chantier

Bénéfice:
  - Anticipation achats groupés
  - Réduction délais
  - Optimisation stock
```

**2. Détection Anomalies Prix**

```python
# Modèle: Isolation Forest
Input:
  - Prix historiques par article
  - Prix fournisseurs concurrents
  - Variations marché

Output:
  - Alertes prix anormaux
  - Écarts > seuil
  - Opportunités négociation

Bénéfice:
  - Éviter surfacturation
  - Optimiser achats
```

**3. Scoring Fournisseurs**

```python
# Modèle: Random Forest
Input:
  - Taux livraison complète
  - Délais moyens
  - Qualité produits
  - Prix vs marché
  - Réactivité

Output:
  - Score global /100
  - Recommandation auto
  - Fournisseur optimal par besoin

Bénéfice:
  - Choix data-driven
  - Réduction erreurs
```

**4. Prédiction Ruptures Stock**

```python
# Modèle: Régression + Classification
Input:
  - Stock actuel
  - Consommation moyenne
  - Commandes en cours
  - Délai fournisseur

Output:
  - Probabilité rupture (%)
  - Date estimée rupture
  - Quantité recommandée

Bénéfice:
  - Prévention ruptures
  - Optimisation stock
```

**5. Classification Auto Articles**

```python
# Modèle: NLP (BERT/GPT)
Input:
  - Désignation article
  - Description fournisseur
  - Caractéristiques

Output:
  - Catégorie auto
  - Tags
  - Articles similaires

Bénéfice:
  - Nettoyage base
  - Recherche améliorée
```

### Pipeline ML

```
[Données] → [Nettoyage] → [Features] → [Entraînement]
                                            ↓
                                       [Validation]
                                            ↓
                                       [Déploiement]
                                            ↓
                                       [Monitoring]
                                            ↓
                                       [Ré-entraînement]
```

---

## 🔔 Couche Alertes & Actions

### Alertes Temps Réel

**Alertes Critiques (🔴)**
- Stock < seuil critique
- Retard livraison > 48h
- Prix anormal détecté
- Rupture prédite < 7j
- → Email + SMS immédiat

**Alertes Importantes (🟠)**
- Reliquat > 15j
- Écart budget > 10%
- Fournisseur score < 60%
- → Email quotidien

**Alertes Info (🟢)**
- Stock optimal atteint
- Commande livrée
- Validation en attente
- → Notification app

### Actions Automatiques

**Auto-Réapprovisionnement**
```
IF stock < seuil_min
  AND consommation_stable
  AND fournisseur_fiable
THEN
  Créer commande auto
  Soumettre validation
```

**Auto-Matching Factures**
```
IF facture reçue
  AND commande existe
  AND écart < 5%
THEN
  Valider auto
  Envoyer compta
ELSE
  Alerte gestionnaire
```

---

## 📈 KPIs & Métriques

### KPIs Achats

```
┌────────────────────────────┬─────────┬─────────┐
│ Indicateur                 │ Actuel  │ Cible   │
├────────────────────────────┼─────────┼─────────┤
│ Taux commandes complètes   │   50%   │  > 95%  │
│ Délai moyen commande       │  3j     │  < 2h   │
│ Taux reliquats             │  ?      │  < 5%   │
│ Nb fournisseurs actifs     │  50+    │  Optimisé│
└────────────────────────────┴─────────┴─────────┘
```

### KPIs Stock

```
┌────────────────────────────┬─────────┬─────────┐
│ Indicateur                 │ Actuel  │ Cible   │
├────────────────────────────┼─────────┼─────────┤
│ Taux rotation stock        │  ?      │  > 8/an │
│ Stock obsolète (%)         │  ?      │  < 2%   │
│ Fiabilité inventaire       │  ?      │  > 98%  │
│ Durée inventaire           │ Très long│ -70%   │
└────────────────────────────┴─────────┴─────────┘
```

### KPIs Fournisseurs

```
┌────────────────────────────┬─────────┬─────────┐
│ Indicateur                 │ Actuel  │ Cible   │
├────────────────────────────┼─────────┼─────────┤
│ Taux service (livr. compl.)│  ?      │  > 95%  │
│ Délai moyen livraison      │  ?      │  24-48h │
│ Taux conformité            │  ?      │  > 98%  │
│ Réactivité (réponse)       │  ?      │  < 4h   │
└────────────────────────────┴─────────┴─────────┘
```

---

## 🛠️ Stack Technique Data

### Ingestion & Pipeline

```
- Kafka / RabbitMQ : Streaming temps réel
- Apache Airflow : Orchestration ETL
- Python (Pandas) : Transformation data
- dbt : Transformations SQL
```

### Stockage

```
- Data Lake : S3 / Azure Blob / MinIO
- Data Warehouse : PostgreSQL / Snowflake
- Cache : Redis
- Search : Elasticsearch
```

### Analytics & BI

```
- BI Tool : Metabase / Superset / Power BI
- Notebooks : Jupyter / Databricks
- Viz : Plotly / D3.js
```

### Machine Learning

```
- Framework : TensorFlow / PyTorch / Scikit-learn
- AutoML : H2O.ai / AutoKeras
- MLOps : MLflow / Kubeflow
- Serving : FastAPI / TensorFlow Serving
```

### Monitoring

```
- Metrics : Prometheus
- Dashboards : Grafana
- Logs : ELK Stack (Elasticsearch/Logstash/Kibana)
- Alerting : PagerDuty / Opsgenie
```

---

## 🚀 Roadmap ML

### Phase 1: Fondations (M1-M3)
- ✅ Data Lake setup
- ✅ ETL basiques
- ✅ Dashboards BI essentiels
- ✅ Métriques de base

### Phase 2: Descriptive (M4-M6)
- ✅ Reporting automatisé
- ✅ KPIs temps réel
- ✅ Analyses historiques
- ✅ Benchmarks

### Phase 3: Prédictive (M7-M12)
- ✅ Modèles ML v1
- ✅ Prévisions besoins
- ✅ Détection anomalies
- ✅ Scoring fournisseurs

### Phase 4: Prescriptive (M13-M18)
- ✅ Optimisation automatique
- ✅ Recommandations actives
- ✅ Auto-actions
- ✅ ML avancé

---

## ⚠️ Prérequis Data

### Qualité Données
- ❗ Base propre (déduplication)
- ❗ Références unifiées
- ❗ Historique exploitable
- ❗ Métadonnées complètes

### Volumétrie (Estimations)
- Commandes: ~10K/an
- Articles: ~10K références
- Mouvements stock: ~50K/an
- Événements: ~500K/an

### Ressources
- Data Engineer (1 FTE)
- Data Analyst (0.5 FTE)
- ML Engineer (0.5 FTE phase 3+)

---

## 🎯 Valeur Ajoutée Data

### Gains Opérationnels
- Réduction temps décision
- Anticipation problèmes
- Optimisation processus
- Auto-pilotage partiel

### Gains Financiers
- Négociation basée data
- Réduction stock dormant
- Optimisation achats groupés
- Prévention ruptures

### Gains Stratégiques
- Pilotage data-driven
- Benchmark continu
- Innovation continue
- Avantage compétitif

---

**Note:** Architecture data générique, à adapter selon infrastructure IT choisie
