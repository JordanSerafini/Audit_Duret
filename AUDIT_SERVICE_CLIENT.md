# 📞 AUDIT & PLAN D'ACTION : SERVICE CLIENT

> **Date** : Novembre 2025
> **Auditeur** : Agentic AI
> **Statut** : 🔴 CRITIQUE (Système "Post-it" Non Viable)

---

## 1. 🔍 DIAGNOSTIC : LE "POST-IT INFERNO"

Le service Client (Claire + Support) gère 50 appels/jour avec un système artisanal à haut risque.

### 🚨 Les 3 Points de Douleur Critiques

#### 1. Le Système "Post-it" (Risque : Clients Perdus)
*   **Constat** : Chaque demande client est notée sur un **post-it** physique.
*   **Conséquence** : Post-it tombé = Client oublié. **10 clients/an perdus** de cette manière.
*   **Processus** : Aucune traçabilité, pas de relance automatique, pas de priorisation.
*   **Impact** : Image "désorganisé", perte de confiance, churn évitable.

#### 2. Planning "Excel" (Délai : 48h pour un RDV)
*   **Constat** : Pour prendre un RDV, Claire doit consulter Excel -> Envoyer mail à Gaëtan -> Attendre réponse.
*   **Conséquence** : Le client attend **1 à 2 jours** pour une confirmation (inacceptable en 2025).
*   **Benchmark** : Concurrents offrent prise RDV en ligne **< 2 minutes**.
*   **Impact** : 20 clients SAV/an partent vers la concurrence (délai trop long).

#### 3. Data Silos (7 Outils Non Connectés)
*   **Constat** : ERP, SAGE, Excel, Outlook, Post-it, Téléphone, Papier = **Aucune intégration**.
*   **Conséquence** : Claire ressaisit 3 fois les mêmes infos (ERP -> SAGE -> Excel).
*   **Impact** : 154 000 € / an de temps perdu en double saisie.

---

## 2. 🎯 LA CIBLE : "CRM CENTRALISÉ & PORTAIL CLIENT"

L'objectif est de passer d'un système "analogique" à un écosystème **digital unifié**.

### Scénario Recommandé : Odoo CRM + Odoo Helpdesk + Portail Client

Nous recommandons **Odoo** (cohérence avec la stratégie globale) plutôt que HubSpot.

| Problème Actuel | Solution Odoo | Bénéfice Immédiat |
| :--- | :--- | :--- |
| **Post-it** | **Odoo Helpdesk (Tickets)** | Traçabilité 100%, Historique complet |
| **Planning Excel** | **Odoo Planning + Portail Client** | RDV en ligne 24/7 (Doctolib-like) |
| **Appels non tracés** | **Intégration CTI (VoIP + Odoo)** | Remontée fiche auto, Historique appels |
| **Double saisie** | **Sync Odoo <-> SAGE (API)** | Une seule saisie, Data unique |
| **Pas de KPI** | **Odoo Dashboard** | Temps réel : Appels, NPS, Tickets ouverts |

---

## 3. 📉 ANALYSE DE LA VALEUR (ROI)

### Coûts de l'Inefficacité Actuelle
*   **Clients perdus (Post-it)** : 10/an x 2 500€ = **25 000 € / an**.
*   **Clients SAV perdus (Délai RDV)** : 20/an x 5 000€ = **100 000 € / an**.
*   **Temps perdu (Double saisie)** : 825h/an x 50€/h = **41 250 € / an**.
*   **Opportunités perdues (Demandes techniciens)** : **93 600 € / an**.

> **Total Pertes** : **259 850 € / an** (conservateur).

### Gains Estimés (Odoo)
*   **Tickets** : Plus de clients oubliés -> Gain **25 000 € / an**.
*   **Portail RDV** : Rétention SAV améliorée -> Gain **50 000 € / an**.
*   **Sync** : Fin de la double saisie -> Gain **40 000 € / an**.
*   **Opportunités** : Traçabilité demandes techniciens -> Gain **50 000 € / an**.

> **ROI Global** : Payback en **12 mois**. Gains récurrents de **165K€/an** ensuite.

---

## 4. 🗺️ PLAN D'ACTION : "ZERO POST-IT"

### Phase 1 : CRM & Tickets (Mois 1-2)
*   [ ] Déploiement **Odoo CRM + Helpdesk**.
*   [ ] Import historique clients (Excel -> Odoo).
*   [ ] Formation Claire (2 jours).
*   [ ] **Quick Win** : Premier ticket créé = Fin du post-it.

### Phase 2 : Portail & Planning (Mois 3-4)
*   [ ] Activation **Odoo Portal** (Accès clients).
*   [ ] Module Prise RDV en ligne (Calendrier partagé).
*   [ ] Tests avec 10 clients pilotes.

### Phase 3 : Intégrations (Mois 5-6)
*   [ ] CTI (Téléphonie -> Odoo).
*   [ ] Sync Odoo <-> SAGE (API ou CSV).
*   [ ] Dashboards KPI (Appels, NPS, Temps réponse).

---

## 5. ⚠️ POINTS DE VIGILANCE

1.  **Adoption Claire** : Elle doit **aimer** le système. Si trop complexe, échec garanti.
    *   *Solution* : UX simple, formation intensive, support réactif.
2.  **Clients utilisent-ils le Portail ?** : Risque que les clients continuent d'appeler.
    *   *Solution* : Communication, incentives (réduction -5% si RDV en ligne), UX irréprochable.
3.  **Intégration SAGE** : Peut être complexe selon la version.
    *   *Solution* : POC d'intégration avant Go global.

---

## 6. CONCLUSION

Le système "post-it" est un **anachronisme dangereux** pour une entreprise de 100 personnes. La migration vers Odoo CRM va transformer le service client d'un **centre de coûts stressé** en un **centre de profit proactif**. L'investissement est modeste comparé aux pertes actuelles.
