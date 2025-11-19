# 📦 AUDIT DÉTAILLÉ : SERVICE ACHATS & LOGISTIQUE

**Date** : 19 Novembre 2025
**Statut** : Critique 🔴
**Priorité** : Urgente (Blocage chantiers)

---

## 1. 🔍 DIAGNOSTIC DE L'EXISTANT

Le service Achats-Logistique est le **goulot d'étranglement** actuel de l'entreprise. Le fonctionnement est quasi-exclusivement manuel et repose sur des outils obsolètes ou détournés.

### 📊 Chiffres Clés & Volumétrie
*   **Volume** : 9 000 à 11 000 références commandées / an.
*   **Taux d'échec** : **50% des commandes sont incomplètes** ou problématiques.
*   **Délai** : Livraisons en 24h possibles MAIS freinées par le traitement administratif.
*   **Outils** : Sage MDE (jugé "calamiteux"), 4 fichiers Excel désynchronisés, Téléphone, Papier.

### 🚨 Problèmes Critiques (Pain Points)
1.  **Chaos des Données** :
    *   Base articles "poubelle" : jusqu'à 12 références pour un même produit.
    *   Aucune visibilité sur les stocks en temps réel (ni au dépôt, ni sur chantier).
    *   Double tarification constatée (prix d'achat incohérents).

2.  **Processus "Téléphone Arabe"** :
    *   Flux : Chantier (Oral) → Bureau (Papier/Excel) → Fournisseur (Tel/Mail).
    *   **Conséquence** : 6 ressaisies manuelles par commande = Erreurs garanties.
    *   Perte de traçabilité totale : "Qui a commandé quoi ?" "Est-ce que c'est arrivé ?".

3.  **Impact Terrain (Le plus grave)** :
    *   **Chantiers bloqués** : Les équipes attendent le matériel.
    *   **Perte de productivité** : Les chefs de chantier passent leur temps au téléphone pour chasser le matériel au lieu de piloter les travaux.
    *   **Frustration** : Tensions entre le terrain et le bureau.

4.  **Logistique Aveugle** :
    *   Réception manuelle (pas de scan).
    *   Inventaires chronophages et faux dès le lendemain.
    *   Pas de gestion des reliquats (matériel non livré oublié).

---

## 2. 👥 ANALYSE DES BESOINS UTILISATEURS

| Persona | Rôle | Problème Majeur | Besoin Immédiat |
|---------|------|-----------------|-----------------|
| **Marc** | Chef de Chantier | Ne sait pas si sa commande est validée/livrée. | **App Mobile** pour commander et suivre le statut (type Amazon). |
| **Sylvie** | Achats | Passe sa vie au téléphone et à ressaisir des Excels. | **Centralisation** des demandes et validation en 1 clic. |
| **Éric** | Magasinier | Reçoit des cartons sans savoir pour quel chantier. | **Douchette/Scan** pour réceptionner et affecter le matériel. |
| **Julien** | Resp. Affaires | Découvre les coûts réels à la fin du chantier. | **Vision temps réel** du budget consommé. |

---

## 3. 💡 SOLUTIONS RECOMMANDÉES (Alignées Stratégie Odoo)

La transformation doit être radicale mais progressive pour ne pas bloquer la production.

### ✅ Solution Cible : "Zéro Ressaisie"

1.  **Digitalisation de la Demande (Terrain)**
    *   **Outil** : App Mobile Odoo (Module Achats/Inventaire).
    *   **Usage** : Le chef de chantier sélectionne ses produits sur catalogue (avec photos) ou scanne un code-barres sur chantier.
    *   **Gain** : Plus d'appels, demande structurée immédiate.

2.  **Validation & Commande (Bureau)**
    *   **Outil** : Odoo Achats.
    *   **Usage** : Sylvie reçoit une notification. Elle valide ou modifie. La commande fournisseur (Rexel/Sonepar) est générée automatiquement (PDF/Mail ou API).
    *   **Gain** : Fin des ressaisies Excel. Comparaison prix automatique.

3.  **Réception & Stock (Dépôt)**
    *   **Outil** : Odoo Inventaire + Douchette RFID/Code-barres.
    *   **Usage** : Éric scanne le BL ou le colis. Le stock est mis à jour instantanément. Le chef de chantier est notifié "Dispo au dépôt".
    *   **Gain** : Stock juste, fin des pertes.

### 🚀 Quick Wins (Mois 1-3)
*   [ ] **Nettoyage Base Articles** : C'est le pré-requis absolu. Fusionner les doublons, mettre des photos.
*   [ ] **Stop Excel** : Basculer le suivi des commandes sur un outil partagé unique (Odoo Achats).
*   [ ] **Scan Dépôt** : Mettre en place une procédure de réception scannée (même basique au début).

---

## 4. ⚠️ POINTS DE VIGILANCE

*   **Adoption Terrain** : Les chefs de chantier habitués à l'oral vont résister. Il faut une app ultra-simple (UX type e-commerce grand public).
*   **Rigueur Base Données** : Si la base articles est sale, l'app mobile sera inutilisable. Il faut un "Gardien du Temple" (Data Manager) au début.
*   **Intégration Fournisseurs** : La connexion API avec Rexel/Sonepar est un gros plus mais peut être complexe techniquement. Démarrer par l'envoi de mails structurés avant l'API.

---

**Conclusion** : Le service Achats-Logistique est le candidat idéal pour la "Vague 1" de la transformation (après le CRM). Le ROI sera immédiat par la suppression des arrêts de chantier.
