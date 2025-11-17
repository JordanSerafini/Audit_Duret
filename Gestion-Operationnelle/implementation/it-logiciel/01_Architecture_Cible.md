# 🏗️ ARCHITECTURE CIBLE IT/LOGICIEL - Gestion Opérationnelle

**Service** : Gestion Opérationnelle
**Stack Technologique** : Odoo ERP + Power BI + RFID + Azure Cloud
**Modèle** : Cloud-first, Mobile-first, API-first

---

## 🎯 ARCHITECTURE GLOBALE

```
┌───────────────────────────────────────────────────────────────┐
│                    COUCHE UTILISATEURS                         │
├──────────────┬──────────────┬──────────────┬──────────────────┤
│ Web Desktop  │ Mobile iOS   │ Mobile       │ Power BI         │
│ (Odoo)       │ (Odoo App)   │ Android      │ (Dashboards)     │
│              │              │ (Odoo App)   │                  │
└──────┬───────┴──────┬───────┴──────┬───────┴────────┬─────────┘
       │              │              │                │
       │ HTTPS/TLS 1.3│ HTTPS/TLS 1.3│ HTTPS/TLS 1.3 │
       │ OAuth 2.0 + JWT                              │
       ▼              ▼              ▼                ▼
┌───────────────────────────────────────────────────────────────┐
│              COUCHE APPLICATIVE (Azure Cloud EU)              │
├──────────────────────┬────────────────────────────────────────┤
│   ODOO ERP v17       │  Power BI Service + ML Models          │
│   (Community)        │  (Azure)                               │
│                      │                                        │
│ Modules :            │ Dashboards :                           │
│ - Sales (Affaires)   │ - KPI Direction                        │
│ - Purchase (Achats)  │ - KPI Sylvie (Ctrl Gestion)            │
│ - Inventory (Stocks) │ - KPI RA (RBAC)                        │
│ - Accounting         │ - KPI Chefs Chantier (RBAC)            │
│ - Project            │ - Prédictions ML                       │
│ - HR                 │                                        │
│ - CRM                │ ML Models :                            │
│                      │ - Projection CA (LSTM)                 │
│ Custom Apps :        │ - Anomalies (Isolation Forest)         │
│ - BE Tickets System  │ - Optimisation Planning                │
│ - RBAC Chantiers     │                                        │
└──────────────────────┴────────────────────────────────────────┘
       │                              │
       │ REST APIs                    │ DirectQuery
       ▼                              ▼
┌───────────────────────────────────────────────────────────────┐
│                   COUCHE DONNÉES (Azure)                      │
├──────────────────────┬────────────────────────────────────────┤
│ PostgreSQL 15        │ Azure SQL Database (Data Warehouse)    │
│ (Odoo DB)            │ + Azure Blob Storage (historiques)     │
│                      │                                        │
│ Tables :             │ Star Schema :                          │
│ - res_partner        │ - Fact_Affaires                        │
│ - sale_order         │ - Fact_Heures                          │
│ - purchase_order     │ - Fact_Achats                          │
│ - stock_quant        │ - Dim_Clients                          │
│ - account_move       │ - Dim_Produits                         │
│ - project_project    │ - Dim_Temps                            │
└──────────────────────┴────────────────────────────────────────┘
       │                              │
       │ ETL (Azure Data Factory)     │
       ▼                              ▼
┌───────────────────────────────────────────────────────────────┐
│               COUCHE INTÉGRATIONS                             │
├──────────────┬──────────────┬──────────────┬──────────────────┤
│ SAGE Compta  │ Lireco RFID  │ Linear       │ SendGrid Email   │
│ (API CSV)    │ (API REST)   │ (Tickets BE) │ (Notifs)         │
└──────────────┴──────────────┴──────────────┴──────────────────┘
```

---

## 🔧 STACK TECHNIQUE DÉTAILLÉ

### Backend : Odoo ERP v17 Community

**Choix** : Odoo Community (open-source) vs Enterprise
- ✅ **Open-source** :  licences (vs /user/mois Enterprise)
- ✅ **Communauté active** : 7M+ utilisateurs, modules riches
- ✅ **Customizable** : Python + XML (dev interne possible)
- ✅ **Modules BTP** : Project, Sales, Purchase, Inventory natifs
- ⚠️ **Support** : Communauté (vs support officiel Enterprise)

