# 🎨 DIAGRAMMES UML - Direction & Gestion Affaires

> Diagrammes visuels pour présentation slides
> Format: Mermaid (rendu graphique)

---

## 1. Diagramme de Séquence: Création Devis (État ACTUEL)

```mermaid
sequenceDiagram
    actor Laurent as Laurent<br/>(Resp. Affaire)
    participant Dossiers as Dossiers<br/>Partagés
    participant MDE as MDE/Sage<br/>ERP
    participant Excel as Excel<br/>perso
    participant Email as Outlook
    actor Client as Client

    Note over Laurent: JOUR 1 - 9h00
    Client->>Laurent: Email demande devis
    Note right of Laurent: Spécifications projet

    Laurent->>Laurent: Lecture email (15 min)
    Note right of Laurent: 🔴 Infos éparpillées

    Laurent->>Dossiers: Recherche ancien devis similaire
    Note right of Dossiers: 🔴 200+ fichiers<br/>Nommage incohérent<br/>⏰ 30-45 min perdues

    Dossiers-->>Laurent: Trouve devis similaire (ou pas)

    Laurent->>Excel: Copie lignes dans Excel perso
    Note right of Excel: Templates artisanaux

    Laurent->>MDE: Ouverture MDE
    Note right of MDE: 🔴 Lancement: 15s<br/>Login: 30s<br/>Navigation: 40s<br/>Recherche client: 2min<br/>⏰ Total: 5 min !

    MDE-->>Laurent: Interface chargée

    loop Pour CHAQUE ligne (30 lignes)
        Laurent->>MDE: Clic "Ajouter ligne"
        Note right of MDE: 🔴 Attente: 35 secondes !
        MDE-->>Laurent: Popup catalogue

        Laurent->>MDE: Recherche article
        Note right of MDE: ⏰ 2 min par article

        Laurent->>Laurent: Copie depuis Excel
        Laurent->>MDE: Saisie manuelle (quantité, prix, remise)

        Laurent->>MDE: Sauvegarde ligne
        Note right of MDE: 🔴 Attente: 25 secondes !
        MDE-->>Laurent: Ligne ajoutée
    end

    Note over Laurent,MDE: ⏰ 30 lignes × 5min = 2h30<br/>Réduit à 1h30 avec Excel<br/>mais TOUJOURS très long !

    Laurent->>Excel: Vérifications calculs
    Note right of Excel: Marge, cohérence<br/>⏰ 10-15 min

    Laurent->>MDE: Ajustements 2-3 lignes
    Note right of MDE: 🔴 Re-chargements: 5 min

    Laurent->>MDE: "Générer PDF"
    MDE-->>Laurent: PDF (45s)
    Note right of MDE: 🔴 Parfois bugs<br/>→ Régénération

    Laurent->>Email: Rédaction email + pièce jointe
    Note right of Email: ⏰ 7 min

    Laurent->>Client: Envoi devis

    Note over Laurent,Client: ⏰ TOTAL: 2h05<br/>😤 FRUSTRATION: 9/10<br/>[J+2] Client reçoit réponse<br/>(concurrent: J+1)
```

---

## 2. Activity Diagram: Processus Création Devis ACTUEL

```mermaid
flowchart TD
    Start([Réception demande<br/>devis client]) --> A1[Lecture email]
    A1 -->|15 min| A2[Recherche ancien<br/>devis similaire]
    A2 -->|30-45 min| A3{Trouve<br/>exemple?}
    A3 -->|Non| A4[Part de zéro]
    A3 -->|Oui| A5[Copie dans Excel]
    A4 --> B1
    A5 --> B1[Ouverture MDE]

    B1 -->|5 min| B2[Recherche client]
    B2 --> B3[Nouveau devis]

    B3 --> Loop1{30 lignes<br/>à saisir}
    Loop1 --> C1[Clic Ajouter ligne]
    C1 -->|35s attente| C2[Popup catalogue]
    C2 -->|2 min| C3[Recherche article]
    C3 --> C4[Saisie manuelle]
    C4 -->|25s attente| C5[Sauvegarde]
    C5 --> Loop1

    Loop1 -->|Toutes saisies| D1[Vérif calculs<br/>Excel]
    D1 -->|15 min| D2{Erreurs?}
    D2 -->|Oui| D3[Ajustements<br/>dans MDE]
    D3 -->|5 min| D1
    D2 -->|Non| E1[Génération PDF]

    E1 -->|45s| E2{Mise en page<br/>OK?}
    E2 -->|Non| E1
    E2 -->|Oui| E3[Rédaction email]

    E3 -->|7 min| End([Envoi client])

    Note1[⏰ TOTAL: 2h05] --> End

    style Start fill:#90EE90
    style End fill:#90EE90
    style C1 fill:#FF6B6B
    style C2 fill:#FF6B6B
    style C5 fill:#FF6B6B
    style A2 fill:#FFD700
    style B1 fill:#FFD700
```

