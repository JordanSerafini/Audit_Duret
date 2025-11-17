# 🏗️ ARCHITECTURE IT CIBLE - Gestion Chantiers

> Volet 1/2 : Infrastructure IT & Logiciel
> Architecture technique proposée

---

## 🎯 Objectifs Architecture

### Problèmes à résoudre
- ❌ Remontée info WhatsApp/Oral → ✅ Workflow structuré digital
- ❌ Aucun outil métier terrain → ✅ App mobile complète
- ❌ Photos dispersées téléphones → ✅ Centralisation cloud auto
- ❌ Rapports manuels → ✅ Génération automatique PDF
- ❌ Pas d'accès infos chantier → ✅ Dashboard temps réel

---

## 🏛️ Architecture Générale

### Vue d'ensemble

```
┌─────────────────────────────────────────────────────────┐
│                    UTILISATEURS                          │
├──────────────┬──────────────┬──────────────┬───────────┤
│ Chefs        │ Responsables │ Bureau       │ Direction │
│ Chantier     │ Affaires     │ Études       │ (BI)      │
│ (Mobile)     │ (Web/Mobile) │ (Desktop)    │ (Dashboard│
└──────┬───────┴──────┬───────┴──────┬───────┴─────┬─────┘
       │              │              │             │
       └──────────────┴──────────────┴─────────────┘
                      │
         ┌────────────▼─────────────┐
         │   PLATEFORME CHANTIER    │
         │  (Cloud Native)          │
         │                          │
         │  • Gestion chantiers     │
         │  • Photos géolocalisées  │
         │  • Rapports automatiques │
         │  • Communication         │
         │  • Plans & documents     │
         └────────────┬─────────────┘
                      │
       ┌──────────────┼──────────────┐
       │              │              │
       ▼              ▼              ▼
  ┌────────┐    ┌─────────┐    ┌─────────┐
  │  ERP   │    │ Storage │    │ Mobile  │
  │ (Sync) │    │  Cloud  │    │ Backend │
  │        │    │ (S3/GCS)│    │  API    │
  └────────┘    └─────────┘    └─────────┘
```

---

## 🔧 Composants Techniques

### 1. Couche Présentation

**Applications Utilisateurs**

```
┌─────────────────────────────────────┐
│ App Mobile Chef Chantier            │
│ (React Native - iOS/Android)        │
│                                     │
│ • Photos auto-upload cloud          │
│ • Plans avec annotations            │
│ • Rapports intervention             │
│ • Commandes petit matériel          │
│ • Messagerie chantier               │
│ • Incidents & problèmes             │
│ • Mode offline complet              │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Web Dashboard Responsable Affaires  │
│ (React / Vue.js)                    │
│                                     │
│ • Vue 360° tous chantiers           │
│ • Validation incidents              │
│ • Suivi budgets temps réel          │
│ • Planning équipes                  │
│ • Documents chantier                │
│ • Analytics & KPIs                  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Interface Bureau d'Études           │
│ (Web App)                           │
│                                     │
│ • Réception demandes terrain        │
│ • Traitement questions techniques   │
│ • Validation plans                  │
│ • Annotations partagées             │
│ • Workflow priorités                │
└─────────────────────────────────────┘
```

### 2. Couche Application

**Services Métier**

```
┌────────────────┬────────────────┬────────────────┐
│ Gestion Photos │ Rapports       │ Communication  │
│                │                │                │
│ • Upload auto  │ • Templates    │ • Chat chantier│
│ • Géoloc       │ • Génération   │ • Notifications│
│ • Métadonnées  │ • PDF/Email    │ • Fil discussion│
│ • Indexation   │ • Signature    │ • Traçabilité  │
└────────────────┴────────────────┴────────────────┘

┌────────────────┬────────────────┬────────────────┐
│ Gestion Plans  │ Workflow       │ Dashboard      │
│                │ Incidents      │ Temps Réel     │
│ • Versions     │ • Création     │ • Budget       │
│ • Annotations  │ • Routing      │ • Avancement   │
│ • Partage      │ • Priorisation │ • Équipe       │
│ • Recherche    │ • Suivi statut │ • Alertes      │
└────────────────┴────────────────┴────────────────┘
```

