# 🎯 TRANSFORMATION DIGITALE ALBERTVILLE (CHANTIERS BTP)
## Synthèse Executive - De l'Audit à la Solution

> **Période :** 24 mois | **Double volet :** IT + Data/ML | **Approche :** Progressive et pragmatique

---

## 📋 PARTIE 1 : ÉTAT DES LIEUX (AUDIT)

### 🔴 Constats Terrain

**Périmètre Audit**
- Site Albertville - Chantiers moyens et gros uniquement
- Date audit : Octobre 2025
- 4 profils métiers audités

**Problèmes Majeurs Identifiés :**
- ❌ **Situations mensuelles extrêmement longues** (traitement plusieurs jours/mois)
- ❌ **Budgets complémentaires invisibles** (impossible de piloter)
- ❌ **Remontée BL 100% manuelle** (papier, pas de traçabilité)
- ❌ **Recherche références compliquée** (perte temps Sage)
- ❌ **Excel omniprésent** (15+ fichiers non connectés)
- ❌ **Pas de standardisation** méthodologie chiffrage
- ❌ **Gestion commandes sans prix** (validation aveugle)

**Outils Actuels**
- Sage (chiffrage, devis) - Limitations: pas 2 fichiers simultanés
- MDE (utilisé mais limité)
- Lireco (gestion stock temps réel, bien perçu)
- Fieldwire (suivi chantier - 7 utilisateurs)
- Excel x15+ (véhicules, CONSUEL, planning, commandes, sous-traitance...)

### 🔍 Les 13 Pain Points Identifiés

#### 🔴 CRITIQUES (Priorité 1) - 5 pain points

**1. Situations & Facturation - Traitement Extrêmement Long**
- Problème : Traitement mensuel très très long sur logiciel actuel
- Impact : Équipes RH/Compta bloquées plusieurs jours/mois
- Causes : Extraction devis compliquée, mauvaise organisation familles, pas de fichier suivi détaillé
- Besoin : Extraction simplifiée, organisation par famille optimisée, fichier suivi par tâche avec prédictions

**2. Suivi Budgétaire - Budgets Complémentaires Invisibles**
- Problème : Impossible savoir à quoi correspond le débours des budgets complémentaires
- Impact : Risque dépassement non détecté, difficultés pilotage marge
- Besoin : Rapprochement auto budgets complémentaires ↔ devis RA, affichage consolidé

**3. Remontée BL Chantier - Processus 100% Manuel**
- Problème : Chef chantier reçoit mail commande passée, mais aucune info réception
- Impact : Délai remontée plusieurs jours, erreurs saisie, facturation retardée
- Besoin : Douchette/scan mobile, saisie via QR Code, validation ligne à ligne

**4. Recherche Références - Compliqué et Chronophage**
- Problème : Recherche références compliquée sur Sage, perte de temps
- Impact : Temps perdu chiffrage, risque erreurs, frustration
- Besoin : Fonction recherche améliorée, filtres avancés, recherche intelligente

**5. Gestion Commandes - Validation Sans Voir Prix**
- Problème : Actuellement Excel, validation sans visualisation prix
- Impact : Risque dépassement budget, pas d'optimisation prix fournisseurs
- Besoin : Rapprochement auto + alertes, visualisation prix AVANT validation

#### 🟠 IMPORTANTS (Priorité 2) - 4 pain points

**6. Travail Collaboratif - Impossible Ouvrir 2 Fichiers Simultanément**
- Sage : impossible ouvrir 2 fichiers simultanément
- Besoin : Système multi-utilisateurs, RBAC

**7. Création Devis - Titres/Sous-Titres Très Compliqués**
- Très compliqué intégrer ligne (titre/sous-titre)
- Références : 2 refs s'additionnent au lieu d'1 seule
- Besoin : Création simplifiée, feuille vente accessible

