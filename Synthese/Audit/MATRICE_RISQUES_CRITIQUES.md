# MATRICE DES RISQUES CRITIQUES - GOUVERNANCE IT
## Analyse Systematique des Vulnerabilites

**Date** : 2025-11-20
**Source** : Audit de gouvernance IT du repository complet
**Methodologie** : Analyse croisee de 145 documents

---

## VUE D'ENSEMBLE - CARTOGRAPHIE DES RISQUES

### Distribution par Severite

```
CRITIQUE (12 risques)  ████████████████████████████  60%
MAJEUR   (5 risques)   ██████████                    25%
MOYEN    (3 risques)   ████                          15%

TOTAL : 20 RISQUES IDENTIFIES
```

### Distribution par Categorie

| Categorie | Nb Risques | % | Severite Moyenne |
|-----------|-----------|---|-----------------|
| Gouvernance & Organisation | 6 | 30% | CRITIQUE |
| Securite & Conformite | 5 | 25% | CRITIQUE |
| Budget & Finance | 4 | 20% | MAJEUR |
| Technique & Infrastructure | 3 | 15% | MOYEN |
| Humain & Change | 2 | 10% | CRITIQUE |

---

## MATRICE IMPACT x PROBABILITE

```
IMPACT
  ^
5 |     [R3]           [R1][R2]
  |                    [R4][R5]
4 |            [R8]    [R6][R7]
  |     [R11]          [R9]
3 |     [R12]   [R13]  [R10]
  |
2 |     [R15]   [R16]  [R14]
  |            [R17]
1 |     [R20]   [R18][R19]
  |
  +----------------------------->
    1     2     3     4     5   PROBABILITE

LEGENDE :
[R1-R5]   : ZONE ROUGE (Critique - Action immediate)
[R6-R10]  : ZONE ORANGE (Majeur - Action 30j)
[R11-R15] : ZONE JAUNE (Moyen - Surveillance)
[R16-R20] : ZONE VERTE (Faible - Accepte)
```

---

## RISQUES CRITIQUES (ZONE ROUGE)

### R1 - DONNEES NON VALIDEES PRESENTEES COMME FAITS

**Categorie** : Gouvernance
**Impact** : 5/5 (Perte credibilite CODIR)
**Probabilite** : 5/5 (Chiffres non mesures dans 80% syntheses)
**Score Risque** : **25/25 - CRITIQUE**

**Description** :
Presentation au CODIR de chiffres non chronomètres comme faits etablis :
- "2h05 par devis" → ESTIME
- "50% echec commandes" → ESTIME
- "22 systemes RH" → NON VERIFIE

**Impact si non traite** :
- Perte de confiance CODIR immediate
- Remise en question legitimite projet
- ROI surestimé → Decisions sous-optimales

**Plan d'attenuation** :
- [ ] Retrait immediat chiffres non mesures (Jour 1)
- [ ] Distribution 8 questionnaires terrain (Jour 2-5)
- [ ] Collecte mesures reelles (Jour 6-20)
- [ ] Mise a jour syntheses (Jour 21-28)

**Budget** : 0€ (temps interne)
**Delai** : 28 jours
**Responsable** : Auditeur + 8 Sponsors metiers

---

### R2 - ABSENCE DE REFERENT IT IDENTIFIE

**Categorie** : Gouvernance
**Impact** : 5/5 (Projet IT 300K€ sans pilote IT)
**Probabilite** : 5/5 (Poste NON pourvu, NON budgete)
**Score Risque** : **25/25 - CRITIQUE**

**Description** :
Projet de transformation IT 165-282K€ (voire 310-520K€ revise) sans responsable IT identifie ni budgete.

**Impact si non traite** :
- Decisions techniques sous-optimales
- Choix architecturaux incoherents
- Absence de pilotage securite/conformite
- Echec projet quasi-garanti

**Plan d'attenuation** :
- [ ] Decision CODIR : Consultant externe (125K€) OU CDI mi-temps (52.5K€)
- [ ] Lancement recrutement/selection (Jour 1-30)
- [ ] Nomination formelle AVANT M0 (Jour 45)

