# 🔌 GUIDE D'INTÉGRATION : APIs FOURNISSEURS ÉLECTRIQUES

> **Date** : Novembre 2025  
> **Contexte** : Audit Duret Électricité - Optimisation Achats  
> **Statut** : 📋 Documentation Technique

---

## 🎯 OBJECTIF

Intégrer les APIs des **2 principaux fournisseurs** de Duret Électricité (Sonepar, Rexel) pour automatiser :
- 📦 Consultation catalogue produits en temps réel
- 💰 Récupération prix & disponibilités
- 🛒 Passation commandes automatiques
- 📊 Suivi livraisons & factures

---

## 📊 COMPARATIF SONEPAR vs REXEL

| Critère | 🟢 Sonepar Connect | 🟠 Rexel API |
|---------|-------------------|--------------|
| **Documentation** | ⭐⭐⭐⭐⭐ Excellente (OpenAPI 3.0) | ⭐⭐⭐ Moyenne |
| **Authentification** | OAuth 2.0 (Client Credentials) | API Key + Basic Auth |
| **Catalogue Produits** | ✅ Oui (200K+ refs) | ✅ Oui (150K+ refs) |
| **Prix Temps Réel** | ✅ Oui (tarifs négociés) | ✅ Oui |
| **Stock Disponible** | ✅ Oui (par agence) | ⚠️ Limité |
| **Passation Commande** | ✅ Oui (API POST) | ⚠️ Nécessite validation manuelle |
| **Suivi Livraison** | ✅ Oui (tracking temps réel) | ⚠️ Partiel |
| **Facturation Électronique** | ✅ Oui (PDF + XML) | ✅ Oui |
| **Webhook Alerts** | ✅ Oui (rupture stock, livraison) | ❌ Non |
| **Rate Limit** | 1000 req/heure | 500 req/heure |
| **SLA Support** | 99.9% uptime | 99.5% uptime |
| **Coût Intégration** | Gratuit (client) | Gratuit (client) |

**Recommandation** : **Prioriser Sonepar** (meilleure API, documentation complète).

---

## 🔧 ARCHITECTURE D'INTÉGRATION RECOMMANDÉE

### Option 1 : Intégration Odoo Native (Recommandée)

```
┌─────────────────────────────────────────┐
│         Odoo Achats (Front-End)         │
│   - Recherche produit                   │
│   - Comparaison prix Sonepar/Rexel      │
│   - Création commande                   │
└──────────────────┬──────────────────────┘
                   │
                   │ Appels API via Module Custom
                   ▼
┌─────────────────────────────────────────┐
│   Module Odoo "Connector Fournisseurs"  │
│   (Python - Développement Custom)       │
│                                         │
│   - Gestion OAuth tokens               │
│   - Cache produits (Redis)             │
│   - Queue commandes (Celery)           │
│   - Logs & monitoring                  │
└──────────────┬──────────────────────────┘
               │
       ┌───────┴────────┐
       │                │
       ▼                ▼
┌──────────────┐  ┌──────────────┐
│  Sonepar     │  │   Rexel      │
│  Connect API │  │   API        │
└──────────────┘  └──────────────┘
```

### Endpoints Clés à Intégrer

**SONEPAR CONNECT**
```
GET  /api/v2/products/search?q={query}&limit=50
GET  /api/v2/products/{ean}/price?qty={quantity}
GET  /api/v2/products/{ean}/stock?agencyId={id}
POST /api/v2/orders
GET  /api/v2/orders/{orderId}/status
GET  /api/v2/invoices/{invoiceId}/pdf
```

**REXEL API**
```
GET  /catalog/products?search={query}
GET  /pricing/{productId}?customer={customerId}
POST /orders/create
GET  /orders/{orderId}
```

---

## 💻 EXEMPLE CODE : Recherche Produit (Sonepar)

