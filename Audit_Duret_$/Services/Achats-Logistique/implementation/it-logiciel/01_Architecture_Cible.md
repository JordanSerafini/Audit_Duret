# 🏗️ ARCHITECTURE IT CIBLE - Achats & Logistique

> Volet 1/2 : Infrastructure IT & Logiciel
> Architecture technique proposée

---

## 🎯 Objectifs Architecture

### Problèmes à résoudre
- ❌ 50% commandes incomplètes → ✅ > 95% complets
- ❌ Processus 100% manuel → ✅ 80% automatisé
- ❌ Multiples outils déconnectés → ✅ Plateforme unifiée
- ❌ Pas de traçabilité → ✅ Traçabilité complète
- ❌ Pas de mobile → ✅ Mobile-first

---

## 🏛️ Architecture Générale

### Vue d'ensemble

```
┌─────────────────────────────────────────────────────────┐
│                    UTILISATEURS                          │
├──────────────┬──────────────┬──────────────┬───────────┤
│ Chantiers    │ Bureau       │ Dépôt        │ Direction │
│ (Mobile)     │ (Desktop)    │ (Scan)       │ (BI)      │
└──────┬───────┴──────┬───────┴──────┬───────┴─────┬─────┘
       │              │              │             │
       └──────────────┴──────────────┴─────────────┘
                      │
         ┌────────────▼─────────────┐
         │   PLATEFORME CENTRALE    │
         │  (ERP / E-Procurement)   │
         └────────────┬─────────────┘
                      │
       ┌──────────────┼──────────────┐
       │              │              │
       ▼              ▼              ▼
  ┌────────┐    ┌─────────┐    ┌─────────┐
  │ Sage   │    │Rexel/   │    │ Data    │
  │ MDE    │    │Sonepar  │    │ Lake    │
  │(Legacy)│    │(APIs)   │    │(BI/ML)  │
  └────────┘    └─────────┘    └─────────┘
```

---

## 🔧 Composants Techniques

### 1. Couche Présentation

**Applications Utilisateurs**

```
┌─────────────────────────────────────┐
│ Mobile App (React Native / Flutter)│
│ - Chefs de chantier                 │
│ - Scan codes-barres                 │
│ - Commandes express                 │
│ - Mode offline                      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Web App (React / Vue.js)            │
│ - Gestionnaires achats              │
│ - Responsables affaires             │
│ - Dashboard temps réel              │
│ - Gestion catalogues                │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Terminal Dépôt (PWA / App)          │
│ - Magasiniers                       │
│ - Réception marchandises            │
│ - Scan entrées/sorties              │
│ - Inventaires                       │
└─────────────────────────────────────┘
```

### 2. Couche Application

**Services Métier**

```
┌────────────────┬────────────────┬────────────────┐
│ E-Procurement  │ Workflow       │ Traçabilité    │
│                │                │                │
│ - Catalogue    │ - Validation   │ - Historique   │
│ - Panier       │ - Approbation  │ - Audit trail  │
│ - Commande     │ - Notification │ - Conformité   │
└────────────────┴────────────────┴────────────────┘

┌────────────────┬────────────────┬────────────────┐
│ Gestion Stock  │ Fournisseurs   │ 3-way Matching │
│                │                │                │
│ - Inventaire   │ - Catalogues   │ - Cmd/BL/Fact  │
│ - Mouvements   │ - Tarifs       │ - Rapprochemt  │
│ - Seuils       │ - EDI/API      │ - Validation   │
└────────────────┴────────────────┴────────────────┘
```

### 3. Couche Données

**Bases de Données**

```
┌─────────────────────────────────────┐
│ PostgreSQL / MySQL                  │
│ - Articles & catalogues             │
│ - Commandes & workflows             │
│ - Stock & mouvements                │
│ - Fournisseurs & tarifs             │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Redis / Memcached                   │
│ - Cache temps réel                  │
│ - Sessions utilisateurs             │
│ - Files d'attente                   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Data Lake (pour BI/ML)              │
│ - Historique complet                │
│ - Logs & événements                 │
│ - Analytics                         │
└─────────────────────────────────────┘
```