### 3. Couche Données

**Bases de Données**

```
┌─────────────────────────────────────┐
│ PostgreSQL (Base Principale)        │
│                                     │
│ • Chantiers & affaires              │
│ • Équipes & affectations            │
│ • Incidents & problèmes             │
│ • Rapports & documents              │
│ • Historique & audit trail          │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ S3 / Google Cloud Storage           │
│                                     │
│ • Photos géolocalisées              │
│ • Plans (toutes versions)           │
│ • Rapports PDF                      │
│ • Documents chantier                │
│ • Backup automatique                │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Redis Cache                         │
│                                     │
│ • Sessions utilisateurs             │
│ • Cache API                         │
│ • Queue messages temps réel         │
│ • Données offline sync              │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ SQLite (Local Mobile)               │
│                                     │
│ • Mode offline                      │
│ • Sync bidirectionnelle             │
│ • Photos en attente upload          │
│ • Formulaires brouillon             │
└─────────────────────────────────────┘
```

### 4. Couche Intégration

**APIs & Connecteurs**

```
┌──────────────┬──────────────┬──────────────┐
│ ERP Existant │ Email/SMS    │ Cartographie │
│              │              │              │
│ • Sync       │ • Notifs     │ • Google Maps│
│   chantiers  │   incidents  │ • Géoloc     │
│ • Budgets    │ • Alertes    │ • Routing    │
│ • Équipes    │ • Rapports   │ • Distance   │
└──────────────┴──────────────┴──────────────┘

┌──────────────┬──────────────┬──────────────┐
│ Signature    │ GED          │ Analytics    │
│ Électronique │              │              │
│ • DocuSign   │ • Stockage   │ • Power BI   │
│ • Adobe Sign │ • Archive    │ • Tableau    │
│ • Validation │ • Indexation │ • KPIs       │
└──────────────┴──────────────┴──────────────┘
```

---

## 📱 Applications par Utilisateur

### Chefs de Chantier (10-15 personnes)

**App Mobile - Fonctions Principales**

```
┌─────────────────────────────────────┐
│ 📸 PHOTOS GÉOLOCALISÉES             │
│ • Prise photo directe app           │
│ • Upload automatique cloud          │
│ • Organisation par zone/date        │
│ • Métadonnées auto (GPS, timestamp) │
│ • Recherche photos par chantier     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 📄 RAPPORTS INTERVENTION            │
│ • Templates par type intervention   │
│ • Préremplissage auto (client, etc.)│
│ • Intégration photos avant/après    │
│ • Génération PDF en 1 clic          │
│ • Envoi auto client + bureau        │
│ • Signature électronique            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 📋 PLANS & DOCUMENTS                │
│ • Visualisation plans                │
│ • Annotations tactiles              │
│ • Zoom/mesures                      │
│ • Accès toutes versions             │
│ • Mode offline                      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 🛒 COMMANDES PETIT MATÉRIEL         │
│ • Catalogue produits                │
│ • Scan code-barres                  │
│ • Demande rapide                    │
│ • Workflow validation               │
│ • Suivi livraisons                  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 💬 MESSAGERIE CHANTIER              │
│ • Chat par chantier                 │
│ • Fil de discussion traçable        │
│ • Notifications push                │
│ • Pièces jointes (photos, docs)     │
│ • Historique complet                │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ ⚠️ INCIDENTS & PROBLÈMES            │
│ • Formulaires structurés :          │
│   - Incidents sécurité              │
│   - Problèmes techniques            │
│   - Demandes matériel               │
│   - Questions BE/Resp. affaire      │
│ • Photos jointes                    │
│ • Géolocalisation                   │
│ • Routing automatique               │
│ • Suivi statut temps réel           │
└─────────────────────────────────────┘
```

### Responsables Affaires (4 personnes)

**Web Dashboard + Mobile**

