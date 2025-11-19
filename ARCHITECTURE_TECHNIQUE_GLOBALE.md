# 🏗️ ARCHITECTURE TECHNIQUE GLOBALE : DURET ÉLECTRICITÉ

> **Date** : Novembre 2025  
> **Version** : 1.0  
> **Statut** : 📐 Blueprint Technique

---

## 🎯 VUE D'ENSEMBLE

Architecture technique complète pour la transformation digitale de Duret Électricité, couvrant **8 services** et **100+ utilisateurs**.

---

## 🔵 OPTION 1 : ARCHITECTURE ODOO-CENTRIC (Recommandée)

### Stack Technique

```
┌─────────────────────────────────────────────────────────────┐
│                   FRONT-END (Apps)                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📱 Mobile (iOS + Android)        💻 Web (Desktop)         │
│  ┌──────────────────────┐        ┌──────────────────────┐  │
│  │ Odoo Mobile App      │        │ Odoo Web Interface   │  │
│  │ - Offline-First      │        │ - React/Vue.js      │  │
│  │ - Field Service     │        │ - Responsive        │  │
│  │ - Pointage          │        │ - Multi-onglets     │  │
│  │ - Photos/Signature  │        │ - Dashboards        │  │
│  └──────────────────────┘        └──────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                           │
                           │ HTTPS/TLS 1.3, OAuth 2.0
                           ▼
┌─────────────────────────────────────────────────────────────┐
│              CŒUR DU SYSTÈME : ODOO ENTERPRISE              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📊 Modules Métiers                                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ • CRM & Helpdesk      (Service Client)               │  │
│  │ • Projet & Field      (Chantiers, Albertville)       │  │
│  │ • Achats & Inventaire (Achats-Logistique, RFID)      │  │
│  │ • Employés & Congés   (RH)                           │  │
│  │ • Planning & Temps    (Gestion Opérationnelle)       │  │
│  │ • FSM                 (Maintenance Technique)         │  │
│  │ • BI & Dashboards     (Direction)                    │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  🔧 Modules Custom Duret                                    │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ • duret_supplier_connector  (APIs Sonepar/Rexel)    │  │
│  │ • duret_rfid_inventory      (Intégration RFID)      │  │
│  │ • duret_sage_sync           (Sync bidirectionnel)   │  │
│  │ • duret_reports             (Rapports BTP custom)   │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  💾 Base de Données                                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ PostgreSQL 15+ (Master)                              │  │
│  │ - Réplication : 2 replicas (read-only)              │  │
│  │ - Backup : Quotidien (S3-compatible)                 │  │
│  │ - Rétention : 30 jours                               │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                  │         │         │         │
        ┌─────────┼─────────┼─────────┼─────────┼─────────┐
        │         │         │         │         │         │
        ▼         ▼         ▼         ▼         ▼         ▼
┌──────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│ PayFit   │ │ SAGE   │ │ Sonepar│ │ Rexel  │ │ CTI    │ │ RFID   │
│ (Paie)   │ │(Compta)│ │ API    │ │ API    │ │(VoIP)  │ │Hardware│
└──────────┘ └────────┘ └────────┘ └────────┘ └────────┘ └────────┘
```

---

## 🟣 OPTION 2 : ARCHITECTURE BEST-OF-BREED

### Stack Technique

```
┌─────────────────────────────────────────────────────────────┐
│                   FRONT-END MULTI-OUTILS                    │
├─────────────────────────────────────────────────────────────┤
│  HubSpot UI  │ Odoo Web │ PayFit  │ PowerBI │ Custom Apps │
└─────────────────────────────────────────────────────────────┘
                           │
                           │ API Gateway (Kong / Traefik)
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                  COUCHE D'ORCHESTRATION                     │
├─────────────────────────────────────────────────────────────┤
│  Zapier / n8n (Low-Code Integration)                       │
│  + API Custom (Node.js / Python FastAPI)                   │
└─────────────────────────────────────────────────────────────┘
                  │         │         │         │
        ┌─────────┼─────────┼─────────┼─────────┼─────────┐
        ▼         ▼         ▼         ▼         ▼         ▼
┌──────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│ HubSpot  │ │ Odoo   │ │ PayFit │ │ PowerBI│ │ React  │ │ Azure  │
│ CRM      │ │ ERP    │ │ SIRH   │ │ BI     │ │ Native │ │   ML   │
│ Pro      │ │        │ │        │ │        │ │  Apps  │ │        │
└──────────┘ └────────┘ └────────┘ └────────┘ └────────┘ └────────┘
```

