# 📅 PLANNING IMPLÉMENTATION - Gestion Opérationnelle

**Service** : Gestion Opérationnelle
**Durée totale** : 24 mois
**Investissement** : 
**ROI**  (2 ans)
**Payback** : 5,9 mois

---

## 🗺️ VUE D'ENSEMBLE 24 MOIS

```
M1 ──┬──────────── PHASE 1 : QUICK WINS (M1-M6) ──────────────┬── M6
      │                                                          │
      │  • RFID/QR Code Stocks (M1-M4)                          │
      │  • Dashboards Power BI KPI (M1-M5)                      │
      │  • Système Tickets BE (M2-M6)                           │
      │                                                          │
      │  Investissement :                                  │
      │  Gains : /an                                       │
      │  Payback : 4,8 mois                                     │
      │                                                          │
M7 ──┼────────── PHASE 2 : STRUCTURANT (M7-M18) ──────────────┼── M18
      │                                                          │
      │  • Migration ERP Odoo BTP (M7-M16)                      │
      │  • RBAC Transparence (M13-M15)                          │
      │  • ML Prédictif (M15-M18)                               │
      │                                                          │
      │  Investissement :                                  │
      │  Gains cumulés : 1,/an                             │
      │  Payback Phase 2 : 9 mois                               │
      │                                                          │
M19 ─┼───────── PHASE 3 : OPTIMISATION (M19-M24) ─────────────┼── M24
      │                                                          │
      │  • Gouvernance Données (M19-M21)                        │
      │  • Culture Data-Driven (M19-M24)                        │
      │                                                          │
      │  Investissement :                                  │
      │  Gains maintenus : 1,/an                           │
      └──────────────────────────────────────────────────────────┘
```

---

## 📍 PHASE 1 : QUICK WINS (Mois 1-6) - 

### Objectif
Résoudre pain points critiques immédiats avec ROI rapide

### Projet 1 : RFID/QR Code Réception Stocks (M1-M4)

**Durée** : 4 mois
**Budget** : 
**Gains** : /an (-88% temps réception)

| Mois | Jalons | Livrables |
|------|--------|-----------|
| **M1** | POC RFID dépôt Annecy | - RFI 4 fournisseurs RFID<br>- Sélection solution (Zebra ou équivalent)<br>- Installation portiques RFID (2× portes)<br>- Tags RFID échantillons (100 produits) |
| **M2** | Tests POC | - Tests réception 50 BL<br>- Formation Isabelle + 2 magasiniers<br>- Mesure gains temps (vs avant)<br>- Ajustements config |
| **M3** | Déploiement Annecy | - Installation complète dépôt Annecy<br>- Taggage 80% stock existant (2 000 produits)<br>- Intégration Lireco (API)<br>- Formation équipe stock (4 personnes) |
| **M4** | Déploiement Albertville | - Installation dépôt Albertville<br>- Taggage stock<br>- Formation équipe<br>- **GO-LIVE** |

**Équipe** :
- Chef projet : Isabelle (50%)
- Intégrateur RFID : Externe (prestataire)
- Dev intégration Lireco : Externe (freelance)

**KPIs succès** :
- Temps réception BL : 25 min → 45 sec (-97%)
- Erreurs comptage  → 0%
- Satisfaction magasiniers : >4/5

---

### Projet 2 : Dashboards Power BI KPI Temps Réel (M1-M5)

**Durée** : 5 mois
**Budget** : 
**Gains** : /an (temps Sylvie -92%, décisions temps réel)

| Mois | Jalons | Livrables |
|------|--------|-----------|
| **M1** | Audit données + Ateliers | - Audit SAGE + MDE (APIs, qualité données)<br>- Ateliers besoins KPIs (direction, Sylvie, RA, chefs)<br>- Cahier charges dashboards (20 KPIs identifiés) |
| **M2-M3** | Dev Dashboards | - Dashboard Direction (CA, marges, trésorerie, projection ML)<br>- Dashboard Sylvie (détails analytiques)<br>- Dashboard RA (leurs affaires RBAC)<br>- Connexions SAGE + MDE (ETL Power Query) |
| **M4** | Dev Dashboards Chefs + Tests | - Dashboard Chefs Chantier (RBAC : leur chantier)<br>- Tests utilisateurs (Sylvie, 2 RA, 3 chefs)<br>- Ajustements UX |
| **M5** | Formation + GO-LIVE | - Formation direction (2h)<br>- Formation Sylvie + RA + Chefs (1j)<br>- **GO-LIVE progressif**<br>- Support réactif (hotline 2 mois) |

**Équipe** :
- Chef projet : Sylvie (30%)
- Consultant Power BI : Externe (senior)
- Data engineer : Externe (ETL SAGE/MDE)

**KPIs succès** :
- Temps génération KPI mensuels : 24h → 2h (-92%)
- Délai remontée info : J+15 → Temps réel
- Adoption dashboards : >90% utilisateurs
- Satisfaction : >4,5/5

---

### Projet 3 : Système Tickets BE (M2-M6)

