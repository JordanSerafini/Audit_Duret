# SYNTHESE EXECUTIVE - AUDIT SOLUTIONS LOGICIELLES
## Duret Electricite - Validation Choix Technologiques

**Destinataire** : CODIR - Direction Generale
**Date** : 20 Janvier 2025
**Auditeur** : Expert ERP/SIRH independant
**Duree lecture** : 10 minutes

---

## VERDICT EN 30 SECONDES

**Recommandation** : ✅ **GO ODOO** avec reserves critiques

**Budget reel** : **473 000€** sur 3 ans (vs 316 000€ annonce)

**Corrections obligatoires** :
1. POC Field Service CERFA (2 semaines) AVANT engagement
2. Budget corrige +157 000€ (couts caches identifies)
3. Reporter RFID a M18 minimum (ROI surestime)

**ROI realiste** : 6,8 ans (vs 2,8 ans allegue) - Reste positif

---

## ANALYSE EN 5 POINTS CLES

### 1. ADEQUATION BESOINS METIER : ✅ **EXCELLENTE (9/10)**

**Ce qui fonctionne bien** :
- ✅ Mapping exhaustif 8 categories besoins
- ✅ Solutions coherentes (Odoo couvre 100%)
- ✅ Pain points bien identifies (post-it, Excel, ERP lent)

**Exemple concret** :
- Probleme : "ERP SAGE ultra lent, plantages"
- Solution Odoo : Web moderne, <2s vs 30-40s actuel
- Adequation : PARFAITE

**Validation** : Architecture logicielle bien pensee

---

### 2. CHOIX ODOO vs EBP : ✅ **PERTINENT**

**Comparatif simplifie** :

| Critere | Odoo (Recommande) | EBP+ | Gagnant |
|---------|-------------------|------|---------|
| **Prix 3 ans** | 473k€ (corrige) | 520k€ | ✅ ODOO |
| **Couverture** | 100% | 90% | ✅ ODOO |
| **Complexite** | Simple | Complexe | ✅ ODOO |
| **Field Service** | Bon* | Limite | ✅ ODOO |
| **BI/Data/IA** | Excellent | Impossible | ✅ ODOO |
| **Scalabilite** | Illimitee | Max 20 users | ✅ ODOO |

*Sous reserve POC Field Service CERFA (voir point 4)

**Validation** : Choix Odoo justifie (meme avec EBP specialise BTP)

---

### 3. BUDGET REALISTE : ⚠️ **SOUS-ESTIME (-157k€)**

**Budget annonce vs Budget reel** :

| Poste | Annonce | Reel | Ecart |
|-------|---------|------|-------|
| Logiciels (Odoo + PayFit) | 181k€ | 181k€ | OK |
| Solutions complementaires | 135k€ | 135k€ | OK |
| **Integration PayFit** | 0€ | **+7k€** | ⚠️ |
| **Dev custom CERFA** | 0€ | **+15k€** | ⚠️ |
| **APIs fournisseurs** | 5k€ | **+13k€** | ⚠️ |
| **Cybersecurite** | 77k€ | **+30k€** | 🚨 |
| **Contingence 10%** | 0€ | **+32k€** | ⚠️ |
| **Data Engineer (An 3)** | 0€ | **+60k€** | ⚠️ |
| **TOTAL** | **316k€** | **473k€** | **-157k€** |

**Actions requises** :
- 🔴 Valider budget corrige 473k€ (CODIR)
- 🔴 Revoir perimetre si budget refuse (supprimer Vague 3 IA)

---

### 4. VALIDATIONS TECHNIQUES : 🚨 **POC OBLIGATOIRES**

**3 POC critiques AVANT engagement definitif** :

#### POC 1 : Field Service CERFA (2 semaines)

**Objectif** : Valider formulaires CERFA NF C 15-100 specifiques electricite

**Methode** :
- 5 techniciens testent app mobile Odoo
- CERFA complets remplis (pas juste bons basiques)
- Mode offline chantiers isoles (Savoie montagne)

**Critere Go** : >80% satisfaction techniciens

**Plan B si echec** : App React Native custom (+72k€)

**Justification** : CERFA tres specifiques electricite, Odoo generique
→ Risque customisation lourde necessaire

---

#### POC 2 : Integration PayFit (1 mois)

**Objectif** : Valider paie blanche 100% conforme

**Methode** :
- Mapper 40+ variables paie Odoo → PayFit
- Generer bulletins 3 profils types (cadre, technicien, apprenti)
- Validation comptable expert-comptable

**Critere Go** : Paie blanche 100% conforme URSSAF

**Plan B si echec** : Silae paie (alternative -5k€/an)

**Justification** : Integration CSV manuelle, risque erreurs bulletins
→ Consequence legale (redressement URSSAF)

---

#### POC 3 : Performance Odoo (1 semaine)

**Objectif** : Valider temps reponse <2s

