# 📋 PLAN D'ACTION - Direction & Gestion Affaires
**Entreprise** : Duret Électricité - Annecy
**Date audit** : Novembre 2025
**Périmètre** : Direction, Gestion Affaires, Bureau Études

---

## 🔍 RÉSUMÉ DE L'AUDIT

### Situation actuelle

**Infrastructure & Processus**
- ERP Sage MDE/Legacy obsolète: **30-40 secondes par écran** (VPN + Citrix)
- Télétravail quasi-impossible (Laurent évite de travailler depuis domicile)
- **Création devis: 2h05** (45min recherche + 1h30 saisie + 15min vérif)
- **Génération PPSPS: 3h00** (100% manuel Word, copie-colle, Ctrl+F remplacer)
- **200+ fichiers Word templates** (chaos, nommage incohérent, pas de versioning)
- **Recherche template: 30 minutes** par document
- Chaque ligne devis: 5 min (popup 35s + recherche 2min + saisie)
- Direction aveugle: **3 heures pour compiler un chiffre**
- Reliquats non suivis, pertes constatées
- Aucun dashboard, aucun KPI temps réel

**Impact Business**
- Perte de temps massive (2h05 vs 30 min possible pour devis)
- Frustration utilisateurs très élevée (9/10 devis, 10/10 télétravail)
- Risque oublis clauses obligatoires PPSPS (checklist papier)
- Direction ne peut pas piloter (visibilité nulle)
- Télétravail abandonné (VPN+Citrix trop lent)
- Compétences RA sous-utilisées (temps perdu)

### Besoins exprimés

**Fonctionnalités prioritaires**
- Bibliothèque templates devis avec auto-remplissage
- Générateur automatique PPSPS (basé sur templates + données affaire)
- ERP moderne cloud (< 2s chargement, sans VPN/Citrix)
- Dashboards direction (temps réel, KPIs, avancement affaires)
- Workflow validation (devis, PPSPS)
- Suivi reliquats automatique
- Mobile responsive (accès chantier/domicile)
- Recherche intelligente templates (tags, catégories)

**Gestion Devis**
- Templates avec règles auto-remplissage (client, affaire, lignes types)
- Bibliothèque lignes types réutilisables
- Calculs automatiques (marges, totaux)
- Intégration catalogues fournisseurs (APIs Rexel/Sonepar)
- Génération PDF automatique
- Envoi email intégré
- Historique versions

**Gestion PPSPS**
- Templates structurés par type chantier
- Auto-remplissage données affaire/client
- Clauses obligatoires intégrées (checklist automatique)
- Gestion plans (versions, annotations)
- Workflow validation BE
- Génération PDF automatique
- Archivage structuré

**Visibilité Direction**
- Dashboard avancement affaires
- KPIs temps réel (affaires actives, budgets, taux transformation, rentabilité, reliquats)
- Alertes intelligentes
- Rapports automatiques

---

## ✅ CE QUI EST FAISABLE

### Court terme (0-6 mois) - Transformation Rapide

#### Phase 1 (M1-M2): Setup & Templates
1. **Migration Odoo Enterprise Cloud**
   - Remplace Sage MDE/Legacy
   - Chargement < 2s (vs 30-40s actuel)
   - Sans VPN/Citrix (accès direct cloud)
   - 4 licences utilisateurs RA

2. **Bibliothèque 10 templates devis**
   - Templates types par affaire
   - Auto-remplissage client/affaire
   - Calculs automatiques
   - Génération PDF auto

3. **Formation 2 RA pilotes**
   - Laurent + RA2
   - Tests terrain
   - Validation satisfaction > 4/5

#### Phase 2 (M3-M4): Automatisation
1. **Module PPSPS automatique**
   - 5 templates PPSPS structurés
   - Génération automatique (clic unique)
   - Clauses obligatoires intégrées
   - Workflow validation BE
   - Temps génération: **< 30 min vs 3h00**

2. **Intégration APIs fournisseurs**
   - Rexel/Sonepar (si disponible)
   - Catalogues synchronisés
   - Prix à jour temps réel
   - Fallback: import CSV manuel

3. **Gestion reliquats**
   - Identification automatique
   - Dashboard suivi
   - Alertes relance
   - Facturation simplifiée

#### Phase 3 (M5-M6): Dashboards & Mobile
1. **Dashboards temps réel**
   - Dashboard Direction (Marie): 12 KPIs
   - Dashboard RA (Laurent): mes affaires
   - Dashboard BE (Thomas): validations