**Durée** : 5 mois
**Budget** : 
**Gains** : /an (+81% productivité BE)

| Mois | Jalons | Livrables |
|------|--------|-----------|
| **M2** | Benchmark + Ateliers | - Benchmark solutions (Jira, Asana, Linear, Monday)<br>- Ateliers workflows BE (Thomas + 10 demandeurs)<br>- Sélection solution (ex: Linear) |
| **M3-M4** | Configuration + Algo | - Config Linear (projets, workflows, statuts)<br>- Formulaire demandes standardisé<br>- **Algorithme priorisation** (critères pondérés)<br>- Intégrations (mails, notifs) |
| **M5** | Tests Pilote | - Tests avec 5 demandeurs pilotes<br>- 20 demandes traitées via système<br>- Ajustements algo priorisation<br>- Formation Thomas + équipe BE |
| **M6** | Déploiement Général | - Communication interne (mail + réunion)<br>- Formation 20+ demandeurs (1h)<br>- **GO-LIVE**<br>- Support 3 mois |

**Équipe** :
- Chef projet : Thomas (40%)
- Consultant Linear : Externe (config)
- Dev algo priorisation : Externe (Python)

**KPIs succès** :
- Demandes en attente : 28 → 15 (-46%)
- Productivité BE  → 78% (+81%)
- Satisfaction demandeurs : >4/5
- Conflits interpersonnels : -80%

---

## 📍 PHASE 2 : STRUCTURANT (Mois 7-18) - 

### Projet 4 : Migration ERP Odoo BTP (M7-M16)

**Durée** : 10 mois
**Budget** : 
**Gains** : /an (remplacement MDE obsolète)

**Planning détaillé** :

| Mois | Jalons | Livrables |
|------|--------|-----------|
| **M7-M8** | Benchmark + POC | - Benchmark ERP (Odoo vs ERPNext vs Dolibarr)<br>- Sélection Odoo Community (open-source)<br>- POC 6 semaines : Modules Affaires, Achats, Stocks<br>- Tests 5 users clés (Sylvie, RA, Isabelle, Chef, Assistante) |
| **M9-M10** | Go/No-Go + Préparation | - Go/No-Go migration (basé POC)<br>- **Si GO** : Audit qualité données SAGE + MDE<br>- Nettoyage données (doublons, incohérences)<br>- Plan migration (progressive) |
| **M11-M12** | Migration Phase 1 | - **Affaires + Devis** : Migration données + config Odoo<br>- Formation RA (3j)<br>- Tests 1 mois (double run SAGE+Odoo)<br>- **Switch affaires nouvelles sur Odoo** |
| **M13-M14** | Migration Phase 2 | - **Achats + Stocks** : Migration + intégration RFID<br>- Formation Isabelle + achats (3j)<br>- Tests + **Switch** |
| **M15** | Migration Phase 3 | - **Compta Analytique** : Migration + config<br>- Formation Sylvie (2j)<br>- Tests + **Switch** |
| **M16** | Intégrations + Clôture | - Intégration SAGE Comptabilité (API)<br>- Intégration Power BI (data source Odoo)<br>- App mobile Odoo (iOS + Android)<br>- Formation générale (5j × 30 users)<br>- **GO-LIVE complet** |

**Équipe** :
- Chef projet : RA senior (50%)
- Intégrateur Odoo : Externe (certifié)
- Dev custom : 2× externes (Python Odoo)
- Data engineer : Migration données

**KPIs succès** :
- Vitesse écrans : <2 sec (vs 30 sec MDE)
- Plantages : 0 (vs 2-3×/sem)
- Adoption mobile : >80% chefs/techniciens
- Satisfaction : >4/5

---

### Projet 5 : RBAC Transparence (M13-M15)

**Durée** : 3 mois
**Budget** : 
**Gains** : Inclus gains ERP + dashboards

| Mois | Jalons | Livrables |
|------|--------|-----------|
| **M13** | Définition Rôles | - Ateliers : Définir rôles (8 rôles identifiés)<br>- Matrice permissions (lecture/écriture/suppr par rôle) |
| **M14** | Config Odoo + Power BI | - Config permissions Odoo (RBAC granulaire)<br>- Config Power BI (RLS Row-Level Security)<br>- Audit trail activé (logs toutes actions) |
| **M15** | Tests + Formation | - Tests utilisateurs (30 users, vérif permissions OK)<br>- Formation "Transparence données" (2h tous)<br>- **GO-LIVE** |

**8 Rôles définis** :
1. Admin (direction) : Accès TOUT
2. Contrôleur Gestion (Sylvie) : Accès TOUT lecture, KPI écriture
3. Responsable Affaire : Accès SES affaires (lecture/écriture)
4. Chef Chantier : Accès SON chantier (lecture), budget consommé (lecture)
5. Technicien SAV : Accès SES interventions
6. Magasinier : Accès stocks (lecture/écriture)
7. Assistante : Accès clients, agenda (lecture/écriture)
8. Lecture seule : Visualisation dashboards uniquement

---

### Projet 6 : ML Prédictif (M15-M18)