---

## 3. Use Case Diagram: Acteurs et Actions

```mermaid
graph TB
    subgraph Système Actuel MDE/Sage
        UC1((Créer<br/>devis))
        UC2((Générer<br/>PPSPS))
        UC3((Suivre<br/>affaires))
        UC4((Gérer<br/>reliquats))
        UC5((Consulter<br/>KPIs))
        UC6((Valider<br/>documents))
    end

    Laurent[👤 Laurent<br/>Resp. Affaire] --> UC1
    Laurent --> UC2
    Laurent --> UC3
    Laurent --> UC4

    RA2[👤 RA2<br/>Resp. Affaire] --> UC1
    RA2 --> UC2
    RA2 --> UC3

    Marie[👩‍💼 Marie<br/>Direction] --> UC5
    Marie --> UC3

    Thomas[🏗️ Thomas<br/>Bureau Études] --> UC6
    Thomas --> UC2

    UC1 -.-> MDE[(MDE/Sage)]
    UC2 -.-> Word[(Word)]
    UC3 -.-> MDE
    UC4 -.-> Excel[(Excel)]
    UC5 -.-> Excel
    UC6 -.-> Email[(Email)]

    style UC1 fill:#FFD700
    style UC2 fill:#FFD700
    style UC3 fill:#FFD700
    style UC4 fill:#FFD700
    style UC5 fill:#FFD700
    style UC6 fill:#FFD700
    style MDE fill:#FF6B6B
    style Word fill:#FF6B6B
    style Excel fill:#FF6B6B
```

---

## 4. State Diagram: Cycle de Vie d'un Devis

```mermaid
stateDiagram-v2
    [*] --> Demande: Client demande devis

    Demande --> Recherche: Laurent cherche template

    Recherche --> EnAttente: Template introuvable
    EnAttente --> Recherche: Continue recherche (30 min)

    Recherche --> Brouillon: Ouvre MDE (5 min)

    Brouillon --> Saisie: Débute saisie lignes
    note right of Saisie: 🔴 1h30 de saisie<br/>30 lignes × 5 min

    Saisie --> Verification: Vérif Excel

    Verification --> Ajustements: Erreurs détectées
    Ajustements --> Verification: Re-calcul

    Verification --> Generation: Calculs OK

    Generation --> BugPDF: Mise en page défaillante
    BugPDF --> Generation: Régénération

    Generation --> Envoi: PDF OK

    Envoi --> Envoye: Client reçoit (J+2)

    Envoye --> Accepte: Client accepte
    Envoye --> Refuse: Client refuse
    Envoye --> EnAttente2: Pas de réponse (>10j)

    Accepte --> [*]: Affaire créée
    Refuse --> [*]: Archivé
    EnAttente2 --> Relance: RA relance client

    note left of Brouillon: ⏰ Total: 2h05<br/>😤 Frustration: 9/10
```

---

## 5. Component Diagram: Architecture Système ACTUEL

```mermaid
graph TB
    subgraph "🏢 DURET ÉLECTRICITÉ"
        subgraph "Responsables Affaires (4)"
            RA1[👤 Laurent<br/>RA 1]
            RA2[👤 RA 2]
            RA3[👤 RA 3]
            RA4[👤 RA 4]
        end

        subgraph "Direction"
            Marie[👩‍💼 Marie<br/>DG]
        end

        subgraph "Bureau Études"
            Thomas[🏗️ Thomas<br/>BE]
        end

        subgraph "Outils Actuels"
            MDE[(MDE/Sage<br/>⚠️ 30-40s/écran)]
            Word1[📄 Word<br/>PPSPS]
            Excel1[📊 Excel 1<br/>Templates RA1]
            Excel2[📊 Excel 2<br/>Templates RA2]
            Excel3[📊 Excel 3<br/>Suivi]
            Dossiers[📁 Dossiers<br/>Partagés<br/>200+ fichiers]
            VPN[🔒 VPN+Citrix<br/>⚠️ Instable]
        end
    end

    subgraph "Clients (100+)"
        C1[Client A]
        C2[Client B]
        C3[Client C]
    end

    subgraph "Fournisseurs"
        F1[Rexel]
        F2[Sonepar]
    end

    C1 -->|Email| RA1
    C2 -->|Email| RA2
    C3 -->|Email| RA3

    RA1 -->|VPN| MDE
    RA2 -->|VPN| MDE
    RA3 -->|VPN| MDE
    RA4 -->|VPN| MDE

    RA1 --> Excel1
    RA2 --> Excel2
    RA1 --> Word1
    RA2 --> Word1

    RA1 --> Dossiers
    RA2 --> Dossiers
    RA3 --> Dossiers

    Thomas --> Word1
    Thomas -.->|Email| RA1

    Marie -.->|Appel| RA1
    Marie --> Excel3

    MDE --> F1
    MDE --> F2

    style MDE fill:#FF6B6B
    style VPN fill:#FF6B6B
    style Dossiers fill:#FFD700
    style Excel1 fill:#FFD700
    style Excel2 fill:#FFD700
    style Excel3 fill:#FFD700
    style Word1 fill:#FFD700
```