2. **Mobile responsive**
   - Interface tactile optimisée
   - Consultation affaires nomade
   - Validation PPSPS mobile
   - Notifications push

3. **Go-Live définitif**
   - Coupure Sage MDE
   - 100% utilisateurs sur Odoo
   - Documentation complète
   - Support actif

### Moyen terme (6-12 mois) - Optimisation

1. **Analytics avancés**
   - Historique 24 mois
   - Prédictions tendances
   - Comparaisons inter-périodes
   - Drill-down affaires détaillé

2. **Intégrations avancées**
   - Signature électronique
   - Facturation automatique
   - Export comptable
   - CRM enrichi

3. **Mobile app native** (optionnel)
   - iOS/Android natif
   - Offline complet
   - Scan documents
   - Géolocalisation

### Long terme (12-18 mois) - Intelligence (Optionnel)

1. **Machine Learning**
   - Prédiction rentabilité affaires
   - Optimisation pricing devis
   - Détection anomalies budgets
   - Recommandations intelligentes

2. **Automatisation avancée**
   - Génération devis par IA (à partir email client)
   - PPSPS enrichissement auto
   - Alertes prédictives retards

3. **BI prédictif**
   - Forecasting CA
   - Optimisation charge RA
   - Analytics client avancés

---

## 🎯 SOLUTION RECOMMANDÉE

### Odoo Enterprise Cloud (Recommandé)

**Pourquoi Odoo ?**
- ✅ Modules natifs complets (CRM, Projets, Devis, Facturation)
- ✅ Workflow digital intégré
- ✅ Templates personnalisables
- ✅ Architecture moderne Python/PostgreSQL
- ✅ Cloud rapide (< 2s vs 30-40s actuel)
- ✅ Mobile responsive natif
- ✅ APIs ouvertes pour intégrations
- ✅ Scalabilité illimitée
- ✅ Communauté massive (7M+ utilisateurs)
- ✅ Modules custom développables

**Modules Odoo utilisés**
- CRM (clients, prospects)
- Projets (affaires, tâches)
- Devis/Ventes (templates, lignes, PDF)
- Facturation (reliquats, avoirs)
- Documents (PPSPS, plans, archivage)
- Dashboards (KPIs direction)
- Studio (customisation templates)

**Développements Custom**
- Module génération PPSPS automatique
- Templates devis spécifiques BTP électricité
- Workflow validation BE
- Dashboards Direction personnalisés
- APIs fournisseurs (Rexel, Sonepar)
- Gestion reliquats enrichie

---

## 💰 BUDGET & INVESTISSEMENT

### Phase 1 (M1-M2) - 25K€
- Odoo Enterprise licences (4 users × 2 mois): 2.4K€
- Cloud hosting (2 mois): 1.6K€
- Migration données & nettoyage: 5K€
- Développement 10 templates devis: 8K€
- Formation pilotes (2 RA × 2 jours): 3K€
- Support M1-M2: 5K€

### Phase 2 (M3-M4) - 20K€
- Odoo licences (4 users × 2 mois): 2.4K€
- Cloud hosting (2 mois): 1.6K€
- Module PPSPS automatique: 10K€
- APIs fournisseurs (dev + intégration): 3K€
- Formation générale (4 RA): 2K€
- Support M3-M4: 1K€

### Phase 3 (M5-M6) - 15K€
- Odoo licences (4 users × 2 mois): 2.4K€
- Cloud hosting (2 mois): 1.6K€
- Dashboards custom direction: 5K€
- Mobile responsive: 2K€
- Documentation & vidéos: 2K€
- Formation direction/BE: 1K€
- Support M5-M6: 1K€

**Total Setup 6 mois: 60K€**

### Coûts Récurrents Annuels - 13.8K€/an
- Licences Odoo Enterprise (4 users): 3.6K€/an
- Cloud hosting AWS/OVH: 4.8K€/an
- APIs fournisseurs (Rexel, Sonepar): 1.8K€/an
- Signature électronique: 1.2K€/an
- Maintenance & Support: 2.4K€/an

---

## 📊 GAINS MESURABLES

### Gains Temps Observables (Factuels)

