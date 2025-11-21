# 📋 PLAN D'ACTION - Service Achats & Logistique
**Entreprise** : Duret Electricité - Annecy
**Date audit** : Novembre 2025
**Auditeur** : Consultant IT & Data BI/ML

---

## 🔍 RÉSUMÉ DE L'AUDIT

### Situation actuelle

**Infrastructure & Processus**
- ERP Sage MDE jugé "calamiteux" avec base de données chaotique
- 9-11 000 références/an, 80% livrés en 24h MAIS seulement 50% complets
- Processus 100% manuel, multiples Excel, aucune traçabilité
- Pas d'intégration fournisseurs (Rexel, Sonepar), pas d'EDI/API
- Références obsolètes non gérées, double tarification, pas de MAJ prix auto
- Retours non liés aux commandes, reliquats non suivis
- Inventaires très chronophages
- Pas de gouvernance : commandes directes chantiers non contrôlées

**Impact Business**
- 50% seulement des commandes arrivent complètes
- Perte de temps importante sur vérifications manuelles
- Risque d'erreurs de prix (double tarification constatée)
- Stock immobilisé non optimisé
- Aucune visibilité temps réel sur les approvisionnements
- Relation fournisseurs non pilotée (pas de KPIs)

### Besoins exprimés (cahier des charges)

**Fonctionnalités prioritaires**
- E-procurement type "marketplace interne Amazon"
- Workflow digital : Émetteur (chantier) → Validateur (resp affaires) → Gestionnaire (achats)
- Traçabilité totale : besoin → commande → réception → facture
- Fiches articles enrichies (images, prix multi-fournisseurs, délais, docs techniques)
- Intégration APIs fournisseurs (Rexel, Sonepar via EDI/API)
- Mobile-first pour saisie chantier (scan codes-barres)
- Alertes intelligentes (prix, stocks, obsolescence)
- 3-way matching automatique (commande-BL-facture)

**Gestion des articles**
- Nature (MX/MXX) modifiable
- Fonction "Mettre en sommeil" pour références obsolètes
- Champ "Référence de remplacement"
- Gestion multi-fournisseurs avec prix différents par fournisseur
- Gestion multi-dépôts (Annecy, Cevins, Chambéry)
- Import/Export Excel pour mise à jour tarifs
- Code EAN, conditionnement, délais standards
- Images produits, fiches PEP, Ecovadis

---

## ✅ CE QUI EST FAISABLE

### Court terme (0-6 mois) - Quick Wins

1. **Nettoyage base de données**
   - Gouvernance stricte : qui peut créer/modifier/archiver
   - Déduplication références
   - Archivage références obsolètes avec fonction "sommeil"
   - Mapping références de remplacement

2. **Workflow digital simple**
   - E-procurement avec 3 niveaux validation
   - Interface web type marketplace
   - Notifications automatiques (email/SMS)
   - Historisation complète des actions

3. **Mobile app chantier**
   - Saisie besoins simplifiée
   - Scan codes-barres/QR codes
   - Géolocalisation automatique
   - Mode offline

4. **Intégration catalogues fournisseurs**
   - APIs Rexel/Sonepar pour prix à jour
   - Import automatique tarifs via Excel/EDI
   - Synchronisation quotidienne
   - Alertes écarts prix

5. **Reporting basique**
   - KPIs achats (taux service, délais, écarts)
   - Dashboard temps réel
   - Suivi reliquats
   - Performance fournisseurs

### Moyen terme (6-18 mois) - Transformation

1. **Intelligence artificielle**
   - Prévision besoins par chantier/saison
   - Alertes prix (produit moins cher ailleurs)
   - Détection références obsolètes automatique
   - Suggestions réapprovisionnement

2. **Optimisation stocks**
   - Suggestions sorties/réappro automatiques
   - Inventaires simplifiés (tournants)
   - Seuils min/max dynamiques
   - Réservation matériel par chantier

