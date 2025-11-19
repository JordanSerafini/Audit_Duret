
---

## 📊 MATRICE DE PRIORISATION (Mise à jour)

| # | API | Cas d'usage | Priorité | ROI Estimé | Étude Détaillée |
|---|-----|-------------|----------|------------|-----------------|
| 1 | **SAGE API** | Intégration comptable temps réel | 🔴 CRITIQUE | 40K€/an | [Voir Étude](ETUDE_API_SAGE.md) |
| 2 | **Open Banking** | Rapprochement bancaire automatique | 🔴 CRITIQUE | 6K€/an | [Voir Étude](ETUDE_API_OPEN_BANKING.md) |
| 3 | **Chronopost/DPD** | Suivi livraisons fournisseurs | 🟢 HAUTE | 15K€/an | [Voir Étude](ETUDE_API_CHRONOPOST.md) |
| 4 | **Google Maps** | Géolocalisation chantiers | 🟢 HAUTE | 20K€/an | [Voir Étude](ETUDE_API_GOOGLE_MAPS.md) |
| 5 | **Marchés Publics** | Veille commerciale automatique | 🟢 HAUTE | +50K€/an | [Voir Étude](ETUDE_API_MARCHES_PUBLICS.md) |
| 6 | **CONSUEL** | Conformité électrique (Workflow) | 🟢 HAUTE | 2K€/an | [Voir Étude](ETUDE_API_CONSUEL.md) |
| 7 | **Stripe** | Paiement en ligne clients | 🟡 MOYENNE | 4K€/an | [Voir Étude](ETUDE_API_STRIPE.md) |
| 8 | **Météo France** | Planification chantiers | 🟡 MOYENNE | 6K€/an | [Voir Étude](ETUDE_API_METEO.md) |
| 9 | **Qualibat/RGE** | Conformité sous-traitants | 🟡 MOYENNE | Qualitatif | [Voir Étude](ETUDE_API_QUALIBAT.md) |
| 10 | **Twilio** | Notifications SMS | 🟡 MOYENNE | 8K€/an | [Voir Étude](ETUDE_API_TWILIO.md) |

---

## 🔴 PRIORITÉ CRITIQUE (Fondations)

### 1. 🏦 SAGE API (Comptabilité)
**Lien** : [ETUDE_API_SAGE.md](ETUDE_API_SAGE.md)
- **Enjeu** : Finir la double saisie Odoo/Sage.
- **Action** : Vérifier version SAGE 100 Cloud.

### 2. 🏦 Open Banking (Trésorerie)
**Lien** : [ETUDE_API_OPEN_BANKING.md](ETUDE_API_OPEN_BANKING.md)
- **Enjeu** : Automatiser le lettrage des paiements.
- **Action** : Activer module Odoo natif (Bridge/Ponto).

---

## 🟢 PRIORITÉ HAUTE (Opérationnel & Business)

### 3. 📦 Logistique (Chronopost/DPD)
**Lien** : [ETUDE_API_CHRONOPOST.md](ETUDE_API_CHRONOPOST.md)
- **Enjeu** : Savoir quand le matériel arrive sur chantier.
- **Action** : Récupérer liens tracking depuis EDI Sonepar.

### 4. 📍 Géolocalisation (Google Maps)
**Lien** : [ETUDE_API_GOOGLE_MAPS.md](ETUDE_API_GOOGLE_MAPS.md)
- **Enjeu** : Optimiser les trajets techniciens.
- **Action** : Géocoder la base clients existante.

### 5. 💼 Business Dev (Marchés Publics)
**Lien** : [ETUDE_API_MARCHES_PUBLICS.md](ETUDE_API_MARCHES_PUBLICS.md)
- **Enjeu** : Ne rater aucun appel d'offre local.
- **Action** : Script de veille BOAMP quotidien.

### 6. 🔌 Conformité (CONSUEL)
**Lien** : [ETUDE_API_CONSUEL.md](ETUDE_API_CONSUEL.md)
- **Enjeu** : Ne pas bloquer la livraison chantier.
- **Action** : Mettre en place le workflow Odoo rigoureux (pas d'API publique stable).

---

## 🟡 PRIORITÉ MOYENNE (Optimisations)

### 7. 💳 Paiement (Stripe)
**Lien** : [ETUDE_API_STRIPE.md](ETUDE_API_STRIPE.md)
- **Enjeu** : Accélérer encaissement petits montants.

### 8. 🌦️ Météo (Météo France)
**Lien** : [ETUDE_API_METEO.md](ETUDE_API_METEO.md)
- **Enjeu** : Sécurité nacelle et justification retards.

### 9. 📜 Qualité (Qualibat/RGE)
**Lien** : [ETUDE_API_QUALIBAT.md](ETUDE_API_QUALIBAT.md)
- **Enjeu** : Vérifier certifications sous-traitants.

### 10. 📱 Communication (Twilio)
**Lien** : [ETUDE_API_TWILIO.md](ETUDE_API_TWILIO.md)
- **Enjeu** : Rappels RDV SMS.

---

## 📋 PLAN D'IMPLÉMENTATION GLOBAL

### Phase 1 : Le Socle (Mois 1-3)
- [ ] **Sonepar/Rexel** (Achats)
**📧 Contact** : Direction IT - Duret Électricité
