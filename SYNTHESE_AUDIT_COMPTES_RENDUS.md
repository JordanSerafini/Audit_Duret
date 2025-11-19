# 📋 SYNTHÈSE DE L'AUDIT DURET ÉLECTRICITÉ
## Analyse des Comptes Rendus et Notes Terrain

**Date de l'audit** : Novembre 2025
**Méthodologie** : Analyse exhaustive des notes terrain et comptes rendus structurés
**Périmètre** : 8 services audités, ~100 collaborateurs
**Auditeur** : Audit IT & Transformation Digitale

---

## 🎯 MÉTHODOLOGIE DE L'AUDIT

### Documents analysés
**Notes terrain originales** (4 fichiers) :
- `Originales/asssistante relation.txt`
- `Originales/duret.txt`
- `Originales/technicien.txt`
- `Originales/bcp de fiches produits a faire vali.txt`

**Comptes rendus structurés** (8 fichiers) :
- `NOTES_AUDIT_ASSISTANTE_RELATION_CLIENT.md`
- `NOTES_AUDIT_CHEF_CHANTIER.md`
- `NOTES_AUDIT_DURET_ALBERTVILLE.md`
- `NOTES_AUDIT_DURET_SERVICES.md`
- `NOTES_AUDIT_ENJEUX_TRANSVERSES.md`
- `NOTES_AUDIT_RESPONSABLE_ACTIVITE.md`
- `NOTES_AUDIT_RESPONSABLE_AFFAIRE.md`
- `NOTES_AUDIT_TECHNICIEN_MAINTENANCE.md`

### Approche
✅ **Extraction uniquement des faits mentionnés**
✅ **Aucune donnée inventée ou extrapolée**
✅ **Identification des problèmes concrets terrain**
✅ **Recueil des besoins exprimés par les utilisateurs**

---

## 📊 DONNÉES FACTUELLES CONFIRMÉES

### Effectif et Organisation
| Élément | Donnée confirmée |
|---------|------------------|
| Collaborateurs impactés | ~100 |
| Responsables d'affaires | 4 |
| Chefs de chantier | 10-15 |
| Clients contrat maintenance | 250-300 |
| Clients récurrents (activité) | ~20aine |

### Volumétrie Opérationnelle
| Indicateur | Volumétrie |
|------------|------------|
| Mails/jour (Service client) | ~50 |
| Reliquats | Hebdomadaire |
| Réunions maintenance | Hebdomadaire (mercredis) |
| Multi-devis client (cas extrême) | 20 devis/semaine |

### Taille des Chantiers
- **Chantiers moyens** : 50k€ - 500k€
- **Gros chantiers tertiaires** : Jusqu'à 1 million €
- **Projet long terme** : 2,5M€ sur 2 ans

### Délais Constatés
- **Délai traitement demandes client** : 1-2 jours
- **Délai émission devis** : Généralement 1 semaine

---

## 🔴 PROBLÈMES CRITIQUES IDENTIFIÉS PAR SERVICE

### 1️⃣ SERVICE CLIENT - "Système Post-it"

#### Situation actuelle
- **Suivi clients** : Post-it papier
- **Aucun système de ticketing**
- **Pas de traçabilité** des appels téléphoniques
- **~50 mails/jour** : Rien d'automatisé pour filtrer ou dispatcher
- **Communication techniciens** : Téléphone uniquement

#### Outils utilisés
- MDE ERP
- SAGE (devis)
- Outlook (agenda, emails)
- Excel (archivage, suivi)

#### Pain Points Critiques
**Double saisie clients** :
> "Création nouveau client actuellement 2 bases" (ERP + SAGE)

**Gestion devis fragmentée** :
> "Quand on fait des devis sur Sage, on les enlève du logiciel pour mettre dossier partagé"

**Planning Gaëtan chronophage** :
> "Prise de RDV pour entretiens : tableau Excel client, mail réponse client attend, ressaisir"

**Besoins exprimés** :
- Système relances automatiques : "Pop-up, pas besoin résumé mail journalier"
- Planning partagé : "Automatisé tel > planning Gaëtan"
- Centralisation : "Centraliser information pour gagner du temps"
- Suivi demandes techniciens : "Exemple technicien dit cliente demande devis sur X choses"