3. **Consolidation automatique**
   - Regroupement besoins par fournisseur
   - Suggestions commandes groupées
   - Optimisation frais transport
   - Gestion contrats cadres

4. **3-way matching**
   - Rapprochement auto commande-BL-facture
   - Gestion écarts prix/quantité
   - Workflow validation factures
   - Export comptable automatique

5. **EDI complet**
   - Échanges automatisés avec fournisseurs majeurs
   - Statuts commandes temps réel
   - Suivi livraisons
   - Gestion avoirs/retours

### Long terme (18-24 mois) - Excellence

1. **Prédictions ML avancées**
   - Anticipation ruptures stocks
   - Optimisation prix/volumes (EOQ adaptatif)
   - Scoring fournisseurs multi-critères
   - Prévisions budgétaires

2. **Blockchain supply chain**
   - Traçabilité bout en bout
   - Certifications produits
   - Smart contracts fournisseurs
   - Audit trail immuable

3. **Données environnementales**
   - Empreinte carbone par produit
   - Intégration Ecovadis
   - Fiches PEP automatiques
   - Reporting RSE

---

## 🎯 PISTES RECOMMANDÉES

### Option A : ERP Intégré (Recommandé si budget >300K€)

**Odoo Enhanced Construction**

**Avantages**
- ✅ Modules natifs complets (Purchase, Inventory, Workflow)
- ✅ E-procurement marketplace intégré
- ✅ Mobile apps natives offline
- ✅ Développement modules custom BTP
- ✅ Architecture moderne Python/PostgreSQL
- ✅ APIs ouvertes pour intégrations
- ✅ Scalabilité illimitée
- ✅ Communauté massive (7M+ utilisateurs)

**Inconvénients**
- ⚠️ Migration données complexe
- ⚠️ Formation utilisateurs nécessaire
- ⚠️ Investissement initial élevé

**Coûts**
- 💰 Chiffrage détaillé nécessite une étude de faisabilité approfondie
- 💰 Ordre de grandeur : investissement significatif sur 12-18 mois
- 💰 Budgets indicatifs disponibles sur demande après benchmark solutions

**Bénéfices attendus**
- 📊 **Efficacité process** : Réduction drastique des ressaisies manuelles
- 📊 **Réduction erreurs** : Amélioration significative du taux de commandes complètes
- 📊 **Optimisation prix** : Visibilité temps réel et comparaison fournisseurs
- 📊 **Stock optimisé** : Meilleure rotation et réduction des immobilisations
- 📊 **Taux service** : Objectif d'amélioration substantielle du taux actuel
- 📊 **ROI** : À évaluer selon solution retenue et périmètre exact

### Option B : Solution Légère (Budget 50-150K€)

**Plateforme e-procurement SaaS + Intégrations**

**Produits possibles**
- Ivalua, Jaggaer, Procuros (généralistes)
- Abylon, Wizzcad, BatiChiffrage (BTP spécialisés)
- Connexion avec Sage MDE existant
- Développement APIs custom pour Rexel/Sonepar
- Dashboard BI externe (Power BI/Tableau)

**Avantages**
- ✅ Déploiement rapide (2-3 mois)
- ✅ Investissement initial modéré
- ✅ Pas de migration ERP complète
- ✅ SaaS = maintenance externalisée

**Inconvénients**
- ⚠️ Intégration partielle
- ⚠️ Limites scalabilité
- ⚠️ Coûts récurrents élevés
- ⚠️ Dépendance éditeur

**Coûts**
- 💰 Chiffrage selon solutions SaaS du marché (étude comparative requise)
- 💰 Modèle par abonnement : coûts récurrents à anticiper
- 💰 Intégrations : variables selon connecteurs disponibles

**Bénéfices attendus**
- 📊 **Gains process** : Amélioration notable de l'efficacité opérationnelle
- 📊 **Taux service** : Amélioration du taux de commandes complètes
- 📊 **Optimisation stocks** : Meilleure visibilité et réduction des immobilisations
- 📊 **ROI** : Payback rapide attendu (déploiement plus court)

