# 📋 PLAN D'ACTION - Site Albertville (Chantiers Moyens & Gros)
**Entreprise** : Duret Electricité - Albertville
**Date audit** : Octobre 2025
**Périmètre** : Chantiers moyens et gros uniquement
**Auditeur** : Consultant IT & Data BI/ML

---

## 🔍 RÉSUMÉ DE L'AUDIT

### Profils Métiers Audités

**1. Assistante Relation Client / Accueil Administratif**
- Accueil téléphonique, gestion mails
- Gestion administrative : contrats, courriers, comptes rendus
- Gestion Excel : véhicules, CONSUEL, salles réunion, logements, événements, planning hebdo

**2. Responsable Affaire / Création & Suivi Chantier**
- Gestion devis (délais longs)
- Gestion commandes (besoin logiciel achat évolué)
- Situations & facturation (traitement mensuel très long)
- Suivi budgétaire (budgets complémentaires non suivis)

**3. Chef de Chantier**
- Suivi commandes (reçoit mail mais pas d'info sur réception)
- Besoin prioritaire : remontée BL digitalisée (QR Code mobile)

**4. Responsable Activité / Pilotage**
- Gestion affaire & chantier pour facturation
- Chiffrage (recherche références compliquée, méthodologie à standardiser)
- Gestion commandes (Excel, besoin alertes + visualisation prix)
- Contrats sous-traitance (Excel, besoin système de gestion)

### Outils Actuels

**Logiciels**
- **Sage** : chiffrage, devis (limitations : pas 2 fichiers simultanés, recherche références compliquée)
- **MDE** : (non détaillé dans audit)
- **Lireco** : gestion stock temps réel, alertes, commandes codes-barres
- **Fieldwire** : suivi chantier (7 utilisateurs : 3 RA, 1 chef projet, 1 directeur, 1 conducteur, Charles R2A)
- **Hilti** : (géré, non détaillé)

**Excel omniprésent**
- Suivi véhicules (entrées/sorties, pollution, pneus, réservations)
- Suivi CONSUEL
- Gestion salles réunion
- Demandes logement (grands déplacements)
- Organisation événements (journées collabs, planning individuel, repas)
- Planning hebdomadaire (envoi vendredis)
- Gestion commandes
- Contrats sous-traitance

**À évaluer** : Optima (Sidev)

### Pain Points Critiques (⚠️ Priorité 1)

#### 1. Situations & Facturation - Traitement Mensuel Extrêmement Long

**Problème**
- Traitement mensuel très très long sur logiciel actuel
- Processus lourd et chronophage

**Causes**
- Extraction devis vers suivi compliquée
- Mauvaise organisation par famille (notamment main d'œuvre)
- Pas de fichier suivi détaillé par tâche

**Conséquences**
- Équipes RH/Compta bloquées plusieurs jours/mois
- Retard facturation → impact trésorerie
- Frustration utilisateurs

**Besoin exprimé**
- Extraction simplifiée devis → logiciel suivi
- Meilleure organisation par famille (main d'œuvre++)
- Fichier suivi détaillé par tâche permettant :
  - Prédiction dépenses à venir
  - Réajustement planning selon reste à faire
  - Maintien justesse du suivi

#### 2. Suivi Budgétaire - Budgets Complémentaires Invisibles

**Problème**
- Quand validation CA complémentaire, impossible de savoir à quoi correspond le débours
- Pas de vision budgets complémentaires vs budget initial

**Causes**
- Pas de rapprochement automatique avec devis RA
- Budgets complémentaires non affichés à côté du budget initial

**Conséquences**
- Risque dépassement budget non détecté
- Difficultés pilotage marge
- Litiges clients (justification compléments)

**Besoin exprimé**
- Rapprochement automatique budgets complémentaires ↔ devis RA
- Affichage budget complémentaire à côté du budget initial (vue consolidée)

#### 3. Remontée BL Chantier - Processus 100% Manuel

**Problème**
- Chef chantier reçoit mail quand commande passée
- **Aucune info sur réception ni infos complémentaires**
- Pas de traçabilité temps réel

**Causes**
- Processus papier BL
- Saisie manuelle a posteriori
- Pas d'outil mobile chantier

**Conséquences**
- Délai remontée info (plusieurs jours)
- Erreurs saisie (quantités, références)
- Impossible pilotage stock temps réel
- Facturation clients retardée

**Besoin exprimé (prioritaire)**
- **Douchette/scan mobile** sur chantier ET bureau
- Saisie instantanée via téléphone avec **QR Code**
- **Validation ligne à ligne** de ce qui est reçu par le personnel

#### 4. Recherche Références - Compliqué et Chronophage

**Problème**
- Recherche références compliquée sur Sage
- Perte de temps lors utilisation logiciel

**Causes**
- Fonction recherche peu performante
- Pas de filtres avancés
- Interface non intuitive

**Conséquences**
- Temps perdu chiffrage
- Risque erreurs (mauvaise référence)
- Frustration utilisateurs

**Besoin exprimé**
- Améliorer drastiquement fonction recherche
- Filtres par famille/sous-famille
- Recherche intelligente (mots-clés, synonymes)

#### 5. Gestion Commandes - Validation Sans Voir Prix

**Problème**
- Actuellement fichier Excel
- Validation commandes sans visualisation des prix

**Causes**
- Pas d'outil dédié
- Excel ne permet pas alertes dynamiques
- Pas de rapprochement automatique avec tarifs

**Conséquences**
- Risque dépassement budget
- Pas d'optimisation prix fournisseurs
- Erreurs commandes

**Besoin exprimé**
- Quand on tape référence → rapprochement automatique + alertes
- **Visualiser les prix AVANT validation**
- Logiciel achat avec :
  - Possibilité créer références
  - Évolution familles/sous-familles pour meilleur suivi
  - Visualisation colonnes avec alertes/notifications par famille

### Pain Points Importants (🔶 Priorité 2)

#### 6. Travail Collaboratif - Impossible Ouvrir 2 Fichiers Simultanément

**Problème**
- Sage : impossible ouvrir 2 fichiers simultanément
- Besoin de séparer fichiers si plusieurs personnes travaillent dessus

**Conséquences**
- Blocage collaborateurs (attente qu'un ferme fichier)
- Pas de travail parallèle
- Productivité réduite

**Besoin**
- Système multi-utilisateurs simultanés
- Gestion droits et permissions (RBAC)

#### 7. Création Devis - Titres/Sous-Titres Très Compliqués

**Problème**
- Actuellement très compliqué d'intégrer une ligne (titre/sous-titre)
- Références : 2 refs s'additionnent au lieu d'1 seule pour ajustement rapide

**Conséquences**
- Temps perdu structuration devis
- Devis moins lisibles
- Modifications fastidieuses

**Besoin exprimé**
- Création titres/sous-titres simplifiée
- Simplification références (1 seule pour ajustement rapide)
- Feuille de vente (existe Sage) → intégrer sur autre onglet pour accès rapide

#### 8. Suivi Excel Multiple - Dispersion de l'Information

**Problème**
- Multiples Excel non connectés :
  - Véhicules (entrées/sorties, pollution, pneus, réservations)
  - CONSUEL
  - Salles réunion
  - Logements (grands déplacements)
  - Événements (journées collabs, repas)
  - Planning hebdomadaire
  - Commandes
  - Sous-traitance

**Conséquences**
- Silos d'information
- Saisies multiples
- Risque erreurs/incohérences
- Temps perdu recherche info
- Pas de vue consolidée

**Besoin**
- Centralisation dans outils métiers dédiés
- Intégration entre outils
- Suppression Excel silos

#### 9. Délais Traitement Devis - Trop Longs

**Problème**
- Délais de traitement devis longs
- Manque de rappels automatiques

**Conséquences**
- Perte opportunités commerciales
- Clients relancent
- Image entreprise dégradée

**Besoin**
- Système rappels automatiques sur devis
- Workflow validation
- SLA définis (ex: réponse <48h)

### Pain Points Structurants (🔷 Priorité 3)

#### 10. Méthodologie Chiffrage - Manque Standardisation

**Problème**
- Pas de méthodologie chiffrage standardisée
- Besoin de regroupement par diviseur
- Prix au m² non standardisé (ex: ruban à mètre toujours même prix)

**Conséquences**
- Chiffrages hétérogènes selon chiffreur
- Difficultés comparaison/benchmark
- Risque sous-estimation ou sur-estimation

**Besoin exprimé (⚠️ IMPORTANT)**
- **Regroupement par diviseur**
- **Prix au m² standardisé** (bibliothèque prix)
- Méthodologie documentée et formalisée

#### 11. Gestion Familles/Sous-Familles - Pas de Vision Consolidée

**Problème**
- Familles/sous-familles actuelles insuffisantes
- Pas de vision consolidée par famille
- Besoin alertes/notifications par famille

**Conséquences**
- Difficultés analyse coûts par poste
- Impossible reporting par famille
- Pilotage approximatif

**Besoin**
- Évolution familles/sous-familles
- Cas spécifique : famille études → besoin sous-familles avec suivi plans en interne
- Visualisation colonnes avec alertes par famille
- Éviter incohérences entre sous-traitance et main d'œuvre

#### 12. Mobilité Terrain - Pas de Solution Hors Ligne

**Problème**
- Pas de solution mobile terrain
- Devis/signature uniquement au bureau

**Conséquences**
- Retour bureau obligatoire pour devis
- Ralentissement cycle commercial
- Expérience client dégradée

**Besoin exprimé (demande future)**
- Faire devis avec articles simples
- **Mode hors ligne** avec signature client sur place
- Catalogue avec images
- Synchronisation différée

#### 13. RBAC - Gestion Droits et Permissions à Structurer

**Problème**
- Besoin crucial gestion droits et permissions
- Accès extérieurs à sécuriser
- Besoin accès bureau même hors réseau

**Conséquences**
- Risques sécurité
- Pas de traçabilité actions
- Difficultés accès distant

**Besoin**
- Système RBAC (Role-Based Access Control)
- Accès distant sécurisé (VPN ou cloud)
- Audit trail

### Points de Vigilance Spécifiques

**Lors validation heures**
- Visualiser éléments variables (km perso/entreprise, logistique)
- Cohérence avec process paie (cf. audit RH)

**Gestion personnel**
- Feuille informatique : staff permanent
- **Papier : intérimaires** (cf. audit RH - besoin intégration)

**Enquête RGPD**
- À réaliser (mentionné dans actions)

---

## ✅ CE QUI EST FAISABLE

### Court terme (0-6 mois) - Quick Wins

#### 1. ✅ Remontée BL Mobile (QR Code/Scan)

**Solution**
- App mobile React Native iOS + Android
- Scan QR Code BL fournisseur
- Validation ligne à ligne quantités/références
- Photo BL
- Synchronisation temps réel ou offline
- Intégration MDE/Lireco

**Bénéfices**
- Traçabilité temps réel chantier ↔ bureau
- Réduction erreurs saisie (scan vs manuel)
- Gain temps 80% (quelques secondes vs plusieurs minutes)
- Facturation clients accélérée
- Pilotage stock amélioré

**Investissement** : 35-50K€ (dev app + intégrations)
**ROI** : 6-9 mois (économie temps + réduction erreurs)

#### 2. ✅ Tableau de Bord Budgets (Initial + Complémentaire)

**Solution**
- Dashboard Power BI ou Tableau
- Connexion Sage + MDE
- Vue consolidée : budget initial, complémentaires, réalisé, reste à faire
- Alertes dépassement seuils
- Rapprochement automatique budgets complémentaires ↔ devis RA

**Bénéfices**
- Vision temps réel budgets par chantier
- Détection précoce dérives
- Justification compléments facilitée
- Pilotage marge amélioré

**Investissement** : 15-25K€ (dev dashboards + connexions)
**ROI** : 8-12 mois (meilleur pilotage marge)

#### 3. ✅ Système Rappels Automatiques Devis

**Solution**
- Workflow automatisé (ex: Zapier, Make, ou dev custom)
- Règles : si devis non traité J+2 → alerte, J+5 → escalade
- Notifications email/SMS
- Dashboard suivi devis (en attente, en cours, validés, perdus)

**Bénéfices**
- Réduction délais traitement devis -50%
- Taux transformation +15-20%
- Image professionnelle renforcée

**Investissement** : 8-12K€
**ROI** : 4-6 mois (opportunités commerciales capturées)

#### 4. ✅ Amélioration Recherche Références

**Solution**
- Si Sage : module complémentaire ou développement
- Si migration : ERP moderne avec recherche intelligente native
- Filtres avancés : famille, sous-famille, fournisseur, prix, mots-clés
- Recherche floue (typos, synonymes)
- Favoris/historique

**Bénéfices**
- Temps recherche : plusieurs minutes → quelques secondes
- Réduction erreurs références
- Productivité chiffrage +20%

**Investissement** : 10-18K€ (selon option)
**ROI** : 10-14 mois

#### 5. ✅ Module Commandes avec Visualisation Prix

**Solution**
- Module achats avec :
  - Saisie références (autocomplete)
  - Visualisation prix temps réel (catalogue fournisseurs)
  - Alertes : prix anormal, budget dépassé, doublon commande
  - Validation workflow multi-niveaux
  - Historique commandes/prix

**Bénéfices**
- Visibilité prix avant validation
- Optimisation achats (comparaison fournisseurs)
- Réduction erreurs commandes
- Respect budgets

**Investissement** : 25-35K€
**ROI** : 12-18 mois (optimisation prix achats)

**ROI Quick Wins Global (6 mois)** : 93-140K€ investissement, gains 120-180K€/an → Payback 8-12 mois

### Moyen terme (6-18 mois) - Projets Structurants

#### 6. ✅ Refonte Gestion Situations Mensuelles

**Problème actuel** : Traitement mensuel extrêmement long

**Solution**
- Extraction automatisée devis → suivi
- Organisation intelligente par famille (main d'œuvre optimisée)
- Fichier suivi détaillé par tâche :
  - Prédiction dépenses à venir (ML)
  - Réajustement planning selon reste à faire
  - Indicateurs avancement temps réel
- Templates situations standardisés
- Workflow validation accéléré

**Bénéfices**
- Temps traitement situations : plusieurs jours → quelques heures
- Fiabilité facturation améliorée
- Prédictibilité trésorerie
- Satisfaction clients (factures rapides, détaillées, justifiées)

**Investissement** : 60-90K€ (dev + intégrations + formation)
**ROI** : 10-15 mois (gain temps + trésorerie optimisée)

#### 7. ✅ Standardisation Méthodologie Chiffrage

**Solution**
- **Bibliothèque prix standardisée** :
  - Prix au m² par type (ruban à mètre, câblage, etc.)
  - Regroupement par diviseur
  - Ratios main d'œuvre/fournitures par type chantier
- **Templates chiffrage** par type projet (résidentiel, tertiaire, industriel)
- **Méthodologie documentée** (guide chiffreur)
- **Formation équipes** (2 jours)
- **Contrôle qualité** : revue chiffrages, retours d'expérience

**Bénéfices**
- Homogénéité chiffrages
- Vitesse chiffrage +30%
- Précision améliorée (moins sous-estimation/sur-estimation)
- Formation nouveaux chiffreurs accélérée
- Capitalisation savoir-faire

**Investissement** : 35-50K€ (consulting + dev bibliothèque + formation)
**ROI** : 12-18 mois (gains vitesse + précision)

#### 8. ✅ Gestion Familles/Sous-Familles Avancée

**Solution**
- Refonte arborescence familles/sous-familles :
  - Famille études → sous-familles avec suivi plans interne
  - Séparation claire sous-traitance vs main d'œuvre
  - Familles cohérentes avec méthodologie chiffrage
- **Visualisation colonnes** avec alertes/notifications par famille
- **Reporting par famille** : coûts, marges, tendances
- **Analytics** : comparaison chantiers, benchmark interne

**Bénéfices**
- Vision consolidée coûts par poste
- Détection dérives par famille
- Pilotage granulaire
- Reporting clients détaillé

**Investissement** : 20-30K€
**ROI** : 15-20 mois

#### 9. ✅ Plateforme Collaborative (Remplacement Excel Multiples)

**Solution**
- Outil centralisé type :
  - **Notion, Coda, Airtable** (low-code)
  - **Développement custom** (si besoins spécifiques)
- Modules :
  - Gestion véhicules (réservations, entretien, pollution, pneus)
  - Suivi CONSUEL
  - Gestion salles réunion
  - Demandes logement (grands déplacements)
  - Événements (journées collabs, repas)
  - Planning hebdomadaire
  - Contrats sous-traitance
- **Workflow validation**
- **Notifications automatiques**
- **Reporting centralisé**

**Bénéfices**
- Fin silos Excel (15+ fichiers → 1 plateforme)
- Données centralisées, synchronisées
- Accessibilité mobile
- Traçabilité complète
- Gain temps administratif 40-60%

**Investissement** : 40-60K€ (si custom) ou 15-25K€ (si Notion/Airtable + config)
**ROI** : 12-18 mois

#### 10. ✅ Système Gestion Contrats Sous-Traitance

**Solution**
- Module dédié :
  - Base sous-traitants (coordonnées, compétences, tarifs, assurances, certifications)
  - Templates contrats
  - **Checklist pièces à demander** (assurances, Kbis, attestations, etc.)
  - Workflow validation multi-niveaux
  - Suivi exécution (avancement, paiements, litiges)
  - Alertes fin contrat, renouvellement assurances
- Intégration comptabilité (factures sous-traitants)

**Bénéfices**
- Conformité juridique/administrative
- Visibilité sous-traitance par chantier
- Optimisation coûts (comparaison sous-traitants)
- Réduction risques (assurances à jour, etc.)

**Investissement** : 30-45K€
**ROI** : 18-24 mois

**ROI Projets Structurants (18 mois)** : 185-275K€ investissement, gains 250-400K€/an

### Long terme (18-24 mois) - Projets Transformants

#### 11. ✅ Solution Mobile Terrain (Devis Hors Ligne + Signature)

**Solution**
- App mobile tablette/smartphone :
  - **Catalogue produits avec images**
  - **Création devis simplifiée** (articles standards, kits)
  - **Calcul automatique** (prix, remises, totaux)
  - **Mode hors ligne** complet (sync différée)
  - **Signature électronique client** sur place (légale)
  - **Photos chantier** intégrées devis
  - **Géolocalisation** automatique
- Synchronisation ERP (Sage ou futur)
- Templates devis par type intervention

**Bénéfices**
- Cycle commercial accéléré (devis immédiat sur place)
- Taux transformation +25-35% (engagement client sur place)
- Expérience client premium
- Réduction allers-retours
- Productivité commerciale +40%

**Investissement** : 70-100K€ (dev app avancée + intégrations)
**ROI** : 12-18 mois (CA additionnel)

#### 12. ✅ Évaluation/Migration vers Optima (Sidev)

**Contexte**
- Optima mentionné dans audit "à voir/tester"
- Solution BTP spécialisée

**Démarche**
1. **Benchmark Optima vs alternatives** (3-4 mois)
   - Démo Optima détaillée
   - POC 6 semaines avec données réelles
   - Visite sites références BTP
   - Comparaison Sage actuel vs Optima vs Odoo BTP vs autres
2. **Business case** (1 mois)
   - Coûts migration (licences, formation, consulting)
   - Bénéfices attendus (fonctionnalités, gains temps, ROI)
   - Risques (migration données, résistance utilisateurs)
   - Planning migration
3. **Décision Go/No-Go** (1 mois)
4. **Si Go : Migration progressive** (12-18 mois)
   - Phase 1 : Chiffrage/devis
   - Phase 2 : Suivi chantiers/situations
   - Phase 3 : Achats/stocks
   - Phase 4 : Intégrations (compta, RH, etc.)

**Bénéfices potentiels Optima (si migration)**
- ERP 100% BTP (vs Sage généraliste)
- Fonctions métiers natives (situations, sous-traitance, etc.)
- Mobilité terrain intégrée
- Moins de développements custom
- Scalabilité

**Investissement** : 150-250K€ (si migration complète)
**ROI** : 24-36 mois (transformation profonde)

⚠️ **Recommandation** : Évaluer Optima mais ne migrer que si gains fonctionnels/ROI clairement démontrés vs optimisation Sage actuel

#### 13. ✅ RBAC & Accès Distant Sécurisés

**Solution**
- **Gestion droits et permissions (RBAC)** :
  - Rôles définis : Admin, Responsable Activité, Responsable Affaire, Chef Chantier, Assistante, Lecture seule
  - Permissions granulaires (lecture, écriture, suppression, validation)
  - Audit trail (qui a fait quoi, quand)
- **Accès distant sécurisé** :
  - VPN entreprise ou solution cloud sécurisée
  - Authentification forte (2FA)
  - Accès bureau même hors réseau
- **Monitoring sécurité** :
  - Alertes tentatives accès non autorisés
  - Revue trimestrielle accès

**Bénéfices**
- Sécurité données renforcée
- Conformité RGPD
- Flexibilité travail (télétravail, déplacements)
- Traçabilité complète

**Investissement** : 25-40K€ (setup + licences + formation)
**ROI** : Intangible mais critique (sécurité, conformité)

#### 14. ✅ Prédictions ML & Analytics Avancés

**Solution**
- **Modèles ML** :
  - Prédiction dépenses à venir par chantier (LSTM)
  - Prédiction délais (retards potentiels)
  - Optimisation planning (allocation ressources)
  - Détection anomalies (budgets, consommations)
- **Analytics avancés** :
  - Benchmark chantiers (ratios, marges, productivité)
  - Analyse rentabilité par type chantier/client/région
  - Simulations scénarios what-if

**Bénéfices**
- Anticipation dérives (budget, délais)
- Optimisation ressources
- Décisions data-driven
- Compétitivité renforcée

**Investissement** : 50-80K€ (data science + intégrations)
**ROI** : 18-24 mois (optimisation marges + réduction retards)

**ROI Projets Transformants (24 mois)** : 295-470K€ investissement, gains 400-700K€/an

---

## 🎯 PISTES RECOMMANDÉES

### Approche Recommandée : Progressive & Pragmatique

**Phase 1 (Mois 1-6) : Quick Wins Ciblés**

**Priorités**
1. ✅ **Remontée BL mobile** (impact immédiat chantiers)
2. ✅ **Dashboard budgets** (pilotage amélioré)
3. ✅ **Rappels automatiques devis** (CA additionnel)

**Investissement Phase 1** : 58-87K€
**Gains Phase 1** : 100-150K€/an
**Payback** : 6-10 mois

**Phase 2 (Mois 7-18) : Structuration Processus**

**Priorités**
4. ✅ **Refonte situations mensuelles** (pain point #1)
5. ✅ **Standardisation méthodologie chiffrage** (efficacité + qualité)
6. ✅ **Plateforme collaborative** (fin Excel silos)

**Investissement Phase 2** : 135-200K€
**Gains Phase 2** : 200-300K€/an (cumulé avec Phase 1 : 300-450K€/an)
**Payback Phase 2** : 12-16 mois

**Phase 3 (Mois 19-24) : Décision Stratégique**

**Option A : Optimisation Sage + Modules**
- Continuer développements sur base Sage
- Modules complémentaires : mobile terrain, ML, RBAC
- Investissement : 120-180K€
- Gains : +150-250K€/an (cumulé : 450-700K€/an)

**Option B : Migration Optima (si POC concluant)**
- Évaluation Optima (Mois 13-18)
- Si bénéfices démontrés : migration progressive
- Investissement : 150-250K€
- Gains : +200-400K€/an (cumulé : 500-850K€/an)

**Recommandation** : **Option A (Optimisation Sage)** SAUF SI :
- POC Optima démontre gains fonctionnels majeurs (>40% efficacité)
- ROI migration < 24 mois
- Volonté direction transformation profonde
- Budget >250K€ disponible

**Pourquoi Option A par défaut ?**
- Risque migration élevé (disruption, résistance utilisateurs)
- Sage actuel connu, maîtrisé
- Investissements déjà réalisés
- Quick wins possibles sans migration
- Phase 1+2 peuvent se faire sur Sage
- Décision migration peut être prise plus tard (Mois 18-24) avec recul

---

## 📊 PRIORISATION ACTIONS

### 🔴 URGENT (Mois 1-3)

**1. Remontée BL mobile (QR Code/Scan)**
- Pain point #3 critique
- Impact immédiat chantiers + bureau
- ROI rapide (6-9 mois)
- Fondation pour autres digitalisations terrain

**Actions**
- Semaine 1-2 : Cahier charges détaillé (use cases, maquettes)
- Semaine 3-6 : Sélection prestataire dev mobile (3 devis)
- Semaine 7-12 : Développement app MVP
- Semaine 13 : Tests pilote 2 chantiers + 5 utilisateurs
- Semaine 14-15 : Ajustements + formation
- Semaine 16 : Déploiement général

**Budget** : 40K€
**Gains attendus** : 80K€/an (temps + erreurs)

**2. Dashboard budgets (Initial + Complémentaire)**
- Pain point #2 critique
- Besoin Responsables Affaires & Activité
- Permet pilotage marge temps réel

**Actions**
- Semaine 1-3 : Audit données Sage + MDE
- Semaine 4-8 : Développement dashboards Power BI
- Semaine 9-10 : Tests utilisateurs
- Semaine 11-12 : Formation + déploiement

**Budget** : 20K€
**Gains attendus** : 40K€/an (meilleur pilotage marge)

**3. Rappels automatiques devis**
- Pain point #9 important
- Impact commercial rapide
- Simple à mettre en œuvre

**Actions**
- Semaine 1-2 : Définition workflow (règles, seuils, notifications)
- Semaine 3-6 : Développement automation
- Semaine 7-8 : Tests + ajustements
- Semaine 9 : Déploiement

**Budget** : 10K€
**Gains attendus** : 30K€/an (opportunités capturées)

**TOTAL URGENT : 70K€ investissement, 150K€/an gains → Payback 6 mois**

### 🟠 IMPORTANT (Mois 4-6)

**4. Amélioration recherche références**
- Pain point #4 critique
- Impacte productivité chiffrage quotidiennement

**Actions**
- Semaine 13-16 : Analyse besoins détaillés (ateliers chiffreurs)
- Semaine 17-22 : Développement module recherche avancée
- Semaine 23-24 : Tests + formation

**Budget** : 15K€
**Gains attendus** : 25K€/an

**5. Module commandes avec visualisation prix**
- Pain point #5 critique
- Besoin Responsables Affaires

**Actions**
- Semaine 13-18 : Cahier charges (workflow, intégrations catalogues fournisseurs)
- Semaine 19-26 : Développement module achats
- Semaine 27-28 : Tests + formation

**Budget** : 30K€
**Gains attendus** : 35K€/an (optimisation prix achats)

**TOTAL IMPORTANT : 45K€ investissement, 60K€/an gains additionnels**

**TOTAL PHASE 1 (M1-6) : 115K€ investissement, 210K€/an gains → Payback 7 mois**

### 🟢 STRUCTURANT (Mois 7-18)

**6. Refonte gestion situations mensuelles**
- Pain point #1 **CRITIQUE**
- Impact majeur RH/Compta/RA

**Actions**
- M7-8 : Ateliers processus actuels (cartographie détaillée)
- M9-11 : Conception solution (extraction auto, fichier suivi tâches, templates)
- M12-15 : Développement + intégrations
- M16-17 : Tests sur 3 chantiers pilotes
- M18 : Déploiement général + formation

**Budget** : 75K€
**Gains attendus** : 120K€/an (temps traitement + trésorerie optimisée)

**7. Standardisation méthodologie chiffrage**
- Pain point #10 structurant
- Impact qualité/vitesse chiffrage

**Actions**
- M7-9 : Analyse chiffrages existants (benchmark interne)
- M10-11 : Construction bibliothèque prix (prix m², diviseurs, ratios)
- M12-13 : Développement templates + guides
- M14-15 : Formation équipes (2 jours)
- M16-18 : Accompagnement + ajustements

**Budget** : 45K€
**Gains attendus** : 60K€/an (vitesse + précision)

**8. Gestion familles/sous-familles avancée**
- Pain point #11 structurant
- Lié à méthodologie chiffrage

**Actions**
- M10-11 : Refonte arborescence familles (ateliers utilisateurs)
- M12-14 : Développement visualisations + alertes
- M15-16 : Migration données + tests
- M17-18 : Déploiement + formation

**Budget** : 25K€
**Gains attendus** : 30K€/an (pilotage granulaire)

**9. Plateforme collaborative (remplacement Excel)**
- Pain point #8 important
- Impact assistante + tous

**Actions**
- M10-12 : Benchmark solutions (Notion, Airtable, custom)
- M13-14 : POC solution retenue (1 module test)
- M15-17 : Déploiement progressif modules (véhicules, CONSUEL, salles, logements, événements, sous-traitance)
- M18 : Migration complète Excel → plateforme

**Budget** : 50K€ (si custom) ou 20K€ (si Notion/Airtable)
**Gains attendus** : 70K€/an (temps admin + cohérence données)

**TOTAL STRUCTURANT (M7-18) : 195K€ investissement, 280K€/an gains additionnels**

**TOTAL CUMULÉ (M1-18) : 310K€ investissement, 490K€/an gains → Payback global 8 mois**

---

## 💰 BUDGETS DÉTAILLÉS

### Investissement Total par Phase (24 mois)

| Phase | Période | Projets | Investissement | Gains/an | Payback |
|-------|---------|---------|----------------|----------|---------|
| **Phase 1 : Quick Wins** | M1-6 | 5 projets | 115K€ | 210K€ | 7 mois |
| **Phase 2 : Structurant** | M7-18 | 4 projets | 195K€ | 280K€ | 10 mois |
| **Phase 3 : Transformant** | M19-24 | 3-4 projets | 145-220K€ | 200-350K€ | 12-18 mois |
| **TOTAL 24 MOIS** | | 12-13 projets | **455-530K€** | **690-840K€** | **10 mois** |

### Détail Budgets Phase 3 (selon option)

**Option A : Optimisation Sage + Modules (Recommandé)**

| Projet | Budget | Gains/an |
|--------|--------|----------|
| Solution mobile terrain (devis offline + signature) | 85K€ | 120K€ |
| RBAC & accès distant sécurisés | 30K€ | Intangible (sécurité) |
| Prédictions ML & analytics avancés | 60K€ | 80K€ |
| **TOTAL OPTION A** | **175K€** | **200K€** |

**Option B : Migration Optima (si POC concluant)**

| Poste | Budget |
|-------|--------|
| Licences Optima (100 users, 2 ans) | 60K€ |
| Consulting/Intégrateur Sidev | 80K€ |
| Migration données | 30K€ |
| Formation équipes | 25K€ |
| Développements complémentaires | 40K€ |
| Contingence 15% | 35K€ |
| **TOTAL OPTION B** | **270K€** |

**Gains attendus Option B** : 300-400K€/an (si réel ERP BTP apporte 50%+ efficacité vs Sage)

⚠️ **Recommandation** : Option A (Optimisation Sage) car :
- Risque migration élevé
- ROI Option A excellent (10 mois)
- Peut combiner : Quick Wins sur Sage + évaluation Optima en parallèle
- Décision migration peut être prise M18-24 avec recul

### ROI Global 2 Ans

**Scénario Conservateur (Option A recommandée)**

| Année | Investissement | Gains | Cumulé |
|-------|----------------|-------|--------|
| **Année 1** | 310K€ (Phases 1+2) | 490K€ | +180K€ |
| **Année 2** | 175K€ (Phase 3) | 690K€ | +695K€ |
| **TOTAL 2 ANS** | **485K€** | **1180K€** | **+695K€ net** |

**ROI** : 143%
**Payback global** : 10 mois

**Scénario Optimiste (gains 20% supérieurs)**

| Année | Investissement | Gains | Cumulé |
|-------|----------------|-------|--------|
| **Année 1** | 310K€ | 588K€ | +278K€ |
| **Année 2** | 175K€ | 828K€ | +931K€ |
| **TOTAL 2 ANS** | **485K€** | **1416K€** | **+931K€ net** |

**ROI** : 192%
**Payback global** : 8 mois

---

## 📈 KPIs DE SUCCÈS

### Indicateurs Opérationnels

**Situations & Facturation**
- Temps traitement situations mensuelles : plusieurs jours → **<4 heures** (cible)
- Délai émission factures : J+15 fin mois → **J+3**
- Taux erreurs factures : X% → **<1%**
- Satisfaction clients facturation : - → **>4.5/5**

**Remontée BL Chantiers**
- Délai remontée BL : 2-5 jours → **Temps réel** (<1h)
- Taux erreurs saisie BL : 15% → **<2%**
- Taux adoption app mobile chantiers : - → **>90%**
- Satisfaction chefs chantier : - → **>4/5**

**Gestion Commandes**
- Taux commandes validées avec prix visualisés : 0% → **100%**
- Temps création commande : 15 min → **5 min**
- Taux alertes prix anormaux détectées : 0% → **>80%**
- Optimisation prix achats : baseline → **-5 à -8%**

**Chiffrage & Devis**
- Temps recherche référence : 3-5 min → **<30 sec**
- Temps création devis : X heures → **-30%**
- Délai traitement devis : 5-7 jours → **<48h**
- Taux transformation devis : X% → **+15-20%**

### Indicateurs Qualité

**Budgets & Marges**
- Visibilité budgets complémentaires : 0% → **100%**
- Taux chantiers dans budget : X% → **+25%**
- Détection dérives budgétaires : J+30 → **J+7**
- Marge moyenne : X% → **+2-3 points**

**Standardisation**
- Taux chiffrages conformes méthodologie : 0% → **>90%**
- Écart-type prix m² (homogénéité) : X → **-60%**
- Temps formation nouveau chiffreur : X jours → **-40%**

**Données & Silos**
- Nombre Excel opérationnels : 15+ → **<3**
- Taux données centralisées : X% → **>95%**
- Satisfaction accès info : - → **>4/5**
- Temps recherche info : X min → **-70%**

### Indicateurs Business

**Efficacité Opérationnelle**
- Productivité Responsables Affaires : baseline → **+25%**
- Productivité chefs chantier : baseline → **+20%**
- Temps administratif : X% → **-40%**
- Coûts opérationnels : baseline → **-8 à -12%**

**Commercial & Croissance**
- CA additionnel (meilleure réactivité devis) : - → **+150-250K€/an**
- Taux satisfaction clients : X → **+20%**
- NPS clients : - → **>40**
- Chantiers gérés simultanément : X → **+30%** (même équipe)

**Financier**
- Amélioration trésorerie (facturation rapide) : - → **+200-300K€**
- Réduction coûts achats : baseline → **-5 à -8%**
- ROI projets IT : - → **143-192%** (2 ans)
- Payback moyen projets : - → **8-10 mois**

---

## 🔒 RISQUES & MITIGATION

### Risques Techniques

**1. Intégrations Sage/MDE/Lireco complexes**
- **Risque** : APIs limitées, connecteurs inexistants
- **Impact** : Double saisie persiste, ROI réduit
- **Probabilité** : Moyenne
- **Mitigation** :
  - Audit APIs avant tout dev (POC technique)
  - Budget développement connecteurs custom si besoin
  - Alternative : migration ERP si blocage majeur
- **Backup** : ETL custom + synchronisation batch

**2. Qualité données migration**
- **Risque** : Données Excel/Sage incohérentes, incomplètes
- **Impact** : Dashboards/analytics peu fiables
- **Probabilité** : Élevée
- **Mitigation** :
  - Audit qualité données avant tout projet (2-3 semaines)
  - Nettoyage pré-migration
  - Gouvernance données (rôles, process validation)
  - Tests exhaustifs post-migration
- **Backup** : Migration progressive avec validation

**3. Performance app mobile terrain (connexion instable)**
- **Risque** : Chantiers isolés, connexion faible/inexistante
- **Impact** : App inutilisable, retour papier
- **Probabilité** : Moyenne
- **Mitigation** :
  - **Mode offline obligatoire** (architecture offline-first)
  - Sync intelligente (WiFi prioritaire, 4G, différée)
  - Tests terrain exhaustifs avant go-live
  - Formation utilisateurs mode dégradé
- **Backup** : Version web progressive (PWA) en complément

**4. Résistance utilisateurs terrain (chefs chantier, chiffreurs)**
- **Risque** : Adoption faible, retour anciennes pratiques
- **Impact** : ROI non atteint, double process
- **Probabilité** : Moyenne-Élevée
- **Mitigation** :
  - **Co-conception** avec utilisateurs finaux (ateliers)
  - UX excellente mobile (tests utilisateurs)
  - Formation terrain intensive (1/2 journée sur chantier)
  - Champions internes (early adopters)
  - Quick wins communiqués
  - Support réactif (hotline)
- **Backup** : Phase pilote prolongée, ajustements

### Risques Business

**5. ROI surestimé**
- **Risque** : Gains temps théoriques vs réels divergent
- **Impact** : Désillusion direction, budgets futurs réduits
- **Probabilité** : Moyenne
- **Mitigation** :
  - Hypothèses conservatrices (présentées ci-dessus)
  - Mesure before/after systématique (KPIs)
  - Suivi mensuel ROI
  - Ajustements itératifs
- **Backup** : Élargir périmètre bénéfices (qualité, stratégique)

**6. Budget dépassé**
- **Risque** : Développements plus longs que prévu
- **Impact** : Projet arrêté ou qualité réduite
- **Probabilité** : Moyenne
- **Mitigation** :
  - Budget contingence 10-15% (inclus ci-dessus)
  - Priorités claires (must-have vs nice-to-have)
  - Jalons validation budget avant phase suivante
  - Forfaits vs régie pour dev
- **Backup** : Arrêt projet si dépassement >20%, revue scope

**7. Sponsor désengagé**
- **Risque** : Priorités changent, support faiblit
- **Impact** : Projet ralenti ou abandonné
- **Probabilité** : Faible-Moyenne
- **Mitigation** :
  - Sponsor exécutif identifié dès départ
  - Comité pilotage mensuel
  - Communication gains régulière
  - Quick wins visibles M1-3
- **Backup** : Escalade direction générale

### Risques Organisationnels

**8. Équipes débordées (projet + run)**
- **Risque** : Projet accapare équipes, run délaissé
- **Impact** : Tensions, retards projet
- **Probabilité** : Élevée
- **Mitigation** :
  - Équipe projet dédiée (chef projet 50%, référents métiers 20%)
  - Externalisation dev (ne pas mobiliser IT interne)
  - Étalement déploiement (24 mois vs big-bang)
  - Support externe première année
- **Backup** : Recrutement CDD chef de projet

**9. Migration Optima échoue (si Option B)**
- **Risque** : Migration complexe, bugs, résistance utilisateurs
- **Impact** : Disruption activité, ROI négatif
- **Probabilité** : Moyenne-Élevée (si migration)
- **Mitigation** :
  - **POC exhaustif avant décision** (6 semaines, données réelles)
  - Intégrateur Sidev certifié expérimenté BTP
  - Migration progressive (module par module)
  - Rollback plan complet
  - Formation intensive (3-4 semaines)
- **Backup** : Abandon migration, retour Sage optimisé (Option A)

**10. Dépendance fournisseur unique**
- **Risque** : Éditeur/intégrateur défaillant ou prix excessifs
- **Impact** : Maintenance impossible, évolutions bloquées
- **Probabilité** : Faible
- **Mitigation** :
  - Favoriser solutions open-source ou APIs ouvertes
  - Code source développements custom en propriété
  - Contrats maintenance avec SLA clairs
  - Plan succession (doc technique complète)
- **Backup** : Multi-sourcing (plusieurs prestataires possibles)

---

## ✅ CONCLUSION & RECOMMANDATION

### Synthèse Pain Points Albertville

**Top 5 Pain Points Critiques**
1. ⚠️ **Situations & facturation** : traitement mensuel extrêmement long
2. ⚠️ **Suivi budgétaire** : budgets complémentaires invisibles
3. ⚠️ **Remontée BL chantier** : 100% manuel, pas de traçabilité temps réel
4. ⚠️ **Recherche références** : compliqué, chronophage
5. ⚠️ **Gestion commandes** : validation sans voir prix

**Autres Pain Points Significatifs**
- Travail collaboratif bloqué (1 fichier à la fois)
- Création devis/titres/sous-titres compliqués
- Excel multiples non connectés (15+ fichiers)
- Délais traitement devis longs
- Méthodologie chiffrage non standardisée
- Familles/sous-familles insuffisantes
- Pas de solution mobile terrain
- RBAC à structurer

### Recommandation Stratégique

**👉 APPROCHE PROGRESSIVE 24 MOIS (OPTION A : OPTIMISATION SAGE)**

**Pourquoi cette approche ?**

1. ✅ **Quick Wins immédiats** (M1-6)
   - Remontée BL mobile (pain point #3 résolu)
   - Dashboard budgets (pain point #2 résolu)
   - Rappels devis automatiques
   - ROI 7 mois, gains 210K€/an

2. ✅ **Structuration processus** (M7-18)
   - Refonte situations mensuelles (pain point #1 résolu)
   - Standardisation chiffrage (efficacité +30%)
   - Plateforme collaborative (fin Excel silos)
   - ROI cumulé 8 mois, gains 490K€/an

3. ✅ **Transformation** (M19-24)
   - Solution mobile terrain (cycle commercial accéléré)
   - RBAC & sécurité
   - ML prédictif
   - ROI cumulé 10 mois, gains 690K€/an

4. ✅ **Risques maîtrisés**
   - Pas de big-bang
   - Capitalisation sur Sage existant (connu, maîtrisé)
   - Investissements progressifs
   - Possibilité ajustements itératifs
   - Décision migration Optima peut être prise M18-24 avec recul

5. ✅ **ROI exceptionnel**
   - Investissement 2 ans : 485K€
   - Gains 2 ans : 1180K€
   - Net : +695K€
   - ROI : 143%
   - Payback : 10 mois

### Alternative : Migration Optima (Option B)

**Évaluer uniquement si :**
- POC Optima démontre gains fonctionnels >40% vs Sage
- ROI migration < 24 mois clairement démontré
- Volonté direction transformation profonde
- Budget >250K€ disponible
- Acceptation disruption temporaire (formation, adaptation)

**Notre recommandation : NON prioritaire**
- Quick Wins possibles sur Sage (Phase 1+2)
- Risque migration élevé (disruption, résistance)
- Peut être évalué en parallèle Phase 1+2
- Décision finale M18 avec recul

### Prochaines Étapes Immédiates

**Semaine 1-2 : Validation Direction**
- Présentation plan à CODIR/Direction Albertville
- Validation budget Phase 1 (115K€)
- Désignation sponsor exécutif
- Constitution équipe projet (chef projet, référents métiers)
- Go/No-Go

**Semaine 3-4 : Lancement Projet #1 (Remontée BL Mobile)**
- Ateliers besoins détaillés (chefs chantier, RA, assistante)
- Cahier charges app mobile (use cases, maquettes, intégrations)
- RFI 3-4 prestataires dev mobile

**Semaine 5-6 : Lancement Projet #2 (Dashboard Budgets)**
- Audit données Sage + MDE (qualité, accès, APIs)
- Ateliers besoins KPIs (RA, Responsables Activité)
- Maquettes dashboards

**Semaine 7-8 : Lancement Projet #3 (Rappels Devis)**
- Définition workflow (règles, seuils, notifications)
- Choix outil automation (Zapier, Make, ou dev custom)
- Tests POC

**Mois 3 : Développements parallèles**
- 3 projets en dev simultané
- Comité pilotage hebdomadaire
- Suivi budget/planning

**Mois 4-6 : Tests, Formation, Déploiement**
- Tests utilisateurs projets 1-3
- Formation équipes
- Go-live progressif
- Mesure gains premiers mois
- Communication succès

**Objectif M6 : Phase 1 déployée, 210K€/an gains mesurés, Go Phase 2 validé**

---

## 📞 ANNEXES

### Équipe Projet Recommandée

**Sponsor Exécutif**
- Membre CODIR/Direction Albertville
- Disponibilité 10% (comité pilotage mensuel)

**Chef de Projet**
- Profil : Chef de projet IT ou Responsable Activité avec appétence tech
- Disponibilité 50% (12 mois Phase 1+2)
- Missions : coordination, planning, budget, reporting

**Référents Métiers (20% chacun)**
- Responsable Affaire (1)
- Responsable Activité (1)
- Chef Chantier (1)
- Assistante Relation Client (1)
- Missions : besoins, tests, formation pairs

**IT/Dev (externalisé)**
- Prestataire dev mobile
- Prestataire BI (dashboards)
- Prestataire automation
- Intégrateur (si migration Optima)

**Support (interne ou externe)**
- Support utilisateurs première année
- Hotline dédiée
- Documentation & formation

### Checklist Évaluation Optima (si Option B explorée)

**Fonctionnalités BTP Natives**
- ☐ Chiffrage/devis BTP (méthodologie, diviseurs, prix m²)
- ☐ Situations mensuelles automatisées
- ☐ Gestion sous-traitance complète
- ☐ Suivi chantiers temps réel
- ☐ Achats/stocks BTP
- ☐ Facturation situations
- ☐ Mobile terrain natif (devis, BL, pointage)
- ☐ CONSUEL & conformité BTP
- ☐ Planning ressources/équipes

**Intégrations**
- ☐ Comptabilité (Sage, Cegid, autres)
- ☐ Paie (SILAE, autres)
- ☐ Stock (Lireco ?)
- ☐ Fieldwire ou équivalent
- ☐ APIs ouvertes développements custom

**Migration & Formation**
- ☐ Migration données Sage garantie
- ☐ Formation complète incluse (combien jours ?)
- ☐ Support post-formation (combien mois ?)
- ☐ Intégrateur Sidev certifié dédié BTP

**Coûts**
- ☐ Licences (combien users, quel prix/user/mois ?)
- ☐ Forfait implémentation (combien ?)
- ☐ Formation (incluse ou sus ?)
- ☐ Support annuel (quel % licences ?)
- ☐ Évolutions (incluses ou sus ?)

**Références BTP**
- ☐ Nombre clients BTP France
- ☐ Taille clients (CA, nb employés)
- ☐ Visite 2-3 sites références possibles ?
- ☐ Témoignages retours d'expérience

**ROI Attendu**
- ☐ Gains temps situations mensuelles : X% ?
- ☐ Gains temps chiffrage : X% ?
- ☐ Réduction erreurs : X% ?
- ☐ Adoption mobile terrain : X% ?
- ☐ Payback : combien mois ?

### Grille Évaluation Finale Optima vs Sage Optimisé

| Critère | Poids | Sage<br/>Optimisé | Optima | Écart |
|---------|-------|-------------------|--------|-------|
| **Fonctionnalités BTP** | 25% | 6/10 | ?/10 | |
| **Facilité utilisation** | 20% | 7/10 (connu) | ?/10 | |
| **Intégrations** | 15% | 8/10 (existantes) | ?/10 | |
| **Mobile terrain** | 15% | 5/10 (custom) | ?/10 | |
| **Coût total 3 ans** | 10% | 9/10 (optimisé) | ?/10 | |
| **Risque migration** | 10% | 10/10 (aucun) | ?/10 | |
| **Support/formation** | 5% | 7/10 | ?/10 | |
| **TOTAL /10** | | **7.3/10** | **?/10** | |

*(À remplir après POC Optima)*

**Décision** : Migration Optima **UNIQUEMENT SI** note finale >8.5/10 ET écart >1.5 point vs Sage

---

**📅 Date prochaine revue** : Après validation direction

**🔄 Version document** : v1.0 - Novembre 2025

**📧 Contact auditeur** : Pour questions/précisions sur ce plan d'action
