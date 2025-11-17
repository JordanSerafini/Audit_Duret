# 👥 PERSONAS & PAIN POINTS - Gestion Opérationnelle

**Service** : Gestion Opérationnelle (Contrôle de gestion, KPI, ERP, Stocks, Transparence)
**Date audit** : Novembre 2025
**Source** : NOTES_AUDIT_DURET_SERVICES.md + NOTES_AUDIT_ENJEUX_TRANSVERSES.md

---

## 📊 VUE D'ENSEMBLE

Le service **Gestion Opérationnelle** est un service **transverse** qui touche toute l'entreprise. Il regroupe :
- **Contrôle de gestion** : KPI, marges, budgets, trésorerie
- **Gestion ERP** : Approvisionnement, affaires, devis, fournisseurs
- **Gestion des stocks** : Valorisation, réception, réutilisation, RFID
- **Transparence des données** : Dashboards, partage info, RBAC
- **Gouvernance** : Qualité données, onboarding, remontée info

### Personas Identifiés

1. **Sylvie** - Contrôleuse de Gestion (52 ans)
2. **Thomas** - Responsable Bureau d'Études Transverse (38 ans)
3. **Isabelle** - Responsable Stocks & Approvisionnements (45 ans)

---

## 👤 PERSONA 1 : Sylvie - Contrôleuse de Gestion

### Profil

- **Âge** : 52 ans
- **Expérience** : 18 ans dans le groupe, 8 ans contrôle de gestion BTP
- **Formation** : Master Contrôle de Gestion, expertise comptabilité analytique
- **Localisation** : Annecy (siège), télétravail 2j/semaine
- **Équipe** : Travaille seule, reporte à Direction Générale
- **Outils** : Excel (expert), SAGE, MDE, Power Query

### Contexte Quotidien

**Missions** :
- Tableau de bord KPI par exercice (mensuel, trimestriel, annuel)
- Intégration globale : au-delà production (marge, trésorerie, rentabilité)
- Analyse coûts par chantier, activité, responsable
- Prévisions budgétaires et reporting direction
- Consolidation données multi-sources (SAGE, MDE, Excel multiples)

**Journée type** :
- **8h-10h** : Extraction données SAGE + MDE → Excel
- **10h-12h** : Nettoyage données, rapprochements, calculs marges
- **14h-16h** : Mise à jour tableaux de bord KPI
- **16h-17h** : Analyse écarts budget vs réalisé
- **17h-18h** : Préparation reporting mensuel direction

**Charge de travail** :
- Fin de mois : 60-70h/semaine (fermeture comptable + KPI)
- Reste du mois : 45-50h/semaine
- Réunions : Comité direction mensuel, comités chantiers hebdo

### 🔴 Pain Points Critiques

#### 1. Tableau de Bord Excel Manuel - Non Fiable

**Problème** :
- Tableau de bord KPI sur Excel, **entièrement manuel**
- Saisies multiples, sources dispersées (SAGE, MDE, Excel RH, Excel affaires)
- **Fiabilité données problématique** : erreurs saisie, doublons, incohérences
- Pas de temps réel : données J-15 minimum (attente clôture mensuelle)

**Impact** :
- **Temps perdu** : 3-4 jours/mois rien que pour consolidation données
- **Décisions retardées** : direction attend J+15 pour avoir KPI
- **Erreurs** : 15-20% des chiffres nécessitent corrections après revue
- **Stress** : Pression énorme fin de mois
- **Pas de prédictif** : Seulement historique, aucune projection

**Temps perdu annuel** : 40 jours × 600€/jour = **24 000€**
**Erreurs décisions** (estimé) : **50 000€/an**
**Total impact** : **74 000€/an**

#### 2. Mauvaise Remontée Information - Trop Longue, Trop Tard