**8. Suivi Excel Multiple - Dispersion Information**
- 15+ Excel non connectés (véhicules, CONSUEL, salles, logements, événements, planning, commandes, sous-traitance)
- Besoin : Centralisation outils métiers dédiés

**9. Délais Traitement Devis - Trop Longs**
- Manque rappels automatiques
- Impact : Perte opportunités commerciales
- Besoin : Système rappels auto, workflow validation, SLA définis

#### 🔷 STRUCTURANTS (Priorité 3) - 4 pain points

**10. Méthodologie Chiffrage - Manque Standardisation**
- Pas de méthodologie standardisée
- Besoin : Regroupement par diviseur, prix au m² standardisé, méthodologie documentée

**11. Gestion Familles/Sous-Familles - Pas Vision Consolidée**
- Familles actuelles insuffisantes
- Cas spécifique : famille études → besoin sous-familles avec suivi plans
- Besoin : Évolution familles, visualisation avec alertes

**12. Mobilité Terrain - Pas de Solution Hors Ligne**
- Devis/signature uniquement au bureau
- Besoin futur : Devis avec articles simples, mode hors ligne + signature client

**13. RBAC - Gestion Droits et Permissions à Structurer**
- Besoin crucial accès extérieurs sécurisés
- Besoin : RBAC, accès distant, audit trail

### 👥 Impact Utilisateurs

| Persona | Pain Points Majeurs |
|---------|---------------------|
| **Sophie** (Assistante Relation Client) | 15+ Excel à gérer, multiples saisies, dispersion info |
| **Thomas** (Responsable Affaire) | Situations extrêmement longues, budgets complémentaires invisibles, délais devis |
| **Laurent** (Chef Chantier) | Remontée BL manuelle, pas d'info réception, pas de traçabilité |
| **Pierre** (Responsable Activité) | Recherche références compliquée, chiffrage non standardisé, 1 fichier à la fois |

---

## 🚀 PARTIE 2 : SOLUTION PROPOSÉE

### 🎯 Vision Cible

**Transformation digitale site Albertville - BTP optimisé**
- 📱 **Mobile-first** : App chantier (BL QR Code + devis terrain)
- ⚡ **Automatisé** : Situations mensuelles, budgets, rappels devis
- 🎯 **Standardisé** : Méthodologie chiffrage, bibliothèque prix m²
- 🔗 **Intégré** : Fin silos Excel, plateforme collaborative
- 📊 **Pilotable** : Dashboards budgets temps réel, KPIs

### 🏗️ Architecture Double Volet

#### **VOLET 1 : IT / LOGICIEL**

**Applications Utilisateurs :**

1. **📱 Mobile App Chantier** (Chefs Chantier)
   - **Remontée BL digitalisée**
     - Scan QR Code BL fournisseur
     - Validation ligne à ligne quantités/références
     - Photo BL
     - Synchronisation temps réel ou offline
     - Intégration MDE/Lireco

   - **Devis terrain (Phase 3)**
     - Catalogue produits avec images
     - Création devis simplifiée
     - Mode hors ligne complet
     - Signature électronique client
     - Géolocalisation automatique

2. **💻 Web App Métier** (RA, Responsables Activité)
   - **Dashboard budgets**
     - Vue consolidée : budget initial + complémentaires + réalisé
     - Rapprochement auto budgets complémentaires ↔ devis RA
     - Alertes dépassement seuils
     - Connexion Sage + MDE

   - **Module situations mensuelles**
     - Extraction auto devis → suivi
     - Organisation par famille optimisée
     - Fichier suivi détaillé par tâche
     - Prédiction dépenses à venir (ML)
     - Templates standardisés

   - **Module commandes avancé**
     - Saisie références (autocomplete)
     - Visualisation prix temps réel
     - Alertes : prix anormal, budget dépassé
     - Workflow validation multi-niveaux
     - Historique commandes/prix

   - **Recherche références intelligente**
     - Filtres avancés (famille, sous-famille, fournisseur, prix)
     - Recherche floue (typos, synonymes)
     - Favoris/historique

