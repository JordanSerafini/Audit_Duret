# 📊 SYNTHÈSE EXÉCUTIVE - Gestion Opérationnelle

**Service** : Gestion Opérationnelle (Contrôle Gestion, Stocks, BE Transverse)
**Date** : Novembre 2025
**Destinataire** : Direction Générale Duret Électricité
**Auteur** : Audit IT & Data BI/ML

---

## 🎯 RÉSUMÉ EN 30 SECONDES

> **L'architecture actuelle de la Gestion Opérationnelle repose sur 30+ fichiers Excel non connectés, avec des processus majoritairement manuels, aucune transparence des données, et des remontées d'information très tardives.**
>
> **Proposition** : Digitalisation complète (ERP moderne + Dashboards temps réel + RFID stocks + Système tickets BE)
>
> **Approche** : 3 phases sur 24 mois (Quick Wins → Structurant → Optimisation)

---

## ⚠️ PROBLÈME : CHAOS ORGANISATIONNEL CRITIQUE

### Situation Actuelle

La Gestion Opérationnelle de Duret Électricité repose sur **Excel et processus manuels** :

**Architecture chaos** :
- ✅ **30+ fichiers Excel** non connectés (KPI, marges, stocks, planning, etc.)
- ✅ **Silos de données** : Triple/quadruple saisie de la même information (SAGE → MDE → Excel × 3)
- ✅ **Processus très manuels** : Réception stocks (comptage papier chronophage), génération KPI (consolidation longue), priorisation BE (subjective, source de conflits)
- ✅ **ERP MDE obsolète** : Ancien système, très lent à distance (inutilisable), plantages fréquents (2-3×/semaine)
- ✅ **Aucune transparence** : Chef chantier pilote SANS voir budget/marge de son chantier
- ✅ **Remontée info très tardive** : Données décalées de plusieurs jours → Décisions retardées
- ✅ **Dépendance aux personnes** : Si Sylvie (Contrôleuse Gestion) part = chaos organisationnel

### Problèmes Identifiés

| Problème | Description |
|----------|-------------|
| **Tableau Excel KPI manuel** | Sylvie passe beaucoup de temps à générer les KPI mensuels (saisies/vérifications manuelles) |
| **Remontée info tardive** | Dépassements budgets non anticipés, pilotage à l'aveugle |
| **Silos données** | Ressaisies multiples, erreurs, incohérences |
| **Manque transparence** | Turnover, décisions sous-optimales, chefs sans visibilité |
| **Surcharge BE transverse** | Aucun système de tickets, priorisation subjective, conflits |
| **Valorisation stocks incohérente** | Même produit à 2 prix différents, impossibilité de réutiliser stock |
| **Réception stocks manuelle** | Comptage papier chronophage, erreurs fréquentes |
| **ERP MDE obsolète** | Lenteurs, plantages, pas de mobilité |

### Personas Impactés

**Sylvie** (Contrôleuse Gestion, 52 ans) :
- Surcharge fin de mois (burn-out potentiel)
- Génération KPI mensuels très longue (majoritairement saisies/vérifications manuelles)
- Données décalées → Direction pilote sans vision temps réel

**Thomas** (Responsable BE Transverse, 38 ans) :
- Surcharge chronique : Demandes dépassent capacité d'équipe, heures non traitées
- Priorisation subjective : Conflits interpersonnels, manque d'équité
- Heures supplémentaires quotidiennes : Épuisement

**Isabelle** (Responsable Stocks, 45 ans) :
- Beaucoup de temps sur comptage manuel (vs scan RFID potentiel)
- Valorisation stocks chaotique : Même produit à 2 prix différents
- Inventaires mensuels très pénibles et longs

---

## ✅ SOLUTION : DIGITALISATION COMPLÈTE GESTION OPÉRATIONNELLE

### Vision Cible

**"Du chaos Excel au pilotage temps réel data-driven"**

1. **ERP Moderne Cloud** : Remplacement MDE obsolète (Odoo ou équivalent)
2. **Dashboards Temps Réel** : KPI automatisés (vs Excel manuel)
3. **RFID/QR Code Stocks** : Réception automatisée (vs comptage papier)
4. **Système Tickets BE** : Priorisation algorithmique (vs subjectif)
5. **RBAC Transparence** : Chef chantier accès à son budget/marge
6. **Alertes & Anomalies** : Système proactif de détection

### Architecture Cible

