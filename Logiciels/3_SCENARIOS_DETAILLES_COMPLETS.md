# 📊 3 SCÉNARIOS DÉTAILLÉS COMPLETS - DURET ÉLECTRICITÉ

**Date** : Janvier 2025
**Contexte** : Transformation digitale PME BTP (~100 collaborateurs)
**Périmètre** : ERP + CRM + Field Service + SIRH + Paie + BI

---

## 🎯 BESOINS DURET (RAPPEL AUDIT)

**8 catégories critiques** :

| # | Besoin | Détail |
|---|--------|--------|
| 1 | **ERP** | Devis, facturation, gestion affaires, chantiers, budgets |
| 2 | **CRM** | Fin système post-it, tickets, traçabilité clients, relances |
| 3 | **Field Service** | App mobile techniciens, bons digitaux, CERFA, photos géolocalisées |
| 4 | **Stocks** | Réception automatisée, scan codes-barres, RFID, visibilité temps réel |
| 5 | **Comptabilité** | Analytique par chantier, budgets vs réalisé, trésorerie |
| 6 | **RH** | Congés, notes de frais, entretiens, recrutement, dossiers collaborateurs |
| 7 | **Paie** | Automatisation, DSN, bulletins digitaux, variables |
| 8 | **BI** | Dashboards temps réel, KPI, transparence données (RBAC) |

**Effectifs** : 100 collaborateurs (20 bureau + 80 techniciens terrain)

---

# 🟢 SCÉNARIO 1 : ODOO TOUT-EN-UN

## 📦 Architecture Technique

### Plateforme Unique : Odoo ERP Enterprise v18

```
┌─────────────────────────────────────────────────────────┐
│                    ODOO ENTERPRISE                       │
│                    (Plateforme unique)                   │
├─────────────────────────────────────────────────────────┤
│  ERP         │ Ventes, Achats, Projet, Chantiers        │
│  CRM         │ Pipeline, Leads, Opportunités            │
│  Helpdesk    │ Tickets, Support client                  │
│  Field Svc   │ Interventions, Planning, App mobile      │
│  Stocks      │ Inventaire, Scan, RFID (modules tiers)   │
│  Compta      │ Analytique, Facturation, Trésorerie      │
│  RH          │ Congés, Frais, Entretiens, Recrutement   │
│  BI          │ Tableaux de bord, Rapports               │
└─────────────────────────────────────────────────────────┘
                            ↓ (Export variables paie)
                      ┌───────────┐
                      │  PAYFIT   │ (Moteur paie)
                      └───────────┘
```

---

## 🔧 Configuration Détaillée

### Licences Odoo Enterprise

| Type utilisateur | Nombre | Modules activés | Prix/user/mois |
|------------------|--------|-----------------|----------------|
| **Users bureau** | 20 | Tous modules (CRM, Ventes, Projet, Compta, RH, BI) | 24,90€ |
| **Users terrain** | 80 | Field Service, Stocks, Planning | 24,90€ |
| **TOTAL** | **100** | Tous modules Enterprise | **24,90€** |

**Licences annuelles** : 100 users × 24,90€/mois × 12 mois = **29 880€/an**

### Modules Odoo Activés (18)

| Module | Fonction | Users |
|--------|----------|-------|
| **CRM** | Pipeline commercial, scoring leads | 20 bureau |
| **Helpdesk** | Tickets support, SLA, satisfaction | 20 bureau |
| **Ventes** | Devis, commandes, e-signature | 20 bureau |
| **Achats** | Commandes fournisseurs, réceptions | 10 bureau |
| **Projet** | Gestion chantiers, budgets, tâches, Gantt | 20 bureau + 15 chefs |
| **Field Service** | Interventions, planning, app mobile | 80 terrain + 10 planif |
| **Inventaire** | Stocks multi-dépôts, scan, RFID | 10 magasin + 80 terrain |
| **Comptabilité** | Analytique, facturation, rapprochement bancaire | 5 compta |
| **Employés** | Dossiers RH, organigramme | 3 RH |
| **Congés** | Workflows validation, soldes auto | 100 all |
| **Notes de frais** | Scan, validation, remboursement | 100 all |
| **Recrutement** | Pipeline candidats, entretiens | 3 RH |
| **Évaluations** | Entretiens annuels, objectifs | 100 all |
| **Planning** | Planning partagé, ressources | 20 bureau |
| **Tableaux de bord** | BI, KPI, rapports personnalisés | 20 bureau |
| **Documents** | GED, templates | 100 all |
| **Portail** | Accès self-service clients | Clients externes |
| **Site Web** | CMS intégré Odoo (optionnel) | Public |

---

### PayFit Paie

**Formule** : Paie seule (moteur paie uniquement, RH déjà dans Odoo)

| Élément | Détail | Prix |
|---------|--------|------|
| **Abonnement base** | Plateforme PayFit | 66€/mois |
| **Par salarié** | Génération bulletin + DSN | 17€/salarié/mois |
| **Total mensuel** | 66€ + (100 × 17€) | **1 766€/mois** |
| **Total annuel** | 1 766€ × 12 | **21 192€/an** |

**Fonctionnalités PayFit** :
- Génération bulletins paie
- DSN automatique
- Prélèvement à la source
- Coffre-fort digital bulletins
- Déclarations URSSAF

**Intégration Odoo ↔ PayFit** :
- Export CSV variables paie depuis Odoo (heures, primes, absences)
- Import dans PayFit
- Génération bulletins PayFit
- Retour écritures comptables vers Odoo

---

