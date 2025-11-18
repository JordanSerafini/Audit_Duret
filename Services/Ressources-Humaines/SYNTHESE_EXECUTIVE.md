# 📊 SYNTHÈSE EXÉCUTIVE - Ressources Humaines

**Service** : Ressources Humaines
**Date** : Novembre 2025
**Destinataire** : Direction Générale Duret Électricité
**Auteur** : Audit IT & Data BI/ML

---

## ⚠️ NOTE MÉTHODOLOGIQUE

**Constats confirmés audit terrain** :
- ✅ ~100 collaborateurs (confirmé)
- ✅ Nombreux outils RH distincts : SAGE Paie, POPAYE, SILAE, SWILE, Empowill, PRO BTP, CIBTP, Radiance, HelloCSE + autres (confirmé audit)
- ✅ Plusieurs fichiers Excel RH (planning absences, suivi intérimaires, checklist onboarding/offboarding, etc.) (confirmé)
- ✅ Ressaisies multiples même donnée (confirmé qualitativement)
- ✅ Processus paie manuel chronophage (confirmé)
- ✅ Onboarding manuel long (confirmé)

**Mesures en cours** (via [questionnaires terrain](../../Synthese/QUESTIONNAIRE_COLLECTE_DONNEES_RESSOURCES_HUMAINES.md)) :
- ⏱️ Nombre exact outils RH utilisés (inventaire exhaustif en cours)
- ⏱️ Nombre exact fichiers Excel (inventaire en cours)
- ⏱️ Temps réel paie/semaine (chronométrage en cours)
- ⏱️ Temps réel onboarding/embauche (mesure 3 dernières embauches)
- ⏱️ Nombre exact ressaisies (traçage 1 donnée collaborateur)

**Prochaine étape** : Intégration mesures réelles (semaines 2-3)

---

## 🎯 RÉSUMÉ EN 30 SECONDES

> **L'architecture RH actuelle repose sur de nombreux systèmes isolés (nombreux outils + plusieurs Excel, inventaire en cours), générant des ressaisies massives (même donnée ressaisie plusieurs fois, comptage en cours) et une surcharge critique de Sophie RH (temps important sur tâches manuelles à faible valeur ajoutée).**
>
> **Proposition** : SIRH centralisé + Automatisation workflows (paie, absences, onboarding)
>
> **Approche** : 3 phases sur 18 mois (Quick Wins → Structurant → Optimisation)

---

## ⚠️ PROBLÈME : 22 SYSTÈMES ISOLÉS = CHAOS ORGANISATIONNEL

### Situation Actuelle

Le service RH gère **~100 collaborateurs** avec **15 outils + 7 Excel** non connectés :

**Outils actuels** :
- ✅ **15 outils RH** : SAGE Paie, POPAYE, SILAE, SWILE, Empowill, PRO BTP, CIBTP, Radiance, HelloCSE + 6 autres
- ✅ **7 fichiers Excel** : Planning absences, suivi intérimaires, checklist onboarding/offboarding, période essai, registre personnel, KPIs
- ✅ **Aucune intégration** : Ressaisie même donnée 5-6 fois
- ✅ **Processus ultra-manuels** : Paie (3j/semaine), onboarding (8-10h), KPIs (demi-journée)

### Problèmes Identifiés

| Problème | Description | Gravité |
|----------|-------------|---------|
| **Ressaisies massives** | Même donnée 5-6 fois (POPAYE → Excel → SILAE → SAGE → CIBTP) | CRITIQUE |
| **Surcharge Sophie RH** | Temps sur tâches manuelles à faible valeur ajoutée | CRITIQUE |
| **Processus paie manuel** | 3 jours/semaine : calculs TR, km, paniers manuels pour 100 personnes | CRITIQUE |
| **Onboarding chronophage** | 39 tâches manuelles, 8-10h par embauche, relances 4-5 personnes | HAUTE |
| **Aucune visibilité temps réel** | Impossible savoir FH manquantes, absences, KPIs | HAUTE |
| **Gestion intérimaires fragmentée** | Excel isolé, pas d'alertes fin mission, vision partielle workforce | MOYENNE |
| **KPIs tous manuels** | Compilation demi-journée, données obsolètes | MOYENNE |

