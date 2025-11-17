# 📐 Diagrammes PlantUML - Achats & Logistique

> 12 diagrammes UML pour présentation slides
> État ACTUEL uniquement (pain points, chaos, problèmes)

---

## 📁 Liste des Diagrammes

### Processus & Flux

| Fichier | Type | Description | Usage Slide |
|---------|------|-------------|-------------|
| **01_sequence_commande_actuelle.puml** | Sequence | Processus complet commande sur 3 jours | Timeline détaillée |
| **02_activity_processus_commande.puml** | Activity | Workflow avec décisions et pain points | Processus métier |
| **08_timing_timeline_commande.puml** | Timing | Timeline temporelle minute par minute | Vue chronologique |
| **11_gantt_commande_comparaison.puml** | Gantt | Comparaison ACTUEL (3j) vs CIBLE (2h) | Avant/Après |

### Architecture & Système

| Fichier | Type | Description | Usage Slide |
|---------|------|-------------|-------------|
| **03_usecase_acteurs.puml** | Use Case | 5 personas et leurs actions | Vue acteurs |
| **05_component_architecture.puml** | Component | Architecture chaos (6 outils) | Vue système |
| **06_class_modele_objet.puml** | Class | Modèle de données métier | Vue technique |
| **07_deployment_infrastructure.puml** | Deployment | Infrastructure IT actuelle | Vue infra |
| **12_network_flux_donnees.puml** | Network | Flux de données entre systèmes | Vue réseau |

### États & Structure

| Fichier | Type | Description | Usage Slide |
|---------|------|-------------|-------------|
| **04_state_cycle_commande.puml** | State | Cycle de vie d'une commande | États métier |
| **09_mindmap_pain_points.puml** | Mind Map | Arbre des pain points (910K€) | Vue globale |
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
plantuml 01_sequence_commande_actuelle.puml

# Générer SVG (meilleur pour slides)
plantuml -tsvg 01_sequence_commande_actuelle.puml

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

### Slide "Processus actuel"
- **01_sequence_commande_actuelle.puml** - Séquence détaillée
- **02_activity_processus_commande.puml** - Workflow

### Slide "Timeline / Durée"
- **08_timing_timeline_commande.puml** - Minute par minute
- **11_gantt_commande_comparaison.puml** - Avant/Après

### Slide "Acteurs / Personas"
- **03_usecase_acteurs.puml** - Use cases par persona

### Slide "Architecture technique"
- **05_component_architecture.puml** - Composants
- **07_deployment_infrastructure.puml** - Infrastructure
- **12_network_flux_donnees.puml** - Flux réseau

### Slide "Modèle de données"
- **06_class_modele_objet.puml** - Classes métier

### Slide "États / Cycle de vie"
- **04_state_cycle_commande.puml** - Machine à états

---

## 🎯 Messages Clés par Diagramme

| Diagramme | Message Principal |
|-----------|-------------------|
| Sequence | 3 jours pour 1 commande, 12 appels, 50% d'erreur |
| Activity | 100% manuel, 6 re-saisies, goulots partout |
| Use Case | 5 personas, tous en souffrance, outils en silos |
| State | 50% des commandes finissent en erreur |
| Component | 6 outils non intégrés, Sylvie = hub central |
| Class | 12 références pour 1 produit = CHAOS |
| Deployment | Infrastructure obsolète, 1 PC pour 3 personnes |
| Timing | 3 jours dont 70h d'attente inutile |
| Mind Map | 910K€/an de pertes réparties en 6 catégories |
| WBS | Structure des 910K€ de pertes |
| Gantt | ACTUEL 3j vs CIBLE 2h = 36x plus rapide |
| Network | Données éparpillées, pas d'intégration |

---

## 🔴 Code Couleur

- **Rouge (#FF6B6B)** = Pain point CRITIQUE
- **Orange (#FFD700)** = Pain point IMPORTANT
- **Jaune (#FFFFAA)** = Attention / Attente
- **Vert (#90EE90)** = OK / Succès
- **Rose (#FFB6C1)** = Marc (Chef Chantier)
- **Bleu (#ADD8E6)** = Sylvie (Achats)
- **Vert clair (#98FB98)** = Éric (Dépôt)

---

## 📈 Métriques Clés Visuelles

Tous les diagrammes incluent:

- ⏰ Temps perdu
- 💰 Coût financier
- 🔴 Pain points critiques
- ❌ Taux d'erreur
- 😭 Impact émotionnel

---

## 🎬 Ordre Suggéré pour Présentation

1. **09_mindmap_pain_points.puml** - Vue d'ensemble des problèmes
2. **03_usecase_acteurs.puml** - Qui sont les acteurs ?
3. **01_sequence_commande_actuelle.puml** - Comment ça marche aujourd'hui ?
4. **08_timing_timeline_commande.puml** - Timeline détaillée
5. **04_state_cycle_commande.puml** - Cycle de vie et taux d'échec
6. **05_component_architecture.puml** - Pourquoi c'est le chaos ?
7. **12_network_flux_donnees.puml** - Flux de données éclatés
8. **10_wbs_breakdown.puml** - Structure des 910K€ de pertes
9. **11_gantt_commande_comparaison.puml** - L'objectif: 3j → 2h

---

## 💡 Tips

- **SVG recommandé** pour qualité slides
- **PNG** si SVG pose problème
- Tous les diagrammes sont **commentés** avec notes
- Les **couleurs** sont cohérentes entre diagrammes
- Chaque diagramme a un **note bottom** avec résumé

---

**Créé le:** 2025-11-17
**Périmètre:** Achats-Logistique - État ACTUEL uniquement
**Format:** PlantUML (.puml)
**Usage:** Présentation slides
