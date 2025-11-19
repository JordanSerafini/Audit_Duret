# 🏗️ ARCHITECTURE CIBLE IT - Service Client Digital

> Architecture technique détaillée de la solution

---

## 🎯 Vue d'Ensemble

```
┌─────────────────────────────────────────────────────────────────┐
│                    ARCHITECTURE CIBLE 2026                      │
│              Service Client Digital - Duret Électricité         │
└─────────────────────────────────────────────────────────────────┘

┌────────────┐       ┌────────────┐       ┌────────────┐
│  CLIENTS   │       │   CLAIRE   │       │  TECHNICIEN│
│            │       │            │       │            │
│ 📱 Portal  │◄─────►│ 💻 HubSpot │◄─────►│ 📱 App     │
│ 🌐 Web     │       │ 📞 CTI     │       │  Mobile    │
│ 💬 Chatbot │       │ 📊 Dashboard       │            │
└─────┬──────┘       └─────┬──────┘       └─────┬──────┘
      │                    │                     │
      │                    │                     │
      └────────────────────┼─────────────────────┘
                           │
                  ┌────────▼────────┐
                  │                 │
                  │   HUBSPOT CRM   │
                  │  (Cloud SaaS)   │
                  │                 │
                  │  • Tickets      │
                  │  • Contacts     │
                  │  • Workflows    │
                  │  • Analytics    │
                  │                 │
                  └────────┬────────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
         ┌────▼────┐  ┌────▼────┐  ┌────▼────┐
         │  SAGE   │  │Téléphonie│  │ Email  │
         │         │  │   CTI    │  │Outlook │
         │ ✅ Sync │  │ ✅ CTI   │  │ ✅ Sync│
         └─────────┘  └──────────┘  └────────┘
```

---

## 🧩 COMPOSANTES TECHNIQUES

### 1. HUBSPOT CRM (Cœur du Système)

**Type :** SaaS Cloud
**Version :** Professional (évolutif vers Enterprise)
**Hébergement :** Data centers HubSpot (UE - RGPD compliant)

**Modules Utilisés :**
- **Service Hub** : Ticketing, base de connaissances
- **Marketing Hub** : Emails, workflows automatisés
- **Sales Hub** : Pipeline, contacts
- **CMS Hub** : Portail client
- **Operations Hub** : Sync, automatisations

**Stack Technique :**
- Frontend : React.js (natif HubSpot)
- Backend : API REST + GraphQL
- Database : PostgreSQL managée
- Cache : Redis
- Queue : Message broker interne

**APIs Exposées :**
- REST API v3 (CRUD contacts, tickets, workflows)
- GraphQL API (queries complexes)
- Webhooks (événements temps réel)
- OAuth 2.0 (authentification)

**Licences :**
- 2 users Professional : 1.1K€/an
- Stockage : Illimité
- Contacts : 10K inclus (extensible)

---

### 2. INTÉGRATION TÉLÉPHONIE (CTI)

**Solution Recommandée :** RingCentral ou CloudTalk

**Fonctions CTI :**
```
┌────────────────────────────────────────────────┐
│  Appel Entrant                                 │
├────────────────────────────────────────────────┤
│  1. Détection n° appelant                      │
│  2. Query HubSpot API (recherche contact)      │
│  3. Remontée fiche client automatique          │
│  4. Création ticket si nouveau numéro          │
│  5. Affichage historique (appels, tickets)     │
│  6. Enregistrement appel (optionnel)           │
│  7. Mise à jour automatique statut contact     │
└────────────────────────────────────────────────┘
```

**Stack Technique :**
- Softphone : Application desktop/web
- Connecteur HubSpot : Plugin CTI officiel
- API : WebRTC + REST
- Enregistrements : Stockés cloud (RGPD)

**Coût :**
- Setup : 12K€ (connecteur + configuration)
- Run : 15€/user/mois × 3 users = 540€/an

---

### 3. SYNCHRONISATION SAGE ↔ HUBSPOT

**Architecture :**
```
┌──────────┐          ┌──────────┐          ┌──────────┐
│   SAGE   │◄────────►│   ETL    │◄────────►│ HubSpot  │
│          │          │ Connector│          │          │
│ On-prem  │          │          │          │  Cloud   │
└──────────┘          └──────────┘          └──────────┘
     │                      │                      │
     │                      │                      │
  ODBC/API         Middleware Custom         REST API
```

**Méthodes de Synchronisation :**

**Option A : Connecteur Zapier/Make (Recommandé court terme)**
- ✅ Rapide à déployer (1-2 semaines)
- ✅ Pas de développement
- ⚠️ Limité aux opérations basiques
- 💰 Coût : 600€/an

