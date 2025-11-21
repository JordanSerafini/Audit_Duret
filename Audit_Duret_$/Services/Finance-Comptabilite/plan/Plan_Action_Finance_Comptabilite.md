# 📋 PLAN D'ACTION - Service Finance & Comptabilité
**Entreprise** : Duret Electricité - Annecy
**Date audit** : Novembre 2025
**Auditeur** : Consultant IT & Data BI/ML

---

## 🔍 RÉSUMÉ DE L'AUDIT

### Situation actuelle

**Infrastructure & Processus**
- ERP Sage Comptabilité fonctionnel techniquement (bilans OK, TVA OK)
- **MAIS** : Isolement total de la comptabilité = Silo déconnecté des opérations
- Délai connaissance rentabilité chantier : **1-2 mois après fin travaux**
- Double saisie clients obligatoire (CRM → Sage) avec risque d'erreurs
- Facturation manuelle lente (5-10 jours entre fin travaux et envoi facture)
- Rapprochement bancaire 100% manuel (8h/mois de pointage)
- Comptabilité analytique inexistante ou Excel manuel (5h/chantier)
- Prévisions trésorerie Excel bricolé, peu fiable
- Aucune traçabilité Chantier → Dépenses → Rentabilité

**Impact Business**
- **Direction** : Pilotage à l'aveugle, décisions basées sur données périmées
- **Responsables d'affaires** : Découvrent chantiers déficitaires trop tard
- **Comptable** : 70% temps sur saisie/pointage, 30% analyse
- **Commerciaux** : Double saisie clients, pas de visibilité impayés
- **Chefs chantier** : Litiges clients (facturation lente, erreurs)
- **Coût estimé inefficacité** : ~61h/mois tâches automatisables = **29k€/an**

### Besoins exprimés

**Objectifs prioritaires**
- **Comptabilité analytique temps réel** : Marge par chantier mise à jour en continu
- **Fin des ressaisies** : Client créé 1 fois = disponible partout (CRM, Ventes, Compta)
- **Facturation automatisée** : < 48h entre fin travaux et envoi facture
- **Rapprochement bancaire intelligent** : Lettrage automatique par IA (-70% temps)
- **Prévisions trésorerie automatiques** : Basées sur devis validés + factures à échoir
- **Dashboards décisionnels temps réel** : CA, marges, trésorerie, impayés (Direction, Resp. Affaires)
- **OCR factures fournisseurs** : Pré-remplissage automatique (vs saisie manuelle)

**Contraintes**
- ✅ Export FEC (Fichier Écritures Comptables) obligatoire pour expert-comptable
- ✅ Conformité fiscale française (TVA, bilans, liasses)
- ⚠️ Validation expert-comptable INDISPENSABLE avant migration
- ⚠️ Double-run Sage/Odoo obligatoire 1 mois (sécurité)
- ⚠️ Formation équipe comptable critique (changement de paradigme)

---

## 🎯 STRATÉGIE GLOBALE

### Vision Cible : Comptabilité Pilote Stratégique

**Transformation** : De "Silo comptable isolé" vers "Outil de pilotage intégré"

```
AVANT (Sage)                          APRÈS (Odoo)
═══════════════                       ════════════════

┌─────────────┐                       ┌──────────────────────────────┐
│   SAGE      │                       │      ODOO ERP UNIFIÉ         │
│ COMPTABILITÉ│ (silo isolé)         │  CRM + Ventes + Achats +     │
│             │                       │  Chantiers + COMPTABILITÉ    │
└─────────────┘                       └──────────────────────────────┘
      ║                                          ║
      ║ Ressaisies manuelles                    ║ Intégration native
      ║ Délais 1-2 mois                         ║ Temps réel
      ║ Risques erreurs                         ║ Source unique vérité
      ║                                          ║
┌─────────────────────────────────┐   ┌─────────────────────────────────┐
│ - Double saisie clients         │   │ - Client créé 1 fois            │
│ - Facturation manuelle (5-10j)  │   │ - Facturation auto (< 48h)      │
│ - Rapprochement bancaire 8h/mois│   │ - Lettrage IA 2.4h/mois (-70%)  │
│ - Analytique Excel (5h/chantier)│   │ - Analytique temps réel (auto)  │
│ - Trésorerie Excel manuel       │   │ - Prévisions auto fiables       │
│ - Décisions à l'aveugle         │   │ - Dashboards temps réel         │
└─────────────────────────────────┘   └─────────────────────────────────┘
```