**Problème** :
- Remontée info terrain → siège : **trop longue** (plusieurs jours à semaines)
- **Trop tard** : Anomalies détectées après coup (budget dépassé, retard chantier)
- **Mauvaise interprétation** : Info orale/WhatsApp/Excel non structurée

**Exemple concret** :
- Dépassement budget chantier détecté J+30 : 20K€ déjà perdus
- Retard planning non remonté : pénalités client 15K€
- Stock rupture non signalé : arrêt chantier 2 jours = 8K€

**Impact** :
- **Décisions correctives tardives** : Réaction vs anticipation
- **Opportunités manquées** : Pas de réajustement temps réel
- **Tensions internes** : Reproches direction ↔ terrain

**Impact financier estimé** : **120 000€/an**
(dépassements budgets non anticipés, pénalités, arrêts chantiers)

#### 3. Tout Excel, Tout Personnalisé - Silos de Données

**Problème** :
- **ERP et outils associés** : Approvisionnement, gestion affaire, devis, suivi client, fournisseurs
- **Tout sur Excel, tout personnalisé** : 30+ fichiers Excel différents
- **Pas d'intégration** : Ressaisies manuelles entre fichiers
- **Dépendance personne** : Si Sylvie absente, personne ne sait faire

**Exemples** :
- Fichier KPI principal : 15 onglets, 200 formules complexes
- Fichier marges chantiers : 1 fichier par responsable (4 fichiers)
- Fichier trésorerie : Lié à fichier compta qui lui-même importe SAGE

**Impact** :
- **Fragilité** : 1 formule cassée = tout faux
- **Temps perdu** : 6h/semaine recherche info entre fichiers
- **Aucune scalabilité** : Croissance entreprise = explosion complexité
- **Succession impossible** : Personne ne comprend système complet

**Temps perdu annuel** : 300h × 75€/h = **22 500€**
**Risque succession** (estimé) : **100 000€** (recrutement + formation + pertes temporaires)

#### 4. Manque Transparence Données - Chef Chantier Pas Accès Analyse

**Problème** :
- **Principe** : Chef chantier doit avoir accès analyse + gestion son chantier
- **Actuellement** : Données centralisées chez Sylvie uniquement
- **Pas de partage** : Chefs ne voient pas budgets consommés, reste à faire, marges

**Impact** :
- **Démotivation équipes** : "On ne nous dit rien"
- **Décisions sans contexte** : Chef chantier commande sans savoir s'il est dans budget
- **Silos d'information** : Direction vs Terrain, culture du secret
- **Responsabilisation impossible** : Comment piloter si pas de visibilité ?

**Impact RH estimé** : Turnover +10% = **60 000€/an**
**Impact opérationnel** : Décisions sous-optimales = **40 000€/an**
**Total** : **100 000€/an**

### Pain Points Importants

#### 5. Fiches Produits Validation Manuelle - Ralentissement Devis

**Problème** :
- **Beaucoup de fiches produits à faire valider** dans phase devis
- Propositions client : fiches techniques manuelles (Word/PDF)
- Aller-retours multiples : RA → Sylvie → Fournisseur → Client
- Pas de bibliothèque produits pré-validée

**Impact** :
- Ralentissement cycle devis : +3-5 jours
- Risque erreurs spécifications
- Expérience client dégradée

**Impact estimé** : **25 000€/an** (opportunités perdues, retards)

#### 6. Gestion Litiges Non Priorisée - Risque Escalade

**Problème** :
- **Gestion litiges et recommandés** : Remontée info pas priorisée
- Pas de processus formel
- Traitement ad-hoc selon disponibilité

**Impact** :
- Risque escalade litiges : petits litiges → gros litiges
- Délais réponse trop longs (recommandés : délais réglementaires)
- Insatisfaction client

**Impact estimé** : **30 000€/an** (litiges mal gérés, pénalités)

#### 7. Nouvel Arrivant : 4 Jours Formation Nécessaire

