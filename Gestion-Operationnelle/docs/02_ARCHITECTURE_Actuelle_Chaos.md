# 🏗️ ARCHITECTURE ACTUELLE (CHAOS) - Gestion Opérationnelle

**Service** : Gestion Opérationnelle
**Date audit** : Novembre 2025
**Statut** : **CRITIQUE - CHAOS ORGANISATIONNEL**

---

## 📊 VUE D'ENSEMBLE

L'architecture actuelle de la **Gestion Opérationnelle** chez Duret Électricité est caractérisée par :

- **Excel omniprésent** : 30+ fichiers non connectés
- **Silos de données** : Chaque service son système
- **Processus manuels** : 80% des tâches sans automation
- **Aucune intégration** : Double/triple saisie systématique
- **Fragilité extrême** : Dépendance personnes clés
- **Pas de temps réel** : Données J-15 minimum

**Impact financier annuel conservateur** : **1 181 500€/an**

---

## 🗺️ CARTOGRAPHIE SYSTÈME ACTUEL

### Schéma Architecture (État Actuel)

```
┌─────────────────────────────────────────────────────────────┐
│                    UTILISATEURS TERRAIN                      │
├──────────────┬──────────────┬──────────────┬────────────────┤
│ Responsables │ Chefs        │ Techniciens  │ Assistante     │
│ Affaires (4) │ Chantier(15) │ SAV (8)      │ Relation (1)   │
└──────┬───────┴──────┬───────┴──────┬───────┴────────┬───────┘
       │              │              │                │
       │ ORAL/WhatsApp│ ORAL/WhatsApp│ Téléphone/Mail │
       ▼              ▼              ▼                ▼
┌──────────────────────────────────────────────────────────────┐
│                  COUCHE "REMONTÉE INFO"                      │
│  ⚠️ PROBLÈME : Trop longue, trop tard, mauvaise interpré.   │
│  ⚠️ Aucune traçabilité, aucune structure                    │
└──────────────────────────────────────────────────────────────┘
       │              │              │                │
       ▼              ▼              ▼                ▼
┌──────────────────────────────────────────────────────────────┐
│              COUCHE "SYSTÈMES" (FRAGMENTÉE)                  │
├──────────────┬──────────────┬──────────────┬────────────────┤
│   SAGE       │     MDE      │   LIRECO     │   EXCEL × 30+  │
│ (Compta/     │   (ERP old)  │  (Stocks)    │  (Tout perso)  │
│  Devis)      │              │              │                │
│              │              │              │                │
│ ⚠️ Lent      │ ⚠️ Obsolète  │ ⚠️ Isolé     │ ⚠️ Silos       │
│ ⚠️ Distance  │ ⚠️ Plantages │ ⚠️ Pas API   │ ⚠️ Fragilité   │
│    = TRÈS    │              │              │ ⚠️ Dépendance  │
│    LENT      │              │              │    personnes   │
└──────┬───────┴──────┬───────┴──────┬───────┴────────┬───────┘
       │              │              │                │
       │ Export       │ Export       │ Saisie         │ Saisie
       │ manuel       │ manuel       │ manuelle       │ manuelle
       ▼              ▼              ▼                ▼
┌──────────────────────────────────────────────────────────────┐
│          SYLVIE (CONTRÔLEUSE GESTION) = GOULOT               │
│                                                               │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  Excel KPI Master (15 onglets, 200 formules)           │  │
│  │  + Excel Marges × 4                                    │  │
│  │  + Excel Trésorerie                                    │  │
│  │  + Excel Projection                                    │  │
│  │  + ... 26 autres Excel                                 │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                               │
│  ⚠️ 3-4 jours/mois consolidation manuelle                    │
│  ⚠️ Données J-15 (pas temps réel)                            │
│  ⚠️ 15-20% erreurs nécessitent corrections                   │
│  ⚠️ Si Sylvie absente : BLOCAGE TOTAL                        │
└───────────────────────────┬───────────────────────────────────┘
                            │
                            │ Reporting mensuel
                            ▼
┌──────────────────────────────────────────────────────────────┐
│                    DIRECTION GÉNÉRALE                         │
│                                                               │
│  ⚠️ Décisions basées sur données J-15 (périmées)             │
│  ⚠️ Pas de prédictif, seulement historique                   │
│  ⚠️ Réactions vs anticipation                                │
└──────────────────────────────────────────────────────────────┘
```

