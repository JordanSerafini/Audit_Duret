# 🏗️ ARCHITECTURE ACTUELLE - Albertville (État des Lieux Chaos)
**Duret Électricité - Site Albertville - Chantiers Moyens & Gros**

---

## 🎯 RÉSUMÉ EXÉCUTIF

**État actuel : CHAOS ORGANISÉ**
- 🔴 Systèmes multiples non connectés
- 🔴 Excel omniprésent (15+ fichiers)
- 🔴 Processus manuels chronophages
- 🔴 Pas de traçabilité digitale
- 🔴 Données éparpillées, silos

**Conséquence : 325 000€/an de pertes**

---

## 🖥️ CARTOGRAPHIE SYSTÈMES ACTUELS

### Vue d'Ensemble

```
┌─────────────────────────────────────────────────────────────────┐
│                    SITE ALBERTVILLE - ARCHITECTURE ACTUELLE      │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│   LOGICIELS      │      │    EXCEL x15+    │      │   COMMUNICATION  │
│    MÉTIERS       │      │   (OneDrive)     │      │                  │
├──────────────────┤      ├──────────────────┤      ├──────────────────┤
│                  │      │                  │      │                  │
│ • Sage          │      │ • Véhicules      │      │ • Téléphone      │
│   (Chiffrage)   │      │ • CONSUEL        │      │ • Email          │
│                  │      │ • Salles         │      │ • Teams          │
│ • MDE           │      │ • Logements      │      │ • Papier/BL      │
│   (Affaires)    │      │ • Événements     │      │                  │
│                  │      │ • Planning       │      │                  │
│ • Lireco        │◄────►│ • Commandes      │◄────►│                  │
│   (Stock)       │      │ • Sous-traitance │      │                  │
│                  │      │ • Pneus          │      │                  │
│ • Fieldwire     │      │ • Pollution      │      │                  │
│   (Suivi        │      │ • Réservations   │      │                  │
│    chantier)    │      │ • ...            │      │                  │
│                  │      │                  │      │                  │
│ • Hilti         │      │ NO INTÉGRATION   │      │ PAS DE TRACE     │
│   (Géré)        │      │ ENTRE FICHIERS   │      │ DIGITALE         │
│                  │      │                  │      │                  │
└──────────────────┘      └──────────────────┘      └──────────────────┘
        ▲                         ▲                         ▲
        │                         │                         │
        └─────────────────────────┴─────────────────────────┘
                            PAS D'APIs
                         PAS DE SYNC AUTO
                    MULTIPLES RE-SAISIES (6-7x)
```

---

## 📱 DÉTAIL PAR SYSTÈME

### 1. SAGE (Chiffrage & Devis)

**Usage :** Quotidien
**Utilisateurs :** Pierre (RA), Thomas (RA), Direction
**Version :** (Non précisée - probablement vieillissante)

#### ✅ Points Positifs
- Connu de l'équipe (maîtrise technique)
- Historique données important
- Fonctions chiffrage existantes

#### ❌ Limitations Critiques

**🔴 Pas de multi-utilisateurs simultanés**
```
Scénario typique:
09h00 - Pierre ouvre fichier devis "Chantier_Albertville_2025"
09h15 - Thomas veut accéder → BLOQUÉ
       "Fichier déjà ouvert par un autre utilisateur"
       → Thomas attend... ou abandonne
11h30 - Pierre ferme
11h31 - Thomas peut enfin ouvrir
```
- **Impact :** Productivité -30%, frustration quotidienne

**🔴 Recherche références catastrophique**
```
Recherche "câble H07" :
→ Temps : 3-5 minutes (vs <10 sec attendu)
→ Résultats : 47 références (doublons, obsolètes)
→ Tri manuel : Impossible de filtrer par fournisseur, prix, stock
→ Risque : Mauvaise référence sélectionnée
```
- **Impact :** 10-15 recherches/jour × 4 min = 1h/jour perdue = 25K€/an

**🔴 Création titres/sous-titres complexe**
```
Pour ajouter un titre dans devis :
1. Clic droit ligne
2. Insérer → Titre (parfois plante)
3. Saisie texte
4. Mise en forme manuelle
5. Alignement (aléatoire)
→ Temps : 2-3 min par titre

Pour ajustement prix rapide :
→ Besoin 2 références qui s'additionnent (au lieu d'1 seule)
→ Complexité inutile
```
- **Impact :** Devis moins lisibles, temps perdu structuration

