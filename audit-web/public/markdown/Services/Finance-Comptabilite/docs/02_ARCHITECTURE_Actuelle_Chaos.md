# 🏗️ ARCHITECTURE ACTUELLE - Finance & Comptabilité

> Analyse technique de l'état actuel : silos, processus manuels, absence d'intégration

---

## 🗺️ VUE D'ENSEMBLE ARCHITECTURE ACTUELLE

### Schéma Conceptuel

```
┌─────────────────────────────────────────────────────────────────────┐
│                         SILOS ISOLÉS                                │
│                    (Aucune intégration native)                      │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────┐         ┌──────────────┐         ┌─────────────────┐
│              │         │              │         │                 │
│  CHANTIERS   │   ══╳   │     CRM      │   ══╳   │  SAGE COMPTA    │
│   (Terrain)  │         │  Commercial  │         │   (Comptabilité)│
│              │         │              │         │                 │
└──────────────┘         └──────────────┘         └─────────────────┘
      │                         │                         │
      │ Papier/Oral             │ Email/Téléphone         │ Saisie manuelle
      ▼                         ▼                         ▼

  Validation travaux     Création clients           Facturation
  Temps passés           Devis                      Écritures comptables
  Matériaux utilisés     Opportunités               TVA, Bilans

      ║                         ║                         ║
      ╚═════════════════════════╩═════════════════════════╝
                    RESSAISIES MULTIPLES
                    Délais importants
                    Risques d'erreurs
```

---

## 🔴 PROBLÈME 1 : SILOS APPLICATIFS

### Applications Déconnectées

#### 1. **Sage Comptabilité** (Serveur local)
- **Rôle :** Comptabilité générale, TVA, bilans
- **Utilisateurs :** Comptable(s)
- **Limites :**
  - ❌ Aucune connexion avec terrain/chantiers
  - ❌ Aucune connexion avec CRM
  - ❌ Comptabilité analytique inexistante ou manuelle
  - ❌ Pas de synchronisation bancaire automatique

#### 2. **CRM Commercial** (Localisation ?)
- **Rôle :** Gestion clients, devis, opportunités
- **Utilisateurs :** Commerciaux, direction
- **Limites :**
  - ❌ Clients créés ici DOIVENT être re-créés dans Sage
  - ❌ Aucun lien automatique vers facturation
  - ❌ Pas de visibilité impayés clients temps réel

#### 3. **Gestion Chantiers** (Papier/Excel ?)
- **Rôle :** Suivi temps, matériaux, avancement
- **Utilisateurs :** Chefs chantier, responsables affaires
- **Limites :**
  - ❌ Aucune traçabilité digitale
  - ❌ Infos collectées papier/oral → Ressaisie pour facturation
  - ❌ Impossible de lier dépenses chantier → rentabilité temps réel

#### 4. **Excel (Multiples versions)**
- **Rôle :** Prévisions trésorerie, analytique chantiers, tableaux de bord
- **Utilisateurs :** Direction, comptabilité
- **Limites :**
  - ❌ Données manuelles (périmées)
  - ❌ Risque d'erreurs formules
  - ❌ Pas de consolidation automatique
  - ❌ Versions multiples non synchronisées

---

## 🔴 PROBLÈME 2 : PROCESSUS MANUELS

### 2.1 Processus Création Client

```
┌─────────────────────────────────────────────────────────────────┐
│  PROCESSUS ACTUEL : Création Client (Double saisie)            │
└─────────────────────────────────────────────────────────────────┘

Commercial                    Comptable                  Système
    │                            │                          │
    │ 1. Saisie client CRM       │                          │
    ├───────────────────────────>│                          │
    │                            │                          │
    │ 2. Email/Téléphone         │                          │
    │   "Nouveau client"         │                          │
    ├───────────────────────────>│                          │
    │                            │                          │
    │                            │ 3. RE-SAISIE manuelle    │
    │                            │    dans Sage             │
    │                            ├─────────────────────────>│
    │                            │                          │
    │                            │ Risques :                │
    │                            │ - Erreur adresse         │
    │                            │ - Doublon                │
    │                            │ - Délai 1-2 jours        │
    │                            │                          │

⏱️ Temps total : 10-15 minutes par client
❌ Risque erreurs : Élevé
🔄 Efficacité : 0/10
```

