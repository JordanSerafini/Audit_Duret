# 🔧 Maintenance Technique & SAV - Documentation

> Analyse complete du service Maintenance Technique & SAV
> Focus: Etat ACTUEL (CERFA papier), architecture CIBLE (ERP Terrain + App Mobile)

---

## 📂 Structure du Dossier

```
Maintenance-Technique/
│
├── 📄 README.md                    ← Vous etes ici
│
├── 📁 plan/                        ← Plan d'action et audit
│   └── Plan_Action_Maintenance_Technique.md
│       └── Document source complet (160 lignes)
│           • Resume audit
│           • Pain points detailles
│           • Besoins exprimes
│           • 2 options (A, B)
│           • ROI detaille
│
├── 📁 docs/                        ← Documents de synthese
│   ├── 01_PERSONAS_Pain_Points.md
│   │   └── 2 personas detailles (Gaetan, Clothilde)
│   │       • Profils utilisateurs
│   │       • Pain points par severite (13 total)
│   │       • Impact financier quantifie
│   │       • Citations verbatim
│   │
│   ├── 02_ARCHITECTURE_Actuelle_Chaos.md
│   │   └── Etat actuel du systeme (CERFA papier + Excel)
│   │       • Diagrammes ASCII
│   │       • Processus detailles (intervention, RDV)
│   │       • Couts de l'inefficacite (373.5K€/an conservateur)
│   │       • Les 10 impossibilites
│   │
│   ├── 03_JOURNEY_MAPS_Parcours_Utilisateurs.md
│   │   └── Journey maps detaillees
│   │       • Parcours Gaetan (journee type, devis terrain)
│   │       • Parcours Clothilde (prise RDV)
│   │       • Parcours Client (contrat maintenance cycle)
│   │       • Timeline comparee (CERFA 12min → 3min digital)
│   │
│   └── SYNTHESE_EXECUTIVE.md
│       └── Synthese executive pour direction
│           • Business case complet
│           • ROI 2 ans : 540K€
│           • Roadmap 18 mois (3 phases)
│           • Risques et mitigation
│
├── 📁 implementation/              ← Architecture cible
│   ├── README.md
│   ├── 02_Planning_Implementation.md
│   │   └── Timeline 18 mois, 10 jalons critiques
│   │
│   ├── 📁 it-logiciel/
│   │   └── 01_Architecture_Cible.md
│   │       └── Stack technique detaille
│   │           • ERP/CRM Terrain (Praxedo/Synchroteam)
│   │           • App mobile techniciens (iOS/Android)
│   │           • Portail client self-service
│   │           • Securite RGPD
│   │
│   └── 📁 bi-data-ml/
│       └── 01_Architecture_DataDriven.md
│           └── Analytics & ML
│               • Zoning intelligent (ML routing)
│               • Enquete satisfaction auto
│               • Prediction churn clients
│               • Power BI dashboards (5)
│               • 15 KPIs automatises
│
└── 📁 uml/                         ← Diagrammes UML
    ├── 📐 Fichiers PlantUML (.puml)
    │   ├── 01_sequence_intervention_actuelle.puml
    │   ├── 02_activity_prise_rdv.puml
    │   ├── 03_usecase_acteurs.puml
    │   ├── 04_state_cycle_intervention.puml
    │   ├── 05_component_architecture.puml
    │   ├── 06_class_modele_objet.puml
    │   ├── 07_deployment_infrastructure.puml
    │   ├── 08_timing_timeline_intervention.puml
    │   ├── 09_mindmap_pain_points.puml
    │   ├── 10_wbs_breakdown.puml
    │   ├── 11_gantt_comparaison.puml
    │   └── 12_network_flux_donnees.puml
    │
    └── 🖼️ Images PNG/SVG (a generer)
        └── 12 diagrammes prets pour slides/impression
```

---

## 🎯 Par Ou Commencer ?

### Pour une Presentation Direction

👉 **Lisez d'abord:**
1. [docs/SYNTHESE_EXECUTIVE.md](docs/SYNTHESE_EXECUTIVE.md) - Business case complet
2. Puis allez dans `/uml/` pour les visuels (Mind Map, Gantt)

### Pour Comprendre le Contexte

👉 **Lisez dans l'ordre:**
1. [plan/Plan_Action_Maintenance_Technique.md](plan/Plan_Action_Maintenance_Technique.md) - Source complete (160 lignes)
2. [docs/01_PERSONAS_Pain_Points.md](docs/01_PERSONAS_Pain_Points.md) - Qui souffre ? (Gaetan, Clothilde)
3. [docs/02_ARCHITECTURE_Actuelle_Chaos.md](docs/02_ARCHITECTURE_Actuelle_Chaos.md) - Pourquoi le chaos ?
4. [docs/03_JOURNEY_MAPS_Parcours_Utilisateurs.md](docs/03_JOURNEY_MAPS_Parcours_Utilisateurs.md) - Experience utilisateur

### Pour l'Implementation

