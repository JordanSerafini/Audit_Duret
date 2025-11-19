# 🏗️ ARCHITECTURE ACTUELLE - Maintenance Technique (Chaos Analogique)

**Entreprise** : Duret Électricité - Annecy
**Date audit** : Novembre 2025
**Service** : Maintenance Technique & SAV
**État** : Système hybride papier/digital non intégré

---

## 📋 VUE D'ENSEMBLE

### Système Actuel : "CERFA Papier + Excel + GAO Basique"

```
┌─────────────────────────────────────────────────────────────┐
│           ARCHITECTURE ACTUELLE (CHAOS ANALOGIQUE)           │
│                                                              │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌─────────┐  │
│  │  EXCEL   │   │   WORD   │   │   CERFA  │   │   GAO   │  │
│  │  Base    │   │ Contrats │   │  Papier  │   │   App   │  │
│  │ Clients  │   │ Entretien│   │   Bon    │   │ Mobile  │  │
│  └────┬─────┘   └────┬─────┘   └────┬─────┘   └────┬────┘  │
│       │              │              │              │        │
│       └──────────────┴──────────────┴──────────────┘        │
│                      AUCUNE INTÉGRATION                      │
│                      Ressaisies × 3-4                        │
└──────────────────────────────────────────────────────────────┘
```

---

## 🛠️ OUTILS ACTUELS (7 non intégrés)

### 1. GAO (Gestion Assistée par Ordinateur)

**Usage** :
- Logiciel principal maintenance
- Planning interventions
- Historique (partiel)

**Limites** :
- Pas de CRM intégré
- Pas de portail client
- Pas de génération devis terrain

**Utilisateurs** : Back-office + techniciens (lecture seule)

---

### 2. App Mobile (Basique)

**Fonctions actuelles** ✅ :
- Accès plan intervention
- Consultation chantiers

**Fonctions manquantes** ❌ :
- Accès prestation vendue
- Génération devis terrain
- Rapport intervention digital (encore CERFA papier!)
- Signature électronique
- Pointage arrivée/départ
- Photos avant/après intégrées
- Certificat mise en service digitalisé
- Mode offline

**Impact** : Techniciens encore dépendants papier (70% processus)

---

### 3. Excel (Base Clients Maintenance)

**Contenu** :
- ~300 clients contrats maintenance
- Coordonnées
- Type contrat
- Dernière intervention (manuel)

**Problèmes** :
- ❌ **Pas synchronisé avec app mobile**
- ❌ Techniciens n'ont pas infos complètes terrain
- ❌ Ressaisies multiples (GAO → Excel → Word)
- ❌ Risque erreur élevé (version désynchronisée)
- ❌ Pas d'historique complet

**Temps perdu** : 100h/an

---

### 4. Word (Contrats Entretien)

**Usage** :
- Création contrats maintenance
- Template Word standard
- Signature papier ou scan

**Problèmes** :
- ❌ Interventions découlant du contrat **pas automatiques**
- ❌ Pas de lien avec planning GAO
- ❌ Planification manuelle (Clothilde)
- ❌ Risque oubli intervention contractuelle
- ❌ Pas d'alertes fin contrat

**Impact** : 15K€/an (non-conformités + perte renouvellements)

---

### 5. CERFA Papier (Bons Intervention)

**Processus actuel** :

```
┌─────────────────────────────────────────────────────────────┐
│              PROCESSUS BON INTERVENTION (PAPIER)             │
└─────────────────────────────────────────────────────────────┘

Matin 8h00
  │
  ├─→ Technicien prend CERFA papier vierge (liasse × 5-6)
  │
Terrain 9h-17h
  │
  ├─→ 4-5 interventions/jour
  │
  ├─→ Fin intervention : remplir CERFA à la main
  │    - Temps : 10-15 min
  │    - Illisible parfois (écriture)
  │    - Signature client papier
  │    - Pas de photos intégrées
  │
Retour base 17h30
  │
  ├─→ Remettre CERFA à Clothilde
  │
  └─→ Clothilde scanne + archive (30 min/jour)
       - Classement papier
       - Scan PDF (si besoin)
       - Saisie info dans GAO (manuel)
```

**Temps total perdu** :
- Technicien : 12 min × 4 interventions × 220 jours = **176h/an/technicien**
- 5 techniciens × 176h = **880h/an**
- Clothilde scan/archive : 30 min/jour × 220 = **110h/an**
- **TOTAL : 990h/an = 49,500€**