### Légende

- ⚠️ : Point de souffrance critique
- `→` : Flux manuel (saisie, export, copier-coller)
- `--` : Aucune intégration
- `XX` : Système obsolète/problématique

---

## 🔴 POINTS NOIRS ARCHITECTURE ACTUELLE

### 1. Excel Omniprésent - 30+ Fichiers Non Connectés

**Fichiers Excel identifiés** :

#### **Sylvie (Contrôle Gestion) : 12 fichiers**
1. `KPI_Master_2025.xlsx` (15 onglets, 200+ formules, 50 Mo)
2. `Marges_RA_Julien.xlsx`
3. `Marges_RA_Marc.xlsx`
4. `Marges_RA_Sophie.xlsx`
5. `Marges_RA_Antoine.xlsx`
6. `Trésorerie_Prévisionnel.xlsx`
7. `Projection_CA_Annuelle.xlsx`
8. `Analyse_Ecarts_Budget.xlsx`
9. `Consolidation_Chantiers.xlsx`
10. `Ratios_Activité.xlsx`
11. `Import_SAGE_Mensuel.xlsx`
12. `Import_MDE_Hebdo.xlsx`

#### **Thomas (Bureau Études) : 3 fichiers**
13. `Planning_BE_Semaine.xlsx`
14. `Demandes_BE_EnCours.xlsx`
15. `Charge_Capacité_BE.xlsx`

#### **Isabelle (Stocks) : 5 fichiers**
16. `Valorisation_Stocks_Annecy.xlsx`
17. `Valorisation_Stocks_Albertville.xlsx`
18. `Inventaires_Mensuels.xlsx`
19. `Ecarts_Inventaires.xlsx`
20. `Commandes_EnCours.xlsx`

#### **Responsables Affaires : 4 fichiers**
21. `Suivi_Affaires_Julien.xlsx`
22. `Suivi_Affaires_Marc.xlsx`
23. `Suivi_Affaires_Sophie.xlsx`
24. `Suivi_Affaires_Antoine.xlsx`

#### **Assistante Relation Client : 2 fichiers**
25. `Relances_Clients.xlsx`
26. `Planning_Hebdo.xlsx`

#### **Divers : 4 fichiers**
27. `Vehicules_Entretien.xlsx`
28. `CONSUEL_Suivi.xlsx`
29. `Salles_Reunion.xlsx`
30. `Logements_DeplacementsGrands.xlsx`

**Total : 30+ fichiers Excel**

**Problèmes** :
- ❌ **Aucune intégration** : Chaque fichier = silo isolé
- ❌ **Ressaisies multiples** : Même donnée saisie 3-5× dans différents fichiers
- ❌ **Incohérences garanties** : Versions différentes même info
- ❌ **Fragilité extrême** : 1 formule cassée = tout faux
- ❌ **Succession impossible** : Personne ne comprend système complet
- ❌ **Aucune scalabilité** : Croissance entreprise = explosion complexité

**Temps perdu** : 500h/an rien que gestion Excel (recherche, corrections, consolidations)
**Coût** : 500h × 60€/h = **30 000€/an**

---

### 2. Silos de Données - Aucune Intégration

#### Flux Données Actuel (Exemple : Création Affaire → KPI)

```
1. Commercial reçoit commande client (mail/téléphone)
   ↓
2. Assistante crée client dans SAGE (saisie manuelle)
   ↓
3. Assistante crée AUSSI client dans MDE (RESSAISIE)
   ↓
4. RA crée devis dans SAGE (saisie manuelle)
   ↓
5. RA copie-colle infos devis dans Excel Suivi Affaires (RESSAISIE)
   ↓
6. Devis accepté → RA crée affaire dans MDE (RESSAISIE)
   ↓
7. Fin de mois → SAGE export compta (CSV manuel)
   ↓
8. Sylvie importe CSV SAGE dans Excel Import_SAGE (RESSAISIE)
   ↓
9. MDE export heures/matériel (CSV manuel)
   ↓
10. Sylvie importe CSV MDE dans Excel Import_MDE (RESSAISIE)
    ↓
11. Sylvie copie-colle données dans KPI_Master (RESSAISIE)
    ↓
12. Sylvie calcule marges manuellement (formules Excel)
    ↓
13. Sylvie copie-colle résultats dans Excel Marges_RA (RESSAISIE)
    ↓
14. Sylvie génère rapport PDF pour direction (manuel)

TOTAL : 14 étapes dont 8 RESSAISIES MANUELLES
TEMPS : 4-5h pour UNE affaire
ERREURS : 15-20% (fatigue, typos, oublis)
```

