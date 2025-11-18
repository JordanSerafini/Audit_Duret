# Endpoints et Fonctionnalités Disponibles - APIs Sonepar & Rexel

## 📋 Table des matières

1. [Sonepar API Endpoints](#sonepar-api-endpoints)
2. [Rexel EDI Messages](#rexel-edi-messages)
3. [Exemples d'implémentation](#exemples-dimplémentation)
4. [Authentification](#authentification)
5. [Gestion des erreurs](#gestion-des-erreurs)

---

## Sonepar API Endpoints

### Base URL
```
https://api.sonepar-us.com/
```

### 1. 🔍 Recherche de produits

#### GET /products/search
**Description**: Recherche de produits dans le catalogue

**Paramètres**:
```json
{
  "query": "string",           // Terme de recherche
  "category": "string",         // Filtrage par catégorie
  "manufacturerId": "string",   // Filtrage par fabricant
  "limit": "integer",           // Nombre de résultats (default: 20)
  "offset": "integer"           // Pagination (default: 0)
}
```

**Réponse**:
```json
{
  "total": 150,
  "items": [
    {
      "id": "PROD-12345",
      "sku": "REF-ABC-001",
      "manufacturer": "Schneider Electric",
      "description": "Disjoncteur 16A courbe C",
      "category": "Protection électrique",
      "price": {
        "amount": 15.50,
        "currency": "EUR",
        "unit": "piece"
      },
      "stock": {
        "available": 250,
        "reserved": 30,
        "warehouse": "Lyon Sud"
      },
      "images": [
        "https://cdn.sonepar.com/images/PROD-12345-1.jpg"
      ],
      "datasheet": "https://cdn.sonepar.com/docs/PROD-12345.pdf"
    }
  ]
}
```

**Cas d'usage**:
- ✅ Recherche catalogue
- ✅ Auto-complétion
- ✅ Comparaison produits
- ✅ Vérification disponibilité

---

### 2. 📦 Vérification de stock

#### GET /products/{productId}/stock
**Description**: Consulter les stocks d'un produit

**Paramètres URL**:
- `productId`: Identifiant du produit

**Paramètres query**:
```json
{
  "warehouse": "string[]",      // Liste des dépôts (optionnel)
  "includeReserved": "boolean"  // Inclure stock réservé (default: false)
}
```

**Réponse**:
```json
{
  "productId": "PROD-12345",
  "stockLevels": [
    {
      "warehouse": {
        "id": "WH-LYON-01",
        "name": "Lyon Sud",
        "address": "123 Rue de la Distribution, Lyon"
      },
      "quantity": {
        "available": 250,
        "reserved": 30,
        "inTransit": 100,
        "total": 380
      },
      "nextDelivery": {
        "date": "2025-11-25",
        "quantity": 500
      },
      "leadTime": "24h"
    },
    {
      "warehouse": {
        "id": "WH-PARIS-02",
        "name": "Paris Nord"
      },
      "quantity": {
        "available": 0,
        "reserved": 0,
        "inTransit": 200,
        "total": 200
      },
      "nextDelivery": {
        "date": "2025-11-22",
        "quantity": 200
      },
      "leadTime": "48h"
    }
  ]
}
```

**Cas d'usage**:
- ✅ Vérification avant devis
- ✅ Planification achats
- ✅ Alertes rupture
- ✅ Optimisation livraisons

---

### 3. 💰 Consultation des prix

#### GET /products/{productId}/pricing
**Description**: Obtenir les prix d'un produit

**Headers requis**:
```
Authorization: Bearer {access_token}
X-Customer-Id: {customer_id}
```

**Réponse**:
```json
{
  "productId": "PROD-12345",
  "pricing": {
    "basePrice": {
      "amount": 20.00,
      "currency": "EUR"
    },
    "customerPrice": {
      "amount": 15.50,
      "currency": "EUR",
      "discount": "22.5%"
    },
    "promotionalPrice": {
      "amount": 14.00,
      "currency": "EUR",
      "validUntil": "2025-12-31",
      "promotionName": "Hiver 2025"
    },
    "volumePricing": [
      {
        "minQuantity": 10,
        "unitPrice": 13.50
      },
      {
        "minQuantity": 50,
        "unitPrice": 12.00
      }
    ],
    "taxRate": 20.0,
    "priceInclTax": 16.80
  },
  "validUntil": "2025-11-25T23:59:59Z"
}
```

**Cas d'usage**:
- ✅ Génération devis
- ✅ Comparaison fournisseurs
- ✅ Calculs automatiques
- ✅ Alertes prix

---

### 4. 🛒 Création de commande

#### POST /orders
**Description**: Créer une nouvelle commande

**Headers requis**:
```
Authorization: Bearer {access_token}
X-Customer-Id: {customer_id}
Content-Type: application/json
```

**Body**:
```json
{
  "customerReference": "DEVIS-2025-1234",
  "deliveryAddress": {
    "name": "Chantier Tour XYZ",
    "street": "456 Avenue du Projet",
    "city": "Lyon",
    "postalCode": "69000",
    "country": "FR",
    "contactName": "Jean Dupont",
    "contactPhone": "+33612345678"
  },
  "requestedDeliveryDate": "2025-11-30",
  "items": [
    {
      "productId": "PROD-12345",
      "quantity": 50,
      "unitPrice": 15.50,
      "reference": "Ligne 1 - Disjoncteurs"
    },
    {
      "productId": "PROD-67890",
      "quantity": 100,
      "unitPrice": 2.30,
      "reference": "Ligne 2 - Câbles"
    }
  ],
  "comments": "Livraison entre 8h et 12h si possible"
}
```

**Réponse**:
```json
{
  "orderId": "ORD-2025-987654",
  "status": "confirmed",
  "customerReference": "DEVIS-2025-1234",
  "totalAmount": {
    "subtotal": 1005.00,
    "tax": 201.00,
    "total": 1206.00,
    "currency": "EUR"
  },
  "estimatedDeliveryDate": "2025-11-30",
  "trackingUrl": "https://tracking.sonepar.com/ORD-2025-987654",
  "confirmationPdf": "https://api.sonepar.com/orders/ORD-2025-987654/pdf",
  "createdAt": "2025-11-18T10:30:00Z"
}
```

**Cas d'usage**:
- ✅ Automatisation commandes
- ✅ Intégration ERP
- ✅ Validation avant envoi
- ✅ Traçabilité

---

### 5. 📊 Suivi de commande

#### GET /orders/{orderId}
**Description**: Consulter l'état d'une commande

**Réponse**:
```json
{
  "orderId": "ORD-2025-987654",
  "status": "in_transit",
  "statusHistory": [
    {
      "status": "confirmed",
      "timestamp": "2025-11-18T10:30:00Z"
    },
    {
      "status": "processing",
      "timestamp": "2025-11-18T14:00:00Z"
    },
    {
      "status": "shipped",
      "timestamp": "2025-11-19T09:00:00Z",
      "details": {
        "carrier": "DPD",
        "trackingNumber": "12345678901234"
      }
    },
    {
      "status": "in_transit",
      "timestamp": "2025-11-19T15:30:00Z",
      "details": {
        "location": "Centre de tri Lyon"
      }
    }
  ],
  "items": [
    {
      "lineNumber": 1,
      "productId": "PROD-12345",
      "quantity": {
        "ordered": 50,
        "confirmed": 50,
        "shipped": 50
      },
      "status": "shipped"
    }
  ],
  "delivery": {
    "estimatedDate": "2025-11-20",
    "estimatedTimeSlot": "08:00-12:00",
    "carrier": "DPD",
    "trackingUrl": "https://tracking.dpd.fr/12345678901234"
  }
}
```

**Statuts possibles**:
- `pending`: En attente de validation
- `confirmed`: Confirmée
- `processing`: En préparation
- `shipped`: Expédiée
- `in_transit`: En cours de livraison
- `delivered`: Livrée
- `cancelled`: Annulée
- `partially_delivered`: Partiellement livrée

**Cas d'usage**:
- ✅ Dashboard suivi
- ✅ Notifications clients
- ✅ Planification chantier
- ✅ Gestion litiges

---

### 6. 🧾 Récupération des factures

#### GET /invoices
**Description**: Lister les factures

**Paramètres**:
```json
{
  "startDate": "2025-01-01",
  "endDate": "2025-12-31",
  "status": "paid|unpaid|overdue",
  "orderId": "ORD-2025-987654",
  "limit": 50,
  "offset": 0
}
```

**Réponse**:
```json
{
  "total": 125,
  "items": [
    {
      "invoiceId": "INV-2025-12345",
      "invoiceNumber": "FA-2025-12345",
      "orderId": "ORD-2025-987654",
      "issueDate": "2025-11-20",
      "dueDate": "2025-12-20",
      "status": "unpaid",
      "amount": {
        "subtotal": 1005.00,
        "tax": 201.00,
        "total": 1206.00,
        "currency": "EUR"
      },
      "pdfUrl": "https://api.sonepar.com/invoices/INV-2025-12345/pdf",
      "xmlUrl": "https://api.sonepar.com/invoices/INV-2025-12345/xml"
    }
  ]
}
```

#### GET /invoices/{invoiceId}
**Description**: Détail d'une facture

**Formats disponibles**:
- `/invoices/{invoiceId}` - JSON
- `/invoices/{invoiceId}/pdf` - PDF
- `/invoices/{invoiceId}/xml` - XML (Factur-X/Chorus Pro)

**Cas d'usage**:
- ✅ Comptabilité automatisée
- ✅ Rapprochement bancaire
- ✅ Archivage légal
- ✅ Reporting

---

### 7. 👤 Gestion du compte client

#### GET /account/profile
**Description**: Informations du compte client

**Réponse**:
```json
{
  "customerId": "CUST-FR-12345",
  "companyName": "Entreprise Duret",
  "siret": "12345678901234",
  "vatNumber": "FR12345678901",
  "addresses": [
    {
      "type": "billing",
      "name": "Siège social",
      "street": "123 Rue Principale",
      "city": "Lyon",
      "postalCode": "69000",
      "country": "FR"
    },
    {
      "type": "delivery",
      "name": "Dépôt Lyon",
      "street": "456 Zone Industrielle",
      "city": "Lyon",
      "postalCode": "69100",
      "country": "FR"
    }
  ],
  "paymentTerms": "30 days",
  "creditLimit": 50000.00,
  "currentBalance": 12500.00
}
```

---

### 8. 📈 Statistiques et rapports

#### GET /account/statistics
**Description**: Statistiques d'achats

**Paramètres**:
```json
{
  "period": "month|quarter|year",
  "startDate": "2025-01-01",
  "endDate": "2025-11-30"
}
```

**Réponse**:
```json
{
  "period": {
    "start": "2025-01-01",
    "end": "2025-11-30"
  },
  "summary": {
    "totalOrders": 145,
    "totalAmount": 125000.00,
    "averageOrderValue": 862.07,
    "topCategories": [
      {
        "category": "Protection électrique",
        "amount": 45000.00,
        "percentage": 36
      },
      {
        "category": "Câbles et fils",
        "amount": 32000.00,
        "percentage": 25.6
      }
    ],
    "topProducts": [
      {
        "productId": "PROD-12345",
        "description": "Disjoncteur 16A",
        "quantity": 850,
        "amount": 13175.00
      }
    ]
  }
}
```

---

## Rexel EDI Messages

### Vue d'ensemble EDI

Rexel utilise le protocole EDI (Electronic Data Interchange) via les standards **X12** (US) et **EDIFACT** (Europe).

**Protocoles de transmission**:
- AS2 (Applicability Statement 2)
- SFTP (Secure File Transfer Protocol)
- HTTP/HTTPS

### Messages X12 disponibles

#### 1. 📤 850 - Purchase Order (Commande d'achat)

**Direction**: Client → Rexel
**Description**: Envoi d'une commande d'achat

**Structure simplifiée**:
```
ISA*00*          *00*          *ZZ*SENDER_ID      *ZZ*REXEL_ID       *251118*1030*U*00401*000000001*0*P*>~
GS*PO*SENDER*REXEL*20251118*1030*1*X*004010~
ST*850*0001~
BEG*00*NE*PO-2025-1234**20251118~
REF*DP*DEVIS-2025-1234~
DTM*002*20251130~  (Date livraison souhaitée)
N1*ST*Chantier Tour XYZ~
N3*456 Avenue du Projet~
N4*Lyon**69000*FR~
PO1*1*50*EA*15.50**BP*PROD-12345~  (Ligne 1: 50 unités à 15.50€)
PO1*2*100*EA*2.30**BP*PROD-67890~  (Ligne 2: 100 unités à 2.30€)
CTT*2~  (Total 2 lignes)
SE*12*0001~
GE*1*1~
IEA*1*000000001~
```

**Segments clés**:
- **BEG**: En-tête commande
- **REF**: Références (numéro PO, devis, etc.)
- **DTM**: Dates (livraison, etc.)
- **N1/N3/N4**: Adresses (livraison, facturation)
- **PO1**: Lignes de commande
- **CTT**: Total

---

#### 2. 📥 855 - Purchase Order Acknowledgment (Accusé réception)

**Direction**: Rexel → Client
**Description**: Confirmation de réception et validation de la commande

**Structure simplifiée**:
```
ST*855*0001~
BAK*00*AT*PO-2025-1234*20251118*ORD-REX-987654~  (Acceptée avec N° Rexel)
DTM*002*20251130~  (Date livraison confirmée)
PO1*1*50*EA*15.50**BP*PROD-12345~
ACK*IA*50~  (Item Accepted - 50 unités acceptées)
PO1*2*100*EA*2.30**BP*PROD-67890~
ACK*IA*100~
CTT*2~
SE*10*0001~
```

**Codes d'acknowledgment**:
- **IA**: Item Accepted (accepté)
- **IB**: Item Backordered (en attente stock)
- **IC**: Item Not Available (indisponible)
- **IR**: Item Rejected (rejeté)
- **ID**: Item Deleted (supprimé)

---

#### 3. 📦 856 - Advance Ship Notice (Avis d'expédition)

**Direction**: Rexel → Client
**Description**: Notification d'expédition avec détails

**Structure simplifiée**:
```
ST*856*0001~
BSN*00*987654*20251119*0900~
DTM*011*20251120~  (Date livraison estimée)
REF*PO*PO-2025-1234~  (Référence PO client)
N1*ST*Chantier Tour XYZ~
HL*1**S~  (Shipment level)
TD5**2*DPD~  (Transporteur)
REF*CN*12345678901234~  (N° tracking)
HL*2*1*O~  (Order level)
HL*3*2*P~  (Pack level - Palette 1)
MAN*GM*PALLET-001~
HL*4*3*I~  (Item level)
LIN**BP*PROD-12345~
SN1**50*EA~  (50 unités)
HL*5*2*P~  (Pack level - Palette 2)
MAN*GM*PALLET-002~
HL*6*5*I~
LIN**BP*PROD-67890~
SN1**100*EA~
CTT*2~
SE*20*0001~
```

**Informations fournies**:
- Numéro tracking transporteur
- Date/heure expédition
- Date livraison estimée
- Détails colis/palettes
- Quantités expédiées par ligne

---

#### 4. 💵 810 - Invoice (Facture)

**Direction**: Rexel → Client
**Description**: Facture électronique

**Structure simplifiée**:
```
ST*810*0001~
BIG*20251120*INV-2025-12345*20251118*PO-2025-1234*ORD-REX-987654~
REF*DP*DEVIS-2025-1234~
N1*BT*Entreprise Duret~  (Bill To)
N3*123 Rue Principale~
N4*Lyon**69000*FR~
ITD*01*3*****30~  (Termes paiement: 30 jours)
IT1*1*50*EA*15.50**BP*PROD-12345~  (Ligne 1)
TDS*120600~  (Total: 1206.00€)
CAD*****20.0~  (TVA 20%)
CTT*2~
SE*14*0001~
```

**Segments clés**:
- **BIG**: En-tête facture
- **ITD**: Termes de paiement
- **IT1**: Lignes facture
- **TDS**: Total HT
- **CAD**: TVA

---

#### 5. 🔍 846 - Inventory Inquiry/Advice (Requête stock)

**Direction**: Client → Rexel (Inquiry) / Rexel → Client (Advice)
**Description**: Demande ou communication de niveaux de stock

**Structure Inquiry (Client → Rexel)**:
```
ST*846*0001~
BIA*00*IR**20251118~  (Inventory Request)
LIN*1*BP*PROD-12345~  (Produit 1)
LIN*2*BP*PROD-67890~  (Produit 2)
LIN*3*BP*PROD-11111~  (Produit 3)
CTT*3~
SE*6*0001~
```

**Structure Advice (Rexel → Client)**:
```
ST*846*0001~
BIA*00*IB**20251118~  (Inventory Balance)
LIN*1*BP*PROD-12345~
QTY*33*250~  (Quantity Available: 250)
QTY*AI*30~  (Quantity Reserved: 30)
LIN*2*BP*PROD-67890~
QTY*33*0~  (Disponible: 0)
QTY*AT*200~  (Quantity In-Transit: 200)
DTM*002*20251122~  (Date disponibilité)
CTT*2~
SE*11*0001~
```

---

#### 6. ✅ 997 - Functional Acknowledgment (Accusé technique)

**Direction**: Bidirectionnel
**Description**: Confirmation de bonne réception technique d'un message EDI

**Structure**:
```
ST*997*0001~
AK1*PO*1~  (Acknowledge groupe Purchase Order)
AK2*850*0001~  (Acknowledge transaction 850)
AK5*A~  (Accepted)
AK9*A*1*1*1~  (1 groupe accepté, 1 transaction acceptée)
SE*5*0001~
```

**Codes de statut**:
- **A**: Accepted
- **E**: Accepted with Errors
- **R**: Rejected

---

### Flux EDI typique

```
Client                          Rexel
  |                               |
  |-------- 850 (Commande) ------>|
  |                               |
  |<----- 997 (Ack technique) ----|
  |                               |
  |<--- 855 (Confirmation PO) ----|
  |                               |
  |-------- 997 (Ack) ----------->|
  |                               |
  |  ... (Préparation commande)   |
  |                               |
  |<---- 856 (Avis expédition) ---|
  |                               |
  |-------- 997 (Ack) ----------->|
  |                               |
  |  ... (Livraison)              |
  |                               |
  |<------ 810 (Facture) ---------|
  |                               |
  |-------- 997 (Ack) ----------->|
  |                               |
```

---

## Exemples d'implémentation

### Exemple 1: Recherche produit Sonepar (Python)

```python
import requests

API_BASE = "https://api.sonepar-us.com"
API_KEY = "your_api_key_here"

def search_products(query, limit=20):
    """Recherche de produits dans le catalogue Sonepar"""

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    params = {
        "query": query,
        "limit": limit
    }

    response = requests.get(
        f"{API_BASE}/products/search",
        headers=headers,
        params=params
    )

    if response.status_code == 200:
        data = response.json()
        return data['items']
    else:
        print(f"Erreur: {response.status_code}")
        return None

# Utilisation
products = search_products("disjoncteur 16A")
for product in products:
    print(f"{product['sku']}: {product['description']}")
    print(f"  Prix: {product['price']['amount']} {product['price']['currency']}")
    print(f"  Stock: {product['stock']['available']}")
```

### Exemple 2: Vérification stock multiple (Python)

```python
def check_stock_multiple(product_ids):
    """Vérifier le stock pour plusieurs produits"""

    results = []

    for product_id in product_ids:
        response = requests.get(
            f"{API_BASE}/products/{product_id}/stock",
            headers={"Authorization": f"Bearer {API_KEY}"}
        )

        if response.status_code == 200:
            stock_data = response.json()

            total_available = sum(
                level['quantity']['available']
                for level in stock_data['stockLevels']
            )

            results.append({
                'productId': product_id,
                'totalStock': total_available,
                'warehouses': stock_data['stockLevels']
            })

    return results

# Utilisation
product_ids = ["PROD-12345", "PROD-67890", "PROD-11111"]
stock_info = check_stock_multiple(product_ids)

for item in stock_info:
    print(f"Produit {item['productId']}: {item['totalStock']} unités")
    for wh in item['warehouses']:
        print(f"  - {wh['warehouse']['name']}: {wh['quantity']['available']}")
```

### Exemple 3: Création commande automatique (Python)

```python
def create_order(customer_ref, items, delivery_address, delivery_date):
    """Créer une commande automatiquement"""

    order_data = {
        "customerReference": customer_ref,
        "deliveryAddress": delivery_address,
        "requestedDeliveryDate": delivery_date,
        "items": items
    }

    response = requests.post(
        f"{API_BASE}/orders",
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "X-Customer-Id": "CUST-FR-12345",
            "Content-Type": "application/json"
        },
        json=order_data
    )

    if response.status_code == 201:
        order = response.json()
        print(f"Commande créée: {order['orderId']}")
        print(f"Total: {order['totalAmount']['total']} {order['totalAmount']['currency']}")
        print(f"Livraison estimée: {order['estimatedDeliveryDate']}")
        return order
    else:
        print(f"Erreur création commande: {response.status_code}")
        print(response.text)
        return None

# Utilisation
delivery_address = {
    "name": "Chantier Tour XYZ",
    "street": "456 Avenue du Projet",
    "city": "Lyon",
    "postalCode": "69000",
    "country": "FR",
    "contactName": "Jean Dupont",
    "contactPhone": "+33612345678"
}

items = [
    {
        "productId": "PROD-12345",
        "quantity": 50,
        "unitPrice": 15.50
    },
    {
        "productId": "PROD-67890",
        "quantity": 100,
        "unitPrice": 2.30
    }
]

order = create_order(
    customer_ref="DEVIS-2025-1234",
    items=items,
    delivery_address=delivery_address,
    delivery_date="2025-11-30"
)
```

### Exemple 4: Génération EDI 850 pour Rexel (Python)

```python
from datetime import datetime

def generate_edi_850(po_number, delivery_date, items, delivery_address):
    """Générer un message EDI 850 (Purchase Order)"""

    timestamp = datetime.now()
    control_number = f"{timestamp.year}{timestamp.month:02d}{timestamp.day:02d}{timestamp.hour:02d}{timestamp.minute:02d}"

    edi = []

    # ISA - Interchange Header
    edi.append(
        f"ISA*00*          *00*          *ZZ*DURET          "
        f"*ZZ*REXEL          *{timestamp.strftime('%y%m%d')}*"
        f"{timestamp.strftime('%H%M')}*U*00401*{control_number}*0*P*>~"
    )

    # GS - Functional Group Header
    edi.append(f"GS*PO*DURET*REXEL*{timestamp.strftime('%Y%m%d')}*{timestamp.strftime('%H%M')}*1*X*004010~")

    # ST - Transaction Set Header
    edi.append("ST*850*0001~")

    # BEG - Beginning Segment for Purchase Order
    edi.append(f"BEG*00*NE*{po_number}**{timestamp.strftime('%Y%m%d')}~")

    # DTM - Requested Delivery Date
    delivery_date_formatted = delivery_date.replace("-", "")
    edi.append(f"DTM*002*{delivery_date_formatted}~")

    # N1/N3/N4 - Delivery Address
    edi.append(f"N1*ST*{delivery_address['name']}~")
    edi.append(f"N3*{delivery_address['street']}~")
    edi.append(f"N4*{delivery_address['city']}**{delivery_address['postalCode']}*{delivery_address['country']}~")

    # PO1 - Order Lines
    for idx, item in enumerate(items, 1):
        edi.append(
            f"PO1*{idx}*{item['quantity']}*EA*{item['unitPrice']:.2f}**BP*{item['productId']}~"
        )

    # CTT - Transaction Totals
    edi.append(f"CTT*{len(items)}~")

    # SE - Transaction Set Trailer
    segment_count = len(edi) - 2  # Exclude ISA and GS
    edi.append(f"SE*{segment_count}*0001~")

    # GE - Functional Group Trailer
    edi.append("GE*1*1~")

    # IEA - Interchange Trailer
    edi.append(f"IEA*1*{control_number}~")

    return "\n".join(edi)

# Utilisation
items = [
    {"productId": "PROD-12345", "quantity": 50, "unitPrice": 15.50},
    {"productId": "PROD-67890", "quantity": 100, "unitPrice": 2.30}
]

delivery_address = {
    "name": "Chantier Tour XYZ",
    "street": "456 Avenue du Projet",
    "city": "Lyon",
    "postalCode": "69000",
    "country": "FR"
}

edi_message = generate_edi_850(
    po_number="PO-2025-1234",
    delivery_date="2025-11-30",
    items=items,
    delivery_address=delivery_address
)

print(edi_message)

# Sauvegarder dans un fichier
with open("850_PO-2025-1234.edi", "w") as f:
    f.write(edi_message)
```

---

## Authentification

### Sonepar API - OAuth 2.0

#### 1. Obtention du token

```http
POST https://api.sonepar-us.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id=YOUR_CLIENT_ID
&client_secret=YOUR_CLIENT_SECRET
&scope=products:read orders:write
```

**Réponse**:
```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "products:read orders:write"
}
```

#### 2. Utilisation du token

```http
GET https://api.sonepar-us.com/products/search?query=disjoncteur
Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...
X-Customer-Id: CUST-FR-12345
```

#### 3. Refresh du token

```python
import requests
from datetime import datetime, timedelta

class SoneparAuth:
    def __init__(self, client_id, client_secret):
        self.client_id = client_id
        self.client_secret = client_secret
        self.access_token = None
        self.expires_at = None

    def get_token(self):
        """Obtenir ou rafraîchir le token"""
        if self.access_token and self.expires_at > datetime.now():
            return self.access_token

        response = requests.post(
            "https://api.sonepar-us.com/oauth/token",
            data={
                "grant_type": "client_credentials",
                "client_id": self.client_id,
                "client_secret": self.client_secret,
                "scope": "products:read orders:write"
            }
        )

        if response.status_code == 200:
            data = response.json()
            self.access_token = data['access_token']
            self.expires_at = datetime.now() + timedelta(seconds=data['expires_in'] - 60)
            return self.access_token
        else:
            raise Exception(f"Erreur authentification: {response.status_code}")

# Utilisation
auth = SoneparAuth("your_client_id", "your_client_secret")
token = auth.get_token()
```

### Rexel EDI - AS2 Authentication

#### Configuration AS2

```yaml
AS2 Configuration:
  - AS2 Identifier: DURET_AS2_ID
  - Partner AS2 ID: REXEL_AS2_ID
  - URL: https://edi.rexel.com/as2/receive
  - Certificate: X.509 certificate (échange avec Rexel)
  - Encryption: 3DES ou AES
  - Signing: SHA-256
  - MDN: Synchronous, Signed
```

#### Exemple envoi AS2 (pseudo-code)

```python
# Utilisation d'une librairie AS2 (ex: pyas2)
from pyas2 import As2Partner, As2Message

# Configuration partenaire
rexel_partner = As2Partner(
    as2_identifier="REXEL_AS2_ID",
    target_url="https://edi.rexel.com/as2/receive",
    encrypt_cert="rexel_public.cer",
    sign_cert="duret_private.key"
)

# Préparation du message
edi_content = generate_edi_850(...)  # Votre message EDI

# Envoi
message = As2Message()
message.build(
    data=edi_content,
    filename="850_PO-2025-1234.edi",
    sender="DURET_AS2_ID",
    receiver="REXEL_AS2_ID",
    partner=rexel_partner
)

response = message.send()

# Vérification MDN (Message Disposition Notification)
if response.mdn.status == "processed":
    print("Message envoyé et reçu avec succès")
else:
    print(f"Erreur: {response.mdn.status}")
```

---

## Gestion des erreurs

### Codes d'erreur Sonepar API

| Code HTTP | Signification | Action recommandée |
|-----------|---------------|-------------------|
| 400 | Bad Request | Vérifier les paramètres de la requête |
| 401 | Unauthorized | Renouveler le token d'authentification |
| 403 | Forbidden | Vérifier les droits d'accès |
| 404 | Not Found | Vérifier l'ID de la ressource |
| 429 | Too Many Requests | Implémenter rate limiting, retry avec backoff |
| 500 | Internal Server Error | Retry avec backoff exponentiel |
| 503 | Service Unavailable | Attendre et réessayer |

### Structure d'erreur API

```json
{
  "error": {
    "code": "PRODUCT_NOT_FOUND",
    "message": "Le produit PROD-99999 n'existe pas",
    "details": {
      "productId": "PROD-99999",
      "suggestion": "Vérifiez la référence du produit"
    },
    "timestamp": "2025-11-18T10:30:00Z",
    "requestId": "req_abc123def456"
  }
}
```

### Retry logic avec backoff exponentiel

```python
import time
import requests
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry

def create_session_with_retry():
    """Créer une session avec retry automatique"""

    session = requests.Session()

    retry_strategy = Retry(
        total=5,  # Nombre total de retries
        status_forcelist=[429, 500, 502, 503, 504],  # Codes HTTP à retry
        method_whitelist=["GET", "POST", "PUT", "DELETE"],
        backoff_factor=1  # 1, 2, 4, 8, 16 secondes
    )

    adapter = HTTPAdapter(max_retries=retry_strategy)
    session.mount("https://", adapter)
    session.mount("http://", adapter)

    return session

# Utilisation
session = create_session_with_retry()
response = session.get(
    "https://api.sonepar-us.com/products/PROD-12345",
    headers={"Authorization": f"Bearer {token}"}
)
```

### Gestion erreurs EDI Rexel

#### Erreurs dans 997 (Functional Acknowledgment)

```
AK5*R~  (Rejected)
AK3*PO1*1~  (Segment PO1, ligne 1)
AK4*1*310*2~  (Erreur sur élément 1: Required data element missing)
```

**Codes d'erreur courants**:
- **1**: Transaction Set Not Supported
- **2**: Transaction Set Trailer Missing
- **3**, Contrôle Number Mismatch
- **4**: Number of Segments Does Not Match
- **310**: Required Data Element Missing
- **320**: Invalid Data Element

#### Gestion erreurs dans le code

```python
def parse_997_acknowledgment(edi_997):
    """Parser un message 997 pour détecter les erreurs"""

    lines = edi_997.strip().split('~')

    for line in lines:
        if line.startswith('AK5'):
            # Statut global
            parts = line.split('*')
            status = parts[1]

            if status == 'A':
                return {"status": "accepted", "errors": []}
            elif status == 'R':
                return {"status": "rejected", "errors": parse_errors(lines)}
            elif status == 'E':
                return {"status": "accepted_with_errors", "errors": parse_errors(lines)}

    return {"status": "unknown", "errors": []}

def parse_errors(lines):
    """Extraire les détails d'erreurs"""
    errors = []

    for line in lines:
        if line.startswith('AK4'):
            parts = line.split('*')
            errors.append({
                "element": parts[1],
                "error_code": parts[2],
                "description": get_error_description(parts[2])
            })

    return errors

def get_error_description(code):
    """Descriptions des codes d'erreur"""
    descriptions = {
        "310": "Élément de données requis manquant",
        "320": "Données invalides",
        "1": "Transaction non supportée",
        # ... autres codes
    }
    return descriptions.get(code, f"Erreur {code}")
```

---

## Rate Limiting et quotas

### Sonepar API

**Limites attendues** (à confirmer avec documentation officielle):
- **Requêtes par minute**: 100-500
- **Requêtes par heure**: 5000-10000
- **Requêtes par jour**: 50000-100000

**Headers de réponse**:
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 950
X-RateLimit-Reset: 1637244000
```

**Gestion du rate limiting**:
```python
import time
from datetime import datetime

class RateLimiter:
    def __init__(self, max_requests_per_minute=100):
        self.max_requests = max_requests_per_minute
        self.requests = []

    def wait_if_needed(self):
        """Attendre si nécessaire pour respecter le rate limit"""
        now = datetime.now()

        # Nettoyer les requêtes plus vieilles qu'1 minute
        self.requests = [r for r in self.requests if (now - r).seconds < 60]

        if len(self.requests) >= self.max_requests:
            # Attendre jusqu'à ce que la plus vieille requête ait plus d'1 minute
            oldest = min(self.requests)
            wait_time = 60 - (now - oldest).seconds
            if wait_time > 0:
                print(f"Rate limit atteint, attente de {wait_time}s...")
                time.sleep(wait_time)

        self.requests.append(now)

# Utilisation
limiter = RateLimiter(max_requests_per_minute=100)

for product_id in large_product_list:
    limiter.wait_if_needed()
    response = session.get(f"{API_BASE}/products/{product_id}")
```

---

## Cache et optimisation

### Stratégie de cache pour API Sonepar

```python
import redis
import json
from datetime import timedelta

class SoneparCache:
    def __init__(self, redis_client):
        self.redis = redis_client
        self.ttl = {
            'products': timedelta(hours=24),  # Catalogue change peu
            'stock': timedelta(minutes=5),     # Stock change fréquemment
            'pricing': timedelta(hours=1),     # Prix peuvent changer
            'orders': timedelta(minutes=1)     # Statut change souvent
        }

    def get_product(self, product_id):
        """Récupérer un produit depuis le cache"""
        key = f"product:{product_id}"
        cached = self.redis.get(key)

        if cached:
            return json.loads(cached)

        # Si pas en cache, requête API
        product = api_get_product(product_id)

        # Mise en cache
        self.redis.setex(
            key,
            self.ttl['products'],
            json.dumps(product)
        )

        return product

    def get_stock(self, product_id):
        """Récupérer le stock (cache court)"""
        key = f"stock:{product_id}"
        cached = self.redis.get(key)

        if cached:
            return json.loads(cached)

        stock = api_get_stock(product_id)

        self.redis.setex(
            key,
            self.ttl['stock'],
            json.dumps(stock)
        )

        return stock
```

---

*Dernière mise à jour: Novembre 2025*
*Pour toute question technique, contactez les services e-procurement de Sonepar et Rexel*
