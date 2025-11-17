# 🌐 Notes d'Audit - Enjeux Transverses & Stratégiques

**Date** : Notes prises lors de l'audit Duret Électricité
**Périmètre** : Problématiques transverses touchant toute l'organisation
**Thématiques** : Gestion produits, stocks, KPI, transparence données, litiges, gouvernance

---

## 1. 📦 **Gestion Produits et Fiches Techniques**

### A. Validation Fiches Produits
**Problème actuel** :
- **Beaucoup de fiches produits à faire valider** (propositions au client) dans la phase devis
- Processus manuel et chronophage

**Impact** :
- Ralentissement cycle devis
- Risque d'erreurs de spécifications
- Expérience client dégradée

**Besoin** :
- **Workflow validation** automatisé :
  - Sélection produits
  - Génération fiches techniques
  - Validation interne
  - Présentation client
- **Bibliothèque produits** : Avec fiches pré-validées
- **Signature électronique** : Validation client des spécifications

---

## 2. 📄 **Gestion Documentaire**

### A. Signature et Agrégation Documents
**Problèmes actuels** :
- **Signature** : Comme les plans, besoin de signature électronique
- **Possibilité d'agréger documents complémentaires** dans l'export

**Besoins** :
- **Signature électronique généralisée** :
  - Plans
  - Devis
  - Bons de livraison
  - Rapports intervention
  - Fiches produits
- **Export multi-documents** :
  - Devis + Fiches produits + Plans + CGV
  - Package complet client en un clic
  - PDF unifié ou ZIP structuré

---

## 3. ⚠️ **Gestion Litiges et Recommandés**

### A. Remontée Information Priorisée
**Problème actuel** :
- **Gestion des litiges et recommandés** : Remontée info priorisée nécessaire
- Pas de processus formel

**Impact** :
- Risque escalade litiges
- Délais réponse trop longs
- Insatisfaction client

**Besoins** :
- **Système ticketing litiges** :
  - Priorisation automatique selon gravité
  - Workflow escalade
  - SLA selon type litige
  - Notifications automatiques équipes concernées
- **Suivi recommandés** :
  - Alertes accusés réception
  - Délais réponse réglementaires
  - Traçabilité complète
- **Base de connaissances** : Litiges similaires et résolutions

---

## 4. 📊 **Transparence et Partage de la Donnée**

### A. Principe de Transparence
**Besoin exprimé** :
- **Transparence de la donnée, des chiffres**
- **Exemple** : Analyse + gestion chantier
  - **Le chef de chantier doit y avoir accès**
  - **Augmenter la transparence** de certains niveaux d'information

**Impact manque transparence** :
- Démotivation équipes
- Décisions sans contexte
- Silos d'information
- Culture du secret vs confiance

**Besoins** :
- **Définir niveaux d'accès** : RBAC (Role-Based Access Control)
- **Dashboards par rôle** :
  - Chef chantier : Son chantier (budget, avancement, etc.)
  - Responsable affaire : Ses affaires
  - Direction : Vue consolidée
- **Culture data-driven** : Décisions basées sur données partagées
- **Transparence budgets** : Chacun voit son périmètre

### B. Partage Information Multi-Niveaux
**Vision** :
- **Donner accès aux bonnes personnes** aux bonnes informations
- **Empowerment** : Responsabilisation via accès données
- **Collaboration** : Décisions collectives basées sur données partagées

---

## 5. 📈 **KPI et Tableaux de Bord**

### A. Tableaux de Bord Excel Actuels
**Situation actuelle** :
- **Tableau de bord Excel KPI par exercice**
- **Contrôleur de gestion** : Intégration globale au-delà de la production (marge, etc.) sur Excel

**Problèmes** :
- **Fiabilité** : Dépend de la qualité saisies manuelles
- **Temps réel impossible** : Mise à jour manuelle
- **Pas de prédictif** : Seulement historique
- **Dispersé** : Chacun son Excel

**Impact** :
- Décisions retardées
- Vision partielle
- Pas d'anticipation

### B. Besoins KPI Modernes
**Fonctionnalités souhaitées** :
- **Dashboards temps réel** :
  - CA par activité/client/période
  - Marges par chantier/responsable
  - Trésorerie et prévisions
  - Performance équipes
  - Efficacité opérationnelle
- **Alertes automatiques** :
  - Dépassements budgets
  - Retards planning
  - Marges négatives
  - Objectifs mensuels non atteints
- **Prédictif** :
  - Projection CA fin d'année
  - Prédiction trésorerie
  - Risques dépassements
- **Segmentation** :
  - Par activité (maintenance, logement, montagne, etc.)
  - Par client
  - Par responsable
  - Par période

---

## 6. 🖥️ **ERP et Outils Associés**