**Problème** : **Triple/quadruple saisie même donnée** (Client, Affaire, Montants, Heures, Matériel)

**Coût** : Temps perdu + erreurs = **120 000€/an**

---

### 3. Processus Manuels - 80% Sans Automation

#### Processus 100% Manuels Identifiés

| Processus | Fréquence | Temps unitaire | Temps total/an | Coût/an |
|-----------|-----------|----------------|----------------|---------|
| Consolidation KPI mensuels | 12×/an | 24h | 288h | 17 000€ |
| Réception stocks (comptage) | 250j × 20 BL | 25 min | 2 083h | 70 000€ |
| Planning BE mise à jour | 50 sem | 3h | 150h | 9 000€ |
| Inventaires mensuels | 12×/an | 16h | 192h | 7 000€ |
| Validation fiches produits | 200×/an | 1h | 200h | 12 000€ |
| Rapprochements Excel | 12×/an | 12h | 144h | 9 000€ |
| Génération rapports direction | 12×/an | 8h | 96h | 6 000€ |
| Relances litiges | Continu | - | 150h | 9 000€ |
| **TOTAL** | | | **3 303h** | **139 000€** |

**80% de ces processus pourraient être automatisés** → Gain potentiel **110 000€/an**

---

### 4. Aucune Remontée Info Temps Réel

#### Délais Remontée Information

| Information | Délai actuel | Délai souhaité | Impact retard |
|-------------|--------------|----------------|---------------|
| Heures chantier | J+7 (fin semaine) | Temps réel | Détection dépassement tardive |
| Réception BL | J+2 à J+5 | Temps réel | Facturation retardée |
| Budget consommé | J+30 (fin mois) | Temps réel | Dépassements non anticipés |
| KPI marges | J+15 (clôture) | Temps réel | Décisions direction retardées |
| Anomalies chantier | J+7 à J+30 | J+0 | Escalade problèmes |
| Stock disponible | J+1 (inventaire) | Temps réel | Commandes inutiles |

**Impact** : Décisions basées sur données **périmées** → **Réaction** vs **Anticipation**

**Coût estimé** : **120 000€/an** (dépassements non anticipés, opportunités manquées)

---

### 5. Dépendance Personnes Clés - Risque Succession

#### Points de Fragilité

**Sylvie (Contrôleuse Gestion)** :
- **Seule personne** qui comprend système Excel complet
- **Si absente** (congés, maladie, départ) :
  - KPI non produits
  - Reporting direction bloqué
  - Clôtures mensuelles impossibles
- **Succession impossible** : 6-12 mois formation nécessaire pour comprendre système
- **Risque départ** : 52 ans, retraite d'ici 10 ans, aucun backup formé

**Coût risque** : Départ Sylvie = **6-12 mois chaos** = **300 000€ à 600 000€**

**Thomas (BE)** :
- **Seul à gérer priorisation demandes** BE (subjectif, pas transparent)
- Si absent : Demandes non traitées, conflits interpersonnels

**Isabelle (Stocks)** :
- **Seule à comprendre valorisation stocks** (Excel complexe)
- Si absente : Inventaires bloqués, valorisations fausses

---

### 6. Systèmes Obsolètes - ERP MDE

#### MDE (ERP Actuel)

**Problèmes identifiés** :
- ⚠️ **Obsolète** : Version 15+ ans, plus maintenue éditeur
- ⚠️ **Lent** : Chargement écrans 10-30 secondes
- ⚠️ **Connexion distance TRÈS LENTE** : Inutilisable (télétravail impossible)
- ⚠️ **Plantages fréquents** : 2-3×/semaine
- ⚠️ **Impression PDF "bof"** : Génération rapports problématique
- ⚠️ **UI/UX datée** : Interface années 2000
- ⚠️ **Pas de mobile** : Aucune app terrain
- ⚠️ **APIs limitées** : Intégrations complexes/impossibles
- ⚠️ **Support défaillant** : Éditeur ne répond plus

