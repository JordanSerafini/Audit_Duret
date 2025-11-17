# 🎯 TRANSFORMATION DIGITALE ACHATS-LOGISTIQUE
## Synthèse Executive - De l'Audit à la Solution

> **Période :** 18 mois | **Double volet :** IT + Data/ML | **Approche :** Progressive et pragmatique

---

## 📋 PARTIE 1 : ÉTAT DES LIEUX (AUDIT)

### 🔴 Constats Terrain

**Problèmes Majeurs Identifiés :**
- ❌ **50% des commandes incomplètes** (fait constaté)
- ❌ **Processus 100% manuel** (téléphone, papier, Excel)
- ❌ **Base de données chaotique** (Sage MDE "calamiteux")
- ❌ **Aucune traçabilité** digitale
- ❌ **Chantiers souvent bloqués** par manque de matériel

**Volume d'Activité :**
- 9-11K références commandées/an
- 80% livraisons sous 24h (quand commande complète)
- Multiples acteurs : Chefs chantier, Gestionnaires, Magasiniers, Resp. Affaires

### 🔍 Causes Racines

**1. Données éparpillées**
- Sage MDE (serveur local vieillissant)
- Excel x4 versions (OneDrive désynchronisé)
- Email + Téléphone (pas de trace)
- Bons papier manuscrits

**2. Processus inefficace**
```
Marc (Chantier) → Téléphone → Sylvie (Bureau) → Téléphone → Fournisseur
                                    ↓
                            RE-SAISIE x7 fois
                                    ↓
                            3 jours + 50% échec
```

**3. Goulots d'étranglement**
- Sylvie = hub central (dépendance totale)
- 1 seul PC au dépôt
- Pas d'intégration fournisseurs (APIs)
- Pas de validation automatique

### 👥 Impact Utilisateurs

| Persona | Pain Points |
|---------|------------|
| **Marc** (Chef Chantier) | Perd 1h/jour en appels, chantier bloqué fréquemment |
| **Sylvie** (Achats) | Débordée, re-saisie x7, validation manuelle, pompier |
| **Éric** (Dépôt) | Nomenclatures incohérentes, 1 seul PC, pas de scan |
| **Julien** (Resp. Affaires) | Aucune visibilité temps réel sur ses chantiers |
| **Christine** (Direction) | Pas de KPIs, pas de pilotage, pas de prévisions |

---

## 🚀 PARTIE 2 : SOLUTION PROPOSÉE

### 🎯 Vision Cible

**Transformation en plateforme e-procurement intelligente**
- 📱 **Digital-first** : Mobile app pour chantiers
- ⚡ **Temps réel** : Notifications, tracking, dashboards
- 🤖 **Intelligent** : ML pour prédictions et optimisations
- 🔗 **Intégré** : APIs fournisseurs (Rexel, Sonepar)
- 📊 **Pilotable** : BI dashboards et KPIs temps réel

### 🏗️ Architecture Double Volet

#### **VOLET 1 : IT / LOGICIEL**

**Applications Utilisateurs :**
- 📱 **Mobile App** (Chefs Chantier)
  - Commande en 3 clics
  - Scan codes-barres
  - Tracking temps réel
  - Mode offline

- 💻 **Web App** (Gestionnaires/Responsables)
  - Validation workflow digital
  - Gestion catalogues unifiés
  - Suivi fournisseurs
  - Dashboards personnalisés

- 🖥️ **Terminal Dépôt** (Magasiniers)
  - Réception par scan
  - Inventaires digitaux
  - Mouvements stock temps réel

**Backend Services (Microservices) :**
- E-Procurement (commandes, panier, historique)
- Workflow digital (Émetteur → Validateur → Gestionnaire)
- Catalogue unifié (recherche, fiches complètes)
- Stock & Mouvements (multi-dépôts)
- 3-way Matching automatique (Cmd/BL/Facture)
- Notifications intelligentes (SMS/Email/Push)

**Intégrations :**
- 🔌 Sage MDE (transition douce, coexistence)
- 🔌 Rexel API (catalogue, commandes, EDI)
- 🔌 Sonepar API (tarifs négociés, factures électroniques)
- 🔌 Comptabilité (export écritures, analytique)

#### **VOLET 2 : BI / DATA / ML**

**Pipeline Data :**
```
Sources → Data Lake → Data Warehouse → Analytics → Dashboards/ML
```

**5 Modèles Machine Learning :**

1. **Prévision Besoins (LSTM)**
   - Anticipe besoins 30/60/90 jours
   - Optimise achats groupés

2. **Détection Anomalies Prix**
   - Alertes écarts > seuils
   - Évite surfacturation

3. **Scoring Fournisseurs (Random Forest)**
   - Score /100 multi-critères
   - Choix optimal automatique

4. **Prédiction Ruptures Stock**
   - Probabilité + date estimée
   - Prévention proactive

5. **Classification Articles (NLP)**
   - Catégorisation automatique
   - Nettoyage base + recherche sémantique

**Dashboards BI (Temps Réel) :**
- Dashboard Direction (vue globale, tendances)
- Dashboard Achats (performance, fournisseurs)
- Dashboard par Chantier (consommation, budget)
- Reporting automatique quotidien/hebdo