### Principes Directeurs

1. **Migration complète** : Pas d'hybride Sage+Odoo (complexité inutile, aucun gain)
2. **Approche progressive** : 3 phases (Fondations → Bascule → Optimisation)
3. **Validation expert-comptable** : Étape bloquante avant tout engagement
4. **Formation intensive** : Accompagnement changement équipe comptable
5. **Double-run sécurisé** : 1 mois parallèle Sage/Odoo pour contrôles
6. **Quick wins prioritaires** : Rapprochement bancaire, facturation auto, analytique chantiers

---

## 📅 PLAN D'ACTION DÉTAILLÉ

### 🔷 PHASE 1 : FONDATIONS & VALIDATION (Mois 1-3)

**Objectif** : Préparer migration + Obtenir validation expert-comptable

#### Actions IT

**1.1 Audit & Nettoyage Sage**
- Extraction plan comptable Sage (comptes généraux, auxiliaires, analytiques)
- Identification comptes personnalisés (mapping Odoo)
- Archivage exercices anciens (> 10 ans) si nécessaire
- Nettoyage doublons clients/fournisseurs
- Documentation processus comptables actuels

**1.2 Validation Expert-Comptable**
- Réunion présentation Odoo Comptabilité
- Démonstration export FEC (conforme DGFiP)
- Validation capacité à travailler avec Odoo (Portail Expert OU import FEC)
- Engagement de collaboration (GO/NO-GO critique)

**1.3 Paramétrage Odoo Comptabilité**
- Installation module Comptabilité Odoo (version Entreprise)
- Paramétrage plan comptable français (PCG + personnalisations)
- Configuration journaux comptables (Achats, Ventes, Banque, OD)
- Paramétrage TVA française (taux, comptes, déclarations)
- Configuration axes analytiques (Chantiers, Affaires, Types travaux)
- Templates factures clients personnalisés

**1.4 Reprise des Données**
- Export à-nouveaux Sage (balances N et N-1)
- Export base tiers (clients, fournisseurs) avec dédoublonnage
- Import Odoo avec validation cohérence
- Tests de reprise (10 factures clients/fournisseurs test)

#### Actions Data

**1.5 Audit Qualité Données**
- Analyse qualité base clients (doublons, adresses incomplètes)
- Analyse qualité base fournisseurs (idem)
- Identification incohérences (clients dans Sage mais pas CRM, etc.)
- Plan de nettoyage avant migration

**1.6 Définition Axes Analytiques**
- Atelier Direction + Compta + Resp. Affaires
- Définition axes : Chantier, Affaire, Type travaux, Centre de coût
- Règles d'imputation automatique
- Tests sur 5 chantiers types

#### Formation & Change Management

**1.7 Formation Équipe Comptable**
- Formation Odoo Comptabilité (2 jours intensifs)
- Focus changement paradigme : "Flux automatiques vs Saisie manuelle"
- Accompagnement individuel (hotline dédiée)
- Identification champions internes (change agents)

**Livrables Phase 1**
- [ ] Plan comptable migré et validé
- [ ] Expert-comptable valide approche (GO/NO-GO)
- [ ] Équipe comptable formée et confiante
- [ ] Tests reprise données réussis (cohérence 100%)
- [ ] Axes analytiques définis et testés

