# 🔧 Maintenance Technique & SAV - Documentation

> Analyse complète du service Maintenance Technique & SAV
> Focus: État ACTUEL (CERFA papier), besoins exprimés

---

## 📂 Structure du Dossier

```
Maintenance-Technique/
│
├── 📄 README.md                    ← Vous êtes ici
│
├── 📁 plan/                        ← Plan d'action et audit
│   └── Plan_Action_Maintenance_Technique.md
│       └── Document source complet
│           • Résumé audit
│           • Pain points détaillés
│           • Besoins exprimés
│           • 2 options (A, B)
│
├── 📁 docs/                        ← Documents de synthèse
│   ├── 01_PERSONAS_Pain_Points.md
│   │   └── 2 personas détaillés (Gaëtan, Clothilde)
│   │       • Profils utilisateurs
│   │       • Pain points par sévérité
│   │       • Citations verbatim
│   │
│   ├── 02_ARCHITECTURE_Actuelle_Chaos.md
│   │   └── État actuel du système (CERFA papier + Excel)
│   │       • Diagrammes ASCII
│   │       • Processus détaillés (intervention, RDV)
│   │       • Les impossibilités actuelles
│   │
│   └── 03_JOURNEY_MAPS_Parcours_Utilisateurs.md
│       └── Journey maps détaillées
│           • Parcours Gaëtan (journée type, devis terrain)
│           • Parcours Clothilde (prise RDV)
│           • Parcours Client (contrat maintenance cycle)
│
├── 📁 implementation/              ← Architecture cible
│   ├── README.md
│   ├── 02_Planning_Implementation.md
│   │   └── Timeline proposée
│   │
│   ├── 📁 it-logiciel/
│   │   └── 01_Architecture_Cible.md
│   │       └── Stack technique détaillé
│   │           • ERP/CRM Terrain (Praxedo/Synchroteam)
│   │           • App mobile techniciens (iOS/Android)
│   │           • Portail client self-service
│   │           • Sécurité RGPD
│   │
│   └── 📁 bi-data-ml/
│       └── 01_Architecture_DataDriven.md
│           └── Analytics & ML
│               • Zoning intelligent (ML routing)
│               • Enquête satisfaction auto
│               • Dashboards proposés
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
    └── 🖼️ Images PNG/SVG (à générer)
        └── 12 diagrammes prêts pour slides/impression
```

---

## 🎯 Par Où Commencer ?

### Pour Comprendre le Contexte

👉 **Lisez dans l'ordre:**
1. [plan/Plan_Action_Maintenance_Technique.md](plan/Plan_Action_Maintenance_Technique.md) - Source complète
2. [docs/01_PERSONAS_Pain_Points.md](docs/01_PERSONAS_Pain_Points.md) - Qui souffre ? (Gaëtan, Clothilde)
3. [docs/02_ARCHITECTURE_Actuelle_Chaos.md](docs/02_ARCHITECTURE_Actuelle_Chaos.md) - État actuel
4. [docs/03_JOURNEY_MAPS_Parcours_Utilisateurs.md](docs/03_JOURNEY_MAPS_Parcours_Utilisateurs.md) - Expérience utilisateur

### Pour l'Implémentation

👉 **Architecture technique:**
1. [implementation/02_Planning_Implementation.md](implementation/02_Planning_Implementation.md) - Roadmap proposée
2. [implementation/it-logiciel/01_Architecture_Cible.md](implementation/it-logiciel/01_Architecture_Cible.md) - Stack technique
3. [implementation/bi-data-ml/01_Architecture_DataDriven.md](implementation/bi-data-ml/01_Architecture_DataDriven.md) - Analytics & ML

### Pour une Vue Visuelle Rapide

👉 **Diagrammes recommandés:**
1. **Mind Map** (`uml/09_mindmap_pain_points.puml`) - Vue d'ensemble pain points
2. **Sequence** (`uml/01_sequence_intervention_actuelle.puml`) - Journée type Gaëtan
3. **Network** (`uml/12_network_flux_donnees.puml`) - Architecture cible
4. **Gantt** (`uml/11_gantt_comparaison.puml`) - CERFA papier vs digital