```
┌─────────────────────────────────────┐
│ 🏗️ VUE 360° CHANTIERS               │
│ • Liste tous chantiers               │
│ • Statut temps réel                 │
│ • Budget vs réalisé                 │
│ • Planning & jalons                 │
│ • Équipe affectée                   │
│ • Dernières activités               │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 📊 SUIVI FINANCIER                  │
│ • Dépenses par chantier             │
│ • Commandes en cours                │
│ • Heures consommées                 │
│ • Prévisions vs budget              │
│ • Alertes dépassements              │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ ✅ VALIDATION WORKFLOW              │
│ • Incidents à traiter               │
│ • Demandes matériel                 │
│ • Questions techniques              │
│ • Priorisation                      │
│ • Délégation                        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 📁 HISTORIQUE & DOCUMENTS           │
│ • Tous rapports chantier            │
│ • Photos chronologiques             │
│ • Plans & versions                  │
│ • Échanges & décisions              │
│ • Timeline complète                 │
└─────────────────────────────────────┘
```

### Bureau d'Études

**Interface Web**

```
┌─────────────────────────────────────┐
│ 📥 FILE DEMANDES TERRAIN            │
│ • Priorisation automatique          │
│ • SLA par type demande              │
│ • Capacité équipe visible           │
│ • Affectation intelligente          │
│ • Suivi temps réponse               │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 📐 VALIDATION PLANS                 │
│ • Annotations collaboratives        │
│ • Historique versions               │
│ • Approbation workflow              │
│ • Notifications terrain             │
└─────────────────────────────────────┘
```

### Direction

**Executive Dashboard**

```
┌─────────────────────────────────────┐
│ 📈 KPIs TEMPS RÉEL                  │
│ • Nombre chantiers actifs           │
│ • Budget global vs réalisé          │
│ • Incidents ouverts/résolus         │
│ • Temps réponse moyen               │
│ • Satisfaction terrain              │
│ • Productivité chefs chantier       │
└─────────────────────────────────────┘
```

---

## 🔄 Workflows Digitaux

### Workflow 1: Rapport Intervention

```
[Chef Chantier sur site]
    → Ouvre app mobile
    → Sélectionne "Nouveau rapport"
    → Template auto-sélectionné (type intervention)
    → Infos client/chantier pré-remplies
         ↓
    → Prend photos avant travaux
    → Upload auto cloud (géoloc)
         ↓
    → Réalise intervention
         ↓
    → Prend photos après travaux
    → Upload auto cloud (géoloc)
         ↓
    → Complète formulaire intervention
    → Ajoute notes/observations
         ↓
    → Génération PDF automatique
    → Aperçu avant envoi
         ↓
    → Signature client sur tablette/mobile
         ↓
    → Envoi automatique :
      • Email client
      • Archivage serveur
      • Notification responsable affaire
         ↓
[Client]
    → Reçoit email avec PDF signé
    → Lien portail pour historique
```

### Workflow 2: Remontée Incident

```
[Chef Chantier détecte problème]
    → Ouvre app > "Signaler incident"
    → Sélectionne type :
      • Sécurité
      • Technique
      • Matériel
      • Question BE
         ↓
    → Formulaire adapté au type
    → Champs obligatoires selon gravité
         ↓
    → Prend photos problème
    → Géolocalisation automatique
    → Timestamp automatique
         ↓
    → Soumission
         ↓
[Système - Routing Automatique]
    → Analyse type + gravité
    → Route vers :
      • Sécurité → Direction IMMÉDIAT
      • Technique → BE (SLA 2h)
      • Matériel → Achats (SLA 4h)
      • Question → Resp. Affaire (SLA 1j)
         ↓
    → Notification push destinataire
    → Email si pas ouvert 15min
    → SMS si urgence
         ↓
[Destinataire]
    → Reçoit notification
    → Consulte incident (photos, contexte)
    → Traite ou délègue
    → Répond via app/web
         ↓
[Chef Chantier]
    → Notification réponse
    → Consulte solution
    → Clôture incident ou relance
         ↓
[Système]
    → Archivage historique
    → Analytics temps réponse
    → Amélioration continue
```

### Workflow 3: Commande Petit Matériel

