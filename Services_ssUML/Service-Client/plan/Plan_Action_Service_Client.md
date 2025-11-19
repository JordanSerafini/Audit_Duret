# 📋 PLAN D'ACTION - Service Client & Relation Client
**Entreprise** : Duret Électricité - Annecy
**Date audit** : Novembre 2025
**Auditeur** : Consultant IT & Data BI/ML

---

## 🔍 RÉSUMÉ DE L'AUDIT

### Situation actuelle

**Effectifs**
- 1 Assistante relation client principale
- Équipe petits travaux (gérée par l'assistante)
- Interface avec techniciens SAV

**Outils & Systèmes actuels**
- **MDE ERP** : création chantiers, gestion affaires
- **SAGE** : devis, clients
- **Outlook** : agenda, prise de RDV
- **Excel** : classement/archivage
- **Téléphone** : communication techniciens
- **Mails** : ~50/jour
- **Post-it** : suivi appels (!!)

**Processus actuels**

*Réception appel client :*
1. Décrochage téléphone
2. Note sur post-it
3. Pas de système de tickets
4. Traitement sous 1-2 jours
5. Aucune traçabilité

*Prise de RDV petits travaux :*
1. Client appelle
2. Consultation agenda Outlook manuellement
3. Saisie RDV
4. Appel technicien pour confirmer
5. Mail client si dernière minute
6. Aucune synchronisation automatique

*Création chantier :*
1. Informations client par téléphone/mail
2. Saisie MDE ERP
3. Saisie SAGE (double saisie !)
4. Devis fait sur SAGE → enlever du logiciel → mettre dossier partagé
5. Ajout fichiers complémentaires manuellement

*Relance clients :*
1. Excel suivi
2. Relances individuelles manuelles
3. Pas de rappel automatique

*Questionnaire satisfaction :*
1. Mis en place
2. Pas automatisé
3. Pas de relances systématiques

### Points de souffrance identifiés

#### 1. Pas de système de ticketing / CRM

**Problème** : Post-it pour noter demandes clients

**Conséquences**
- Aucune traçabilité appels
- Risque d'oubli
- Impossible de mesurer volume réel
- Pas d'historique client centralisé
- Impossible de prioriser
- Pas de SLA

#### 2. Volume mails important non géré

**Problème** : ~50 mails/jour (demandes clients + modifications + inter-services)

**Conséquences**
- Rien d'automatisé
- Traitement manuel chronophage
- Risque de perte d'information
- Délai de réponse variable (1-2j)
- Pas de templates
- Pas de tri automatique

#### 3. Double saisie ERP/SAGE

**Problème** : Nouveau client → 2 bases différentes

**Conséquences**
- Temps perdu
- Risque incohérence données
- Frustration
- Erreurs de saisie

**Workflow aberrant** :
- Devis fait sur SAGE
- Enlever du logiciel
- Mettre dans dossier partagé
- Ajout fichiers complémentaires manuel
- 3-4 manipulations vs 1

#### 4. Planning prise de RDV archaïque

**Problème** : Planning Gaétan (technicien) = tableau Excel client → mail réponse → attente → re-saisir

**Conséquences**
- Temps perdu considérable
- 4-5 étapes vs 1
- Client attend
- Pas de vision disponibilités temps réel
- Consultation manuelle si dernière minute (appel)

#### 5. Pas de suivi appels / traçabilité

**Problème** : Volonté traçabilité exprimée, actuellement rien

**Conséquences**
- Impossible de savoir qui a appelé, quand, pourquoi
- Pas d'historique client
- Difficile de reprendre un dossier
- Pas de mesure performance (temps réponse, volume, etc.)

#### 6. Délai de rappel clients SAV insuffisant

**Problème** : Clients tous les jours OK, SAV pas suffisant

**Conséquences**
- Clients SAV frustrés
- Pas de relance automatique
- Dépend de la mémoire de l'assistante
- Image dégradée

#### 7. Suivi demandes techniciens défaillant

**Problème** : Technicien dit "cliente demande devis sur X" → rien pour tracer

**Conséquences**
- Oublis
- Client redemande
- Frustration technicien ET client
- Opportunités commerciales perdues

#### 8. Bon d'intervention papier/téléphone

**Problème** : Actuellement via téléphone, pas de version digitale

**Conséquences**
- Pas de traçabilité
- Impossibilité d'annexer photos
- Signature papier
- Classement manuel

#### 9. Questionnaire satisfaction non systématisé

**Problème** : Mis en place mais pas automatisé

**Conséquences**
- Pas de relances
- Taux de réponse faible
- Pas d'analyse automatique
- Impossible de piloter satisfaction

#### 10. Centralisation information défaillante

**Problème** : Informations éparpillées (ERP, SAGE, Outlook, Excel, Post-it, téléphone)

**Conséquences**
- Temps de recherche considérable
- Informations perdues
- Incohérences
- Impossible d'avoir vue 360° client

### Besoins exprimés (priorités)

#### 1. CRM / Système de ticketing

**Fonctions attendues**
- Création ticket automatique par canal (téléphone, mail, portail)
- Historique client centralisé
- Suivi statut demandes (ouvert, en cours, résolu)
- SLA et alertes
- Traçabilité complète
- Recherche rapide
- Statistiques (volume, délai, type demandes)

**Bénéfices**
- Fin post-it
- Traçabilité totale
- Priorisation intelligente
- Mesure performance
- Aucune demande oubliée

#### 2. Système de relances automatiques

**Fonctions attendues**
- Pop-up rappels
- Relances mails automatiques (devis, satisfaction, SAV)
- Workflow paramétrable
- Pas besoin de résumé mail journalier manuel

**Bénéfices**
- Gain temps considérable
- Aucun oubli
- Clients relancés systématiquement
- Image professionnelle

#### 3. Planning partagé intelligent

**Fonctions attendues**
- Planning techniciens en temps réel
- Consultation disponibilités instantanée
- Prise de RDV directe (vs consultation Excel + mail + attente)
- Synchronisation automatique
- Notifications techniciens
- Mode en ligne pour clients (portail)

**Bénéfices**
- Automatisation planning Gaétan (tableau Excel → mail → attente → re-saisir = 5 étapes → 1 étape)
- Temps réel
- Client servi immédiatement
- Optimisation tournées

**ROI** : 2h/jour économisées (prise RDV + relances) × 220j = 440h/an × 50€ = 22K€/an

#### 4. Portail client en ligne

**Fonctions attendues**
- Prise de RDV en ligne (consultation créneaux disponibles)
- Suivi interventions
- Historique
- Documents (devis, factures, rapports)
- Demande de devis
- Questionnaire satisfaction

**Bénéfices**
- Disponibilité 24/7
- Client autonome
- Réduction appels entrants (-30%)
- Image moderne
- Satisfaction client +40%

#### 5. Unification bases clients (ERP ↔ SAGE)

**Besoin** : 1 seule base client vs 2 actuellement

**Solution** :
- Synchronisation bidirectionnelle automatique
- Ou migration vers outil unique (CRM moderne)

**Bénéfices**
- Fin double saisie
- Cohérence données
- Gain temps : 30min/nouveau client → 5min
- ~50 nouveaux clients/an → 20h économisées

#### 6. Gestion documentaire centralisée

**Problème actuel** : Devis SAGE → enlever logiciel → dossier partagé → ajout fichiers manuel

**Solution** :
- GED (Gestion Électronique Documents) intégrée CRM/ERP
- Stockage automatique avec indexation
- Accès rapide
- Versionning

**Bénéfices**
- Fin manipulations manuelles (3-4 actions → 1)
- Recherche instantanée
- Pas de perte documents
- Collaboratif

#### 7. Bon d'intervention digital mobile

**Fonctions attendues**
- App mobile technicien
- Génération bon intervention
- Photos avant/après
- Signature électronique client
- Synchronisation automatique CRM/ERP

**Bénéfices**
- Traçabilité totale
- Fin papier
- Photos géolocalisées/datées
- Validation client immédiate
- Facturation accélérée

#### 8. Automatisation satisfaction client

**Fonctions attendues**
- Envoi automatique questionnaire post-intervention (J+2)
- Relances J+7 si pas de réponse
- Consolidation résultats
- Analyse NPS automatique
- Alertes signaux faibles (<3/5)

**Bénéfices**
- Taux de réponse × 3
- Détection insatisfaction précoce
- Actions correctives rapides
- Pilotage satisfaction temps réel

#### 9. Templates mails & réponses automatiques

**Fonctions attendues**
- Bibliothèque templates par type demande
- Insertion rapide (1 clic)
- Personnalisation automatique (nom, réf, etc.)
- Réponses automatiques hors horaires

**Bénéfices**
- Gain temps : 50 mails/j × 2min économisées = 100min/j = 367h/an
- Homogénéité réponses
- Moins d'erreurs
- Image professionnelle

#### 10. Suivi demandes techniciens digitalisé

**Problème** : Technicien dit "cliente demande devis sur X" → rien pour tracer

**Solution** :
- Formulaire rapide dans app mobile technicien
- Création ticket automatique
- Assignation assistante relation client
- Suivi workflow

**Bénéfices**
- Aucune opportunité commerciale perdue
- Traçabilité
- Technicien valorisé (écouté)
- CA additionnel

---

## ✅ CE QUI EST FAISABLE

### Court terme (0-6 mois) - Quick Wins

1. ✅ **CRM Cloud léger (HubSpot, Zoho, Pipedrive)**
   - Déploiement 2-3 mois
   - Modules : tickets, contacts, historique
   - Intégration mail/téléphone
   - Portail client basique

2. ✅ **Planning en ligne partagé (Calendly, Doodle pro, Google Workspace)**
   - Disponibilités techniciens
   - Prise RDV en ligne
   - Synchronisation Outlook
   - Notifications automatiques

3. ✅ **Synchronisation SAGE ↔ ERP (ou migration CRM)**
   - Connecteur ou ETL
   - Synchronisation quotidienne
   - Fin double saisie

4. ✅ **Templates mails (Outlook + snippets)**
   - Création bibliothèque 20-30 templates
   - Formation assistante
   - Gains immédiats

5. ✅ **Automatisation questionnaire satisfaction (TypeForm, SurveyMonkey)**
   - Envoi automatique J+2 post-intervention
   - Relances J+7
   - Dashboard résultats

**ROI attendu** : 300-400h/an économisées, satisfaction +25%

### Moyen terme (6-18 mois) - Transformation

1. ✅ **CRM complet intégré (Salesforce, Microsoft Dynamics, Zoho CRM+)**
   - Gestion complète cycle client
   - Ticketing avancé
   - Portail client riche
   - App mobile
   - Intégration ERP/SAGE/téléphonie

2. ✅ **App mobile techniciens**
   - Bon intervention digital
   - Photos avant/après
   - Signature électronique
   - Suivi interventions
   - Demande devis rapide

3. ✅ **GED intégrée**
   - Centralisation documents
   - Indexation automatique
   - Recherche full-text
   - Versionning
   - Partage sécurisé

4. ✅ **Intégration téléphonie IP (CTI)**
   - Remontée fiche client automatique
   - Enregistrement appels
   - Statistiques centre d'appels
   - Création ticket automatique

5. ✅ **Chatbot site web**
   - Réponses automatiques questions fréquentes
   - Prise RDV guidée
   - Création ticket si besoin humain
   - Disponibilité 24/7

6. ✅ **Workflow automatisés (Zapier, Make, Power Automate)**
   - Mail → ticket CRM automatique
   - Devis accepté → création chantier automatique
   - Intervention terminée → questionnaire satisfaction
   - Relances automatiques multi-canaux

**ROI attendu** : 800-1000h/an, satisfaction +40%, appels entrants -30%

### Long terme (18-24 mois) - Excellence

1. ✅ **IA conversationnelle avancée**
   - Chatbot intelligent
   - Analyse sentiments clients
   - Prédiction demandes

2. ✅ **Prédictions ML**
   - Risque churn client
   - Prévision volume appels
   - Optimisation planning automatique

3. ✅ **Omnicanal total**
   - WhatsApp Business API
   - SMS
   - Réseaux sociaux
   - Tout centralisé CRM

4. ✅ **Self-service avancé portail client**
   - FAQ dynamique
   - Base de connaissances
   - Vidéos tutoriels
   - Communauté clients

5. ✅ **Voice analytics**
   - Analyse automatique appels
   - Détection insatisfaction
   - Coaching automatique

**ROI attendu** : 1200h/an, satisfaction +60%, NPS +30, appels -50%

---

## 🎯 PISTES RECOMMANDÉES

### Option A : CRM Intégré Cloud (Recommandé si budget >80K€)

**Solutions possibles**

**1. HubSpot CRM (Recommandé)**
- ✅ Leader mondial CRM
- ✅ Version gratuite robuste (démarrage)
- ✅ Évolution progressive (ajout modules)
- ✅ UX excellente, intuitive
- ✅ Portail client natif
- ✅ Ticketing
- ✅ Intégrations : 1000+ (SAGE via Zapier, Outlook natif)
- ✅ Planning intégré
- ✅ Templates mails
- ✅ Workflows automatisés
- ✅ Mobile natif
- 💰 Gratuit → 45€/user/mois (pro) → 1200€/user/mois (enterprise)
- 💰 Setup : 20-40K€ (intégrations + formation)

**2. Zoho CRM**
- ✅ Complet, compétitif prix
- ✅ Modules : CRM, helpdesk, portail, mobile
- ✅ Intégrations nombreuses
- 💰 ~20-40€/user/mois → 500-1000€/an
- 💰 Setup : 15-25K€

**3. Microsoft Dynamics 365 Customer Service**
- ✅ Intégration native Outlook, Office 365
- ✅ Modules riches
- ✅ Évolutif
- ⚠️ Complexe
- 💰 ~60-95€/user/mois → 1500-2500€/an
- 💰 Setup : 40-70K€

**4. Salesforce Service Cloud**
- ✅ Leader marché
- ✅ Fonctionnalités très complètes
- ⚠️ Prix élevé
- ⚠️ Complexe (overkill pour PME ?)
- 💰 ~75-150€/user/mois → 2000-4000€/an
- 💰 Setup : 50-100K€

**Modules complémentaires à développer/intégrer**

**1. Intégration téléphonie (CTI)**
- Connecteur CRM ↔ standard téléphonique
- Remontée fiche automatique
- Création ticket auto
- 💰 Développement : 10-15K€
- 💰 Licences téléphonie : 15€/user/mois

**2. Synchronisation SAGE ↔ CRM**
- Connecteur bidirectionnel
- Sync clients, devis, factures
- Temps réel ou quotidien
- 💰 Développement : 15-25K€

**3. App mobile techniciens**
- Bon intervention digital
- Photos, signature
- Sync CRM
- 💰 Développement React Native : 30-40K€
- 💰 Maintenance : 5K€/an

**4. Portail client avancé**
- Prise RDV en ligne
- Suivi interventions
- Documents
- 💰 Développement : 20-30K€ (si CRM natif insuffisant)

**Investissement Total Option A (HubSpot recommandé)**
- **Setup CRM** : 25K€ (HubSpot Pro + formation)
- **Intégrations & développements** : 75-100K€ (CTI + SAGE + app mobile + portail)
- **Formation** : 5K€
- **Total initial** : 105-130K€
- **Run annuel** : 15-25K€/an (CRM + téléphonie + maintenance)

**ROI Option A**
- **Gains temps** : 900h/an × 50€/h = 45K€/an
- **Réduction appels entrants** : -30% × 10h/semaine × 220j × 50€ = 33K€/an
- **Opportunités commerciales** : +50 devis/an × 30% taux transformation × 5K€ marge = 75K€/an
- **Satisfaction client** : +40% → rétention +10% → 20 clients × 10K€ CA moyen = 200K€/an (indirect)
- **Total gains** : 153K€/an (hors rétention)
- **Payback** : 10 mois
- **ROI 2 ans** : +180K€ net

### Option B : Solution Légère (Budget 30-50K€)

**Approche**
- CRM SaaS basique (HubSpot gratuit ou Zoho)
- Outils complémentaires légers
- Conservation SAGE/ERP actuels
- Pas d'app mobile custom

**Modules**
1. **HubSpot CRM gratuit** : tickets, contacts, pipeline (0€)
2. **Calendly Pro** : prise RDV en ligne (10€/user/mois → 250€/an)
3. **Zapier** : automatisations (50€/mois → 600€/an)
4. **TypeForm** : satisfaction client (35€/mois → 420€/an)
5. **Intégration SAGE** : Zapier ou connecteur simple (10K€)
6. **Formation** : 5K€
7. **Templates & workflows** : setup interne (5K€ temps interne)

**Investissement Total Option B**
- **Initial** : 20K€ (intégration + formation)
- **Run annuel** : 2K€/an

**ROI Option B**
- **Gains temps** : 400h/an × 50€/h = 20K€/an
- **Opportunités commerciales** : +20 devis/an × 30% × 5K€ = 30K€/an
- **Total gains** : 50K€/an
- **Payback** : 5 mois
- **ROI 2 ans** : +78K€ net

⚠️ **Limites** : pas d'app mobile, portail client basique, intégrations limitées, scalabilité moyenne

### Option C : Optimisation Existant (Budget <15K€)

**Approche**
- Conservation tous outils actuels
- Ajout gratuits/low-cost
- Optimisation process

**Actions**
1. **HubSpot CRM gratuit** : 0€
2. **Google Workspace** : planning partagé (6€/user/mois → 150€/an)
3. **Templates Outlook** : setup interne (2K€ temps)
4. **Process documentation** : 3K€
5. **Formation équipe** : 5K€

**Investissement Total Option C**
- **Initial** : 10K€
- **Run annuel** : 150€/an

**ROI Option C**
- **Gains temps** : 150h/an × 50€/h = 7.5K€/an
- **Payback** : 16 mois
- **ROI 2 ans** : +5K€

⚠️ **Limites** : gains très limités, problèmes structurels non résolus

---

## 📊 PRIORISATION ACTIONS

### 🔴 URGENT (Mois 1-3)

**1. Choix & déploiement CRM**
- Benchmark 3 solutions (HubSpot, Zoho, Dynamics)
- POC 2 semaines
- Décision
- Déploiement base (tickets, contacts, historique)

**2. Templates mails**
- Création 20-30 templates types
- Formation assistante
- Gains immédiats

**3. Planning partagé en ligne**
- Calendly ou module CRM
- Sync Outlook
- Formation techniciens
- Test 1 mois

**4. Questionnaire satisfaction automatisé**
- TypeForm ou module CRM
- Envoi automatique J+2
- Relances J+7

**ROI Quick Wins (3 mois)** : 150h économisées, satisfaction +15%

### 🟠 IMPORTANT (Mois 4-6)

**5. Intégration téléphonie (CTI)**
- Connecteur CRM ↔ standard
- Remontée fiche automatique
- Tests

**6. Synchronisation SAGE ↔ CRM**
- Connecteur bidirectionnel
- Sync clients quotidienne
- Fin double saisie

**7. Portail client basique**
- Module CRM natif
- Prise RDV en ligne
- Suivi interventions
- Documents

**8. GED intégrée CRM**
- Centralisation documents
- Fin manipulations manuelles
- Recherche rapide

**ROI 6 mois** : 400h/an économisées, appels -15%

### 🟢 STRUCTURANT (Mois 7-18)

**9. App mobile techniciens**
- Bon intervention digital
- Photos, signature
- Sync CRM
- Déploiement progressif

**10. Workflows automatisés avancés**
- Mail → ticket
- Devis accepté → chantier
- Fin intervention → satisfaction
- Relances multi-niveaux

**11. Portail client avancé**
- Self-service
- FAQ dynamique
- Base connaissances

**12. Analytics & dashboards**
- KPI service client temps réel
- Volume appels, délai traitement, satisfaction
- Prévisions

**13. Chatbot site web**
- Réponses automatiques
- Prise RDV guidée
- Disponibilité 24/7

**ROI 18 mois** : 900h/an, appels -30%, satisfaction +40%

---

## 💡 RECOMMANDATIONS CLÉS

### 1. Prioriser CRM cloud moderne

**Pourquoi ?**
- Problème = outils éparpillés (ERP, SAGE, Outlook, Excel, Post-it) → CRM résout 80%
- ROI rapide : payback 10 mois
- SaaS = pas d'infrastructure, MAJ automatiques
- Mobile natif = techniciens terrain
- Portail client = différenciation marché

**Solution recommandée : HubSpot**
- Gratuit pour démarrer (risque zéro)
- Évolution progressive (ajout modules selon besoins)
- UX excellente (adoption facile)
- Intégrations nombreuses
- Support communauté très actif

### 2. Approche progressive

**Phase 1 (M1-3)** : CRM base + templates + planning
- Gains rapides
- Adoption facilitée
- Validation concept

**Phase 2 (M4-6)** : Intégrations (téléphonie, SAGE, portail)
- Connexions systèmes existants
- Fin double saisie

**Phase 3 (M7-18)** : App mobile + automatisations avancées
- Digitalisation complète
- Excellence service client

**Bénéfice** : adoption progressive, ROI continu

### 3. Impliquer utilisateurs dès le début

**Champions internes**
- Assistante relation client (utilisatrice principale)
- 2-3 techniciens pilotes
- Responsable activité

**Co-conception**
- Ateliers besoins
- Tests POC
- Feedbacks intégrés

**Bénéfice** : adoption facilitée, solution adaptée réalités terrain

### 4. Mobile-first pour techniciens

**Réalité terrain** : techniciens rarement sur PC

**Solution** : app mobile native
- Bon intervention
- Photos
- Signature
- Offline-first

**Bénéfice** : adoption × 3 vs solution web

### 5. Portail client = différenciation concurrentielle

**Marché BTP** : portail client encore rare

**Avantages** :
- Image moderne, innovante
- Disponibilité 24/7
- Réduction appels -30%
- Satisfaction +40%
- Fidélisation

**ROI** : 20 clients fidélisés × 10K€ CA = 200K€/an

### 6. KPIs & reporting automatisés

**Problème actuel** : aucune mesure

**Solution** : dashboard temps réel
- Volume appels/mails
- Délai traitement moyen
- Taux résolution 1er contact
- Satisfaction (NPS)
- Opportunités commerciales générées

**Bénéfice** : pilotage data-driven, amélioration continue

---

## 📅 PLANNING SUGGÉRÉ (18 mois)

### Mois 1-2 : Sélection & Cadrage

**Semaine 1-2 : Benchmark CRM**
- 3 démos (HubSpot, Zoho, Dynamics)
- Grille évaluation
- Pré-sélection

**Semaine 3-4 : POC HubSpot**
- POC 2 semaines données réelles
- Test assistante + 2 techniciens
- Feedbacks

**Semaine 5-6 : Décision & Setup**
- Décision finale
- Contractualisation
- Kick-off

**Semaine 7-8 : Paramétrage**
- Configuration CRM
- Import contacts
- Création templates
- Workflows basiques

**Livrables M1-2** : CRM opérationnel base

### Mois 3-6 : Déploiement Phase 1

**Mois 3 : Formation & adoption**
- Formation assistante (2j)
- Formation techniciens (1j)
- Go-live
- Support intensif

**Mois 4 : Intégration téléphonie**
- Connecteur CTI
- Tests
- Déploiement

**Mois 5 : Synchronisation SAGE**
- Développement connecteur
- Tests
- Mise en production

**Mois 6 : Portail client basique**
- Configuration module CRM
- Tests clients pilotes (5-10)
- Communication

**Livrables M3-6** : CRM adopté, intégrations opérationnelles

**Gains Phase 1** : 400h/an économisées, double saisie éliminée

### Mois 7-12 : Phase 2 (Extensions)

**Mois 7-9 : App mobile techniciens**
- Développement React Native
- Tests pilote 3 techniciens
- Ajustements
- Déploiement général

**Mois 10 : GED intégrée**
- Configuration
- Migration documents existants
- Formation

**Mois 11 : Workflows avancés**
- Automatisations complexes
- Tests
- Activation

**Mois 12 : Analytics & dashboards**
- Configuration KPI
- Dashboards direction
- Formation

**Livrables M7-12** : App mobile déployée, workflows automatisés, KPI temps réel

**Gains Phase 2** : 900h/an, appels -20%

### Mois 13-18 : Phase 3 (Excellence)

**Mois 13-14 : Portail client avancé**
- Self-service
- FAQ
- Base connaissances

**Mois 15-16 : Chatbot**
- Configuration
- Entraînement
- Tests
- Déploiement

**Mois 17 : ML prédictif**
- Modèle prévision volume appels
- Optimisation planning

**Mois 18 : Bilan**
- Mesure ROI complet
- Satisfaction utilisateurs
- Roadmap 12 mois suivants

**Livrables M13-18** : Portail avancé, chatbot, prédictions

**Gains Phase 3** : 1200h/an, appels -40%, satisfaction +50%

---

## 💰 BUDGETS DÉTAILLÉS

### Option A : HubSpot Complet (Recommandé)

**Investissement Initial (Mois 1-6)**

| Poste | Détail | Montant |
|-------|--------|---------|
| **Licences HubSpot** | Pro 2 users × 6 mois (assistante + direction) | 5.4K€ |
| **Setup HubSpot** | Configuration, import, formation | 15K€ |
| **Intégration CTI** | Connecteur téléphonie | 12K€ |
| **Sync SAGE** | Connecteur bidirectionnel | 20K€ |
| **Templates & workflows** | Setup | 5K€ |
| **Formation** | Équipe | 5K€ |
| **Contingence 10%** | Imprévus | 6K€ |
| **TOTAL PHASE 1** | | **68.4K€** |

**Développements Phase 2 (Mois 7-12)**

| Poste | Détail | Montant |
|-------|--------|---------|
| **App mobile techniciens** | React Native iOS + Android | 35K€ |
| **Portail client avancé** | Si HubSpot natif insuffisant | 15K€ |
| **GED intégrée** | Configuration + migration | 8K€ |
| **Workflows avancés** | Automatisations complexes | 7K€ |
| **Analytics & dashboards** | Configuration KPI | 5K€ |
| **Contingence 10%** | Imprévus | 7K€ |
| **TOTAL PHASE 2** | | **77K€** |

**Innovations Phase 3 (Mois 13-18)**

| Poste | Détail | Montant |
|-------|--------|---------|
| **Chatbot IA** | Configuration + entraînement | 15K€ |
| **ML prédictif** | Modèles volume/optimisation | 20K€ |
| **Portail self-service avancé** | FAQ dynamique, base connaissances | 10K€ |
| **Contingence 10%** | Imprévus | 4.5K€ |
| **TOTAL PHASE 3** | | **49.5K€** |

**Coûts Récurrents (annuels)**

| Poste | Détail | Montant/an |
|-------|--------|------------|
| **Licences HubSpot Pro** | 2 users × 45€/mois × 12 | 1.1K€ |
| **Téléphonie IP** | 3 users × 15€/mois × 12 | 540€ |
| **Maintenance app mobile** | Évolutions + support | 5K€ |
| **Hébergement/serveurs** | Cloud | 1K€ |
| **TOTAL RÉCURRENT** | | **7.6K€/an** |

**INVESTISSEMENT TOTAL 18 MOIS : 195K€**
**RUN ANNUEL : 7.6K€/an**

### ROI Détaillé Option A (sur 2 ans)

**Gains Temps (valorisés à 50€/h)**

| Gain | Avant | Après | Économie h/an | Valeur €/an |
|------|-------|-------|---------------|-------------|
| Prise RDV planning | 2h/jour | 20min/jour | 365h | 18.25K€ |
| Relances clients | 1h/jour | 10min/jour | 183h | 9.15K€ |
| Double saisie SAGE/ERP | 30min × 50 clients/an | 5min × 50 | 21h | 1.05K€ |
| Recherche info client | 30min/jour | 5min/jour | 183h | 9.15K€ |
| Gestion documents | 1h/jour | 15min/jour | 183h | 9.15K€ |
| Suivi demandes techniciens | 45min/jour | 10min/jour | 128h | 6.4K€ |
| Questionnaire satisfaction | 2h/semaine | 20min/semaine | 72h | 3.6K€ |
| Templates mails (50/j) | 2min/mail | 30s/mail | 183h | 9.15K€ |
| **TOTAL GAINS TEMPS** | | | **1318h/an** | **65.9K€/an** |

**Gains Qualité**

| Gain | Estimation | Valeur €/an |
|------|------------|-------------|
| Opportunités commerciales (demandes techniciens tracées) | +50 devis/an × 30% × 5K€ marge | 75K€ |
| Réduction appels entrants (-30% via portail) | 10h/semaine × 220j × 30% × 50€ | 33K€ |
| Fidélisation client (+10% via satisfaction) | 20 clients × 10K€ CA | 200K€ |
| Réduction erreurs (double saisie éliminée) | 10 erreurs/an × 2K€ | 20K€ |
| Image & différenciation (portail moderne) | Intangible | - |
| **TOTAL GAINS QUALITÉ** | | **328K€/an** |

**TOTAL GAINS ANNUELS : 393.9K€/an**

**ROI 2 ans**
- **Investissement 18 mois** : 195K€
- **Run 18 mois** : 7.6K€ × 1.5 = 11.4K€
- **Total coûts 2 ans** : 206.4K€
- **Gains 2 ans** : 393.9K€ × 2 = 787.8K€
- **Net gain 2 ans** : +581.4K€
- **ROI** : 282%
- **Payback** : 6 mois

---

## 📈 KPIs DE SUCCÈS

### Indicateurs Opérationnels

**Gestion Appels/Mails**
- Volume appels/jour : X → mesure
- Délai réponse moyen : 1-2j → **<4h**
- Taux résolution 1er contact : X% → **>70%**
- Temps moyen traitement : Xmin → **<10min**

**Ticketing**
- Tickets créés/semaine : - → mesure
- Tickets résolus <24h : - → **>80%**
- Tickets oubliés : risque → **0**
- SLA respecté : - → **>95%**

**Prise RDV**
- Temps prise RDV : 15min → **<3min**
- RDV pris en ligne : 0% → **>40%**
- Erreurs planning : X/semaine → **<2/mois**
- Satisfaction process : - → **>4.5/5**

**Documents**
- Temps recherche document : 5min → **<30s**
- Documents perdus : X/mois → **0**
- Manipulation manuelles/devis : 4 → **1**

### Indicateurs Qualité

**Satisfaction Client**
- NPS : - → mesure → **>40**
- Taux réponse questionnaire : X% → **>60%**
- Satisfaction globale : - → **>4.5/5**
- Réclamations : X/mois → **-30%**

**Traçabilité**
- Appels non tracés : 100% → **0%**
- Demandes techniciens perdues : X/mois → **0**
- Historique client complet : 0% → **100%**

**Données**
- Double saisie : 50 clients/an → **0**
- Incohérences SAGE/ERP : X/mois → **0**
- Qualité données : X% → **>98%**

### Indicateurs Business

**Efficacité**
- Temps admin/jour : 6h → **3h**
- Temps relation client/jour : 2h → **5h**
- Appels traités/jour : X → **+50%**

**Commercial**
- Opportunités générées : X → **+50/an**
- Taux transformation devis : X% → **+5%**
- CA additionnel demandes techniciens : 0€ → **75K€/an**

**Fidélisation**
- Taux rétention client : X% → **+10%**
- Clients portés : 0% → **>30%**
- Recommandations : X/an → **+20**

**Adoption**
- Taux utilisation CRM : - → **>90%**
- Portail client actifs : - → **>30%**
- App mobile techniciens : - → **100%**
- Satisfaction outils : - → **>4/5**

---

## 🔒 RISQUES & MITIGATION

### Risques Techniques

**1. Intégration SAGE ↔ CRM complexe**
- **Risque** : API SAGE limitées ou absentes
- **Impact** : Double saisie persiste
- **Probabilité** : Moyenne
- **Mitigation** :
  - Vérifier API SAGE phase sélection
  - Budget ETL custom si nécessaire
  - Alternative : migration complète vers CRM (abandonner SAGE clients)
- **Backup** : Sync manuelle quotidienne CSV (temporaire)

**2. Adoption app mobile techniciens faible**
- **Risque** : Techniciens continuent papier
- **Impact** : ROI non atteint
- **Probabilité** : Moyenne
- **Mitigation** :
  - UX excellente (tests utilisateurs)
  - Formation terrain dédiée
  - Mode offline obligatoire
  - Gamification
  - Champions internes
- **Backup** : Version web mobile (PWA)

**3. Téléphonie CTI incompatible**
- **Risque** : Standard actuel pas compatible CTI
- **Impact** : Pas de remontée fiche auto
- **Probabilité** : Faible
- **Mitigation** :
  - Audit téléphonie avant projet
  - Budget migration VoIP si nécessaire (15K€)
- **Backup** : Création ticket manuelle (1 clic)

### Risques Business

**4. ROI surestimé**
- **Risque** : Gains théoriques vs réels divergent
- **Impact** : Désillusion
- **Probabilité** : Faible-Moyenne
- **Mitigation** :
  - Hypothèses conservatrices
  - Mesure avant/après systématique
  - KPI suivis mensuellement
- **Backup** : Élargir bénéfices (qualité, image)

**5. Résistance changement assistante**
- **Risque** : Assistante voit CRM comme contrainte
- **Impact** : Adoption faible, projet échoue
- **Probabilité** : Faible (1 personne, implication facile)
- **Mitigation** :
  - Impliquer dès J1
  - Co-conception
  - Formation intensive
  - Support dédié 6 mois
  - Valoriser (moins admin, plus relationnel)
- **Backup** : Accompagnement externe 6 mois

**6. Clients n'utilisent pas portail**
- **Risque** : Portail client peu adopté
- **Impact** : Appels restent élevés
- **Probabilité** : Moyenne
- **Mitigation** :
  - Communication clients intensive
  - Incentives (réduction 5% si RDV en ligne)
  - UX excellente mobile
  - Support clients
- **Backup** : Portail = bonus, pas obligatoire

### Risques Organisationnels

**7. Budget dépassé**
- **Risque** : Développements plus longs
- **Impact** : Projet arrêté
- **Probabilité** : Moyenne
- **Mitigation** :
  - Contingence 10% (incluse)
  - Priorités claires (must-have vs nice-to-have)
  - Forfaits vs régie
- **Backup** : Arrêt projet si dépassement >20%

**8. Sponsor désengagé**
- **Risque** : Direction change priorités
- **Impact** : Projet ralenti/abandonné
- **Probabilité** : Faible
- **Mitigation** :
  - Sponsor CODIR identifié
  - Communication gains régulière
  - Quick wins M1-3
- **Backup** : Escalade COMEX

---

## ✅ CONCLUSION & RECOMMANDATION

### Synthèse Situation Actuelle

**Problèmes Critiques**
1. **Pas de CRM/ticketing** → post-it, aucune traçabilité, oublis
2. **Outils éparpillés** (ERP, SAGE, Outlook, Excel) → ressaisies, incohérences
3. **Volume mails important** (~50/j) → rien d'automatisé, chronophage
4. **Prise RDV archaïque** (Excel → mail → attente → re-saisir) → 15min vs 3min possible
5. **Pas de portail client** → clients appellent, disponibilité 8h-18h uniquement
6. **Papier persistant** → bon intervention, questionnaire satisfaction
7. **Opportunités commerciales perdues** → demandes techniciens pas tracées

**Conséquences Business**
- Temps assistante : 75% admin vs 25% relationnel → **doit être inversé**
- Satisfaction client moyenne → fidélisation insuffisante
- Image vieillotte → différenciation concurrentielle faible
- Opportunités commerciales perdues : ~75K€/an

### Recommandation Principale

**👉 OPTION A - HUBSPOT CRM + Développements Custom**

**Pourquoi HubSpot spécifiquement ?**
1. ✅ **Gratuit pour démarrer** → risque zéro, test avant investissement
2. ✅ **Évolution progressive** → ajout modules selon besoins/budget
3. ✅ **Leader mondial CRM** → 100K+ clients, pérennité assurée
4. ✅ **UX excellente** → adoption facilitée, intuitive
5. ✅ **Tout-en-un** : CRM + tickets + portail + workflows + mobile + analytics
6. ✅ **Intégrations** : 1000+ apps (SAGE via Zapier, Outlook natif, téléphonie)
7. ✅ **Support & communauté** → formation gratuite HubSpot Academy
8. ✅ **Scalable** → croissance entreprise supportée

### Modules Complémentaires Obligatoires

**1. Intégration téléphonie (CTI)** (12K€)
- Remontée fiche automatique
- Gain temps considérable

**2. Synchronisation SAGE ↔ HubSpot** (20K€)
- Fin double saisie
- Cohérence données

**3. App mobile techniciens** (35K€)
- Bon intervention digital
- Indispensable terrain

**4. Portail client** (natif HubSpot ou custom 15K€)
- Différenciation concurrentielle
- Réduction appels -30%

### Investissement & ROI Récapitulatif

**Coûts**
- Phase 1 (M1-6) : 68.4K€
- Phase 2 (M7-12) : 77K€
- Phase 3 (M13-18) : 49.5K€
- Run 18 mois : 11.4K€
- **TOTAL 18 MOIS : 206.4K€**

**Gains annuels**
- Temps : 1318h × 50€ = 65.9K€/an
- Qualité : 328K€/an
- **TOTAL : 393.9K€/an**

**ROI**
- Gains 2 ans : 787.8K€
- Net 2 ans : **+581.4K€**
- ROI : **282%**
- Payback : **6 mois**

### Facteurs Clés de Succès

**1. Impliquer assistante relation client dès J1**
- Co-conception
- Formation intensive
- Support dédié
- Valorisation (moins admin, plus relationnel)

**2. Quick wins M1-3**
- Templates mails → gains immédiats
- Planning en ligne → satisfaction assistante + techniciens
- CRM base → traçabilité immédiate

**3. Communication clients**
- Lancement portail = événement
- Incentives adoption
- Support clients

**4. Approche progressive**
- Phase 1 : base (CRM + templates + planning)
- Phase 2 : intégrations (téléphonie, SAGE, portail)
- Phase 3 : excellence (app mobile, chatbot, ML)

### Prochaines Étapes Immédiates

**Semaine 1-2 : Démarrage HubSpot gratuit**
- Création compte gratuit
- Test assistante 2 semaines
- Import 50 contacts pilotes
- Création 10 templates

**Semaine 3-4 : POC & validation**
- Feedback assistante
- Mesure gains temps
- Décision go/no-go investissement

**Semaine 5-8 : Setup Phase 1**
- Upgrade HubSpot Pro
- Formation 2 jours
- Import complet contacts
- Configuration workflows
- Intégration Outlook

**Mois 3 : Go-live**
- Lancement officiel
- Communication interne/externe
- Support intensif

**Objectif M6 : Phase 1 opérationnelle**
- CRM adopté >90%
- Intégrations SAGE + téléphonie actives
- Portail client lancé
- Gains mesurés : 400h/an

---

**📧 Contact** : Service Client - Duret Électricité
**🎯 Objectif** : Transformer service client réactif → proactif & digital
**💰 Enjeu** : 394K€/an de gains + différenciation concurrentielle
