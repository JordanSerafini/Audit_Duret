# 📊 ARCHITECTURE DATA-DRIVEN - Service Client Analytics & ML

> Analytics temps réel, KPIs automatisés, Machine Learning prédictif

---

## 🎯 Vision Data

**Objectif :** Transformer le Service Client en centre de données stratégique
- 📊 **Analytics temps réel** : KPIs dashboards
- 🤖 **ML Prédictif** : Anticipation besoins, optimisation
- 📈 **Reporting automatisé** : Fin Excel manuel
- 🔍 **Insights actionnables** : Pilotage data-driven

---

## 📊 PARTIE 1 : ANALYTICS & BI

### 1.1 Sources de Données

```
┌─────────────────────────────────────────────────────────┐
│                  SOURCES DE DONNÉES                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  📱 HubSpot CRM         │  📞 CTI Téléphonie            │
│  • Contacts (300+)      │  • Appels entrants/sortants   │
│  • Tickets (50+/jour)   │  • Durée appels               │
│  • Historique           │  • Enregistrements            │
│  • Workflows            │                               │
│                                                         │
│  📱 App Mobile          │  🌐 Portail Client            │
│  • Interventions        │  • RDV pris en ligne          │
│  • Devis terrain        │  • Pages visitées             │
│  • Photos               │  • Temps passé                │
│  • Pointages            │  • Satisfaction               │
│                                                         │
│  💻 SAGE                │  📧 Email (Outlook)           │
│  • Clients              │  • Volume mails               │
│  • Devis                │  • Taux réponse               │
│  • Factures             │                               │
└─────────────────────────────────────────────────────────┘
```

### 1.2 Data Warehouse

**Option A : Power BI + Azure (Recommandé)**

```
Sources        │    ETL          │  Data Warehouse │  Visualisation
─────────────────────────────────────────────────────────────────
HubSpot    ──►│                │                 │
CTI        ──►│  Power Query   │  Azure SQL      │  Power BI
App Mobile ──►│  +             │  Database       │  Dashboards
SAGE       ──►│  Dataflows     │                 │
              │                │  • Star Schema  │  • KPIs
              │  Transform     │  • Historique   │  • Reports
              │  Clean         │  • Agrégations  │  • Alertes
              │  Enrich        │                 │
```

**Coût :**
- Power BI Pro : 10 licences × 10€/mois = 1.2K€/an
- Azure SQL DB : S1 (20 DTU) = 30€/mois = 360€/an
- **Total :** 1.6K€/an

**Option B : HubSpot Analytics Natif (Quick Start)**
- ✅ Inclus dans HubSpot Pro
- ⚠️ Limité aux données HubSpot
- **Coût :** 0€ (inclus)

### 1.3 Dashboards

#### **Dashboard 1 : Direction (Vue Stratégique)**

```
┌───────────────────────────────────────────────────────┐
│        📊 SERVICE CLIENT - VUE DIRECTION              │
├───────────────────────────────────────────────────────┤
│                                                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │  Appels  │  │   NPS    │  │   Coût   │           │
│  │  45/jour │  │    42    │  │  8.5K€   │           │
│  │  -10%▼   │  │  +12▲    │  │  -15%▼   │           │
│  └──────────┘  └──────────┘  └──────────┘           │
│                                                       │
│  ┌────────────────────────────────────────────────┐  │
│  │  📈 ÉVOLUTION SATISFACTION (12 mois)           │  │
│  │                                                │  │
│  │    8 ┤                               ●●●      │  │
│  │    7 ┤                     ●●● ●●●           │  │
│  │    6 ┤           ●●● ●●●                     │  │
│  │    5 ┤   ●●● ●●●                             │  │
│  │    4 ┤●●●                                     │  │
│  │      └───────────────────────────────────────│  │
│  │       J F M A M J J A S O N D                │  │
│  └────────────────────────────────────────────────┘  │
│                                                       │
│  ┌──────────────────────────┬─────────────────────┐  │
│  │  Top 3 Motifs Appels     │  CA Additionnel     │  │
│  ├──────────────────────────┼─────────────────────┤  │
│  │  1. RDV SAV        35%   │  Devis terrain      │  │
│  │  2. Devis          28%   │  45K€ (YTD)         │  │
│  │  3. Réclamation    18%   │  +15% vs 2024       │  │
│  └──────────────────────────┴─────────────────────┘  │
└───────────────────────────────────────────────────────┘
```

