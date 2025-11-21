# 🗺️ PARCOURS UTILISATEURS - Journey Maps Service Client

> Documentation des parcours typiques des utilisateurs dans le système ACTUEL
> Focus: PAIN POINTS existants, pas de solutions proposées

---

## 📋 TABLE DES MATIÈRES

1. [Journey Map: Claire - Gérer un appel client](#journey-claire-appel)
2. [Journey Map: Claire - Organiser le planning de Gaëtan](#journey-claire-planning)
3. [Journey Map: Client - Prendre un RDV SAV](#journey-client-rdv)
4. [Journey Map: Gaëtan (Technicien) - Intervention terrain](#journey-gaetan-intervention)
5. [Timeline comparée: De l'appel client à l'intervention](#timeline-complete)

---

## 📞 Journey Map: Claire - Gérer un appel client {#journey-claire-appel}

**Scénario**: Client appelle pour un problème électrique
**Durée totale**: 2 jours (de l'appel à la résolution)
**Stress level**: 🔴🔴🔴 Critique

```
LUNDI 9:15 - Téléphone sonne
│
│  Sentiment: 😐 Neutre
│  Pensée: "Encore un appel..."
│  Action: Décroche
│
├─ 9:16 - Client explique son problème
│  Sentiment: 🤔 Concentration
│  Dialogue:
│    Client: "J'ai un problème sur mon tableau électrique"
│    Claire: "Je note, c'est pour quel chantier ?"
│  Action: Cherche un post-it désespérément
│  Pain Point: 🔴 Pas de système de ticketing
│  Temps perdu: 30 secondes (chercher post-it)
│
├─ 9:18 - Note les informations
│  Sentiment: 😰 Anxiété
│  Pensée: "J'espère que je note tout correctement..."
│  Action: Écrit à la main sur post-it jaune
│  Contenu: "M. Dupont / pb tableau / rappeler"
│  Pain Point: 🔴 Aucune traçabilité
│  Risque: ❌ Informations incomplètes
│
├─ 9:20 - Cherche l'historique client
│  Sentiment: 😤 Frustration
│  Action: Ouvre ERP... ferme... ouvre SAGE... ferme... ouvre Excel
│  Pensée: "Où sont les infos de ce client déjà ?"
│  Pain Point: 🔴 Données éparpillées (ERP + SAGE + Excel)
│  Temps perdu: 5 minutes de recherche
│  Quote: "J'ai 4 fenêtres ouvertes et je ne trouve rien"
│
├─ 9:25 - Trouve enfin le client dans SAGE
│  Sentiment: 😓 Soulagement temporaire
│  Action: Lit l'historique
│  Problème: Dernière intervention il y a 6 mois
│  Pain Point: 🔴 Pas d'historique des appels
│  Incertitude: ❓ A-t-il déjà appelé pour ce problème ?
│
├─ 9:27 - Promet un rappel
│  Sentiment: 😬 Incertitude
│  Dialogue:
│    Claire: "Je vais voir avec un technicien et je vous rappelle"
│    Client: "Quand ?"
│    Claire: "Euh... d'ici ce soir"
│  Pain Point: 🔴 Pas de SLA défini
│  Action: Pose post-it sur le bord de l'écran
│  Risque: ❌ Oubli (post-it qui tombe)
│
└─ 9:30 - Fin de l'appel
   Sentiment: 😟 Inquiétude
   Pensée: "Il faut que je pense à le rappeler..."
   Pain Point: 🔴 Aucun système de rappel automatique
   Post-it: Placé avec 15 autres sur l'écran

═══════════════════════════════════════════════════

LUNDI 10:45 - Essaie de contacter un technicien
│
├─ 10:45 - Appelle Gaëtan
│  Sentiment: 😐 Espoir
│  Résultat: ❌ Pas de réponse (sur intervention)
│  Pain Point: 🔴 Pas de canal asynchrone
│  Temps perdu: 2 minutes
│
├─ 10:50 - Envoie un SMS
│  Sentiment: 😕 Doute
│  SMS: "Client Dupont pb tableau, peux-tu intervenir ?"
│  Pain Point: 🔴 Pas de système de notification structuré
│  Incertitude: ❓ Quand va-t-il répondre ?
│
└─ 11:30 - Toujours pas de réponse
   Sentiment: 😰 Anxiété montante
   Pensée: "Le client va rappeler et je n'aurai rien à lui dire..."
   Action: Regarde le post-it, stresse

═══════════════════════════════════════════════════

LUNDI 16:00 - Gaëtan répond ENFIN
│
├─ 16:00 - SMS de Gaëtan
│  Sentiment: 😌 Soulagement
│  SMS: "Ok je peux demain 14h"
│  Pensée: "Ouf !"
│
├─ 16:05 - Cherche le numéro du client
│  Sentiment: 🤔 Concentration
│  Action: Regarde le post-it... Numéro pas noté !!
│  Pain Point: 🔴 Informations incomplètes sur post-it
│  Temps perdu: 3 minutes (recherche dans SAGE)
│
├─ 16:10 - Appelle le client
│  Sentiment: 😬 Stress
│  Résultat: ❌ Tombe sur le répondeur
│  Action: Laisse un message
│
├─ 16:15 - Envoie un mail de confirmation
│  Sentiment: 😓 Fatigue
│  Action: Écrit un mail manuellement
│  Pain Point: 🔴 Pas de template
│  Temps perdu: 5 minutes (écrire mail complet)
│  Quote: "Je dois écrire le même mail 10 fois par jour..."
│
└─ 16:20 - Post-it → poubelle
   Sentiment: 😮‍💨 Soulagement final
   Pensée: "Enfin réglé... jusqu'au prochain"
   Risque: ❌ Aucune traçabilité conservée !

═══════════════════════════════════════════════════

MARDI 13:00 - Client rappelle (anxieux)
│
├─ 13:00 - Téléphone sonne
│  Sentiment: 😰 Panique
│  Client: "Vous aviez dit qu'on me rappelait hier soir !"
│  Pensée: "Mince, j'ai oublié de rappeler après avoir eu Gaëtan..."
│  Pain Point: 🔴 Oubli (post-it jeté trop tôt)
│  Impact: ⚠️ Client mécontent
│
├─ 13:02 - S'excuse et confirme RDV
│  Sentiment: 😓 Gêne
│  Dialogue:
│    Claire: "Toutes mes excuses, c'est bien demain 14h"
│    Client: "Bon, ok..." (ton froid)
│  Impact: ⚠️ Image dégradée
│
└─ 13:05 - Nouveau post-it
   Sentiment: 😤 Frustration envers elle-même
   Pensée: "Il faut vraiment qu'on change de système..."
   Action: Note "Demain 14h Dupont Gaëtan"
   Pain Point: 🔴 Retour au même système défaillant
```

### 📊 Métriques du parcours Claire - Appel client

| Métrique | Valeur |
|----------|--------|
| **Durée totale** | 2 jours |
| **Nombre de contacts** | 8 (appels, SMS, mails) |
| **Temps perdu** | 40 minutes |
| **Nombre de post-it** | 2 (dont 1 jeté prématurément) |
| **Risque d'oubli** | 80% |
| **Satisfaction client** | 4/10 (déçu par l'attente) |
| **Stress level** | 7/10 |
| **Points de friction** | 11 |
| **Sentiment final** | 😤 Frustration systémique |

### 💬 Citations Claire

> "Je passe ma journée à jongler entre post-it, téléphone, ERP et SAGE. J'ai l'impression d'être une pieuvre avec un cerveau de poisson rouge."

> "Quand un client rappelle et que j'ai jeté le post-it, c'est la panique. Je dois refaire toute la recherche."

> "Donnez-moi un vrai système de tickets et je divise mes erreurs par 10."

---

## 📅 Journey Map: Claire - Organiser le planning de Gaëtan {#journey-claire-planning}

**Scénario**: Organiser un RDV pour un client qui veut un entretien
**Durée totale**: 48 heures
**Stress level**: 🔴🔴🔴🔴 Critique

```
LUNDI 10:00 - Client appelle pour RDV entretien
│
│  Sentiment: 😊 Positive
│  Client: "Bonjour, je voudrais prendre RDV pour l'entretien annuel"
│  Pensée: "Ça devrait être simple..."
│  Réalité: Ça va être l'enfer
│
├─ 10:02 - Ouvre le fichier Excel planning Gaëtan
│  Sentiment: 😐 Concentration
│  Action: Cherche le fichier dans le réseau partagé
│  Localisation: X:\Planning\Gaetan_Novembre_2025.xlsx
│  Pain Point: 🔴 Excel = pas de vision temps réel
│  Temps perdu: 1 minute (ouverture fichier)
│
├─ 10:03 - Regarde les disponibilités
│  Sentiment: 🤔 Doute
│  Tableau Excel:
│    Lundi 8h-12h: "Chantier Annecy?"
│    Lundi 14h-18h: "Dispo ?"
│    Mardi: (vide)
│  Pain Point: 🔴 Informations imprécises, points d'interrogation
│  Incertitude: ❓ Est-ce vraiment dispo ?
│  Quote: "Il y a des '?' partout, je ne sais jamais si c'est confirmé"
│
├─ 10:05 - Propose un créneau (incertaine)
│  Sentiment: 😬 Malaise
│  Dialogue:
│    Claire: "Je peux vous proposer mardi 9h..."
│    Client: "Parfait !"
│    Claire: "Mais... je dois confirmer avec le technicien"
│    Client: "Ah... donc c'est pas sûr ?"
│    Claire: "Je vous envoie un mail de confirmation d'ici ce soir"
│  Pain Point: 🔴 Pas de confirmation immédiate
│  Impact: ⚠️ Client frustré
│  Temps perdu: 5 minutes (explications)
│
├─ 10:10 - Fin de l'appel
│  Sentiment: 😓 Insatisfaction
│  Pensée: "Je déteste dire 'je vous confirme plus tard'"
│  Action: Note sur post-it "Mail Gaëtan mardi 9h client Durand"
│  Pain Point: 🔴 Workflow archaïque
│
└─ 10:12 - Envoie mail à Gaëtan
   Sentiment: 😕 Espoir mitigé
   Mail: "Salut Gaëtan, tu es dispo mardi 9h pour un entretien ?"
   Pain Point: 🔴 Communication asynchrone lente
   Incertitude: ❓ Quand va-t-il répondre ?

═══════════════════════════════════════════════════

LUNDI 11:00 - Toujours pas de réponse
│
├─ 11:00 - Regarde boîte mail compulsivement
│  Sentiment: 😰 Anxiété
│  Résultat: Rien
│  Pensée: "Il est peut-être sur intervention sans réseau..."
│
└─ 11:30 - Toujours rien
   Sentiment: 😤 Irritation
   Pensée: "Le client attend ma confirmation..."

═══════════════════════════════════════════════════

LUNDI 14:00 - Toujours pas de réponse
│
├─ 14:00 - Appelle Gaëtan
│  Sentiment: 😠 Frustration
│  Résultat: ❌ Pas de réponse (évident, il travaille)
│  Temps perdu: 2 minutes
│
├─ 14:05 - Envoie SMS
│  Sentiment: 😫 Désespoir
│  SMS: "Gaëtan urgent, peux-tu confirmer mardi 9h ?"
│  Pain Point: 🔴 Multi-canal désordonné
│
└─ 14:10 - Attente stressante
   Sentiment: 😰 Angoisse
   Pensée: "Si il n'est pas dispo je dois rappeler le client..."
   Impact: ⚠️ Stress inutile

═══════════════════════════════════════════════════

LUNDI 17:30 - Gaëtan répond par mail
│
├─ 17:30 - Mail de Gaëtan
│  Sentiment: 😌 Soulagement... puis 🤬 Rage
│  Mail: "Désolé Claire, mardi 9h je suis pris. Je peux mercredi 14h"
│  Pensée: "Toute la journée d'attente pour ça !!!"
│  Pain Point: 🔴 Délai de réponse inacceptable (7h30)
│  Impact: ⚠️ Doit tout recommencer
│
├─ 17:35 - Appelle le client
│  Sentiment: 😓 Gêne profonde
│  Résultat: ❌ Répondeur (le client est parti du travail)
│  Temps perdu: 2 minutes
│
├─ 17:40 - Envoie mail au client
│  Sentiment: 😞 Déception
│  Mail: "Bonjour M. Durand, finalement mardi 9h n'est pas possible.
│         Je peux vous proposer mercredi 14h. Pouvez-vous confirmer ?"
│  Pain Point: 🔴 Image désorganisée
│  Action: Écrit manuellement (pas de template)
│  Temps perdu: 5 minutes
│
└─ 17:45 - Fin de journée
   Sentiment: 😫 Épuisement
   Pensée: "J'ai passé presque 8h sur un simple RDV..."
   Quote: "Demain il va falloir que j'attende ENCORE la réponse du client"

═══════════════════════════════════════════════════

MARDI 10:00 - Client répond par mail
│
├─ 10:00 - Mail client
│  Sentiment: 🤞 Espoir
│  Mail: "Mercredi 14h ça marche"
│  Pensée: "Enfin !!"
│
├─ 10:05 - Mise à jour Excel planning
│  Sentiment: 😐 Neutre
│  Action: Ouvre fichier, cherche mercredi, écrit "14h M. Durand"
│  Pain Point: 🔴 Saisie manuelle (risque erreur)
│  Temps perdu: 2 minutes
│
├─ 10:07 - Saisie dans Outlook
│  Sentiment: 😤 Irritation
│  Action: Crée événement Outlook "RDV Durand 14h"
│  Pain Point: 🔴 Double saisie (Excel + Outlook)
│  Temps perdu: 2 minutes
│  Quote: "Pourquoi je dois saisir 2 fois la même chose ??"
│
├─ 10:10 - Mail de confirmation client
│  Sentiment: 😓 Soulagement final
│  Action: Écrit mail confirmation
│  Contenu: Adresse, heure, contact Gaëtan
│  Temps perdu: 5 minutes (pas de template)
│
├─ 10:15 - Mail de notification Gaëtan
│  Sentiment: 😮‍💨 Ouf
│  Mail: "Gaëtan, RDV confirmé mercredi 14h M. Durand à..."
│  Pain Point: 🔴 Notification manuelle
│  Temps perdu: 3 minutes
│
└─ 10:18 - ENFIN terminé
   Sentiment: 😫 Épuisement mental
   Pensée: "48h pour un RDV. C'est du délire."
   Quote: "Et dire que je dois faire ça 10-15 fois par jour..."
   Impact: ⛔ Temps perdu monumental
```

### 📊 Métriques du parcours Claire - Planning RDV

| Métrique | Valeur |
|----------|--------|
| **Durée totale** | 48 heures |
| **Temps actif Claire** | 40 minutes |
| **Nombre de contacts** | 10 (appels, mails, SMS) |
| **Nombre de saisies** | 3 (post-it, Excel, Outlook) |
| **Délai de confirmation** | 2 jours |
| **Nombre d'outils** | 5 (téléphone, Excel, Outlook, mail, SMS) |
| **Stress level** | 9/10 |
| **Points de friction** | 15 |
| **Sentiment final** | 😫 Épuisement |

### 💬 Citations Claire

> "Organiser un RDV devrait prendre 2 minutes. Ça me prend 2 JOURS. C'est aberrant."

> "Le pire c'est que je passe ma journée à attendre des réponses. Je ne contrôle rien."

> "J'aimerais tellement que le client puisse voir les dispos en temps réel et prendre RDV lui-même comme chez le médecin."

### 💰 Impact business

- **Temps Claire** : 40 min × 15 RDV/jour = 10h/jour → **INACCEPTABLE**
- **Satisfaction client** : 5/10 (frustré par le délai)
- **Image entreprise** : "Pas organisés"
- **Coût** : 40 min × 15 × 220 jours = 2200h/an × 50€ = **110K€/an**

---

## 👤 Journey Map: Client - Prendre un RDV SAV {#journey-client-rdv}

**Scénario**: Client M. Martin veut prendre RDV pour un entretien
**Durée totale**: 3 jours
**Stress level**: 🟠🟠🟠 Important

```
LUNDI 8:30 - Besoin identifié
│
│  Sentiment: 😊 Positif
│  Pensée: "Il faut que je prenne RDV pour l'entretien annuel"
│  Action: Cherche le numéro de Duret Électricité
│
├─ 8:35 - Appelle Duret
│  Sentiment: 😐 Neutre
│  Action: Compose le numéro
│  Résultat: ❌ "Toutes nos lignes sont occupées"
│  Pain Point: 🔴 Pas de possibilité de RDV en ligne
│  Temps perdu: 5 minutes
│
├─ 8:40 - Rappelle
│  Sentiment: 😕 Léger agacement
│  Résultat: ✅ Claire décroche
│  Dialogue: (voir parcours Claire ci-dessus)
│
├─ 8:48 - Fin de l'appel
│  Sentiment: 😬 Insatisfaction
│  Pensée: "Elle ne peut même pas me confirmer le RDV tout de suite..."
│  Impact: ⚠️ Première déception
│
└─ 8:50 - Attente de confirmation
   Sentiment: 😕 Doute
   Pensée: "J'espère qu'elle ne va pas oublier..."
   Pain Point: 🔴 Pas de confirmation immédiate

═══════════════════════════════════════════════════

LUNDI 18:00 - Toujours pas de confirmation
│
├─ 18:00 - Vérifie ses mails
│  Sentiment: 😠 Irritation
│  Résultat: Rien
│  Pensée: "Elle avait dit ce soir..."
│
└─ 18:30 - Mail de Claire arrive
   Sentiment: 😤 Frustration
   Mail: "Finalement mardi 9h n'est pas possible, je peux mercredi 14h"
   Pensée: "Ils sont vraiment désorganisés..."
   Impact: ⚠️ Image dégradée

═══════════════════════════════════════════════════

MARDI 9:00 - Répond au mail
│
├─ 9:00 - Envoie confirmation
│  Sentiment: 😕 Résignation
│  Mail: "Mercredi 14h ça marche"
│  Pensée: "Pas le choix de toute façon"
│
└─ 10:15 - Reçoit confirmation finale
   Sentiment: 😐 Neutre
   Pensée: "Enfin. Ça aurait pu être fait en 5 minutes..."
   Quote: "Chez le médecin je prends RDV en 2 clics sur Doctolib.
           Pourquoi pas ici ?"
```

### 📊 Métriques du parcours Client

| Métrique | Valeur |
|----------|--------|
| **Durée totale** | 3 jours |
| **Nombre de contacts** | 4 (2 appels, 2 mails) |
| **Temps client perdu** | 30 minutes |
| **Satisfaction** | 5/10 |
| **Probabilité de recommander** | 40% (NPS faible) |
| **Comparaison Doctolib** | 2 minutes vs 3 jours |

### 💬 Citation Client

> "Je perds mon temps à prendre RDV. Avec Doctolib, c'est fait en 2 minutes. Duret devrait faire pareil."

---

## 🔧 Journey Map: Gaëtan (Technicien) - Intervention terrain {#journey-gaetan-intervention}

**Scénario**: Intervention chez M. Dupont (problème tableau électrique)
**Durée totale**: 1 jour
**Stress level**: 🟠🟠 Important

```
MARDI 13:30 - Départ pour intervention
│
│  Sentiment: 😊 Positif
│  Pensée: "Intervention chez Dupont à 14h"
│  Action: Prend matériel, part
│
├─ 14:00 - Arrivée chez le client
│  Sentiment: 😐 Neutre
│  Action: Sonne
│  Client: "Bonjour, merci d'être venu"
│
├─ 14:05 - Diagnostic
│  Sentiment: 🤔 Concentration
│  Action: Examine le tableau
│  Constat: "Il faudrait remplacer 3 disjoncteurs"
│  Client: "Vous pouvez me faire un devis ?"
│  Pain Point: 🔴 Impossible de générer devis terrain
│  Quote: "Quand en clientèle, souvent demande de devis,
           on sait pas documenter"
│
├─ 14:10 - Note la demande
│  Sentiment: 😕 Frustration
│  Action: Note sur papier (carnet)
│  Pensée: "Je vais devoir dire à Claire..."
│  Pain Point: 🔴 Pas de formulaire digital demande devis
│  Risque: ❌ Oubli de transmettre
│
├─ 14:15 - Remplit bon d'intervention CERFA
│  Sentiment: 😤 Irritation
│  Action: Remplit à la main (10 minutes)
│  Pain Point: 🔴 CERFA papier chronophage
│  Temps perdu: 10 minutes
│  Quote: "Tous remplis à la main, c'est long et chiant"
│
├─ 14:25 - Fait signer le client
│  Sentiment: 😬 Gêne
│  Action: Tend le CERFA
│  Client: "C'est écrit comment ? Je ne comprends rien"
│  Pain Point: 🔴 Illisible (écriture manuscrite)
│  Impact: ⚠️ Image pas professionnelle
│
├─ 14:30 - Voudrait prendre des photos
│  Sentiment: 🤔 Hésitation
│  Pensée: "Je devrais prendre des photos avant/après..."
│  Action: Sort son téléphone perso
│  Pain Point: 🔴 Photos sur téléphone perso, pas centralisées
│  Risque: ❌ Perte photos, pas de date/lieu automatique
│
└─ 14:35 - Fin d'intervention
   Sentiment: 😕 Insatisfaction
   Pensée: "J'ai perdu une opportunité commerciale (devis)"
   Quote: "Si j'avais une app, je générais le devis direct,
           le client signait, et c'était envoyé automatiquement.
           Là je vais oublier de le dire à Claire..."
```

### 📊 Métriques du parcours Gaëtan - Intervention

| Métrique | Valeur |
|----------|--------|
| **Durée intervention** | 35 minutes |
| **Dont admin papier** | 10 minutes (29%) |
| **Demande devis client** | Notée papier (risque oubli 50%) |
| **Photos** | Téléphone perso (non centralisées) |
| **Satisfaction Gaëtan** | 4/10 (frustré par process) |
| **CA potentiel perdu** | 50 devis/an × 30% × 3K€ = **45K€/an** |

### 💬 Citations Gaëtan

> "Je passe autant de temps à remplir du papier qu'à faire mon boulot."

> "Avec une app comme les plombiers, je pourrais tout faire sur place : pointage, devis, photos, signature. Là c'est 2025 et j'utilise du papier."

---

## ⏱️ Timeline comparée: De l'appel client à l'intervention {#timeline-complete}

```
SYSTÈME ACTUEL (CHAOS) - 48 HEURES
═══════════════════════════════════════════════════════════

LUNDI
├─ 9:15  [CLIENT] Appel → Claire
├─ 9:30  [CLAIRE] Note post-it
├─ 10:45 [CLAIRE] Appelle Gaëtan (pas de réponse)
├─ 10:50 [CLAIRE] SMS Gaëtan
├─ 16:00 [GAËTAN] Répond SMS → dispo mardi 14h
├─ 16:10 [CLAIRE] Appelle client (répondeur)
├─ 16:20 [CLAIRE] Mail client

MARDI
├─ 10:00 [CLIENT] Mail OK pour mardi 14h
├─ 10:05 [CLAIRE] Saisie Excel planning
├─ 10:07 [CLAIRE] Saisie Outlook
├─ 10:15 [CLAIRE] Mail confirmation client + Gaëtan
├─ 14:00 [GAËTAN] Intervention
└─ 14:35 [FIN] (mais devis oublié)

Temps total: 48 HEURES
Temps actif Claire: 40 minutes
Temps actif Gaëtan: 35 minutes
Points de friction: 26
Outils utilisés: 7 (téléphone, post-it, Excel, Outlook, mail, SMS, CERFA)
Opportunité commerciale: PERDUE (50% oubli)

═══════════════════════════════════════════════════════════

SYSTÈME DIGITAL (CIBLE) - 2 HEURES
═══════════════════════════════════════════════════════════

LUNDI
├─ 9:15  [CLIENT] Crée ticket via portail ou appel → CRM auto
├─ 9:16  [SYSTÈME] Notifie Gaëtan sur app mobile
├─ 9:20  [GAËTAN] Accepte RDV mardi 14h (1 clic sur app)
├─ 9:21  [SYSTÈME] Confirme auto client (mail + SMS)
└─ 10:00 [CLIENT] Reçoit confirmation

MARDI
├─ 14:00 [GAËTAN] Intervention
├─ 14:05 [GAËTAN] Diagnostic → génère devis sur app (2 min)
├─ 14:10 [CLIENT] Valide devis (signature électronique)
├─ 14:20 [GAËTAN] Remplit bon intervention digital (2 min)
├─ 14:25 [GAËTAN] Photos avant/après (géolocalisées)
├─ 14:30 [CLIENT] Signe bon intervention sur tablette
├─ 14:31 [SYSTÈME] Sync auto CRM + facturation
└─ 14:35 [FIN] + Questionnaire satisfaction auto J+2

Temps total: 2 HEURES
Temps actif Claire: 0 minute (automatisé)
Temps actif Gaëtan: 30 minutes (5 min économisées)
Points de friction: 4
Outils utilisés: 1 (app mobile + CRM cloud)
Opportunité commerciale: CAPTURÉE (devis généré)

GAINS
=====
Temps: -46h (-96%)
Claire: +40 min/RDV × 15 RDV/j = 10h/j libérées
Gaëtan: +5 min/intervention
Satisfaction client: +40% (confirmation immédiate)
CA additionnel: 45K€/an (devis terrain)
```

---

## 📊 SYNTHÈSE COMPARATIVE

### Temps perdu par acteur

| Acteur | Temps actuel/RDV | Temps cible/RDV | Gain |
|--------|------------------|-----------------|------|
| **Claire** | 40 min | 2 min | **38 min** |
| **Gaëtan** | 35 min | 30 min | **5 min** |
| **Client** | 30 min | 5 min | **25 min** |
| **Total** | 105 min | 37 min | **68 min (-65%)** |

### Coûts annuels

| Métrique | Actuel | Cible | Gain |
|----------|--------|-------|------|
| **Temps Claire** | 2200h/an | 110h/an | **110K€/an** |
| **Opportunités perdues** | 45K€/an | 0 | **45K€/an** |
| **Clients perdus (insatisfaction)** | 100K€/an | 20K€/an | **80K€/an** |
| **TOTAL** | **235K€/an** | **20K€/an** | **215K€/an** |

---

## 💡 INSIGHTS CLÉS

### Pain Points récurrents (tous parcours)

1. 🔴 **Post-it everywhere** → Aucune traçabilité, oublis fréquents
2. 🔴 **Données éparpillées** → ERP + SAGE + Excel + papier
3. 🔴 **Communication asynchrone lente** → SMS, mails, attente
4. 🔴 **Pas de confirmation immédiate** → Délai 24-48h inacceptable
5. 🔴 **Process manuels chronophages** → CERFA, templates, double saisie
6. 🔴 **Opportunités commerciales perdues** → Devis terrain impossible

### Émotions dominantes

- **Claire** : Frustration (😤), Anxiété (😰), Épuisement (😫)
- **Gaëtan** : Frustration (😤), Résignation (😕)
- **Client** : Insatisfaction (😬), Impatience (😠)

### Citations les plus percutantes

> "Je passe ma journée à jongler entre post-it, téléphone, ERP et SAGE." - Claire

> "48h pour un RDV. C'est du délire." - Claire

> "Chez le médecin je prends RDV en 2 clics sur Doctolib. Pourquoi pas ici ?" - Client

> "Si j'avais une app, je générais le devis direct. Là je vais oublier." - Gaëtan

---

**💰 ENJEU TOTAL : 215K€/an de gains possibles**
**⏰ GAIN TEMPS CLAIRE : 2090h/an → réallouer sur développement commercial**
**🎯 OBJECTIF : Passer de 48h à 2h pour un RDV complet**