👉 **Architecture technique:**
1. [implementation/02_Planning_Implementation.md](implementation/02_Planning_Implementation.md) - Roadmap 18 mois
2. [implementation/it-logiciel/01_Architecture_Cible.md](implementation/it-logiciel/01_Architecture_Cible.md) - Stack technique
3. [implementation/bi-data-ml/01_Architecture_DataDriven.md](implementation/bi-data-ml/01_Architecture_DataDriven.md) - Analytics & ML

### Pour une Vue Visuelle Rapide

👉 **Diagrammes recommandes:**
1. **Mind Map** (`uml/09_mindmap_pain_points.puml`) - Vue d'ensemble 290K€
2. **Gantt** (`uml/11_gantt_comparaison.puml`) - CERFA 12min → 3min digital
3. **Sequence** (`uml/01_sequence_intervention_actuelle.puml`) - Journee type Gaetan
4. **Network** (`uml/12_network_flux_donnees.puml`) - Architecture cible

---

## 📊 Chiffres Cles

| Metrique | Valeur |
|----------|--------|
| **Cout annuel des pertes** | 290,000€ (conservateur) |
| **Temps perdu CERFA papier** | 990h/an (880h tech + 110h Clothilde) |
| **Temps rapport intervention** | 12 min (vs 3 min possible) |
| **Clients contrats maintenance** | ~250-300 |
| **Interventions/an** | ~600 |
| **Devis terrain perdus/an** | 50 (0 actuellement) |
| **Refacturation heures impossible** | 30K€/an perdu |
| **Niveau stress Gaetan** | 7/10 |

---

## 👥 Personas Principaux

### 1. Gaetan - Technicien SAV Senior (42 ans)

- 🔴 **CERFA papier chronophage** (12 min/intervention)
- 🔴 **Impossible generer devis terrain** (45K€/an perdu)
- 🔴 **Pas de pointage GPS digital** (30K€/an refacturation perdue)
- 🔴 **Photos sur telephone perso** (pas centralisees, pas de traçabilite)
- 🔴 **Deplacements non optimises** (pas de zoning intelligent)
- 💰 **~50K€/an perdu** (1 technicien)

### 2. Clothilde - Assistante Planning SAV (38 ans)

- 🔴 **Base clients Excel** (300 lignes, pas synchronisee app mobile)
- 🔴 **Prise RDV 100% telephone** (19 min/RDV × 600 = 190h/an)
- 🔴 **Contrats Word manuels** (interventions pas automatiques)
- 🔴 **Triple saisie** (Outlook + Excel + GAO)
- 🔴 **Pas d'alertes automatiques** (fin contrat, interventions dues)
- 💰 **65K€/an perdu** (temps + opportunites)

---

## 🔴 Top 5 Pain Points Critiques

1. **CERFA papier (tous remplis a la main)**
   - 12 min/intervention × 4/jour × 220 jours × 5 techniciens = 880h/an
   - Illisible, pas de photos integrees, pas de traçabilite
   - 💰 20K€/an

2. **Demande devis terrain impossible**
   - 50 opportunites/an perdues (post-it → oublis)
   - 💰 45K€/an

3. **Pointage heure arrivee/depart pas digital**
   - Refacturation heures supplementaires difficile
   - Pas de preuve depassement
   - 💰 30K€/an

4. **Enquete satisfaction non systematisee**
   - Risque perte clients non detecte (20/an)
   - 💰 100K€/an

5. **Base donnees Excel (pas integree app)**
   - Ressaisies multiples, erreurs
   - Techniciens pas d'infos completes terrain
   - 💰 15K€/an

---

## ✅ Recommandation Principale

### 👉 **Option A : ERP/CRM Terrain Integre (Recommande)**

**Pourquoi une Solution Integree ?**

- ✅ **Tout-en-un** : CRM + Planning + App mobile + Portail client + Workflows
- ✅ **Eprouve** : Solutions specialisees SAV/maintenance (Praxedo, Synchroteam)
- ✅ **Risque faible** : Pas de developpement custom
- ✅ **ROI rapide** : 4-5 mois payback
- ✅ **Maintenance incluse** : Support editeur
- ✅ **Ecosysteme** : 100+ integrations natives (SAGE, telephonie, etc.)

**Composantes** :

- **Phase 1 (M1-3)** : Setup ERP + App mobile + CERFA = 0 → 30K€
- **Phase 2 (M4-6)** : Devis terrain + Portail client + Workflows → 35K€
- **Phase 3 (M7-18)** : Zoning IA + Analytics + Enquete satisfaction → 25K€
- **Run 18 mois** : Licences + maintenance → 15K€

**Investissement total 18 mois** : 105K€
**Gains annuels recurrents** : 270K€/an
**ROI 2 ans** : +540K€ (414%)
**Payback** : 4-5 mois

---

### Gains Detailles

| Gain | ROI/an |
|------|--------|
| CERFA digitalise (rapport app mobile 3 min) | 20K€ |
| Devis terrain (module app) | 45K€ |
| Pointage GPS digital (refacturation auto) | 30K€ |
| Planning RDV automatise (portail client 24/7) | 35K€ |
| Enquete satisfaction auto (retention +10%) | 100K€ |
| Alertes renouvellement contrats | 30K€ |
| Zoning intelligent (optimisation tournees -20% km) | 15K€ |
| Optimisation planning (IA) | 10K€ |
| **TOTAL** | **270K€/an** |

