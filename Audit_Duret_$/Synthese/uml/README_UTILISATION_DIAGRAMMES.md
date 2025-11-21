# GUIDE D'UTILISATION - DIAGRAMMES PLANTUML
## Transformation Digitale Duret Électricité

---

## STRUCTURE DES FICHIERS

```
Synthese/uml/
├── puml/               ← Fichiers source PlantUML (.puml)
│   ├── 01_organigramme_projet.puml
│   ├── 02_raci_matrix_visual.puml
│   ├── 03_timeline_jalons_gonogo.puml
│   ├── 04_budget_repartition_vagues.puml
│   ├── 07_gantt_budget_temporel.puml
│   ├── 08_roi_projection.puml
│   ├── 09_architecture_it_globale_actuelle.puml
│   ├── 10_architecture_it_globale_cible.puml
│   └── ... (autres diagrammes)
│
├── png/                ← Images PNG (pour PowerPoint, Word)
│   ├── 01_organigramme_projet.png
│   ├── 02_raci_matrix_visual.png
│   └── ... (15 fichiers)
│
└── svg/                ← Images SVG (pour web, zoom infini)
    ├── 01_organigramme_projet.svg
    ├── 02_raci_matrix_visual.svg
    └── ... (14 fichiers)
```

---

## UTILISATION DES DIAGRAMMES

### 1. Présentation PowerPoint/Keynote

**Images recommandées**: PNG (haute résolution)

**Localisation**: `Synthese/uml/png/`

**Procédure**:
1. Ouvrir PowerPoint
2. Insertion > Image > Parcourir
3. Sélectionner fichier PNG souhaité
4. Redimensionner si nécessaire (qualité préservée)

**Exemple - Slide CODIR**:
```
Slide 1: 09_architecture_it_globale_actuelle.png (Chaos actuel)
Slide 2: 10_architecture_it_globale_cible.png (Vision cible)
Slide 3: 01_organigramme_projet.png (Gouvernance)
Slide 4: 03_timeline_jalons_gonogo.png (Planning 18 mois)
Slide 5: 04_budget_repartition_vagues.png (Budget)
Slide 6: 08_roi_projection.png (ROI 3 ans)
```

### 2. Documentation Word

**Images recommandées**: PNG

**Intégration**:
1. Positionnement curseur dans document
2. Insertion > Image > Image depuis fichier
3. Sélectionner PNG
4. Appliquer habillage texte (Carré, Haut et Bas...)

**Légende automatique**:
```
Insertion > Légende > "Figure X - [Nom diagramme]"
```

### 3. Documentation Markdown

**Images recommandées**: PNG (ou SVG pour GitHub/GitLab)

**Syntaxe**:
```markdown
# Architecture IT Actuelle

![Architecture Chaos Actuel](uml/png/09_architecture_it_globale_actuelle.png)

*Figure 1: Vue 360° des systèmes actuels - 8 services, 60+ Excel, 6 legacy*

---

# Architecture IT Cible

![Architecture Vision Cible](uml/png/10_architecture_it_globale_cible.png)

*Figure 2: Écosystème unifié (Odoo, Apps Mobile, SIRH, BI/ML)*
```

### 4. Site Web / Wiki

**Images recommandées**: SVG (vectoriel, zoom infini)

**HTML**:
```html
<figure>
  <img src="uml/svg/10_architecture_it_globale_cible.svg"
       alt="Architecture IT Cible"
       style="max-width: 100%; height: auto;">
  <figcaption>Figure 2: Vision cible écosystème Duret</figcaption>
</figure>
```

**Markdown (avec SVG)**:
```markdown
![Architecture Cible](uml/svg/10_architecture_it_globale_cible.svg)
```

### 5. Email / Partage Rapide

**Format recommandé**: PNG (universellement supporté)

**Procédure Outlook**:
1. Nouveau message
2. Insertion > Images > Parcourir
3. Sélectionner PNG
4. Image inline (affichée directement dans email)

---

## MODIFICATION DES DIAGRAMMES

### Prérequis

- Éditeur texte (VS Code, Notepad++, Sublime Text)
- Java installé (déjà présent: version 17.0.14)
- PlantUML JAR disponible: `Services/Achats-Logistique/uml/plantuml.jar`

### Workflow de Modification