**Durée** : 4 mois
**Budget** : 
**Gains** : /an (anticipation dépassements, optimisation planning)

| Mois | Jalons | Livrables |
|------|--------|-----------|
| **M15** | Data Lake + Prep Données | - Setup Azure SQL Database (Data Warehouse)<br>- Azure Blob Storage (historiques)<br>- ETL Odoo → Data Lake (automatisé)<br>- Nettoyage données ML (2 ans historique) |
| **M16-M17** | Dev Modèles ML | - **Modèle 1** : Projection CA 3 mois (LSTM/Prophet)<br>- **Modèle 2** : Détection anomalies budgets (Isolation Forest)<br>- **Modèle 3** : Optimisation planning (algo glouton)<br>- Entraînement + validation (R² >0.85 cible) |
| **M18** | Intégration + GO-LIVE | - Intégration dashboards Power BI (onglet "Prédictions IA")<br>- Alertes automatiques anomalies (mail + notif)<br>- Formation Sylvie + Direction (1j)<br>- **GO-LIVE** |

**Équipe** :
- Data Scientist : Externe (senior ML)
- Data Engineer : Setup Data Lake
- Consultant Power BI : Intégration dashboards

**KPIs succès** :
- Précision projection CA : >85% (±15%)
- Taux détection anomalies : >80%
- Dépassements budgets anticipés : -50% (vs actuellement 0%)

---

## 📍 PHASE 3 : OPTIMISATION (Mois 19-24) - 

### Projet 7 : Gouvernance Données (M19-M21)

**Durée** : 3 mois
**Budget** : 
**Gains** : Qualité données +90%

| Mois | Jalons | Livrables |
|------|--------|-----------|
| **M19** | Audit Data Quality | - Audit qualité données (doublons, incohérences, complétude)<br>- Rapport data quality (score actuel) |
| **M20** | Nettoyage + MDM | - Nettoyage automatisé (scripts Python)<br>- MDM Master Data Management (Clients, Produits, Fournisseurs)<br>- Référentiels uniques |
| **M21** | Gouvernance + CDO | - Désignation Chief Data Officer (Sylvie ?)<br>- Politique gouvernance données (doc)<br>- Contrôles qualité automatisés (alertes)<br>- **GO-LIVE** |

---

### Projet 8 : Culture Data-Driven (M19-M24)

**Durée** : 6 mois
**Budget** : 
**Gains** : Adoption +95%, résistance -80%

| Mois | Jalons | Livrables |
|------|--------|-----------|
| **M19-M20** | Formation Direction + Managers | - Formation direction (2j : "Piloter par la data")<br>- Formation managers (3j : "Dashboards + décisions") |
| **M21-M24** | Accompagnement Changement | - 4× Champions internes (Sylvie, Thomas, 2 RA)<br>- Ateliers mensuels partage best practices<br>- Communication gains (newsletter interne)<br>- Support continu (6 mois) |

---

## 📊 JALONS DÉCISION (GO/NO-GO)

| Mois | Jalon | Décision |
|------|-------|----------|
| **M0** | **Validation Direction** | GO/NO-GO Phase 1 () |
| **M6** | **Bilan Phase 1** | GO/NO-GO Phase 2 () basé ROI réel P1 |
| **M11** | **POC Odoo** | GO/NO-GO migration ERP (après POC 6 sem) |
| **M18** | **Bilan Phase 2** | GO/NO-GO Phase 3 () |
| **M24** | **Bilan Final** | Mesure ROI global 2 ans |

---

## 💰 BUDGET DÉTAILLÉ 24 MOIS

### Phase 1 (M1-M6) : 

| Projet | Budget |
|--------|--------|
| RFID Stocks |  |
| Dashboards Power BI |  |
| Système Tickets BE |  |
| **TOTAL PHASE 1** | **** |

### Phase 2 (M7-M18) : 

| Projet | Budget |
|--------|--------|
| Migration ERP Odoo |  |
| RBAC Transparence |  |
| ML Prédictif |  |
| **TOTAL PHASE 2** | **** |

### Phase 3 (M19-M24) : 

| Projet | Budget |
|--------|--------|
| Gouvernance Données |  |
| Culture Data-Driven |  |
| **TOTAL PHASE 3** | **** |

### TOTAL 24 MOIS : 

---

## 🎯 KPIs SUIVI PLANNING

| Jalon | Date Cible | Critère Succès |
|-------|------------|----------------|
| GO-LIVE RFID | M4 | Réception <1 min/BL |
| GO-LIVE Dashboards | M5 | KPI temps réel accessibles |
| GO-LIVE Tickets BE | M6 | 100% demandes via système |
| GO-LIVE Odoo Affaires | M12 | 100% nouvelles affaires sur Odoo |
| GO-LIVE Odoo Complet | M16 | 0 utilisation MDE |
| GO-LIVE ML | M18 | Prédictions >85% précision |
| Bilan Final | M24 | ROI >250% mesuré |

---

**Date création** : 2025-11-17
**Version** : v1.0
**Statut** : Prêt exécution
