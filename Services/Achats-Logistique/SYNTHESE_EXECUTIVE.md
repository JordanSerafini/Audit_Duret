# 🎯 TRANSFORMATION DIGITALE ACHATS-LOGISTIQUE
## Synthèse Executive - État des Lieux et Opportunités

> **Focus :** Analyse de l'état actuel | **Approche :** Pragmatique et progressive

---

## ⚠️ NOTE MÉTHODOLOGIQUE

**Constats confirmés audit terrain** :
- ✅ 9-11K références commandées/an (confirmé)
- ✅ Processus 100% manuel (téléphone, papier, Excel) (confirmé)
- ✅ Sage MDE "calamiteux" (verbatim utilisateurs)
- ✅ Ressaisies multiples constatées (confirmé qualitativement)
- ✅ Taux élevé commandes incomplètes constaté (confirmé qualitativement)
- ✅ Chantiers bloqués fréquemment par manque matériel (confirmé)

**Mesures en cours** (via [questionnaires terrain](../../Synthese/QUESTIONNAIRE_COLLECTE_DONNEES_ACHATS_LOGISTIQUE.md)) :
- ⏱️ Taux réel succès commandes (analyse 50 dernières commandes en cours)
- ⏱️ Délai moyen commande (chronométrage 20 dernières en cours)
- ⏱️ Nombre exact ressaisies (traçage processus complet en cours)

**Prochaine étape** : Intégration mesures réelles (semaines 2-3)

---

## 📋 PARTIE 1 : ÉTAT DES LIEUX (AUDIT)

### 🔴 Constats Terrain

**Problèmes Majeurs Identifiés :**
- ❌ **Taux élevé de commandes incomplètes** (fait constaté)
- ❌ **Processus 100% manuel** (téléphone, papier, Excel)
- ❌ **Base de données chaotique** (Sage MDE "calamiteux")
- ❌ **Aucune traçabilité** digitale
- ❌ **Chantiers souvent bloqués** par manque de matériel

**Volume d'Activité :**
- 9-11K références commandées/an
- Livraisons rapides (quand commande complète)
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
                            RE-SAISIE x6-7 fois
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
| **Marc** (Chef Chantier) | Perd du temps en appels, chantier bloqué fréquemment |
| **Sylvie** (Achats) | Débordée, re-saisie x6-7, validation manuelle, pompier |
| **Éric** (Dépôt) | Nomenclatures incohérentes, 1 seul PC, pas de scan |
| **Julien** (Resp. Affaires) | Aucune visibilité temps réel sur ses chantiers |
| **Christine** (Direction) | Pas de KPIs, pas de pilotage, pas de prévisions |

---

## 🚀 PARTIE 2 : OPPORTUNITÉS IDENTIFIÉES

### 🎯 Vision Cible

**Transformation en plateforme e-procurement intelligente**
- 📱 **Digital-first** : Mobile app pour chantiers
- ⚡ **Temps réel** : Notifications, tracking, dashboards
- 🤖 **Intelligent** : Automatisation et optimisations
- 🔗 **Intégré** : APIs fournisseurs (Rexel, Sonepar)
- 📊 **Pilotable** : BI dashboards et KPIs temps réel

### 🏗️ Architecture Proposée

#### **VOLET 1 : IT / LOGICIEL**

**Applications Utilisateurs :**
- 📱 **Mobile App** (Chefs Chantier)
  - Commande simplifiée
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

#### **VOLET 2 : BI / DATA**

**Pipeline Data :**
```
Sources → Data Lake → Data Warehouse → Analytics → Dashboards
```

**Opportunités d'optimisation :**

1. **Prévision Besoins**
   - Anticipe besoins par chantier
   - Optimise achats groupés

2. **Détection Anomalies Prix**
   - Alertes écarts tarifaires
   - Évite surfacturation

3. **Scoring Fournisseurs**
   - Score multi-critères
   - Choix optimal

4. **Prédiction Ruptures Stock**
   - Anticipation besoins
   - Prévention proactive

5. **Classification Articles**
   - Catégorisation automatique
   - Nettoyage base + recherche sémantique

**Dashboards BI (Temps Réel) :**
- Dashboard Direction (vue globale, tendances)
- Dashboard Achats (performance, fournisseurs)
- Dashboard par Chantier (consommation, budget)
- Reporting automatique quotidien/hebdo

---

## 📅 PARTIE 3 : APPROCHE PROGRESSIVE