**Option B : ETL Custom (Recommandé moyen terme)**
- ✅ Flexibilité totale
- ✅ Sync bidirectionnelle
- ✅ Transformation données complexes
- 💰 Coût : 20K€ développement

**Données Synchronisées :**
- Clients (nom, adresse, téléphone, email)
- Devis (statut, montant, date)
- Factures (historique)
- Interventions (SAV)

**Fréquence Sync :**
- Temps réel (webhooks) : clients, devis critiques
- Quotidien (batch 2h du matin) : historique, factures

**Coût :**
- ETL custom : 20K€ setup
- Maintenance : 3K€/an

---

### 4. APP MOBILE TECHNICIEN

**Platform :** React Native (iOS + Android)

**Architecture :**
```
┌─────────────────────────────────────────────┐
│          APP MOBILE TECHNICIEN              │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────┐  ┌──────────┐  ┌───────────┐  │
│  │Bon Inter│  │   Devis  │  │  Photos   │  │
│  │vention  │  │  Terrain │  │Géolocalisé│  │
│  └─────────┘  └──────────┘  └───────────┘  │
│                                             │
│  ┌─────────┐  ┌──────────┐  ┌───────────┐  │
│  │Signature│  │ Pointage │  │ Planning  │  │
│  │  e-sign │  │  Heures  │  │   RDV     │  │
│  └─────────┘  └──────────┘  └───────────┘  │
│                                             │
│           📶 Mode Offline                   │
│        (Sync quand réseau)                  │
└─────────────────────────────────────────────┘
           │
           │ REST API + GraphQL
           ▼
    ┌─────────────┐
    │  Backend    │
    │   API       │
    │             │
    │ Node.js +   │
    │ Express     │
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │  HubSpot    │
    │    CRM      │
    └─────────────┘
```

**Stack Technique :**
- **Frontend :** React Native 0.72+
- **State Management :** Redux Toolkit
- **Offline Storage :** SQLite + Redux Persist
- **Maps :** Google Maps API
- **Signature :** react-native-signature-canvas
- **Camera :** react-native-image-picker
- **Backend API :** Node.js + Express
- **Database :** MongoDB (données temporaires offline)

**Fonctions Clés :**
1. **Bon Intervention Digital**
   - Formulaire pré-rempli (données client)
   - Photos avant/après
   - Signature électronique
   - Génération PDF automatique

2. **Devis Terrain**
   - Catalogue produits offline
   - Calcul automatique
   - Génération PDF
   - Envoi client immédiat

3. **Pointage**
   - Heure arrivée/départ géolocalisée
   - Calcul automatique heures
   - Export vers paie

4. **Photos Géolocalisées**
   - Date/heure/lieu automatique
   - Upload cloud automatique
   - Lien intervention

**Coût :**
- Développement : 35K€
- Stores (Apple + Google) : 200€/an
- Backend hosting : 50€/mois = 600€/an
- Maintenance : 5K€/an

---

### 5. PORTAIL CLIENT

**Technology Stack :**
- **Frontend :** React.js + Next.js
- **Backend :** HubSpot CMS Hub ou custom Node.js
- **Styling :** Tailwind CSS
- **Auth :** OAuth 2.0 + JWT

**Fonctions :**
```
┌──────────────────────────────────────────────┐
│         PORTAIL CLIENT WEB                   │
├──────────────────────────────────────────────┤
│                                              │
│  🗓️ PRISE DE RDV EN LIGNE                    │
│  • Consultation créneaux disponibles         │
│  • Réservation 1-clic                        │
│  • Confirmation email + SMS auto             │
│                                              │
│  📄 DOCUMENTS                                │
│  • Devis (consultation + signature en ligne) │
│  • Factures (téléchargement PDF)             │
│  • Rapports interventions                    │
│                                              │
│  📊 SUIVI INTERVENTIONS                      │
│  • En cours (statut temps réel)              │
│  • Historique complet                        │
│  • Photos avant/après                        │
│                                              │
│  💬 MESSAGERIE                               │
│  • Demande de devis                          │
│  • Questions SAV                             │
│  • Créneaux spéciaux                         │
│                                              │
│  📝 SATISFACTION                             │
│  • Questionnaire post-intervention           │
│  • Notation technicien                       │
└──────────────────────────────────────────────┘
```

**Coût :**
- Natif HubSpot CMS : Inclus dans licence Pro
- Ou custom : 15K€ développement

---

### 6. CHATBOT IA (Phase 3)

**Platform :** HubSpot Chatbot + OpenAI API