### A. Vision Globale ERP
**Périmètre souhaité** :
- **Approvisionnement**
- **Gestion affaires**
- **Devis**
- **Suivi client**
- **Fournisseurs**

### B. Problèmes Actuels
**Constat** :
- **Excel partout** : Tout personnalisé
- **Pas d'intégration** : Silos de données

**Besoins** :
- **ERP centralisé** : Une seule source de vérité
- **Intégration complète** : Tous modules connectés
- **Éviter Excel** : Automatisation maximale

---

## 7. 📁 **Gestion en Mode Projet**

### A. Problème Visio et Accès Fichiers
**Problèmes actuels** :
- **Problème visio** : À régler (problème technique)
- **App importante** : Accès aux fichiers
- **Gestion en mode projet** :
  - Reçu de la data
  - Alimenté et stocké dans un dossier

**Besoin** :
- **Plateforme collaborative** :
  - Visio intégré
  - Partage fichiers
  - Gestion versions
  - Annotations partagées
- **Structure projet claire** :
  - Arborescence standardisée
  - Droits d'accès par projet
  - Recherche transverse

---

## 8. 🚨 **Alertes et Anomalies**

### A. Système d'Alertes Généralisé
**Besoin** :
- **Alertes automatiques** : Anomalies détectées
- **Notifications ciblées** : Bonnes personnes au bon moment

**Types d'alertes** :
- **Budgets** : Dépassements, risques
- **Délais** : Retards, échéances
- **Qualité** : Anomalies, réserves non levées
- **Stock** : Ruptures, péremptions
- **RH** : Absences, surcharges
- **Sécurité** : Documents manquants

---

## 9. 👥 **Fonctions Transversales**

### A. Bureau d'Études Transverse
**Problème identifié** :
- **Irritant** : De plus en plus dans l'entreprise de fonctions transversales
- **Exemple** : Le bureau d'études doit travailler pour toute l'entreprise
- **Demandes viennent de X personnes**
- **Doivent implémenter le planning des équipes**
- **Concaténer demandes** : Vrai sujet de progression

**Impact** :
- Surcharge BE
- Difficultés priorisation
- Insatisfaction demandeurs
- Goulot d'étranglement

**Besoins** :
- **Système de tickets** : Demandes centralisées
- **Priorisation transparente** : Critères objectifs
- **Capacité visible** : Charge de travail BE
- **SLA clairs** : Délais selon priorité
- **Équité traitement** : File d'attente gérée

### B. Multi-Casquettes
**Problème** :
- **Simplifier l'usage multi-casquettes**
- **Besoins à qualifier** → Transcrit en données → **Données traitées de manière équitable**

**Besoin** :
- **Workflows clairs** par type de demande
- **Qualification automatique** : Catégorisation demandes
- **Équité algorithmique** : Traitement objectif
- **Transparence** : Chacun voit où en est sa demande

---

## 10. 📦 **Gestion des Stocks**

### A. Réutilisation du Stock
**Problème majeur** :
- **Gestion des stocks, réutilisation du stock : IMPORTANT**
- **Valorisation d'un même produit à 2 prix différents**

**Impact** :
- Incohérences comptables
- Difficultés calcul marges
- Stock sous-utilisé
- Gaspillage

**Besoins** :
- **Politique valorisation stock** : Méthode claire (FIFO, LIFO, CUMP)
- **Traçabilité entrées/sorties** : Par chantier, date, prix
- **Réutilisation facilitée** : Recherche stock disponible avant commande
- **Alertes obsolescence** : Produits anciens à écouler
- **Inventaire intelligent** : Facilité, avec suggestions IA

### B. Réception Manuelle
**Problème** :
- **Ne plus réceptionner manuellement** : Volonté
- **Beaucoup de temps perdu en comptage**

**Solution proposée** :
- **Puce RFID** : Cf. Decathlon
- **Scan automatique** : Douchette/QR Code
- **Rapprochement auto** : BL vs commande

**Bénéfices** :
- -80% temps réception
- 100% fiabilité (vs ~70% actuellement)
- Traçabilité temps réel

---

## 11. 🛡️ **Gouvernance et Stratégie**

### A. Principe Directeur
**Citation importante** :
> **"Priorité entreprise : Logiciel aide et ne dirige pas"**

**Signification** :
- L'outil doit **servir** l'entreprise, pas la contraindre
- Flexibilité et adaptation
- Pas de sur-processification

### B. Onboarding
**Problème actuel** :
- **Nouvel arrivant** : Pas 4 jours de formation
- Besoin simplifié

**Besoin** :
- **Outils intuitifs** : Prise en main rapide
- **Formation intégrée** : Tooltips, guides contextuels
- **Onboarding digital** : Parcours personnalisés
- **Mentorat** : Accompagnement pairs