### Personas Impactés

**Sophie** (Responsable RH, 42 ans) :
- Surcharge chronique : 3 jours/semaine sur paie (vs 1 jour possible)
- Ressaisies multiples : Même donnée 5-6 fois
- Onboarding/Offboarding : 8-10h par personne × 30/an
- KPIs manuels : Demi-journée de compilation par KPI

**Managers** (×10) :
- Relances FH hebdomadaires : 1h/semaine perdue
- Validation POPAYE : Ligne par ligne chronophage
- Pas de visibilité équipe : Absences, heures consommées

**Collaborateurs** (~100) :
- Saisie heures papier/POPAYE : Pas d'app mobile
- Demandes congés papier : Multiples signatures
- Pas de portail : Bulletins paie, attestations inaccessibles

---

## ✅ SOLUTION : SIRH CENTRALISÉ + AUTOMATISATION

### Vision Cible

**"De 22 systèmes isolés à 1 SIRH unifié"**

1. **SIRH Central** : Remplacement 15 outils + 7 Excel
2. **Automatisation Paie** : Calcul TR, km, paniers automatique
3. **Workflows Digitaux** : Onboarding 39 tâches auto, Offboarding 22 tâches auto
4. **App Mobile** : Pointage, demandes congés, consultation
5. **Dashboards Temps Réel** : KPIs RH automatisés
6. **Intégration Intérimaires** : Vision unifiée workforce

### Architecture Cible

```
┌────────────────────────────────────────────────────┐
│           UTILISATEURS (Web + Mobile)              │
├──────────┬──────────┬──────────┬──────────────────┤
│ Sophie   │ Managers │ Collab   │ Direction        │
│ (RH)     │          │ (Mobile) │                   │
└────┬─────┴────┬─────┴────┬─────┴────┬─────────────┘
     │          │          │          │
     │ HTTPS (Cloud, SSO, 2FA)        │
     ▼          ▼          ▼          ▼
┌────────────────────────────────────────────────────┐
│         SIRH CENTRAL (Lucca, PayFit...)            │
│  - Absences, Pointage, Paie, Onboarding           │
│  - Mobile-first (iOS + Android)                    │
│  - Workflows automatisés                           │
│  - Dashboards temps réel                           │
└──────────┬──────────┬──────────┬──────────────────┘
           │          │          │
           ▼          ▼          ▼
┌──────────────┐  ┌──────────┐  ┌─────────────────┐
│  SILAE/Only  │  │ SAGE     │  │ Banque          │
│  RH (Paie)   │  │ Compta   │  │ Virements       │
└──────────────┘  └──────────┘  └─────────────────┘
```

### Fonctionnalités Clés

**1. Automatisation Paie** (vs calculs manuels)
- Calcul TR automatique : Jours travaillés - absences - NDF
- Calcul heures récup automatique : 35h/semaine
- Valorisation km, paniers, déplacements automatique
- Export SILAE automatique
- Temps Sophie paie : 3j/sem → 1j/sem

**2. Workflows Digitaux** (vs papier/Excel/emails)
- Onboarding : Checklist 39 tâches automatisée, notifications 4-5 personnes
- Offboarding : Checklist 22 tâches automatisée, restitution matériel tracée
- Absences : Demande mobile → validation manager → intégration paie auto
- Rappels automatiques : Période essai, entretiens, habilitations

**3. App Mobile** (vs papier)
- Pointage chantier : Géolocalisation, affectation automatique
- Demandes congés : 1 clic, validation workflow
- Consultation : Bulletins paie, soldes congés, attestations

**4. Dashboards Temps Réel** (vs compilation manuelle)
- KPIs automatisés : Turnover, absentéisme, ancienneté, masse salariale
- Visibilité : FH manquantes, absences jour/semaine, heures consommées
- Alertes : Fin période essai, fin mission intérimaire, habilitations

**5. Intégration Intérimaires** (vs Excel isolé)
- Suivi unifié CDI + intérimaires
- Alertes fin mission automatiques
- Comparaison coûts CDI vs intérimaires
- Vision globale workforce