### 2.2 Processus Facturation

```
┌─────────────────────────────────────────────────────────────────┐
│  PROCESSUS ACTUEL : Facturation (5-10 jours)                   │
└─────────────────────────────────────────────────────────────────┘

Chef Chantier        Gestionnaire            Comptable        Client
     │                    │                       │              │
     │ 1. Travaux finis   │                       │              │
     │    (papier/oral)   │                       │              │
     ├───────────────────>│                       │              │
     │                    │                       │              │
     │                    │ 2. Collecte infos     │              │
     │                    │    - Temps passés     │              │
     │                    │    - Matériaux        │              │
     │                    │    - Devis            │              │
     │                    │   (Excel/Papier)      │              │
     │                    │                       │              │
     │                    │ 3. Vérification       │              │
     │                    │    manuelle           │              │
     │                    │                       │              │
     │                    │ 4. Demande facture    │              │
     │                    ├──────────────────────>│              │
     │                    │                       │              │
     │                    │                       │ 5. RE-SAISIE │
     │                    │                       │    Sage      │
     │                    │                       │              │
     │                    │                       │ 6. Édition   │
     │                    │                       │    PDF       │
     │                    │                       │              │
     │                    │                       │ 7. Envoi     │
     │                    │                       ├─────────────>│
     │                    │                       │              │
     │                    │                       │ ⏱️ 5-10 jours│
     │                    │                       │              │

⏱️ Délai moyen : 5-10 jours
❌ Risque erreurs : Élevé (ressaisie manuelle)
💰 Impact trésorerie : Critique (retard encaissements)
```

### 2.3 Processus Rapprochement Bancaire

```
┌─────────────────────────────────────────────────────────────────┐
│  PROCESSUS ACTUEL : Rapprochement Bancaire (8h/mois)           │
└─────────────────────────────────────────────────────────────────┘

Comptable                    Banque                   Sage
    │                          │                        │
    │ 1. Export relevé         │                        │
    │    bancaire (PDF/CSV)    │                        │
    │<─────────────────────────┤                        │
    │                          │                        │
    │ 2. Conversion manuelle   │                        │
    │    (si PDF)              │                        │
    │                          │                        │
    │ 3. Import Sage           │                        │
    ├─────────────────────────────────────────────────>│
    │                          │                        │
    │ 4. POINTAGE LIGNE PAR LIGNE                      │
    │    - Recherche facture correspondante            │
    │    - Vérification montant                        │
    │    - Lettrage manuel                             │
    │                          │                        │
    │ Répéter pour chaque ligne (50-200/mois)          │
    │                          │                        │

⏱️ Temps moyen : 8 heures/mois
❌ Valeur ajoutée : Aucune (tâche répétitive)
😓 Charge cognitive : Élevée (recherche manuelle)
🚨 Risque erreurs : Moyen
```

### 2.4 Processus Comptabilité Analytique (Rentabilité Chantier)

```
┌─────────────────────────────────────────────────────────────────┐
│  PROCESSUS ACTUEL : Analyse Rentabilité Chantier (Manuel)      │
└─────────────────────────────────────────────────────────────────┘

Responsable Affaires         Comptable              Direction
         │                       │                       │
         │ 1. Demande rentabilité│                       │
         │    chantier X         │                       │
         ├──────────────────────>│                       │
         │                       │                       │
         │                       │ 2. Extraction Sage    │
         │                       │    - Factures clients │
         │                       │    - Factures fourn.  │
         │                       │    - Temps MO         │
         │                       │    (3-4 heures)       │
         │                       │                       │
         │                       │ 3. Reconstruction     │
         │                       │    Excel manuelle     │
         │                       │    (2-3 heures)       │
         │                       │                       │
         │ 4. Envoi Excel        │                       │
         │<──────────────────────┤                       │
         │                       │                       │
         │ 5. Découverte         │                       │
         │    rentabilité        │                       │
         │    (trop tard)        │                       │
         │                       │                       │

⏱️ Délai : 1-2 mois après fin chantier
⏱️ Temps analyse : 5-7 heures par chantier
❌ Valeur : Très faible (données périmées)
🚫 Pilotage temps réel : Impossible
```

