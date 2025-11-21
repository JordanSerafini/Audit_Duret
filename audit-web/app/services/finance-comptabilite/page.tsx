import Link from 'next/link';
import { ArrowLeft, AlertTriangle, CheckCircle, TrendingUp, Database, Zap, Users, FileText, Clock, PieChart, ArrowRight, LayoutDashboard, Landmark, Calculator } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export const metadata = {
  title: 'Finance & Comptabilité - Audit IT Duret',
  description: 'Service Finance & Comptabilité - Transformation de la comptabilité',
};

export default function FinanceComptabilitePage() {
  const personas = [
    {
      name: 'Martine',
      role: 'Comptable',
      painPoints: [
        'Ressaisies multiples (CRM → Sage)',
        'Rapprochement bancaire 100% manuel',
        'Pompier sur les litiges factures',
        'Tâches à faible valeur ajoutée'
      ],
      color: 'bg-purple-50 border-purple-200 text-purple-900',
      icon: Calculator
    },
    {
      name: 'Pierre',
      role: 'Direction Financière (DAF)',
      painPoints: [
        'Rentabilité connue à M+2 (trop tard)',
        'Prévisions de trésorerie manuelles (Excel)',
        'Pilotage à l\'aveugle',
        'Manque de données temps réel'
      ],
      color: 'bg-emerald-50 border-emerald-200 text-emerald-900',
      icon: TrendingUp
    },
    {
      name: 'Laurent',
      role: 'Responsable d\'Affaires',
      painPoints: [
        'Découvre la marge réelle après coup',
        'Impossible d\'ajuster en cours de chantier',
        'Facturation lente (5-10 jours)',
        'Litiges clients fréquents'
      ],
      color: 'bg-blue-50 border-blue-200 text-blue-900',
      icon: Users
    }
  ];

  const comparison = [
    { process: 'Rentabilité', before: 'Connue à M+2', after: 'Temps Réel', gain: 'Pilotage Immédiat' },
    { process: 'Rapprochement', before: 'Manuel (8h/mois)', after: 'Automatique IA (2h)', gain: '-70% de temps' },
    { process: 'Facturation', before: 'Délai 5-10 jours', after: '< 48h (Auto)', gain: 'Cashflow Accéléré' },
    { process: 'Saisie Clients', before: 'Double (CRM + Sage)', after: 'Unique (Intégré)', gain: '0% Erreur / Doublon' },
    { process: 'Trésorerie', before: 'Excel Manuel', after: 'Prévisionnel Auto', gain: 'Visibilité J+30' }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-800 to-teal-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80" 
            alt="Finance dashboard" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="inline-block bg-emerald-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">
            Service Transverse
          </div>
          <h1 className="text-5xl font-bold mb-3">Finance & Comptabilité</h1>
          <p className="text-emerald-100 text-xl mb-6 max-w-3xl">
            Transformation de la comptabilité : de silo technique vers outil de pilotage stratégique temps réel.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-red-400">M+2</span>
              <span className="text-xs text-emerald-200">Délai Rentabilité Actuel</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-green-400">Temps Réel</span>
              <span className="text-xs text-emerald-200">Objectif Cible</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-green-400">-70%</span>
              <span className="text-xs text-emerald-200">Temps Admin</span>
            </div>
          </div>

          <PDFDownloadButton 
            pdfPath="/pdfs/service-finance-comptabilite.pdf" 
            fileName="Service_Finance_Comptabilite.pdf" 
          />
        </div>
      </div>

      {/* Contexte - Alerte */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-8 shadow-md">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-amber-900 mb-3">Contexte : Le Paradoxe "RAS"</h2>
            <p className="text-amber-900 text-lg mb-4">
              "Tout fonctionne en apparence (bilans OK), mais cette stabilité masque une <strong>déconnexion critique</strong> avec les opérations métier qui empêche tout pilotage temps réel."
            </p>
          </div>
        </div>
      </div>

      {/* État des Lieux - Personas */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-8 h-8 text-slate-700" />
          <h2 className="text-3xl font-bold text-slate-900">Impact Utilisateurs (Personas)</h2>
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
            <ArrowRight className="w-6 h-6 text-emerald-600" />
            Transformation : Avant vs Après
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-600 uppercase font-bold">
              <tr>
                <th className="p-4">Processus</th>
                <th className="p-4 text-red-600">Situation Actuelle (Silo)</th>
                <th className="p-4 text-green-600">Situation Cible (Intégré)</th>
                <th className="p-4 text-emerald-600">Bénéfice Direct</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {comparison.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">{row.process}</td>
                  <td className="p-4 text-slate-600">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-slate-400" />
                      {row.before}
                    </div>
                  </td>
                  <td className="p-4 text-slate-900 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {row.after}
                    </div>
                  </td>
                  <td className="p-4 text-emerald-700 font-bold bg-emerald-50/50">
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
          <Database className="w-8 h-8 text-emerald-400" />
          Architecture Cible
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-emerald-500/30 -translate-y-1/2 z-0"></div>

          {/* Block 1: Odoo Compta */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 transition-colors">
            <div className="bg-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-emerald-900/50">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Odoo Comptabilité</h3>
            <p className="text-slate-400 text-sm mb-4">Cœur du Système</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Plan Comptable Général</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Analytique Native</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Export FEC Certifié</li>
            </ul>
          </div>

          {/* Block 2: Bank Sync & OCR */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-500 transition-colors transform md:-translate-y-4">
            <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-teal-900/50">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Bank Sync & OCR</h3>
            <p className="text-slate-400 text-sm mb-4">Automatisation Saisie</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Synchro Bancaire DSP2</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> OCR Factures Fournisseurs</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Lettrage IA</li>
            </ul>
          </div>

          {/* Block 3: Analytics */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-900/50">
              <PieChart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Pilotage Temps Réel</h3>
            <p className="text-slate-400 text-sm mb-4">Décisionnel</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Dashboards Rentabilité</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Trésorerie Prévisionnelle</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Alertes Marge</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Data & AI Opportunities */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-emerald-600" />
          <h2 className="text-3xl font-bold text-emerald-900">Opportunités Data & IA</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100">
            <h3 className="font-bold text-lg text-emerald-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-500" />
              Prévision de Trésorerie IA
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Projection automatique du cashflow basée sur les devis validés (probabilité de succès) et les échéances fournisseurs.
              <br/><br/>
              <strong>Gain :</strong> Anticipation des besoins de financement à J+30/60.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100">
            <h3 className="font-bold text-lg text-emerald-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-emerald-500" />
              Détection d&apos;Anomalies Comptables
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Scan automatique des écritures pour détecter les doublons, les erreurs de TVA ou les variations de prix anormales.
              <br/><br/>
              <strong>Gain :</strong> Audit continu et réduction des risques fiscaux.
            </p>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="border-t border-slate-200 pt-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Clock className="w-8 h-8 text-slate-700" />
          Roadmap de Déploiement
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-l-4 border-emerald-500 pl-6 py-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Phase 1 (M1-M3)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Fondations</h3>
            <p className="text-sm text-slate-600">Validation Expert-Comptable, Reprise des à-nouveaux, Paramétrage Odoo.</p>
          </div>
          <div className="border-l-4 border-teal-500 pl-6 py-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Phase 2 (M4-M5)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Bascule</h3>
            <p className="text-sm text-slate-600">Migration Comptabilité Générale, Double-run Sage/Odoo, Bank Sync.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Phase 3 (M6-M9)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Analytique & IA</h3>
            <p className="text-sm text-slate-600">Comptabilité Analytique par Chantier, OCR Factures, Dashboards Temps Réel.</p>
          </div>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link href="/services/direction-affaires" className="text-slate-600 hover:text-emerald-600 font-semibold transition-colors">
          ← Direction Affaires
        </Link>
        <Link href="/services/ressources-humaines" className="text-slate-600 hover:text-emerald-600 font-semibold transition-colors">
          Ressources Humaines →
        </Link>
      </div>
    </div>
  );
}
