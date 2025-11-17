# 📊 ARCHITECTURE DATA-DRIVEN / BI / ML - Gestion Opérationnelle

**Service** : Gestion Opérationnelle
**Vision** : "Du chaos Excel au pilotage prédictif temps réel"
**Stack** : Azure SQL DWH + Power BI + Python ML

---

## 🎯 ARCHITECTURE DATA GLOBALE

```
┌─────────────────────────────────────────────────────────────┐
│                    SOURCES DONNÉES                          │
├───────────┬───────────┬───────────┬───────────┬─────────────┤
│ Odoo ERP  │ SAGE      │ Lireco    │ Linear    │ Excel       │
│ (Postgres)│ (CSV)     │ RFID (API)│ Tickets   │ (transition)│
└─────┬─────┴─────┬─────┴─────┬─────┴─────┬─────┴─────┬───────┘
      │           │           │           │           │
      │ Azure Data Factory (ETL Cloud)                │
      ▼           ▼           ▼           ▼           ▼
┌─────────────────────────────────────────────────────────────┐
│            DATA LAKE (Azure Blob Storage)                   │
│  Bronze : Données brutes (JSON/CSV)                         │
│  Silver : Données nettoyées (Parquet)                       │
│  Gold : Données agrégées (Star Schema)                      │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            │ Azure Synapse Pipeline
                            ▼
┌─────────────────────────────────────────────────────────────┐
│          DATA WAREHOUSE (Azure SQL Database)                │
│                                                              │
│  Star Schema :                                               │
│  - Fact_Affaires (100K lignes/an)                           │
│  - Fact_Heures (500K lignes/an)                             │
│  - Fact_Achats (200K lignes/an)                             │
│  - Fact_Stocks (50K mouvements/an)                          │
│  - Dim_Clients (2 500 clients)                              │
│  - Dim_Produits (5 000 produits)                            │
│  - Dim_Fournisseurs (450 fournisseurs)                      │
│  - Dim_Temps (dates 2020-2030)                              │
│  - Dim_Chantiers (1 800 chantiers)                          │
└─────┬──────────────────────────┬────────────────────────────┘
      │                          │
      │ DirectQuery              │ Python API
      ▼                          ▼
┌─────────────────────┐  ┌─────────────────────────────────┐
│   POWER BI          │  │   ML MODELS (Azure ML)          │
│   Dashboards        │  │   - Projection CA (LSTM)        │
│   - KPI Direction   │  │   - Anomalies (Isolation Forest)│
│   - KPI Sylvie      │  │   - Optimisation Planning       │
│   - KPI RA (RBAC)   │  │                                 │
│   - KPI Chefs       │  │   Python : PyTorch, scikit-learn│
│   - Prédictions ML  │  │   Deployment : Azure Functions  │
└─────────────────────┘  └─────────────────────────────────┘
```

---

## 📊 DATA WAREHOUSE - STAR SCHEMA

### Fact Tables (Tables de Faits)

#### Fact_Affaires

| Colonne | Type | Description |
|---------|------|-------------|
| affaire_id | INT PK | ID affaire Odoo |
| client_id | INT FK | Dim_Clients |
| chantier_id | INT FK | Dim_Chantiers |
| responsable_affaire_id | INT FK | Dim_Employes |
| date_devis | DATE FK | Dim_Temps |
| date_debut | DATE FK | Dim_Temps |
| date_fin_prevue | DATE | |
| date_fin_reelle | DATE | |
| ca_devis | DECIMAL(12,2) | CA prévu devis |
| ca_realise | DECIMAL(12,2) | CA réalisé facturé |
| cout_heures | DECIMAL(12,2) | Coût main œuvre |
| cout_materiel | DECIMAL(12,2) | Coût matériel |
| cout_soustraitance | DECIMAL(12,2) | Coût sous-traitance |
| marge_brute | DECIMAL(12,2) | CA - Coûts |
| taux_marge | DECIMAL(5,2) | Marge / CA (%) |
| statut | VARCHAR(20) | Devis, En cours, Terminé, Annulé |

