# SOLUTIONS BI & ANALYTICS - DURET ÉLECTRICITÉ

## PRÉSENTATION

Une solution BI (Business Intelligence) permet de centraliser, analyser et visualiser les données d'entreprise via des tableaux de bord interactifs. Pour Duret Électricité, cela signifie :
- Suivi temps réel de la performance des chantiers
- Analyse de la rentabilit é par projet, client, type d'activité
- Prévisions de trésorerie et CA
- Identification des opportunités et risques

---

## PROBLÈMES IDENTIFIÉS AUDIT DURET

### Besoins Analytics Duret

| Problème identifié | Impact | Solution BI |
|-------------------|---------|-------------|
| **"Tout Excel, tout perso"** | Données dispersées, KPI manuels | Centralisation données, calculs auto |
| **Compta analytique inexistante** | Pas de vision rentabilité par chantier | Analytics par projet/client/type |
| **Remontée info trop longue** | Décisions tardives | Dashboards temps réel |
| **Transparence insuffisante** | Chefs chantier sans visibilité | Accès role-based (RBAC) |
| **KPI manuels chronophages** | 2-3h/semaine perdues | Automatisation complète |

---

## SOLUTIONS BI COMPARÉES

### 1. POWER BI (Microsoft)

**Positionnement** : Leader mondial BI

**Prix** :
- **Power BI Pro** : 8,40€/user/mois
- **Power BI Premium** : À partir de 4 212€/mois (capacité dédiée)

**Avantages** :
- Intégration Microsoft 365 (Excel, Teams)
- Connecteurs nombreux (ERP, bases de données)
- Visualisations riches
- Comunauté large

**Inconvénients** :
- Courbe d'apprentissage moyenne
- Nécessite compétences DAX pour analyses avancées
- Coût Premium élevé pour grandes volumétries

**Adapté à Duret ?** ⚠️ Bon si déjà environnement Microsoft, mais coût +licence/personne

---

### 2. TABLEAU (Salesforce)

**Positionnement** : Solution BI premium

**Prix** :
- **Tableau Creator** : 70€/user/mois
- **Tableau Explorer** : 35€/user/mois  
- **Tableau Viewer** : 12€/user/mois

**Avantages** :
- Interface intuitive (glisser-déposer)
- Visualisations très esthétiques
- Analyses ad-hoc facilitées

**Inconvénients** :
- **Prix élevé** (70€/créateur)
- Nécessite licence créateur pour concevoir dashboards

**Adapté à Duret ?** ❌ Trop cher pour PME

---

### 3. METABASE (Open Source)

**Positionnement** : BI open source simple

**Prix** :
- **Version gratuite** : 0€ (self-hosted)
- **Cloud** : 85$/mois (10 users)
- **Enterprise** : Sur devis

**Avantages** :
- **Gratuit** si self-hosted
- Interface simple pour requêtes SQL
- Connexion directe bases de données
- Partage dashboards facile

**Inconvénients** :
- Moins de connecteurs natifs
- Visualisations plus basiques
- Nécessite hébergement si version gratuite

**Adapté à Duret ?** ✅ Bonne option budget maîtrisé

---

### 4. ODOO BI (Natif ERP)

**Positionnement** : BI intégré ERP Odoo

**Prix** :
- **Inclus dans Odoo Enterprise** (0€ additionnel)

**Avantages** :
- **Gratuit** si déjà Odoo
- Dashboards par module (ventes, stocks, projets)
- Filtres dynamiques
- Export Excel/PDF

**Inconvénients** :
- Limité aux données Odoo
- Moins flexible que solutions dédiées
- Visualisations standard

**Adapté à Duret ?** ✅ Si choix Odoo ERP, excellent point de départ

---

### 5. **DÉVELOPPEMENT DASHBOARD PERSONNALISÉ** 🎯 **RECOMMANDÉ**

**Positionnement** : Solution sur-mesure

#### Stack Technique Recommandé

**Backend** :
- **Node.js** + **Express** : API REST
- **PostgreSQL** : Base de données (si Odoo) ou connexion multi-sources
- **Python** (optionnel) : Scripts analytics avancés

**Frontend** :
- **React** + **TypeScript** : Interface utilisateur
- **Recharts** ou **Chart.js** : Visualisations
- **TailwindCSS** : Design moderne

**Hébergement** :
- **OVH** ou **Scaleway** : Serveurs France (RGPD)
- **Docker** : Conteneurisation
- **Nginx** : Reverse proxy

#### Fonctionnalités Développées

**Page 1 : Vue Globale Entreprise**
- CA mensuel vs prévisionnel
- Marge brute globale
- Trésorerie actuelle
- Top 5 chantiers en cours
- Alertes (dépassements, retards)

**Page 2 : Analyse Chantiers**
- Rentabilité par chantier (coûts réels vs budget)
- Avancement travaux (%)
- Heures techniciens par projet
- Matière consommée vs prévue
- Graphiques comparatifs

**Page 3 : Performance Commerciale**
- Pipeline devis (montant, taux conversion)
- CA par type d'activité (neuf, maintenance, dépannage)
- Top clients (CA, marge)
- Évolution mensuelle

**Page 4 : RH & Ressources**
- Heures par technicien
- Taux d'occupation
- Coûts salariaux vs CA
- Absences/congés