```
┌────────────────────────────────────────────────────┐
│           UTILISATEURS (Web + Mobile)              │
├──────────┬──────────┬──────────┬──────────────────┤
│ Direction│ Sylvie   │ Thomas   │ Chefs Chantier   │
│          │ (Ctrl    │ (BE)     │ + RA + Isabelle  │
│          │ Gestion) │          │                   │
└────┬─────┴────┬─────┴────┬─────┴────┬─────────────┘
     │          │          │          │
     │ HTTPS (Cloud, SSO, 2FA)        │
     ▼          ▼          ▼          ▼
┌────────────────────────────────────────────────────┐
│         ERP MODERNE CLOUD (Odoo BTP)               │
│  - Affaires, Devis, Achats, Stocks, Compta        │
│  - Mobile-first (iOS + Android)                    │
│  - APIs ouvertes                                   │
│  - RBAC granulaire                                 │
└──────────┬──────────┬──────────┬──────────────────┘
           │          │          │
           ▼          ▼          ▼
┌──────────────┐  ┌──────────┐  ┌─────────────────┐
│  Dashboards  │  │ Système  │  │ RFID/QR Stocks  │
│  BI Temps    │  │ Tickets  │  │ (Lireco+)       │
│  Réel        │  │ BE       │  │ Scan Auto       │
└──────────────┘  └──────────┘  └─────────────────┘
           │          │          │
           ▼          ▼          ▼
┌────────────────────────────────────────────────────┐
│      DATA WAREHOUSE (Azure SQL + Blob Storage)     │
│  - Centralisation toutes données                   │
│  - Historisation (audit trail)                     │
│  - Analyses consolidées                            │
│  - **Open Banking API** (Rapprochement Bancaire)   │
└────────────────────────────────────────────────────┘
```

### Fonctionnalités Clés

**1. Dashboards KPI Temps Réel (vs Excel manuel)**
- Sylvie : KPI mensuels générés **automatiquement** en quelques heures (vs plusieurs jours)
- Direction : Accès **temps réel** (vs données décalées)
- Alertes : Dépassements budgets, retards, marges négatives
- Analyses consolidées automatiques

**2. Système Tickets BE (vs priorisation subjective)**
- Demandes centralisées : Formulaire standardisé (vs mails/WhatsApp chaotiques)
- Priorisation algorithmique : Critères objectifs (deadline, CA, ancienneté)
- Transparence : Demandeurs voient classement + raisons
- Capacité visible : Charge visible vs capacité → Alerte surcharge

**3. RFID/QR Code Stocks (vs comptage manuel)**
- Réception : Scan BL rapide vs comptage manuel long et pénible
- Valorisation : Politique unique cohérente (CUMP) vs incohérences actuelles
- Inventaires : RFID portique rapide vs manuel très long
- Visibilité : RA consulte stock avant commander du neuf

**4. RBAC Transparence (vs silos)**
- Chef chantier : Accès **son** budget, consommé, reste à faire, marge
- RA : Accès **ses** affaires (pas celles des autres RA)
- Direction : Accès **tout** consolidé
- Audit trail : Qui a fait quoi, quand

**5. ERP Moderne Cloud (vs MDE obsolète)**
- Rapide : Chargement écrans <2 sec (vs 10-30 sec MDE)
- Distance : Cloud accessible partout (vs MDE distant inutilisable)
- Mobile : App iOS+Android (vs aucune mobilité)
- Fiable : Haute disponibilité (vs plantages fréquents)

---

## 🧠 PARTIE 2 BIS : OPPORTUNITÉS DATA & IA (NOUVEAU)

La centralisation des données ouvre la voie à des analyses avancées décrites dans [ETUDE_DATA_DRIVEN.md](../../data-ml/ETUDE_DATA_DRIVEN.md) :

### 1. Rapprochement Bancaire Automatique (Open Banking)
*   **Concept** : Connexion directe aux banques pour lettrer automatiquement 90% des écritures.
*   **Gain** : Gain de temps massif pour la comptabilité, trésorerie à jour au jour le jour.

### 2. Prévision de Trésorerie (Cash Flow Forecasting)
*   **Concept** : L'IA analyse les échéances clients et fournisseurs pour projeter la courbe de trésorerie à 3 mois.
*   **Gain** : Anticipation des besoins de financement, sérénité pour la direction.

---

## 📅 PLAN D'ACTION RECOMMANDÉ

### Phase 1 : Quick Wins (Mois 1-6)

**Objectif** : Résoudre pain points critiques immédiats

**Projets** :
1. ✅ **RFID/QR Code stocks** (M1-4)
   - POC RFID dépôt Annecy (M1-2)
   - Déploiement Annecy + Albertville (M3-4)
   - Formation magasiniers
   - **Gain** : Réduction drastique temps réception, valorisation cohérente