#### **Dashboard 2 : Claire (Vue Opérationnelle)**

```
┌───────────────────────────────────────────────────────┐
│        📞 SERVICE CLIENT - VUE OPÉRATIONNELLE         │
├───────────────────────────────────────────────────────┤
│                                                       │
│  🔴 ALERTES (Aujourd'hui)                             │
│  • 3 tickets > 24h sans réponse                       │
│  • 5 clients à relancer (devis en attente)            │
│  • 2 techniciens sans pointage hier                   │
│                                                       │
│  ┌──────────────────────────────────────────────────┐ │
│  │  📊 TICKETS (Cette semaine)                      │ │
│  │                                                  │ │
│  │  Ouverts:  42  │  Fermés: 38  │  En cours: 12  │ │
│  │                                                  │ │
│  │  Temps résolution moyen: 3.2h (cible <4h) ✅    │ │
│  │  Taux résolution 1er contact: 68% (cible >70%)⚠️│ │
│  └──────────────────────────────────────────────────┘ │
│                                                       │
│  ┌──────────────────────────────────────────────────┐ │
│  │  📅 PLANNING TECHNICIENS (Aujourd'hui)           │ │
│  ├──────────────────────────────────────────────────┤ │
│  │  Gaëtan  │ 9h-12h: RDV Dupont  │ 14h-17h: Dispo│ │
│  │  Marc    │ 9h-18h: Chantier    │ Non dispo    │ │
│  │  Julien  │ 9h-11h: Dispo       │ 14h-16h: RDV │ │
│  └──────────────────────────────────────────────────┘ │
│                                                       │
│  ┌──────────────────────────────────────────────────┐ │
│  │  💬 MAILS (Aujourd'hui)                          │ │
│  │  Reçus: 48  │  Traités: 42  │  En attente: 6   │ │
│  │  Temps réponse moyen: 2.1h (cible <4h) ✅        │ │
│  └──────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────┘
```

#### **Dashboard 3 : Techniciens (Vue Terrain)**

```
┌───────────────────────────────────────────────────────┐
│        🔧 TECHNICIEN - VUE PERSONNELLE (Gaëtan)       │
├───────────────────────────────────────────────────────┤
│                                                       │
│  📅 MES RDV AUJOURD'HUI                               │
│  ┌─────────────────────────────────────────────────┐ │
│  │  9h-11h  │ M. Dupont  │ Entretien annuel        │ │
│  │          │ 12 rue...  │ 📍 15 min trajet        │ │
│  ├─────────────────────────────────────────────────┤ │
│  │  14h-16h │ Mme Martin │ Dépannage tableau       │ │
│  │          │ 8 av...    │ 📍 10 min trajet        │ │
│  └─────────────────────────────────────────────────┘ │
│                                                       │
│  📊 MES STATS (Cette semaine)                         │
│  • Interventions: 12                                  │
│  • Devis générés: 8 (🎯 +3 vs semaine dernière)      │
│  • Satisfaction moyenne: 4.6/5 ⭐                     │
│  • Temps moyen intervention: 1h45                     │
│                                                       │
│  💰 CA GÉNÉRÉ (Devis terrain)                         │
│  • Cette semaine: 12K€                                │
│  • Ce mois: 45K€                                      │
│  • Cet année: 180K€                                   │
└───────────────────────────────────────────────────────┘
```

### 1.4 KPIs Automatisés

#### **KPIs Opérationnels (Temps Réel)**