**Hébergement** : Azure Cloud EU (France)
- VM : Standard_D4s_v3 (4 vCPU, 16 GB RAM)
- PostgreSQL 15 : Managed (backup auto, HA)
- Stockage : Premium SSD 512 GB

**Modules Odoo utilisés** :
1. **Sales** : Gestion affaires, devis
2. **Purchase** : Achats, commandes fournisseurs
3. **Inventory** : Stocks, RFID intégration
4. **Accounting** : Compta analytique, marges
5. **Project** : Chantiers, tâches, planning
6. **HR** : RH (intégration basique)
7. **CRM** : Clients, opportunités

**Custom Apps développés** :
- `duret_be_tickets` : Système tickets BE (priorisation algo)
- `duret_rbac_chantiers` : RBAC chefs chantier (accès budget/marge leur chantier)
- `duret_rfid_integration` : Intégration Lireco RFID

---

### Frontend : Odoo Web + Mobile Apps

**Web** :
- Framework : Odoo Web (JS + OWL framework)
- Responsive : Bootstrap 5
- PWA : Progressive Web App (offline partiel)

**Mobile** :
- Odoo Mobile App (iOS + Android natif)
- Fonctionnalités offline :
  - Consultation affaires
  - Photos chantiers (upload différé)
  - Validation commandes
  - Scan QR Code stocks

---

### BI : Power BI Service (Azure)

**Dashboards** :
1. **KPI Direction** : CA, marges, trésorerie, projection ML
2. **KPI Sylvie** : Détails analytiques, écarts, ratios
3. **KPI RA** : Leurs affaires (RBAC RLS Row-Level Security)
4. **KPI Chefs Chantier** : Leur chantier (budget, consommé, reste à faire)

**Connexions** :
- DirectQuery : Azure SQL Database (temps réel)
- Import : Odoo PostgreSQL (refresh quotidien)

**Sécurité** :
- RLS (Row-Level Security) : Filtre données par utilisateur
- Azure AD SSO : Authentification unique

---

### RFID : Zebra FX9600 + Lireco

**Matériel** :
- Portiques RFID : Zebra FX9600 (2× portes dépôt Annecy + Albertville)
- Tags RFID : UHF Gen2 (coût 0,/tag, 5 000 tags)
- Douchettes : Zebra MC3300 (4× mobiles magasiniers)

**Intégration** :
- Lireco API REST : Auto-création ligne réception lors scan RFID
- Odoo Inventory : Synchronisation bidirectionnelle Lireco ↔ Odoo

---

### Système Tickets BE : Linear

**Choix** : Linear (vs Jira, Asana)
- ✅ UX moderne, rapide
- ✅ Priorisation automatique native
- ✅ Intégrations (mails, Slack, webhooks)
- ✅ Pricing : 8$/user/mois (4 users BE = 32$/mois = 384$/an)

**Algorithme priorisation** (custom Python webhook) :
```python
def calculate_priority_score(ticket):
    score = 0
    # Critère 1 : Direction
    if ticket.requester_role == "Direction":
        score += 50
    # Critère 2 : Deadline client
    if ticket.deadline_days <= 3:
        score += 30
    # Critère 3 : CA affaire
    score += min(ticket.ca_affaire / 50000 * 20, 20)
    # Critère 4 : Ancienneté demande
    score += min(ticket.days_waiting * 2, 20)
    # Critère 5 : Charge (favorise petites demandes si surcharge)
    if ticket.estimated_hours <= 2 and capacity_overload:
        score += 10
    return score
```

---

### ML : Azure ML + Python

**Models** :
1. **Projection CA 3 mois** : Prophet (Facebook) + LSTM (PyTorch)
2. **Détection anomalies budgets** : Isolation Forest (scikit-learn)
3. **Optimisation planning** : Algorithme glouton (OR-Tools Google)

**Infrastructure** :
- Azure ML Studio : Entraînement models
- Azure Functions : Inférence temps réel (serverless)
- Azure Blob : Stockage models (.pkl)

