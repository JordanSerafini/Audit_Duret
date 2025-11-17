# 🗺️ JOURNEY MAPS - Parcours Utilisateurs Gestion Opérationnelle

**Service** : Gestion Opérationnelle
**Date audit** : Novembre 2025
**Objectif** : Visualiser parcours concrets dans chaos actuel vs cible optimisée

---

## 📊 VUE D'ENSEMBLE

Ce document présente **3 journey maps** représentatives des personas Gestion Opérationnelle :

1. **Sylvie** (Contrôleuse Gestion) : Génération KPI mensuels
2. **Thomas** (Responsable BE) : Journée type gestion demandes
3. **Isabelle** (Responsable Stocks) : Réception stocks + inventaire mensuel

Chaque journey map compare :
- ⚫ **AVANT** (Système actuel - chaos)
- 🟢 **APRÈS** (Système cible - digitalisé)

---

## 🗺️ JOURNEY MAP 1 : Sylvie - Génération KPI Mensuels

### Contexte

**Qui** : Sylvie, Contrôleuse de Gestion (52 ans)
**Quoi** : Production tableau de bord KPI mensuels pour direction
**Quand** : 1×/mois (jours 3-6 du mois suivant)
**Où** : Bureau Annecy (impossible en télétravail : accès MDE)
**Pourquoi** : Comité direction J+10 nécessite KPI actualisés

---

### ⚫ AVANT - Système Actuel (24h calvaire)

#### Jour 1 (8h travail)

**8h00 - Connexion + Attente Clôture Comptable**
- Arrive bureau
- Vérifie mail compta : "Clôture OK" ✅ (sinon : attendre 1-2j supplémentaires)
- Ouvre MDE (chargement 3 min, plantage 1×, redémarrage)
- ⏱️ **Temps perdu** : 15 min
- 😟 **Ressenti** : Anxiété (et si clôture pas OK ?)

**8h15 - Export Données SAGE (Comptabilité)**
- Ouvre SAGE comptable
- Menu Exports → Sélectionne comptes analytiques
- Paramètre période (mois M-1)
- Export CSV (2-3 min)
- Enregistre `SAGE_Nov2025.csv`
- ⏱️ **Temps** : 15 min
- 😐 **Ressenti** : Routine ennuyeuse

**8h30 - Export Données MDE (Heures + Matériel)**
- Retour MDE
- Menu Reporting → Extraction heures par affaire
- Sélectionne mois M-1 (interface lente, 10 clics nécessaires)
- Export CSV heures : `MDE_Heures_Nov2025.csv` (chargement 5 min)
- ❌ **1er plantage MDE** : Redémarrage (perte 10 min)
- Recommence export heures ✅
- Export CSV matériel : `MDE_Materiel_Nov2025.csv` (5 min)
- ⏱️ **Temps** : 40 min (dont 10 min plantage)
- 😠 **Ressenti** : Frustration (plantages prévisibles)

**9h10 - Importation Excel `Import_SAGE_Mensuel.xlsx`**
- Ouvre `C:\Sylvie\KPI\Sources\Import_SAGE_Mensuel.xlsx`
- Onglet "Nov 2025" (créer si pas existe)
- Importe `SAGE_Nov2025.csv` :
  - Copie-colle données CSV → Excel
  - ❌ **Problème formats** : Dates en texte, montants avec points vs virgules
  - Recherche/Remplace : `. ` → `,` (5 min correction manuelle)
  - Conversion texte → nombre (3 min)
- Vérifie cohérence (totaux, doublons) : 10 min
- ⏱️ **Temps** : 30 min
- 😟 **Ressenti** : Concentration intense (erreurs = catastrophe)

**9h40 - Importation Excel `Import_MDE_Hebdo.xlsx`**
- Ouvre `C:\Sylvie\KPI\Sources\Import_MDE_Hebdo.xlsx`
- Même processus : Import CSV heures + matériel
- ❌ **Problème** : 5 doublons détectés (saisies multiples ?)
- Investigation : Compare avec semaines précédentes (15 min)
- Supprime doublons manuellement
- ⏱️ **Temps** : 40 min
- 😠 **Ressenti** : Irritation (doublons récurrents, jamais corrigés source)

**10h20 - PAUSE CAFÉ (10 min) - Épuisée déjà**
- 😩 **Ressenti** : Fatigue mentale (concentration 2h15 non-stop)

**10h30 - Ouverture `KPI_Master_2025.xlsx` (50 Mo, 15 onglets)**
- Double-clic fichier : Chargement 3 min (fichier lourd)
- ⚠️ **Popup Excel** : "Liaisons externes rompues, mettre à jour ?" → Oui
- Recalcul formules : 5 min (200+ formules complexes)
- ❌ **#REF! errors** : 3 cellules (liaisons cassées)
- Investigation erreurs : 20 min (formules imbuvables, cherche source problème)
- Correction manuelle formules
- ⏱️ **Temps** : 30 min
- 😡 **Ressenti** : Colère (formules cassent TOUS les mois)

