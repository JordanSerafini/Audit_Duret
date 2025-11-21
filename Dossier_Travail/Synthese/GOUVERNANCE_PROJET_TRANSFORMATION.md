# 🏛️ GOUVERNANCE PROJET - TRANSFORMATION DIGITALE DURET ÉLECTRICITÉ

**Date** : Novembre 2025
**Périmètre** : Projet transformation globale 8 services
**Horizon** : 18 mois
**Budget** : 165-282K€

---

## 📊 RÉSUMÉ EXÉCUTIF

Ce document définit la **gouvernance projet** pour garantir le succès de la transformation digitale :

✅ **Organigramme projet** : Qui fait quoi
✅ **Matrice RACI** : Responsabilités détaillées par activité
✅ **Comités décisionnels** : Pilotage, technique, métier
✅ **Critères Go/No-Go** : Jalons décisionnels par vague
✅ **Reporting** : Fréquence, KPIs, escalade

---

## 👥 ORGANIGRAMME PROJET

### Niveau 1 : COMITÉ DE PILOTAGE (CODIR)

**Rôle** : Validation stratégique, budget, arbitrages majeurs

| Fonction | Nom | Responsabilité |
|----------|-----|----------------|
| **Sponsor Exécutif** | Christine (Direction Générale) | Validation budget, arbitrages, communication interne |
| **Sponsor Finance** | [CFO/DAF] | Validation ROI, suivi budgets, décision investissements |
| **Sponsor Métier** | [Direction Opérations] | Validation priorisation métier, adoption utilisateurs |

**Fréquence réunions** : Bimestrielle (tous les 2 mois)
**Durée** : 2h
**Objectif** : Décision Go/No-Go par vague, validation budgets, résolution blocages majeurs

---

### Niveau 2 : DIRECTION PROJET

**Rôle** : Pilotage opérationnel, coordination, suivi planning/budget

| Fonction | Profil Recommandé | Responsabilité | Allocation |
|----------|------------------|----------------|------------|
| **Chef de Projet Transformation** | Externe (Consultant PMO) OU Interne | Pilotage global, planning, budget, risques, reporting CODIR | 0,8-1 ETP (M1-M18) |
| **Référent IT** | DSI ou Responsable IT Interne | Architecture technique, choix solutions, gestion intégrateur | 0,3 ETP |
| **Référent Change Management** | RH ou Consultant externe | Formation, communication, adoption, support utilisateurs | 0,5 ETP |

**Fréquence réunions** : Hebdomadaire (équipe projet)
**Durée** : 1h30
**Objectif** : Avancement détaillé, résolution problèmes opérationnels, coordination vagues

---

### Niveau 3 : SPONSORS MÉTIERS (Champions Internes)

**Rôle** : Représentation besoins métier, validation fonctionnelle, adoption terrain

| Service | Sponsor Métier | Rôle | Allocation |
|---------|---------------|------|------------|
| **Direction-Affaires** | Julien ou Laurent (Responsable Affaires) | Validation modules ERP, tests devis/PPSPS, formation pairs | 0,2 ETP |
| **Ressources-Humaines** | Sophie (Responsable RH) | Validation SIRH, workflows paie/onboarding, conduite changement | 0,3 ETP |
| **Achats-Logistique** | Sylvie (Contrôle Gestion) + Responsable Achats | Validation e-procurement, APIs fournisseurs, dashboards | 0,2 ETP |
| **Service-Client** | Claire (Assistante Relation Client) | Validation CRM, tickets, processus clients | 0,2 ETP |
| **Chantiers** | Marc (Chef Chantier senior) | Validation app mobile, tests terrain, adoption chefs | 0,2 ETP |
| **Maintenance-Technique** | Gaëtan (Technicien senior) | Validation app SAV, CERFA digitaux, tests interventions | 0,2 ETP |
| **Gestion-Opérationnelle** | Sylvie (Contrôle Gestion) | Validation dashboards BI, KPIs, scan stocks | 0,3 ETP |
| **Albertville** | Responsable Site Albertville | Validation BL digitaux, workflows site, formation équipe | 0,2 ETP |