### C. Remontée Information
**Problème structurel** :
- **Mauvaise remontée information** :
  - **Trop longue**
  - **Trop tard**
  - **Mauvaise interprétation**

**Impact** :
- Décisions retardées
- Erreurs stratégiques
- Opportunités manquées

**Besoins** :
- **Temps réel** : Dashboards live
- **Standardisation** : Formats uniformes
- **Validation** : Contrôles qualité données
- **Contextualisation** : Infos enrichies

---

## 12. 🎯 **Pain Points Transverses Classés**

### Pain Points Critiques (⚠️ Priorité 1)
1. **Valorisation stock incohérente** : 2 prix pour même produit
2. **Remontée info trop longue/tardive** : Décisions retardées
3. **Manque transparence données** : Démotivation et silos
4. **Réception manuelle chronophage** : Temps perdu comptage
5. **Surcharge fonctions transversales** : Goulot d'étranglement

### Pain Points Importants (🔶 Priorité 2)
1. **Fiches produits validation manuelle** : Ralentissement devis
2. **Litiges non priorisés** : Risque escalade
3. **KPI Excel non fiables** : Décisions basées sur données périmées
4. **Multi-casquettes mal géré** : Iniquité traitement
5. **Problèmes visio/accès fichiers** : Collaboration limitée

### Pain Points Structurants (🔷 Priorité 3)
1. **Pas d'alertes automatiques** : Détection tardive anomalies
2. **Signature manuelle** : Processus lourds
3. **Agrégation documents manuelle** : Temps perdu
4. **Onboarding long** : 4j formation nécessaire
5. **Stock sous-utilisé** : Gaspillage et coûts

---

## 13. 💡 **Opportunités de Digitalisation**

### Quick Wins (0-3 mois)
- **RFID/QR Code** : Réception automatique stocks
- **Dashboards temps réel** : Remplacement Excel KPI
- **Système tickets transverses** : BE et autres fonctions
- **Workflow validation produits** : Accélération devis

### Projets Structurants (3-6 mois)
- **RBAC et transparence** : Accès données par rôle
- **Signature électronique généralisée** : Tous documents
- **Gestion litiges** : Priorisation et SLA
- **Politique stock** : Valorisation et réutilisation

### Projets Transformants (6-12 mois)
- **IA détection anomalies** : Alertes prédictives
- **Analytics avancés** : Prédictions et recommandations
- **Plateforme collaborative** : Mode projet complet
- **Gouvernance données** : Data quality + MDM

---

## 14. 📌 **Actions Recommandées**

### Court Terme (Mois 1-3)
1. ✅ **Audit gouvernance données** : Qualité, cohérence, propriété
2. ✅ **Pilote RFID stock** : Test sur 1 dépôt
3. ✅ **Dashboards direction** : KPI temps réel
4. ✅ **Système tickets BE** : Demandes transversales

### Moyen Terme (Mois 4-9)
1. 🔍 **RBAC complet** : Gestion droits d'accès
2. 🔍 **Workflow validation produits** : Automatisation
3. 🔍 **Gestion litiges formalisée** : SLA et escalade
4. 🔍 **Politique stock unifiée** : Valorisation cohérente

### Long Terme (Mois 10-18)
1. 🚀 **Data Lake** : Centralisation toutes données
2. 🚀 **IA prédictive** : Anomalies, tendances, risques
3. 🚀 **Plateforme collaborative** : Mode projet intégré
4. 🚀 **Culture data-driven** : Formation et accompagnement

---

## 15. 🔑 **Synthèse**

### Enjeux Stratégiques
1. **Gouvernance données** : Qualité, cohérence, propriété
2. **Transparence** : Partage info vs silos
3. **Efficacité opérationnelle** : Automatisation vs manuel
4. **Collaboration** : Transverse vs silos fonctionnels
5. **Agilité** : Temps réel vs mensuel

### Principes Directeurs
- **Outil au service de l'humain** : Pas l'inverse
- **Transparence et confiance** : Données partagées
- **Équité** : Traitement objectif demandes
- **Simplification** : Réduction complexité
- **Fiabilité** : Données de qualité

### ROI Attendu Transverse
- **Temps réception** : -80% via RFID
- **Qualité données** : +90% via gouvernance
- **Décisions** : -70% délai via temps réel
- **Satisfaction interne** : +60% via transparence
- **Efficacité transverse** : +50% via tickets structurés

### KPIs Transverses à Suivre
- Qualité données (taux erreurs, doublons)
- Délai remontée information (cible : temps réel)
- Taux utilisation stock existant (cible : +40%)
- Temps réception stock (cible : -80%)
- Satisfaction fonctions transverses (cible : >8/10)
- Délai traitement litiges (cible : -60%)

---

**Document créé le** : 2025-01-17
**Prochaine étape** : Synthèse globale audit et plan d'action consolidé
