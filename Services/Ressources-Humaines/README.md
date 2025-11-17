# 📊 RESSOURCES HUMAINES - Duret Électricité

**Service** : Ressources Humaines
**Date audit** : Novembre 2025
**Statut projet** : Prêt implémentation

---

## 🎯 VUE D'ENSEMBLE

Les **Ressources Humaines** chez Duret Électricité gèrent **~100 collaborateurs** avec **22 systèmes isolés** (15 outils + 7 fichiers Excel) générant des **ressaisies massives** (même donnée 5-6 fois) et une **surcharge critique** de Sophie RH.

### Personas Impactés

- **Sophie** (Responsable RH, 42 ans) : Temps sur tâches manuelles à faible valeur ajoutée, surcharge chronique paie
- **Managers** (×10) : Relances FH hebdomadaires, validation POPAYE ligne par ligne chronophage
- **Collaborateurs** (~100) : Saisie heures papier/POPAYE, demandes congés papier, pas de portail RH

### Solution Proposée

**"De 22 systèmes isolés à 1 SIRH unifié"**

- **SIRH Central** (Lucca, PayFit, ou Silae) : Remplacement 15 outils + 7 Excel
- **Automatisation Paie** : Calcul TR, km, paniers automatique (Temps Sophie paie : 3j/sem → 1j/sem)
- **Workflows Digitaux** : Onboarding 39 tâches auto, Offboarding 22 tâches auto
- **App Mobile** : Pointage, demandes congés, consultation (iOS + Android)
- **Dashboards Temps Réel** : KPIs RH automatisés
- **Intégration Intérimaires** : Vision unifiée workforce (CDI + intérimaires)

### Business Case

| Métrique | Valeur |
|----------|--------|
| **Systèmes actuels** | 22 systèmes (15 outils + 7 Excel) |
| **Ressaisies** | 5-6 fois la même donnée |
| **Temps Sophie paie/sem** | 3 jours → 1 jour (Cible) |
| **Temps onboarding** | 8-10h → 2-3h (Cible) |
| **Temps génération KPI** | Demi-journée → Instantané |
| **Délai implémentation** | 18 mois (3 phases) |
| **Approche** | Progressive (Quick Wins → Structurant → Optimisation) |

---

## 📂 STRUCTURE DOCUMENTATION

```
Ressources-Humaines/
├── README.md (ce fichier)
├── SYNTHESE_EXECUTIVE.md (présentation direction, business case)
│
├── docs/
│   ├── 01_PERSONAS_Pain_Points.md (Sophie RH, Managers, Collaborateurs)
│   ├── 02_ARCHITECTURE_Actuelle_Chaos.md (22 systèmes isolés, ressaisies)
│   └── 03_JOURNEY_MAPS_Parcours_Utilisateurs.md (parcours avant/après)
│
├── implementation/
│   ├── 02_Planning_Implementation.md (18 mois, 3 phases, jalons GO/NO-GO)
│   └── it-logiciel/
│       └── 01_Architecture_Cible.md (SIRH + Workflows + App Mobile)
│
└── uml/ (12 diagrammes PlantUML)
    ├── 01_sequence_onboarding.puml (workflow onboarding 39 tâches)
    ├── 02_activity_processus_paie.puml (automatisation paie)
    ├── 03_usecase_sirh.puml (cas d'utilisation SIRH)
    ├── 04_state_collaborateur.puml (états collaborateur)
    ├── 05_component_architecture.puml (composants système)
    ├── 06_class_modele_donnees.puml (modèle données RH)
    ├── 07_deployment_infrastructure.puml (infrastructure cloud)
    ├── 08_timing_demande_conges.puml (timeline demande congés)
    ├── 09_mindmap_fonctionnalites.puml (arborescence fonctionnelle)
    ├── 10_wbs_projet.puml (work breakdown structure)
    ├── 11_gantt_planning.puml (planning 18 mois)
    └── 12_network_flux_donnees.puml (flux données architecture cible)
```

---

## 🔴 PROBLÈME : 22 SYSTÈMES ISOLÉS = CHAOS ORGANISATIONNEL

### Top 10 Pain Points Critiques