**Fréquence réunions** : Bi-hebdomadaire (ateliers métier par vague)
**Durée** : 1h
**Objectif** : Recueil besoins, tests fonctionnels, validation avant déploiement

---

### Niveau 4 : PRESTATAIRES & INTÉGRATEURS

**Rôle** : Implémentation technique, développements, formation

| Prestataire | Domaine | Responsabilité | Engagement |
|-------------|---------|----------------|------------|
| **Intégrateur Odoo** (Drakkar.io / Captivea / Osileo) | ERP | Setup Odoo, migration données, paramétrage modules, formation | 30-50 jours (M1-M12) |
| **Développeur Apps Mobile** | Apps Terrain | Développement React Native (Chantiers, Maintenance), intégrations | 40-60 jours (M3-M9) |
| **Consultant SIRH** (Lucca / PayFit) | RH | Setup SIRH, migration bulletins, workflows paie, formation | 15-25 jours (M7-M10) |
| **Développeur APIs** | Intégrations | Connecteurs Rexel/Sonepar/Open Banking/Chorus, tests | 20-30 jours (M7-M12) |
| **Consultant Data/BI** (optionnel Vague 3) | Analytics & IA | Data Warehouse, dashboards avancés, modules ML | 15-25 jours (M13-M18) |

**Gestion prestataires** : Chef de Projet Transformation
**Contrats** : Régie ou forfait par phase (favoriser forfait avec jalons)

---

### Niveau 5 : UTILISATEURS FINAUX

**Rôle** : Tests, feedback, adoption, formation pairs

| Catégorie | Nombre | Rôle Projet | Formation |
|-----------|--------|-------------|-----------|
| **Direction** | 5 | Validation dashboards, pilotage KPIs | 1j (BI/Dashboards) |
| **Managers** | 15 | Tests workflows, validation métier, adoption équipes | 2j (Odoo + Apps) |
| **Utilisateurs Bureau** | 30 | Tests quotidiens, remontées bugs, ambassadeurs | 2j (Odoo modules) |
| **Utilisateurs Terrain** | 50 | Tests apps mobiles, feedback UX, adoption | 1-2j (Apps + mobile) |

**Super-Users** : 10 personnes (1 par service) formées 3j pour support interne
**Formation totale** : ~200 jours-personne sur 18 mois

---

## 📋 MATRICE RACI DÉTAILLÉE

**Légende** :
- **R** (Responsible) : Réalise l'activité
- **A** (Accountable) : Garant du résultat (décision finale)
- **C** (Consulted) : Consulté pour avis
- **I** (Informed) : Informé des résultats

### Phase 0 : PRÉPARATION PROJET (Mois 0)

| Activité | CODIR | Chef Projet | Référent IT | Sponsors Métiers | Intégrateur | Users |
|----------|-------|-------------|-------------|------------------|-------------|-------|
| Validation budget global | **A** | **R** | C | C | I | I |
| Constitution équipe projet | A | **R** | C | C | I | - |
| Sélection intégrateur Odoo | A | **R** | **C** | I | - | - |
| Définition périmètre Vague 1 | A | **R** | C | **C** | I | - |
| Audit qualité données | I | A | **R** | C | **C** | - |
| Planning détaillé 18 mois | A | **R** | C | C | C | - |
| Kick-off projet | A | **R** | C | C | C | I |

---

### Vague 1 : FONDATIONS (Mois 1-6)

#### Projet 1 : ERP Odoo Phase 1 (Direction-Affaires, Service-Client)

| Activité | CODIR | Chef Projet | Référent IT | Sponsors Métiers | Intégrateur | Users |
|----------|-------|-------------|-------------|------------------|-------------|-------|
| Setup Odoo Cloud | I | A | C | I | **R** | - |
| Migration données EBP | I | A | C | **C** | **R** | - |
| Paramétrage modules Ventes/CRM | I | A | C | **C** | **R** | - |
| Création templates devis | I | A | I | **R** | C | C |
| Tests fonctionnels | I | A | C | **R** | C | **R** |
| Formation utilisateurs (6 users) | I | A | I | C | **R** | **R** |
| Go-Live Direction-Affaires | **A** | **R** | C | C | C | I |
| Bilan M2 (Go/No-Go Phase 2) | **A** | **R** | C | **C** | I | I |

