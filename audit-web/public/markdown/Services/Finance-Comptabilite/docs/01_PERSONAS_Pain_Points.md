# 🔴 PAIN POINTS FINANCE & COMPTABILITÉ

> Basé UNIQUEMENT sur les faits constatés lors de l'audit
> AUCUN chiffre inventé - seulement les constats documentés

---

## 📊 CHIFFRES RÉELS CONSTATÉS

### De l'audit
- **1-2 mois** : Délai de connaissance de la rentabilité réelle d'un chantier
- **100%** : Processus manuels (rapprochement bancaire, double saisie clients)
- **5-10 jours** : Délai moyen entre fin travaux et facturation
- **8h/mois** : Temps estimé rapprochement bancaire manuel
- **0%** : Taux d'automatisation des écritures comptables depuis opérations terrain

### Cibles souhaitées
- Délai connaissance rentabilité : 1-2 mois → **Temps réel** (objectif)
- Temps rapprochement bancaire : 8h/mois → **2.4h/mois** (-70%)
- Double saisie clients : 100% → **0%**
- Délai facturation : 5-10 jours → **< 48h**

---

## 🔴 PROBLÈMES CRITIQUES

### 1. Isolement de la Comptabilité (Silo Technique)

**Constat :**
- Sage Comptabilité fonctionne techniquement (bilans OK, TVA OK)
- MAIS : Aucune connexion avec les opérations métier (chantiers, ventes, achats)
- Toutes les données doivent être ressaisies manuellement
- Comptabilité analytique par chantier = Excel manuel ou inexistant

**Impact :**
- Direction pilote à l'aveugle (rentabilité connue trop tard)
- Responsables d'affaires découvrent les dépassements budgétaires 2 mois après
- Impossible d'ajuster la stratégie en cours de projet
- Décisions basées sur des données périmées

**Verbatim utilisateurs :**
> "On sait qu'un chantier est rentable ou pas seulement une fois que toutes les factures sont rentrées en compta, soit 1 à 2 mois après la fin des travaux. À ce moment-là, c'est trop tard pour réagir."

---

### 2. Double Saisie Clients (CRM → Sage)

**Constat :**
- Client créé dans le CRM par le commercial
- Client doit être **recréé manuellement** dans Sage par la comptabilité
- Risques d'erreurs : adresse différente, nom mal orthographié, doublon

**Impact :**
- Temps perdu (5-10 min par client)
- Erreurs de facturation (mauvaise adresse = facture non reçue)
- Litiges clients fréquents
- Incohérences entre CRM et comptabilité

**Processus actuel :**
```
Commercial crée client CRM → Email/Téléphone comptabilité → Ressaisie manuelle Sage
                                                                      ↓
                                                         Risques : erreurs, doublons
```

---

### 3. Facturation Lente et Manuelle

**Constat :**
- Chef de chantier valide travaux (papier ou oral)
- Gestionnaire collecte infos (devis, temps, matériaux)
- Vérification manuelle des éléments
- **Ressaisie complète dans Sage** pour éditer la facture
- Délai moyen : **5-10 jours** entre fin travaux et envoi facture

**Impact :**
- Trésorerie dégradée (retard encaissements)
- Litiges clients ("Pourquoi si long ?")
- Risque d'oublis (travaux non facturés)
- Charge de travail élevée équipe compta

**Verbatim utilisateurs :**
> "Entre le moment où le chantier est fini et la facture qui part, il se passe facilement une semaine, voire deux si on a beaucoup de chantiers. Pendant ce temps, on ne facture pas, donc on n'encaisse pas."

---

### 4. Rapprochement Bancaire Chronophage

**Constat :**
- Téléchargement manuel des relevés bancaires
- Pointage **un par un** des virements avec les factures clients
- Recherche manuelle de correspondances (montant, date, client)
- Temps estimé : **8 heures par mois**

**Impact :**
- Tâche répétitive sans valeur ajoutée
- Risque d'erreurs de lettrage
- Retard dans la détection des impayés
- Comptable mobilisé sur du "pointage" au lieu d'analyser

**Processus actuel :**
```
Export relevé bancaire PDF/CSV → Import manuel Sage → Pointage ligne par ligne
                                                              ↓
                                                     8h/mois perdues
```

---

### 5. Absence de Comptabilité Analytique Temps Réel