```
[Chef Chantier besoin matériel]
    → App mobile > "Commander"
    → Recherche article ou scan code-barre
    → Sélection quantité
    → Ajout panier
         ↓
    → Validation panier
    → Sélection chantier (imputation)
         ↓
[Système]
    → Vérification budget chantier
    → Si > seuil → Validation Resp. Affaire
    → Si < seuil → Direct achats
         ↓
[Si validation requise]
    → Notification Resp. Affaire
    → Validation/Rejet avec commentaire
         ↓
[Gestionnaire Achats]
    → Réception demande validée
    → Vérification stock
    → Passage commande fournisseur
         ↓
[Fournisseur]
    → Confirmation + délai
         ↓
[Chef Chantier]
    → Notification :
      • Commande passée
      • Délai livraison estimé
      • Tracking si dispo
         ↓
[Livraison]
    → Notification arrivée matériel
    → Retrait dépôt ou livraison chantier
```

---

## 🔐 Sécurité & Gouvernance

### Authentification
- **SSO** : Integration avec AD/Azure AD si existant
- **MFA** : Optionnel pour accès web
- **Biométrie** : Face ID / Touch ID sur mobile
- **Session** : Expiration 8h (renouvellement auto si actif)

### Autorisations (RBAC)

```
┌─────────────────────┬─────────┬─────────┬─────────┬──────────┐
│ Fonction            │ Chef    │ Resp.   │ Bureau  │Direction │
│                     │Chantier │ Affaire │ Études  │          │
├─────────────────────┼─────────┼─────────┼─────────┼──────────┤
│ Créer rapport       │ ✅      │ ✅      │ ❌      │ ❌       │
│ Signaler incident   │ ✅      │ ✅      │ ❌      │ ❌       │
│ Upload photos       │ ✅      │ ✅      │ ✅      │ ❌       │
│ Commander matériel  │ ✅      │ ✅      │ ❌      │ ❌       │
│ Valider commande    │ ❌      │ ✅      │ ❌      │ ✅       │
│ Traiter incident    │ ❌      │ ✅      │ ✅      │ ✅       │
│ Voir budget         │ ⚠️ Son  │ ✅ Tous │ ❌      │ ✅ Tous  │
│                     │chantier │         │         │          │
│ Voir analytics      │ ⚠️      │ ✅      │ ⚠️      │ ✅       │
│ Modifier plans      │ ❌      │ ❌      │ ✅      │ ❌       │
│ Valider plans       │ ❌      │ ✅      │ ✅      │ ✅       │
└─────────────────────┴─────────┴─────────┴─────────┴──────────┘

✅ = Accès complet | ⚠️ = Accès limité | ❌ = Pas d'accès
```

### Gouvernance Données

**Photos**
- Qui peut voir : Équipe chantier + resp. affaire + direction
- Rétention : 10 ans (réglementaire BTP)
- Suppression : Impossible sauf archivage projet complet

**Rapports**
- Validation : Obligatoire signature client
- Modification : Impossible après signature (versioning)
- Archivage : Automatique + export comptabilité

**Incidents**
- Confidentialité : Selon gravité (sécurité = direction only)
- SLA : Définis par type
- Traçabilité : Complète (qui, quand, quoi)

---

## 🔌 Intégrations Externes

### ERP Existant

**Synchronisation Bidirectionnelle**

```
┌────────────────────────────────────────────┐
│ PLATEFORME CHANTIER ↔ ERP                  │
├────────────────────────────────────────────┤
│                                            │
│ De Plateforme → ERP :                      │
│ • Heures travaillées (pointage)            │
│ • Dépenses matériel (commandes)            │
│ • Rapports intervention (facturation)      │
│ • Photos (pièces jointes)                  │
│                                            │
│ De ERP → Plateforme :                      │
│ • Chantiers actifs & budgets               │
│ • Équipes affectées                        │
│ • Planning prévisionnel                    │
│ • Références clients                       │
│                                            │
│ Fréquence :                                │
│ • Temps réel via webhooks (priorité haute) │
│ • Sync batch 4x/jour (données masse)       │
└────────────────────────────────────────────┘
```

**Technologies**
- **API REST** : Si ERP moderne
- **ODBC/SQL** : Si legacy (Sage, MDE)
- **ETL** : Apache Airflow pour orchestration
- **Middleware** : Node.js custom ou Mulesoft

### Services Cloud

**Google Maps / Mapbox**
- Géolocalisation photos
- Calcul distances équipes
- Optimisation déplacements
- Coût : ~300€/mois

