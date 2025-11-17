# 📋 Notes d'Audit - Services Métiers BTP Duret Électricité

**Date** : Notes prises à Duret Albertville
**Périmètre** : Chantiers moyens et gros uniquement

---

## 1. 📞 **Assistante Relation Client / Accueil Administratif**

### Missions quotidiennes
- **Accueil téléphonique et gestion des mails**
- **Gestion administrative** : contrats, courriers, comptes rendus, transmission d'informations
- Peu de traitement de devis

### Outils actuels (Excel)
- **Suivi véhicules** : entrées/sorties, pollution, pneus, réservations partagées
- **Suivi CONSUEL**
- **Gestion salles de réunion** (planning partagé)
- **Demandes de logement** : suivi dates début/fin pour grands déplacements
- **Organisation événements** : journées collaborateurs, gestion planning individuel, repas
- **Planning hebdomadaire** : envoi tous les vendredis (+ hors aléas)

### Logiciel métier
- **Lireco** : gestion stock temps réel, alertes, commandes avec codes-barres, suivi références

---

## 2. 🏗️ **Responsable Affaire / Création & Suivi Chantier**

### A. Gestion Devis
**Problème** : Délais de traitement longs
**Besoin** : Système de rappels automatiques

### B. Gestion Commandes
**Besoin prioritaire** : Logiciel achat avec :
- Possibilité de créer des références
- **Évolution des familles/sous-familles** pour meilleur suivi
- Visualisation en colonnes avec alertes/notifications par famille

### C. Situations & Facturation
**Problème majeur** : Traitement mensuel très très long sur le logiciel actuel