**Intégration Power BI** :
- Python scripts Power BI : Appels API Azure Functions
- Refresh : Quotidien (projections CA), temps réel (anomalies)

---

## 🔐 SÉCURITÉ & CONFORMITÉ

### Authentification

**OAuth 2.0 + JWT** :
- SSO Azure AD : Authentification unique (Odoo + Power BI)
- MFA disponible : Authentification 2 facteurs (optionnel)
- Session : 8h (renouvellement auto)

### Autorisation

**RBAC (8 rôles)** :
1. Admin (direction) : TOUT
2. Contrôleur Gestion (Sylvie) : TOUT lecture, KPI écriture
3. Responsable Affaire : SES affaires
4. Chef Chantier : SON chantier (lecture)
5. Technicien SAV : SES interventions
6. Magasinier : Stocks
7. Assistante : Clients, agenda
8. Lecture seule : Dashboards uniquement

**Audit Trail** :
- Logs Odoo : Toutes actions (create, write, delete)
- Rétention : 3 ans
- Recherche : Elasticsearch (indexation logs)

### Chiffrement

**En transit** : TLS 1.3
**Au repos** : AES-256
- PostgreSQL : Transparent Data Encryption (TDE)
- Azure Blob : Encryption at rest natif

### RGPD

- **Hébergement UE** : Azure France (Paris + Marseille)
- **DPA** : Data Processing Agreement Microsoft
- **Droit à l'oubli** : Anonymisation données clients (GDPR compliance)

---

## 📊 PERFORMANCE & SCALABILITÉ

### SLA Cibles

| Métrique | Cible | Actuel MDE |
|----------|-------|------------|
| **Uptime** | 99,9% (8h downtime/an) | ~95% (plantages fréquents) |
| **Latence écrans** | <2 sec | 10-30 sec |
| **API response time** | <500 ms | N/A |
| **Concurrent users** | 50 | 20 (max avant ralentissements) |

### Scalabilité

**Horizontale** :
- Azure App Service : Auto-scaling (CPU >70% → +1 VM)
- PostgreSQL : Read replicas (si >100 users)

**Verticale** :
- VM resize possible sans downtime (Azure)
- Stockage extensible (Premium SSD jusqu'à 32 TB)

---

## 💰 COÛTS MENSUELS (OPEX)

| Service | Coût/mois |
|---------|-----------|
| **Azure VM Odoo** (D4s_v3) |  |
| **PostgreSQL Managed** (4 vCores) |  |
| **Azure SQL DWH** (100 DTU) |  |
| **Power BI Pro** (30 licences) |  |
| **Linear** (4 users) |  |
| **Azure Blob Storage** (500 GB) |  |
| **Azure Functions** (ML inférence) |  |
| **Backup** (Azure Backup) |  |
| **Monitoring** (Azure Monitor) |  |
| **TOTAL OPEX** | **~/mois = /an** |

*Note* : Odoo Community =  licences (vs /user/mois Enterprise = /an économisés)

---

## 🔄 MIGRATIONS & INTÉGRATIONS

### Migration MDE → Odoo

**Données à migrer** :
- Clients : 2 500 (res_partner)
- Affaires : 1 800 (2 ans historique)
- Produits : 5 000 références (product_product)
- Fournisseurs : 450 (res_partner type=supplier)
- Stocks : 3 000 lignes (stock_quant)

**Stratégie** :
1. Export CSV MDE (scripts SQL)
2. Mapping MDE ↔ Odoo (Excel)
3. Scripts migration Python (Odoo API)
4. Tests environnement staging
5. Migration progressive (affaires nouvelles d'abord)

**Durée** : 3 mois (M11-M13)

### Intégrations

**SAGE Compta** :
- API : Export CSV quotidien (factures, paiements)
- Azure Logic Apps : Automatisation import Odoo

**Lireco RFID** :
- API REST : Webhooks réception stocks
- Odoo Inventory : Auto-création lignes

**Linear Tickets** :
- Webhooks : Notifications Odoo (création/clôture tickets)
- API : Consultation depuis Odoo

---

**Date création** : 2025-11-17
**Version** : v1.0