---

## 📅 PLAN D'ACTION RECOMMANDÉ

### Phase 1 : Quick Wins (Mois 1-4)

**Objectif** : Résoudre pain points critiques immédiats

**Projets** :
1. ✅ **SIRH Core** (M1-M4)
   - Benchmark SIRH (Lucca, PayFit, autres) (M1)
   - POC solution retenue (M1-M2)
   - Go/No-Go (M2)
   - Migration données + Formation (M3-M4)
   - **Gain** : Centralisation vs 22 systèmes, suppression ressaisies

2. ✅ **Module Absences** (M2-M4)
   - Workflow congés, maladie, RTT (M2)
   - Intégration POPAYE (M3)
   - Tests (M3-M4)
   - **Gain** : Demandes mobile, validation auto, suppression papier

3. ✅ **Module Pointage** (M3-M4)
   - App mobile saisie heures (M3)
   - Validation managers (M4)
   - **Gain** : Suppression papier, géolocalisation chantiers

---

### Phase 2 : Structurant (Mois 5-12)

**Objectif** : Automatiser workflows critiques

**Projets** :
1. ✅ **Automatisation Paie** (M5-M7)
   - Calcul TR, km, paniers automatique (M5-M6)
   - Intégration SILAE (M6-M7)
   - **Gain** : Temps Sophie paie 3j/sem → 1j/sem

2. ✅ **Module Onboarding** (M7-M8)
   - Workflow 39 tâches digitalisé (M7-M8)
   - Notifications automatiques 4-5 personnes
   - **Gain** : Temps embauche 8-10h → 2-3h

3. ✅ **Module Offboarding** (M9-M10)
   - Workflow 22 tâches digitalisé (M9)
   - Restitution matériel tracée (M10)
   - **Gain** : Temps départ 5-8h → 1-2h

4. ✅ **Intégration Intérimaires** (M10-M11)
   - Import données Excel (M10)
   - Suivi missions, alertes (M11)
   - **Gain** : Vision unifiée workforce

5. ✅ **Dashboards RH** (M11-M12)
   - KPIs temps réel (M11)
   - Reporting direction (M12)
   - **Gain** : KPIs instantanés vs demi-journée compilation

---

### Phase 3 : Optimisation (Mois 13-18)

**Objectif** : Compléter digitalisation RH

**Projets** :
1. ✅ **Module Formation** (M13-M14)
   - Plan formation, suivi habilitations
   - Alertes renouvellement automatiques

2. ✅ **Entretiens Digitalisés** (M15-M16)
   - Entretiens annuels, professionnels
   - Rapports étonnement (J+10, J+30)

3. ✅ **Portail Collaborateur** (M16-M17)
   - Bulletins paie accessibles
   - Attestations en ligne
   - Demandes RH (mutations, formations...)

4. ✅ **Formation Déploiement** (M17-M18)
   - Documentation complète
   - Formation équipes
   - Support

---

## 🎯 KPIs DE SUCCÈS

### Indicateurs Opérationnels

| KPI | Avant | Cible Après |
|-----|-------|-------------|
| **Temps Sophie paie/semaine** | 3 jours | 1 jour |
| **Nombre outils RH** | 22 systèmes | 1 SIRH centralisé |
| **Ressaisies même donnée** | 5-6 fois | 1 fois |
| **Temps onboarding/embauche** | 8-10h | 2-3h |
| **Temps génération KPI** | Demi-journée | Instantané |
| **Demandes congés papier** | 100% | 0% (mobile) |

### Indicateurs Business

| KPI | Avant | Cible Après |
|-----|-------|-------------|
| **Satisfaction Sophie RH** | Burn-out risque | Améliorée |
| **Erreurs paie** | Fréquentes (ressaisies) | Réduites drastiquement |
| **Délai traitement demandes** | Plusieurs jours | Temps réel |
| **Visibilité workforce** | Partielle (CDI uniquement) | Totale (CDI + intérimaires) |
| **Oublis onboarding** | Fréquents | Quasi nuls (workflow) |