**Autres impacts** :
- Image pas professionnelle
- Illisibilité
- Pas de traçabilité temps réel
- Difficultés litiges clients

---

### 6. Téléphone Personnel (Photos)

**Usage** :
- Photos avant/après interventions
- Prises sur téléphone perso technicien

**Problèmes** :
- ❌ Pas centralisées (chacun son téléphone)
- ❌ Pas de date/géolocalisation automatique
- ❌ Difficile de retrouver après (quel client ? quelle date ?)
- ❌ Pas de suivi historique centralisé
- ❌ Problème litiges clients (photos perdues)

**Impact** : 11K€/an (litiges + temps recherche)

---

### 7. Téléphone Standard (Prise RDV)

**Processus** :
- Client appelle Clothilde
- Clothilde consulte planning Excel/Outlook
- Propose créneau (sans optimisation zone)
- Confirme par email/téléphone

**Problèmes** :
- ❌ Pas d'agenda partagé temps réel
- ❌ Pas d'optimisation tournées automatique
- ❌ Disponibilité 8h-18h uniquement (vs 24/7)
- ❌ Chronophage (200h/an)

**Impact** : 35K€/an

---

## 🔄 PROCESSUS ACTUELS DÉTAILLÉS

### Processus 1 : Contrat Maintenance (Cycle Complet)

```
┌──────────────────────────────────────────────────────────────────┐
│           PROCESSUS CONTRAT MAINTENANCE (ACTUEL)                  │
└──────────────────────────────────────────────────────────────────┘

Signature contrat
  │
  ├─→ Contrat créé sur Word (Clothilde)
  │    - Template standard
  │    - Signature papier/scan
  │    - 30 min/contrat
  │
  ├─→ Saisie Excel base clients (Clothilde)
  │    - Coordonnées
  │    - Type contrat (Bronze/Argent/Or)
  │    - Fréquence interventions
  │    - 15 min
  │
  ├─→ Saisie GAO (Clothilde)
  │    - Client
  │    - Contrat (manuel)
  │    - 20 min
  │
  ├─→ Planning interventions (manuel)
  │    - Clothilde calcule dates
  │    - Exemple : "3 visites/an" → J1, J+120, J+240
  │    - Saisie Outlook/Excel
  │    - 30 min
  │
  ├─→ Réunion mercredi (planification)
  │    - Gaëtan + équipe
  │    - Répartition interventions semaine
  │    - 1h/semaine
  │
  ├─→ Intervention (terrain)
  │    - CERFA papier
  │    - 4h intervention
  │
  ├─→ Retour CERFA (fin journée)
  │    - Scan + archive
  │    - 30 min
  │
  ├─→ Mise à jour GAO (Clothilde)
  │    - "Intervention faite"
  │    - 10 min
  │
  └─→ Fin contrat (J+365)
       - ❌ PAS D'ALERTE AUTOMATIQUE
       - Risque oubli renouvellement
       - Perte client

TEMPS TOTAL : 3h admin + 4h intervention = 7h
RESSAISIES : 5 fois (Word → Excel → GAO → Outlook → CERFA)
```

**Coût inefficacité** : 60 min admin × 300 contrats = **300h/an = 15K€**

---

### Processus 2 : Intervention SAV (Journée Type Gaëtan)

