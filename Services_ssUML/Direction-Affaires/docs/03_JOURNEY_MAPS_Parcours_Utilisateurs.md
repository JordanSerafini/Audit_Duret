# 🗺️ JOURNEY MAPS - Parcours Utilisateurs

> Cartographie des parcours utilisateurs AVANT/APRÈS modernisation ERP

---

## 🎯 Vue d'Ensemble

Ce document cartographie **3 parcours utilisateurs critiques** :

1. **Laurent (Responsable Affaire)** : Création devis client
2. **Laurent (Responsable Affaire)** : Génération PPSPS automatique
3. **Marie (Direction)** : Consultation état affaires

Pour chaque parcours :
- ⏱️ **Timeline comparative** : Avant (ERP legacy) vs Après (Odoo)
- 😤 **Points de friction** actuels
- ✅ **Améliorations** apportées
- 📊 **Gains mesurables**

---

## 💼 JOURNEY MAP #1 : CRÉATION DEVIS CLIENT

**Acteur Principal :** Laurent (Responsable Affaire)
**Objectif :** Créer et envoyer devis client
**Fréquence :** 15 devis/semaine

---

### 📍 AVANT : ERP Legacy MDE (2h05)

```
┌─────────────────────────────────────────────────────────────┐
│                    TIMELINE ACTUELLE                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ [09h00] 📧 Réception demande devis client                  │
│   • Email avec spécifications                               │
│   • Lecture détails (15 min)                                │
│   😤 Friction : Infos éparpillées dans email               │
│   └─→ ⏱️ 15 min                                             │
│                                                              │
│ [09h15-09h50] 📁 Recherche ancien devis similaire          │
│   • Fouille dossiers partagés (désorganisés)               │
│   • Ouverture 5-6 devis pour comparer                       │
│   • Copie dans Excel perso                                  │
│   😤😤 FRICTION : "Je passe 30 min à chercher un exemple"  │
│   └─→ ⏱️ 35 min                                             │
│                                                              │
│ [09h50-10h00] 💻 Ouverture MDE (calvaire)                  │
│   • Lancement app (15s)                                     │
│   • Login (30s chargement)                                  │
│   • Navigation menu (40s)                                   │
│   • Recherche client (2min)                                 │
│   • Création nouveau devis (40s chargement)                 │
│   😤 Friction : 5 min JUSTE pour ouvrir !                  │
│   └─→ ⏱️ 5 min                                              │
│                                                              │
│ [10h00-11h30] ⌨️ Saisie lignes devis (1h30)                │
│   Pour CHAQUE ligne (30 lignes) :                           │
│   • Clic "Ajouter" → Attente 35s                           │
│   • Recherche article catalogue (2 min)                     │
│   • Saisie quantité, prix, remise (2 min)                  │
│   • Sauvegarde → Attente 25s                               │
│   ⏱️ = 5 min par ligne × 30 lignes = 2h30                  │
│                                                              │
│   Mais Laurent copie depuis Excel perso :                   │
│   → Réduit à 1h30 mais TOUJOURS très long                  │
│                                                              │
│   😤😤😤 FRUSTRATION MAXIMALE :                            │
│   "Attendre 30s entre chaque ligne, je deviens fou !"      │
│   └─→ ⏱️ 1h30                                               │
│                                                              │
│ [11h30-11h45] 🧮 Vérification calculs (Excel)              │
│   • Ouverture Excel à côté                                  │
│   • Recalcul marges manuellement                            │
│   • Vérification cohérence                                  │
│   • Ajustements 2-3 lignes dans MDE (+ 5min d'attente)     │
│   😤 Friction : Double saisie MDE + Excel                  │
│   └─→ ⏱️ 15 min                                             │
│                                                              │
│ [11h45-11h55] 📄 Génération PDF                             │
│   • Clic "Générer PDF" → Attente 45s                       │
│   • Ouverture PDF → Bugs mise en page                      │
│   • Régénération → 45s                                      │
│   😤 Friction : Mise en page aléatoire                     │
│   └─→ ⏱️ 10 min                                             │
│                                                              │
│ [11h55] 📧 Envoi email client                               │
│   • Recherche contact Outlook                               │
│   • Rédaction email                                         │
│   • Pièce jointe (souvent trop lourde → compression)        │
│   • Envoi                                                   │
│   └─→ ⏱️ 5 min                                              │
│                                                              │
│ [12h00] 😤😤😤 Laurent épuisé                               │
│   💭 "2 heures pour un devis... pendant ce temps          │
│       la concurrence a déjà répondu"                        │
│                                                              │
│ ⏱️ TOTAL PROCESS : 2h05                                     │
│ 😤 NIVEAU FRUSTRATION : 9/10                                │
│                                                              │
│ [J+2] Client reçoit réponse (délai concurrence : J+1)       │
│   😤 Perte opportunité commerciale                          │
└─────────────────────────────────────────────────────────────┘
```

