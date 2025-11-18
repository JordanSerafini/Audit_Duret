# 📦 Achats & Logistique - Documentation

> Analyse complète du service Achats-Logistique
> Focus: État ACTUEL, pain points, personas, besoins

---

## 📂 Structure du Dossier

```
Achats-Logistique/
│
├── 📄 README.md                    ← Vous êtes ici
│
├── 📁 plan/                        ← Plan d'action et audit
│   └── Plan_Action_Achats_Logistique.md
│       └── Document source complet
│           • Résumé audit
│           • Pain points détaillés
│           • Besoins exprimés par persona
│
├── 📁 docs/                        ← Documents de synthèse
│   ├── 01_PERSONAS_Pain_Points.md
│   │   └── 5 personas détaillés (Marc, Sylvie, Julien, Éric, Christine)
│   │       • Profils utilisateurs
│   │       • Pain points par sévérité
│   │       • Citations verbatim
│   │
│   ├── 02_ARCHITECTURE_Actuelle_Chaos.md
│   │   └── État actuel du système (chaos)
│   │       • Diagrammes ASCII
│   │       • Processus détaillés
│   │       • Les 10 impossibilités
│   │
│   ├── 03_JOURNEY_MAPS_Parcours_Utilisateurs.md
│   │   └── Journey maps détaillées
│   │       • Parcours Marc (commande)
│   │       • Parcours Sylvie (traitement)
│   │       • Parcours Éric (réception)
│   │       • Parcours Julien (suivi coûts)
│   │       • Timeline comparée
│   │
│   ├── 03_UML_DIAGRAMMES_VISUELS.md (Mermaid)
│   │   └── Diagrammes en format Mermaid
│   │       ⚠️ Remplacés par les .puml dans /uml/
│   │
│   └── 04_MATRICES_VISUELLES.md
│       └── Matrices et tableaux visuels
│           • Matrice sévérité × fréquence
│           • Heat maps personas × pain points
│           • Comparaisons avant/après
│
└── 📁 uml/                         ← Diagrammes UML (RECOMMANDÉ)
    ├── README.md                   ← Guide d'utilisation
    ├── index.html                  ← Visualisation web
    │
    ├── 📐 Fichiers PlantUML (.puml)
    │   ├── 01_sequence_commande_actuelle.puml
    │   ├── 02_activity_processus_commande.puml
    │   ├── 03_usecase_acteurs.puml
    │   ├── 04_state_cycle_commande.puml
    │   ├── 05_component_architecture.puml
    │   ├── 06_class_modele_objet.puml
    │   ├── 07_deployment_infrastructure.puml
    │   ├── 08_timing_timeline_commande.puml
    │   ├── 09_mindmap_pain_points.puml
    │   ├── 10_wbs_breakdown.puml
    │   ├── 11_gantt_commande_comparaison.puml
    │   └── 12_network_flux_donnees.puml
    │
    ├── 🖼️ Images PNG (pour impression)
    │   └── 12 diagrammes en PNG haute résolution
    │
    ├── 🎨 Images SVG (pour slides - RECOMMANDÉ)
    │   └── 12 diagrammes en SVG vectoriel
    │
    └── ⚙️ Outils
        └── plantuml.jar (générateur)
```

---

## 🎯 Par Où Commencer ?

### Pour une Présentation Slides
👉 **Allez dans `/uml/`**
- Ouvrez `index.html` dans votre navigateur
- Téléchargez les **SVG** pour vos slides
- 12 diagrammes prêts à l'emploi

### Pour Comprendre le Contexte
👉 **Lisez dans l'ordre:**
1. [`plan/Plan_Action_Achats_Logistique.md`](plan/Plan_Action_Achats_Logistique.md) - Source complète
2. [`docs/01_PERSONAS_Pain_Points.md`](docs/01_PERSONAS_Pain_Points.md) - Qui souffre ?
3. [`docs/02_ARCHITECTURE_Actuelle_Chaos.md`](docs/02_ARCHITECTURE_Actuelle_Chaos.md) - Pourquoi le chaos ?
4. [`docs/04_MATRICES_VISUELLES.md`](docs/04_MATRICES_VISUELLES.md) - Métriques visuelles

### Pour une Vue Visuelle Rapide
👉 **Diagrammes recommandés:**
1. **Mind Map** (`uml/09_mindmap_pain_points.puml`) - Vue d'ensemble
2. **Sequence** (`uml/01_sequence_commande_actuelle.puml`) - Processus détaillé
3. **Use Case** (`uml/03_usecase_acteurs.puml`) - Les acteurs
4. **Gantt** (`uml/11_gantt_commande_comparaison.puml`) - Avant/Après

---

## 📊 Situation Actuelle

### Faits Constatés