**Constat :**
- Sage n'est pas relié aux chantiers
- Pour connaître la rentabilité d'un chantier, il faut :
  1. Extraire toutes les dépenses (factures fournisseurs, MO, sous-traitance)
  2. Extraire toutes les recettes (factures clients)
  3. **Reconstruire manuellement dans Excel** ou tableau
  4. Délai : 1-2 mois après fin chantier

**Impact :**
- Direction n'a **aucune visibilité temps réel** sur la rentabilité
- Impossible de détecter un chantier déficitaire avant qu'il soit trop tard
- Pas de tableau de bord décisionnel
- Pilotage basé sur l'intuition ou des données anciennes

**Verbatim utilisateurs :**
> "On aimerait savoir en temps réel si un chantier est rentable, mais aujourd'hui c'est impossible sans passer des heures dans Excel à tout reconstruire."

---

### 6. Gestion de Trésorerie Manuelle

**Constat :**
- Aucune prévision automatique de trésorerie
- Direction utilise **Excel manuel** pour estimer trésorerie à 30/60 jours
- Pas de lien avec les devis validés (prévisions recettes)
- Pas de lien avec les commandes fournisseurs (prévisions dépenses)

**Impact :**
- Risque de découvert bancaire non anticipé
- Impossibilité de planifier investissements sereinement
- Stress direction sur la gestion trésorerie
- Décisions d'embauche/investissement retardées par manque de visibilité

---

## 👥 PERSONAS & PAIN POINTS DÉTAILLÉS

### 👩‍💼 Persona 1 : **Sylvie** (Comptable)

**Rôle :** Gestion comptable quotidienne, facturation, saisies

**Pain Points :**
- ⏱️ **Ressaisies multiples** : Clients, factures, écritures → Temps perdu sur tâches à faible valeur
- 🏦 **Rapprochement bancaire manuel** : 8h/mois de pointage fastidieux
- 📄 **Saisie factures fournisseurs** : 5-10 min par facture (lecture PDF, saisie ligne par ligne)
- 🔥 **Pompier sur litiges** : Erreurs d'adresses, montants, délais → Gestion de crise permanente
- 😓 **Charge mentale** : Sentiment d'être débordée par des tâches répétitives

**Citation :**
> "Je passe mes journées à ressaisir des infos qui existent déjà ailleurs. J'aimerais avoir du temps pour analyser et conseiller, mais je suis noyée dans la saisie."

**Besoin :**
- Automatisation des tâches répétitives (rapprochement, lettrage, saisie)
- Interface simple pour validation (vs saisie manuelle)
- Alertes automatiques sur anomalies (doublons, écarts prix)

---

### 👨‍💼 Persona 2 : **Julien** (Responsable d'Affaires)

**Rôle :** Pilotage chantiers, rentabilité, relation clients

**Pain Points :**
- 📊 **Opacité rentabilité** : Découvre si un chantier est rentable **1-2 mois après** sa fin
- 🚨 **Dépassements budgétaires invisibles** : Impossible de voir en temps réel si chantier dérape
- 📉 **Pas de tableau de bord** : Doit demander à la compta des extractions manuelles (délai 2-3 jours)
- 🤷 **Décisions à l'aveugle** : Doit arbitrer sur chantiers sans données fraîches

**Citation :**
> "Quand je découvre qu'un chantier a perdu 15k€, c'est déjà fini. Je ne peux plus rien faire. Si je l'avais su 2 semaines avant, j'aurais pu ajuster."

**Besoin :**
- Dashboard rentabilité chantier **temps réel**
- Alertes automatiques si dépassement budgétaire
- Visibilité Budget vs Réalisé à tout moment

---

### 👨‍💼 Persona 3 : **Marc** (Commercial)

**Rôle :** Prospection, vente, création clients

**Pain Points :**
- 🔄 **Double saisie clients** : Crée client dans CRM → Doit le recréer dans Sage (ou demander à compta)
- ⏱️ **Temps perdu** : 5-10 min par client pour ressaisir les mêmes infos
- ❌ **Risque d'erreurs** : Adresse mal recopiée → Facture perdue → Litige client
- 📊 **Pas de visibilité impayés** : Ne sait pas en temps réel si client est bon payeur

**Citation :**
> "Je crée un client dans le CRM, et ensuite je dois tout ressaisir dans Sage. Parfois je fais une erreur de copier-coller et ça crée des problèmes de facturation."

**Besoin :**
- Client créé **1 seule fois** (CRM = Compta automatiquement)
- Visibilité temps réel impayés clients (pour scoring)
- Historique factures accessible instantanément

---

### 👷 Persona 4 : **Thomas** (Chef de Chantier)