**Signature Électronique**
- **DocuSign** ou **Adobe Sign** ou **YouSign** (EU)
- Signature rapports clients
- Validation documents chantier
- Coût : 15€/user/mois

**Email/SMS**
- **SendGrid** : Envoi emails automatiques
- **Twilio** : SMS alertes urgentes
- Coût : ~200€/mois

---

## 📊 Architecture Technique Détaillée

### Infrastructure Cloud (Recommandé)

```
┌─────────────────────────────────────────────┐
│         CLOUD ARCHITECTURE (AWS/GCP)        │
├─────────────────────────────────────────────┤
│                                             │
│ ┌────────────┐  ┌────────────┐             │
│ │   Mobile   │  │    Web     │             │
│ │    Apps    │  │   Client   │             │
│ └──────┬─────┘  └──────┬─────┘             │
│        │                │                   │
│        └────────┬───────┘                   │
│                 │                           │
│        ┌────────▼────────┐                  │
│        │  CloudFront CDN │                  │
│        │  (Static Assets)│                  │
│        └────────┬─────────┘                 │
│                 │                           │
│        ┌────────▼────────┐                  │
│        │ Load Balancer   │                  │
│        │  (ALB/NLB)      │                  │
│        └────────┬─────────┘                 │
│                 │                           │
│        ┌────────▼────────────┐              │
│        │   API Gateway       │              │
│        │ (Auth + Routing)    │              │
│        └────────┬────────────┘              │
│                 │                           │
│     ┌───────────┼───────────┐               │
│     │           │           │               │
│ ┌───▼───┐  ┌───▼───┐  ┌───▼───┐            │
│ │Backend│  │Backend│  │Backend│            │
│ │Server │  │Server │  │Server │            │
│ │  #1   │  │  #2   │  │  #3   │            │
│ └───┬───┘  └───┬───┘  └───┬───┘            │
│     │          │          │                │
│     └──────────┼──────────┘                │
│                │                           │
│     ┌──────────┼──────────┐                │
│     │          │          │                │
│ ┌───▼────┐ ┌──▼───┐  ┌───▼────┐           │
│ │ RDS    │ │ S3   │  │ Redis  │           │
│ │Postgres│ │Bucket│  │ Cache  │           │
│ └────────┘ └──────┘  └────────┘           │
│                                            │
└────────────────────────────────────────────┘
```

**Composants AWS**
- **EC2** : Serveurs backend (Auto Scaling)
- **RDS PostgreSQL** : Base données (Multi-AZ)
- **S3** : Stockage photos/documents (Glacier archivage)
- **ElastiCache Redis** : Cache + queues
- **CloudFront** : CDN (images, assets)
- **Lambda** : Fonctions serverless (resize images, etc.)
- **SQS** : Files messages asynchrones
- **CloudWatch** : Monitoring + alertes

**Estimation Coûts Cloud (AWS)**
- Compute (EC2) : 300€/mois
- Database (RDS) : 200€/mois
- Storage (S3) : 100€/mois
- CDN (CloudFront) : 50€/mois
- Services divers : 150€/mois
- **Total** : ~800€/mois = 9.6K€/an

### Scalabilité

**Horizontal Scaling**
- Auto-scaling backend selon charge
- Load balancing multi-serveurs
- Database read replicas
- Cache distribué

**Vertical Scaling**
- Upgrade instances si nécessaire
- Optimisation requêtes SQL
- Indexation intelligente

**Capacité**
- **Utilisateurs** : 15 chefs + 10 resp. + 5 BE = 30 users
- **Chantiers** : ~100 actifs simultanés
- **Photos** : ~500/jour = 15K/mois
- **Stockage** : 100 Go/an (5 ans = 500 Go)

### Disponibilité

**SLA Cible : 99.5%**
- Uptime mensuel : 99.5% = 3.6h downtime max
- Maintenance planifiée : Dimanche 2-6h du matin

**Backup**
- **Base données** : Automatique quotidien (rétention 30j)
- **Photos** : Réplication multi-régions
- **Disaster recovery** : Restore < 4h