---

## 🔴 PROBLÈME 3 : GESTION DONNÉES

### 3.1 Multiplicité des Sources de Vérité

| Donnée | Source 1 | Source 2 | Source 3 | Synchronisation |
|--------|----------|----------|----------|-----------------|
| **Clients** | CRM | Sage | - | ❌ Manuelle |
| **Chantiers** | Excel/Papier | - | - | ❌ Aucune |
| **Dépenses chantier** | Papier | Sage (après) | Excel (prévisions) | ❌ Manuelle |
| **Trésorerie** | Banque | Sage | Excel (prévisions) | ❌ Manuelle |
| **Rentabilité** | - | - | Excel reconstitué | ❌ Aucune |

**Conséquences :**
- 🔴 Incohérences fréquentes
- 🔴 Aucune source de vérité unique
- 🔴 Risque d'erreurs élevé
- 🔴 Consolidation impossible

### 3.2 Absence de Traçabilité

**Ce qu'on NE PEUT PAS tracer aujourd'hui :**
- ❌ Lien Chantier → Dépenses → Facture fournisseur
- ❌ Lien Temps passé chantier → Coût MO → Rentabilité
- ❌ Lien Devis validé → Prévision trésorerie
- ❌ Lien Facture client → Paiement → Lettrage automatique
- ❌ Historique modifications (Qui a fait quoi quand ?)

---

## 🔴 PROBLÈME 4 : INFRASTRUCTURE TECHNIQUE

### 4.1 Sage Comptabilité (Architecture Legacy)

```
┌────────────────────────────────────────────────────┐
│         SAGE COMPTABILITÉ (Serveur Local)          │
├────────────────────────────────────────────────────┤
│                                                    │
│  ✅ Points forts :                                 │
│     - Robuste et stable                           │
│     - Conforme fiscalité française                │
│     - Maîtrisé par l'équipe                       │
│                                                    │
│  ❌ Limites :                                      │
│     - Architecture client-serveur (pas cloud)     │
│     - Aucune API REST moderne                     │
│     - Pas de synchronisation bancaire auto        │
│     - Pas d'OCR factures                          │
│     - Pas de workflows digitaux                   │
│     - Comptabilité analytique limitée             │
│     - Aucune intégration native ERP               │
│                                                    │
│  🔌 Intégrations actuelles :                       │
│     - Aucune (silo isolé)                         │
│                                                    │
└────────────────────────────────────────────────────┘
```

### 4.2 Absence d'Automatisation

| Processus | Automatisation | Outil | Temps perdu |
|-----------|----------------|-------|-------------|
| Création client | 0% | Saisie manuelle | 10 min/client |
| Facturation | 0% | Saisie manuelle | 15 min/facture |
| Rapprochement bancaire | 0% | Pointage manuel | 8h/mois |
| Saisie factures fournisseurs | 0% | Lecture + saisie | 7 min/facture |
| Comptabilité analytique | 0% | Excel manuel | 5h/chantier |
| Prévisions trésorerie | 0% | Excel manuel | 3h/mois |
| Relances clients | 0% | Email manuel | 2h/mois |

**Total temps perdu estimé : ~25-30h/mois sur tâches automatisables**

---

## 🔴 PROBLÈME 5 : IMPACTS BUSINESS

### 5.1 Impact sur la Direction

❌ **Pas de pilotage temps réel**
- Décisions basées sur données périmées (1-2 mois)
- Impossible de détecter chantier déficitaire avant fin
- Prévisions trésorerie manuelles et peu fiables

❌ **Charge cognitive élevée**
- Demandes d'extractions manuelles multiples
- Excel bricolé pour tableau de bord
- Stress sur gestion trésorerie

### 5.2 Impact sur la Comptabilité

