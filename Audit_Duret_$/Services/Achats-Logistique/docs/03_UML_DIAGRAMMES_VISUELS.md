# 🎨 DIAGRAMMES UML - Achats-Logistique

> Diagrammes visuels pour présentation slides
> Format: Mermaid (rendu graphique)

---

## 1. Diagramme de Séquence: Commande de Matériel (État ACTUEL)

```mermaid
sequenceDiagram
    actor Marc as Marc<br/>(Chef Chantier)
    actor Sylvie as Sylvie<br/>(Achats)
    actor Éric as Éric<br/>(Dépôt)
    participant Sage as Sage MDE
    participant Excel as Excel
    participant Email as Email
    participant Fournisseur as Fournisseur

    Note over Marc: JOUR 1 - 9h00
    Marc->>Marc: Besoin câble 3G2.5
    Marc->>Marc: Remplit bon papier (5 min)
    Note right of Marc: 🔴 Référence imprécise

    Marc-xSylvie: Appel (pas de réponse)
    Note over Marc,Sylvie: ⏰ 25 min perdu

    Marc->>Sylvie: Appel réussi (10h45)
    Sylvie->>Sage: Cherche "câble 3G2.5"
    Note right of Sage: 🔴 12 références !<br/>Laquelle choisir ?

    Sylvie->>Sage: Choisit une référence
    Sylvie->>Excel: Cherche fournisseur
    Sylvie->>Fournisseur: Appel téléphone
    Note over Sylvie,Fournisseur: 🔴 Pas de commande en ligne

    Sylvie->>Email: Écrit email confirmation
    Note right of Sylvie: 🔴 Re-saisie #4

    Sylvie->>Sage: Saisit commande
    Note right of Sylvie: 🔴 Re-saisie #5

    Sylvie->>Excel: Saisit suivi
    Note right of Sylvie: 🔴 Re-saisie #6

    Sylvie->>Marc: SMS "Livraison J+2"

    Note over Marc,Fournisseur: JOUR 3 - 16h00

    Fournisseur->>Éric: Livre matériel
    Éric->>Éric: Compte manuellement
    Note right of Éric: 🔴 Pas de scan

    Éric->>Sylvie: Appel: Quelle référence ?
    Note over Éric,Sylvie: 🔴 Nomenclatures<br/>incompatibles

    Éric->>Sage: Saisit réception (20 min)
    Note right of Éric: 🔴 Re-saisie #7

    Éric->>Marc: "Matériel dispo"

    Marc->>Marc: Récupère au dépôt
    Note over Marc: ❌ MAUVAIS CÂBLE !<br/>🔴 Chantier bloqué 3j<br/>💰 Perte: 2,400€

    Marc->>Sylvie: Appel furieux
    Note over Marc,Sylvie: 😭 Recommencer tout...
```

---

## 2. Activity Diagram: Processus Commande ACTUEL

```mermaid
flowchart TD
    Start([Besoin matériel]) --> A1[Cherche bon papier]
    A1 -->|5 min| A2[Remplit à la main]
    A2 --> A3{Sylvie<br/>disponible?}
    A3 -->|Non| Wait1[Attend + rappelle]
    Wait1 -->|25 min| A3
    A3 -->|Oui| A4[Appel téléphone]

    A4 --> B1[Sylvie cherche dans Sage]
    B1 --> B2{Trouve la<br/>référence?}
    B2 -->|12 réf!| B3[Choisit au hasard]
    B3 --> B4[Cherche dans Excel]
    B4 --> B5[Appelle fournisseur]
    B5 --> B6[Email confirmation]
    B6 --> B7[Saisit dans Sage]
    B7 --> B8[Saisit dans Excel]

    B8 --> C1[Attente 2-3 jours]
    C1 --> C2[Fournisseur livre]
    C2 --> C3[Éric réceptionne]
    C3 --> C4[Compte manuellement]
    C4 --> C5[Saisit dans Sage]

    C5 --> D1[Marc récupère]
    D1 --> D2{Bon<br/>matériel?}
    D2 -->|50% Non| Error[❌ Chantier bloqué]
    Error --> Start
    D2 -->|50% Oui| End([✅ Fin])

    style Start fill:#90EE90
    style End fill:#90EE90
    style Error fill:#FF6B6B
    style B3 fill:#FFD700
    style Wait1 fill:#FFD700
```

---

## 3. Use Case Diagram: Acteurs et Actions

