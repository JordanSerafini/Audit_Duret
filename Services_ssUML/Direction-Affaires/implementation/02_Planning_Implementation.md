# 📅 PLANNING IMPLÉMENTATION - Direction & Gestion Affaires

> Implémentation Odoo Enterprise Cloud sur 6 mois
> Approche progressive avec quick wins

---

## 🎯 Stratégie Globale

### Principes
1. **Pas de big-bang** : déploiement progressif par phase
2. **Quick wins d'abord** : templates devis dès M2
3. **Pilotes avant généralisation** : 2 RA pilotes M1-M2
4. **Go/No-Go à chaque jalon** : validation avant phase suivante
5. **Formation continue** : accompagnement quotidien

### Timeline Globale

```
Phase 1 (M1-M2) : SETUP & TEMPLATES
Phase 2 (M3-M4) : AUTOMATISATION
Phase 3 (M5-M6) : DASHBOARDS & MOBILE
```

---

## 📊 PHASE 1: SETUP & TEMPLATES (Mois 1-2)

### Objectif
Remplacer ERP Legacy par Odoo + créer bibliothèque templates

### Mois 1: Kick-off & Infrastructure

#### Semaine 1-2: Setup Infrastructure
```
✅ Souscription Odoo Enterprise Cloud
   - 4 licences utilisateurs
   - Modules: CRM, Projets, Devis, Facturation
   - Hébergement: OVH/AWS Europe
   - Backup automatique quotidien

✅ Configuration initiale
   - Paramétrage entreprise
   - Import utilisateurs (4 RA)
   - Droits & permissions (RBAC)
   - Customisation interface
```

**Livrables:**
- Odoo accessible < 2s
- 4 comptes utilisateurs actifs
- Interface configurée

#### Semaine 3-4: Migration Données
```
✅ Export données Sage MDE
   - Clients actifs
   - Affaires en cours (15-20)
   - Historique affaires (3 ans)
   - Catalogues produits/services

✅ Nettoyage & Import Odoo
   - Déduplication clients
   - Normalisation données
   - Import progressif
   - Tests intégrité
```

**Livrables:**
- Base données migrée
- Affaires actives dans Odoo
- Historique 3 ans accessible

### Mois 2: Templates & Formation Pilotes

#### Semaine 1-2: Bibliothèque Templates Devis
```
✅ Création 10 templates types
   - Devis installation électrique standard
   - Devis mise aux normes
   - Devis domotique
   - Devis tertiaire
   - Devis industriel
   - Devis rénovation
   - Devis neuf résidentiel
   - Devis maintenance
   - Devis dépannage
   - Devis étude/conseil

✅ Règles auto-remplissage
   - Données client automatiques
   - Données affaire automatiques
   - Calculs marges/totaux
   - Génération PDF auto
```

**Livrables:**
- 10 templates opérationnels
- Auto-remplissage fonctionnel
- Tests validation

#### Semaine 3: Formation Pilotes (2 RA)
```
✅ Sélection 2 RA volontaires
   - Laurent (lead)
   - RA2

✅ Formation intensive (2 jours)
   - Jour 1: Navigation Odoo, création devis
   - Jour 2: Templates, affaires, workflows

✅ Accompagnement quotidien (2 semaines)
   - Support hotline 9h-18h
   - Sessions debug quotidiennes
   - Ajustements templates
```

**Livrables:**
- 2 RA pilotes formés
- Premier devis créé avec template
- Feedback collecté

#### Semaine 4: Tests & Validation
```
✅ Tests utilisateurs pilotes
   - Création 5-10 devis réels
   - Tests templates
   - Tests workflows
   - Mesure temps (objectif < 35 min vs 2h05 actuel)

✅ Ajustements
   - Corrections bugs
   - Améliorations UX
   - Optimisations templates
```

**Livrables:**
- Tests validation OK
- Satisfaction pilotes > 4/5
- Temps création devis < 35 min

**🎯 JALON M2: Go/No-Go Phase 2**
- ✅ Odoo opérationnel
- ✅ 10 templates validés
- ✅ Pilotes satisfaits > 4/5
- ✅ Temps devis réduit > 60%

---

## 🚀 PHASE 2: AUTOMATISATION (Mois 3-4)

### Objectif
Automatiser PPSPS + intégrer APIs fournisseurs

### Mois 3: Module PPSPS Automatique

