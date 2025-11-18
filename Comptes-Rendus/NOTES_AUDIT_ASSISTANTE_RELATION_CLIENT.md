# 📋 Notes d'Audit - Assistante Relation Client

**Date** : Notes prises lors de l'audit Duret Électricité
**Périmètre** : Service client, accueil téléphonique et administratif

---

## 1. 📞 **Missions Quotidiennes**

### Gestion Communication Client

- **Accueil téléphonique** : Prise d'appels clients
- **Traitement emails** : ~50 mails/jour (demandes clients, modifications)
- **Suivi clients** : Actuellement sur papier (post-its)
- **Pas de système de ticketing** ni suivi structuré

### Gestion Planning & Interventions

- **Équipe petits travaux** : Mise en agenda Outlook
- **Consultation dernière minute** : Par appel téléphonique
- **Planning partagé** : Communication avec techniciens par téléphone
- **Bons d'intervention** : Envoyés via téléphone

### Gestion Administrative

- **Création de chantiers** dans l'ERP
- **Classement/archivage** : Sur Excel
- **Relances clients** : Tout individuel, pas d'automatisation
- **Délai de traitement** : Environ 1-2 jours

### Questionnaire Satisfaction Client

- Système mis en place
- Relances peu fréquentes

---

## 2. 🛠️ **Outils Actuellement Utilisés**

### Logiciels

- **MDE** (ERP)
- **SAGE** (Devis)
- **Outlook** (Agenda, emails)
- **Excel** (Archivage, suivi)

### Communication

- **Techniciens** : Téléphone
- **Autres services** : Emails

---

## 3. ⚠️ **Points de Souffrance**

### A. Manque de Traçabilité

**Problèmes actuels** :
- Pas de suivi des appels clients
- Pas de système de tickets
- Saisies multiples des mêmes données
- Informations dispersées (post-its, Excel, emails)

**Impact** :

- Perte d'informations
- Difficultés à retrouver l'historique
- Risque d'oublis

### B. Relances et Rappels Non Automatisés

**Problèmes actuels** :

- Délais de rappel non suivis
- Relances manuelles chronophages
- Pas de système d'alertes

**Impact** :
- Service après-vente insuffisant
- Clients suivis tous les jours OK, mais pas les autres

### C. Gestion des Devis
**Problèmes actuels** :
- Création devis sur SAGE → Export vers dossier partagé
- Manipulation manuelle de fichiers
- Double stockage (ERP + dossier partagé)

**Impact** :
- Processus lourd
- Risque d'incohérences

### D. Gestion Client Multi-Bases
**Problème majeur** :
- Création nouveau client → **2 bases de données différentes**
- Pas de synchronisation automatique

**Impact** :
- Double saisie
- Risque de doublons et erreurs

### E. Volume Emails et Demandes Non Structuré
**Problèmes actuels** :
- 50 mails/jour : clients, demandes internes, renseignements
- **Rien d'automatisé** pour filtrer, classifier ou dispatcher
- Traitement manuel chronophage

### F. Planning Gaëtan (Technicien Entretien)
**Problème spécifique** :
- Prise de RDV pour entretiens actuellement :
  - Tableau Excel clients
  - Emails clients en attente
  - Ressaisie manuelle
- Processus à **préserver mais automatiser**

**Besoin** :
- Automatisation : Téléphone → Planning Gaëtan
- Centralisation informations pour gagner du temps

---

## 4. 💡 **Besoins Exprimés**

### A. CRM avec Traçabilité Complète
**Fonctionnalités souhaitées** :
- **Suivi appels** : Historique conversations, dates, sujets
- **Gestion tickets** : Remplacement des post-its
- **Centralisation données client** : Vue 360° par client
- **Historique demandes** : Traçabilité complète

### B. Système de Relances Automatiques
**Fonctionnalités souhaitées** :
- **Rappels automatiques** avec délais configurables
- **Pop-ups alertes** pour relances à faire
- **Résumé journalier** : Pas besoin d'email journalier, mais dashboard
- **Mise à jour statut automatisée** sur les devis

### C. Gestion Devis Intégrée
**Fonctionnalités souhaitées** :
- **Nomenclature ouvrages** : Préremplissage devis
- **Transformation devis → Commande** côté achats
- **Consolidation débours** dans le devis directement
- **Élimination double saisie**

### D. Suivi Demandes Techniciens
**Besoin spécifique** :
- Technicien dit : "Cliente demande devis sur X choses"
- **Workflow de remontée** : Demande → Création devis → Suivi → Validation