```mermaid
graph TB
    subgraph Système Actuel Chaos
        UC1((Commander<br/>matériel))
        UC2((Gérer<br/>stock))
        UC3((Traiter<br/>commandes))
        UC4((Suivre<br/>coûts))
        UC5((Réceptionner<br/>livraisons))
    end

    Marc[👷 Marc<br/>Chef Chantier] --> UC1
    Marc --> UC2

    Sylvie[👩‍💼 Sylvie<br/>Achats] --> UC3
    Sylvie --> UC1

    Éric[📦 Éric<br/>Magasinier] --> UC5
    Éric --> UC2

    Julien[👨‍💼 Julien<br/>Resp. Affaires] --> UC4
    Julien --> UC1

    Christine[👩‍💼 Christine<br/>DG] --> UC4

    UC1 -.-> Sage[(Sage MDE)]
    UC2 -.-> Sage
    UC3 -.-> Sage
    UC3 -.-> Excel[(Excel)]
    UC4 -.-> Excel
    UC5 -.-> Sage

    style UC1 fill:#FFD700
    style UC2 fill:#FFD700
    style UC3 fill:#FFD700
    style UC4 fill:#FFD700
    style UC5 fill:#FFD700
    style Sage fill:#FF6B6B
    style Excel fill:#FF6B6B
```

---

## 4. State Diagram: Cycle de Vie d'une Commande

```mermaid
stateDiagram-v2
    [*] --> Besoin: Marc identifie besoin

    Besoin --> Recherche: Appelle Sylvie

    Recherche --> EnAttente: Sylvie pas dispo
    EnAttente --> Recherche: Rappelle (x3-4)

    Recherche --> Confusion: Cherche référence
    note right of Confusion: 🔴 12 références<br/>pour 1 produit

    Confusion --> Saisie1: Choisit une réf
    Saisie1 --> Saisie2: Re-saisie Sage
    Saisie2 --> Saisie3: Re-saisie Excel
    Saisie3 --> EnCours: Commande passée

    EnCours --> Livraison: 2-3 jours

    Livraison --> Réception: Éric vérifie
    Réception --> Confusion2: Références incompatibles
    Confusion2 --> Stocké: Range quelque part

    Stocké --> Récupéré: Marc prend matériel

    Récupéré --> Erreur: 50% mauvais produit
    Récupéré --> [*]: 50% bon produit

    Erreur --> Besoin: Recommence tout

    note left of Erreur: ❌ Chantier bloqué<br/>💰 2,400€ perdu
```

---

## 5. Component Diagram: Architecture Système ACTUEL

```mermaid
graph TB
    subgraph "🏢 DURET ÉLECTRICITÉ"
        subgraph "Chantiers (5)"
            Marc1[👷 Chef 1]
            Marc2[👷 Chef 2]
            Marc3[👷 Chef 3]
        end

        subgraph "Bureau"
            Sylvie[👩‍💼 Sylvie<br/>Achats]
            Julien[👨‍💼 Julien<br/>Affaires]
        end

        subgraph "Dépôt"
            Eric[📦 Éric<br/>Magasinier]
        end

        subgraph "Outils"
            Sage[(Sage MDE<br/>⚠️ Obsolète)]
            Excel1[Excel 1<br/>Fournisseurs]
            Excel2[Excel 2<br/>Suivi]
            Excel3[Excel 3<br/>Stock]
            Papier[📄 Bons<br/>Papier]
            Tel[📞 Téléphone]
        end
    end

    subgraph "Fournisseurs (50+)"
        F1[Fournisseur A]
        F2[Fournisseur B]
        F3[Fournisseur C]
    end

    Marc1 -->|Appels| Tel
    Marc2 -->|Appels| Tel
    Marc3 -->|Appels| Tel
    Marc1 -.->|Papier| Papier

    Tel -->|Appels| Sylvie

    Sylvie -->|Saisie| Sage
    Sylvie -->|Saisie| Excel1
    Sylvie -->|Saisie| Excel2
    Sylvie -->|Appels| Tel

    Tel -->|Appels| F1
    Tel -->|Appels| F2
    Tel -->|Appels| F3

    F1 -.->|Livraison| Eric
    F2 -.->|Livraison| Eric

    Eric -->|Saisie| Sage
    Eric -->|Saisie| Excel3

    Julien -->|Consultation| Sage
    Julien -->|Consultation| Excel1
    Julien -->|Consultation| Excel2
    Julien -->|Appels| Tel

    style Sage fill:#FF6B6B
    style Excel1 fill:#FFD700
    style Excel2 fill:#FFD700
    style Excel3 fill:#FFD700
    style Papier fill:#FF6B6B
    style Tel fill:#FFD700
```

---

## 6. ERD: Chaos de la Base de Données

