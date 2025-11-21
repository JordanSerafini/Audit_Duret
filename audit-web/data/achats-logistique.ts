import { Smartphone, ShoppingCart, Package, FileText, TrendingUp, AlertTriangle, PieChart, Database, LucideIcon } from 'lucide-react';

// Types
export interface Persona {
  name: string;
  role: string;
  painPoints: string[];
  color: string;
  icon: LucideIcon;
}

export interface ComparisonRow {
  process: string;
  before: string;
  after: string;
  gain: string;
}

export interface Problem {
  title: string;
  description: string;
  severity: 'critical' | 'important' | 'moderate';
}

export interface Opportunity {
  title: string;
  description: string;
  gain: string;
  Icon: LucideIcon;
  color: 'blue' | 'green' | 'purple' | 'red';
}

export interface KpiMetric {
  label: string;
  current: string;
  target: string;
  color: 'red' | 'orange' | 'green';
}

export interface RoadmapPhase {
  phase: string;
  duration: string;
  title: string;
  description: string;
  deliverables: string[];
  color: 'blue' | 'purple' | 'indigo';
}

// Data
export const personas: Persona[] = [
  {
    name: 'Marc',
    role: 'Chef de Chantier',
    painPoints: [
      '50% commandes incomplètes → chantier bloqué',
      'Pas de visibilité sur livraisons',
      'Références introuvables dans Sage',
      'Processus trop long (3 jours)'
    ],
    color: 'bg-orange-50 border-orange-200 text-orange-900',
    icon: Smartphone
  },
  {
    name: 'Sylvie',
    role: 'Gestionnaire Achats',
    painPoints: [
      'Sage MDE "calamiteux" (doublons, erreurs)',
      'Ressaisies multiples (6x par commande)',
      'Pas d\'intégration APIs Rexel/Sonepar',
      'Reliquats non suivis'
    ],
    color: 'bg-red-50 border-red-200 text-red-900',
    icon: ShoppingCart
  },
  {
    name: 'Éric',
    role: 'Responsable Dépôt',
    painPoints: [
      'Inventaires très chronophages',
      'Stock non fiable (40% fiabilité)',
      'Pas de scan codes-barres',
      'Même produit à 2 prix différents'
    ],
    color: 'bg-purple-50 border-purple-200 text-purple-900',
    icon: Package
  }
];

export const comparison: ComparisonRow[] = [
  { process: 'Taux Commandes Complètes', before: '50%', after: '> 95%', gain: '+90% Fiabilité' },
  { process: 'Délai Moyen Commande', before: '3 jours', after: '< 2 heures', gain: '-94% Temps' },
  { process: 'Ressaisies', before: '6x par commande', after: '0 (EDI/OCR)', gain: '100% Automatisé' },
  { process: 'Fiabilité Stock', before: '40%', after: '> 98%', gain: '+145% Précision' },
  { process: 'Traçabilité', before: 'Aucune', after: 'Complète', gain: 'Gouvernance Totale' },
  { process: 'Volume', before: '9-11K réf/an', after: 'Même charge', gain: 'Efficacité Max' }
];

export const problems: Problem[] = [
  {
    title: '1. Base de Données Chaotique',
    description: 'Sage MDE "calamiteux" : doublons, références obsolètes, même produit à 2 prix différents, pas de MAJ automatique prix',
    severity: 'critical'
  },
  {
    title: '2. Livraisons Incomplètes (50%)',
    description: 'Seulement 50% des commandes arrivent complètes, reliquats non suivis, retours non liés aux commandes',
    severity: 'critical'
  },
  {
    title: '3. Processus 100% Manuel',
    description: 'Aucune automatisation, multiples fichiers Excel, vérifications manuelles, 6 ressaisies par commande, inventaires très chronophages',
    severity: 'important'
  },
  {
    title: '4. Aucune Traçabilité',
    description: 'Pas d\'historique, impossible de savoir qui a commandé quoi, validation non tracée, emails perdus',
    severity: 'important'
  },
  {
    title: '5. Pas d\'Intégration Fournisseurs',
    description: 'Pas d\'EDI, pas d\'API Rexel/Sonepar, commandes 100% téléphone/email, catalogues non synchronisés',
    severity: 'moderate'
  },
  {
    title: '6. Stock Non Optimisé',
    description: '40% fiabilité stock, pas de visibilité temps réel, inventaires très longs, pas de seuils min/max',
    severity: 'moderate'
  },
  {
    title: '7. Pas de Gouvernance',
    description: 'Commandes directes chantiers non contrôlées, achats hors circuit, pas de validation centralisée, pas de KPIs fournisseurs',
    severity: 'critical'
  }
];

