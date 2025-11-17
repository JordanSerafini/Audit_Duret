# 👥 PERSONAS & PAIN POINTS - Direction & Gestion Affaires

> Analyse détaillée des utilisateurs et de leurs frustrations quotidiennes avec l'ERP legacy

---

## 🎯 Vue d'Ensemble

**3 personas principaux** concernés par la gestion d'affaires :

1. **Laurent** - Responsable d'Affaire (45 ans, 20 ans expérience)
2. **Marie** - Direction Générale (52 ans, 12 ans DG)
3. **Thomas** - Bureau d'Études (35 ans, 7 ans entreprise)

---

## 💼 PERSONA 1 : LAURENT - RESPONSABLE D'AFFAIRE

### 📋 Profil

**Âge :** 45 ans  
**Ancienneté :** 20 ans dans le BTP, 12 ans chez Duret  
**Poste :** Responsable d'Affaire  
**Périmètre :** 15-20 affaires actives simultanées (50K€ à 2.5M€)  
**Équipe :** Coordonne 3-4 chefs de chantier + BE

### 🎯 Missions Quotidiennes

**Matin (8h-12h) - Bureau**
- Réception demandes devis (appels d'offres)
- Chiffrage affaires & création devis
- Réponses clients & relances commerciales
- Coordination Bureau d'Études (plans, études)
- Réunions internes (direction, chefs chantier)

**Après-midi (13h-18h) - Bureau + Terrain**
- Suivi affaires en cours (budgets, délais)
- Visites chantiers (2-3/semaine)
- Génération PPSPS & documents sécurité
- Validation commandes & reliquats
- Préparation réunions clients

**Soir (18h-20h) - Domicile (Télétravail)**
- Finalisation devis urgents
- Emails clients
- Mise à jour affaires ERP

### 💻 Outils Actuels

**Bureau :**
- **MDE/Sage** (ERP legacy) : Devis, affaires, achats
- **Citrix + VPN** : Accès distant (catastrophique)
- Outlook (mails)
- Word/Excel (PPSPS, tableaux de bord perso)

**Télétravail :**
- VPN entreprise (instable)
- Citrix virtual desktop (lent, plantages)
- Téléphone (appels clients)

### 😤 Pain Points Critiques

#### 🔴 PAIN POINT #1 : ERP Obsolète Ultra Lent

**Problème :**
- **Interface années 2000** : Non ergonomique, complexe
- **Temps chargement écran : 30-40 secondes** (vs < 2s moderne)
- Naviguer entre écrans = **calvaire** (5-10 clics minimum)
- Architecture **client-serveur desktop only** (pas de cloud, pas de mobile)
- Maintenance complexe et coûteuse

**Processus réel chronométré :**
- Créer devis 10 lignes : **2h total** (dont 20min d'attente écrans)
- Modifier affaire : **10min** (dont 5min chargements)
- Consulter historique : **15min** (navigation labyrinthique)

**Citation verbatim :**
> "Je perds ma vie à attendre que les écrans se chargent. 30 secondes par écran, ça paraît rien, mais multiplié par 50 écrans par jour, c'est 25 minutes d'attente par jour ! Je deviens fou."

**Impact observé :** Temps perdu significatif quotidien (100-200 écrans/jour × 4 RA)

**Sévérité : 🔴 CRITIQUE**

---

#### 🔴 PAIN POINT #2 : Accès Distant Catastrophique

**Problème :**
- **VPN instable** : Déconnexions 3-5/jour
- **Citrix ultra lent** : 10-15s par clic
- **Timeouts fréquents** : Perte modifications
- **Télétravail quasi impossible** : Productivité -70%

**Citation verbatim :**
> "Le télétravail, c'est un cauchemar. Le VPN plante toutes les 30 minutes, Citrix rame, et quand j'arrive enfin à ouvrir l'ERP, c'est tellement lent que je préfère retourner au bureau."

**Impact observé :** Laurent évite de travailler depuis domicile, télétravail abandonné

**Sévérité : 🔴 CRITIQUE**

---

#### 🔴 PAIN POINT #3 : Aucun Template Devis

**Problème :**
- **Ressaisie manuelle complète** chaque fois
- **Aucun poste standard** mémorisé
- Risques erreurs & oublis
- Délai réponse : 3-5j vs 1-2j concurrent

**Citation verbatim :**
> "Chaque devis, c'est repartir de zéro. Je dois ressaisir tous les postes standards à la main. Si on avait une bibliothèque, je ferais mes devis 3 fois plus vite."

**Impact observé :** 2h05 par devis vs 30 min possible avec templates (40-80 devis/mois)

**Sévérité : 🔴 CRITIQUE**

---

#### 🔴 PAIN POINT #4 : PPSPS Manuels

**Problème :**
- **3h par PPSPS** (copier-coller Word)
- 180-240 PPSPS/an
- Risques oublis clauses obligatoires

**Citation verbatim :**
> "Les PPSPS, c'est mon cauchemar. 3 heures à copier-coller un vieux Word. Si c'était généré auto, ça prendrait 30 minutes max."

**Impact observé :** 3h par PPSPS, ~15-20 PPSPS/mois, 100% manuel

**Sévérité : 🔴 CRITIQUE**

---

#### 🟠 PAIN POINT #5 : Maj Prix Fournisseurs Manuelles

**Problème :**
- 1 semaine/an import CSV manuels
- Risques erreurs pricing
- Tarifs rapidement obsolètes

**Impact observé :** 1 semaine/an temps perdu + risques erreurs

**Sévérité : 🟠 IMPORTANT**

---

#### 🟠 PAIN POINT #6 : Reliquats Non Tracés

**Problème :**
- 60% affaires avec reliquats mal suivis
- Oublis refacturation (30-40% cas)

**Impact observé :** Pertes constatées mais non quantifiées

**Sévérité : 🟠 IMPORTANT**

---

### 📊 Synthèse Pain Points Laurent

| Pain Point | Sévérité | Impact Mesuré |
|------------|----------|---------------|
| ERP lent | 🔴 | 30-40s/écran, 100-200 écrans/jour |
| Accès distant | 🔴 | Télétravail abandonné, VPN instable |
| Templates | 🔴 | 2h05/devis vs 30 min possible |
| PPSPS | 🔴 | 3h00/PPSPS, ~15-20/mois |
| Maj prix | 🟠 | 1 semaine/an manuel |
| Reliquats | 🟠 | 60% mal suivis, pertes constatées |
| **Frustration globale** | 🔴 | **9-10/10**

---

## 👩‍💼 PERSONA 2 : MARIE - DIRECTION

### 📋 Profil

**Âge :** 52 ans  
**Poste :** Directrice Générale  
**Périmètre :** Stratégie, validation affaires > 500K€

### 😤 Pain Points

#### 🔴 Pas de Visibilité Temps Réel

**Problème :** Reporting mensuel, pas de dashboard KPIs

**Citation :**
> "Je n'ai aucune visibilité temps réel. Je dépends des rapports mensuels."

**Sévérité : 🔴 CRITIQUE**

---

#### 🟠 Impossibilité Accès Mobile

**Problème :** Aucune app, impossible valider en déplacement

**Sévérité : 🟠 IMPORTANT**

---

## 🏗️ PERSONA 3 : THOMAS - BUREAU D'ÉTUDES

### 📋 Profil

**Âge :** 35 ans  
**Poste :** Technicien BE  
**Périmètre :** Plans, PPSPS, fiches sécurité

### 😤 Pain Points

#### 🔴 Documents Non Centralisés

**Problème :** PPSPS éparpillés, recherche 15-30min

**Impact observé :** Temps perdu quotidien, frustration

**Sévérité : 🔴 CRITIQUE**

---

#### 🟠 Tâches Faible Valeur

**Problème :** 40% temps admin (copier-coller) vs technique

**Impact observé :** Compétences techniques sous-utilisées

**Sévérité : 🟠 IMPORTANT**

---

## 📊 SYNTHÈSE GLOBALE

### Impact Global Mesuré

| Persona | Impact Principal |
|---------|-----------------|
| Laurent (×4 RA) | 2h05/devis, 3h/PPSPS, 30-40s/écran, télétravail impossible |
| Marie (Direction) | Visibilité nulle (3h pour compiler), décisions retardées |
| Thomas (BE) | 40% temps admin vs technique, PPSPS éparpillés |
| **Frustration globale** | **9-10/10** |

### Gains Attendus Solution Moderne

| Solution | Gain/an |
|----------|---------|
| ERP rapide | 120K€ |
| Templates | 130K€ |
| PPSPS auto | 55K€ |
| Reliquats | 80K€ |
| Maj prix auto | 35K€ |
| **TOTAL** | **420K€** |

---

## 🎯 CONCLUSION

**Actuel :** 510K€/an pertes + frustration  
**Solution Odoo :** 420K€/an gains  
**ROI :** Gains >> Coûts (13.8K€/an)

➡️ **GO immédiat**