**Page 5 : Stocks & Achats**
- Valorisation stock
- Rotation produits
- Top fournisseurs
- Alertes rupture

#### Contrôle d'Accès (RBAC)

- **Direction** : Accès total
- **Chefs chantier** : Leurs chantiers uniquement
- **Comptabilité** : Vue financière
- **RH** : Données collaborateurs

#### Connexion Données

**Si Odoo ERP** :
- API REST Odoo → Récupération données temps réel
- Synchronisation automatique toutes les heures

**Si Multi-sources** :
- Connecteurs vers EBP, Excel, bases SQL
- ETL (Extract-Transform-Load) quotidien

#### Coût Développement Custom

| Poste | Description |
|-------|-------------|
| **Conception UX/UI** | Maquettes, design system |
| **Développement Backend** | API, connexions données, calculs |
| **Développement Frontend** | 5 pages dashboards interactifs |
| **Tests & Déploiement** | QA, mise en production |
| **Documentation** | Guide utilisateur, technique |

**Coûts Récurrents** :
- Hébergement
- Maintenance corrective
- Évolutions mineures

**Note** : Chiffrage détaillé nécessite cahier des charges précis et devis développeur

---

## COMPARATIF SOLUTIONS 3 ANS

| Solution | Coût 3 ans | Flexibilité | Adapté Duret |
|----------|------------|-------------|--------------|
| **Dashboard Custom** | **À chiffrer** | **10/10** | ✅ **Recommandé** |
| Power BI (10 users Pro) | Environ 3 k€ (tarif éditeur) | 7/10 | ⚠️ Limité |
| Tableau (3 créateurs + 7 viewers) | Environ 10 k€ (tarif éditeur) | 8/10 | ❌ Cher |
| Metabase Cloud | Environ 3 k€ (tarif éditeur) | 6/10 | ✅ Budget serré |
| Odoo BI natif | 0€ (inclus) | 5/10 | ✅ Si Odoo ERP |

---

## RECOMMANDATION POUR DURET ÉLECTRICITÉ

### Approche Progressive

#### **PHASE 1 (Mois 1-3) : Odoo BI Natif**

**Si choix Odoo ERP** :
- Démarrer avec dashboards Odoo inclus
- Identifier besoins spécifiques non couverts
- Former équipe à l'utilisation

**Coût** : 0€ (inclus dans Odoo Enterprise)

#### **PHASE 2 (Mois 6-12) : Développement Dashboard Custom**

**Après validation besoins** :
- Développer dashboard web personnalisé
- 5 pages clés (Globale, Chantiers, Commercial, RH, Stocks)
- Connexion API Odoo ou sources multiples
- Design sur-mesure Duret

**Budget** : 47 000€ dev + 9 200€/an maintenance

#### **PHASE 3 (An 2+) : Évolutions**

- Ajout prévisions ML (chiffrage intelligent, trésorerie)
- Module mobile (suivi chantier terrain)
- Alertes temps réel (SMS/email)

---

## AVANTAGES DASHBOARD PERSONNALISÉ

✅ **Sur-mesure** : 100% adapté besoins Duret  
✅ **Design Duret** : Charte graphique entreprise  
✅ **Évolutif** : Ajout fonctionnalités illimité  
✅ **Propriété** : Code source appartient à Duret  
✅ **Performance** : Optimisé volumétrie Duret  
✅ **RGPD** : Hébergement France, contrôle total données  
✅ **Intégration** : Connexion à toutes sources (Odoo, EBP, Excel)  
✅ **Mobile-friendly** : Accessible tablettes/smartphones

---

## EXEMPLE DASHBOARDS

### Dashboard Direction (Vue Globale)

**Indicateurs Clés** :
- CA Mensuel : 450 K€ (Budget : 420 K€) → +7%
- Marge Brute : 18,5% (Cible : 20%)
- Trésorerie : 320 K€
- Chantiers actifs : 45
- Devis en attente : 280 K€

**Graphiques** :
- Évolution CA 12 derniers mois
- Répartition CA par type d'activité (camembert)
- Top 10 chantiers rentabilité
- Pipeline commercial (entonnoir)

### Dashboard Chef Chantier

**Mes Chantiers** :
- Chantier A : Budget 45 K€, Réalisé 38 K€, Avancement 80%
- Chantier B : Budget 120 K€, Réalisé 95 K€, Avancement 70%
- Alertes : Dépassement matière Chantier B (+5%)

**Heures Équipe** :
- Technicien 1 : 38h semaine
- Technicien 2 : 42h semaine (dont 3h supplémentaires)

---

## PROCHAINES ÉTAPES

### Étape 1 : Cadrage (Semaine 1-2)

1. Atelier besoins avec Direction + Chefs chantier
2. Définition KPI prioritaires
3. Maquettes dashboards (Figma)
4. Validation budget

### Étape 2 : POC (Mois 1-2)

1. Développement page "Vue Globale" (prototype)
2. Connexion données Odoo/EBP
3. Présentation équipe
4. Go/No-Go développement complet

### Étape 3 : Développement (Mois 3-6)

1. Développement 5 pages complètes
2. Tests utilisateurs
3. Formation équipe
4. Mise en production

### Étape 4 : Optimisation (Mois 7-12)

1. Ajustements basés sur retours
2. Ajout fonctionnalités demandées
3. Optimisations performance

---