**Problème** :
- **Onboarding** : Nouvel arrivant nécessite **4 jours de formation**
- Outils complexes, pas intuitifs
- Dépendance formateur (Sylvie, autres)

**Impact** :
- Coût formation : 4j × 600€ = 2 400€/personne
- Turnover prévu 2025 : 15-20 départs → 15-20 embauches
- Total formation : 40 000€/an
- Productivité réduite 1er mois : -50%

**Impact estimé** : **60 000€/an**

### Pain Points Structurants

#### 8. Pas d'Alertes Automatiques - Détection Tardive Anomalies

**Problème** :
- **Alertes - anomalies** : Manquantes
- Détection anomalies : manuelle, mensuelle
- Pas de seuils configurables

**Types anomalies non détectées** :
- Dépassements budgets
- Retards planning
- Marges négatives
- Stock ruptures
- Documents manquants (PPSPS, assurances, etc.)

**Impact** : **45 000€/an**

#### 9. Signature Documents Manuelle - Processus Lourds

**Problème** :
- **Signature documents** : Comme les plans, pas digitalisée
- Processus papier : impression → signature → scan → archivage
- Pas d'agrégation documents complémentaires dans export

**Impact** : **15 000€/an** (temps perdu + papier + archivage)

#### 10. Problèmes Visio + Accès Fichiers - Collaboration Limitée

**Problème** :
- **Problème visio** : À régler (problème technique)
- **App importante : accès fichiers** : Gestion mode projet
- Data alimenté et stocké dans dossier, pas centralisé

**Impact** : **20 000€/an** (productivité collaboration)

### 💰 Impact Financier Total Sylvie

| Pain Point | Impact €/an |
|------------|-------------|
| 1. Tableau Excel manuel non fiable | 74 000€ |
| 2. Mauvaise remontée info (trop longue/tard) | 120 000€ |
| 3. Tout Excel, silos données | 122 500€ |
| 4. Manque transparence données | 100 000€ |
| 5. Fiches produits validation manuelle | 25 000€ |
| 6. Gestion litiges non priorisée | 30 000€ |
| 7. Onboarding 4j formation | 60 000€ |
| 8. Pas alertes automatiques | 45 000€ |
| 9. Signature manuelle | 15 000€ |
| 10. Visio + accès fichiers | 20 000€ |
| **TOTAL SYLVIE** | **611 500€/an** |

---

## 👤 PERSONA 2 : Thomas - Responsable Bureau d'Études Transverse

### Profil

- **Âge** : 38 ans
- **Expérience** : 12 ans BTP dont 5 ans Duret, 3 ans responsable BE
- **Formation** : Ingénieur Électrotechnique
- **Localisation** : Annecy (bureau + chantiers)
- **Équipe** : 4 personnes BE (3 dessinateurs projeteurs, 1 technicien études)
- **Outils** : AutoCAD, Caneco, Excel planning

### Contexte Quotidien

**Missions** :
- **Bureau d'études doit travailler pour toute l'entreprise** (fonction transverse)
- Études électriques : schémas, plans, notes de calcul
- Support technique tous chantiers (petits travaux, gros chantiers, maintenance)
- **Demandes viennent de X personnes** (20+ demandeurs) :
  - 4 Responsables Affaires
  - 1 Responsable Activité
  - 10-15 Chefs de chantier
  - 3 Commerciaux
  - Direction

**Journée type** :
- **8h-9h** : 10-15 mails/appels avec demandes urgentes (toutes prioritaires)
- **9h-12h** : Travail études (interrompu 5-10× par demandes)
- **14h-15h** : Réunions chantiers (3-4/semaine)
- **15h-18h** : Études + réponses demandes
- **18h-19h** : Mise à jour planning équipe BE (Excel)

**Charge de travail** :
- 50-60h/semaine en période normale
- 70h/semaine en périodes chargées (avril-juin, sept-nov)
- Réunions : 10-15h/semaine