2. ✅ **Dashboards BI KPI** (M1-5)
   - Audit données SAGE/MDE (M1)
   - Dev dashboards (M2-4)
     - KPI direction (CA, marges, trésorerie)
     - KPI Responsables Affaires (leurs affaires)
     - KPI Chefs chantier (RBAC : leur chantier)
   - Formation utilisateurs (M5)
   - **Gain** : Réduction drastique temps KPI Sylvie, temps réel vs décalé

3. ✅ **Système tickets BE** (M2-6)
   - Benchmark solutions (Jira, Asana, Linear) (M2)
   - Config + workflows (M3-4)
   - Algorithme priorisation (critères pondérés) (M4)
   - Tests pilote (M5)
   - Déploiement général (M6)
   - **Gain** : Productivité BE améliorée, équité, transparence

---

### Phase 2 : Structurant (Mois 7-18)

**Objectif** : Remplacer ERP obsolète, centraliser données

**Projets** :
1. ✅ **Migration ERP moderne** (M7-16)
   - Benchmark ERP (Odoo vs alternatives) (M7-8)
   - POC 6 semaines (M9-10)
   - Go/No-Go (M11)
   - Migration progressive (M12-16) :
     - M12-13 : Affaires, Devis
     - M13-14 : Achats, Stocks (intégration RFID)
     - M14-15 : Compta analytique
     - M15-16 : Intégrations (SAGE compta, BI)
   - Formation équipes intensive
   - **Gain** : Suppression lenteurs MDE, mobilité, collaboration

2. ✅ **RBAC Transparence** (M13-15)
   - Définition rôles (Admin, Direction, RA, Chef, Technicien, Lecture)
   - Permissions granulaires ERP + BI
   - Audit trail (qui fait quoi)
   - **Gain** : Transparence, réduction turnover, responsabilisation

3. ✅ **Analyses Avancées** (M15-18)
   - Data Warehouse (centralisation données)
   - Analyses consolidées automatiques
   - Détection anomalies budgets
   - Intégration dashboards BI
   - **Gain** : Anticipation, réduction dépassements

---

### Phase 3 : Optimisation (Mois 19-24)

**Objectif** : Gouvernance données, culture data-driven

**Projets** :
1. ✅ **Gouvernance données** (M19-21)
   - Data Quality : Nettoyage, déduplication, validation
   - MDM (Master Data Management) : Clients, Produits, Fournisseurs
   - Propriété données (responsable désigné)
   - **Gain** : Fiabilité décisions améliorée

2. ✅ **Culture data-driven** (M19-24)
   - Formation direction : "Piloter par la data"
   - Formation managers : "Dashboards + prise décision"
   - Accompagnement changement continu
   - Champions internes (Sylvie, Thomas, RA)
   - **Gain** : Adoption, réduction résistance

---

## 🎯 KPIs DE SUCCÈS

### Indicateurs Opérationnels

| KPI | Avant | Cible Après |
|-----|-------|-------------|
| **Temps génération KPI mensuels** | Plusieurs jours | Quelques heures |
| **Délai remontée info** | Données décalées | Temps réel |
| **Temps réception stocks** | Comptage manuel long | Scan rapide |
| **Productivité BE** | Surcharge chronique | Capacité respectée |
| **Erreurs saisie manuelle** | Fréquentes | Quasi nulles |
| **Nombre Excel opérationnels** | 30+ fichiers | 0 (ERP centralisé) |

### Indicateurs Business

| KPI | Avant | Cible Après |
|-----|-------|-------------|
| **Taux dépassements budgets** | Élevé | Réduit significativement |
| **Délai détection anomalies** | Très tardif | Temps réel |
| **Satisfaction interne** | Faible (burn-out) | Élevée |
| **Turnover chefs chantier** | Problématique | Réduit |
| **Heures sup Sylvie (fin mois)** | Fréquentes | Quasi nulles |
| **Surcharge BE (demandes non traitées)** | Importante | Supprimée |

---

## ⚠️ RISQUES & MITIGATION

### Risques Techniques

**1. Résistance changement (Probabilité HAUTE)**
- **Risque** : Équipes habituées Excel refusent ERP
- **Mitigation** :
  - Co-conception avec utilisateurs (ateliers)
  - Champions internes (Sylvie, Thomas)
  - Formation intensive
  - Support réactif prolongé
  - Quick wins communicés

**2. Qualité données migration (Probabilité MOYENNE)**
- **Risque** : Données Excel incohérentes → Migration difficile
- **Mitigation** :
  - Audit qualité données avant migration
  - Nettoyage pré-migration
  - Migration progressive (tests)
  - Validation post-migration

**3. Dépendance Sylvie (Probabilité FAIBLE)**
- **Risque** : Sylvie part pendant projet → Blocage
- **Mitigation** :
  - Backup désigné (formation dès M1)
  - Documentation système Excel avant remplacement
  - Transfert compétences progressif