| Rang | Pain Point | Persona | Gravité |
|------|-----------|---------|---------|
| 1 | Ressaisies massives (même donnée 5-6 fois) | Sophie | CRITIQUE |
| 2 | Surcharge Sophie RH (temps tâches manuelles) | Sophie | CRITIQUE |
| 3 | Processus paie manuel (3j/sem pour 100 personnes) | Sophie | CRITIQUE |
| 4 | Onboarding chronophage (39 tâches, 8-10h, relances 4-5 pers) | Sophie | HAUTE |
| 5 | Aucune visibilité temps réel (FH, absences, KPIs) | Sophie, Managers | HAUTE |
| 6 | Gestion intérimaires fragmentée (Excel isolé) | Sophie | MOYENNE |
| 7 | KPIs tous manuels (demi-journée compilation) | Sophie | MOYENNE |
| 8 | Demandes congés papier (multiples signatures) | Collaborateurs | MOYENNE |
| 9 | Pas de portail RH (bulletins, attestations inaccessibles) | Collaborateurs | MOYENNE |
| 10 | Relances FH hebdomadaires (1h/sem × 10 managers) | Managers | MOYENNE |

### Architecture Actuelle = Chaos

- ❌ **15 outils RH** : SAGE Paie, POPAYE, SILAE, SWILE, Empowill, PRO BTP, CIBTP, Radiance, HelloCSE + 6 autres
- ❌ **7 fichiers Excel** : Planning absences, suivi intérimaires, checklist onboarding/offboarding, période essai, registre personnel, KPIs
- ❌ **Aucune intégration** : Ressaisie même donnée 5-6 fois (POPAYE → Excel → SILAE → SAGE → CIBTP)
- ❌ **Processus ultra-manuels** : Paie (3j/semaine), onboarding (8-10h), KPIs (demi-journée)
- ❌ **Temps Sophie paie** : 3 jours/semaine (vs 1 jour possible avec automatisation)
- ❌ **Onboarding/Offboarding** : 39 tâches manuelles, relances 4-5 personnes, 8-10h par embauche
- ❌ **Aucune visibilité temps réel** : Impossible savoir FH manquantes, absences, KPIs sans compilation manuelle

---

## ✅ SOLUTION : SIRH CENTRALISÉ + AUTOMATISATION

### Architecture Cible

```
Utilisateurs (Web + Mobile)
           │
           │ HTTPS/TLS 1.3, SSO, 2FA
           ▼
┌──────────────────────────────────────────────┐
│        SIRH Central (Cloud France)           │
│     (Lucca, PayFit, ou Silae)                │
│                                              │
│  - Module Absences (Congés, Maladie, RTT)   │
│  - Module Pointage (Heures, Chantiers)      │
│  - Module Paie (Automatisation calculs)     │
│  - Module Onboarding (39 tâches auto)       │
│  - Module Offboarding (22 tâches auto)      │
│  - Dashboards RH (KPIs temps réel)          │
│  - App Mobile (iOS + Android)               │
│  - Workflows automatisés                    │
└──────────────┬───────────────────────────────┘
               │
       ┌───────┴───────┬──────────────┬─────────────┐
       ▼               ▼              ▼             ▼
┌──────────┐  ┌────────────┐  ┌──────────┐  ┌──────────┐
│ SILAE    │  │ SAGE       │  │ Banque   │  │ Email    │
│ (Paie)   │  │ (Compta)   │  │(Virements│  │ Push     │
│ Only RH  │  │            │  │ salaires)│  │ Mobile   │
└──────────┘  └────────────┘  └──────────┘  └──────────┘
```

### Fonctionnalités Clés

**1. Automatisation Paie** (vs calculs manuels)
- Calcul TR automatique : Jours travaillés - absences - NDF
- Calcul heures récup automatique : 35h/semaine
- Valorisation km, paniers, déplacements automatique
- Export SILAE automatique
- **Temps Sophie paie : 3j/sem → 1j/sem**

**2. Workflows Digitaux** (vs papier/Excel/emails)
- Onboarding : Checklist 39 tâches automatisée, notifications 4-5 personnes
- Offboarding : Checklist 22 tâches automatisée, restitution matériel tracée
- Absences : Demande mobile → validation manager → intégration paie auto
- Rappels automatiques : Période essai, entretiens, habilitations

**3. App Mobile** (vs papier)
- Pointage chantier : Géolocalisation, affectation automatique
- Demandes congés : 1 clic, validation workflow
- Consultation : Bulletins paie, soldes congés, attestations
- Notifications : Validations, rappels

**4. Dashboards Temps Réel** (vs compilation manuelle)
- KPIs automatisés : Turnover, absentéisme, ancienneté, masse salariale
- Visibilité : FH manquantes, absences jour/semaine, heures consommées
- Alertes : Fin période essai, fin mission intérimaire, habilitations expirant

**5. Intégration Intérimaires** (vs Excel isolé)
- Suivi unifié CDI + intérimaires
- Alertes fin mission automatiques
- Comparaison coûts CDI vs intérimaires
- Vision globale workforce