---

### 📍 APRÈS : Odoo Enterprise (30min)

```
┌─────────────────────────────────────────────────────────────┐
│                    TIMELINE CIBLE                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ [09h00] 📧 Réception demande devis                          │
│   • Email avec spécifications                               │
│   • Lecture rapide (10 min)                                 │
│   ✅ Amélioration : Email mieux structuré                  │
│   └─→ ⏱️ 10 min                                             │
│                                                              │
│ [09h10] ☁️ Ouverture Odoo Cloud (instant)                  │
│   • Navigateur web → odoo.duret.fr                         │
│   • Login SSO (auto si déjà connecté)                       │
│   • Module CRM/Devis chargé en < 2s                         │
│   ✅ Gain : Accès instantané (vs 5min MDE)                │
│   └─→ ⏱️ 30 secondes                                        │
│                                                              │
│ [09h10:30-09h15] 📋 Sélection template devis               │
│   • Clic "Nouveau devis"                                    │
│   • Sélection client (recherche rapide)                     │
│   • Choix template :                                        │
│     - "Chantier neuf tertiaire"                            │
│     - "Rénovation résidentiel"                             │
│     - "Maintenance industriel"                              │
│   • Template chargé avec 25 postes pré-remplis              │
│   ✅ Gain : Bibliothèque templates vs from scratch        │
│   └─→ ⏱️ 5 min                                              │
│                                                              │
│ [09h15-09h25] ✏️ Adaptation devis (10 min)                 │
│   • Ajustement quantités (5 lignes)                        │
│   • Ajout 3 postes spécifiques                              │
│   • Suppression 2 postes non nécessaires                    │
│   • Calculs automatiques (marges, totaux)                   │
│   ✅ Gain : Modification rapide vs saisie complète        │
│   └─→ ⏱️ 10 min                                             │
│                                                              │
│ [09h25-09h28] 🧮 Vérification automatique                  │
│   • Dashboard marge temps réel (automatique)                │
│   • Alertes cohérence (si prix anormal)                     │
│   • Comparaison vs devis similaires (suggérée)              │
│   ✅ Gain : Vérification auto vs Excel manuel             │
│   └─→ ⏱️ 3 min                                              │
│                                                              │
│ [09h28-09h30] 📄 Génération PDF 1 clic                      │
│   • Clic "Générer PDF"                                      │
│   • PDF généré en 3s (mise en page parfaite)                │
│   • Prévisualisation automatique                            │
│   ✅ Gain : Génération instantanée vs bugs MDE            │
│   └─→ ⏱️ 2 min                                              │
│                                                              │
│ [09h30] 📧 Envoi automatique                                │
│   • Clic "Envoyer client"                                   │
│   • Email pré-rédigé (template)                             │
│   • PDF attaché automatiquement                             │
│   • Envoi + Archivage auto dans dossier affaire             │
│   ✅ Gain : Envoi 1 clic vs manuel                        │
│   └─→ ⏱️ 1 min                                              │
│                                                              │
│ [09h31] ✅ Laurent satisfait                                 │
│   💭 "30 minutes ! Je peux traiter 4 fois plus de devis"   │
│                                                              │
│ ⏱️ TOTAL PROCESS : 31 min                                   │
│ 😊 NIVEAU SATISFACTION : 9/10                               │
│                                                              │
│ [J+0 09h31] Client reçoit réponse (même jour!)              │
│   ✅ Avantage concurrentiel +++ │
└─────────────────────────────────────────────────────────────┘
```