**Monitoring**
- Uptime : Pingdom (alertes 24/7)
- Performance : New Relic APM
- Erreurs : Sentry
- Logs : ELK Stack (Elasticsearch, Logstash, Kibana)

---

## 🚀 Stack Technologique Proposée

### Frontend Mobile

```yaml
Framework: React Native 0.73+
Language: TypeScript
State: Redux Toolkit + RTK Query
Navigation: React Navigation 6
UI: React Native Paper + Custom
Offline: Redux Persist + SQLite
Maps: react-native-maps (Google Maps)
Camera: react-native-image-picker
Signature: react-native-signature-canvas
Storage: AsyncStorage + SQLite
Push: Firebase Cloud Messaging (FCM)
```

### Frontend Web

```yaml
Framework: React 18 + Next.js 14
Language: TypeScript
State: Zustand ou Redux Toolkit
UI: Material-UI (MUI) ou Ant Design
Charts: Recharts ou Chart.js
Maps: Google Maps JavaScript API
Forms: React Hook Form + Zod validation
Tables: TanStack Table (react-table)
```

### Backend API

```yaml
Runtime: Node.js 20 LTS
Framework: Express.js ou Fastify
Language: TypeScript
ORM: Prisma ou TypeORM
Auth: Passport.js + JWT
Validation: Zod ou Joi
Upload: Multer + Sharp (resize images)
Queue: Bull (Redis-based)
Cron: node-cron
Logging: Winston + Morgan
Testing: Jest + Supertest
```

### Base de Données

```yaml
Primary: PostgreSQL 16
  - Tables: chantiers, users, photos, rapports, incidents
  - Extensions: PostGIS (géolocalisation)
  - Full-text search: pg_trgm

Cache: Redis 7
  - Sessions utilisateurs
  - Cache API responses
  - Job queues (Bull)
  - Pub/Sub temps réel

Local (Mobile): SQLite 3
  - Mode offline
  - Sync queue
```

### DevOps & Infrastructure

```yaml
CI/CD: GitHub Actions ou GitLab CI
Containers: Docker + Docker Compose
Registry: Docker Hub ou AWS ECR
Hosting: AWS ou Google Cloud Platform
CDN: CloudFront (AWS) ou Cloudflare
Monitoring:
  - Uptime: Pingdom
  - APM: New Relic ou Datadog
  - Errors: Sentry
  - Logs: CloudWatch + ELK
Version Control: Git + GitHub/GitLab
Documentation: Swagger (OpenAPI 3.0)
```

---

## 📈 Phases d'Implémentation

### Phase 1: MVP Core (Mois 1-3)

**Objectif** : App mobile fonctionnelle + backend basique

```
Sprint 1-2 (M1) : Infrastructure
✅ Setup cloud infrastructure (AWS/GCP)
✅ Database schema PostgreSQL
✅ Backend API basique (auth, chantiers)
✅ CI/CD pipeline

Sprint 3-4 (M1-M2) : App Mobile MVP
✅ Authentification mobile
✅ Liste chantiers
✅ Prise photos géolocalisées
✅ Upload cloud automatique
✅ Mode offline basique

Sprint 5-6 (M2-M3) : Rapports
✅ Templates rapports
✅ Génération PDF
✅ Signature électronique
✅ Envoi email automatique
✅ Tests utilisateurs (2-3 chefs pilotes)

Livrables Phase 1 :
• App mobile iOS + Android
• Backend API
• Stockage photos cloud
• Rapports PDF basiques
```

**Budget Phase 1** : 45K€

### Phase 2: Features Avancées (Mois 4-6)

**Objectif** : Workflow incidents + web dashboard

```
Sprint 7-8 (M4) : Workflow Incidents
✅ Formulaires incidents
✅ Routing automatique
✅ Notifications push
✅ SLA & priorisation

Sprint 9-10 (M5) : Commandes Matériel
✅ Catalogue produits
✅ Workflow validation
✅ Intégration achats

Sprint 11-12 (M6) : Web Dashboard
✅ Vue 360° chantiers (Resp. Affaires)
✅ Validation incidents (BE)
✅ KPIs temps réel
✅ Intégration ERP (sync chantiers, budgets)

Livrables Phase 2 :
• Workflow incidents complet
• Module commandes
• Dashboard web responsables
• Sync ERP bidirectionnelle
```