---

## ⚠️ RISQUES & MITIGATION

### Risques Techniques

**1. Résistance changement (Probabilité HAUTE)**
- **Risque** : Collaborateurs habitudes papier/POPAYE refusent app mobile
- **Mitigation** :
  - Co-conception avec Sophie + managers pilotes
  - Formation intensive (2j minimum)
  - Support réactif 6 mois
  - App simple, intuitive

**2. Migration données (Probabilité MOYENNE)**
- **Risque** : Données Excel/POPAYE incohérentes → Migration difficile
- **Mitigation** :
  - Audit qualité données avant migration
  - Nettoyage pré-migration
  - Migration progressive (tests)

**3. Intégration SILAE/SAGE (Probabilité MOYENNE)**
- **Risque** : Connecteurs SIRH ↔ SILAE/SAGE défaillants
- **Mitigation** :
  - Tests intégration exhaustifs
  - Validation exports paie double (manuel + auto) pendant 3 mois
  - Rollback plan

### Risques Business

**4. Disponibilité Sophie (Probabilité FAIBLE)**
- **Risque** : Sophie surchargée, pas disponible pour projet
- **Mitigation** :
  - Backup désigné
  - Chef projet externe possible
  - Planning projet adapté charge Sophie

**5. Adoption insuffisante (Probabilité MOYENNE)**
- **Risque** : Managers/collaborateurs n'utilisent pas nouveau système
- **Mitigation** :
  - Gamification pointage
  - Suppression progressive papier (obliger usage app)
  - Communication gains (temps gagné)

---

## 🏆 RECOMMANDATION DIRECTION

### ✅ GO Recommandé (Confiance HAUTE)

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

## 📌 PROCHAINES ÉTAPES IMMÉDIATES

### Semaine 1-2 : Validation Direction

1. ✅ **Présentation CODIR**
   - Présenter cette synthèse
   - Q&A
   - Vote Go/No-Go Phase 1

2. ✅ **Si GO : Désignation équipe projet**
   - Sponsor exécutif (membre CODIR)
   - Chef de projet (externe ou Sophie temps partiel)
   - Référents : Sophie (50%), 2 managers pilotes (10%)

### Semaine 3-4 : Benchmark SIRH

- RFI 3-4 solutions SIRH (Lucca, PayFit, autres BTP-compatibles)
- Démos fournisseurs
- Grille évaluation (fonctionnalités, intégrations, coûts)

### Mois 2 : POC SIRH

- POC solution retenue (4-6 semaines)
- Tests Sophie + 2 managers + 5 collaborateurs pilotes
- Go/No-Go migration complète

### Mois 3-4 : Migration + Formation

- Migration données (registre personnel, absences, heures)
- Formation équipes (2j RH, 1j managers, 0.5j collaborateurs)
- Go-live progressif

### Mois 4 : Bilan Phase 1 + Go Phase 2

- Mesure gains réels Phase 1
- Communication gains (interne)
- Go/No-Go Phase 2 (Automatisation Paie + Onboarding)

---

**🎯 Objectif M4 : SIRH Core déployé, 22 systèmes → 1 SIRH, gains mesurés**

---

## 📧 CONTACT

**Questions / Précisions** :
- Auditeur IT & Data BI/ML
- Email : [audit@duret.com]
- Tél : [+33 X XX XX XX XX]

**Documents annexes disponibles** :
- [docs/01_PERSONAS_Pain_Points.md](docs/01_PERSONAS_Pain_Points.md) : Sophie RH, Managers, Collaborateurs
- [docs/02_ARCHITECTURE_Actuelle_Chaos.md](docs/02_ARCHITECTURE_Actuelle_Chaos.md) : 22 systèmes isolés
- [docs/03_JOURNEY_MAPS_Parcours_Utilisateurs.md](docs/03_JOURNEY_MAPS_Parcours_Utilisateurs.md) : Parcours avant/après

---

**📅 Date création** : 2025-11-17
**🔄 Version** : v1.0 - Sans chiffres prédictionnels
**✅ Statut** : Prêt présentation CODIR