```python
# Fichier: odoo/addons/duret_supplier_connector/models/sonepar_api.py

import requests
from odoo import models, fields, api
from odoo.exceptions import UserError

class SoneparConnector(models.Model):
    _name = 'duret.sonepar.connector'
    _description = 'Sonepar API Connector'

    # Configuration
    client_id = fields.Char('Client ID', required=True)
    client_secret = fields.Char('Client Secret', required=True)
    base_url = fields.Char('Base URL', default='https://api.sonepar.com/connect/v2')
    access_token = fields.Char('Access Token', readonly=True)
    token_expiry = fields.Datetime('Token Expiry', readonly=True)

    def _get_access_token(self):
        """Obtient un token OAuth 2.0"""
        if self.access_token and self.token_expiry > fields.Datetime.now():
            return self.access_token

        url = f"{self.base_url}/oauth/token"
        payload = {
            'grant_type': 'client_credentials',
            'client_id': self.client_id,
            'client_secret': self.client_secret
        }
        
        response = requests.post(url, data=payload)
        if response.status_code != 200:
            raise UserError(f"Erreur auth Sonepar: {response.text}")

        data = response.json()
        self.access_token = data['access_token']
        self.token_expiry = fields.Datetime.now() + timedelta(seconds=data['expires_in'])
        
        return self.access_token

    @api.model
    def search_products(self, query, limit=50):
        """Recherche produits via API Sonepar"""
        token = self._get_access_token()
        headers = {'Authorization': f'Bearer {token}'}
        
        url = f"{self.base_url}/products/search"
        params = {'q': query, 'limit': limit}
        
        response = requests.get(url, headers=headers, params=params)
        if response.status_code != 200:
            raise UserError(f"Erreur recherche: {response.text}")

        products = response.json()
        return [{
            'ean': p['ean'],
            'reference': p['supplierRef'],
            'name': p['description'],
            'brand': p['brand'],
            'unit': p['unit'],
            'image_url': p.get('imageUrl')
        } for p in products['items']]

    @api.model
    def get_price(self, ean, quantity=1):
        """Récupère prix négocié pour un produit"""
        token = self._get_access_token()
        headers = {'Authorization': f'Bearer {token}'}
        
        url = f"{self.base_url}/products/{ean}/price"
        params = {'qty': quantity}
        
        response = requests.get(url, headers=headers, params=params)
        if response.status_code != 200:
            raise UserError(f"Erreur prix: {response.text}")

        data = response.json()
        return {
            'price_unit': data['unitPrice'],
            'currency': data['currency'],
            'discount': data.get('discount', 0),
            'available_qty': data.get('availableQty', 0)
        }
```

---

## 🚀 PLAN D'IMPLÉMENTATION

### Phase 1 : POC Sonepar (Mois 1-2)

**Semaine 1-2 : Setup Technique**
- [ ] Demande accès API Sonepar (via compte commercial)
- [ ] Création environnement de dev (Odoo sandbox)
- [ ] Installation dépendances (requests, redis, celery)

**Semaine 3-4 : Développement Module Odoo**
- [ ] Création module `duret_supplier_connector`
- [ ] Implémentation OAuth 2.0 Sonepar
- [ ] Endpoints : Recherche produits + Prix

**Semaine 5-6 : Tests & Validation**
- [ ] Tests unitaires (100 produits)
- [ ] Tests performance (rate limit)
- [ ] Validation avec acheteurs (Sylvie)

**Semaine 7-8 : Go-Live Pilote**
- [ ] Déploiement production (10 utilisateurs)
- [ ] Formation équipe achats
- [ ] Monitoring & ajustements

### Phase 2 : Extension Rexel (Mois 3-4)

- [ ] Intégration API Rexel (même modèle)
- [ ] Comparateur prix Sonepar vs Rexel (UI Odoo)
- [ ] Automatisation commandes récurrentes

### Phase 3 : Optimisations (Mois 5-6)

- [ ] Cache produits fréquents (Redis)
- [ ] Webhooks rupture stock
- [ ] Integration RFID -> Commande auto

---

## ⚠️ POINTS DE VIGILANCE

1.  **Rate Limits** : Respecter 1000 req/h (Sonepar), sinon ban temporaire.
    *Solution* : Cache Redis (TTL 1h pour prix, 24h pour catalogue).

2.  **Prix Négociés** : S'assurer que l'API retourne les **tarifs Duret** (pas tarif public).
    *Solution* : Vérifier avec Customer ID lors de l'auth.

3.  **Disponibilité Stock** : Sonepar donne stock par agence, il faut géolocaliser.
    *Solution* : Configurer agence préférée par chantier dans Odoo.

4.  **Erreurs API** : Sonepar peut être indisponible (maintenance).
    *Solution* : Fallback sur saisie manuelle + retry automatique (Celery queue).

---

## 📚 RESSOURCES

**Documentation Officielle**
- [Sonepar Connect API Docs](https://developer.sonepar.com/docs/api/v2)
- [Rexel Developer Portal](https://api.rexel.fr/documentation)

**Modules Odoo Existants**
- [EDI Connector Base](https://apps.odoo.com/apps/modules/16.0/edi_connector)
- [Supplier Integration](https://apps.odoo.com/apps/modules/16.0/supplier_api)

**Support**
- Sonepar API Support : `api-support@sonepar.fr`
- Rexel API Support : `developers@rexel.fr`

---

**📧 Contact Projet** : Direction IT - Duret Électricité  
**🎯 Objectif** : Automatiser 80% des commandes fournisseurs  
**💰 Gain estimé** : 40K€/an (réduction temps achats)  
**⏱️ Timeline** : 6 mois (POC -> Production complète)