### Option C : Optimisation Existant (Budget <50K€)

**Sage MDE Enhanced**

**Approche**
- Scripts automatisation (Python/VBA)
- Nettoyage base + gouvernance stricte
- Portail web custom pour e-procurement basique
- Intégrations APIs fournisseurs
- Dashboard BI externe

**Avantages**
- ✅ Investissement minimal
- ✅ Pas de changement ERP
- ✅ Utilisateurs conservent leurs habitudes

**Inconvénients**
- ⚠️ Architecture vieillissante
- ⚠️ Peu scalable
- ⚠️ Limitations fonctionnelles
- ⚠️ Dette technique accrue
- ⚠️ Gains limités

**Coûts**
- 💰 Investissement minimal (développements ciblés)
- 💰 Utilisation infrastructure existante

**Bénéfices attendus**
- 📊 **Gains process** : Amélioration limitée mais rapide
- 📊 **Taux service** : Amélioration modérée attendue
- 📊 **ROI** : Gains limités car architecture vieillissante maintenue

---

## 📊 PRIORISATION ACTIONS

### 🔴 URGENT (Mois 1-3)

**1. Gouvernance données**
- Procédures création/modification/archivage références
- Équipe "Data Quality" dédiée
- Règles de nommage standardisées
- Workflow validation nouvelles références

**2. Workflow papier → digital**
- Formulaire web simple émission besoins
- 3 niveaux validation (Émetteur → Validateur → Gestionnaire)
- Notifications automatiques
- Historisation actions

**3. Catalogue centralisé**
- Base articles unifiée
- Fiches enrichies (images, délais, conditionnements)
- Moteur recherche avancé
- Gestion favoris/kits standards

**4. Blocage appros directs**
- Tout passe par validation centrale
- Seuils euro déclenchement
- Contrôle bureau/dépôt obligatoire
- Traçabilité complète

### 🟠 IMPORTANT (Mois 4-6)

**5. Intégration Rexel/Sonepar**
- APIs catalogues + prix temps réel
- Import automatique tarifs
- Synchronisation quotidienne
- Table correspondance références

**6. Mobile app MVP**
- Saisie besoins chantier
- Géolocalisation automatique
- Scan codes-barres
- Mode offline

**7. Alertes automatiques**
- Email/SMS pour reliquats
- Notifications livraisons
- Alertes validation en attente
- Écarts prix

**8. Reporting KPIs**
- Dashboard direction temps réel
- Taux service fournisseurs
- Délais moyens
- Consommation par chantier/activité

### 🟢 STRUCTURANT (Mois 7-18)

**9. IA prédictive**
- Modèles ML prévisions besoins (LSTM)
- Détection prix anormaux
- Alertes références obsolètes
- Suggestions réappro

**10. 3-way matching**
- Rapprochement auto commande-BL-facture
- Gestion écarts
- Workflow validation
- Export comptable

**11. Optimisation logistique**
- Algorithmes tournées livraison
- Consolidation commandes
- Tracking GPS temps réel
- Calcul coûts/émissions CO2

**12. Données environnementales**
- Empreinte carbone par produit
- Intégration Ecovadis
- Fiches PEP
- Reporting RSE automatique

---

## 💡 RECOMMANDATIONS CLÉS

### 1. Ne PAS partir sur un big-bang
- Approche progressive avec POC 3 mois
- Tester sur 1-2 chantiers pilotes
- Ajuster avant généralisation
- Déploiement par vagues

### 2. Prioriser gouvernance données
- Sans données fiables, aucune IA ne marchera
- Investir temps nettoyage base
- Former équipes aux bonnes pratiques
- Audits qualité trimestriels

### 3. Impliquer utilisateurs terrain
- Chefs chantier = early adopters critiques
- Ateliers co-conception
- Formation continue
- Champions internes

### 4. Choisir plateforme extensible
- Éviter solutions propriétaires fermées
- APIs ouvertes obligatoires
- Architecture modulaire
- Indépendance éditeur