---

## 📊 Situation Actuelle

### Faits Constatés

| Aspect | État |
|--------|------|
| **Clients contrats maintenance** | ~250-300 |
| **Interventions** | CERFA papier remplis à la main |
| **Base clients** | Excel (non intégré app mobile) |
| **Planning RDV** | Téléphone (Clothilde) |
| **Devis terrain** | Impossible (opportunités perdues) |
| **Pointage heures** | Pas digital (refacturation difficile) |
| **Photos avant/après** | Téléphone perso (pas centralisées) |
| **Portail client** | Inexistant |

---

## 👥 Personas Principaux

### 1. Gaëtan - Technicien SAV Senior (42 ans)

- 🔴 **CERFA papier chronophage** (rempli à la main)
- 🔴 **Impossible générer devis terrain** (opportunités perdues)
- 🔴 **Pas de pointage GPS digital** (refacturation difficile)
- 🔴 **Photos sur téléphone perso** (pas centralisées, pas de traçabilité)
- 🔴 **Déplacements non optimisés** (pas de zoning intelligent)

### 2. Clothilde - Assistante Planning SAV (38 ans)

- 🔴 **Base clients Excel** (300 lignes, pas synchronisée app mobile)
- 🔴 **Prise RDV 100% téléphone** (chronophage)
- 🔴 **Contrats Word manuels** (interventions pas automatiques)
- 🔴 **Triple saisie** (Outlook + Excel + GAO)
- 🔴 **Pas d'alertes automatiques** (fin contrat, interventions dues)

---

## 🔴 Top 10 Pain Points Identifiés

1. **CERFA papier (tous remplis à la main)**
   - Chronophage, illisible, pas de photos intégrées, pas de traçabilité

2. **Demande devis terrain impossible**
   - Opportunités commerciales perdues

3. **Pointage heure arrivée/départ pas digital**
   - Refacturation heures supplémentaires difficile
   - Pas de preuve dépassement

4. **Enquête satisfaction non systématisée**
   - Risque perte clients non détecté

5. **Base données Excel (pas intégrée app)**
   - Ressaisies multiples, erreurs
   - Techniciens pas d'infos complètes terrain

6. **Photos téléphone perso (pas centralisées)**
   - Pas de suivi historique, date/endroit pas automatique

7. **Certificat mise en service papier**
   - Chronophage, archivage complexe

8. **Contrats Word manuels**
   - Interventions découlant pas automatiques
   - Planification manuelle, oublis possibles

9. **Pas de portail client**
   - Client ne peut pas prendre RDV en ligne
   - Appels entrants élevés, disponibilité 8h-18h uniquement

10. **Pas d'optimisation tournées**
    - Déplacements non optimisés géographiquement

---

## ✅ Recommandation Principale

### 👉 **Option A : ERP/CRM Terrain Intégré (Recommandé)**

**Pourquoi une Solution Intégrée ?**

- ✅ **Tout-en-un** : CRM + Planning + App mobile + Portail client + Workflows
- ✅ **Éprouvé** : Solutions spécialisées SAV/maintenance (Praxedo, Synchroteam)
- ✅ **Risque faible** : Pas de développement custom
- ✅ **Maintenance incluse** : Support éditeur
- ✅ **Écosystème** : 100+ intégrations natives (SAGE, téléphonie, etc.)

**Composantes** :
- ERP/CRM Terrain (Praxedo, Synchroteam, FieldPro)
- App mobile technicien (native dans ERP)
- Portail client (intégré ERP)
- Intégration GAO actuel
- Formation équipe

---

## 🎯 Bénéfices Attendus

### Gains Opérationnels

| Indicateur | AVANT | APRÈS |
|------------|-------|-------|
| **Rapport intervention** | CERFA papier | Digital 100% |
| **Devis terrain** | ❌ Impossible | ✅ App mobile |
| **Pointage heures** | ❌ Pas digital | ✅ GPS auto |
| **Photos** | Téléphone perso | ✅ Centralisées app |
| **Prise RDV** | Téléphone uniquement | ✅ Portail 24/7 |
| **Base clients** | Excel | ✅ CRM intégré |
| **Traçabilité** | ❌ Aucune | ✅ 100% |

