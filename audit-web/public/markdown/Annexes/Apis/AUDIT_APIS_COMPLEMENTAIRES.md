
---

## 📊 MATRICE DE PRIORISATION (Mise à jour)

| # | API | Cas d'usage | Priorité | Impact Stratégique | Étude Détaillée |
|---|-----|-------------|----------|--------------------|-----------------|
| 1 | **SAGE API** | Intégration comptable temps réel | Priorité 1 | Suppression double saisie | [Voir Étude](ETUDE_API_SAGE.md) |
| 2 | **Chorus Pro** | Facturation Marchés Publics | Priorité 1 | Conformité légale | [Voir Étude](ETUDE_API_CHORUS.md) |
| 3 | **Rexel/Sonepar** | Commandes & Tracking Fournisseurs | Priorité 1 | Fiabilité stocks & prix | [Voir Étude](ETUDE_API_REXEL_SONEPAR.md) |
| 4 | **Open Banking** | Rapprochement bancaire automatique | Priorité 2 | Gain temps administratif | [Voir Étude](ETUDE_API_OPEN_BANKING.md) |
| 5 | **Pappers/INSEE** | Vérification Solvabilité/RGE | Priorité 2 | Sécurisation sous-traitance | [Voir Étude](ETUDE_API_PAPPERS.md) |
| 6 | **Google Maps** | Géolocalisation & Optimisation | Priorité 2 | Efficacité déplacements | [Voir Étude](ETUDE_API_GOOGLE_MAPS.md) |
| 7 | **Marchés Publics** | Veille commerciale automatique | Priorité 2 | Développement commercial | [Voir Étude](ETUDE_API_MARCHES_PUBLICS.md) |
| 8 | **CONSUEL** | Conformité électrique | Priorité 3 | Qualité & Process | [Voir Étude](ETUDE_API_CONSUEL.md) |
| 9 | **Météo France** | Justification retards & Sécurité | Priorité 3 | Gestion contractuelle | [Voir Étude](ETUDE_API_METEO.md) |
| 10 | **Twilio** | Rappels RDV (Dépannage) | Priorité 3 | Expérience client | [Voir Étude](ETUDE_API_TWILIO.md) |

---

## PRIORITÉ 1 : FONDATIONS (Critique)

### 1. SAGE API (Comptabilité)
**Lien** : [ETUDE_API_SAGE.md](ETUDE_API_SAGE.md)
- **Enjeu** : Mettre fin à la double saisie entre la Gestion Commerciale et la Comptabilité.
- **Action** : Vérifier la compatibilité de la version SAGE 100 Cloud actuelle.

### 2. Chorus Pro (Facturation Publique)
**Lien** : [ETUDE_API_CHORUS.md](ETUDE_API_CHORUS.md)
- **Enjeu** : Obligation légale pour la facturation du secteur public. Automatisation indispensable pour réduire les délais de paiement.
- **Action** : Mise en place du connecteur natif Odoo ou via API PISTE.

### 3. Rexel/Sonepar (Logistique Fournisseur)
**Lien** : [ETUDE_API_REXEL_SONEPAR.md](ETUDE_API_REXEL_SONEPAR.md)
- **Enjeu** : Automatisation des commandes, mise à jour des tarifs en temps réel et suivi des livraisons.
- **Action** : Configuration du Punchout Odoo et des flux EDI.

---

## PRIORITÉ 2 : OPÉRATIONNEL & BUSINESS (Haute)

### 4. Open Banking (Trésorerie)
**Lien** : [ETUDE_API_OPEN_BANKING.md](ETUDE_API_OPEN_BANKING.md)
- **Enjeu** : Automatisation du lettrage des paiements clients et fournisseurs.
- **Action** : Activation du module Odoo natif (agrégateur bancaire).

### 5. Pappers/INSEE (Conformité Tiers)
**Lien** : [ETUDE_API_PAPPERS.md](ETUDE_API_PAPPERS.md)
- **Enjeu** : Vérification automatique des données légales (Kbis, RGE) des sous-traitants pour le devoir de vigilance.
- **Action** : Mise en place d'un module de vérification périodique.

### 6. Géolocalisation (Google Maps)
**Lien** : [ETUDE_API_GOOGLE_MAPS.md](ETUDE_API_GOOGLE_MAPS.md)
- **Enjeu** : Optimisation des trajets des techniciens et calcul des frais de déplacement.
- **Action** : Géocodage de la base clients et intégration au module Field Service.

### 7. Veille Marchés Publics
**Lien** : [ETUDE_API_MARCHES_PUBLICS.md](ETUDE_API_MARCHES_PUBLICS.md)
- **Enjeu** : Détection automatique des appels d'offres pertinents pour ne rater aucune opportunité locale.
- **Action** : Mise en place d'un script de veille sur les sources officielles (BOAMP, etc.).

---

## PRIORITÉ 3 : OPTIMISATIONS (Moyenne)

### 8. Conformité (CONSUEL)
**Lien** : [ETUDE_API_CONSUEL.md](ETUDE_API_CONSUEL.md)
- **Enjeu** : Fluidifier l'obtention des attestations de conformité pour ne pas bloquer la livraison des chantiers.
- **Action** : Intégration d'un workflow de demande rigoureux dans Odoo.

### 9. Météo (Météo France)
**Lien** : [ETUDE_API_METEO.md](ETUDE_API_METEO.md)
- **Enjeu** : Justification factuelle des retards de chantier ou des arrêts pour intempéries (sécurité nacelle).

### 10. Communication (Twilio)
**Lien** : [ETUDE_API_TWILIO.md](ETUDE_API_TWILIO.md)
- **Enjeu** : Réduction des rendez-vous manqués (No-Show) pour le service Maintenance via rappels SMS automatiques.

---

## 📋 PLAN D'IMPLÉMENTATION GLOBAL

### Phase 1 : Le Socle (Mois 1-3)
- [ ] **Sonepar/Rexel** (Achats)
**📧 Contact** : Direction IT - Duret Électricité