---

## 6. ERD: Modèle de Données Actuel

```mermaid
erDiagram
    AFFAIRE {
        string numero "OK"
        string nom "OK"
        date date_debut "OK"
        date date_fin "Estimation"
        float budget "Initial"
        float depense "Pas temps réel"
        int avancement "Manuel %"
        string statut "OK"
    }

    DEVIS {
        string numero "OK"
        date date_creation "OK"
        float montant "OK"
        int nb_lignes "OK"
        string statut "brouillon/envoyé"
        string template_utilise "❌ NON TRACÉ"
        int temps_creation "❌ NON TRACÉ"
    }

    PPSPS {
        string numero "Fichier Word"
        int version "Manuelle"
        date date_creation "Fichier"
        string statut "❌ NON TRACÉ"
        string template_utilise "❌ NON TRACÉ"
        date validation_be "❌ Email"
    }

    RELIQUAT {
        string id "❌ NON TRACÉ"
        float montant "❌ Excel perso"
        date identification "❌ Mémoire RA"
        string statut "❌ Inconnu"
    }

    CLIENT {
        string nom "OK"
        string adresse "OK"
        string contact "OK"
    }

    LIGNE_DEVIS {
        string designation "OK"
        int quantite "OK"
        float prix_unit "❌ Obsolète"
        float remise "OK"
    }

    AFFAIRE ||--o{ DEVIS : "pour"
    AFFAIRE ||--o{ PPSPS : "génère"
    AFFAIRE ||--o{ RELIQUAT : "contient (non tracé)"
    CLIENT ||--o{ AFFAIRE : "commande"
    CLIENT ||--o{ DEVIS : "reçoit"
    DEVIS ||--o{ LIGNE_DEVIS : "contient"

    AFFAIRE ||--o| EXCEL_SUIVI : "données dispersées"
    PPSPS ||--o| WORD_FILES : "200+ fichiers"
```

---

## 7. Pie Chart: Répartition du Temps (Laurent - Création Devis)

```mermaid
pie title Temps Laurent sur 1 Devis (2h05)
    "Saisie lignes MDE" : 43
    "Recherche template" : 27
    "Attentes chargement" : 12
    "Vérifications Excel" : 12
    "Génération PDF/Email" : 6
```

---

## 8. Gantt: Timeline Création Devis

```mermaid
gantt
    title Création Devis Client: Timeline ACTUELLE
    dateFormat HH:mm
    axisFormat %Hh%M

    section Préparation
    Lecture email client        :done, p1, 09:00, 15m
    Recherche ancien devis      :crit, p2, after p1, 35m
    Copie lignes Excel          :done, p3, after p2, 5m

    section Ouverture MDE
    Lancement MDE               :crit, o1, after p3, 15s
    Login                       :crit, o2, after o1, 30s
    Navigation menu             :crit, o3, after o2, 40s
    Recherche client            :crit, o4, after o3, 2m
    Nouveau devis               :crit, o5, after o4, 40s

    section Saisie (1h30)
    Saisie 30 lignes            :crit, s1, after o5, 90m

    section Vérifications
    Vérif calculs Excel         :done, v1, after s1, 15m
    Ajustements MDE             :crit, v2, after v1, 5m

    section Finalisation
    Génération PDF              :crit, f1, after v2, 3m
    Rédaction email             :done, f2, after f1, 7m
    Envoi                       :done, f3, after f2, 1m
```

---

## 9. Class Diagram: Modèle Objet (Simplifié)

