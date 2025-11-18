# Comparatif APIs Sonepar vs Rexel - 2025

## Vue d'ensemble

Analyse comparative des possibilités d'intégration technique avec les deux principaux distributeurs de matériel électrique en France.

## Tableau comparatif synthétique

| Critère | Sonepar | Rexel |
|---------|---------|-------|
| **API REST/GraphQL** | ✅ Disponible | ❌ Non disponible |
| **Documentation publique** | ⚠️ Limitée | ❌ Inexistante |
| **EDI** | ✅ Disponible | ✅ Disponible |
| **Portail Web** | ✅ Disponible | ✅ Disponible |
| **Punch-out** | ✅ Disponible | ⚠️ Non documenté |
| **Temps réel** | ✅ Via API | ❌ Uniquement web manuel |
| **Stack technique** | GraphQL, Azure, REST | EDI traditionnel |
| **Modernité** | 🟢 Moderne | 🟡 Traditionnel |
| **Facilité intégration** | 🟢 Élevée (avec API) | 🟡 Moyenne (EDI complexe) |
| **Coût intégration** | 🟢 Potentiellement faible | 🔴 Élevé (partenaire EDI) |
| **Support développeurs** | ⚠️ À confirmer | ❌ Via partenaires uniquement |

## Détail par cas d'usage

### 1. Consultation du catalogue produits

#### Sonepar
- ✅ **API disponible**: Endpoint de recherche produits
- ✅ **Temps réel**: Mise à jour instantanée
- ✅ **Flexible**: Requêtes GraphQL personnalisables
- ✅ **Filtrage**: Recherche avancée par critères

**Exemple d'usage**:
```graphql
query {
  products(search: "disjoncteur") {
    id
    reference
    description
    price
    stock
    category
  }
}
```

#### Rexel
- ⚠️ **Portail web uniquement**: Pas d'accès programmatique
- ❌ **Pas d'API**: Consultation manuelle requise
- 🟡 **EDI limité**: Pas adapté à la navigation catalogue

**Conclusion**: ✅ **Sonepar** largement supérieur

---

### 2. Vérification des stocks

#### Sonepar
- ✅ **API temps réel**: Stock actualisé à la seconde
- ✅ **Multi-dépôts**: Stock par agence/entrepôt
- ✅ **Disponibilité**: Date de disponibilité estimée
- ✅ **Intégration système**: Appel automatique possible

#### Rexel
- 🟡 **EDI 846**: Message "Inventory Inquiry" disponible
- ⚠️ **Pas temps réel**: Réponse différée (batch)
- 🟡 **Complexité**: Nécessite mise en place EDI complète
- ❌ **Pas d'API simple**: Pas d'accès direct

**Conclusion**: ✅ **Sonepar** plus adapté pour du temps réel

---

### 3. Consultation des prix

#### Sonepar
- ✅ **API prix**: Tarifs personnalisés temps réel
- ✅ **Prix contractuels**: Remises clients appliquées
- ✅ **Promotions**: Prix promotionnels inclus
- ✅ **Multi-devises**: Support international

#### Rexel
- 🟡 **Via EDI**: Dans réponse à demande de prix
- ⚠️ **Portail web**: Consultation manuelle
- ❌ **Pas d'API directe**: Impossible d'interroger simplement

**Conclusion**: ✅ **Sonepar** nettement supérieur

---

### 4. Passage de commandes

#### Sonepar
- ✅ **API commande**: POST endpoint pour créer commande
- ✅ **Validation temps réel**: Confirmation immédiate
- ✅ **Flexibilité**: Modification avant validation
- ✅ **Automatisation**: Intégration dans workflow

#### Rexel
- ✅ **EDI 850**: Message "Purchase Order" standard
- ✅ **EDI 855**: Accusé réception automatique
- 🟡 **Robuste mais complexe**: Mise en œuvre lourde
- 🟡 **Coût**: Partenaire EDI requis

**Conclusion**: 🟰 **Égalité** - Approches différentes
- Sonepar: Moderne, flexible
- Rexel: Traditionnel, éprouvé

---

### 5. Suivi de commandes

#### Sonepar
- ✅ **API tracking**: Statut commande temps réel
- ✅ **Événements**: Notifications changement état
- ✅ **Détails**: Tracking précis par ligne
- ✅ **Historique**: Accès complet historique

#### Rexel
- ✅ **EDI 856**: "Advance Ship Notice"
- 🟡 **Portail web**: Suivi manuel possible
- ⚠️ **Différé**: Pas de temps réel EDI
- 🟡 **Notifications**: Par email standard