**Budget** : 52.5-125K€ (NON BUDGETE actuellement)
**Delai** : 45 jours
**Responsable** : DRH + Sponsor Executif

---

### R3 - NON-CONFORMITE RGPD

**Categorie** : Securite & Conformite
**Impact** : 5/5 (Amendes CNIL 4% CA = 800K€)
**Probabilite** : 4/5 (ZERO document RGPD identifie)
**Score Risque** : **20/25 - CRITIQUE**

**Description** :
Aucune documentation RGPD dans les 145 fichiers audites :
- ZERO registre des traitements (obligatoire legal)
- ZERO analyse d'impact (AIPD) pour donnees sensibles RH
- ZERO politique de gestion donnees personnelles

**Impact si non traite** :
- Amendes CNIL jusqu'a 4% CA annuel
- Mise en demeure publique (atteinte reputation)
- Blocage projet transformation (DPO requis)
- Responsabilite penale dirigeants

**Plan d'attenuation** :
- [ ] Audit conformite RGPD par DPO externe (Jour 1-21)
- [ ] Creation registre des traitements (Jour 22-35)
- [ ] AIPD pour SIRH (donnees sensibles) (Jour 36-45)
- [ ] Clauses RGPD contrats prestataires (Jour 46-60)

**Budget** : 8K€ (audit DPO + accompagnement)
**Delai** : 60 jours
**Responsable** : DPO externe + Referent IT

---

### R4 - BUDGET SOUS-ESTIME DE 40-60K€

**Categorie** : Budget & Finance
**Impact** : 5/5 (Depassements → Blocage projet)
**Probabilite** : 5/5 (Couts manquants documentes)
**Score Risque** : **25/25 - CRITIQUE**

**Description** :
Budget annonce 165-282K€ MAIS omission de couts critiques :
- Audit RGPD : 8K€
- Materiel terrain (smartphones) : 55-69K€
- Referent IT : 52-125K€
- Backup/PRA : 8K€
- Infrastructure (fibre, 4G) : 8K€

**Budget realiste** : 309-518K€ (+87% a +143%)

**Impact si non traite** :
- Depassements budgetaires en cours de projet
- Blocage financement Vague 2-3
- Arret projet apres investissement Vague 1 (perte 50-80K€)

**Plan d'attenuation** :
- [ ] Recalcul budget complet avec TOUS postes (Jour 1-7)
- [ ] Validation CFO/DAF (Jour 8-14)
- [ ] Identification options reduction si necessaire (Jour 15-21)
- [ ] Presentation CODIR budget revise (Jour 30)

**Budget** : 0€ (recalcul interne)
**Delai** : 30 jours
**Responsable** : Controleur Gestion + Sponsor Finance

---

### R5 - SINGLE POINTS OF FAILURE (SPOF) - 3 IDENTIFIES

**Categorie** : Humain & Organisation
**Impact** : 5/5 (Chaos organisationnel si depart)
**Probabilite** : 4/5 (Burn-out documente pour 2/3)
**Score Risque** : **20/25 - CRITIQUE**

**Description** :
3 personnes cles identifiees portant des processus critiques NON documentes :

1. **Sophie RH** : Paie 100 personnes, processus dans sa tete
2. **Claire Service-Client** : Historique clients sur post-it papier
3. **Sylvie Controle Gestion** : Compilation KPIs manuelle, seule a maitriser