**Budget Phase 2** : 40K€

### Phase 3: Optimisation & IA (Mois 7-12)

**Objectif** : Analytics, optimisation, mode offline complet

```
Sprint 13-14 (M7-M8) : Gestion Plans
✅ Visualisation plans mobile
✅ Annotations collaboratives
✅ Gestion versions
✅ Recherche intelligente

Sprint 15-16 (M9) : Mode Offline Avancé
✅ Sync intelligente
✅ Résolution conflits
✅ Queue optimisée
✅ Tests terrain intensifs

Sprint 17-18 (M10-M11) : Analytics & IA
✅ Dashboard direction
✅ KPIs avancés
✅ Prédiction retards (ML)
✅ Suggestions optimisation

Sprint 19-20 (M12) : Polish & Performance
✅ Optimisation performances
✅ Tests charge
✅ Documentation complète
✅ Formation utilisateurs
✅ Déploiement général

Livrables Phase 3 :
• Gestion plans complète
• Mode offline robuste
• Analytics & IA
• Plateforme production-ready
```

**Budget Phase 3** : 35K€

---

## ⚠️ Prérequis & Contraintes

### Prérequis Techniques

**Infrastructure**
- ✅ Connexion Internet chantiers (4G/5G minimum)
- ✅ Smartphones équipe (iOS 13+ ou Android 10+)
- ✅ Budget cloud hosting (~800€/mois)
- ⚠️ VPN si accès ERP on-premise requis

**Données**
- ⚠️ Export données ERP existant (chantiers, budgets, équipes)
- ⚠️ Migration photos existantes si besoin
- ✅ Définition workflow incidents (SLA, routings)

**Organisationnel**
- ✅ Définition templates rapports (3-5 types)
- ✅ Catalogue produits petit matériel
- ✅ Matrice RBAC (qui voit quoi ?)

### Contraintes Connues

**Technique**
- Mode offline : Complexité sync bidirectionnelle
- Photos : Volume stockage important (compression obligatoire)
- ERP legacy : API limitées, nécessite ETL custom

**Humain**
- Adoption mobile : Formation terrain obligatoire
- Changement habitudes : WhatsApp → App structurée
- Multilinguisme : Si équipes non francophones

**Réglementaire**
- RGPD : Données personnelles (photos chantiers avec personnes)
- Archivage : Obligations légales BTP (10 ans)
- Signature électronique : Conformité eIDAS

---

## 🎯 Indicateurs de Succès

### KPIs Techniques

```
┌────────────────────────────┬──────────┬──────────┐
│ Métrique                   │ Objectif │ Mesure   │
├────────────────────────────┼──────────┼──────────┤
│ Uptime système             │ > 99.5%  │ Pingdom  │
│ Temps réponse API          │ < 300ms  │ New Relic│
│ Taux erreurs               │ < 0.5%   │ Sentry   │
│ Upload photo (4G)          │ < 10s    │ Custom   │
│ Génération PDF rapport     │ < 5s     │ Custom   │
│ Sync offline → cloud       │ < 1min   │ Custom   │
│ Disponibilité offline      │ 100%     │ Tests    │
└────────────────────────────┴──────────┴──────────┘
```

### KPIs Métier

```
┌────────────────────────────┬──────────┬──────────┐
│ Métrique                   │ Objectif │ Actuel   │
├────────────────────────────┼──────────┼──────────┤
│ Taux adoption app          │ > 90%    │ 0%       │
│ Photos centralisées/jour   │ 500      │ ~100     │
│ Rapports digitaux/mois     │ > 200    │ 0        │
│ Temps génération rapport   │ < 10min  │ 2h       │
│ Incidents traités < 24h    │ > 95%    │ ~60%     │
│ Temps réponse BE           │ < 2h     │ 1-2j     │
│ Satisfaction chefs         │ > 4/5    │ 2.5/5    │
│ Réduction appels bureau    │ -50%     │ Baseline │
└────────────────────────────┴──────────┴──────────┘
```

### KPIs Financiers