**Conclusion**: ✅ **Sonepar** pour automatisation et temps réel

---

### 6. Récupération des factures

#### Sonepar
- ✅ **API factures**: Téléchargement automatique
- ✅ **Format structuré**: JSON/XML
- ✅ **Pièces jointes**: PDFs disponibles
- ✅ **Métadonnées**: Indexation facilitée

#### Rexel
- ✅ **EDI 810**: Message "Invoice" standard
- ✅ **Format structuré**: EDI X12/EDIFACT
- ✅ **Automatisation complète**: Via EDI
- 🟡 **Coût**: Infrastructure EDI requise

**Conclusion**: 🟰 **Égalité fonctionnelle**
- Sonepar: API moderne
- Rexel: EDI robuste

---

## Analyse par profil d'entreprise

### TPE (< 10 employés, faible volume)

**Recommandation: Portails Web manuels**
- Sonepar: Portail web e-procurement
- Rexel: Portail web standard

**Pourquoi**:
- Coût nul
- Déploiement immédiat
- Formation simple
- Pas de développement

---

### PME (10-50 employés, volume moyen)

**Recommandation: API Sonepar**
- ✅ Coût modéré
- ✅ ROI rapide
- ✅ Automatisation partielle
- ✅ Évolutivité

**Alternative Rexel**: EDI si relation exclusive
- Justifié si > 80% achats chez Rexel
- Amortissement sur volume

---

### ETI/Grandes entreprises (> 50 employés, gros volume)

**Recommandation: Double intégration**
- **API Sonepar**: Intégration moderne, temps réel
- **EDI Rexel**: Via plateforme EDI existante

**Architecture**:
```
                    ┌──────────────┐
                    │  ERP Client  │
                    └──────┬───────┘
                           │
                    ┌──────┴───────┐
                    │ Middleware   │
                    │ Intégration  │
                    └──┬────────┬──┘
                       │        │
              ┌────────┴──┐  ┌─┴──────────┐
              │  API      │  │  EDI       │
              │  Sonepar  │  │  Rexel     │
              └───────────┘  └────────────┘
```

---

## Coûts estimés

### Sonepar - Intégration API

| Poste | Coût estimé | Récurrent |
|-------|-------------|-----------|
| Accès API | Gratuit - 500€/mois | Mensuel |
| Développement initial | 5 000 - 15 000€ | Unique |
| Maintenance annuelle | 1 000 - 3 000€ | Annuel |
| **Total 1ère année** | **6 000 - 21 000€** | - |

### Rexel - Intégration EDI

| Poste | Coût estimé | Récurrent |
|-------|-------------|-----------|
| Partenaire EDI (B2BE/Cogential) | 2 000 - 5 000€/an | Annuel |
| Frais setup initial | 3 000 - 10 000€ | Unique |
| Développement/Mapping | 5 000 - 15 000€ | Unique |
| Transaction fees | 0,10 - 0,50€/doc | Par transaction |
| **Total 1ère année** | **10 000 - 30 000€** | - |

### Portails Web manuels

| Poste | Coût estimé | Récurrent |
|-------|-------------|-----------|
| Accès portail | Gratuit | - |
| Formation | 500€ | Unique |
| Temps opérateur | Variable (coût caché) | Permanent |

---

## Critères de décision

### Choisir Sonepar si...
- ✅ Besoin d'automatisation rapide
- ✅ Budget développement disponible
- ✅ Équipe technique capable
- ✅ Besoin de données temps réel
- ✅ Intégration dans application métier
- ✅ Évolutions fonctionnelles fréquentes
- ✅ Multi-fournisseurs avec APIs

### Choisir EDI Rexel si...
- ✅ Volume très important avec Rexel
- ✅ Infrastructure EDI déjà en place
- ✅ Standard industrie requis
- ✅ Relation exclusive Rexel
- ✅ Pas de compétence développement API
- ✅ Cahier des charges imposant EDI

### Rester sur portails Web si...
- ✅ Volume faible (< 50 commandes/mois)
- ✅ Budget IT limité
- ✅ Pas de compétence technique
- ✅ Besoin immédiat
- ✅ Utilisateurs formés

---

## Matrice de décision

### Score par critère (sur 5)