### 🔴 Pain Points Critiques

#### 1. Surcharge Fonction Transversale - Goulot d'Étranglement

**Problème** :
- **Irritant** : De plus en plus dans l'entreprise de fonctions transversales
- **BE doit travailler pour toute l'entreprise**
- **Demandes viennent de X personnes** (20+)
- **Doivent implémenter planning équipes** manuellement
- **Concaténer demandes** : Vrai sujet de progression

**Impact concret** :
- Saturation BE : Capacité 160h/semaine (4 personnes × 40h), demandes 220h/semaine
- **Surcharge 60h/semaine non traitées** → retards, insatisfaction
- Pas de priorisation objective : "Tout est urgent"
- Conflits interpersonnels : Demandeurs mécontents délais

**Exemple concret** :
- Lundi 8h : 5 demandes "urgentes" reçues weekend
- Impossible de toutes traiter : lesquelles prioriser ?
- Décision subjective (copain, celui qui crie plus fort, etc.)
- Autres demandeurs frustrés : "Pourquoi lui avant moi ?"

**Impact financier** :
- **Surcharge équipe** : Risque burn-out, turnover
- **Retards études** : Impact planning chantiers = 80K€/an
- **Insatisfaction interne** : Tensions, silos = 40K€/an
- **Total** : **120 000€/an**

#### 2. Multi-Casquettes Mal Géré - Iniquité Traitement

**Problème** :
- **Simplifier l'usage multi-casquettes**
- **Besoins à qualifier** → Transcrit en données → **Données traitées de manière équitable**
- Actuellement : Aucun système de qualification, aucune équité
- Demandes orales/mails/WhatsApp, format libre

**Impact** :
- Incompréhension demandes : 30% nécessitent clarifications
- Temps perdu aller-retours : 5-10h/semaine
- Traitement inéquitable : Frustration

**Impact estimé** : **35 000€/an**

### Pain Points Importants

#### 3. Planning BE Manuel Excel - Gestion Chaotique

**Problème** :
- **Doivent implémenter planning équipes** manuellement
- Excel avec 20+ demandes, pas de vision charge/capacité
- Mise à jour quotidienne fastidieuse

**Impact** : **20 000€/an** (temps planning + erreurs allocation)

### 💰 Impact Financier Total Thomas

| Pain Point | Impact €/an |
|------------|-------------|
| 1. Surcharge fonction transversale | 120 000€ |
| 2. Multi-casquettes mal géré | 35 000€ |
| 3. Planning BE manuel Excel | 20 000€ |
| **TOTAL THOMAS** | **175 000€/an** |

---

## 👤 PERSONA 3 : Isabelle - Responsable Stocks & Approvisionnements

### Profil

- **Âge** : 45 ans
- **Expérience** : 20 ans logistique BTP dont 10 ans Duret
- **Formation** : BTS Gestion Logistique
- **Localisation** : Dépôt Annecy + site Albertville
- **Équipe** : 3 magasiniers + 1 apprenti
- **Outils** : Lireco (stock), Excel, SAGE

### Contexte Quotidien

**Missions** :
- **Gestion stocks** : Réception, stockage, sorties, inventaires
- **Réutilisation du stock** : IMPORTANT
- Approvisionnements : Commandes fournisseurs
- Inventaires mensuels
- Optimisation : Valorisation, anti-obsolescence

**Journée type** :
- **7h-9h** : Réceptions fournisseurs (comptage manuel, saisie Lireco)
- **9h-12h** : Préparations sorties chantiers
- **14h-16h** : Gestion commandes + relances fournisseurs
- **16h-17h30** : Inventaires partiels + régularisations
- **17h30-18h** : Clôture journée, mise à jour Excel valorisation

**Charge de travail** :
- 45-50h/semaine normale
- 60h/semaine inventaires mensuels
- Réceptions : 15-25 BL/jour

### 🔴 Pain Points Critiques