---

## 📅 PLAN D'ACTION 18 MOIS

### Phase 1 : Quick Wins (Mois 1-4)

**Objectif** : Résoudre pain points critiques immédiats

| Projet | Durée | Livrables |
|--------|-------|-----------|
| **SIRH Core** | M1-M4 | Benchmark SIRH (M1), POC (M1-M2), Go/No-Go (M2), Migration données + Formation (M3-M4) |
| **Module Absences** | M2-M4 | Workflow congés, maladie, RTT (M2), Intégration POPAYE (M3), Tests (M3-M4) |
| **Module Pointage** | M3-M4 | App mobile saisie heures (M3), Validation managers (M4), Tests + GO-LIVE (M4) |

**Gains Phase 1** :
- Centralisation vs 22 systèmes
- Suppression ressaisies
- Demandes mobile, validation auto
- Suppression papier, géolocalisation chantiers

---

### Phase 2 : Structurant (Mois 5-12)

**Objectif** : Automatiser workflows critiques

| Projet | Durée | Gains |
|--------|-------|-------|
| **Automatisation Paie** | M5-M7 | Temps Sophie paie 3j/sem → 1j/sem |
| **Module Onboarding** | M7-M8 | Temps embauche 8-10h → 2-3h |
| **Module Offboarding** | M9-M10 | Temps départ 5-8h → 1-2h |
| **Intégration Intérimaires** | M10-M11 | Vision unifiée workforce |
| **Dashboards RH** | M11-M12 | KPIs instantanés vs demi-journée compilation |

**Gains Phase 2** :
- Calcul TR, km, paniers automatique
- Intégration SILAE automatisée
- Workflow 39 tâches digitalisé
- Notifications automatiques
- Suivi missions, alertes intérimaires
- KPIs temps réel

---

### Phase 3 : Optimisation (Mois 13-18)

**Objectif** : Compléter digitalisation RH

| Projet | Durée | Livrables |
|--------|-------|-----------|
| **Module Formation** | M13-M14 | Plan formation, suivi habilitations, alertes renouvellement |
| **Entretiens Digitalisés** | M15-M16 | Entretiens annuels, professionnels, rapports étonnement (J+10, J+30) |
| **Portail Collaborateur** | M16-M17 | Bulletins paie accessibles, attestations en ligne, demandes RH |
| **Formation Déploiement** | M17-M18 | Documentation complète, formation équipes, support |

**Gains Phase 3** :
- Traçabilité habilitations
- Rappels automatiques entretiens
- Autonomie collaborateurs
- Réduction sollicitations Sophie

---

### Jalons Décision (GO/NO-GO)

- **M0** : Validation CODIR budget Phase 1
- **M2** : GO/NO-GO SIRH (après POC)
- **M4** : Bilan Phase 1 → GO/NO-GO Phase 2 (adoption mesurée, gains validés)
- **M12** : Bilan Phase 2 → GO/NO-GO Phase 3 (automatisations validées)
- **M18** : Bilan Final (ROI global mesuré)

---

## 🎯 KPIs SUCCÈS

### KPIs Opérationnels

| KPI | Avant | Après | Amélioration |
|-----|-------|-------|--------------|
| **Temps Sophie paie/semaine** | 3 jours | 1 jour | -67% |
| **Nombre systèmes RH** | 22 | 1 SIRH centralisé | -95% |
| **Ressaisies même donnée** | 5-6 fois | 1 fois | -80% |
| **Temps onboarding/embauche** | 8-10h | 2-3h | -75% |
| **Temps génération KPI** | Demi-journée | Instantané | -100% |
| **Demandes congés papier** | 100% | 0% (mobile) | -100% |

### KPIs Business

| KPI | Avant | Après | Impact |
|-----|-------|-------|--------|
| **Satisfaction Sophie RH** | Burn-out risque | Améliorée | Charge réduite |
| **Erreurs paie** | Fréquentes (ressaisies) | Réduites drastiquement | -80% |
| **Délai traitement demandes** | Plusieurs jours | Temps réel | Instantané |
| **Visibilité workforce** | Partielle (CDI uniquement) | Totale (CDI + intérimaires) | Complète |
| **Oublis onboarding** | Fréquents | Quasi nuls (workflow) | -95% |

---

## 🔧 STACK TECHNIQUE

### SIRH Central

**Options recommandées** (BTP-compatibles) :
- **Option 1 : Lucca** (Français, forte adoption PME BTP)
- **Option 2 : PayFit** (Paie + RH, intégrations natives)
- **Option 3 : Silae + module RH** (si conservation SILAE existant)

