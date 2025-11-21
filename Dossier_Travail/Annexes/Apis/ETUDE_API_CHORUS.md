# 🏛️ ÉTUDE DÉTAILLÉE : API CHORUS PRO (PISTE)

## 1. 📋 Fiche d'Identité
- **Nom** : Chorus Pro (via Piste.gouv.fr)
- **Catégorie** : Facturation Électronique (B2G)
- **Priorité** : 🔴 **CRITIQUE** (Obligation Légale)
- **Complexité** : Élevée (OAuth2 + Normes strictes)
- **Coût API** : Gratuit (Service Public)

## 2. 🎯 Contexte & Enjeux pour Duret
Duret Électricité réalise une part significative de son CA avec des marchés publics (Écoles, Mairies, Hôpitaux).
- **Problème Actuel** : Dépôt manuel des factures PDF sur le portail Chorus Pro. Saisie manuelle des statuts (Rejetée, Mise en paiement).
- **Risque** : Retards de paiement importants si facture rejetée et non vue. Perte de temps administrative.
- **Opportunité** : Automatiser l'envoi des factures depuis Odoo et la récupération des statuts de paiement.

## 3. 🛠️ Fonctionnalités Clés (API)
L'API Chorus Pro permet de :
1.  **Déposer une facture** : Envoi du flux XML (UBL/CII) ou PDF signé.
2.  **Suivre le cycle de vie** : Récupérer le statut (Déposée → Mise à disposition → Service fait → Mandatée → Mise en paiement).
3.  **Gérer les pièces jointes** : Ajouter des PJ (Devis signé, PV de réception).
4.  **Gérer l'annuaire** : Vérifier les SIRET des entités publiques destinataires.

## 4. 💻 Intégration Odoo (Technique)

### Architecture
Odoo propose un connecteur natif pour Chorus Pro (module `account_edi_ubl_cii` et `l10n_fr_chorus`).
Cependant, la configuration nécessite des certificats techniques ou l'usage d'un tiers de télétransmission si on ne veut pas gérer la complexité PISTE en direct.

### Flux de Données
1.  **Odoo** : Validation Facture Client (Brouillon → Posté).
2.  **Odoo → Chorus** : Envoi automatique via API (Format Factur-X).
3.  **Chorus → Odoo** : Tâche planifiée (Cron) interroge l'API pour mettre à jour le statut (ex: "Payée").

### Pré-requis Techniques
- Compte PISTE (Plateforme API de l'État).
- Compte Technique Chorus Pro rattaché à la structure Duret.
- Certificat RGS** (si connexion directe) ou Token OAuth2.

## 5. 💰 Analyse Coûts & ROI

### Coûts
- **Setup** : 2 jours (Config PISTE + Odoo + Tests).
- **Récurrent** : 0€ (API Gratuite).
- **Maintenance** : Faible (sauf changement norme 2026).

### ROI (Retour sur Investissement)
- **Gain Temps** : 15 min par facture (dépôt + suivi).
  - Hypothèse : 200 factures publiques / an.
  - Gain : 50h / an = ~2 500 €.
- **Gain Trésorerie** : Accélération des paiements (réaction immédiate en cas de rejet).
  - Valeur inestimable pour le BFR.

## 6. ✅ Verdict
**INDISPENSABLE**.
L'intégration Chorus Pro n'est pas une option pour une entreprise de la taille de Duret travaillant avec le secteur public. Elle sécurise le cash-flow.

**Recommandation** : Activer le module natif Odoo dès la Phase 1.
