# 🔍 ÉTUDE DÉTAILLÉE : API PAPPERS / INSEE

## 1. 📋 Fiche d'Identité
- **Nom** : Pappers (ou API Sirene INSEE)
- **Catégorie** : Data / Conformité / KYC
- **Priorité** : 🟢 **HAUTE** (Sécurité Juridique)
- **Complexité** : Faible (API REST simple)
- **Coût API** : Gratuit (Open Data) ou Freemium (Pappers)

## 2. 🎯 Contexte & Enjeux pour Duret
Duret fait appel à des sous-traitants pour certains chantiers spécifiques ou en cas de surcharge.
- **Problème Actuel** : Vérification manuelle (ou inexistante) de la santé financière et des certifications (RGE, Qualibat) des sous-traitants.
- **Risque** : "Devoir de vigilance" non respecté. Risque de faillite d'un sous-traitant en plein chantier. Fraude au RIB.
- **Opportunité** : Automatiser la création des fiches fournisseurs et la vérification de leur solvabilité.

## 3. 🛠️ Fonctionnalités Clés (API)
1.  **Autocomplétion** : Saisir un SIRET/Nom → Récupérer Adresse, TVA Intra, Dirigeants.
2.  **Santé Financière** : Récupérer les derniers bilans, procédures collectives (Redressement, Liquidation).
3.  **Documents Légaux** : Téléchargement Kbis, Statuts (via Pappers).
4.  **Certifications** : Vérification RGE/Qualibat (via API ADEME croisée).

## 4. 💻 Intégration Odoo (Technique)

### Module `partner_autocomplete`
Odoo intègre nativement un service d'autocomplétion (IAP) payant par crédit.
Alternative : Développer un connecteur simple vers Pappers (gratuit pour les données de base).

### Workflow Cible
1.  **Création Fournisseur** : L'utilisateur tape le SIRET.
2.  **Appel API** : Odoo remplit nom, adresse, TVA, capital.
3.  **Check Solvabilité** : Un indicateur (Vert/Orange/Rouge) s'affiche sur la fiche partenaire basé sur les procédures collectives en cours.
4.  **Mise à jour** : Cron mensuel pour vérifier qu'aucun sous-traitant actif n'est passé en liquidation.

### Exemple Code (Python)
```python
def check_solvency(siret):
    url = f"https://api.pappers.fr/v2/entreprise?siret={siret}&api_token=XXX"
    res = requests.get(url).json()
    if res['procedures_collectives']:
        return 'DANGER'
    return 'OK'
```

## 5. 💰 Analyse Coûts & ROI

### Coûts
- **Dev** : 1 jour (Connecteur simple Pappers).
- **API** : Gratuit (Pappers plan gratuit suffisant pour <100 requêtes/mois) ou Odoo IAP (quelques centimes/fiche).

### ROI
- **Gain Temps** : 5 min par création de fiche (plus d'erreurs de saisie).
- **Gain Risque** : Éviter **UN** sous-traitant défaillant sur un chantier critique peut sauver 10k€+ et la réputation de Duret.

## 6. ✅ Verdict
**TRÈS RECOMMANDÉ**.
C'est un "Quick Win" facile à mettre en place qui sécurise les achats et la sous-traitance.