**🔴 Extraction devis → Suivi compliquée**
```
Processus actuel situations mensuelles :
1. Exporter devis depuis Sage (format PDF ou Excel)
2. Ouvrir Excel séparé "Suivi_Chantier_X"
3. RE-SAISIR manuellement lignes (copier-coller plante)
4. Réorganiser par famille (main d'œuvre mal organisée)
5. Calculer reste à faire (formules Excel manuelles)
6. Générer situation (Word ou autre outil)
→ Temps total : PLUSIEURS JOURS/mois
```
- **Impact :** 120K€/an (temps + trésorerie bloquée)

**🟡 Feuille de vente existe mais mal accessible**
- Existe dans Sage mais sur autre onglet
- Pas d'accès rapide
- **Besoin :** Intégrer pour accès en 1 clic

#### 🔗 Intégrations
- ❌ Aucune API exposée
- ❌ Export manuel uniquement
- ⚠️ Coexistence nécessaire (historique lourd)

---

### 2. MDE (Gestion Affaires)

**Usage :** Quotidien
**Utilisateurs :** Thomas (RA), Pierre (RA), Compta
**Rôle :** Suivi affaires, situations, facturation

#### ✅ Points Positifs
- Données affaires centralisées
- Intégration comptabilité existante

#### ❌ Limitations Critiques

**🔴 Budgets complémentaires invisibles**
```
Scénario validation CA complémentaire :
Thomas valide +15K€ de débours complémentaire
→ MDE enregistre le CA
→ MAIS impossible de savoir :
   • À quoi correspond ce +15K€ ?
   • Lien avec quel devis RA ?
   • Budget initial était combien ?
   • Marge impactée comment ?

Vue MDE actuelle :
┌─────────────────────────────────┐
│ Chantier : Albertville_2025_042 │
│ CA : 185 000€                   │
│ Débours : 142 000€              │
│                                 │
│ ❌ Budget initial : ???         │
│ ❌ Budgets complémentaires : ???│
│ ❌ Détail par poste : ???       │
└─────────────────────────────────┘
```
- **Impact :** Pilotage marge à l'aveugle, risque dépassement