### 5. ROI rapide obligatoire
- Quick wins visibles mois 1-3
- Communiquer gains régulièrement
- Mesurer KPIs before/after
- Success stories internes

### 6. Change management crucial
- Communication transparente
- Formation progressive (12 mois)
- Support réactif
- Feedback loops

---

## 📅 PLANNING SUGGÉRÉ

### Mois 1-2 : Audit & Choix Solution

**Activités**
- Benchmark 3-4 solutions (Odoo, EBP, SaaS spécialisés)
- POC 4 semaines avec 2-3 fournisseurs
- Évaluation ROI détaillée
- Décision investissement

**Livrables**
- Comparatif solutions
- Business case complet
- Décision go/no-go
- Contrat signé

### Mois 3-6 : Fondations

**Activités**
- Nettoyage base données (déduplication, archivage)
- Implémentation workflow digital v1
- Développement mobile app basique
- Formation équipes (3 vagues)

**Livrables**
- Base données propre (gouvernance active)
- Workflow opérationnel
- App mobile déployée
- 80% utilisateurs formés

### Mois 7-12 : Intelligence

**Activités**
- Intégrations APIs fournisseurs (Rexel, Sonepar)
- Développement IA prédictive MVP
- 3-way matching automatique
- Optimisation stocks (seuils dynamiques)

**Livrables**
- APIs fournisseurs actives
- 3 modèles ML en production
- 70% factures auto-rapprochées
- -15% stock immobilisé

### Mois 13-18 : Excellence

**Activités**
- ML avancé (10+ modèles)
- IoT chantiers (capteurs, tracking)
- Données environnementales
- Benchmark sectoriel

**Livrables**
- 95% taux service
- -25% coûts achats
- Reporting RSE complet
- Leadership innovation

---

## 💰 BUDGETS INDICATIFS

### Comparatif 3 Options

| Aspect | Option C<br/>Légère | Option B<br/>SaaS | Option A<br/>ERP |
|--------|---------------------|-------------------|------------------|
| **Investissement** | Minimal | Modéré | Significatif |
| **Délai déploiement** | Rapide (2-3 mois) | Moyen (4-6 mois) | Long (12-18 mois) |
| **Gains attendus** | Limités | Substantiels | Maximaux |
| **Risque** | Faible | Moyen | Élevé |
| **Scalabilité** | Limitée | Bonne | Excellente |
| **Pérennité** | Dette technique | Bonne | Très bonne |

⚠️ **Note importante** : Un chiffrage précis nécessite :
- Benchmark détaillé de 3-4 solutions
- Évaluation du périmètre exact
- Analyse des coûts cachés (formation, migration, maintenance)
- Étude de faisabilité approfondie avec les éditeurs

### Approche Recommandée

**Étape 1 : Étude de faisabilité (4-6 semaines)**
- Consultation éditeurs/intégrateurs
- Démonstrations solutions
- Chiffrage détaillé par phase
- Analyse ROI avec données réelles

**Étape 2 : Décision investissement**
- Présentation options chiffrées
- Validation budget et timeline
- Sélection solution

**Étape 3 : Pilote (3-4 mois)**
- Validation terrain sur périmètre réduit
- Mesure gains réels
- Go/No-Go généralisation

---

## ❓ QUESTIONS À CLARIFIER

### Budget & Timeline

1. **Budget disponible total** : <100K€ / 100-300K€ / >300K€ ?
2. **Timeline souhaitée** : pression court terme (<6 mois) ou vision 3-5 ans ?
3. **Financement** : budget propre, prêt bancaire, leasing, ou mix ?
4. **ROI attendu** : payback <6 mois / <12 mois / <24 mois ?

### Ressources & Organisation

5. **Équipe IT interne** : présente et disponible ou tout externalisé ?
6. **Chef de projet** : dédié full-time ou temps partiel ?
7. **Sponsors exécutifs** : direction impliquée ou délégation complète ?
8. **Utilisateurs pilotes** : identifiés et volontaires ?