**Impact** :
- Productivité réduite : **40%** (attentes, plantages, lenteurs)
- Télétravail impossible : **Flexibilité RH réduite**
- Mobilité terrain impossible : **Processus papier persistent**

**Coût estimé** : **150 000€/an** (temps perdu + opportunités manquées)

#### SAGE (Comptabilité/Devis)

**Problèmes** :
- ⚠️ **Impossible ouvrir 2 fichiers simultanément** : Blocage collaboratif
- ⚠️ **Recherche références compliquée** : 3-5 min vs 10 sec souhaité
- ⚠️ **Création titres/sous-titres devis compliqués** : Processus fastidieux
- ⚠️ **Pas d'intégration MDE** : Double saisie client, affaire

**Coût estimé** : **50 000€/an**

#### LIRECO (Stocks)

**Points positifs** :
- ✅ Gestion stock temps réel (si saisies à jour)
- ✅ Alertes ruptures
- ✅ Codes-barres partiels

**Problèmes** :
- ⚠️ **Isolé** : Aucune intégration SAGE/MDE
- ⚠️ **Recherche compliquée** : Pas de suggestions intelligentes
- ⚠️ **Pas de valorisation** : Excel en parallèle (Isabelle)
- ⚠️ **Réception manuelle** : Comptage papier → saisie Lireco

**Coût estimé** : **30 000€/an** (temps perdu)

---

### 7. Aucune Transparence Données - Silos Hiérarchiques

#### Qui a Accès à Quoi ?

| Données | Direction | Sylvie | RA | Chef Chantier | Technicien |
|---------|-----------|--------|----|--------------| -----------|
| **KPI globaux** | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Marges affaires** | ✅ | ✅ | ✅ (la sienne) | ❌ | ❌ |
| **Budget chantier** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Consommé budget** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Reste à faire** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Heures équipe** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Stock disponible** | ✅ | ✅ | Partiel | ❌ | ❌ |

**Problème** : **Chef chantier pilote SANS visibilité** sur :
- Budget alloué son chantier
- Budget déjà consommé
- Reste à faire
- Est-il dans les clous ou pas ?

**Impact** :
- **Démotivation** : "On ne me dit rien, je ne suis pas responsabilisé"
- **Décisions sans contexte** : Commande sans savoir si budget OK
- **Culture du secret** : Méfiance vs confiance
- **Turnover** : Chef chantier part pour entreprises plus transparentes

**Coût RH** : Turnover +10% = **60 000€/an**

---

### 8. Aucun Système Tickets - Surcharge Bureau Études

#### Gestion Demandes BE Actuelle

**Canaux demandes** (non structurés) :
- 📧 **Mails** : 60% des demandes (format libre, priorité subjective)
- 📞 **Téléphone** : 25% (aucune traçabilité)
- 💬 **WhatsApp** : 10% (informel, perdu)
- 🚶 **Passage bureau** : 5% ("T'as 2 minutes ?")

**Processus actuel Thomas** :
1. Lundi 8h : 15 mails "URGENT" reçus weekend
2. Thomas lit tous, estime temps, **décide subjectivement** lesquels prioriser
3. Critères priorisation **non objectifs** :
   - Celui qui crie le plus fort
   - Collègue qu'il aime bien
   - Dernière demande reçue (effet récence)
   - Pression hiérarchique
4. Autres demandeurs **frustrés** : "Pourquoi lui avant moi ?"
5. Thomas **débordé** : 220h demandes vs 160h capacité = **60h/sem non traitées**

**Problème** : **Aucune équité, aucune transparence, surcharge garantie**

**Impact** :
- **Conflits interpersonnels** : Tensions entre demandeurs
- **Retards études** : Impact planning chantiers
- **Risque burn-out Thomas** : Surcharge chronique
- **Turnover BE** : 2 départs 2024, difficultés recrutement

**Coût** : **120 000€/an** (retards + tensions + turnover)

---

### 9. Valorisation Stocks Chaotique - 2 Prix Même Produit

#### Exemple Concret Incohérence