**Jalons de validation**
- ✅ GO/NO-GO expert-comptable obtenu
- ✅ Reprise à-nouveaux validée (pas d'écarts)
- ✅ Équipe comptable satisfaite formation (≥ 7/10)

---

### 🔶 PHASE 2 : BASCULE COMPTABLE (Mois 4-5)

**Objectif** : Migration comptabilité générale + Automatisations essentielles

#### Actions IT

**2.1 Bascule Comptabilité Générale**
- Import données historiques (N et N-1 pour comparaisons)
- Activation Odoo Comptabilité en production
- Début double-run (saisies parallèles Sage + Odoo pendant 1 mois)
- Contrôles quotidiens cohérence (balances, grands-livres)

**2.2 Activation Bank Sync (Synchronisation Bancaire)**
- Connexion sécurisée DSP2 avec banque(s)
- Configuration règles de lettrage automatique
- Tests sur historique 3 derniers mois
- Formation comptable au lettrage intelligent

**2.3 Facturation Automatisée**
- Activation module Ventes Odoo (si pas déjà fait)
- Lien Chantier → Facture automatique (workflow)
- Templates factures clients personnalisés (logo, mentions légales)
- Tests facturation auto sur 5 chantiers pilotes
- Connexion Chorus Pro (marchés publics si applicable)

**2.4 Intégration CRM → Comptabilité**
- Unification base clients (CRM = Compta)
- Fin de la double saisie
- Tests création client CRM → Dispo comptabilité instantanément

#### Actions Data

**2.5 Dashboards Essentiels**
- Dashboard Comptabilité (factures attente validation, litiges, trésorerie)
- Dashboard Direction (CA, marges, impayés, top 10 chantiers)
- Dashboard Responsable Affaires (rentabilité chantiers en cours)
- Reporting automatique quotidien (email CA du jour, encaissements)

**2.6 Contrôles Cohérence Double-Run**
- Scripts automatiques comparaison Sage vs Odoo
- Alertes si écarts > seuil défini
- Corrections en continu jusqu'à convergence

#### Formation & Change Management

**2.7 Support Post-Bascule**
- Hotline dédiée 3 mois (réponse < 2h)
- Sessions questions/réponses hebdomadaires
- Documentation procédures Odoo détaillées
- Retours utilisateurs collectés et traités

**Livrables Phase 2**
- [ ] Comptabilité générale 100% Odoo validée
- [ ] Double-run Sage/Odoo concluant (écarts < 0.1%)
- [ ] Premier rapprochement bancaire auto réussi (taux lettrage > 50%)
- [ ] Premières factures envoyées depuis Odoo
- [ ] Dashboards essentiels déployés et utilisés

**Jalons de validation**
- ✅ Cohérence Sage/Odoo parfaite après 1 mois double-run
- ✅ Expert-comptable valide les premières écritures Odoo
- ✅ Taux de lettrage automatique bancaire ≥ 50%
- ✅ Délai facturation < 5 jours (vs 5-10 jours avant)

---

### 🔵 PHASE 3 : ANALYTIQUE & IA (Mois 6-9)

**Objectif** : Comptabilité analytique temps réel + Automatisations avancées

#### Actions IT

**3.1 Comptabilité Analytique Chantiers**
- Activation complète axes analytiques
- Imputation automatique dépenses/recettes par chantier
- Tests sur 10 chantiers en cours
- Formation Responsables d'affaires (lecture dashboards)

**3.2 3-way Matching Automatique**
- Activation rapprochement Commande - BL - Facture fournisseur
- Règles de validation automatique (si concordance 100%)
- Alertes si anomalies (écarts prix, quantités)
- Réduction validation manuelle de 80%

**3.3 OCR Factures Fournisseurs**
- Installation module OCR Odoo (ou tiers : Mindee, Rossum)
- Configuration extraction données (fournisseur, montant, TVA, lignes)
- Tests sur 50 factures historiques
- Déploiement production (scan PDF → Pré-remplissage auto)

**3.4 Prévisions Trésorerie Automatisées**
- Configuration module Trésorerie Odoo
- Règles prévisions :
  - Devis validés → Prévisions recettes (échéances estimées)
  - Commandes fournisseurs → Prévisions dépenses
  - Factures clients → Échéancier encaissements
  - Factures fournisseurs → Échéancier décaissements
- Scénarios multiples (optimiste, pessimiste, réaliste)
- Alertes trésorerie négative anticipées

**3.5 Relances Clients Automatiques**
- Configuration workflows relances (J+30, J+45, J+60 après échéance)
- Templates emails relances personnalisés
- Escalade automatique (relance 1 → 2 → 3 → Mise en demeure)
- Suivi taux recouvrement

#### Actions Data

**3.6 Dashboards Rentabilité Avancés**
- Dashboard par Chantier (Budget vs Réalisé temps réel)
  - Dépenses par catégorie (MO, matériaux, sous-traitance)
  - Recettes (facturé vs reste à facturer)
  - Marge brute instantanée
  - Prévisionnel à terminaison
- Dashboard Analytique Direction
  - Top 10 chantiers rentables / déficitaires
  - Évolution marges par type travaux
  - Rentabilité par client
  - Rentabilité par Responsable d'affaires

**3.7 Prédiction Impayés Clients (ML)**
- Collecte historique paiements clients (12-24 mois)
- Entraînement modèle scoring clients (délais paiement moyens)
- Alertes préventives "Client risque impayé" (score < seuil)
- Recommandations actions (relance anticipée, provision)

**3.8 Détection Anomalies Comptables (IA)**
- Détection écarts prix inhabituels (factures fournisseurs)
- Détection doublons factures (même fournisseur, montant, date proche)
- Détection incohérences TVA (taux anormal)
- Alertes automatiques comptable pour vérification

#### Formation & Change Management

**3.9 Formation Avancée Utilisateurs**
- Formation Responsables d'affaires (dashboards rentabilité chantiers)
- Formation Direction (dashboards stratégiques, prévisions trésorerie)
- Formation Commerciaux (scoring clients, historique factures/paiements)
- Documentation complète (guides utilisateurs, FAQs, vidéos)

**Livrables Phase 3**
- [ ] Comptabilité analytique chantiers déployée (100% chantiers)
- [ ] Marge temps réel accessible pour chaque chantier
- [ ] OCR factures fournisseurs opérationnel (gain temps 70%)
- [ ] Prévisions trésorerie automatiques fiables (écart < 10% vs réalisé)
- [ ] Taux lettrage bancaire automatique ≥ 70%
- [ ] Délai facturation < 48h (vs 5-10 jours avant)

**Jalons de validation**
- ✅ Direction accède à rentabilité chantiers en 1 clic
- ✅ 70% des factures fournisseurs pré-remplies par OCR
- ✅ Prévisions trésorerie utilisées pour décisions stratégiques
- ✅ Taux de litiges factures clients réduit de 50%
- ✅ Équipe comptable satisfaite (satisfaction ≥ 8/10)

---

## 📊 INDICATEURS DE SUCCÈS (KPIs)

### KPIs Opérationnels

| Indicateur | État Actuel (Sage) | Cible Phase 2 | Cible Phase 3 | Méthode Mesure |
|------------|-------------------|---------------|---------------|----------------|
| **Délai connaissance rentabilité** | 1-2 mois | 1 semaine | Temps réel | Comparaison date fin chantier vs date accès rentabilité |
| **Temps rapprochement bancaire** | 8h/mois | 4h/mois (-50%) | 2.4h/mois (-70%) | Chronomètre mensuel |
| **Double saisie clients** | 100% | 0% | 0% | Audit processus |
| **Délai facturation** | 5-10 jours | < 5 jours | < 48h | Moyenne date fin travaux → date envoi facture |
| **Taux lettrage automatique** | 0% | 50% | 70% | Nb lignes lettrées auto / total lignes bancaires |
| **Temps saisie facture fournisseur** | 7 min | 7 min | 2 min (OCR) | Chronomètre sur échantillon 20 factures |
| **Litiges factures clients** | Fréquents (baseline à mesurer) | -30% | -50% | Comptage mensuel litiges |
| **Visibilité trésorerie** | J+30 (Excel) | J+7 | J+1 (auto) | Écart prévisions vs réalisé |

### KPIs Satisfaction Utilisateurs

| Persona | Satisfaction Actuelle | Cible Phase 2 | Cible Phase 3 | Méthode Mesure |
|---------|----------------------|---------------|---------------|----------------|
| **Comptable** | 3/10 (frustration) | 6/10 | 8/10 | Questionnaire mensuel |
| **Responsable d'affaires** | 2/10 (opacité) | 7/10 | 9/10 | Questionnaire mensuel |
| **Commercial** | 3/10 (double saisie) | 8/10 | 8/10 | Questionnaire mensuel |
| **Direction** | 2/10 (brouillard) | 7/10 | 10/10 | Questionnaire mensuel |

### KPIs Business

| Indicateur | Impact attendu | Méthode Mesure |
|------------|---------------|----------------|
| **Temps équipe compta gagné** | ~30h/mois (automatisations) | Chronomètres avant/après |
| **Réduction chantiers déficitaires** | -30% (détection précoce) | Comparaison N vs N+1 |
| **Amélioration trésorerie** | +5-10% (facturation rapide) | Comparaison trésorerie moyenne N vs N+1 |
| **Réduction impayés clients** | -20% (relances auto) | Comparaison impayés N vs N+1 |
| **Coût inefficacité évité** | ~29k€/an | Temps gagné × coût horaire |

---

## 💰 CHIFFRAGE ESTIMATIF

### Coûts Investissement (Estimation)

| Poste | Phase 1 | Phase 2 | Phase 3 | TOTAL |
|-------|---------|---------|---------|-------|
| **Licences Odoo** (Entreprise, 15 users) | 3k€ | 3k€ | 3k€ | 9k€/an |
| **Conseil intégrateur** (paramétrage, formation) | 8k€ | 10k€ | 12k€ | 30k€ |
| **Formation** (interne + externe) | 3k€ | 2k€ | 2k€ | 7k€ |
| **Audit & reprise données** | 4k€ | 2k€ | - | 6k€ |
| **OCR module** (tiers ou Odoo) | - | - | 2k€ | 2k€/an |
| **Contingence 20%** | 3.6k€ | 3.4k€ | 3.8k€ | 10.8k€ |
| **TOTAL Phase** | **21.6k€** | **20.4k€** | **22.8k€** | **~65k€** |

**Note** : Estimation indicative, chiffrage précis requis auprès intégrateur Odoo certifié

### ROI Prévisionnel

| Bénéfice | Gain annuel | Calcul |
|----------|-------------|--------|
| **Temps équipe compta gagné** | ~18k€/an | 30h/mois × 40€/h × 12 mois |
| **Réduction chantiers déficitaires** | ~30-50k€/an | Estimation conservative (détection précoce) |
| **Amélioration trésorerie** | ~10-15k€/an | Gain charges financières + opportunités |
| **Réduction impayés** | ~5-10k€/an | -20% impayés |
| **Meilleure facturation** (rapidité) | ~8-12k€/an | Amélioration trésorerie (encaissements anticipés) |
| **TOTAL Gains annuels** | **~71-105k€/an** | - |

**ROI = (Gains annuels - Coûts récurrents) / Investissement initial**
- Gains annuels : ~88k€ (moyenne)
- Coûts récurrents : ~11k€/an (licences + OCR)
- Gains nets annuels : ~77k€/an
- Investissement initial : ~65k€

**→ ROI = 77k€ / 65k€ = 118% la 1ère année**
**→ Retour sur investissement : < 10 mois**

---

## 🛡️ GESTION DES RISQUES

### Matrice des Risques

| Risque | Probabilité | Impact | Score | Mitigation |
|--------|-------------|--------|-------|------------|
| **Refus expert-comptable** | Moyenne | Critique | 🔴 15 | Validation Phase 1 AVANT tout investissement. Engagement contractuel. |
| **Erreurs reprise données** | Moyenne | Critique | 🔴 15 | Double-run 1 mois. Contrôles quotidiens. Audit pré-migration expert-comptable. |
| **Résistance équipe compta** | Élevée | Moyen | 🟠 9 | Formation intensive. Champions internes. Hotline 3 mois. Valorisation nouveau rôle. |
| **Non-conformité fiscale** | Faible | Critique | 🟠 9 | Tests FEC avant GO. Validation expert-comptable. Double-run sécurisé. |
| **Turnover équipe compta** | Faible | Élevé | 🟠 9 | Documentation détaillée. Formation redondante. Champions internes formés. |
| **Dépassement budget** | Moyenne | Moyen | 🟡 6 | Chiffrage détaillé phase par phase. Contingence 20%. Jalons GO/NO-GO. |
| **Dépassement planning** | Moyenne | Faible | 🟡 3 | Planning réaliste. Phases décorrélables. Pas de deadline clôture comptable. |
| **Bugs Odoo bloquants** | Faible | Moyen | 🟡 3 | Version stable Odoo. Support intégrateur certifié. Communauté active. |

**Légende Score** : Probabilité × Impact (1-5) → 🔴 Critique (≥12) | 🟠 Élevé (9-12) | 🟡 Moyen (≤6)

### Plan de Contingence

**Si Refus Expert-Comptable :**
- STOP projet immédiat
- Recherche nouvel expert-comptable compatible Odoo
- OU : Négociation formation expert-comptable actuel

**Si Erreurs Reprise Données Critiques :**
- Prolongation double-run jusqu'à résolution
- Audit externe si nécessaire
- Pas de bascule définitive tant que pas de convergence 100%

**Si Résistance Équipe Compta Forte :**
- Coaching individuel renforcé
- Implication direction (soutien management)
- Démonstration rapide quick wins (rapprochement bancaire auto)

---

## 📆 PLANNING GLOBAL

### Vue d'Ensemble

```
Mois 1-3 : PHASE 1 FONDATIONS
├─ Audit & Nettoyage Sage
├─ Validation Expert-Comptable ✅ (GO/NO-GO)
├─ Paramétrage Odoo
├─ Reprise données (tests)
└─ Formation équipe compta

Mois 4-5 : PHASE 2 BASCULE
├─ Migration comptabilité générale
├─ Double-run Sage/Odoo (1 mois)
├─ Activation Bank Sync
├─ Facturation automatisée
└─ Dashboards essentiels

Mois 6-9 : PHASE 3 OPTIMISATION
├─ Comptabilité analytique chantiers
├─ 3-way matching auto
├─ OCR factures fournisseurs
├─ Prévisions trésorerie auto
└─ IA (scoring clients, détection anomalies)

Mois 10-12 : STABILISATION
├─ Support continu
├─ Optimisations continues
├─ Mesure ROI
└─ Bilan projet
```

### Jalons Critiques

| Jalon | Date cible | Criticité | GO/NO-GO |
|-------|-----------|-----------|----------|
| **Validation expert-comptable** | Fin Mois 2 | 🔴 Critique | Oui (bloquant) |
| **Tests reprise données OK** | Fin Mois 3 | 🔴 Critique | Oui |
| **Bascule comptabilité** | Début Mois 4 | 🟠 Élevée | Oui |
| **Fin double-run validé** | Fin Mois 5 | 🔴 Critique | Oui |
| **Analytique chantiers déployée** | Fin Mois 7 | 🟠 Élevée | Non |
| **Bilan ROI** | Mois 12 | 🟡 Moyenne | Non |

---

## ✅ CRITÈRES DE DÉCISION (GO/NO-GO)

### Conditions IMPÉRATIVES pour lancer le projet

**✅ GO si :**
1. Expert-comptable valide sa capacité à travailler avec Odoo (Portail OU FEC)
2. Budget ≥ 70k€ validé par direction (incluant contingence)
3. Disponibilité équipe comptable ≥ 20% ETP pendant phases 1-2 (formation, tests)
4. Période de bascule hors clôture comptable (éviter déc-janv, juin-juil)
5. Engagement direction sur accompagnement changement (pas que projet IT)

**❌ NO-GO si :**
1. Expert-comptable refuse de travailler avec Odoo (dépendance contractuelle)
2. Turnover prévu équipe comptable < 6 mois (risque perte compétences)
3. Audit fiscal en cours (instabilité données)
4. Restructuration entreprise en cours (fusion, cession, etc.)
5. Projet ERP concurrent en cours (confusion, charge de travail)

---

## 🎯 PROCHAINES ÉTAPES IMMÉDIATES

### Semaine 1-2 : Validation Direction

1. **Présentation plan à Direction** (ce document)
2. **Validation approche migration complète** (vs hybride Sage+Odoo)
3. **Définition budget prévisionnel** (~70k€)
4. **Validation calendrier** (démarrage Phase 1 quand ?)

### Semaine 3-4 : Validation Expert-Comptable

5. **Prise contact expert-comptable** (réunion préparatoire)
6. **Démonstration Odoo Comptabilité + FEC** (intégrateur certifié)
7. **Obtention engagement collaboration** (GO/NO-GO critique)

### Mois 2 : Lancement Phase 1

8. **Sélection intégrateur Odoo certifié** (appel d'offres 3 intégrateurs)
9. **Chiffrage précis Phase 1** (audit, paramétrage, formation)
10. **Kickoff projet** (équipe projet, planning, communication)

---

## 📚 ANNEXES

### A. Comparaison Sage vs Odoo (Détaillée)

Voir [02_ARCHITECTURE_Actuelle_Chaos.md](../docs/02_ARCHITECTURE_Actuelle_Chaos.md)

### B. Personas & Pain Points

Voir [01_PERSONAS_Pain_Points.md](../docs/01_PERSONAS_Pain_Points.md)

### C. Journey Maps Utilisateurs

Voir [03_JOURNEY_MAPS_Parcours_Utilisateurs.md](../docs/03_JOURNEY_MAPS_Parcours_Utilisateurs.md)

### D. Liste Intégrateurs Odoo Certifiés (France)

- [Odoo Partner Directory](https://www.odoo.com/partners)
- Critères sélection :
  - Gold/Silver partner
  - Expérience comptabilité (≥ 10 projets similaires)
  - Références secteur BTP/Electricité
  - Support français (hotline, documentation)
  - Formation incluse (≥ 2 jours)

### E. Checklist Export FEC (Conformité DGFiP)

- Format : CSV ou TXT (pipe-separated)
- Colonnes obligatoires : JournalCode, JournalLib, EcritureNum, EcritureDate, CompteNum, CompteLib, CompAuxNum, CompAuxLib, PieceRef, PieceDate, EcritureLib, Debit, Credit, EcritureLet, DateLet, ValidDate, Montantdevise, Idevise
- Encodage : UTF-8 (sans BOM)
- Tests : Import dans logiciel expert-comptable (validation conformité)

---

**📅 Document créé :** 2025-11-21
**🎯 Projet :** Transformation Finance & Comptabilité
**⏱️ Approche :** Progressive et sécurisée (3 phases)
**📊 Objectif :** Transformer la comptabilité en outil de pilotage stratégique
**💰 ROI estimé :** 118% la 1ère année (retour < 10 mois)
**⚠️ Prérequis critique :** Validation expert-comptable INDISPENSABLE avant lancement