**Volume** : 100K lignes/an (~200K total 2 ans historique)

---

#### Fact_Heures

| Colonne | Type | Description |
|---------|------|-------------|
| heure_id | BIGINT PK | ID ligne heure |
| affaire_id | INT FK | Fact_Affaires |
| employe_id | INT FK | Dim_Employes |
| date | DATE FK | Dim_Temps |
| heures_travaillees | DECIMAL(5,2) | Heures (ex: 7.5) |
| heures_supp | DECIMAL(5,2) | Heures supplémentaires |
| cout_horaire | DECIMAL(8,2) | Coût horaire employé |
| cout_total | DECIMAL(10,2) | Heures × Coût horaire |

**Volume** : 500K lignes/an (~1M total)

---

#### Fact_Achats

| Colonne | Type | Description |
|---------|------|-------------|
| achat_id | BIGINT PK | ID ligne achat |
| affaire_id | INT FK | Fact_Affaires (si rattaché) |
| fournisseur_id | INT FK | Dim_Fournisseurs |
| produit_id | INT FK | Dim_Produits |
| date_commande | DATE FK | Dim_Temps |
| date_reception | DATE FK | Dim_Temps |
| quantite | DECIMAL(10,2) | Quantité commandée |
| prix_unitaire | DECIMAL(10,2) | Prix unitaire HT |
| montant_total_ht | DECIMAL(12,2) | Quantité × Prix unitaire |
| montant_tva | DECIMAL(10,2) | TVA |
| montant_ttc | DECIMAL(12,2) | Total TTC |

**Volume** : 200K lignes/an

---

#### Fact_Stocks

| Colonne | Type | Description |
|---------|------|-------------|
| mouvement_id | BIGINT PK | ID mouvement stock |
| produit_id | INT FK | Dim_Produits |
| depot_id | INT FK | Dim_Depots (Annecy, Albertville) |
| date_mouvement | DATE FK | Dim_Temps |
| type_mouvement | VARCHAR(20) | Entrée, Sortie, Inventaire, Ajustement |
| affaire_id | INT FK | Si sortie pour affaire |
| quantite | DECIMAL(10,2) | Qté (positif=entrée, négatif=sortie) |
| valeur_unitaire | DECIMAL(10,2) | Valorisation CUMP |
| valeur_totale | DECIMAL(12,2) | Quantité × Valeur unitaire |
| stock_final | DECIMAL(10,2) | Stock après mouvement |

**Volume** : 50K mouvements/an

---

### Dimension Tables (Tables de Dimensions)

#### Dim_Clients

| Colonne | Type | Description |
|---------|------|-------------|
| client_id | INT PK | ID client unique |
| code_client | VARCHAR(20) | Code client (ex: CLI001) |
| nom | VARCHAR(100) | Nom client |
| type_client | VARCHAR(30) | Particulier, Professionnel, Collectivité |
| ca_total_historique | DECIMAL(12,2) | CA cumulé depuis création |
| nb_affaires_total | INT | Nombre affaires historiques |
| date_creation | DATE | Date création client |

**Volume** : 2 500 clients

---

#### Dim_Produits

| Colonne | Type | Description |
|---------|------|-------------|
| produit_id | INT PK | ID produit unique |
| reference | VARCHAR(50) | Référence produit |
| designation | VARCHAR(200) | Libellé produit |
| famille | VARCHAR(50) | Famille (Câbles, Disjoncteurs, etc.) |
| sous_famille | VARCHAR(50) | Sous-famille |
| fournisseur_principal_id | INT FK | Dim_Fournisseurs |
| prix_achat_moyen | DECIMAL(10,2) | CUMP historique |
| prix_vente_standard | DECIMAL(10,2) | Prix vente catalogue |

**Volume** : 5 000 produits

---

#### Dim_Temps

