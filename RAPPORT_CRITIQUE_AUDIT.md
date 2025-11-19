# 🛡️ RAPPORT CRITIQUE : ANALYSE DE L'AUDIT IT DURET ÉLECTRICITÉ

**Date** : 19 Novembre 2025
**Objet** : Contre-expertise de l'audit et des solutions proposées

---

## 1. 🎯 SYNTHÈSE DE L'ANALYSE

L'audit réalisé est **excellent sur le plan qualitatif** (compréhension métier, identification des "pain points", diagnostic des risques), mais **dangereux sur le plan quantitatif et opérationnel**.

Les conclusions stratégiques (passer à Odoo) sont pertinentes, mais le **business case financier est truffé d'erreurs** qui décrédibilisent l'ensemble, et le **plan de déploiement est irréaliste** (trop ambitieux).

### ✅ Ce qui est validé (Points Forts)
*   **Diagnostic Métier** : L'analyse des problèmes (Post-its, Excel, ERP obsolète) est juste et factuelle.
*   **Choix Odoo** : La recommandation d'un ERP intégré est la bonne réponse à la fragmentation actuelle.
*   **Identification des Risques** : Burn-out, turnover, perte de données sont bien identifiés.

### 🚨 Ce qui doit être corrigé (Points Critiques)
*   **Calculs Financiers Faux** : Le ROI et les coûts sont erronés (écarts de >20k€, économies inventées).
*   **Roadmap "Vague 1" Irréaliste** : Vouloir lancer CRM + SIRH + App Mobile + RFID + BI en 6 mois dans une entreprise "papier" est un échec garanti.
*   **Incohérences de Licences** : Confusion entre 20 utilisateurs "bureau" et 100 utilisateurs "terrain".

---

## 2. 💰 ANALYSE FINANCIÈRE : LES ERREURS À CORRIGER

### 🔴 L'Erreur des "156k€ d'Économie"
Le document `Logiciels/README.md` affirme : *"Économie vs alternatives : 156k€ sur 3 ans"*.
Or, les chiffres présentés sont :
*   Scénario A (Odoo) : **209 316 €**
*   Scénario B (EBP+) : **213 960 €**
*   **Différence réelle : 4 644 €** (et non 156 000 € !)

> **Impact** : Si vous présentez ce chiffre de 156k€ au CODIR, vous perdrez toute crédibilité dès qu'ils feront la soustraction.

### 🔴 Calculs de Coûts Erronés
Comme relevé dans le document de corrections, mais voici la synthèse finale corrigée :

| Poste | Calcul Audit (Faux) | Calcul Réel (Corrigé) | Écart |
|-------|---------------------|-----------------------|-------|
| **Odoo Ent. (3 ans)** | 107 640 € | **89 640 €** (100u x 24.9 x 36) | -18 000 € |
| **PayFit (3 ans)** | 73 476 € | **63 576 €** (100u x 17 x 36 + base) | -9 900 € |
| **Total Scénario A** | 209 316 € | **181 416 €** | **-27 900 €** |

**Conclusion Financière Réelle** :
Le Scénario Odoo (181k€) est bien moins cher que le Scénario B (214k€), avec une économie réelle de **~33 000 € sur 3 ans**, ce qui est déjà un très bon argument sans avoir besoin d'inventer 156k€.

---

## 3. 📅 ANALYSE DE LA ROADMAP : RISQUE D'INDIGESTION

### Le Problème de la "Vague 1" (Mois 1-6)
L'audit propose de lancer en 6 mois :
1.  SIRH (Lucca/PayFit)
2.  CRM (HubSpot/Odoo)
3.  App Mobile Chantiers
4.  Dashboards BI
5.  RFID Stocks
6.  Templates Devis

**C'est impossible.** Pour une entreprise qui gère ses clients sur des post-its et ses chantiers sur WhatsApp, le saut technologique est trop violent. Lancer 6 nouveaux outils simultanément va paralyser les équipes.

### 💡 Recommandation : Roadmap Révisée

Il faut **séquencer** drastiquement pour garantir l'adoption.

#### **Phase 1 : Socle & "Quick Wins" Vrais (Mois 1-4)**
*   **Objectif** : Remplacer le plus critique sans changer le cœur du métier.
*   **Actions** :
    1.  **CRM Simple** (Odoo CRM) : Remplacer les post-its. Facile, adoption immédiate.
    2.  **Communication** : Mettre en place un outil de chat pro (ex: Odoo Discuss ou Teams) pour remplacer WhatsApp pro.
    3.  **Devis** (Odoo Ventes) : Remplacer Sage pour les devis uniquement.

#### **Phase 2 : Le Cœur du Réacteur (Mois 5-10)**
*   **Objectif** : La production.
*   **Actions** :
    1.  **App Mobile Terrain** (Odoo Field Service) : C'est le plus gros morceau (changement d'habitudes techniciens). Ne rien lancer d'autre en même temps.
    2.  **Stocks** : Une fois que les techniciens utilisent l'app, on peut gérer les stocks.

#### **Phase 3 : Admin & RH (Mois 11-15)**
*   **Objectif** : Back-office.
*   **Actions** :
    1.  **SIRH/Paie** : À faire en dernier. Tant que la paie sort (même difficilement), ce n'est pas bloquant pour le business contrairement aux devis ou chantiers.

---

## 4. ⚠️ RISQUES NON COUVERTS

### 1. La Connexion Internet
L'audit parle d'accès distant "très lent" actuellement.
*   **Question** : La connexion internet au siège est-elle suffisante pour passer 100% Cloud (Odoo/SaaS) ?
*   **Action** : Prévoir un audit de la bande passante et potentiellement une fibre dédiée ou 4G box de secours. Si internet coupe, l'entreprise s'arrête.

### 2. Le Matériel Terrain
*   **Question** : Les techniciens ont-ils des smartphones compatibles ? Qui paie les forfaits data ?
*   **Action** : Budgéter l'achat de 50-80 smartphones robustes ou tablettes + coques antichoc. Ce coût (env. 15-20k€) est absent du budget.

### 3. La Reprise de Données
*   Le "Nettoyage pré-migration" est mentionné mais sous-estimé. Migrer des données "Excel tout perso" vers un ERP strict est un enfer.
*   **Risque** : Perte d'historique ou retard de 3 mois sur le planning juste pour nettoyer les bases articles/clients.

---

## 5. ✅ CONCLUSION & RECOMMANDATIONS

**Ne jetez pas l'audit, mais nettoyez-le avant présentation.**

1.  **Corrigez les chiffres** : Utilisez le tableau corrigé (181k€ vs 214k€). Supprimez la mention des "156k€ d'économie".
2.  **Allégez la Vague 1** : Ne promettez pas la lune en 6 mois. Focalisez sur CRM + Devis.
3.  **Ajoutez le Budget Hardware** : Téléphones/Tablettes techniciens.
4.  **Validez la Connectivité** : Fibre optique obligatoire.

**Le choix d'Odoo reste le meilleur**, mais il doit être vendu sur la **fiabilité** et la **modernisation**, pas sur des économies mirobolantes imaginaires.