**11h00 - Mise à Jour Onglet "CA Mensuel"**
- Copie-colle données `Import_SAGE` → `KPI_Master`
- Vérif

ie totaux (calculatrice)
- Ajustements manuels (3 lignes incohérentes)
- Mise en forme (couleurs, gras)
- ⏱️ **Temps** : 25 min
- 😐 **Ressenti** : Monotone

**11h25 - Mise à Jour Onglet "Heures Chantiers"**
- Copie-colle données `Import_MDE` heures → `KPI_Master`
- ❌ **Problème** : Chef chantier absent KPI (vacances, non remonté MDE)
- Mail RA concerné : "Peux-tu me donner heures chantier X svp ?"
- ⏳ Attente réponse (bloque calculs)
- ⏱️ **Temps** : 15 min + BLOCAGE
- 😟 **Ressenti** : Dépendance autres (hors contrôle)

**11h40 - PAUSE DÉJEUNER (bloquée sur attente réponse RA)**

**13h30 - Retour Déjeuner**
- Vérifie mails : ❌ Pas de réponse RA
- Téléphone RA : "Ah désolé j'avais oublié, je te réponds dans 1h"
- ⏳ Continue autres onglets en attendant

**13h35 - Mise à Jour Onglet "Matériel"**
- Même processus : Copie-colle, vérif, ajustements
- ⏱️ **Temps** : 20 min

**13h55 - Mise à Jour Onglet "Marges Affaires"**
- **Calculs complexes** : CA - (Heures × Coût horaire) - Matériel - Sous-traitance
- ❌ **Problème** : Coûts horaires changent (augmentation nov)
- Doit mettre à jour manuellement tarifs (cherche mail RH, copie nouvelles valeurs)
- Recalcule formules
- ❌ **2 marges négatives détectées** : Dépassement budget
- Note mentalement : "Signaler direction réunion"
- ⏱️ **Temps** : 40 min
- 😟 **Ressenti** : Inquiétude (marges négatives = problème grave)

**14h35 - TOUJOURS EN ATTENTE RÉPONSE RA**
- Relance téléphone : "J'arrive pas à trouver info, je te rappelle"
- ⏱️ **Temps perdu attente** : 3h cumulées
- 😡 **Ressenti** : Frustration extrême (bloquée)

**14h40 - Mise à Jour Onglet "Ratios Activité"**
- Ratios : Marge/CA, Heures/CA, Productivité, etc.
- Formules Excel (références autres onglets)
- ❌ **#DIV/0! error** : Division par zéro (CA = 0 pour 1 affaire)
- Investigation : Affaire annulée, pas supprimée KPI
- Supprime ligne
- ⏱️ **Temps** : 25 min

**15h05 - PAUSE (10 min) - Épuisement**
- 😩 **Ressenti** : Fatigue intense (5h30 concentration)

**15h15 - Mise à Jour Onglet "Trésorerie Prévisionnel"**
- Copie données comptabilité
- Formules projection 3 mois (complexe)
- ⏱️ **Temps** : 30 min

**15h45 - Mise à Jour Onglet "Écarts Budget"**
- Comparaison Budget initial vs Réalisé
- Tableau croisé dynamique
- ⏱️ **Temps** : 20 min

**16h05 - ENFIN Réponse RA (mail)**
- Mail reçu : "Chantier X = 120h nov"
- Saisit manuellement dans `KPI_Master`
- Recalcule formules (5 min)
- ✅ Onglet "Heures Chantiers" terminé
- ⏱️ **Temps** : 10 min
- 😮‍💨 **Ressenti** : Soulagement (déblocage)

**16h15 - Vérifications Globales**
- Vérifie cohérence inter-onglets :
  - Total CA (onglet CA) = Total CA (onglet Marges) ?
  - Total Heures (onglet Heures) = Total Heures (onglet Ratios) ?
- ❌ **Incohérence détectée** : Écart 5K€ CA (origine inconnue)
- Investigation : 45 min (cherche erreur formule ou saisie)
- Trouve : Double compte 1 affaire (copié-collé doublon)
- Supprime doublon
- ⏱️ **Temps** : 50 min
- 😰 **Ressenti** : Stress (et si erreur non détectée ?)

**17h05 - Sauvegarde + FIN JOUR 1**
- Sauvegarde `KPI_Master_2025.xlsx`
- Copie backup `KPI_Master_2025_BACKUP_20251206.xlsx`
- Ferme fichiers
- ⏱️ **Total Jour 1** : **8h travail effectif** (dont 3h attente bloquante)
- 😫 **Ressenti** : Épuisement mental

---

#### Jour 2 (7h travail)

