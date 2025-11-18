# 📋 PLAN D'ACTION - Service Ressources Humaines
**Entreprise** : Duret Electricité - Annecy
**Date audit** : Novembre 2025
**Auditeur** : Consultant IT & Data BI/ML

---

## 🔍 RÉSUMÉ DE L'AUDIT

### Situation actuelle

**Effectifs & Organisation**
- ~100 collaborateurs (CDI + intérimaires)
- Répartition : forte proportion personnel chantier + intérimaires
- 3 sites : Annecy, Cevins, Chambéry
- Communication : WhatsApp largement utilisé
- Réunions hebdo responsables affaires/activité

**Outils & Systèmes actuels**
- **SAGE Paie** : calcul indemnités km, chantiers avec distances, intérimaires
- **POPAYE** : gestion temps/heures, choix paiement ou mise de côté heures sup
- **SILAE** : paie externalisée (Only RH - Virginie Dimier)
- **Excel** : multitude de tableaux (effectifs, planning, entrées/sorties, mutuelle, trombinoscope, demandes informatiques, intérimaires)
- **SWILE** : commande titres restaurant
- **PRO BTP, CIBTP** : organismes BTP
- **Empowill** : (non détaillé)
- **Papier** : congés, contrats, registre personnel, classements divers

**Processus Paie (externalisée Only RH)**

*Principe :* Décalage 1 mois (paie M = variables M-1) sur semaines complètes (4-5 semaines)