**Architecture :**
```
Client sur site web
       │
       ▼
┌──────────────┐
│   Chatbot    │
│   Widget     │
└──────┬───────┘
       │
       ▼
┌──────────────┐      ┌──────────────┐
│  HubSpot     │◄────►│  OpenAI API  │
│  Chatbot     │      │  (GPT-4)     │
└──────┬───────┘      └──────────────┘
       │
       ▼
Si besoin humain
       │
       ▼
┌──────────────┐
│  Création    │
│   Ticket     │
│   HubSpot    │
└──────────────┘
```

**Fonctions :**
- Réponses questions fréquentes (FAQ)
- Prise de RDV guidée
- Création ticket si nécessaire
- Escalade vers humain si complexe
- Disponibilité 24/7

**Coût :**
- HubSpot Chatbot : Inclus Pro
- OpenAI API : ~100€/mois = 1.2K€/an
- Configuration : 15K€

---

### 7. ANALYTICS & ML (Phase 3)

**Stack BI :**
- **Power BI** ou **HubSpot Analytics**
- Dashboards temps réel
- KPIs automatisés

**Modèles ML :**
1. **Prévision Volume Appels**
   - Algorithme : ARIMA + LSTM
   - Input : Historique appels, saisonnalité
   - Output : Prévision 7-30 jours
   - ROI : Optimisation planning Claire

2. **Risque Churn Client**
   - Algorithme : Random Forest
   - Input : Fréquence appels, satisfaction, délai interventions
   - Output : Score risque 0-100%
   - ROI : Actions préventives

3. **Optimisation Planning Techniciens**
   - Algorithme : Genetic Algorithm
   - Input : RDV, distances, durées estimées
   - Output : Planning optimisé (min km)
   - ROI : -20% temps déplacement

**Stack ML :**
- **Python** : scikit-learn, TensorFlow
- **Déploiement** : Docker + Kubernetes
- **API** : FastAPI
- **Monitoring** : MLflow

**Coût :**
- Développement 3 modèles : 20K€
- Hosting ML : 100€/mois = 1.2K€/an

---

## 🔐 SÉCURITÉ & RGPD

### Authentification
- **HubSpot :** OAuth 2.0 + MFA
- **Portail Client :** JWT + session expiration 1h
- **App Mobile :** Biométrie (Face ID / Touch ID)

### Données
- **Chiffrement transit :** TLS 1.3
- **Chiffrement repos :** AES-256
- **Backup :** Quotidien, rétention 90j
- **RGPD :** Hébergement UE, droit oubli automatisé

### Conformité
- ✅ RGPD (HubSpot certifié)
- ✅ ISO 27001 (HubSpot)
- ✅ SOC 2 Type II (HubSpot)

---

## 🚀 DÉPLOIEMENT

### Environnements

```
┌────────────────────────────────────────┐
│  DEV     │  TEST    │  STAGING │ PROD  │
├────────────────────────────────────────┤
│  HubSpot │  HubSpot │  HubSpot │HubSpot│
│  Sandbox │  Sandbox │  Sandbox │ Prod  │
│          │          │          │       │
│  Tests   │  UAT     │  Pré-prod│ Live  │
│  unitair │  fonctio │  complète│       │
│          │  nnels   │          │       │
└────────────────────────────────────────┘
```

### CI/CD

**Pour App Mobile & Backend API :**
- **Source :** GitLab ou GitHub
- **CI :** GitHub Actions
- **CD :** Automated deployment
- **Tests :** Jest + Cypress
- **Monitoring :** Sentry

### Monitoring

- **Uptime :** Pingdom (99.9% SLA)
- **Performance :** New Relic
- **Errors :** Sentry
- **Logs :** CloudWatch ou Datadog

---

## 💰 RÉCAPITULATIF COÛTS

| Composante | Setup | Run/an |
|------------|-------|--------|
| **HubSpot CRM Pro** | 25K€ | 1.1K€ |
| **CTI (Téléphonie)** | 12K€ | 540€ |
| **Sync SAGE** | 20K€ | 3K€ |
| **App Mobile** | 35K€ | 5.6K€ |
| **Portail Client** | Inclus | - |
| **Chatbot IA** | 15K€ | 1.2K€ |
| **ML (3 modèles)** | 20K€ | 1.2K€ |
| **Formation** | 10K€ | - |
| **Contingence 10%** | 14K€ | - |
| **TOTAL** | **151K€** | **12.6K€/an** |

---

**🎯 Architecture évolutive et scalable**
**🔐 Sécurité & RGPD compliant**
**☁️ Cloud-first (SaaS)**