---

## 🔐 SÉCURITÉ & CONFORMITÉ

### Authentification & Autorisation

**SSO (Single Sign-On)**
```
Google Workspace → OAuth 2.0 → Odoo (Master)
                              → HubSpot (si Option 2)
                              → PayFit
                              → PowerBI
```

**RBAC (Role-Based Access Control)**

| Rôle | Profils | Accès Odoo | Accès Sensible |
|------|---------|------------|----------------|
| **Admin Système** | 2 | Tous modules | Oui (Config, Users) |
| **Direction** | 5 | CRM, BI, Projets | Oui (Finances, RH) |
| **Manager** | 15 | CRM, Projets, Planning | Lecture seule (Paie) |
| **Chef Chantier** | 15 | Field Service, Pointage | Non |
| **Acheteur** | 3 | Achats, Inventaire | Oui (Prix fournisseurs) |
| **RH** | 2 | Employés, Congés | Oui (Données personnelles) |
| **Service Client** | 5 | CRM, Helpdesk | Non |
| **Employé** | 100 | Portail (lecture seule) | Non (ses données uniquement) |

**MFA (Multi-Factor Authentication)**
- ✅ Obligatoire pour : Admin, Direction, RH
- ⚠️ Recommandé pour : Managers, Acheteurs
- ❌ Optionnel pour : Chefs de chantier (contrainte terrain)

---

## 🌐 INFRASTRUCTURE & HÉBERGEMENT

### Option A : Cloud Odoo.sh (SaaS) - **Recommandée**

```
Odoo.sh (EU - Francfort)
┌────────────────────────────────┐
│ Production (EU)                │
│ - 4 vCPU, 16 GB RAM           │
│ - PostgreSQL 400 GB            │
│ - Auto-scaling                 │
│ - Backup quotidien             │
├────────────────────────────────┤
│ Staging (EU)                   │
│ - 2 vCPU, 8 GB RAM            │
│ - Clone production             │
├────────────────────────────────┤
│ Dev (EU)                       │
│ - 1 vCPU, 4 GB RAM            │
│ - Sandbox                      │
└────────────────────────────────┘

Coût : ~3000€/mois (inclus dans licence Odoo)
SLA : 99.9% uptime
```

### Option B : Self-Hosted (Azure/AWS)

```
Azure France (si besoin souveraineté)
┌────────────────────────────────┐
│ Load Balancer (Azure LB)       │
├────────────────────────────────┤
│ Odoo App Servers (x2)          │
│ - VM Standard_D4s_v3           │
│ - 4 vCPU, 16 GB RAM chacune    │
├────────────────────────────────┤
│ PostgreSQL (Azure Database)    │
│ - Managed Service              │
│ - HA + Réplication             │
├────────────────────────────────┤
│ Redis (Cache)                  │
│ - Azure Cache for Redis        │
└────────────────────────────────┘

Coût : ~5000€/mois + DevOps
SLA : 99.95% uptime (si configuré HA)
```

**Recommandation** : **Odoo.sh** (simplicité, coût maîtrisé, SLA garanti).

---

## 📡 INTÉGRATIONS CLÉS

### 1. Odoo ↔ SAGE Compta (Sync Comptable)

**Fréquence** : Quotidienne (export écritures J-1)  
**Technologie** : CSV Export/Import OU API REST si SAGE dispose d'API  
**Données** :
- Factures clients (Odoo → SAGE)
- Factures fournisseurs (Odoo → SAGE)
- Paiements (Odoo → SAGE)
- Écritures de paie (PayFit → SAGE)

**Code Odoo (Export CSV)**
```python
# Module: duret_sage_sync
def export_invoices_to_sage():
    invoices = self.env['account.move'].search([
        ('state', '=', 'posted'),
        ('sage_exported', '=', False),
        ('invoice_date', '>=', fields.Date.today() - timedelta(days=1))
    ])
    
    csv_data = []
    for invoice in invoices:
        csv_data.append({
            'journal': invoice.journal_id.code,
            'date': invoice.invoice_date,
            'account': invoice.partner_id.property_account_receivable_id.code,
            'debit': invoice.amount_total if invoice.move_type == 'out_invoice' else 0,
            'credit': invoice.amount_total if invoice.move_type == 'in_invoice' else 0,
            'label': invoice.name,
            'ref': invoice.ref
        })
        invoice.sage_exported = True
    
    # Export vers SFTP SAGE
    return csv_data
```