### 4. Couche Intégration

**APIs & Connecteurs**

```
┌──────────────┬──────────────┬──────────────┐
│ Sage MDE     │ Rexel/Sonepar│ Comptabilité │
│              │              │              │
│ - Sync stock │ - Catalogues │ - Factures   │
│ - Historique │ - Prix       │ - Écritures  │
│ - Articles   │ - Commandes  │ - Exports    │
└──────────────┴──────────────┴──────────────┘

┌──────────────┬──────────────┬──────────────┐
│ Email/SMS    │ Documents    │ GED          │
│              │              │              │
│ - Notifs     │ - BL/Factures│ - Stockage   │
│ - Alertes    │ - PDF        │ - Archive    │
└──────────────┴──────────────┴──────────────┘
```

---

## 📱 Applications par Utilisateur

### Chefs de Chantier (Marc)

**Mobile App**
- Scan produit → Ajout panier
- Commande en 3 clics
- Tracking livraison temps réel
- Historique personnel
- Mode offline

### Gestionnaires Achats (Sylvie)

**Web Dashboard**
- Validation commandes
- Gestion catalogues
- Suivi fournisseurs
- Gestion reliquats
- Reporting

### Magasiniers (Éric)

**Terminal Dépôt**
- Réception marchandises
- Scan entrées/sorties
- Inventaires
- Emplacements
- Alertes

### Responsables Affaires (Julien)

**Web Dashboard**
- Validation budgets
- Suivi coûts par affaire
- Analyse consommation
- Prévisions

### Direction (Christine)

**Executive Dashboard**
- KPIs temps réel
- Performance fournisseurs
- Analyses tendances
- Alertes stratégiques

---

## 🔄 Workflows Digitaux

### Workflow 1: Commande Standard

```
[Chef Chantier]
    → Saisie besoin (mobile)
    → Sélection articles catalogue
    → Soumission
         ↓
[Responsable Affaires]
    → Validation budget
    → Approbation/Rejet
         ↓
[Gestionnaire Achats]
    → Vérification stock
    → Choix fournisseur
    → Passage commande API
         ↓
[Fournisseur]
    → Confirmation
    → Préparation
    → Livraison
         ↓
[Magasinier]
    → Réception scan
    → Contrôle quantité
    → Validation
         ↓
[Chef Chantier]
    → Notification dispo
    → Retrait matériel
```

### Workflow 2: Commande Urgence

```
[Chef Chantier]
    → Saisie besoin URGENT
    → Flag priorité haute
         ↓
[Gestionnaire Achats]
    → Notification immédiate
    → Validation express
    → Commande directe
         ↓
[Livraison Express]
    → < 4h si stock local
```

---

## 🔐 Sécurité & Gouvernance

### Authentification
- SSO (Single Sign-On)
- MFA (Multi-Factor Auth) optionnel
- Gestion rôles & permissions
- Audit trail complet

### Autorisations

```
┌─────────────────┬─────┬─────┬─────┬─────┬─────┐
│ Fonction        │Marc │Sylvie│Éric│Julien│Chri.│
├─────────────────┼─────┼─────┼─────┼─────┼─────┤
│ Créer commande  │ ✅  │ ✅  │ ❌  │ ✅  │ ❌  │
│ Valider commande│ ❌  │ ✅  │ ❌  │ ✅  │ ✅  │
│ Gérer catalogue │ ❌  │ ✅  │ ❌  │ ❌  │ ❌  │
│ Réception       │ ❌  │ ❌  │ ✅  │ ❌  │ ❌  │
│ Voir reporting  │ ⚠️  │ ✅  │ ⚠️  │ ✅  │ ✅  │
└─────────────────┴─────┴─────┴─────┴─────┴─────┘
✅ = Accès complet | ⚠️ = Accès limité | ❌ = Pas d'accès
```