#### 1. Valorisation Stock Incohérente - Même Produit 2 Prix Différents

**Problème** :
- **Gestion stocks, réutilisation stock : IMPORTANT**
- **Valorisation d'un même produit à 2 prix différents**
- Causes :
  - Même référence achetée à prix variables (dates, fournisseurs, négociations)
  - Pas de politique valorisation claire (FIFO ? LIFO ? CUMP ?)
  - Excel valorisation : formules complexes, erreurs

**Exemple concret** :
- Disjoncteur ref ABC123 :
  - Lot 1 (janv 2024) : 50 unités @ 25€ = 1 250€
  - Lot 2 (mars 2024) : 50 unités @ 22€ (promo) = 1 100€
  - Sortie chantier : 30 unités → valorisées à quel prix ?
  - Actuellement : Incohérent selon qui saisit

**Impact** :
- **Incohérences comptables** : Stocks bilans faux ±15%
- **Difficultés calcul marges** : Marge chantier fausse si prix stock faux
- **Stock sous-utilisé** : Pas de visibilité stock existant réutilisable
- **Gaspillage** : Produits anciens non écoulés → obsolescence

**Impact financier** :
- Incohérences compta : **40K€/an** (corrections, audits)
- Marges fausses : **60K€/an** (décisions basées mauvaises données)
- Stock sous-utilisé : **80K€/an** (achat neuf vs réutilisation existant)
- Obsolescence : **30K€/an** (pertes produits périmés)
- **Total** : **210 000€/an**

#### 2. Réception Manuelle Chronophage - Temps Perdu Comptage

**Problème** :
- **Ne plus réceptionner manuellement** : Volonté forte
- **Beaucoup de temps perdu en comptage**
- Processus actuel :
  1. BL papier fournisseur
  2. Comptage manuel colis/palettes (15-30 min/réception selon volume)
  3. Saisie manuelle Lireco (5-10 min)
  4. Classement BL papier
  5. Rapprochement commande ↔ réception (si temps)

**Temps perdu** :
- 20 BL/jour × 25 min = 500 min = **8h20/jour** (équipe 4 personnes)
- Dont : 6h comptage, 2h20 saisie
- **Capacité équipe gaspillée** : 50% temps = réception vs 50% = vraie logistique

**Erreurs** :
- 10-15% erreurs comptage (fatigue, illisibilité, interruptions)
- 5% erreurs saisie (typos, références)

**Impact financier** :
- Temps perdu : 2 000h/an × 35€/h = **70 000€**
- Erreurs : Ecarts inventaires, litiges fournisseurs = **25 000€/an**
- **Total** : **95 000€/an**

**Solution exprimée** :
- **Puce RFID** : Cf. Decathlon (scan automatique colis)
- Douchette/QR Code : Scan BL → auto-remplissage Lireco

### Pain Points Importants

#### 3. Stock Sous-Utilisé - Pas de Visibilité Réutilisation

**Problème** :
- **Réutilisation du stock : IMPORTANT**
- Chefs chantier/RA commandent neuf sans consulter stock existant
- Pas de recherche facile "Ai-je ce produit en stock ?"
- Lireco utilisé mais : Recherche compliquée, pas de suggestions

**Impact** :
- Achats inutiles : 15-20% produits achetés alors qu'existant en stock
- Immobilisation trésorerie

**Impact estimé** : **60 000€/an**

#### 4. Inventaires Mensuels Pénibles - 2-3 Jours Perdus

**Problème** :
- Inventaires mensuels : 2-3 jours entiers
- Comptage manuel fastidieux
- Écarts importants (10-15%) nécessitant régularisations

**Impact** : **30 000€/an** (temps inventaires + écarts)

### 💰 Impact Financier Total Isabelle

