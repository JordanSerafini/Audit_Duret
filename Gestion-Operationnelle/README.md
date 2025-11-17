# 📊 GESTION OPÉRATIONNELLE - Duret Électricité

**Service** : Gestion Opérationnelle (Contrôle Gestion, Stocks, Bureau d'Études Transverse)
**Date audit** : Novembre 2025
**Statut projet** : Prêt implémentation

---

## 🎯 VUE D'ENSEMBLE

La **Gestion Opérationnelle** chez Duret Électricité est actuellement basée sur **30+ fichiers Excel** non connectés et des processus **80% manuels**. Cette situation coûte **1,18M€/an** à l'entreprise.

### Personas Impactés

- **Sylvie** (Contrôleuse de Gestion, 52 ans) : 24h/mois génération KPI manuels → **611 500€/an** perdus
- **Thomas** (Responsable BE Transverse, 38 ans) : Surcharge chronique (220h demandes vs 160h capacité) → **175 000€/an** perdus
- **Isabelle** (Responsable Stocks, 45 ans) : 6h/j comptage manuel stocks → **395 000€/an** perdus

### Solution Proposée

**"Du chaos Excel au pilotage prédictif temps réel"**

- **ERP Odoo moderne** (cloud, mobile, APIs ouvertes)
- **Dashboards Power BI** temps réel (vs Excel J+15)
- **RFID/QR Code stocks** (45 sec vs 25 min réception)
- **Système tickets BE** (priorisation algorithmique)
- **ML prédictif** (projection CA, détection anomalies)
- **RBAC transparence** (chef chantier voit son budget)

### Business Case

| Métrique | Valeur |
|----------|--------|
| **Investissement 24 mois** | 580K€ |
| **Gains annuels** | 1 181K€/an |
| **Gains 2 ans** | 2 362K€ |
| **Net 2 ans** | +1 782K€ |
| **ROI** | 307% |
| **Payback** | 5,9 mois |

---

## 📂 STRUCTURE DOCUMENTATION

```
Gestion-Operationnelle/
├── README.md (ce fichier)
├── SYNTHESE_EXECUTIVE.md (présentation direction, business case)
│
├── docs/
│   ├── 01_PERSONAS_Pain_Points.md (3 personas détaillés, 1,18M€/an impact)
│   ├── 02_ARCHITECTURE_Actuelle_Chaos.md (cartographie système actuel, 30+ Excel)
│   └── 03_JOURNEY_MAPS_Parcours_Utilisateurs.md (3 parcours avant/après)
│
├── implementation/
│   ├── 02_Planning_Implementation.md (24 mois, 3 phases, jalons GO/NO-GO)
│   ├── it-logiciel/
│   │   └── 01_Architecture_Cible.md (Odoo + RFID + Linear, stack technique)
│   └── bi-data-ml/
│       └── 01_Architecture_DataDriven.md (DWH, Power BI, 3 modèles ML)
│
└── uml/ (12 diagrammes PlantUML)
    ├── 01_sequence_generation_kpi.puml (génération KPI 24h → 2h)
    ├── 02_activity_workflow_tickets_be.puml (workflow tickets BE)
    ├── 03_usecase_systeme_gestion.puml (cas d'utilisation)
    ├── 04_state_affaire.puml (machine à états affaire)
    ├── 05_component_architecture.puml (composants système)
    ├── 06_class_modele_donnees.puml (star schema DWH)
    ├── 07_deployment_infrastructure.puml (infrastructure Azure)
    ├── 08_timing_reception_rfid.puml (timeline RFID 25min → 45sec)
    ├── 09_mindmap_fonctionnalites.puml (arborescence fonctionnelle)
    ├── 10_wbs_projet.puml (work breakdown structure)
    ├── 11_gantt_planning.puml (planning 24 mois)
    └── 12_network_flux_donnees.puml (flux données architecture cible)
```

---

## 🔴 PROBLÈME : CHAOS ORGANISATIONNEL (1,18M€/AN)

### Top 10 Pain Points Critiques

| Rang | Pain Point | Persona | Impact €/an |
|------|-----------|---------|-------------|
| 1 | Valorisation stock incohérente (2 prix même produit) | Isabelle | 210 000€ |
| 2 | Remontée info tardive (J+15 vs temps réel) | Sylvie | 120 000€ |
| 3 | Surcharge BE transverse (aucun système tickets) | Thomas | 120 000€ |
| 4 | Excel omniprésent (30+ fichiers silos) | Sylvie | 122 500€ |
| 5 | Manque transparence (chef ne voit pas budget chantier) | Tous | 100 000€ |
| 6 | Réception stocks manuelle (comptage papier) | Isabelle | 95 000€ |
| 7 | KPI Excel manuel (24h génération/mois) | Sylvie | 74 000€ |
| 8 | Stock sous-utilisé (achats inutiles) | Isabelle | 60 000€ |
| 9 | Onboarding long (4j formation nécessaire) | Tous | 60 000€ |
| 10 | Aucune alerte automatique (détection tardive) | Sylvie | 45 000€ |

### Architecture Actuelle = Chaos

- ❌ **30+ fichiers Excel** (KPI, marges, stocks, planning...) non connectés
- ❌ **Triple/quadruple saisie** même donnée (SAGE → MDE → Excel × 3)
- ❌ **80% processus manuels** : Comptage stocks (6h/j), KPI (24h/mois), Priorisation BE (subjectif)
- ❌ **ERP MDE obsolète** : 15 ans, lent (30 sec chargement), plantages 2-3×/sem, distance inutilisable
- ❌ **Aucune transparence** : Chef chantier pilote SANS voir budget/marge
- ❌ **Remontée info J+15** : Direction décide avec données périmées
- ❌ **Dépendance Sylvie** : Si part = 6-12 mois chaos (300-600K€)

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
- ML prédictif : Projection CA 3 mois, anomalies budgets

**2. Système Tickets BE** (vs priorisation subjective chaos)
- Priorisation algorithmique : Critères objectifs (deadline, CA, ancienneté)
- Transparence : Demandeurs voient position file + raisons
- Productivité : +81% (43% → 78%)
- Équité : -80% conflits

**3. RFID/QR Code Stocks** (vs comptage manuel 6h/j)
- Réception : 45 sec vs 25 min (-96%)
- Erreurs : 0% vs 15% (-100%)
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

## 📅 PLAN D'ACTION 24 MOIS

### Phase 1 : Quick Wins (M1-M6) - **185K€** → **464K€/an gains**

| Projet | Durée | Budget | Gains/an | Payback |
|--------|-------|--------|----------|---------|
| **RFID/QR Code stocks** | M1-M4 | 65K€ | 120K€ | 6 mois |
| **Dashboards Power BI KPI** | M1-M5 | 70K€ | 194K€ | 5 mois |
| **Système tickets BE** | M2-M6 | 50K€ | 150K€ | 4 mois |
| **TOTAL PHASE 1** | **6 mois** | **185K€** | **464K€/an** | **4,8 mois** |

### Phase 2 : Structurant (M7-M18) - **280K€** → **1 181K€/an gains cumulés**

| Projet | Durée | Budget | Gains additionnels/an |
|--------|-------|--------|------------------------|
| **Migration ERP Odoo BTP** | M7-M16 | 200K€ | 517K€ |
| **RBAC Transparence** | M13-M15 | 30K€ | Inclus Odoo+PBI |
| **ML Prédictif** | M15-M18 | 50K€ | 200K€ |
| **TOTAL PHASE 2** | **12 mois** | **280K€** | **717K€/an additionnels** |

### Phase 3 : Optimisation (M19-M24) - **115K€**

| Projet | Durée | Budget |
|--------|-------|--------|
| **Gouvernance Données** | M19-M21 | 50K€ |
| **Culture Data-Driven** | M19-M24 | 65K€ |
| **TOTAL PHASE 3** | **6 mois** | **115K€** |

### Jalons Décision (GO/NO-GO)

- **M0** : Validation Direction Phase 1 (185K€)
- **M6** : Bilan Phase 1 → GO/NO-GO Phase 2 (basé ROI réel)
- **M11** : POC Odoo → GO/NO-GO migration ERP
- **M18** : Bilan Phase 2 → GO/NO-GO Phase 3
- **M24** : Bilan final ROI 2 ans

---

## 💰 ROI DÉTAILLÉ 2 ANS

### Investissements

| Phase | Période | Investissement |
|-------|---------|----------------|
| Phase 1 | M1-M6 | 185K€ |
| Phase 2 | M7-M18 | 280K€ |
| Phase 3 | M19-M24 | 115K€ |
| **TOTAL 24 MOIS** | | **580K€** |

### Gains Annuels Récurrents

| Gain | Économie/an |
|------|-------------|
| Temps Sylvie KPI (24h → 2h) | 19 800€ |
| Remontée info temps réel (vs J+15) | 120 000€ |
| Excel silos supprimés (30+ → 0) | 122 500€ |
| Transparence RBAC (turnover réduit) | 100 000€ |
| Système tickets BE (surcharge résolue) | 150 000€ |
| Valorisation stocks cohérente (CUMP) | 210 000€ |
| Réception RFID (vs comptage manuel) | 95 000€ |
| ERP moderne (vs MDE obsolète) | 150 000€ |
| Productivité globale +40% | 214 200€ |
| **TOTAL GAINS ANNUELS** | **1 181 500€/an** |

### Bilan 2 Ans

| Année | Investissement | Gains Annuels | Cumulé Net |
|-------|----------------|---------------|------------|
| **Année 1** | 465K€ (P1+P2) | 1 181K€ | **+716K€** |
| **Année 2** | 115K€ (P3) | 1 181K€ | **+1 782K€** |
| **TOTAL 2 ANS** | **580K€** | **2 362K€** | **+1 782K€ net** |

**ROI** : (2 362K€ - 580K€) / 580K€ = **307%** ✅

**Payback global** : 580K€ / (1 181K€/12) = **5,9 mois** ✅

---

## 🎯 KPIs SUCCÈS

### KPIs Opérationnels

| KPI | Avant | Après | Gain |
|-----|-------|-------|------|
| **Temps génération KPI mensuels** | 24h | 2h | -92% |
| **Délai remontée info** | J+15 | Temps réel | -100% |
| **Temps réception stocks** | 6h/j | 45 min/j | -88% |
| **Productivité BE** | 43% | 78% | +81% |
| **Erreurs saisie manuelle** | 15% | <1% | -93% |
| **Nombre Excel opérationnels** | 30+ | 0 | -100% |

### KPIs Business

| KPI | Avant | Après | Impact |
|-----|-------|-------|--------|
| **Taux dépassements budgets** | 25% | 10% | -15 points |
| **Délai détection anomalies** | J+30 | J+0 | Temps réel |
| **NPS interne** | -10 | +40 | +50 points |
| **Turnover chefs chantier** | 18% | 10% | -8 points |
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

### OPEX Mensuel

| Service | Coût/mois |
|---------|-----------|
| Azure VM Odoo | 180€ |
| PostgreSQL Managed | 220€ |
| Azure SQL DWH | 150€ |
| Power BI Pro (30 licences) | 300€ |
| Linear (4 users) | 32€ |
| Azure Blob + Functions + Backup | 110€ |
| **TOTAL OPEX** | **~1 000€/mois = 12K€/an** |

*Note : Odoo Community = 0€ licences (vs 30€/user/mois Enterprise = 10 800€/an économisés)*

---

## 📊 MODÈLES ML

### Modèle 1 : Projection CA 3 Mois

- **Algorithme** : Prophet (Facebook) + LSTM (PyTorch)
- **Objectif** : Prédire CA mensuel M+1, M+2, M+3
- **Précision** : >85% (MAPE <15%)
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

➡️ **[SYNTHESE_EXECUTIVE.md](SYNTHESE_EXECUTIVE.md)** : Business case complet, ROI, recommandation GO

### Pour Équipe Projet

➡️ **[implementation/02_Planning_Implementation.md](implementation/02_Planning_Implementation.md)** : Planning 24 mois détaillé, jalons, budgets

➡️ **[implementation/it-logiciel/01_Architecture_Cible.md](implementation/it-logiciel/01_Architecture_Cible.md)** : Architecture IT/Logiciel complète (Odoo, RFID, stack technique)

➡️ **[implementation/bi-data-ml/01_Architecture_DataDriven.md](implementation/bi-data-ml/01_Architecture_DataDriven.md)** : Architecture Data/BI/ML (DWH, Power BI, modèles ML)

### Pour Compréhension Métier

➡️ **[docs/01_PERSONAS_Pain_Points.md](docs/01_PERSONAS_Pain_Points.md)** : 3 personas détaillés (Sylvie, Thomas, Isabelle), pain points quantifiés (1,18M€/an)

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

### ✅ GO IMMÉDIAT Phase 1 (Confiance HAUTE)

**Pourquoi GO ?**

1. ✅ **ROI exceptionnel** : 307% sur 2 ans, payback 5,9 mois
2. ✅ **Pain points critiques** : 1,18M€/an pertes INACCEPTABLES
3. ✅ **Risque maîtrisé** : Approche progressive 24 mois, pas big-bang
4. ✅ **Quick wins M1-6** : ROI 5 mois, gains visibles rapidement
5. ✅ **Scalabilité** : Système actuel ne scale pas (croissance impossible)
6. ✅ **Compétitivité** : Concurrents déjà digitalisés (retard Duret)
7. ✅ **RH** : Burn-out Sylvie/Thomas/Isabelle garanti si rien
8. ✅ **Succession** : Retraite Sylvie 10 ans = chaos si système pas automatisé

**Alternative "Ne rien faire"** :
- ❌ Pertes : 1,18M€/an × 5 ans = **5,9M€ perdus**
- ❌ Aggravation : Croissance = complexité Excel exponentielle
- ❌ Turnover : Départs Sylvie/Thomas/Isabelle (burn-out) = 500K€ succession
- ❌ Décisions : Direction pilote J+15 périmé → Erreurs stratégiques

**Verdict** : **GO IMMÉDIAT Phase 1** (M1-M6, 185K€, ROI 5 mois)

---

## 📞 CONTACTS & PROCHAINES ÉTAPES

### Équipe Recommandée

- **Sponsor Exécutif** : Membre CODIR/Direction (10% disponibilité)
- **Chef Projet** : Sylvie 50% ou externe (coordination, planning, budget)
- **Référents Métiers** (20% chacun) : Sylvie, Thomas, Isabelle, 1 RA

### Prochaines Étapes Immédiates

**Semaine 1-2** : Présentation CODIR, Go/No-Go Phase 1, désignation équipe

**Semaine 3-4** : Lancement 3 projets parallèles (RFID, Dashboards, Tickets)

**Mois 3-6** : Développements, tests, déploiements

**Mois 6** : Bilan Phase 1, mesure ROI réel, Go Phase 2

**Objectif M6** : Quick wins déployés, 464K€/an gains mesurés, ROI validé ✅

---

**📅 Date création** : 2025-11-17
**🔄 Version** : v1.0
**✅ Statut** : Documentation complète, prêt présentation CODIR
**📧 Contact** : Audit IT & Data BI/ML
