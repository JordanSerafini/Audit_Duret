import Link from 'next/link';
import { ArrowLeft, AlertTriangle, CheckCircle, TrendingUp, Database, Zap, Users, FileText, Clock, PieChart, ArrowRight, LayoutDashboard, Smartphone, RefreshCw } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export const metadata = {
  title: 'Ressources Humaines - Audit IT Duret',
  description: 'Service Ressources Humaines - Transformation SIRH',
};

export default function RessourcesHumainesPage() {
  const personas = [
    {
      name: 'Sophie',
      role: 'Responsable RH',
      painPoints: [
        'Surcharge critique (Burn-out risque)',
        '3 jours/semaine sur la paie (saisie manuelle)',
        'Ressaisies massives (5-6 fois la même donnée)',
        'Pompier sur les erreurs de paie'
      ],
      color: 'bg-red-50 border-red-200 text-red-900',
      icon: Users
    },
    {
      name: 'Managers',
      role: 'Chefs d\'équipe',
      painPoints: [
        'Relances feuilles d\'heures hebdomadaires',
        'Validation ligne à ligne chronophage',
        'Aucune visibilité sur les congés équipe',
        'Perte de temps administrative'
      ],
      color: 'bg-orange-50 border-orange-200 text-orange-900',
      icon: Clock
    },
    {
      name: 'Collaborateurs',
      role: 'Terrain & Bureau',
      painPoints: [
        'Demandes congés papier (perdues, lentes)',
        'Pas de portail pour bulletins de paie',
        'Saisie heures fastidieuse',
        'Sentiment de "flou" administratif'
      ],
      color: 'bg-slate-50 border-slate-200 text-slate-900',
      icon: Smartphone
    }
  ];

  const comparison = [
    { process: 'Systèmes RH', before: '22 Outils Isolés', after: '1 SIRH Unifié', gain: '-95% Complexité' },
    { process: 'Temps Paie (Sophie)', before: '3 jours / semaine', after: '1 jour / semaine', gain: '2j gagnés / sem' },
    { process: 'Onboarding', before: '8-10h (39 tâches)', after: '2-3h (Workflow)', gain: '-75% Temps' },
    { process: 'Ressaisies', before: '5-6 fois / donnée', after: '0 (Intégré)', gain: 'Fiabilité 100%' },
    { process: 'KPIs RH', before: 'Demi-journée (Excel)', after: 'Temps Réel', gain: 'Pilotage Immédiat' }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-800 to-rose-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80" 
            alt="HR Team" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="inline-block bg-pink-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">
            Service Critique
          </div>
          <h1 className="text-5xl font-bold mb-3">Ressources Humaines</h1>
          <p className="text-pink-100 text-xl mb-6 max-w-3xl">
            De <strong>22 systèmes isolés</strong> et un chaos administratif vers <strong>1 SIRH unifié</strong> et automatisé.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-red-400">22</span>
              <span className="text-xs text-pink-200">Systèmes Actuels</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-green-400">1</span>
              <span className="text-xs text-pink-200">SIRH Cible</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-green-400">-67%</span>
              <span className="text-xs text-pink-200">Temps Gestion Paie</span>
            </div>
          </div>

          <PDFDownloadButton 
            pdfPath="/pdfs/service-ressources-humaines.pdf" 
            fileName="Service_Ressources_Humaines.pdf" 
          />
        </div>
      </div>

      {/* Contexte - Alerte */}
      <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-6 mb-8 shadow-md">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-red-900 mb-3">Urgence : Surcharge Critique</h2>
            <p className="text-red-900 text-lg mb-4">
              "Sophie RH est en situation de surcharge chronique, passant <strong>60% de son temps</strong> à compenser manuellement les défaillances de 22 systèmes déconnectés. Le risque d'erreur de paie et de burn-out est élevé."
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
            <ArrowRight className="w-6 h-6 text-pink-600" />
            Transformation : Du Chaos à l&apos;Ordre
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-600 uppercase font-bold">
              <tr>
                <th className="p-4">Processus</th>
                <th className="p-4 text-red-600">Situation Actuelle (Chaos)</th>
                <th className="p-4 text-green-600">Situation Cible (Ordre)</th>
                <th className="p-4 text-pink-600">Gain Mesurable</th>
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
                  <td className="p-4 text-pink-700 font-bold bg-pink-50/50">
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
          <Database className="w-8 h-8 text-pink-400" />
          Architecture SIRH Cible
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-pink-500/30 -translate-y-1/2 z-0"></div>

          {/* Block 1: SIRH Central */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-pink-500 transition-colors">
            <div className="bg-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-pink-900/50">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. SIRH Central</h3>
            <p className="text-slate-400 text-sm mb-4">Source Unique de Vérité</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Dossier Collaborateur Unique</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Gestion Absences & Congés</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Onboarding Automatisé</li>
            </ul>
          </div>

          {/* Block 2: Automatisation Paie */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-colors transform md:-translate-y-4">
            <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-purple-900/50">
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Moteur de Paie</h3>
            <p className="text-slate-400 text-sm mb-4">Calculs Automatiques</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Variables (TR, Paniers, Km)</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Export Silae / Sage</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Distribution Bulletins</li>
            </ul>
          </div>

          {/* Block 3: Portail & Mobile */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-900/50">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Expérience Collab</h3>
            <p className="text-slate-400 text-sm mb-4">Autonomie & Transparence</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> App Mobile (iOS/Android)</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Demandes Congés 1-clic</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Accès Documents RH</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Data & AI Opportunities */}
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-pink-600" />
          <h2 className="text-3xl font-bold text-pink-900">Opportunités Automatisation & IA</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-pink-100">
            <h3 className="font-bold text-lg text-pink-900 mb-3 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-pink-500" />
              Calcul Automatique des Variables
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Algorithmes calculant automatiquement les Tickets Restaurant, paniers repas et indemnités kilométriques basés sur les pointages et absences validés.
              <br/><br/>
              <strong>Gain :</strong> Élimination de 90% des erreurs de saisie manuelle.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-pink-100">
            <h3 className="font-bold text-lg text-pink-900 mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-pink-500" />
              Workflows Onboarding Intelligents
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Orchestration automatique des 39 tâches d&apos;intégration (IT, RH, Manager, Services Généraux) avec relances automatiques.
              <br/><br/>
              <strong>Gain :</strong> Onboarding fluide et image employeur professionnelle.
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
          <div className="border-l-4 border-pink-500 pl-6 py-2">
            <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Phase 1 (M1-M4)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Quick Wins</h3>
            <p className="text-sm text-slate-600">SIRH Core, Migration Données, Module Absences & Congés.</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Phase 2 (M5-M12)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Automatisation</h3>
            <p className="text-sm text-slate-600">Moteur de Paie Automatisé, Workflows Onboarding/Offboarding.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Phase 3 (M13-M18)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Optimisation</h3>
            <p className="text-sm text-slate-600">Portail Collaborateur Complet, Entretiens Digitalisés, GPEC.</p>
          </div>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link href="/services/finance-comptabilite" className="text-slate-600 hover:text-pink-600 font-semibold transition-colors">
          ← Finance & Comptabilité
        </Link>
        <Link href="/services/service-client" className="text-slate-600 hover:text-pink-600 font-semibold transition-colors">
          Service Client →
        </Link>
      </div>
    </div>
  );
}