**Critères sélection** :
- ✅ Gestion absences, congés, RTT natives
- ✅ Module pointage chantiers (géolocalisation)
- ✅ Intégration SILAE (ou paie intégrée)
- ✅ App mobile iOS + Android
- ✅ Workflows onboarding/offboarding
- ✅ Dashboards RH temps réel
- ✅ API ouvertes (SAGE, banque...)

### Frontend

**Web** :
- Interface RH (Sophie) : CRUD collaborateurs, paie, reporting
- Interface Managers : Validation FH, absences, planning équipe
- Interface Direction : Dashboards KPIs

**Mobile** (iOS + Android) :
- Frameworks : React Native ou Flutter (unique codebase)
- Pointage chantiers (géolocalisation)
- Demandes congés
- Consultation bulletins paie, soldes congés
- Notifications (validations, rappels)
- Offline : Pointage hors ligne, sync auto reconnexion
- Sécurité : Biométrie (Touch ID, Face ID), chiffrement local

### Backend

**SIRH Cloud** :
- Base données RH centralisée (PostgreSQL ou équivalent)
- Modules :
  - Gestion collaborateurs (registre, contrats)
  - Absences (congés, maladie, RTT)
  - Pointage (heures, chantiers)
  - Paie (éléments variables, calculs auto)
  - Onboarding/Offboarding (workflows 39/22 tâches)
  - Formation (habilitations, plan formation)
  - Entretiens (annuels, professionnels, étonnement)
- API REST (intégrations tierces)
- Stockage documents (bulletins, contrats, attestations)

### Intégrations

| Système | Type | Flux |
|---------|------|------|
| **SILAE (Only RH)** | API/Export | SIRH → Export éléments paie → SILAE |
| **SAGE Compta** | Export | SIRH → Export écritures paie → SAGE |
| **Banque** | API SEPA | SIRH → Virements salaires |
| **Email (SendGrid)** | SMTP/API | SIRH → Notifications workflows |
| **Push Mobile** | FCM+APNS | SIRH → Alertes mobile |

### Sécurité

- **Authentification** : SSO (SAML 2.0 ou OAuth 2.0), MFA disponible, Biométrie mobile
- **Chiffrement** : TLS 1.3 (transit), AES-256 (repos)
- **RGPD** : Hébergement UE, DPA fournisseur, durées rétention configurables
- **Audit trail** : Qui a fait quoi, quand (logs 3 ans)

### Permissions (RBAC)

| Rôle | Permissions |
|------|-------------|
| **Admin RH** (Sophie) | CRUD tout, configuration workflows, reporting global |
| **Manager** | Lecture équipe, validation FH/absences, planning équipe |
| **Collaborateur** | Lecture ses données, demandes, consultation bulletins |
| **Direction** | Lecture KPIs globaux, reporting consolidé |

---

## 📊 DASHBOARDS TEMPS RÉEL

### Dashboard Sophie RH

**KPIs** :
- Effectif total (CDI + intérimaires)
- Turnover mois/année
- Absentéisme (taux, jours perdus)
- Masse salariale (évolution)
- FH manquantes (liste nominative)
- Absences jour/semaine (planning visuel)
- Habilitations expirant <3 mois

**Alertes** :
- FH manquantes J-2 avant paie
- Fin période essai -15j
- Fin mission intérimaire -7j
- Habilitations expirant -30j

### Dashboard Managers

**Vues** :
- Planning équipe (absences, affectations)
- Heures consommées par chantier
- Demandes en attente validation
- Alertes surcharge équipe

### Dashboard Direction

**KPIs** :
- Effectif global (évolution)
- Masse salariale (budget vs réalisé)
- Turnover (taux, coût)
- Absentéisme (taux, impact)
- Productivité (heures facturables vs totales)

---

## 📖 DOCUMENTATION DÉTAILLÉE

### Pour Direction

➡️ **[SYNTHESE_EXECUTIVE.md](SYNTHESE_EXECUTIVE.md)** : Business case complet, recommandation GO

### Pour Équipe Projet

➡️ **[implementation/02_Planning_Implementation.md](implementation/02_Planning_Implementation.md)** : Planning 18 mois détaillé, jalons

➡️ **[implementation/it-logiciel/01_Architecture_Cible.md](implementation/it-logiciel/01_Architecture_Cible.md)** : Architecture IT/Logiciel complète (SIRH, workflows, app mobile, stack technique)

### Pour Compréhension Métier

➡️ **[docs/01_PERSONAS_Pain_Points.md](docs/01_PERSONAS_Pain_Points.md)** : Sophie RH, Managers, Collaborateurs (pain points quantifiés)