### Périmètre & Priorités

9. **Périmètre projet** : que Achats-Logistique ou refonte SI globale ?
10. **Services inclus** : RH, Compta, Commercial à intégrer dans même projet ?
11. **Fournisseurs prioritaires** : Rexel/Sonepar uniquement ou élargir ?
12. **Dépôts concernés** : Annecy seul ou 3 sites (Annecy, Cevins, Chambéry) ?

### Risques & Contraintes

13. **Appétence risque** : POC prudent ou transformation rapide ?
14. **Contraintes réglementaires** : spécifiques BTP à respecter ?
15. **Migration données** : qualité actuelle, volume, complexité ?
16. **Résistance changement** : anticipée forte/moyenne/faible ?

---

## 🎯 PROCHAINES ÉTAPES RECOMMANDÉES

### Étape 1 : Validation Stratégique (Semaine 1-2)

**Actions**
- Présentation plan à direction
- Validation budget & timeline
- Désignation sponsor exécutif
- Constitution comité pilotage

**Décisions attendues**
- Go/No-Go global
- Choix option (A/B/C)
- Budget alloué
- Équipe projet

### Étape 2 : Benchmark Solutions (Semaine 3-6)

**Actions**
- RFI/RFP 4-5 éditeurs
- Démos solutions (2h chacune)
- Visites sites références
- Évaluation grille multicritères

**Livrables**
- Matrice comparative
- Recommandation motivée
- Business case détaillé
- Contrat négocié

### Étape 3 : POC 3 Mois (Semaine 7-18)

**Périmètre POC**
- 1-2 chantiers pilotes
- 10-15 utilisateurs
- 500-1000 références
- 2-3 fournisseurs majeurs

**Critères succès**
- Taux adoption >80%
- Temps saisie -50%
- Erreurs -70%
- Satisfaction >4/5

**Go/No-Go à l'issue**
- Atteinte >75% critères → Généralisation
- Sinon → Ajustements ou abandon

### Étape 4 : Généralisation (Mois 5-12)

**Déploiement**
- Par vagues (3 vagues de 4 mois)
- Formation continue
- Support intensif
- Optimisation itérative

**Suivi ROI**
- KPIs mesurés mensuellement
- Reporting direction
- Ajustements processus
- Communication gains

---

## 📈 KPIs DE SUCCÈS

### Indicateurs Opérationnels

**Approvisionnement**
- Taux commandes complètes : Mesure baseline → **Amélioration significative**
- Délai moyen livraison : Mesure baseline → **Réduction substantielle**
- Taux reliquats : À mesurer → **Réduction ciblée**
- Erreurs commandes : À mesurer → **Réduction drastique**

**Stocks**
- Stock immobilisé : Mesure baseline → **Optimisation visée**
- Taux rotation : À mesurer → **Amélioration**
- Durée inventaire : Mesure baseline → **Réduction importante**
- Références obsolètes : À auditer → **Nettoyage et archivage**

**Prix**
- Écarts prix : À mesurer → **Détection et correction**
- Conformité tarifs : À auditer → **Synchronisation automatique**
- Optimisation achats : Baseline requise → **Visibilité et optimisation**
- Litiges fournisseurs : À documenter → **Réduction attendue**

### Indicateurs Processus

**Workflow**
- Temps émission → validation : À mesurer → **Objectif temps réel**
- Temps validation → commande : À mesurer → **Accélération ciblée**
- Temps commande → livraison : Baseline requise → **Amélioration attendue**
- Temps saisie besoin : À chronométrer → **Simplification drastique**

**Qualité**
- Taux adoption outil : 0% → **Cible élevée après formation**
- Satisfaction utilisateurs : À mesurer → **Objectif satisfaction forte**
- Données complètes : À auditer → **Complétude maximale visée**
- Traçabilité : 0% → **Traçabilité complète**

### Indicateurs Business