❌ **Surchargé de tâches à faible valeur**
- 70% du temps sur saisie/pointage
- 30% seulement sur analyse/conseil

❌ **Pompier permanent**
- Litiges clients (erreurs, délais)
- Incohérences CRM/Sage
- Urgences facturation

### 5.3 Impact sur les Opérationnels

❌ **Responsables d'affaires**
- Découvrent rentabilité trop tard
- Ne peuvent pas ajuster stratégie en cours

❌ **Commerciaux**
- Double saisie clients (temps perdu)
- Pas de visibilité impayés

❌ **Chefs de chantier**
- Délais facturation → Litiges clients
- Pas de traçabilité travaux → facture

---

## 📊 CARTOGRAPHIE DES FLUX DE DONNÉES ACTUELS

```
┌──────────────┐
│  CHANTIERS   │ (Papier/Oral)
│   Terrain    │
└──────┬───────┘
       │
       │ Collecte manuelle
       ▼
┌──────────────┐
│ GESTIONNAIRE │ (Excel/Papier)
│  Achats/Adm  │
└──────┬───────┘
       │
       │ Email/Téléphone
       ▼
┌──────────────┐
│  COMPTABLE   │ (Sage Comptabilité)
│  Facturation │
└──────┬───────┘
       │
       │ Saisie manuelle
       ▼
┌──────────────┐
│   SAGE       │ (Base de données locale)
│ COMPTABILITÉ │
└──────┬───────┘
       │
       │ Export manuel
       ▼
┌──────────────┐
│    EXCEL     │ (Tableaux de bord bricolés)
│   DIRECTION  │
└──────────────┘

🔴 Chaque flèche = RE-SAISIE manuelle = Risque d'erreur
🔴 Aucune automatisation
🔴 Délais cumulés : 5-10 jours entre fin chantier et visibilité direction
```

---

## 💰 COÛT DE L'INEFFICACITÉ ACTUELLE

### Estimation Temps Perdu (par mois)

| Tâche | Temps/unité | Volume/mois | Total/mois |
|-------|-------------|-------------|------------|
| Double saisie clients | 10 min | 20 clients | 3.3h |
| Facturation manuelle | 15 min | 80 factures | 20h |
| Rapprochement bancaire | 8h | 1x | 8h |
| Saisie factures fournisseurs | 7 min | 100 factures | 11.7h |
| Analytique chantiers | 5h | 2 chantiers | 10h |
| Prévisions trésorerie | 3h | 1x | 3h |
| Litiges/erreurs | Variable | - | 5h |

**Total estimé : ~61 heures/mois**

**Coût annuel (à 40€/h chargé) : ~29 000€**

### Coûts Cachés

- 🔴 **Retard facturation** : Impact trésorerie (retard encaissements 5-10 jours)
- 🔴 **Chantiers déficitaires non détectés** : Pertes non maîtrisées (impossible à chiffrer)
- 🔴 **Décisions sous-optimales** : Basées sur données périmées
- 🔴 **Charge mentale équipe** : Stress, turnover potentiel

---

## ✅ CONCLUSION : NÉCESSITÉ D'UNE REFONTE

### Constats Critiques

1. ❌ **Silos applicatifs** : Aucune intégration native
2. ❌ **Processus manuels** : 61h/mois de tâches automatisables
3. ❌ **Absence d'analytique temps réel** : Pilotage impossible
4. ❌ **Multiplicité sources de vérité** : Incohérences fréquentes
5. ❌ **Infrastructure legacy** : Sage isolé, pas d'API, pas de cloud

### Recommandation

> **Migration vers ERP intégré (Odoo) avec comptabilité native est LA condition sine qua non** pour résoudre ces problèmes structurels.

Maintenir Sage en parallèle d'Odoo ne résoudrait AUCUN de ces problèmes et ajouterait même de la complexité.

---

**📅 Document créé :** 2025-11-21
**🎯 Focus :** Architecture actuelle Finance & Comptabilité
**📊 Objectif :** Documenter l'existant pour justifier la transformation
**⚠️ Méthodologie :** Analyse terrain + Cartographie des flux