**8h00 - Consolidation Marges par Responsable Affaire**
- Ouvre fichiers `Marges_RA_Julien.xlsx`, `Marges_RA_Marc.xlsx`, etc. (4 fichiers)
- Copie-colle données `KPI_Master` → chaque fichier RA
- Vérif totaux
- ⏱️ **Temps** : 1h15
- 😐 **Ressenti** : Répétitif

**9h15 - Analyse Dépassements Budgets**
- Filtre affaires marge < 0
- Pour chaque affaire problématique :
  - Cherche causes (heures excessives ? Matériel cher ? Sous-traitance ?)
  - Rédige commentaire (Word)
- ⏱️ **Temps** : 1h30
- 😟 **Ressenti** : Préoccupation (problèmes récurrents)

**10h45 - PAUSE (10 min)**

**10h55 - Génération Graphiques**
- Crée graphiques Excel (10 graphiques) :
  - CA mensuel
  - Marges par activité
  - Heures par chantier
  - Ratios productivité
  - Trésorerie prévisionnel
  - Etc.
- Mise en forme (couleurs, légendes)
- ⏱️ **Temps** : 1h20
- 😐 **Ressenti** : Créatif (seul moment agréable)

**12h15 - PAUSE DÉJEUNER**

**13h15 - Rédaction Rapport Direction (Word)**
- Ouvre template `Rapport_KPI_Template.docx`
- Copie-colle graphiques Excel → Word
- Rédige commentaires (2-3 pages) :
  - Synthèse mois
  - Points d'alerte (marges négatives)
  - Recommandations
- ⏱️ **Temps** : 1h30
- 😟 **Ressenti** : Responsabilité (rapport lu direction)

**14h45 - Relecture + Corrections**
- Relit rapport 2× (chasse typos, cohérence)
- Vérifie chiffres (recalcule totaux calculatrice)
- ⏱️ **Temps** : 45 min

**15h30 - Export PDF + Envoi**
- Export Word → PDF
- Mail direction : "PJ rapport KPI Nov 2025"
- ⏱️ **Temps** : 10 min
- 😮‍💨 **Ressenti** : Soulagement (ENFIN terminé)

**15h40 - Archivage**
- Copie tous fichiers sources → Dossier `KPI_Nov2025_Archive`
- ⏱️ **Temps** : 10 min

**15h50 - FIN (Épuisée)**
- ⏱️ **Total Jour 2** : **7h travail effectif**
- 😫 **Ressenti** : Épuisement total

---

### ⚫ TOTAL AVANT - 24h Calvaire

| Étape | Temps |
|-------|-------|
| **Jour 1** | 8h |
| **Jour 2** | 7h |
| **TOTAL** | **15h travail effectif** |
| **+ Attente bloquante** | **+3h** |
| **+ Plantages/bugs** | **+1h** |
| **+ Vérifications/corrections erreurs** | **+2h** |
| **+ Stress/épuisement** | **+3h (pertes productivité)** |
| **TOTAL RÉEL** | **24h équivalent** |

**Coût** : 24h × 75€/h = **1 800€ par mois** → **21 600€/an** (rien que temps Sylvie)

**Ressenti global** :
- 😫 **Épuisement mental** : Concentration intense 2 jours
- 😡 **Frustration** : Plantages, blocages, erreurs récurrentes
- 😰 **Stress** : Peur erreur non détectée → Décisions direction fausses
- 😩 **Démotivation** : Tâche répétitive, aucune valeur ajoutée (90% saisies/vérifs manuelles)

---

### 🟢 APRÈS - Système Cible (2h automatisées)

#### Jour 1 (2h00 travail)

**8h00 - Connexion Dashboard Power BI (cloud)**
- Arrive bureau (ou télétravail ✅)
- Ouvre navigateur → `powerbi.duret.com`
- Authentification (SSO, 10 sec)
- Dashboard KPI s'affiche ✅ **DONNÉES TEMPS RÉEL déjà actualisées**
- ⏱️ **Temps** : **30 sec**
- 😊 **Ressenti** : Soulagement (données déjà là)

**8h01 - Vérification Clôture Comptable Automatique**
- Dashboard affiche bannière : "Clôture Nov OK ✅ J+2" (automatique)
- Si clôture pas OK : Alerte automatique + blocage génération rapport
- ⏱️ **Temps** : **5 sec**
- 😌 **Ressenti** : Confiance (système contrôle)

**8h01 - Consultation KPI Temps Réel**
- **Onglets dashboard** (1 clic) :
  - CA mensuel : Graphique temps réel ✅
  - Marges affaires : Tableau trié marge croissante ✅
    - ⚠️ **2 affaires rouges** (marge < 0) : Alertes déjà remontées RA J-15
  - Heures chantiers : Graphique par chef ✅
  - Matériel : Consommation vs budget ✅
  - Ratios activité : Automatiques ✅
  - Trésorerie prévisionnel : Modèle ML projetant 3 mois ✅
  - Écarts budget : Tableau dynamique ✅