3. **🏢 Plateforme Collaborative** (Tous)
   - Gestion véhicules (réservations, entretien, pollution)
   - Suivi CONSUEL
   - Gestion salles réunion
   - Demandes logement (grands déplacements)
   - Événements (journées collabs, repas)
   - Planning hebdomadaire
   - Contrats sous-traitance
   - Workflow validation, notifications auto

**Backend Services :**
- Workflow digital situations mensuelles
- Gestion budgets (initial + complémentaires)
- Catalogue unifié (familles/sous-familles évoluées)
- Bibliothèque prix standardisée (m², diviseurs)
- Système rappels automatiques devis
- Notifications intelligentes
- RBAC & sécurité

**Intégrations :**
- 🔌 Sage (chiffrage, devis - coexistence)
- 🔌 MDE (gestion affaires - transition douce)
- 🔌 Lireco (stock - connexion API)
- 🔌 Fieldwire (suivi chantier - intégration)
- 🔌 Comptabilité (export écritures)
- 🔌 RH/Paie (validation heures, variables)

#### **VOLET 2 : BI / DATA / ML**

**Pipeline Data :**
```
Sources (Sage, MDE, Lireco) → Data Lake → Data Warehouse → Analytics → Dashboards/ML
```

**Modèles Machine Learning :**

1. **Prédiction Dépenses Chantier (LSTM)**
   - Anticipe dépenses à venir par chantier
   - Réajustement planning selon reste à faire
   - Prédictibilité trésorerie

2. **Détection Anomalies Budgétaires**
   - Alertes écarts budgets complémentaires
   - Détection dérives précoce
   - Optimisation marge

3. **Optimisation Chiffrage (Random Forest)**
   - Benchmark chiffrages internes
   - Détection écarts méthodologie
   - Amélioration précision (moins sous/sur-estimation)

4. **Prédiction Délais Situations**
   - Estimation temps traitement selon complexité
   - Optimisation planning RH/Compta
   - Lissage charge travail

**Dashboards BI (Temps Réel) :**
- Dashboard Direction Albertville (vue globale, tendances)
- Dashboard Responsables Affaires (budgets par chantier, situations)
- Dashboard Responsables Activité (chiffrage, performance)
- Dashboard Achats/Logistique (commandes, fournisseurs)
- Reporting automatique hebdomadaire

---

## 📅 PARTIE 3 : PLAN D'IMPLÉMENTATION 24 MOIS

### 🔷 PHASE 1 : QUICK WINS (M1-M6)

**Objectif :** Résoudre pain points critiques immédiats

**IT :**
- M1-M2 : App mobile remontée BL (dev + intégrations MDE/Lireco)
- M3-M4 : Dashboard budgets Power BI (connexion Sage/MDE)
- M5-M6 : Rappels auto devis + Recherche références améliorée + Module commandes v1

**Projets Livrés :**
1. ✅ Remontée BL mobile (QR Code/Scan)
2. ✅ Dashboard budgets (initial + complémentaire)
3. ✅ Rappels automatiques devis
4. ✅ Recherche références améliorée
5. ✅ Module commandes avec visualisation prix

**KPIs Phase 1 :**
- ✅ Traçabilité BL temps réel (vs plusieurs jours)
- ✅ Visibilité budgets complémentaires 100%
- ✅ Délai traitement devis -50%
- ✅ Temps recherche références : minutes → secondes

**Investissement :** 115K€
**Gains :** 210K€/an
**Payback :** 7 mois

---

### 🔶 PHASE 2 : STRUCTURATION (M7-M18)

**Objectif :** Automatiser et standardiser processus

**IT :**
- M7-M9 : Refonte gestion situations mensuelles
- M10-M12 : Standardisation méthodologie chiffrage (bibliothèque prix m²)
- M13-M15 : Plateforme collaborative (remplacement Excel)
- M16-M18 : Gestion familles/sous-familles avancée

