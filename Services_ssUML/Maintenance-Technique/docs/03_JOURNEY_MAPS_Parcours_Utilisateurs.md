# 🗺️ JOURNEY MAPS - Parcours Utilisateurs Maintenance Technique

**Entreprise** : Duret Électricité - Annecy
**Date audit** : Novembre 2025
**Service** : Maintenance Technique & SAV

---

## 📋 TABLE DES MATIÈRES

1. [Journey Map #1 : Gaëtan - Intervention Terrain (Journée Type)](#journey-1)
2. [Journey Map #2 : Gaëtan - Demande Devis Terrain (Opportunité Perdue)](#journey-2)
3. [Journey Map #3 : Clothilde - Prise RDV Client](#journey-3)
4. [Journey Map #4 : Client - Contrat Maintenance (Cycle Complet)](#journey-4)
5. [Timeline Comparée : Avant/Après](#timeline)

---

<a name="journey-1"></a>
## 🔧 JOURNEY MAP #1 : Gaëtan - Intervention Terrain (Journée Type)

### Contexte
- **Persona** : Gaëtan, 42 ans, Technicien SAV Senior
- **Objectif** : Réaliser 4 interventions maintenance
- **Durée** : 1 journée (8h00-19h00)
- **Outils** : CERFA papier, App mobile GAO, Téléphone perso

---

### Parcours Détaillé

```
TIMELINE : 8h00 → 19h00 (11 heures)
════════════════════════════════════════════════════════════════

8h00 ┌──────────────────────────────────────┐
     │ RÉUNION HEBDO (Mercredi)              │
     │ • Planification semaine               │
     │ • Gaëtan + équipe                     │
     │ • 1h                                  │
     └──────────────────────────────────────┘
     😐 Neutre
     💭 "Encore une réunion... bon, voyons le programme"

8h30 ┌──────────────────────────────────────┐
     │ PRÉPARATION TOURNÉE                   │
     │ • Imprimer planning (papier)          │
     │ • Prendre CERFA vierges (× 5)         │
     │ • Vérifier app mobile                 │
     │ • 15 min                              │
     └──────────────────────────────────────┘
     😊 Satisfait
     💭 "OK, 4 interventions aujourd'hui, c'est gérable"

9h00 ┌──────────────────────────────────────┐
     │ INTERVENTION #1 : Client A            │
     │ (Annecy Centre - Contrat Or)          │
     │                                       │
     │ 9h00 → Déplacement : 20 min           │
     │ 9h20 → Intervention : 1h30            │
     │        - Vérification tableau         │
     │        - Contrôle conformité          │
     │ 10h50 → CERFA rempli à la main : 12min│
     │ 11h02 → Photos téléphone perso : 5min │
     │ TOTAL : 2h07                          │
     └──────────────────────────────────────┘
     😊 Satisfait
     💭 "Intervention nickel, client content"

     🔴 PAIN POINT :
     - CERFA papier chronophage (12 min)
     - Photos sur téléphone perso (pas centralisées)

11h07 ┌──────────────────────────────────────┐
      │ INTERVENTION #2 : Client B           │
      │ (Annecy-le-Vieux - Contrat Argent)   │
      │                                      │
      │ 11h07 → Déplacement : 25 min         │
      │         (pas optimisé! retour zone)  │
      │ 11h32 → Intervention : 1h15          │
      │ 12h47 → CERFA : 12 min               │
      │ 12h59 → Client : "Au fait, je        │
      │         voudrais devis pour changer  │
      │         mon tableau secondaire"      │
      │         Gaëtan : "Je note, on vous   │
      │         rappelle" (post-it)          │
      │ TOTAL : 1h52                         │
      └──────────────────────────────────────┘
      😟 Frustré
      💭 "Pas d'outil pour devis terrain...
          je note sur post-it, j'espère ne pas oublier"

      🔴🔴 PAIN POINTS :
      - Impossible générer devis terrain → 45K€/an perdu
      - Post-it → risque oubli élevé
      - Déplacement non optimisé (+10 min)

12h59 ┌──────────────────────────────────────┐
      │ PAUSE DÉJEUNER                       │
      │ • 1h                                 │
      └──────────────────────────────────────┘
      😊 Repos
      💭 "Bon, deux interv' de plus cet aprèm"

14h00 ┌──────────────────────────────────────┐
      │ INTERVENTION #3 : Client C           │
      │ (Seynod - Contrat Bronze)            │
      │                                      │
      │ 14h00 → Déplacement : 30 min         │
      │         (retour zone Annecy!)        │
      │ 14h30 → Intervention : 2h            │
      │         Anomalie détectée (tableau)  │
      │ 16h30 → Appel Clothilde :            │
      │         "Client C, anomalie tableau, │
      │         faut prévoir intervention    │
      │         spécialisée"                 │
      │         Clothilde : "OK je note"     │
      │ 16h35 → CERFA : 15 min               │
      │ TOTAL : 2h45                         │
      └──────────────────────────────────────┘
      😠 Frustré
      💭 "30 min trajet pour rien, j'étais
          déjà à Annecy-le-Vieux! Planning
          pas optimisé"

      🔴🔴🔴 PAIN POINTS :
      - Zoning pas intelligent (-30 min)
      - Anomalie → appel manuel (pas d'alerte auto)
      - CERFA papier encore (15 min perdu)

16h45 ┌──────────────────────────────────────┐
      │ INTERVENTION #4 : Client D           │
      │ (Annecy Sud - Contrat Or)            │
      │                                      │
      │ 16h45 → Déplacement : 20 min         │
      │ 17h05 → Intervention : 2h (!)        │
      │         Prévu 1h30 → dépassement     │
      │         Complexité sous-estimée      │
      │ 19h05 → ❌ PAS DE POINTAGE DIGITAL   │
      │         → difficile refacturer 30min │
      │         supplémentaires              │
      │ 19h05 → CERFA : 12 min               │
      │ TOTAL : 2h32                         │
      └──────────────────────────────────────┘
      😤 Très frustré
      💭 "Merde, 30 min de plus, mais comment
          je prouve ça? Pas de pointage...
          on va encore perdre de l'argent"

      🔴🔴🔴 PAIN POINTS :
      - Pointage heure pas digital → 30K€/an perdu
      - Impossible prouver dépassement
      - Refacturation difficile

18h17 ┌──────────────────────────────────────┐
      │ RETOUR BASE                          │
      │ • Remettre 4 CERFA à Clothilde       │
      │ • Clothilde scan/archive : 30 min    │
      │ • Clothilde saisie GAO : 20 min      │
      └──────────────────────────────────────┘
      😫 Épuisé
      💭 "Enfin fini... longue journée"

19h07 ┌──────────────────────────────────────┐
      │ FIN JOURNÉE                          │
      │ Post-it demande devis Client B       │
      │ → perdu le lendemain (!) → 3K€       │
      └──────────────────────────────────────┘
      😔 Déçu
      💭 "J'ai oublié le post-it devis...
          encore une opportunité de perdue"

═══════════════════════════════════════════════════════════════

BILAN JOURNÉE :
✅ 4 interventions réalisées
❌ 51 min perdus CERFA papier
❌ 30 min déplacements non optimisés
❌ 1 devis perdu (3K€)
❌ 30 min refacturation impossible
🕐 TOTAL : 11h01 (dont 1h51 inefficacité)

NIVEAU STRESS : 7/10
SATISFACTION : 4/10
```

---

### Émotions Graphique

```
10 😊 ────────────────────────────────────────────────
 9
 8                ●
 7           ●
 6      ●
 5                               ●
 4
 3                                    ●
 2                                              ●
 1 😤 ────────────────────────────────────────────────
   8h  9h  11h  12h  14h  16h  18h  19h
```

---

<a name="journey-2"></a>
## 💰 JOURNEY MAP #2 : Gaëtan - Demande Devis Terrain (Opportunité Perdue)

### Contexte
- **Objectif** : Client demande devis travaux additionnels pendant intervention
- **Durée** : 5 min (discussion) → PERDU
- **Impact** : 3K€ de CA perdu
- **Fréquence** : 50×/an = **45K€/an**

---

### Parcours Détaillé

```
J0 - 11h45 ┌──────────────────────────────────────┐
           │ CLIENT B : "Au fait Gaëtan..."       │
           │ "Je voudrais changer mon tableau     │
           │  secondaire, c'est possible?"        │
           └──────────────────────────────────────┘
           😊 Client intéressé
           💭 Client : "Maintenant qu'il est là,
              autant en profiter"

J0 - 11h46 ┌──────────────────────────────────────┐
           │ GAËTAN : "Oui bien sûr, je note"     │
           │ • Sort post-it                       │
           │ • Écrit : "Client B - devis tableau  │
           │   secondaire"                        │
           │ • Met post-it dans poche             │
           └──────────────────────────────────────┘
           😐 Neutre
           💭 Gaëtan : "J'espère ne pas oublier
              de transmettre à Clothilde"

           🔴 PAIN POINT :
           - Pas d'outil devis terrain
           - Post-it = risque oubli élevé

J0 - 18h17 ┌──────────────────────────────────────┐
           │ RETOUR BASE                          │
           │ • Gaëtan vide poches                 │
           │ • Post-it... où est-il passé ?       │
           │ • Ah voilà, dans la camionnette      │
           │ • Le pose sur bureau Clothilde       │
           └──────────────────────────────────────┘
           😟 Inquiet
           💭 "J'ai failli perdre le post-it...
              heureusement je l'ai retrouvé"

J1 - 9h00  ┌──────────────────────────────────────┐
           │ CLOTHILDE arrive bureau              │
           │ • Post-it pas vu (sous dossier)      │
           │ • Journée chargée                    │
           └──────────────────────────────────────┘
           🔴 OUBLI
           💭 Clothilde : "Bon, que faire aujourd'hui..."

J3 - 10h00 ┌──────────────────────────────────────┐
           │ CLIENT B rappelle (frustré)          │
           │ "Bonjour, je n'ai toujours pas eu    │
           │  de nouvelles pour mon devis?"       │
           │                                      │
           │ Clothilde : "Euh... quel devis ?"    │
           │                                      │
           │ Client : "Le devis tableau dont j'ai │
           │  parlé à Gaëtan mardi!"              │
           └──────────────────────────────────────┘
           😠 Client mécontent
           😳 Clothilde embarrassée

           🔴🔴 DÉGÂTS :
           - Image pas professionnelle
           - Client frustré
           - Perte confiance

J3 - 10h05 ┌──────────────────────────────────────┐
           │ Clothilde cherche post-it            │
           │ • Ah voilà! (sous dossier)           │
           │ • Appelle Gaëtan :                   │
           │   "C'est quoi ce devis Client B?"    │
           │ • Gaëtan : "Tableau secondaire"      │
           │ • Clothilde : "OK je m'en occupe"    │
           └──────────────────────────────────────┘
           😫 Stressée
           💭 "Encore un oubli... c'est la honte"

J3 - 15h00 ┌──────────────────────────────────────┐
           │ Devis envoyé (enfin)                 │
           │ • 3 jours après demande              │
           │ • Client a eu le temps de contacter  │
           │   concurrent                         │
           └──────────────────────────────────────┘

J5 - 9h00  ┌──────────────────────────────────────┐
           │ CLIENT B : "Merci pour le devis,     │
           │  mais j'ai déjà fait faire par       │
           │  quelqu'un d'autre"                  │
           │                                      │
           │ OPPORTUNITÉ PERDUE : 3K€             │
           └──────────────────────────────────────┘
           😞 Déception
           💰 -3,000€

═══════════════════════════════════════════════════════════

BILAN :
❌ Opportunité commerciale PERDUE (3K€)
❌ Image dégradée
❌ Client mécontent
❌ Stress équipe

FRÉQUENCE : 50 fois/an
IMPACT ANNUEL : 50 × 3K€ × 30% = 45K€/an
```

---

### Solution Cible (App Mobile Devis Terrain)

```
J0 - 11h45 ┌──────────────────────────────────────┐
           │ CLIENT B : "Je voudrais devis        │
           │  tableau secondaire"                 │
           └──────────────────────────────────────┘
           😊 Client

J0 - 11h46 ┌──────────────────────────────────────┐
           │ GAËTAN : Ouvre app mobile            │
           │ • Module "Devis terrain"             │
           │ • Photos tableau actuel (3×)         │
           │ • Sélectionne prestation standard    │
           │   "Remplacement tableau 4 modules"   │
           │ • Prix auto : 2,850€                 │
           │ • Génération PDF immédiate           │
           │ • Envoi email client automatique     │
           │ • 3 minutes                          │
           └──────────────────────────────────────┘
           😍 Client ravi
           😊 Gaëtan satisfait
           💭 "Wow, c'est pro! Direct envoyé!"

J0 - 11h49 ┌──────────────────────────────────────┐
           │ CLIENT B reçoit email                │
           │ • Devis PDF professionnel            │
           │ • Photos avant                       │
           │ • Délai : 5 jours ouvrés             │
           │ • Lien signature électronique        │
           │                                      │
           │ Client signe immédiatement (app)     │
           └──────────────────────────────────────┘
           😍 Client ravi
           ✅ VENTE CONCLUE : 2,850€
           ⏱️ Temps total : 3 minutes

═══════════════════════════════════════════════════════════

BILAN CIBLE :
✅ Opportunité saisie (2,850€)
✅ Image professionnelle++
✅ Client satisfait
✅ Process fluide

GAIN : 45K€/an (50 devis × 30% × 3K€)
```

---

<a name="journey-3"></a>
## 📞 JOURNEY MAP #3 : Clothilde - Prise RDV Client

### Contexte
- **Persona** : Clothilde, 38 ans, Assistante Planning SAV
- **Objectif** : Planifier intervention maintenance annuelle
- **Durée ACTUEL** : 19 min
- **Durée CIBLE** : 2 min
- **Fréquence** : 600 RDV/an

---

### Parcours ACTUEL (19 min)

```
9h15 ┌──────────────────────────────────────┐
     │ APPEL ENTRANT : M. Dupont            │
     │ "Bonjour, je voudrais prendre RDV    │
     │  pour mon entretien annuel"          │
     └──────────────────────────────────────┘
     😊 Clothilde

9h15 ┌──────────────────────────────────────┐
     │ RECHERCHE CLIENT EXCEL               │
     │ • "Quel est votre nom ?"             │
     │ • Ouvre Excel (300 lignes)           │
     │ • Ctrl+F "Dupont"                    │
     │ • 3 résultats → "Prénom ?"           │
     │ • "Pierre"                           │
     │ • Trouve : ligne 187                 │
     │ • 2 min                              │
     └──────────────────────────────────────┘
     😐 Neutre
     💭 "Ah voilà, contrat Argent"

     🔴 PAIN POINT :
     - Base Excel (300 lignes)
     - Recherche manuelle

9h17 ┌──────────────────────────────────────┐
     │ VÉRIFICATION CONTRAT WORD            │
     │ • Cherche fichier Word               │
     │ • "Contrats/2024/Dupont_Pierre.docx" │
     │ • Ouvre : "Contrat Argent → 2/an"    │
     │ • Dernière intervention : 15/05/25   │
     │ • Prochaine due : novembre           │
     │ • 2 min                              │
     └──────────────────────────────────────┘
     😐 Neutre

     🔴 PAIN POINT :
     - Contrat Word séparé
     - Pas d'alerte auto

9h19 ┌──────────────────────────────────────┐
     │ CONSULTATION PLANNING OUTLOOK        │
     │ • Ouvre calendrier Gaëtan            │
     │ • Semaine prochaine :                │
     │   Lun : plein                        │
     │   Mar : 14h-16h dispo                │
     │   Mer : réunion                      │
     │   Jeu : 9h-11h dispo                 │
     │ • Vérifie zone géographique (manuel) │
     │   M. Dupont : Annecy Sud             │
     │   Mardi autre interv' Annecy → OK    │
     │ • 3 min                              │
     └──────────────────────────────────────┘
     😐 Neutre
     💭 "OK, mardi 14h ça colle"

     🔴 PAIN POINT :
     - Pas d'optimisation zone automatique
     - Planning manuel

9h22 ┌──────────────────────────────────────┐
     │ PROPOSITION CRÉNEAU                  │
     │ "M. Dupont, Gaëtan peut venir        │
     │  mardi 26 novembre, entre 14h et 16h │
     │  ça vous convient ?"                 │
     │                                      │
     │ Client attend ligne (1 min)          │
     │ "Oui c'est bon"                      │
     └──────────────────────────────────────┘
     😊 Client OK

     🔴 PAIN POINT :
     - Client attend au téléphone (9 min déjà)

9h23 ┌──────────────────────────────────────┐
     │ SAISIE OUTLOOK                       │
     │ • Calendrier Gaëtan                  │
     │ • 26/11 14h-16h                      │
     │ • "M. Dupont - Entretien annuel"     │
     │ • Adresse copiée depuis Excel        │
     │ • 2 min                              │
     └──────────────────────────────────────┘

9h25 ┌──────────────────────────────────────┐
     │ SAISIE EXCEL SUIVI                   │
     │ • Ligne 187 : colonne "Prochain RDV" │
     │ • "26/11/25"                         │
     │ • 1 min                              │
     └──────────────────────────────────────┘

     🔴 PAIN POINT :
     - Double saisie (Outlook + Excel)

9h26 ┌──────────────────────────────────────┐
     │ SAISIE GAO                           │
     │ • Création intervention              │
     │ • Client : Dupont Pierre             │
     │ • Date : 26/11                       │
     │ • Technicien : Gaëtan                │
     │ • Type : Entretien annuel            │
     │ • 2 min                              │
     └──────────────────────────────────────┘

     🔴 PAIN POINT :
     - Triple saisie (+ GAO)

9h28 ┌──────────────────────────────────────┐
     │ EMAIL CONFIRMATION CLIENT            │
     │ • Rédaction manuelle :               │
     │   "Bonjour M. Dupont,                │
     │    Votre intervention est prévue le  │
     │    mardi 26 novembre entre 14h-16h.  │
     │    Gaëtan, notre technicien..."      │
     │ • Copier-coller adresse              │
     │ • Vérification                       │
     │ • Envoi                              │
     │ • 5 min                              │
     └──────────────────────────────────────┘
     😫 Fatiguée
     💭 "Enfin terminé... 19 min pour 1 RDV"

     🔴 PAIN POINT :
     - Email manuel (pas de template)

Mercredi ┌──────────────────────────────────────┐
         │ RÉUNION HEBDO                        │
         │ • Clothilde confirme à Gaëtan :      │
         │   "Mardi 26, M. Dupont, 14h"         │
         │ • 1 min                              │
         └──────────────────────────────────────┘

═══════════════════════════════════════════════════════════

TEMPS TOTAL : 19 minutes

PROBLÈMES :
- Client attend 9 min au téléphone
- 3 ressaisies (Outlook + Excel + GAO)
- Pas d'optimisation zone
- Email manuel
- Disponibilité 8h-18h uniquement

VOLUME : 600 RDV/an
TEMPS TOTAL : 600 × 19 min = 190h/an = 9,500€
```

---

### Parcours CIBLE (2 min - Portail Client)

```
J0 - 20h30 ┌──────────────────────────────────────┐
(Soir)     │ CLIENT sur portail client            │
           │ • Login : dupont.pierre@email.com    │
           │ • Tableau de bord :                  │
           │   "Votre entretien annuel est dû"   │
           │ • Bouton : "Prendre RDV"             │
           │ • 30 sec                             │
           └──────────────────────────────────────┘
           😊 Client
           💭 "Pratique, je peux le faire le soir"

J0 - 20h31 ┌──────────────────────────────────────┐
           │ SÉLECTION CRÉNEAU                    │
           │ • Calendrier intelligent affiche     │
           │   créneaux dispos zone Annecy Sud    │
           │ • Suggestion : "Mardi 26/11 14h-16h  │
           │   (optimisé tournée)"                │
           │ • Client clique "Réserver"           │
           │ • 30 sec                             │
           └──────────────────────────────────────┘
           😊 Client satisfait
           💭 "Super, j'ai choisi moi-même!"

J0 - 20h32 ┌──────────────────────────────────────┐
           │ CONFIRMATION AUTOMATIQUE             │
           │ • Email auto envoyé client           │
           │ • SMS rappel J-2                     │
           │ • Calendrier Gaëtan MAJ auto         │
           │ • GAO MAJ auto                       │
           │ • Alerte Clothilde (validation)      │
           │ • 30 sec                             │
           └──────────────────────────────────────┘
           😍 Client ravi
           ✅ RDV confirmé

J1 - 9h00  ┌──────────────────────────────────────┐
           │ CLOTHILDE : Validation               │
           │ • Alerte : "Nouveau RDV portail"     │
           │ • Vérifie : M. Dupont, 26/11, 14h    │
           │ • Valide ✅                          │
           │ • 2 min                              │
           └──────────────────────────────────────┘
           😊 Clothilde satisfaite
           💭 "Parfait, tout est déjà fait!"

═══════════════════════════════════════════════════════════

TEMPS TOTAL : 2 min (vs 19 min)
GAIN : 17 min × 600 RDV = 170h/an = 8,500€

AVANTAGES :
✅ Disponibilité 24/7
✅ Zéro ressaisie
✅ Optimisation zone auto
✅ Client autonome
✅ Satisfaction ++
```

---

<a name="journey-4"></a>
## 📄 JOURNEY MAP #4 : Client - Contrat Maintenance (Cycle Complet)

### Contexte
- **Persona** : M. Martin, 55 ans, Propriétaire maison Annecy
- **Objectif** : Souscrire contrat maintenance annuel
- **Durée** : 1 an (de signature à renouvellement)

---

### Parcours ACTUEL

```
J0 ┌──────────────────────────────────────┐
   │ SIGNATURE CONTRAT                    │
   │ • Contrat Word imprimé               │
   │ • Signature papier                   │
   │ • Scan envoyé email                  │
   └──────────────────────────────────────┘
   😊 Client content
   💭 "Bon, au moins je suis couvert"

J+30 ┌──────────────────────────────────────┐
     │ 1ÈRE INTERVENTION (Entretien)        │
     │ • Gaëtan vient                       │
     │ • Contrôle installation              │
     │ • Remplissage CERFA papier (12 min)  │
     │ • M. Martin : "Vous me laissez       │
     │   une copie ?"                       │
     │ • Gaëtan : "On vous l'envoie"        │
     │ • (jamais reçue → oubli scan)        │
     └──────────────────────────────────────┘
     😐 Client neutre
     💭 "Intervention OK, mais pas de doc?"

     🔴 PAIN POINT :
     - Pas de copie CERFA immédiate
     - Promesse non tenue

J+60 ┌──────────────────────────────────────┐
     │ Client rappelle Clothilde :          │
     │ "Je n'ai jamais reçu mon bon         │
     │  d'intervention du 15/01"            │
     │                                      │
     │ Clothilde : "Je vous l'envoie"       │
     │ (cherche scan 30 min → trouve)       │
     └──────────────────────────────────────┘
     😟 Client insatisfait
     🔴 Image dégradée

J+180 ┌──────────────────────────────────────┐
      │ 2ÈME INTERVENTION (due)              │
      │ • ❌ PAS D'ALERTE AUTO                │
      │ • M. Martin attend...                │
      │ • Semaine +1 : toujours rien         │
      │ • Semaine +2 : M. Martin appelle     │
      │   "Mon 2e entretien, c'est pour      │
      │    quand ?"                          │
      │                                      │
      │ Clothilde : "Oh désolée! On a        │
      │  oublié..." (embarrassée)            │
      │ • RDV pris : J+200 (20 jours retard) │
      └──────────────────────────────────────┘
      😠 Client mécontent
      💭 "Pas pro du tout... j'ai dû relancer"

      🔴🔴 DÉGÂTS :
      - Oubli intervention contractuelle
      - Client frustré
      - Risque résiliation contrat

J+200 ┌──────────────────────────────────────┐
      │ 2ÈME INTERVENTION (enfin)            │
      │ • Gaëtan s'excuse du retard          │
      │ • CERFA papier rempli                │
      │ • Pas d'enquête satisfaction         │
      └──────────────────────────────────────┘
      😐 Client neutre
      💭 "OK, mais si je ne rappelais pas..."

J+335 ┌──────────────────────────────────────┐
      │ FIN CONTRAT (J+365 - 30 jours)       │
      │ • ❌ PAS D'ALERTE RENOUVELLEMENT      │
      │ • Clothilde pas alertée              │
      │ • M. Martin non contacté             │
      └──────────────────────────────────────┘
      🔴 Risque perte client

J+365 ┌──────────────────────────────────────┐
      │ FIN CONTRAT                          │
      │ • Toujours rien                      │
      │ • M. Martin : "Bon, je cherche       │
      │   ailleurs, ils sont pas sérieux"    │
      │                                      │
      │ 2 semaines après :                   │
      │ → SOUSCRIT CHEZ CONCURRENT           │
      │                                      │
      │ ❌ CLIENT PERDU : -2,000€/an         │
      └──────────────────────────────────────┘
      😞 Client perdu
      💰 -2,000€/an

═══════════════════════════════════════════════════════════

BILAN :
❌ Oubli intervention contractuelle
❌ Pas de suivi client
❌ Pas d'alerte renouvellement
❌ CLIENT PERDU

FRÉQUENCE : 15 clients/an perdus
IMPACT : 15 × 2K€ = 30K€/an
```

---

### Parcours CIBLE (Automatisé)

```
J0 ┌──────────────────────────────────────┐
   │ SIGNATURE CONTRAT (Digitale)         │
   │ • Contrat envoyé email                │
   │ • Signature électronique (DocuSign)  │
   │ • Validation immédiate               │
   │ • Interventions planifiées AUTO :    │
   │   - J+30 (1ère)                      │
   │   - J+180 (2e)                       │
   └──────────────────────────────────────┘
   😊 Client content
   💭 "Moderne et simple!"

J+25 ┌──────────────────────────────────────┐
     │ ALERTE AUTO J-5                      │
     │ • Email client : "Votre intervention │
     │   est prévue le 25/01"              │
     │ • SMS J-2 rappel                     │
     └──────────────────────────────────────┘
     😊 Client informé

J+30 ┌──────────────────────────────────────┐
     │ 1ÈRE INTERVENTION                    │
     │ • Gaëtan intervient                  │
     │ • Rapport digital (app mobile)       │
     │ • Photos avant/après                 │
     │ • Signature électronique client      │
     │ • PDF envoyé email AUTO (2 min après)│
     └──────────────────────────────────────┘
     😍 Client ravi
     💭 "Wow, j'ai déjà reçu le rapport!"

J+32 ┌──────────────────────────────────────┐
     │ ENQUÊTE SATISFACTION AUTO            │
     │ • Email : "Comment s'est passée      │
     │   votre intervention ?"              │
     │ • Note : 5/5                         │
     │ • Commentaire : "Très pro!"          │
     └──────────────────────────────────────┘
     😍 Client satisfait

J+175 ┌──────────────────────────────────────┐
      │ ALERTE AUTO J-5 (2e intervention)    │
      │ • Email : "2e entretien prévu 05/07" │
      │ • Lien portail : modifier RDV si     │
      │   besoin                             │
      └──────────────────────────────────────┘
      😊 Client informé

J+180 ┌──────────────────────────────────────┐
      │ 2ÈME INTERVENTION                    │
      │ • Tout digitalisé (idem 1ère)        │
      │ • Satisfaction : 5/5                 │
      └──────────────────────────────────────┘
      😍 Client satisfait

J+335 ┌──────────────────────────────────────┐
      │ ALERTE RENOUVELLEMENT AUTO (J-30)    │
      │ • Email M. Martin :                  │
      │   "Votre contrat arrive à échéance   │
      │    le 04/12. Souhaitez-vous          │
      │    renouveler ?"                     │
      │ • Lien signature électronique        │
      │ • Offre : -10% si renouv. avant J-15 │
      └──────────────────────────────────────┘
      😊 Client

J+340 ┌──────────────────────────────────────┐
      │ M. MARTIN RENOUVELLE (clic)          │
      │ • Signature électronique             │
      │ • Paiement en ligne                  │
      │ • Confirmation AUTO                  │
      │ • Planning 2026 généré AUTO          │
      │                                      │
      │ ✅ CLIENT CONSERVÉ : +2,000€/an      │
      └──────────────────────────────────────┘
      😍 Client fidélisé
      💰 +2,000€/an

═══════════════════════════════════════════════════════════

BILAN :
✅ Zéro oubli (alertes auto)
✅ Client informé en continu
✅ Satisfaction mesurée (2 fois)
✅ CLIENT CONSERVÉ

GAIN : 15 clients conservés × 2K€ = 30K€/an
```

---

<a name="timeline"></a>
## ⏱️ TIMELINE COMPARÉE : Avant/Après

### Intervention Terrain (CERFA)

```
AVANT (Papier)
════════════════════════════════════════════════════════════
Intervention  CERFA papier  Retour base  Scan      Saisie GAO
   2h           12 min         30 min    30 min      20 min
├────────────┼───────────────┼──────────┼─────────┼─────────┤
                                                    Total: 3h32

────────────────────────────────────────────────────────────

APRÈS (Digital)
════════════════════════════════════════════════════════════
Intervention  Rapport app  Signature  Email AUTO
   2h            3 min      1 min       0 min
├────────────┼───────────┼──────────┼───────────────────────┤
                                      Total: 2h04

GAIN : 1h28 par intervention × 4/jour × 220 jours = 1,293h/an
```

### Prise RDV

```
AVANT (Téléphone)
════════════════════════════════════════════════════════════
Appel  Recherche  Contrat  Planning  Saisie×3  Email
 1min    2min      2min      3min      5min     5min
├────┼─────────┼────────┼─────────┼─────────┼──────────────┤
                                               Total: 19 min

────────────────────────────────────────────────────────────

APRÈS (Portail)
════════════════════════════════════════════════════════════
Client portail  Validation Clothilde
     1min              2min
├──────────────┼───────────────────────────────────────────┤
                                                Total: 3 min
(dont client : 1 min, Clothilde : 2 min)

GAIN : 17 min × 600 RDV = 170h/an = 8,500€
```

---

## 📊 SYNTHÈSE ÉMOTIONNELLE

### Niveau Satisfaction Actuel

| Persona | Satisfaction | Stress | Impact |
|---------|--------------|--------|--------|
| Gaëtan (Technicien) | 4/10 | 7/10 | Frustration quotidienne |
| Clothilde (Assistante) | 5/10 | 8/10 | Surcharge admin |
| Client M. Dupont | 5/10 | 6/10 | Délais, oublis |

### Niveau Satisfaction Cible

| Persona | Satisfaction | Stress | Gain |
|---------|--------------|--------|------|
| Gaëtan | 9/10 | 3/10 | Autonomie terrain |
| Clothilde | 9/10 | 2/10 | Automatisation |
| Client | 9/10 | 1/10 | Self-service 24/7 |

---

**📧 Contact** : Maintenance Technique - Duret Électricité
**🎯 Objectif** : Digitaliser end-to-end parcours SAV
**💰 Enjeu** : 290K€/an gains + satisfaction client +50%