#### Étape 1: Éditer le fichier .puml

Ouvrir fichier source avec éditeur texte:
```bash
code Synthese/uml/puml/01_organigramme_projet.puml
```

#### Étape 2: Modifier le contenu

Exemple - Ajouter un acteur:
```plantuml
' Avant
Person(chef_projet, "Chef Projet", "PMO Transformation")

' Après
Person(chef_projet, "Chef Projet", "PMO Transformation")
Person(data_analyst, "Data Analyst", "Expert BI/ML") ' ← NOUVEAU
```

#### Étape 3: Régénérer les images

**Commande PNG**:
```bash
cd Synthese/uml/puml
java -jar ../../../Services/Achats-Logistique/uml/plantuml.jar -tpng 01_organigramme_projet.puml
```

**Commande SVG**:
```bash
java -jar ../../../Services/Achats-Logistique/uml/plantuml.jar -tsvg 01_organigramme_projet.puml
```

**Génération batch (tous les diagrammes)**:
```bash
cd Synthese/uml/puml
java -jar ../../../Services/Achats-Logistique/uml/plantuml.jar -tpng -tsvg *.puml
```

#### Étape 4: Copier vers dossiers de sortie

```bash
cp Synthese/uml/puml/*.png Synthese/uml/png/
cp Synthese/uml/puml/*.svg Synthese/uml/svg/
```

---

## STYLES PARTAGÉS (NOUVEAUTÉ)

### Fichiers Styles Standards

Tous les nouveaux diagrammes utilisent des styles partagés:

```
Services/_shared/uml/styles/
├── duret_colors.puml     ← Palette couleurs (30+ constantes)
├── duret_layout.puml     ← Configuration layout globale
└── duret_legends.puml    ← Templates légendes réutilisables
```

### Inclusion dans Nouveaux Diagrammes

**Template standard** (à copier pour nouveaux diagrammes):

```plantuml
@startuml [nom_diagramme]

' === METADATA ===
' Service: [Nom Service]
' Date Creation: [YYYY-MM-DD]
' Auteur: [Nom]
' Version: 1.0
' Type Diagramme: [Sequence/Activity/Component/...]
' Description: [1 phrase résumé]
' === FIN METADATA ===

!include ../../../Services/_shared/uml/styles/duret_colors.puml
!include ../../../Services/_shared/uml/styles/duret_layout.puml
!include ../../../Services/_shared/uml/styles/duret_legends.puml

title [Titre Diagramme] - [ACTUEL/CIBLE/COMPARAISON]

' ... contenu diagramme ...

LEGEND_STANDARD()  ' ← Légende automatique

@enduml
```

### Constantes Couleurs Disponibles

**Acteurs**:
- `COLOR_ACTOR_CHANTIER` - #FFB6C1 (rose)
- `COLOR_ACTOR_BUREAU` - #ADD8E6 (bleu clair)
- `COLOR_ACTOR_DEPOT` - #98FB98 (vert clair)
- `COLOR_ACTOR_DIRECTION` - #DDA0DD (violet)
- `COLOR_ACTOR_RH` - #FFDAB9 (pêche)
- `COLOR_ACTOR_CLIENT` - #E6E6FA (lavande)

**Systèmes IT**:
- `COLOR_SYSTEME_LEGACY` - #FF6B6B (rouge)
- `COLOR_SYSTEME_CIBLE` - #90EE90 (vert)
- `COLOR_SYSTEME_EXCEL` - #FFD700 (jaune or)
- `COLOR_SYSTEME_CLOUD` - #E8F4F8 (bleu pâle)
- `COLOR_SYSTEME_MOBILE` - #B8E6B8 (vert pâle)

**États Processus**:
- `COLOR_ETAT_OK` - #E8F5E9 (vert très pâle)
- `COLOR_ETAT_WARNING` - #FFF9E6 (jaune pâle)
- `COLOR_ETAT_ERROR` - #FFCCCC (rouge pâle)
- `COLOR_ETAT_BLOCKED` - #FFFFCC (jaune clair)
- `COLOR_ETAT_INPROGRESS` - #E3F2FD (bleu très pâle)

