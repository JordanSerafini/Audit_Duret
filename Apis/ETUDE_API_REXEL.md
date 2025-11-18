# Étude API Rexel - 2025

## Vue d'ensemble

Rexel est un leader mondial de la distribution professionnelle de matériel électrique, concurrent direct de Sonepar. L'entreprise propose des solutions d'e-commerce et d'intégration pour optimiser les processus d'approvisionnement.

## Informations sur l'API

### Portails disponibles
- **Portail Web Rexel**: https://rexelwebportal.b2be.com/
- **Login**: https://login.rexel.com/
- **E-commerce**: https://www.rexel.com/en/service/e-commerce/

## État de l'API publique

### ⚠️ Constat important
**Rexel ne dispose pas d'API publique documentée en 2025**

Contrairement à Sonepar, Rexel ne propose pas de documentation API publiquement accessible. L'entreprise privilégie :
- Les solutions EDI traditionnelles
- Les intégrations via partenaires (B2BE, Cogential IT, etc.)
- Le portail web pour les interactions manuelles

## Solutions d'intégration disponibles

### 1. EDI (Electronic Data Interchange)

#### Partenaires certifiés

**B2BE (Business to Business Exchange)**
- **URL**: https://www.b2be.com/resources/trading-partners/edi-rexel-usa/
- **Services**:
  - Connexion à l'écosystème Rexel USA
  - Échange électronique de documents
  - Visibilité de la chaîne d'approvisionnement
- **Protocole**: AS2, SFTP, HTTP/S
- **Formats**: EDIFACT, X12, XML

**Cogential IT Services**
- **URL**: https://www.cogentialit.com/edi/rexel-edi.cshtml
- **Services complets**:
  - Commandes EDI
  - Factures électroniques
  - Avis d'expédition
  - Confirmations de commande
  - Rapprochement de livraisons

**The EDI Exchange**
- **URL**: https://www.theediexchange.com/edi/rexel.cshtml
- **Services**:
  - Solution EDI cloud
  - Configuration AS2
  - Support complet

### 2. Portail Web Rexel

**Caractéristiques**:
- Interface web pour consultation catalogue
- Passage de commandes en ligne
- Suivi de commandes
- Consultation des factures
- Historique d'achats

**Limitations**:
- Pas d'automatisation possible
- Interaction manuelle requise
- Pas d'intégration système

### 3. Portail Contracteur (Contractor Portal)

**Nouveauté 2025**: Partenariat avec Parspec
- **Lancement**: Fin 2025
- **URL**: https://electricaltrends.com/2025/05/19/parspec-to-power-rexel-contractor-portal/
- **Fonctionnalités attendues**:
  - Recherche de produits améliorée
  - Gestion de projets
  - Intégration potentielle avec outils métier

## Documents EDI supportés

### Documents entrants (vers Rexel)
1. **850 - Purchase Order**: Commande d'achat
2. **860 - Purchase Order Change**: Modification de commande
3. **846 - Inventory Inquiry**: Demande de disponibilité stock

### Documents sortants (depuis Rexel)
1. **810 - Invoice**: Facture
2. **855 - Purchase Order Acknowledgment**: Accusé réception commande
3. **856 - Advance Ship Notice**: Avis d'expédition
4. **997 - Functional Acknowledgment**: Accusé de réception technique

## Comparaison EDI vs API

### EDI (Solution actuelle Rexel)
**Avantages**:
- ✅ Solution mature et éprouvée
- ✅ Standard industrie
- ✅ Support via partenaires certifiés
- ✅ Sécurisé (AS2, certif icats)

**Inconvénients**:
- ❌ Complexité de mise en œuvre
- ❌ Coûts d'intégration élevés
- ❌ Moins flexible qu'une API REST
- ❌ Traitement par lots (batch)
- ❌ Pas de données temps réel

### API (Non disponible chez Rexel)
**Avantages potentiels**:
- ✅ Temps réel
- ✅ Intégration moderne
- ✅ Flexibilité
- ✅ Développement agile

**État actuel**:
- ❌ Non disponible publiquement
- ❌ Documentation inexistante
- ❌ Accès non documenté

## Faisabilité d'intégration

### Option 1: EDI via partenaire tiers
**Faisabilité**: ✅ Haute
- Solution éprouvée et supportée
- Prestataires spécialisés disponibles
- Documentation via partenaires

**Complexité**: 🟡 Moyenne à élevée
**Coût**: 🟡 Moyen à élevé (licences partenaire, setup, maintenance)
**Délai**: 🟡 2-4 mois

### Option 2: Portail Web manuel
**Faisabilité**: ✅ Immédiate
- Accès direct disponible
- Pas d'intégration nécessaire

