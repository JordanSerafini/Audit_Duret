import Link from 'next/link';
import { ArrowLeft, AlertTriangle, CheckCircle, TrendingUp, Database, Zap, Users, FileText, Clock, PieChart, ArrowRight, LayoutDashboard, Smartphone, Package, ShoppingCart, Truck } from 'lucide-react';
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
        'Perd du temps en appels pour commander',
        'Chantier bloqué par manque matériel',
        'Aucune visibilité sur la livraison',
        'Frustration des erreurs de commande'
      ],
      color: 'bg-orange-50 border-orange-200 text-orange-900',
      icon: Smartphone
    },
    {
      name: 'Sylvie',
      role: 'Gestionnaire Achats',
      painPoints: [
        'Débordée par les appels et mails',
        'Ressaisies multiples (Excel, Sage)',
        'Validation manuelle chronophage',
        'Pompier sur les urgences'
      ],
      color: 'bg-red-50 border-red-200 text-red-900',
      icon: ShoppingCart
    },
    {
      name: 'Éric',
      role: 'Responsable Dépôt',
      painPoints: [
        'Nomenclatures incohérentes',
        '1 seul PC pour tout gérer',
        'Pas de scan (saisie manuelle)',
        'Stocks théoriques faux'
      ],
      color: 'bg-purple-50 border-purple-200 text-purple-900',
      icon: Package
    }
  ];

  const comparison = [
    { process: 'Commande Chantier', before: 'Appel / Papier', after: 'App Mobile (Scan)', gain: '-80% Temps' },
    { process: 'Fiabilité', before: 'Commandes Incomplètes', after: '100% Fiable', gain: 'Fin Arrêts Chantier' },
    { process: 'Saisie', before: 'Ressaisies Multiples', after: '0 (EDI / OCR)', gain: 'Productivité Max' },
    { process: 'Stock', before: 'Aveugle / Faux', after: 'Temps Réel', gain: 'Optimisation Trésorerie' },
    { process: 'Validation', before: 'Manuelle / Lente', after: 'Workflow Auto', gain: 'Fluidité' }
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
              <span className="block text-2xl font-bold text-red-400">100%</span>
              <span className="text-xs text-blue-200">Manuel Actuellement</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-green-400">0</span>
              <span className="text-xs text-blue-200">Ressaisie Cible</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-green-400">-90%</span>
              <span className="text-xs text-blue-200">Erreurs Commande</span>
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
            <h2 className="text-2xl font-bold text-red-900 mb-3">Urgence : Processus 100% Manuel</h2>
            <p className="text-red-900 text-lg mb-4">
              "Le processus actuel repose entièrement sur le téléphone et le papier. Les erreurs de commande et les ressaisies multiples bloquent régulièrement les chantiers, créant une frustration majeure chez les équipes terrain."
            </p>
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
          <h2 className="text-3xl font-bold text-blue-900">Opportunités Data & IA</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
            <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-500" />
              Saisie Automatique (OCR)
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              L&apos;IA lit les PDFs (Rexel, Sonepar) et saisit les lignes automatiquement, éliminant les erreurs manuelles.
              <br/><br/>
              <strong>Gain :</strong> Fin des erreurs de saisie et gain de temps massif.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
            <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              Prédiction des Besoins
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Analyse des chantiers à venir pour suggérer les commandes de câbles/matériel 2 semaines à l&apos;avance.
              <br/><br/>
              <strong>Gain :</strong> Fin des ruptures urgentes et optimisation des prix.
            </p>
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
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Phase 1 (M1-M4)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Fondations</h3>
            <p className="text-sm text-slate-600">Nettoyage Données, Catalogue Unifié, Pilote 1-2 Chantiers.</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Phase 2 (M5-M12)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Automatisation</h3>
            <p className="text-sm text-slate-600">APIs Fournisseurs, 3-way Matching, Généralisation.</p>
          </div>
          <div className="border-l-4 border-indigo-500 pl-6 py-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Phase 3 (M13-M18)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Excellence</h3>
            <p className="text-sm text-slate-600">Auto-réapprovisionnement, Optimisation IA, Pilotage Avancé.</p>
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
