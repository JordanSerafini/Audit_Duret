# Diagrammes UML - Finance & Comptabilité

Ce dossier contient les diagrammes PlantUML pour le service Finance & Comptabilité.

## Fichiers disponibles

### Architectures
1. **01_architecture_actuelle_sage.puml** - Architecture actuelle (Sage)
   - Montre les silos isolés
   - Processus manuels
   - Absence d'intégration

2. **02_architecture_cible_odoo.puml** - Architecture cible (Odoo)
   - ERP intégré
   - Automatisations
   - Temps réel

### Séquences de processus
3. **03_sequence_facturation_actuelle.puml** - Processus facturation actuel
   - Délai 5-10 jours
   - Ressaisies multiples
   - Risques d'erreurs

4. **04_sequence_facturation_cible.puml** - Processus facturation cible
   - Délai < 48h
   - Automatisation
   - Zéro ressaisie

## Génération des PNG

Pour générer les images PNG à partir des fichiers PlantUML :

### Option 1 : En ligne de commande (Java requis)

```bash
# Générer tous les PNG
java -jar plantuml.jar -tpng *.puml

# Générer un fichier spécifique
java -jar plantuml.jar -tpng 01_architecture_actuelle_sage.puml
```

### Option 2 : En ligne (sans installation)

1. Aller sur [PlantUML Online Editor](http://www.plantuml.com/plantuml/uml/)
2. Copier le contenu d'un fichier .puml
3. Coller dans l'éditeur
4. Télécharger l'image PNG générée

### Option 3 : VS Code (avec extension)

1. Installer l'extension "PlantUML" dans VS Code
2. Ouvrir un fichier .puml
3. Appuyer sur Alt+D (ou Cmd+D sur Mac) pour prévisualiser
4. Clic droit → "Export Current Diagram" → PNG

## Note sur les emojis

Si vous rencontrez des erreurs lors de la génération PNG due aux emojis dans les diagrammes :

1. Les emojis sont utilisés pour rendre les diagrammes plus visuels
2. Si PlantUML a des problèmes avec les emojis, vous pouvez :
   - Les remplacer par du texte simple
   - Utiliser l'éditeur en ligne qui les supporte mieux
   - Mettre à jour votre version de PlantUML

## Personnalisation

Les couleurs utilisées dans les diagrammes :

- **Rouge/Rose** (#FFE4E1) : Systèmes legacy problématiques
- **Jaune** (#FFE4B5) : Processus manuels
- **Bleu clair** (#E6F3FF) : Excel/outils bureautiques
- **Vert** (#B8E6B8) : Applications modernes
- **Violet** (#E6D4FF) : Intégrations

Vous pouvez personnaliser ces couleurs en modifiant les `!define` en début de fichier.

---

**Dernière mise à jour** : 2025-11-21
