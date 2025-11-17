# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a comprehensive audit and digital transformation consulting project for **Duret Électricité**, a French electrical company. The repository contains analysis of current business processes, pain points, and proposed digital transformation solutions across multiple business services.

**Language:** All documentation is in French.

## Repository Structure

### Service Directories

The project is organized by business service, each following a standardized structure:

- **Achats-Logistique** - Purchasing & Logistics
- **Service-Client** - Customer Service
- **Chantiers** - Construction Sites
- **Maintenance-Technique** - Technical Maintenance
- **Albertville** - Albertville Site/Location
- **Direction-Affaires** - Business Management
- **Gestion-Operationnelle** - Operational Management
- **Ressources-Humaines** - Human Resources

### Standard Service Structure

Each service directory contains:

```
ServiceName/
├── README.md                          # Service overview and navigation guide
├── SYNTHESE_EXECUTIVE.md              # Executive summary (audit findings + proposed solution)
├── docs/                              # Analysis documents
│   ├── 01_PERSONAS_Pain_Points.md     # User personas and pain points
│   ├── 02_ARCHITECTURE_Actuelle_Chaos.md  # Current state architecture analysis
│   ├── 03_JOURNEY_MAPS_Parcours_Utilisateurs.md  # User journey maps
│   ├── 03_UML_DIAGRAMMES_VISUELS.md   # Mermaid diagrams (deprecated in favor of UML)
│   └── 04_MATRICES_VISUELLES.md       # Visual matrices and KPIs
├── implementation/                     # Implementation plans
│   ├── README.md                      # Implementation guide
│   ├── 02_Planning_Implementation.md  # 18-month implementation plan
│   ├── it-logiciel/                   # IT/Software architecture
│   │   └── 01_Architecture_Cible.md   # Target IT architecture
│   ├── bi-data-ml/                    # BI/Data/ML architecture
│   │   └── 01_Architecture_DataDriven.md  # Data and ML architecture
│   └── uml/                           # Implementation UML diagrams
├── plan/                              # Action plans
│   └── Plan_Action_ServiceName.md     # Complete action plan (source document)
└── uml/                               # PlantUML diagrams
    ├── README.md                      # Diagram usage guide
    ├── index.html                     # Web-based diagram viewer
    ├── plantuml.jar                   # PlantUML generator
    ├── *.puml                         # PlantUML source files
    ├── *.png                          # Generated PNG diagrams
    └── *.svg                          # Generated SVG diagrams (recommended for presentations)
```

### Support Directories