## 💰 Coûts Détaillés 3 Ans (Scénario 1)

### Investissement Initial (An 1)

| Poste | Détail | Coût |
|-------|--------|------|
| **Licences Odoo Y1** | 100 users × 24,90€ × 12 mois | 29 880€ |
| **PayFit Y1** | (66€ + 100×17€) × 12 mois | 21 192€ |
| **Intégrateur Odoo** | 30j × 700€/j (paramétrage, config, migration) | 21 000€ |
| **Formation** | 6j × 1 200€/j (3 sessions 2j par rôle) | 7 200€ |
| **Migration données** | Import clients, produits, historique (inclus intégrateur) | 0€ |
| **Modules custom** | RFID stocks, templates BTP spécifiques | 10 000€ |
| **TOTAL AN 1** | | **89 272€** |

### Coûts Récurrents (An 2-3)

| Poste | An 2 | An 3 |
|-------|------|------|
| Licences Odoo | 29 880€ | 29 880€ |
| PayFit | 21 192€ | 21 192€ |
| Support intégrateur | 5 000€ | 5 000€ |
| Modules custom (évolutions) | 5 000€ | 5 000€ |
| **TOTAL** | **61 072€** | **61 072€** |

### TOTAL 3 ANS : **211 416€**

⚠️ **Hébergement** : Odoo.sh (+6 000€/an soit +18 000€ sur 3 ans) optionnel si infrastructure existante

---

## ✅ Couverture Besoins par Module

| Besoin Audit | Module(s) Odoo | Couverture | Détail |
|--------------|----------------|------------|--------|
| **1. ERP** | Ventes + Projet + Achats | ✅ **100%** | Devis templates, gestion affaires, budgets chantiers |
| **2. CRM** | CRM + Helpdesk | ✅ **100%** | Tickets digitaux, fin post-it, relances auto |
| **3. Field Service** | Field Service | ✅ **100%** | App mobile native, bons digitaux, CERFA, photos géolocalisées, signature tablette |
| **4. Stocks** | Inventaire + modules RFID | ✅ **100%** | Scan codes-barres natif, RFID via modules tiers (ex: IoT Box) |
| **5. Comptabilité** | Comptabilité | ✅ **100%** | Analytique par chantier, budgets vs réalisé, trésorerie prédictive |
| **6. RH** | Employés + Congés + Frais + Recrutement | ✅ **100%** | Dossiers RH, congés workflows, notes de frais scan, entretiens |
| **7. Paie** | PayFit (externe) | ✅ **100%** | Moteur paie complet, DSN, bulletins digitaux |
| **8. BI** | Tableaux de bord | ✅ **100%** | Dashboards temps réel, KPI personnalisés par rôle (RBAC) |

**Taux couverture global** : ✅ **100% des besoins**

---

## 🎯 Avantages Scénario 1

### 1. Simplicité Architecture
- ✅ **1 seule plateforme** : 90% besoins dans Odoo
- ✅ **Pas de synchronisation** : Données centralisées nativement
- ✅ **Interface unique** : Formation simplifiée
- ✅ **SSO natif** : Authentification unique

### 2. Prix Compétitif
- ✅ **24,90€/user/mois** tout inclus (ERP + CRM + SIRH + Field Service + BI)
- ✅ PayFit paie seule : 17€/user (vs 25€ formule complète)
- ✅ Pas de coûts synchronisation/intégration

### 3. Modularité
- ✅ Démarrage progressif (CRM M1-3 → Field Service M4-6 → Compta M7-12)
- ✅ Activation modules selon adoption
- ✅ Pas d'engagement modules inutilisés

### 4. Open Source
- ✅ Code source accessible (Community Edition)
- ✅ Pas de vendor lock-in
- ✅ Communauté mondiale (7M+ users)
- ✅ Possibilité développements custom

### 5. Field Service Natif Complet
- ✅ App mobile iOS/Android native
- ✅ Mode hors ligne (sync auto)
- ✅ Géolocalisation automatique
- ✅ Photos avant/après horodatées
- ✅ Signature client tablette
- ✅ Génération PDF bons intervention
- ✅ CERFA digitalisés

### 6. Scalabilité
- ✅ 5 à 5000+ users (même plateforme)
- ✅ Croissance entreprise supportée
- ✅ Ajout modules selon besoins futurs

### 7. Intégration Native
- ✅ CRM ↔ Ventes ↔ Projet ↔ Compta : natif
- ✅ RH ↔ Paie : export variables
- ✅ Field Service ↔ Stocks ↔ Facturation : natif
- ✅ APIs REST ouvertes pour intégrations futures

---

## ⚠️ Limites Scénario 1

### 1. Généraliste BTP
- ⚠️ Pas spécialisé BTP comme EBP
- ⚠️ Templates BTP à créer/personnaliser
- ⚠️ Métrés non natifs (modules custom)
- **Mitigation** : Intégrateur BTP (Drakkar.io), modules custom templates

### 2. Paie Externe
- ⚠️ Nécessite PayFit ou Silae (pas de moteur natif)
- ⚠️ Export/Import variables paie
- **Mitigation** : Intégration PayFit testée et éprouvée

### 3. Courbe Apprentissage
- ⚠️ Richesse fonctionnelle peut intimider
- ⚠️ Paramétrage initial 30j
- **Mitigation** : Formation 2j/rôle, démarrage progressif par vague

### 4. UX CRM
- ⚠️ UX moins "sexy" que HubSpot
- ⚠️ Interface plus "ERP" que "CRM pur"
- **Mitigation** : Odoo v18 améliore UX, personnalisation possible