**Priorités**:
- `COLOR_CRITIQUE` - #FF0000 (rouge foncé)
- `COLOR_IMPORTANT` - #FFA500 (orange)
- `COLOR_SOUHAITABLE` - #FFD700 (jaune)
- `COLOR_BONUS` - #90EE90 (vert)

---

## TEMPLATES LÉGENDES

### 7 Procédures Prêtes à l'Emploi

#### 1. Légende Standard
```plantuml
LEGEND_STANDARD()
```
Affiche: Problème critique (🔴), Attention (🟠), Temps perdu (⏰), Re-saisie (♻️), Blocage (⏸️), Succès (✅)

#### 2. Légende Couleurs
```plantuml
LEGEND_COLORS()
```
Affiche: Legacy (rouge), Cible (vert), Erreur, Alerte, OK

#### 3. Légende Acteurs
```plantuml
LEGEND_ACTEURS()
```
Affiche: Chef chantier, Bureau, Dépôt, Direction, RH, Client

#### 4. Légende Priorités
```plantuml
LEGEND_PRIORITES()
```
Affiche: Critique (🔴), Important (🟠), Souhaitable (🟡), Bonus (🟢)

#### 5. Légende Systèmes
```plantuml
LEGEND_SYSTEMES()
```
Affiche: Legacy, Cible, Excel, Cloud, Mobile

#### 6. Légende Phases
```plantuml
LEGEND_PHASES()
```
Affiche: Phase 0, Vague 1, Vague 2, Vague 3

#### 7. Légende Complète
```plantuml
LEGEND_COMPLETE()
```
Combine toutes les légendes ci-dessus

---

## CATALOGUE DIAGRAMMES DISPONIBLES

### Diagrammes Stratégiques (Synthèse)

| Nom Fichier | Type | Description | Usage Recommandé |
|-------------|------|-------------|------------------|
| **01_organigramme_projet.puml** | Component | Gouvernance projet 6 niveaux | Présentation CODIR, Kick-off |
| **02_raci_matrix_visual.puml** | Table | Matrice RACI colorée | Comités pilotage, Clarification rôles |
| **03_timeline_jalons_gonogo.puml** | Timing | Timeline 18 mois + 5 jalons | Présentation CODIR, Suivi projet |
| **04_budget_repartition_vagues.puml** | WBS | Budget 165-282K€ décomposé | Présentation CODIR, Validation budget |
| **07_gantt_budget_temporel.puml** | Gantt | Planning + cash-flow mensuel | Suivi financier, Comités |
| **08_roi_projection.puml** | Activity | ROI 36 mois (breakeven M21) | Présentation CODIR, Décision investissement |
| **09_architecture_it_globale_actuelle.puml** | Component | Chaos actuel (8 services, 60+ Excel) | Slide #1 CODIR - Urgence transformation |
| **10_architecture_it_globale_cible.puml** | Component C4 | Vision unifiée (Odoo, Apps, SIRH, BI) | Slide #2 CODIR - Futur souhaitable |

### Diagrammes Existants (Synthèse)

| Nom Fichier | Type | Description |
|-------------|------|-------------|
| 04_roadmap_3_vagues.puml | Mindmap | Roadmap 3 vagues détaillée |
| 05_patterns_transverses.puml | Mindmap | 6 patterns récurrents identifiés |
| Architecture_Cible_Globale.puml | Component | Architecture technique globale |
| Flux_Transformation_Digitale.puml | Activity | Workflow transformation complet |
| Matrice_Priorisation_Projets.puml | Table | Matrice Impact × Urgence |
| Vue_Ensemble_Services.puml | Component | Vue 360° services Duret |

---

## TROUBLESHOOTING

### Problème: "Error line XX in file"

**Cause**: Syntaxe PlantUML invalide

**Solutions**:
1. Vérifier syntaxe ligne indiquée
2. Tester avec PlantUML online: https://www.plantuml.com/plantuml/uml/
3. Consulter documentation: https://plantuml.com/fr/

### Problème: "Java not found"

**Cause**: Java non installé ou PATH incorrect

**Solution**:
```bash
# Vérifier installation Java
java -version

# Si erreur, installer Java 17+ LTS
# Télécharger: https://www.oracle.com/java/technologies/downloads/
```

### Problème: "plantuml.jar not found"

**Cause**: Chemin incorrect vers JAR