- **Aucune saisie, aucun calcul** : TOUT automatisé
- ⏱️ **Temps** : **15 min** (consultation interactive)
- 😃 **Ressenti** : Satisfaction (visibilité immédiate)

**8h16 - Analyse Marges Négatives (alertes automatiques)**
- Clique affaire "Chantier Leclerc" (marge -12K€)
- Dashboard drill-down automatique :
  - Cause 1 : Heures +35% vs budget (180h vs 120h prévues)
  - Cause 2 : Matériel +18% (commandes non validées RA)
- **Commentaire RA déjà saisi** dans système (J-10) : "Problème technique imprévu, client demande modif..."
- Sylvie valide commentaire (checkbox)
- ⏱️ **Temps** : **10 min** (2 affaires)
- 😌 **Ressenti** : Contrôle (causes déjà documentées)

**8h26 - Ajout Commentaires Personnels**
- Zone texte dashboard : Sylvie rédige synthèse (300 mots) :
  - "Mois Nov : CA +8% vs Oct, marges stables sauf 2 chantiers..."
  - "Points vigilance : Chantier Leclerc à surveiller déc..."
  - "Recommandations : Revoir process validation matériel..."
- ⏱️ **Temps** : **20 min**
- 😊 **Ressenti** : Valeur ajoutée (analyse vs saisie)

**8h46 - Génération Rapport PDF Automatique**
- Bouton "Générer rapport direction" (1 clic)
- **Système génère automatiquement** :
  - Page 1 : Synthèse exécutive (KPI clés)
  - Page 2-5 : Graphiques (10 graphiques)
  - Page 6-7 : Tableaux détaillés
  - Page 8 : Commentaires Sylvie
  - Page 9 : Alertes + recommandations
- Template pro (logo Duret, mise en forme auto)
- Export PDF : `Rapport_KPI_Nov2025.pdf` (30 sec génération)
- ⏱️ **Temps** : **2 min**
- 😃 **Ressenti** : Efficacité (vs 2h rédaction manuelle)

**8h48 - Validation + Envoi Automatique**
- Sylvie revoit PDF généré (vérif rapide)
- Clique "Valider + Envoyer direction"
- **Mail automatique** :
  - Destinataires : Direction (liste prédéfinie)
  - Objet : "Rapport KPI Novembre 2025"
  - Corps : Template avec résumé + lien dashboard interactif
  - PJ : PDF
- ⏱️ **Temps** : **5 min**
- 😊 **Ressenti** : Professionnalisme

**8h53 - Envoi Dashboards Personnalisés Responsables Affaires**
- **Automatique** : Chaque RA reçoit son dashboard personnalisé (RBAC) :
  - Julien : Ses 12 affaires seulement
  - Marc : Ses 8 affaires
  - Etc.
- Sylvie vérifie envois (log système)
- ⏱️ **Temps** : **2 min**

**8h55 - Analyse Prédictive ML (optionnel)**
- Consulte onglet "Prédictions IA" :
  - Projection CA déc : 1,2M€ ±8%
  - Risques dépassements : 3 chantiers alertés
  - Recommandations optimisation : "Réallouer 2 chefs chantier X → Y"
- Sylvie note recommandations (intégrera réunion direction)
- ⏱️ **Temps** : **10 min**
- 🤩 **Ressenti** : Innovation (IA aide décisions)

**9h05 - Préparation Réunion Direction (optionnel)**
- Crée 3 slides PowerPoint (export dashboard) :
  - Slide 1 : KPI clés
  - Slide 2 : Alertes
  - Slide 3 : Recommandations
- ⏱️ **Temps** : **15 min**

**9h20 - Archivage Automatique**
- Système archive automatiquement :
  - Snapshot dashboard Nov (versionné, immuable)
  - PDF rapport
  - Logs modifications
- Sylvie vérifie (1 clic)
- ⏱️ **Temps** : **1 min**

**9h21 - TERMINÉ ✅**
- ⏱️ **Total** : **2h** (vs 24h avant)
- 😃 **Ressenti** : **Satisfaction extrême**
  - Pas d'épuisement
  - Pas de stress (confiance données)
  - Valeur ajoutée (analyse vs saisie)
  - Télétravail possible
  - Temps libéré : Projets stratégiques

---

### 🟢 TOTAL APRÈS - 2h Automatisées

| Étape | Temps |
|-------|-------|
| Connexion + vérif clôture | 30 sec |
| Consultation KPI temps réel | 15 min |
| Analyse marges négatives | 10 min |
| Commentaires personnels | 20 min |
| Génération rapport PDF auto | 2 min |
| Validation + envoi | 5 min |
| Envoi dashboards RA | 2 min |
| Analyse prédictive ML | 10 min |
| Préparation réunion direction | 15 min |
| Archivage auto | 1 min |
| **TOTAL** | **2h00** |

**Gain** : **24h → 2h = -22h (-92%)**

**Coût** : 2h × 75€/h = **150€ par mois** → **1 800€/an** (vs 21 600€)