#### Semaine 1-2: Développement Module
```
✅ Générateur PPSPS automatique
   - Templates PPSPS structurés (5 types)
   - Auto-remplissage depuis affaire:
     • Nom client, adresse chantier
     • Budget, dates, équipe
     • Plans affaire
   - Sections risques configurables
   - Clauses obligatoires intégrées (checklist auto)

✅ Workflow validation
   - RA génère PPSPS (clic unique)
   - BE (Thomas) reçoit notification
   - Commentaires structurés
   - Validation/Refus tracé
```

**Livrables:**
- Module PPSPS opérationnel
- 5 templates PPSPS types
- Génération < 30 min

#### Semaine 3: Formation & Tests
```
✅ Formation 2 RA pilotes (4h)
   - Génération PPSPS
   - Workflow validation
   - Gestion plans

✅ Tests terrain
   - Génération 3-5 PPSPS réels
   - Validation BE
   - Mesure temps (objectif < 30 min vs 3h00 actuel)
```

**Livrables:**
- PPSPS générés automatiquement
- Temps génération < 30 min
- Validation BE fluide

#### Semaine 4: Ajustements & Doc
```
✅ Corrections retours utilisateurs
✅ Documentation utilisateur
✅ FAQ vidéos
```

### Mois 4: APIs Fournisseurs & Reliquats

#### Semaine 1-2: Intégration APIs
```
✅ API Rexel (si disponible)
   - Catalogue produits temps réel
   - Prix à jour
   - Disponibilités
   - Passage commandes

✅ API Sonepar (si disponible)
   - Catalogue temps réel
   - Tarifs négociés
   - Commandes EDI
   - Suivi livraisons

✅ Fallback: Import CSV manuel
   - Si APIs non disponibles
   - Import catalogues mensuels
   - Mise à jour prix
```

**Livrables:**
- APIs ou CSV imports opérationnels
- Catalogues synchronisés
- Prix à jour

#### Semaine 3: Gestion Reliquats
```
✅ Module suivi reliquats
   - Identification automatique
   - Dashboard reliquats
   - Alertes relance
   - Facturation simplifiée

✅ Workflow reliquats
   - Détection auto
   - Assignation RA
   - Suivi état
   - Facturation/Relance
```

**Livrables:**
- Reliquats tracés 100%
- Dashboard opérationnel
- Alertes automatiques

#### Semaine 4: Formation Générale (4 RA)
```
✅ Formation tous RA (1 jour)
   - Templates devis
   - Génération PPSPS
   - Gestion reliquats
   - APIs fournisseurs

✅ Support hotline (1 mois)
   - Hotline 9h-18h
   - Tickets support
   - FAQ enrichie
```

**Livrables:**
- 4 RA formés
- Tous utilisent Odoo quotidiennement
- Support actif

**🎯 JALON M4: Go/No-Go Phase 3**
- ✅ Module PPSPS opérationnel
- ✅ APIs fournisseurs actives
- ✅ Reliquats tracés
- ✅ 4 RA autonomes
- ✅ Temps PPSPS < 30 min

---

## 🎨 PHASE 3: DASHBOARDS & MOBILE (Mois 5-6)

### Objectif
Visibilité direction + accès mobile

### Mois 5: Dashboards Direction & Mobilen

#### Semaine 1-2: Dashboards Temps Réel
```
✅ Dashboard Direction (Marie)
   - Affaires actives (liste)
   - Budget vs dépensé par affaire
   - Taux transformation devis
   - Rentabilité affaires
   - Reliquats en cours
   - CA prévisionnel
   - Nombre devis en cours
   - PPSPS en attente validation
   - Alertes importantes

✅ Dashboard RA (Laurent)
   - Mes affaires actives
   - Mes devis en cours
   - Mes PPSPS à faire
   - Budget mes affaires
   - Alertes reliquats
   - Prochaines échéances

✅ Dashboard BE (Thomas)
   - PPSPS à valider
   - Historique validations
   - Temps moyen validation
```

**Livrables:**
- 3 dashboards opérationnels
- Données temps réel
- Accès mobile responsive

#### Semaine 3: Mobile Responsive
```
✅ Interface mobile optimisée
   - Responsive design
   - Navigation tactile
   - Consultation affaires
   - Validation PPSPS mobile
   - Notifications push

✅ Tests multi-devices
   - iOS (iPhone, iPad)
   - Android (smartphones, tablettes)
   - Chrome, Safari, Firefox
```