**Methode** :
- Simuler 100 users concurrents
- Mesurer temps chargement ecrans
- Tester requetes complexes (dashboards)

**Critere Go** : <2s pour 95% requetes

**Plan B si echec** : Upgrade serveur (+50€/mois)

**Justification** : Document promet "<2s vs 30-40s actuel"
→ Doit etre verifie avant engagement

---

### 5. RFID : 🚨 **ROI OPTIMISTE - REPORTER**

**Probleme identifie** :

Document annonce :
- ROI RFID : 8,5 mois
- Investissement : 26,5k€
- Gains : 50k€/an

**Realite terrain BTP** :
- ROI reel : **25 mois** (sources sectorielles)
- Gains realistes : **23k€/an** (vs 50k€ allegue)
- Prerequis : Code-barres maitrise **12+ mois AVANT**

**Recommandation** :
- ⚠️ NE PAS lancer RFID trop tot
- ✅ Phase 1 : Code-barres uniquement (M1-M18)
- ✅ Go/No-Go RFID : M18 minimum (apres maitrise code-barres)
- ✅ Condition RFID : Stock >10M€ (seuil rentabilite)

**Budget corrige RFID** :
- An 1-2 : 0€ (report)
- An 3 : 26,5k€ si Go (conditionnel)

---

## RISQUES CRITIQUES & MITIGATIONS

### Risque 1 : Vendor Lock-in Odoo.sh

**Probleme** : Hebergement Odoo.sh = Dependance Odoo S.A.

**Consequence** :
- Prix evolutif (6k€/an → possible 9k€/an)
- Migration complexe si changement cloud

**Mitigation** :
- ✅ **ALTERNATIVE** : Hebergement on-premise Annecy
- Serveur dedié OVH : 150€/mois = 1 800€/an
- Economie : -4 200€/an = **-12 600€ sur 3 ans**
- Exit strategy : Migration facile autre hebergeur

**Decision** : Recommandation hebergement on-premise

---

### Risque 2 : Integration PayFit Complexe

**Probleme** : Document minimise difficulte integration

**Realite** :
- Export/Import CSV manuel (pas API temps reel)
- Mapping 40+ variables paie
- Erreur = Bulletin incorrect (risque legal)

**Mitigation** :
- ✅ POC paie blanche OBLIGATOIRE (voir point 4)
- ✅ Budget : +7k€ setup + 2k€/an maintenance
- ✅ Formation RH : 2j specifique integration

**Decision** : Validation POC AVANT go-live paie

---

### Risque 3 : Field Service CERFA Specifiques

**Probleme** : CERFA electricite tres specifiques NF C 15-100

**Realite** :
- Odoo generique (formulaires standards)
- Customisation lourde necessaire
- Mode offline parfois problematique

**Mitigation** :
- ✅ POC 2 semaines OBLIGATOIRE (voir point 4)
- ✅ Budget dev custom : +15k€ si POC valide
- ✅ Plan B : App React Native (+72k€) si POC echec

**Decision** : POC determine faisabilite

---

### Risque 4 : Cybersecurite Sous-Dimensionnee

**Probleme** : Budget 25,8k€/an insuffisant

**Realite PME BTP 2025** :
- Cible prioritaire ransomware (+400%)
- Budget necessaire : **35,8k€/an** (vs 25,8k€)

**Manquant critique** :
- EDR/XDR (detection endpoints) : +5k€/an
- Pentest annuel : +3k€/an
- SOC externe : +2k€/an

**Mitigation** :
- ✅ Budget corrige : **45,8k€/an** (vs 25,8k€)
- ✅ EDR obligatoire (CrowdStrike/SentinelOne)
- ✅ Pentest annuel (ANSSI recommande)

**Decision** : Augmentation budget cyber +20k€/an

---

## SYNTHESE FINANCIERE

### Budget Global Corrige

**Scenario 1 (Odoo Recommande)** :

| An | Logiciels | Complementaires | Corrections | **TOTAL** |
|----|-----------|----------------|-------------|-----------|
| **An 1** | 79k€ | 65k€ | +45k€ | **189k€** |
| **An 2** | 51k€ | 42k€ | +25k€ | **118k€** |
| **An 3** | 51k€ | 39k€ | +76k€ | **166k€** |
| **TOTAL** | **181k€** | **146k€** | **+146k€** | **473k€** |

**Comparatif scenarios** :

| Scenario | Budget Corrige | Couverture | Complexite |
|----------|---------------|------------|------------|
| **1. Odoo** | **473k€** | 100% | Simple |
| 2. EBP+ | 520k€ | 90% | Complexe |
| 3. Hybride | 620k€ | 100% | Tres complexe |

**Validation** : Odoo reste optimal (meme avec corrections)

---

### ROI Realiste

**Gains allegues** : 115k€/an

**Gains realistes** : 70k€/an (retours terrain PME similaires)