---

### 2️⃣ ERP OBSOLÈTE - Problème Transverse Majeur

#### Problèmes identifiés
**Performance** :
> "Vieux, obsolète, ralentissement, pas mal plantage"

**Qualité** :
> "Impression PDF bof, génération rapport"

**Accès distant** :
> "Connexion distance - problème majeur accès distance, très lent, problématique"

#### Impact
- Télétravail quasi impossible
- Perte de temps quotidienne
- Frustration utilisateurs

#### Note : Contradiction à creuser
- Certains : "Vieux, obsolète, ralentissement"
- Autres : "Logiciel actuel pas mal surtout UI UX, rapidité"
- **Hypothèse** : Plusieurs logiciels différents ou perceptions différentes selon utilisation

---

### 3️⃣ CHEFS DE CHANTIER - Isolement Numérique

#### Situation actuelle
**Aucun outil métier terrain** :
> "Pas de logiciels au quotidien, téléphone: mails, appels, envoi plan par mail etc et enregistré sur téléphone"

**Remontée info archaïque** :
> "Remontée info actuellement: oral, WhatsApp"

#### Pain Points Critiques
**Zéro traçabilité** :
- WhatsApp pour échanges professionnels
- Pas d'historique structuré
- Informations perdues

**Photos non centralisées** :
> "Volonté max photos > serveur"
> Actuellement : Téléphone → Mail → Serveur (manuel)

**Génération rapports** :
> "Générer rapport intervention PDF petit chantier"

**Commandes petit matériel** :
- Passe commande sans vision stock
- Pas de traçabilité

**Besoins exprimés** :
- App mobile chantier
- Upload automatique photos
- Génération rapports automatisés
- Accès information chantier

---

### 4️⃣ MAINTENANCE TECHNIQUE - CERFA Papier

#### Contexte
- **250-300 clients** en contrat maintenance
- Planning : Clothilde prend RDV
- Base clients : Excel
- Contrats : Word
- Réunion hebdomadaire : Mercredis

#### Pain Point Critique #1 : CERFA Papier
> "Interventions sous CERFA, aujourd'hui ils sont tous remplis à la main"

**Impact** :
- Processus chronophage
- Signature papier
- Scan puis envoi
- Pas de workflow automatique

#### Pain Point Critique #2 : Opportunité Commerciale Perdue
> "Gaëtan: quand il va en clientèle, souvent demande de devis, aujourd'hui on sait pas le documenter, possibilité de générer les devis en live"

**Impact** :
- Retour bureau nécessaire
- Délai rallongé
- Risque d'oubli
- Perte d'opportunité commerciale

#### Pain Point Critique #3 : Pointage Manuel
> "Pointage: heure arrivée, heure départ"
> "Voir dépassement heure, refacturation difficile"

**Impact** :
- Perte de marge si heures non refacturées
- Pas de vision temps réel

#### Pain Point Critique #4 : Certificats Papier
> "Certificat de mise en service : digitalisé : actuellement papier scanné"

**Besoins exprimés** :
- CERFA digitalisé : "Interventions digitalisées, signature workflow"
- Génération devis live : "Possibilité générer les devis en live"
- Pointage digital : "Pointage heure arrivée/départ"
- Photos avant/après : "Photos ? > app, avant après, suivi historique, date/endroit"
- Portail client : "Le client : code accès, plateforme sur le site centralisé"
- Zoning : "Zoning intéressant par exemple pour l'entretien/maintenance"
- Satisfaction : "Enquête satisfaction à développer, systématisation"

---

### 5️⃣ RESPONSABLES D'AFFAIRES - Accès Distance Catastrophique

#### Effectif et Organisation
- **4 responsables d'affaires**
- **1 seul responsable par affaire**
- Reliquats hebdomadaires
- Réunions chantier hebdomadaires

#### Pain Point Critique #1 : Accès Distance
> "Problème majeur accès à distance, très lent, problématique"

**Impact** :
- Télétravail inefficace
- Flexibilité limitée
- Déplacements obligatoires

#### Pain Point Critique #2 : Documents Sécurité Non Faits
> "Sécurité pas plus important, document pas fait à faire: PPSPS plan prévention, fiche accueil salarié (important)"