**Solution**:
```bash
# Vérifier localisation JAR
ls Services/Achats-Logistique/uml/plantuml.jar

# Si absent, télécharger dernière version
# URL: https://plantuml.com/download
```

### Problème: Image PNG floue dans PowerPoint

**Cause**: Redimensionnement excessif

**Solution**:
1. Ne pas agrandir au-delà de 150% taille originale
2. Régénérer image avec résolution supérieure si nécessaire
3. Utiliser SVG pour zoom infini (si PowerPoint 365 supporte)

### Problème: Emojis non affichés

**Cause**: Encodage fichier incorrect

**Solution**:
1. Vérifier encodage UTF-8 (pas UTF-8 BOM)
2. Utiliser éditeur texte UTF-8 (VS Code, Notepad++)
3. Remplacer emoji par équivalent texte si persistant

---

## BONNES PRATIQUES

### 1. Versionning

Toujours versionner fichiers .puml dans Git:
```bash
git add Synthese/uml/puml/*.puml
git commit -m "feat(uml): Ajout diagramme [nom]"
```

### 2. Nommage Fichiers

Convention: `XX_type_nom_descriptif.puml`
- `XX`: Numéro ordre (01, 02...)
- `type`: sequence|activity|component|state|mindmap|gantt|timing|wbs
- `nom`: snake_case descriptif

Exemples:
- ✅ `01_sequence_commande_actuelle.puml`
- ✅ `13_component_architecture_odoo.puml`
- ❌ `DiagrammeCommande.puml`
- ❌ `diag1.puml`

### 3. Metadata Obligatoire

Toujours inclure header metadata:
```plantuml
' === METADATA ===
' Service: [Achats-Logistique / Direction-Affaires / Synthese / ...]
' Date Creation: 2025-11-20
' Auteur: [Prénom Nom]
' Version: 1.0
' Type Diagramme: [Sequence/Activity/Component/...]
' Description: [1 phrase résumé objectif diagramme]
' === FIN METADATA ===
```

### 4. Includes Styles

TOUJOURS utiliser styles partagés (sauf diagrammes legacy):
```plantuml
!include ../../../Services/_shared/uml/styles/duret_colors.puml
!include ../../../Services/_shared/uml/styles/duret_layout.puml
!include ../../../Services/_shared/uml/styles/duret_legends.puml
```

### 5. Légende Systématique

Terminer TOUS les diagrammes par une légende:
```plantuml
LEGEND_STANDARD()  ' ou LEGEND_COLORS() selon contexte
```

### 6. Titres Explicites

Format: `title [Type Process] - [Service/Fonction] - [ACTUEL/CIBLE/COMPARAISON]`

Exemples:
- `title Processus Commande Materiel - Achats-Logistique - ÉTAT ACTUEL (CHAOS)`
- `title Architecture IT Globale - Synthèse Transverse - VISION CIBLE`

---

## RESSOURCES EXTERNES

### Documentation PlantUML

- Site officiel: https://plantuml.com/fr/
- Galerie exemples: https://real-world-plantuml.com/
- Cheat sheet: https://ogom.github.io/draw_uml/plantuml/
- Forum: https://forum.plantuml.net/

### Éditeurs Recommandés

**VS Code** (avec extension PlantUML):
- Extension: "PlantUML" par jebbs
- Preview temps réel (Alt+D)
- Auto-completion syntaxe

**IntelliJ IDEA** (avec plugin):
- Plugin: "PlantUML integration"
- Intégration IDE native

**Online Editor**:
- https://www.plantuml.com/plantuml/uml/
- Pas d'installation requise
- Partage via URL

### Formation PlantUML

**Tutoriel vidéo** (YouTube):
- "PlantUML Tutorial" (officiel)
- Durée: ~30 minutes

**Guide PDF**:
- PlantUML Language Reference Guide
- Télécharger: https://plantuml.com/guide

---

## CONTACT ET SUPPORT

**Questions techniques PlantUML**: Référent IT Projet
**Modifications diagrammes stratégiques**: Chef Projet Transformation
**Accès fichiers**: Repository Git projet
**Génération images automatique**: Scripts dans `Services/_shared/scripts/`

---

**Guide créé le**: 2025-11-20
**Version**: 1.0
**Maintenu par**: Équipe PlantUML Champions Duret