| Colonne | Type | Description |
|---------|------|-------------|
| date | DATE PK | Date (ex: 2025-11-17) |
| annee | INT | 2025 |
| trimestre | INT | 1, 2, 3, 4 |
| mois | INT | 1-12 |
| mois_nom | VARCHAR(20) | Janvier, Février, ... |
| semaine | INT | 1-53 |
| jour_semaine | INT | 1=Lundi, 7=Dimanche |
| jour_semaine_nom | VARCHAR(20) | Lundi, Mardi, ... |
| est_weekend | BIT | 0=Non, 1=Oui |
| est_jour_ferie | BIT | 0=Non, 1=Oui (France) |

**Volume** : 3 650 lignes (2020-2030)

---

## 📊 DASHBOARDS POWER BI

### 1. Dashboard Direction (KPI Globaux)

**Pages** :
1. **Vue d'ensemble** :
   - CA mensuel (graphique courbe + comparaison N-1)
   - Marge globale (jauge)
   - Trésorerie actuelle + projection 3 mois (ML)
   - Top 5 affaires rentables
   - Top 5 affaires déficitaires (alertes)

2. **Analyse Activité** :
   - CA par type client (Particulier, Pro, Collectivité)
   - CA par responsable affaire
   - Affaires en cours (nombre, CA prévisionnel)
   - Taux transformation devis (%)

3. **Analyse Rentabilité** :
   - Marges par affaire (scatter plot CA vs Marge)
   - Évolution marges mensuelles
   - Dépassements budgets (liste affaires >10% dépassement)

4. **Prédictions ML** ⭐ :
   - Projection CA 3 mois (graphique courbe + intervalle confiance)
   - Anomalies budgets détectées (table affaires à risque)
   - Recommandations optimisation (IA)

**Filtres** : Année, Trimestre, Mois, Responsable Affaire, Type Client

**Refresh** : Quotidien 6h du matin (DirectQuery pour temps réel optionnel)

---

### 2. Dashboard Sylvie (Contrôle Gestion Détaillé)

**Pages** :
1. **KPI Mensuels** :
   - Tous KPIs direction (détails)
   - Écarts budget vs réalisé par affaire
   - Ratios productivité (CA/heure, CA/employé)
   - Analyse coûts (heures, matériel, sous-traitance)

2. **Analyse Marges** :
   - Marges par responsable affaire (comparaison)
   - Marges par type chantier (résidentiel, tertiaire, industriel)
   - Évolution historique marges (2 ans)
   - Causes marges négatives (drill-down automatique)

3. **Trésorerie & Facturation** :
   - Trésorerie actuelle
   - CA facturé vs CA à facturer
   - Retards facturation (affaires terminées non facturées)
   - Impayés clients (>30j, >60j, >90j)

4. **Données Brutes** :
   - Export Excel personnalisés (1 clic)
   - Tables détaillées (affaires, heures, achats)

**Filtres** : Tous + filtres avancés (statut affaire, seuils marges, etc.)

**Refresh** : Quotidien 6h + Refresh manuel possible

---

### 3. Dashboard Responsables Affaires (RBAC)

**Sécurité RLS** :
- Chaque RA voit UNIQUEMENT ses affaires (filtre auto par user Azure AD)

**Pages** :
1. **Mes Affaires** :
   - Liste mes affaires en cours (tableau)
   - CA prévisionnel vs réalisé par affaire
   - Budgets consommés vs budgets initiaux
   - Reste à faire par affaire

2. **Détail Affaire** :
   - Budget global (CA devis)
   - Consommé heures, matériel, sous-traitance
   - Marge actuelle
   - Alertes dépassements (>10% rouge)
   - Historique achats
   - Photos chantier (si intégré Odoo)

3. **Performance** :
   - Mes marges moyennes (comparaison autres RA anonymes)
   - Taux respect budgets (% affaires dans budget)
   - CA réalisé/mois (courbe)

**Filtres** : Année, Statut affaire

**Refresh** : Quotidien

---

### 4. Dashboard Chefs Chantier (RBAC Lecture Seule)

**Sécurité RLS** :
- Chaque chef voit UNIQUEMENT son/ses chantiers assignés

