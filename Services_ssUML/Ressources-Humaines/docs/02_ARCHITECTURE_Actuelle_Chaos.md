# 🏗️ ARCHITECTURE ACTUELLE - Ressources Humaines

**Service** : Ressources Humaines
**Date audit** : Novembre 2025
**Source** : Resume_2.md + Observations terrain

---

## 📊 VUE D'ENSEMBLE

Le service RH de Duret Électricité gère **~100 collaborateurs** avec **15+ outils non connectés**, générant des **silos de données**, des **ressaisies multiples** (5-6 fois la même donnée), et des **processus ultra-manuels**.

---

## 🔴 SYSTÈME ACTUEL : 15+ OUTILS NON CONNECTÉS

### Outils RH Principaux

| Outil | Usage | Problème |
|-------|-------|----------|
| **SAGE Paie** | Paie mensuelle | Pas de projection, historique uniquement |
| **POPAYE** | Gestion heures, heures sup | Pas d'intégration, exports manuels |
| **SILAE** (via Only RH externe) | Paie externalisée | Ressaisie depuis POPAYE, délai |
| **SWILE** | Tickets restaurant | Export manuel, calcul TR manuel |
| **Empowill** | Formation, entretiens | Pas d'intégration, double saisie |
| **PRO BTP** | Prévoyance | Déclarations manuelles |
| **CIBTP** | Cotisations BTP | Ressaisie congés, absences |
| **Radiance** | Mutuelle | Gestion manuelle affiliations |
| **HelloCSE** | Comité entreprise | Aucune intégration |

### Outils Complémentaires (Excel)

| Fichier Excel | Contenu | Problème |
|---------------|---------|----------|
| **Planning absences** | Congés, maladie, RTT | Ressaisie depuis POPAYE + papier |
| **Suivi intérimaires** | Heures, factures, formations | Complètement isolé du SI RH |
| **Checklist onboarding** | 39 tâches embauche | Papier/Excel, relances manuelles |
| **Checklist offboarding** | 22 tâches départ | Papier/Excel, oublis fréquents |
| **Suivi période essai** | Rappels entretiens | Rappels manuels, oublis |
| **Registre du personnel** | Données collaborateurs | Double avec SAGE, incohérences |
| **KPIs RH** | Turnover, absentéisme | Compilation manuelle, demi-journée |

**Total** : **15 outils + 7 fichiers Excel = 22 systèmes distincts**

---

## 🔗 FLUX DONNÉES ACTUELS = CHAOS

### Exemple : Processus Paie Mensuelle

```
1. Collaborateurs → Saisie heures POPAYE (hebdo)
2. Managers → Validation heures POPAYE (relances manuelles)
3. Sophie RH → Vérifications manuelles :
   - Calcul TR (jours travaillés - absences - NDF) pour 100 personnes
   - Calcul heures récup (35h/sem) pour chaque personne
   - Vérification km, paniers, grands déplacements
   - Valorisation manuelle indemnités
4. Sophie → Export POPAYE → Fichier Excel
5. Sophie → Retraitement Excel (corrections, calculs complémentaires)
6. Sophie → Ressaisie SILAE (via Only RH externe)
7. Only RH → Génération bulletins paie
8. Sophie → Vérification bulletins (ligne par ligne)
9. Sophie → Corrections manuelles si erreurs
10. Only RH → Envoi bulletins finaux
```

**Temps total** : **3 jours CHAQUE semaine** (contrôles hebdo + paie mensuelle)

**Ressaisies** : **Même donnée saisie 5-6 fois** (POPAYE → Excel → SILAE → SAGE → Déclarations)

### Exemple : Demande de Congé

```
1. Collaborateur → Formulaire papier
2. Manager → Signature papier
3. Sophie RH → Saisie POPAYE
4. Sophie RH → Saisie CIBTP (cotisations BTP)
5. Sophie RH → Mise à jour Excel planning absences
6. Sophie RH → Classement papier
```

**Temps total** : **15-20 min/demande** × 200 demandes/an = **50-65h/an**

**Ressaisies** : **4 fois la même demande**

### Exemple : Onboarding (Embauche)

```
Checklist 39 tâches manuelles :
1. Sophie RH → Création dossier admin (DPAE, contrat, mutuelle...)
2. Sophie RH → Email IT (création compte, badge, téléphone)
3. Sophie RH → Email logistique (EPI, outillage, véhicule si besoin)
4. Sophie RH → Email manager (planification accueil)
5. Sophie RH → Email CSE (information nouvel arrivant)
6. Sophie RH → Saisie SAGE (registre personnel)
7. Sophie RH → Saisie POPAYE (nouveau collaborateur)
8. Sophie RH → Saisie Radiance (affiliation mutuelle)
9. Sophie RH → Rappel manuel entretien J+10 (rapport étonnement)
10. Sophie RH → Rappel manuel entretien J+30 (bilan intégration)
11. Sophie RH → Rappel manuel fin période essai (J-15)
```

**Temps total** : **8-10h par embauche**

**Fréquence** : **~20 embauches/an = 160-200h/an**

**Problème** : **Relances manuelles**, oublis fréquents (entretiens, matériel), aucune traçabilité

### Exemple : Gestion Intérimaires

```
Excel "SUIVI TEMPORAIRES.xlsx" complètement isolé :
- Nom, prénom, agence
- Dates missions
- Heures travaillées (ressaisie manuelle depuis factures)
- Formations (habilitations électriques)
- Cartes BTP (numéros, validités)
- Factures (montants, dates paiement)

Problèmes :
- Aucune intégration avec POPAYE, SAGE, ou planning
- Impossible de comparer coûts CDI vs intérimaires
- Pas d'alertes fin de mission
- Pas de suivi formations/habilitations global
- Vision partielle de la workforce réelle
```