#### Projet 2 : App Mobile Chantiers MVP

| Activité | CODIR | Chef Projet | Référent IT | Sponsors Métiers | Dev Mobile | Users |
|----------|-------|-------------|-------------|------------------|-----------|-------|
| Spécifications fonctionnelles | I | A | C | **R** | C | **C** |
| Maquettes UX/UI | I | A | I | C | **R** | **C** |
| Développement MVP | I | A | C | I | **R** | - |
| Tests terrain (2-3 chefs pilotes) | I | A | I | **R** | C | **R** |
| Formation 15 chefs chantier | I | A | I | C | **R** | **R** |
| Achat tablettes (15 unités) | A | **R** | **R** | I | - | - |
| Go-Live App Mobile | **A** | **R** | C | C | I | I |

#### Projet 3 : CRM HubSpot Gratuit (Quick Win)

| Activité | CODIR | Chef Projet | Référent IT | Sponsors Métiers | HubSpot | Users |
|----------|-------|-------------|-------------|------------------|---------|-------|
| Setup compte HubSpot Free | I | **R** | C | I | - | - |
| Import 50 contacts pilotes | I | A | I | **R** | - | **R** |
| Configuration pipeline ventes | I | A | I | **R** | - | C |
| Formation Claire (Service-Client) | I | A | I | C | - | **R** |
| Création templates emails | I | A | I | **R** | - | **R** |
| Go-Live CRM (2 users) | I | **R** | I | **A** | - | I |

---

### Vague 2 : STRUCTURANTS (Mois 7-12)

#### Projet 4 : ERP Odoo Phase 2 (Extension 6 services)

| Activité | CODIR | Chef Projet | Référent IT | Sponsors Métiers | Intégrateur | Users |
|----------|-------|-------------|-------------|------------------|-------------|-------|
| Modules Stocks/Achats/SAV | I | A | C | **C** | **R** | - |
| Migration données 30 users | I | A | C | **C** | **R** | - |
| Workflows métier custom | I | A | C | **R** | **R** | C |
| Tests fonctionnels 6 services | I | A | C | **R** | C | **R** |
| Formation 30 users | I | A | I | C | **R** | **R** |
| Go-Live 6 services | **A** | **R** | C | C | C | I |

#### Projet 5 : SIRH Moderne (Lucca/PayFit)

| Activité | CODIR | Chef Projet | Référent IT | Sophie RH | Prestataire SIRH | Users |
|----------|-------|-------------|-------------|-----------|-----------------|-------|
| Choix solution SIRH | **A** | C | C | **R** | I | - |
| Setup SIRH (100 users) | I | A | C | C | **R** | - |
| Migration bulletins paie | I | A | I | **R** | **R** | - |
| Workflows absences/frais | I | A | I | **R** | **R** | C |
| Formation Sophie + 10 managers | I | A | I | **R** | **R** | **R** |
| Go-Live SIRH | **A** | **R** | C | **A** | C | I |

#### Projet 6 : APIs Fournisseurs & Financières

| Activité | CODIR | Chef Projet | Référent IT | Sponsors Métiers | Dev APIs | Users |
|----------|-------|-------------|-------------|------------------|----------|-------|
| Connexion API Rexel/Sonepar | I | A | C | **C** | **R** | - |
| Connexion Open Banking | I | A | C | **C** | **R** | - |
| Connexion Chorus Pro | I | A | C | **C** | **R** | - |
| Tests intégrations | I | A | **R** | C | C | - |
| Formation utilisateurs APIs | I | A | I | **R** | C | **R** |
| Go-Live APIs | I | **R** | **A** | C | C | I |

#### Projet 7 : Scan RFID/QR Stocks

| Activité | CODIR | Chef Projet | Référent IT | Sponsors Métiers | Intégrateur | Users |
|----------|-------|-------------|-------------|------------------|-------------|-------|
| Achat douchettes (3 unités) | A | **R** | **R** | I | - | - |
| Paramétrage Odoo Inventaire | I | A | C | C | **R** | - |
| Étiquetage produits stock | I | A | I | **R** | C | **R** |
| Formation magasiniers (3 pers) | I | A | I | C | **R** | **R** |
| Go-Live Scan | I | **R** | I | **A** | C | I |

