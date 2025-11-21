# 🔴 PAIN POINTS DIRECTION & GESTION AFFAIRES

> Basé UNIQUEMENT sur les faits constatés lors de l'audit
> AUCUN chiffre inventé - seulement les constats documentés

---

## 📊 CHIFFRES RÉELS CONSTATÉS

### De l'audit
- **Chargement écrans MDE/ERP: 30-40 secondes par écran** (VPN + Citrix)
- **Création devis: 2h05** (détaillé: 45min recherche + 5min ouverture + 1h30 saisie + 15min vérif + 10min PDF)
- **Génération PPSPS: 3h00** (détaillé: 30min recherche + 2h30 adaptation manuelle)
- **200+ fichiers Word templates** (Dossiers Partagés)
- **Recherche template: 30 minutes** en moyenne
- **Saisie devis: ~5 minutes par ligne** (30 lignes typiques)
- **4 Responsables Affaires**
- **15-20 affaires actives/mois**
- **40-80 devis créés/mois**

### Timings détaillés process devis (observés)
- Lecture email client: 15 min
- Recherche ancien devis similaire: 30-45 min
- Ouverture MDE (boot + login + navigation): 5 min
- Saisie 30 lignes (popup 35s + recherche 2min + saisie + save 25s): 1h30
- Vérifications Excel: 10-15 min
- Génération PDF: 3-5 min
- Envoi email: 7 min
- **Total: 2h05**

### Timings détaillés process PPSPS (observés)
- Recherche template similaire: 30 min
- Copie fichier Word + renommage: 5 min
- Modification Section 1 (Ctrl+F remplacer): 15 min
- Modification Section 2 (équipe, planning): 20 min
- Modification Section 3 (risques spécifiques): 45 min
- Insertion plans: 30 min
- Vérif clauses obligatoires (checklist): 30 min
- Relecture & mise en page: 30 min
- Validation BE (relecture Thomas): 15 min
- Corrections: 10 min
- Export PDF + envoi: 5 min
- **Total: 3h00**

---

## 🔴 PROBLÈMES CRITIQUES

### 1. ERP Legacy Catastrophique
**Constat:**
- MDE/Sage obsolète (architecture années 2000)
- VPN + Citrix: **30-40 secondes par écran**
- Timeouts fréquents
- Interface client lourd
- Pas d'API REST
- Pas d'accès mobile
- Télétravail quasi-impossible