**Création Devis**
- **Actuel:** 2h05 par devis
- **Cible:** 31 min par devis (avec templates)
- **Gain:** 1h34 par devis
- **Volume:** 40-80 devis/mois
- **Gain mensuel:** 63-126h/mois = **1.5-3 semaines ETP/mois**

**Génération PPSPS**
- **Actuel:** 3h00 par PPSPS
- **Cible:** 27 min par PPSPS (avec génération auto)
- **Gain:** 2h33 par PPSPS
- **Volume:** Estimé 15-20 PPSPS/mois
- **Gain mensuel:** 38-51h/mois = **1 semaine ETP/mois**

**Recherche Templates**
- **Actuel:** 30 min par recherche
- **Cible:** < 1 min (recherche structurée)
- **Gain:** 29 min par recherche
- **Volume:** 40-80 recherches/mois (devis+PPSPS)
- **Gain mensuel:** 19-39h/mois

**Visibilité Direction**
- **Actuel:** 3h pour compiler un chiffre
- **Cible:** Temps réel (< 1 min)
- **Gain:** ~3h par demande
- **Volume:** Estimé 10-15 demandes/mois
- **Gain mensuel:** 30-45h/mois

**Chargement Écrans**
- **Actuel:** 30-40s par écran (VPN+Citrix)
- **Cible:** < 2s (Odoo Cloud)
- **Gain:** 30-38s par écran
- **Volume:** Estimé 100-200 écrans/jour × 4 RA
- **Gain quotidien:** 50-126 min/jour = **3-5h/jour équipe**

### Impact Qualité

**PPSPS**
- ✅ Clauses obligatoires intégrées (vs checklist papier)
- ✅ Risque oublis réduit quasi-nul
- ✅ Validation BE tracée
- ✅ Versions gérées

**Devis**
- ✅ Templates cohérents (vs chaque RA ses Excel)
- ✅ Calculs automatiques (vs erreurs manuelles)
- ✅ Historique versions
- ✅ Traçabilité complète

**Direction**
- ✅ Visibilité temps réel (vs 3h compilation)
- ✅ KPIs automatiques (vs aucun)
- ✅ Alertes proactives (vs réactif)
- ✅ Pilotage data-driven (vs feeling)

### Impact Satisfaction

**RA (Laurent)**
- Frustration devis: 9/10 → Satisfaction: 5/5 (objectif)
- Frustration télétravail: 10/10 → Utilisable quotidiennement
- Temps libéré pour activités à valeur ajoutée

**Direction (Marie)**
- Visibilité nulle → Dashboards temps réel
- 3h compilation → < 1 min consultation
- Pilotage impossible → Pilotage data-driven

**BE (Thomas)**
- Commentaires Word → Workflow structuré
- Email aller-retour → Validation digitale tracée
- Relecture 30 min → Validation 15-20 min

---

## 📅 PLANNING IMPLÉMENTATION

### Jalons Critiques

**M1: Kick-off**
- ✅ Infrastructure cloud opérationnelle
- ✅ Migration données affaires actives
- ✅ 2 RA pilotes volontaires

**M2: Templates Validés (Go/No-Go Phase 2)**
- ✅ 10 templates devis opérationnels
- ✅ Temps devis < 35 min
- ✅ Satisfaction pilotes > 4/5

**M4: Automatisation (Go/No-Go Phase 3)**
- ✅ Module PPSPS fonctionnel
- ✅ Temps PPSPS < 30 min
- ✅ APIs fournisseurs actives
- ✅ 4 RA formés et autonomes

**M6: Go-Live Définitif**
- ✅ Dashboards direction actifs
- ✅ Mobile responsive déployé
- ✅ 100% utilisateurs sur Odoo
- ✅ Sage MDE coupé
- ✅ Satisfaction > 4.5/5

---

## ⚠️ RISQUES & MITIGATION

### Top 5 Risques

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| **Résistance changement RA** | Moyenne | Élevé | Pilotes ambassadeurs, quick wins visibles M2, formation intensive, gain temps immédiat |
| **Migration données complexe** | Moyenne | Élevé | Scripts ETL testés, nettoyage amont, backup rollback, import progressif, tests validation |
| **APIs fournisseurs instables** | Faible | Moyen | Fallback import CSV manuel, cache local, monitoring 24/7, double source |
| **Budget dépassé** | Faible | Moyen | Contingence 10% (66K€), phases indépendantes, Go/No-Go jalons, ajustements possibles |
| **Délais non tenus** | Moyenne | Moyen | Agile sprints 2 semaines, jalons clairs, ajustements rapides, équipe dédiée |

