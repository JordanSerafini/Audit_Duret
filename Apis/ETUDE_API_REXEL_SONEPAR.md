# 📦 ÉTUDE DÉTAILLÉE : API REXEL / SONEPAR (Distributeurs)

## 1. 📋 Fiche d'Identité
- **Nom** : APIs Distributeurs (Rexel, Sonepar, Yesss)
- **Catégorie** : Logistique / Achats / EDI
- **Priorité** : 🔴 **CRITIQUE** (Cœur de métier)
- **Complexité** : Moyenne (EDIFACT ou API REST propriétaires)
- **Coût API** : Inclus dans le contrat cadre

## 2. 🎯 Contexte & Enjeux pour Duret
Les achats de matériel électrique représentent une part majeure des coûts.
- **Problème Actuel** : Commandes par mail/téléphone. Prix non à jour dans l'ERP. Pas de visibilité sur la livraison réelle.
- **Risque** : Erreurs de commande, chantiers bloqués par retard livraison, factures non conformes aux devis.
- **Opportunité** : "Punchout" (Accès catalogue fournisseur depuis Odoo) + EDI Commande + Tracking Livraison.

## 3. 🛠️ Fonctionnalités Clés (API)
1.  **Punchout (OCI)** : L'acheteur navigue sur le site Rexel/Sonepar, remplit son panier, et le panier "redescend" dans Odoo comme Demande de Prix.
2.  **Disponibilité Stock** : Vérifier le stock agence en temps réel avant de commander.
3.  **Commande EDI** : Envoi de la commande validée directement dans l'ERP du distributeur.
4.  **Tracking Livraison** : Récupération du lien de suivi (Transporteur interne ou externe) et de la date prévue.
5.  **Facture Dématérialisée** : Réception automatique de la facture (EDI).

## 4. 💻 Intégration Odoo (Technique)

### Architecture
Utilisation du standard **OCI (Open Catalog Interface)** pour le Punchout, supporté par Odoo (module `purchase_oci`).
Pour le tracking et la dispo, utilisation des APIs REST spécifiques (ex: Rexel Developer Portal).

### Workflow Cible
1.  **Achat** : Chef de chantier/Acheteur ouvre "Catalogue Rexel" dans Odoo.
2.  **Sélection** : Panier sur le site Rexel.
3.  **Import** : Retour dans Odoo → Lignes de commande créées avec Réf, Désignation, Prix Net négocié.
4.  **Validation** : Validation interne Duret.
5.  **Envoi** : Commande part chez Rexel.
6.  **Suivi** : Odoo interroge l'API toutes les heures pour le statut livraison.

## 5. 💰 Analyse Coûts & ROI

### Coûts
- **Setup** : 5 jours (Config OCI + Dev connecteur API Tracking).
- **Récurrent** : 0€.

### ROI
- **Gain Administratif** : Suppression totale de la ressaisie des commandes (Gain énorme).
- **Gain Financier** : Plus d'erreurs de prix (Prix nets contractuels appliqués automatiquement).
- **Gain Opérationnel** : Chantier sait exactement quand le matériel arrive (fin des appels "C'est où ?").

## 6. ✅ Verdict
**CRITIQUE**.
Remplace avantageusement l'idée d'une API "Chronopost" générique. Ici, on se connecte à la source (le distributeur) qui gère sa logistique. C'est le standard de l'industrie BTP efficace.