**Économie** : **19 800€/an** (rien que temps Sylvie)

**Bénéfices qualitatifs** :
- ✅ **Temps réel** : Données J+0 vs J+15
- ✅ **Fiabilité** : Aucune erreur saisie manuelle
- ✅ **Télétravail** : Possible (cloud)
- ✅ **Stress réduit** : Confiance système
- ✅ **Valeur ajoutée** : Analyse stratégique vs saisie répétitive
- ✅ **Scalabilité** : Croissance entreprise = aucun temps additionnel
- ✅ **Succession** : Nouvelle personne opérationnelle en 2h (vs 6 mois)

---

## 🗺️ JOURNEY MAP 2 : Thomas - Journée Type Gestion Demandes BE

### Contexte

**Qui** : Thomas, Responsable Bureau d'Études (38 ans)
**Quoi** : Gestion demandes BE (20+ demandeurs)
**Quand** : Journée typique lundi (pic demandes weekend)
**Où** : Bureau Annecy
**Pourquoi** : BE = fonction transverse pour toute l'entreprise

---

### ⚫ AVANT - Système Actuel (Chaos, surcharge garantie)

**7h30 - Arrivée Bureau (30 min avant horaire)**
- Thomas arrive tôt (prendre avance demandes)
- 😟 **Ressenti** : Anxiété (weekend = accumulation demandes)

**7h35 - Ouverture Boîte Mail**
- **18 mails non lus** (weekend) :
  - 12 mails "URGENT : Besoin étude chantier X"
  - 3 mails relances demandes semaine précédente
  - 2 mails directions (priorité haute)
  - 1 mail RH (formation équipe)
- ⏱️ **Temps lecture** : 45 min (comprendre chaque demande)
- 😰 **Ressenti** : Débordement immédiat

**8h20 - Consultation WhatsApp**
- **8 messages WhatsApp** :
  - Chef chantier : "Thomas t'es là ? Besoin plan révision urgent chantier mairie"
  - RA : "Salut, t'as avancé étude supermarché ? Client relance"
  - 6 autres demandes diverses
- ⏱️ **Temps** : 15 min
- 😡 **Ressenti** : Frustration (demandes hors process)

**8h35 - Tentative Priorisation Manuelle**
- Ouvre `C:\Thomas\Demandes_BE_EnCours.xlsx`
- **24 lignes** (demandes en attente) :
  - Ligne 1 : Étude électrique chantier Leclerc (RA Julien, reçu 12/11)
  - Ligne 2 : Plan révision mairie (Chef Jean, reçu 13/11)
  - ...
  - Ligne 24 : Note calcul bureaux (RA Sophie, reçu 05/12)
- Thomas **essaie prioriser** (critères subjectifs) :
  - "Urgent" selon demandeur (mais TOUT est urgent)
  - Date réception (premier arrivé ?) → Non, car directions prioritaires
  - Importance client (gros vs petits)
  - Collègue qui insiste plus
- ❌ **Aucun critère objectif**
- ⏱️ **Temps** : 20 min (décision impossible)
- 😰 **Ressenti** : Paralysie décisionnelle

**8h55 - Interruption Téléphone (RA Marc)**
- "Thomas, t'as vu mon mail ? Chantier URGENT client relance, besoin plan auj"
- Thomas : "Euh... j'ai 18 demandes urgentes, je peux pas tout faire auj..."
- Marc : "Mais c'est VRAIMENT urgent, client menace annuler"
- Thomas : "OK je vais voir..." (cède pression)
- ⏱️ **Temps** : 10 min
- 😠 **Ressenti** : Pression, culpabilité

**9h05 - Début Étude "Urgente" Marc (Chantier Usine)**
- Ouvre AutoCAD
- Commence schéma électrique
- ⏱️ **Temps investi** : 45 min

**9h50 - Interruption Passage Bureau (Chef Chantier Jean)**
- "Salut Thomas, t'as 2 minutes ? J'ai besoin plan révision mairie"
- Thomas : "Euh je suis sur étude Marc..."
- Jean : "Ah mais moi aussi c'est urgent, inspection lundi prochain !"
- Thomas : "OK je termine Marc puis je fais toi"
- ⏱️ **Temps perdu** : 5 min + perte concentration
- 😡 **Ressenti** : Frustration (interruptions constantes)

**9h55 - Retour Étude Marc**
- Reprend où en était (perd 5 min retrouver fils)
- ⏱️ **Temps** : 35 min (termine étude)

**10h30 - Envoi Étude Marc + Mail**
- Export PDF, mail Marc
- ⏱️ **Temps** : 5 min
- 😮‍💨 **Ressenti** : Soulagement temporaire

**10h35 - Début Étude Jean (Plan Mairie)**
- Ouvre plans existants
- Commence révision
- ⏱️ **Temps investi** : 1h15

