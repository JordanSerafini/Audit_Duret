# Étude Automatisation CONSUEL - 2025

## Vue d'ensemble

Le **CONSUEL** (Comité National pour la Sécurité des Usagers de l'Électricité) délivre les attestations de conformité obligatoires pour le raccordement au réseau Enedis.
Pour Duret Électricité, c'est une étape critique : **Pas de Consuel = Pas de courant = Client mécontent**.

Actuellement, la gestion est manuelle (Portail Web + Excel), source d'oublis et de délais.

## État de l'Art API

### ⚠️ Constat
À ce jour, le CONSUEL **ne propose pas d'API publique** documentée pour les installateurs standards.
Les échanges se font via le portail `mon.consuel.com`.

### Alternatives Techniques
1. **RPA (Robotic Process Automation)** : Un robot logiciel simule les clics sur le portail.
2. **EDI** : Réservé aux très gros faiseurs (à vérifier si Duret est éligible, peu probable < 1000 dossiers/an).
3. **Gestion Workflow Odoo** : Structurer la donnée en interne pour faciliter la saisie manuelle.

## Stratégie Recommandée : "Odoo Assisted Workflow"

Plutôt que de tenter un "Hack" instable du site du CONSUEL, nous recommandons de **bétonner le processus interne** dans Odoo pour que la saisie manuelle ne prenne que 2 minutes.

### Le Processus Cible

1. **Fin de Chantier (Odoo)**
   - Le technicien valide sa tâche "Contrôle Final".
   - Il remplit un formulaire mobile (Mesures de terre, Isolement, Schéma unifilaire photo).
   
2. **Préparation Dossier (Automatique)**
   - Odoo génère un PDF "Pré-dossier CONSUEL" contenant TOUTES les infos nécessaires (Adresse précise, Puissance, Type installation, Nom client).
   - Odoo crée une tâche "Acheter CONSUEL" pour l'assistante.

3. **Achat & Saisie (Manuel optimisé)**
   - L'assistante se connecte au portail CONSUEL.
   - Elle recopie les données (ou utilise un script copier-coller).
   - Elle télécharge l'attestation provisoire.

4. **Suivi (Automatique)**
   - Odoo relance automatiquement le statut tous les 15 jours.
   - Si visite prévue : Odoo prévient le conducteur de travaux + client.
   - Si validé : Odoo envoie l'attestation au client + Enedis (si mandat).

## Solution Technique : Module `duret_consuel`

### Modèle de Données
```python
class ProjectTask(models.Model):
    _inherit = 'project.task'
    
    consuel_required = fields.Boolean("Consuel Requis", default=False)
    consuel_status = fields.Selection([
        ('to_do', 'À faire'),
        ('submitted', 'Dossier déposé'),
        ('visit_scheduled', 'Visite prévue'),
        ('correction', 'Retouches demandées'),
        ('done', 'Validé / Reçu')
    ])
    consuel_number = fields.Char("N° Dossier")
    consuel_file = fields.Binary("Attestation PDF")
```

### Automatisation RPA (Optionnelle - Phase 2)

Si le volume dépasse 200 dossiers/an, un script **Selenium/Playwright** peut être envisagé.

**Concept**:
- Script Python lancé depuis Odoo.
- Ouvre un navigateur "Headless".
- Se loggue sur `mon.consuel.com`.
- Remplit les champs formulaires avec les données Odoo.
- Valide et récupère le N° de dossier.

**Risques RPA**:
- Maintenance élevée (si le site Consuel change, le robot casse).
- Blocage compte si détection de bot.
- **Recommandation** : Éviter en Phase 1.

## Logique Métier & Gains

### 1. Zéro Oubli
**Problème**: On finit le chantier, on oublie de demander le Consuel. 3 semaines plus tard, le client hurle car pas de courant.
**Solution**: Odoo bloque la clôture du projet tant que le Consuel n'est pas "Submitted".

### 2. Qualité du Dossier
**Problème**: Dossier rejeté car mauvaise adresse ou puissance erronée.
**Solution**: Les données viennent du Devis/Étude technique validée, pas d'une ressaisie manuelle approximative.

### 3. Anticipation Visite
**Problème**: Le contrôleur Consuel passe, personne n'est là, visite ratée = 150€ de frais + 2 semaines délai.
**Solution**: Odoo notifie le client et le chef de chantier dès que la date de visite est connue (saisie dans Odoo).

## ROI Estimé

### Coûts
- **Module Odoo**: 3 jours (1500€).
- **Pas de coût API**.

### Gains
- **Administratif**: 15 min gagnées par dossier (recherche infos, relances).
  - 100 dossiers/an x 15 min = 25h = **1250€/an**.
- **Frais Re-visite**: Éviter 5 visites ratées/an = 5 x 150€ = **750€/an**.
- **Satisfaction Client**: Inestimable (le courant est là le jour du déménagement).

## Conclusion

Bien qu'il n'y ait pas d'API publique, la **digitalisation du processus** est indispensable.
L'approche "Workflow Odoo rigoureux" est plus rentable et robuste que l'approche "Robotisation fragile" pour une PME.

**Recommandation**: **GO Phase 1** (Module de suivi Odoo simple).