➡️ **[docs/02_ARCHITECTURE_Actuelle_Chaos.md](docs/02_ARCHITECTURE_Actuelle_Chaos.md)** : Cartographie système actuel (22 systèmes, processus manuels)

➡️ **[docs/03_JOURNEY_MAPS_Parcours_Utilisateurs.md](docs/03_JOURNEY_MAPS_Parcours_Utilisateurs.md)** : Parcours avant/après (demande congé, paie, onboarding)

### Diagrammes UML

➡️ **[uml/](uml/)** : 12 diagrammes PlantUML (sequence, activity, usecase, state, component, class, deployment, timing, mindmap, WBS, gantt, network)

---

## ⚠️ RISQUES & MITIGATION

### Risques Techniques (Probabilité Moyenne-Haute)

**1. Résistance changement** (Collaborateurs habitudes papier/POPAYE)
- **Mitigation** : Co-conception avec Sophie + managers pilotes, formation intensive (2j minimum), support réactif 6 mois, app simple et intuitive

**2. Migration données** (Données Excel/POPAYE incohérentes)
- **Mitigation** : Audit qualité données avant migration, nettoyage pré-migration, migration progressive (tests), validation exhaustivité

**3. Intégration SILAE/SAGE** (Connecteurs SIRH ↔ SILAE/SAGE défaillants)
- **Mitigation** : Tests intégration exhaustifs, validation exports paie double (manuel + auto) pendant 3 mois, rollback plan

### Risques Business (Probabilité Faible-Moyenne)

**4. Disponibilité Sophie** (Sophie surchargée, pas disponible pour projet)
- **Mitigation** : Backup désigné, chef projet externe possible, planning projet adapté charge Sophie

**5. Adoption insuffisante** (Managers/collaborateurs n'utilisent pas nouveau système)
- **Mitigation** : Gamification pointage, suppression progressive papier (obliger usage app), communication gains (temps gagné)

---

## 🏆 RECOMMANDATION

### ✅ GO IMMÉDIAT Phase 1 (Confiance HAUTE)

**Pourquoi GO ?**

1. ✅ **Pain points critiques** : 22 systèmes isolés = surcharge massive Sophie
2. ✅ **Risque maîtrisé** : Approche progressive (18 mois), pas de big-bang
3. ✅ **Quick wins rapides** : SIRH Core M1-M4, gains immédiats
4. ✅ **Scalabilité** : Système actuel ne scale pas (croissance impossible)
5. ✅ **RH** : Burn-out Sophie risqué si rien fait
6. ✅ **Conformité** : Traçabilité améliorée (RGPD, audit social)

**Alternative "Ne rien faire"** :
- ❌ **Surcharge Sophie** : Burn-out garanti, départ possible
- ❌ **Erreurs paie** : Ressaisies multiples = erreurs fréquentes
- ❌ **Turnover** : Onboarding défaillant = départs précoces
- ❌ **Coûts cachés** : Intérimaires non optimisés

**Verdict** : **GO IMMÉDIAT Phase 1** (M1-M4)

---

## 📞 CONTACTS & PROCHAINES ÉTAPES

### Équipe Recommandée

- **Sponsor Exécutif** : Membre CODIR (10% disponibilité)
- **Chef Projet** : Sophie 50% ou externe (coordination, planning, budget)
- **Référents Métiers** (20% chacun) : Sophie, 2 managers pilotes

### Prochaines Étapes Immédiates

**Semaine 1-2** : Présentation CODIR, Q&A, Vote Go/No-Go Phase 1, Désignation équipe projet

**Semaine 3-4** : Benchmark SIRH (RFI 3-4 solutions : Lucca, PayFit, autres), Démos fournisseurs, Grille évaluation

**Mois 2** : POC SIRH (4-6 semaines), Tests Sophie + 2 managers + 5 collaborateurs pilotes, Go/No-Go migration complète

**Mois 3-4** : Migration données (registre personnel, absences, heures), Formation équipes (2j RH, 1j managers, 0.5j collaborateurs), Go-live progressif

**Mois 4** : Bilan Phase 1, Mesure gains réels, Communication gains (interne), Go/No-Go Phase 2

**Objectif M4** : SIRH Core déployé, 22 systèmes → 1 SIRH, gains mesurés ✅

---

**📅 Date création** : 2025-11-17
**🔄 Version** : v1.0 - Sans chiffres prédictionnels
**✅ Statut** : Documentation complète, prêt présentation CODIR
**📧 Contact** : Audit IT & Data BI/ML