**11h50 - Interruption Mail Direction (Nouveau "URGENT")**
- Mail PDG : "Thomas, besoin étude faisabilité projet logements cet aprèm, réunion 15h"
- ❌ **Nouveau urgent** prioritaire
- Thomas doit arrêter étude Jean
- ⏱️ **Temps perdu** : Étude Jean non terminée
- 😰 **Ressenti** : Impuissance ("Je ne contrôle rien")

**11h55 - PAUSE DÉJEUNER (déjà épuisé)**
- 😩 **Ressenti** : Fatigue mentale (interruptions multiples)

**13h00 - Retour Déjeuner - Début Étude Direction**
- Analyse faisabilité projet logements
- Calculs, schémas, note synthèse
- ⏱️ **Temps** : 1h45

**14h45 - Préparation Réunion Direction**
- PowerPoint 5 slides
- ⏱️ **Temps** : 10 min

**14h55 - RÉUNION DIRECTION (1h)**
- Présentation étude
- ⏱️ **Temps** : 1h

**15h55 - Retour Bureau - 6 Nouveaux Mails "URGENT"**
- Thomas ouvre mails : 6 nouvelles demandes après-midi
- 😡 **Ressenti** : Découragement total

**16h00 - Retour Étude Jean (Enfin)**
- Reprend plan mairie (interrompu 11h50)
- Termine révision
- ⏱️ **Temps** : 45 min

**16h45 - Envoi Étude Jean**
- Export PDF, mail
- Jean répond : "Merci mais fallait ce matin, client est parti... Tant pis."
- 😡 **Ressenti** : Frustration extrême (travail inutile)

**16h50 - Mise à Jour Excel Demandes**
- Marque Marc + Jean "Terminé"
- Ajoute 6 nouvelles demandes reçues auj
- Excel : **28 demandes en attente** (vs 24 ce matin)
- ⏱️ **Temps** : 10 min
- 😰 **Ressenti** : Cercle vicieux (plus traite, plus reçoit)

**17h00 - Briefing Équipe BE (3 Dessinateurs)**
- Répartit demandes équipe (qui fait quoi demain)
- ❌ **Priorisation subjective** : Thomas décide seul
- Équipe : "Pourquoi cette demande prioritaire vs autre ?"
- Thomas : "Parce que... euh... direction a demandé" (pas convainquant)
- ⏱️ **Temps** : 20 min
- 😟 **Ressenti** : Manque légitimité

**17h20 - Fin Journée (Part 19h)**
- Thomas reste 2h sup pour avancer demandes
- Traite 2 demandes sup (petites)
- ⏱️ **Total journée** : **10h** (dont 2h sup non payées)
- 😫 **Ressenti** : Épuisement, surcharge chronique

---

### ⚫ BILAN AVANT - Journée Chaotique

| Activité | Temps |
|----------|-------|
| Demandes traitées | 3 (Marc, Jean, Direction) |
| Temps études | 4h20 |
| Temps interruptions | 1h30 |
| Temps priorisation manuelle | 30 min |
| Temps réunion | 1h |
| Temps admin (mails, Excel) | 1h40 |
| Heures sup | 2h |
| **TOTAL** | **10h** |

**Efficacité** : 4h20 études / 10h = **43% productif** (57% perdu)

**Problèmes** :
- ❌ Surcharge : 28 demandes en attente (capacité 15)
- ❌ Interruptions constantes : Concentration impossible
- ❌ Priorisation subjective : Conflits interpersonnels
- ❌ Heures sup récurrentes : Burn-out garanti
- ❌ Insatisfaction demandeurs : Jean livré trop tard

**Coût** : 10h × 60€/h × 250j = **150 000€/an** (dont 50 000€ heures sup + inefficacité)

---

### 🟢 APRÈS - Système Cible (Tickets, priorisation auto, transparence)

**8h00 - Arrivée Bureau (horaire normal)**
- Thomas arrive 8h (pas besoin avance)
- 😌 **Ressenti** : Sérénité

**8h05 - Connexion Plateforme Tickets BE**
- Ouvre `tickets.duret.com/be`
- Dashboard affiche :
  - **Demandes en attente** : 22 (vs 28 avant grâce meilleure gestion)
  - **Capacité équipe semaine** : 160h (4 personnes × 40h)
  - **Charge demandes** : 185h (surcharge 25h = 16%)
  - **Priorisation automatique** : Algorithme a classé selon critères objectifs
- ⏱️ **Temps** : **2 min**
- 😊 **Ressenti** : Visibilité immédiate

**8h07 - Consultation Top 5 Priorités (Auto)**
- **Algorithme priorisation** (critères pondérés) :
  1. **Direction** : Poids +50%
  2. **Délai client** : Si inspection/deadline → Poids +30%
  3. **Impact CA** : Gros chantiers → Poids +20%
  4. **Ancienneté demande** : FIFO (First In First Out) → +10%/jour
  5. **Charge estimée** : Petites demandes favorisées si capacité faible