**Bénéfices attendus**
- Gains process : **Réduction temps et ressaisies**
- Réduction erreurs : **Moins de commandes incomplètes et litiges**
- Optimisation prix : **Visibilité et comparaison fournisseurs**
- Gains stocks : **Meilleure rotation et moins d'immobilisation**
- **Chiffrage ROI** : Nécessite mesures baselines précises

**Stratégique**
- Réactivité : **Amélioration de la rapidité de réponse**
- Qualité service : **Moins de chantiers bloqués**
- Image innovation : **Modernisation et attractivité**
- Attraction talents : **Outils modernes pour recrutement**

---

## 🔒 RISQUES & MITIGATION

### Risques Techniques

**1. Performance système**
- **Risque** : Lenteur avec 10K+ références
- **Mitigation** : Cache intelligent, indexation, CDN
- **Backup** : Migration cloud scalable

**2. Intégrations APIs**
- **Risque** : APIs fournisseurs instables/limitées
- **Mitigation** : Retry logic, fallback Excel
- **Backup** : Scraping web + cache

**3. Migration données**
- **Risque** : Perte/corruption données
- **Mitigation** : Tests exhaustifs, backup quotidien
- **Backup** : Plan rollback complet

### Risques Business

**4. Adoption utilisateurs**
- **Risque** : Résistance changement forte
- **Mitigation** : Change management intensif, champions
- **Backup** : Phase pilote longue, ajustements

**5. ROI non atteint**
- **Risque** : Gains surestimés
- **Mitigation** : Hypothèses conservatrices, mesure continue
- **Backup** : Clauses contractuelles performance

**6. Dépassement budget**
- **Risque** : Coûts cachés, périmètre élargi
- **Mitigation** : Budget contingence 20%, gouvernance stricte
- **Backup** : Arrêt si dépassement >30%

### Risques Organisationnels

**7. Sponsor désengagé**
- **Risque** : Perte support direction
- **Mitigation** : Comité pilotage mensuel, quick wins visibles
- **Backup** : Escalade comex

**8. Ressources insuffisantes**
- **Risque** : Équipe débordée
- **Mitigation** : Staff augmentation, externalisation
- **Backup** : Timeline rallongée

---

## ✅ CONCLUSION & RECOMMANDATION

### Recommandation Principale

**👉 Approche progressive recommandée**

**Méthodologie :**
1. ✅ **Étude de faisabilité d'abord** (4-6 semaines)
2. ✅ **Benchmark 3-4 solutions** avec démonstrations
3. ✅ **Chiffrage détaillé** par solution et par phase
4. ✅ **Mesure baselines actuelles** pour calculer ROI réel
5. ✅ **Pilote avant généralisation** pour valider gains
6. ✅ **Décision éclairée** sur données factuelles

**Facteurs de choix :**
- Budget disponible et horizon d'investissement
- Ambition de transformation (partielle vs complète)
- Périmètre (Achats seul vs SI global)
- Ressources IT internes ou externes
- Appétence au risque et au changement

### Options selon contraintes

**Si budget modéré → Solution SaaS e-procurement**
- Déploiement rapide (3-6 mois)
- Risque limité (mode SaaS)
- Coûts récurrents mais prévisibles
- Évolutif si besoin futur

**Si budget très contraint → Optimisation existant**
- Gains rapides mais limités
- Investissement minimal
- Dette technique maintenue
- Migration probable à moyen terme (2-3 ans)

### Next Steps Immédiats

1. **Cette semaine** : Validation direction + budget
2. **Semaine prochaine** : Lancement RFP 3-4 éditeurs
3. **Mois prochain** : Démos + sélection solution
4. **Dans 2 mois** : Démarrage POC
5. **Dans 6 mois** : Go/No-Go généralisation

---

**📞 Contact Auditeur**
Pour questions/précisions sur ce plan d'action

**📅 Date prochaine revue**
À définir après validation direction

**🔄 Version document**
v1.0 - Novembre 2025