---

### 📊 Comparaison & Gains

| Métrique | Avant (MDE) | Après (Odoo) | Gain |
|----------|-------------|--------------|------|
| **Temps total** | 2h05 | 31min | **-75%** |
| Ouverture système | 5 min | 30s | -90% |
| Saisie lignes | 1h30 | 10min | -89% |
| Vérifications | 15 min | 3min | -80% |
| Génération PDF | 10 min | 2min | -80% |
| Envoi | 5 min | 1min | -80% |
| **Frustration** | 9/10 | 1/10 | -89% |
| **Réactivité client** | J+2 | J+0 | **Immédiat** |

---

## 📄 JOURNEY MAP #2 : GÉNÉRATION PPSPS

**Acteur Principal :** Laurent (Responsable Affaire)
**Objectif :** Générer PPSPS pour nouvelle affaire
**Fréquence :** 4 PPSPS/semaine

---

### 📍 AVANT : Word Manuel (3h00)

```
┌─────────────────────────────────────────────────────────────┐
│                    TIMELINE ACTUELLE                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ [14h00-14h30] 🔍 Recherche PPSPS similaire                  │
│   • Connexion dossiers partagés                             │
│   • Navigation "Documents/PPSPS/" (désorganisé)             │
│   • Scroll 200+ fichiers mal nommés                         │
│   • Ouverture 3-4 fichiers pour vérifier contenu            │
│   😤😤 FRICTION : "30 min juste pour trouver un exemple"   │
│   └─→ ⏱️ 30 min                                             │
│                                                              │
│ [14h30-17h00] ✏️ Copie & adaptation manuelle (2h30)        │
│   • Copie fichier Word                                      │
│   • Ctrl+F remplacer nom client (15 min)                    │
│   • Modification adresse, dates, budget (15 min)            │
│   • Adaptation équipe & planning (20 min)                   │
│   • Réécriture risques spécifiques (45 min)                 │
│   • Insertion nouveaux plans (30 min)                       │
│   • Vérification clauses obligatoires (30 min)              │
│   • Relecture & mise en page (15 min)                       │
│   😤😤😤 FRUSTRATION : "3h de copier-coller Word !"        │
│   └─→ ⏱️ 2h30                                               │
│                                                              │
│ [17h00] 📧 Envoi BE pour relecture (30 min aller-retour)   │
│   └─→ ⏱️ 30 min                                             │
│                                                              │
│ ⏱️ TOTAL : 3h00                                             │
│ 😤 FRUSTRATION : 10/10                                      │
└─────────────────────────────────────────────────────────────┘
```

---

### 📍 APRÈS : Odoo Automatisé (27min)

