# Étude API Qualibat - 2025

## Vue d'ensemble

Duret Électricité fait appel à des sous-traitants (Maçonnerie, Terrassement, Spécialistes).
Il est de la **responsabilité légale** du donneur d'ordre de vérifier que ses sous-traitants sont qualifiés et assurés.

L'API Qualibat permet de vérifier automatiquement la validité des certificats RGE / Qualibat des partenaires.

## Informations sur l'API

- **Accès** : Restreint (Partenaires ou Entreprises certifiées).
- **Portail** : https://www.qualibat.com/
- **Alternative** : API de l'ADEME (Open Data pour les entreprises RGE).

## API ADEME (Open Data RGE)

L'ADEME met à disposition une API publique recensant toutes les entreprises RGE (Reconnu Garant de l'Environnement).

**Endpoint** : `https://data.ademe.fr/data-fair/api/v1/datasets/liste-des-entreprises-rge-2/lines`

**Cas d'usage Duret** :
- Vérifier si le sous-traitant "Terrassement 73" est bien RGE (obligatoire pour certaines aides MaPrimeRénov).

## Logique Métier & Intégration Odoo

### Workflow "Agrément Sous-Traitant"

1.  **Création Fiche Fournisseur (Odoo)**
    - Saisie du SIRET.
    
2.  **Vérification Automatique (API ADEME)**
    - Odoo interroge l'API avec le SIRET.
    - Récupère : Domaines de qualification (ex: "Installation pompe à chaleur", "Isolation").
    - Récupère : Date validité certificat.

3.  **Blocage Commande**
    - Si certificat expiré ou inexistant : **Impossible de passer une Commande Achat** de sous-traitance.
    - Alerte : "Ce sous-traitant n'est plus certifié RGE depuis le 01/11/2025".

### Code Exemple (Python)

```python
# models/res_partner.py

def check_rge_status(self):
    base_url = "https://data.ademe.fr/data-fair/api/v1/datasets/liste-des-entreprises-rge-2/lines"
    params = {
        "q": self.siret,
        "size": 1
    }
    
    response = requests.get(base_url, params=params)
    data = response.json()
    
    if data['total'] > 0:
        cert = data['results'][0]
        self.rge_certified = True
        self.rge_expiry_date = cert['date_fin_validite']
        self.rge_domains = cert['domaines_travaux']
    else:
        self.rge_certified = False
        # Alerte email au responsable achats
```

## ROI Estimé

### Gains
- **Sécurité Juridique** : Éviter un redressement ou un refus de prime CEE pour le client final.
- **Image Qualité** : Garantie que tous les intervenants sont qualifiés.

### Coût
- **API** : Gratuit (Open Data ADEME).
- **Dev** : 1 jour (500€).

## Recommandation

**GO Phase 3**.
Moins critique que la facturation ou le planning, mais indispensable si Duret se positionne sur le marché de la rénovation énergétique (IRVE, PV, Rénovation globale).