### 🔷 PHASE 1 : FONDATIONS

**Objectif :** Système fonctionnel de base + données propres

**IT :**
- Setup infra + Nettoyage Sage MDE (déduplication, archivage)
- Catalogue unifié + Workflow digital v1 + Web app MVP
- Mobile app v1 + **PILOTE 1-2 chantiers**

**Data :**
- Data Lake + ETL quotidiens (Sage → Lake)
- Data Warehouse v1 + Dashboards essentiels

**Jalons :**
- ✅ Pilote validé avec adoption utilisateurs
- ✅ Temps saisie commande réduit
- ✅ Dashboards utilisés quotidiennement

---

### 🔶 PHASE 2 : AUTOMATISATION

**Objectif :** Automatiser et optimiser

**IT :**
- APIs Rexel + Sonepar (catalogues, commandes EDI)
- 3-way matching auto + Multi-dépôts + Notifications intelligentes
- **GÉNÉRALISATION tous chantiers** + Features avancées

**Data :**
- Prévision besoins + Anomalies prix
- Scoring fournisseurs + Ruptures stock
- Analytics avancés + Recommandations actives

**Jalons :**
- ✅ Amélioration du taux de commandes complètes
- ✅ Réduction des délais
- ✅ Automatisations déployées

---

### 🔵 PHASE 3 : EXCELLENCE

**Objectif :** Auto-pilotage et optimisation continue

**IT :**
- Auto-réapprovisionnement + Workflows configurables + Intégration compta
- Features innovantes + Optimisation performance

**Data :**
- Classification automatique avancée
- Optimisation multi-objectifs
- Auto-actions + Amélioration continue

**Jalons :**
- ✅ Amélioration continue du taux de succès
- ✅ Optimisation continue des délais
- ✅ Automatisation avancée des processus

---

## 🎁 PARTIE 4 : BÉNÉFICES ATTENDUS

### 📊 Gains Opérationnels Visés

| Indicateur | AVANT | OBJECTIF APRÈS |
|------------|-------|----------------|
| **Taux succès commandes** | Insuffisant | Amélioration significative |
| **Délai moyen** | Plusieurs jours | Réduction drastique |
| **Re-saisies** | Multiples (6-7 fois) | Automatisé |
| **Traçabilité** | ❌ Aucune | ✅ Complète |
| **Visibilité temps réel** | ❌ Aucune | ✅ Dashboards |
| **Chantiers bloqués** | Fréquent | Exceptionnel |

### 💡 Bénéfices Utilisateurs

**Marc (Chef Chantier) :**
- Commande mobile simplifiée (vs multiples appels)
- Chantier rarement bloqué
- Tracking livraison temps réel

**Sylvie (Achats) :**
- Fini les appels incessants
- Workflow digital automatisé
- Fournisseurs suggérés automatiquement
- Factures auto-validées (3-way matching)

**Éric (Dépôt) :**
- Réception par scan (vs papier)
- Stock temps réel multi-dépôts
- Nomenclature cohérente

**Julien (Resp. Affaires) :**
- Dashboards par chantier temps réel
- Budget vs Réalisé automatique
- Alertes proactives

**Christine (Direction) :**
- KPIs pilotage temps réel
- Prévisions fiables
- Optimisation achats groupés

### 🛡️ Risques à Maîtriser

| Risque | Mitigation |
|--------|------------|
| Adoption utilisateurs | Pilote intensif, formation, champions |
| Migration données | Nettoyage préalable, coexistence Sage |
| APIs fournisseurs | Fallback Excel, cache, retry |

---

## ✅ PROCHAINES ÉTAPES

### 1️⃣ **VALIDATION DIRECTION**
- Présenter ce plan
- Valider approche progressive
- Définir priorités

### 2️⃣ **ÉTUDE DE FAISABILITÉ DÉTAILLÉE**
- Chiffrage précis par phase
- Sélection solutions techniques
- Planning détaillé

### 3️⃣ **PRÉPARATION PILOTE**
- Identifier 1-2 chantiers pilotes
- Former utilisateurs clés
- Préparer support terrain

---

**📅 Document créé :** 2025-11-17
**🎯 Projet :** Transformation Digitale Achats-Logistique
**⏱️ Approche :** Progressive et pragmatique
**📊 Objectif :** Améliorer drastiquement le taux de succès et réduire les délais
**⚠️ Note :** Chiffrage financier à réaliser lors de l'étude de faisabilité détaillée