---

### Vague 3 : EXCELLENCE (Mois 13-18)

#### Projet 8 : Data Warehouse & BI Avancé

| Activité | CODIR | Chef Projet | Référent IT | Sponsors Métiers | Consultant BI | Users |
|----------|-------|-------------|-------------|------------------|--------------|-------|
| Setup Data Warehouse | I | A | **R** | I | C | - |
| ETL Odoo → DW | I | A | **R** | I | **R** | - |
| Dashboards PowerBI (optionnel) | I | A | C | **C** | **R** | C |
| Formation 10 managers BI | I | A | I | C | **R** | **R** |
| Go-Live BI | I | **R** | **A** | C | C | I |

#### Projet 9 : Modules IA Prédictifs

| Activité | CODIR | Chef Projet | Référent IT | Sponsors Métiers | Data Scientist | Users |
|----------|-------|-------------|-------------|------------------|---------------|-------|
| Algorithme Assistant Chiffrage | **A** | A | C | **C** | **R** | C |
| Algorithme Planification Dynamique | **A** | A | C | **C** | **R** | C |
| Tests prédictions (3 mois historique) | I | A | C | **R** | **R** | **R** |
| Formation Direction (IA) | I | A | I | I | **R** | **R** |
| Go-Live Modules IA | **A** | **R** | C | C | C | I |

---

## 🎯 COMITÉS DE GOUVERNANCE

### 1. COMITÉ DE PILOTAGE (CODIR)

**Composition** :
- Sponsor Exécutif (Christine DG)
- Sponsor Finance (CFO/DAF)
- Sponsor Métier (Direction Opérations)
- Chef de Projet Transformation
- Référent IT

**Fréquence** : **Bimestrielle** (tous les 2 mois)

**Ordre du jour type** (2h) :
1. Bilan vague en cours (15 min)
   - Avancement planning (% réalisation)
   - Suivi budget (consommé vs prévu)
   - Risques majeurs & escalades
2. Décision Go/No-Go vague suivante (30 min)
   - Critères succès atteints ?
   - Budget disponible ?
   - Recommandation chef projet
3. KPIs transformation (30 min)
   - Adoption utilisateurs
   - Gains temps mesurés
   - Satisfaction utilisateurs
4. Arbitrages & décisions majeures (30 min)
   - Changements scope
   - Budgets additionnels
   - Résolution blocages
5. Communication interne (15 min)
   - Messages clés collaborateurs
   - Quick wins à communiquer

**Livrables** :
- Compte-rendu décisions
- Mise à jour planning/budget
- Plan actions blocages

---

### 2. COMITÉ TECHNIQUE

**Composition** :
- Chef de Projet Transformation
- Référent IT
- Intégrateur Odoo
- Développeurs (Apps, APIs, BI selon vague)

**Fréquence** : **Hebdomadaire** (1h30)

**Ordre du jour type** :
1. Avancement sprints techniques (30 min)
   - User stories complétées
   - Développements en cours
   - Tests réalisés
2. Problèmes techniques (30 min)
   - Bugs critiques
   - Blocages intégrations
   - Performance
3. Revue qualité code (15 min)
   - Code review
   - Tests automatisés
   - Documentation technique
4. Planning semaine suivante (15 min)
   - Sprint planning
   - Priorisation backlog

**Livrables** :
- Sprint backlog
- Bugs tracker
- Documentation technique

---

### 3. COMITÉS MÉTIERS (par service)

**Composition** :
- Chef de Projet Transformation
- Sponsor Métier du service
- 3-5 utilisateurs clés du service
- Intégrateur/Développeur (selon sujet)

**Fréquence** : **Bi-hebdomadaire** pendant développement du service (1h)

**Ordre du jour type** :
1. Démo fonctionnalités développées (20 min)
   - Écrans développés
   - Workflows implémentés
2. Tests utilisateurs (20 min)
   - Tests terrain
   - Remontées bugs/améliorations
3. Validation fonctionnelle (10 min)
   - Conformité besoins
   - Ajustements nécessaires
4. Préparation formation (10 min)
   - Supports pédagogiques
   - Planning formation