```mermaid
erDiagram
    PRODUIT {
        string ref_sage "🔴 12 variantes!"
        string ref_fournisseur "≠ ref_sage"
        string designation "Incohérente"
        float prix "Obsolète"
        int stock "Non fiable"
    }

    COMMANDE {
        string numero "Manuel"
        date date_cmd "Saisie tardive"
        string statut "Inconnu"
    }

    FOURNISSEUR {
        string nom "Doublons"
        string contact "Obsolète"
    }

    AFFAIRE {
        string numero "OK"
        string nom "OK"
    }

    LIGNE_CMD {
        int quantite "Erreurs fréquentes"
        float prix_unit "Pas à jour"
    }

    COMMANDE ||--o{ LIGNE_CMD : contient
    PRODUIT ||--o{ LIGNE_CMD : référence
    FOURNISSEUR ||--o{ COMMANDE : fournit
    AFFAIRE ||--o{ COMMANDE : "lien cassé"

    PRODUIT ||--o| EXCEL_STOCK : "données divergentes"
    FOURNISSEUR ||--o| EXCEL_FOURNISSEURS : "doublons"
    COMMANDE ||--o| EXCEL_SUIVI : "re-saisie"
```

---

## 7. Pie Chart: Répartition du Temps (Sylvie)

```mermaid
pie title Temps de Sylvie sur 1 Commande (2h)
    "Re-saisies" : 40
    "Recherche infos" : 25
    "Appels téléphone" : 20
    "Vérifications" : 10
    "Négociation" : 5
```

---

## 8. Gantt: Timeline d'une Commande

```mermaid
gantt
    title Commande Câble: Du Besoin à la Livraison
    dateFormat HH:mm
    axisFormat %Hh%M

    section Marc
    Identifie besoin           :done, m1, 09:00, 5m
    Cherche bon papier         :done, m2, after m1, 5m
    Remplit bon                :done, m3, after m2, 5m
    Essaie joindre Sylvie      :crit, m4, after m3, 25m
    Appel Sylvie               :done, m5, 10:45, 10m
    Attente livraison          :crit, m6, 11:00, 2880m
    Récupère matériel          :done, m7, 14:00, 30m
    Découvre erreur            :crit, m8, after m7, 1m

    section Sylvie
    Reçoit appel               :done, s1, 10:45, 10m
    Cherche dans Sage          :done, s2, after s1, 12m
    Cherche fournisseur        :done, s3, after s2, 8m
    Appel fournisseur          :done, s4, after s3, 15m
    Email confirmation         :done, s5, after s4, 10m
    Saisit Sage                :done, s6, after s5, 5m
    Saisit Excel               :done, s7, after s6, 5m

    section Éric
    Réception livraison        :done, e1, 09:00, 60m
    Saisit dans Sage           :done, e2, after e1, 20m
```

---

## 9. Class Diagram: Modèle Objet (Simplifié)

```mermaid
classDiagram
    class ChefChantier {
        +nom: string
        +chantier: string
        +commanderMateriel()
        +verifierStock()
    }

    class GestionnaireAchats {
        +nom: string
        +traiterCommande()
        +rechercherFournisseur()
        +saisirDonnees()
    }

    class Magasinier {
        +nom: string
        +receptionnerLivraison()
        +rangerMateriel()
        +compterStock()
    }

    class Commande {
        +numero: string
        +date: Date
        +statut: string
        +montant: float
        +valider()
    }

    class Produit {
        +reference: string
        +designation: string
        +prix: float
        +stock: int
        +obtenirStock()
    }

    class Fournisseur {
        +nom: string
        +contact: string
        +delai: int
        +passerCommande()
    }

    ChefChantier "1" --> "*" Commande : crée
    GestionnaireAchats "1" --> "*" Commande : traite
    Magasinier "1" --> "*" Commande : réceptionne
    Commande "*" --> "1" Fournisseur : passée à
    Commande "*" --> "*" Produit : contient

    note for Produit "🔴 12 références\npour 1 produit !"
    note for Commande "🔴 Re-saisie 6 fois"
```

---

## 10. Deployment Diagram: Infrastructure Actuelle

```mermaid
graph TB
    subgraph "Chantiers (mobiles)"
        MC1[📱 Marc - Téléphone]
        MC2[📄 Bons papier]
    end

    subgraph "Bureau Albertville"
        BS[💻 Serveur Sage<br/>Windows 2012]
        BP1[💻 PC Sylvie]
        BP2[💻 PC Julien]
    end

    subgraph "Dépôt"
        DP1[💻 PC partagé<br/>1 seul poste!]
    end

    subgraph "Cloud"
        Email[📧 Emails]
        Excel[📊 Excel OneDrive]
    end

    subgraph "Fournisseurs"
        F[📞 Téléphone/Fax]
    end

    MC1 -.->|Appels| BP1
    MC2 -.->|Papier| BP1

    BP1 --> BS
    BP2 --> BS
    DP1 --> BS

    BP1 --> Email
    BP1 --> Excel
    BP2 --> Excel

    BP1 -.->|Appels| F

    style BS fill:#FF6B6B
    style DP1 fill:#FFD700
    style MC2 fill:#FF6B6B
```

---

**LÉGENDE**

🔴 = Pain Point CRITIQUE
🟠 = Pain Point IMPORTANT
🟢 = Pain Point SOUHAITÉ
⏰ = Temps perdu
❌ = Erreur
💰 = Coût financier