```
┌─────────────────────────────────────────────────────────────┐
│                    TIMELINE CIBLE                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ [14h00-14h05] 📋 Sélection template PPSPS Odoo             │
│   • Module "Affaires" → Sélection affaire                  │
│   • Clic "Générer PPSPS"                                    │
│   • Choix template :                                        │
│     - "Chantier neuf tertiaire"                            │
│     - "Rénovation électrique"                              │
│     - "Installation industrielle"                           │
│   ✅ Gain : Templates centralisés vs recherche 30min      │
│   └─→ ⏱️ 5 min                                              │
│                                                              │
│ [14h05-14h20] 🤖 Génération automatique (15 min)           │
│   Odoo pré-remplit AUTOMATIQUEMENT :                        │
│   • Nom client, adresse chantier (depuis affaire)           │
│   • Budget, dates, équipe affectée (depuis planning)        │
│   • Plans (liés automatiquement)                            │
│   • Clauses obligatoires (toutes incluses)                  │
│   • Coordonnées urgence (depuis base contacts)              │
│                                                              │
│   Laurent complète manuellement :                            │
│   • Risques spécifiques chantier (10 min)                   │
│   • Mesures prévention particulières (5 min)                │
│   ✅ Gain : 80% auto-généré vs 100% manuel                │
│   └─→ ⏱️ 15 min                                             │
│                                                              │
│ [14h20-14h25] ✅ Vérification automatique                   │
│   • Odoo vérifie présence toutes clauses obligatoires       │
│   • Alertes si clause manquante                             │
│   • Validation conformité auto                              │
│   ✅ Gain : Vérification auto vs checklist papier         │
│   └─→ ⏱️ 5 min                                              │
│                                                              │
│ [14h25-14h27] 📄 Génération PDF 1 clic                      │
│   • Clic "Générer PDF PPSPS"                                │
│   • Génération 3s (mise en page parfaite)                   │
│   • Envoi auto Thomas (BE) pour validation                  │
│   └─→ ⏱️ 2 min                                              │
│                                                              │
│ [14h27] ✅ Laurent satisfait                                 │
│   💭 "27 minutes vs 3 heures... incroyable !"              │
│                                                              │
│ ⏱️ TOTAL : 27 min                                           │
│ 😊 SATISFACTION : 10/10                                     │
└─────────────────────────────────────────────────────────────┘
```

---

### 📊 Comparaison & Gains

| Métrique | Avant (Word) | Après (Odoo) | Gain |
|----------|--------------|--------------|------|
| **Temps total** | 3h00 | 27min | **-85%** |
| Recherche template | 30 min | 0min | -100% |
| Adaptation | 2h30 | 15min | -90% |
| Vérification | Manuelle | Auto | 100% |
| **Frustration** | 10/10 | 0/10 | -100% |
| **Risque oubli clause** | Élevé | Nul | ✅ |

---

## 📊 JOURNEY MAP #3 : CONSULTATION AFFAIRES (DIRECTION)

**Acteur Principal :** Marie (Direction)
**Objectif :** Consulter état affaires en cours
**Fréquence :** Quotidien

---

### 📍 AVANT : Rapports Mensuels (Impossible en temps réel)

```
┌─────────────────────────────────────────────────────────────┐
│                    TIMELINE ACTUELLE                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ [10h00] Marie a besoin info affaire en cours                │
│   💭 "Où en est l'affaire Schneider Electric ?"            │
│                                                              │
│ OPTION 1 : Appeler Responsable Affaire (10 min)             │
│   • Recherche téléphone Laurent                             │
│   • Appel (souvent pas dispo → message)                     │
│   • Attente rappel (2h parfois)                             │
│   😤 Friction : Dépendance 100% RA, pas autonome           │
│                                                              │
│ OPTION 2 : Attendre rapport mensuel                         │
│   • Prochain rapport : dans 3 semaines                      │
│   • Info trop tardive pour décision                         │
│   😤😤 Friction : Aucune visibilité temps réel             │
│                                                              │
│ OPTION 3 : Demander extraction Excel                        │
│   • Email assistant(e) pour export ERP                      │
│   • Attente 1-2 jours                                       │
│   • Réception tableau Excel incomplet                       │
│   😤 Friction : Processus lourd et lent                    │
│                                                              │
│ ⏱️ RÉSULTAT : Info non disponible immédiatement            │
│ 😤 FRUSTRATION : 8/10                                       │
│ 💰 COÛT : Décisions retardées, manque réactivité           │
└─────────────────────────────────────────────────────────────┘
```