**Impact** :
- Non-conformité réglementaire
- Risques juridiques
- Sécurité chantier compromise

#### Pain Point Critique #3 : Prix Fournisseurs Manuels
> "Demande MAJ auto prix fournisseur"

#### Pain Point Critique #4 : Pas de Copie Devis
> "Copier un ancien devis pour repartir de lui - copier/coller"

**Besoins exprimés** :
- Accès distance performant
- MAJ automatique prix fournisseurs
- Fonction copie/duplication devis
- Documents sécurité automatisés (PPSPS, fiche accueil)
- Workflow affaire complet

---

### 6️⃣ RESPONSABLE ACTIVITÉ - Multi-Devis Client

#### Contexte
> "Depuis quelques soucis de recrutement, il assure responsable affaire pour Annecy"
> "Il fait 100% de ces devis"

**Périmètre** :
- Gros chantiers tertiaires : 1 million € (2,5M sur 2 ans)
- Cœur métier : 50-500k€
- ~20aine clients

#### Pain Point Critique #1 : Suivi Multi-Devis
> "20 devis même client même semaine, 9 passé tout de suite, difficulté : est ce que pour ce devis là la commande est bien passé"
> "Groupement chiffrage - commande"

**Impact** :
- Impossible de savoir quel devis commandé
- Risque d'oubli commandes
- Confusion

#### Pain Point Critique #2 : Jonglage Logiciels
> "Devis: actuellement ouvrir logiciel devis + ouverture Rexel"

#### Pain Point Critique #3 : Historique Inaccessible
> "Actuellement du mal à retrouver et faire les liens"
> "Volonté consultation historique du chantier"

#### Pain Point Critique #4 : Fonctions Transversales Surchargées
> "Irrité: de plus en plus dans l'entreprise de fonction transversale: ex le bureau d'étude doit travailler pour toute l'entreprise, les demandes viennent de X personnes, doivent implémenter le planning des équipes: concaténer demande, vrai sujet de progression"

**Impact** :
- Surcharge bureau d'études
- Difficultés priorisation
- Goulot d'étranglement

#### Enjeux RH
> "Turnover par vagues, 2025"
> "Recrutement : difficile"

**Besoins exprimés** :
- Liaison automatique devis-commandes
- Statut visuel temps réel
- Historique chantier centralisé (vue 360°)
- Workflow lancement travaux automatisé
- Gestion listes réserves digitale
- Capitalisation REX (Retour Expérience)
- Système tickets pour fonctions transversales
- Interface unifiée multi-outils

---

### 7️⃣ GESTION OPÉRATIONNELLE - "Excel Partout"

#### Pain Point Critique #1 : Tout sur Excel
> "Excel, tout perso"
> "ERP et outils associé, approvisionnement, gestion affaire, devis, suivi client, fournisseurs - actuellement rien du tout"

#### Pain Point Critique #2 : KPI Manuels
> "Tableau de bord Excel KPI, exercice"
> "Contrôleur gestion > intégration globale au delà de la production marge etc.. Excel"

**Impact** :
- Pas de temps réel
- Fiabilité limitée
- Pas de prédictif

#### Pain Point Critique #3 : Remontée Information Défaillante
> "Mauvaise remontée information: trop longue, trop tard, mauvaise interprétation"

#### Pain Point Critique #4 : Transparence Insuffisante
> "Transparence de la donnée, des chiffres : ex: analyse + gestion chantier, le chef chantier doit y avoir accès, augmenter la transparence de certain niveau information"

#### Pain Point Critique #5 : Formation Longue
> "Nouvel arrivant: pas 4j de formations"

**Besoin** : Outils intuitifs

#### Pain Point Critique #6 : Compta Analytique
> "Compta: analytique - actuellement rien du tout"

#### Pain Point Critique #7 : Validation Produits
> "Beaucoup de fiches produits à faire valider (propositions au client) dans la phase devis"

#### Pain Point Critique #8 : Litiges Non Priorisés
> "Gestion des litiges et recommandé: remontée info priorisée"

**Besoins exprimés** :
- Transparence donnée : Chef chantier accès analyse
- Tableau de bord temps réel : KPI automatisés
- Contrôleur gestion : Intégration ERP
- Outils intuitifs : Formation simplifiée
- Remontée info rapide et fiable
- Alertes / KPI automatisées
- ERP centralisé vs Excel perso
- Workflow validation produits

