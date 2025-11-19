# 👥 AUDIT & PLAN D'ACTION : RESSOURCES HUMAINES

> **Date** : Novembre 2025
> **Auditeur** : Agentic AI
> **Statut** : 🟠 URGENT (Risque Burn-out & Conformité)

---

## 1. 🔍 DIAGNOSTIC : L'ARCHIPEL DES 22 SYSTÈMES

Le service RH (Sophie) gère 100 collaborateurs avec une **fragmentation extrême** des outils.

### 🚨 Les 3 Points de Douleur Critiques

#### 1. La Surcharge "Paie" (Perte : 3 jours / semaine)
*   **Constat** : Sophie passe **60% de son temps** à préparer la paie.
*   **Processus** : Récupérer heures (Excel/Papier) -> Saisir dans Silae -> Vérifier -> Corriger -> Relancer managers.
*   **Conséquence** : Plus de temps pour le "vrai" RH (Formation, Carrière, QVT).
*   **Risque** : Burn-out de la responsable RH (Point de rupture proche).

#### 2. Le "Copier-Coller" Permanent
*   **Constat** : Une même donnée (ex: adresse salarié) est saisie **5 à 6 fois**.
*   **Outils** : SAGE, Popaye, Silae, Excel (x7), Mutuelle, Médecine du travail...
*   **Conséquence** : Erreurs de saisie inévitables, données non synchronisées.
*   **Impact** : Bulletins de paie faux, mécontentement salariés.

#### 3. Onboarding "Bricolé"
*   **Constat** : L'accueil d'un nouveau se fait avec une checklist papier et 7 fichiers Excel.
*   **Conséquence** : Oublis fréquents (PC pas prêt, accès mail manquant, EPI taille incorrecte).
*   **Impact** : Mauvaise image employeur, perte de productivité J1-J7.

---

## 2. 🎯 LA CIBLE : "SIRH UNIFIÉ & CONNECTÉ"

L'objectif est de centraliser la donnée RH dans **Odoo** et d'automatiser la paie avec **PayFit** (ou Silae connecté).

### Scénario Recommandé : Odoo RH + PayFit

Nous recommandons cette architecture hybride pour le meilleur des deux mondes :
*   **Odoo** : Gestion Quotidienne (Congés, Notes de frais, Dossier Employé, Recrutement).
*   **PayFit** : Moteur de Paie & DSN (Expertise légale française).

| Domaine | Outil Cible | Bénéfice |
| :--- | :--- | :--- |
| **Dossier Employé** | **Odoo Employés** | Source unique de vérité (Master Data) |
| **Congés / Absences** | **Odoo Congés** | Validation mobile, sync auto vers PayFit |
| **Notes de Frais** | **Odoo NDF** | Scan OCR, validation manager, sync PayFit |
| **Paie / DSN** | **PayFit** | Calcul auto, bulletins digitaux, virement SEPA |
| **Onboarding** | **Odoo Plan** | Workflow automatique (Tâches IT, Logistique, RH) |

---

## 3. 📉 ANALYSE DE LA VALEUR (ROI)

### Coûts de l'Inefficacité Actuelle
*   **Temps Paie** : 12 jours/mois x 300€/j = **3 600 € / mois**.
*   **Erreurs Paie** : Estimé à **500 € / mois** (régularisations, temps perdu).
*   **Onboarding** : 10h perdues/embauche x 10 embauches/an = **5 000 € / an**.

### Gains Estimés (Odoo + PayFit)
*   **Temps Paie** : Réduit à 2 jours/mois -> Gain **3 000 € / mois**.
*   **Productivité RH** : Sophie récupère **2.5 jours/semaine** pour des tâches à valeur ajoutée.
*   **Satisfaction** : Bulletins justes, app mobile pour les congés (fin du papier).

> **ROI Global** : Rentabilisé dès le 6ème mois. Le gain principal est la **sécurisation du poste RH**.

---

## 4. 🗺️ PLAN D'ACTION : "DATA MASTER"

### Phase 1 : Nettoyage & Migration (Mois 1-2)
*   [ ] Audit des données actuelles (Excel vs Silae).
*   [ ] Import propre dans **Odoo Employés**.
*   [ ] Configuration **PayFit** (Reprise d'historique).

### Phase 2 : Congés & NDF (Mois 3)
*   [ ] Déploiement App Mobile Odoo pour tous.
*   [ ] Arrêt des demandes papier.
*   [ ] Formation Managers (Validation).

### Phase 3 : Automatisation Paie (Mois 4)
*   [ ] Connexion Odoo <-> PayFit (API ou Export/Import).
*   [ ] Premier cycle de paie automatisé.
*   [ ] Ouverture coffre-fort numérique salariés.

---

## 5. ⚠️ POINTS DE VIGILANCE

1.  **Fiabilité PayFit** : Vérifier la gestion des cas spécifiques BTP (Paniers, Zones, Intempéries). *Si trop complexe, rester sur Silae mais avec connecteur Odoo.*
2.  **Conduite du Changement** : Les salariés "terrain" doivent adopter l'app mobile pour les congés.
3.  **RGPD** : Odoo et PayFit sont conformes, mais attention aux droits d'accès dans Odoo.

---

## 6. CONCLUSION

La situation actuelle n'est pas tenable pour une PME de 100 personnes. La centralisation sur Odoo RH couplée à un moteur de paie moderne (PayFit) va transformer le service RH d'un "centre de saisie" en un "partenaire stratégique" pour l'entreprise.