**🔴 Traitement situations mensuelles extrêmement long**
- Pas d'extraction automatisée
- Organisation par famille inadaptée (main d'œuvre++)
- Pas de fichier suivi détaillé par tâche
- **Temps :** Plusieurs jours/mois → bloque RH/Compta

#### 🔗 Intégrations
- ✅ Comptabilité (interface existante)
- ❌ Pas de connexion Sage (re-saisie manuelle)
- ❌ Pas d'API pour extractions

---

### 3. LIRECO (Gestion Stock)

**Usage :** Quotidien
**Utilisateurs :** Sophie (Assistante), Magasiniers
**Rôle :** Stock temps réel, alertes, commandes codes-barres

#### ✅ Points Positifs (BIEN PERÇU !)
- ✅ Stock temps réel fonctionnel
- ✅ Alertes stock bas
- ✅ Commandes avec codes-barres
- ✅ Suivi références efficace
- ✅ Interface appréciée utilisateurs

#### ❌ Limitations
- 🟡 Pas d'intégration BL chantiers (remontée manuelle)
- 🟡 Pas de connexion Sage/MDE

**💡 Opportunité :**
- **À CONSERVER et INTÉGRER** dans écosystème
- APIs à explorer pour connexions
- Modèle pour autres outils (ergonomie appréciée)

---

### 4. FIELDWIRE (Suivi Chantier)

**Usage :** Régulier
**Utilisateurs :** 7 personnes
- 3 Responsables Affaires
- 1 Chef Projet
- 1 Directeur
- 1 Conducteur
- Charles R2A

**Rôle :** Suivi avancement chantiers, plans, annotations

#### ✅ Points Positifs
- ✅ Outil métier reconnu BTP
- ✅ Adopté par équipe
- ✅ Mobile-friendly

#### ❌ Limitations
- 🟡 Pas d'intégration Sage/MDE (silo)
- 🟡 Pas de remontée auto données vers gestion

**💡 Opportunité :**
- **À INTÉGRER** dans architecture cible
- Exploiter APIs Fieldwire pour dashboards consolidés

---

### 5. HILTI

**Usage :** Géré (détails non précisés audit)
**Rôle :** Probablement gestion outillage/location

**Statut :** Peu d'infos, considéré comme "géré"

---

## 📊 EXCEL : L'ÉPINE DORSALE FRAGILE

### Les 15+ Fichiers Excel Identifiés

```
┌─────────────────────────────────────────────────────────────────┐
│                  JUNGLE EXCEL - ALBERTVILLE                      │
└─────────────────────────────────────────────────────────────────┘

ADMINISTRATIF (Sophie) :
├─ Suivi_Vehicules_Albertville.xlsx
│  ├─ Onglet : Entrées/Sorties
│  ├─ Onglet : Pollution (émissions CO2, contrôles)
│  ├─ Onglet : Pneus (changements, usure)
│  └─ Onglet : Réservations (planning partagé)
│
├─ CONSUEL_Suivi_2025.xlsx
│  └─ Colonnes : Chantier, Date demande, Statut, Échéance, Responsable
│
├─ Gestion_Salles_Reunion.xlsx
│  └─ Planning réservations (conflits fréquents)
│
├─ Demandes_Logement_GrandsDéplacements.xlsx
│  └─ Colonnes : Collaborateur, Chantier, Dates début/fin, Hôtel, Budget
│
├─ Organisation_Evenements.xlsx
│  ├─ Onglet : Journées collaborateurs
│  ├─ Onglet : Planning individuel
│  └─ Onglet : Repas
│
└─ Planning_Hebdomadaire_Albertville.xlsx
   └─ Envoi tous les vendredis (+ hors aléas)
      → Temps compilation : 3-4h chaque semaine

OPÉRATIONNEL (Thomas, Pierre) :
├─ Gestion_Commandes_Chantier_X.xlsx (× N chantiers)
│  └─ Colonnes : Date, Référence, Quantité, Fournisseur
│     ❌ PAS DE PRIX AFFICHÉS lors validation
│
├─ Contrats_SousTraitance_2025.xlsx
│  └─ Colonnes : Société, Chantier, Montant, Dates, Statut
│     ❌ PAS DE CHECKLIST pièces à demander
│     ❌ PAS D'ALERTES renouvellement
│
└─ (autres fichiers suivi par chantier/affaire)
```

### Problèmes Structurels

**🔴 Pas d'intégration entre fichiers**
```
Exemple scénario réel :
1. Sophie réserve véhicule dans "Suivi_Vehicules"
2. Thomas planifie chantier dans "Planning_Hebdo"
3. ❌ Aucune connexion entre les 2
→ Risque : Véhicule réservé mais pas dispo
→ Découverte : Lundi matin sur chantier (trop tard)
```

**🔴 Versions multiples (OneDrive désynchronisé)**
```
Version locale Pierre ≠ Version OneDrive ≠ Version locale Thomas
→ Conflits fréquents
→ "Fichier_Conflit_2025-11-12.xlsx"
→ Quelle est la bonne version ?
```

**🔴 Pas de validation/workflow**
```
Qui peut modifier quoi ?
→ Réponse : Tout le monde peut tout modifier
→ Résultat : Erreurs, écrasements accidentels
```

**🔴 Pas d'historique/traçabilité**
```
Question : Qui a modifié la réservation salle le 15/10 ?
Réponse : ¯\_(ツ)_/¯ (impossible à savoir)
```

**🔴 Formules cassées fréquemment**
```
Tri colonnes → formules décalées → calculs faux
→ Découverte semaines plus tard
→ Décisions prises sur données erronées
```

---

## 📞 COMMUNICATION : 100% ARCHAÏQUE

### Flux Communication Actuel

```
┌─────────────────────────────────────────────────────────────────┐
│              FLUX COMMUNICATION - COMMANDE CHANTIER              │
└─────────────────────────────────────────────────────────────────┘

ÉTAPE 1 : Demande Chantier
Laurent (Chef Chantier)
    │
    │ 📞 TÉLÉPHONE (ou email)
    ▼
Sophie (Assistante) / Thomas (RA)
    │ ❌ PAS DE TRACE DIGITALE
    │ ❌ PAS DE VALIDATION FORMELLE
    │ ✍️ Note sur post-it ou brouillon papier
    │

ÉTAPE 2 : Saisie Commande
Thomas (RA)
    │
    │ 💻 Saisie Excel "Commandes_Chantier_X"
    │ ❌ PAS DE PRIX VISUALISÉS
    │ ❌ PAS D'ALERTES BUDGET
    ▼
Excel OneDrive (sauvegarde)

ÉTAPE 3 : Passage Commande
Thomas
    │
    │ 📞 TÉLÉPHONE Fournisseur (Rexel, Sonepar...)
    │ OU
    │ 📧 EMAIL (copier-coller Excel → Email)
    ▼
Fournisseur
    │ RE-SAISIE côté fournisseur
    │ ❌ PAS D'EDI
    │ ❌ PAS D'API
    │

ÉTAPE 4 : Confirmation
Fournisseur
    │
    │ 📧 EMAIL confirmation (parfois)
    ▼
Thomas
    │
    │ 📧 EMAIL → Laurent (Chef Chantier)
    │ "Commande passée"
    │ ❌ Mais aucune info réception après
    ▼
Laurent
    │ ❓ "C'est arrivé ?"
    │ 📞 Appels multiples au bureau
    │ Stress quotidien

ÉTAPE 5 : Réception Chantier
Livraison arrive sur chantier
Laurent
    │
    │ 📄 BL PAPIER
    │ ✍️ Coche quantités manuellement
    │ 📷 Photo BL (smartphone perso parfois)
    ▼
BL papier → Bureau (transport physique)

ÉTAPE 6 : Saisie Bureau
Sophie / Admin
    │
    │ 💻 RE-SAISIE dans Sage/MDE
    │ ⏱️ DÉLAI : 2-5 jours après réception réelle
    │ ❌ ERREURS saisie fréquentes
    ▼
Sage/MDE (enfin à jour...)

BILAN :
• 6-7 RE-SAISIES du début à la fin
• DÉLAI total : 3-7 jours
• TAUX ERREUR : 50% (commandes incomplètes/erronées)
• TRAÇABILITÉ : ❌ Aucune digitale
```

### Impact Communication Archaïque

| Problème | Fréquence | Impact |
|----------|-----------|--------|
| **Appels téléphoniques** | 15-20/jour | Pas de trace, interruptions |
| **Emails non structurés** | 30-40/jour | Informations perdues, pas de workflow |
| **BL papier** | 100% livraisons | Délai remontée 2-5 jours, erreurs saisie |
| **Re-saisies multiples** | 6-7x par commande | Temps perdu, risque erreurs |
| **Pas de notifications auto** | - | Relances manuelles permanentes |

**Coût estimé :** 90 000€/an (temps + erreurs + frustration)

---

## 🚫 LES 10 IMPOSSIBILITÉS ACTUELLES

### 1. ❌ Impossible de suivre budgets complémentaires
**Besoin :** Voir budget initial + complémentaires côte à côte
**Réalité :** Budgets complémentaires invisibles dans MDE
**Impact :** Pilotage marge à l'aveugle

### 2. ❌ Impossible de traiter situations rapidement
**Besoin :** Situations mensuelles en quelques heures
**Réalité :** Plusieurs jours de travail, équipes bloquées
**Impact :** Facturation retardée, trésorerie impactée

### 3. ❌ Impossible de savoir si livraison arrivée en temps réel
**Besoin :** Notification temps réel réception chantier
**Réalité :** BL papier → 2-5 jours avant saisie Sage
**Impact :** Chefs chantier appellent 5x "c'est arrivé ?"

### 4. ❌ Impossible de rechercher références efficacement
**Besoin :** Recherche <10 sec avec filtres avancés
**Réalité :** 3-5 min, résultats chaotiques, doublons
**Impact :** 1h/jour perdue = 25K€/an

### 5. ❌ Impossible de valider commandes avec visibilité prix
**Besoin :** Prix affichés AVANT validation, alertes écarts
**Réalité :** Excel sans prix, validation aveugle
**Impact :** Dépassements budget non détectés

### 6. ❌ Impossible de travailler à plusieurs simultanément
**Besoin :** Multi-utilisateurs sur même fichier
**Réalité :** Sage 1 fichier à la fois, blocages quotidiens
**Impact :** Productivité -30%, frustration

### 7. ❌ Impossible de standardiser chiffrages
**Besoin :** Bibliothèque prix m², diviseurs, méthodologie
**Réalité :** Chaque chiffreur fait à sa sauce
**Impact :** Écarts énormes entre chiffrages, imprécisions

### 8. ❌ Impossible de centraliser données Excel
**Besoin :** Plateforme unique, intégrée
**Réalité :** 15+ Excel silos, pas de connexions
**Impact :** Multiples saisies, incohérences

### 9. ❌ Impossible de tracker délais devis
**Besoin :** Rappels auto si devis non traité J+2
**Réalité :** Suivi manuel, devis oubliés 1 semaine
**Impact :** Opportunités perdues, clients relancent

### 10. ❌ Impossible de gérer accès extérieurs sécurisés
**Besoin :** RBAC, accès distant, audit trail
**Réalité :** Pas de gestion droits, accès VPN compliqué
**Impact :** Risques sécurité, difficultés télétravail

---

## 💰 COÛT DU CHAOS ACTUEL

### Répartition par Catégorie

| Catégorie | Coût/an | % Total |
|-----------|---------|---------|
| **Situations mensuelles longues** | 120 000€ | 37% |
| **Remontée BL manuelle** | 80 000€ | 25% |
| **Budgets invisibles** | 30 000€ | 9% |
| **Délais devis** | 30 000€ | 9% |
| **Recherche références** | 25 000€ | 8% |
| **Excel multiples** | 15 000€ | 5% |
| **Commandes sans prix** | 10 000€ | 3% |
| **Chiffrage non standardisé** | 10 000€ | 3% |
| **Autres** | 5 000€ | 1% |
| **TOTAL** | **325 000€** | **100%** |

### Détail Temps Perdu

| Activité | Temps Actuel | Temps Cible | Gain Potentiel |
|----------|--------------|-------------|----------------|
| **Situations mensuelles** | Plusieurs jours | <4h | 95% |
| **Remontée BL** | 2-5 jours | Temps réel | 100% |
| **Recherche référence** | 3-5 min | <30 sec | 90% |
| **Création devis** | X heures | -30% | 30% |
| **Planning hebdo** | 3-4h | Auto | 100% |
| **Validation commandes** | 15 min | 5 min | 67% |

**Temps total récupérable :** ~800 heures/an = 0.5 ETP

---

## 🔗 DÉPENDANCES & INTÉGRATIONS MANQUANTES

### Schéma Intégrations Manquantes

```
                     ❌ PAS D'INTÉGRATIONS ❌

    Sage          MDE         Lireco      Fieldwire      Excel x15
     │             │             │            │             │
     │             │             │            │             │
     └─────────────┴─────────────┴────────────┴─────────────┘
                            ▼
                    SILOS DE DONNÉES
                            ▼
                    RE-SAISIES x6-7
                            ▼
                   ERREURS + DÉLAIS
                            ▼
                    325K€/an PERDUS
```

### Intégrations Prioritaires Nécessaires

1. **Sage ↔ MDE** : Extraction auto devis → situations
2. **Sage ↔ Plateforme** : Recherche unifiée, catalogues
3. **MDE ↔ Dashboards BI** : Budgets temps réel
4. **Lireco ↔ App Mobile** : Remontée BL digitalisée
5. **Fieldwire ↔ Dashboards** : Consolidation avancement
6. **Excel → Plateforme** : Migration données vers système unique

---

## ✅ CONCLUSION

### État Actuel : CHAOS COÛTEUX

**Diagnostic :**
- 🔴 Architecture fragmentée (5 logiciels + 15 Excel + communication archaïque)
- 🔴 Aucune intégration entre systèmes
- 🔴 Processus 100% manuels (re-saisies x6-7)
- 🔴 Pas de traçabilité digitale
- 🔴 Données éparpillées, silos
- 🔴 Impossible de piloter en temps réel

**Impact Mesuré :**
- 💰 325 000€/an de pertes
- ⏱️ ~800h/an de temps perdu
- 😫 Stress quotidien équipes
- 📉 Opportunités commerciales perdues
- ⚠️ Risques conformité (CONSUEL, RGPD...)

### Urgence Transformation

**Top 3 Priorités :**
1. 🚨 **Situations mensuelles** → Automatisation (120K€/an à récupérer)
2. 🚨 **Remontée BL** → Mobile QR Code (80K€/an à récupérer)
3. 🚨 **Budgets** → Dashboards temps réel (30K€/an à récupérer)

**Approche Recommandée :**
- ✅ Intégrations progressives (pas de big-bang)
- ✅ Conservation outils appréciés (Lireco, Fieldwire)
- ✅ Coexistence Sage (transition douce)
- ✅ Remplacement progressif Excel par plateforme
- ✅ Quick Wins M1-6 puis structuration

---

**📅 Document créé :** 2025-11-18
**🎯 Objectif :** Cartographier architecture actuelle pour préparer transformation
**💰 Coût chaos :** 325 000€/an
**⚡ Gains potentiels :** 690K€/an (après 24 mois transformation)