---

### 📍 APRÈS : Dashboard Odoo Mobile (2min)

```
┌─────────────────────────────────────────────────────────────┐
│                    TIMELINE CIBLE                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ [10h00] Marie ouvre Odoo sur smartphone                     │
│   • App mobile ou web responsive                            │
│   • Login SSO automatique                                   │
│   • Dashboard direction s'affiche (2s)                       │
│   └─→ ⏱️ 30 secondes                                        │
│                                                              │
│ [10h00:30] 📊 Dashboard KPIs temps réel                     │
│   Vue instantanée :                                          │
│   • 18 affaires en cours                                    │
│   • 3 affaires critiques (alertes rouges)                   │
│   • Rentabilité globale : 12.3%                             │
│   ✅ Amélioration : Visibilité instantanée                 │
│                                                              │
│ [10h01] 🔍 Recherche affaire Schneider                      │
│   • Recherche "Schneider"                                   │
│   • Affaire trouvée instantanément                          │
│   • Vue détaillée :                                         │
│     - Statut : "En cours" (65% avancé)                     │
│     - Dernier PPSPS : validé J-3                           │
│   ✅ Info complète en 1 minute                             │
│   └─→ ⏱️ 1 min                                              │
│                                                              │
│ [10h02] ✅ Marie satisfaite                                  │
│   💭 "2 minutes pour avoir toutes les infos, parfait !"    │
│   • Peut prendre décision immédiatement                     │
│   • Autonomie totale, plus besoin déranger RA               │
│                                                              │
│ ⏱️ TOTAL : 2 min                                            │
│ 😊 SATISFACTION : 10/10                                     │
└─────────────────────────────────────────────────────────────┘
```

---

### 📊 Comparaison & Gains

| Métrique | Avant | Après (Odoo) | Gain |
|----------|-------|--------------|------|
| **Temps accès info** | Impossible | 2 min | ✅ |
| Autonomie | 0% | 100% | +100% |
| Visibilité | Mensuelle | Temps réel | ✅ |
| Mobilité | Desktop | Mobile | ✅ |
| **Réactivité décisions** | Lente | Immédiate | ✅ |

**Valeur stratégique :**
- Décisions éclairées en temps réel
- Détection problèmes précoce
- Autonomie direction
- Meilleure gouvernance

---

## 🎯 SYNTHÈSE GLOBALE GAINS

### Gains Temps Cumulés

| Processus | Fréquence | Gain/occurrence | Gain annuel temps |
|-----------|-----------|-----------------|-------------------|
| Création devis | 240/an | 1.5h | 360h = 0.9 ETP |
| Génération PPSPS | 200/an | 2.5h | 500h = 1.25 ETP |
| Consultation affaires | 250j/an | 30min/j | 125h = 0.3 ETP |
| **TOTAL** | | | **985h = 2.5 ETP** |

### Gains Non-Financiers

- ✅ **Satisfaction utilisateurs** : 9/10 vs 2/10
- ✅ **Réactivité commerciale** : J+0 vs J+2
- ✅ **Télétravail efficace** : Possible vs impossible
- ✅ **Autonomie direction** : 100% vs 0%
- ✅ **Conformité PPSPS** : 100% vs 80%
- ✅ **Attractivité RH** : Outils modernes

---

## 🎯 CONCLUSION

**Transformation radicale de l'expérience utilisateur**

- 🔴 **Avant** : Frustration 9/10, processus chronophages, télétravail impossible
- 🟢 **Après** : Satisfaction 9/10, processus fluides, mobilité totale

**ROI mesurable :**
- ⏱️ **Temps** : 2.5 ETP économisés (985h/an)
- 📊 **Mesurable** : Gains temps documentés (985h/an)
- 📈 **Stratégique** : Réactivité, autonomie, conformité

➡️ **Recommandation** : GO immédiat migration Odoo
