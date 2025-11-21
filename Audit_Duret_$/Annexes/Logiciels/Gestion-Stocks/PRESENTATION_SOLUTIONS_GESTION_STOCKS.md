# SOLUTIONS GESTION STOCKS - DURET ÉLECTRICITÉ

**Catégorie** : Gestion de stocks matériel électrique  
**Cible** : PME BTP avec dépôts multiples  
**Type** : Solutions SaaS ou Développement sur-mesure  
**Leaders** : Odoo Stock, Wiilog, Solution Custom React Native

---

## PRÉSENTATION

Une solution de gestion de stocks permet de centraliser, tracer et optimiser les mouvements de matériel électrique entre dépôts et chantiers. Pour Duret Électricité, cela signifie :
- Traçabilité complète des mouvements (réceptions, sorties, transferts)
- Inventaires simplifiés et rapides (scan via mobile)
- Visibilité temps réel des stocks multi-dépôts
- Réduction des ruptures et du stock dormant
- Optimisation des commandes par analyse des consommations

---

## PROBLÈMES IDENTIFIÉS AUDIT DURET

### Besoins Stocks Identifiés

| Problème identifié | Impact | Solution Stock |
|-------------------|---------|----------------|
| **Stock physique ≠ Stock informatique** | Écart ±20%, commandes en double | Scan temps réel + sync auto |
| **Inventaires chronophages** | 3 jours complets + 2j saisie | App mobile + scan codes-barres |
| **Pas de visibilité multi-dépôts** | Stock bloqué dans un dépôt, rupture dans un autre | Centralisation temps réel |
| **Réception non tracée** | Chefs rappellent 5 fois "c'est arrivé ?" | Scan réception + notification auto |
| **Préparation commandes lente** | Chercher dans 3 zones, 1h perdue | Guidage par app + géolocalisation produits |
| **Retours non tracés** | Stock fantôme, perte financière | Workflow retour digital |

---

## SOLUTIONS STOCK COMPARÉES

### 1. ODOO STOCK (Recommandé si Odoo ERP)

**Positionnement** : Module stock intégré ERP Odoo

**Prix** :
- **Inclus dans Odoo Enterprise** (0€ additionnel si déjà Odoo)
- **App Mobile Odoo Inventory** : Natif, gratuit

**Fonctionnalités**  :
- Gestion multi-dépôts (Annecy, Cevins, Chambéry)
- Scan codes-barres via app mobile
- Inventaires cycliques/annuels digitaux
- Traçabilité complète (lots, numéros série)
- Réapprovisionnement automatique (règles min/max)
- Transferts inter-dépôts
- Intégration achats/ventes native

**Avantages** :
- Gratuit si Odoo ERP déjà choisi
- App mobile native iOS/Android
- Intégration parfaite avec achats/chantiers
- Traçabilité bout-en-bout

**Inconvénients** :
- Moins spécialisé matériel électrique
- Configuration initiale requise

**Adapté à Duret ?** ✅ Excellent si choix Odoo (tout intégré, pas de coût additionnel)

---

### 2. WIILOG (Spécialisé Logistique)

**Positionnement** : Solution dédiée gestion stocks et logistique

**Prix** :
- **4 800€/an** (licence)
- App mobile incluse

**Fonctionnalités** :
- Scan codes-barres avancé
- Gestion emplacements détaillée
- Inventaires mobiles
- Traçabilité lots/DLUO
- Analytics stocks

**Avantages** :
- Spécialisé logistique
- App mobile robuste
- Bon support France

**Inconvénients** :
- Coût annuel récurrent
- Intégration ERP à prévoir (API REST)
- Outil supplémentaire à gérer

**Adapté à Duret ?** ⚠️ Bon si besoin très spécifique, mais redondant si Odoo

---

### 3. MONSTOCK

**Positionnement** : Solution cloud PME simple

**Prix** :
- **À partir de 45€/mois** (forfait PME)
- App mobile incluse

**Fonctionnalités** :
- Gestion stocks basique
- Scan codes-barres
- Multi-dépôts
- Inventaires
- Alertes seuils

**Avantages** :
- Prix accessible
- Interface simple
- Déploiement rapide

**Inconvénients** :
- Moins de fonctionnalités avancées
- Intégration limitée
- Pas spécialisé BTP