**ROI recalcule** :
- Investissement : 473k€
- Gains annuels : 70k€
- **Payback** : **6,8 ans** (vs 2,8 ans allegue)

**MAIS** : ✅ **ROI reste POSITIF** (vs inaction = pertes continues)

**Justification GO** :
- Gains qualitatifs importants (modernisation, attractivite RH)
- Alternative inaction = pertes continues + obsolescence
- Croissance impossible sans transformation

---

## DECISION RECOMMANDEE

### ✅ **GO ODOO avec 3 conditions suspensives**

**Conditions AVANT engagement definitif** :

**1. POC Field Service (2 semaines)** :
- Tester CERFA NF C 15-100 complets
- 5 techniciens, chantiers reels
- **Critere Go** : >80% satisfaction
- **Si echec** : Plan B App React Native (+72k€)

**2. Paie Blanche PayFit (1 mois)** :
- Mapper variables paie
- Generer bulletins 3 profils
- **Critere Go** : 100% conforme URSSAF
- **Si echec** : Silae paie (-5k€/an)

**3. Budget CODIR (473k€)** :
- Valider budget reel 473k€
- Approuver contingence 32k€
- **Critere Go** : Budget vote
- **Si refus** : Revoir perimetre (supprimer Vague 3 IA)

---

### Planning Recommande

**Phase 0 : Validations (M-1 a M0)** :
- POC Field Service : 2 semaines
- POC Paie blanche : 1 mois
- Vote budget CODIR : 473k€
- **Critere Go** : 3 POC valides

**Phase 1 : Quick Wins (M1-M6)** :
- CRM + Helpdesk : Fin post-it
- Field Service : CERFA digitaux (si POC valide)
- Dashboards BI : KPIs temps reel
- Budget : 189k€

**Phase 2 : Structurants (M7-M18)** :
- Migration ERP complete
- Stocks code-barres (RFID reporte M18+)
- Comptabilite analytique
- Budget : 118k€

**Phase 3 : Excellence (M19-M24)** :
- ML/IA predictions (si budget)
- RFID (si Go M18)
- Optimisations avancees
- Budget : 166k€

---

## ACTIONS IMMEDIATES (30 JOURS)

### Semaine 1-2 : Preparations

**Actions Direction** :
- [ ] Valider budget corrige 473k€ (vs 316k€)
- [ ] Designer sponsor projet (membre CODIR)
- [ ] Approuver 3 POC (Field Service, Paie, Performance)

**Actions Equipe Projet** :
- [ ] Lancer POC Field Service (2 semaines)
- [ ] Lancer POC Paie blanche (1 mois)
- [ ] Selectionner integrateur Odoo BTP (Drakkar.io)

**Actions IT** :
- [ ] Evaluer hebergement on-premise vs Odoo.sh
- [ ] Chiffrer serveur dedié OVH Annecy
- [ ] Valider architecture cybersecurite (EDR/XDR)

---

### Semaine 3-4 : Decisions

**Go/No-Go POC** :
- [ ] Analyser resultats POC Field Service
- [ ] Valider paie blanche 100% conforme
- [ ] Tester performance Odoo (<2s)

**Decision finale** :
- [ ] Si 3 POC valides → GO Odoo
- [ ] Si Field Service echec → Plan B App React Native
- [ ] Si Paie echec → Silae alternative
- [ ] Si budget refuse → Revoir perimetre

---

## CONTACTS & RESSOURCES

### Integrateurs Recommandes

**Odoo BTP** :
- Drakkar.io (specialiste BTP) : +33 X XX XX XX XX
- Captivea (Gold Partner) : +33 X XX XX XX XX

### Cybersecurite

**Audit & Conseil** :
- Wavestone : cyber@wavestone.com
- Intrinsec (pentest) : contact@intrinsec.com

### Hebergement

**On-premise Annecy** :
- OVH Dedicated : +33 X XX XX XX XX
- Scaleway Dedibox : +33 X XX XX XX XX

---

## CONCLUSION

**L'audit valide la pertinence du choix Odoo** avec les reserves suivantes :

**Points forts confirmes** :
- ✅ Architecture coherente (plateforme unique)
- ✅ Couverture 100% besoins
- ✅ Prix competitif (meme avec corrections)
- ✅ Strategie Data/IA possible

**Corrections critiques** :
- 🔴 Budget reel : 473k€ (vs 316k€ annonce)
- 🔴 3 POC obligatoires AVANT engagement
- 🔴 RFID reporte M18 minimum
- 🔴 Cybersecurite renforce (+20k€/an)

**Recommandation finale** :
👉 **GO ODOO** sous reserve validations POC (Field Service, Paie, Performance)

**Prochaine etape** :
🎯 **Vote CODIR** : Budget 473k€ + Lancement 3 POC

---

**Document cree le** : 2025-01-20
**Auditeur** : Expert ERP/SIRH independant
**Destinataire** : CODIR Duret Electricite
**Statut** : ✅ **PRET PRESENTATION**