---

## 🎯 Quick Wins (Mois 1-3)

1. ✅ **Setup ERP Terrain** (Synchroteam ou Praxedo)
   - POC 3 solutions (J1-7)
   - Signature contrat J10

2. ✅ **Import 300 clients Excel → CRM**
   - Nettoyage donnees
   - Migration complete J30

3. ✅ **App mobile techniciens deployee**
   - iOS + Android
   - Formation 7 techniciens
   - Deploiement J60

4. ✅ **CERFA papier = 0% (J65)**
   - 100% rapports digitaux
   - Pointage GPS actif
   - Signature electronique
   - Photos integrees

**ROI Phase 1 (3 mois)** : 95K€/an (CERFA + Pointage + Base Excel)
**Payback Phase 1** : 4 mois

---

## 🎨 Utilisation des Diagrammes UML

### Pour PowerPoint / Google Slides

1. Les fichiers `.puml` sont dans le dossier `/uml/`
2. Generez les **SVG** (qualite vectorielle) avec PlantUML :

   ```bash
   cd Maintenance-Technique/uml
   java -jar plantuml.jar -tsvg *.puml
   ```

3. Importez les SVG dans vos slides
4. Redimensionnez sans perte de qualite

### Pour Impression / PDF

- Generez les **PNG** haute resolution :

  ```bash
  java -jar plantuml.jar -tpng *.puml
  ```

### Pour Modifier les Diagrammes

1. Editez les fichiers `.puml` dans un editeur de texte
2. Regenerez avec PlantUML (voir ci-dessus)
3. Syntaxe PlantUML : <https://plantuml.com>

### Diagrammes Disponibles (12)

- **Sequence** : Intervention SAV actuelle (CERFA papier, 2h44)
- **Activity** : Processus prise RDV (19 min vs 3 min)
- **Use Case** : Acteurs et interactions (ERP Terrain)
- **State** : Cycle de vie intervention (pointage GPS auto)
- **Component** : Architecture cible (App mobile + Portail + ERP)
- **Class** : Modele objet (Client, Contrat, Intervention, Rapport...)
- **Deployment** : Infrastructure cloud (Azure EU, securite RGPD)
- **Timing** : Timeline comparee (CERFA 12min → 3min digital)
- **Mind Map** : Pain points (290K€)
- **WBS** : Work Breakdown Structure (105K€, 3 phases)
- **Gantt** : Comparaison avant/apres (2h44 → 1h58)
- **Network** : Flux de donnees (ERP ↔ App ↔ Portail ↔ SAGE)

---

## 📅 Historique

- **2025-11-17** - Creation complete
  - Audit complet Maintenance Technique SAV
  - 2 personas detailles (Gaetan, Clothilde)
  - Architecture actuelle vs cible
  - Pain points quantifies (290K€/an)
  - 2 options avec ROI detaille
  - 12 diagrammes UML PlantUML
  - Synthese executive pour direction
  - Architecture technique complete (IT + Data/ML)
  - Planning implementation 18 mois

---

## ⚠️ Important

Ce dossier documente:

- Etat ACTUEL (CERFA papier, Excel, GAO basique)
- Architecture CIBLE (ERP Terrain + App mobile + Portail client)
- Plan d'implementation detaille (18 mois, 105K€)
- ROI business case (540K€ sur 2 ans, payback 4-5 mois)

---

## 🔗 Liens Utiles

### Documents Principaux

- [Plan d'Action Source](plan/Plan_Action_Maintenance_Technique.md) - 160 lignes
- [Synthese Executive](docs/SYNTHESE_EXECUTIVE.md) - Business case
- [Personas & Pain Points](docs/01_PERSONAS_Pain_Points.md) - Gaetan, Clothilde
- [Architecture Actuelle](docs/02_ARCHITECTURE_Actuelle_Chaos.md) - CERFA papier
- [Journey Maps](docs/03_JOURNEY_MAPS_Parcours_Utilisateurs.md) - CERFA 12min → 3min

### Architecture & Implementation

- [Planning 18 mois](implementation/02_Planning_Implementation.md) - 10 jalons
- [Architecture IT](implementation/it-logiciel/01_Architecture_Cible.md) - Stack technique
- [Architecture Data/ML](implementation/bi-data-ml/01_Architecture_DataDriven.md) - Zoning IA, Analytics

### Diagrammes UML

- [Dossier UML](uml/) - 12 diagrammes PlantUML (.puml)

---

**📧 Contact** : Maintenance Technique & SAV - Duret Electricite
**🎯 Objectif** : CERFA papier = 0, App mobile 100%, Portail client LIVE
**💰 Enjeu** : 290K€/an de pertes → 540K€ de gains sur 2 ans (ROI 414%)
**⏱️ Quick Win** : CERFA = 0 en M3 (3 mois)