**Adapté à Duret ?** ⚠️ Alternative budget serré, mais limité

---

### 4. **APPLICATION MOBILE SUR-MESURE (React Native)** 🎯

**Positionnement** : Développement custom

#### Stack Technique

**Mobile App (React Native)** :
- iOS + Android (code unique)
- Mode offline (SQLite local)
- Scan QR Code / Code-barres natif
- Géolocalisation GPS produits
- Signature réception

**Backend (Node.js + PostgreSQL)** :
- API REST sécurisée
- Sync temps réel
- Gestion multi-dépôts
- Historique mouvements
- Règles métier customs

**Features Clés** :

**1. Réception Marchandises**
- Scan bon de livraison (QR code)
- Scan articles un par un
- Photo du colis
- Signature fournisseur
- Notification auto chef chantier

**2. Préparation Commandes Chantier**
- Liste produits à préparer
- Guidage vers emplacement (plan dépôt)
- Scan validation picking
- Génération bordereau sortie

**3. Inventaires Mobiles**
- Mode inventaire (scan continu)
- Comptage rapide
- Écarts calculés auto
- Validation par responsable

**4. Transferts Inter-Dépôts**
- Workflow départ → transit → arrivée
- Scan départ + scan arrivée
- Traçabilité GPS

**5. Retours Chantier**
- Scan retour
- Motif (trop commandé, défaut, etc.)
- Réintégration stock ou quarantaine

**6. Consultation Stock**
- Recherche produit
- Stock disponible par dépôt
- Historique mouvements
- Réservations

#### Architecture Technique

```
┌─────────────────┐
│  App Mobile RN  │ ← Magasiners + Chefs chantier
│  iOS + Android  │
└────────┬────────┘
         │ HTTPS REST API
         ↓
┌─────────────────┐
│   Backend API   │ ← Node.js + Express
│   + Database    │ ← PostgreSQL
└────────┬────────┘
         │ Sync bidirectionnelle
         ↓
┌─────────────────┐
│   ERP (Odoo/EBP)│ ← Source de vérité produits
└─────────────────┘
```

#### Fonctions Avancées

**Géolocalisation Produits dans Dépôt** :
- Plan 2D du dépôt dans l'app
- Chaque emplacement géolocalisé
- Navigation vers produit (flèche)
- Temps préparation divisé par 3

**Mode Offline Robuste** :
- Toutes fonctions disponibles sans réseau
- Queue de synchronisation intelligente
- Résolution conflits automatique

**Analytics Embarqués** :
- Produits plus mouvementés
- Temps moyen préparation
- Taux erreurs scan
- Performance magasiniers

#### Coût Développement Custom

| Poste | Estimation | Détail |
|-------|-----------|---------|
| **Conception UX/UI** | 8 000€ | Maquettes app, design system mobile |
| **Développement Mobile** | 35 000€ | App React Native complète (6 modules) |
| **Backend + DB** | 15 000€ | API, base données, sync |
| **Intégration ERP** | 10 000€ | Connecteur Odoo ou EBP |
| **Tests & QA** | 7 000€ | Tests utilisateurs, debug |
| **TOTAL INITIAL** | **75 000€** | One-time |

**Coûts Récurrents** :
- Hébergement cloud : 150€/mois = 1 800€/an
- Maintenance corrective : 5 000€/an
- Évolutions mineures : 8 000€/an
- **TOTAL/AN** : **14 800€**

**Coût 3 ans** : 75 000€ + (14 800€ x 3) = **119 400€**

---

## COMPARATIF SOLUTIONS 3 ANS

| Solution | Coût 3 ans | Intégration ERP | App Mobile | Adapté Duret |
|----------|------------|-----------------|------------|--------------|
| **Odoo Stock** | **0€** (inclus) | Parfaite | ✅ Native | ✅ Recommandé si Odoo |
| Wiilog | 14 400€ | API REST | ✅ Incluse | ⚠️ Redondant si Odoo |
| MonStock | 1 620€ | Limitée | ✅ Basique | ⚠️ Fonctionnalités limitées |
| **App Custom** | 119 400€ | Sur-mesure | ✅ Premium | ✅ Si besoins très spécifiques |

---

## MATÉRIEL SCAN RECOMMANDÉ

### Douchettes Code-Barres