export const opportunities: Opportunity[] = [
  {
    title: '1. Saisie Auto (OCR)',
    description: 'IA lit les PDFs Rexel/Sonepar et saisit automatiquement. Élimine les 6 ressaisies manuelles.',
    gain: 'Fin erreurs saisie, gain temps massif',
    Icon: FileText,
    color: 'blue'
  },
  {
    title: '2. Prévision Besoins',
    description: 'Modèle LSTM analyse chantiers à venir pour suggérer commandes câbles/matériel 2 semaines à l\'avance.',
    gain: 'Fin ruptures, achats groupés optimisés',
    Icon: TrendingUp,
    color: 'blue'
  },
  {
    title: '3. Détection Anomalies Prix',
    description: 'Isolation Forest détecte écarts tarifaires anormaux (>15%). Alertes temps réel.',
    gain: 'Évite surfacturation, négo basée data',
    Icon: AlertTriangle,
    color: 'blue'
  },
  {
    title: '4. Scoring Fournisseurs',
    description: 'Random Forest score multi-critères (délai, qualité, prix). Recommandation auto du fournisseur optimal.',
    gain: 'Décisions data-driven, -30% erreurs',
    Icon: PieChart,
    color: 'blue'
  },
  {
    title: '5. Prédiction Ruptures Stock',
    description: 'Régression prédit probabilité rupture, date estimée, quantité à commander.',
    gain: 'Prévention ruptures, stock optimisé',
    Icon: Database,
    color: 'blue'
  },
  {
    title: 'Bonus : NLP Classification',
    description: 'BERT catégorise automatiquement articles, détecte doublons, recherche sémantique.',
    gain: 'Nettoyage base, recherche intelligente',
    Icon: Database,
    color: 'purple'
  }
];

export const kpis: KpiMetric[] = [
  { label: 'Taux Commandes Complètes', current: '50%', target: '>95%', color: 'red' },
  { label: 'Délai Moyen', current: '3j', target: '<2h', color: 'red' },
  { label: 'Fiabilité Stock', current: '40%', target: '>98%', color: 'red' },
  { label: 'Automatisation', current: '0%', target: '80%', color: 'red' }
];

export const roadmap: RoadmapPhase[] = [
  {
    phase: 'Phase 1',
    duration: 'M1-M6',
    title: 'Fondations',
    description: 'Nettoyage Données, Catalogue Unifié, Pilote 1-2 Chantiers.',
    deliverables: [
      'Setup infrastructure & nettoyage Sage MDE',
      'Workflow digital v1 & Web app MVP',
      'Mobile app v1 & pilote terrain',
      'Data Lake & Dashboards essentiels'
    ],
    color: 'blue'
  },
  {
    phase: 'Phase 2',
    duration: 'M7-M12',
    title: 'Automatisation',
    description: 'APIs Fournisseurs, 3-way Matching, ML v1, Généralisation.',
    deliverables: [
      'APIs Rexel/Sonepar (catalogues, EDI)',
      '3-way matching automatique',
      'ML v1: Prévisions & Détection anomalies',
      'Généralisation tous chantiers'
    ],
    color: 'purple'
  },
  {
    phase: 'Phase 3',
    duration: 'M13-M18',
    title: 'Excellence',
    description: 'Auto-réapprovisionnement, ML Avancé, Optimisation Continue.',
    deliverables: [
      'Auto-réapprovisionnement intelligent',
      'ML avancé: NLP classification articles',
      'Optimisation multi-objectifs',
      'Features innovantes (RA, vocal)'
    ],
    color: 'indigo'
  }
];

export const heroStats = [
  { value: '50%', label: 'Commandes Incomplètes', color: 'red' },
  { value: '6x', label: 'Ressaisies / Commande', color: 'red' },
  { value: '3j', label: 'Délai Moyen', color: 'red' },
  { value: '9-11K', label: 'Réf Commandées/An', color: 'green' }
];

export const criticalStats = [
  { value: '40%', label: 'Fiabilité Stock' },
  { value: '0%', label: 'Traçabilité' },
  { value: '0', label: 'API Fournisseur' },
  { value: '100%', label: 'Processus Manuel' }
];