---

## 🚀 Roadmap Déploiement Recommandée

### Phase 0 : POC (Semaines 1-4)
**Objectif** : Tester sans risque
- Installer Odoo Community (gratuit)
- Activer : CRM, Ventes, Field Service
- Import 50 clients + 10 produits
- Tests terrain app mobile (5 techniciens)
- **Go/No-Go décision**

### Phase 1 : Quick Wins (Mois 1-6)

**Mois 1-2 : CRM + Helpdesk**
- Module CRM : Pipeline commercial
- Module Helpdesk : Tickets support
- Import base clients complète
- Formation service client (2j)
- **Go-live** : Fin post-it ✅

**Mois 3-4 : Ventes + Devis**
- Module Ventes : Templates devis
- E-signature intégrée
- Formation direction affaires (2j)
- **Go-live** : Fin Excel devis ✅

**Mois 5-6 : Field Service**
- App mobile techniciens (iOS/Android)
- Bons intervention digitaux
- Photos géolocalisées
- Formation techniciens (1j)
- **Go-live** : Fin CERFA papier ✅

**KPIs M6** :
- Traçabilité tickets : 0% → 100%
- Temps création devis : 1 semaine → <1h
- CERFA digitalisés : 0% → 80%

### Phase 2 : Structurants (Mois 7-12)

**Mois 7-9 : Projet/Chantiers**
- Budgets par chantier
- Suivi heures
- REX formalisés
- **Go-live** : Compta analytique ✅

**Mois 10-12 : Stocks + Comptabilité**
- Scan codes-barres
- RFID (si validé)
- Analytique par chantier
- **Go-live** : Fin Excel stocks ✅

### Phase 3 : Excellence (Mois 13-18)

**Mois 13-15 : RH**
- Congés, notes de frais
- Entretiens annuels
- **Go-live** : RH digitalisé ✅

**Mois 16-18 : PayFit + BI + Portail**
- Intégration paie
- Dashboards personnalisés
- Portail client self-service
- **Go-live** : Transparence 100% ✅

---

## 🛠️ Prérequis Techniques

### Infrastructure

| Élément | Recommandation |
|---------|----------------|
| **Hébergement** | Odoo.sh (managé) ou serveur dédié Linux |
| **Base données** | PostgreSQL 14+ |
| **Serveur web** | Nginx reverse proxy |
| **RAM** | Min 8 GB (100 users) |
| **CPU** | 4 cores min |
| **Stockage** | 100 GB SSD min (photos, docs) |

### Réseau