**Livrables:**
- Mobile responsive fonctionnel
- Tests validés multi-devices
- Notifications actives

#### Semaine 4: Formation Direction & BE
```
✅ Formation Marie (Direction) - 4h
   - Navigation dashboards
   - Lecture KPIs
   - Export rapports
   - Alertes

✅ Formation Thomas (BE) - 4h
   - Workflow validation PPSPS
   - Dashboard validations
   - Commentaires structurés

✅ Formation mobile (tous)
   - Accès mobile
   - Notifications
   - Consultation nomade
```

**Livrables:**
- Direction utilise dashboards quotidiennement
- BE valide PPSPS via Odoo
- Tous accèdent via mobile

### Mois 6: Documentation & Go-Live Définitif

#### Semaine 1: Analytics Avancés
```
✅ Rapports automatiques
   - Rapport hebdo affaires (email auto)
   - Rapport mensuel direction
   - Export Excel/PDF

✅ KPIs enrichis
   - Temps moyen création devis
   - Temps moyen génération PPSPS
   - Taux transformation devis
   - Rentabilité par type affaire
   - Performance RA
```

**Livrables:**
- Rapports automatiques actifs
- KPIs temps réel
- Exports fonctionnels

#### Semaine 2: Documentation Complète
```
✅ Documentation utilisateur
   - Guide RA (création devis, PPSPS)
   - Guide Direction (dashboards)
   - Guide BE (validation)
   - FAQ complète

✅ Vidéos formation
   - 10-15 vidéos courtes (2-5 min)
   - Cas d'usage typiques
   - Troubleshooting

✅ Documentation technique
   - Architecture système
   - APIs documentation
   - Procédures backup/restore
```

**Livrables:**
- Documentation complète
- 10-15 vidéos tutoriels
- FAQ enrichie

#### Semaine 3: Tests Finaux & Migration
```
✅ Tests intensifs
   - Tests charge
   - Tests sécurité
   - Tests backup/restore
   - Tests performance

✅ Migration complète
   - Toutes affaires dans Odoo
   - Tous devis dans Odoo
   - Archive Sage MDE
   - Coupure ERP legacy
```

**Livrables:**
- Tests validation OK
- Migration 100% complète
- Sage MDE archivé

#### Semaine 4: Go-Live & Support Renforcé
```
✅ Go-Live officiel
   - Annonce équipe
   - Support renforcé 2 semaines
   - Hotline dédiée
   - Ajustements rapides

✅ Bilan ROI
   - Mesure gains temps
   - Mesure satisfaction
   - Calcul ROI réel
   - Ajustements finaux
```

**Livrables:**
- Go-Live définitif
- ERP Legacy coupé
- Support actif
- ROI mesuré

**🎯 JALON M6: Industrialisation**
- ✅ Dashboards direction actifs
- ✅ Mobile responsive déployé
- ✅ 100% utilisateurs formés
- ✅ Sage MDE coupé
- ✅ ROI positif mesuré
- ✅ Satisfaction > 4/5

---

## 📈 SUIVI PERFORMANCE

### KPIs Mesurés à Chaque Phase

| KPI | Baseline Actuel | Objectif M2 | Objectif M4 | Objectif M6 |
|-----|-----------------|-------------|-------------|-------------|
| **Temps création devis** | 2h05 | < 35 min | < 32 min | < 31 min |
| **Temps génération PPSPS** | 3h00 | - | < 30 min | < 27 min |
| **Recherche template** | 30 min | < 2 min | < 2 min | < 1 min |
| **Chargement écrans** | 30-40s | < 2s | < 2s | < 2s |
| **Taux adoption** | - | 100% pilotes | 100% RA | 100% tous |
| **Satisfaction utilisateurs** | - | > 4/5 | > 4/5 | > 4.5/5 |
| **Visibilité direction** | 3h | - | - | Temps réel |
| **Reliquats suivis** | 0% | - | 100% | 100% |

### Métriques Hebdomadaires
- Nombre devis créés
- Nombre PPSPS générés
- Temps moyen par opération
- Nombre tickets support
- Satisfaction utilisateurs (sondage hebdo)

---

## ⚠️ RISQUES & MITIGATION