### Plan Contingence

**Si pilotes M2 insatisfaits:**
- Prolonger Phase 1 de 2-4 semaines
- Ajuster templates selon feedback
- Formation renforcée
- Support quotidien prolongé

**Si APIs fournisseurs impossible:**
- Fallback import CSV manuel mensuel
- Sync prix via Excel
- Développement scraping web (si autorisé)

**Si migration données problème:**
- Import manuel progressif
- Rollback Sage MDE temporaire
- Double saisie courte période
- Nettoyage données amont renforcé

**Si budget serré:**
- Phase 3 (dashboards/mobile) reportable M7-M8
- Priorisation features essentielles
- Développements custom différés
- ML/BI avancé optionnel ultérieur

---

## 🎯 CRITÈRES SUCCÈS

### Objectifs Quantitatifs

| Métrique | Actuel | Cible M6 | Amélioration |
|----------|--------|----------|--------------|
| **Temps création devis** | 2h05 | < 31 min | 75% plus rapide |
| **Temps génération PPSPS** | 3h00 | < 27 min | 85% plus rapide |
| **Recherche template** | 30 min | < 1 min | 97% plus rapide |
| **Chargement écrans** | 30-40s | < 2s | 95% plus rapide |
| **Visibilité direction** | 3h | Temps réel | Immédiat |
| **Satisfaction utilisateurs** | - | > 4.5/5 | Mesure continue |

### Objectifs Qualitatifs

**Adoption**
- ✅ 100% RA utilisent Odoo quotidiennement
- ✅ Taux abandon Sage MDE: 100%
- ✅ Direction consulte dashboards quotidiennement
- ✅ Télétravail utilisé régulièrement

**Automatisation**
- ✅ 100% devis via templates
- ✅ 100% PPSPS générés automatiquement
- ✅ 100% reliquats tracés
- ✅ Clauses obligatoires intégrées

**Visibilité**
- ✅ KPIs temps réel accessibles
- ✅ Rapports automatiques hebdomadaires
- ✅ Alertes proactives fonctionnelles
- ✅ Pilotage data-driven actif

---

## 📋 PROCHAINES ÉTAPES

### Validation Décision (Semaine 1-2)

1. **Présentation Plan Direction**
   - Marie (Directrice)
   - Laurent (RA Lead)
   - Thomas (BE)
   - Validation budget 60K€

2. **Sélection Prestataire Odoo**
   - Appel d'offres 3-4 intégrateurs
   - Comparaison propositions
   - Validation références clients
   - Choix prestataire

3. **Contractualisation**
   - Contrat prestataire
   - Calendrier détaillé
   - Engagement support
   - Garanties résultats

### Kick-off Projet (Semaine 3-4)

1. **Constitution Équipe**
   - Sponsor: Marie
   - Product Owner: Laurent
   - Lead Tech: Prestataire
   - Pilotes: Laurent + RA2

2. **Planning Détaillé**
   - Sprints 2 semaines
   - Jalons Go/No-Go
   - Formation calendrier
   - Support planning

3. **Communication**
   - Annonce équipe
   - Objectifs projet
   - Bénéfices attendus
   - Timeline

### M1-M6: Exécution

Suivre planning détaillé (voir [02_Planning_Implementation.md](../implementation/02_Planning_Implementation.md))

---

## 📚 DOCUMENTS CONNEXES

- [Planning Implémentation Détaillé](../implementation/02_Planning_Implementation.md) - Timeline 6 mois mois par mois
- [Architecture IT Cible](../implementation/it-logiciel/01_Architecture_Cible.md) - Stack Odoo complet
- [Architecture Data & BI](../implementation/bi-data-ml/01_Architecture_DataDriven.md) - Dashboards & KPIs
- [Pain Points Factuels](../docs/PAIN_POINTS_Faits_Seulement.md) - Constats audit uniquement
- [Diagrammes UML](../uml/README.md) - 12 diagrammes processus actuels

---

**🎯 Objectif:** Moderniser gestion affaires et automatiser processus en 6 mois
**💰 Budget:** 60K€ setup + 13.8K€/an run
**📈 Gains:** 75-85% temps process, visibilité direction temps réel, satisfaction équipe
**🚀 Prochaine étape:** Validation décision + sélection prestataire

**Dernière mise à jour:** 2025-11-17