- **Top 5 automatique** :
  1. ✅ Étude direction (logements) : 95 pts (Direction + gros CA)
  2. ✅ Plan mairie (Jean) : 88 pts (Deadline inspection lundi)
  3. ✅ Étude Leclerc (Julien) : 72 pts (Gros CA + ancien)
  4. ✅ Schéma usine (Marc) : 68 pts
  5. ✅ Note calcul bureaux (Sophie) : 55 pts

- **Transparence** : Tous demandeurs voient classement + raisons
  - Jean voit : "Votre demande #2 car deadline inspection lundi (88 pts)"
  - Marc voit : "Votre demande #4 car pas deadline urgente (68 pts), estimée traitement jeudi"

- ⏱️ **Temps** : **5 min** (consultation)
- 😃 **Ressenti** : Objectivité (pas de décision subjective)

**8h12 - Assignment Automatique Équipe**
- Système a assigné automatiquement :
  - Thomas : Demande #1 (direction, complexe)
  - Dessinateur A : Demande #2 (plan mairie, standard)
  - Dessinateur B : Demande #4 (schéma usine, standard)
  - Dessinateur C : Demande #5 (note calcul, simple)
- Demande #3 (Leclerc) : Planifiée demain (capacité auj saturée)
- Tous voient planning (calendrier partagé)
- ⏱️ **Temps** : **0 min** (auto)
- 😊 **Ressenti** : Équité (algo décide vs Thomas)

**8h12 - Début Étude Direction (Prévue 2h)**
- Thomas clique "Démarrer" (chrono automatique)
- Travaille étude sans interruption :
  - **Notifications bloquées** pendant études (mode focus)
  - Nouveaux tickets arrivent mais pas de popup
- ⏱️ **Temps** : 1h45 (termine étude)
- 😊 **Ressenti** : Concentration optimale (pas interruptions)

**9h57 - Clôture Demande + Upload Livrables**
- Thomas clique "Terminer demande"
- Upload PDF étude
- **Mail automatique direction** : "Votre demande #12345 étude logements est terminée, PJ PDF"
- Ticket passe statut "Closed"
- ⏱️ **Temps** : 3 min
- 😊 **Ressenti** : Satisfaction (livraison formalisée)

**10h00 - PAUSE (10 min mérité)**

**10h10 - Vérification Équipe (Dashboard)**
- Thomas consulte dashboard équipe :
  - Dessinateur A : Demande #2 (plan mairie) - 60% avancée ✅
  - Dessinateur B : Demande #4 - 30% avancée ✅
  - Dessinateur C : Demande #5 - Terminée ✅
- Aucune intervention nécessaire (autonomie)
- ⏱️ **Temps** : 5 min
- 😊 **Ressenti** : Confiance équipe

**10h15 - Traitement Demande #3 (Leclerc)**
- Thomas démarre étude Leclerc
- Mode focus activé
- ⏱️ **Temps** : 2h10
- 😊 **Ressenti** : Flow (concentration)

**12h25 - PAUSE DÉJEUNER**

**13h30 - Clôture Demande Leclerc**
- Upload livrables
- Mail automatique RA Julien
- ⏱️ **Temps** : 3 min

**13h33 - Revue Nouvelles Demandes (6 reçues matin)**
- 6 nouveaux tickets créés par demandeurs ce matin :
  - Demandeurs ont rempli formulaire standardisé :
    - Type étude (schéma / plan / note calcul / autre)
    - Chantier concerné
    - Deadline souhaitée
    - Charge estimée (S/M/L)
    - Fichiers joints
  - **Algorithme a déjà priorisé** automatiquement
  - Aucune action Thomas nécessaire (juste validation rapide pertinence)
- ⏱️ **Temps** : 10 min
- 😊 **Ressenti** : Processus fluide

**13h43 - Traitement Demande Suivante (Petite, 45 min)**
- Démarre demande #7 (note calcul simple)
- ⏱️ **Temps** : 40 min

**14h23 - Clôture Demande**
- Upload, mail auto
- ⏱️ **Temps** : 2 min

**14h25 - Réunion Hebdo Équipe BE (30 min)**
- Revue capacité semaine prochaine
- Ajustements priorités si nécessaire (exceptions)
- ⏱️ **Temps** : 30 min

**14h55 - Traitement Demandes Suite**
- Thomas traite 2 demandes sup (petites)
- ⏱️ **Temps** : 1h20

**16h15 - Revue Dashboard Fin Journée**
- **Demandes traitées auj** : 5 (Thomas : 4, équipe : 4 totales = 8 équipe complète)
- **Demandes en attente** : 20 (vs 22 matin) → Réduction ✅
- **Satisfaction demandeurs** (notation auto) : 4,2/5 moyenne ✅
- ⏱️ **Temps** : 5 min
- 😃 **Ressenti** : Accomplissement (journée productive)

