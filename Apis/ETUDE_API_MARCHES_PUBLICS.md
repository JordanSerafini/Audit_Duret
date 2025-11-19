# Étude API Marchés Publics (BOAMP) - 2025

## Vue d'ensemble

Pour développer son chiffre d'affaires, Duret Électricité doit répondre aux appels d'offres publics (Mairies, Écoles, Hôpitaux, Collectivités).
La veille manuelle sur les plateformes (BOAMP, France Marchés, Klekoon) est chronophage et fastidieuse.

L'État français (DILA) propose des APIs ouvertes pour récupérer les avis de marchés publics en temps réel.

## Informations sur l'API

- **Source**: DILA (Direction de l'information légale et administrative)
- **API**: PISTE / BOAMP
- **Portail**: https://piste.gouv.fr/
- **Coût**: Gratuit (Open Data)
- **Authentification**: OAuth 2.0 (Client Credentials)

## Endpoints Clés

### API BOAMP (Bulletin Officiel des Annonces des Marchés Publics)

**Endpoint**: `POST /dila/boamp/api/v1/recherche`

Permet de rechercher des avis avec des critères précis.

**Critères de filtrage (Logique Métier)**:
1.  **Mots-clés**: "Électricité", "Éclairage public", "Rénovation énergétique", "Photovoltaïque".
2.  **Localisation**: Départements 73 (Savoie), 74 (Haute-Savoie), 38 (Isère).
3.  **Type de marché**: Travaux.
4.  **Date**: Publié depuis < 24h.

**Exemple de Payload**:
```json
{
  "criterion": "mots_descripteurs:(Electricité) AND departement:(73 OR 74)",
  "sort": "date_parution_desc"
}
```

## Intégration Odoo (CRM)

### Workflow "Veille Automatique"

1.  **Collecte (Nuit)**
    - Script Python interroge l'API BOAMP chaque nuit.
    - Récupère les nouveaux avis correspondant aux critères.

2.  **Filtrage Intelligent (IA ou Mots-clés)**
    - Analyse du résumé (Objet du marché).
    - Exclusion des "faux positifs" (ex: "Fourniture d'électricité" = Contrat énergie, pas travaux).

3.  **Création Piste CRM**
    - Création automatique d'une opportunité dans Odoo CRM.
    - **Titre**: "AO Mairie Albertville - Rénovation École".
    - **Tags**: #AppelOffre #Public.
    - **Description**: Lien vers le DCE, Date limite réponse, Montant estimé.

4.  **Notification**
    - Email au Directeur Commercial : "3 nouveaux appels d'offres détectés ce matin".

### Code Exemple (Python)

```python
# models/crm_lead.py

def fetch_public_tenders(self):
    url = "https://api.piste.gouv.fr/dila/boamp/api/v1/recherche"
    headers = {"Authorization": "Bearer YOUR_TOKEN"}
    
    query = {
        "criterion": "famille:(Travaux) AND (Electricité OR Eclairage) AND departement:(73)",
        "nb_resultats": 10
    }
    
    response = requests.post(url, json=query, headers=headers)
    tenders = response.json()
    
    for tender in tenders['resultats']:
        # Vérifier si déjà importé
        if not self.search([('tender_id', '=', tender['id_web'])]):
            self.create({
                'name': f"AO: {tender['objet']}",
                'type': 'lead',
                'description': f"Date limite: {tender['date_limite']}\nLien: {tender['url']}",
                'tender_id': tender['id_web'],
                'source_id': self.env.ref('crm.source_public_tender').id
            })
```

## ROI Estimé

### Gains
1.  **Gain de Temps Commercial**:
    - Veille manuelle = 30 min/jour.
    - Automatisée = 0 min.
    - Gain: 10h/mois = **6000€/an** (coût chargé cadre).
2.  **Opportunités Manquées**:
    - Ne plus rater un appel d'offre critique parce qu'on a oublié de regarder le site un mardi.
    - 1 affaire gagnée en plus tous les 2 ans = **+50k€ Marge**.

### Coût
- **API**: Gratuit.
- **Dev Module**: 2 jours (1000€).

## Conclusion

C'est un "Quick Win" absolu pour le développement commercial. L'API est gratuite, stable et facile à intégrer.
Cela transforme Odoo en **apporteur d'affaires**.

**Recommandation**: **GO Phase 1** (En même temps que le CRM).