---

### 8️⃣ STOCKS - Réception Manuelle Chronophage

#### Pain Point Critique #1 : Réception Manuelle
> "Ne plus réceptionner manuellement volonté, beaucoup temps perdu en comptage"

#### Pain Point Critique #2 : Valorisation Incohérente
> "Gestion des stocks, réutilisation du stock : important"
> "Valorisation d'un même produit à 2 prix différents"

**Impact** :
- Incohérences comptables
- Difficultés calcul marges
- Stock sous-utilisé

#### Pain Point Critique #3 : Visibilité Stock
> "Disponibilité, stock: pas vu sur inventaire, fiabilité, coût du matériel"

**Solution proposée** :
> "Puce RFID cf Decathlon"

**Besoins exprimés** :
- Réception automatisée : Douchette, QR Code, RFID
- Valorisation unique produit
- Visibilité temps réel
- Réutilisation facilitée

---

### 9️⃣ ALBERTVILLE BTP - Situations Mensuelles Très Longues

#### Assistante Relation Client
**Outils spécifiques** :
- **Lireco** : Gestion stock temps réel, alertes, commandes codes-barres
- Nombreux suivis Excel : Véhicules, CONSUEL, salles, logements, événements

#### Responsable Affaire
**Pain Point Critique #1 : Situations Mensuelles**
> "Situations & Facturation : Traitement mensuel très très long sur le logiciel actuel"

**Pain Point Critique #2 : Budget Complémentaire**
> "Budget complémentaire : Problème : Quand on valide le CA complémentaire, impossible de savoir à quoi correspond le débours"

#### Chef Chantier
**Pain Point Critique : Remontée BL**
> "Reçoit un mail quand commande passée"
> "Pas d'info sur réception ni infos complémentaires"

**Besoin prioritaire** :
> "Remontée des BL digitalisée : Solution idéale : Douchette/scan mobile"

#### Responsable Activité
**Pain Point Critique #1 : Sage**
> "Perte de temps lors transition/utilisation du logiciel"
> "Impossible d'ouvrir 2 fichiers simultanément"
> "Recherche de références compliquée → améliorer la fonction recherche"

**Pain Point Critique #2 : Gestion Commandes**
> "Gestion des commandes : Actuellement fichier Excel"
> "Visualiser les prix AVANT validation (actuellement validation sans voir les prix)"

#### Logiciels Utilisés Albertville
- Excel (très utilisé pour suivis)
- Sage (chiffrage, devis)
- MDE
- Lireco (gestion stock)
- Hilti (géré)
- **Fieldwire** (suivi chantier) :
  - 3 responsables affaire
  - 1 chef projet
  - 1 directeur
  - 1 conducteur
  - Charles R2A

**À évaluer** :
> "Optima (Sidev) → À voir/tester"

---

## 🎯 SYNTHÈSE DES PROBLÈMES TRANSVERSES

### Problèmes Récurrents TOUS Services

#### 1. Outils Éparpillés
- Excel omniprésent ("tout Excel, tout perso")
- Papier (post-it, CERFA, contrats)
- Téléphone personnel (WhatsApp, stockage local)
- **Conséquence** : Aucune centralisation, ressaisies multiples, zéro traçabilité

#### 2. Zéro Automatisation
- Relances manuelles
- Alertes inexistantes
- Calculs manuels
- Workflows papier

#### 3. Remontée Info Défaillante
> "Mauvaise remontée information: trop longue, trop tard, mauvaise interprétation"
- Oral/WhatsApp
- Pas de traçabilité
- Délais importants

#### 4. ERP Obsolète
> "Vieux, obsolète, ralentissement, pas mal plantage"
> "Connexion distance - problème majeur accès distance, très lent, problématique"
- Lent (surtout à distance)
- Plantages fréquents
- UI/UX datée

#### 5. Pas de Digitalisation
- CERFA papier ("tous remplis à la main")
- Contrats Word
- Signatures papier
- Certificats scannés
- Photos téléphones
- Pas d'app mobile terrain