### Risques Business

**4. Planning dépassé (Probabilité MOYENNE)**
- **Risque** : Développements plus longs que prévu
- **Mitigation** :
  - Jalons validation avant phases
  - Approche agile itérative
  - Arrêt si dépassement significatif

**5. Adoption insuffisante (Probabilité MOYENNE)**
- **Risque** : Utilisateurs n'utilisent pas nouveaux outils
- **Mitigation** :
  - Ateliers besoins en amont
  - Mesure before/after systématique
  - Suivi adoption mensuel
  - Ajustements itératifs

---

## 🏆 RECOMMANDATION DIRECTION

### ✅ GO Recommandé (Confiance HAUTE)

**Pourquoi GO ?**

1. ✅ **Pain points critiques** : Pertes actuelles significatives (temps, erreurs, burn-out)
2. ✅ **Risque maîtrisé** : Approche progressive (24 mois), pas de big-bang
3. ✅ **Quick wins rapides** : Gains visibles dès Phase 1 (M1-6)
4. ✅ **Scalabilité** : Croissance entreprise impossible avec système actuel
5. ✅ **Compétitivité** : Concurrents déjà digitalisés (Duret en retard)
6. ✅ **RH** : Burn-out Sylvie/Thomas/Isabelle risqué si rien fait
7. ✅ **Succession** : Départ Sylvie futur = chaos si système pas automatisé

**Alternative "Ne rien faire"** :
- ❌ **Pertes récurrentes** : Temps perdu, erreurs, burn-out continus
- ❌ **Aggravation** : Croissance entreprise = complexité Excel exponentielle
- ❌ **Turnover** : Sylvie/Thomas/Isabelle risquent de partir (burn-out)
- ❌ **Risque décisions** : Direction pilote avec données décalées → Erreurs stratégiques

**Verdict** : **GO IMMÉDIAT Phase 1** (M1-6)

---

## 📌 PROCHAINES ÉTAPES IMMÉDIATES

### Semaine 1-2 : Validation Direction

1. ✅ **Présentation CODIR**
   - Présenter cette synthèse
   - Q&A
   - Vote Go/No-Go Phase 1

2. ✅ **Si GO : Désignation équipe projet**
   - Sponsor exécutif (membre CODIR)
   - Chef de projet (Sylvie temps partiel ou externe)
   - Référents métiers : Sylvie, Thomas, Isabelle (temps partiel chacun)

3. ✅ **Budget Phase 1** : Validation enveloppe

### Semaine 3-4 : Lancement Projet #1 (RFID Stocks)

- RFI fournisseurs RFID
- POC RFID dépôt Annecy
- Tests Isabelle + magasiniers

### Semaine 3-4 : Lancement Projet #2 (Dashboards BI)

- Audit données SAGE + MDE (APIs, qualité)
- Ateliers besoins KPIs (direction, Sylvie, RA, chefs)
- Maquettes dashboards

### Semaine 5-6 : Lancement Projet #3 (Système Tickets BE)

- Benchmark solutions (Jira, Asana, Linear)
- Ateliers workflows BE (Thomas + demandeurs)
- Critères priorisation (pondération)

### Mois 3-6 : Développements, Tests, Déploiement

- 3 projets en dev parallèle
- Comité pilotage bi-mensuel
- Go-live progressif M4-6

### Mois 6 : Bilan Phase 1 + Go Phase 2

- Mesure gains réels Phase 1
- Communication gains (interne)
- Go/No-Go Phase 2 (Migration ERP)

---

**🎯 Objectif M6 : Quick wins déployés, gains mesurés et validés**

---

## 📧 CONTACT

**Questions / Précisions** :
- Auditeur IT & Data BI/ML
- Email : [audit@duret.com]
- Tél : [+33 X XX XX XX XX]

**Documents annexes disponibles** :
- [01_PERSONAS_Pain_Points.md](docs/01_PERSONAS_Pain_Points.md) : Détail 3 personas (Sylvie, Thomas, Isabelle)
- [02_ARCHITECTURE_Actuelle_Chaos.md](docs/02_ARCHITECTURE_Actuelle_Chaos.md) : Cartographie système actuel
- [03_JOURNEY_MAPS_Parcours_Utilisateurs.md](docs/03_JOURNEY_MAPS_Parcours_Utilisateurs.md) : Parcours avant/après
- [implementation/](implementation/) : Plans détaillés techniques

---

**📅 Date création** : 2025-11-17
**🔄 Version** : v1.1 - Sans chiffres prédictionnels
**✅ Statut** : Prêt présentation CODIR