### Top 5 Risques

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| **Résistance changement RA** | Moyenne | Élevé | Pilotes ambassadeurs, quick wins visibles M2, formation intensive |
| **Migration données complexe** | Moyenne | Élevé | Scripts ETL testés, nettoyage amont, backup rollback, import progressif |
| **APIs fournisseurs instables** | Faible | Moyen | Fallback import CSV manuel, cache local, monitoring 24/7 |
| **Budget dépassé** | Faible | Moyen | Contingence 10%, phases indépendantes, Go/No-Go jalons |
| **Délais non tenus** | Moyenne | Moyen | Agile sprints 2 semaines, jalons clairs, ajustements rapides |

### Plan Contingence
- **Si pilotes M2 insatisfaits** : Prolonger Phase 1 de 2-4 semaines, ajuster templates
- **Si APIs fournisseurs impossible** : Fallback import CSV manuel mensuel
- **Si migration données problème** : Import manuel progressif, rollback Sage MDE temporaire
- **Si budget serré** : Phase 3 (dashboards/mobile) reportable M7-M8

---

## 💰 BUDGET DÉTAILLÉ

### Phase 1 (M1-M2) - 25K€
- Odoo Enterprise licences (4 × 2 mois): 2.4K€
- Cloud hosting (2 mois): 1.6K€
- Migration données & nettoyage: 5K€
- Développement 10 templates: 8K€
- Formation pilotes (2 RA × 2 jours): 3K€
- Support M1-M2: 5K€

### Phase 2 (M3-M4) - 20K€
- Odoo licences (4 × 2 mois): 2.4K€
- Cloud hosting (2 mois): 1.6K€
- Module PPSPS automatique: 10K€
- APIs fournisseurs (dev + intégration): 3K€
- Formation générale (4 RA): 2K€
- Support M3-M4: 1K€

### Phase 3 (M5-M6) - 15K€
- Odoo licences (4 × 2 mois): 2.4K€
- Cloud hosting (2 mois): 1.6K€
- Dashboards custom: 5K€
- Mobile responsive: 2K€
- Documentation & vidéos: 2K€
- Formation direction/BE: 1K€
- Support M5-M6: 1K€

**Total Setup 6 mois: 60K€**

### Coûts Récurrents Annuels - 13.8K€/an
- Licences Odoo Enterprise (4 users): 3.6K€
- Cloud hosting AWS/OVH: 4.8K€
- APIs fournisseurs (Rexel, Sonepar): 1.8K€
- Signature électronique: 1.2K€
- Maintenance & Support: 2.4K€

---

## 📋 ÉQUIPE PROJET

### Rôles & Responsabilités

| Rôle | Personne | Temps | Responsabilités |
|------|----------|-------|-----------------|
| **Sponsor** | Marie (Direction) | 10% | Validation jalons, budget, arbitrages |
| **Product Owner** | Laurent (RA Lead) | 30% | Définition besoins, tests validation, formation |
| **Lead Tech** | Prestataire Odoo | 100% M1-M4 | Développement, intégration, support |
| **Pilotes** | Laurent + RA2 | 50% M1-M2 | Tests, feedback, ambassadeurs |
| **Utilisateurs** | 4 RA + Thomas | 20% M3-M6 | Tests, formation, adoption |
| **Support** | Prestataire | 50% M3-M6 | Hotline, tickets, ajustements |

---

## 🎯 CRITÈRES SUCCÈS FINAUX

### Go-Live Réussi si:
1. ✅ **Performance**
   - Temps devis < 35 min (vs 2h05)
   - Temps PPSPS < 30 min (vs 3h00)
   - Chargement < 2s (vs 30-40s)

2. ✅ **Adoption**
   - 100% RA utilisent Odoo quotidiennement
   - Taux abandon Sage MDE: 100%
   - Satisfaction > 4.5/5

3. ✅ **Visibilité**
   - Direction consulte dashboards quotidiennement
   - KPIs temps réel accessibles
   - Rapports automatiques fonctionnels

4. ✅ **Automatisation**
   - 100% devis via templates
   - 100% PPSPS générés automatiquement
   - 100% reliquats tracés

5. ✅ **ROI**
   - Gains mesurables dès M4
   - Payback < 6 mois

---

**Prochaine étape:** Validation planning par Direction + lancement Kick-off M1

**Dernière mise à jour:** 2025-11-17