**Livrables** :
- Liste bugs/améliorations
- Validation fonctionnelle signée
- Plan formation

---

## 📊 CRITÈRES GO/NO-GO PAR VAGUE

### Vague 1 : FONDATIONS (Décision M6)

**Critères GO pour Vague 2** :

| Critère | Mesure | Seuil GO |
|---------|--------|----------|
| **Adoption utilisateurs** | % users actifs quotidiens | **> 85%** |
| **Satisfaction utilisateurs** | Note moyenne enquête | **> 4/5** |
| **Temps devis/PPSPS** | Réduction mesurée vs baseline | **Amélioration significative** |
| **Stabilité ERP** | Uptime Odoo | **> 99%** |
| **Budget Vague 1** | Dépassement | **< 10%** |
| **App mobile utilisée** | % chefs chantier actifs | **> 80%** |
| **CRM opérationnel** | Contacts migrés, tickets créés | **> 90% processus digitalisés** |

**Décision** :
- ✅ **GO Vague 2** si 6/7 critères OK
- ⚠️ **GO CONDITIONNEL** si 4-5/7 critères OK (plan actions correctif)
- ❌ **NO-GO** si < 4/7 critères OK (audit causes, plan pivot)

---

### Vague 2 : STRUCTURANTS (Décision M12)

**Critères GO pour Vague 3** :

| Critère | Mesure | Seuil GO |
|---------|--------|----------|
| **Extension ERP 6 services** | Services opérationnels | **6/6 services** |
| **Adoption globale** | % users actifs tous services | **> 85%** |
| **Temps paie RH** | Réduction mesurée | **Réduction significative** |
| **APIs fournisseurs actives** | Commandes automatisées | **> 70%** |
| **Scan stocks opérationnel** | Inventaires digitaux | **> 90%** |
| **Budget Vague 2** | Dépassement | **< 15%** |
| **ROI intermédiaire** | Gains temps cumulés M12 | **> 50% gains attendus** |

**Décision** :
- ✅ **GO Vague 3** si 6/7 critères OK
- ⚠️ **GO CONDITIONNEL** si 4-5/7 critères OK
- ❌ **NO-GO** si < 4/7 critères OK (consolidation avant IA)

---

### Vague 3 : EXCELLENCE (Décision M18 - Bilan Final)

**Critères SUCCÈS TRANSFORMATION** :

| Critère | Mesure | Seuil SUCCÈS |
|---------|--------|--------------|
| **Transformation complète** | Services digitalisés | **8/8 services** |
| **Adoption durable** | % users actifs M18 | **> 90%** |
| **Satisfaction globale** | Note moyenne finale | **> 4.5/5** |
| **Gains temps mesurés** | Réduction cumulée | **Conforme objectifs** |
| **ROI atteint** | Gains vs investissement | **Payback < 24 mois** |
| **Modules IA opérationnels** | Prédictions actives | **2/3 modules** |
| **Budget global** | Dépassement total | **< 15%** |
| **Turnover équipes** | Départs projet | **< 10%** |

**Décision** :
- ✅ **SUCCÈS COMPLET** si 7-8/8 critères OK
- ⚠️ **SUCCÈS PARTIEL** si 5-6/8 critères OK (amélioration continue)
- ❌ **ÉCHEC** si < 5/8 critères OK (audit post-mortem)

---

## 📈 REPORTING & COMMUNICATION

### 1. Reporting CODIR (Bimestriel)

**Dashboard Exécutif** (1 page A4) :

**Section 1 : Feux Tricolores**
- 🟢 Planning : Conforme / ⚠️ Retard léger / 🔴 Retard critique
- 🟢 Budget : Conforme / ⚠️ Dépassement <10% / 🔴 Dépassement >10%
- 🟢 Adoption : >85% / ⚠️ 70-85% / 🔴 <70%
- 🟢 Risques : Maîtrisés / ⚠️ Vigilance / 🔴 Critiques

**Section 2 : KPIs Clés**
- % Réalisation planning (vs prévu)
- Budget consommé (vs enveloppe)
- Nb users actifs / Total users
- Satisfaction moyenne (note /5)

**Section 3 : Gains Mesurés**
- Temps devis : Réduction mesurée
- Temps paie : Réduction mesurée
- Opportunités captées : Nombre
- Erreurs évitées : Nombre