### Gouvernance Données
- Qui peut créer une référence article?
- Qui peut modifier un prix?
- Qui peut archiver un produit?
- Workflow validation changements

---

## 🔌 Intégrations Externes

### APIs Fournisseurs

**Rexel**
- Catalogue produits
- Prix temps réel
- Disponibilité stock
- Passage commandes
- Suivi livraisons

**Sonepar**
- Catalogue produits
- Tarifs négociés
- Stock temps réel
- Commandes EDI
- Factures électroniques

**Autres Fournisseurs**
- Import/Export Excel
- EDI si disponible
- Sinon: emails structurés

### Sage MDE (Legacy)

**Synchronisation**
- Articles → Import initial
- Stock → Sync bidirectionnelle
- Historique → Archive
- Phase de transition: 6-12 mois

---

## 📊 Architecture Technique

### Infrastructure

**Option Cloud (Recommandé)**
```
- Hébergement: AWS / Azure / GCP
- Base données: PostgreSQL managed
- Cache: Redis managed
- Files: S3 / Blob Storage
- CDN: CloudFront / CloudFlare
```

**Option On-Premise (Si requis)**
```
- Serveurs: Linux (Ubuntu/Debian)
- Base données: PostgreSQL HA
- Réplication: Multi-sites
- Backup: Automatique quotidien
```

### Scalabilité
- Architecture microservices
- Load balancing
- Auto-scaling
- Cache distribué

### Disponibilité
- Uptime: 99.5%+
- Backup: Quotidien
- Disaster recovery: 24h
- Support: 24/7

---

## 🚀 Stack Technologique Proposée

### Frontend
```
- Mobile: React Native / Flutter
- Web: React / Vue.js
- UI: Material-UI / Ant Design
- PWA: Service Workers
```

### Backend
```
- API: Node.js / Python (FastAPI)
- Framework: Express / Django
- Auth: JWT / OAuth2
- Queue: RabbitMQ / Redis
```

### Données
```
- SGBD: PostgreSQL
- Cache: Redis
- Search: Elasticsearch
- Analytics: ClickHouse
```

### DevOps
```
- CI/CD: GitLab / GitHub Actions
- Containers: Docker
- Orchestration: Kubernetes (si scale)
- Monitoring: Prometheus + Grafana
```

---

## 📈 Phases d'Implémentation

### Phase 1: Fondations (M1-M3)
- ✅ Setup infrastructure
- ✅ Base de données propre
- ✅ Catalogue articles unifié
- ✅ Workflow digital simple
- ✅ App mobile MVP

### Phase 2: Intégrations (M4-M6)
- ✅ APIs Rexel/Sonepar
- ✅ Sync Sage MDE
- ✅ 3-way matching
- ✅ Notifications automatiques

### Phase 3: Optimisation (M7-M12)
- ✅ Features avancées
- ✅ Gestion multi-dépôts
- ✅ Inventaires optimisés
- ✅ Reporting complet

---

## ⚠️ Prérequis & Contraintes

### Prérequis Techniques
- Réseau stable (chantiers mobiles)
- Accès Internet (APIs fournisseurs)
- Matériel scan (codes-barres)
- Infrastructure serveur

### Contraintes Connues
- Migration données Sage MDE
- Formation utilisateurs
- Changement habitudes
- Coexistence legacy (transition)

---

## 🎯 Indicateurs de Succès

### KPIs Techniques
- Uptime système > 99%
- Temps réponse < 2s
- Taux erreurs < 0.1%
- Disponibilité mobile offline

### KPIs Métier
- Taux adoption > 90%
- Commandes complètes > 95%
- Temps processus < 2h
- Satisfaction utilisateurs > 4/5

---

**Note:** Architecture générale, à affiner selon solution choisie (ERP vs plateforme custom)