- **Comptes-Rendus/** - Audit meeting notes and interview transcripts
  - `NOTES_AUDIT_*.md` - Interview notes by role
  - `Integration_*.md` - Integration specifications (EBP, Odoo)
- **Documents/** - Original source documents
- **Originales/** - Original files archive

## Document Structure Philosophy

Each service follows a three-part structure:

1. **Audit (État Actuel)** - Current state analysis
   - Documented in `docs/` directory
   - Focus on "what is" not "what should be"
   - Pain points, personas, current architecture, user journeys

2. **Solution (État Cible)** - Proposed target state
   - Documented in `implementation/` directory
   - Two parallel tracks: IT/Software + BI/Data/ML
   - Target architecture and implementation plans

3. **Plan d'Action** - Implementation roadmap
   - 18-month phased approach (typically 3 phases of 6 months)
   - Pilot-first approach (test with 1-2 sites/teams first)
   - Progressive rollout with KPIs

## Working with PlantUML Diagrams

### Generating Diagrams

```bash
# Navigate to UML directory
cd <service>/uml/

# Generate single diagram as SVG (recommended for presentations)
java -jar plantuml.jar -tsvg 01_sequence_commande_actuelle.puml

# Generate single diagram as PNG
java -jar plantuml.jar 01_sequence_commande_actuelle.puml

# Generate all diagrams in directory
java -jar plantuml.jar -tsvg *.puml

# Generate all diagrams as PNG
java -jar plantuml.jar *.puml
```

### Standard UML Diagram Types

Each service typically includes these diagram types:

- **01_sequence_*.puml** - Sequence diagrams (process flows with timelines)
- **02_activity_*.puml** - Activity diagrams (workflows with decisions)
- **03_usecase_*.puml** - Use case diagrams (actors and actions)
- **04_state_*.puml** - State diagrams (lifecycle states)
- **05_component_*.puml** - Component diagrams (system architecture)
- **06_class_*.puml** - Class diagrams (data models)
- **07_deployment_*.puml** - Deployment diagrams (infrastructure)
- **08_timing_*.puml** - Timing diagrams (minute-by-minute timelines)
- **09_mindmap_*.puml** - Mind maps (hierarchical pain points)
- **10_wbs_*.puml** - WBS diagrams (work breakdown structure)
- **11_gantt_*.puml** - Gantt charts (before/after comparisons)
- **12_network_*.puml** - Network diagrams (data flows)

### VS Code Integration

Install the PlantUML extension and:
- Open any `.puml` file
- Press `Alt+D` for preview
- Right-click to export as PNG/SVG

## Creating New Service Documentation

When adding a new service analysis, follow these steps:

1. **Create directory structure**
   ```bash
   mkdir -p NewService/{docs,implementation/{it-logiciel,bi-data-ml,uml},plan,uml}
   ```

2. **Create core documents** (in order):
   - `plan/Plan_Action_NewService.md` - Start with raw audit findings
   - `docs/01_PERSONAS_Pain_Points.md` - Extract and detail personas
   - `docs/02_ARCHITECTURE_Actuelle_Chaos.md` - Analyze current state
   - `docs/03_JOURNEY_MAPS_Parcours_Utilisateurs.md` - Map user journeys
   - `docs/04_MATRICES_VISUELLES.md` - Create visual matrices and KPIs

3. **Create UML diagrams**
   - Create `.puml` files in `uml/` directory
   - Generate PNG and SVG versions
   - Copy `plantuml.jar` from another service directory

4. **Create implementation plans**
   - `implementation/it-logiciel/01_Architecture_Cible.md` - IT architecture
   - `implementation/bi-data-ml/01_Architecture_DataDriven.md` - Data/ML architecture
   - `implementation/02_Planning_Implementation.md` - 18-month plan

5. **Create navigation files**
   - `README.md` - Service overview and structure guide
   - `SYNTHESE_EXECUTIVE.md` - Executive summary combining audit + solution
   - `uml/README.md` - Diagram usage guide

## Key Documentation Principles

### Focus on Current State First
- The `docs/` directory should document ONLY the current state (problems, pain points, chaos)
- Avoid proposing solutions in audit documents
- Use phrases like "état actuel", "constaté", "fait observé"

### Personas are Central
Every analysis centers around user personas with:
- Name, age, role
- Pain points by severity (🔴 critical, 🟠 major, 🟡 moderate)
- Financial impact (€/year)
- Direct quotes (verbatim citations)
- Time lost per task

### Quantify Everything
Always include:
- Current vs target metrics in tables
- Cost of inefficiencies (€/year)
- Time metrics (hours per task, days per process)
- Error rates (% failed/incomplete)
- User satisfaction scores

### Visual First
Prioritize visual communication:
- UML diagrams over prose
- Tables and matrices over paragraphs
- Before/After comparisons
- Heat maps and dashboards

## File Naming Conventions

- **Numbered prefixes** - Documents are numbered by reading order (01_, 02_, etc.)
- **UPPERCASE for key files** - `README.md`, `SYNTHESE_EXECUTIVE.md`, `PERSONAS`, `ARCHITECTURE`
- **Descriptive suffixes** - `_Actuelle_Chaos`, `_Cible`, `_Pain_Points`
- **Snake_case for multi-word** - `Plan_Action_Service.md`

## Common Sections in Documents

### README.md Structure
1. Project title and focus
2. 📂 Structure du Dossier (directory tree)
3. 🎯 Par Où Commencer? (where to start)
4. 📊 Chiffres Clés (key metrics table)
5. 👥 Personas Principaux (main personas)
6. 🔴 Top Pain Points Critiques
7. Usage instructions
8. Links

### SYNTHESE_EXECUTIVE.md Structure
1. Title and scope
2. PARTIE 1: État des Lieux (Audit) - Current state
3. PARTIE 2: Solution Proposée - Target architecture
4. PARTIE 3: Plan d'Implémentation - 18-month roadmap
5. PARTIE 4: Bénéfices Attendus - Expected benefits
6. Prochaines Étapes - Next steps

### Implementation Plan Structure (18 months)
- **Phase 1 (M1-M6): Fondations** - MVP, pilot, clean data
- **Phase 2 (M7-M12): Intelligence** - Automation, ML, integrations, full rollout
- **Phase 3 (M13-M18): Excellence** - Advanced features, optimization, auto-pilot

## Technologies Referenced

### Systems Being Analyzed
- **Sage MDE** - Legacy ERP system
- **EBP** - Alternative ERP being evaluated
- **Odoo** - Open-source ERP being evaluated
- Excel (multiple versions, OneDrive sync issues)
- Manual processes (phone, paper, email)

### Proposed Solutions
- Mobile apps (React Native / Flutter)
- Web apps (React / Vue.js)
- Progressive Web Apps (PWA)
- Microservices architecture
- APIs and EDI integration (Rexel, Sonepar suppliers)
- Data Lake and Data Warehouse
- Machine Learning models (LSTM, Random Forest, NLP)
- BI Dashboards (real-time)

## Git Workflow Notes

The repository tracks work-in-progress with commits labeled "working". When completing service documentation:

1. Ensure all standard files are present
2. Generate all UML diagrams (PNG + SVG)
3. Verify cross-references between documents work
4. Check that metrics are consistent across all files
5. Commit with descriptive message indicating which service is complete

## Tips for Working in This Repository

1. **Always check the service README first** - It provides the navigation map
2. **Use the SYNTHESE_EXECUTIVE for quick overview** - Combines audit + solution
3. **Refer to completed services as templates** - Achats-Logistique, Service-Client, and Chantiers are complete
4. **Maintain consistency** - Use the same structure, emoji conventions, and section headers
5. **Keep diagrams in sync** - When updating text, update corresponding UML diagrams
6. **Preserve the French terminology** - This is critical for client delivery
7. **Follow the three-part structure** - Audit → Solution → Implementation
8. **Start with personas** - They drive all analysis and solutions
