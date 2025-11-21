# 📅 PLANNING IMPLEMENTATION - Maintenance Technique (18 mois)

**Entreprise** : Duret Électricité - Annecy
**Projet** : Digitalisation SAV end-to-end
**Durée** : 18 mois
**Budget** : 105K€
**ROI** : 270K€/an

---

## 📊 VUE D'ENSEMBLE

```
PHASE 1         PHASE 2         PHASE 3              RUN
Quick Wins      Intégrations    Excellence           Support
M1-3            M4-6            M7-18                Continu
30K€            35K€            25K€                 15K€
════════════════════════════════════════════════════════════════

│     🚀      │    🔗      │    ⭐          │    ▶️     │
│ Setup       │  Portail   │  Zoning        │  Licences │
│ App Mobile  │  Client    │  Intelligence  │  Maint.   │
│ CERFA = 0   │  Devis     │  Enquête Sat.  │  Support  │
│ Pointage    │  Workflows │  Analytics     │           │
│             │            │  Intég. SAGE   │           │
│             │            │                │           │
│ ROI:95K€/an │ ROI:+130K€ │ ROI:+45K€      │           │
└─────────────┴────────────┴────────────────┴───────────┘

PAYBACK : 4-5 mois
```

---

## 🚀 PHASE 1 : QUICK WINS (M1-3) - 30K€

### Objectif

> **Digitaliser rapports interventions, supprimer 100% CERFA papier, activer pointage GPS**

### ROI Phase 1 : 95K€/an

- CERFA digitalisé : 20K€/an
- Pointage GPS (refacturation heures) : 30K€/an
- Base Excel → CRM : 15K€/an
- Temps admin réduit : 30K€/an

---

### MOIS 1 : Setup & POC

#### Semaine 1-2 (J1-J14) : Sélection Solution

**J1 : Kick-off Projet**
- Comité projet : DT + Gaëtan + Clothilde + IT + Consultant
- Présentation roadmap 18 mois
- Validation périmètre Phase 1
- **Livrable** : CR kick-off + roadmap validée

**J2-J7 : POC 3 Solutions ERP Terrain**
- **Praxedo** : Démo 2h (J3)
  - Focus : IA planning, mobile offline
  - Test app iOS/Android (Gaëtan)
- **Synchroteam** : Démo 2h (J5)
  - Focus : PME, rapport qualité/prix
  - Test app (Gaëtan)
- **FieldPro** : Démo 2h (J7)
  - Focus : Intégration SAGE/ERP
  - Test app (Gaëtan)
- **Livrable** : Grille comparaison 3 solutions

**J8-J10 : Décision & Négociation**
- J8 : Comité décision (vote)
- J9 : Négociation commerciale
- J10 : Signature contrat
- **Livrable** : Contrat signé

---

#### Semaine 3-4 (J15-J30) : Configuration Initiale

**J15 : Formation Administrateur**
- Clothilde : Formation admin ERP (1 jour)
- Paramétrage système
- Création comptes utilisateurs
- **Livrable** : Clothilde autonome admin

**J20-J25 : Import Base Clients (EXTERNALISÉ)**
- **🔧 CORRECTION CHARGE CLOTHILDE** : Prestataire data externe
- Export Excel → CSV (300 contrats)
- Nettoyage données (doublons, erreurs) → Prestataire
- Import CRM (mapping champs) → Prestataire
- Validation données (Clothilde 2h/jour max)
- **Livrable** : 300 clients dans CRM ✅

**J26-J30 : Templates Rapports Interventions (CO-CRÉATION)**
- **🔧 DÉLESTAGE CLOTHILDE** : Gaëtan + Consultant co-créent
- Création 10 templates types (Gaëtan expertise métier) :
  - Entretien annuel (Bronze/Argent/Or)
  - Dépannage urgence
  - Mise en service
  - Contrôle conformité
  - Remplacement matériel
  - Maintenance préventive
  - Intervention garantie
  - Diagnostic panne
  - Installation nouveau
  - Autre (personnalisé)
- Tests templates (Clothilde validation finale 4h)
- **Livrable** : 10 templates validés

---

### MOIS 2 : Déploiement App Mobile

#### Semaine 5-6 (J31-J45) : Configuration & Tests

**J31-J35 : Configuration App Mobile**
- Téléchargement app (iOS/Android)
- Configuration comptes techniciens (7 licences)
- Synchronisation CRM → App
- Tests connexion/déconnexion
- Mode offline configuration
- **Livrable** : App configurée 7 techniciens