**Projets Livrés :**
6. ✅ Refonte situations mensuelles (extraction auto, fichier suivi tâches, prédictions ML)
7. ✅ Standardisation chiffrage (bibliothèque prix, diviseurs, templates)
8. ✅ Gestion familles/sous-familles avancée
9. ✅ Plateforme collaborative (fin Excel silos)

**KPIs Phase 2 :**
- ✅ Temps traitement situations : plusieurs jours → quelques heures
- ✅ Homogénéité chiffrages +80%
- ✅ Excel opérationnels : 15+ → <3
- ✅ Temps admin -40%

**Investissement :** 195K€
**Gains additionnels :** +280K€/an (cumulé : 490K€/an)
**Payback Phase 2 :** 10 mois

---

### 🔵 PHASE 3 : TRANSFORMATION (M19-M24)

**Objectif :** Excellence opérationnelle et innovation

**IT :**
- M19-M21 : Solution mobile terrain (devis offline + signature)
- M22-M23 : RBAC & accès distant sécurisés
- M24 : Prédictions ML avancées

**Évaluation Optima (parallèle) :**
- M13-M18 : POC Optima Sidev
- M19 : Décision Go/No-Go migration
- Si Go : Migration progressive M19-M36

**Projets Livrés :**
10. ✅ Mobile terrain (devis hors ligne + signature électronique)
11. ✅ RBAC & sécurité (accès distant, audit trail)
12. ✅ Prédictions ML & analytics avancés
13. ⚠️ Évaluation Optima (migration si ROI démontré)

**KPIs Phase 3 :**
- ✅ Cycle commercial accéléré (devis immédiat terrain)
- ✅ Taux transformation +25-35%
- ✅ Sécurité renforcée (RBAC, 2FA)
- ✅ Prédictions ML précision >90%

**Investissement :** 175K€ (Option A : Optimisation Sage)
**Gains additionnels :** +200K€/an (cumulé : 690K€/an)
**Payback Phase 3 :** 12-18 mois

---

## 🎁 PARTIE 4 : BÉNÉFICES ATTENDUS

### 📊 Gains Opérationnels

| Indicateur | AVANT | APRÈS (M18) | APRÈS (M24) |
|------------|-------|-------------|-------------|
| **Situations mensuelles** | Plusieurs jours | <4 heures | <2 heures |
| **Visibilité budgets complémentaires** | 0% | 100% | 100% |
| **Remontée BL** | 2-5 jours | Temps réel (<1h) | Temps réel |
| **Recherche références** | 3-5 min | <30 sec | <10 sec |
| **Validation commandes** | Sans prix | Prix visible | Prix + alertes |
| **Fichiers Excel** | 15+ | 5-8 | <3 |
| **Délai traitement devis** | 5-7 jours | <48h | <24h |
| **Chiffrages standardisés** | 0% | 70% | >90% |

### 💡 Bénéfices Utilisateurs

**Sophie (Assistante Relation Client) :**
- Plateforme collaborative centralisée (vs 15+ Excel)
- Notifications automatiques
- Temps admin -40%
- Satisfaction accès info 4/5

**Thomas (Responsable Affaire) :**
- Situations mensuelles : plusieurs jours → <4h
- Dashboard budgets temps réel (initial + complémentaires)
- Délai facturation : J+15 → J+3
- Taux erreurs factures <1%

**Laurent (Chef de Chantier) :**
- Remontée BL mobile (scan QR Code en 30 sec vs plusieurs jours)
- Tracking livraison temps réel
- Taux erreurs saisie BL : 15% → <2%
- Satisfaction 4/5

**Pierre (Responsable Activité) :**
- Recherche références : 3-5 min → <30 sec
- Chiffrage standardisé (bibliothèque prix m²)
- Travail collaboratif (multi-fichiers simultanés)
- Temps création devis -30%