### E. Planning Centralisé et Collaboratif
**Fonctionnalités souhaitées** :
- **Planning partagé** avec techniciens
- **Affectation chantier** via app mobile éventuellement
- **Disponibilité ressources** visible en temps réel

### F. Accès Distance et Mode Hors Ligne
**Besoins terrain** :
- **Accès webserveur** : Se connecter à l'outil à distance
- **Mode hors ligne** pour interventions
- **Synchronisation automatique** au retour connexion

### G. Gestion Stock et Disponibilité
**Problèmes actuels** :
- Pas de visibilité sur inventaire
- Fiabilité stock faible
- Coût matériel non suivi

**Besoin** :
- **Visibilité stock temps réel**
- **Alertes rupture**
- **Traçabilité coûts matériels**

---

## 5. 🎯 **Pain Points Classés par Priorité**

### Pain Points Critiques (⚠️ Priorité 1)
1. **Double base de données clients** : Risque erreurs + double saisie systématique
2. **Pas de traçabilité appels/demandes** : Perte d'informations critiques
3. **Relances manuelles chronophages** : Service après-vente insuffisant
4. **Volume emails non structuré** : 50 mails/jour sans filtrage ni automatisation

### Pain Points Importants (🔶 Priorité 2)
1. **Planning Gaëtan non automatisé** : Ressaisie manuelle Excel → Agenda
2. **Gestion devis fragmentée** : SAGE → Export → Dossier partagé
3. **Transformation devis → Commande lourde** : Consolidation débours manuelle
4. **Pas de visibilité stock** : Impossible de renseigner client sur disponibilité

### Pain Points Structurants (🔷 Priorité 3)
1. **Workflow suivi demandes techniciens** : Pas de processus formalisé
2. **Nomenclature ouvrages absente** : Pas de préremplissage devis
3. **Accès distance limité** : Webserveur mais pas optimisé mobilité
4. **Questionnaire satisfaction non systématisé** : Relances trop rares

---

## 6. 💡 **Opportunités de Digitalisation**

### Quick Wins (0-3 mois)
- **CRM léger** avec ticketing et suivi appels
- **Système alertes/rappels** automatiques
- **Unification base clients** : Une seule source de vérité
- **Formulaires web** pour demandes clients standardisées

### Projets Structurants (3-6 mois)
- **Planning collaboratif** intégré avec techniciens
- **Workflow demandes techniciens** → Devis automatisés
- **Dashboard satisfaction client** avec relances automatiques
- **Intégration email** → Système tickets automatique

### Projets Transformants (6-12 mois)
- **Portail client** : Accès self-service, suivi demandes, historique
- **IA classification emails** : Dispatch automatique selon type demande
- **Automatisation devis simples** : Génération auto selon catalogue
- **Chatbot première ligne** : Réponses automatiques questions fréquentes

---

## 7. 📌 **Actions Recommandées**

### Court Terme (Mois 1-3)
1. ✅ **Unifier bases clients** : Migration vers source unique
2. ✅ **Implémenter CRM simple** : Suivi appels + tickets
3. ✅ **Automatiser relances** : Rappels configurables
4. ✅ **Centraliser planning** : Outil partagé équipe

### Moyen Terme (Mois 4-9)
1. 🔍 **Workflow devis** : De la demande à la facturation
2. 🔍 **Intégration stock** : Visibilité temps réel
3. 🔍 **App mobile techniciens** : Bons intervention digitaux
4. 🔍 **Satisfaction client** : Automatisation questionnaires

### Long Terme (Mois 10-18)
1. 🚀 **Portail client self-service**
2. 🚀 **IA pour emails** : Classification et dispatch
3. 🚀 **Génération devis automatique** : Catalogue produits
4. 🚀 **Analytics satisfaction** : Prédiction risque churn

---

## 8. 🔑 **Synthèse**

### Forces Actuelles
- Proximité client et réactivité humaine
- Questionnaire satisfaction déjà en place
- Organisation équipe petits travaux rodée

### Faiblesses Principales
- **Absence de traçabilité** : Post-its, appels non loggés
- **Double saisie systématique** : 2 bases clients, Excel + ERP
- **Pas d'automatisation** : Relances, emails, planning

### ROI Attendu (Post-Digitalisation)
- **Temps gagné** : -40% sur tâches administratives
- **Satisfaction client** : +30% via meilleure réactivité
- **Erreurs** : -70% via suppression double saisie
- **Traçabilité** : 100% demandes suivies vs ~30% actuellement

---

**Document créé le** : 2025-01-17
**Prochaine étape** : Intégration avec audits autres services (Techniciens, Chantiers, Achats)