**Disjoncteur ref ABC123** :
```
Stock Annecy :
- Lot 1 (janv 2024) : 50 unités @ 25€/u = 1 250€
- Lot 2 (mars 2024) : 50 unités @ 22€/u (promo) = 1 100€
- Lot 3 (juin 2024) : 30 unités @ 24€/u = 720€
TOTAL stock : 130 unités, valeur totale : 3 070€

Sortie chantier (10 unités) :
- Magasinier A valorise @ 25€ = 250€
- Magasinier B valorise @ 22€ = 220€
- Isabelle (Excel) valorise CUMP @ 23,62€ = 236€

QUELLE EST LA BONNE VALEUR ? Personne ne sait.
```

**Causes** :
- ❌ **Aucune politique valorisation** définie (FIFO ? LIFO ? CUMP ?)
- ❌ **Lireco ne gère pas** : Valorisation Excel Isabelle
- ❌ **Excel valorisation complexe** : Formules imbuvables, erreurs fréquentes
- ❌ **Chaque magasinier sa méthode** : Incohérences garanties

**Impact** :
- **Stocks bilans faux** : ±15% écarts auditeur externe
- **Marges chantiers fausses** : Si prix stock faux → marge fausse
- **Stock sous-utilisé** : RA ne sait pas quel prix → commande neuf "pour éviter problèmes"
- **Obsolescence** : Produits anciens non écoulés → pertes

**Coût** : **210 000€/an**

---

## 💰 COÛT TOTAL ARCHITECTURE CHAOS ACTUELLE

### Récapitulatif Impacts Financiers

| Problème Architecture | Coût Annuel |
|-----------------------|-------------|
| 1. Excel omniprésent (30+ fichiers) | 30 000€ |
| 2. Silos données (ressaisies multiples) | 120 000€ |
| 3. Processus manuels (80% sans automation) | 110 000€ |
| 4. Remontée info tardive (J+15 vs temps réel) | 120 000€ |
| 5. Dépendance personnes (risque succession) | 50 000€ |
| 6. ERP MDE obsolète | 150 000€ |
| 7. SAGE limitations | 50 000€ |
| 8. LIRECO isolé | 30 000€ |
| 9. Aucune transparence (silos hiérarchiques) | 60 000€ |
| 10. Pas système tickets BE | 120 000€ |
| 11. Valorisation stocks chaotique | 210 000€ |
| 12. Réception manuelle stocks | 95 000€ |
| 13. Inventaires manuels | 30 000€ |
| **TOTAL ARCHITECTURE CHAOS** | **1 175 000€/an** |

*Note : Cohérent avec impact personas (1 181 500€) - légère différence due périmètres*

---

## 🎯 SYNTHÈSE

### Architecture Actuelle = **CHAOS ORGANISATIONNEL**

**Caractéristiques** :
- ❌ **Excel roi** : 30+ fichiers, aucune intégration
- ❌ **Silos partout** : Données, systèmes, personnes
- ❌ **Manuel massif** : 80% processus sans automation
- ❌ **Aucune transparence** : Info réservée direction
- ❌ **ERP obsolète** : MDE 15 ans, plus maintenu
- ❌ **Fragilité extrême** : Dépendance Sylvie
- ❌ **Pas temps réel** : Données J-15
- ❌ **Incohérences** : Stocks, KPI, marges

**Conséquences** :
- 🔴 **Décisions retardées** : Direction pilote avec données périmées J-15
- 🔴 **Dépassements budgets** : Détectés trop tard (J+30)
- 🔴 **Surcharge équipes** : Sylvie 60-70h/sem fin mois, Thomas débordé
- 🔴 **Turnover** : Chef chantier, BE (démotivation, manque transparence)
- 🔴 **Risque succession** : Départ Sylvie = 6-12 mois chaos
- 🔴 **Croissance impossible** : Système ne scale pas

**Verdict** : **REFONTE COMPLÈTE NÉCESSAIRE**

---

## 📌 PROCHAINE ÉTAPE

**Journey Maps** : Visualiser parcours utilisateurs concrets dans ce chaos
- Sylvie : Génération KPI mensuels (24h calvaire)
- Thomas : Gestion demandes BE (journée débordement)
- Isabelle : Réception stocks + inventaire mensuel (pénibilité)

---

**Date création** : 2025-11-17
**Version** : v1.0
