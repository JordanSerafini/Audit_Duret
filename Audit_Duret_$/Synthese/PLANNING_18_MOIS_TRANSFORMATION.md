# 📅 PLANNING 18 MOIS - TRANSFORMATION DIGITALE DURET ÉLECTRICITÉ

**Date** : Novembre 2025
**Horizon** : 18 mois (vs 12 mois initial - ajusté pour réalisme)
**Approche** : Progressive par vagues avec jalons Go/No-Go
**Budget** : 165-282K€

---

## 📊 RÉSUMÉ EXÉCUTIF

**Planning ajusté à 18 mois** (vs 12 mois initial) pour garantir :
✅ **Adoption utilisateurs réussie** (temps formation suffisant)
✅ **Qualité déploiements** (tests approfondis)
✅ **Gestion changement efficace** (accompagnement renforcé)
✅ **Risques maîtrisés** (phases espacées avec jalons)

**3 Vagues** :
- 🌊 **Vague 1** (M1-M6) : Fondations - ERP + Apps Mobile + CRM
- 🌊 **Vague 2** (M7-M12) : Structurants - Extension ERP + SIRH + APIs
- 🌊 **Vague 3** (M13-M18) : Excellence - Data/BI + Modules IA

**5 Jalons Go/No-Go** critiques pour décisions éclairées

---

## 🗓️ VUE D'ENSEMBLE 18 MOIS

```
M0  M1  M2  M3  M4  M5  M6│M7  M8  M9  M10 M11 M12│M13 M14 M15 M16 M17 M18
├───┼───┼───┼───┼───┼───┤├───┼───┼───┼───┼───┼───┤├───┼───┼───┼───┼───┼───┤
│   VAGUE 1 : FONDATIONS  │  VAGUE 2 : STRUCTURANTS │ VAGUE 3 : EXCELLENCE │
│                         │                         │                      │
│ ERP Phase 1 ████████████│ ERP Phase 2 ████████████│ ERP Phase 3 █████   │
│ App Mobile  ████████████│ App Extensions ███████  │                      │
│ CRM Gratuit ███         │ SIRH ████████████       │                      │
│                         │ APIs ████████████       │ Data/BI  █████████   │
│                         │ Scan RFID █████         │ Modules IA ███████   │
│                         │                         │                      │
│ GO/NO-GO ❶ (M2)        │ GO/NO-GO ❸ (M9)        │ GO/NO-GO ❺ (M15)    │
│ GO/NO-GO ❷ (M6)        │ GO/NO-GO ❹ (M12)       │ BILAN FINAL (M18)    │
```

---

## 🌊 VAGUE 1 : FONDATIONS (M1-M6)

**Objectif** : Système ERP opérationnel + Quick Wins visibles

**Budget** : 78 000 - 122 000€

### Mois 0 : PRÉPARATION (Semaines 1-4)

**Phase** : Avant lancement officiel