### Bénéfices Utilisateurs

**Gaëtan (Technicien) :**
- Rapport intervention digital (vs CERFA papier)
- Génération devis terrain direct
- Pointage GPS automatique
- Photos intégrées géolocalisées

**Clothilde (Planning) :**
- Fini les RDV 100% téléphone
- Portail client self-service
- Alertes automatiques contrats
- Base CRM intégrée

**Clients :**
- Prise RDV en ligne 24/7
- Suivi interventions temps réel
- Historique accessible
- Image entreprise moderne

---

## 🎨 Utilisation des Diagrammes UML

### Pour PowerPoint / Google Slides

1. Les fichiers `.puml` sont dans le dossier `/uml/`
2. Générez les **SVG** (qualité vectorielle) avec PlantUML :

   ```bash
   cd Maintenance-Technique/uml
   java -jar plantuml.jar -tsvg *.puml
   ```

3. Importez les SVG dans vos slides
4. Redimensionnez sans perte de qualité

### Pour Impression / PDF

- Générez les **PNG** haute résolution :

  ```bash
  java -jar plantuml.jar -tpng *.puml
  ```

### Diagrammes Disponibles (12)

- **Sequence** : Intervention SAV actuelle (CERFA papier)
- **Activity** : Processus prise RDV
- **Use Case** : Acteurs et interactions (ERP Terrain)
- **State** : Cycle de vie intervention
- **Component** : Architecture cible (App mobile + Portail + ERP)
- **Class** : Modèle objet (Client, Contrat, Intervention, Rapport...)
- **Deployment** : Infrastructure cloud (Azure EU, sécurité RGPD)
- **Timing** : Timeline comparée (CERFA papier vs digital)
- **Mind Map** : Pain points
- **WBS** : Work Breakdown Structure
- **Gantt** : Comparaison avant/après
- **Network** : Flux de données (ERP ↔ App ↔ Portail ↔ SAGE)

---

## 📅 Historique

- **2025-11-17** - Création complète
  - Audit complet Maintenance Technique SAV
  - 2 personas détaillés (Gaëtan, Clothilde)
  - Architecture actuelle vs cible
  - Pain points identifiés
  - 2 options avec analyse
  - 12 diagrammes UML PlantUML
  - Architecture technique complète (IT + Data/ML)

---

## ⚠️ Important

Ce dossier documente:

- État ACTUEL (CERFA papier, Excel, GAO basique)
- Architecture CIBLE (ERP Terrain + App mobile + Portail client)
- Recommandations solutions

**Note** : Chiffrage financier détaillé à réaliser après sélection solution et étude de faisabilité approfondie.

---

## 🔗 Liens Utiles

### Documents Principaux

- [Plan d'Action Source](plan/Plan_Action_Maintenance_Technique.md)
- [Personas & Pain Points](docs/01_PERSONAS_Pain_Points.md) - Gaëtan, Clothilde
- [Architecture Actuelle](docs/02_ARCHITECTURE_Actuelle_Chaos.md) - CERFA papier
- [Journey Maps](docs/03_JOURNEY_MAPS_Parcours_Utilisateurs.md) - Parcours utilisateurs

### Architecture & Implémentation

- [Planning proposé](implementation/02_Planning_Implementation.md)
- [Architecture IT](implementation/it-logiciel/01_Architecture_Cible.md) - Stack technique
- [Architecture Data/ML](implementation/bi-data-ml/01_Architecture_DataDriven.md) - Zoning IA, Analytics

### Diagrammes UML

- [Dossier UML](uml/) - 12 diagrammes PlantUML (.puml)

---

**📧 Contact** : Maintenance Technique & SAV - Duret Électricité
**🎯 Objectif** : CERFA papier → 100% digital, App mobile, Portail client
**⏱️ Quick Win** : Digitalisation CERFA + App mobile techniciens
