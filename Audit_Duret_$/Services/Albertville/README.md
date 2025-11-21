# 🏗️ Albertville (Chantiers Moyens & Gros) - Documentation

> Analyse complète du site Albertville - Duret Électricité
> Focus: État ACTUEL, pain points, personas, besoins BTP

---

## 📂 Structure du Dossier

```
Albertville/
│
├── 📄 README.md                    ← Vous êtes ici
│
├── 📁 plan/                        ← Plan d'action existant
│   └── Plan_Action_Albertville_BTP.md
│       └── Document source complet
│           • Résumé audit
│           • Pain points détaillés (13 identifiés)
│           • Solutions proposées
│           • Planning et ROI
│
├── 📁 docs/                        ← Documents de synthèse
│   ├── 01_PERSONAS_Pain_Points.md
│   │   └── 4 personas détaillés
│   │       • Assistante Relation Client (Sophie)
│   │       • Responsable Affaire (Thomas)
│   │       • Chef de Chantier (Laurent)
│   │       • Responsable Activité (Pierre)
│   │       • Pain points par sévérité
│   │       • Impact financier
│   │
│   ├── 02_ARCHITECTURE_Actuelle_Chaos.md
│   │   └── État actuel du système
│   │       • Outils utilisés (Sage, MDE, Lireco, Fieldwire)
│   │       • Excel omniprésent (15+ fichiers)
│   │       • Processus manuels
│   │       • Les impossibilités
│   │
│   ├── 03_JOURNEY_MAPS_Parcours_Utilisateurs.md
│   │   └── Journey maps détaillées
│   │       • Parcours Thomas (situations mensuelles)
│   │       • Parcours Laurent (remontée BL)
│   │       • Parcours Pierre (chiffrage)
│   │       • Timeline comparée
│   │
│   └── 04_MATRICES_VISUELLES.md
│       └── Matrices et tableaux visuels
│           • Matrice sévérité × fréquence
│           • Heat maps personas × pain points
│           • KPI actuels vs cibles
│           • Comparaisons avant/après
│
└── 📁 implementation/              ← Architectures cibles
    ├── it-logiciel/
    │   └── 01_Architecture_Cible.md
    └── bi-data-ml/
        └── 01_Architecture_DataDriven.md
```

---

## 🎯 Par Où Commencer ?

### Pour Comprendre le Contexte
👉 **Lisez dans l'ordre:**
1. [plan/Plan_Action_Albertville_BTP.md](plan/Plan_Action_Albertville_BTP.md) - Plan d'action complet
2. [docs/01_PERSONAS_Pain_Points.md](docs/01_PERSONAS_Pain_Points.md) - Qui souffre ?
3. [docs/02_ARCHITECTURE_Actuelle_Chaos.md](docs/02_ARCHITECTURE_Actuelle_Chaos.md) - Pourquoi le chaos ?
4. [docs/04_MATRICES_VISUELLES.md](docs/04_MATRICES_VISUELLES.md) - Métriques visuelles

### Pour une Présentation Executive
👉 **Documents clés:**
- SYNTHESE_EXECUTIVE.md - Vue synthétique du projet
- 04_MATRICES_VISUELLES.md - Tableaux de bord

---

## 📊 Chiffres Clés Albertville

| Métrique | Valeur |
|----------|--------|
| **Périmètre** | Chantiers moyens et gros uniquement |
| **Pain Points identifiés** | 13 (5 critiques, 4 importants, 4 structurants) |
| **Investissement Phase 1** | 115K€ (6 mois) |
| **Gains annuels Phase 1** | 210K€/an |
| **ROI global 2 ans** | 143-192% |
| **Payback** | 7-10 mois |
| **Outils actuels** | Sage, MDE, Lireco, Fieldwire, Excel |
| **Fichiers Excel** | 15+ (véhicules, CONSUEL, planning, etc.) |

---

## 👥 Personas Principaux

1. **Sophie** (Assistante Relation Client) - 35 ans
   - 🟠 Multiples Excel non connectés (véhicules, CONSUEL, planning...)
   - 🟠 Gestion administrative chronophage
   - Focus: Centralisation données

2. **Thomas** (Responsable Affaire) - 42 ans
   - 🔴 Situations mensuelles extrêmement longues
   - 🔴 Budgets complémentaires invisibles
   - 🔴 Délais traitement devis trop longs
   - Focus: Automatisation situations & budgets

3. **Laurent** (Chef de Chantier) - 38 ans
   - 🔴 Remontée BL 100% manuelle (papier)
   - 🔴 Pas d'info réception commandes
   - Focus: Digitalisation chantier (QR Code mobile)

4. **Pierre** (Responsable Activité) - 48 ans
   - 🔴 Recherche références compliquée
   - 🔴 Chiffrage non standardisé
   - 🟠 Impossible ouvrir 2 fichiers simultanément
   - Focus: Efficacité chiffrage & collaboration

---

## 🔴 Top 5 Pain Points Critiques