| KPI | Formule | Source | Alerte |
|-----|---------|--------|--------|
| **Volume appels/jour** | COUNT(appels) WHERE DATE=TODAY | CTI | Si >70 (surcharge) |
| **Temps réponse moyen** | AVG(timestamp_réponse - timestamp_appel) | HubSpot | Si >4h |
| **Taux résolution 1er contact** | COUNT(tickets fermés 1ère réponse) / COUNT(tickets) | HubSpot | Si <70% |
| **Tickets > 24h** | COUNT(tickets) WHERE durée > 24h AND statut != fermé | HubSpot | Si >5 |
| **RDV pris en ligne (%)** | COUNT(RDV portail) / COUNT(RDV total) | Portail + HubSpot | Suivi |

#### **KPIs Qualité (Hebdomadaire)**

| KPI | Formule | Source | Cible |
|-----|---------|--------|-------|
| **NPS (Net Promoter Score)** | (Promoteurs - Détracteurs) / Répondants × 100 | HubSpot Surveys | >40 |
| **Satisfaction moyenne** | AVG(note_satisfaction) | HubSpot | >4/5 |
| **Taux réponse questionnaire** | COUNT(réponses) / COUNT(envois) | HubSpot | >60% |
| **Clients perdus/mois** | COUNT(clients) WHERE statut=perdu AND mois=X | HubSpot | <2 |

#### **KPIs Business (Mensuel)**

| KPI | Formule | Source | Cible |
|-----|---------|--------|-------|
| **CA additionnel devis terrain** | SUM(devis validés via app mobile) | App + SAGE | +10K€/mois |
| **Taux conversion portail** | COUNT(RDV portail validés) / COUNT(visites portail) | Google Analytics + Portail | >15% |
| **Coût appel moyen** | Coût total service client / Nb appels | Comptabilité + CTI | -10% |
| **Temps admin Claire (%)** | Heures admin / Heures totales | Pointage + HubSpot | <40% |

---

## 🤖 PARTIE 2 : MACHINE LEARNING

### 2.1 Modèle 1 : Prévision Volume Appels

**Objectif :** Anticiper le volume d'appels pour optimiser le planning de Claire

**Algorithme :** ARIMA + LSTM (Deep Learning)

