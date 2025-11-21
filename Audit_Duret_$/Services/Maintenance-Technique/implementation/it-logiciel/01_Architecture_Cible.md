# 🏗️ ARCHITECTURE IT & LOGICIEL CIBLE - Maintenance Technique

**Entreprise** : Duret Électricité - Annecy
**Date** : Novembre 2025
**Service** : Maintenance Technique & SAV

---

## 📋 VUE D'ENSEMBLE

### Architecture 3-Tiers Cible

```
┌─────────────────────────────────────────────────────────────┐
│                  PRÉSENTATION (Front-End)                    │
│                                                              │
│  ┌──────────────────┐         ┌──────────────────────┐      │
│  │   APP MOBILE     │         │  PORTAIL CLIENT      │      │
│  │   Techniciens    │         │  Self-Service        │      │
│  │  (iOS/Android)   │         │  (Web Responsive)    │      │
│  │                  │         │                      │      │
│  │ • Rapport digit  │         │ • RDV en ligne 24/7  │      │
│  │ • Devis terrain  │         │ • Historique         │      │
│  │ • Signature élec │         │ • Documents          │      │
│  │ • Pointage GPS   │         │ • Suivi contrat      │      │
│  │ • Photos intég.  │         │ • Factures           │      │
│  │ • Mode offline   │         │                      │      │
│  └────────┬─────────┘         └─────────┬────────────┘      │
└───────────┼─────────────────────────────┼──────────────────┘
            │                             │
            │         API REST            │
            │         HTTPS/TLS 1.3       │
            │                             │
┌───────────┼─────────────────────────────┼──────────────────┐
│           │     LOGIQUE (Business)      │                   │
│           │                             │                   │
│  ┌────────▼─────────────────────────────▼────────────────┐  │
│  │          ERP/CRM TERRAIN (SaaS Cloud)                 │  │
│  │       (Praxedo / Synchroteam / FieldPro)              │  │
│  │                                                       │  │
│  │  ┌─────────────┐  ┌──────────────┐  ┌─────────────┐ │  │
│  │  │   CRM       │  │  Planning    │  │  Workflows  │ │  │
│  │  │  Clients    │  │  Intelligent │  │  Alertes    │ │  │
│  │  │  (300)      │  │  (Zoning)    │  │  Auto       │ │  │
│  │  └─────────────┘  └──────────────┘  └─────────────┘ │  │
│  │                                                       │  │
│  │  ┌─────────────┐  ┌──────────────┐  ┌─────────────┐ │  │
│  │  │  Contrats   │  │  Module      │  │  Analytics  │ │  │
│  │  │  Maintenance│  │  Devis       │  │  Dashboards │ │  │
│  │  │             │  │              │  │  KPI        │ │  │
│  │  └─────────────┘  └──────────────┘  └─────────────┘ │  │
│  └───────────────────────────────────────────────────────┘  │
└───────────┬──────────────────────────┬──────────────────────┘
            │                          │
            │     API / ETL            │
            │                          │
┌───────────┼──────────────────────────┼──────────────────────┐
│           │      DONNÉES (Data)      │                       │
│           │                          │                       │
│  ┌────────▼────────┐       ┌─────────▼─────────┐            │
│  │  Base ERP       │       │  Stockage Cloud   │            │
│  │  (PostgreSQL    │       │  (Azure Blob      │            │
│  │   ou MySQL)     │       │   Storage)        │            │
│  │                 │       │                   │            │
│  │ • Clients       │       │ • Photos interv.  │            │
│  │ • Contrats      │       │ • PDF rapports    │            │
│  │ • Interventions │       │ • Devis           │            │
│  │ • Planning      │       │ • Certificats     │            │
│  │ • Factures      │       │                   │            │
│  └─────────────────┘       └───────────────────┘            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  INTÉGRATIONS (Externe)                      │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │   GAO    │  │  SAGE    │  │   SMS    │  │  Email   │    │
│  │  (Consult│  │ Compta   │  │ Gateway  │  │ SendGrid │    │
│  │   ation) │  │ (Facture)│  │ (Twilio) │  │          │    │
│  └─────┬────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘    │
│        │            │             │             │           │
│        └────────────┴─────────────┴─────────────┘           │
│                        API REST                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 📱 COMPOSANTE 1 : App Mobile Techniciens

### Plateforme & Technologies

**Option A : App Native ERP** (Recommandé si Praxedo/Synchroteam)
- App fournie par éditeur ERP
- **Avantages** :
  - ✅ Intégration native 100%
  - ✅ Maintenance éditeur
  - ✅ Mises à jour régulières
  - ✅ Support inclus
- **Inconvénients** :
  - ❌ Personnalisation limitée
  - ❌ Dépendance éditeur

**Option B : App Custom React Native** (Si développement spécifique)
- Développement sur-mesure
- **Stack** :
  - React Native (iOS/Android)
  - Redux (state management)
  - Axios (API calls)
  - SQLite (offline storage)
- **Avantages** :
  - ✅ 100% personnalisable
  - ✅ UX sur-mesure
- **Inconvénients** :
  - ❌ Coût développement (+40K€)
  - ❌ Maintenance à prévoir (+10K€/an)

**👉 RECOMMANDATION : Option A (App native ERP)**

---

### Fonctionnalités Essentielles

#### 1. Rapport Intervention Digitalisé (vs CERFA papier)

**Écrans** :
1. **Liste interventions jour**
   - Vue calendrier (agenda technicien)
   - Filtre par statut (À faire, En cours, Terminée)
   - Adresse client + téléphone
   - Type intervention

2. **Détail intervention**
   - Info client (nom, adresse, tel, contrat)
   - Prestation commandée
   - Historique interventions précédentes
   - Pièces détachées nécessaires

3. **Formulaire rapport**
   - 10 templates pré-remplis :
     - Entretien annuel (Bronze/Argent/Or)
     - Dépannage urgence
     - Mise en service
     - Contrôle conformité
     - Remplacement matériel
     - Maintenance préventive
     - Intervention garantie
     - Diagnostic panne
     - Installation nouveau
     - Autre (personnalisé)
   - Champs :
     - Heure arrivée/départ (pointage GPS auto)
     - Description travaux réalisés (textarea + dictée vocale)
     - Pièces remplacées (sélection catalogue)
     - Observations (textarea)
     - État installation (checkbox : Conforme/Non conforme)
     - Préconisations (textarea)
   - Photos avant/après (max 10)
     - Géolocalisation automatique
     - Date/heure automatique
     - Stockage cloud centralisé
   - Signature client (tactile)

4. **Validation & Envoi**
   - Prévisualisation PDF
   - Envoi email client automatique (2 min après)
   - Synchronisation ERP (temps réel si online, différée si offline)

**Temps total** : **3 min** (vs 12 min CERFA papier)

---

#### 2. Pointage GPS Arrivée/Départ

**Fonctionnement** :
- GPS automatique au démarrage/fin intervention
- Enregistrement :
  - Heure exacte (HH:MM:SS)
  - Géolocalisation (lat/long)
  - Adresse détectée (Google Maps API)
- Calcul automatique :
  - Temps intervention réel
  - Dépassement vs temps prévu
  - **Refacturation automatique** si > 30 min dépassement

**Alertes** :
- Notification technicien si oubli pointage départ
- Alerte Clothilde si dépassement > 1h (validation refacturation)

**ROI** : 30K€/an (refacturation heures supplémentaires)

---

#### 3. Module Devis Terrain

**Écrans** :
1. **Création devis**
   - Sélection client (existant ou nouveau)
   - Photos situation (avant travaux)
   - Sélection prestations (catalogue 50 références)
     - Tableau électrique (4 modules/6 modules/8 modules)
     - Remplacement matériel
     - Installation nouveau
     - Extension
     - Mise aux normes
   - Calcul tarif automatique (grille Bronze/Argent/Or)
   - Ajout lignes personnalisées (description + montant)

2. **Prévisualisation & Envoi**
   - PDF professionnel (logo Duret)
   - Photos intégrées
   - Conditions générales
   - Délai exécution
   - Envoi email client immédiat
   - Lien signature électronique

**Temps total** : **3 min** (vs impossible actuellement)

**ROI** : 45K€/an (50 devis × 30% × 3K€)

---

#### 4. Photos Avant/Après Intégrées

**Fonctionnalités** :
- Appareil photo natif smartphone
- Métadonnées automatiques :
  - Date/heure (EXIF)
  - Géolocalisation (GPS)
  - Client associé
  - Intervention associée
- Stockage cloud centralisé (Azure Blob Storage)
- Consultation historique (app + web back-office)
- Recherche par client/date/type intervention

**ROI** : 11K€/an (litiges évités + temps recherche)

---

#### 5. Signature Électronique Client

**Fonctionnement** :
- Écran tactile (doigt ou stylet)
- Capture signature bitmap (PNG)
- Intégration PDF rapport
- Valeur légale (horodatage + géolocalisation)
- Stockage sécurisé

**Conformité** :
- eIDAS (Règlement européen signature électronique)
- Conservation 10 ans

---

#### 6. Mode Offline (Zones Blanches)

**Architecture** :
- Base de données locale SQLite
- Synchronisation bidirectionnelle :
  - Téléchargement interventions jour (matin)
  - Upload rapports créés (soir ou wifi disponible)
- Files d'attente :
  - Rapports en attente envoi
  - Photos en attente upload
- Notification sync réussie/échouée

**Limite offline** : 7 jours max (puis sync obligatoire)

---

## 🌐 COMPOSANTE 2 : Portail Client Self-Service

### Plateforme & Technologies

**Option A : Portail Intégré ERP** (Recommandé)
- Fourni par éditeur (Praxedo/Synchroteam)
- Branding personnalisable (logo, couleurs)
- **Avantages** :
  - ✅ Intégration native
  - ✅ Maintenance incluse
  - ✅ Responsive (mobile/tablette/desktop)

**Option B : Portail Custom**
- **Stack** :
  - Frontend : React.js + Tailwind CSS
  - Backend : Node.js + Express
  - DB : PostgreSQL
  - Auth : OAuth 2.0 + JWT
- **Coût** : +20K€ développement

**👉 RECOMMANDATION : Option A (Portail intégré ERP)**

---

### Fonctionnalités

#### 1. Prise RDV en Ligne 24/7

**Parcours utilisateur** :
1. **Login** : Email + mot de passe (ou magic link)
2. **Sélection type intervention** :
   - Entretien annuel (contractuel)
   - Dépannage urgence
   - Autre (sur devis)
3. **Calendrier intelligent** :
   - Affichage créneaux disponibles (zone géographique client)
   - Optimisation tournées (suggestions "créneau recommandé")
   - Filtre par technicien (si préférence)
4. **Confirmation** :
   - Récap RDV (date, heure, type, technicien)
   - Email confirmation automatique
   - SMS rappel J-2
   - Ajout calendrier client (Google/Outlook/Apple)

**Validation** :
- Clothilde notifiée (alerte)
- Validation manuelle ou auto (selon paramétrage)
- Modification/annulation client (jusqu'à J-1)

**ROI** : 35K€/an (temps Clothilde économisé + satisfaction client)

---

#### 2. Historique Interventions

**Affichage** :
- Liste toutes interventions (triée par date desc)
- Filtre par année/type
- Pour chaque intervention :
  - Date/heure
  - Technicien
  - Type
  - Description travaux
  - Pièces remplacées
  - Photos avant/après
  - Téléchargement PDF rapport

**Avantage client** :
- Traçabilité complète
- Preuves interventions (garantie, litiges)

---

#### 3. Suivi Contrat Maintenance

**Informations** :
- Type contrat (Bronze/Argent/Or)
- Date signature
- Date échéance
- Nombre interventions incluses/an
- Interventions réalisées/restantes
- Prochaine intervention due (date)
- Montant contrat annuel

**Actions** :
- Télécharger contrat PDF
- Demander modification contrat (formulaire)
- Renouveler en ligne (J-30 échéance)

**ROI renouvellement** : 30K€/an (15 contrats supplémentaires × 2K€)

---

#### 4. Documents & Factures

**Disponibles** :
- Contrat maintenance PDF
- Rapports interventions (tous)
- Devis envoyés
- Factures (si intégration SAGE)
- Certificats conformité
- Certificats mise en service

**Téléchargement** : PDF (stockage 10 ans)

---

#### 5. Profil Client

**Informations modifiables** :
- Coordonnées (email, téléphone, adresse)
- Préférences contact (email/SMS/téléphone)
- Créneau préféré (matin/après-midi)
- Technicien préféré (si affinité)
- Mot de passe

**Notifications** :
- Email : Confirmation RDV, rappel J-2, rapport envoyé, facture
- SMS : Rappel J-2, technicien en route (J-0 1h avant)

---

## 🔗 COMPOSANTE 3 : ERP/CRM Terrain (Cœur Système)

### Sélection Solution

#### Comparaison 3 Solutions du Marché

| Critère | Praxedo | Synchroteam | FieldPro |
|---------|---------|-------------|----------|
| **Focus** | Grands comptes | PME électricité | SAV technique |
| **Tarif setup** | 15K€ | 10K€ | 20K€ |
| **Tarif/an (10 lic)** | 18K€ | 12K€ | 20K€ |
| **App mobile** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Portail client** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Zoning IA** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Intégration SAGE** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Support FR** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Clients FR** | Enedis, Engie | 5000+ PME | Schneider Electric |
| **Note globale** | 9/10 | 8/10 | 8/10 |

**👉 RECOMMANDATION** :
- **Budget OK (105K€)** → **Praxedo** (leader, IA avancée)
- **Budget serré** → **Synchroteam** (meilleur rapport qualité/prix PME)

---

### Modules Essentiels

#### Module CRM Clients

**Données stockées** :
- Identité (nom, prénom, société)
- Coordonnées (adresse, tel, email)
- Type client (Particulier/Professionnel)
- Segment (Bronze/Argent/Or)
- Historique complet :
  - Interventions (toutes)
  - Devis (tous)
  - Factures (toutes)
  - Réclamations
  - Satisfaction (notes/enquêtes)

**Vue 360°** : Tout l'historique client centralisé

---

#### Module Planning Intelligent

**Fonctions** :
- Calendrier techniciens (vue jour/semaine/mois)
- Affectation interventions (drag & drop)
- Optimisation automatique :
  - Zoning géographique (regroupement zones)
  - Compétences techniciens (match intervention/profil)
  - Urgence (priorité)
- Alertes :
  - Surcharge technicien (> 8h/jour)
  - Intervention due non planifiée
  - Retard (intervention passée)

**Algorithme** : Travelling Salesman Problem (TSP) pour routing optimal

**ROI** : 15K€/an (-20% km parcourus)

---

#### Module Workflows Automatisés

**Workflow 1 : Alerte Fin Contrat**
- Déclencheur : J-60 échéance contrat
- Actions :
  - J-60 : Email client "Votre contrat arrive à échéance le DD/MM/YYYY"
  - J-30 : Email relance + lien renouvellement en ligne
  - J-7 : Alerte Clothilde → Appel client si pas renouvelé

**Workflow 2 : Interventions Automatiques (Contrats)**
- Déclencheur : Signature contrat
- Actions :
  - Calcul dates interventions (fréquence contrat)
  - Création RDV automatiques (statut "À planifier")
  - Email client confirmation planning annuel

**Workflow 3 : Enquête Satisfaction**
- Déclencheur : Intervention terminée (rapport signé)
- Actions :
  - J+2 : Email enquête (5 questions)
  - J+7 : Relance si pas répondu
  - Si note < 3/5 : Alerte Clothilde (action corrective)

**ROI** : 50K€/an (30K€ renouvellements + 20K€ rétention)

---

## 🔐 SÉCURITÉ & RGPD

### Sécurité Technique

**Transit** :
- TLS 1.3 (HTTPS)
- Certificat SSL/TLS valide
- API REST authentifiée (OAuth 2.0 + JWT)

**Repos** :
- AES-256 (chiffrement base de données)
- Stockage cloud sécurisé (Azure EU)
- Sauvegarde quotidienne (rétention 30 jours)

**Authentification** :
- MFA (Multi-Factor Authentication) disponible
- Politiques mot de passe fort
- Session timeout 30 min inactivité

**Logs** :
- Audit trail (qui a fait quoi quand)
- Conservation logs 1 an

---

### Conformité RGPD

**Données personnelles traitées** :
- Clients : Nom, prénom, adresse, tel, email
- Finalité : Exécution contrat maintenance
- Base légale : Contrat + consentement

**Droits clients** :
- Droit d'accès (export données via portail)
- Droit rectification (modification profil)
- Droit suppression (suppression compte)
- Droit portabilité (export CSV/JSON)

**Durée conservation** :
- Données clients actifs : Durée contrat + 5 ans
- Données clients inactifs : Suppression après 3 ans inactivité
- Rapports interventions : 10 ans (obligation légale)

**DPO** : À désigner (si > 250 salariés ou traitement sensible)

---

## 🔌 INTÉGRATIONS

### Intégration 1 : GAO (Consultation)

**Objectif** : Consultation données GAO actuel (historique)

**Méthode** :
- **Idéal** : API REST (si disponible)
- **Plan B** : Import CSV ponctuel (1×)
- **Plan C** : Remplacement GAO par ERP Terrain

**Données** : Historique interventions anciennes (< 2025)

---

### Intégration 2 : SAGE Comptabilité

**Objectif** : Facturation automatique

**Flux** :
- Rapport intervention signé (ERP) → Facture auto (SAGE)
- Heures supplémentaires → Ligne facturation additionnelle
- Export comptable mensuel (écritures)

**Méthode** :
- API SAGE (si disponible)
- Ou connecteur ETL (Talend, Pentaho)

**ROI** : 10K€/an (temps comptabilité économisé)

---

### Intégration 3 : SMS Gateway (Twilio)

**Objectif** : Notifications clients par SMS

**Usage** :
- Rappel RDV J-2
- Technicien en route (J-0 1h avant)
- Urgences (dépannage)

**Coût** : 0.05€/SMS × 1,200 SMS/an = **60€/an**

---

### Intégration 4 : Email (SendGrid)

**Objectif** : Emails transactionnels

**Usage** :
- Confirmation RDV
- Envoi rapport intervention (PDF)
- Enquête satisfaction
- Alertes fin contrat

**Coût** : Gratuit (< 10,000 emails/mois)

---

## 💻 INFRASTRUCTURE TECHNIQUE

### Hébergement

**Cloud SaaS** : Azure EU (France Central ou West Europe)

**Avantages** :
- ✅ RGPD compliant (données EU)
- ✅ Haute disponibilité (SLA 99.9%)
- ✅ Sauvegarde automatique
- ✅ Scalabilité (si croissance)
- ✅ Maintenance éditeur

**Pas d'infrastructure on-premise** (réduction coûts IT)

---

### Capacité & Performance

**Volume** :
- 300 clients
- 600 interventions/an
- 7 techniciens
- 50 devis/an
- 1,200 emails/an
- 1,200 SMS/an

**Performance requise** :
- Temps réponse API : < 500ms
- Upload photo : < 3s (réseau 4G)
- Génération PDF : < 2s
- Sync offline → online : < 10s

---

## 📊 COÛTS DÉTAILLÉS

### CAPEX (Investissement Initial)

| Poste | Coût |
|-------|------|
| Setup ERP Terrain (Synchroteam) | 10K€ |
| Configuration + paramétrage | 5K€ |
| Import données (300 clients) | 2K€ |
| Formation (Clothilde + 7 techniciens) | 3K€ |
| Intégration GAO/SAGE | 10K€ |
| **TOTAL CAPEX** | **30K€** |

---

### OPEX (Coûts Récurrents/an)

| Poste | Coût/an |
|-------|---------|
| Licences ERP (10 utilisateurs) | 12K€ |
| Maintenance & support éditeur | Inclus |
| Stockage cloud (photos/PDF) | 500€ |
| SMS (Twilio - 1,200 SMS) | 60€ |
| Email (SendGrid) | Gratuit |
| **TOTAL OPEX** | **12.5K€/an** |

---

**📧 Contact** : Direction Technique - Duret Électricité
**🎯 Objectif** : CERFA = 0, App mobile 100%, Portail client LIVE
**💰 Investissement** : 30K€ (Phase 1) + 12.5K€/an (licences)
**🔐 Sécurité** : TLS 1.3, AES-256, RGPD compliant