### 💰 ROI & Financier

**ROI 2 Ans (Option A : Optimisation Sage)**

| Phase | Investissement | Gains/an | Cumulé |
|-------|---------------|----------|--------|
| **Phase 1 (M1-M6)** | 115K€ | 210K€ | +95K€ |
| **Phase 2 (M7-M18)** | 195K€ | 490K€ | +180K€ |
| **Phase 3 (M19-M24)** | 175K€ | 690K€ | +695K€ |
| **TOTAL 24 MOIS** | **485K€** | **690K€** | **+695K€** |

**ROI :** 143%
**Payback global :** 10 mois

### 🛡️ Risques Maîtrisés

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Adoption utilisateurs | Moyenne | Élevé | Pilote M5-M6, formation intensive, champions internes |
| Qualité données migration | Élevée | Moyen | Nettoyage préalable M1-M2, tests exhaustifs |
| Intégrations Sage/MDE complexes | Moyenne | Moyen | Audit APIs avant dev, POC technique |
| ROI surestimé | Moyenne | Moyen | Hypothèses conservatrices, mesure before/after |
| Équipes débordées | Élevée | Moyen | Équipe projet dédiée, externalisation dev |

---

## ✅ PROCHAINES ÉTAPES

### 1️⃣ **VALIDATION DIRECTION (Semaine 1-2)**
- Présenter plan à CODIR/Direction Albertville
- Valider budget Phase 1 (115K€)
- Désigner sponsor exécutif
- Constitution équipe projet
- Go/No-Go

### 2️⃣ **LANCEMENT PROJETS PRIORITAIRES (Semaine 3-8)**

**Projet #1 : Remontée BL Mobile**
- Ateliers besoins détaillés (chefs chantier, RA)
- Cahier charges app mobile (use cases, maquettes)
- RFI 3-4 prestataires dev mobile

**Projet #2 : Dashboard Budgets**
- Audit données Sage + MDE
- Ateliers besoins KPIs (RA, Responsables Activité)
- Maquettes dashboards

**Projet #3 : Rappels Devis**
- Définition workflow
- Choix outil automation

### 3️⃣ **DÉVELOPPEMENTS & PILOTE (M3-M6)**
- Développements parallèles 5 projets
- Comité pilotage hebdomadaire
- Tests utilisateurs
- Formation équipes
- Go-live progressif

**Objectif M6 :** Phase 1 déployée, 210K€/an gains mesurés, Go Phase 2 validé

---

## 📌 DÉCISIONS STRATÉGIQUES

### Migration Optima : Approche Recommandée

**Recommandation : Option A (Optimisation Sage) PAR DÉFAUT**

**Pourquoi ?**
- ✅ Risque migration élevé (disruption, résistance)
- ✅ Sage actuel connu, maîtrisé
- ✅ Quick Wins possibles sans migration
- ✅ ROI excellent (10 mois)
- ✅ Décision migration peut être prise M18-24 avec recul

**Évaluer Optima UNIQUEMENT SI :**
- POC démontre gains fonctionnels >40% vs Sage
- ROI migration < 24 mois clairement démontré
- Volonté direction transformation profonde
- Budget >250K€ disponible

**Planning Évaluation :**
- M13-M18 : POC Optima détaillé (6 semaines, données réelles)
- M19 : Décision Go/No-Go
- Si Go : Migration progressive M19-M36 (Phases 1-4)

---

**📅 Document créé :** 2025-11-18
**🎯 Projet :** Transformation Digitale Site Albertville
**⏱️ Durée :** 24 mois | **🎭 Approche :** IT + Data/ML en parallèle
**📊 Objectif :** Automatiser situations, digitaliser BL, standardiser chiffrage
**💰 ROI :** 143-192% sur 2 ans | **⏰ Payback :** 8-10 mois
