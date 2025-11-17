# 🗺️ PARCOURS UTILISATEURS - Journey Maps Achats-Logistique

> Documentation des parcours typiques des utilisateurs dans le système ACTUEL (chaos)
> Focus: PAIN POINTS existants, pas de solutions proposées

---

## 📋 TABLE DES MATIÈRES

1. [Journey Map: Marc - Commander du matériel sur chantier](#journey-marc)
2. [Journey Map: Sylvie - Traiter une commande](#journey-sylvie)
3. [Journey Map: Éric - Réceptionner une livraison](#journey-eric)
4. [Journey Map: Julien - Suivre les coûts d'une affaire](#journey-julien)
5. [Timeline comparée: Une commande de câble](#timeline-cable)

---

## 🔨 Journey Map: Marc - Commander du matériel sur chantier {#journey-marc}

**Scénario**: Marc a besoin de 50m de câble 3G2.5 pour finir une installation
**Durée totale**: 3 jours
**Stress level**: 🔴🔴🔴 Critique

```
LUNDI 9:00 - Besoin identifié
│
│  Sentiment: 😐 Neutre
│  Pensée: "J'ai besoin de câble pour finir le chantier"
│  Action: Regarde dans son camion
│
├─ 9:05 - Pas de stock
│  Sentiment: 😟 Légère inquiétude
│  Pensée: "Je vais devoir commander..."
│  Pain Point: 🔴 Pas de visibilité stock en temps réel
│
├─ 9:10 - Cherche le bon de commande papier
│  Sentiment: 😤 Irritation
│  Pensée: "Où j'ai mis le dernier bon..."
│  Action: Fouille dans le camion
│  Pain Point: 🔴 Support papier uniquement
│  Temps perdu: 5 minutes
│
├─ 9:15 - Remplit le bon à la main
│  Sentiment: 😠 Frustration
│  Pensée: "Câble... c'est quoi la référence déjà ?"
│  Action: Écrit "câble 3G2.5" (référence imprécise)
│  Pain Point: 🔴 Pas d'accès au catalogue
│  Risque: ❌ Commande erronée
│
├─ 9:20 - Essaie de joindre Sylvie
│  Sentiment: 😰 Anxiété montante
│  Action: Appel téléphonique
│  Résultat: Pas de réponse (en réunion)
│  Pain Point: 🔴 Pas de canal asynchrone
│  Temps perdu: 10 minutes (plusieurs tentatives)
│
├─ 9:30 - Envoie un SMS
│  Sentiment: 😫 Résignation
│  Pensée: "J'espère qu'elle verra ça..."
│  Pain Point: 🔴 Pas de système de notification
│  Incertitude: ❓ Quand sera-ce traité ?
│
├─ 10:45 - Rappelle Sylvie
│  Sentiment: 😤 Irritation croissante
│  Action: Nouveau appel
│  Résultat: ✅ Elle répond
│  Temps perdu cumulé: 1h15
│
├─ 10:50 - Donne la commande verbalement
│  Sentiment: 😓 Fatigue
│  Dialogue:
│    Marc: "J'ai besoin de câble 3G2.5, 50m"
│    Sylvie: "Quelle référence ?"
│    Marc: "Euh... le câble habituel quoi"
│    Sylvie: "Il y en a 12 dans Sage..."
│  Pain Point: 🔴 12 références pour même produit
│  Risque: ❌ Confusion, erreur de commande
│
└─ 11:00 - Fin de l'appel
   Sentiment: 😞 Découragement
   Pensée: "Pourquoi c'est si complcompliqué..."
   Incertitude: ❓ Est-ce que ce sera le bon ?
   Résultat: ⏸️ Chantier bloqué en attendant

═══════════════════════════════════════════════════

MARDI 14:00 - Relance
│
├─ 14:00 - Rappelle pour le suivi
│  Sentiment: 😠 Colère
│  Pensée: "Toujours rien..."
│  Pain Point: 🔴 Aucune visibilité sur l'avancement
│  Temps perdu: 15 minutes au téléphone
│
└─ 14:15 - Apprend que la commande est "en cours"
   Sentiment: 😤 Frustration maximale
   Résultat: ⏸️ Doit attendre encore

═══════════════════════════════════════════════════

MERCREDI 16:00 - Livraison
│
├─ 16:00 - Le fournisseur livre... le mauvais câble
│  Sentiment: 🤬 Rage
│  Pensée: "C'est pas possible !!!"
│  Pain Point: 🔴 Commande erronée (mauvaise référence)
│  Impact: ⛔ Chantier bloqué 3 jours
│  Perte financière: 2,400€ (3j × 800€/jour)
│
└─ 16:30 - Doit recommencer tout le processus
   Sentiment: 😭 Désespoir
   Pensée: "Je vais encore perdre 3 jours..."
   Quote: "À chaque fois c'est la même galère. Je passe
          plus de temps à commander qu'à travailler."
```

### 📊 Métriques du parcours Marc

| Métrique | Valeur |
|----------|--------|
| **Durée totale** | 3 jours |
| **Nombre de contacts** | 5+ (appels, SMS) |
| **Temps perdu** | 1h30 minimum |
| **Taux d'erreur** | 50% (1 commande sur 2) |
| **Coût de l'échec** | 2,400€ |
| **Stress level** | 9/10 |
| **Points de friction** | 8 |
| **Sentiment final** | 😭 Désespoir |

---

## 📦 Journey Map: Sylvie - Traiter une commande {#journey-sylvie}

**Scénario**: Sylvie reçoit la demande de Marc (câble 3G2.5)
**Durée totale**: 2 heures
**Stress level**: 🟠🟠 Important

```
LUNDI 10:45 - Reçoit l'appel de Marc
│
│  Sentiment: 😐 Neutre
│  Action: Décroche
│  Pensée: "Encore une commande urgente..."
│
├─ 10:50 - Note la demande
│  Sentiment: 🤔 Perplexe
│  Action: Écrit sur un post-it
│  Pain Point: 🟠 Pas de formulaire structuré
│  Risque: ❌ Information incomplète
│
├─ 10:51 - "Câble 3G2.5" - quelle référence ?
│  Sentiment: 😰 Inquiétude
│  Pensée: "Il y en a plein dans Sage..."
│  Action: Ouvre Sage MDE
│  Pain Point: 🔴 12 références pour même produit !
│
├─ 10:52 - Cherche dans Sage MDE
│  Sentiment: 😤 Frustration
│  Action: Tape "câble 3G2.5"
│  Résultat: 12 résultats !
│    • CABLE-3G2.5-ROUGE-50M
│    • CBL_3G25_R_50
│    • 3G2.5-CABLE-ROUGE
│    • CABLE_3G_2.5_ROUGE
│    • 3G2,5 CABLE ROUGE 50M
│    • ... et 7 autres variantes
│  Pain Point: 🔴 Base données chaotique
│  Temps perdu: 10 minutes pour trouver "la bonne"
│
├─ 11:02 - Choisit une référence (au hasard ?)
│  Sentiment: 😓 Fatigue
│  Pensée: "Je prends celle-là, ça devrait être bon..."
│  Incertitude: ❓ 40% de chance que ce soit la bonne
│  Pain Point: 🔴 Aucune aide à la décision
│
├─ 11:05 - Vérifie le stock
│  Sentiment: 😟 Inquiétude
│  Action: Regarde dans Sage
│  Résultat: Stock = 12 unités
│  MAIS... Pain Point: 🔴 Stock pas fiable (obsolète)
│  Pensée: "J'espère que c'est juste..."
│
├─ 11:10 - Cherche le fournisseur
│  Sentiment: 😤 Irritation
│  Action: Ouvre Excel "Fournisseurs 2024 FINAL v3.xlsx"
│  Pain Point: 🟠 Données éparpillées (Excel + Sage)
│  Temps perdu: 5 minutes
│
├─ 11:15 - Trouve 3 fournisseurs possibles
│  Sentiment: 🤔 Hésitation
│  Fournisseur A: 120€ (délai ?)
│  Fournisseur B: 115€ (délai ?)
│  Fournisseur C: 125€ (délai ?)
│  Pain Point: 🔴 Pas de comparateur
│  Pain Point: 🔴 Pas d'historique prix
│  Action: Choisit le moins cher (B)
│
├─ 11:20 - Appelle le fournisseur B
│  Sentiment: 😐 Procédure de routine
│  Dialogue: "Bonjour, je voudrais commander..."
│  Résultat: Disponible sous 48h
│  Pain Point: 🔴 Pas de commande en ligne
│  Temps perdu: 15 minutes au téléphone
│
├─ 11:35 - Fournisseur demande un email de confirmation
│  Sentiment: 😮‍💨 Soupir
│  Pain Point: 🔴 Ressaisie des données
│  Action: Ouvre Outlook, écrit l'email
│
├─ 11:40 - Rédige l'email de commande
│  Sentiment: 😓 Lassitude
│  Action: Recopie manuellement:
│    • Référence article
│    • Quantité
│    • Prix
│    • Adresse livraison
│    • Contact chantier
│  Pain Point: 🔴 Re-saisie manuelle (4ème fois !)
│  Temps perdu: 10 minutes
│
├─ 11:50 - Envoie l'email
│  Sentiment: 😌 Petit soulagement
│  Action: Clic "Envoyer"
│
├─ 11:55 - Revient dans Sage pour enregistrer
│  Sentiment: 😤 Frustration
│  Action: Saisit la commande dans Sage
│  Pain Point: 🔴 5ème ressaisie des mêmes données !
│  Temps perdu: 5 minutes
│
├─ 12:00 - Crée une ligne dans Excel de suivi
│  Sentiment: 😓 Épuisement
│  Action: Ouvre "SUIVI_COMMANDES_2024.xlsx"
│  Pain Point: 🔴 6ème ressaisie !!!
│  Pensée: "Je perds ma vie à ressaisir..."
│  Temps perdu: 5 minutes
│
└─ 12:05 - Envoie un SMS à Marc
   Sentiment: 😮‍💨 Soulagement temporaire
   Action: "Commande passée, livraison mercredi"
   Pain Point: 🔴 Pas de notification automatique

═══════════════════════════════════════════════════

MERCREDI 16:30 - Le retour de Marc (mauvais câble)
│
├─ 16:30 - Marc rappelle furieux
│  Sentiment: 😰😰😰 Panique
│  Marc: "C'est pas le bon câble !"
│  Pensée: "Mince... j'ai dû prendre la mauvaise réf..."
│
├─ 16:35 - Vérifie dans Sage
│  Sentiment: 😓 Culpabilité
│  Constat: Effectivement, mauvaise référence
│  Cause: Confusion entre les 12 références
│  Pain Point: 🔴 Base de données chaotique
│
└─ 16:40 - Doit recommencer tout le processus
   Sentiment: 😭 Désespoir
   Pensée: "Je vais encore passer 2h là-dessus..."
   Quote: "Je passe mon temps à corriger des erreurs.
          Le système nous fait perdre un temps fou."
```

### 📊 Métriques du parcours Sylvie

| Métrique | Valeur |
|----------|--------|
| **Durée totale** | 2h00 (puis +2h pour corriger) |
| **Nombre de ressaisies** | 6 fois les mêmes données |
| **Nombre d'outils** | 5 (Téléphone, Post-it, Sage, Excel, Email) |
| **Nombre de clics** | 150+ |
| **Taux d'erreur** | 50% |
| **Temps perdu** | 4h00 au total |
| **Stress level** | 7/10 |
| **Points de friction** | 11 |
| **Sentiment final** | 😭 Désespoir |

---

## 🚚 Journey Map: Éric - Réceptionner une livraison {#journey-eric}

**Scénario**: Éric reçoit une livraison de matériel
**Durée totale**: 1h30
**Stress level**: 🟠🟠 Important

```
MERCREDI 9:00 - Le camion arrive
│
│  Sentiment: 😐 Routine
│  Action: Va vers le camion
│
├─ 9:05 - Reçoit le bon de livraison papier
│  Sentiment: 😐 Neutre
│  Action: Prend le papier
│  Pain Point: 🟠 Format papier uniquement
│
├─ 9:10 - Cherche la commande correspondante
│  Sentiment: 🤔 Perplexe
│  Action: Fouille dans son classeur papier
│  Pain Point: 🔴 Pas de référence croisée facile
│  Temps perdu: 15 minutes
│  Pensée: "C'était pour quel chantier déjà ?"
│
├─ 9:25 - Trouve (peut-être) la commande
│  Sentiment: 😰 Incertitude
│  Action: Compare les références
│  Problème: Référence fournisseur ≠ référence Sage
│  Pain Point: 🔴 Nomenclatures incompatibles
│  Exemple:
│    • Bon livraison: "CBL-3x2.5-R-50"
│    • Commande Sylvie: "CABLE_3G_2.5_ROUGE"
│  Pensée: "C'est le même ou pas ??"
│
├─ 9:30 - Appelle Sylvie pour vérifier
│  Sentiment: 😤 Frustration
│  Pain Point: 🔴 Pas de système de traçabilité
│  Temps perdu: 10 minutes au téléphone
│
├─ 9:40 - Décharge le camion
│  Sentiment: 😮‍💨 Soulagement partiel
│  Action: Décharge les cartons
│  Le chauffeur attend: 💰 Coût temps chauffeur
│
├─ 9:55 - Compte les articles
│  Sentiment: 🤔 Concentration
│  Action: Compte manuellement
│  Pain Point: 🟠 Pas de scan/code-barres
│  Temps perdu: 10 minutes
│
├─ 10:05 - Trouve une différence de quantité
│  Sentiment: 😰 Stress
│  Livré: 45 unités
│  Commandé: 50 unités
│  Action: Doit signaler
│  Pain Point: 🔴 Pas de workflow de réclamation
│
├─ 10:10 - Cherche où ranger
│  Sentiment: 😓 Fatigue
│  Action: Regarde dans le dépôt
│  Pain Point: 🔴 Pas de plan de rangement
│  Pensée: "Je mets ça où..."
│
├─ 10:20 - Range "quelque part"
│  Sentiment: 😞 Résignation
│  Action: Pose dans une zone
│  Pain Point: 🔴 Pas d'emplacement logique
│  Conséquence: ❌ Difficile à retrouver après
│
├─ 10:25 - Doit saisir dans Sage
│  Sentiment: 😤 Irritation
│  Action: Va sur l'ordinateur (un seul au dépôt)
│  Pain Point: 🔴 Un seul poste informatique
│  Attente: Collègue utilise le PC
│  Temps perdu: 15 minutes d'attente
│
├─ 10:40 - Saisit la réception dans Sage
│  Sentiment: 😓 Lassitude
│  Action: Entre les données manuellement
│  Pain Point: 🔴 Interface Sage complexe
│  Pain Point: 🔴 Re-saisie manuelle
│  Temps perdu: 20 minutes
│
└─ 11:00 - Termine la réception
   Sentiment: 😮‍💨 Épuisement
   Problème non résolu: Les 5 unités manquantes
   Quote: "Je passe 80% de mon temps sur de l'administratif
          au lieu de gérer le stock."
```

### 📊 Métriques du parcours Éric

| Métrique | Valeur |
|----------|--------|
| **Durée totale** | 2h00 |
| **Temps administratif** | 1h30 (75%) |
| **Temps logistique** | 30 min (25%) |
| **Nombre d'appels** | 2-3 |
| **Taux d'erreur de livraison** | 30% |
| **Temps perdu (attente PC)** | 15 minutes |
| **Stress level** | 6/10 |
| **Points de friction** | 9 |
| **Sentiment final** | 😮‍💨 Épuisement |

---

## 📊 Journey Map: Julien - Suivre les coûts d'une affaire {#journey-julien}

**Scénario**: Julien veut connaître le coût matériel de l'affaire "Rénovation Lycée"
**Durée totale**: 3 heures
**Stress level**: 🔴🔴🔴 Critique

```
JEUDI 14:00 - Demande du client
│
│  Sentiment: 😐 Professionnel
│  Contexte: Client demande un avenant
│  Besoin: Coût matériel réel à date
│  Pensée: "Ça devrait être rapide..."
│
├─ 14:05 - Ouvre Sage MDE
│  Sentiment: 🤔 Concentration
│  Action: Cherche l'affaire "Rénovation Lycée"
│  Pain Point: 🔴 Pas de vue "coûts par affaire"
│
├─ 14:10 - Cherche les commandes liées
│  Sentiment: 😟 Inquiétude montante
│  Action: Filtre par numéro d'affaire
│  Problème: Certaines commandes mal codées
│  Pain Point: 🔴 Données incomplètes/erronées
│  Temps perdu: 20 minutes
│
├─ 14:30 - Appelle Sylvie
│  Sentiment: 😤 Frustration
│  Dialogue: "Tu as toutes les commandes pour le Lycée ?"
│  Sylvie: "Attends, je regarde dans mon Excel..."
│  Pain Point: 🔴 Données fragmentées
│  Temps perdu: 15 minutes
│
├─ 14:45 - Reçoit un fichier Excel de Sylvie
│  Sentiment: 😮‍💨 Petit soulagement
│  Action: Ouvre "Commandes_Lycee_Nov.xlsx"
│  Contenu: Liste de 47 commandes
│
├─ 14:50 - Compare Excel vs Sage
│  Sentiment: 😰 Stress croissant
│  Problème: Les chiffres ne matchent pas !
│  Excel: 47 commandes
│  Sage: 52 commandes (mais lesquelles en plus ?)
│  Pain Point: 🔴 Sources de données incohérentes
│
├─ 15:00 - Appelle les chefs de chantier
│  Sentiment: 😤 Irritation forte
│  Action: Appelle Marc, puis Jean, puis Thomas
│  Question: "Vous avez commandé quoi exactement ?"
│  Réponses: "Euh... faut que je regarde mes bons..."
│  Pain Point: 🔴 Pas de traçabilité temps réel
│  Temps perdu: 45 minutes d'appels
│
├─ 15:45 - Crée son propre fichier Excel
│  Sentiment: 😓 Résignation
│  Action: Nouveau fichier "Couts_Lycee_REEL_v1.xlsx"
│  Processus: Recopie manuellement les données
│  Pain Point: 🔴 Re-création manuelle des données
│  Temps perdu: 30 minutes
│
├─ 16:15 - Additionne les montants
│  Sentiment: 🤔 Concentration intense
│  Action: Formules Excel
│  Résultat: 145,000€ de matériel
│  Incertitude: ❓ Confiance = 60% seulement
│
├─ 16:20 - Doute sur les prix unitaires
│  Sentiment: 😰 Anxiété
│  Problème: Certains prix semblent obsolètes
│  Exemple: Câble à 3.50€/m alors que prix actuel = 4.20€/m
│  Pain Point: 🔴 Prix pas à jour
│
├─ 16:30 - Appelle plusieurs fournisseurs
│  Sentiment: 😤 Frustration maximale
│  Action: Vérifie les prix actuels
│  Pain Point: 🔴 Pas de tarifs à jour dans le système
│  Temps perdu: 20 minutes
│
├─ 16:50 - Recalcule tout
│  Sentiment: 😭 Désespoir
│  Action: Met à jour son Excel
│  Nouveau total: 152,000€ (7K€ d'écart !)
│  Pain Point: 🔴 Écarts importants
│
└─ 17:00 - Répond au client (avec réserves)
   Sentiment: 😰 Stress et incertitude
   Email: "Coût estimé ≈ 150-155K€"
   Pensée: "J'espère ne pas me tromper de 20%..."
   Impact: 🔴 Perte de crédibilité
   Quote: "Je ne peux pas piloter une affaire si je ne
          connais pas mes coûts en temps réel. Je navigue
          à vue, c'est dangereux."
```

### 📊 Métriques du parcours Julien

| Métrique | Valeur |
|----------|--------|
| **Durée totale** | 3h00 |
| **Nombre d'outils utilisés** | 4 (Sage, Excel, Téléphone, Email) |
| **Nombre d'appels** | 6 |
| **Marge d'erreur** | ±10-20% |
| **Confiance dans les données** | 60% |
| **Risque financier** | 7,000€ - 20,000€ |
| **Stress level** | 9/10 |
| **Points de friction** | 10 |
| **Sentiment final** | 😰 Stress et incertitude |

---

## ⏱️ Timeline Comparée: Une commande de câble {#timeline-cable}

### Vue d'ensemble des acteurs et durée totale

```
┌─────────────────────────────────────────────────────────────────┐
│  COMMANDE DE CÂBLE: Du besoin à la livraison                     │
│  Acteurs: Marc (Chef chantier) + Sylvie (Achats) + Éric (Dépôt) │
│  Durée: 3 JOURS (au lieu de 2 heures idéalement)                │
└─────────────────────────────────────────────────────────────────┘

JOUR 1 - LUNDI
═══════════════════════════════════════════════════════════════

09:00 ┬ MARC: Identifie le besoin
      │ └─> 🔴 Pas de visibilité stock
      │
09:10 ├ MARC: Cherche bon de commande papier [5 min perdu]
      │ └─> 🔴 Support papier uniquement
      │
09:15 ├ MARC: Remplit bon à la main [5 min]
      │ └─> 🔴 Pas d'accès catalogue, référence imprécise
      │
09:20 ├ MARC: Essaie de joindre Sylvie [25 min perdu]
      │ └─> 🔴 Pas de canal asynchrone
      │ └─> ❌ SYLVIE: En réunion, pas dispo
      │
09:45 ├ MARC: Envoie SMS
      │ └─> 🔴 Pas de notification système
      │
10:45 ├ MARC: Rappelle Sylvie
      │ ├─> ✅ Elle répond enfin
      │ └─> [1h15 perdu depuis le début]
      │
      │ ┌──────────────────────────────────────┐
10:50 ├─┤ APPEL TÉLÉPHONIQUE [10 min]          │
      │ ├──────────────────────────────────────┤
      │ │ Marc: "câble 3G2.5"                  │
      │ │ Sylvie: "Quelle référence ?"         │
      │ │ Marc: "Le câble habituel"            │
      │ │ Sylvie: "Il y en a 12 dans Sage..."  │
      │ └──────────────────────────────────────┘
      │   └─> 🔴 12 références pour un produit
      │
11:00 ├ SYLVIE: Cherche la bonne référence [12 min]
      │ └─> 🔴 Base données chaotique
      │
11:12 ├ SYLVIE: Vérifie stock [5 min]
      │ └─> 🔴 Stock pas fiable
      │
11:17 ├ SYLVIE: Cherche fournisseur dans Excel [8 min]
      │ └─> 🔴 Données éparpillées
      │
11:25 ├ SYLVIE: Appelle fournisseur [15 min]
      │ └─> 🔴 Pas de commande en ligne
      │ └─> Disponible sous 48h
      │
11:40 ├ SYLVIE: Écrit email confirmation [10 min]
      │ └─> 🔴 Re-saisie #4
      │
11:50 ├ SYLVIE: Saisit dans Sage [5 min]
      │ └─> 🔴 Re-saisie #5
      │
11:55 ├ SYLVIE: Saisit dans Excel suivi [5 min]
      │ └─> 🔴 Re-saisie #6
      │
12:00 └ SYLVIE: SMS à Marc
        └─> "Livraison mercredi"
        └─> 🔴 Pas de notification auto

      ┌────────────────────────────────────────┐
      │ FIN JOUR 1                              │
      │ Temps passé: MARC = 1h30               │
      │              SYLVIE = 2h00             │
      │ TOTAL = 3h30                           │
      │ CHANTIER = ⛔ BLOQUÉ                   │
      └────────────────────────────────────────┘


JOUR 2 - MARDI
═══════════════════════════════════════════════════════════════

10:00 ┬ MARC: Inquiet, rappelle pour suivi [15 min]
      │ └─> 🔴 Aucune visibilité avancement
      │
14:00 ├ MARC: Re-rappelle [15 min]
      │ └─> Sylvie: "En cours..."
      │
      │
      │ ┌────────────────────────────────────────┐
      │ │ ⏸️  CHANTIER BLOQUÉ TOUT LE JOUR 2     │
      │ │ Coût: 800€                             │
      │ └────────────────────────────────────────┘
      │
      └─> RIEN NE SE PASSE
          Attente fournisseur...


JOUR 3 - MERCREDI
═══════════════════════════════════════════════════════════════

09:00 ┬ ÉRIC: Camion fournisseur arrive
      │
09:05 ├ ÉRIC: Reçoit bon livraison papier
      │ └─> 🔴 Format papier uniquement
      │
09:10 ├ ÉRIC: Cherche commande correspondante [15 min]
      │ └─> 🔴 Pas de référence croisée
      │
09:25 ├ ÉRIC: Compare références [5 min]
      │ └─> 🔴 Nomenclatures incompatibles
      │ └─> "CBL-3x2.5-R-50" vs "CABLE_3G_2.5_ROUGE"
      │
09:30 ├ ÉRIC: Appelle Sylvie pour confirmer [10 min]
      │ └─> 🔴 Pas de traçabilité
      │
09:40 ├ ÉRIC: Décharge [15 min]
      │
09:55 ├ ÉRIC: Compte manuellement [10 min]
      │ └─> 🔴 Pas de scan
      │
10:05 ├ ÉRIC: Constate écart quantité
      │ └─> Livré: 45 au lieu de 50
      │
10:10 ├ ÉRIC: Range "quelque part" [10 min]
      │ └─> 🔴 Pas de plan rangement
      │
10:20 ├ ÉRIC: Attend le PC [15 min perdu]
      │ └─> 🔴 Un seul poste informatique
      │
10:35 ├ ÉRIC: Saisit réception dans Sage [20 min]
      │ └─> 🔴 Interface complexe
      │ └─> 🔴 Re-saisie manuelle
      │
10:55 └ ÉRIC: Termine
        └─> Livraison prête pour chantier

      ┌────────────────────────────────────────┐
12:00 │ SYLVIE: Appelle Marc                    │
      │ "Le matériel est dispo au dépôt"       │
      └────────────────────────────────────────┘

14:00 ┬ MARC: Va au dépôt chercher le câble
      │
14:30 ├ MARC: Retour chantier
      │
15:00 ├ MARC: Déballage... 😱
      │ └─> ❌ C'EST LE MAUVAIS CÂBLE !
      │ └─> 🔴 Confusion entre les 12 références
      │
      │ ┌────────────────────────────────────────┐
      │ │ ⛔ CATASTROPHE                          │
      │ │ • Chantier bloqué 3 jours              │
      │ │ • Il faut RECOMMENCER tout le process  │
      │ │ • Perte financière: 2,400€             │
      │ │ • Client mécontent                     │
      │ └────────────────────────────────────────┘
      │
16:00 ├ MARC: Rappelle Sylvie (furieux) 🤬
      │
16:30 └ SYLVIE: Doit recommencer... 😭


┌─────────────────────────────────────────────────────────────────┐
│                         BILAN FINAL                               │
├─────────────────────────────────────────────────────────────────┤
│ DURÉE TOTALE: 3 jours (au lieu de 2h idéalement)                │
│ TEMPS HUMAIN TOTAL: 6h30                                         │
│   • Marc: 2h15                                                   │
│   • Sylvie: 2h30 (puis +2h pour corriger = 4h30)               │
│   • Éric: 1h45                                                   │
│ COÛT CHANTIER BLOQUÉ: 2,400€ (3j × 800€)                       │
│ TAUX DE RÉUSSITE: ❌ 50% (1 commande sur 2 est fausse)         │
│ NOMBRE DE RE-SAISIES: 6 fois                                    │
│ NOMBRE D'APPELS: 12                                             │
│ NIVEAU DE STRESS: 🔴🔴🔴 9/10                                    │
│ SENTIMENT GÉNÉRAL: 😭 Désespoir collectif                        │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Synthèse: Points communs entre tous les parcours

### 🔴 Pain Points CRITIQUES récurrents

1. **Aucune visibilité temps réel**
   - Apparaît dans: TOUS les parcours
   - Impact: Incertitude, stress, pertes de temps

2. **Re-saisie manuelle multiple (6 fois !)**
   - Apparaît dans: Marc, Sylvie
   - Impact: 2h+ perdue par commande

3. **Base de données chaotique**
   - Apparaît dans: Marc, Sylvie, Éric
   - Impact: 50% d'erreurs, confusion

4. **Communication asynchrone impossible**
   - Apparaît dans: TOUS
   - Impact: 15-45 min perdu par tentative

5. **Pas de traçabilité**
   - Apparaît dans: Éric, Julien
   - Impact: Impossible de piloter

### 📊 Métriques agrégées (sur 1 commande type)

| Métrique | Valeur |
|----------|--------|
| **Durée totale processus** | 3 jours |
| **Temps humain cumulé** | 6h30 |
| **Nombre d'intervenants** | 3 personnes |
| **Nombre d'appels** | 12 |
| **Nombre de re-saisies** | 6 |
| **Nombre d'outils** | 6 (Papier, Téléphone, SMS, Sage, Excel, Email) |
| **Taux d'erreur** | 50% |
| **Coût d'une erreur** | 2,400€ |
| **Stress moyen** | 8/10 |

### 💰 Coût total d'UNE commande ratée

```
Temps humain gaspillé:
  Marc:   2h15 × 35€/h  =     79€
  Sylvie: 4h30 × 30€/h  =    135€
  Éric:   1h45 × 28€/h  =     49€
  Julien: 1h00 × 45€/h  =     45€
                        --------
  SOUS-TOTAL             =    308€

Chantier bloqué:
  3 jours × 800€/jour   =  2,400€

TOTAL PAR COMMANDE RATÉE = 2,708€
```

Sur 200 commandes/mois avec 50% d'erreurs:
**= 270,800€/mois de pertes**
**= 3,249,600€/an** 😱

---

## 🗣️ Citations des utilisateurs (verbatim)

### Marc (Chef de Chantier)
> "À chaque fois c'est la même galère. Je passe plus de temps à commander qu'à travailler. Et la moitié du temps, c'est même pas le bon matériel qui arrive."

> "Je dois appeler 15 fois pour savoir où en est ma commande. C'est pas normal."

### Sylvie (Gestionnaire Achats)
> "Je perds ma vie à ressaisir les mêmes données dans 6 systèmes différents. Je passe plus de temps à faire de l'admin qu'à négocier avec les fournisseurs."

> "Le pire, c'est quand je dois corriger une erreur. Je dois refaire tout le circuit pendant 2 heures."

### Éric (Magasinier)
> "Je passe 80% de mon temps sur de l'administratif au lieu de gérer le stock. Et après on me demande pourquoi c'est le bazar dans le dépôt."

> "Un seul ordinateur pour 3 magasiniers, on fait la queue pour saisir les réceptions."

### Julien (Responsable Affaires)
> "Je ne peux pas piloter une affaire si je ne connais pas mes coûts en temps réel. Je navigue à vue, c'est dangereux."

> "Quand un client me demande le coût matériel, il me faut 3 heures pour sortir un chiffre... et je ne suis même pas sûr qu'il soit juste."

### Christine (Directrice Générale)
> "On perd entre 800K€ et 1M€ par an à cause de ce chaos. C'est inacceptable."

> "Nos équipes sont épuisées et démotivées. Le système les fait souffrir au quotidien."

---

## 📈 Impact émotionnel agrégé

```
Évolution du stress au cours d'une journée type:

10 │                                    ╱─╲
 9 │                                ╱───   ╲
 8 │                          ╱─────         ──╲
 7 │                    ╱─────                  ╲
 6 │              ╱─────                          ─
 5 │        ╱─────
 4 │   ╱────
 3 │ ──
 2 │
 1 │
 0 └─────┬─────┬─────┬─────┬─────┬─────┬─────┬───
       9h    10h   11h   12h   14h   16h   17h  18h

   Légende:
   • 9h: Arrivée, tout va bien
   • 10h: Première friction (recherche info)
   • 11h: Frustration monte (ressaisies)
   • 12h: Pic de stress (découverte erreur)
   • 14h: Épuisement (correction)
   • 16h: Désespoir (nouvelle erreur)
   • 18h: Résignation (fin de journée)
```

---

**FIN DU DOCUMENT**

> 📅 Document créé le: 2025-11-17
> 🎯 Périmètre: Achats-Logistique - État ACTUEL uniquement
> ⚠️ Focus: Pain points existants, PAS de solutions proposées
