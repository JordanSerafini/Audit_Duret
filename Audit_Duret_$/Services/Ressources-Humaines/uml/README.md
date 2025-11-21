# 📐 Diagrammes PlantUML - Ressources Humaines

> 9 diagrammes UML pour présentation slides
> État ACTUEL uniquement (pain points, chaos, problèmes)

---

## 📁 Liste des Diagrammes

### Processus & Flux

| Fichier | Type | Description | Usage Slide |
|---------|------|-------------|-------------|
| **01_sequence_processus_paie.puml** | Sequence | Processus paie mensuel complet (25-30h) | Timeline détaillée |
| **02_sequence_onboarding.puml** | Sequence | Onboarding nouveau salarié (39 tâches) | Parcours embauche |
| **04_activity_processus_conges.puml** | Activity | Workflow congés 100% papier | Processus métier |
| **09_timing_timeline_paie.puml** | Timing | Timeline paie sur 1 mois entier | Vue chronologique |

### Architecture & Système

| Fichier | Type | Description | Usage Slide |
|---------|------|-------------|-------------|
| **03_usecase_rh.puml** | Use Case | 5 personas et 15+ outils en silos | Vue acteurs |
| **07_component_architecture_systemes.puml** | Component | Architecture chaos (15+ outils isolés) | Vue système |
| **06_class_modele_donnees_rh.puml** | Class | Modèle de données RH en silos | Vue technique |
| **08_deployment_infrastructure.puml** | Deployment | Infrastructure IT actuelle (PC + papier) | Vue infra |

### États & Cycle de Vie

| Fichier | Type | Description | Usage Slide |
|---------|------|-------------|-------------|
| **05_state_cycle_vie_employe.puml** | State | Cycle de vie employé (8 états) | États métier |

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
# Générer PNG
java -jar plantuml.jar -tpng 01_sequence_processus_paie.puml

# Générer SVG (meilleur pour slides)
java -jar plantuml.jar -tsvg 01_sequence_processus_paie.puml

# Générer tous
java -jar plantuml.jar -tpng -tsvg *.puml
```

### Option 4: Intégration PowerPoint/Google Slides
1. Générer SVG depuis .puml
2. Importer SVG dans slide
3. Redimensionner selon besoin

---

## 📊 Utilisation Recommandée par Type de Slide

### Slide "Vue d'ensemble"
- **03_usecase_rh.puml** - Acteurs et outils en silos

### Slide "Processus paie"
- **01_sequence_processus_paie.puml** - Séquence détaillée (25-30h/mois)
- **09_timing_timeline_paie.puml** - Timeline sur 1 mois

### Slide "Onboarding chaos"
- **02_sequence_onboarding.puml** - 39 tâches manuelles

### Slide "Processus congés papier"
- **04_activity_processus_conges.puml** - Workflow 100% manuel

### Slide "Acteurs / Personas"
- **03_usecase_rh.puml** - Use cases par persona

### Slide "Architecture technique"
- **07_component_architecture_systemes.puml** - 15+ outils isolés
- **08_deployment_infrastructure.puml** - Infrastructure (PC + papier)

### Slide "Modèle de données"
- **06_class_modele_donnees_rh.puml** - Classes métier en silos

### Slide "Cycle de vie employé"
- **05_state_cycle_vie_employe.puml** - Machine à états (8 états)

---

## 🎯 Messages Clés par Diagramme

| Diagramme | Message Principal |
|-----------|-------------------|
| 01_Sequence Paie | 25-30h/mois, 8 re-saisies manuelles, processus étalé sur 1 mois |
| 02_Sequence Onboarding | 39 tâches manuelles, 240-300h/an, checklist Excel primitive |
| 03_Use Case | 5 personas, 15+ outils non intégrés, tout est manuel |
| 04_Activity Congés | 100% papier en 2025, pas de workflow digital |
| 05_State | 8 états de vie employé, transitions manuelles |
| 06_Class | Données saisies 6-8 fois, aucune synchronisation |
| 07_Component | 15+ systèmes en silos, Excel comme middleware |
| 08_Deployment | Données fragmentées (PC local + cloud + papier) |
| 09_Timing | Pics de charge: 15h30 en 2 jours pour la paie |

---

## 🔴 Code Couleur

- **Rouge (#FF6B6B)** = Pain point CRITIQUE / SAGE Paie
- **Orange (#FFD700)** = Pain point IMPORTANT / POPAYE
- **Jaune (#FFFFCC)** = Attention / Attente / Soulagement
- **Vert (#90EE90)** = Excel (7 fichiers)
- **Rose (#FFB6C1)** = Sophie (RH)
- **Bleu (#ADD8E6)** = Salariés
- **Mauve (#DDA0DD)** = Virginie (Paie externe)
- **Pêche (#FFDAB9)** = Managers
- **Saumon (#FFA07A)** = SILAE (externe)

---

## 📈 Métriques Clés Visuelles

Tous les diagrammes incluent:

- ⏰ Temps perdu (25-30h/mois paie)
- 🔴 Pain points critiques
- ❌ Taux d'erreur (10% sur calculs manuels)
- 😰 Impact émotionnel
- 📊 Données qualitatives (temps, fréquence, impact)

**IMPORTANT:** Aucun chiffre financier inventé. Seules les données réelles d'audit sont utilisées.

---

## 🎬 Ordre Suggéré pour Présentation

1. **03_usecase_rh.puml** - Vue d'ensemble: qui sont les acteurs et leurs douleurs ?
2. **01_sequence_processus_paie.puml** - Le pire cauchemar: processus paie (25-30h)
3. **09_timing_timeline_paie.puml** - Timeline détaillée du mois de paie
4. **02_sequence_onboarding.puml** - Onboarding chaos (39 tâches manuelles)
5. **04_activity_processus_conges.puml** - Congés 100% papier en 2025
6. **05_state_cycle_vie_employe.puml** - Cycle de vie employé
7. **07_component_architecture_systemes.puml** - Architecture en silos
8. **06_class_modele_donnees_rh.puml** - Données saisies 6-8 fois
9. **08_deployment_infrastructure.puml** - Infrastructure fragmentée

---

## 💡 Pain Points Principaux Illustrés

### 🔴 Processus Paie (Diag. 01, 09)
- 25-30h/mois pour Sophie
- Valorisation heures récup: 3h00 manuelle
- Calcul tickets resto: 3h30 manuelle
- 8+ re-saisies manuelles

### 🔴 Onboarding (Diag. 02)
- 39 tâches 100% manuelles
- Checklist Excel primitive
- 240-300h/an total

### 🔴 Architecture (Diag. 06, 07, 08)
- 15+ systèmes non intégrés
- Données saisies 6-8 fois
- SAGE ≠ POPAYE ≠ Excel ≠ SILAE
- 7 fichiers Excel comme "base de données"
- Archivage papier en 2025

### 🔴 Processus Congés (Diag. 04)
- 100% papier
- Pas de workflow digital
- Compteurs manuels incohérents

---

## 💡 Tips

- **SVG recommandé** pour qualité slides
- **PNG** si SVG pose problème
- Tous les diagrammes sont **commentés** avec notes
- Les **couleurs** sont cohérentes entre diagrammes
- Chaque diagramme a des **notes** avec résumé
- **Aucun chiffre financier inventé** - seules données réelles

---

**Créé le:** 2025-11-17
**Périmètre:** Ressources Humaines - État ACTUEL uniquement
**Format:** PlantUML (.puml)
**Usage:** Présentation slides
**Images générées:** PNG + SVG (18 fichiers)
