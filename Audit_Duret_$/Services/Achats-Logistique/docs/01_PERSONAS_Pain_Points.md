# 🔴 PAIN POINTS ACHATS & LOGISTIQUE

> Basé UNIQUEMENT sur les faits constatés lors de l'audit
> AUCUN chiffre inventé - seulement les constats documentés

---

## 📊 CHIFFRES RÉELS CONSTATÉS

### De l'audit
- **50% des commandes seulement arrivent complètes**
- 9-11K références/an gérées
- 80% livrés en 24h (quand complets)

### Cibles souhaitées (d'après cahier des charges)
- Taux commandes complètes: 50% → 95% (objectif)

---

## 🔴 PROBLÈMES CRITIQUES

### 1. Base de Données Chaotique
**Constat:**
- Sage MDE jugé "calamiteux"
- Doublons de références
- Références obsolètes jamais nettoyées
- Double tarification constatée (même produit, prix différents)
- Pas de mise à jour automatique des prix

**Impact:**
- Temps perdu à chercher/vérifier
- Risque d'erreurs de commande
- Références inexistantes chez fournisseur

### 2. Livraisons Incomplètes (50%)
**Constat:**
- Seulement 50% des commandes arrivent complètes
- Reliquats non suivis
- Retours non liés aux commandes

**Impact:**
- Chantiers bloqués
- Équipes en attente
- Re-commandes multiples

### 3. Processus 100% Manuel
**Constat:**
- Aucune automatisation
- Multiples fichiers Excel
- Vérifications manuelles
- Ressaisies répétées
- Inventaires très chronophages

**Impact:**
- Perte de temps importante
- Erreurs humaines
- Lassitude des équipes

### 4. Aucune Traçabilité
**Constat:**
- Pas d'historique des commandes
- Impossible de savoir qui a commandé quoi
- Validation non tracée
- Tout dans des emails perdus

**Impact:**
- Litiges
- Impossibilité de prouver
- Pas de contrôle

### 5. Pas d'Intégration Fournisseurs
**Constat:**
- Pas d'EDI
- Pas d'API avec Rexel/Sonepar
- Commandes 100% manuelles (téléphone/email)
- Catalogues non synchronisés

**Impact:**
- Processus lent
- Pas de prix temps réel
- Pas de statut livraison

### 6. Stock Non Optimisé
**Constat:**
- Stock immobilisé non piloté
- Pas de visibilité temps réel
- Inventaires très longs
- Pas de seuils min/max

**Impact:**
- Capital bloqué
- Ruptures fréquentes
- Obsolescence

### 7. Pas de Gouvernance
**Constat:**
- Commandes directes chantiers non contrôlées
- Achats hors circuit
- Pas de validation centralisée
- Pas de KPIs fournisseurs

**Impact:**
- Perte de traçabilité
- Prix non négociés
- Impossibilité de piloter

---

## 👥 PERSONAS (Besoins Exprimés)

### Marc - Chef de Chantier
**Problèmes:**
- 50% commandes incomplètes → chantier bloqué
- Pas de visibilité sur livraisons
- Processus trop long
- Références introuvables dans Sage
- Urgences non gérées

**Besoins:**
- App mobile simple (scan code-barres)
- Tracking livraisons
- Circuit express pour urgences

### Sylvie - Gestionnaire Achats
**Problèmes:**
- Sage MDE "calamiteux"
- Tout est manuel (ressaisies multiples)
- Pas de traçabilité
- Reliquats non suivis
- Pas d'intégration APIs fournisseurs

**Besoins:**
- Base de données propre
- Automatisation process
- Intégration Rexel/Sonepar
- Workflow digital

### Julien - Responsable Affaires
**Problèmes:**
- Pas de visibilité sur coûts matériel par affaire
- Impossible de piloter budgets
- Commandes hors circuit
- Pas de reporting

**Besoins:**
- Dashboard coûts temps réel
- Traçabilité complète
- Workflow validation

### Éric - Magasinier
**Problèmes:**
- Inventaires très chronophages
- Stock non fiable
- Pas de scan
- Rangement chaotique

**Besoins:**
- Scan codes-barres
- Inventaires simplifiés
- Traçabilité réceptions

### Christine - Directrice Générale
**Problèmes:**
- Pas de pilotage global
- Sage MDE obsolète
- Équipes démotivées par outils
- Pas de KPIs

**Besoins:**
- Visibilité globale
- KPIs temps réel
- Modernisation outils

---

## 🎯 BESOINS CAHIER DES CHARGES

### Fonctionnalités Prioritaires
1. **E-procurement** type marketplace interne
2. **Workflow digital**: Émetteur → Validateur → Gestionnaire
3. **Traçabilité totale**: besoin → commande → réception → facture
4. **Fiches articles enrichies** (images, prix multi-fournisseurs, délais)
5. **Intégration APIs fournisseurs** (Rexel, Sonepar)
6. **Mobile-first** pour chantiers (scan codes-barres)
7. **Alertes intelligentes** (prix, stocks, obsolescence)
8. **3-way matching** automatique (commande-BL-facture)

### Gestion Articles
- Nature (MX/MXX) modifiable
- Fonction "Mettre en sommeil" pour obsolètes
- Champ "Référence de remplacement"
- Gestion multi-fournisseurs avec prix différents
- Gestion multi-dépôts (Annecy, Cevins, Chambéry)
- Import/Export Excel pour tarifs
- Code EAN, conditionnement, délais
- Images produits, fiches PEP, Ecovadis

---

## ⚠️ CE DOCUMENT

Ce document contient UNIQUEMENT:
- ✅ Les faits constatés lors de l'audit
- ✅ Les chiffres réellement documentés (50% commandes complètes, etc.)
- ✅ Les besoins exprimés par les utilisateurs
- ❌ AUCUN chiffre financier inventé
- ❌ AUCUNE estimation de coût/perte non documentée

Pour les projections financières (ROI, coûts, gains), voir le plan d'action source qui contient les estimations pour les options A/B/C.

---

**Source:** Plan_Action_Achats_Logistique.md (Audit Novembre 2025)