**Besoin critique** :
- Extraction simplifiée du devis vers logiciel de suivi
- Meilleure organisation par famille (notamment main d'œuvre)
- **Fichier de suivi détaillé par tâche** permettant :
  - Prédiction des dépenses à venir
  - Réajustement du planning selon reste à faire
  - Éviter la perte de justesse du suivi

**Budget complémentaire** :
- **Problème** : Quand on valide le CA complémentaire, impossible de savoir à quoi correspond le débours
- **Besoin** : Rapprochement automatique avec les devis du Responsable d'Affaire
- Afficher budget complémentaire à côté du budget initial

### D. Points de vigilance
- Éviter incohérences entre sous-traitance et main d'œuvre
- Famille études : besoin de sous-familles avec suivi de plans en interne
- Lors validation heures : visualiser éléments variables (km perso/entreprise, logistique)

---

## 3. 👷 **Chef de Chantier**

### Problème actuel : Suivi des commandes
- Reçoit un mail quand commande passée
- **Pas d'info sur réception ni infos complémentaires**

### Besoin prioritaire : Remontée des BL digitalisée
**Solution idéale** : Douchette/scan mobile
- Sur chantier ET au bureau
- Saisie instantanée via téléphone avec QR Code
- Validation ligne à ligne de ce qui est reçu par le personnel

---

## 4. 💼 **Responsable Activité / Pilotage**

### A. Gestion Affaire & Chantier pour facturation
Besoin de pouvoir gérer conjointement affaire et chantier

### B. Difficulté sur le chiffrage
**Problèmes Sage actuels** :
- Perte de temps lors transition/utilisation du logiciel
- Impossible d'ouvrir 2 fichiers simultanément
- **Recherche de références compliquée** → améliorer la fonction recherche

**Besoins prioritaires** :
1. **Feuille de vente** (existe sur Sage) → intégrer sur autre onglet pour accès rapide
2. **Simplification des références** : actuellement 2 refs s'additionnent, en avoir qu'1 seule pour ajustement rapide
3. **Création titres/sous-titres** : actuellement très compliqué d'intégrer une ligne
4. **⚠️ IMPORTANT : Méthodologie chiffrage**
   - Besoin de **regroupement par diviseur**
   - Prix au m² standardisé (ex: ruban à mètre toujours même prix)

### C. Gestion des commandes
**Problème** : Actuellement fichier Excel
**Besoin** :
- Quand on tape une référence → rapprochement automatique + alertes
- Visualiser les prix AVANT validation (actuellement validation sans voir les prix)

### D. Contrats de sous-traitance
**Actuellement** : Suivi Excel
**Besoin** : Système de gestion avec liste de pièces à demander

---

## 5. 🛠️ **Outils & Logiciels**

### Logiciels actuellement utilisés
- **Excel** (très utilisé pour suivis)
- **Sage** (chiffrage, devis)
- **MDE**
- **Lireco** (gestion stock)
- **Hilti** (géré)
- **Fieldwire** (suivi chantier) - utilisé par :
  - 3 responsables affaire
  - 1 chef projet
  - 1 directeur
  - 1 conducteur
  - Charles R2A

### À évaluer
**Optima (Sidev)** → À voir/tester

---

## 6. ⚠️ **Besoins Transversaux Prioritaires**

### A. Gestion des droits et permissions (RBAC)
- Besoin crucial pour accès extérieurs
- Accès bureau possible même hors réseau

### B. Travail collaboratif
- Séparer les fichiers si plusieurs personnes travaillent dessus simultanément

### C. Gestion du personnel
- **Feuille informatique** : staff permanent
- **Papier** : intérimaires

### D. Mobilité terrain
**Demande future** :
- Faire devis avec articles simples
- **Mode hors ligne** avec signature client sur place
- Catalogue avec images

---

## 7. 📌 **Actions à mener**

1. ✅ **Enquête RGPD** à réaliser
2. 🔍 **Évaluer Optima (Sidev)**
3. 📱 **Tester solution mobile** : devis sur place avec signature électronique

---

## 8. 🎯 **Synthèse des Pain Points IT**

### Pain Points Critiques (⚠️ Priorité 1)
1. **Situations & facturation** : Traitement mensuel extrêmement long
2. **Suivi budgétaire** : Impossibilité de suivre les budgets complémentaires vs budget initial
3. **Remontée BL chantier** : Processus manuel, pas de traçabilité temps réel
4. **Recherche références** : Compliqué et chronophage sur Sage
5. **Gestion commandes** : Validation sans visualisation des prix

### Pain Points Importants (🔶 Priorité 2)
1. **Travail collaboratif** : Impossible d'ouvrir 2 fichiers simultanément
2. **Création devis** : Titres/sous-titres très compliqués à intégrer
3. **Suivi Excel multiple** : Véhicules, sous-traitance, commandes, planning
4. **Délais de traitement devis** : Trop longs, manque de rappels

### Pain Points Structurants (🔷 Priorité 3)
1. **Méthodologie chiffrage** : Manque de standardisation (prix au m², diviseurs)
2. **Gestion familles/sous-familles** : Pas de vision consolidée
3. **Mobilité terrain** : Pas de solution hors ligne pour devis/signature
4. **RBAC** : Gestion des droits et permissions à structurer

---

## 9. 💡 **Opportunités de Digitalisation**

### Quick Wins (0-3 mois)
- Dématérialisation remontée BL (QR Code mobile)
- Système de rappels automatiques sur devis
- Tableau de bord budgets (initial + complémentaire)

### Projets Structurants (3-6 mois)
- Module gestion commandes avec alertes/prix
- Amélioration recherche références
- Standardisation méthodologie chiffrage

### Projets Transformants (6-12 mois)
- Solution mobile terrain (devis hors ligne + signature)
- Refonte gestion situations mensuelles
- Plateforme collaborative (remplacer Excel multiples)
- Évaluation/migration vers Optima (Sidev)

---

**Document créé le** : 2025-10-23
**Prochaine étape** : Intégration de ces retours dans les 4 audits métiers (Responsable Affaire, Responsable Activité, Chef Chantier, Assistante Relation Client)