*Workflow actuel :*
1. **Chaque semaine** : Traitement paie hebdo pour détecter anomalies
2. **Avant le 9** :
   - Contrôle FH (feuilles d'heures) + relances manuelles managers
   - Traitement paie + résolution anomalies
   - Valorisation manuelle heures récup (objectif 35h/semaine)
   - Pochette éléments paie + classeur rose
   - Export contrôle paie PDF
   - Vérifications : heures/semaine, km (KVE vs KVP), paniers (5/sem), grands déplacements
   - Blocage période paie
3. **Le 16** :
   - Calcul manuel TR (absences + NDF)
   - Commande SWILE (rechargement fin mois)
   - 3 exports Popaye : contingent hsupp, SILAE, contrôle paie
   - Envoi à Virginie : SILAE + compteurs + tableau compléments + justificatifs + arrêts + TR
4. **Fin mois** :
   - Réception bulletins
   - Contrôle binôme : TR, éléments complémentaires, absences entrée/sortie
   - Échanges avec Virginie via tableau

**Processus Onboarding (39 tâches manuelles)**

*Tâches administratives :* DPAE, contrat, registre personnel, Popaye, SAGE, planning CP, tableaux, médecine, Empowill, Radiance, carte BTP, passeport sécurité, HelloCSE, parcours intégration

*Matériel :* EPI, véhicule, outillage, PC, téléphone, tablette, badge, carte carburant, télébadge

*Communication :* 4-5 personnes à prévenir manuellement, message bienvenue, trombinoscope, WhatsApp

*Suivi :* Rapports étonnement J+10 et J+1 mois (manuels)

**Processus Offboarding (22 tâches)**
STC, informer services, registre, Popaye, SAGE, tableaux, médecine, Empowill, radiation mutuelle, certificat CIBTP, invalidation carte BTP, trombinoscope, WhatsApp, annulation formations, restitution matériel

**Gestion Intérimaires (Excel dédié)**
- Suivi hebdomadaire par agence (Proman, Mentech, Atout, LIP...)
- Colonnes : société, nom, agence, fonction, chantier, responsable, dates début/fin, contrat signé, carte BTP, visite médicale, formations, passeport sécurité, heures/semaine, factures mensuelles
- Pas d'intégration avec systèmes RH
- Pas d'alertes fin contrat automatiques
- Commentaires manuels (CP, augmentations, absences)

### Points de souffrance identifiés

#### 1. Multiplication des outils & silos de données

**Problème** : 15+ outils/tableaux non connectés
- Excel : effectifs, planning, entrées/sorties, mutuelle, trombinoscope, demandes IT, intérimaires
- SAGE, POPAYE, SILAE, SWILE, Empowill, PRO BTP, CIBTP, Radiance
- Papier : congés, contrats, registre, classements

**Conséquences**
- Saisies multiples/redondantes
- Risque erreurs/incohérences
- Aucune vue consolidée
- Impossibilité KPIs automatisés
- Temps administratif considérable

#### 2. Processus manuels chronophages

**Paie**
- Contrôle hebdo FH : relances managers manuelles
- Valorisation heures récup : calcul manuel pour chaque collaborateur
- Calcul TR : déduction manuelle absences + NDF pour chaque personne
- Vérifications paie : km, paniers, GD un par un
- Pochette éléments + classeur rose : saisie manuelle tableau

**Onboarding/Offboarding**
- 39 tâches entrée + 22 tâches sortie
- 4-5 personnes à contacter manuellement
- Checklist papier/Excel à cocher
- Rappels manuels (période essai, rapports étonnement)

**Planning**
- Excel : saisie manuelle, pas de pré-remplissage
- Modifications fin journée par chefs chantier
- Pas de vision consolidée multi-chantiers

**Congés**
- Feuille papier validation manager
- Saisie Popaye + CIBTP + planning Excel + classement papier
- 4 actions manuelles par demande

#### 3. Manque de traçabilité & visibilité

**Temps réel**
- Impossible de savoir en temps réel : FH manquantes, heures par chantier, disponibilités équipes
- Réunions hebdo : besoin de tableau suivi centralisé avec rôles/permissions

**Projection**
- Popaye gère historique mais pas projection activité future
- Impossible d'anticiper besoins ressources
- Pas de vision capacité/charge

**KPIs**
- Tous calculés manuellement
- Pas de reporting automatique
- Difficile de piloter RH (turnover, absentéisme, coûts, productivité)

#### 4. Gestion intérimaires fragmentée

**Problèmes**
- Excel isolé, pas d'intégration SI
- Pas d'alertes fin contrat
- Suivi manuel factures/heures
- Impossible de comparer CDI vs intérimaires
- Pas de vision coût complet

#### 5. Workflows absences/variables non automatisés

**Congés payés** : 4 saisies manuelles (papier → Popaye → CIBTP → planning → classement)

**Tickets restaurant** : calcul manuel (jours travaillés - absences - NDF) pour chaque collaborateur

**Notes de frais** : remontée papier/mail, saisie manuelle

**Heures supplémentaires** : choix paiement/mise de côté via Popaye (fonctionnement apprécié à conserver)

**Variables paie** : validation managers non systématique, délais de traitement longs

#### 6. Indemnités km semi-automatiques

**SAGE calcule** mais départ (Annecy/Cevins) à choisir manuellement pour chaque salarié

**Vérifications manuelles** : KVE (véhicule entreprise) vs KVP (véhicule personnel), cohérence km/éloignement chantier

#### 7. Absence géolocalisation & pointage intelligent

**Souhait exprimé**
- Géolocalisation pour fiche interventions
- Pointage par chantier
- Affectation par type de travaux
- Gamification pour rendre ludique

**Actuellement** : déclaratif Popaye, pas de vérification automatique présence/lieu

#### 8. Communication dispersée

**WhatsApp** utilisé mais pas intégré SI

**Souhait** : Intranet/plateforme communication centralisée

**Onboarding** : message bienvenue S-1, livret accueil, mails éparpillés

#### 9. Rapports étonnement & exit manuels

**Souhaité** : interviews entrée (J+10, J+1 mois) et sortie avec analyse

**Actuellement** : rappels manuels Outlook, pas de formalisation ni exploitation data

### Besoins exprimés (priorités)

#### 1. Outil RH centralisé (SIRH type LUCCA mentionné)

**Fonctions attendues**
- Registre du personnel
- Contrats de travail
- Gestion congés/absences (workflow digital)
- Notes de frais (scan tickets)
- Tickets restaurant (calcul auto)
- Planning intelligent (pré-remplissage FH)
- Suivi mutuelle
- Trombinoscope
- Gestion demandes informatiques

**Bénéfices**
- 1 outil vs 15+
- Fin saisies multiples
- Vue consolidée temps réel
- KPIs automatisés
- Gain temps administratif

#### 2. Workflow onboarding/offboarding automatisé

**Onboarding**
- Déclenchement automatique à la signature contrat
- Notifications 4-5 personnes concernées (IT, logistique, manager, RH, CSE)
- Checklist digitale avec statuts/responsables
- Rappels automatiques tâches en retard
- Planification automatique rapports étonnement (J+10, J+1 mois)
- Formulaires en ligne pour nouveau salarié (RIB, documents, photo)

**Offboarding**
- Déclenchement automatique date sortie
- Checklist restitution matériel
- Workflow STC
- Radiation automatique accès/outils
- Interview exit digitalisée avec analyse

**ROI** : 4-5 personnes × 2h/embauche → 8-10h économisées, ~30 embauches/sorties/an → 240-300h/an

#### 3. Gestion temps optimisée (Popaye+)

**Améliorations souhaitées**
- **Validation managers** : vue FH manquantes, relances automatiques salariés/managers
- **Pré-remplissage** : GD, véhicules, motifs absence
- **Délai traitement** : SLA + alertes
- **Projection activité** : vs historique uniquement aujourd'hui
- **Managers saisissent** : option que managers remplissent pour collaborateurs
- **Pointage intelligent** : par chantier, par type travaux, géolocalisé
- **Gamification** : rendre ludique pour adoption

**Intégrations**
- SAGE automatique (vs contrôles manuels actuels)
- Planning synchronisé
- Paie direct (éliminer exports manuels)

#### 4. Gestion intérimaires intégrée

**Fonctions**
- Base unique CDI + intérimaires
- Alertes automatiques fin contrat (vs manuel Excel)
- Suivi factures/heures automatisé
- Comparaison coûts CDI vs intérimaires
- Statistiques par agence/poste
- Workflow renouvellement simplifié

**Bénéfices**
- Vision unifiée workforce
- Anticipation besoins
- Optimisation coûts
- Réduction admin (actuellement Excel lourd)

#### 5. Workflows digitaux absences/variables

**Congés payés**
- Demande en ligne (mobile/web)
- Validation manager workflow
- Synchronisation automatique Popaye + CIBTP + planning + compteurs
- Fin 4 saisies manuelles

**Tickets restaurant**
- Calcul automatique : jours travaillés - absences - NDF
- Export automatique SWILE
- Fin calcul manuel par collaborateur

**Notes de frais**
- App mobile : photo/scan tickets
- Catégorisation automatique (IA)
- Workflow validation
- Export comptable automatique
- Fin papier/mails/saisies manuelles

**Variables paie**
- Formulaire digital managers (paniers, km, GD)
- Validation workflow
- Export automatique SILAE
- Fin pochette papier + classeur rose

#### 6. Indemnités km automatisées

**Améliorations**
- Départ (Annecy/Cevins) automatique selon affectation
- Détection automatique KVE vs KVP selon véhicule affecté
- Calcul km via géolocalisation ou base chantiers
- Alertes incohérences
- Fin vérifications manuelles

#### 7. Pointage géolocalisé & mobile

**Fonctions**
- App mobile pointage entrée/sortie
- Géofencing chantiers (validation automatique présence)
- Pointage par chantier et type travaux
- Photos avancement optionnel
- Mode offline (synchronisation différée)
- Gamification (badges, challenges équipes)

**Bénéfices**
- Fiabilité présences vs déclaratif
- Traçabilité interventions
- Données pour facturation clients
- Engagement collaborateurs

#### 8. Communication & Intranet

**Fonctions**
- Intranet : news, annonces, documents
- Messagerie interne (vs WhatsApp pro)
- Trombinoscope digital
- Livret accueil digital
- Partage documents RH (RI, charte, accords)
- Calendrier événements
- FAQ/knowledge base

**Bénéfices**
- Centralisation communication
- Archivage/traçabilité
- Onboarding simplifié
- Culture d'entreprise renforcée

#### 9. Rapports étonnement & exit automatisés

**Entrée**
- Questionnaire digital J+10 et J+1 mois
- Envoi automatique + relances
- Consolidation réponses
- Analyse NPS, verbatims, thématiques
- Alertes signaux faibles

**Sortie**
- Interview exit digital
- Analyse motifs départ
- Benchmark secteur
- Actions correctives

**Bénéfices**
- Rétention améliorée (détection insatisfaction précoce)
- Compréhension turnover
- Amélioration continue processus/management

#### 10. KPIs & Reporting RH automatisés

**KPIs souhaités** (actuellement manuels)
- Effectifs : CDI, intérimaires, par site/activité
- Turnover : taux, motifs, coût
- Absentéisme : taux, motifs, tendances
- Heures : productives, improductives, supplémentaires, récup
- Coûts : masse salariale, par chantier, CDI vs intérimaires
- Recrutement : délais, sources, taux transformation
- Formation : heures, coûts, efficacité
- Satisfaction : rapports étonnement, exit, engagement

**Dashboards**
- Direction : KPIs stratégiques temps réel
- Managers : effectifs, absences, heures équipes
- RH : opérationnel (FH manquantes, tâches en retard, échéances)

---

## ✅ CE QUI EST FAISABLE

### Court terme (0-6 mois) - Quick Wins

1. ✅ **SIRH Cloud (Lucca, Factorial, PayFit, Silae SIRH)**
   - Déploiement 3-4 mois
   - Modules : congés, absences, notes de frais, documents
   - Onboarding digital basique
   - Intégration Popaye/SAGE

2. ✅ **App mobile pointage simple**
   - Géolocalisation basique
   - Pointage entrée/sortie
   - Synchronisation Popaye
   - Mode offline

3. ✅ **Automatisation calcul TR**
   - Script Python : absences Popaye + NDF → calcul TR
   - Export automatique SWILE
   - Fin calcul manuel

4. ✅ **Workflow congés digital**
   - Demande en ligne
   - Validation manager
   - Sync automatique Popaye/planning
   - Fin papier

5. ✅ **Dashboard RH basique**
   - Power BI/Tableau
   - Connexion SAGE + Popaye + Excel
   - KPIs temps réel (effectifs, absences, heures)

**ROI attendu** : 400-600h/an économisées, satisfaction +30%

### Moyen terme (6-18 mois) - Transformation

1. ✅ **SIRH complet avancé**
   - Gestion complète cycle de vie (recrutement → sortie)
   - Workflow onboarding/offboarding automatisé
   - Gestion intérimaires intégrée
   - Entretiens annuels digitalisés
   - Formation & compétences (GPEC)

2. ✅ **Pointage intelligent géolocalisé**
   - App avancée : géofencing chantiers
   - Pointage par type travaux
   - Gamification
   - Analytics productivité

3. ✅ **Notes de frais IA**
   - Scan/OCR tickets automatique
   - Catégorisation IA
   - Détection fraudes
   - Workflow validation intelligent

4. ✅ **Intégration complète paie**
   - Popaye → SIRH → SILAE automatique
   - Fin exports manuels
   - Contrôles automatisés (heures, km, paniers, GD)
   - Prévisions masse salariale

5. ✅ **Intranet & Communication**
   - Plateforme collaborative
   - Remplacement WhatsApp pro
   - Knowledge management
   - Engagement collaborateurs

6. ✅ **Rapports étonnement/exit automatisés**
   - Questionnaires digitaux
   - Analyse sentiments IA
   - Alertes RH préventives

**ROI attendu** : 1000-1500h/an, turnover -30%, engagement +40%

### Long terme (18-24 mois) - Excellence

1. ✅ **Prédictions RH (ML)**
   - Turnover prédictif
   - Absentéisme anticipé
   - Besoins recrutement
   - Performance individuelle
   - Optimisation planning

2. ✅ **GPEC prédictive**
   - Cartographie compétences automatique
   - Gap analysis IA
   - Plans formation personnalisés
   - Succession planning

3. ✅ **Workforce analytics avancé**
   - Benchmark secteur BTP
   - Optimisation coûts
   - Productivité par équipe/chantier
   - Simulations scénarios

4. ✅ **Chatbot RH**
   - Réponses automatiques questions RH
   - Self-service avancé
   - Multilingue (intérimaires)

5. ✅ **Digital workplace complet**
   - Suite collaborative intégrée
   - Mobile-first
   - IA assistante
   - Blockchain certifications

**ROI attendu** : 2000h/an, coûts -15%, attractivité +50%

---

## 🎯 PISTES RECOMMANDÉES

### Option A : SIRH Intégré Cloud (Recommandé si budget >)

**Solutions possibles**

**1. Lucca (mentionné par client)**
- ✅ Leader français SIRH
- ✅ Suite complète : congés, NDF, temps, onboarding, entretiens, organigramme
- ✅ UX excellente, mobile natif
- ✅ Intégrations : SAGE, Popaye (à vérifier), SILAE
- ✅ Éditeur français, support qualité
- 💰 ~12-/utilisateur/mois → 14-/an pour 100 pers
- 💰 Setup : 30-

**2. Factorial**
- ✅ Moderne, compétitif prix
- ✅ Modules : congés, NDF, temps, recrutement, onboarding, docs
- ✅ API ouvertes
- ✅ Croissance rapide
- 💰 ~8-/user/mois → 10-/an
- 💰 Setup : 20-

**3. PayFit (Paie + SIRH)**
- ✅ Paie intégrée (remplacement SILAE)
- ✅ Modules RH complets
- ✅ BTP ready
- ✅ Automatisation poussée
- ⚠️ Vendor lock-in paie
- 💰 ~15-/user/mois → 18-/an
- 💰 Setup : 40-

**4. Silae SIRH (extension actuelle)**
- ✅ Intégration native paie SILAE
- ✅ Pas de migration paie
- ✅ Éditeur connu
- ⚠️ UX moins moderne
- ⚠️ Modules RH moins riches
- 💰 ~10-/user/mois → 12-/an
- 💰 Setup : 25-

**Modules complémentaires à développer/intégrer**

**1. Pointage géolocalisé mobile**
- App React Native iOS/Android
- Géofencing chantiers
- Mode offline
- Sync SIRH + Popaye
- 💰 Développement : 40-
- 💰 Maintenance : /an

**2. Automatisation paie**
- Scripts intégration Popaye → SIRH → SILAE
- Contrôles automatiques (heures, km, paniers, GD)
- Calcul auto TR
- Alertes anomalies
- 💰 Développement : 25-

**3. Analytics RH avancé**
- Power BI/Tableau dashboards
- Connexions SIRH + SAGE + Popaye
- KPIs automatisés
- Prédictions ML
- 💰 Développement : 30-
- 💰 Licences BI : /an

**4. Gestion intérimaires**
- Module custom si SIRH ne gère pas nativement
- Base unifiée CDI+intérimaires
- Alertes fin contrat
- Facturation automatique
- 💰 Développement : 20-

**Investissement Total Option A**
- **Setup SIRH** : 30- (selon solution)
- **Intégrations & développements** : 115-
- **Formation** : 
- **Total initial** : 160-
- **Run annuel** : 35-/an (SIRH + maintenance + BI)

**ROI Option A**
- **Gains temps** : 1500h/an × /h = /an
- **Réduction erreurs paie** : /an
- **Optimisation intérimaires** : /an
- **Turnover réduit** : /an
- **Total gains** : 70K€/an
- **Payback** : 11 mois
- **ROI 2 ans** : + net

### Option B : Solution Légère (Budget 50-100K€)

**Approche**
- SIRH SaaS basique (Factorial, Nibelis)
- Conservation Popaye + SAGE actuels
- Développements légers automatisation
- Dashboard BI externe

**Modules**
1. **SIRH basique** : congés, NDF, documents (15K€ setup + 10K€/an)
2. **Workflow onboarding** : custom simple (10K€)
3. **App pointage** : basique sans géofencing (20K€)
4. **Automatisation TR** : script Python (3K€)
5. **Dashboard RH** : Power BI (12K€ + 2K€/an)

**Investissement Total Option B**
- **Initial** : 23K€60K€
- **Run annuel** : 12K€/an

**ROI Option B**
- **Gains temps** : 600h/an × 50€/h = 30K€/an
- **Réduction erreurs** : 40K€/an
- **Total gains** : /an
- **Payback** : 10 mois
- **ROI 2 ans** : +45K€ (ROI 75%)

⚠️ **Limites** : gains limités, silos persistent, évolution vers Option A inévitable dans 2-3 ans

### Option C : Optimisation Existant (Budget <30K€)

**Approche**
- Conservation tous outils actuels
- Scripts automatisation ponctuels
- Amélioration process manuels
- Formation équipes

**Actions**
1. **Automatisation calcul TR** : Python (3K€)
2. **Workflow onboarding** : Excel VBA + Outlook (5K€)
3. **Dashboard basique** : Excel Power Query (2K€)
4. **Formation Popaye avancé** : 3K€
5. **Process optimization** : consultant (10K€)

**Investissement Total Option C**
- **Initial** : 
- **Run annuel** : 2K€/an

**ROI Option C**
- **Gains temps** : 200h/an × 50€/h = 10K€/an
- **Payback** : 28 mois
- **ROI 2 ans** : -7K€ (ROI négatif)

⚠️ **Limites** : gains très limités, problèmes structurels non résolus, dette technique

---

## 📊 PRIORISATION ACTIONS

### 🔴 URGENT (Mois 1-3)

**1. Choix & déploiement SIRH**
- Benchmark 3-4 solutions (Lucca, Factorial, PayFit, Silae)
- POC 4 semaines
- Décision + signature
- Démarrage implémentation

**2. Workflow congés digital**
- Module SIRH congés/absences
- Formation managers + collaborateurs
- Migration soldes congés
- Abandon papier

**3. Automatisation calcul TR**
- Script extraction Popaye + NDF
- Calcul automatique
- Export SWILE
- Test 1 mois

**4. Onboarding digital basique**
- Checklist digitale SIRH
- Workflow notifications
- Formulaires en ligne nouveaux salariés
- Test sur 2-3 embauches

**ROI Quick Wins (3 mois)** : 200h économisées, satisfaction +20%

### 🟠 IMPORTANT (Mois 4-6)

**5. Gestion intérimaires intégrée**
- Module SIRH ou custom
- Migration Excel → SIRH
- Alertes fin contrat
- Statistiques automatiques

**6. Notes de frais digitales**
- Module SIRH NDF
- App mobile scan tickets
- Workflow validation
- Export comptable automatique

**7. App mobile pointage**
- Développement React Native
- Géolocalisation basique
- Intégration Popaye
- Déploiement pilote 20 utilisateurs

**8. Dashboard RH direction**
- Power BI/Tableau
- Connexion SIRH + SAGE + Popaye
- 10-15 KPIs temps réel
- Formation direction

**ROI 6 mois** : 600h/an économisées, gains process /an

### 🟢 STRUCTURANT (Mois 7-18)

**9. Intégration paie complète**
- Automatisation Popaye → SIRH → SILAE
- Contrôles automatiques (heures, km, paniers, GD)
- Prévisions masse salariale
- Élimination exports manuels

**10. Pointage intelligent avancé**
- Géofencing chantiers
- Pointage par type travaux
- Gamification
- Analytics productivité

**11. Intranet & communication**
- Plateforme collaborative (module SIRH ou externe)
- Remplacement WhatsApp pro
- Trombinoscope digital
- Knowledge base

**12. Rapports étonnement/exit**
- Questionnaires digitaux automatisés
- Analyse sentiments
- Alertes RH
- Actions correctives

**13. GPEC & compétences**
- Cartographie compétences
- Entretiens annuels digitaux
- Plans formation
- Certifications tracking (habilitations électriques, CACES)

**ROI 18 mois** : 1500h/an, turnover -30%, engagement +40%

---

## 💡 RECOMMANDATIONS CLÉS

### 1. Prioriser SIRH moderne cloud

**Pourquoi ?**
- Problème = silos multiples (15+ outils) → 1 seul SIRH résout 80%
- ROI rapide : payback 11 mois
- SaaS = pas d'infrastructure, MAJ automatiques
- Mobile natif = adoption terrain
- Intégrations standard = connexion SAGE/Popaye/SILAE

**Solution recommandée : Lucca**
- Mentionné par client (déjà intérêt)
- Leader français SIRH, références BTP
- Suite complète
- UX excellente (adoption facilitée)
- Support français qualité

### 2. Approche progressive (ne pas tout déployer d'un coup)

**Phase 1 (Mois 1-3)** : Modules critiques hauts gains
- Congés/absences (fin papier)
- Notes de frais (fin calcul manuel)
- Onboarding digital (fin 4-5 personnes à prévenir)
- Documents RH centralisés

**Phase 2 (Mois 4-6)** : Extensions
- Intérimaires
- Pointage mobile
- Dashboard RH

**Phase 3 (Mois 7-12)** : Intégration profonde
- Paie complète
- Intranet
- Rapports étonnement/exit
- GPEC

**Bénéfice** : adoption progressive, ajustements itératifs, quick wins réguliers

### 3. Impliquer utilisateurs terrain dès le début

**Champions internes**
- 2-3 managers pilotes (chefs chantier, conducteurs travaux)
- Service RH complet
- 5-10 collaborateurs volontaires

**Co-conception**
- Ateliers besoins
- Tests POC
- Feedbacks intégrés
- Formation pairs

**Bénéfice** : adoption facilitée, résistance changement limitée, solution adaptée réalités terrain

### 4. Conserver ce qui marche

**Popaye heures sup** : choix paiement/mise de côté apprécié → **à conserver**

**SILAE paie** : externalisée Only RH, fonctionne → **conserver mais automatiser intégrations**

**SAGE paie BTP** : calculs spécifiques BTP → **conserver, intégrer au SIRH**

**Bénéfice** : pas de révolution, capitaliser sur existant, risques limités

### 5. Automatiser tâches à faible valeur ajoutée

**Priorités automatisation**
1. Calcul TR (actuellement 3-4h/mois RH)
2. Relances FH (actuellement X relances manuelles/semaine)
3. Onboarding notifications (4-5 personnes/embauche)
4. Contrôles paie (heures, km, paniers - actuellement manuel pour 100 pers)
5. Exports Popaye → SILAE (actuellement 3 exports manuels/mois)

**Bénéfice** : RH focus sur valeur (recrutement, développement, relations sociales) vs admin

### 6. Mobile-first pour personnel chantier

**Réalité terrain**
- Personnel chantier rarement sur PC
- Besoin saisie rapide, simple
- Connexion parfois instable

**Solution**
- App mobile native (iOS + Android)
- Offline-first (sync quand réseau)
- UX simplifiée (gros boutons, peu d'étapes)
- Notifications push

**Modules prioritaires mobile**
- Pointage entrée/sortie
- Demande congés
- Notes de frais (photo tickets)
- Consultation bulletins paie
- Fiches heures (si managers saisissent pour équipes)

### 7. Géolocalisation avec transparence & confiance

**Attention**
- Géolocalisation = sensible (RGPD, confiance)
- Nécessite dialogue social, information claire, consentement

**Bonnes pratiques**
- Communiquer objectifs (sécurité, facturation clients, optimisation, pas surveillance)
- Géofencing chantiers uniquement (pas tracking continu)
- Données anonymisées pour analytics
- Collaborateurs accès à leurs propres données
- Gamification (aspect positif vs contrôle)

### 8. KPIs & reporting automatisés

**Problème actuel** : tout manuel, chronophage, peu exploité

**Solution**
- Connexion automatique SIRH + SAGE + Popaye
- Dashboards temps réel (rafraîchissement auto)
- Alertes proactives (FH manquantes, échéances, anomalies)

**KPIs critiques**
- Effectifs (CDI, intérimaires, par site/activité) - actuellement Excel manuel
- Absentéisme (taux, tendances, coûts) - actuellement pas calculé
- Heures sup/récup (volumes, coûts, par collaborateur) - actuellement exports Excel
- Turnover (taux, motifs, coûts recrutement) - actuellement estimations
- Coûts RH (masse salariale, coût par chantier) - actuellement compta uniquement

**Bénéfice** : pilotage RH data-driven vs ressenti, anticipation vs réaction

### 9. Change management crucial

**3 piliers**
1. **Communication** : transparence objectifs, bénéfices individuels/collectifs, roadmap
2. **Formation** : progressive (20% semaine 1, 100% mois 3), supports variés (présentiel, vidéos, FAQ), super-users relais
3. **Support** : hotline dédiée première année, FAQ enrichie, communauté utilisateurs

**Facteurs de succès**
- Sponsor direction visible
- Quick wins communiqués
- Reconnaissance early adopters
- Écoute feedbacks, ajustements

---

## 📅 PLANNING SUGGÉRÉ (18 mois)

### Mois 1-2 : Sélection & Cadrage

**Semaine 1-2 : Benchmark SIRH**
- RFI 4 éditeurs (Lucca, Factorial, PayFit, Silae)
- Grille évaluation multicritères
- Pré-sélection 2 finalistes

**Semaine 3-4 : Démos & POC**
- Démo détaillée 2h chacun
- POC 2 semaines avec données réelles
- Visite sites références BTP

**Semaine 5-6 : Décision & Contractualisation**
- Comité décision
- Négociation contrat
- Signature
- Kick-off projet

**Semaine 7-8 : Cadrage projet**
- Constitution équipe projet
- Planning détaillé
- Ateliers besoins
- Préparation données

**Livrables M1-2**
- Contrat SIRH signé
- Équipe projet constituée
- Planning projet validé
- Cahier charges détaillé

### Mois 3-6 : Déploiement Phase 1 (Quick Wins)

**Mois 3 : Setup & paramétrage**
- Installation SIRH
- Paramétrage entreprise (sites, services, organigramme)
- Migration données (collaborateurs, contrats, soldes congés)
- Intégrations techniques (SSO, annuaire)

**Mois 4 : Modules core**
- Congés/absences : paramétrage workflows, calendriers, règles
- Notes de frais : catégories, barèmes, validateurs
- Documents RH : templates, coffre-fort digital
- Onboarding : checklist, workflows, formulaires

**Mois 5 : Formation & tests**
- Formation RH (2 jours)
- Formation managers (1 jour)
- Formation collaborateurs (webinars 1h)
- Tests utilisateurs (groupe pilote 20 pers)
- Ajustements

**Mois 6 : Go-live Phase 1**
- Mise en production modules core
- Support intensif (hotline dédiée)
- Communication générale
- Mesure adoption (objectif >80% M+1)

**Livrables M3-6**
- SIRH opérationnel modules core
- 100 utilisateurs formés
- Adoption >80%
- Documentation complète

**Gains Phase 1**
- Fin papier congés/NDF
- Onboarding 4-5 pers → automatisé
- Documents centralisés
- 1ers KPIs automatiques
- **ROI : 200h/an économisées**

### Mois 7-12 : Phase 2 (Intégrations & Extensions)

**Mois 7 : Gestion temps**
- Intégration Popaye ↔ SIRH (bidirectionnelle)
- Paramétrage validation managers
- Automatisation relances FH manquantes
- Pré-remplissage GD/véhicules

**Mois 8 : Intérimaires & paie**
- Module intérimaires (custom ou SIRH natif)
- Migration Excel → SIRH
- Intégration SIRH → SILAE
- Automatisation calcul TR
- Contrôles automatiques paie

**Mois 9 : Mobile app pointage**
- Développement app React Native
- Géolocalisation basique
- Intégration SIRH + Popaye
- Tests pilote 20 utilisateurs chantier

**Mois 10 : Dashboard & analytics**
- Power BI : connexion SIRH + SAGE + Popaye
- 15 KPIs temps réel
- Dashboards direction + managers + RH
- Formation utilisateurs

**Mois 11 : Rapports étonnement/exit**
- Questionnaires digitaux (3 moments : J+10, J+30, sortie)
- Workflow automatisé
- Analyse réponses
- Alertes RH

**Mois 12 : Intranet & communication**
- Déploiement module intranet SIRH
- Migration documents/annonces
- Formation utilisateurs
- Remplacement progressif WhatsApp

**Livrables M7-12**
- Intégrations Popaye + SILAE automatiques
- Intérimaires gérés dans SIRH
- App mobile pointage déployée
- Dashboards opérationnels
- Rapports étonnement/exit actifs
- Intranet opérationnel

**Gains Phase 2**
- Fin exports manuels Popaye
- Calcul TR automatique (3-4h/mois → 0)
- Contrôles paie automatisés
- Pointage géolocalisé
- KPIs temps réel
- **ROI cumulé : 800h/an**

### Mois 13-18 : Phase 3 (Optimisation & Innovation)

**Mois 13-14 : Pointage intelligent avancé**
- Géofencing chantiers
- Pointage par type travaux
- Gamification (badges, challenges)
- Analytics productivité

**Mois 15 : GPEC & compétences**
- Cartographie compétences
- Référentiels métiers BTP
- Entretiens annuels digitaux
- Plans formation automatisés
- Tracking certifications (habilitations, CACES)

**Mois 16 : Notes de frais IA**
- OCR automatique tickets
- Catégorisation IA
- Détection anomalies/fraudes
- Workflow validation intelligent

**Mois 17 : ML prédictif**
- Modèle turnover prédictif
- Modèle absentéisme
- Prévisions besoins recrutement
- Optimisation planning

**Mois 18 : Bilan & feuille de route**
- Mesure ROI complet
- Benchmark secteur BTP
- Satisfaction utilisateurs
- Roadmap 12 mois suivants

**Livrables M13-18**
- Pointage intelligent opérationnel
- GPEC complète
- NDF IA actives
- 3 modèles ML en production
- Bilan complet projet

**Gains Phase 3**
- Productivité +20% via pointage intelligent
- GPEC : compétences pilotées vs estimations
- NDF  automatisées
- Prédictions : turnover -30%, absentéisme -20%
- **ROI cumulé : 1500h/an +  turnover évité**

---

## 💰 BUDGETS DÉTAILLÉS

### Option A : SIRH Lucca (Recommandé)

**Investissement Initial (Mois 1-6)**

| Poste | Détail | Montant |
|-------|--------|---------|
| **Licences SIRH** | 100 users × 12€/mois × 6 mois | 7,2K€ |
| **Setup Lucca** | Forfait implémentation | 35K€ |
| **Formation** | RH (2j) + Managers (1j) + Collab (webinars) | 8K€ |
| **Intégrations** | Popaye, SAGE, SILAE (connecteurs) | 15K€ |
| **Accompagnement** | Consultant 20j | 20K€ |
| **Contingence 10%** | Imprévus | 8,5K€ |
| **TOTAL PHASE 1** | | 94K€ |

**Développements Phase 2 (Mois 7-12)**

| Poste | Détail | Montant |
|-------|--------|---------|
| **App mobile pointage** | React Native iOS + Android | 45K€ |
| **Module intérimaires** | Custom si Lucca insuffisant | 20K€ |
| **Automatisation paie** | Scripts intégration + contrôles | 25K€ |
| **Dashboard BI** | Power BI : dev + licences | 20K€ |
| **Intranet custom** | Si module Lucca insuffisant | 15K€ |
| **Contingence 10%** | Imprévus | 13,5K€ |
| **TOTAL PHASE 2** | | 137K€ |

**Innovations Phase 3 (Mois 13-18)**

| Poste | Détail | Montant |
|-------|--------|---------|
| **Géofencing avancé** | Algorithmes + tests | 15K€ |
| **ML prédictif** | 3 modèles (turnover, absentéisme, recrutement) | 30K€ |
| **OCR/IA NDF** | Intégration APIs IA | 10K€ |
| **GPEC avancée** | Compétences + certifications | 15K€ |
| **Contingence 10%** | Imprévus | 7K€ |
| **TOTAL PHASE 3** | | 77K€ |

**Coûts Récurrents (annuels)**

| Poste | Détail | Montant/an |
|-------|--------|------------|
| **Licences SIRH** | 100 users × 12€/mois × 12 | 14,4K€ |
| **Power BI** | 10 licences Pro | 1K€ |
| **Maintenance app mobile** | Évolutions + support | 6K€ |
| **Support Lucca** | Premium (si souhaité) | 3K€ |
| **Hébergement données** | Si cloud privé | 1K€ |
| **TOTAL RÉCURRENT** | | 25,4K€/an |

**INVESTISSEMENT TOTAL 18 MOIS : 308K€**
**RUN ANNUEL : 25,4K€/an**

### ROI Détaillé Option A (sur 2 ans)

**Gains Temps (valorisés à 50€/h)**

| Gain | Avant | Après | Économie h/an | Valeur €/an |
|------|-------|-------|---------------|-------------|
| Calcul TR manuel | 4h/mois | 0.5h/mois | 42h | 2,1K€ |
| Onboarding (4-5 pers) | 10h/embauche × 25 | 2h/embauche × 25 | 200h | 10K€ |
| Offboarding | 6h/sortie × 15 | 1h/sortie × 15 | 75h | 3,8K€ |
| Relances FH | 5h/semaine | 0.5h/semaine | 234h | 11,7K€ |
| Contrôles paie | 12h/mois | 2h/mois | 120h | 6K€ |
| Exports Popaye/SILAE | 3h/mois | 0.5h/mois | 30h | 1,5K€ |
| Gestion intérimaires Excel | 6h/mois | 1h/mois | 60h | 3K€ |
| Congés (4 saisies → 1) | 15min × 300 demandes | 2min × 300 | 65h | 3,3K€ |
| NDF manuelles | 30min × 400 NDF | 5min × 400 | 167h | 8,4K€ |
| Tableaux Excel manuels | 10h/mois | 1h/mois | 108h | 5,4K€ |
| Recherche infos (silos) | 30min/jour × 2 pers | 5min/jour × 2 pers | 417h | 20,9K€ |
| Reporting RH manuel | 8h/mois | 1h/mois | 84h | 4,2K€ |
| **TOTAL GAINS TEMPS** | | | **1602h/an** | **80,3K€/an** |

**Gains Qualité**

| Gain | Estimation | Valeur €/an |
|------|------------|-------------|
| Réduction erreurs paie (retards, oublis, calculs) | 15 erreurs/an × 2K€ | 30K€ |
| Réduction litiges congés (traçabilité) | 5 litiges/an × 1K€ | 5K€ |
| Optimisation intérimaires (alertes fin contrat, comparaison coûts) | -5% coûts intérimaires (800K€) | 40K€ |
| Turnover réduit (satisfaction, rapports étonnement précoces) | -5 départs/an × 8K€ coût recrutement | 40K€ |
| Absentéisme réduit (suivi, alertes précoces) | -2% absentéisme (base 100 pers, 3% actuel) | 35K€ |
| Conformité améliorée (DPAE, médecine, CIBTP auto) | Risques évités | 10K€ |
| **TOTAL GAINS QUALITÉ** | | 160K€/an |

**Gains Stratégiques**

| Gain | Estimation | Valeur €/an |
|------|------------|-------------|
| Productivité +5% (pointage, planning optimisé) | 100 pers × 60K€ coût moyen × 5% | 300K€ |
| Engagement collaborateurs +20% (outils modernes, transparence) | Productivité indirecte | 50K€ |
| Attractivité employeur (recrutement facilité) | Délais recrutement -30% | 20K€ |
| Image innovation (différenciation marché) | Intangible mais réel | - |
| **TOTAL GAINS STRATÉGIQUES** | | 370K€/an |

**TOTAL GAINS ANNUELS : 610,3K€/an**

**ROI 2 ans**
- **Investissement 18 mois** : 308K€
- **Run 18 mois** : 25,4K€ × 1.5 = 38,1K€
- **Total coûts 2 ans** : 346,1K€
- **Gains 2 ans** : 610,3K€ × 2 = 1 220,6K€
- **Net gain 2 ans** : +874,5K€
- **ROI** : 253%
- **Payback** : 8 mois

### Comparaison 3 Options (2 ans)

| Critère | Option C<br/>Light | Option B<br/>Moyen | Option A<br/>Complet |
|---------|---------------------|---------------------|----------------------|
| **Investissement initial** | 30K€ | 60K€ | 94K€ |
| **Run 2 ans** | 10K€ | 35K€ | 51K€ |
| **TOTAL COÛTS 2 ANS** | 40K€ | 95K€ | 145K€ |
| | | | |
| **Gains temps (h/an)** | 200h | 600h | 1602h |
| **Gains temps (€/an)** | 10K€ | 30K€ | 80,3K€ |
| **Gains qualité (€/an)** | 5K€ | 40K€ | 160K€ |
| **Gains stratégiques (€/an)** | - |  |  |
| **TOTAL GAINS/AN** | 15K€ | 120K€ | 610,3K€ |
| **GAINS 2 ANS** | - | 50K€ | 370K€ |
| | | | |
| **NET 2 ANS** | -10K€ | +145K€ | +1 075,6K€ |
| **ROI %** | 6% | 124% | 175% |
| **Payback** | 23 mois | 11 mois | 8 mois |
| | | | |
| **Silos éliminés** | ❌ 0% | ⚠️ 50% | ✅ 90% |
| **Processus automatisés** | ⚠️ 20% | ⚠️ 50% | ✅ 80% |
| **Mobile-ready** | ❌ Non | ⚠️ Partiel | ✅ Oui |
| **Scalabilité** | ❌ Faible | ⚠️ Moyenne | ✅ Excellente |
| **Satisfaction RH** | ⚠️ +10% | ⚠️ +30% | ✅ +60% |
| **Adoption terrain** | ⚠️ 50% | ⚠️ 70% | ✅ 90% |

**Recommandation claire : Option A**
- ROI exceptionnel (175% sur 2 ans)
- Seule option résolvant vraiment les problèmes structurels
- Scalable pour croissance future
- Différenciation employeur (recrutement/rétention)

---

## 📈 KPIs DE SUCCÈS

### Indicateurs Opérationnels

**Gestion Temps**
- Taux FH saisies à J+2 : X% → **>95%** (cible)
- Temps moyen validation FH : X jours → **<1 jour**
- Taux anomalies paie : X% → **<2%**
- Temps traitement paie : 3-4 jours → **1 jour**

**Congés & Absences**
- Temps traitement demande congés : 2 jours → **<4 heures**
- Taux dématérialisation  → **100%**
- Erreurs planning : X/mois → **<2/mois**
- Satisfaction processus : - → **>4.5/5**

**Notes de Frais**
- Temps traitement NDF : 5 jours → **<48h**
- Taux scan automatique  → **>80%**
- Erreurs catégorisation : X% → **<5%**
- Satisfaction : - → **>4/5**

**Onboarding/Offboarding**
- Temps onboarding : 10h → **2h**
- Personnes impliquées : 4-5 → **1 (auto)**
- Taux tâches complètes J+7 : X% → **100%**
- Satisfaction nouveaux : - → **>4.5/5**

### Indicateurs Qualité

**Paie**
- Erreurs paie : 15/an → **<3/an**
- Bulletins conformes 1ère édition : X% → **>98%**
- Délai traitement anomalie : X jours → **<1 jour**
- Litiges : 10/an → **<2/an**

**Conformité**
- DPAE dans les délais : X% → **100%**
- Visite médicale à jour : X% → **100%**
- Certifications à jour (habilitations, CACES) : X% → **100%**
- Documents contrats complets : X% → **100%**

**Données**
- Qualité données RH : X% → **>98%**
- Doublons : X → **0**
- Données manquantes : X% → **<1%**
- Fraîcheur données : X jours → **Temps réel**

### Indicateurs Processus

**Temps de Traitement**
- Onboarding complet : 2-3 semaines → **3-5 jours**
- Offboarding : 1 semaine → **2 jours**
- Demande congés : 2 jours → **4 heures**
- NDF : 5 jours → **48h**
- Fiche heures validation : 3 jours → **<24h**

**Automatisation**
- Taux processus automatisés  → **80%**
- Interventions manuelles/mois : 100 → **<20**
- Relances automatiques  → **100%**
- Exports automatiques  → **90%**

**Adoption**
- Taux utilisation SIRH : - → **>90%**
- Taux app mobile : - → **>80%** (personnel chantier)
- Satisfaction outils : - → **>4/5**
- Taux formation complétée : - → **100%**

### Indicateurs Business

**Effectifs & Coûts**
- Coût admin RH/employé : X€ → **-30%**
- Temps RH admin vs stratégique : 70/30 → **40/60**
- Masse salariale/CA : X% → **Optimisée -2%**
- Coût recrutement : X€ → **-25%**

**Turnover & Rétention**
- Turnover global : X% → **-30%**
- Turnover <1 an : X% → **-50%**
- Coût turnover : X€/an → **-**
- Taux rétention talents : X% → **>90%**

**Absentéisme**
- Taux absentéisme  → **2%**
- Coût absentéisme : X€ → **-**
- Détection précoce  → **80%**
- Actions correctives : 0 → **>10/an**

**Productivité**
- Heures productives/total : X% → **+5%**
- Taux utilisation capacité : X% → **+10%**
- Coût heure productive : X€ → **-8%**
- Revenus/employé : X€ → **+15%**

### Indicateurs Stratégiques

**Engagement & Satisfaction**
- Engagement collaborateurs : - → **>4/5**
- NPS employés : - → **>40**
- Taux rapports étonnement positifs : - → **>80%**
- Taux recommandation entreprise : - → **>70%**

**Recrutement**
- Délai moyen recrutement : X jours → **-30%**
- Qualité candidats : - → **+25%**
- Taux acceptation offres : X% → **+20%**
- Coût par embauche : X€ → **-25%**

**Compétences**
- Taux collaborateurs avec plan formation  → **100%**
- Heures formation/employé/an : Xh → **+50%**
- Taux certifications à jour : X% → **100%**
- Gap compétences identifiés : - → **100%**

**Innovation RH**
- Nouveaux services RH lancés : 0 → **>5**
- Benchmark secteur BTP : - → **Top 10%**
- Awards RH : 0 → **>1**
- Notoriété employeur : - → **+40%**

---

## 🔒 RISQUES & MITIGATION

### Risques Techniques

**1. Intégrations SIRH ↔ SAGE/Popaye/SILAE complexes**
- **Risque** : Connecteurs non disponibles ou APIs limitées
- **Impact** : Saisies doubles persistent, ROI réduit
- **Probabilité** : Moyenne
- **Mitigation** :
  - Vérifier connecteurs natifs phase sélection
  - Budget développement connecteurs custom
  - POC technique avant signature
- **Backup** : Développement ETL custom (15-)

**2. Qualité données migration**
- **Risque** : Données RH actuelles incomplètes/incohérentes
- **Impact** : Migration longue, erreurs post go-live
- **Probabilité** : Élevée (données éparpillées Excel)
- **Mitigation** :
  - Audit données avant migration
  - Nettoyage pré-migration (2-3 mois)
  - Tests migration exhaustifs
  - Rollback plan
- **Backup** : Migration progressive par lots

**3. Performance app mobile terrain**
- **Risque** : Connexion instable chantiers → frustration
- **Impact** : Adoption faible, retour papier
- **Probabilité** : Moyenne
- **Mitigation** :
  - Mode offline obligatoire
  - Sync intelligente (WiFi prioritaire)
  - Tests terrain avant go-live
  - Formation utilisateurs
- **Backup** : Version web progressive app (PWA) en complément

**4. RGPD & sécurité données**
- **Risque** : Géolocalisation, données sensibles RH
- **Impact** : Non-conformité, amendes, perte confiance
- **Probabilité** : Faible mais impact critique
- **Mitigation** :
  - Audit RGPD avant déploiement
  - DPO impliqué dès conception
  - Consentements explicites
  - Anonymisation analytics
  - Hébergement France/UE
  - Certification ISO 27001 éditeur
- **Backup** : Suppression fonctions sensibles si nécessaire

### Risques Business

**5. Adoption utilisateurs terrain insuffisante**
- **Risque** : Personnel chantier résiste, continue papier/Excel
- **Impact** : ROI non atteint, double process
- **Probabilité** : Moyenne-Élevée
- **Mitigation** :
  - UX mobile excellente (tests utilisateurs)
  - Formation terrain dédiée (1/2 journée sur chantier)
  - Champions internes (chefs chantier pilotes)
  - Gamification (défis équipes)
  - Quick wins communiqués
  - Support réactif (hotline)
- **Backup** : Phase pilote prolongée, ajustements avant généralisation

**6. ROI surestimé**
- **Risque** : Gains temps théoriques vs réels divergent
- **Impact** : Désillusion direction, budget futur réduit
- **Probabilité** : Moyenne
- **Mitigation** :
  - Hypothèses conservatrices (présentation ci-dessus)
  - Mesure avant/après systématique
  - KPIs suivis mensuellement
  - Ajustements itératifs processus
- **Backup** : Élargir périmètre bénéfices (qualité, stratégique)

**7. Budget dépassé**
- **Risque** : Développements custom plus longs que prévu
- **Impact** : Projet arrêté ou qualité réduite
- **Probabilité** : Moyenne
- **Mitigation** :
  - Budget contingence 10% (inclus ci-dessus)
  - Priorités claires (must-have vs nice-to-have)
  - Jalons validation budget avant phase suivante
  - Forfaits vs régie pour dev custom
- **Backup** : Arrêt projet si dépassement >20%, revue scope

### Risques Organisationnels

**8. Sponsor direction désengagé**
- **Risque** : Priorités changent, support faiblit
- **Impact** : Projet ralenti ou abandonné
- **Probabilité** : Faible-Moyenne
- **Mitigation** :
  - Sponsor exécutif identifié dès départ
  - Comité pilotage mensuel (CODIR)
  - Communication gains régulière
  - Quick wins visibles mois 1-3
- **Backup** : Escalade COMEX si désengagement

**9. Équipe RH débordée (projet + run)**
- **Risque** : Projet accapare RH, run délaissé
- **Impact** : Tensions, retards projet
- **Probabilité** : Élevée
- **Mitigation** :
  - Équipe projet dédiée (1 ETP RH minimum)
  - Externalisation setup (intégrateur SIRH)
  - Étalement déploiement (18 mois vs big-bang)
  - Support externe première année
- **Backup** : Recrutement CDD chef de projet RH

**10. Résistance managers (charge perçue)**
- **Risque** : Managers voient outils comme contrainte vs aide
- **Impact** : Validation retards, qualité saisies faible
- **Probabilité** : Moyenne
- **Mitigation** :
  - Impliquer managers dès conception
  - Bénéfices clairs pour eux (vision équipe, alertes, gain temps)
  - Formation dédiée (1 jour)
  - Support premium managers (hotline prioritaire)
  - Reconnaissance early adopters
- **Backup** : Simplifier workflows si trop complexes

### Risques Sociaux

**11. Dialogue social tendu (géolocalisation, contrôle)**
- **Risque** : CSE/représentants perçoivent surveillance
- **Impact** : Blocage, climat social dégradé
- **Probabilité** : Moyenne
- **Mitigation** :
  - Information CSE dès phase projet
  - Consultation avant déploiement fonctions sensibles
  - Communication transparente objectifs (sécurité, facturation, optimisation vs contrôle)
  - Données anonymisées analytics
  - Collaborateurs accès leurs propres données
- **Backup** : Retrait géolocalisation si blocage, déploiement autres modules

**12. Turnover équipe RH pendant projet**
- **Risque** : Départ chef projet RH ou responsable paie
- **Impact** : Perte connaissance, retards
- **Probabilité** : Faible-Moyenne
- **Mitigation** :
  - Documentation exhaustive
  - Binômes sur rôles critiques
  - Knowledge transfer continu
  - Rétention (intéressement projet)
- **Backup** : Intégrateur externe prend relais temporaire

---

## ✅ CONCLUSION & RECOMMANDATION

### Synthèse Situation Actuelle

**Problèmes Critiques**
1. **15+ outils/tableaux non connectés** → silos, saisies multiples, erreurs
2. **Processus 100% manuels** → paie (4j/mois), onboarding (10h), calcul TR (3-4h), relances FH
3. **Aucune traçabilité temps réel** → impossible piloter, anticiper
4. **Intérimaires fragmentés** → Excel isolé, pas d'alertes, coûts non optimisés
5. **Papier persistant** → congés, contrats, classements
6. **Pas de KPIs automatisés** → pilotage au doigt mouillé
7. **Communication dispersée** → WhatsApp, mails, pas d'intranet

**Conséquences Business**
- Temps RH admin (70%) vs stratégique (30%) → **doit être inversé**
- Turnover élevé (pas mesuré précisément) → coûts recrutement/formation
- Satisfaction collaborateurs moyenne → recrutement difficile
- Productivité sous-optimale → heures improductives non mesurées
- Risques conformité → DPAE, médecine, certifications non systématiques

### Recommandation Principale

**👉 OPTION A - SIRH LUCCA + Développements Custom**

**Pourquoi Lucca spécifiquement ?**
1. ✅ **Mentionné par client** → intérêt déjà exprimé, adhésion facilitée
2. ✅ **Leader français SIRH** → 6000+ clients, références BTP solides
3. ✅ **Suite complète** : congés, NDF, temps, onboarding, docs, entretiens, organigramme, paie (via partenaires)
4. ✅ **UX excellente** → adoption facilitée, mobile natif iOS/Android
5. ✅ **Intégrations** : SAGE, SILAE, Popaye (à vérifier), 100+ connecteurs
6. ✅ **Support français** → réactif, accompagnement qualité
7. ✅ **Scalable** → croissance entreprise supportée
8. ✅ **API ouvertes** → développements custom possibles

**Pourquoi pas alternatives ?**

*PayFit* :
- ✅ Paie intégrée (vs SILAE externalisée)
- ⚠️ Vendor lock-in paie (changement SILAE = rupture relation Only RH)
- ⚠️ Modules RH moins riches que Lucca

*Factorial* :
- ✅ Prix compétitif (-30% vs Lucca)
- ⚠️ Moins mature, références BTP limitées
- ⚠️ Support moins premium

*Silae SIRH* :
- ✅ Intégration native paie SILAE
- ⚠️ UX moins moderne
- ⚠️ Modules RH moins complets

**→ Lucca = meilleur équilibre fonctionnalités / UX / support / prix**

### Modules Complémentaires Obligatoires

**1. App mobile pointage géolocalisé** ()
- Indispensable personnel chantier (rarement sur PC)
- Géofencing chantiers → fiabilité présences
- Mode offline → fonctionne partout
- Gamification → adoption

**2. Automatisation paie complète** ()
- Éliminer exports manuels Popaye → SILAE
- Contrôles automatiques (heures, km, paniers, GD)
- Calcul TR automatique
- Fin 4 jours/mois préparation paie → 1 jour

**3. Dashboard RH Power BI** ()
- KPIs temps réel (vs manuels actuellement)
- Direction : effectifs, coûts, turnover, productivité
- Managers : équipes, absences, heures
- RH : opérationnel (FH manquantes, tâches, échéances)

**4. Module intérimaires** ()
- Si Lucca natif insuffisant
- Base unifiée CDI + intérimaires
- Alertes fin contrat
- Optimisation coûts

### Investissement & ROI Récapitulatif

**Coûts**
- Phase 1 (M1-6) : 
- Phase 2 (M7-12) : 
- Phase 3 (M13-18) : 
- Run 18 mois : 55.
- **TOTAL 18 MOIS : 384.**

**Gains annuels**
- Temps : 1602h ×  = /an
- Qualité : /an
- Stratégique : /an
- **TOTAL : /an**

**ROI**
- Gains 2 ans : 
- Net 2 ans : **+725.**
- ROI : **189%**
- Payback : **8 mois**

### Facteurs Clés de Succès

**1. Sponsor direction visible & impliqué**
- CODIR membre sponsor exécutif
- Comité pilotage mensuel
- Communication gains régulière

**2. Équipe projet dédiée**
- Chef de projet RH 1 ETP
- Responsable paie 50%
- IT 30%
- Managers pilotes (3)
- Collaborateurs pilotes (10)

**3. Change management intensif**
- Communication transparente dès J1
- Formation progressive (RH → managers → collaborateurs)
- Support réactif première année (hotline)
- Champions internes (early adopters)
- Quick wins communiqués

**4. Approche progressive**
- Phase 1 : modules core quick wins (congés, NDF, onboarding)
- Phase 2 : intégrations profondes (paie, intérimaires, mobile)
- Phase 3 : innovations (ML, IA, GPEC avancée)
- **Pas de big-bang** → risques maîtrisés

**5. Mesure ROI continue**
- KPIs avant/après systématiques
- Reporting mensuel comité pilotage
- Ajustements itératifs
- Satisfaction mesurée trimestriellement

### Prochaines Étapes Immédiates

**Semaine 1-2 : Validation Direction**
- Présentation plan à CODIR
- Validation budget ( sur 18 mois)
- Désignation sponsor exécutif
- Go/No-Go global

**Semaine 3-6 : Sélection SIRH**
- RFI 4 éditeurs (Lucca priorité, Factorial, PayFit, Silae backup)
- Démos 2h chacun
- POC 2 semaines Lucca avec données réelles
- Visite 2 références BTP

**Semaine 7-8 : Contractualisation**
- Négociation contrat Lucca
- Validation budget développements custom
- Signature
- Kick-off projet

**Mois 3 : Démarrage**
- Constitution équipe projet
- Ateliers besoins détaillés
- Préparation données (nettoyage Excel)
- Planning détaillé 18 mois

**Objectif M6 : Go-live Phase 1**
- Modules core opérationnels (congés, NDF, onboarding, docs)
- 100 utilisateurs formés
- Adoption >80%
- Gains temps mesurés : 200h/an

---

## 📞 ANNEXES

### Checklist Sélection SIRH

**Fonctionnalités Must-Have**
- ☐ Congés/absences workflow digital
- ☐ Notes de frais mobile (scan tickets)
- ☐ Onboarding/offboarding automatisé
- ☐ Documents RH centralisés (coffre-fort)
- ☐ Organigramme dynamique
- ☐ Mobile app native iOS + Android
- ☐ Mode offline
- ☐ Intégrations : SAGE Paie, SILAE, Popaye
- ☐ API ouvertes développements custom
- ☐ Reporting & analytics
- ☐ Hébergement France/UE (RGPD)

**Fonctionnalités Nice-to-Have**
- ☐ Gestion intérimaires native
- ☐ Pointage géolocalisé
- ☐ Entretiens annuels digitaux
- ☐ GPEC & compétences
- ☐ Formation & certifications
- ☐ Recrutement ATS
- ☐ Intranet/communication
- ☐ Gamification
- ☐ IA/ML prédictif

**Critères Évaluation Éditeur**
- ☐ Références BTP (>5 clients secteur)
- ☐ Santé financière éditeur
- ☐ Roadmap produit (innovations)
- ☐ Support français qualité (SLA <4h)
- ☐ Formation incluse
- ☐ Communauté utilisateurs active
- ☐ Certifications (ISO 27001, HDS si santé)
- ☐ Transparence prix (pas de coûts cachés)

### Grille Évaluation Finale

| Critère | Poids | Lucca | Factorial | PayFit | Silae |
|---------|-------|-------|-----------|---------|-------|
| **Fonctionnalités** | 30% | | | | |
| **UX/Adoption** | 20% | | | | |
| **Intégrations** | 15% | | | | |
| **Support** | 10% | | | | |
| **Prix** | 10% | | | | |
| **Références BTP** | 10% | | | | |
| **Scalabilité** | 5% | | | | |
| **TOTAL /100** | | | | | |

*(À remplir après démos/POC)*

### Contacts Projet

**Équipe Duret Electricité**
- Sponsor exécutif : [À définir - Membre CODIR]
- Chef de projet RH : [À définir]
- Responsable paie : [À définir]
- IT référent : [À définir]

**Fournisseurs Potentiels**
- Lucca : [Contact commercial]
- Factorial : [Contact commercial]
- PayFit : [Contact commercial]
- Silae : [Contact commercial - déjà partenaire paie]

**Support Actuel**
- Only RH (Virginie Dimier) : paie externalisée - pr@solution-logique.fr, jordan@solution-logique.fr

---

**📅 Date prochaine revue** : À définir après validation direction

**🔄 Version document** : v1.0 - Novembre 2025

**📧 Contact auditeur** : Pour questions/précisions sur ce plan d'action
