# 📐 Diagrammes PlantUML - Direction & Gestion Affaires

> 12 diagrammes UML pour présentation slides
> État ACTUEL uniquement (pain points, problèmes, inefficacités)

---

## 📁 Liste des Diagrammes

### Processus & Flux

| Fichier | Type | Description | Usage Slide |
|---------|------|-------------|-------------|
| **01_sequence_creation_devis_actuel.puml** | Sequence | Processus création devis (2h05) | Timeline détaillée |
| **02_sequence_generation_ppsps_actuel.puml** | Sequence | Génération PPSPS manuelle (3h00) | Processus Word |
| **08_timing_timeline_devis.puml** | Timing | Timeline temporelle minute par minute | Vue chronologique |
| **11_gantt_comparaison.puml** | Gantt | Comparaison ACTUEL (2h05) vs CIBLE (31min) | Avant/Après |

### Architecture & Système

| Fichier | Type | Description | Usage Slide |
|---------|------|-------------|-------------|
| **03_usecase_acteurs.puml** | Use Case | 4 personas et leurs actions | Vue acteurs |
| **05_component_architecture.puml** | Component | Architecture chaos (ERP Legacy + Word + Excel) | Vue système |
| **06_class_modele_objet.puml** | Class | Modèle de données métier affaires | Vue technique |
| **07_deployment_infrastructure.puml** | Deployment | Infrastructure IT actuelle (VPN/Citrix) | Vue infra |
| **12_network_flux_donnees.puml** | Network | Flux de données entre systèmes | Vue réseau |

### États & Structure

| Fichier | Type | Description | Usage Slide |
|---------|------|-------------|-------------|
| **04_state_cycle_devis.puml** | State | Cycle de vie d'un devis | États métier |
| **09_mindmap_pain_points.puml** | Mind Map | Arbre des pain points | Vue globale |
| **10_wbs_breakdown.puml** | WBS | Décomposition des problèmes | Structure |

---

## 🎨 Comment Utiliser

### Option 1: Rendu en ligne
```bash
# Via PlantUML Web Server
https://www.plantuml.com/plantuml/uml/[votre_code]
```

### Option 2: VS Code
1. Installer extension "PlantUML"
2. Ouvrir fichier .puml
3. Alt+D pour preview
4. Exporter en PNG/SVG

### Option 3: Ligne de commande
```bash
# Installer PlantUML
sudo apt install plantuml

# Générer PNG
plantuml 01_sequence_creation_devis_actuel.puml

# Générer SVG (meilleur pour slides)
plantuml -tsvg 01_sequence_creation_devis_actuel.puml

# Générer tous
plantuml *.puml
```

### Option 4: Intégration PowerPoint/Google Slides
1. Générer SVG depuis .puml
2. Importer SVG dans slide
3. Redimensionner selon besoin

---

## 📊 Utilisation Recommandée par Type de Slide

### Slide "Vue d'ensemble"
- **09_mindmap_pain_points.puml** - Arbre des problèmes
- **10_wbs_breakdown.puml** - Structure WBS

### Slide "Processus devis"
- **01_sequence_creation_devis_actuel.puml** - Séquence détaillée (2h05)
- **04_state_cycle_devis.puml** - Cycle de vie

### Slide "Processus PPSPS"
- **02_sequence_generation_ppsps_actuel.puml** - Génération manuelle (3h00)

### Slide "Timeline / Durée"
- **08_timing_timeline_devis.puml** - Minute par minute
- **11_gantt_comparaison.puml** - Avant/Après

### Slide "Acteurs / Personas"
- **03_usecase_acteurs.puml** - Use cases par persona

### Slide "Architecture technique"
- **05_component_architecture.puml** - Composants
- **07_deployment_infrastructure.puml** - Infrastructure (VPN/Citrix)
- **12_network_flux_donnees.puml** - Flux réseau

### Slide "Modèle de données"
- **06_class_modele_objet.puml** - Classes métier

---

## 🎯 Messages Clés par Diagramme

| Diagramme | Message Principal |
|-----------|-------------------|
| Sequence Devis | 2h05 pour 1 devis, saisie 30 lignes × 5min |
| Sequence PPSPS | 3h00 100% manuel, risque oublis clauses |
| Use Case | 4 personas, ERP lent, templates chaos |
| State | Cycle devis avec recherche template 30 min |
| Component | ERP Legacy + Word + Excel non intégrés |
| Class | Modèle affaires avec visibilité direction nulle |
| Deployment | VPN+Citrix 30-40s/écran, télétravail impossible |
| Timing | Timeline devis minute par minute |
| Mind Map | 6 catégories de pain points majeurs |
| WBS | Structure des problèmes Direction-Affaires |
| Gantt | ACTUEL 2h05 vs CIBLE 31min = 4x plus rapide |
| Network | Flux données télétravail vs bureau |

---

## 🔴 Code Couleur

- **Rouge (#FF0000 / #FF6B6B)** = Pain point CRITIQUE
- **Orange (#FFD700)** = Pain point IMPORTANT
- **Jaune (#FFFFAA)** = Attention / Attente
- **Vert (#90EE90)** = OK / Succès
- **Rose (#FFB6C1)** = Laurent (Responsable Affaires)
- **Violet (#DDA0DD)** = Marie (Directrice)
- **Vert clair (#98FB98)** = Thomas (Bureau Études)
- **Bleu clair (#ADD8E6)** = Client

---

## 📈 Métriques Clés Visuelles

Tous les diagrammes incluent:

- ⏰ Temps perdu (2h05 devis, 3h00 PPSPS)
- 🔴 Pain points critiques (ERP 30-40s/écran)
- 📁 Chaos fichiers (200+ Word)
- 😤 Frustration (9/10 et 10/10)
- 🔴 Télétravail impossible

---

## 🎬 Ordre Suggéré pour Présentation

1. **09_mindmap_pain_points.puml** - Vue d'ensemble des problèmes
2. **03_usecase_acteurs.puml** - Qui sont les acteurs ?
3. **01_sequence_creation_devis_actuel.puml** - Processus devis (2h05)
4. **02_sequence_generation_ppsps_actuel.puml** - Processus PPSPS (3h00)
5. **08_timing_timeline_devis.puml** - Timeline détaillée
6. **04_state_cycle_devis.puml** - Cycle de vie et recherche template
7. **05_component_architecture.puml** - Pourquoi c'est le chaos ?
8. **07_deployment_infrastructure.puml** - VPN+Citrix = enfer
9. **12_network_flux_donnees.puml** - Flux de données éclatés
10. **10_wbs_breakdown.puml** - Structure des problèmes
11. **11_gantt_comparaison.puml** - L'objectif: 2h05 → 31min

---

## 💡 Tips

- **SVG recommandé** pour qualité slides
- **PNG** si SVG pose problème
- Tous les diagrammes sont **commentés** avec notes
- Les **couleurs** sont cohérentes entre diagrammes
- Chaque diagramme a un **note bottom** avec résumé
- Focus sur **problèmes observés** (timings, frustration)

---

**Créé le:** 2025-11-17
**Périmètre:** Direction & Gestion Affaires - État ACTUEL uniquement
**Format:** PlantUML (.puml)
**Usage:** Présentation slides
