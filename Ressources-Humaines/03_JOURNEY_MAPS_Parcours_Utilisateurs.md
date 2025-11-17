# 🗺️ PARCOURS UTILISATEURS - Journey Maps Ressources Humaines

> Documentation des parcours typiques des utilisateurs dans le système ACTUEL
> Focus: PAIN POINTS existants, pas de solutions proposées

---

## 📋 TABLE DES MATIÈRES

1. [Journey Map: Sophie - Traiter la paie mensuelle](#journey-sophie)
2. [Journey Map: Thomas - Valider les feuilles d'heures](#journey-thomas)
3. [Journey Map: Lucas - Demander des congés](#journey-lucas)
4. [Journey Map: Sophie - Onboarder un nouveau salarié](#journey-onboarding)
5. [Timeline comparée: Processus paie mensuel](#timeline-paie)

---

## 💰 Journey Map: Sophie - Traiter la paie mensuelle {#journey-sophie}

**Scénario**: Sophie traite la paie du mois de novembre
**Durée totale**: 12 jours (répartis sur le mois)
**Stress level**: 🔴🔴🔴 Critique

```
SEMAINE 1 - Contrôle hebdomadaire
│
│  Sentiment: 😐 Routine
│  Pensée: "Début du mois, contrôle hebdo..."
│
├─ 9:00 - Ouvre POPAYE
│  Sentiment: 😟 Appréhension
│  Action: Vérifie les feuilles d'heures de la semaine
│  Pain Point: 🔴 Interface POPAYE peu intuitive
│
├─ 9:30 - Identifie les FH manquantes
│  Sentiment: 😤 Frustration
│  Pensée: "Encore 15 personnes qui n'ont pas saisi..."
│  Pain Point: 🔴 Pas de notification automatique
│  Temps: 30 min pour faire la liste manuellement
│
├─ 10:00 - Relance les managers par email
│  Sentiment: 😓 Lassitude
│  Action: Écrit 5 emails de relance
│  Pain Point: 🔴 Relances 100% manuelles
│  Temps: 30 min
│
├─ 10:30 - Relance individuelle des salariés
│  Sentiment: 😠 Irritation
│  Action: 8-10 appels téléphoniques
│  Pain Point: 🔴 Pas de workflow automatisé
│  Temps: 45 min perdu
│
└─ 11:15 - Note dans Excel "suivi FH"
   Sentiment: 😞 Résignation
   Pain Point: 🔴 Tracking manuel
   Résultat: ⏸️ Attente des saisies

═══════════════════════════════════════════════════

SEMAINE 2-3 - Contrôles hebdo (x2)
│
│  Même processus répété 2 fois
│  Sentiment: 😤 Frustration croissante
│  Temps total: 6h sur 2 semaines
│
└─ Pain Point: 🔴 Processus répétitif sans valeur ajoutée

═══════════════════════════════════════════════════

JOUR 1 (avant le 9) - Préparation finale paie
│
│  Sentiment: 😰 Stress montant
│  Pensée: "Il faut boucler avant le 9..."
│
├─ 8:00 - Dernier contrôle FH
│  Sentiment: 😟 Anxiété
│  Action: Vérifie toutes les FH dans POPAYE
│  Résultat: Encore 3 manquantes
│  Pain Point: 🔴 Toujours des retardataires
│
├─ 8:30 - Appels urgents
│  Sentiment: 😤 Agacement
│  Action: 3 appels pressants
│  Temps: 20 min
│
├─ 9:00 - Traitement paie dans POPAYE
│  Sentiment: 😓 Concentration intense
│  Action: Lance le traitement automatique
│  Résultat: ⚠️ 12 anomalies détectées
│  Pain Point: 🔴 Anomalies fréquentes
│
├─ 9:15 - Résolution anomalies
│  Sentiment: 😰 Stress
│  Action: Vérifie chaque anomalie manuellement
│  Exemples:
│    • Heures négatives (erreur saisie)
│    • Km incohérents
│    • Paniers non déclarés
│  Pain Point: 🔴 Pas d'aide à la résolution
│  Temps: 1h30
│
├─ 10:45 - Valorisation heures récup
│  Sentiment: 😤 Frustration maximale
│  Pensée: "Le pire moment..."
│  Action: Calcul MANUEL pour chaque salarié
│  Méthode:
│    1. Ouvre Excel
│    2. Pour chaque personne (100 pers):
│       - Compte heures semaine
│       - Objectif 35h/semaine
│       - Si >35h → heures récup
│       - Saisit dans POPAYE
│  Pain Point: 🔴 **CALCUL 100% MANUEL**
│  Temps: 3h00 ⏰⏰⏰
│  Erreur: ❌ Risque élevé
│
├─ 13:45 - Pochette éléments paie
│  Sentiment: 😓 Fatigue
│  Action: Remplit manuellement le tableau
│  Pain Point: 🔴 Re-saisie données déjà dans POPAYE
│  Temps: 45 min
│
├─ 14:30 - Classeur rose
│  Sentiment: 😮‍💨 Épuisement
│  Action: Mise à jour manuelle
│  Pain Point: 🔴 Support papier en 2025
│  Temps: 30 min
│
├─ 15:00 - Export contrôle paie PDF
│  Sentiment: 🤔 Concentration
│  Action: Génère PDF depuis POPAYE
│  Temps: 15 min
│
├─ 15:15 - Vérifications manuelles
│  Sentiment: 😰 Anxiété de l'erreur
│  Action: Vérifie UN PAR UN:
│    • Heures/semaine
│    • KVE vs KVP (véhicule entreprise vs perso)
│    • Paniers (5/semaine)
│    • Grands déplacements
│  Pain Point: 🔴 **VÉRIF 100% MANUELLE**
│  Temps: 2h30 ⏰⏰⏰
│
└─ 17:45 - Blocage période paie
   Sentiment: 😌 Soulagement partiel
   Action: Bloque la période dans POPAYE
   Pensée: "Enfin... Mais il reste le pire à faire"
   Résultat: ⏸️ Pause avant le 16

═══════════════════════════════════════════════════

JOUR 2 (le 16) - Calcul TR et exports finaux
│
│  Sentiment: 😰 Appréhension
│  Pensée: "Le calcul des tickets resto... mon cauchemar"
│
├─ 8:00 - Calcul manuel tickets restaurant
│  Sentiment: 🤬 Rage intérieure
│  Pensée: "POURQUOI ce n'est pas automatique ?!"
│  Action: Pour CHAQUE collaborateur (100 pers):
│    1. Compte jours travaillés dans POPAYE
│    2. Soustrait absences (maladie, congés, formation)
│    3. Soustrait jours avec NDF
│    4. = Nombre de TR à commander
│    5. Saisit dans Excel "Tickets Resto Nov 2025"
│  Pain Point: 🔴 **CALCUL 100% MANUEL**
│  Pain Point: 🔴 Risque erreur ÉNORME
│  Pain Point: 🔴 Données éparpillées (POPAYE + Excel NDF)
│  Temps: 3h30 ⏰⏰⏰⏰
│  Erreur estimée: ±5% (5 personnes sur 100)
│
├─ 11:30 - Commande SWILE
│  Sentiment: 😓 Fatigue
│  Action: Se connecte SWILE, saisit commande
│  Pain Point: 🔴 Re-saisie #6 des mêmes données
│  Temps: 30 min
│
├─ 12:00 - Pause déjeuner (rapide)
│  Sentiment: 😰 Stress
│  Pensée: "Il faut boucler cet après-midi..."
│
├─ 13:00 - Export 1: Contingent Hsupp
│  Sentiment: 😐 Routine
│  Action: Export depuis POPAYE
│  Temps: 15 min
│
├─ 13:15 - Export 2: SILAE
│  Sentiment: 😟 Concentration
│  Action: Export format SILAE depuis POPAYE
│  Pain Point: 🟠 Format pas toujours compatible
│  Temps: 20 min
│
├─ 13:35 - Export 3: Contrôle paie
│  Sentiment: 😓 Lassitude
│  Action: Export PDF
│  Temps: 10 min
│
├─ 13:45 - Préparation tableau compléments
│  Sentiment: 😤 Frustration
│  Action: Ouvre Excel, saisit manuellement:
│    • Primes ponctuelles
│    • Acomptes
│    • Avantages en nature
│    • Remboursements
│  Pain Point: 🔴 Données non structurées
│  Temps: 45 min
│
├─ 14:30 - Collecte justificatifs
│  Sentiment: 😓 Fatigue
│  Action: Fouille dans dossiers papier + emails
│    • Arrêts maladie
│    • Certificats médicaux
│    • Attestations
│  Pain Point: 🔴 Pas de GED centralisée
│  Temps: 30 min
│
├─ 15:00 - Préparation email Virginie (Only RH)
│  Sentiment: 😰 Stress de l'oubli
│  Action: Rédige email détaillé, joint:
│    • Export SILAE
│    • Compteurs heures/congés
│    • Tableau compléments
│    • Justificatifs scannés
│    • Calcul TR
│  Pensée: "J'espère que je n'ai rien oublié..."
│  Pain Point: 🔴 Checklist mentale (risque oubli)
│  Temps: 30 min
│
└─ 15:30 - Envoi email + suivi
   Sentiment: 😮‍💨 Soulagement temporaire
   Action: Envoie email, note dans calendrier
   Pensée: "C'est parti... Maintenant j'attends les questions..."
   Résultat: ⏸️ Attente retour Virginie

═══════════════════════════════════════════════════

JOURS 3-4 - Échanges avec Virginie
│
├─ Email de Virginie: Questions/incohérences
│  Sentiment: 😰 Inquiétude
│  Exemples questions:
│    • "Pourquoi M. Dupont a 180h ce mois ?"
│    • "Il manque le justificatif arrêt Mme Martin"
│    • "Les TR ne matchent pas avec les absences"
│  Pain Point: 🔴 Données pas assez vérifiées
│
├─ Vérifications complémentaires
│  Sentiment: 😤 Frustration
│  Action: Retourne dans POPAYE/Excel
│  Temps: 2h
│
└─ Corrections et renvoi
   Sentiment: 😓 Lassitude
   Temps: 1h

═══════════════════════════════════════════════════

FIN MOIS - Réception bulletins
│
├─ Réception bulletins de paie
│  Sentiment: 😐 Neutre
│  Action: Télécharge depuis SILAE
│
├─ Contrôle binôme
│  Sentiment: 😰 Stress
│  Action: Vérifie avec collègue:
│    • Tickets restaurant
│    • Éléments complémentaires
│    • Absences entrée/sortie
│  Pain Point: 🔴 Contrôle manuel (erreurs fréquentes)
│  Temps: 2h
│
├─ Échanges corrections
│  Sentiment: 😤 Frustration si erreurs
│  Action: Échange avec Virginie via tableau partagé
│  Pain Point: 🔴 Aller-retours multiples
│  Temps: 1-3h selon erreurs
│
└─ Distribution bulletins
   Sentiment: 😌 Soulagement final
   Pensée: "Enfin terminé... jusqu'au mois prochain"
   Quote: "Je passe 3 JOURS par mois sur la paie.
          C'est du travail de robot, pas de RH..."
```

### 📊 Métriques du parcours Sophie - Paie

| Métrique | Valeur |
|----------|--------|
| **Durée totale** | 12 jours (répartis) |
| **Temps effectif** | 25-30h par mois |
| **Nombre d'outils** | 6 (POPAYE, SAGE, SILAE, SWILE, Excel×2, Email) |
| **Nombre de re-saisies** | 6-8 fois |
| **Taux d'erreur estimé** | 5-10% |
| **Stress level** | 9/10 |
| **Points de friction** | 15+ |
| **Sentiment final** | 😓 Épuisement |
| **Coût annuel** | 300-360h = 9-11K€ |

---

## 📋 Journey Map: Thomas - Valider les feuilles d'heures {#journey-thomas}

**Scénario**: Thomas valide les FH de son équipe (8 personnes)
**Durée totale**: 1 semaine
**Stress level**: 🟠🟠 Important

```
LUNDI - Semaine de saisie
│
│  Sentiment: 😐 Neutre
│  Pensée: "Début de semaine, faut pas oublier les FH..."
│
├─ 17:00 - Message WhatsApp équipe
│  Sentiment: 😐 Routine
│  Action: "Les gars, n'oubliez pas vos feuilles d'heures"
│  Pain Point: 🔴 Pas de système de rappel automatique
│
└─ Résultat: ⏸️ Attente

═══════════════════════════════════════════════════

JEUDI - Première relance
│
├─ 18:00 - Vérifie POPAYE
│  Sentiment: 😟 Inquiétude
│  Action: Se connecte POPAYE (depuis PC bureau)
│  Pain Point: 🔴 Pas d'app mobile manager
│  Résultat: 3 personnes sur 8 ont saisi
│
├─ 18:15 - Relance WhatsApp
│  Sentiment: 😤 Agacement
│  Message: "Il manque encore 5 FH, faites-les ce soir"
│  Pain Point: 🔴 Relance manuelle
│  Temps: 10 min
│
└─ Résultat: ⏸️ Attente

═══════════════════════════════════════════════════

VENDREDI 16:00 - Deadline approche
│
├─ 16:00 - Re-vérif POPAYE
│  Sentiment: 😰 Stress
│  Résultat: 6 sur 8 (2 manquants encore)
│  Pain Point: 🔴 Pas de visibilité temps réel
│
├─ 16:15 - Appels téléphoniques urgents
│  Sentiment: 😠 Colère contenue
│  Action: Appelle les 2 retardataires
│  Thomas: "Il faut faire ta FH MAINTENANT"
│  Pain Point: 🔴 Gestion urgences récurrente
│  Temps: 20 min
│
└─ 16:35 - Attente
   Sentiment: 😤 Frustration
   Pensée: "Toutes les semaines pareil..."

═══════════════════════════════════════════════════

VENDREDI 17:30 - Validation
│
├─ 17:30 - FH enfin complètes
│  Sentiment: 😮‍💨 Soulagement
│  Action: Commence validation dans POPAYE
│
├─ 17:35 - Validation ligne par ligne
│  Sentiment: 😓 Fatigue
│  Action: Pour chaque salarié (8 pers):
│    1. Ouvre sa FH
│    2. Vérifie chaque jour:
│       - Horaires cohérents ?
│       - Chantier correct ?
│       - Heures sup justifiées ?
│       - Absences déclarées ?
│    3. Valide ou corrige
│  Pain Point: 🔴 **VALIDATION 100% MANUELLE**
│  Pain Point: 🔴 Interface POPAYE peu pratique
│  Temps: 1h30 ⏰⏰
│
├─ 19:00 - Problème détecté
│  Sentiment: 😤 Irritation
│  Exemple: "Marc a saisi 12h lundi, impossible"
│  Action: Appel Marc (sur perso, 19h)
│  Marc: "Ah oui, erreur, c'est 8h"
│  Pain Point: 🔴 Pas de contrôle de cohérence auto
│  Temps: 15 min perdu
│
├─ 19:15 - Correction
│  Sentiment: 😓 Lassitude
│  Action: Corrige manuellement dans POPAYE
│  Pain Point: 🔴 Manager corrige au lieu du salarié
│
└─ 19:20 - Validation finale
   Sentiment: 😞 Découragement
   Pensée: "3h30 pour valider 8 FH... Tous les vendredis..."
   Quote: "Je suis manager, pas administratif. Mais je passe
          4h par semaine à relancer pour des feuilles d'heures..."
```

### 📊 Métriques du parcours Thomas - Validation FH

| Métrique | Valeur |
|----------|--------|
| **Durée totale** | 5 jours |
| **Temps effectif** | 3h30 par semaine |
| **Nombre de relances** | 3-4 par semaine |
| **Nombre d'appels** | 5-8 |
| **Taux de retard** | 60% (toujours des retardataires) |
| **Stress level** | 7/10 |
| **Points de friction** | 8 |
| **Sentiment final** | 😞 Découragement |
| **Coût annuel** | 180h = 8K€ |

---

## 📄 Journey Map: Lucas - Demander des congés {#journey-lucas}

**Scénario**: Lucas veut poser 3 jours de congés
**Durée totale**: 3-5 jours
**Stress level**: 🟠🟠 Important

```
LUNDI 10:00 - Décision
│
│  Sentiment: 😊 Positif
│  Pensée: "Je vais poser des congés fin du mois"
│
├─ 10:05 - Cherche le formulaire papier
│  Sentiment: 😐 Neutre
│  Action: Fouille dans son casier
│  Pain Point: 🔴 Formulaire papier en 2025
│  Temps: 5 min
│
├─ 10:10 - Remplit le formulaire
│  Sentiment: 😟 Ennui
│  Action: Écrit à la main:
│    • Nom, prénom
│    • Dates
│    • Type congés
│  Pain Point: 🔴 Saisie manuelle
│  Temps: 5 min
│
├─ 10:15 - Cherche son manager
│  Sentiment: 😤 Frustration
│  Pensée: "Où est Thomas ?"
│  Pain Point: 🔴 Validation synchrone obligatoire
│  Résultat: Thomas sur chantier, pas dispo
│
└─ 10:20 - Laisse papier sur bureau Thomas
   Sentiment: 😞 Incertitude
   Pensée: "J'espère qu'il verra..."
   Pain Point: 🔴 Pas de notification
   Résultat: ⏸️ Attente

═══════════════════════════════════════════════════

MARDI - Relance
│
├─ 14:00 - Thomas toujours pas répondu
│  Sentiment: 😟 Inquiétude
│  Pensée: "Il a vu mon papier ?"
│
├─ 14:05 - Appel téléphonique Thomas
│  Sentiment: 😤 Agacement
│  Thomas: "Ah oui, j'ai vu. Je signe ce soir"
│  Pain Point: 🔴 Pas de workflow digital
│  Temps: 5 min
│
└─ Résultat: ⏸️ Attente

═══════════════════════════════════════════════════

MERCREDI - Signature manager
│
├─ 18:00 - Récupère formulaire signé
│  Sentiment: 😮‍💨 Petit soulagement
│  Pensée: "Bon, il a signé. Maintenant faut scanner..."
│
├─ 18:05 - Cherche un scanner
│  Sentiment: 😤 Frustration
│  Problème: Le scanner du bureau est en panne
│  Pain Point: 🔴 Dépendance matériel
│  Temps: 10 min perdu
│
├─ 18:15 - Scanne avec smartphone
│  Sentiment: 😓 Lassitude
│  Action: Utilise app CamScanner perso
│  Pain Point: 🔴 Workaround personnel
│  Temps: 10 min
│
├─ 18:25 - Envoie email Sophie RH
│  Sentiment: 😮‍💨 Soulagement
│  Action: Écrit email, joint scan PDF
│  Pain Point: 🔴 Process lourd pour une simple demande
│
└─ 18:30 - Attente confirmation
   Sentiment: 😟 Incertitude
   Pensée: "J'espère que c'est bon..."
   Résultat: ⏸️ Attente

═══════════════════════════════════════════════════

JEUDI - Validation RH
│
├─ 11:00 - Pas de nouvelles
│  Sentiment: 😰 Anxiété
│  Pensée: "Elle a reçu mon email ?"
│
├─ 11:05 - Rappel email Sophie
│  Sentiment: 😤 Frustration
│  Action: "Bonjour Sophie, as-tu reçu ma demande ?"
│  Pain Point: 🔴 Pas de suivi automatique
│
├─ 14:00 - Réponse Sophie
│  Sentiment: 😌 Soulagement
│  Email: "Congés validés, saisis dans POPAYE"
│  Mais... Pain Point: 🔴 Lucas ne voit pas dans POPAYE
│  Incertitude: ❓ C'est vraiment validé ?
│
└─ Fin du processus
   Sentiment: 😞 Frustration résiduelle
   Quote: "Mes potes dans d'autres boîtes font ça en 2 clics
          sur une app. Ça prend 3 JOURS ici..."
```

### 📊 Métriques du parcours Lucas - Congés

| Métrique | Valeur |
|----------|--------|
| **Durée totale** | 3-5 jours |
| **Temps humain** | 1h (Lucas) + 30min (Thomas) + 20min (Sophie) |
| **Nombre d'étapes** | 8 |
| **Nombre d'outils** | 5 (Papier, Scanner, Email, POPAYE, CIBTP) |
| **Nombre de saisies** | 4 (Papier → Email → POPAYE → CIBTP → Planning) |
| **Taux de perte** | 10% (papiers perdus) |
| **Stress level** | 6/10 |
| **Points de friction** | 10 |
| **Sentiment final** | 😞 Frustration |

---

## 👤 Journey Map: Sophie - Onboarder un nouveau salarié {#journey-onboarding}

**Scénario**: Sophie intègre un nouveau électricien (CDI)
**Durée totale**: 2 semaines
**Stress level**: 🔴🔴🔴 Critique

```
JOUR -7 - Signature contrat
│
│  Sentiment: 😊 Positif
│  Pensée: "Nouveau salarié, super !"
│
├─ 9:00 - Ouvre checklist Excel
│  Sentiment: 😐 Neutre
│  Action: Ouvre "Checklist_Onboarding_2025.xlsx"
│  Pain Point: 🔴 39 tâches manuelles !
│
├─ 9:15 - Email collectif 4-5 personnes
│  Sentiment: 😓 Déjà fatiguée
│  Destinataires:
│    • IT (PC, téléphone)
│    • Logistique (véhicule, EPI, outillage)
│    • Manager (planning intégration)
│    • RH (administratif)
│    • CSE (info nouveauté)
│  Pain Point: 🔴 **NOTIFICATION 100% MANUELLE**
│  Pain Point: 🔴 Risque oubli destinataire
│  Temps: 30 min
│
├─ 9:45 - DPAE (Déclaration préalable embauche)
│  Sentiment: 😐 Routine administrative
│  Action: Se connecte net-entreprises.fr
│  Temps: 15 min
│
├─ 10:00 - Création dossier administratif
│  Sentiment: 😓 Lassitude
│  Action:
│    • Crée dossier papier
│    • Imprime contrat
│    • Classe documents
│  Pain Point: 🔴 Dossier papier en 2025
│  Temps: 20 min
│
├─ 10:20 - Registre du personnel
│  Sentiment: 😤 Frustration
│  Action: Inscription manuelle registre
│  Pain Point: 🔴 Registre papier obligatoire
│  Temps: 10 min
│
├─ 10:30 - Création POPAYE
│  Sentiment: 😟 Concentration
│  Action: Crée utilisateur dans POPAYE
│  Pain Point: 🟠 Interface peu intuitive
│  Temps: 15 min
│
├─ 10:45 - Création SAGE
│  Sentiment: 😓 Fatigue
│  Action: Crée fiche salarié SAGE
│  Pain Point: 🔴 **RE-SAISIE #3** des mêmes données
│  Temps: 20 min
│
├─ 11:05 - Mise à jour Excel effectifs
│  Sentiment: 😤 Irritation
│  Action: Ajoute ligne dans "Effectifs_2025.xlsx"
│  Pain Point: 🔴 **RE-SAISIE #4**
│  Temps: 5 min
│
├─ 11:10 - Mise à jour planning CP
│  Sentiment: 😓 Lassitude
│  Action: Ajoute dans "Planning_CP_2025.xlsx"
│  Pain Point: 🔴 **RE-SAISIE #5**
│  Temps: 5 min
│
├─ 11:15 - Mise à jour tableau mutuelle
│  Sentiment: 😞 Découragement
│  Pain Point: 🔴 **RE-SAISIE #6**
│  Temps: 5 min
│
└─ 11:20 - Pause (épuisée)
   Sentiment: 😭 Désespoir
   Pensée: "Et je n'ai fait que l'administratif..."
   Temps total: 2h30 déjà

═══════════════════════════════════════════════════

JOUR -7 (après-midi) - Suite onboarding
│
├─ 14:00 - Médecine du travail
│  Sentiment: 😐 Routine
│  Action: Appel pour RDV visite médicale
│  Temps: 15 min
│
├─ 14:15 - Empowill (plateforme ?)
│  Sentiment: 🤔 Incertitude
│  Action: Création compte
│  Temps: 10 min
│
├─ 14:25 - Radiance
│  Sentiment: 😓 Fatigue
│  Action: Inscription
│  Temps: 10 min
│
├─ 14:35 - Carte BTP
│  Sentiment: 😤 Frustration
│  Action: Demande en ligne
│  Temps: 20 min
│
├─ 14:55 - Passeport sécurité
│  Sentiment: 😓 Lassitude
│  Action: Vérification + commande si nécessaire
│  Temps: 15 min
│
├─ 15:10 - HelloCSE
│  Sentiment: 😮‍💨 Soupir
│  Action: Création accès
│  Temps: 10 min
│
├─ 15:20 - Relances IT/Logistique
│  Sentiment: 😤 Agacement
│  Action: "Où en êtes-vous pour le PC/véhicule ?"
│  Pain Point: 🔴 Pas de suivi automatique
│  Temps: 20 min (emails + appels)
│
├─ 15:40 - Parcours intégration
│  Sentiment: 😓 Fatigue
│  Action: Planifie avec manager
│  Temps: 30 min
│
└─ 16:10 - Mise à jour checklist Excel
   Sentiment: 😞 Découragement
   Action: Coche les tâches faites
   Pain Point: 🔴 Suivi manuel primitif
   Pensée: "Encore 20 tâches à faire..."
   Temps total JOUR -7: 5h00 ⏰⏰⏰⏰⏰

═══════════════════════════════════════════════════

JOURS -6 à -1 - Préparation matériel
│
├─ Relances quotidiennes IT/Logistique
│  Sentiment: 😤 Frustration permanente
│  Pain Point: 🔴 Pas de workflow avec responsables
│  Temps: 30 min/jour × 5 jours = 2h30
│
├─ Préparation livret accueil
│  Sentiment: 😐 Neutre
│  Action: Imprime, relie
│  Temps: 30 min
│
├─ Message bienvenue S-1
│  Sentiment: 😊 Petit plaisir RH
│  Action: Email personnalisé
│  Temps: 15 min
│
└─ Trombinoscope
   Sentiment: 😓 Lassitude
   Action: Demande photo, mise à jour PDF
   Pain Point: 🔴 Trombinoscope PDF statique
   Temps: 20 min

═══════════════════════════════════════════════════

JOUR 1 - Premier jour
│
├─ 8:00 - Accueil
│  Sentiment: 😊 Positif (moment agréable)
│  Action: Accueil, tour bureaux
│  Temps: 30 min
│
├─ 8:30 - Remise matériel
│  Sentiment: 😓 Coordination difficile
│  Problème: PC pas prêt (IT en retard)
│  Pain Point: 🔴 Manque suivi temps réel
│  Temps: 1h (attente + récupération)
│
├─ 9:30 - Signature documents
│  Sentiment: 😐 Routine
│  Action: Fait signer contrat, RI, mutuelle, etc.
│  Temps: 30 min
│
├─ 10:00 - Présentation équipe
│  Sentiment: 😊 Agréable
│  Temps: 30 min
│
└─ 10:30 - Fin accueil
   Pensée: "Ouf, il est lancé. Mais il reste les rappels..."

═══════════════════════════════════════════════════

JOUR +10 - Rapport étonnement 1
│
├─ Rappel manuel Outlook
│  Sentiment: 😐 Routine
│  Action: Envoie email demandant retour
│  Pain Point: 🔴 Pas de rappel automatique
│  Temps: 10 min
│
└─ Traitement retour
   Sentiment: 😐 Neutre
   Action: Lit, classe, pas d'analyse structurée
   Pain Point: 🔴 Pas d'exploitation data
   Temps: 15 min

═══════════════════════════════════════════════════

JOUR +30 - Rapport étonnement 2
│
├─ Même processus J+10
│  Sentiment: 😓 Lassitude
│  Pain Point: 🔴 Répétitif, pas automatisé
│  Temps: 15 min
│
└─ Fin onboarding
   Sentiment: 😮‍💨 Soulagement
   Quote: "39 tâches pour une embauche. 8-10h de travail.
          Tout est manuel. Si on avait un workflow automatisé,
          je gagnerais 80% de ce temps..."
```

### 📊 Métriques du parcours Sophie - Onboarding

| Métrique | Valeur |
|----------|--------|
| **Durée totale** | 2 semaines |
| **Temps effectif** | 8-10h |
| **Nombre de tâches** | 39 |
| **Nombre d'outils** | 12 |
| **Nombre de personnes contactées** | 4-5 |
| **Nombre de relances** | 15-20 |
| **Taux d'oubli** | 10-15% |
| **Stress level** | 8/10 |
| **Points de friction** | 18 |
| **Sentiment final** | 😮‍💨 Soulagement mais épuisée |
| **Coût unitaire** | 8-10h × 30€ = 240-300€ |
| **Coût annuel** | 30 embauches × 300€ = 9K€ |

---

## ⏱️ Timeline Comparée: Processus paie mensuel {#timeline-paie}

### Vue d'ensemble du processus mensuel

```
┌─────────────────────────────────────────────────────────────────┐
│  TRAITEMENT PAIE MENSUEL: Du contrôle hebdo au bulletin         │
│  Actrice principale: Sophie (RH)                                 │
│  Durée: TOUT LE MOIS (25-30h de travail effectif)              │
└─────────────────────────────────────────────────────────────────┘

SEMAINE 1 (début mois M)
═══════════════════════════════════════════════════════════════

LUN  ┬ 9:00  SOPHIE: Contrôle hebdo FH dans POPAYE
     │ └─> 🔴 15 FH manquantes détectées manuellement [30 min]
     │
     ├ 10:00 SOPHIE: Relances managers (emails) [30 min]
     │ └─> 🔴 100% manuel, pas de notification auto
     │
     └ 10:30 SOPHIE: Appels individuels retardataires [45 min]
       └─> 🔴 8-10 appels téléphoniques

     TEMPS SEMAINE 1: 2h


SEMAINE 2
═══════════════════════════════════════════════════════════════

LUN  ┬ 9:00  SOPHIE: Contrôle hebdo #2
     │ └─> 🔴 Même processus répété [2h]

     TEMPS SEMAINE 2: 2h


SEMAINE 3
═══════════════════════════════════════════════════════════════

LUN  ┬ 9:00  SOPHIE: Contrôle hebdo #3
     │ └─> 🔴 Même processus [2h]

     TEMPS SEMAINE 3: 2h


SEMAINE 4 (avant le 9 du mois M+1)
═══════════════════════════════════════════════════════════════

MAR  ┬ 8:00  SOPHIE: Contrôle final FH
     │ └─> 🔴 Encore 3 manquantes [30 min]
     │
     ├ 8:30  SOPHIE: Appels urgents [20 min]
     │
     ├ 9:00  SOPHIE: Traitement paie POPAYE
     │ └─> ⚠️ 12 anomalies détectées
     │
     ├ 9:15  SOPHIE: Résolution anomalies
     │ └─> 🔴 Vérification manuelle une par une [1h30]
     │
     ├ 10:45 SOPHIE: **VALORISATION HEURES RÉCUP**
     │ └─> 🔴 🔴 🔴 CALCUL MANUEL POUR 100 PERSONNES
     │ └─> Excel: pour chaque salarié
     │      • Compte heures/semaine
     │      • Si >35h → heures récup
     │      • Saisit dans POPAYE
     │ └─> ⏰ **3 HEURES DE TRAVAIL ROBOTIQUE** ⏰⏰⏰
     │
     ├ 13:45 SOPHIE: Pochette éléments paie
     │ └─> 🔴 Re-saisie manuelle [45 min]
     │
     ├ 14:30 SOPHIE: Classeur rose (papier)
     │ └─> 🔴 Support papier en 2025 [30 min]
     │
     ├ 15:00 SOPHIE: Export PDF contrôle [15 min]
     │
     ├ 15:15 SOPHIE: **VÉRIFICATIONS MANUELLES**
     │ └─> 🔴 Vérifie UN PAR UN (100 pers):
     │      • Heures/semaine
     │      • KVE vs KVP
     │      • Paniers (5/sem)
     │      • Grands déplacements
     │ └─> ⏰ **2h30 DE VÉRIFICATIONS** ⏰⏰
     │
     └ 17:45 SOPHIE: Blocage période paie
       └─> 😌 Soulagement temporaire

       TEMPS MARDI: 8h30 ⏰⏰⏰⏰⏰⏰⏰⏰

═══════════════════════════════════════════════════════════════

JEU  ┬ 8:00  SOPHIE: **CALCUL TICKETS RESTAURANT**
(16) │ └─> 🔴 🔴 🔴 LE PIRE MOMENT
     │ └─> Pour CHAQUE personne (100):
     │      1. Compte jours travaillés (POPAYE)
     │      2. Soustrait absences
     │      3. Soustrait NDF (dans Excel)
     │      4. Saisit résultat Excel TR
     │ └─> ⏰ **3h30 DE CALCUL MANUEL** ⏰⏰⏰⏰
     │ └─> ❌ Risque erreur ~5%
     │
     ├ 11:30 SOPHIE: Commande SWILE
     │ └─> 🔴 Re-saisie #6 [30 min]
     │
     ├ 13:00 SOPHIE: Export 1 - Contingent Hsupp [15 min]
     │
     ├ 13:15 SOPHIE: Export 2 - SILAE [20 min]
     │
     ├ 13:35 SOPHIE: Export 3 - Contrôle paie [10 min]
     │
     ├ 13:45 SOPHIE: Tableau compléments
     │ └─> 🔴 Saisie manuelle primes, acomptes, etc [45 min]
     │
     ├ 14:30 SOPHIE: Collecte justificatifs
     │ └─> 🔴 Fouille dossiers papier + emails [30 min]
     │
     ├ 15:00 SOPHIE: Email Virginie (Only RH)
     │ └─> Joint:
     │      • Export SILAE
     │      • Compteurs
     │      • Tableau compléments
     │      • Justificatifs
     │      • Calcul TR
     │ └─> 🔴 Checklist mentale (risque oubli) [30 min]
     │
     └ 15:30 ENVOI À VIRGINIE
       └─> 😮‍💨 Soulagement

       TEMPS JEUDI: 7h ⏰⏰⏰⏰⏰⏰⏰

═══════════════════════════════════════════════════════════════

VEN  ┬ 10:00 VIRGINIE: Reçoit données
(17) │ └─> 🟠 Format non standardisé
     │ └─> Mise en forme nécessaire [2h]
     │
     ├ 14:00 VIRGINIE: Questions/incohérences
     │ └─> Email Sophie: "Pourquoi 180h M. Dupont ?"
     │
     ├ 15:00 SOPHIE: Vérifications complémentaires
     │ └─> Retour POPAYE/Excel [2h]
     │
     └ 17:00 SOPHIE: Corrections et renvoi [1h]

       TEMPS VENDREDI: 3h (Sophie)

═══════════════════════════════════════════════════════════════

SEMAINE SUIVANTE
═══════════════════════════════════════════════════════════════

LUN  ┬ 9:00  VIRGINIE: Traitement paie SILAE
(20) │ └─> Calculs bulletins
     │
     ├ 16:00 VIRGINIE: Envoi bulletins
     │
     └ 16:30 SOPHIE: Téléchargement bulletins

MAR  ┬ 9:00  SOPHIE: **CONTRÔLE BINÔME**
(21) │ └─> Vérification avec collègue:
     │      • Tickets restaurant
     │      • Éléments complémentaires
     │      • Absences
     │ └─> 🔴 Contrôle 100% manuel [2h]
     │
     ├ 11:00 SOPHIE: Détection erreurs
     │ └─> 🔴 5-10% des bulletins ont des erreurs
     │
     ├ 11:30 SOPHIE: Échange corrections Virginie
     │ └─> Via tableau partagé [1-3h selon erreurs]
     │
     └ Après-midi: Corrections finales

MER  ┬ 10:00 SOPHIE: Distribution bulletins
(22) │ └─> 😌 ENFIN TERMINÉ !
     │
     └ Pensée: "Jusqu'au mois prochain..."

       TEMPS FIN MOIS: 3-5h (Sophie)


┌─────────────────────────────────────────────────────────────────┐
│                         BILAN MENSUEL                             │
├─────────────────────────────────────────────────────────────────┤
│ DURÉE TOTALE: TOUT LE MOIS (réparti)                            │
│ TEMPS SOPHIE TOTAL: 25-30h                                       │
│   • Contrôles hebdo (×3): 6h                                    │
│   • Préparation finale: 8h30                                    │
│   • Calcul TR + exports: 7h                                     │
│   • Vérifications/corrections: 3-5h                             │
│ TEMPS VIRGINIE: 4-6h                                            │
│ TAUX D'ERREUR: 5-10%                                            │
│ NOMBRE D'OUTILS: 6                                              │
│ NOMBRE DE RE-SAISIES: 6-8                                       │
│ NIVEAU DE STRESS: 🔴🔴🔴 9/10                                    │
│ COÛT MENSUEL: 25-30h × 30€ = 750-900€                          │
│ COÛT ANNUEL: 9-11K€                                             │
│ SENTIMENT: 😭 "C'est du travail de robot, pas de RH"           │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Synthèse: Points communs entre tous les parcours

### 🔴 Pain Points CRITIQUES récurrents

1. **Tout est manuel (0% automatisation)**
   - Apparaît dans: TOUS les parcours
   - Impact: 25-30h/mois perdues uniquement sur paie

2. **Multiplication outils (15+) non connectés**
   - Apparaît dans: Sophie, Virginie
   - Impact: 6-8 re-saisies des mêmes données

3. **Aucune notification/rappel automatique**
   - Apparaît dans: TOUS
   - Impact: Relances manuelles permanentes

4. **Workflows papier archaïques**
   - Apparaît dans: Lucas, Thomas, Sophie
   - Impact: Lenteur, perte documents, stress

5. **Pas de visibilité temps réel**
   - Apparaît dans: TOUS
   - Impact: Gestion réactive au lieu de proactive

### 📊 Métriques agrégées (sur 1 mois)

| Métrique | Valeur |
|----------|--------|
| **Temps Sophie paie** | 25-30h/mois |
| **Temps managers validation FH** | 15h/mois (tous managers) |
| **Temps salariés saisie FH** | 80h/mois (tous) |
| **Nombre d'outils utilisés** | 15+ |
| **Nombre de re-saisies** | 6-8 par processus |
| **Taux d'erreur paie** | 5-10% |
| **Stress moyen** | 8/10 |
| **Temps onboarding** | 8-10h par embauche |

### 💰 Coût total mensuel du chaos RH

```
Temps RH (Sophie):
  Paie:        25h × 30€ =    750€
  Onboarding:  20h × 30€ =    600€ (2-3/mois)
  Divers:      15h × 30€ =    450€
                          --------
  TOTAL RH              =  1,800€/mois

Temps Managers:
  Validation FH: 15h × 45€ =  675€

Temps Salariés:
  Saisie FH:   80h × 28€ = 2,240€
  Congés:      10h × 28€ =   280€
                          --------
  TOTAL                  = 2,520€/mois

TOTAL MENSUEL CHAOS     = 5,000€/mois
TOTAL ANNUEL            = 60K€/an
```

---

## 🗣️ Citations des utilisateurs (verbatim)

### Sophie (RH)
> "Je passe 3 JOURS par mois sur la paie. C'est du travail de robot, pas de RH. Le calcul des tickets resto, c'est mon cauchemar mensuel."

> "39 tâches pour une embauche. Je ressaisis les mêmes données dans 15 outils. C'est de la folie."

### Thomas (Manager)
> "Je suis manager, pas administratif. Mais tous les vendredis je passe 4h à relancer pour des feuilles d'heures et à valider ligne par ligne. C'est épuisant."

### Lucas (Terrain)
> "Pour demander 3 jours de congés, ça prend 3 JOURS. Mes potes dans d'autres boîtes font ça en 2 clics sur une app. On est en 2025..."

### Virginie (Paie)
> "Chaque mois c'est la course. Je reçois des formats Excel différents, je dois tout reformater. S'il y avait une connexion directe POPAYE-SILAE, je gagnerais 4-5h."

### Christine (DG)
> "Sophie passe 60% de son temps sur des tâches robotiques au lieu de faire de la vraie RH stratégique. On perd 60-80K€ par an en inefficacités."

---

**FIN DU DOCUMENT**

> 📅 Document créé le: 2025-11-17
> 🎯 Périmètre: Ressources Humaines - État ACTUEL uniquement
> ⚠️ Focus: Pain points existants, PAS de solutions proposées