| Pain Point | Impact €/an |
|------------|-------------|
| 1. Valorisation incohérente (2 prix même produit) | 210 000€ |
| 2. Réception manuelle chronophage | 95 000€ |
| 3. Stock sous-utilisé | 60 000€ |
| 4. Inventaires mensuels pénibles | 30 000€ |
| **TOTAL ISABELLE** | **395 000€/an** |

---

## 📊 SYNTHÈSE TRANSVERSALE GESTION OPÉRATIONNELLE

### Impact Financier Global

| Persona | Impact Total/an |
|---------|-----------------|
| **Sylvie** (Contrôle Gestion) | 611 500€ |
| **Thomas** (BE Transverse) | 175 000€ |
| **Isabelle** (Stocks) | 395 000€ |
| **TOTAL GESTION OPÉRATIONNELLE** | **1 181 500€/an** |

### Top 10 Pain Points Critiques (Priorisation)

| Rang | Pain Point | Persona | Impact €/an |
|------|-----------|---------|-------------|
| 1 | Valorisation stock incohérente (2 prix) | Isabelle | 210 000€ |
| 2 | Mauvaise remontée info (trop longue/tard) | Sylvie | 120 000€ |
| 3 | Surcharge fonction transversale (BE) | Thomas | 120 000€ |
| 4 | Tout Excel, silos données | Sylvie | 122 500€ |
| 5 | Manque transparence données | Sylvie | 100 000€ |
| 6 | Réception manuelle chronophage | Isabelle | 95 000€ |
| 7 | Tableau Excel manuel non fiable | Sylvie | 74 000€ |
| 8 | Stock sous-utilisé | Isabelle | 60 000€ |
| 9 | Onboarding 4j formation | Sylvie | 60 000€ |
| 10 | Pas alertes automatiques | Sylvie | 45 000€ |

### Thèmes Récurrents

1. **Excel omniprésent** (Sylvie, Thomas, Isabelle) → **Besoin ERP centralisé**
2. **Processus manuels chronophages** (Réception stocks, KPI, planning) → **Automation**
3. **Manque transparence/partage données** (Sylvie, tous) → **Dashboards RBAC**
4. **Surcharge fonctions transversales** (Thomas) → **Système tickets + priorisation**
5. **Qualité données problématique** (Sylvie, Isabelle) → **Gouvernance données**

### Enjeux Stratégiques

1. **Gouvernance données** : Qualité, cohérence, propriété
2. **Efficacité opérationnelle** : Automatisation vs manuel (80% processus manuels)
3. **Transparence** : Partage info vs silos (culture à changer)
4. **Collaboration** : Transverse vs silos fonctionnels
5. **Agilité** : Temps réel vs mensuel (décisions J+15 → J+0)

---

## 🎯 OPPORTUNITÉS IDENTIFIÉES

### Quick Wins (0-3 mois)

1. **RFID/QR Code réception stocks** : -95K€/an (Isabelle pain point #2)
2. **Dashboards temps réel** : -74K€/an (Sylvie pain point #1)
3. **Système tickets BE** : -120K€/an (Thomas pain point #1)
4. **Politique valorisation stock** : -210K€/an (Isabelle pain point #1)

**Total Quick Wins** : **499K€/an** pour investissement ~150-200K€ → **Payback 4-5 mois**

### Projets Structurants (3-6 mois)

1. **ERP centralisé** : Remplacement Excel multiples
2. **RBAC + transparence** : Accès données par rôle
3. **Gestion litiges formalisée** : Priorisation, SLA
4. **Workflow validation produits** : Automatisation fiches produits

### Projets Transformants (6-12 mois)

1. **Data Lake** : Centralisation toutes données
2. **IA prédictive** : Anomalies, tendances, risques
3. **Plateforme collaborative** : Mode projet intégré
4. **Culture data-driven** : Formation, accompagnement changement

---

**Date création** : 2025-11-17
**Version** : v1.0
**Prochaine étape** : Architecture Actuelle (Chaos) + Journey Maps