**J36-J40 : Formation TOUS Techniciens (OBLIGATOIRE)**
- Formation 3h × 2 sessions TOUTE L'ÉQUIPE :
  - **Session 1 (Gaëtan + 3 techniciens)** : J36-J38
  - **Session 2 (4 techniciens restants)** : J39-J41
- Contenu : Rapport intervention digital, pointage GPS, photos
- Pratique terrain (1 intervention accompagnée par technicien)
- Support hotline 8h-18h
- **Livrable** : 7 techniciens formés ET validés
- **🔴 CONDITION** : Validation formation 100% AVANT déploiement

**J41-J42 : Tests Pilote (2 Techniciens Volontaires)**
- Gaëtan + 1 technicien junior (déjà formés)
- 5 interventions tests de validation finale
- Recueil feedback + ajustements ergonomie
- **Livrable** : Tests concluants

---

#### Semaine 7-8 (J43-J60) : Déploiement Général

**🔴 JALONS CONDITIONNELS AJOUTÉS**

**J43-J50 : Déploiement Pilote Étendu**
- **🚨 PRÉ-REQUIS** : Formation 7/7 techniciens validée (J41)
- Déploiement 5 techniciens (formation déjà faite J36-J41)
- Suivi quotidien (réunion 15 min/jour)
- Résolution blocages terrain
- Hotline dédiée
- **Livrable** : 50 rapports digitaux créés

**J51-J55 : Ajustements Terrain**
- Analyse 50 rapports
- Optimisations templates (retours techniciens)
- Corrections bugs mineurs
- **Livrable** : Templates V2 optimisés

**J56-J60 : Déploiement 100% Techniciens**
- Formation 2 seniors restants
- Activation complète (7/7 techniciens)
- Activation pointage GPS obligatoire
- **Livrable** : 100% techniciens app active

---

### MOIS 3 : Consolidation & CERFA = 0

#### Semaine 9-10 (J61-J75) : Transition CERFA → Digital

**J65 : 🎉 CERFA PAPIER ARRÊTÉ (Symbole)**
- Réunion équipe : "Dernier jour CERFA"
- Collecte derniers CERFA papier
- Archivage définitif
- **À partir J66 : 100% RAPPORTS DIGITAUX**
- **Livrable** : CERFA papier = 0% ✅

**J66-J70 : Activation Pointage GPS**
- Pointage obligatoire (arrivée/départ)
- Alertes si oubli pointage
- Dashboard temps réel Clothilde
- **Livrable** : Pointage actif 100% interventions

**J71-J75 : Signature Électronique Clients**
- Formation techniciens signature tablette/smartphone
- Tests avec 10 clients
- Validation légale signature
- **Livrable** : Signature électronique active

---

#### Semaine 11-12 (J76-J90) : Optimisation & Bilan

**J76-J80 : Photos Avant/Après Intégrées**
- Formation photos intégrées app
  - Géolocalisation automatique
  - Date/heure automatique
  - Stockage cloud centralisé
- Tests 20 interventions avec photos
- **Livrable** : Photos intégrées 100%

**J81-J85 : Bilan Phase 1**
- Analyse KPI :
  - CERFA papier : 100% → **0%** ✅
  - Temps rapport : 12 min → **3 min** ✅
  - Pointage GPS : 0% → **100%** ✅
  - Satisfaction techniciens : 4/10 → **7/10** ✅
- Calcul gains réalisés : **95K€/an**
- Présentation DG/DT
- **Livrable** : Bilan Phase 1 + ROI confirmé

**J86-J90 : Décision Phase 2**
- Validation Go Phase 2 (35K€)
- Planification M4-6
- **Livrable** : Go Phase 2 ✅

---

## 🔗 PHASE 2 : INTÉGRATIONS (M4-6) - 35K€

### Objectif

> **Portail client, module devis terrain, workflows automatisés**

### ROI Phase 2 : +130K€/an (cumulé 225K€/an)

- Devis terrain : 45K€/an
- Portail client (RDV en ligne) : 35K€/an
- Alertes renouvellement contrats : 30K€/an
- Enquête satisfaction : 20K€/an

---

### MOIS 4 : Module Devis Terrain

**J95-J100 : Configuration Module Devis (DÉLÉGUÉ)**
- **🔧 DÉLESTAGE CLOTHILDE** : Technicien référent formé
- Import catalogue produits/services (50 références)
- Grille tarifs (Bronze/Argent/Or)
- Templates devis (5 types)
- Tests génération PDF
- **Livrable** : Module devis configuré