```mermaid
classDiagram
    class ResponsableAffaire {
        +nom: string
        +email: string
        +telephone: string
        +affaires_actives: int
        +creerDevis()
        +genererPPSPS()
        +suivreAffaires()
    }

    class Devis {
        +numero: string
        +date_creation: Date
        +client: Client
        +montant_total: float
        +nb_lignes: int
        +statut: string
        +ajouterLigne()
        +calculerTotal()
        +genererPDF()
    }

    class PPSPS {
        +numero: string
        +version: int
        +affaire: Affaire
        +date_creation: Date
        +statut: string
        +generer()
        +validerBE()
    }

    class Affaire {
        +numero: string
        +nom: string
        +client: Client
        +budget: float
        +depense: float
        +avancement: int
        +calculerMarge()
    }

    class Client {
        +nom: string
        +adresse: string
        +contact: string
        +historique: List~Affaire~
    }

    class LigneDevis {
        +designation: string
        +quantite: int
        +prix_unit: float
        +remise: float
        +calculerMontant()
    }

    ResponsableAffaire "1" --> "*" Devis : crée
    ResponsableAffaire "1" --> "*" PPSPS : génère
    ResponsableAffaire "1" --> "*" Affaire : gère
    Devis "*" --> "1" Client : pour
    Devis "*" --> "1" Affaire : transformé en
    Devis "1" --> "*" LigneDevis : contient
    PPSPS "*" --> "1" Affaire : associé à
    Affaire "*" --> "1" Client : commandé par

    note for Devis "🔴 2h05 par devis\n🔴 Pas de templates"
    note for PPSPS "🔴 3h00 par PPSPS\n🔴 100% manuel Word"
```

---

## 10. Deployment Diagram: Infrastructure Actuelle

```mermaid
graph TB
    subgraph "Bureau + Télétravail"
        PC1[💻 PC Laurent<br/>Bureau]
        PC2[💻 PC Laurent<br/>Domicile]
        PC3[💻 PC RA2]
        PC4[💻 PC RA3]
    end

    subgraph "Serveurs Internes"
        Sage[🖥️ Serveur MDE/Sage<br/>Windows Server]
        FileServer[📁 Serveur Fichiers<br/>Dossiers Partagés]
    end

    subgraph "Accès Distant"
        VPN[🔒 VPN Entreprise<br/>⚠️ Instable]
        Citrix[☁️ Citrix Virtual Desktop<br/>⚠️ 30-40s/écran]
    end

    subgraph "Cloud"
        Email[📧 Outlook<br/>Office 365]
    end

    subgraph "Clients"
        Clients[👥 Clients<br/>Email/Téléphone]
    end

    PC1 --> Sage
    PC1 --> FileServer
    PC3 --> Sage
    PC4 --> Sage

    PC2 -.->|VPN| VPN
    VPN -.->|Citrix| Citrix
    Citrix -.-> Sage
    Citrix -.-> FileServer

    PC1 --> Email
    PC2 --> Email
    PC3 --> Email

    Email <-.-> Clients

    style Sage fill:#FF6B6B
    style VPN fill:#FF6B6B
    style Citrix fill:#FF6B6B
    style FileServer fill:#FFD700
```

---

## 11. Mind Map: Pain Points Hiérarchisés

```mermaid
mindmap
  root((Pain Points<br/>Direction Affaires))
    ERP Legacy
      Lent 30-40s/écran
      Interface obsolète
      Pas de cloud
      Télétravail impossible
    Templates Chaos
      200+ fichiers Word
      Nommage incohérent
      Recherche 30-45 min
      Pas de versioning
    Processus Manuels
      Devis 2h05
        Recherche 30-45 min
        Saisie 1h30
        Vérif Excel 15 min
      PPSPS 3h00
        100% Word manuel
        Risque oublis clauses
        Copier-coller
    Visibilité Nulle
      Direction aveugle
      3h compilation manuelle
      Pas de KPIs temps réel
      Décisions retardées
    Reliquats Perdus
      Non tracés
      Pertes constatées
      Pas de facturation
```

---

## 12. Comparison Bar Chart: AVANT vs APRÈS

```mermaid
---
config:
  themeVariables:
    xyChart:
      backgroundColor: "white"
---
xychart-beta
    title "Comparaison Temps Processus: AVANT vs APRÈS"
    x-axis [Ouverture système, Création devis, Génération PPSPS, Visibilité direction]
    y-axis "Temps (minutes)" 0 --> 180
    bar [5, 125, 180, 180]
    bar [0.5, 31, 27, 2]
```

---

**LÉGENDE**

🔴 = Pain Point CRITIQUE
🟠 = Pain Point IMPORTANT
🟢 = Pain Point SOUHAITÉ
⏰ = Temps perdu
❌ = Erreur
😤 = Frustration utilisateur
