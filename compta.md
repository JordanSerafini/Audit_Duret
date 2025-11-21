# Service Finance & Comptabilité

> **Synthèse stratégique** : Transformation de la comptabilité de silo technique vers outil de pilotage temps réel

---

## Contexte

Ce document s'intègre dans l'audit global de l'entreprise. Bien que le service Comptabilité n'ait signalé aucun dysfonctionnement majeur (Sage fonctionne correctement pour les opérations comptables de base), l'analyse transverse révèle que **l'isolement de la fonction comptable constitue un frein structurel** au pilotage opérationnel et stratégique.

---

## 1. État des Lieux & Diagnostic

### 1.1 Le paradoxe « RAS » (Rien à Signaler)

**Apparence** : Le service fonctionne normalement
- Bilans et déclarations fiscales réalisés dans les délais
- Sage est un logiciel robuste maîtrisé par l'équipe
- Aucune alerte remontée par le service

**Réalité** : Cette stabilité masque une déconnexion critique avec les opérations métier

### 1.2 Impacts identifiés sur les autres services

#### Direction
- **Opacité de la rentabilité** : Les marges réelles d'un chantier ne sont connues qu'1 à 2 mois après les travaux (après comptabilisation complète des factures)
- **Absence de pilotage prédictif** : Impossibilité d'ajuster la stratégie en cours de projet

#### Service Commercial
- **Double saisie clients** : Création dans le CRM puis re-création manuelle dans Sage
- **Risques** : Erreurs d'adresse, doublons, incohérences de données

#### Service Facturation
- **Processus manuel lourd** :
  1. Récupération des informations terrain (papier/oral)
  2. Vérification des devis
  3. Ressaisie dans Sage
- **Conséquences** : Lenteur, risques d'erreurs, litiges clients

#### Service Comptabilité
- **Rapprochement bancaire chronophage** : Pointage manuel des virements clients
- **Tâches sans valeur ajoutée** : Temps passé sur des opérations automatisables

---

## 2. Analyse Comparative : Sage vs Odoo Comptabilité

### 2.1 Approche actuelle : Sage

| Dimension | Caractéristiques |
|-----------|------------------|
| **Philosophie** | Logiciel orienté « Expert-Comptable » |
| **Objectif principal** | Production de liasses fiscales conformes |
| **Architecture** | Silo isolé des opérations métier |
| **Comptabilité analytique** | Nécessite une ressaisie complète |
| **Verdict** | Excellent pour la conformité comptable, inadapté au pilotage opérationnel |

### 2.2 Approche cible : Odoo Comptabilité

| Dimension | Caractéristiques |
|-----------|------------------|
| **Philosophie** | Logiciel de gestion d'entreprise intégrée |
| **Principe clé** | La comptabilité comme conséquence automatique des opérations |
| **Architecture** | Intégration native avec tous les modules métier |
| **Comptabilité analytique** | Native et temps réel |
| **Verdict** | Transformation de la comptabilité en outil de pilotage stratégique |

### 2.3 Mécanismes d'automatisation Odoo

```
Opération métier          →  Impact comptable automatique
─────────────────────────────────────────────────────────
Devis validé              →  Prévision de trésorerie
Facture fournisseur (OCR) →  Charge imputée au chantier
Paiement client           →  Lettrage automatique
Validation étape chantier →  Facture brouillon générée
```

---

## 3. Solution Recommandée

### 3.1 Comptabilité analytique native

**Principe** : Chaque ligne de facture (achat/vente) est automatiquement liée au compte analytique du chantier concerné.

**Bénéfice** : Visibilité temps réel de la marge brute par chantier, mise à jour à chaque dépense ou recette.

### 3.2 Facturation automatisée

- **Déclenchement** : Validation d'une étape de chantier sur le terrain
- **Génération** : Facture brouillon créée automatiquement
- **Envoi dématérialisé** : Connexion native à Chorus Pro (marchés publics)

### 3.3 Rapprochement bancaire intelligent

**Technologie** : Connexion bancaire sécurisée (DSP2)

**Processus** :
1. Récupération automatique des relevés bancaires
2. Suggestion de lettrage par algorithme d'IA
3. Validation par le comptable (contrôle humain conservé)

**Gain de temps estimé** : Réduction de 70% du temps de rapprochement

---

## 4. Stratégie de Transition

### 4.1 Scénario recommandé : « Rupture douce »

**Principe** : Bascule complète de la comptabilité générale sur Odoo (pas d'interface Sage-Odoo)

**Organisation cible** :
- **Quotidien (interne)** : Saisie, facturation, banque et relance dans Odoo
- **Expert-comptable (externe)** :
  - Option A : Accès direct via Portail Expert Odoo
  - Option B : Export FEC (Fichier des Écritures Comptables) standard

### 4.2 Facteurs clés de succès

#### Formation de l'équipe comptable
- **Enjeu** : Changement de paradigme (gestion par flux vs saisie linéaire)
- **Approche** : Accompagnement au changement pour éviter la résistance
- **Positionnement** : La comptabilité est « augmentée », non « dépossédée »

#### Reprise des données
- **Criticité** : Haute
- **Périmètre** :
  - Import des balances d'ouverture (à-nouveaux)
  - Reprise du plan comptable personnalisé
  - Migration de la base tiers (clients/fournisseurs)
- **Validation** : Tests de cohérence avant bascule définitive

### 4.3 Risques identifiés

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Résistance de l'expert-comptable | Moyenne | Élevé | Validation en amont, démonstration du FEC |
| Erreurs de reprise de données | Moyenne | Critique | Double-run (parallèle Sage/Odoo) sur 1 mois |
| Surcharge cognitive équipe compta | Élevée | Moyen | Formation progressive, hotline support |
| Non-conformité fiscale temporaire | Faible | Critique | Audit pré-migration par expert-comptable |

---

## 5. Conclusion Stratégique

### Scénario rejeté : Sage + Odoo en parallèle

Maintenir Sage pour la comptabilité tout en utilisant Odoo pour les opérations créerait :
- Une complexité technique élevée (interfaces, synchronisation)
- La persistance du mur entre « opérationnels » et « comptables »
- Des coûts de maintenance doubles

### Recommandation

**La migration complète de la comptabilité vers Odoo est la condition nécessaire** pour obtenir :
1. Un pilotage de rentabilité temps réel
2. Une réduction des tâches à faible valeur ajoutée
3. Une cohérence des données entre tous les services
4. Une capacité d'analyse prédictive (trésorerie, marges)

**Prérequis à la décision** :
- [ ] Validation de l'expert-comptable sur la capacité à travailler avec Odoo ou FEC
- [ ] Chiffrage précis des coûts de migration (licences, formation, conseil)
- [ ] Définition d'un planning de bascule (éviter les périodes de clôture)
- [ ] Constitution d'une équipe projet mixte (compta + IT + direction)

---

**Document établi dans le cadre de l'audit organisationnel global**
*Mise à jour : 2025*