| Aspect | État |
|--------|------|
| **Volume d'activité** | 9-11 000 références/an |
| **Taux livraisons 24h** | 80% |
| **Taux commandes complètes** | 50% seulement |
| **Processus** | 100% manuel |
| **ERP Sage MDE** | Jugé "calamiteux" |
| **Base de données** | Chaotique (multiples références pour 1 produit) |
| **Traçabilité** | Aucune |
| **Intégration fournisseurs** | Pas d'EDI/API |
| **Re-saisies par commande** | Multiples (papier → téléphone → email → Sage → Excel) |
| **Visibilité stock** | Aucune en temps réel |

---

## 👥 Personas Principaux

1. **Marc** (Chef Chantier) - 45 ans
   - 🔴 Pas de visibilité stock
   - 🔴 Chantier bloqué fréquemment (50% commandes incomplètes)
   - 🔴 Perd du temps en appels multiples

2. **Sylvie** (Gestionnaire Achats) - 38 ans
   - 🔴 6 re-saisies par commande
   - 🔴 Hub central (goulot d'étranglement)
   - 🔴 Débordée d'appels

3. **Julien** (Responsable Affaires) - 42 ans
   - 🔴 Impossible de piloter coûts en temps réel
   - 🔴 Extraction données très chronophage
   - 🔴 Fiabilité données incertaine

4. **Éric** (Magasinier) - 52 ans
   - 🔴 80% temps admin vs logistique
   - 🔴 Stock chaotique
   - 🔴 Nomenclatures incohérentes

5. **Christine** (Directrice Générale) - 48 ans
   - 🔴 Pas de visibilité globale
   - 🔴 Équipes épuisées
   - 🔴 Pas de KPIs fiables

---

## 🔴 Top Pain Points Critiques

1. **Base de données chaotique**
   - 12 références différentes pour 1 même produit
   - Double tarification constatée
   - Références obsolètes non gérées

2. **Re-saisies multiples (6x minimum)**
   - Papier → Téléphone → Email → Sage → Excel × 2
   - Chronophage et source d'erreurs

3. **Pas de visibilité temps réel**
   - Stock, commandes, coûts
   - Impossible de piloter efficacement

4. **Taux d'erreur élevé (50%)**
   - 1 commande sur 2 incomplète
   - Chantiers bloqués régulièrement

5. **Communication archaïque**
   - 100% téléphone, pas d'EDI/API
   - 15-20 appels/jour

6. **Pas d'intégration fournisseurs**
   - Rexel, Sonepar : pas d'API
   - Tarifs pas à jour automatiquement
   - Pas de suivi livraisons

7. **Processus 100% manuel**
   - Aucune automatisation
   - Dépendance personnes
   - Pas de workflow digital

8. **Inventaires chronophages**
   - Pas d'optimisation
   - Stock immobilisé non géré

9. **Retours non liés aux commandes**
   - Reliquats non suivis
   - Perte de traçabilité

10. **Pas de gouvernance**
    - Commandes directes chantiers non contrôlées
    - Qui peut créer/modifier références pas défini

---

## 🎨 Utilisation des Diagrammes

### Pour PowerPoint / Google Slides
1. Ouvrez `uml/index.html`
2. Téléchargez les **SVG** (qualité vectorielle)
3. Importez dans vos slides
4. Redimensionnez sans perte de qualité

### Pour Impression / PDF
1. Utilisez les **PNG** haute résolution
2. Disponibles dans `/uml/`

### Pour Modifier les Diagrammes
1. Éditez les fichiers `.puml` dans `/uml/`
2. Régénérez avec PlantUML:
   ```bash
   cd uml
   java -jar plantuml.jar -tsvg *.puml
   ```

---

## 📅 Historique

- **2025-11-17** - Création initiale
  - Audit complet service Achats-Logistique
  - 5 personas détaillés
  - 12 diagrammes UML
  - Pain points identifiés
  - Focus: État ACTUEL uniquement

---

## ⚠️ Important

**Ce dossier documente l'ÉTAT ACTUEL uniquement**
- Pain points existants
- Problèmes constatés
- Besoins exprimés
- Pas de recommandations/solutions chiffrées
  (en attente de la synthèse globale IT)

---

## 🔗 Liens Utiles

- [Plan d'Action Source](plan/Plan_Action_Achats_Logistique.md)
- [Personas & Pain Points](docs/01_PERSONAS_Pain_Points.md)
- [Architecture Chaos](docs/02_ARCHITECTURE_Actuelle_Chaos.md)
- [Diagrammes UML](uml/)
- [Visualisation Web](uml/index.html)

---

**📧 Contact:** Direction Générale - Duret Électricité
**🎯 Objectif:** Préparer la transformation digitale
**⚠️ Enjeu:** Processus actuels inefficaces, besoin urgent de digitalisation