---

## 📅 PARTIE 3 : PLAN D'IMPLÉMENTATION 18 MOIS

### 🔷 PHASE 1 : FONDATIONS (M1-M6)

**Objectif :** Système fonctionnel de base + données propres

**IT :**
- M1-M2: Setup infra + Nettoyage Sage MDE (déduplication, archivage)
- M3-M4: Catalogue unifié + Workflow digital v1 + Web app MVP
- M5-M6: Mobile app v1 + **PILOTE 1-2 chantiers** (10-15 users)

**Data :**
- M1-M3: Data Lake + ETL quotidiens (Sage → Lake)
- M4-M6: Data Warehouse v1 + Dashboards essentiels (5-10)

**KPIs Phase 1 :**
- ✅ Pilote validé (adoption > 80%)
- ✅ Temps saisie commande < 5 min
- ✅ Dashboards utilisés quotidiennement

---

### 🔶 PHASE 2 : INTELLIGENCE (M7-M12)

**Objectif :** Automatiser et prédire pour optimiser

**IT :**
- M7-M8: APIs Rexel + Sonepar (catalogues, commandes EDI)
- M9-M10: 3-way matching auto + Multi-dépôts + Notifications intelligentes
- M11-M12: **GÉNÉRALISATION tous chantiers** + Features avancées

**Data/ML :**
- M7-M8: ML v1 (Prévision besoins + Anomalies prix)
- M9-M10: ML v2 (Scoring fournisseurs + Ruptures stock)
- M11-M12: Analytics avancés + Recommandations actives

**KPIs Phase 2 :**
- ✅ Commandes complètes > 85%
- ✅ Délai moyen < 24h
- ✅ 4 modèles ML en production (précision > 75%)

---

### 🔵 PHASE 3 : EXCELLENCE (M13-M18)

**Objectif :** Auto-pilotage et optimisation continue

**IT :**
- M13-M15: Auto-réapprovisionnement + Workflows configurables + Intégration compta
- M16-M18: Features innovantes (RA, vocal) + Optimisation performance

**Data/ML :**
- M13-M15: NLP classification + Optimisation multi-objectifs
- M16-M18: Auto-actions basées ML + Amélioration continue

**KPIs Phase 3 :**
- ✅ Commandes complètes > 95%
- ✅ Délai moyen < 2h
- ✅ 30% processus automatisés
- ✅ ML précision > 90%

---

## 🎁 PARTIE 4 : BÉNÉFICES ATTENDUS

### 📊 Gains Opérationnels

| Indicateur | AVANT | APRÈS (M18) |
|------------|-------|-------------|
| **Taux succès commandes** | 50% | > 95% |
| **Délai moyen** | 3 jours | < 2h |
| **Re-saisies** | 7 fois | 0 (auto) |
| **Traçabilité** | ❌ Aucune | ✅ 100% |
| **Visibilité temps réel** | ❌ Aucune | ✅ Dashboards |
| **Chantiers bloqués** | Fréquent | Rare |

### 💡 Bénéfices Utilisateurs

**Marc (Chef Chantier) :**
- Commande mobile en 3 clics (vs 1h appels)
- Chantier rarement bloqué
- Tracking livraison temps réel

**Sylvie (Achats) :**
- Fini les appels incessants
- Workflow digital automatisé
- Fournisseurs suggérés par ML
- 70% factures auto-validées (3-way matching)

**Éric (Dépôt) :**
- Réception par scan (vs papier)
- Stock temps réel multi-dépôts
- Plus de nomenclature chaos

**Julien (Resp. Affaires) :**
- Dashboards par chantier temps réel
- Budget vs Réalisé automatique
- Alertes proactives

**Christine (Direction) :**
- KPIs pilotage temps réel
- Prévisions ML fiables
- Optimisation achats groupés
- ROI démontré

### 🛡️ Risques Maîtrisés

| Risque | Mitigation |
|--------|------------|
| Adoption utilisateurs | Pilote intensif M5-M6, formation, champions |
| Migration données | Nettoyage préalable M1-M2, coexistence Sage |
| APIs fournisseurs | Fallback Excel, cache, retry |
| Précision ML | Validation métier, seuils prudents |

---

## ✅ PROCHAINES ÉTAPES

### 1️⃣ **VALIDATION DIRECTION**
- Présenter ce plan
- Valider budget & ressources
- Définir priorités

### 2️⃣ **LANCEMENT PHASE 1**
- Constituer équipe IT (6 FTE) + Data (2.5 FTE)
- Setup infrastructure
- Démarrer nettoyage Sage MDE

### 3️⃣ **PRÉPARATION PILOTE**
- Identifier 1-2 chantiers pilotes
- Former 10-15 utilisateurs clés
- Préparer support terrain

---

**📅 Document créé :** 2025-11-17
**🎯 Projet :** Transformation Digitale Achats-Logistique
**⏱️ Durée :** 18 mois | **🎭 Approche :** IT + Data/ML en parallèle
**📊 Objectif :** 50% → 95% commandes complètes | 3j → <2h délai