**Complexité**: ✅ Faible
**Coût**: ✅ Faible
**Délai**: ✅ Immédiat

**Limitation**: ❌ Pas d'automatisation

### Option 3: API (si accès privé possible)
**Faisabilité**: ⚠️ À confirmer
- Nécessite contact direct Rexel
- Possiblement réservé aux gros clients
- Documentation à obtenir

**Complexité**: ❓ Inconnue
**Coût**: ❓ Inconnu
**Délai**: ❓ Inconnu

### Option 4: Scraping Web (non recommandé)
**Faisabilité**: 🔴 Possible mais déconseillé
- Violation probable des CGU
- Fragile (changements UI)
- Pas de support
- Questions légales

**Recommandation**: ❌ À éviter

## Recommandations pour l'audit Duret

### Scénario 1: Besoin d'automatisation complète

**Solution recommandée**: EDI via partenaire
1. Contacter B2BE ou Cogential IT
2. Demander un devis pour l'intégration
3. Évaluer les coûts vs bénéfices
4. Phase pilote sur volume limité

**Pour**:
- Automatisation complète
- Solution pérenne
- Support professionnel

**Contre**:
- Coût d'investissement initial
- Délai de mise en œuvre
- Maintenance continue

### Scénario 2: Volume faible, besoin ponctuel

**Solution recommandée**: Portail Web manuel
1. Création de compte sur portail Rexel
2. Formation utilisateurs
3. Processus manuel optimisé

**Pour**:
- Coût minimal
- Déploiement immédiat
- Simplicité

**Contre**:
- Pas d'automatisation
- Risque d'erreurs de saisie
- Temps de traitement

### Scénario 3: Besoin futur d'API moderne

**Solution recommandée**: Double approche
1. **Court terme**: Portail web ou EDI minimal
2. **Moyen terme**: Surveiller le lancement du Contractor Portal (fin 2025)
3. **Contact Rexel**: Demander s'ils prévoient une API
4. **Alternative**: Privilégier Sonepar si API critique

### Scénario 4: Multi-fournisseurs

**Solution recommandée**: Plateforme d'agrégation
1. Utiliser API Sonepar (disponible)
2. EDI Rexel via partenaire unique
3. Normalisation des données en interne
4. Interface unifiée pour utilisateurs

## Actions prioritaires

### Immédiat
1. ✅ Contacter le commercial Rexel
   - Demander s'il existe une API privée/partenaire
   - Comprendre leur roadmap technique
   - Évaluer les options EDI

2. ✅ Quantifier les besoins
   - Volume de commandes annuel
   - Fréquence des interactions
   - ROI de l'automatisation

### Court terme (1-3 mois)
1. 🔄 Obtenir devis EDI
   - B2BE
   - Cogential IT
   - The EDI Exchange

2. 🔄 Tester portail web
   - Créer compte de test
   - Évaluer ergonomie
   - Chronométrer processus manuel

### Moyen terme (3-6 mois)
1. ⏳ Suivre évolution Contractor Portal
   - Veille sur lancement fin 2025
   - Évaluer capacités API potentielles

2. ⏳ Comparatif fournisseurs
   - Sonepar (API disponible) vs Rexel (EDI uniquement)
   - Critères: coût, facilité intégration, fonctionnalités

## Contacts utiles

### Rexel France
- **Site**: https://www.rexel.com/
- **E-commerce**: https://www.rexel.com/en/service/e-commerce/
- **Contact**: Via représentant commercial

### Partenaires EDI

**B2BE**
- Site: https://www.b2be.com/
- Spécialité: Plateforme EDI cloud

**Cogential IT**
- Site: https://www.cogentialit.com/
- Spécialité: Services EDI managés

**The EDI Exchange**
- Site: https://www.theediexchange.com/
- Spécialité: EDI cloud web

## Conclusion

### État actuel (2025)
- ❌ **Pas d'API REST/GraphQL publique**
- ✅ **EDI disponible via partenaires**
- ✅ **Portail web fonctionnel**
- ⏳ **Nouveau portail contracteur en 2025**

### Recommandation principale
Pour une intégration technique avec Rexel, **privilégier l'EDI via un partenaire certifié** si le volume justifie l'investissement, ou **utiliser le portail web** pour des besoins ponctuels.

Pour un projet nécessitant une API moderne, **considérer Sonepar en priorité** qui propose une API REST/GraphQL documentée.

### Alternative hybride
- **API Sonepar** pour intégrations automatisées
- **EDI ou portail Rexel** pour complément catalogue
- **Normalisation interne** des données des deux sources

---
*Dernière mise à jour: Novembre 2025*
