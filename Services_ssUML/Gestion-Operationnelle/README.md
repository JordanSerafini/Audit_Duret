# 📊 GESTION OPÉRATIONNELLE - Duret Électricité

**Service** : Gestion Opérationnelle (Contrôle Gestion, Stocks, Bureau d'Études Transverse)
**Date audit** : Novembre 2025
**Statut projet** : Analyse en cours

---

## 🎯 VUE D'ENSEMBLE

La **Gestion Opérationnelle** chez Duret Électricité est actuellement basée sur **30+ fichiers Excel** non connectés et des processus **80% manuels**.

### Personas Impactés

- **Sylvie** (Contrôleuse de Gestion, 52 ans) : 24h/mois génération KPI manuels
- **Thomas** (Responsable BE Transverse, 38 ans) : Surcharge chronique (220h demandes vs 160h capacité)
- **Isabelle** (Responsable Stocks, 45 ans) : 6h/j comptage manuel stocks

### Opportunités Identifiées

**"Du chaos Excel au pilotage temps réel"**

- **ERP moderne** (cloud, mobile, APIs ouvertes)
- **Dashboards BI** temps réel (vs Excel J+15)
- **RFID/QR Code stocks** (réception automatisée)
- **Système tickets BE** (priorisation structurée)
- **Analytics prédictifs** (projection CA, détection anomalies)
- **Transparence** (chef chantier voit son budget)

---

## 📂 STRUCTURE DOCUMENTATION

```
Gestion-Operationnelle/
├── README.md (ce fichier)
├── SYNTHESE_EXECUTIVE.md (présentation direction)
│
├── docs/
│   ├── 01_PERSONAS_Pain_Points.md (3 personas détaillés)
│   ├── 02_ARCHITECTURE_Actuelle_Chaos.md (cartographie système actuel, 30+ Excel)
│   └── 03_JOURNEY_MAPS_Parcours_Utilisateurs.md (3 parcours avant/après)
│
├── implementation/
│   ├── 02_Planning_Implementation.md (24 mois, 3 phases, jalons GO/NO-GO)
│   ├── it-logiciel/
│   │   └── 01_Architecture_Cible.md (Odoo + RFID + Linear, stack technique)
│   └── bi-data-ml/
│       └── 01_Architecture_DataDriven.md (DWH, Power BI, modèles ML)
│
└── uml/ (12 diagrammes PlantUML)
    ├── 01_sequence_generation_kpi.puml (génération KPI 24h → automatisé)
    ├── 02_activity_workflow_tickets_be.puml (workflow tickets BE)
    ├── 03_usecase_systeme_gestion.puml (cas d'utilisation)
    ├── 04_state_affaire.puml (machine à états affaire)
    ├── 05_component_architecture.puml (composants système)
    ├── 06_class_modele_donnees.puml (star schema DWH)
    ├── 07_deployment_infrastructure.puml (infrastructure Azure)
    ├── 08_timing_reception_rfid.puml (timeline RFID)
    ├── 09_mindmap_fonctionnalites.puml (arborescence fonctionnelle)
    ├── 10_wbs_projet.puml (work breakdown structure)
    ├── 11_gantt_planning.puml (planning 24 mois)
    └── 12_network_flux_donnees.puml (flux données architecture cible)
```

---

## 🔴 PROBLÈME : CHAOS ORGANISATIONNEL

### Top 10 Pain Points Critiques

| Rang | Pain Point | Persona | Impact |
|------|-----------|---------|--------|
| 1 | Valorisation stock incohérente (2 prix même produit) | Isabelle | Élevé |
| 2 | Remontée info tardive (J+15 vs temps réel) | Sylvie | Critique |
| 3 | Surcharge BE transverse (aucun système tickets) | Thomas | Critique |
| 4 | Excel omniprésent (30+ fichiers silos) | Sylvie | Élevé |
| 5 | Manque transparence (chef ne voit pas budget chantier) | Tous | Élevé |
| 6 | Réception stocks manuelle (comptage papier) | Isabelle | Moyen |
| 7 | KPI Excel manuel (24h génération/mois) | Sylvie | Moyen |
| 8 | Stock sous-utilisé (achats inutiles) | Isabelle | Moyen |
| 9 | Onboarding long (4j formation nécessaire) | Tous | Faible |
| 10 | Aucune alerte automatique (détection tardive) | Sylvie | Moyen |

### Architecture Actuelle = Chaos

- ❌ **30+ fichiers Excel** (KPI, marges, stocks, planning...) non connectés
- ❌ **Triple/quadruple saisie** même donnée (SAGE → MDE → Excel × 3)
- ❌ **80% processus manuels** : Comptage stocks (6h/j), KPI (24h/mois), Priorisation BE (subjectif)
- ❌ **ERP MDE obsolète** : 15 ans, lent (30 sec chargement), plantages 2-3×/sem, distance inutilisable
- ❌ **Aucune transparence** : Chef chantier pilote SANS voir budget/marge
- ❌ **Remontée info J+15** : Direction décide avec données périmées
- ❌ **Dépendance Sylvie** : Si part = chaos organisation (risque succession)

---

## ✅ SOLUTION : DIGITALISATION COMPLÈTE

### Architecture Cible

```
Utilisateurs (Web + Mobile)
           │
           │ HTTPS/TLS 1.3, OAuth 2.0
           ▼
┌──────────────────────────────────────────────┐
│        Azure Cloud EU (France)               │
├────────────────┬─────────────────────────────┤
│  Odoo ERP v17  │  Power BI + ML Models       │
│  (Community)   │  (Azure)                    │
│                │                             │
│  - Affaires    │  - Dashboards temps réel    │
│  - Achats      │  - Prédictions ML           │
│  - Stocks RFID │  - Alertes automatiques     │
│  - Compta      │  - RBAC (RLS)               │
│  - Tickets BE  │                             │
└────────────────┴─────────────────────────────┘
           │              │
           ▼              ▼
┌─────────────────┬────────────────────────────┐
│ PostgreSQL 15   │ Azure SQL DWH + Blob       │
│ (Odoo DB)       │ (Data Lake + ML Models)    │
└─────────────────┴────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────────┐
│  Intégrations : SAGE, Lireco RFID, Linear   │
└──────────────────────────────────────────────┘
```

### Fonctionnalités Clés

**1. Dashboards KPI Temps Réel** (vs Excel manuel 24h)
- Génération automatique : 2h vs 24h (-92%)
- Temps réel : J+0 vs J+15
- 4 dashboards RBAC : Direction, Sylvie, RA, Chefs
- Analytics prédictifs : Projection CA 3 mois, anomalies budgets

**2. Système Tickets BE** (vs priorisation subjective chaos)
- Priorisation structurée : Critères objectifs (deadline, CA, ancienneté)
- Transparence : Demandeurs voient position file + raisons
- Productivité améliorée
- Équité : Réduction conflits

**3. RFID/QR Code Stocks** (vs comptage manuel 6h/j)
- Réception : 45 sec vs 25 min (-96%)
- Erreurs réduites
- Valorisation : CUMP cohérente (1 prix vs 2 prix incohérents)
- Inventaires : 2h vs 2j (-92%)

**4. RBAC Transparence** (vs silos hiérarchiques)
- Chef chantier voit SON budget, consommé, reste à faire ✅
- RA voit SES affaires (pas celles autres RA) ✅
- Direction voit TOUT consolidé ✅
- Audit trail : Qui a fait quoi, quand

**5. ERP Odoo Moderne** (vs MDE obsolète)
- Rapide : <2 sec vs 30 sec (-93%)
- Fiable : 99,9% uptime vs plantages 2-3×/sem
- Mobile : App iOS+Android vs aucune mobilité
- Cloud : Accessible partout vs distance inutilisable

---

## 📅 APPROCHE PROPOSÉE - 24 MOIS

### Phase 1 : Quick Wins (M1-M6)

| Projet | Durée | Description |
|--------|-------|-------------|
| **RFID/QR Code stocks** | M1-M4 | Automatisation réception |
| **Dashboards Power BI KPI** | M1-M5 | Reporting temps réel |
| **Système tickets BE** | M2-M6 | Priorisation structurée |

### Phase 2 : Structurant (M7-M18)

| Projet | Durée | Description |
|--------|-------|-------------|
| **Migration ERP Odoo BTP** | M7-M16 | Nouveau système central |
| **RBAC Transparence** | M13-M15 | Accès contrôlés |
| **ML Prédictif** | M15-M18 | Analytics avancés |

### Phase 3 : Optimisation (M19-M24)

| Projet | Durée | Description |
|--------|-------|-------------|
| **Gouvernance Données** | M19-M21 | Qualité data |
| **Culture Data-Driven** | M19-M24 | Formation continue |

### Jalons Décision (GO/NO-GO)

- **M0** : Validation Direction Phase 1
- **M6** : Bilan Phase 1 → GO/NO-GO Phase 2 (basé ROI réel)
- **M11** : POC Odoo → GO/NO-GO migration ERP
- **M18** : Bilan Phase 2 → GO/NO-GO Phase 3
- **M24** : Bilan final

---

## 🎯 KPIs SUCCÈS

### KPIs Opérationnels

| KPI | Avant | Après | Gain |
|-----|-------|-------|------|
| **Temps génération KPI mensuels** | 24h | 2h | -92% |
| **Délai remontée info** | J+15 | Temps réel | Immédiat |
| **Temps réception stocks** | 6h/j | 45 min/j | -88% |
| **Productivité BE** | 43% | Objectif 78% | +81% |
| **Erreurs saisie manuelle** | 15% | Objectif <1% | -93% |
| **Nombre Excel opérationnels** | 30+ | 0 | -100% |

### KPIs Business

| KPI | Avant | Après | Impact |
|-----|-------|-------|--------|
| **Taux dépassements budgets** | 25% | Objectif 10% | -15 points |
| **Délai détection anomalies** | J+30 | J+0 | Temps réel |
| **NPS interne** | -10 | Objectif +40 | +50 points |
| **Turnover chefs chantier** | 18% | Objectif 10% | -8 points |
| **Heures sup Sylvie (fin mois)** | 20h | 0h | -100% |
| **Surcharge BE (h non traitées/sem)** | 60h | 0h | -100% |

---

## 🔧 STACK TECHNIQUE

### Backend

- **Odoo ERP v17** Community (open-source, 0€ licences)
  - Modules : Sales, Purchase, Inventory, Accounting, Project, HR
  - Custom apps : BE Tickets, RBAC Chantiers, RFID Integration
- **PostgreSQL 15** Managed (Azure)
- **Python** backend (Odoo framework + custom modules)

### Frontend

- **Odoo Web** (responsive, PWA)
- **Odoo Mobile App** (iOS + Android natif, offline mode)
- **Power BI Service** (Azure, dashboards RBAC)

### Data & ML

- **Azure SQL Database** (Data Warehouse, star schema)
- **Azure Blob Storage** (Data Lake : Bronze/Silver/Gold)
- **Azure Data Factory** (ETL pipelines quotidiens)
- **Azure ML Studio** (entraînement modèles)
- **Azure Functions** (ML inference serverless)
- **Python** ML stack : PyTorch (LSTM), scikit-learn (Isolation Forest), Prophet (Facebook)

### RFID

- **Zebra FX9600** portiques RFID (2× dépôts)
- **Zebra MC3300** douchettes mobiles (4×)
- **Tags RFID UHF Gen2** (5 000 tags)
- **Lireco** API REST (intégration Odoo)

### Ticketing

- **Linear** (système tickets BE, 8$/user/mois)
- Algorithme priorisation custom (Python webhook)

### Infrastructure

- **Azure Cloud EU** (France Paris + Marseille)
- **VM Standard_D4s_v3** (4 vCPU, 16 GB RAM) pour Odoo
- **TLS 1.3** transit, **AES-256** repos
- **OAuth 2.0 + JWT**, MFA disponible
- **RGPD compliant** (hébergement UE, DPA Microsoft)

---

## 📊 MODÈLES ML PROPOSÉS

### Modèle 1 : Projection CA 3 Mois

- **Algorithme** : Prophet (Facebook) + LSTM (PyTorch)
- **Objectif** : Prédire CA mensuel M+1, M+2, M+3
- **Précision cible** : >85% (MAPE <15%)
- **Entraînement** : Mensuel (1er du mois)
- **Inférence** : Quotidien (refresh prédictions)

### Modèle 2 : Détection Anomalies Budgets

- **Algorithme** : Isolation Forest (scikit-learn)
- **Objectif** : Détecter affaires risque dépassement budget
- **Features** : Taux consommation %, vitesse consommation, écart heures, achats hors catalogue
- **Seuil** : Score <0.5 = alerte
- **Entraînement** : Hebdomadaire (dimanche)
- **Inférence** : Quotidien (toutes affaires en cours)

### Modèle 3 : Optimisation Planning

- **Algorithme** : Glouton (OR-Tools Google)
- **Objectif** : Suggérer réallocation chefs chantier pour maximiser CA
- **Contraintes** : 1 chef = max 3 affaires, compétences matching
- **Exécution** : Hebdomadaire (lundi matin)
- **Output** : Suggestions réallocation (gain CA estimé)

---

## 📖 DOCUMENTATION DÉTAILLÉE

### Pour Direction

➡️ **[SYNTHESE_EXECUTIVE.md](SYNTHESE_EXECUTIVE.md)** : Business case complet, recommandation

### Pour Équipe Projet

➡️ **[implementation/02_Planning_Implementation.md](implementation/02_Planning_Implementation.md)** : Planning 24 mois détaillé, jalons, budgets

➡️ **[implementation/it-logiciel/01_Architecture_Cible.md](implementation/it-logiciel/01_Architecture_Cible.md)** : Architecture IT/Logiciel complète (Odoo, RFID, stack technique)

➡️ **[implementation/bi-data-ml/01_Architecture_DataDriven.md](implementation/bi-data-ml/01_Architecture_DataDriven.md)** : Architecture Data/BI/ML (DWH, Power BI, modèles ML)

### Pour Compréhension Métier

➡️ **[docs/01_PERSONAS_Pain_Points.md](docs/01_PERSONAS_Pain_Points.md)** : 3 personas détaillés (Sylvie, Thomas, Isabelle), pain points quantifiés

➡️ **[docs/02_ARCHITECTURE_Actuelle_Chaos.md](docs/02_ARCHITECTURE_Actuelle_Chaos.md)** : Cartographie système actuel (30+ Excel, processus manuels)

➡️ **[docs/03_JOURNEY_MAPS_Parcours_Utilisateurs.md](docs/03_JOURNEY_MAPS_Parcours_Utilisateurs.md)** : 3 parcours avant/après (KPI 24h→2h, Tickets BE, RFID stocks)

### Diagrammes UML

➡️ **[uml/](uml/)** : 12 diagrammes PlantUML (sequence, activity, usecase, state, component, class, deployment, timing, mindmap, WBS, gantt, network)

---

## ⚠️ RISQUES & MITIGATION

### Risques Techniques (Probabilité Moyenne)

**1. Résistance changement** (équipes habituées Excel)
- **Mitigation** : Co-conception, champions internes, formation intensive (5j), support 6 mois

**2. Qualité données migration** (Excel incohérents → Migration échoue)
- **Mitigation** : Audit qualité M7, nettoyage pré-migration M8-9, migration progressive

**3. Dépendance Sylvie** (part pendant projet → Blocage)
- **Mitigation** : Backup désigné M1, doc système Excel avant remplacement, primes rétention

### Risques Business (Probabilité Faible-Moyenne)

**4. Budget dépassé** (dev plus longs → +20% coûts)
- **Mitigation** : Contingence 15% incluse, jalons validation, forfaits vs régie, arrêt si >20%

**5. ROI surestimé** (gains réels < prévus)
- **Mitigation** : Hypothèses conservatrices, mesure before/after, suivi mensuel ROI

---

## 🏆 RECOMMANDATION

### ✅ APPROCHE PROGRESSIVE RECOMMANDÉE

**Pourquoi progressif ?**

1. ✅ **Pain points critiques** : 30+ Excel, 80% manuel, remontée info J+15
2. ✅ **Risque maîtrisé** : Approche 24 mois, pas big-bang
3. ✅ **Quick wins possibles** : Dashboards, RFID, Tickets BE
4. ✅ **Scalabilité** : Système actuel ne scale pas (croissance impossible)
5. ✅ **Compétitivité** : Concurrents déjà digitalisés
6. ✅ **RH** : Risque burn-out Sylvie/Thomas/Isabelle si rien
7. ✅ **Succession** : Dépendance Sylvie = risque majeur

**Alternative "Ne rien faire"** :
- ❌ Aggravation : Croissance = complexité Excel exponentielle
- ❌ Turnover : Départs (burn-out) = perte compétences
- ❌ Décisions : Direction pilote J+15 périmé → Erreurs stratégiques

**Verdict** : **Approche PROGRESSIVE sur 24 mois**

---

## 📞 CONTACTS & PROCHAINES ÉTAPES

### Équipe Recommandée

- **Sponsor Exécutif** : Membre CODIR/Direction (10% disponibilité)
- **Chef Projet** : Sylvie 50% ou externe (coordination, planning, budget)
- **Référents Métiers** (20% chacun) : Sylvie, Thomas, Isabelle, 1 RA

### Prochaines Étapes Immédiates

**Semaine 1-2** : Présentation CODIR, Go/No-Go Phase 1, désignation équipe

**Semaine 3-4** : Étude de faisabilité détaillée avec chiffrage

**Mois 3-6** : Lancement pilotes si validation

**Mois 6** : Bilan Phase 1, mesure résultats, Go Phase 2

---

**📅 Date création** : 2025-11-17
**🔄 Version** : v1.0
**✅ Statut** : Documentation complète, analyse approfondie
**⚠️ Note** : Chiffrage financier à réaliser lors de l'étude de faisabilité
**📧 Contact** : Audit IT & Data BI/ML