### 2. Odoo ↔ PayFit (RH & Paie)

**Fréquence** : Temps réel (congés, NDF) + Mensuel (éléments variables paie)  
**Technologie** : API REST PayFit  
**Flux** :
- Odoo → PayFit : Nouveaux employés, congés validés, NDF validées, heures travaillées
- PayFit → Odoo : Bulletins de paie (stockage), Soldes congés actualisés

### 3. Odoo ↔ Sonepar/Rexel (Fournisseurs)

**Fréquence** : Temps réel (recherche produit, prix)  
**Technologie** : API REST OAuth 2.0  
**Flux** :
- Odoo → Sonepar : Recherche produits, consultation prix, passation commandes
- Sonepar → Odoo : Confirmation commande, statut livraison, factures

### 4. Odoo ↔ CTI Téléphonie

**Fréquence** : Temps réel (appels entrants)  
**Technologie** : WebSocket OU API REST (selon opérateur)  
**Flux** :
- CTI → Odoo : Remontée numéro appelant → Pop-up fiche client
- Odoo → CTI : Clic-to-call depuis fiche client

### 5. Odoo ↔ RFID Hardware

**Fréquence** : Temps réel (scan dépôt)  
**Technologie** : App Mobile (React Native) → API Odoo  
**Flux** :
- Douchette RFID → App Mobile → Odoo Inventaire (réception BL, inventaire)

---

## 📊 MONITORING & OBSERVABILITÉ

### Outils Recommandés

**Option Odoo.sh (SaaS)**
- Dashboard Odoo.sh natif (CPU, RAM, logs)
- Alertes email disponibles
- Logs temps réel

**Option Self-Hosted**
```
┌────────────────────────────────┐
│ Prometheus (Métriques)         │
│ - Odoo metrics exporter        │
│ - PostgreSQL exporter          │
│ - Redis exporter               │
├────────────────────────────────┤
│ Grafana (Dashboards)           │
│ - CPU, RAM, Disque             │
│ - Requêtes SQL lentes          │
│ - Temps réponse API            │
├────────────────────────────────┤
│ Loki (Logs)                    │
│ - Logs Odoo centralisés        │
│ - Recherche full-text          │
├────────────────────────────────┤
│ Alerting (PagerDuty)           │
│ - CPU > 80% → Alert            │
│ - DB down → Alert              │
│ - Slow queries → Alert         │
└────────────────────────────────┘
```

### KPIs Techniques à Surveiller

| KPI | Seuil Alerte | Action |
|-----|--------------|--------|
| **CPU moyenne** | > 80% | Scale up VM |
| **RAM utilisée** | > 90% | Scale up VM |
| **Disque DB** | > 85% | Augmenter stockage |
| **Temps réponse Odoo** | > 2s | Optimiser vues/requêtes |
| **Requêtes SQL lentes** | > 5s | Créer index DB |
| **Taux erreur API** | > 5% | Investiguer logs |
| **Uptime** | < 99.5% | Analyser downtime |

---

## 🚀 ROADMAP TECHNIQUE

### Phase 1 (M1-3) : Fondations

- [ ] Provisioning Odoo.sh Production + Staging
- [ ] Configuration SSO Google Workspace
- [ ] Import données (Clients, Produits, Employés)
- [ ] Déploiement modules core (CRM, Projet, Achats, RH)
- [ ] Formation Admin (2j)

### Phase 2 (M4-6) : Intégrations

- [ ] Développement module `duret_sage_sync`
- [ ] Intégration PayFit (API)
- [ ] Intégration Sonepar API (POC)
- [ ] CTI Téléphonie (Service Client)
- [ ] Tests end-to-end

### Phase 3 (M7-12) : Apps Mobile & RFID

- [ ] App Mobile Chantiers (React Native)
- [ ] App Mobile Dép

ôt RFID (React Native)
- [ ] Module `duret_rfid_inventory`
- [ ] Déploiement pilote (10 users)

### Phase 4 (M13-18) : Optimisations

- [ ] Monitoring Prometheus + Grafana
- [ ] Migration SAGE → API (si disponible)
- [ ] ML Prédictions (Azure ML) si Option 2
- [ ] Formation complète (100 users)

---

**📧 Contact** : Direction IT - Duret Électricité  
**🎯 Objectif** : Infrastructure scalable, sécurisée, moderne  
**💰 Budget** : 181K€ (Option 1) ou 265K€ (Option 2) sur 3 ans  
**⏱️ Timeline** : 18 mois (Phases 1-4)