| Semaine | Activités | Responsable | Livrables |
|---------|-----------|-------------|-----------|
| **S1-S2** | Constitution équipe projet | Direction + Chef Projet | Équipe constituée, RACI validé |
| **S2** | Sélection intégrateur Odoo (appel d'offres) | Chef Projet + Référent IT | 3 devis comparés, choix validé |
| **S3** | Audit qualité données EBP | Intégrateur Odoo | Rapport qualité, plan nettoyage |
| **S3-S4** | Définition périmètre détaillé Vague 1 | Sponsors Métiers | Cahier charges validé |
| **S4** | Kick-off projet (réunion lancement) | CODIR | Planning détaillé, engagement équipes |

**Jalon M0** : ✅ Contrat intégrateur signé, équipe mobilisée

---

### Mois 1 : SETUP TECHNIQUE

**Projet 1 : ERP Odoo Phase 1 (Direction-Affaires + Service-Client)**

| Semaine | Activités | Détail | Responsable |
|---------|-----------|--------|-------------|
| **M1-S1** | Setup Odoo Cloud infrastructure | Serveurs, bases de données, backups | Intégrateur |
| **M1-S2** | Configuration modules Ventes + CRM | Paramétrage workflows, droits utilisateurs | Intégrateur + Sponsors |
| **M1-S3** | Export données EBP → Nettoyage | Affaires actives, clients, historique | Intégrateur + Équipe métier |
| **M1-S4** | Import données Odoo + Tests | Validation cohérence, corrections | Intégrateur |

**Projet 2 : CRM HubSpot Gratuit (Quick Win)**

| Semaine | Activités | Détail | Responsable |
|---------|-----------|--------|-------------|
| **M1-S2** | Setup HubSpot Free (2 users) | Compte, configuration pipeline | Chef Projet |
| **M1-S3** | Import 50 contacts pilotes | Clients actifs Service-Client | Claire (Service-Client) |
| **M1-S4** | Formation Claire (1j) | CRM basics, tickets, templates | Formateur HubSpot |

**Projet 3 : App Mobile Chantiers (Démarrage)**

| Semaine | Activités | Détail | Responsable |
|---------|-----------|--------|-------------|
| **M1-S2** | Spécifications fonctionnelles | Ateliers Marc + 2 chefs chantier | Chef Projet + Dev Mobile |
| **M1-S3-S4** | Maquettes UX/UI | Écrans mockups, validation terrain | Dev Mobile + Marc |

**Livrables M1** :
- ✅ Odoo configuré (environnement prêt)
- ✅ Données EBP importées (affaires actives)
- ✅ HubSpot opérationnel (50 contacts)
- ✅ Maquettes app mobile validées

---

### Mois 2 : GO-LIVE PILOTES

**Projet 1 : ERP Odoo - Pilotes Direction-Affaires**

| Semaine | Activités | Détail | Responsable |
|---------|-----------|--------|-------------|
| **M2-S1** | Création 10 templates devis | Templates BTP standards | Intégrateur + Julien/Laurent |
| **M2-S1-S2** | Formation 2 RA pilotes (2j) | Odoo Ventes, devis, affaires | Formateur Odoo |
| **M2-S2** | Go-Live pilotes (2 RA) | Premiers devis réels créés | 2 RA + Support |
| **M2-S3-S4** | Support intensif + Ajustements | Bugs fixes, optimisations | Intégrateur + Référent IT |

**Projet 2 : App Mobile - Développement MVP**

| Semaine | Activités | Détail | Responsable |
|---------|-----------|--------|-------------|
| **M2 complet** | Développement React Native MVP | Photos, rapports, mode offline | Dev Mobile |

**Projet 3 : CRM HubSpot - Déploiement**

| Semaine | Activités | Détail | Responsable |
|---------|-----------|--------|-------------|
| **M2-S1-S2** | Utilisation quotidienne Claire | Tickets clients, traçabilité appels | Claire |
| **M2-S3** | Bilan Quick Win CRM | Fin post-it ? Satisfaction Claire ? | Chef Projet |

**🎯 JALON ❶ : GO/NO-GO PILOTES ODOO (Fin M2)**

**Critères décision** :
- ✅ 2 RA pilotes satisfaits (note > 4/5)
- ✅ Premiers devis créés avec templates (≥ 3 devis)
- ✅ Temps création devis réduit (mesure vs baseline)
- ✅ Stabilité Odoo (uptime > 98%)
- ✅ Budget M1-M2 respecté (±10%)

**Décisions** :
- **GO** → Continuer M3-M6 (généralisation + PPSPS)
- **GO CONDITIONNEL** → Plan actions correctif + prolongation 2 semaines
- **NO-GO** → Audit échec, pivot solution

---

### Mois 3-4 : GÉNÉRALISATION VAGUE 1

**Projet 1 : ERP Odoo - Généralisation Direction-Affaires**

| Mois | Activités | Détail | Responsable |
|------|-----------|--------|-------------|
| **M3** | Formation 2 RA restants (2j) | Odoo Ventes, workflows | Formateur Odoo |
| **M3** | Go-Live 4 RA complets | Tous RA équipés | Support Intégrateur |
| **M3-M4** | Développement module PPSPS auto | Templates PPSPS, génération automatique | Intégrateur custom |
| **M4** | Intégration APIs Rexel/Sonepar (démarrage) | Connexion catalogues tarifs | Dev APIs |
| **M4** | Formation Service-Client Odoo CRM (2 users) | CRM Odoo vs HubSpot (comparaison) | Formateur |

**Projet 2 : App Mobile - Tests Terrain**

| Mois | Activités | Détail | Responsable |
|------|-----------|--------|-------------|
| **M3** | Tests MVP par 3 chefs pilotes | 2 semaines usage réel chantiers | Marc + 2 chefs |
| **M3-M4** | Corrections bugs + améliorations | Feedback terrain intégré | Dev Mobile |
| **M4** | Achat 15 tablettes durcies | Commande, réception, configuration | Référent IT |
| **M4** | Formation 15 chefs chantier (1j) | App mobile, rapports digitaux | Formateur |

**Livrables M3-M4** :
- ✅ 4 RA formés et opérationnels Odoo
- ✅ Module PPSPS développé (version beta)
- ✅ App mobile MVP testée et corrigée
- ✅ 15 tablettes configurées et distribuées

---

### Mois 5-6 : FINALISATION VAGUE 1

**Projet 1 : ERP Odoo - Modules Avancés**

| Mois | Activités | Détail | Responsable |
|------|-----------|--------|-------------|
| **M5** | Go-Live module PPSPS automatique | Génération PPSPS par type chantier | Intégrateur + BE |
| **M5** | Finalisation APIs Rexel/Sonepar | Tarifs temps réel dans devis | Dev APIs |
| **M5** | Module gestion reliquats + alertes | Traçabilité 100% vs oublis actuels | Intégrateur |
| **M6** | Dashboards Direction (15 KPIs) | Visibilité temps réel affaires | Intégrateur BI |
| **M6** | App web mobile responsive | Consultation affaires terrain | Intégrateur |

**Projet 2 : App Mobile - Déploiement Général**

| Mois | Activités | Détail | Responsable |
|------|-----------|--------|-------------|
| **M5-M6** | Utilisation quotidienne 15 chefs | Rapports digitaux, photos géolocalisées | 15 chefs + Support |
| **M6** | Mesure adoption (usage réel) | % rapports digitaux vs papier | Chef Projet |

**Projet 3 : Documentation & Support**

| Mois | Activités | Détail | Responsable |
|------|-----------|--------|-------------|
| **M6** | Documentation complète utilisateurs | Guides PDF, vidéos tutoriels | Intégrateur + Change Mgmt |
| **M6** | Formation Direction (dashboards) | Lecture KPIs, pilotage | Formateur BI |
| **M6** | Support hotline renforcé | 9h-18h disponibilité | Intégrateur (1 mois) |

**🎯 JALON ❷ : GO/NO-GO VAGUE 2 (Fin M6)**

**Critères décision** :
- ✅ Adoption ERP Odoo : > 85% users actifs quotidiens (4 RA)
- ✅ Adoption App Mobile : > 80% chefs chantier utilisent (12/15)
- ✅ Satisfaction utilisateurs : > 4/5 (enquête anonyme)
- ✅ Temps devis réduit : Amélioration mesurée significative vs baseline
- ✅ PPSPS générés automatiquement : > 70% PPSPS via module
- ✅ Fin post-it Service-Client : 100% tickets digitaux HubSpot/Odoo
- ✅ Budget Vague 1 : Dépassement < 10% (78-122K€)

**Décisions** :
- **GO VAGUE 2** (si 6/7 critères OK) → Lancer Extension ERP + SIRH + APIs (Budget 88-169K€)
- **GO CONDITIONNEL** (si 4-5/7 OK) → Plan actions + report Vague 2 de 1 mois
- **NO-GO** (si < 4/7 OK) → Consolidation Vague 1, audit échec, pas Vague 2

**Communication** : Newsletter transformation "6 mois de succès" + témoignages users

---

## 🌊 VAGUE 2 : STRUCTURANTS (M7-M12)

**Objectif** : Extension ERP tous services + SIRH + Automatisations

**Budget** : 88 000 - 169 000€

### Mois 7-9 : EXTENSION ERP + SIRH

**Projet 4 : ERP Odoo Phase 2 (6 services)**

| Mois | Services déployés | Modules Odoo | Users | Formation |
|------|------------------|--------------|-------|-----------|
| **M7** | Gestion-Opérationnelle | Stocks, Achats, Dashboards BI | Sylvie + 5 | 2j |
| **M8** | Maintenance-Technique | SAV, Field Service, Planning | Gaëtan + 10 | 2j |
| **M9** | Achats-Logistique | Achats, Commandes, Stocks | Resp. Achats + 3 | 2j |

| Mois | Activités Techniques | Détail | Responsable |
|------|---------------------|--------|-------------|
| **M7** | Migration données 30 users | Stocks, fournisseurs, contrats SAV | Intégrateur |
| **M7-M8** | Paramétrage workflows métier custom | Workflows spécifiques par service | Intégrateur + Sponsors |
| **M8-M9** | Tests fonctionnels intensifs | Validation terrain par 30 users | Sponsors + Users |
| **M9** | Go-Live 6 services simultanés | Basculement production | Support renforcé |

**Projet 5 : SIRH Moderne (Lucca ou PayFit)**

| Mois | Activités | Détail | Responsable |
|------|-----------|--------|-------------|
| **M7** | Choix solution SIRH définitif | Lucca vs PayFit (POC 2 semaines chacun) | Sophie RH + CODIR |
| **M7-M8** | Setup SIRH 100 users | Configuration, paramétrages | Prestataire SIRH |
| **M8** | Migration bulletins paie | Historique 12 mois minimum | Sophie + Prestataire |
| **M8-M9** | Workflows absences/frais/onboarding | Automatisation processus RH | Prestataire + Sophie |
| **M9** | Formation Sophie + 10 managers (2j) | SIRH administration, workflows | Formateur SIRH |
| **M9** | Formation 100 collaborateurs (0.5j) | Portail self-service, demandes | Formateur SIRH |

**Livrables M7-M9** :
- ✅ ERP Odoo opérationnel 6 services supplémentaires (34 users cumulés)
- ✅ SIRH opérationnel (100 users)
- ✅ Workflows RH automatisés (absences, frais, onboarding)

**🎯 JALON ❸ : VALIDATION EXTENSIONS (Fin M9)**

**Critères validation** :
- ✅ 6 services opérationnels Odoo (Gestion-Op, Maintenance, Achats)
- ✅ Adoption globale : > 80% users actifs (30 users)
- ✅ SIRH utilisé quotidiennement : > 90% demandes digitales
- ✅ Satisfaction services : > 4/5 (enquête)
- ✅ Pas de régression Vague 1 : Direction-Affaires/Chantiers toujours > 85% adoption
- ✅ Budget M7-M9 : Conforme prévisions

**Décisions** :
- **GO** → Continuer M10-M12 (APIs + RFID + Albertville)
- **GO CONDITIONNEL** → Stabilisation 1 mois + report M10-M12
- **NO-GO** → Arrêt Vague 2, consolidation acquis

---

### Mois 10-12 : INTÉGRATIONS & ALBERTVILLE

**Projet 6 : APIs Fournisseurs & Financières**

| Mois | API | Fonctionnalité | Responsable |
|------|-----|----------------|-------------|
| **M10** | Rexel Pro API | Catalogues, commandes EDI, tarifs auto | Dev APIs |
| **M10** | Sonepar Connect API | Catalogues, disponibilité stock | Dev APIs |
| **M11** | Open Banking (Bridge) | Rapprochement bancaire automatique | Dev APIs |
| **M11** | Chorus Pro API | Facturation électronique B2G | Dev APIs |
| **M12** | Tests intégrations + Formation | Workflows automatisés validés | Intégrateur + Users |

**Projet 7 : Scan RFID/QR Stocks**

| Mois | Activités | Détail | Responsable |
|------|-----------|--------|-------------|
| **M10** | Achat matériel (3 douchettes) | Douchettes + imprimante étiquettes | Référent IT |
| **M10-M11** | Étiquetage produits stock (10 000 réf) | Code-barres imprimés et collés | Magasiniers + Support |
| **M11** | Paramétrage Odoo Inventaire | Scan, mouvements, alertes stock | Intégrateur |
| **M11** | Formation 3 magasiniers (1j) | Réception scan, inventaires digitaux | Formateur |
| **M12** | Go-Live Scan Stocks | Fin saisie manuelle | Support |

**Projet 8 : ERP Odoo Phase 2 bis (Albertville)**

| Mois | Activités | Détail | Responsable |
|------|-----------|--------|-------------|
| **M11** | Déploiement Odoo Albertville (15 users) | Modules BTP, BL digitaux | Intégrateur |
| **M11-M12** | Formation équipe Albertville (2j) | Workflows site, intégration siège | Formateur |
| **M12** | Go-Live Albertville | Fin Excel site | Support |

**Livrables M10-M12** :
- ✅ 4 APIs opérationnelles (Rexel, Sonepar, Open Banking, Chorus)
- ✅ Scan stocks opérationnel (inventaires digitaux)
- ✅ Albertville sur Odoo (15 users)

**🎯 JALON ❹ : GO/NO-GO VAGUE 3 (Fin M12)**

**Critères décision** :
- ✅ Extension ERP 8 services : TOUS opérationnels (49 users cumulés)
- ✅ Adoption globale : > 85% users actifs tous services
- ✅ Temps paie RH : Réduction significative mesurée (vs baseline)
- ✅ APIs actives : > 70% commandes via APIs fournisseurs
- ✅ Scan stocks : > 90% mouvements digitaux
- ✅ Satisfaction globale : > 4/5
- ✅ Budget Vague 2 : Dépassement < 15% (88-169K€)
- ✅ ROI intermédiaire : > 50% gains temps attendus mesurés

**Décisions** :
- **GO VAGUE 3** (si 7/8 critères OK) → Lancer Data/BI + Modules IA (Budget 43-86K€)
- **GO CONDITIONNEL** (si 5-6/8 OK) → Plan actions + décision M13
- **NO-GO** (si < 5/8 OK) → Pas Vague 3, consolidation/optimisation Vagues 1-2

**Communication** : Bilan 12 mois, succès stories, gains mesurés, lancement Vague 3

---

## 🌊 VAGUE 3 : EXCELLENCE (M13-M18)

**Objectif** : Data/BI avancé + Modules IA + Culture data-driven

**Budget** : 43 000 - 86 000€

### Mois 13-15 : DATA WAREHOUSE & BI

**Projet 9 : Data Warehouse & Dashboards Avancés**

| Mois | Activités | Détail | Responsable |
|------|-----------|--------|-------------|
| **M13** | Setup Data Warehouse PostgreSQL | Consolidation toutes sources Odoo | Consultant BI + Référent IT |
| **M13-M14** | ETL Odoo → Data Warehouse | Pipelines données quotidiens | Consultant BI |
| **M14** | Dashboards PowerBI (optionnel) | BI avancé si besoins > Odoo BI | Consultant BI |
| **M14-M15** | Formation 10 managers BI (2j) | Lecture dashboards, analyse données | Formateur BI |
| **M15** | Go-Live BI Avancé | Dashboards opérationnels Direction | Support BI |

**Projet 10 : Modules IA Prédictifs (Démarrage)**

| Mois | Activités | Détail | Responsable |
|------|-----------|--------|-------------|
| **M13-M14** | Collecte historique 18 mois données | Devis, marges, chantiers, achats | Data Scientist + Référent IT |
| **M14-M15** | Développement algorithme Assistant Chiffrage | ML suggestion prix optimaux devis | Data Scientist |

**Livrables M13-M15** :
- ✅ Data Warehouse opérationnel (consolidation données)
- ✅ Dashboards BI avancés (10 managers formés)
- ✅ Algorithme Assistant Chiffrage version beta

**🎯 JALON ❺ : VALIDATION BI & IA (Fin M15)**

**Critères validation** :
- ✅ Data Warehouse alimente dashboards quotidiennement
- ✅ 10 managers utilisent dashboards BI (adoption > 80%)
- ✅ Algorithme Assistant Chiffrage testé (prédictions > 70% précision)
- ✅ Pas régression adoption Vagues 1-2 : Toujours > 85%
- ✅ Budget M13-M15 : Conforme

**Décisions** :
- **GO** → Finaliser modules IA + déploiement général M16-M18
- **GO CONDITIONNEL** → Ajustements algorithmes + prolongation
- **NO-GO** → BI uniquement, pas modules IA (retour M18)

---

### Mois 16-18 : MODULES IA & FINALISATION

**Projet 10 : Modules IA Prédictifs (Finalisation)**

| Mois | Activités | Détail | Responsable |
|------|-----------|--------|-------------|
| **M16** | Développement Planification Dynamique | Optimisation planning chantiers (météo, compétences) | Data Scientist |
| **M16-M17** | Tests prédictions (3 mois données réelles) | Validation précision algorithmes terrain | Direction-Affaires + Data Scientist |
| **M17** | Formation Direction (IA) | Utilisation assistants IA, interprétation | Formateur IA |
| **M17-M18** | Ajustements algorithmes (feedback terrain) | Optimisations modèles ML | Data Scientist |
| **M18** | Go-Live Modules IA Production | Assistants IA actifs quotidiennement | Support IA |

**Projet 11 : Finalisation & Documentation**

| Mois | Activités | Détail | Responsable |
|------|-----------|--------|-------------|
| **M17** | Documentation technique complète | Architecture, APIs, bases données, code | Référent IT + Prestataires |
| **M17** | Documentation utilisateurs finale | Guides actualisés toutes fonctionnalités | Change Management |
| **M18** | Formation super-users avancée (10 pers, 1j) | Support interne autonome | Formateur |
| **M18** | Transfert compétences équipe interne | Autonomie maintenance/support | Intégrateur → Référent IT |

**Livrables M16-M18** :
- ✅ 3 modules IA opérationnels (Assistant Chiffrage, Planification Dynamique, Maintenance Prédictive)
- ✅ Documentation technique et utilisateurs complète
- ✅ Équipe interne autonome (support niveau 1-2)

---

### Mois 18 : BILAN FINAL TRANSFORMATION

**🎯 JALON FINAL : BILAN TRANSFORMATION 18 MOIS**

**Réunion CODIR Bilan** (4h) :

**1. Mesure Critères Succès** (1h)

| Critère | Mesure | Seuil SUCCÈS | Résultat |
|---------|--------|--------------|----------|
| **Transformation complète** | Services digitalisés | 8/8 services | À mesurer |
| **Adoption durable** | % users actifs M18 | > 90% | À mesurer |
| **Satisfaction globale** | Note moyenne finale | > 4.5/5 | À mesurer |
| **Gains temps mesurés** | Réduction cumulée | Conforme objectifs | À mesurer |
| **ROI atteint** | Gains vs investissement | Payback < 24 mois | À calculer |
| **Modules IA opérationnels** | Prédictions actives | 2/3 modules | À mesurer |
| **Budget global** | Dépassement total | < 15% | À calculer |
| **Turnover équipes** | Départs projet | < 10% | À mesurer |

**2. Présentation Gains Mesurés** (1h)

- Gains temps détaillés par processus (vs baselines M0)
- Gains CA (reliquats refacturés, opportunités captées)
- Gains qualité (erreurs évitées, satisfaction clients)
- ROI financier calculé (payback réel)

**3. Témoignages Utilisateurs** (30 min)

- 5 témoignages vidéo (1 par catégorie : Direction, RA, Chef Chantier, RH, Magasinier)
- Success stories marquantes

**4. Roadmap Amélioration Continue** (1h30)

- Optimisations identifiées M19-M24
- Nouvelles fonctionnalités souhaitées
- Plan formation continue
- Gouvernance run (post-projet)

**Communication** : Newsletter finale "18 mois de transformation", présentation tous collaborateurs, célébration réussite

---

## 📊 TABLEAU RÉCAPITULATIF JALONS GO/NO-GO

| Jalon | Mois | Décision | Critères Clés (min pour GO) | Budget Vague Suivante |
|-------|------|----------|----------------------------|----------------------|
| **❶ Pilotes Odoo** | M2 | GO/NO-GO Phase 2 Vague 1 | 4/5 critères OK | Inclus Vague 1 |
| **❷ Fin Vague 1** | M6 | GO/NO-GO Vague 2 | 6/7 critères OK | 88-169K€ |
| **❸ Extensions** | M9 | GO/NO-GO Suite Vague 2 | 5/6 critères OK | Inclus Vague 2 |
| **❹ Fin Vague 2** | M12 | GO/NO-GO Vague 3 | 7/8 critères OK | 43-86K€ |
| **❺ BI & IA** | M15 | GO/NO-GO Finalisation IA | 4/5 critères OK | Inclus Vague 3 |
| **🏁 BILAN FINAL** | M18 | Succès Transformation | 7/8 critères OK | - |

---

## ⚠️ RISQUES PLANNING & MITIGATION

### Risque #1 : Retards Migration Données

**Probabilité** : MOYENNE
**Impact** : Retard 2-4 semaines

**Causes** :
- Qualité données EBP pire que prévue
- Formats hétérogènes non anticipés
- Volume données supérieur estimations

**Mitigation** :
- ✅ Audit qualité données M0 (avant migration)
- ✅ Scripts ETL testés sur échantillons M1
- ✅ Contingence temps 2 semaines intégrée planning M1-M2
- ✅ Plan B : Migration manuelle assistée (si échec scripts)

---

### Risque #2 : Résistance Utilisateurs Forte

**Probabilité** : MOYENNE
**Impact** : Adoption < 70%, échec transformation

**Causes** :
- Surcharge équipes (projet + run)
- Courbe apprentissage Odoo sous-estimée
- Champions internes démotivés

**Mitigation** :
- ✅ Pilotes ambassadeurs identifiés M0 (volontaires motivés)
- ✅ Formation intensive 2j (vs 1j insuffisant)
- ✅ Support hotline renforcé 9h-18h (M1-M6)
- ✅ Quick wins communiqués largement (motivation)
- ✅ Décharge partielle sponsors métiers (allocation temps officielle)

---

### Risque #3 : Prestataires Défaillants

**Probabilité** : FAIBLE
**Impact** : Retard 4-8 semaines

**Causes** :
- Intégrateur sous-capacité (autres projets prioritaires)
- Dev mobile retards développement
- Qualité livrables insuffisante

**Mitigation** :
- ✅ Contrats forfait avec jalons paiement (vs régie)
- ✅ Pénalités retard contractualisées
- ✅ Références clients vérifiées (sélection prestataires)
- ✅ Plan B : Intégrateur backup identifié M0

---

### Risque #4 : Départ Personne Clé Projet

**Probabilité** : MOYENNE
**Impact** : Retard 2-4 semaines + perte connaissance

**Causes** :
- Burn-out (Sophie RH, Sylvie)
- Turnover (opportunité externe)
- Maladie longue durée

**Mitigation** :
- ✅ Binômes désignés pour personnes clés (backup)
- ✅ Documentation processus systématique
- ✅ Knowledge transfer continu (vs fin projet)
- ✅ Recrutement assistant Sylvie AVANT projet (risque identifié)

---

### Risque #5 : Budget Explosé

**Probabilité** : MOYENNE si pas suivi rigoureux
**Impact** : Arrêt projet ou vague incomplète

**Causes** :
- Scope creep (demandes additionnelles)
- Développements custom imprévus
- Prolongations prestataires (retards)

**Mitigation** :
- ✅ Contingence 15% incluse budget (25-42K€)
- ✅ Change control strict (validation CODIR si +10K€)
- ✅ Suivi budget hebdomadaire (dashboard Chef Projet)
- ✅ Jalons Go/No-Go stricts (arrêt si budget dépassé)

---

## 📋 CHECKLIST PLANNING

Avant lancement, valider :

- [ ] **Planning 18 mois détaillé** semaine par semaine M0-M6 disponible
- [ ] **Disponibilités équipes** vérifiées (congés, surcharge run)
- [ ] **Dates Comités Pilotage** bloquées agendas 18 mois (bimestriel)
- [ ] **Prestataires contractualisés** avec dates engagement fermes
- [ ] **5 jalons Go/No-Go** avec critères chiffrés validés CODIR
- [ ] **Budget contingence 15%** validé et disponible
- [ ] **Baselines mesurées** (temps devis, paie, rapports) pour comparaison M18
- [ ] **Communication planning** diffusée tous collaborateurs (transparence)

---

**📅 Document créé** : Novembre 2025
**🔄 Version** : v1.0 - Planning 18 mois transformation
**✅ Statut** : Prêt lancement projet
**⚠️ Mise à jour** : Hebdomadaire (avancement réel vs prévisions)
