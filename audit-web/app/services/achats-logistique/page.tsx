import Link from 'next/link';
import { AlertTriangle, CheckCircle, TrendingUp, Database, Zap, Users, FileText, Clock, PieChart, ArrowRight, LayoutDashboard, Smartphone, Package, ShoppingCart, Truck } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export const metadata = {
  title: 'Achats & Logistique - Audit IT Duret',
  description: 'Service Achats & Logistique - Transformation E-Procurement',
};

export default function AchatsLogistiquePage() {
  const personas = [
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

  const comparison = [
    { process: 'Taux Commandes Complètes', before: '50%', after: '> 95%', gain: '+90% Fiabilité' },
    { process: 'Délai Moyen Commande', before: '3 jours', after: '< 2 heures', gain: '-94% Temps' },
    { process: 'Ressaisies', before: '6x par commande', after: '0 (EDI/OCR)', gain: '100% Automatisé' },
    { process: 'Fiabilité Stock', before: '40%', after: '> 98%', gain: '+145% Précision' },
    { process: 'Traçabilité', before: 'Aucune', after: 'Complète', gain: 'Gouvernance Totale' },
    { process: 'Volume', before: '9-11K réf/an', after: 'Même charge', gain: 'Efficacité Max' }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80" 
            alt="Logistics" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="inline-block bg-blue-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">
            Service Opérationnel
          </div>
          <h1 className="text-5xl font-bold mb-3">Achats & Logistique</h1>
          <p className="text-blue-200 text-xl mb-6 max-w-3xl">
            De la <strong>gestion manuelle</strong> à une <strong>plateforme e-procurement intelligente</strong> et connectée.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-red-400">50%</span>
              <span className="text-xs text-blue-200">Commandes Incomplètes</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-red-400">6x</span>
              <span className="text-xs text-blue-200">Ressaisies / Commande</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-red-400">3j</span>
              <span className="text-xs text-blue-200">Délai Moyen</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-green-400">9-11K</span>
              <span className="text-xs text-blue-200">Réf Commandées/An</span>
            </div>
          </div>

          <PDFDownloadButton 
            pdfPath="/pdfs/service-achats-logistique.pdf" 
            fileName="Service_Achats_Logistique.pdf" 
          />
        </div>
      </div>

      {/* Contexte - Alerte */}
      <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-6 mb-8 shadow-md">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-red-900 mb-3">Constat Critique : 50% Commandes Incomplètes</h2>
            <p className="text-red-900 text-lg mb-4">
              <strong>Faits constatés :</strong> Seulement 50% des commandes arrivent complètes. Processus 100% manuel (téléphone, papier, Excel).
              Sage MDE jugé &quot;calamiteux&quot; avec doublons et même produit à 2 prix différents.
              <strong>Impact :</strong> Chantiers régulièrement bloqués, 6 ressaisies par commande, 3 jours de délai moyen.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              <div className="bg-white/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-red-700">40%</div>
                <div className="text-xs text-red-800">Fiabilité Stock</div>
              </div>
              <div className="bg-white/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-red-700">0%</div>
                <div className="text-xs text-red-800">Traçabilité</div>
              </div>
              <div className="bg-white/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-red-700">0</div>
                <div className="text-xs text-red-800">API Fournisseur</div>
              </div>
              <div className="bg-white/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-red-700">100%</div>
                <div className="text-xs text-red-800">Processus Manuel</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problèmes Majeurs Identifiés */}
      <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 text-red-600" />
          7 Problèmes Critiques Identifiés
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-red-500">
            <h3 className="font-bold text-slate-900 mb-2">1. Base de Données Chaotique</h3>
            <p className="text-sm text-slate-600">Sage MDE &quot;calamiteux&quot; : doublons, références obsolètes, même produit à 2 prix différents, pas de MAJ automatique prix</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-red-500">
            <h3 className="font-bold text-slate-900 mb-2">2. Livraisons Incomplètes (50%)</h3>
            <p className="text-sm text-slate-600">Seulement 50% des commandes arrivent complètes, reliquats non suivis, retours non liés aux commandes</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-orange-500">
            <h3 className="font-bold text-slate-900 mb-2">3. Processus 100% Manuel</h3>
            <p className="text-sm text-slate-600">Aucune automatisation, multiples fichiers Excel, vérifications manuelles, 6 ressaisies par commande, inventaires très chronophages</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-orange-500">
            <h3 className="font-bold text-slate-900 mb-2">4. Aucune Traçabilité</h3>
            <p className="text-sm text-slate-600">Pas d&apos;historique, impossible de savoir qui a commandé quoi, validation non tracée, emails perdus</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-yellow-500">
            <h3 className="font-bold text-slate-900 mb-2">5. Pas d&apos;Intégration Fournisseurs</h3>
            <p className="text-sm text-slate-600">Pas d&apos;EDI, pas d&apos;API Rexel/Sonepar, commandes 100% téléphone/email, catalogues non synchronisés</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-yellow-500">
            <h3 className="font-bold text-slate-900 mb-2">6. Stock Non Optimisé</h3>
            <p className="text-sm text-slate-600">40% fiabilité stock, pas de visibilité temps réel, inventaires très longs, pas de seuils min/max</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-red-400 md:col-span-2">
            <h3 className="font-bold text-slate-900 mb-2">7. Pas de Gouvernance</h3>
            <p className="text-sm text-slate-600">Commandes directes chantiers non contrôlées, achats hors circuit, pas de validation centralisée, pas de KPIs fournisseurs</p>
          </div>
        </div>
      </div>

      {/* État des Lieux - Personas */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-8 h-8 text-slate-700" />
          <h2 className="text-3xl font-bold text-slate-900">Impact Humain (Personas)</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((persona, index) => (
            <div key={index} className={`rounded-xl p-6 border-2 ${persona.color} shadow-sm`}>
              <div className="flex items-center gap-4 mb-4 border-b border-black/10 pb-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <persona.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{persona.name}</h3>
                  <p className="text-xs opacity-80">{persona.role}</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-xs uppercase tracking-wide opacity-70">Points de Douleur :</p>
                <ul className="space-y-2">
                  {persona.painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-1 text-red-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Avant / Après Comparison */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mb-12">
        <div className="p-6 bg-slate-50 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <ArrowRight className="w-6 h-6 text-blue-600" />
            Transformation : Du Manuel au Digital
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-600 uppercase font-bold">
              <tr>
                <th className="p-4">Processus</th>
                <th className="p-4 text-red-600">Situation Actuelle (Manuel)</th>
                <th className="p-4 text-green-600">Situation Cible (Digital)</th>
                <th className="p-4 text-blue-600">Gain Mesurable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {comparison.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">{row.process}</td>
                  <td className="p-4 text-slate-600">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      {row.before}
                    </div>
                  </td>
                  <td className="p-4 text-slate-900 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {row.after}
                    </div>
                  </td>
                  <td className="p-4 text-blue-700 font-bold bg-blue-50/50">
                    {row.gain}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Solution Architecture */}
      <div className="bg-slate-900 rounded-2xl p-8 text-white mb-12 shadow-2xl">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Database className="w-8 h-8 text-blue-400" />
          Architecture E-Procurement
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-500/30 -translate-y-1/2 z-0"></div>

          {/* Block 1: Chantier (Mobile) */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-900/50">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Chantier (App)</h3>
            <p className="text-slate-400 text-sm mb-4">Commande & Réception</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Scan Code-barres</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Catalogue Unifié</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Suivi Livraison</li>
            </ul>
          </div>

          {/* Block 2: Bureau (Web) */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-colors transform md:-translate-y-4">
            <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-purple-900/50">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Bureau (Web)</h3>
            <p className="text-slate-400 text-sm mb-4">Validation & Pilotage</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Workflow Validation</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Dashboards Achats</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Gestion Stock</li>
            </ul>
          </div>

          {/* Block 3: Fournisseurs (API) */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-colors">
            <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-green-900/50">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Fournisseurs</h3>
            <p className="text-slate-400 text-sm mb-4">Connexion Directe</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> API Rexel / Sonepar</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> EDI Commandes</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Facturation Auto</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Data & AI Opportunities */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-blue-900">5 Opportunités Data & Machine Learning</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
            <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-500" />
              1. Saisie Auto (OCR)
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-2">
              IA lit les PDFs Rexel/Sonepar et saisit automatiquement. Élimine les 6 ressaisies manuelles.
            </p>
            <div className="text-xs bg-green-50 text-green-700 p-2 rounded">
              <strong>Gain :</strong> Fin erreurs saisie, gain temps massif
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
            <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              2. Prévision Besoins
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-2">
              Modèle LSTM analyse chantiers à venir pour suggérer commandes câbles/matériel 2 semaines à l&apos;avance.
            </p>
            <div className="text-xs bg-green-50 text-green-700 p-2 rounded">
              <strong>Gain :</strong> Fin ruptures, achats groupés optimisés
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
            <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-blue-500" />
              3. Détection Anomalies Prix
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-2">
              Isolation Forest détecte écarts tarifaires anormaux (&gt;15%). Alertes temps réel.
            </p>
            <div className="text-xs bg-green-50 text-green-700 p-2 rounded">
              <strong>Gain :</strong> Évite surfacturation, négo basée data
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
            <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-blue-500" />
              4. Scoring Fournisseurs
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-2">
              Random Forest score multi-critères (délai, qualité, prix). Recommandation auto du fournisseur optimal.
            </p>
            <div className="text-xs bg-green-50 text-green-700 p-2 rounded">
              <strong>Gain :</strong> Décisions data-driven, -30% erreurs
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
            <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-500" />
              5. Prédiction Ruptures Stock
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-2">
              Régression prédit probabilité rupture, date estimée, quantité à commander.
            </p>
            <div className="text-xs bg-green-50 text-green-700 p-2 rounded">
              <strong>Gain :</strong> Prévention ruptures, stock optimisé
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 bg-gradient-to-br from-purple-50 to-blue-50">
            <h3 className="font-bold text-lg text-purple-900 mb-3">Bonus : NLP Classification</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-2">
              BERT catégorise automatiquement articles, détecte doublons, recherche sémantique.
            </p>
            <div className="text-xs bg-purple-50 text-purple-700 p-2 rounded">
              <strong>Gain :</strong> Nettoyage base, recherche intelligente
            </div>
          </div>
        </div>
        <div className="mt-6 bg-blue-900 text-white p-5 rounded-xl">
          <div className="flex items-start gap-3">
            <Database className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold mb-2">Architecture Data Complète</h4>
              <p className="text-sm text-blue-100">
                Data Lake (S3/MinIO) → Data Warehouse (PostgreSQL) → BI Dashboards (Metabase) + ML Models (TensorFlow/PyTorch).
                Pipeline ETL quotidiens avec Airflow. Monitoring 24/7 avec Prometheus/Grafana.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* KPIs Cibles */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-green-600" />
          Objectifs de Performance
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-green-100">
            <div className="text-sm text-slate-600 mb-2">Taux Commandes Complètes</div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-red-600">50%</span>
              <span className="text-slate-400">→</span>
              <span className="text-3xl font-bold text-green-600">&gt;95%</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-green-100">
            <div className="text-sm text-slate-600 mb-2">Délai Moyen</div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-red-600">3j</span>
              <span className="text-slate-400">→</span>
              <span className="text-3xl font-bold text-green-600">&lt;2h</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-green-100">
            <div className="text-sm text-slate-600 mb-2">Fiabilité Stock</div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-red-600">40%</span>
              <span className="text-slate-400">→</span>
              <span className="text-3xl font-bold text-green-600">&gt;98%</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-green-100">
            <div className="text-sm text-slate-600 mb-2">Automatisation</div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-red-600">0%</span>
              <span className="text-slate-400">→</span>
              <span className="text-3xl font-bold text-green-600">80%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="border-t border-slate-200 pt-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Clock className="w-8 h-8 text-slate-700" />
          Roadmap de Déploiement (18 Mois)
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Phase 1 (M1-M6)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Fondations</h3>
            <p className="text-sm text-slate-600 mb-3">Nettoyage Données, Catalogue Unifié, Pilote 1-2 Chantiers.</p>
            <div className="text-xs text-slate-500 space-y-1">
              <div>• Setup infrastructure & nettoyage Sage MDE</div>
              <div>• Workflow digital v1 & Web app MVP</div>
              <div>• Mobile app v1 & pilote terrain</div>
              <div>• Data Lake & Dashboards essentiels</div>
            </div>
          </div>
          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Phase 2 (M7-M12)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Automatisation</h3>
            <p className="text-sm text-slate-600 mb-3">APIs Fournisseurs, 3-way Matching, ML v1, Généralisation.</p>
            <div className="text-xs text-slate-500 space-y-1">
              <div>• APIs Rexel/Sonepar (catalogues, EDI)</div>
              <div>• 3-way matching automatique</div>
              <div>• ML v1: Prévisions & Détection anomalies</div>
              <div>• Généralisation tous chantiers</div>
            </div>
          </div>
          <div className="border-l-4 border-indigo-500 pl-6 py-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Phase 3 (M13-M18)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Excellence</h3>
            <p className="text-sm text-slate-600 mb-3">Auto-réapprovisionnement, ML Avancé, Optimisation Continue.</p>
            <div className="text-xs text-slate-500 space-y-1">
              <div>• Auto-réapprovisionnement intelligent</div>
              <div>• ML avancé: NLP classification articles</div>
              <div>• Optimisation multi-objectifs</div>
              <div>• Features innovantes (RA, vocal)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link href="/services/service-client" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">
          ← Service Client
        </Link>
        <Link href="/services/chantiers" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">
          Chantiers →
        </Link>
      </div>
    </div>
  );
}