```
Gains Productivité :
• Temps rapports : -60% × 15 chefs × 2h/semaine = 1 800h/an
• Valeur horaire : 1 800h × 50€ = 90K€/an

• Réduction appels bureau : -40% × 10h/semaine = 400h/an
• Valeur : 400h × 40€ = 16K€/an

• Optimisation déplacements : -10% km × 15 chefs
• Économie : ~10K€/an (carburant)

ROI Total Estimé :
• Gains annuels : ~115K€/an
• Investissement : 120K€ (3 phases)
• Coûts run : 15K€/an

ROI : (115K€ - 15K€) / 120K€ = 83% / an
Retour investissement : ~15 mois
```

---

## 💰 RÉCAPITULATIF COÛTS

### Développement (One-time)

| Phase | Composante | Coût |
|-------|------------|------|
| **Phase 1** | Infrastructure + App mobile MVP | 45K€ |
| **Phase 2** | Workflows + Web dashboard | 40K€ |
| **Phase 3** | Analytics + Optimisation | 35K€ |
| | **Subtotal Développement** | **120K€** |

### Licences & Services (Annuel)

| Service | Coût/an |
|---------|---------|
| Cloud hosting (AWS/GCP) | 9.6K€ |
| Google Maps API | 3.6K€ |
| Signature électronique (DocuSign) | 2.1K€ |
| Email/SMS (SendGrid + Twilio) | 2.4K€ |
| Monitoring (New Relic + Sentry) | 1.8K€ |
| App Stores (Apple + Google) | 0.2K€ |
| Certificats SSL/Sécurité | 0.3K€ |
| **Total Licences** | **20K€/an** |

### Maintenance & Support (Annuel)

| Poste | Coût/an |
|-------|---------|
| Support technique niveau 3 | 15K€ |
| Évolutions mineures | 10K€ |
| Backups & sécurité | 3K€ |
| **Total Maintenance** | **28K€/an** |

### Budget Total

```
┌─────────────────────────────────┬──────────┐
│ INVESTISSEMENT INITIAL          │          │
├─────────────────────────────────┼──────────┤
│ Développement (3 phases)        │  120K€   │
│ Formation équipes               │   8K€    │
│ Migration données               │   5K€    │
│ Contingence 10%                 │  13K€    │
├─────────────────────────────────┼──────────┤
│ TOTAL SETUP                     │  146K€   │
└─────────────────────────────────┴──────────┘

┌─────────────────────────────────┬──────────┐
│ COÛTS RÉCURRENTS (par an)       │          │
├─────────────────────────────────┼──────────┤
│ Licences & Cloud                │   20K€   │
│ Maintenance & Support           │   28K€   │
├─────────────────────────────────┼──────────┤
│ TOTAL RUN                       │   48K€/an│
└─────────────────────────────────┴──────────┘

ROI :
• Gains annuels estimés : 115K€
• Coûts annuels : 48K€
• Bénéfice net : 67K€/an
• Break-even : 2.2 ans
```

---

## 📋 Checklist Démarrage Projet

### Avant Phase 1

- [ ] Validation budget 146K€ setup
- [ ] Choix cloud provider (AWS vs GCP vs Azure)
- [ ] Export données ERP (chantiers, équipes)
- [ ] Définition 3 templates rapports prioritaires
- [ ] Sélection 2-3 chefs pilotes
- [ ] Achat smartphones si nécessaire
- [ ] Compte Google Cloud Platform (Maps API)
- [ ] Compte signature électronique (DocuSign/YouSign)

### Pendant Phase 1

- [ ] Sprint reviews toutes les 2 semaines
- [ ] Tests terrain hebdomadaires (chefs pilotes)
- [ ] Feedback loops rapides
- [ ] Ajustements templates selon retours

### Avant Déploiement Général

- [ ] Formation 15 chefs chantier (1j)
- [ ] Documentation utilisateur
- [ ] Guide dépannage
- [ ] Hotline support 1 mois
- [ ] Communication interne (lancement)

---

**🎯 Architecture robuste, scalable et centrée utilisateur**
**📱 Mobile-first avec offline complet**
**☁️ Cloud-native pour performance et fiabilité**
**🔐 Sécurité et RGPD by design**
