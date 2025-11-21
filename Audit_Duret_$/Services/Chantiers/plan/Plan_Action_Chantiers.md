# PLAN D'ACTION - GESTION CHANTIERS
## Digitalisation Remontée Terrain & Gestion Chantiers - Duret Électricité

**Date** : Janvier 2025
**Service** : Gestion Chantiers & Remontée Terrain
**Personas principaux** : Marc (Chef Chantier), Julien (Responsable Affaires), Sophie (Bureau d'Études)
**Périmètre** : 10-15 Chefs de Chantier, ~100 chantiers actifs simultanés

---

## 🎯 SYNTHÈSE EXÉCUTIVE

### Problème Identifié

Les Chefs de Chantier (10-15 personnes) gèrent **~100 chantiers actifs** avec **aucun outil métier terrain**, s'appuyant sur **téléphone personnel, WhatsApp, et communication orale**. Les photos (~500/jour) sont dispersées sur téléphones individuels, les rapports d'intervention sont manuels (2h/rapport), et les remontées terrain sont non structurées (perte informations, aucune traçabilité).

### Solution Proposée

**"Plateforme Chantier Mobile-First + Cloud"**

Mise en place d'une app mobile terrain (iOS + Android) avec mode offline complet, centralisation automatique cloud des photos géolocalisées, génération rapports 1 clic, workflow incidents structuré, et dashboards temps réel pour Responsables Affaires et Direction.

### Impact Attendu

| Métrique | Avant | Après (Cible) | Amélioration |
|----------|-------|---------------|--------------|
| **Photos/jour** | ~500 dispersées téléphones | Centralisées cloud automatique | Organisation complète |
| **Temps rapport intervention** | 2h/rapport | Réduction drastique | Majeure |
| **Incidents tracés/mois** | ~40 sur ~80 (50%) | 100% traçabilité | +100% |
| **Appels bureau/jour** | ~30 (infos manquantes) | Réduction substantielle | Significative |
| **Temps admin chef chantier/sem** | ~10h (vs terrain) | Réduction majeure | Importante |

---

## 📋 PARTIE 1 : ÉTAT DES LIEUX (AUDIT)

### 🔴 Constats Terrain

**Problèmes Majeurs Identifiés :**

1. **Remontée info non structurée (CRITIQUE)**
   - WhatsApp, Oral, emails → **aucune traçabilité**
   - Informations perdues fréquemment (pas historique décisions)
   - Impossibilité retrouver contexte incidents passés
   - Litiges clients difficiles défendre (pas preuve)

2. **Aucun outil métier terrain (CRITIQUE)**
   - Chefs dépendants téléphone personnel (pas app métier)
   - Pas d'accès infos chantier en mobilité (plans, documents, historique)
   - Appels bureau multiples pour infos basiques (~30 appels/jour)
   - Interruptions fréquentes → perte temps terrain significative

3. **Photos dispersées téléphones individuels (CRITIQUE)**
   - ~500 photos/jour stockées téléphones personnels
   - Risque perte si téléphone endommagé/volé/changé
   - Difficultés retrouver photo spécifique (pas structuration)
   - Pas organisation par chantier/date/type
   - Transfert manuel chronophage (email, clé USB)

4. **Rapports intervention manuels (IMPORTANT)**
   - 2h/rapport en moyenne (~200 rapports/mois = 400h/mois)
   - Hétérogénéité formats (chaque chef son format)
   - Délai transmission (rédigés bureau, pas temps réel)
   - Qualité variable (infos incomplètes fréquentes)

5. **Commandes matériel non tracées (IMPORTANT)**
   - Pas workflow validation (téléphone/email informel)
   - Difficultés suivi livraisons (relances multiples)
   - Pas vision consolidée dépenses par chantier
   - Risque dépassements budgets + oublis refacturation client

**Volume d'Activité :**
- 10-15 Chefs de Chantier terrain
- ~100 chantiers actifs simultanés
- ~500 photos/jour (dispersées, non organisées)
- ~200 rapports/mois (manuels, 2h/rapport)
- ~80 incidents/mois (dont ~40 non tracés = 50%)
- ~30 appels bureau/jour (infos manquantes)

### 🔍 Causes Racines

**1. Absence outil digital terrain**
```
Chef Chantier (terrain)
         |
         | WhatsApp + Téléphone personnel
         |
    Bureau d'Études / Responsable Affaires
         |
    Ressaisies manuelles / Perte informations
```

**2. Processus inefficace**
- Photos : Téléphone personnel → Transfert manuel (email/USB) → Bureau
- Rapports : Mémoire terrain → Rédaction bureau (2h) → Email
- Incidents : WhatsApp/Oral → Pas traçabilité → Perte informations
- Commandes : Téléphone/Email → Validation informelle → Difficultés suivi

**3. Goulots d'étranglement**
- Pas app mobile métier (dépendance outils personnels)
- Pas mode offline (chantiers sans réseau nombreux)
- Pas centralisation automatique (transferts manuels chronophages)
- Pas workflow structuré (remontées informelles, perte informations)

### 👥 Impact Utilisateurs

| Persona | Pain Points | Impact |
|---------|-------------|--------|
| **Marc** (Chef Chantier, 42 ans) | Aucun outil métier terrain, photos dispersées, rapports manuels 2h, WhatsApp/Oral aucune traçabilité | **Critique** : ~10h/sem admin vs terrain |
| **Julien** (Responsable Affaires, 38 ans) | Pas vision 360° chantiers, remontées informelles perte infos, difficultés accès historique, validation incidents chronophage | **Élevé** : Manque visibilité → risques dépassements budgets |
| **Sophie** (Bureau d'Études, 32 ans) | Demandes terrain non structurées surcharge, pas priorisation difficultés gestion urgences, pas SLA insatisfaction terrain | **Élevé** : ~30% capacité temps perdu (demandes mal qualifiées) |

---

## 🚀 PARTIE 2 : OPPORTUNITÉS IDENTIFIÉES

### 🎯 Vision Cible

**Transformation en plateforme chantier mobile-first**
- 📱 **Mobile-first** : App terrain iOS+Android (chefs toujours terrain)
- ⚡ **Temps réel** : Upload automatique cloud, notifications, dashboards
- 🔌 **Offline** : Mode offline complet (chantiers sans réseau)
- 🤖 **Intelligent** : Templates rapports, routing automatique, analytics
- 📊 **Pilotable** : Dashboards temps réel Responsables Affaires + Direction

### 🏗️ Architecture Proposée

#### **VOLET 1 : APP MOBILE TERRAIN (iOS + Android)**

**Fonctionnalités essentielles :**

1. **📸 Photos géolocalisées**
   - Capture photos avec géolocalisation automatique
   - Organisation automatique par chantier/date/type
   - Upload automatique cloud (wifi/4G disponible)
   - Mode offline : Stockage local → sync auto reconnexion
   - Recherche rapide : Par chantier, date, type, géolocalisation

2. **📝 Rapports intervention**
   - Templates préremplis automatique (chantier, date, chef, client)
   - Sections structurées : Travaux réalisés, matériel utilisé, incidents, photos
   - Génération PDF 1 clic (réduction temps drastique vs 2h)
   - Signature client tablette/mobile
   - Envoi automatique email client + bureau

3. **⚠️ Incidents & problèmes**
   - Formulaires structurés (type incident, gravité, description, photos)
   - Routing automatique (Bureau d'Études, Responsable Affaires, Direction selon type/gravité)
   - Suivi traitement temps réel
   - Notifications statut (pris en compte, en cours, résolu)
   - Traçabilité complète (qui a fait quoi, quand)

4. **🛒 Commandes matériel**
   - Saisie commande terrain (références, quantités, urgence)
   - Workflow validation automatique (Responsable Affaires → Achats)
   - Suivi livraisons temps réel
   - Affectation automatique chantier (budget, analytique)
   - Traçabilité complète commandes

5. **📁 Plans & documents**
   - Accès plans électriques, schémas, documents techniques
   - Consultation offline (téléchargement préalable)
   - Annotations plans (incidents, modifications)
   - Synchronisation automatique versions

6. **🔄 Mode offline complet**
   - Toutes fonctionnalités disponibles sans réseau
   - Stockage local sécurisé (chiffré)
   - Synchronisation automatique reconnexion
   - Indicateur statut sync (en attente, sync en cours, OK)

**Technologies app mobile :**
- **Framework** : React Native ou Flutter (unique codebase iOS+Android)
- **Offline** : SQLite local + Redux Persist
- **Photos** : Compression automatique, géolocalisation GPS
- **Sécurité** : Chiffrement local AES-256, biométrie (Touch ID, Face ID)
- **Performance** : Lazy loading, cache intelligent

#### **VOLET 2 : PLATEFORME CLOUD BACKEND**

**Services backend :**

1. **Storage S3 (Photos, Documents, PDFs)**
   - Stockage illimité évolutif
   - Organisation hiérarchique : Chantier → Date → Type
   - CDN : Accès rapide téléchargement
   - Sécurité : Chiffrement repos AES-256, accès RBAC

2. **Base données PostgreSQL**
   - Chantiers : Infos complètes, budget, délais, équipe
   - Rapports : Historique complet, recherche plein texte
   - Incidents : Traçabilité complète, workflow statuts
   - Commandes : Historique, suivi livraisons, budget

3. **API REST (Node.js + Express)**
   - CRUD chantiers, rapports, incidents, commandes
   - Upload/download photos, documents, PDFs
   - Notifications push (FCM + APNS)
   - Webhooks (intégrations tierces)

4. **Notifications intelligentes**
   - Push mobile : Incidents assignés, validations, rappels
   - Email : Rapports intervention, incidents critiques
   - SMS : Alertes urgentes
   - Règles configurables (qui reçoit quoi, quand)

#### **VOLET 3 : DASHBOARDS WEB (Responsables Affaires, Bureau d'Études, Direction)**

**Dashboard Responsable Affaires :**
- Vue 360° SES chantiers (affectés uniquement)
- KPIs : Budget consommé vs prévisionnel, heures consommées, avancement travaux
- Timeline chantier : Rapports, incidents, commandes chronologiques
- Alertes : Dépassements budgets, incidents non résolus, retards planning
- Validation : Rapports intervention, commandes matériel

**Dashboard Bureau d'Études :**
- File tickets demandes terrain (priorisée : deadline, CA chantier, ancienneté demande)
- Détail demande : Chantier, description, photos, urgence, demandeur
- Workflow traitement : Assignation, en cours, résolu, temps résolution
- SLA : Temps moyen résolution, taux respect délais
- Transparence demandeurs : Voient position file + raisons priorisation

**Dashboard Direction :**
- Vue consolidée TOUS chantiers
- KPIs globaux : CA réalisé vs prévisionnel, taux incidents, satisfaction client
- Analytics : Chantiers rentables vs déficitaires, types incidents récurrents, performance chefs
- Alertes : Chantiers risque dépassement, incidents critiques non résolus
- Reporting automatique : Quotidien, hebdomadaire, mensuel

---

## 📅 PARTIE 3 : APPROCHE PROGRESSIVE (12 MOIS)

### 🔷 PHASE 1 : MVP (Mois 1-3) - "QUICK WINS"

**Objectif :** Résoudre pain points critiques immédiats

| Projet | Durée | Livrables | Gains |
|--------|-------|-----------|-------|
| **App mobile photos** | M1-M2 | Photos géolocalisées, upload auto cloud, organisation par chantier | Centralisation complète vs dispersées actuellement |
| **Templates rapports** | M2 | Préremplissage automatique, génération PDF 1 clic | Réduction temps génération drastique vs 2h |
| **Messagerie chantier** | M2-M3 | Remplace WhatsApp, traçabilité complète conversations | Traçabilité vs aucune actuellement |
| **Formulaires incidents** | M3 | Structuration remontées, routing automatique | Réduction temps traitement significative |

**Pilote Phase 1 (M3) :**
- 2-3 chefs chantier pilotes
- 5-10 chantiers tests
- Formation intensive (1j)
- Support réactif quotidien
- Mesure gains réels (temps rapports, satisfaction utilisateurs)

**Jalons Phase 1 :**
- ✅ **M3 : Bilan Pilote** → Validation adoption utilisateurs → GO/NO-GO Phase 2

---

### 🔶 PHASE 2 : GÉNÉRALISATION (Mois 4-6)

**Objectif :** Déployer tous chefs + fonctionnalités avancées

| Projet | Durée | Gains Attendus |
|--------|-------|----------------|
| **Déploiement tous chefs** | M4-M5 | 10-15 chefs équipés, ~100 chantiers couverts |
| **Workflow incidents complet** | M4 | Priorisation auto, SLA, dashboards Bureau d'Études |
| **Commandes matériel** | M5 | Workflow validation, suivi livraisons, budget temps réel |
| **Web dashboards** | M5-M6 | Dashboards Responsables Affaires, Bureau d'Études, Direction |

**Détails Phase 2 :**

**Déploiement généralisé (M4-M5) :**
- Formation tous chefs (1j chacun)
- Configuration chantiers (100 chantiers)
- Support terrain intensif (2 semaines)
- Désignation champions internes (2-3 chefs pilotes)

**Workflow incidents complet (M4) :**
- Priorisation automatique (gravité, deadline, CA chantier)
- Assignation Bureau d'Études (selon type incident, charge)
- SLA tracking (temps résolution, taux respect)
- Notifications temps réel (assignation, résolution)
- Dashboard Bureau d'Études (file tickets priorisée)

**Commandes matériel (M5) :**
- Workflow validation : Chef → Responsable Affaires → Achats
- Intégration système achats (API ou exports CSV)
- Suivi livraisons temps réel
- Affectation automatique budget chantier
- Alertes dépassements budgets

**Web dashboards (M5-M6) :**
- Dashboard Responsables Affaires (vue 360° SES chantiers, KPIs, alertes)
- Dashboard Bureau d'Études (file tickets, SLA, performance)
- Dashboard Direction (KPIs globaux, analytics, alertes)
- RBAC (chacun voit uniquement SES chantiers/données)

**Jalons Phase 2 :**
- ✅ **M6 : Bilan Phase 2** → Validation gains généralisés → GO/NO-GO Phase 3

---

### 🔵 PHASE 3 : EXCELLENCE (Mois 7-12)

**Objectif :** Features avancées + analytics

| Projet | Durée | Livrables |
|--------|-------|-----------|
| **Plans & documents offline** | M7-M8 | Consultation plans chantier, annotations, sync auto |
| **Mode offline avancé** | M9-M10 | Toutes fonctionnalités sans réseau, sync intelligent |
| **Analytics prédictifs** | M10-M11 | Prédiction retards chantiers, optimisation planning équipes |
| **Optimisation continue** | M11-M12 | Performance app, UX améliorée, nouvelles features |

**Détails Phase 3 :**

**Plans & documents offline (M7-M8) :**
- Téléchargement plans électriques, schémas, documents techniques
- Consultation offline (chantiers sans réseau)
- Annotations plans (incidents, modifications, mesures)
- Synchronisation automatique versions (plans mis à jour)
- Stockage optimisé (compression, cache intelligent)

**Mode offline avancé (M9-M10) :**
- Toutes fonctionnalités disponibles sans réseau (rapports, incidents, commandes, photos)
- Synchronisation intelligente (priorités : incidents critiques, rapports signés, photos)
- Indicateur statut sync (en attente, sync en cours, OK, erreurs)
- Gestion conflits (résolution automatique + manuelle si nécessaire)

**Analytics prédictifs (M10-M11) :**
- Prédiction retards chantiers (ML : historique délais, CA, complexité, équipe)
- Optimisation planning équipes (algorithmes optimisation : capacités, compétences, priorités chantiers)
- Détection patterns incidents (types récurrents, causes racines, actions préventives)
- Recommandations actions (chantiers attention, ressources allouer, formations nécessaires)

**Optimisation continue (M11-M12) :**
- Performance app (temps chargement, consommation batterie, stockage)
- UX améliorée (feedback utilisateurs, ergonomie, simplifications)
- Nouvelles features (demandes terrain, innovations)
- Documentation complète (utilisateurs, admin, API)

**Jalons Phase 3 :**
- ✅ **M12 : Bilan Final** → Mesure ROI global → Validation succès projet

---

## 🎁 PARTIE 4 : BÉNÉFICES ATTENDUS

### 📊 Objectifs d'Amélioration Visés

| Indicateur | ÉTAT ACTUEL | OBJECTIF CIBLE | Amélioration |
|------------|-------------|----------------|--------------|
| **Photos/jour** | ~500 dispersées téléphones | Centralisées cloud automatique | Organisation complète |
| **Temps rapport intervention** | 2h/rapport | Réduction drastique | Majeure (gains significatifs) |
| **Incidents tracés/mois** | ~40 sur ~80 (50%) | 100% traçabilité | +100% |
| **Appels bureau/jour** | ~30 (infos manquantes) | Réduction substantielle | Significative |
| **Temps admin chef/sem** | ~10h (vs terrain) | Réduction majeure | Importante |
| **Traçabilité remontées** | ❌ Aucune (WhatsApp/Oral) | ✅ Complète | +100% |
| **Délai transmission rapports** | Décalé (rédigés bureau) | Temps réel | Immédiat |

### 💡 Bénéfices Utilisateurs

**Marc (Chef Chantier, 42 ans) :**
- ✅ App mobile métier dédiée (vs téléphone personnel)
- ✅ Photos centralisées automatiquement (vs dispersées téléphones)
- ✅ Rapports simplifiés réduction temps drastique (vs 2h manuels)
- ✅ Remontées incidents structurées traçabilité complète (vs WhatsApp/Oral)
- ✅ Accès infos chantier mobilité (plans, documents, historique)
- ✅ Réduction appels bureau (infos accessibles app)
- ✅ Temps admin réduit → plus temps terrain

**Julien (Responsable Affaires, 38 ans) :**
- ✅ Dashboard 360° SES chantiers (budget, avancement, incidents, commandes)
- ✅ KPIs temps réel (budget consommé vs prévisionnel, heures, avancement)
- ✅ Alertes automatiques (dépassements budgets, incidents non résolus, retards)
- ✅ Validation digitale (rapports, commandes)
- ✅ Historique complet chantier (timeline rapports, incidents, commandes)
- ✅ Réduction risques dépassements budgets (visibilité temps réel)

**Sophie (Bureau d'Études, 32 ans) :**
- ✅ File tickets demandes structurées priorisées (vs chaos actuel)
- ✅ Détail complet demandes (chantier, description, photos, urgence)
- ✅ Workflow traitement tracé (assignation, en cours, résolu)
- ✅ SLA tracking (temps résolution, taux respect)
- ✅ Transparence demandeurs (position file + raisons priorisation)
- ✅ Réduction temps perdu (demandes qualifiées vs mal qualifiées)
- ✅ Équité traitement (priorisation objective vs subjective)

**Direction :**
- ✅ Dashboard consolidé TOUS chantiers
- ✅ KPIs globaux temps réel (CA, incidents, satisfaction client)
- ✅ Analytics (chantiers rentables vs déficitaires, performance chefs)
- ✅ Alertes chantiers risque (dépassements, incidents critiques)
- ✅ Traçabilité complète (litiges clients défendables)
- ✅ Reporting automatique (quotidien, hebdomadaire, mensuel)

### 🛡️ Risques à Maîtriser

| Risque | Probabilité | Mitigation |
|--------|-------------|------------|
| **Résistance changement** (chefs habitudes WhatsApp/Oral) | Moyenne-Haute | Pilote intensif 2-3 chefs, formation intensive (1j), support réactif terrain, app simple intuitive, champions internes |
| **Adoption insuffisante** (chefs n'utilisent pas app) | Moyenne | Gamification (badges, challenges), suppression progressive WhatsApp/Oral (obliger usage app), communication gains (temps gagné terrain) |
| **Mode offline défaillant** (chantiers sans réseau nombreux) | Moyenne | Tests exhaustifs offline, synchronisation intelligente (priorités), stockage local sécurisé, indicateur statut sync clair |
| **Budget dépassé** (dev plus longs → +20% coûts) | Faible-Moyenne | Contingence 15% incluse, jalons validation, forfaits vs régie, MVP minimaliste Phase 1 |
| **Qualité réseau mobile** (4G instable chantiers) | Moyenne | Mode offline complet indispensable, compression photos, sync intelligente (priorités), retry automatique |

---

## ✅ PROCHAINES ÉTAPES

### 1️⃣ **VALIDATION DIRECTION**
- Présenter ce plan CODIR
- Valider approche progressive 12 mois
- Valider budget (à chiffrer lors étude faisabilité)
- Désigner sponsor exécutif + équipe projet

### 2️⃣ **ÉTUDE DE FAISABILITÉ DÉTAILLÉE (Semaine 3-4)**
- Chiffrage précis : App mobile (iOS+Android), Backend cloud, Dashboards web, Intégrations
- Sélection solutions techniques (React Native vs Flutter, Cloud provider, etc.)
- Planning détaillé 12 mois (jalons, ressources, budgets par phase)
- Identification prestataires (dev app mobile, intégration, formation)

### 3️⃣ **PRÉPARATION PILOTE (Mois 1)**
- Identifier 2-3 chefs chantier pilotes (motivés, représentatifs)
- Sélectionner 5-10 chantiers tests (variété : neufs, rénovation, tertiaire, industrie)
- Former utilisateurs clés (1j formation intensive)
- Préparer support terrain (hotline, référent technique dédié)

### 4️⃣ **LANCEMENT MVP (Mois 1-3)**
- Développement app mobile MVP (photos, rapports, messagerie, incidents)
- Configuration backend cloud (storage S3, PostgreSQL, API REST)
- Tests pilote intensifs (2-3 chefs, 5-10 chantiers)
- Mesure gains réels (temps rapports, satisfaction utilisateurs)

### 5️⃣ **BILAN PILOTE (Mois 3)**
- Validation adoption utilisateurs (taux utilisation app, satisfaction)
- Mesure gains quantifiés (temps rapports réduit, incidents tracés, appels bureau réduits)
- **GO/NO-GO Phase 2** (généralisation tous chefs si pilote réussi)

---

**📅 Document créé :** Janvier 2025
**🎯 Projet :** Digitalisation Gestion Chantiers & Remontée Terrain
**⏱️ Durée :** 12 mois (3 phases progressives)
**📊 Objectif :** Centraliser photos, simplifier rapports, tracer remontées terrain, réduire temps admin chefs
**⚠️ Note :** Chiffrage financier détaillé à réaliser lors de l'étude de faisabilité (app mobile, cloud, dashboards, intégrations, formation, contingence)
