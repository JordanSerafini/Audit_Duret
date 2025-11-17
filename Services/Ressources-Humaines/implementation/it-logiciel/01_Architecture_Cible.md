# 🏗️ ARCHITECTURE CIBLE IT/LOGICIEL - Ressources Humaines

**Service** : Ressources Humaines
**Date** : Novembre 2025

---

## 📊 VUE D'ENSEMBLE

**Remplacement** : 22 systèmes isolés → 1 SIRH centralisé + intégrations

---

## 🎯 ARCHITECTURE CIBLE

### Stack Technique Recommandé

**SIRH Central** (Solutions compatibles BTP) :
- **Option 1 : Lucca** (Français, forte adoption PME BTP)
- **Option 2 : PayFit** (Paie + RH, intégrations natives)
- **Option 3 : Silae + module RH** (si conservation SILAE existant)

**Critères sélection** :
- ✅ Gestion absences, congés, RTT natives
- ✅ Module pointage chantiers (géolocalisation)
- ✅ Intégration SILAE (ou paie intégrée)
- ✅ App mobile iOS + Android
- ✅ Workflows onboarding/offboarding
- ✅ Dashboards RH temps réel
- ✅ API ouvertes (SAGE, banque...)

---

## 🔧 COMPOSANTS ARCHITECTURE

### Frontend

**Web** :
- Interface RH (Sophie) : CRUD collaborateurs, paie, reporting
- Interface Managers : Validation FH, absences, planning équipe
- Interface Direction : Dashboards KPIs

**Mobile** (iOS + Android) :
- Pointage chantiers (géolocalisation)
- Demandes congés
- Consultation bulletins paie, soldes congés
- Notifications (validations, rappels)

### Backend

**SIRH Cloud** :
- Base données RH centralisée (PostgreSQL ou équivalent)
- Modules :
  - Gestion collaborateurs (registre, contrats)
  - Absences (congés, maladie, RTT)
  - Pointage (heures, chantiers)
  - Paie (éléments variables, calculs auto)
  - Onboarding/Offboarding (workflows 39/22 tâches)
  - Formation (habilitations, plan formation)
  - Entretiens (annuels, professionnels, étonnement)
- API REST (intégrations tierces)
- Stockage documents (bulletins, contrats, attestations)

### Intégrations

| Système | Type | Flux |
|---------|------|------|
| **SILAE (Only RH)** | API/Export | SIRH → Export éléments paie → SILAE |
| **SAGE Compta** | Export | SIRH → Export écritures paie → SAGE |
| **Banque** | API SEPA | SIRH → Virements salaires |
| **Email (SendGrid)** | SMTP/API | SIRH → Notifications workflows |
| **Push Mobile** | FCM+APNS | SIRH → Alertes mobile |

---

## 📱 APPLICATION MOBILE

### Fonctionnalités

**Collaborateurs** :
- Pointage : Arrivée/départ, affectation chantier
- Demandes : Congés, RTT, récup (workflow validation)
- Consultation : Bulletins paie, soldes congés, attestations
- Notifications : Validations, rappels

**Managers** :
- Validation : FH équipe, demandes congés
- Planning : Vue équipe (absences, affectations chantiers)
- Notifications : Demandes en attente

### Technique

- **Frameworks** : React Native ou Flutter (iOS + Android unique codebase)
- **Offline** : Pointage hors ligne, sync auto reconnexion
- **Géolocalisation** : GPS chantiers
- **Sécurité** : Biométrie (Touch ID, Face ID), chiffrement local

---

## 🔄 WORKFLOWS AUTOMATISÉS

### Workflow Onboarding (39 tâches)

```
Déclencheur : Création nouveau collaborateur SIRH

Automatisations :
1. Email IT : Création compte, badge, téléphone (+ checklist)
2. Email Logistique : EPI, outillage, véhicule si besoin (+ checklist)
3. Email Manager : Planification accueil J1 (+ programme)
4. Email CSE : Information nouvel arrivant
5. Saisie auto SAGE : Registre personnel
6. Affiliation auto Radiance : Mutuelle
7. Rappel auto J+10 : Entretien étonnement (Sophie + Manager)
8. Rappel auto J+30 : Bilan intégration (Sophie + Manager)
9. Rappel auto Fin période essai -15j : Validation/Rupture

Traçabilité : Toutes tâches checkées, dates, responsables
```

### Workflow Absences

