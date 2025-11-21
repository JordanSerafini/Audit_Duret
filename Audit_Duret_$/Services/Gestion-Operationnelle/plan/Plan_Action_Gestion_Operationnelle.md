# PLAN D'ACTION - GESTION OPÉRATIONNELLE
## Transformation Digitale Contrôle Gestion, Stocks, Bureau d'Études - Duret Électricité

**Date** : Janvier 2025
**Service** : Gestion Opérationnelle (Contrôle Gestion, Stocks, Bureau d'Études Transverse)
**Personas principaux** : Sylvie (Contrôleuse Gestion), Thomas (Responsable BE Transverse), Isabelle (Responsable Stocks)
**Périmètre** : ~100 collaborateurs, 30+ fichiers Excel, processus 80% manuels

---

## 🎯 SYNTHÈSE EXÉCUTIVE

### Problème Identifié

La Gestion Opérationnelle chez Duret Électricité est basée sur **30+ fichiers Excel** non connectés (KPI, marges, stocks, planning) et des processus **80% manuels** : génération KPI (temps important), comptage stocks (temps significatif), gestion demandes BE (surcharge chronique). L'ERP MDE est obsolète (15 ans, lent 30 sec chargement, plantages 2-3×/sem), la remontée info est tardive (décalage vs temps réel), et il n'y a **aucune transparence** (chef chantier pilote SANS voir budget).

### Solution Proposée

**"Du chaos Excel au pilotage temps réel"**

Mise en place d'un ERP moderne cloud + RFID/QR Code stocks + Système tickets BE + Dashboards BI temps réel + Analytics prédictifs (projection CA, détection anomalies, optimisation planning).

### Impact Attendu

| Métrique | Avant | Après (Cible) | Amélioration Visée |
|----------|-------|---------------|-------------------|
| **Nombre Excel opérationnels** | 30+ | Centralisation ERP | Complète |
| **Temps génération KPI mensuels** | Important | Réduction drastique | Substantielle |
| **Délai remontée info** | Décalé | Temps réel | Immédiate |
| **Temps réception stocks** | Significatif | Réduction drastique | Majeure |
| **Productivité BE** | Surcharge | Amélioration ciblée | Notable |
| **Erreurs saisie manuelle** | Fréquentes | Minimisées | Drastique |

---

## 📋 PARTIE 1 : ÉTAT DES LIEUX (AUDIT)

### 🔴 Constats Terrain

**Problèmes Majeurs Identifiés :**

1. **30+ fichiers Excel silos non connectés (CRITIQUE)**
   - KPI, marges, stocks, planning, suivi affaires, budgets chantiers
   - ❌ **Aucune intégration** : Triple/quadruple saisie même donnée (SAGE → MDE → Excel × 3)
   - Incohérences fréquentes (versions désynchronisées)
   - Risque perte donnée (corruption fichiers, suppression accidentelle)
   - Maintenance cauchemar (formules complexes, macros obsolètes)

2. **Remontée info tardive décalage critique (CRITIQUE)**
   - Direction décide avec données périmées (décalage vs temps réel)
   - Détection anomalies tardive (dépassements budgets découverts trop tard)
   - Pas alertes automatiques (aucun système surveillance)
   - Compilation manuelle KPI (temps important)

3. **Processus 80% manuels chronophages (CRITIQUE)**
   - **Comptage stocks** : Temps significatif (papier, ressaisies multiples)
   - **Génération KPI mensuels** : Temps important (compilation manuelle Excel)
   - **Priorisation BE** : Subjective chaos (pas critères objectifs, conflits fréquents)
   - Valorisation stock incohérente (même produit à 2 prix différents)

4. **ERP MDE obsolète 15 ans (IMPORTANT)**
   - Lent : 30 sec chargement écrans (perte temps accumulée significative)
   - Plantages : 2-3×/semaine (perte travail, frustration)
   - Distance inutilisable (lenteur insupportable via VPN)
   - Pas mobile (chefs chantier aucun accès terrain)
   - Maintenance coûteuse (serveur local vieillissant)

5. **Manque transparence aucune visibilité (IMPORTANT)**
   - Chef chantier pilote SANS voir budget/marge de SON chantier
   - Responsables Affaires voient uniquement leurs affaires (pas consolidation)
   - Direction pas vision temps réel consolidée
   - Silos hiérarchiques (chacun Excel isolé)

**Volume d'Activité :**
- 30+ fichiers Excel maintenus quotidiennement
- ~100 affaires/an (suivi budget, marges, avancement)
- Temps significatif comptage stocks (process manuel)
- Temps important génération KPI mensuels
- Surcharge BE (demandes dépassent capacité)

### 🔍 Causes Racines

**1. Architecture système = silos Excel déconnectés**
```
SAGE (Compta) ← Excel KPI → MDE (ERP obsolète)
                    ↓
              Excel Stocks ← Excel Planning
                    ↓
              Excel Marges ← Excel Budgets Chantiers
                    ↓
    Triple/quadruple saisie = erreurs fréquentes
```

**2. Processus inefficace**
- **Génération KPI** : Compilation manuelle Excel multiples (temps important)
- **Réception stocks** : Comptage papier → Saisie MDE → Ressaisie Excel (chronophage)
- **Priorisation BE** : Subjective informelle (conflits, insatisfaction terrain)
- **Budgets chantiers** : Excel isolés (pas consolidation, pas alertes)

**3. Goulots d'étranglement**
- Sylvie = hub central (dépendance totale, risque succession si départ)
- ERP MDE obsolète (lent, plantages, pas mobile, distance inutilisable)
- Aucune automatisation (KPI, alertes, priorisation)
- Manque transparence (silos hiérarchiques, Excel isolés)

### 👥 Impact Utilisateurs

| Persona | Pain Points | Impact |
|---------|-------------|--------|
| **Sylvie** (Contrôleuse Gestion, 52 ans) | Temps important génération KPI manuels, Excel omniprésent (30+), remontée info tardive décalage, heures sup fin mois fréquentes | **Critique** : Risque burn-out |
| **Thomas** (Responsable BE, 38 ans) | Surcharge chronique (demandes dépassent capacité), priorisation subjective chaos conflits, pas SLA insatisfaction terrain | **Élevé** : ~30% capacité temps perdu |
| **Isabelle** (Responsable Stocks, 45 ans) | Temps significatif comptage manuel stocks, valorisation incohérente (même produit 2 prix), stock sous-utilisé (achats inutiles) | **Moyen** : Inefficacité process |

---

## 🚀 PARTIE 2 : OPPORTUNITÉS IDENTIFIÉES

### 🎯 Vision Cible

**Transformation en pilotage temps réel data-driven**
- 🎯 **ERP moderne** : Cloud, mobile, APIs ouvertes (vs MDE obsolète)
- 📊 **Dashboards BI** : Temps réel (vs Excel décalage)
- 🏷️ **RFID/QR Code stocks** : Réception automatisée (vs comptage manuel)
- 🎫 **Système tickets BE** : Priorisation structurée (vs chaos subjectif)
- 🤖 **Analytics prédictifs** : Projection CA, détection anomalies, optimisation planning
- 👁️ **Transparence** : Chef chantier voit SON budget, RA voit SES affaires, Direction voit TOUT

### 🏗️ Architecture Proposée

#### **VOLET 1 : ERP MODERNE CLOUD**

**Solution recommandée (à valider étude faisabilité) :**
- ERP moderne cloud (solution à définir après benchmark)
- Modules : Sales, Purchase, Inventory, Accounting, Project, HR
- Custom apps : BE Tickets, RBAC Chantiers, RFID Integration
- Mobile app : iOS + Android native, offline mode
- APIs ouvertes : Intégrations SAGE, Lireco RFID, Linear, Power BI

**Fonctionnalités essentielles :**

1. **Gestion Affaires complète**
   - Devis, commandes, factures (cycle complet ventes)
   - Budget chantier : Prévisionnel vs réalisé (temps réel)
   - Analytique : Consommation heures, matériel, sous-traitance par chantier
   - Marges : Calcul automatique temps réel (vs Excel manuel)
   - Timeline chantier : Activités, incidents, commandes chronologiques

2. **Achats & Stocks intégrés**
   - Catalogue unifié : Fournisseurs multiples (Rexel, Sonepar, autres)
   - Workflow achat : Demande → Validation → Commande → Réception → Facture
   - Réception RFID/QR Code : Automatisée (vs comptage manuel)
   - Valorisation CUMP : Cohérente (1 prix vs 2 prix incohérents actuellement)
   - Inventaires : Réduction significative du temps (RFID)
   - Multi-dépôts : Gestion plusieurs sites

3. **RBAC Transparence**
   - Chef chantier voit SON budget : Prévisionnel, consommé, reste à faire ✅
   - Responsable Affaires voit SES affaires : Pas celles autres RA ✅
   - Direction voit TOUT consolidé : KPIs globaux, analytics ✅
   - Audit trail : Qui a fait quoi, quand (traçabilité complète)

4. **Mobile app (iOS + Android)**
   - Chefs chantier : Consultation budget, saisie heures, photos, rapports
   - Responsables Affaires : Validation rapports, commandes, dashboard chantiers
   - Mode offline : Fonctionnalités essentielles sans réseau, sync auto

#### **VOLET 2 : RFID/QR CODE STOCKS**

**Composantes solution :**

1. **Tags RFID UHF passifs**
   - Collés colis/palettes réception fournisseurs
   - Données : Référence produit, quantité, lot, date réception
   - Coût : À chiffrer selon volumétrie

2. **Portiques RFID fixes**
   - Installés dépôts principaux (entrée/sortie)
   - Lecture automatique passage colis/palettes
   - Identification instantanée (vs comptage manuel)

3. **Douchettes mobiles RFID**
   - Lecture unitaire colis
   - Inventaires ponctuels rapides
   - Mouvements stocks internes

4. **Intégration ERP (API REST)**
   - Réception automatique : Portique RFID → API → ERP (mise à jour stocks temps réel)
   - Valorisation CUMP automatique
   - Alertes stocks bas automatiques
   - Traçabilité complète mouvements

**Gains RFID :**
- Réception : Réduction drastique du temps (comptage manuel → scan automatique)
- Erreurs : Réduites drastiquement (saisie manuelle éliminée)
- Inventaires : Réduction significative du temps (RFID rapide vs manuel long)
- Valorisation : Cohérente (CUMP automatique vs 2 prix manuels incohérents)

#### **VOLET 3 : SYSTÈME TICKETS BE**

**Fonctionnalités clés :**

1. **Création tickets structurés**
   - Formulaire : Chantier, type demande, description, urgence, photos, deadline
   - Demandeur : Chef chantier, Responsable Affaires, autres
   - Validation : Si demande hors périmètre BE, refus justifié

2. **Priorisation automatique objective**
   - Critères : Deadline (urgence), CA chantier (impact business), Ancienneté demande (équité)
   - Algorithme pondéré : Score global calculé automatiquement
   - File tickets priorisée : Transparente (demandeurs voient position + raisons)

3. **Workflow traitement**
   - Assignation : Bureau d'Études (selon type demande, charge travail)
   - Statuts : Nouveau → Assigné → En cours → Résolu → Fermé
   - Notifications : Temps réel (assignation, résolution, commentaires)
   - SLA : Temps résolution cible, taux respect

4. **Dashboards BE & Demandeurs**
   - Dashboard Thomas BE : File tickets priorisée, charge travail, SLA, performance
   - Dashboard Demandeurs : Mes demandes, statut, position file, raisons priorisation
   - Transparence : Équité traitement vs chaos subjectif actuel

**Gains Système Tickets :**
- Productivité : Amélioration ciblée (priorisation objective vs subjective)
- Équité : Réduction conflits (transparence priorisation)
- SLA : Temps résolution cible, mesure performance
- Satisfaction terrain : Visibilité traitement, raisons priorisation

#### **VOLET 4 : DASHBOARDS BI TEMPS RÉEL**

**Dashboard Sylvie Contrôle Gestion :**
- **KPIs automatisés** : Génération instantanée vs temps important actuel
  - CA réalisé vs prévisionnel (mensuel, annuel)
  - Marges par affaire (temps réel)
  - Taux dépassements budgets
  - Heures consommées vs budgétées
  - Masse salariale vs budget
- **Alertes automatiques** :
  - Affaires risque dépassement budget >10%
  - Marges négatives détectées
  - Heures dépassant budget >15%
- **Temps génération** : Instantané vs temps important Excel manuel

**Dashboard Responsables Affaires :**
- **Vue 360° SES affaires** (affectées uniquement)
- **KPIs** : Budget consommé vs prévisionnel, heures, avancement, incidents
- **Timeline** : Rapports, incidents, commandes chronologiques
- **Alertes** : Dépassements budgets, retards planning, incidents non résolus

**Dashboard Direction :**
- **Vue consolidée TOUS chantiers**
- **KPIs globaux** : CA, marges, taux dépassements, satisfaction client
- **Analytics** : Chantiers rentables vs déficitaires, performance chefs, fournisseurs
- **Alertes** : Chantiers risque, incidents critiques, dépassements budgets
- **Reporting automatique** : Quotidien, hebdomadaire, mensuel (vs manuel actuel)

#### **VOLET 5 : ANALYTICS PRÉDICTIFS (ML/IA)**

**Opportunité 1 : Projection CA**
- **Approche** : Time series forecasting + Deep Learning
- **Données** : Historique CA mensuel, pipeline affaires, saisonnalité
- **Objectif** : Prédire CA mensuel à court/moyen terme (précision à valider après POC)
- **Valeur** : Anticiper trésorerie, décisions recrutement, investissements

**Opportunité 2 : Détection Anomalies Budgets**
- **Approche** : Algorithmes détection anomalies (Isolation Forest, LSTM Autoencoder)
- **Features** : Taux consommation budget, vitesse consommation, écarts prévisionnel, historique chantiers similaires
- **Objectif** : Identifier affaires risque dépassement (alerte précoce)
- **Valeur** : Actions correctives anticipées, réduction dépassements

**Opportunité 3 : Optimisation Planning Équipes**
- **Approche** : Optimisation combinatoire (Constraint Programming, Genetic Algorithms)
- **Contraintes** : Capacités équipes, compétences requises, priorités chantiers, délais
- **Objectif** : Suggérer allocations optimales ressources (équipes → chantiers)
- **Valeur** : Maximisation productivité, respect délais, satisfaction client

---

## 📅 PARTIE 3 : APPROCHE PROGRESSIVE (24 MOIS)

### 🔷 PHASE 1 : QUICK WINS (Mois 1-6)

**Objectif :** Résoudre pain points critiques + gains rapides

| Projet | Durée | Livrables | Gains |
|--------|-------|-----------|-------|
| **RFID/QR Code stocks** | M1-M4 | Tags RFID, portiques/douchettes, intégration ERP, formation équipe | Réception automatisée, réduction temps drastique vs comptage manuel |
| **Dashboards Power BI KPI** | M1-M5 | Pipeline ETL quotidien, DWH star schema, 3 dashboards RBAC (Sylvie, RA, Direction) | KPIs instantanés vs temps important Excel manuel, remontée info temps réel |
| **Système tickets BE** | M2-M6 | App tickets (web+mobile), algorithme priorisation, workflow traitement, dashboards | Priorisation objective vs chaos subjectif, productivité amélioration ciblée, équité |

**Détails Phase 1 :**

**RFID/QR Code stocks (M1-M4) :**
- M1 : Audit stocks actuel (volumétrie, process, pain points)
- M1 : Sélection solution RFID (benchmark prestataires, POC)
- M2-M3 : Installation portiques dépôts principaux + douchettes mobiles
- M3 : Intégration API ERP (réception automatique, valorisation CUMP)
- M4 : Formation équipe stocks (Isabelle + équipe), tests pilotes
- Validation M4 : Réduction temps réception mesurée, erreurs réduites

**Dashboards Power BI KPI (M1-M5) :**
- M1 : Audit sources données (SAGE, MDE, Excel), conception DWH star schema
- M2 : Setup Azure SQL DWH + ETL quotidiens (ADF ou équivalent)
- M3 : Développement dashboards (Sylvie, RA, Direction)
- M4 : RBAC implémentation (RLS Power BI : chacun voit SES données)
- M5 : Formation utilisateurs (2h), déploiement, support
- Validation M5 : KPIs instantanés utilisés quotidiennement, remontée info temps réel

**Système tickets BE (M2-M6) :**
- M2 : Conception UX/UI (formulaires, dashboards)
- M3 : Développement app tickets (backend Node.js + frontend React)
- M4 : Algorithme priorisation (critères : deadline, CA, ancienneté)
- M5 : Tests pilote (Thomas + 5 chefs terrain)
- M6 : Déploiement généralisé, formation équipes
- Validation M6 : Productivité amélioration ciblée mesurée, satisfaction terrain

**Jalons Phase 1 :**
- ✅ **M0 : GO/NO-GO CODIR** (validation budget Phase 1)
- ✅ **M6 : Bilan Phase 1** → Validation gains réels → GO/NO-GO Phase 2

---

### 🔶 PHASE 2 : STRUCTURANT (Mois 7-18)

**Objectif :** Migration ERP + RBAC Transparence + ML Prédictif

| Projet | Durée | Gains Attendus |
|--------|-------|----------------|
| **Migration ERP moderne** | M7-M16 | ERP cloud remplace MDE obsolète, 30+ Excel centralisés, mobile app déployée | Rapidité, fiabilité, mobilité, centralisation données |
| **RBAC Transparence** | M13-M15 | Chef voit SON budget, RA voit SES affaires, Direction voit TOUT | Transparence vs silos actuels, autonomie utilisateurs |
| **ML Prédictif** | M15-M18 | Projection CA, détection anomalies budgets, optimisation planning | Anticipation, alertes précoces, décisions data-driven |

**Détails Phase 2 :**

**Migration ERP moderne (M7-M16) :**
- M7 : Benchmark ERP (solutions à évaluer après étude faisabilité)
- M8-M9 : Sélection ERP, négociation contrat, kickoff projet
- M10-M11 : POC ERP (modules Sales, Purchase, Inventory, Accounting, Project)
- **M11 : GO/NO-GO** (après POC : utilisabilité validée, performance OK, intégrations testées)
- M12-M14 : Audit qualité données Excel/MDE (nettoyage, déduplication, archivage)
- M14-M15 : Migration données progressive (affaires actives, historique récent, stocks)
- M15 : Paramétrage workflows (achats, validation, budgets)
- M16 : Formation équipes (3-5j selon rôles), support intensif, go-live

**RBAC Transparence (M13-M15) :**
- M13 : Conception matrice permissions (rôles : Chef, RA, Sylvie, Direction)
- M14 : Implémentation RBAC ERP + Power BI (RLS : chacun voit SES données)
- M15 : Tests utilisateurs (validation accès corrects, sécurité)
- Validation M15 : Transparence vs silos actuels, autonomie utilisateurs

**ML Prédictif (M15-M18) :**
- M15 : Préparation données (extraction historique, feature engineering)
- M16 : POC modèles (Time Series Forecasting CA, Détection Anomalies Budgets)
- M17 : Déploiement modèles (Azure ML ou équivalent, API inference)
- M18 : Intégration dashboards (prédictions CA, alertes anomalies)
- Validation M18 : Précision modèles mesurée (MAPE CA, taux détection anomalies)

**Jalons Phase 2 :**
- ✅ **M11 : GO/NO-GO ERP** (après POC : validation technique)
- ✅ **M18 : Bilan Phase 2** → Validation automatisations + ML → GO/NO-GO Phase 3

---

### 🔵 PHASE 3 : OPTIMISATION (Mois 19-24)

**Objectif :** Gouvernance Données + Culture Data-Driven

| Projet | Durée | Livrables |
|--------|-------|-----------|
| **Gouvernance Données** | M19-M21 | Data quality framework, MDM (produits, clients), audits qualité trimestriels |
| **Culture Data-Driven** | M19-M24 | Formations continues, champions data internes, documentation complète, amélioration continue |

**Détails Phase 3 :**

**Gouvernance Données (M19-M21) :**
- M19 : Framework qualité données (règles validation, KPIs qualité)
- M20 : MDM (Master Data Management : produits, clients, fournisseurs)
- M21 : Audits qualité trimestriels (détection doublons, incohérences, données manquantes)

**Culture Data-Driven (M19-M24) :**
- M19-M24 : Formations continues (BI, ML, analytics) équipes
- M20 : Désignation champions data internes (Sylvie, Thomas, 1 RA)
- M21-M23 : Documentation complète (utilisateurs, admin, data catalog)
- M24 : Bilan final projet, ROI mesuré, plan amélioration continue

**Jalons Phase 3 :**
- ✅ **M24 : Bilan Final** → ROI global validé → Plan amélioration continue

---

## 🎁 PARTIE 4 : BÉNÉFICES ATTENDUS

### 📊 Objectifs d'Amélioration Visés

| Indicateur | ÉTAT ACTUEL | OBJECTIF CIBLE | Amélioration Visée |
|------------|-------------|----------------|-------------------|
| **Nombre Excel opérationnels** | 30+ | Centralisation ERP | Complète |
| **Temps génération KPI mensuels** | Important | Réduction drastique | Substantielle |
| **Délai remontée info** | Décalé | Temps réel | Immédiate |
| **Temps réception stocks** | Significatif | Réduction drastique | Majeure |
| **Productivité BE** | Surcharge | Amélioration ciblée | Notable |
| **Erreurs saisie manuelle** | Fréquentes | Minimisées | Drastique |
| **Taux dépassements budgets** | Élevé | Réduction ciblée | Significatif |
| **Délai détection anomalies** | Tardif | Temps réel | Immédiat |

### 💡 Bénéfices Utilisateurs

**Sylvie (Contrôleuse Gestion, 52 ans) :**
- ✅ KPIs instantanés vs temps important Excel manuel
- ✅ Dashboards temps réel vs décalage actuel
- ✅ Alertes automatiques anomalies vs détection tardive
- ✅ Centralisation données ERP vs 30+ Excel silos
- ✅ Heures sup fin mois minimisation vs fréquentes actuellement
- ✅ Risque burn-out réduit (charge réduite)

**Thomas (Responsable BE, 38 ans) :**
- ✅ File tickets priorisée objective vs chaos subjectif actuel
- ✅ Dashboards charge travail, SLA, performance
- ✅ Équité traitement (transparence priorisation vs conflits actuels)
- ✅ Productivité amélioration ciblée (priorisation optimale)
- ✅ Surcharge suppression ciblée (capacité respectée)

**Isabelle (Responsable Stocks, 45 ans) :**
- ✅ Réception RFID automatisée vs comptage manuel temps significatif
- ✅ Valorisation CUMP cohérente vs même produit 2 prix incohérents
- ✅ Inventaires réduction significative temps (RFID vs manuel)
- ✅ Alertes stocks bas automatiques vs aucune actuellement
- ✅ Optimisation stock (achats nécessaires vs inutiles actuellement)

**Responsables Affaires :**
- ✅ Dashboard 360° SES chantiers (budget, avancement, incidents)
- ✅ KPIs temps réel (budget consommé vs prévisionnel)
- ✅ Alertes dépassements budgets (actions correctives anticipées)
- ✅ Validation digitale (rapports, commandes)
- ✅ Transparence vs silos Excel actuels

**Chefs Chantier :**
- ✅ Consultation budget SON chantier (prévisionnel, consommé, reste) vs aucune visibilité actuellement
- ✅ App mobile (saisie heures, photos, rapports) vs papier actuel
- ✅ Autonomie vs appels bureau multiples actuels

**Direction :**
- ✅ Dashboard consolidé TOUS chantiers temps réel
- ✅ KPIs globaux instantanés vs décalage actuel
- ✅ Analytics (chantiers rentables vs déficitaires, performance)
- ✅ Projection CA prédictive (anticipation trésorerie, décisions)
- ✅ Alertes chantiers risque (actions correctives anticipées)
- ✅ Décisions data-driven vs intuitives actuellement

### 🛡️ Risques à Maîtriser

| Risque | Probabilité | Mitigation |
|--------|-------------|------------|
| **Résistance changement** (équipes habitudes Excel) | Moyenne-Haute | Co-conception, champions internes, formation intensive (5j), support 6 mois |
| **Qualité données migration** (Excel incohérents → Migration échoue) | Moyenne | Audit qualité M7, nettoyage pré-migration M8-9, migration progressive |
| **Dépendance Sylvie** (part pendant projet → Blocage) | Faible-Moyenne | Backup désigné M1, doc système Excel avant remplacement, primes rétention |
| **Budget dépassé** (dev plus longs → +20% coûts) | Faible-Moyenne | Contingence 15% incluse, jalons validation, forfaits vs régie, arrêt si >20% |
| **ROI surestimé** (gains réels < prévus) | Faible | Hypothèses conservatrices, mesure before/after, suivi mensuel ROI |

---

## ✅ PROCHAINES ÉTAPES

### 1️⃣ **VALIDATION DIRECTION (Semaine 1-2)**
- Présenter ce plan CODIR
- Q&A, Vote Go/No-Go Phase 1
- Désignation équipe projet (sponsor exécutif, chef projet, référents métiers)

### 2️⃣ **ÉTUDE DE FAISABILITÉ DÉTAILLÉE (Semaine 3-4)**
- Chiffrage précis : RFID, Dashboards BI, Système tickets, ERP migration, ML
- Sélection solutions techniques (ERP, Cloud provider, RFID, etc.)
- Planning détaillé 24 mois (jalons, ressources, budgets par phase)
- Identification prestataires (intégration, dev, formation)

### 3️⃣ **PRÉPARATION PHASE 1 (Mois 1)**
- Audit stocks détaillé (volumétrie, process, pain points)
- Audit sources données (SAGE, MDE, Excel : qualité, volumétrie)
- Conception architectures (RFID, DWH, Système tickets)
- Formation équipe projet

### 4️⃣ **LANCEMENT PHASE 1 (Mois 1-6)**
- RFID stocks pilote (M1-M4)
- Dashboards BI KPI (M1-M5)
- Système tickets BE (M2-M6)
- Support intensif utilisateurs

### 5️⃣ **BILAN PHASE 1 (Mois 6)**
- Validation gains réels quantifiés (temps réception stocks, KPIs instantanés, productivité BE)
- Communication gains (interne)
- **GO/NO-GO Phase 2** (migration ERP si Phase 1 réussie)

---

**📅 Document créé :** Janvier 2025
**🎯 Projet :** Transformation Digitale Gestion Opérationnelle
**⏱️ Durée :** 24 mois (3 phases progressives)
**📊 Objectif :** Remplacer 30+ Excel par ERP moderne, automatiser processus manuels, pilotage temps réel
**⚠️ Note :** Chiffrage financier détaillé à réaliser lors de l'étude de faisabilité (ERP, RFID, BI, ML, intégrations, formation, contingence)
