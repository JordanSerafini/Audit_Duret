# Étude API Open Banking (DSP2) - 2025

## Vue d'ensemble

Le rapprochement bancaire (vérifier que chaque paiement correspond à une facture) est une tâche comptable chronophage.
La directive européenne **DSP2** oblige les banques à ouvrir leurs données via des APIs sécurisées.

Pour Duret Électricité, l'objectif est d'automatiser l'import des relevés bancaires dans Odoo pour que le lettrage se fasse tout seul chaque matin.

## Solutions d'Agrégation (AISP)

Plutôt que de se connecter à chaque banque (Crédit Agricole, BNP, etc.) individuellement, il est standard d'utiliser un **agrégateur** certifié ACPR.

### 1. Bridge (ex-Bankin)
- **Leader français** de l'Open Banking B2B.
- **Intégration Odoo** : Native (via module Odoo Accounting).
- **Couverture** : Toutes banques françaises pro.

### 2. Budget Insight (Powens)
- Très robuste, utilisé par de nombreux experts comptables.
- **Intégration Odoo** : Native.

### 3. Ponto
- Solution européenne très populaire dans l'écosystème Odoo.
- Tarification claire et transparente.

## Fonctionnement (Logique Métier)

### Workflow Actuel (Manuel)
1. La comptable se connecte au site de la banque.
2. Télécharge le relevé PDF ou CSV.
3. Importe le fichier dans le logiciel comptable.
4. Pointe ligne par ligne "Virement 500€ Mr Dupont" ↔ "Facture F2025-12".

### Workflow Cible (Automatisé)
1. **Sync Nuit (04h00)** : L'API Bridge récupère les transactions de la veille.
2. **Import Odoo** : Les écritures apparaissent dans le journal "Banque".
3. **Lettrage Auto** : Odoo reconnait "Dupont" et le montant "500€". Il marque la facture "Payée".
4. **Alerte** : La comptable ne gère que les exceptions (écarts, libellés inconnus).

## Intégration Odoo

Odoo Enterprise inclut nativement les connecteurs (via le service "Odoo Online Synchronization").

**Configuration** :
1. Module `account_online_synchronization`.
2. Sélectionner la banque (ex: Crédit Agricole des Savoie).
3. Redirection vers le portail de la banque pour authentification forte (SCA).
4. Sélectionner les comptes à synchroniser (Compte Courant, Livret).

**Fréquence** :
- Synchronisation automatique toutes les 12h ou 24h.
- Bouton "Synchroniser maintenant" disponible.

## Sécurité & Conformité

- **Lecture Seule** : L'API n'a accès qu'à la lecture des soldes et transactions (AISP). Pas de virement possible (PISP) sans validation forte.
- **Token 90 jours** : L'authentification forte doit être renouvelée tous les 90 jours (règle DSP2).

## ROI Estimé

### Gains
1.  **Temps Comptable** :
    - Import manuel : 15 min/jour.
    - Lettrage manuel : 2h/semaine.
    - Total : ~10h/mois économisées.
    - Valeur : **6000€/an**.
2.  **Pilotage Trésorerie** :
    - Le dirigeant voit le solde réel dans Odoo Dashboard en temps réel, sans appeler la banque.

### Coûts
- **Odoo Enterprise** : Inclus dans la licence (service IAP).
- **Si Odoo Community** : Abonnement Ponto (~15€/mois/compte).

## Recommandation

**GO Immédiat**.
C'est une fonctionnalité "Commodity" aujourd'hui. Ne pas l'avoir est une perte de temps injustifiable.
À activer dès la mise en place du module Comptabilité.