**J101-J105 : Formation Techniciens Devis Terrain**
- **🚨 PRÉ-REQUIS** : Module configuré ET validé (J100)
- Formation 2h : Module devis app mobile
- Pratique : Génération 1 devis terrain/technicien
- **Livrable** : 7 techniciens formés devis

**J106-J120 : Activation Module Devis**
- **🚨 PRÉ-REQUIS** : Formation 100% validée (J105)
- Activation production
- Suivi quotidien premiers devis
- **J120 : 🎉 1er DEVIS GÉNÉRÉ TERRAIN**
- Objectif M4 : 5 devis terrain
- **Livrable** : 5 devis générés ✅

---

### MOIS 5 : Portail Client

**J125-J130 : Configuration Portail**
- Branding Duret (logo, couleurs)
- Fonctions actives :
  - Prise RDV en ligne
  - Historique interventions
  - Téléchargement rapports
  - Suivi contrat maintenance
- Tests UAT (User Acceptance Testing)
- **Livrable** : Portail configuré

**J131-J140 : Création Comptes Clients (Batch 1)**
- **🚨 PRÉ-REQUIS** : Portail configuré ET testé (J130)
- Sélection 100 clients pilotes (les plus actifs)
- Création comptes (email unique)
- Email invitation + tutoriel vidéo (2 min)
- Hotline clients 8h-18h
- **Livrable** : 100 comptes créés ET testés

**J141-J150 : Activation Portail Client**
- **🚨 PRÉ-REQUIS** : 100 comptes créés ET validés (J140)
- Lancement portail LIVE
- Monitoring connexions/RDV
- **J150 : 🎉 1er RDV PRIS EN LIGNE**
- Objectif M5 : 10 RDV portail
- **Livrable** : Portail LIVE + 10 RDV ✅

---

### MOIS 6 : Workflows & Intégrations

**J155-J165 : Configuration Workflows Automatisés**
- **Workflow 1** : Alerte fin contrat
  - J-60 : Email client "Votre contrat arrive à échéance"
  - J-30 : Relance + lien renouvellement en ligne
  - J-7 : Alerte Clothilde (appel client)
- **Workflow 2** : Interventions automatiques (contrats)
  - Détection contrat signé → génération RDV auto (fréquence)
  - Email client confirmation RDV
- **Workflow 3** : Enquête satisfaction
  - J+2 post-intervention : Email enquête (5 questions)
  - J+7 : Relance si pas répondu
  - Alerte si note < 3/5 (action corrective)
- Tests workflows (10 cas)
- **Livrable** : 3 workflows actifs