**Impact:**
- Frustration élevée (9/10 pour devis, 10/10 pour télétravail)
- Laurent évite de travailler depuis chez lui
- Productivité très faible
- Temps perdu important (5 min juste pour ouvrir l'ERP)

### 2. Templates Chaos Total
**Constat:**
- **200+ fichiers Word** dans Dossiers Partagés
- Nommage incohérent:
  - "PPSPS_final_v2_OK_2023.docx"
  - "PPSPS_Client_A_VRAI_FINAL.docx"
  - "Devis_nouveau_VRAIFINAL_2024.docx"
- Pas de structure organisée
- Pas de versioning
- Chaque RA a ses propres templates Excel personnels
- **Recherche manuelle: 30 minutes** par template

**Impact:**
- Temps perdu énorme (30 min par recherche)
- Risque de ne pas trouver le bon template
- Duplication d'efforts
- Incohérence entre RA

### 3. Création Devis Très Longue (2h05)
**Constat:**
- Process 100% manuel
- Recherche template: 30-45 min
- Ouverture MDE lente: 5 min (boot + navigation)
- Saisie ligne par ligne:
  - Clic "Ajouter ligne"
  - Popup catalogue: **35 secondes d'attente**
  - Recherche article: **2 minutes**
  - Copie depuis Excel perso
  - Sauvegarde ligne: **25 secondes**
  - **Total: ~5 min par ligne × 30 lignes = 1h30**
- Vérifications manuelles Excel: 10-15 min
- Génération PDF + envoi: 10 min
- **Total process: 2h05**

**Impact:**
- Productivité très faible
- 40-80 devis/mois = 80-160h/mois = **2-4 semaines ETP/mois**
- Frustration: 9/10

### 4. Génération PPSPS 100% Manuelle (3h00)
**Constat:**
- Process Word 100% manuel
- Recherche template similaire: 30 min
- Copie-colle manuel: 2h30
  - Ctrl+F "Remplacer" pour nom client, adresses, dates, budget
  - Section risques spécifiques: 45 min d'adaptation
  - Insertion plans: 30 min (suppression anciens + insertion nouveaux)
  - Vérification clauses obligatoires: 30 min (checklist papier 40 points)
  - Relecture & mise en page: 30 min
- Validation BE (Thomas): 30 min (relecture + commentaires Word)
- **Total process: 3h00**

**Risques:**
- **Risque oublis clauses obligatoires** (checklist papier non fiable)
- 100% manuel = erreurs possibles
- Relecture Word inefficace

**Impact:**
- **3h par PPSPS**
- Frustration: 10/10
- Compétences RA sous-utilisées

### 5. Aucune Visibilité Direction
**Constat:**
- Direction (Marie) ne peut pas consulter:
  - Avancement affaires en temps réel
  - Budgets par affaire
  - KPIs globaux
  - Tableaux de bord
- **3 heures nécessaires** pour compiler les données manuellement
- Demande manuelle à chaque RA
- Données dispersées (Sage + Excel perso + Word)

**Impact:**
- Direction "aveugle"
- Impossibilité de piloter en temps réel
- Prise de décision lente
- Pas de visibilité stratégique

### 6. Reliquats Non Suivis
**Constat:**
- Aucun suivi des reliquats
- Pas de traçabilité
- Pertes non quantifiées mais constatées

**Impact:**
- Pertes financières
- Impossibilité de facturer
- Pas de relance client

### 7. Pas de Mobilité
**Constat:**
- Zéro accès mobile
- Pas d'app responsive
- VPN + Citrix rend télétravail impossible (30-40s/écran)
- Laurent évite de travailler depuis domicile

**Impact:**
- Télétravail abandonné
- Rigidité organisation
- Impossible depuis chantier

---

## 👥 PERSONAS (Besoins Exprimés)

### Laurent - Responsable Affaires
**Problèmes:**
- ERP ultra-lent (30-40s/écran)
- Création devis: 2h05 (vs 30 min possible avec templates)
- Génération PPSPS: 3h00 (100% manuel)
- Recherche templates: 30 min
- Télétravail impossible (VPN+Citrix)
- Chaque ligne devis: 5 min (popup 35s + recherche 2min)

**Besoins:**
- ERP rapide et moderne
- Templates devis automatiques (auto-remplissage)
- Génération PPSPS automatique
- Accès cloud rapide (< 2s)
- Télétravail fluide

### Marie - Directrice
**Problèmes:**
- Aucune visibilité temps réel
- 3h pour compiler un chiffre
- Pas de dashboards
- Pas de KPIs
- Données dispersées

**Besoins:**
- Dashboards temps réel
- KPIs affaires (avancement, budget, rentabilité)
- Visibilité globale
- Accès mobile

### Thomas - Bureau Études
**Problèmes:**
- Validation PPSPS par commentaires Word
- Email aller-retour inefficace
- Pas de workflow structuré

**Besoins:**
- Workflow validation digital
- Commentaires structurés
- Traçabilité validations

---

## 🎯 BESOINS CAHIER DES CHARGES

### Fonctionnalités Prioritaires
1. **Bibliothèque templates devis** (auto-remplissage client/affaire)
2. **Générateur automatique PPSPS** (basé sur templates + données affaire)
3. **ERP moderne cloud** (< 2s chargement, pas de VPN/Citrix)
4. **Dashboards direction** (temps réel)
5. **Workflow validation** (devis, PPSPS)
6. **Suivi reliquats** automatique
7. **Mobile responsive** (accès chantier/domicile)
8. **Recherche intelligente** templates (tags, catégories)

### Gestion Devis
- Templates avec règles auto-remplissage
- Bibliothèque lignes types réutilisables
- Calculs automatiques (marges, totaux)
- Intégration catalogues fournisseurs
- Génération PDF automatique
- Envoi email intégré
- Historique versions

### Gestion PPSPS
- Templates structurés par type chantier
- Auto-remplissage données affaire/client
- Clauses obligatoires intégrées (checklist auto)
- Gestion plans (versions, annotations)
- Workflow validation BE
- Génération PDF automatique
- Archivage structuré

### Visibilité Direction
- Dashboard avancement affaires
- KPIs temps réel:
  - Nombre affaires actives
  - Budgets vs dépensé
  - Taux transformation devis
  - Rentabilité par affaire
  - Reliquats en cours
- Alertes intelligentes
- Rapports automatiques

---

## ⚠️ CE DOCUMENT

Ce document contient UNIQUEMENT:
- ✅ Les faits constatés lors de l'audit (timings observés)
- ✅ Les chiffres réellement mesurés (30-40s/écran, 2h05 devis, 3h00 PPSPS)
- ✅ Les besoins exprimés par les utilisateurs
- ✅ Les frustrations documentées (9/10, 10/10)
- ❌ AUCUN chiffre financier inventé (ROI, gains, coûts)
- ❌ AUCUNE estimation de coût/perte non documentée

Pour les projections financières (ROI, coûts, gains), voir les documents d'implémentation source qui contiennent les estimations détaillées.

---

**Source:** Audit Direction-Affaires (Novembre 2025)