1. **Situations & Facturation**
   - Traitement mensuel extrêmement long
   - Plusieurs jours de travail/mois
   - Impact RH/Compta/Trésorerie
   - 💰 Pain Point #1

2. **Suivi Budgétaire**
   - Budgets complémentaires invisibles
   - Impossible rapprocher avec devis RA
   - Risque dépassement non détecté
   - 💰 Pain Point #2

3. **Remontée BL Chantier**
   - 100% manuel (papier + téléphone)
   - Pas de traçabilité temps réel
   - Délai remontée: plusieurs jours
   - 💰 Pain Point #3

4. **Recherche Références**
   - Fonction Sage peu performante
   - Perte de temps chiffrage
   - Frustration quotidienne
   - 💰 Pain Point #4

5. **Gestion Commandes**
   - Excel actuel
   - Validation sans voir prix
   - Pas d'alertes automatiques
   - 💰 Pain Point #5

---

## 🚀 Quick Wins Identifiés (Mois 1-6)

| Projet | Investissement | Gains/an | Payback |
|--------|---------------|----------|---------|
| **Remontée BL mobile (QR Code)** | 40K€ | 80K€ | 6 mois |
| **Dashboard budgets (initial + complémentaire)** | 20K€ | 40K€ | 6 mois |
| **Rappels automatiques devis** | 10K€ | 30K€ | 4 mois |
| **Recherche références améliorée** | 15K€ | 25K€ | 7 mois |
| **Module commandes + prix** | 30K€ | 35K€ | 10 mois |
| **TOTAL PHASE 1** | **115K€** | **210K€** | **7 mois** |

---

## 🛠️ Outils Actuels

**Logiciels Métiers**
- **Sage** : Chiffrage, devis (limitations: pas 2 fichiers simultanés, recherche compliquée)
- **MDE** : (utilisé mais limitations)
- **Lireco** : Gestion stock temps réel, alertes, codes-barres
- **Fieldwire** : Suivi chantier (7 utilisateurs)
- **Hilti** : Géré

**Excel Omniprésent (15+ fichiers)**
- Suivi véhicules (entrées/sorties, pollution, pneus, réservations)
- Suivi CONSUEL
- Gestion salles réunion
- Demandes logement (grands déplacements)
- Organisation événements (journées collabs, planning, repas)
- Planning hebdomadaire
- Gestion commandes
- Contrats sous-traitance

**À Évaluer**
- Optima (Sidev) - Solution BTP spécialisée

---

## 📈 Approche Recommandée

### Phase 1 (M1-6) : Quick Wins
- ✅ Remontée BL mobile
- ✅ Dashboard budgets
- ✅ Rappels devis
- ✅ Recherche références
- ✅ Module commandes
→ **115K€ → 210K€/an gains**

### Phase 2 (M7-18) : Structuration
- ✅ Refonte situations mensuelles
- ✅ Standardisation chiffrage
- ✅ Plateforme collaborative (fin Excel)
- ✅ Gestion familles/sous-familles
→ **195K€ → +280K€/an gains**

### Phase 3 (M19-24) : Transformation
- ✅ Mobile terrain (devis offline + signature)
- ✅ RBAC & sécurité
- ✅ ML prédictions
- ⚠️ Évaluation Optima (migration si ROI démontré)
→ **175K€ → +200K€/an gains**

---

## 📅 Historique

- **2025-10-23** - Notes audit terrain Albertville
- **2025-11-17** - Création plan d'action détaillé
- **2025-11-18** - Structuration documentation complète
  - 4 personas détaillés
  - Architecture actuelle
  - Journey maps
  - Matrices visuelles

---

## ⚠️ Important

**Ce dossier documente l'ÉTAT ACTUEL + SOLUTIONS PROPOSÉES**
- Pain points terrain BTP
- Besoins spécifiques chantiers moyens/gros
- Solutions IT & Data/ML adaptées
- ROI et planning détaillé

**Spécificités Albertville:**
- Focus chantiers moyens et gros
- Situations mensuelles = pain point #1 majeur
- Fort besoin digitalisation terrain (BL, devis mobile)
- Nécessité standardisation méthodologie chiffrage
- Excel omniprésent à remplacer progressivement

---

## 🔗 Liens Utiles

- [Plan d'Action Source](plan/Plan_Action_Albertville_BTP.md)
- [Personas & Pain Points](docs/01_PERSONAS_Pain_Points.md)
- [Architecture Actuelle](docs/02_ARCHITECTURE_Actuelle_Chaos.md)
- [Journey Maps](docs/03_JOURNEY_MAPS_Parcours_Utilisateurs.md)
- [Matrices Visuelles](docs/04_MATRICES_VISUELLES.md)
- [Architecture IT Cible](implementation/it-logiciel/01_Architecture_Cible.md)
- [Architecture Data/ML](implementation/bi-data-ml/01_Architecture_DataDriven.md)

---

**📧 Contact:** Direction Albertville - Duret Électricité
**🎯 Objectif:** Transformation digitale site Albertville
**💰 Enjeu:** 490K€/an de gains potentiels (18 mois)
**⏱️ Payback global:** 8-10 mois