```
┌──────────────────────────────────────────────────────────────────┐
│          JOURNÉE TYPE TECHNICIEN SAV (GAËTAN)                     │
└──────────────────────────────────────────────────────────────────┘

8h00 - Réunion hebdo (mercredi)
  │   - Planification semaine
  │   - 1h
  │
8h30 - Préparation tournée
  │   - Imprimer planning (papier)
  │   - Prendre CERFA vierges (× 5)
  │   - Vérifier app mobile (plan interventions)
  │   - 15 min
  │
9h00 - Intervention #1 (Client A - Zone Annecy Centre)
  │   - Déplacement : 20 min
  │   - Intervention : 1h30
  │   - CERFA rempli à la main : 12 min
  │   - Photos téléphone perso : 5 min
  │   - Total : 2h07
  │
11h07 - Intervention #2 (Client B - Zone Annecy-le-Vieux)
  │   - Déplacement : 25 min (pas optimisé!)
  │   - Intervention : 1h15
  │   - CERFA : 12 min
  │   - Client demande devis travaux additionnels
  │     → "Je note, on vous rappelle" (post-it)
  │   - Total : 1h52
  │
12h59 - Pause déjeuner
  │   - 1h
  │
14h00 - Intervention #3 (Client C - Zone Seynod)
  │   - Déplacement : 30 min (retour zone Annecy!)
  │   - Intervention : 2h
  │   - CERFA : 15 min
  │   - Anomalie détectée → appel Clothilde
  │   - Total : 2h45
  │
16h45 - Intervention #4 (Client D - Zone Annecy Sud)
  │   - Déplacement : 20 min
  │   - Intervention : 1h
  │   - Dépassement heure prévu (1h30 → 2h)
  │     ❌ Pas de pointage digital → difficile refacturer
  │   - CERFA : 12 min
  │   - Total : 1h32
  │
18h17 - Retour base
  │   - Remettre CERFA à Clothilde
  │   - Scan/archive : 30 min (Clothilde)
  │   - Saisie GAO : 20 min (Clothilde)
  │
19h07 - Fin journée
        - Post-it demande devis → perdu le lendemain (!)

BILAN JOURNÉE :
- 4 interventions
- Déplacements : 1h35 (dont 30 min non optimisés)
- Interventions : 5h45
- CERFA papier : 51 min
- Admin : 50 min
- TOTAL : 9h01
- Opportunité perdue : 1 devis (3K€)
- Refacturation non faite : 30 min × 50€ = 25€
```

**Inefficacité quotidienne** : 1h20 (CERFA + admin + déplacements non optimisés)

**Sur 1 an** :
- 1h20 × 220 jours = **293h/an/technicien**
- 5 techniciens × 293h × 50€ = **73K€/an**

---

### Processus 3 : Prise RDV Client (Clothilde)

```
┌──────────────────────────────────────────────────────────────────┐
│                  PRISE RDV MAINTENANCE (ACTUEL)                   │
└──────────────────────────────────────────────────────────────────┘

J0 - 9h15 - Client appelle
  │   "Bonjour, je voudrais prendre RDV pour entretien annuel"
  │
  ├─→ Clothilde cherche client Excel (2 min)
  │    - "Quel est votre nom ?"
  │    - Recherche Excel (300 lignes)
  │    - Ouvre fiche client
  │
  ├─→ Vérifie contrat Word (2 min)
  │    - "Vous avez contrat Argent → 2 visites/an"
  │    - Cherche fichier Word contrat
  │
  ├─→ Consulte planning Excel/Outlook (3 min)
  │    - "Gaëtan est disponible mardi prochain"
  │    - Vérifie zone géographique manuellement
  │    - Pas d'optimisation automatique
  │
  ├─→ Propose créneau (1 min)
  │    - "Mardi 26 novembre, 14h-16h, ça vous va ?"
  │    - Client : "OK"
  │
  ├─→ Saisie Outlook/Excel (3 min)
  │    - Planning Gaëtan
  │    - Excel suivi
  │
  ├─→ Saisie GAO (2 min)
  │    - Création intervention
  │
  ├─→ Email confirmation client (5 min)
  │    - Rédaction manuelle
  │    - Copier-coller infos
  │
  └─→ Réunion mercredi (1 min)
       - Confirme à Gaëtan
       - "Mardi 26, M. Dupont, 14h"

TEMPS TOTAL : 19 minutes/RDV

PROBLÈMES :
- Client attend au téléphone (8 min)
- 3 ressaisies (Outlook + Excel + GAO)
- Pas d'optimisation zone
- Disponibilité 8h-18h uniquement
- Pas de self-service client
```

**Volume** : 300 contrats × 2 RDV/an = **600 RDV/an**

**Temps total** : 600 × 19 min = **190h/an** = 9,500€

**Avec portail client** :
- Temps réduit à : 2 min (validation seulement)
- Économie : 17 min × 600 = **170h = 8,500€/an**
- Satisfaction client : +30%

---

## 🚫 LES 10 IMPOSSIBILITÉS ACTUELLES

### 1. Impossible de générer devis terrain

**Aujourd'hui** : Post-it → oubli → **45K€/an perdu**

**Besoin** : App mobile avec module devis intégré

---

### 2. Impossible de suivre heures réelles intervention

**Aujourd'hui** : Pas de pointage → refacturation difficile → **30K€/an perdu**

**Besoin** : Pointage digital arrivée/départ automatique (géolocalisé)