```
Déclencheur : Demande congé mobile

Automatisations :
1. Notification manager : Validation demande
2. Si validation : MAJ planning absences auto
3. Si validation : Intégration paie auto (déduction salaire)
4. Notification collaborateur : Accepté/Refusé
5. MAJ soldes congés auto
6. Export auto CIBTP (déclarations BTP)
```

### Workflow Paie

```
Déclencheur : Fermeture période paie (fin mois)

Automatisations :
1. Calcul TR auto : Jours travaillés - absences - NDF
2. Calcul km auto : Distance domicile-chantiers (km déclarés)
3. Calcul paniers auto : Chantiers éligibles (>50km, horaires)
4. Calcul heures récup auto : (Heures hebdo - 35) × semaines
5. Valorisation indemnités auto (grilles conventionnelles)
6. Export SILAE auto : Fichier éléments variables
7. Notification Sophie : Contrôle avant génération bulletins
```

---

## 🔒 SÉCURITÉ

### Authentification

- **SSO** (Single Sign-On) : SAML 2.0 ou OAuth 2.0
- **MFA** (Multi-Factor Authentication) : Disponible (non obligatoire initial)
- **Biométrie mobile** : Touch ID, Face ID

### Données

- **Chiffrement transit** : TLS 1.3
- **Chiffrement repos** : AES-256
- **RGPD** : Hébergement UE, DPA fournisseur, durées rétention configurables
- **Audit trail** : Qui a fait quoi, quand (logs 3 ans)

### Permissions (RBAC)

| Rôle | Permissions |
|------|-------------|
| **Admin RH** (Sophie) | CRUD tout, configuration workflows, reporting global |
| **Manager** | Lecture équipe, validation FH/absences, planning équipe |
| **Collaborateur** | Lecture ses données, demandes, consultation bulletins |
| **Direction** | Lecture KPIs globaux, reporting consolidé |

---

## 📊 DASHBOARDS TEMPS RÉEL

### Dashboard Sophie RH

**KPIs** :
- Effectif total (CDI + intérimaires)
- Turnover mois/année
- Absentéisme (taux, jours perdus)
- Masse salariale (évolution)
- FH manquantes (liste nominative)
- Absences jour/semaine (planning visuel)
- Habilitations expirant <3 mois

**Alertes** :
- FH manquantes J-2 avant paie
- Fin période essai -15j
- Fin mission intérimaire -7j
- Habilitations expirant -30j

### Dashboard Managers

**Vues** :
- Planning équipe (absences, affectations)
- Heures consommées par chantier
- Demandes en attente validation
- Alertes surcharge équipe

### Dashboard Direction

**KPIs** :
- Effectif global (évolution)
- Masse salariale (budget vs réalisé)
- Turnover (taux, coût)
- Absentéisme (taux, impact)
- Productivité (heures facturables vs totales)

---

## 🔗 MIGRATION DONNÉES

### Données à migrer

| Source | Destination SIRH | Volumétrie |
|--------|------------------|------------|
| **Excel Registre personnel** | Base collaborateurs | ~100 personnes |
| **POPAYE Historiques heures** | Module pointage | 2 ans |
| **Excel Planning absences** | Module absences | 1 an |
| **Excel Suivi intérimaires** | Base collaborateurs (type=intérimaire) | ~20 actifs |
| **Excel Période essai** | Rappels automatiques | ~5 en cours |

### Plan migration

1. **M1 : Audit qualité données**
   - Nettoyage doublons, incohérences
   - Validation exhaustivité

2. **M2 : Migration test**
   - Import 10 collaborateurs pilotes
   - Validation intégrations
   - Tests workflows

3. **M3 : Migration complète**
   - Import 100 collaborateurs
   - Validation données
   - Formation équipes

4. **M4 : Parallélisation**
   - SIRH + ancien système (1 mois sécurité)
   - Validation paie (double calcul)

5. **M5 : Arrêt ancien système**
   - Décommissionnement POPAYE, Excel
   - SIRH = seule source vérité

---

## 💰 OPEX MENSUEL ESTIMÉ (Ordre de grandeur)

| Service | Volumétrie |
|---------|------------|
| **SIRH SaaS** | ~100 collaborateurs |
| **App Mobile** | Inclus SIRH |
| **Stockage documents** | ~500 GB |
| **Email notifications** | Inclus ou SMTP tiers |
| **Support éditeur** | Inclus |

**Note** : Coûts précis dépendent solution retenue (Lucca, PayFit, autre)

---

**📅 Date création** : 2025-11-17
**🔄 Version** : v1.0