#### 6. Stocks Chaotiques
- Réception manuelle ("beaucoup temps perdu en comptage")
- Valorisation incohérente ("même produit à 2 prix différents")
- Pas de visibilité temps réel

#### 7. Gestion Client Fragmentée
- Pas de CRM
- Post-it pour suivi
- Double base clients (ERP + SAGE)
- Pas de portail client
- Satisfaction non systématisée

#### 8. Transparence Insuffisante
> "Le chef chantier doit y avoir accès, augmenter la transparence de certain niveau information"
- KPI Excel manuels
- Pas de temps réel
- Accès données limité par rôle

---

## ✅ BESOINS EXPRIMÉS PAR LES UTILISATEURS

### Service Client
1. **CRM avec traçabilité** : Suivi appels, tickets, centralisation
2. **Relances automatiques** : "Pop-up, pas besoin résumé mail journalier"
3. **Planning partagé** : Consultation disponibilités temps réel
4. **Bon intervention mobile**
5. **Suivi demandes techniciens** : Workflow traçable
6. **Automatisation planning** : "Automatisé tel > planning Gaëtan"
7. **Centralisation** : "Gagner du temps"
8. **Unification base clients** : Une seule source vs 2 bases

### Chefs Chantier
1. **App mobile** : Photos auto-upload, plans, messagerie
2. **Génération rapports** : Templates, PDF automatique
3. **Workflow remontée info** : Vs WhatsApp/oral
4. **Accès info chantier** : Mode hors ligne

### Techniciens Maintenance
1. **CERFA digitalisé** : "Interventions digitalisées, signature workflow"
2. **Génération devis live** : "Possibilité générer les devis en live"
3. **Pointage intelligent** : Géolocalisé, alertes dépassement
4. **Photos avant/après** : "App, avant après, suivi historique, date/endroit"
5. **Certificats digitaux** : Génération auto, signature électronique
6. **Alertes** : Contrats, maintenances
7. **Portail client** : "Code accès, plateforme sur le site centralisé"
8. **Zoning** : "Zoning intéressant pour l'entretien/maintenance"
9. **Satisfaction** : "Systématisation"

### Responsables Affaires
1. **Accès distance performant** : Cloud ou VPN
2. **MAJ auto prix fournisseurs** : "Demande MAJ auto prix fournisseur"
3. **Copie devis** : "Copier un ancien devis pour repartir de lui"
4. **Documents sécurité** : PPSPS, fiche accueil automatisés
5. **Workflow affaire complet**

### Responsable Activité
1. **Liaison devis-commandes** : "Est ce que pour ce devis là la commande est bien passé"
2. **Historique chantier** : "Volonté consultation historique du chantier"
3. **Workflow lancement travaux** : Automatisation page A4
4. **Listes réserves digitales** : App mobile, photos
5. **Capitalisation REX** : "Retour expérience : responsable affaire, fait petit réunion de fin d'affaire mettant point sur le bon et mauvais"
6. **Gestion fonctions transversales** : "Concaténer demandes : vrai sujet de progression"
7. **Interface unifiée** : "Ouvrir logiciel devis + ouverture Rexel"

### Gestion Opérationnelle
1. **Transparence** : "Le chef chantier doit y avoir accès"
2. **KPI temps réel** : Vs Excel manuel
3. **Intégration ERP** : "Actuellement rien du tout"
4. **Outils intuitifs** : "Pas 4j de formations"
5. **Remontée info rapide** : Vs "trop longue, trop tard"
6. **Alertes automatisées**
7. **ERP centralisé** : Vs "Excel, tout perso"
8. **Réception automatisée** : "Ne plus réceptionner manuellement"
9. **RFID** : "Puce RFID cf Decathlon"
10. **Valorisation stock** : "Réutilisation du stock : important"

### Albertville
1. **Remontée BL digitalisée** : "Douchette/scan mobile"
2. **Rappels automatiques** devis
3. **Gestion commandes** : "Visualiser les prix AVANT validation"
4. **Recherche références** : "Améliorer la fonction recherche"
5. **Ouverture multi-fichiers** : "Impossible d'ouvrir 2 fichiers simultanément"
6. **Situations mensuelles** : "Traitement mensuel très très long"
7. **Budget complémentaire** : "Impossible de savoir à quoi correspond le débours"

---