**Pour Dépôt (Fixe)** :
- **Zebra DS2208** : 120€ (filaire USB, robuste)
- Scan 2D, lecture rapide
- Usage quotidien intensif

**Pour Mobile (Terrain)** :
- **Zebra DS3678** : 450€ (sans fil, IP67)
- Résistant chutes 2,4m
- Batterie 14h

**Pour Smartphones** :
- **Socket Mobile S740** : 280€ (Bluetooth)
- Compatible iOS/Android
- Compact, clipsable

### Étiquettes Code-Barres

**Étiquettes Produits** :
| Type | Usage | Prix unitaire |
|------|-------|---------------|
| Papier standard | Produits secs | 0,02€ |
| Polyester | Matériel outdoor | 0,05€ |
| RFID passive | Traçabilité avancée | 0,80€ |

**Imprimante Recommandée** :
- **Zebra ZD220** : 150€ (thermique, Ethernet/USB)

---

## RECOMMANDATION POUR DURET ÉLECTRICITÉ

### Approche Progressive

#### **SCÉNARIO 1 : Si choix ODOO ERP** → **Odoo Stock + App Mobile**

**Phase 1 (M1-3)** :
- Activation module Odoo Stock
- Configuration 3 dépôts
- Formation magasiniers (2j)
- Pilote 1 dépôt

**Phase 2 (M4-6)** :
- Déploiement app mobile Odoo Inventory
- Achat 3 douchettes Zebra DS3678
- Étiquetage 20% stock prioritaire
- Généralisation 3 dépôts

**Coût** : 0€ logiciel + 2 500€ matériel (douchettes + étiquettes)

#### **SCÉNARIO 2 : Si besoin TRÈS spécifique** → **App Custom React Native**

**Raisons de choisir custom** :
- Workflow métier très spécifique BTP non géré par solutions standard
- Besoin géolocalisation GPS produits dans dépôt (plan 2D)
- Interface ultra-simplifiée pour magasiniers seniors
- Intégration poussée avec ERP legacy complexe

**Budget** : 75k€ + 15k€/an

---

## AVANTAGES APP SUR-MESURE

✅ **UX optimisée** : Interface pensée pour magasinier (gros boutons, scan rapide)  
✅ **Géolocalisation** : Plan dépôt, navigation vers produit  
✅ **Mode offline** : Fonctionne sans réseau (dépôts zones blanches)  
✅ **Évolutif** : Ajout fonctions métier spécifiques illimité  
✅ **Performance** : Optimisé volumétrie Duret  
✅ **Propriété** : Code source appartient à Duret  
✅ **Analytics** : Dashboards métier customs

---

## PROCHAINES ÉTAPES

### Étape 1 : Audit Stock Détaillé (Semaine 1-2)

1. Cartographier les 3 dépôts (Annecy, Cevins, Chambéry)
2. Inventaire exhaustif (avec écarts actuels)
3. Identifier workflow prioritaires
4. Sélectionner 100 références pilotes

### Étape 2 : POC 1 Mois (Si Custom)

1. Développement module "Réception" uniquement
2. Tests avec 2 magasiniers
3. Mesure gains temps réception
4. Go/No-Go développement complet

### Étape 3 : Déploiement (Mois 2-4)

1. Développement modules restants
2. Étiquetage stock complet
3. Formation tous magasiniers
4. Mise en production

---

## RESSOURCES

**Matériel** :
- **Zebra France** : [www.zebra.com/fr](https://www.zebra.com/fr)
- **Scandit** (SDK scan mobile) : [www.scandit.com](https://www.scandit.com)

**Développeurs React Native** :
- **Malt** : Plateforme freelances France
- **BAM.tech** : Agence spécialisée React Native

**Solutions SaaS** :
- **Odoo** : [www.odoo.com/fr_FR/page/warehouse](https://www.odoo.com/fr_FR/page/warehouse)
- **Wiilog** : [www.wiilog.fr](https://www.wiilog.fr)
- **MonStock** : [www.monstock.fr](https://www.monstock.fr)

---

**Document créé le** : 2025-01-21  
**Source** : Recherche + Audit Duret Électricité  
**Statut** : Étude complète Gestion Stocks  
**Recommandation** : **Odoo Stock** si choix Odoo ERP, **App Custom** si besoins très spécifiques
