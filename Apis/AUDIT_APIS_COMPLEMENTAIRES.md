
---

## 📊 MATRICE DE PRIORISATION (Mise à jour)

| # | API | Cas d'usage | Priorité | ROI Estimé | Étude Détaillée |
|---|-----|-------------|----------|------------|-----------------|
| 1 | **SAGE API** | Intégration comptable temps réel | 🔴 CRITIQUE | 40K€/an | [Voir Étude](ETUDE_API_SAGE.md) |
| 2 | **Chorus Pro** | Facturation Marchés Publics (Obligatoire) | 🔴 CRITIQUE | Vital | [Voir Étude](ETUDE_API_CHORUS.md) |
| 3 | **Rexel/Sonepar** | Commandes & Tracking Fournisseurs | 🔴 CRITIQUE | 25K€/an | [Voir Étude](ETUDE_API_REXEL_SONEPAR.md) |
| 4 | **Open Banking** | Rapprochement bancaire automatique | 🟢 HAUTE | 6K€/an | [Voir Étude](ETUDE_API_OPEN_BANKING.md) |
| 5 | **Pappers/INSEE** | Vérification Solvabilité/RGE Sous-traitants | 🟢 HAUTE | Sécurité | [Voir Étude](ETUDE_API_PAPPERS.md) |
| 6 | **Google Maps** | Géolocalisation & Optimisation Trajets | 🟢 HAUTE | 20K€/an | [Voir Étude](ETUDE_API_GOOGLE_MAPS.md) |
| 7 | **Marchés Publics** | Veille commerciale automatique (BOAMP) | 🟢 HAUTE | +50K€/an | [Voir Étude](ETUDE_API_MARCHES_PUBLICS.md) |
| 8 | **CONSUEL** | Conformité électrique (Workflow interne) | 🟡 MOYENNE | 2K€/an | [Voir Étude](ETUDE_API_CONSUEL.md) |
| 9 | **Météo France** | Justification retards & Sécurité | 🟡 MOYENNE | 6K€/an | [Voir Étude](ETUDE_API_METEO.md) |
| 10 | **Twilio** | Rappels RDV (Dépannage/Maintenance) | 🟡 MOYENNE | 8K€/an | [Voir Étude](ETUDE_API_TWILIO.md) |

---

## 🔴 PRIORITÉ CRITIQUE (Fondations)

### 1. 🏦 SAGE API (Comptabilité)
**Lien** : [ETUDE_API_SAGE.md](ETUDE_API_SAGE.md)
- **Enjeu** : Finir la double saisie Odoo/Sage.
- **Action** : Vérifier version SAGE 100 Cloud.

### 2. �️ Chorus Pro (Facturation Publique)
**Lien** : [ETUDE_API_CHORUS.md](ETUDE_API_CHORUS.md)
- **Enjeu** : Obligation légale pour facturer le secteur public. Automatisation vitale.
- **Action** : Connecteur natif Odoo ou API PISTE.

### 3. 📦 Rexel/Sonepar (Logistique Fournisseur)
**Lien** : [ETUDE_API_REXEL_SONEPAR.md](ETUDE_API_REXEL_SONEPAR.md)
- **Enjeu** : Commandes EDI, prix nets à jour, et tracking livraison matériel.
- **Action** : Punchout Odoo + EDI.

---

## 🟢 PRIORITÉ HAUTE (Opérationnel & Business)

### 4. �🏦 Open Banking (Trésorerie)
**Lien** : [ETUDE_API_OPEN_BANKING.md](ETUDE_API_OPEN_BANKING.md)
- **Enjeu** : Automatiser le lettrage des paiements.
- **Action** : Activer module Odoo natif (Bridge/Ponto).

### 5. � Pappers/INSEE (Conformité Tiers)
**Lien** : [ETUDE_API_PAPPERS.md](ETUDE_API_PAPPERS.md)
- **Enjeu** : Vérification automatique Kbis/RGE des sous-traitants (Devoir de vigilance).
- **Action** : Module auto-complétion + vérification périodique.

### 6. 📍 Géolocalisation (Google Maps)
**Lien** : [ETUDE_API_GOOGLE_MAPS.md](ETUDE_API_GOOGLE_MAPS.md)
- **Enjeu** : Optimiser les trajets techniciens.
- **Action** : Géocoder la base clients existante.

### 7. 💼 Business Dev (Marchés Publics)
**Lien** : [ETUDE_API_MARCHES_PUBLICS.md](ETUDE_API_MARCHES_PUBLICS.md)
- **Enjeu** : Ne rater aucun appel d'offre local.
- **Action** : Script de veille BOAMP quotidien.

---

## 🟡 PRIORITÉ MOYENNE (Optimisations)

### 8. 🔌 Conformité (CONSUEL)
**Lien** : [ETUDE_API_CONSUEL.md](ETUDE_API_CONSUEL.md)
- **Enjeu** : Ne pas bloquer la livraison chantier.
- **Action** : Workflow Odoo rigoureux.

### 9. 🌦️ Météo (Météo France)
**Lien** : [ETUDE_API_METEO.md](ETUDE_API_METEO.md)
- **Enjeu** : Sécurité nacelle et justification retards (Chômage intempéries).

### 10. 📱 Communication (Twilio)
**Lien** : [ETUDE_API_TWILIO.md](ETUDE_API_TWILIO.md)
- **Enjeu** : Rappels RDV SMS pour le service Maintenance/Dépannage.

---

## 📋 PLAN D'IMPLÉMENTATION GLOBAL

### Phase 1 : Le Socle (Mois 1-3)
- [ ] **Sonepar/Rexel** (Achats)
**📧 Contact** : Direction IT - Duret Électricité
