# 3 SCÉNARIOS DÉTAILLÉS - DURET ÉLECTRICITÉ

**Date** : Janvier 2025
**Contexte** : Transformation digitale PME BTP (~100 collaborateurs)
**Périmètre** : ERP, CRM, Field Service, SIRH, Paie, BI

---

## 1. RAPPEL DES BESOINS

L'audit a identifié 8 catégories de besoins critiques pour supporter la croissance de Duret Électricité :

1.  **ERP** : Gestion commerciale (devis, facturation), suivi de chantiers et budgets.
2.  **CRM** : Centralisation de la relation client, suivi des opportunités et SAV.
3.  **Field Service** : Application mobile pour les techniciens (bons d'intervention, photos, signature).
4.  **Stocks** : Gestion des approvisionnements, traçabilité (codes-barres/RFID).
5.  **Comptabilité** : Analytique par chantier, suivi de trésorerie.
6.  **RH** : Gestion des congés, notes de frais, dossiers collaborateurs.
7.  **Paie** : Conformité légale, automatisation des bulletins (DSN).
8.  **BI (Business Intelligence)** : Pilotage de l'activité en temps réel.

---

## 2. SCÉNARIO 1 : ODOO ENTERPRISE (RECOMMANDÉ)

### Architecture Technique
Ce scénario repose sur une plateforme unique, **Odoo Enterprise**, couvrant 90% des besoins, complétée par une solution spécialisée pour la paie.

*   **Cœur du système** : Odoo Enterprise (ERP, CRM, Field Service, Stocks, Compta, RH, BI).
*   **Paie** : PayFit (ou Silae), connecté via export des variables.

### Configuration et Coûts

**Licences Odoo Enterprise** :
*   100 utilisateurs ( bureau + terrain).
*   Coût annuel : **29 880 €** (24,90 € / user / mois).

**Stratégie de Déploiement** :
*   **Phase 1 (An 1)** : Déploiement du socle ERP/CRM et des modules RH natifs (Congés, Frais). Centralisation des données dans Odoo.
*   **Phase 2 (An 2)** : Intégration PayFit pour la gestion de la paie (si nécessaire).

**Budget Estimé sur 3 ans** :
*   Investissement initial (An 1) : **68 080 €** (Licences, Intégration, Formation).
*   Récurrent (An 2-3) : **61 072 € / an**.
*   **Total 3 ans : ~190 000 €**.

### Analyse
*   **Avantages** : Unicité de la donnée, coût maîtrisé, évolutivité forte, application mobile native performante.
*   **Points de vigilance** : Nécessite un paramétrage précis pour le BTP (templates de devis), gestion de la paie externe.

---

## 3. SCÉNARIO 2 : EBP + BEST-OF-BREED

### Architecture Technique
Ce scénario privilégie des logiciels spécialisés pour chaque fonction, connectés entre eux.

*   **ERP** : EBP Bâtiment PRO.
*   **CRM** : HubSpot Service Pro.
*   **Field Service** : Praxedo.
*   **SIRH** : Lucca.
*   **Paie** : Silae.

### Configuration et Coûts

**Budget Estimé sur 3 ans** :
*   Investissement initial (An 1) : **112 320 €**.
*   Récurrent (An 2-3) : **91 320 € / an**.
*   **Total 3 ans : ~295 000 €**.

### Analyse
*   **Avantages** : Solutions expertes dans leur domaine (HubSpot pour le CRM, Lucca pour les RH), fonctionnalités BTP natives dans EBP.
*   **Inconvénients** : Coût élevé (+55% vs Odoo), complexité de gestion (5 contrats, 5 interfaces), silos de données, intégrations fragiles.

---

## 4. SCÉNARIO 3 : HYBRIDE (ODOO + HUBSPOT + CUSTOM)

### Architecture Technique
Ce scénario vise l'excellence fonctionnelle sans compromis, en combinant Odoo (Back-office) avec des solutions "Best-in-Class" pour le Front-office.

*   **Back-office** : Odoo (Ventes, Stocks, Compta).
*   **CRM** : HubSpot.
*   **Field Service** : Application mobile sur mesure (React Native).
*   **RH/Paie** : Lucca + Silae.

### Configuration et Coûts

**Budget Estimé sur 3 ans** :
*   Investissement initial (An 1) : **183 200 €** (dont 72k€ pour le dév. mobile).
*   Récurrent (An 2-3) : **106 600 € / an**.
*   **Total 3 ans : ~396 000 €**.

### Analyse
*   **Avantages** : Expérience utilisateur optimale, application terrain 100% sur mesure.
*   **Inconvénients** : Budget très élevé (+108% vs Odoo), dépendance forte à une équipe de développement, délais de mise en œuvre longs (12-18 mois).

---

## 5. SYNTHÈSE COMPARATIVE

| Critère | Scénario 1 (Odoo) | Scénario 2 (EBP+) | Scénario 3 (Hybride) |
| :--- | :--- | :--- | :--- |
| **Budget 3 ans** | **190 k€** | 295 k€ | 396 k€ |
| **Couverture** | 100% | 88% | 100% |
| **Complexité** | Faible (1 plateforme) | Élevée (5 outils) | Très Élevée (Dev spécifique) |
| **Scalabilité** | Excellente | Limitée (EBP) | Excellente |
| **Délai** | Court (6 mois) | Moyen (9 mois) | Long (12-18 mois) |

---

## 6. RECOMMANDATION

Le **Scénario 1 (Odoo Enterprise)** est recommandé pour Duret Électricité.

**Justification** :
1.  **Rapport Qualité/Prix** : Couverture fonctionnelle complète pour un budget maîtrisé.
2.  **Simplicité** : Réduit la charge mentale de l'équipe IT (un seul interlocuteur, une seule base de données).
3.  **Modernité** : Odoo offre une base solide pour les futurs projets Data & IA.

**Réserve** : Si l'adoption de l'interface CRM d'Odoo pose problème ou si les formulaires CERFA exigent une complexité non gérable en standard, le Scénario 3 pourra être envisagé, mais nécessitera une rallonge budgétaire conséquente.