| Élément | Détail |
|---------|--------|
| **Bande passante** | 100 Mbps min |
| **VPN** | Optionnel (si on-premise) |
| **SSL** | Certificat obligatoire (Let's Encrypt gratuit) |

### Postes Clients

| Type | OS | Navigateur |
|------|----|-----------|
| **Bureau** | Windows 10+, macOS, Linux | Chrome, Firefox, Edge |
| **Terrain** | iOS 14+, Android 10+ | App Odoo native |

### Intégrations

| Système | Type | Protocole |
|---------|------|-----------|
| **PayFit** | Export/Import CSV | SFTP ou API REST |
| **Email** | Synchronisation | IMAP/SMTP |
| **Fournisseurs** | Catalogues (Sonepar, Rexel) | APIs REST (dev custom) |

---

# 🔶 SCÉNARIO 2 : EBP + COMPLÉMENTS SPÉCIALISÉS

## 📦 Architecture Technique

### Multi-Solutions Best-of-Breed

```
┌─────────────┐    ┌──────────────┐    ┌────────────┐
│  EBP BTP    │◄──►│   HUBSPOT    │◄──►│   LUCCA    │
│  (ERP)      │    │   (CRM)      │    │   (SIRH)   │
└──────┬──────┘    └──────┬───────┘    └─────┬──────┘
       │                  │                   │
       │                  │                   │
       ├──────────────────┴───────────────────┤
       │                                      │
   ┌───▼─────┐    ┌──────────┐    ┌─────────▼────┐
   │ STOCKS  │    │ APP MOBILE│    │    SILAE     │
   │ (EBP)   │    │ (Praxedo) │    │    (PAIE)    │
   └─────────┘    └───────────┘    └──────────────┘

   Intégrations : Zapier / Make / APIs custom
```

---

## 🔧 Configuration Détaillée

### 1. EBP Bâtiment PRO (ERP)

**Licences** : 20 users bureau (max version PRO)

| Type | Nombre | Prix/user/mois estimé |
|------|--------|----------------------|
| EBP Bâtiment PRO SaaS | 20 | 100€ |

**Modules EBP** :
- Devis/Factures BTP
- Gestion chantiers
- Métrés
- Attestations TVA réduite
- Primes déductibles (CEE, MaPrimeRenov')
- Comptabilité
- Stocks basique
- Tarifeo (tarifs +700 fournisseurs)
- Intégration Sonepar

**Coût annuel** : 20 × 100€ × 12 = **24 000€/an**

---

### 2. HubSpot Service Professional (CRM)

**Licences** : 10 users service client

| Formule | Users | Prix/user/mois |
|---------|-------|----------------|
| Service Professional | 10 | 90€ |

**Fonctionnalités** :
- Service Hub : Tickets, SLA, satisfaction
- CRM : Pipeline clients, historique 360°
- Automatisations workflows
- Enquêtes satisfaction (NPS)
- Base connaissances
- Chat widget site web
- Reporting avancé

**Coût annuel** : 10 × 90€ × 12 = **10 800€/an**

---

### 3. App Mobile Field Service (Praxedo ou Synchroteam)

**Solution** : Praxedo (leader français Field Service)

**Licences** : 80 techniciens terrain

| Type | Nombre | Prix/user/mois estimé |
|------|--------|----------------------|
| Praxedo Technicien | 80 | 25€ |

**Fonctionnalités** :
- App iOS/Android
- Planning interventions
- Bons intervention mobiles
- Signature client
- Photos (mais pas géolocalisées auto)
- Mode hors ligne
- Optimisation tournées

**Coût annuel** : 80 × 25€ × 12 = **24 000€/an**

**Limites** :
- ⚠️ Pas d'intégration native EBP (besoin API custom)
- ⚠️ CERFA digital basique
- ⚠️ Pas de géolocalisation automatique avancée

---

### 4. Lucca SIRH

**Licences** : 100 collaborateurs

**Modules Lucca** :

| Module | Prix/user/mois | Annuel 100 users |
|--------|----------------|------------------|
| Timmi Absences | 3,10€ | 3 720€ |
| Clemmy Notes de frais | 6€ | 7 200€ |
| Poplee Core RH | 3€ | 3 600€ |
| **TOTAL** | **12,10€** | **14 520€/an** |

**Fonctionnalités** :
- Gestion congés/absences (workflows)
- Notes de frais (scan OCR)
- Dossiers RH, organigramme
- Entretiens annuels (module additionnel)
- Recrutement (module additionnel)

**Coût annuel** : **14 520€/an**

---

### 5. Silae Paie

**Solution** : Moteur paie français

**Licences** : 100 salariés

| Élément | Prix estimé |
|---------|-------------|
| Abonnement base | 500€/mois |
| Par bulletin | 5€/bulletin |
| **Total/mois** | 500€ + (100 × 5€) = 1 000€ |

**Fonctionnalités** :
- Génération bulletins
- DSN automatique
- Déclarations URSSAF
- Conformité légale France

**Coût annuel** : 1 000€ × 12 = **12 000€/an**

---

### 6. Intégrations (Middleware)

**Outils** : Zapier Premium ou Make (Integromat) ou développement custom

**Intégrations nécessaires** :
- EBP ↔ HubSpot : Sync clients
- EBP ↔ App mobile : Export chantiers/interventions
- App mobile ↔ EBP : Retour heures/matériel
- Lucca ↔ Silae : Variables paie
- HubSpot ↔ EBP : Tickets → Devis

**Coût annuel estimé** : **6 000€/an** (Make + dev custom)

---

## 💰 Coûts Détaillés 3 Ans (Scénario 2)

### Investissement Initial (An 1)

| Poste | Détail | Coût An 1 |
|-------|--------|-----------|
| **EBP Bâtiment PRO** | 20 users × 100€/mois × 12 | 24 000€ |
| **HubSpot Service Pro** | 10 users × 90€/mois × 12 | 10 800€ |
| **App mobile Praxedo** | 80 users × 25€/mois × 12 | 24 000€ |
| **Lucca SIRH** | 100 users (modules) | 14 520€ |
| **Silae Paie** | 100 salariés | 12 000€ |
| **Intégrations** | Middleware + dev custom | 15 000€ |
| **Formation** | 5 outils × 2j × 1 200€ | 12 000€ |
| **TOTAL AN 1** | | **112 320€** |

### Coûts Récurrents (An 2-3)

| Poste | An 2 | An 3 |
|-------|------|------|
| EBP | 24 000€ | 24 000€ |
| HubSpot | 10 800€ | 10 800€ |
| App mobile | 24 000€ | 24 000€ |
| Lucca | 14 520€ | 14 520€ |
| Silae | 12 000€ | 12 000€ |
| Intégrations (maintenance) | 6 000€ | 6 000€ |
| **TOTAL** | **91 320€** | **91 320€** |

### TOTAL 3 ANS : **294 960€**

---

## ✅ Couverture Besoins par Solution

| Besoin | Solution(s) | Couverture | Limites |
|--------|-------------|------------|---------|
| **1. ERP** | EBP Bâtiment | ✅ **100%** | Spécialisé BTP, métrés, attestations TVA |
| **2. CRM** | HubSpot Service | ✅ **100%** | UX excellente, tickets, SLA |
| **3. Field Service** | Praxedo | ⚠️ **75%** | Basique vs Odoo (pas CERFA avancé, géoloc limitée) |
| **4. Stocks** | EBP Stocks | ⚠️ **60%** | Pas RFID, scan basique |
| **5. Comptabilité** | EBP Compta | ✅ **100%** | Analytique, budgets |
| **6. RH** | Lucca | ✅ **100%** | Meilleur SIRH marché, support excellent |
| **7. Paie** | Silae | ✅ **100%** | Moteur robuste, conformité |
| **8. BI** | HubSpot + EBP | ⚠️ **70%** | Dashboards séparés, pas de vue unique |

**Taux couverture global** : ⚠️ **~88% des besoins**

**Gaps critiques** :
- ❌ RFID stocks non supporté
- ⚠️ Field Service limité (CERFA basique)
- ⚠️ BI fragmenté (pas de vue consolidée temps réel)

---

## 🎯 Avantages Scénario 2

### 1. Spécialisation BTP
- ✅ EBP : templates BTP natifs, métrés, attestations TVA
- ✅ Interface Tarifeo : +700 fournisseurs BTP
- ✅ Intégration Sonepar native

### 2. Meilleurs Outils par Besoin
- ✅ HubSpot : meilleur CRM marché (UX, support 24/7)
- ✅ Lucca : meilleur SIRH français (support 97% satisfaction, 33min réponse)
- ✅ Silae : paie robuste, conformité garantie

### 3. Support France
- ✅ EBP, Lucca, Silae : éditeurs français
- ✅ Support téléphone direct
- ✅ Expertise métier BTP (EBP)

### 4. UX CRM Excellente
- ✅ HubSpot : interface moderne, intuitive
- ✅ Adoption rapide équipe service client

---

## ⚠️ Limites Scénario 2

### 1. Complexité Architecture
- ❌ **5 solutions à gérer** (EBP, HubSpot, Praxedo, Lucca, Silae)
- ❌ **Synchronisations multiples** : Risque incohérences données
- ❌ **5 formations distinctes** : Coût temps important
- ❌ **5 contrats/renouvellements** : Charge admin

### 2. Coût Élevé
- ❌ **294 960€ sur 3 ans** vs 211 416€ Odoo (+83 544€)
- ❌ **Coût mensuel An 2-3** : 7 610€/mois vs 5 089€ Odoo

### 3. Intégrations Fragiles
- ❌ Pas d'intégration native entre outils
- ❌ Besoin middleware (Zapier/Make) ou dev custom
- ❌ Risque rupture si API change
- ❌ Maintenance intégrations continue

### 4. Field Service Limité
- ❌ Praxedo moins complet qu'Odoo Field Service
- ❌ CERFA digital basique
- ❌ Pas d'intégration native avec EBP (besoin dev)

### 5. BI Fragmenté
- ❌ Dashboards séparés (HubSpot, EBP, Lucca)
- ❌ Pas de vue consolidée temps réel
- ❌ KPI manuels à réconcilier

### 6. Scalabilité Limitée
- ❌ EBP PRO : max 20 users bureau (limite croissance)
- ❌ Coûts additionnels importants si passage EBP ELITE

---

## 🚀 Roadmap Déploiement

### Phase 1 : Fondations (Mois 1-3)
- Déploiement EBP (M1-2) : Devis, chantiers
- Déploiement HubSpot (M2-3) : CRM, tickets
- Migration données : Clients, produits
- **Intégrations** : EBP ↔ HubSpot (sync clients)

### Phase 2 : Terrain (Mois 4-6)
- Déploiement Praxedo (M4-5) : App mobile techniciens
- **Intégration** : EBP ↔ Praxedo (chantiers)
- Formation terrain (80 techniciens)

### Phase 3 : RH/Paie (Mois 7-12)
- Déploiement Lucca (M7-9) : Congés, frais
- Déploiement Silae (M10-12) : Paie
- **Intégration** : Lucca ↔ Silae

---

## 🛠️ Prérequis Techniques

### Infrastructure
- EBP : SaaS (hébergement EBP)
- HubSpot : SaaS (cloud HubSpot)
- Lucca : SaaS (cloud Lucca)
- Silae : SaaS (cloud Silae)
- Praxedo : SaaS (cloud Praxedo)

### Intégrations
- Middleware : Zapier Premium (299$/mois) ou Make (29€/mois + dev)
- Développements custom : APIs REST (budget 15k€ initial)

---

# 🟣 SCÉNARIO 3 : HYBRIDE BEST-OF-BREED

## 📦 Architecture Technique

### Solution Optimale Hybride

```
┌─────────────────────────────────────────┐
│         ODOO ERP ENTERPRISE              │
│  (Ventes, Projet, Stocks, Compta)       │
└────────────┬────────────────────────────┘
             │
   ┌─────────┼─────────┬──────────────┐
   │         │         │              │
┌──▼──────┐ │  ┌──────▼─────┐  ┌────▼─────┐
│HUBSPOT  │ │  │   LUCCA    │  │  APP     │
│(CRM)    │ │  │  (SIRH)    │  │ REACT    │
│         │ │  │            │  │ NATIVE   │
└─────────┘ │  └──────┬─────┘  │(MOBILE)  │
            │         │        └──────────┘
        ┌───▼─────────▼───┐
        │     SILAE       │
        │    (PAIE)       │
        └─────────────────┘
```

**Philosophie** :
- **Odoo** pour colonne vertébrale ERP (devis, chantiers, stocks, compta)
- **HubSpot** pour UX CRM exceptionnelle (service client)
- **Lucca** pour SIRH best-in-class
- **App React Native custom** pour Field Service 100% sur-mesure

---

## 🔧 Configuration Détaillée

### 1. Odoo ERP Enterprise (Backbone)

**Licences** : 100 users

**Modules activés** (sélectif) :

| Module | Users | Fonction |
|--------|-------|----------|
| **Ventes** | 20 | Devis, commandes, e-signature |
| **Achats** | 10 | Commandes fournisseurs |
| **Projet** | 30 | Gestion chantiers, budgets, Gantt |
| **Stocks** | 90 | Inventaire, scan, RFID |
| **Comptabilité** | 5 | Analytique, facturation, trésorerie |
| **Tableaux de bord** | 20 | BI, KPI |
| **Documents** | 100 | GED |

**Modules NON activés** (remplacés) :
- ❌ CRM Odoo → HubSpot
- ❌ Field Service Odoo → App React Native custom
- ❌ RH Odoo → Lucca

**Coût annuel** : 100 × 24,90€ × 12 = **29 880€/an**

---

### 2. HubSpot CRM Professional

**Licences** : 15 users (service client + direction commerciale)

**Formule** : CRM + Service Hub Professional

| Composant | Users | Prix/user/mois |
|-----------|-------|----------------|
| CRM Professional | 15 | 90€ |

**Fonctionnalités** :
- Pipeline commercial visuel
- Tickets support avec SLA
- Automatisations workflows avancées
- Enquêtes satisfaction (NPS)
- Chat en direct site web
- Base connaissances
- Reporting IA

**Coût annuel** : 15 × 90€ × 12 = **16 200€/an**

**Intégration HubSpot ↔ Odoo** :
- Sync bidirectionnelle clients/contacts (API REST)
- HubSpot : source truth CRM
- Odoo : source truth devis/affaires
- Middleware : Zapier ou dev custom

---

### 3. App React Native Custom (Field Service)

**Solution** : Développement sur-mesure

**Stack technique** :
- **Frontend** : React Native (iOS + Android)
- **Backend** : Node.js + PostgreSQL
- **Sync** : API REST Odoo
- **Offline** : Redux Persist + SQLite local

**Fonctionnalités custom** :

| Feature | Détail |
|---------|--------|
| **Bons intervention** | Templates CERFA personnalisés Duret |
| **Photos géolocalisées** | GPS auto + horodatage + metadata |
| **Signature tablette** | Capture vectorielle HD |
| **Mode offline** | Sync auto dès connexion |
| **Catalogue produits** | Recherche full-text, stock temps réel |
| **Génération devis terrain** | Templates Odoo, envoi email client direct |
| **Planning optimisé** | Algorithme tournées géographiques |
| **Pointage auto** | Geofencing arrivée/départ chantier |

**Coût développement** :

| Phase | Détail | Coût |
|-------|--------|------|
| **Développement initial** | 3 mois dev (2 devs fullstack) | 60 000€ |
| **Tests & QA** | 1 mois (testeur + dev) | 10 000€ |
| **Déploiement stores** | App Store + Google Play | 2 000€ |
| **TOTAL Initial** | | **72 000€** |

**Coût maintenance annuelle** :
- TMA : 1 500€/mois × 12 = **18 000€/an**
- Évolutions : 10 000€/an
- **TOTAL/an** : **28 000€/an**

---

### 4. Lucca SIRH + Silae Paie

**Configuration identique Scénario 2** :

| Solution | Coût annuel |
|----------|-------------|
| Lucca (Absences + Frais + Core RH) | 14 520€ |
| Silae Paie | 12 000€ |
| **TOTAL** | **26 520€/an** |

**Intégration Odoo ↔ Lucca ↔ Silae** :
- Odoo : heures projet → Lucca
- Lucca : absences, frais → Silae
- Silae : écritures compta → Odoo

---

## 💰 Coûts Détaillés 3 Ans (Scénario 3)

### Investissement Initial (An 1)

| Poste | Détail | Coût An 1 |
|-------|--------|-----------|
| **Odoo Enterprise** | 100 users × 24,90€ × 12 | 29 880€ |
| **HubSpot Professional** | 15 users × 90€ × 12 | 16 200€ |
| **App React Native** | Dev initial + déploiement | 72 000€ |
| **Lucca SIRH** | 100 users | 14 520€ |
| **Silae Paie** | 100 salariés | 12 000€ |
| **Intégrateur Odoo** | 20j × 700€ (setup léger) | 14 000€ |
| **Intégrations** | HubSpot ↔ Odoo, Lucca ↔ Silae | 15 000€ |
| **Formation** | 4 outils × 2j × 1 200€ | 9 600€ |
| **TOTAL AN 1** | | **183 200€** |

### Coûts Récurrents (An 2-3)

| Poste | An 2 | An 3 |
|-------|------|------|
| Odoo | 29 880€ | 29 880€ |
| HubSpot | 16 200€ | 16 200€ |
| App mobile (TMA) | 28 000€ | 28 000€ |
| Lucca | 14 520€ | 14 520€ |
| Silae | 12 000€ | 12 000€ |
| Intégrations (maintenance) | 6 000€ | 6 000€ |
| **TOTAL** | **106 600€** | **106 600€** |

### TOTAL 3 ANS : **396 400€**

---

## ✅ Couverture Besoins

| Besoin | Solution | Couverture | Qualité |
|--------|----------|------------|---------|
| **1. ERP** | Odoo Ventes + Projet | ✅ **100%** | ⭐⭐⭐⭐ Excellent |
| **2. CRM** | HubSpot Professional | ✅ **100%** | ⭐⭐⭐⭐⭐ Meilleur marché |
| **3. Field Service** | App React Native custom | ✅ **100%** | ⭐⭐⭐⭐⭐ Sur-mesure parfait |
| **4. Stocks** | Odoo Inventaire + RFID | ✅ **100%** | ⭐⭐⭐⭐ Très bon |
| **5. Comptabilité** | Odoo Comptabilité | ✅ **100%** | ⭐⭐⭐⭐ Excellent |
| **6. RH** | Lucca | ✅ **100%** | ⭐⭐⭐⭐⭐ Meilleur SIRH |
| **7. Paie** | Silae | ✅ **100%** | ⭐⭐⭐⭐ Robuste |
| **8. BI** | Odoo BI | ✅ **100%** | ⭐⭐⭐⭐ Centralisé |

**Taux couverture** : ✅ **100% des besoins avec qualité optimale**

---

## 🎯 Avantages Scénario 3

### 1. Meilleur de Chaque Monde
- ✅ **Odoo** : ERP robuste, prix compétitif
- ✅ **HubSpot** : Meilleur CRM/Service marché
- ✅ **App custom** : Field Service 100% adapté Duret
- ✅ **Lucca** : Meilleur SIRH français

### 2. UX Optimale
- ✅ HubSpot : interface CRM exceptionnelle
- ✅ App mobile : ergonomie parfaite métier électricien
- ✅ Lucca : UX SIRH reconnue

### 3. Field Service Sur-Mesure
- ✅ CERFA Duret personnalisés (templates exacts)
- ✅ Workflow intervention optimisé métier
- ✅ Fonctionnalités exactes (pas de bloatware)
- ✅ Évolutions futures maîtrisées

### 4. Pas de Compromis Fonctionnel
- ✅ Chaque besoin = meilleure solution
- ✅ Pas de gaps fonctionnels
- ✅ Qualité maximale partout

### 5. BI Centralisé
- ✅ Odoo reste source truth données opérationnelles
- ✅ Dashboards consolidés possibles

---

## ⚠️ Limites Scénario 3

### 1. Coût Élevé
- ❌ **396 400€ sur 3 ans** (vs 211 416€ Odoo seul)
- ❌ **Surcoût +185k€** vs Scénario 1
- ❌ Dev app mobile : 72k€ initial + 28k€/an TMA

### 2. Complexité Technique
- ❌ **4 solutions à intégrer** (Odoo, HubSpot, App, Lucca/Silae)
- ❌ Synchronisations multiples (APIs REST custom)
- ❌ Maintenance intégrations continue
- ❌ Risque incohérences données

### 3. Dépendance Équipe Dev
- ❌ App mobile custom : besoin équipe dev interne ou prestataire long terme
- ❌ Risque si prestataire change
- ❌ Évolutions app : coût permanent

### 4. Déploiement Long
- ❌ Développement app : 3-4 mois avant utilisation
- ❌ Tests terrain nécessaires
- ❌ Itérations probables

### 5. Formations Multiples
- ❌ 4 outils différents à former
- ❌ Coût temps formation élevé

---

## 🚀 Roadmap Déploiement

### Phase 0 : Développement App (Mois 0-4)
- **M0-M3** : Dev app React Native
- **M3-M4** : Tests alpha/beta (10 techniciens pilotes)
- **M4** : Validation app, corrections bugs

### Phase 1 : Fondations (Mois 1-3)
- **M1-M2** : Déploiement Odoo (Ventes, Projet, Compta)
- **M2-M3** : Déploiement HubSpot (CRM, tickets)
- **Intégration** : HubSpot ↔ Odoo (sync clients)

### Phase 2 : Terrain (Mois 5-6)
- **M5-M6** : Déploiement app mobile (80 techniciens)
- **Intégration** : App ↔ Odoo (chantiers, stocks)
- Formation terrain

### Phase 3 : RH/Paie (Mois 7-12)
- **M7-M9** : Déploiement Lucca
- **M10-M12** : Déploiement Silae
- **Intégration** : Lucca ↔ Silae ↔ Odoo

---

## 🛠️ Prérequis Techniques

### Infrastructure
- Odoo : SaaS Odoo.sh ou serveur dédié
- HubSpot : SaaS cloud
- Lucca/Silae : SaaS cloud
- App mobile : Backend Node.js (Heroku, AWS, ou serveur dédié)

### Équipe
- **Dev fullstack** : 2 devs (développement app)
- **Chef projet technique** : 1 (intégrations)
- **DevOps** : 1 (déploiement, CI/CD app)

### Intégrations
- HubSpot ↔ Odoo : API REST bidirectionnelle
- App ↔ Odoo : API REST + webhooks
- Lucca ↔ Silae : Export/Import CSV ou API
- Silae ↔ Odoo : Écritures comptables

---

# 📊 TABLEAU COMPARATIF 3 SCÉNARIOS

## Synthèse Coûts

| Scénario | An 1 | An 2 | An 3 | **TOTAL 3 ans** | Δ vs Scénario 1 |
|----------|------|------|------|-----------------|------------------|
| **1. Odoo Tout-en-Un** | 89 272€ | 61 072€ | 61 072€ | **🟢 211 416€** | Référence |
| **2. EBP + Compléments** | 112 320€ | 91 320€ | 91 320€ | **🔴 294 960€** | **+83 544€** (+40%) |
| **3. Hybride Best-of-Breed** | 183 200€ | 106 600€ | 106 600€ | **🔴 396 400€** | **+185 000€** (+87%) |

---

## Comparatif Détaillé

| Critère | 🟢 Scénario 1 | 🔶 Scénario 2 | 🟣 Scénario 3 |
|---------|---------------|---------------|---------------|
| **Coût 3 ans** | **211k€** | 295k€ | 396k€ |
| **Couverture besoins** | ✅ 100% | ⚠️ 88% | ✅ 100% |
| **Nombre outils** | **2** | 5 | 4 |
| **Complexité** | 🟢 Simple | 🔴 Complexe | 🔴 Complexe |
| **UX CRM** | 🟡 Bonne | ✅ Excellente (HubSpot) | ✅ Excellente (HubSpot) |
| **UX SIRH** | 🟡 Bonne | ✅ Excellente (Lucca) | ✅ Excellente (Lucca) |
| **Field Service** | ✅ Complet natif | ⚠️ Basique (Praxedo) | ✅ **Sur-mesure parfait** |
| **Spécialisation BTP** | ⚠️ Généraliste | ✅ Très spécialisé (EBP) | 🟡 Moyen |
| **RFID Stocks** | ✅ Oui | ❌ Non | ✅ Oui |
| **BI intégré** | ✅ Natif | ⚠️ Fragmenté | ✅ Centralisé |
| **Scalabilité** | ✅ 5-5000 users | ⚠️ Max 20 users | ✅ Illimitée |
| **Open Source** | ✅ Oui (Odoo) | ❌ Non | 🟡 Partiel (Odoo) |
| **Intégrations** | ✅ Natives | ❌ Multiples (fragiles) | ⚠️ Multiples (robustes) |
| **Support France** | 🟡 Partenaires | ✅ Direct | 🟡 Mixte |
| **Formations** | 2-3j/rôle | 5-7j (5 outils) | 4-5j (4 outils) |
| **Déploiement** | 6-12 mois | 9-12 mois | **12-18 mois** |
| **Risque technique** | 🟢 Faible | 🟡 Moyen | 🔴 Élevé (dev app) |
| **TCO/user/mois** | **59€** | 82€ | 110€ |

---

## Matrice Décision par Profil

| Profil Entreprise | Scénario Recommandé | Raisons |
|-------------------|---------------------|---------|
| **Budget modéré (<250k€)** | 🟢 **Scénario 1** | Meilleur ROI, couverture 100%, simplicité |
| **Spécialisation BTP critique** | 🔶 Scénario 2 | EBP templates BTP, Tarifeo, Sonepar |
| **UX non négociable + budget confortable** | 🟣 Scénario 3 | Meilleur UX partout, app sur-mesure |
| **Croissance rapide prévue** | 🟢 **Scénario 1** | Scalabilité Odoo illimitée |
| **Équipe IT interne forte** | 🟣 Scénario 3 | Maintenance app custom possible |
| **Pas d'équipe IT** | 🟢 **Scénario 1** | SaaS managé simple |
| **Besoin CERFA ultra-personnalisés** | 🟣 Scénario 3 | App custom templates exacts |
| **Déploiement rapide (<6 mois)** | 🟢 **Scénario 1** | Odoo modulaire, quick wins M1-3 |

---

## 🏆 RECOMMANDATION FINALE

### Pour Duret Électricité (~100 collaborateurs, croissance, budget modéré)

**Recommandation principale** : 🟢 **SCÉNARIO 1 - ODOO TOUT-EN-UN**

**Justification** :

1. **Meilleur ROI** : 211k€ vs 295k€ (Sc2) et 396k€ (Sc3)
2. **Couverture 100%** : Tous besoins résolus nativement
3. **Simplicité** : 2 outils vs 4-5
4. **Scalabilité** : Croissance supportée sans limite
5. **Déploiement rapide** : Quick wins M1-3

**Approche recommandée** :
1. **POC Odoo 1 mois** (gratuit Community)
2. **Si Go** : Déploiement Scénario 1
3. **Si UX CRM insuffisante** : Envisager Scénario 3 (Odoo + HubSpot)

---

### Scénario 3 (Hybride) Pertinent Si :

- ✅ Budget confortable (>400k€ sur 3 ans)
- ✅ UX CRM/SIRH critique (équipes exigeantes)
- ✅ Besoin app mobile 100% sur-mesure (CERFA ultra-personnalisés)
- ✅ Équipe dev interne ou prestataire long terme fiable
- ✅ Acceptation complexité technique
- ✅ Temps déploiement 12-18 mois acceptable

**Pour Duret** : ⚠️ Probablement **surdimensionné** sauf si :
- Budget validé >400k€
- Exigence UX CRM absolue (HubSpot)
- CERFA actuels vraiment trop spécifiques (à valider POC Odoo Field Service)

---

### Scénario 2 (EBP+) : ❌ **Non Recommandé**

**Raisons** :
- ❌ Plus cher que Scénario 1 (+83k€)
- ❌ Couverture moindre (88% vs 100%)
- ❌ Complexité élevée (5 outils)
- ❌ Scalabilité limitée (EBP max 20 users)
- ❌ Field Service et RFID non couverts

---

## 📋 CHECKLIST DÉCISION

### Avant de choisir :

- [ ] **POC Odoo 2 semaines** réalisé (Community gratuit)
- [ ] **Tests app mobile** Odoo Field Service par techniciens
- [ ] **Comparaison UX** : Odoo CRM vs HubSpot (démos)
- [ ] **Validation CERFA** : Templates Odoo Field Service suffisants ?
- [ ] **Budget validé CODIR** (211k€ Sc1 / 295k€ Sc2 / 396k€ Sc3)
- [ ] **3 devis intégrateurs** obtenus (Drakkar, Captivea, Osileo)
- [ ] **Équipe projet** constituée (sponsors, champions)
- [ ] **Critères Go/No-Go** définis

### Critères Go Scénario 1 (Odoo) :
- [ ] UX acceptable >80% testeurs
- [ ] App mobile Field Service validée techniciens
- [ ] CERFA digital répond besoin (templates personnalisables suffisants)
- [ ] Budget 211k€ validé
- [ ] Intégrateur BTP identifié

### Critères Go Scénario 3 (Hybride) :
- [ ] POC Odoo Field Service insuffisant (CERFA trop spécifiques)
- [ ] UX CRM Odoo rejetée (besoin HubSpot)
- [ ] Budget 396k€ validé CODIR
- [ ] Équipe dev identifiée (2 devs fullstack)
- [ ] Cahier charges app mobile détaillé
- [ ] Acceptance 12-18 mois déploiement

---

**Document créé le** : 2025-01-19
**Audit** : Duret Électricité
**Statut** : ✅ 3 Scénarios détaillés complets
**Recommandation** : 🏆 **Scénario 1 - Odoo + PayFit** (sauf exigences UX/custom critiques → Scénario 3)