**Input Data :**
- Historique appels (6-12 mois)
- Jour de la semaine
- Période de l'année (saisonnalité)
- Jours fériés
- Météo (températures extrêmes → plus d'appels SAV)

**Output :**
- Prévision volume appels J+1 à J+30
- Intervalle de confiance 95%

**Entraînement :**
```python
# Exemple simplifié
from statsmodels.tsa.arima.model import ARIMA
import pandas as pd

# Load data
df = pd.read_sql("SELECT date, nb_appels FROM appels_quotidiens", conn)
df = df.set_index('date')

# Train ARIMA
model = ARIMA(df['nb_appels'], order=(5,1,0))
model_fit = model.fit()

# Forecast
forecast = model_fit.forecast(steps=30)
```

**ROI :**
- Optimisation planning Claire (éviter sous-effectif ou sureffectif)
- Anticipation besoin support (intérimaire si pic prévu)

**Coût :** 8K€ développement + 400€/an hosting

---

### 2.2 Modèle 2 : Risque Churn Client

**Objectif :** Identifier clients à risque de partir pour actions préventives

**Algorithme :** Random Forest Classifier

**Input Features :**
- Fréquence appels (↓ = risque)
- Délai dernier contact (↑ = risque)
- Satisfaction moyenne (↓ = risque)
- Taux réclamations (↑ = risque)
- Délai interventions (↑ = risque)
- Nombre devis non validés (↑ = risque)
- Ancienneté client (↓ = moins fidèle)

**Output :**
- Score risque churn 0-100%
- Probabilité départ 3-6 mois

**Training :**
```python
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Features
X = df[['frequence_appels', 'delai_contact', 'satisfaction',
        'nb_reclamations', 'delai_interventions', 'devis_non_valides']]

# Target (client parti = 1, resté = 0)
y = df['churned']

# Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train
rf = RandomForestClassifier(n_estimators=100)
rf.fit(X_train, y_train)

# Predict
df['churn_score'] = rf.predict_proba(X)[:, 1] * 100
```

**Actions Automatiques :**
- Si score > 70% → Alerte Claire + Email automatique client personnalisé
- Si score > 50% → Inscription campagne rétention (offre spéciale)

**ROI :**
- Rétention +10% = 30 clients × 10K€ CA = 300K€/an

**Coût :** 6K€ développement + 400€/an hosting

---

### 2.3 Modèle 3 : Optimisation Planning Techniciens

**Objectif :** Optimiser les tournées techniciens (min km, max interventions)

**Algorithme :** Genetic Algorithm (TSP variant)

**Input Data :**
- Liste RDV jour J (adresses)
- Localisation techniciens (départ)
- Durées estimées interventions
- Créneaux clients
- Contraintes (pause déjeuner, horaires)

**Output :**
- Planning optimisé par technicien
- Ordre interventions (min km)
- Heure départ/arrivée estimée

**Logique :**
```
1. Générer population de plannings aléatoires (100)
2. Calculer fitness (km total + contraintes violées)
3. Sélection meilleurs (top 20%)
4. Croisement (combiner plannings)
5. Mutation (permutations aléatoires)
6. Répéter 100 générations
7. Retourner meilleur planning
```

**ROI :**
- -20% km = -20% temps déplacement = 300h/an économisées
- +1 intervention/jour/technicien = +60K€ CA/an

**Coût :** 6K€ développement + 400€/an hosting

---

## 📈 PARTIE 3 : REPORTING AUTOMATISÉ

### 3.1 Rapports Récurrents

| Rapport | Fréquence | Destinataire | Contenu |
|---------|-----------|--------------|---------|
| **KPIs Quotidiens** | Tous les jours 8h | Claire | Volume appels, tickets, alertes |
| **Hebdo Opérationnel** | Lundi 9h | Claire + Gaëtan | Synthèse semaine, top issues, planning semaine |
| **Mensuel Direction** | 1er du mois | Direction | NPS, satisfaction, CA additionnel, coûts |
| **Trimestriel Stratégique** | Tous les 3 mois | CODIR | Évolution KPIs, benchmark, recommandations |

### 3.2 Alertes Temps Réel

**Workflow Alerte Automatique :**
```
Événement déclencheur
         │
         ▼
  Règle métier
  (ex: ticket > 24h)
         │
         ▼
  Notification
  • Email Claire
  • SMS si critique
  • Push app mobile
         │
         ▼
  Création tâche
  HubSpot
```

**Exemples Alertes :**
- 🔴 **Critique :** Client VIP mécontent (satisfaction <2/5)
- 🟠 **Important :** 5+ tickets en attente >24h
- 🟡 **Info :** Pic d'appels inhabituel (+30% vs moyenne)

---

## 💰 RÉCAPITULATIF COÛTS DATA/ML

| Composante | Développement | Run/an |
|------------|---------------|--------|
| **Power BI + Azure** | 10K€ | 1.6K€ |
| **3 Dashboards** | Inclus | - |
| **ML Modèle 1 (Prévision)** | 8K€ | 400€ |
| **ML Modèle 2 (Churn)** | 6K€ | 400€ |
| **ML Modèle 3 (Planning)** | 6K€ | 400€ |
| **TOTAL** | **30K€** | **2.8K€/an** |

---

## 🎯 ROADMAP DATA/ML

### Phase 1 (M1-6) : Analytics de Base
- ✅ Dashboards Power BI (Direction + Claire)
- ✅ KPIs automatisés (10 indicateurs)
- ✅ Rapports hebdo/mensuel automatisés

### Phase 2 (M7-12) : ML Basique
- ✅ Modèle prévision volume appels
- ✅ Dashboards enrichis (techniciens)

### Phase 3 (M13-18) : ML Avancé
- ✅ Modèle risque churn
- ✅ Modèle optimisation planning
- ✅ Recommandations automatiques

---

**🎯 Objectif :** Pilotage 100% data-driven du service client
**📊 KPIs : 15 indicateurs temps réel
**🤖 ML :** 3 modèles prédictifs opérationnels
**💰 ROI :** +400K€/an (rétention + optimisation)