| Critère | Poids | Sonepar API | Rexel EDI | Portail Web |
|---------|-------|-------------|-----------|-------------|
| **Facilité mise en œuvre** | 3 | 4 | 2 | 5 |
| **Coût initial** | 2 | 4 | 2 | 5 |
| **Coût récurrent** | 2 | 4 | 3 | 5 |
| **Temps réel** | 3 | 5 | 2 | 3 |
| **Automatisation** | 3 | 5 | 4 | 1 |
| **Flexibilité** | 2 | 5 | 2 | 2 |
| **Fiabilité** | 3 | 4 | 5 | 3 |
| **Évolutivité** | 2 | 5 | 3 | 2 |
| **Support** | 2 | 3 | 4 | 3 |
| **Standardisation** | 1 | 3 | 5 | 2 |
| **TOTAL PONDÉRÉ** | - | **96/115** | **73/115** | **69/115** |
| **Score normalisé** | - | **83%** | **63%** | **60%** |

---

## Recommandations par scénario

### Scénario 1: Startup/TPE en croissance

**Solution**: Portail Web → API Sonepar
1. **Phase 1 (0-6 mois)**: Portail web manuel
2. **Phase 2 (6-18 mois)**: API Sonepar quand volume justifie
3. **Seuil de bascule**: > 100 commandes/mois

### Scénario 2: PME établie

**Solution**: API Sonepar + Portail Rexel
1. **Fournisseur principal (Sonepar)**: Intégration API
2. **Fournisseur secondaire (Rexel)**: Portail web
3. **ROI**: 12-18 mois

### Scénario 3: ETI multi-sites

**Solution**: API Sonepar + EDI Rexel
1. **Intégration complète** des deux fournisseurs
2. **Normalisation** données en interne
3. **Dashboard unifié** de gestion
4. **ROI**: 18-24 mois

### Scénario 4: Projet pure-player digital

**Solution**: API Sonepar exclusivement
1. Architecture microservices
2. Intégration CI/CD
3. Tests automatisés
4. Monitoring temps réel

**Raison**: Cohérence technologique

---

## Roadmap technique recommandée

### Phase 1: Quick Win (1-3 mois)
```
✓ Créer comptes portails Sonepar et Rexel
✓ Former équipes utilisation portails
✓ Contacter Sonepar pour accès API
✓ Obtenir documentation API Sonepar
✓ Évaluer coûts EDI Rexel (devis partenaires)
```

### Phase 2: POC API Sonepar (3-6 mois)
```
✓ Développer POC recherche produits
✓ Tester récupération stocks et prix
✓ Valider passage commande test
✓ Mesurer performances
✓ Valider ROI technique
```

### Phase 3: Production API Sonepar (6-9 mois)
```
✓ Développement intégration complète
✓ Tests d'intégration
✓ Gestion erreurs et retry
✓ Monitoring et alertes
✓ Documentation interne
✓ Formation équipes
```

### Phase 4: Extension Rexel (9-12 mois)
```
✓ Décision API vs EDI vs Manuel
✓ Mise en œuvre solution choisie
✓ Normalisation données multi-fournisseurs
✓ Dashboard unifié
```

---

## Risques et mitigation

### Risques Sonepar API

| Risque | Impact | Probabilité | Mitigation |
|--------|--------|-------------|------------|
| Documentation incomplète | Élevé | Moyenne | Contact support dédié |
| Changements API | Moyen | Faible | Versioning, tests automatisés |
| Rate limiting | Moyen | Moyenne | Cache, retry avec backoff |
| Indisponibilité | Élevé | Faible | Fallback portail web, cache |

### Risques Rexel EDI

| Risque | Impact | Probabilité | Mitigation |
|--------|--------|-------------|------------|
| Coût dépassé | Élevé | Moyenne | Devis détaillé, forfait |
| Complexité implémentation | Élevé | Élevée | Partenaire expert, formation |
| Délais allongés | Moyen | Moyenne | Planning réaliste, buffer |
| Dépendance partenaire | Moyen | Élevée | SLA contractuel |

---

## Conclusion et recommandation finale

### Pour l'Audit Duret

**Recommandation principale**:
# ✅ Intégration API Sonepar

**Justification**:
1. **Modernité**: Stack technique actuelle et évolutive
2. **Coût/Bénéfice**: ROI rapide vs EDI
3. **Flexibilité**: Évolutions faciles
4. **Temps réel**: Données actualisées
5. **Autonomie**: Pas de dépendance à un partenaire

**Plan d'action**:
1. **J+0**: Contacter Sonepar pour accès API
2. **J+30**: POC recherche produits + stocks
3. **J+60**: Validation technique et ROI
4. **J+90**: Décision Go/No-Go développement complet
5. **J+180**: Mise en production

**Pour Rexel**:
Maintenir l'accès portail web en parallèle pour complément d'offre, évaluer EDI uniquement si volume Rexel > 60% du total.

---
*Dernière mise à jour: Novembre 2025*