**16h20 - Veille Technique (Temps Libéré)**
- Thomas a 40 min libres (vs heures sup avant)
- Utilise pour veille technique (formations, nouveaux logiciels)
- ⏱️ **Temps** : 40 min
- 🤩 **Ressenti** : Développement personnel

**17h00 - FIN Journée (Horaire Normal)**
- Part 17h (vs 19h avant)
- ⏱️ **Total** : **8h** (vs 10h avant)
- 😃 **Ressenti** : Équilibre vie pro/perso

---

### 🟢 BILAN APRÈS - Journée Maîtrisée

| Activité | Temps |
|----------|-------|
| Demandes traitées (Thomas) | 4 |
| Demandes traitées (équipe totale) | 8 |
| Temps études productif | 6h15 |
| Temps interruptions | 0 min (mode focus) |
| Temps priorisation | 0 min (auto) |
| Temps admin (tickets) | 30 min |
| Temps réunion | 30 min |
| Temps veille | 40 min |
| Heures sup | 0 |
| **TOTAL** | **8h** |

**Efficacité** : 6h15 études / 8h = **78% productif** (vs 43% avant)

**Gains** :
- ✅ **+81% productivité** études (6h15 vs 4h20)
- ✅ **0 heures sup** (vs 2h)
- ✅ **Demandes en attente réduites** : 20 vs 28 (-29%)
- ✅ **Satisfaction demandeurs** : 4,2/5 (transparence + délais resp)
- ✅ **Équité** : Priorisation objective, aucun conflit
- ✅ **Équilibre vie pro/perso** : Part 17h vs 19h

**Économie** : 2h/jour × 250j × 60€/h = **30 000€/an** (heures sup)
**Productivité** : +81% = **120 000€/an** valeur additionnelle

**Total gain** : **150 000€/an**

---

## 🗺️ JOURNEY MAP 3 : Isabelle - Réception Stocks + Inventaire Mensuel

*(Résumé synthétique pour longueur)*

### ⚫ AVANT - Réception 20 BL (Journée Type)

- **7h-9h30** : Comptage manuel 20 BL (colis, palettes) = 2h30
  - Fatigue physique, erreurs 15%
  - Temps perdu : 2h30 × 35€/h = 88€
- **9h30-11h** : Saisie manuelle Lireco (20 BL) = 1h30
  - Typos, références fausses
- **11h-12h** : Classement BL papier, rapprochements = 1h
- **14h-17h** : Mise à jour Excel valorisation (complexe) = 3h
  - Formules cassées, incohérences
- **TOTAL** : **8h** dont 6h comptage/saisie manuelle

**Coût** : 8h × 35€/h × 250j = **70 000€/an**
**Erreurs** : 15% = **25 000€/an** litiges

---

### 🟢 APRÈS - Réception Automatisée (RFID/QR Code)

- **7h-9h** : Scan automatique 20 BL (douchette/RFID) = **15 min**
  - 1 BL = 45 sec (scan QR → auto-remplissage Lireco)
  - 0 erreur comptage
- **9h-9h30** : Vérification rapide écrans (anomalies) = 30 min
- **9h30-12h** : Tâches à valeur ajoutée (optimisation stocks, relations fournisseurs) = 2h30
- **14h-17h** : Autres missions (inventaires partiels, formations) = 3h
- **TOTAL** : **8h** dont **45 min réception** (vs 6h avant)

**Gain temps** : 5h15/jour × 250j = **1 312h/an**
**Économie** : 1 312h × 35€/h = **46 000€/an**
**Qualité** : 0 erreur vs 15% = **25 000€/an**

**Total gain** : **71 000€/an**

---

## 📊 SYNTHÈSE GLOBALE JOURNEY MAPS

### Récapitulatif Gains

| Persona | Process | Avant | Après | Gain Temps | Gain € |
|---------|---------|-------|-------|------------|--------|
| **Sylvie** | KPI mensuels | 24h | 2h | -22h (-92%) | 19 800€/an |
| **Thomas** | Demandes BE (quotidien) | 10h | 8h | -2h (-20%) | 150 000€/an |
| **Isabelle** | Réception stocks (quotidien) | 6h | 45 min | -5h15 (-88%) | 71 000€/an |
| **TOTAL** | | | | | **240 800€/an** |

### Bénéfices Qualitatifs

| Persona | Avant (Ressenti) | Après (Ressenti) |
|---------|------------------|-------------------|
| **Sylvie** | 😫 Épuisement, stress, frustration | 😃 Satisfaction, confiance, valeur ajoutée |
| **Thomas** | 😰 Surcharge, impuissance, conflits | 😊 Maîtrise, équité, équilibre vie pro/perso |
| **Isabelle** | 😩 Pénibilité, erreurs, monotonie | 😊 Efficacité, qualité, missions enrichies |

---

**Date création** : 2025-11-17
**Version** : v1.0
**Prochaine étape** : Synthèse Executive + Implementation