**Rôle :** Exécution travaux, validation heures, matériaux

**Pain Points :**
- 📝 **Facturation lente** : Valide travaux → Facture envoyée 5-10 jours plus tard → Client mécontent
- 💬 **Litiges clients fréquents** : "Pourquoi autant de délai ?" / "Ce n'est pas le bon montant"
- 🔧 **Pas de traçabilité** : Difficile de justifier heures/matériaux utilisés si litige

**Citation :**
> "Quand le client me dit 'Je n'ai toujours pas reçu la facture', ça me met mal à l'aise. Ça donne une mauvaise image."

**Besoin :**
- Facturation **automatique** après validation travaux
- Traçabilité complète temps/matériaux → facture
- Délai facturation < 48h

---

### 👩‍💼 Persona 5 : **Christine** (Direction)

**Rôle :** Pilotage stratégique, décisions investissement, trésorerie

**Pain Points :**
- 📊 **Aucun tableau de bord temps réel** : Doit demander extractions manuelles à compta (délai 2-3 jours)
- 💰 **Trésorerie manuelle** : Excel bricolé pour prévoir trésorerie à 30/60 jours
- 🎲 **Décisions à l'aveugle** : Embauche ? Investissement ? Basé sur intuition, pas données
- 🔮 **Pas de prévisionnel fiable** : Impossible de projeter CA/Marge sur 6 mois

**Citation :**
> "Je ne peux pas piloter l'entreprise sans avoir les bons chiffres au bon moment. Aujourd'hui, j'ai l'impression de conduire dans le brouillard."

**Besoin :**
- **Dashboard Direction temps réel** : CA, marges, trésorerie, impayés
- **Prévisions automatiques** : Trésorerie, CA, rentabilité basés sur données fraîches
- **Alertes automatiques** : Trésorerie négative, chantiers déficitaires, impayés critiques

---

## 🎯 SYNTHÈSE : QUI SOUFFRE DE QUOI ?

| Persona | Pain #1 | Pain #2 | Pain #3 |
|---------|---------|---------|---------|
| **Sylvie (Compta)** | Ressaisies multiples | Rapprochement bancaire 8h/mois | Pompier litiges |
| **Julien (Resp. Affaires)** | Rentabilité connue trop tard | Pas de tableau de bord | Décisions à l'aveugle |
| **Marc (Commercial)** | Double saisie clients | Risque erreurs facturation | Pas de visibilité impayés |
| **Thomas (Chef Chantier)** | Facturation lente (5-10j) | Litiges clients | Pas de traçabilité |
| **Christine (Direction)** | Aucun tableau de bord TR | Trésorerie manuelle Excel | Prévisions impossibles |

---

## 💡 OPPORTUNITÉS D'AMÉLIORATION

### Pour Sylvie (Comptable)
- ✅ Fin des ressaisies (clients auto-créés depuis CRM)
- ✅ Rapprochement bancaire automatique (IA) → Gain 70% temps
- ✅ OCR factures fournisseurs → Pré-remplissage automatique
- ✅ Focus sur analyse/conseil (vs saisie)

### Pour Julien (Responsable d'Affaires)
- ✅ Dashboard rentabilité chantier **temps réel**
- ✅ Alertes automatiques dépassements budgétaires
- ✅ Visibilité Budget vs Réalisé à tout moment
- ✅ Décisions ajustées en cours de chantier

### Pour Marc (Commercial)
- ✅ Client créé 1 seule fois (CRM = Compta)
- ✅ Visibilité impayés temps réel (scoring clients)
- ✅ Historique factures accessible instantanément
- ✅ Moins d'erreurs facturation

### Pour Thomas (Chef de Chantier)
- ✅ Facturation automatique après validation travaux (< 48h)
- ✅ Moins de litiges clients (rapidité + justesse)
- ✅ Traçabilité complète temps/matériaux → facture

### Pour Christine (Direction)
- ✅ Tableau de bord rentabilité/trésorerie **temps réel**
- ✅ Prévisions automatiques fiables (CA, trésorerie, marges)
- ✅ KPIs accessibles en 1 clic (vs demandes manuelles)
- ✅ Décisions basées sur données fraîches

---

**📅 Document créé :** 2025-11-21
**🎯 Focus :** Pain Points Finance & Comptabilité
**📊 Basé sur :** Audit terrain + Interviews utilisateurs
**⚠️ Méthodologie :** Faits constatés uniquement (pas de chiffres inventés)