**Temps perdu** : **5-10h/mois** (ressaisies, recherches manuelles)

---

## 💸 COÛTS PROCESSUS MANUELS

### Temps Sophie RH (Responsable RH)

| Tâche | Temps | Fréquence | Total/an |
|-------|-------|-----------|----------|
| **Paie hebdo + mensuelle** | 3j/sem | 52 sem | **~600h/an** |
| **Onboarding/Offboarding** | 8-10h | 30×/an | **240-300h/an** |
| **Relances FH managers** | 2h/sem | 52 sem | **100h/an** |
| **Calcul TR manuel** | 1h | 12×/an | **12h/an** |
| **Gestion congés (saisies multiples)** | 15 min | 200/an | **50h/an** |
| **Suivi intérimaires** | 10h/mois | 12 mois | **120h/an** |
| **Compilation KPIs** | 4h | 12×/an | **48h/an** |
| **TOTAL TEMPS MANUEL** | | | **~1170h/an** |

**Soit ~65% du temps Sophie** sur des tâches à **faible valeur ajoutée** (ressaisies, calculs manuels, relances)

### Temps Managers

| Tâche | Temps | Fréquence | Total/an |
|-------|-------|-----------|----------|
| **Validation FH** | 1h/sem | 52 sem × 10 managers | **520h/an** |
| **Relances collaborateurs** | 30 min/sem | 52 sem × 10 managers | **260h/an** |
| **TOTAL** | | | **780h/an** |

---

## 🔴 PAIN POINTS ARCHITECTURE

### 1. Silos de Données = Triple/Quadruple Saisie

**Problème** :
- **Même donnée saisie 5-6 fois** : POPAYE → Excel → SILAE → SAGE → CIBTP → PRO BTP
- **Incohérences** : Versions différentes d'une même info selon l'outil
- **Erreurs** : Fautes de frappe, oublis lors ressaisies

**Exemple concret** :
- Absence maladie saisie dans : (1) Papier, (2) POPAYE, (3) Excel planning, (4) CIBTP, (5) Email manager

### 2. Aucune Automatisation = Charge Manuelle Énorme

**Processus 100% manuels** :
- ❌ Calcul TR (tickets restaurant) : **Jours travaillés - absences - NDF** pour 100 personnes
- ❌ Calcul heures récup : **35h/semaine** pour chaque personne manuellement
- ❌ Valorisation km, paniers, grands déplacements : **Vérification ligne par ligne**
- ❌ Relances FH : **Appels/emails manuels** chaque semaine
- ❌ Rappels période essai : **Calendrier papier**, oublis fréquents
- ❌ Onboarding : **Emails manuels** à 4-5 personnes, pas de workflow

### 3. Aucune Visibilité Temps Réel

**Impossible de savoir en temps réel** :
- ❌ Combien de feuilles d'heures manquent ?
- ❌ Qui est absent aujourd'hui/cette semaine ?
- ❌ Où en sont les chantiers (heures consommées) ?
- ❌ Quel est le taux d'absentéisme ce mois ?
- ❌ Combien d'intérimaires actifs vs CDI ?

**Conséquence** : **Traitement paie en urgence** les jours précédant le 9 du mois

### 4. Gestion Intérimaires Fragmentée

**Problème** :
- **Excel isolé** du SI RH
- **Aucune alerte** : Fin de mission, fin habilitation, fin carte BTP
- **Vision partielle workforce** : Impossible de piloter globalement CDI + intérimaires
- **Pas de comparaison coûts** : CDI vs intérimaires vs sous-traitance

### 5. KPIs Tous Manuels

**Pour générer UN KPI** (turnover, absentéisme, ancienneté moyenne) :
1. Compiler plusieurs Excel
2. Exporter POPAYE + SAGE
3. Recalculer dans Excel
4. Formater pour présentation direction

**Temps** : **Demi-journée par KPI**

**Fréquence** : **Hebdomadaire** pour direction → **~50h/an gaspillées**

---

## 📉 IMPACTS BUSINESS

| Impact | Description | Gravité |
|--------|-------------|---------|
| **Surcharge RH** | 65% temps Sophie sur tâches manuelles | CRITIQUE |
| **Erreurs paie** | Ressaisies multiples = erreurs | HAUTE |
| **Retards paie** | Traitement urgence dernier moment | HAUTE |
| **Oublis onboarding** | Entretiens, matériel, formations | MOYENNE |
| **Turnover** | Intégration défaillante = départs précoces | MOYENNE |
| **Pilotage aveugle** | KPIs obsolètes, incomplets | MOYENNE |
| **Coûts intérimaires** | Pas de suivi ni optimisation | MOYENNE |

---

## 🎯 CONCLUSION

**L'architecture RH actuelle = 22 systèmes isolés** générant :
- ✅ **Ressaisies massives** : Même donnée 5-6 fois
- ✅ **Surcharge Sophie**  temps sur tâches faible valeur
- ✅ **Aucune visibilité** : Impossible piloter temps réel
- ✅ **Erreurs fréquentes** : Triple saisie = triple risque
- ✅ **Processus lourds** : Onboarding 8-10h, offboarding 5-8h

**Urgence** : **Centralisation + Automatisation**

---

**📅 Date création** : 2025-11-17
**🔄 Version** : v1.0 - Sans chiffres prédictionnels