---

### 3. Impossible d'éviter CERFA papier

**Aujourd'hui** : Tous remplis à la main → **20K€/an + image**

**Besoin** : Rapport intervention digitalisé + signature électronique

---

### 4. Impossible d'optimiser tournées automatiquement

**Aujourd'hui** : Planning manuel → déplacements non optimisés → **15K€/an**

**Besoin** : Zoning intelligent + algorithme routing

---

### 5. Impossible de détecter risque churn clients

**Aujourd'hui** : Pas d'enquête satisfaction systématique → **100K€/an**

**Besoin** : Enquête auto post-intervention + analyse IA

---

### 6. Impossible de centraliser photos interventions

**Aujourd'hui** : Téléphone perso → perte traçabilité → **11K€/an**

**Besoin** : Photos intégrées app (géolocalisées/datées)

---

### 7. Impossible d'alerter fin contrat automatiquement

**Aujourd'hui** : Suivi manuel → oublis → **30K€/an** (renouvellements perdus)

**Besoin** : Workflow alertes automatiques (J-60, J-30, J-7)

---

### 8. Impossible client prenne RDV 24/7

**Aujourd'hui** : Téléphone 8h-18h uniquement → appels élevés

**Besoin** : Portail client self-service

---

### 9. Impossible vision 360° client

**Aujourd'hui** : Données éparpillées (Excel + Word + GAO + CERFA)

**Besoin** : CRM centralisé temps réel

---

### 10. Impossible de travailler offline (zones blanches)

**Aujourd'hui** : App mobile nécessite connexion → blocages terrain

**Besoin** : App avec mode offline + sync auto

---

## 💰 COÛT TOTAL DU CHAOS ACTUEL

### Temps Perdu (Inefficacité)

| Activité | Temps/an | Coût |
|----------|----------|------|
| CERFA papier (880h techniciens + 110h Clothilde) | 990h | 49.5K€ |
| Planning RDV manuel (Clothilde) | 190h | 9.5K€ |
| Double saisie Excel/GAO/Word | 300h | 15K€ |
| Recherche photos | 20h | 1K€ |
| Certificats papier | 50h | 2.5K€ |
| Déplacements non optimisés | 300h | 15K€ |
| **TOTAL TEMPS PERDU** | **1,850h** | **92.5K€/an** |

### Opportunités Perdues (CA)

| Opportunité | Impact |
|-------------|--------|
| Devis terrain non faits | 45K€/an |
| Refacturation heures | 30K€/an |
| Renouvellements contrats (alertes) | 30K€/an |
| **TOTAL OPPORTUNITÉS** | **105K€/an** |

### Clients Perdus (Rétention)

| Cause | Impact |
|-------|--------|
| Enquête satisfaction non systématisée | 100K€/an |
| Contrats Word (non-conformité) | 15K€/an |
| Planning RDV (insatisfaction) | 25K€/an |
| Erreurs base Excel | 10K€/an |
| **TOTAL RÉTENTION** | **150K€/an** |

### Optimisation Manquante

| Gain potentiel | Impact |
|----------------|--------|
| Zoning intelligent | 15K€/an |
| Photos/traçabilité | 11K€/an |
| **TOTAL OPTIMISATION** | **26K€/an** |

---

## 📊 BILAN GLOBAL

```
┌─────────────────────────────────────────────────────────────┐
│                  COÛT ANNUEL DU CHAOS                        │
│                                                              │
│  Temps perdu (inefficacité)      :   92.5K€/an              │
│  Opportunités perdues (CA)       :  105.0K€/an              │
│  Clients perdus (rétention)      :  150.0K€/an              │
│  Optimisation manquante          :   26.0K€/an              │
│  ─────────────────────────────────────────────              │
│  TOTAL IMPACT NÉGATIF            :  373.5K€/an              │
│                                                              │
│  Note : Hors impact image/compétitivité (indéterminé)       │
└─────────────────────────────────────────────────────────────┘
```

**Note** : Ce chiffre est **conservateur**. L'impact réel est probablement **290-400K€/an** en comptant:
- Perte compétitivité vs concurrents digitaux
- Image "pas moderne"
- Stress équipes
- Turnover techniciens

---

**📧 Contact** : Maintenance Technique - Duret Électricité
**🎯 Objectif** : Digitaliser SAV end-to-end
**💰 Enjeu** : 290-400K€/an de pertes à récupérer