**Pages** :
1. **Mon Chantier** :
   - Nom chantier, client, responsable affaire
   - **Budget alloué** (CA devis) ✅ TRANSPARENCE
   - **Consommé à ce jour** (heures + matériel) ✅
   - **Reste à faire** (budget - consommé) ✅
   - **Indicateur** : Vert si <90% consommé, Orange 90-100%, Rouge >100%

2. **Détails Consommations** :
   - Heures par employé (qui a travaillé, combien d'heures)
   - Matériel acheté (liste achats par date)
   - Photos chantier

3. **Planning** :
   - Dates prévues début/fin
   - Avancement % estimé (saisie manuelle RA)
   - Alertes retards

**Filtres** : Aucun (limité son chantier)

**Refresh** : Quotidien

---

## 🤖 MODÈLES ML

### Modèle 1 : Projection CA 3 Mois (LSTM + Prophet)

**Objectif** : Prédire CA mensuel 3 mois à venir

**Données d'entraînement** :
- Historique CA mensuel 24 mois
- Features :
  - CA mois précédent (M-1, M-2, M-3)
  - Nb affaires en cours
  - Tendance saisonnalité (été vs hiver)
  - Événements (vacances, jours fériés)

**Algorithme** :
- Prophet (Facebook) : Détection saisonnalité + tendance
- LSTM (PyTorch) : Séries temporelles complexes
- Ensemble : Moyenne pondérée Prophet (60%) + LSTM (40%)

**Métrique** :
- MAPE (Mean Absolute Percentage Error) : <15% cible
- R² : >0.85

**Déploiement** :
- Entraînement : Mensuel (1er du mois, données M-1 complètes)
- Inférence : Quotidien (rafraîchit prédictions)
- Azure Functions : API REST `/predict-ca?months=3`

**Intégration Power BI** :
- Onglet "Prédictions ML" → Graphique courbe CA projeté

---

### Modèle 2 : Détection Anomalies Budgets (Isolation Forest)

**Objectif** : Détecter affaires risque dépassement budget

**Données** :
- Features par affaire :
  - Taux consommation budget (consommé / budget) %
  - Vitesse consommation (€/jour depuis début)
  - Écart heures prévues vs réalisées %
  - Nb achats hors catalogue (produits non prévus devis)
  - Taux avancement % (si saisi)
  - Ancienneté affaire (jours depuis début)

**Algorithme** :
- Isolation Forest (scikit-learn) : Détection outliers non supervisé
- Seuil anomalie : Score <0.5 = alerte

**Labels anomalies** :
- **Normal** : Affaire dans budget, rythme OK
- **Attention** : Consommation 80-95% budget
- **Alerte** : Consommation >95% ou dépassement détecté
- **Critique** : Dépassement >10%

**Déploiement** :
- Entraînement : Hebdomadaire (dimanche soir)
- Inférence : Quotidien (toutes affaires en cours)
- Notifications : Mail auto RA + Direction si alerte/critique

**Intégration Power BI** :
- Table "Affaires à Risque" (filtre anomalies)
- Drill-down : Causes anomalies (quels features outliers)

---

### Modèle 3 : Optimisation Planning (Algorithme Glouton)

**Objectif** : Suggérer réallocation chefs chantier pour maximiser CA

**Données** :
- Chefs disponibles (10-15)
- Affaires en attente assignation
- Compétences chefs (électricité industrielle, résidentiel, tertiaire)
- Charge travail chefs (nb affaires en cours)
- Priorités affaires (CA, délai client)

**Algorithme** :
- Glouton (OR-Tools Google) : Optimisation combinatoire
- Fonction objectif : Maximiser CA affaires assignées × (1 - délai deadline)
- Contraintes :
  - 1 chef = max 3 affaires simultanées
  - Compétences chef matching type affaire

**Déploiement** :
- Exécution : Hebdomadaire (lundi matin)
- Output : Suggestions "Réalloquer Chef X de Affaire Y → Affaire Z (gain CA +15K€)"

**Intégration Power BI** :
- Onglet "Recommandations Optimisation" (table suggestions)
- Direction/RA peuvent accepter/refuser suggestions

---

## 📊 ETL PIPELINES (Azure Data Factory)

### Pipeline 1 : Odoo → Data Warehouse (Quotidien)

**Fréquence** : Quotidien 6h du matin
**Durée** : 15-20 min

**Étapes** :
1. **Extract** :
   - Connexion Odoo PostgreSQL (read replica)
   - Requêtes SQL incrémentielles (delta J-1)
     ```sql
     SELECT * FROM sale_order WHERE write_date >= CURRENT_DATE - 1
     ```
2. **Transform** :
   - Mapping Odoo → Star Schema
   - Calculs marges (CA - coûts)
   - Enrichissement (jointures dimensions)
3. **Load** :
   - Insert/Update Azure SQL Database
   - Validation qualité (checks contraintes)

**Volumes** :
- Affaires : ~50 nouvelles/modifiées par jour
- Heures : ~300 lignes/jour
- Achats : ~100 lignes/jour

---

### Pipeline 2 : SAGE → Data Warehouse (Quotidien)

**Fréquence** : Quotidien 7h du matin
**Durée** : 10 min

**Étapes** :
1. **Extract** :
   - Export CSV SAGE (script automatisé)
   - Dépôt Azure Blob Storage
2. **Transform** :
   - Parsing CSV
   - Rapprochement Odoo (match clients, affaires)
3. **Load** :
   - Insert factures, paiements Azure SQL

---

### Pipeline 3 : ML Models Refresh (Hebdo + Quotidien)

**Entraînement modèles (Hebdomadaire dimanche 2h)** :
1. Extract données 24 mois Data Warehouse
2. Preprocessing (normalisation, feature engineering)
3. Entraînement Prophet, LSTM, Isolation Forest
4. Validation (test set 20%)
5. Si R² >seuil : Déploiement nouveau model (Azure Blob .pkl)

**Inférence quotidienne (6h30)** :
1. Load models (.pkl)
2. Extract données affaires en cours
3. Prédictions (CA projeté, anomalies)
4. Insert résultats table `ML_Predictions`

---

## 🔐 GOUVERNANCE DONNÉES

### Data Quality Rules

**Automatisation** (Azure Data Factory Data Quality checks) :

| Table | Règle | Action si échec |
|-------|-------|-----------------|
| Fact_Affaires | `ca_realise` <= `ca_devis` × 1.5 | Alerte Sylvie (dépassement >150% suspect) |
| Fact_Heures | `heures_travaillees` <= 12 | Alerte RH (>12h/jour impossible) |
| Fact_Achats | `prix_unitaire` > 0 | Blocage import (prix négatif interdit) |
| Fact_Stocks | `stock_final` >= 0 | Alerte Isabelle (stock négatif impossible hors erreur) |

### MDM (Master Data Management)

**Référentiels uniques** :
- Clients : Dédoublonnage automatique (nom + adresse fuzzy matching)
- Produits : Référence unique (pas de doublons)
- Fournisseurs : Validation SIRET (API INSEE)

### Audit Trail

**Logs toutes modifications** :
- Table `audit_log` :
  - user_id, table_name, row_id, action (INSERT/UPDATE/DELETE), old_value, new_value, timestamp
- Rétention : 3 ans
- Recherche : Elasticsearch

---

## 💰 COÛTS INFRASTRUCTURE DATA (OPEX Mensuel)

| Service | Coût/mois |
|---------|-----------|
| Azure SQL DWH (100 DTU) | 150€ |
| Azure Blob Storage (500 GB) | 10€ |
| Azure Data Factory (pipelines) | 50€ |
| Azure ML Studio (entraînement models) | 100€ |
| Azure Functions (inférence ML) | 50€ |
| Power BI Pro (30 licences) | 300€ |
| **TOTAL DATA OPEX** | **660€/mois = 8K€/an** |

---

**Date création** : 2025-11-17
**Version** : v1.0