**J166-J170 : Intégration GAO**
- Analyse API GAO actuel
- Développement connecteur (si API dispo)
- Ou import ponctuel CSV (si pas d'API)
- Tests synchronisation
- **Livrable** : Intégration GAO OK

**J171-J180 : Activation & Bilan Phase 2**
- Activation workflows production
- Batch 2 portail client : 100 clients supplémentaires (total 200)
- Bilan Phase 2 :
  - Devis terrain : 15 générés M4-6 ✅
  - RDV portail : 25 pris en ligne ✅
  - Workflows : 100% actifs ✅
  - ROI cumulé : **225K€/an**
- **Livrable** : Bilan Phase 2 + Go Phase 3

---

## ⭐ PHASE 3 : EXCELLENCE (M7-18) - 25K€

### Objectif

> **Zoning IA, enquête satisfaction systématique, analytics avancés**

### ROI Phase 3 : +45K€/an (cumulé 270K€/an)

- Zoning intelligent : 15K€/an
- Enquête satisfaction (rétention) : 20K€/an
- Optimisation planning : 10K€/an

---

### MOIS 7-9 : Zoning Intelligent

**M7 : Cartographie Clients**
- Géolocalisation 300 adresses clients
- Clustering zones géographiques (5-7 zones Annecy)
- Analyse densité interventions/zone
- **Livrable** : Carte 300 clients géolocalisés

**M8 : Configuration Algorithme Zoning**
- Paramétrage algorithme routing
- Tests optimisation tournées (semaine type)
- Comparaison avant/après (km parcourus)
- **Livrable** : Algorithme configuré

**M9 : Activation Zoning Intelligent**
- Activation production
- Suivi hebdo km économisés
- Objectif : **-20% déplacements**
- **Livrable** : Zoning actif, -20% km ✅

---

### MOIS 10-12 : Enquête Satisfaction Systématique

**M10 : Configuration Enquête**
- 5 questions clés :
  1. Note globale /5
  2. Technicien professionnel ? (Oui/Non)
  3. Délai respecté ? (Oui/Non)
  4. Problème résolu ? (Oui/Non)
  5. Commentaire libre
- Design email (responsive)
- **Livrable** : Enquête configurée

**M11 : Tests Envoi Auto**
- Tests 20 interventions (envoi J+2)
- Analyse taux réponse
- Ajustements wording email
- **Livrable** : Tests OK, taux réponse 30%

**M12 : Activation Enquête Systématique**
- 100% interventions → enquête J+2
- Dashboard satisfaction temps réel
- Alertes si note < 3/5
- Objectif : Taux réponse **40%**
- **Livrable** : Enquête 100% auto ✅

---

### MOIS 13-18 : Analytics & Optimisation Avancée

**M13 : Dashboards Analytics**
- Configuration 5 dashboards :
  1. **Dashboard Direction** : CA SAV, satisfaction, renouvellements
  2. **Dashboard Clothilde** : Planning, RDV, alertes
  3. **Dashboard Techniciens** : Interventions/jour, km, temps
  4. **Dashboard Clients** : Top clients, risque churn
  5. **Dashboard Qualité** : Satisfaction, réclamations, NPS
- **Livrable** : 5 dashboards actifs

**M14 : KPI Temps Réel (15 KPIs)**
1. Nombre interventions/jour
2. Temps moyen intervention
3. Km parcourus/jour/technicien
4. Taux utilisation (heures facturables/total)
5. Taux refacturation heures supplémentaires
6. Satisfaction client (NPS)
7. Taux réponse enquête
8. Nombre devis terrain/mois
9. Taux conversion devis
10. Nombre RDV portail/mois
11. Taux renouvellement contrats
12. Nombre contrats actifs
13. CA SAV maintenance
14. Temps réponse moyen (RDV)
15. Taux respect délai
- **Livrable** : 15 KPIs temps réel

**M15 : Alertes Churn Clients (ML Prédictif)**
- Modèle ML simple :
  - Satisfaction < 3/5 (3 fois) → risque churn élevé
  - Pas de RDV depuis 12 mois → risque churn moyen
  - Retard paiement → risque churn moyen
- Alertes Clothilde (action commerciale)
- **Livrable** : Alertes churn actives

**M16 : Optimisation Planning (IA Suggestions)**
- Suggestions IA :
  - "Regrouper interventions zone X mardi"
  - "Client Y dû entretien J+15"
  - "Gaëtan surcharge mercredi, redistribuer?"
- Tests suggestions (Clothilde)
- **Livrable** : IA suggestions actives

**M17 : Intégration SAGE Comptabilité**
- Développement connecteur SAGE
- Synchronisation :
  - Rapport intervention → Facture auto
  - Heures supplémentaires → Ligne facturation
- Tests facturation auto (10 cas)
- **Livrable** : Intégration SAGE OK

**M18 : Certificats Mise en Service Digitalisés**
- Templates certificats (3 types)
- Signature électronique
- Envoi email auto client
- Archivage légal cloud
- **Livrable** : Certificats digitaux 100%

---

### BILAN PHASE 3 (M18)

**Gains totaux Phase 3** :
- Zoning intelligent : 15K€/an ✅
- Enquête satisfaction (rétention +10%) : 20K€/an ✅
- Optimisation planning : 10K€/an ✅
- **ROI cumulé total : 270K€/an** ✅

---

## 📊 JALONS CRITIQUES (10 dates clés)

| # | Jalon | Date | Description | Criticité | Responsable |
|---|-------|------|-------------|-----------|-------------|
| **J1** | Kick-off | M1 | Lancement projet, comité constitué | 🔴 Critique | DT + Consultant |
| **J10** | Contrat signé | M1 | Sélection ERP Terrain (Praxedo/Synchroteam) | 🔴 Critique | DG |
| **J30** | Import clients | M1 | 300 clients Excel → CRM | 🔴 Critique | Clothilde |
| **J60** | App déployée | M2 | 100% techniciens app mobile active | 🔴 Critique | DT |
| **J65** | CERFA = 0 | M3 | Arrêt CERFA papier (symbole) | 🔴 Critique | Gaëtan |
| **J120** | 1er devis terrain | M4 | Opportunité commerciale saisie | 🟠 Important | Technicien |
| **J150** | Portail LIVE | M5 | 1er RDV client en ligne | 🔴 Critique | Clothilde |
| **J175** | Workflows actifs | M6 | Alertes automatiques 100% | 🟠 Important | Consultant |
| **M9** | Zoning actif | M9 | Optimisation tournées -20% km | 🟡 Souhaitable | DT |
| **M12** | Enquête 100% | M12 | Satisfaction systématique | 🟡 Souhaitable | Clothilde |

---

## 👥 PLAN DE FORMATION

### Clothilde (Assistante Planning) - 3 jours

| Phase | Formation | Durée | Contenu |
|-------|-----------|-------|---------|
| M1 | Admin ERP Terrain | 1 jour | Paramétrage, gestion comptes, workflows |
| M1 | Import données | 0.5 jour | Excel → CRM, nettoyage données |
| M5 | Portail client | 0.5 jour | Configuration, support clients |
| M6 | Workflows | 0.5 jour | Alertes, interventions auto |
| M13 | Analytics | 0.5 jour | Dashboards, KPI, rapports |

**Total** : 3 jours

---

### Gaëtan + Techniciens (7 personnes) - 1 jour

| Phase | Formation | Durée | Contenu |
|-------|-----------|-------|---------|
| M2 | App mobile (rapports) | 3h | Rapport digital, photos, signature |
| M2 | Pratique terrain | 2h | 1 intervention accompagnée |
| M4 | Module devis terrain | 2h | Génération devis, envoi client |
| M5 | Pointage GPS | 1h | Arrivée/départ, refacturation |

**Total** : 1 jour/technicien

---

### Direction (DG + DT) - 0.5 jour

| Phase | Formation | Durée | Contenu |
|-------|-----------|-------|---------|
| M1 | Vision projet | 1h | Roadmap, ROI, jalons |
| M3 | Bilan Phase 1 | 1h | KPI, gains, Phase 2 |
| M13 | Dashboards Direction | 2h | Analytics, KPI stratégiques |

**Total** : 0.5 jour

---

## 🎯 GESTION RISQUES

### Top 5 Risques & Plans Mitigation

#### 🔴 Risque #1 : Résistance techniciens (50%)

**Mitigation** :
- Pilote 2 techniciens volontaires (Gaëtan)
- Quick win visible (3 min vs 12 min CERFA)
- Incentive 500€ si adoption 100% M3
- Support hotline dédié M1-3

**Plan B** : Si résistance forte → prolonger pilote M3-4, former 1 par 1

---

#### 🟠 Risque #2 : Intégration GAO difficile (30%)

**Mitigation** :
- Audit technique J5 (API disponible ?)
- Plan B : Import CSV ponctuel (pas de sync temps réel)
- Plan C : Remplacement GAO par ERP Terrain (+10K€)

---

#### 🟡 Risque #3 : Clients adoptent pas portail (20%)

**Mitigation** :
- Double canal (portail + téléphone) 2 ans min
- Email tutoriel vidéo "2 clics pour RDV"
- Objectif réaliste : 30% adoption an 1

---

#### 🟡 Risque #4 : Budget dépassé (15%)

**Mitigation** :
- Contingence 10% (10K€)
- Périmètre figé (cahier charges J1)
- Change control (comité validation)

---

#### 🟢 Risque #5 : ROI pas atteint (10%)

**Mitigation** :
- Hypothèses conservatrices (70% adoption)
- KPI suivi mensuel
- Revue trimestrielle ajustements

---

## 📈 SUIVI PROJET

### Réunions

| Type | Fréquence | Participants | Durée |
|------|-----------|--------------|-------|
| Comité projet | Hebdo M1-3, bi-hebdo M4+ | DT, Gaëtan, Clothilde, Consultant | 1h |
| Point techniciens | Quotidien M2-3, hebdo M4+ | Gaëtan, Techniciens | 15 min |
| Comité direction | Mensuel | DG, DT, Consultant | 1h |
| Revue trimestrielle | Trimestriel | DG, DT, Comité projet | 2h |

---

### Reporting

**Mensuel** :
- Dashboard KPI projet (avancement, budget, risques)
- Top 3 succès / Top 3 blocages
- Plan action mois suivant

**Trimestriel** :
- Bilan financier (budget vs réalisé)
- ROI réalisé vs prévisionnel
- Ajustements roadmap

---

**📧 Contact** : Direction Technique - Duret Électricité
**🎯 Objectif Phase 1** : CERFA = 0 en M3
**💰 ROI Total 18 mois** : 270K€/an
**⏱️ Démarrage** : Sous 30 jours