## 🚨 ENJEUX CRITIQUES IDENTIFIÉS

### 1. Non-Conformité Réglementaire
> "Document pas fait à faire: PPSPS plan prévention, fiche accueil salarié (important)"

**Risques** :
- Sanctions inspection du travail
- Responsabilité civile et pénale
- Sécurité chantier compromise

### 2. Perte d'Opportunités Commerciales
> "Gaëtan: quand il va en clientèle, souvent demande de devis, aujourd'hui on sait pas le documenter"

**Impact** :
- Devis non générés sur place
- Délais rallongés
- Taux transformation diminué

### 3. Refacturation Impossible
> "Voir dépassement heure, refacturation difficile"

**Impact** :
- Perte de marge
- Heures non facturées

### 4. Turnover et Recrutement
> "Turnover par vagues, 2025"
> "Recrutement : difficile"

**Risques** :
- Perte de compétences
- Surcharge équipes restantes
- Difficulté à attirer nouveaux talents

### 5. Télétravail Impossible
> "Problème majeur accès à distance, très lent, problématique"

**Impact** :
- Flexibilité limitée
- Attractivité RH réduite
- Déplacements obligatoires

---

## 🎓 PRINCIPE DIRECTEUR IDENTIFIÉ

> **"Priorité entreprise : Logiciel aide et ne dirige pas"**

**Signification** :
- L'outil doit **servir** l'entreprise, pas la contraindre
- Flexibilité et adaptation nécessaires
- Pas de sur-processification

---

## 🔍 POINTS À CLARIFIER

### Contradictions Identifiées

**ERP** :
- ✅ "Vieux, obsolète, ralentissement, pas mal plantage"
- ✅ "Logiciel actuel pas mal surtout UI UX, rapidité"
- **Hypothèse** : Plusieurs logiciels ou perceptions différentes

**Compta Analytique** :
- ✅ "Actuellement rien du tout"
- ✅ "Situation travaux depuis logiciel"
- **À clarifier** : Quelle partie analytique manquante ?

---

## 📌 LIMITES DE CETTE SYNTHÈSE

### Données Présentes dans les Comptes Rendus
✅ Problèmes concrets et factuels
✅ Besoins utilisateurs exprimés
✅ Volumétries opérationnelles
✅ Effectifs et organisation
✅ Outils utilisés

### Données ABSENTES des Comptes Rendus Originaux
❌ Chiffrage financier précis (pertes en €, gains attendus)
❌ ROI calculé
❌ Temps perdus en heures précises
❌ Pourcentages d'amélioration chiffrés
❌ Business case complet

**Note** : Ces données chiffrées sont probablement dans les synthèses élaborées ultérieurement (SYNTHESE_GLOBALE_AUDIT.md, EXECUTIVE_SUMMARY_5MIN.md, etc.) mais ne sont PAS dans les notes terrain originales analysées ici.

---

## ✅ CONCLUSION

### Forces de l'Audit
✅ **Couverture exhaustive** : 8 services audités
✅ **Problèmes concrets** : Basés sur terrain
✅ **Besoins clairs** : Exprimés par utilisateurs
✅ **Cohérence** : Problématiques transverses confirmées

### Constats Majeurs
🔴 **Système "post-it"** : Zéro traçabilité service client
🔴 **CERFA papier** : Tous remplis à la main
🔴 **ERP obsolète** : Accès distance catastrophique
🔴 **Excel partout** : "Tout Excel, tout perso"
🔴 **Double base clients** : ERP + SAGE
🔴 **Documents sécurité** : PPSPS et fiches accueil non faits
🔴 **Turnover 2025** : Risque perte compétences
🔴 **Recrutement difficile** : Attractivité limitée

### Prochaines Étapes Recommandées
1. **Chiffrage financier** : Quantifier pertes et gains
2. **Priorisation** : Matrice effort/impact
3. **Business case** : ROI par projet
4. **Roadmap** : Plan transformation 18-24 mois
5. **POCs** : Tests solutions (CRM, ERP, RFID)

---

**Document créé le** : 2025-01-18
**Méthodologie** : Analyse exhaustive notes terrain + comptes rendus
**Garantie** : Aucune donnée inventée - Uniquement faits constatés
**Statut** : ✅ Synthèse factuelle complète