**Section 4 : Prochaines Étapes**
- Jalons M+2 (3 max)
- Décisions requises CODIR
- Risques majeurs & mitigation

---

### 2. Reporting Technique (Hebdomadaire)

**Format** : Email synthétique (1 page)

**Contenu** :
- Sprint complété (user stories terminées)
- Développements en cours
- Bugs critiques (si aucun → "RAS")
- Planning semaine suivante
- Blocages nécessitant décision

**Destinataires** : Chef Projet, Référent IT, Intégrateur

---

### 3. Communication Utilisateurs

**Newsletter Transformation** (Mensuelle)

**Contenu** :
- Quick win du mois (témoignage utilisateur)
- Avancement projet (% réalisation visuel)
- Prochaines formations (dates, inscriptions)
- FAQ du mois (3 questions/réponses)
- Teaser vague suivante

**Canaux** :
- Email tous collaborateurs
- Affichage bureaux/dépôts
- Réunion équipe (5 min mensuel)

---

## ⚠️ ESCALADE & GESTION BLOCAGES

### Matrice d'Escalade

| Problème | Niveau 1 | Niveau 2 | Niveau 3 |
|----------|----------|----------|----------|
| **Bug technique mineur** | Intégrateur (J+1) | Référent IT (J+3) | - |
| **Bug critique (blocage)** | Chef Projet (immédiat) | Référent IT + Intégrateur (J+1) | CODIR (J+3) |
| **Résistance utilisateur** | Sponsor Métier (J+7) | Chef Projet + Change Mgmt (J+14) | CODIR (M+1) |
| **Dépassement budget <10%** | Chef Projet (reallocation) | Sponsor Finance (validation) | - |
| **Dépassement budget >10%** | - | Sponsor Finance (analyse) | CODIR (décision) |
| **Retard planning <2 sem** | Chef Projet (rattrapage) | Comité Technique (replanification) | - |
| **Retard planning >2 sem** | Chef Projet (analyse) | CODIR (décision arbitrage) | - |

---

## 📋 CHECKLIST GOUVERNANCE

Avant lancement projet, valider :

- [ ] **Sponsor Exécutif** désigné et engagé
- [ ] **Chef de Projet Transformation** recruté (interne ou externe)
- [ ] **8 Sponsors Métiers** identifiés et disponibles (allocation temps validée)
- [ ] **Comité Pilotage** constitué (3 membres minimum)
- [ ] **Calendrier Comités** planifié sur 18 mois (dates bloquées agendas)
- [ ] **Matrice RACI** validée par tous sponsors
- [ ] **Critères Go/No-Go** validés et chiffrés
- [ ] **Templates reporting** créés (dashboards, newsletters)
- [ ] **Outils collaboration** choisis (Trello/Asana projet, Slack/Teams communication)
- [ ] **Budget contingence** validé (15% enveloppe globale)

---

## 🎯 FACTEURS CLÉS SUCCÈS GOUVERNANCE

### 1. Sponsoring Fort & Visible
✅ Sponsor Exécutif présent tous Comités Pilotage
✅ Communication régulière Direction → Collaborateurs
✅ Arbitrages rapides (< 1 semaine) si blocages

### 2. Champions Internes Engagés
✅ Sponsors Métiers formés 3j (vs 2j users standards)
✅ Temps alloué projet (0,2-0,3 ETP) officiellement reconnu
✅ Valorisation rôle (présentation CODIR, bonus projet)

### 3. Comités Efficaces
✅ Fréquence respectée (pas de reports)
✅ Ordre du jour envoyé J-2
✅ Décisions formalisées (compte-rendu J+1)
✅ Durée respectée (pas de débordements)

### 4. Reporting Transparent
✅ Feux tricolores objectifs (pas "tout vert")
✅ Problèmes remontés immédiatement
✅ Gains mesurés factuellement (pas estimations)

---

**📅 Document créé** : Novembre 2025
**🔄 Version** : v1.0 - Gouvernance projet transformation
**✅ Statut** : Prêt validation CODIR
**⚠️ Révision** : Mensuelle (ajustements organisation si nécessaire)