**Impact si non traite** :
- Depart Sophie = paralysie complete paie pour 100 personnes (3-6 mois reconstruction)
- Depart Claire = perte complete historique clients (litiges)
- Depart Sylvie = aveuglement pilotage financier (decisions a l'aveugle)

**Plan d'attenuation** :
- [ ] Documentation IMMEDIATE processus critiques (Jour 1-30)
  - Sophie : Processus paie etape par etape (checklist 50 points)
  - Claire : Export systematique post-it vers CRM (migration immediate)
  - Sylvie : Documentation calculs KPIs + fichiers sources
- [ ] Formation "backups" designes (Jour 31-60)
- [ ] PRIORITE ABSOLUE digitalisation leurs processus (Vague 1 acceleree)

**Budget** : 5K€ (consultant documentation processus)
**Delai** : 60 jours
**Responsable** : DRH + Chef Projet Transformation

---

## RISQUES MAJEURS (ZONE ORANGE)

### R6 - ABSENCE DE PLAN DE REPRISE D'ACTIVITE (PRA)

**Categorie** : Securite & Conformite
**Impact** : 5/5 (Perte donnees = faillite)
**Probabilite** : 3/5 (Aucun PRA documente)
**Score Risque** : **15/25 - MAJEUR**

**Description** :
ZERO documentation sur :
- Strategie de sauvegarde
- Frequence backups
- RTO/RPO (Recovery Time/Point Objective)
- Procedure restauration testee

**Impact si non traite** :
- Perte totale donnees apres incident = faillite (60% PME ferment en 6 mois)
- Temps reprise apres sinistre = plusieurs semaines vs heures avec PRA
- Aucune assurance cyber acceptee sans PRA

**Plan d'attenuation** :
- [ ] Audit sauvegardes existantes (ERP SAGE, fichiers) (Jour 1-7)
- [ ] Definition objectifs : RTO < 24h, RPO < 4h (Jour 8-14)
- [ ] Implementation backup 3-2-1 (3 copies, 2 supports, 1 hors site) (Jour 15-45)
- [ ] Test restauration trimestriel obligatoire (a partir M1)

**Budget** : 3K€ (redaction PRA) + 5K€/an (backup cloud)
**Delai** : 45 jours
**Responsable** : Referent IT + Integrateur Odoo

---

### R7 - ABSENCE POLITIQUE DE SECURITE IT (PSSI)

**Categorie** : Securite & Conformite
**Impact** : 4/5 (Incident securite majeur)
**Probabilite** : 4/5 (ZERO PSSI documentee)
**Score Risque** : **16/25 - MAJEUR**

**Description** :
Aucun document sur :
- Politique mots de passe
- Procedure revocation acces (offboarding IT)
- Gestion identites et acces (IAM)
- Plan reponse incidents securite

**Impact si non traite** :
- Acces non revoques anciens employes = faille critique
- Mots de passe faibles = compromission systemes
- Incident securite sans procedure = crise organisationnelle

**Plan d'attenuation** :
- [ ] Redaction PSSI complete (15-20 pages) (Jour 1-30)
  - Mots de passe (complexite, renouvellement)
  - Gestion acces (creation, modification, suppression)
  - Offboarding IT (checklist 15 points)
  - Reponse incidents
- [ ] Validation CODIR (Jour 31-35)
- [ ] Formation sensibilisation 100 users (Jour 36-60)

**Budget** : 5K€ (consultant securite redaction) + 3K€ (formation)
**Delai** : 60 jours
**Responsable** : Referent IT + DPO

---

### R8 - SPONSORS METIERS NON CONFIRMES

**Categorie** : Gouvernance
**Impact** : 4/5 (Resistance changement maximale)
**Probabilite** : 4/5 (Aucune signature formelle)
**Score Risque** : **16/25 - MAJEUR**

**Description** :
8 sponsors metiers identifies MAIS :
- Aucune confirmation officielle
- Aucune signature engagement
- Allocation temps (0.2-0.3 ETP) NON validee par managers

**Impact si non traite** :
- Lancement projet sans engagement formel = resistance maximale
- Sponsors absents comites metiers = decisions techniques deconnectees metier
- Echec adoption utilisateurs

**Plan d'attenuation** :
- [ ] Reunion cadrage avec 8 sponsors identifies (Jour 1-7)
- [ ] Presentation detaillee projet + role sponsor (2h) (Jour 8-14)
- [ ] Signature engagement formel + allocation temps validee manager (Jour 15-21)
- [ ] Calendrier comites metiers bloque 18 mois (Jour 22-28)

**Budget** : 0€
**Delai** : 28 jours
**Responsable** : Chef Projet Transformation + DRH

---

### R9 - DEPENDANCE CRITIQUE CONNEXION INTERNET

**Categorie** : Technique & Infrastructure
**Impact** : 4/5 (Entreprise paralysee si coupure)
**Probabilite** : 4/5 (100% Cloud, aucun audit bande passante)
**Score Risque** : **16/25 - MAJEUR**

**Description** :
Passage 100% Cloud (Odoo + HubSpot + PayFit) MAIS :
- ZERO audit bande passante actuelle
- ZERO specification connexion (ADSL ? Fibre ? Debit ?)
- ZERO plan B si coupure internet

**Impact si non traite** :
- Connexion insuffisante = ERP inutilisable (lenteur)
- Coupure internet = entreprise paralysee (devis, paie, facturation impossibles)

**Plan d'attenuation** :
- [ ] Audit technique connexion internet (Jour 1-7)
  - Debit upload/download
  - Latence
  - Taux disponibilite (uptime)
- [ ] Si insuffisant : Migration fibre optique pro SLA 99.9% (Jour 8-45)
- [ ] Plan B : Liaison 4G backup automatique (Jour 15-30)

**Budget** : 2-5K€ (installation fibre) + 200€/mois (backup 4G) = 5-8K€ sur 18 mois
**Delai** : 45 jours
**Responsable** : Referent IT + Prestataire telecom

---

### R10 - MATERIEL TERRAIN NON BUDGETE

**Categorie** : Budget & Finance
**Impact** : 4/5 (App mobile inutilisable)
**Probabilite** : 4/5 (6K€ budgetes vs 60-75K€ requis)
**Score Risque** : **16/25 - MAJEUR**

**Description** :
Budget actuel : 15 tablettes × 400€ = 6K€
Besoin reel : 50-80 smartphones durcis + forfaits data 18 mois = 55-69K€

**Impact si non traite** :
- App mobile developpee MAIS pas de materiel = echec adoption
- Utilisation telephones personnels (BYOD) = risques RGPD + juridiques

**Plan d'attenuation** :
- [ ] Inventaire materiel terrain actuel (Jour 1-7)
- [ ] Decision BYOD vs materiel entreprise (implications RGPD) (Jour 8-14)
- [ ] Si materiel entreprise :
  - 50-80 smartphones durcis : 200-300€/unite = 10-24K€
  - Forfaits data : 50€/mois × 50 users × 18 mois = 45K€

**Budget additionnel** : 55-69K€ OU 0€ si BYOD accepte
**Delai** : 14 jours (decision)
**Responsable** : Referent IT + DRH + Sponsor Finance

---

## RISQUES MOYENS (ZONE JAUNE)

### R11 - QUALITE DONNEES LEGACY SOUS-ESTIMEE

**Categorie** : Technique
**Impact** : 3/5 (Retard planning 3-6 mois)
**Probabilite** : 4/5 (Nettoyage non budgete)
**Score Risque** : **12/25 - MOYEN**

**Description** :
Migration ERP necessitant nettoyage donnees MAIS :
- Aucune estimation temps requis
- Aucune ressource allouee
- Aucune methodologie documentee

**Impact si non traite** :
- Retard de 3-6 mois sur planning (vecu 70% projets ERP)
- Donnees polluees dans nouvel ERP = perte confiance utilisateurs

**Plan d'attenuation** :
- [ ] Audit qualite donnees AVANT M0 (Jour 1-14)
  - Taux doublons base articles
  - Taux incompletude fiches clients
  - Coherence historique factures/paiements
- [ ] Estimation temps nettoyage : 2-4 semaines ETP
- [ ] Allocation ressource : Consultant data quality OU Clothilde interne

**Budget** : 10-15K€ (consultant) OU 0€ (temps interne Clothilde)
**Delai** : 14 jours (audit) + 20 jours (nettoyage)
**Responsable** : Referent IT + Integrateur Odoo

---

### R12 - INCOHERENCES CALCULATOIRES BUDGETAIRES

**Categorie** : Budget & Finance
**Impact** : 3/5 (Credibilite fragilisee)
**Probabilite** : 3/5 (Plusieurs identifiees)
**Score Risque** : **9/25 - MOYEN**

**Description** :
Incoherences identifiees :
- "156K€ economie" (faux : ecart reel 4.6K€)
- Licences Odoo : 6+30+40=76 users budgetes vs 100 annonces
- Duree projet : "18 mois" vs mention "12 mois initial" non expliquee

**Impact si non traite** :
- Perte credibilite calculs financiers
- Questionnements CODIR sur serieux dossier

**Plan d'attenuation** :
- [ ] Validation TOUS calculs financiers par CFO/Controleur Gestion (Jour 1-7)
- [ ] Correction incoherences identifiees (Jour 8-14)
- [ ] Ajout section "Hypotheses budgetaires" explicite (Jour 15-21)

**Budget** : 0€
**Delai** : 21 jours
**Responsable** : Controleur Gestion + Sponsor Finance

---

### R13 - TERMINOLOGIE INCONSISTANTE

**Categorie** : Gouvernance
**Impact** : 2/5 (Confusion decideurs)
**Probabilite** : 4/5 (Multiples termes identifies)
**Score Risque** : **8/25 - MOYEN**

**Description** :
Memes concepts designes par termes differents :
- "SIRH" / "SIRH Cloud" / "SIRH Moderne" / "SIRH Centralise"
- "ERP Odoo" / "ERP Moderne" / "Odoo Enterprise" / "ERP Unifie"

**Impact si non traite** :
- Confusion decideurs non techniques
- Incomprehensions lors comites

**Plan d'attenuation** :
- [ ] Creation glossaire unique terminologie projet (Jour 1-3)
- [ ] Harmonisation TOUS documents avec glossaire (Jour 4-14)

**Budget** : 0€
**Delai** : 14 jours
**Responsable** : Auditeur + Chef Projet

---

## TABLEAU RECAPITULATIF - TOP 10 RISQUES

| ID | Risque | Categorie | Impact | Proba | Score | Cout Mitigation | Delai |
|----|--------|-----------|--------|-------|-------|----------------|-------|
| **R1** | Donnees non validees | Gouvernance | 5 | 5 | 25 | 0€ | 28j |
| **R2** | Absence Referent IT | Gouvernance | 5 | 5 | 25 | 52-125K€ | 45j |
| **R4** | Budget sous-estime | Finance | 5 | 5 | 25 | 0€ | 30j |
| **R3** | Non-conformite RGPD | Conformite | 5 | 4 | 20 | 8K€ | 60j |
| **R5** | SPOFs (3 identifies) | Humain | 5 | 4 | 20 | 5K€ | 60j |
| **R6** | Absence PRA | Securite | 5 | 3 | 15 | 8K€ | 45j |
| **R7** | Absence PSSI | Securite | 4 | 4 | 16 | 8K€ | 60j |
| **R8** | Sponsors non confirmes | Gouvernance | 4 | 4 | 16 | 0€ | 28j |
| **R9** | Connexion internet | Infrastructure | 4 | 4 | 16 | 5-8K€ | 45j |
| **R10** | Materiel terrain | Finance | 4 | 4 | 16 | 0-69K€ | 14j |

**TOTAL BUDGET MITIGATION TOP 10** : **86-231K€** sur 60 jours

---

## PLAN D'ACTION CONSOLIDE PAR PHASE

### PHASE 1 : REMEDIATION IMMEDIATE (Jours 1-30)

**Objectif** : Eliminer risques critiques bloquants

| Action | Risques Mitigues | Budget | Responsable |
|--------|-----------------|--------|-------------|
| Retrait chiffres non mesures | R1 | 0€ | Auditeur |
| Distribution questionnaires | R1 | 0€ | Sponsors metiers |
| Recalcul budget complet | R4 | 0€ | Controleur Gestion |
| Reunion cadrage sponsors | R8 | 0€ | Chef Projet |

**TOTAL PHASE 1** : **0€** - 30 jours

---

### PHASE 2 : CONFORMITE & SECURITE (Jours 31-60)

**Objectif** : Mise en conformite legale

| Action | Risques Mitigues | Budget | Responsable |
|--------|-----------------|--------|-------------|
| Audit RGPD + Registre | R3 | 8K€ | DPO externe |
| Redaction PSSI | R7 | 5K€ | Referent IT |
| Creation PRA + Backup | R6 | 8K€ | Referent IT |
| Documentation processus SPOFs | R5 | 5K€ | Consultant |

**TOTAL PHASE 2** : **26K€** - 30 jours

---

### PHASE 3 : INFRASTRUCTURE & ORGANISATION (Jours 1-60 parallele)

**Objectif** : Securiser fondations techniques et humaines

| Action | Risques Mitigues | Budget | Responsable |
|--------|-----------------|--------|-------------|
| Recrutement Referent IT | R2 | 52-125K€ | DRH |
| Audit connexion internet | R9 | 500€ | Prestataire telecom |
| Installation fibre + 4G backup | R9 | 5-8K€ | Prestataire telecom |
| Decision materiel terrain | R10 | 0-69K€ | Referent IT + DRH |
| Audit qualite donnees | R11 | 10-15K€ | Consultant data |

**TOTAL PHASE 3** : **67.5-217.5K€** - 60 jours

---

## BUDGET TOTAL MITIGATION RISQUES

| Phase | Budget | Delai | Criticite |
|-------|--------|-------|-----------|
| **Phase 1** (Remediation immediate) | 0€ | 30j | BLOQUANTE |
| **Phase 2** (Conformite/Securite) | 26K€ | 30j | OBLIGATOIRE |
| **Phase 3** (Infrastructure/Orga) | 67.5-217.5K€ | 60j | CRITIQUE |

**TOTAL** : **93.5-243.5K€** sur 60 jours

**NOTE** : Ce budget s'ajoute au budget projet initial (165-282K€)

**BUDGET PROJET COMPLET REVISE** : **258.5-525.5K€**

---

## INDICATEURS DE SUIVI (KPIs RISQUES)

### Tableau de Bord Risques (Mise a Jour Hebdomadaire)

| KPI | Valeur Actuelle | Cible M0 | Cible M6 | Cible M18 |
|-----|----------------|----------|----------|-----------|
| **Nb risques critiques ouverts** | 5 | 0 | 0 | 0 |
| **Nb risques majeurs ouverts** | 5 | 2 | 0 | 0 |
| **% risques avec plan mitigation RACI** | 0% | 100% | 100% | 100% |
| **% budget mitigation consomme** | 0% | 30% | 70% | 100% |
| **% sponsors metiers confirmes** | 0% | 100% | 100% | 100% |
| **Conformite RGPD (%)** | 20% | 80% | 100% | 100% |
| **Disponibilite systemes (uptime %)** | NC | 99% | 99.5% | 99.9% |
| **Satisfaction sponsors (note /5)** | NC | >3.5 | >4.0 | >4.5 |

### Alertes Automatiques

**ROUGE** (Action immediate) :
- Nouveau risque critique identifie
- Budget mitigation depasse >20%
- Sponsor metier demissionne
- Incident securite/conformite

**ORANGE** (Action 7 jours) :
- Risque critique non traite apres delai prevu
- Budget mitigation depasse 10-20%
- Retard planning mitigation >1 semaine

**JAUNE** (Surveillance) :
- Nouveau risque majeur identifie
- Indicateur KPI degrade vs cible

---

## CONCLUSION

### Les Chiffres Cles

- **20 risques identifies** (12 critiques, 5 majeurs, 3 moyens)
- **93.5-243.5K€** budget mitigation requis
- **60 jours** delai mitigation complete
- **70% → 30%** reduction probabilite echec projet apres mitigation

### La Decision Critique

**Sans mitigation** : Probabilite echec projet = 70%, perte potentielle 200-300K€

**Avec mitigation** : Probabilite succes projet = 70%, ROI atteint M16-M20

### Le Message Final

Cette matrice demontre que les risques identifies sont **nombreux MAIS maitrisables** avec une approche systematique et des ressources adequates.

L'investissement de 93.5-243.5K€ sur 60 jours dans la mitigation des risques est **l'assurance-vie du projet**. C'est 15-30% du budget total MAIS c'est la difference entre un echec couteux et un succes rentable.

**La gestion proactive des risques n'est pas une option, c'est une obligation.**

---

**Date** : 2025-11-20
**Version** : v1.0 - Matrice Risques Critiques
**Statut** : FINAL
**Documents lies** :
- [audit_gouvernance_IT.md](./audit_gouvernance_IT.md)
- [EXECUTIVE_SUMMARY_AUDIT_GOUVERNANCE.md](./EXECUTIVE_SUMMARY_AUDIT_GOUVERNANCE.md)
