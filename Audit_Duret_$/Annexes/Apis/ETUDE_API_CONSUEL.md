# 🔌 ÉTUDE DÉTAILLÉE : API CONSUEL (Conformité Électrique)

## 1. 📋 Fiche d'Identité
- **Nom** : CONSUEL (Comité National pour la Sécurité des Usagers de l'Électricité)
- **Catégorie** : Certification / Conformité Réglementaire
- **Priorité** : 🟡 **MOYENNE** (Phase 2 - Post-Migration Odoo)
- **Complexité** : Moyenne (Dématérialisation en cours)
- **Coût API** : À déterminer (pas d'API publique confirmée)

## 2. 🎯 Contexte & Enjeux pour Duret Électricité

### Obligation légale
CONSUEL délivre les **attestations de conformité électrique** obligatoires pour toute installation neuve ou entièrement rénovée. Sans cette attestation, impossible de mettre sous tension.

### Problème Actuel
- **Processus manuel** : Saisie papier/web des DRE (Documents Résumé de Conclusion)
- **Suivi dispersé** : Pas de traçabilité centralisée des attestations par chantier
- **Délais imprévisibles** : Pas de visibilité sur l'avancement des dossiers
- **Risque de retard** : Chantiers bloqués en attente d'attestation

### Opportunité Digitale 2025
À partir du **1er janvier 2025**, CONSUEL transmet électroniquement les attestations de conformité au GRD (Gestionnaire de Réseau de Distribution) sous **1-2 jours** au lieu de plusieurs semaines.

## 3. 🛠️ Fonctionnalités Souhaitées (API Future)

### 1. Dépôt Automatique DRE
```python
# Depuis Odoo après validation chantier
POST /api/v1/dre
{
  "chantier_id": "DURET-2025-001",
  "installation_type": "domestique",
  "pdl_prm": "12345678901234",
  "organisme_controle": "Bureau Veritas",
  "dre_document": "base64_pdf_content"
}
```

### 2. Suivi Statut Attestation
```python
GET /api/v1/attestation/status/{dossier_id}
{
  "status": "en_cours_verification",
  "date_depot": "2025-01-15",
  "date_prevue": "2025-01-20",
  "etapes": [
    {"nom": "Réception", "status": "validé"},
    {"nom": "Vérification", "status": "en_cours"},
    {"nom": "Validation", "status": "attente"}
  ]
}
```

### 3. Récupération Attestation
```python
GET /api/v1/attestation/download/{numero}
# Retourne le PDF de l'attestation validée
```

## 4. 💻 Intégration Odoo Cible

### Module `duret_consuel`

**Modèle : `project.task`**
- Champ `consuel_required` (Boolean)
- Champ `consuel_dossier_id` (Char)
- Champ `consuel_status` (Selection : Aucun/En cours/Validé/Refusé)
- Champ `consuel_attestation` (Binary - PDF)

**Workflow Automatisé**
1. **Fin de chantier** → Odoo détecte `consuel_required = True`
2. **Auto-création dossier** → API CONSUEL (si disponible)
3. **Suivi automatique** → Cron quotidien vérifie statut
4. **Alerte si retard** → Email automatique si > 15 jours
5. **Archivage PDF** → Téléchargement automatique une fois validé

## 5. 🔍 État Actuel de la Dématérialisation CONSUEL

### ✅ Disponible en 2025
- **Portail "Mon Espace Consuel"** : Création de compte et suivi en ligne
- **Service AC-Express** : Formulaires dématérialisés
- **Transmission automatique GRD** : À partir du 1er janvier 2025

### ❓ API Publique
- **Statut** : Non confirmée publiquement
- **Alternative** : Scraping du portail web (non recommandé)
- **Recommandation** : Contact direct CONSUEL pour partenariat API

## 6. 💰 Analyse Coûts & ROI (Estimation)

- **Machine Learning sur délais** : Analyser les patterns de validation par type d'installation et organisme de contrôle
- **Prédiction goulots** : Identifier les périodes de surcharge CONSUEL (fin d'année fiscale)
- **Optimisation planning** : L'algorithme de planification intégrera les délais CONSUEL prévisibles
- **Alertes prédictives** : Recommander de déposer le DRE plus tôt pour certains types d'installation

Ces données enrichiront l'**Assistant de Planification Intelligente** pour une gestion proactive des contraintes réglementaires.

## 7. 📅 Planning d'Implémentation Recommandé

### Phase 1 : Investigation (Mois 1-2)
1. ✅ **Contact CONSUEL** : Demande officielle d'API ou partenariat
2. ✅ **Audit besoins** : Cartographie processus actuel Duret
3. ✅ **POC portail** : Test manuel du portail "Mon Espace Consuel"

### Phase 2 : Développement (Mois 3-4)
1. 🔄 **Module Odoo** : Développement interface CONSUEL
2. 🔄 **Intégration** : API si disponible, sinon RPA léger
3. 🔄 **Tests** : Validation sur vrais dossiers

### Phase 3 : Déploiement (Mois 5)
1. ⏳ **Formation équipes** : Nouveaux workflows
2. ⏳ **Go-Live** : Migration historique optionnelle
3. ⏳ **Monitoring** : Suivi ROI 3 mois

## 8. ⚠️ Points d'Attention

### Contraintes Techniques
- **API non garantie** : Peut nécessiter développement RPA (Robot Process Automation)
- **Authentification** : Probablement OAuth complexe
- **Rate limits** : À négocier avec CONSUEL

### Contraintes Métier
- **Formation nécessaire** : Nouveaux processus pour les équipes
- **Responsabilité** : CONSUEL reste autorité finale
- **Backup manuel** : Prévoir processus de secours

## 9. 📞 Contacts & Prochaines Étapes

### CONSUEL Contact
- **Adresse** : Tour Kupka B CS 50339 92057 PARIS LA DEFENSE CEDEX
- **Site** : https://www.consuel.com/
- **Portail** : Mon Espace Consuel

### Actions Immédiates
1. **Contact commercial CONSUEL** : Demande API/partenariat
2. **Audit interne** : Volume annuel attestations Duret
3. **Benchmark concurrents** : Solutions existantes marché

## 10. ✅ Recommandation Finale

### 🟡 **PHASE 2 - Post-Migration Odoo**

**Logique** : 
- Attendre stabilisation socle Odoo avant cette intégration
- Négocier API CONSUEL en parallèle (6-12 mois)
- ROI intéressant mais non critique court terme

**Alternative immédiate** :
- Créer champ "CONSUEL" dans Odoo pour traçabilité manuelle
- Former équipes au nouveau portail dématérialisé 2025

**Si API disponible** : Développement prioritaire (ROI excellent)

---
*Dernière mise à jour : Novembre 2025 - Basé sur réglementation 2025*