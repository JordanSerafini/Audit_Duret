import Link from 'next/link';
import { Briefcase, AlertTriangle, CheckCircle, User, FileText, TrendingUp, Clock, Database, Zap, ArrowRight, LayoutDashboard, Users, Calendar, Smartphone, Globe } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';
import UMLDownloadButton from '@/components/UMLDownloadButton';
import UMLGallery from '@/components/UMLGallery';

export default function DirectionAffairesPage() {
  const personas = [
    {
      name: 'Laurent',
      role: 'Responsable d\'Affaire',
      age: '45 ans',
      painPoints: [
        'Perd 2h par devis (ressaisie manuelle)',
        'ERP obsolète (30s par écran)',
        'Accès distant impossible (VPN instable)',
        'Pas de suivi des reliquats (perte de marge)'
      ],
      color: 'bg-blue-50 border-blue-200 text-blue-900',
      icon: Briefcase
    },
    {
      name: 'Marie',
      role: 'Direction Générale',
      age: '52 ans',
      painPoints: [
        'Reporting manuel et tardif (J+15)',
        'Pas de visibilité temps réel sur le pipeline',
        'Risque stratégique par manque de données',
        'Difficulté à piloter la rentabilité'
      ],
      color: 'bg-purple-50 border-purple-200 text-purple-900',
      icon: TrendingUp
    },
    {
      name: 'Thomas',
      role: 'Bureau d\'Études',
      age: '35 ans',
      painPoints: [
        'Génération PPSPS manuelle (3h/affaire)',
        'Documents sécurité dispersés',
        'Risque de non-conformité (copier-coller)',
        'Surcharge administrative'
      ],
      color: 'bg-orange-50 border-orange-200 text-orange-900',
      icon: FileText
    }
  ];

  const comparison = [
    { process: 'Création Devis', before: 'Manuel (2h/devis)', after: 'Templates (30min/devis)', gain: 'Gain 1h30/devis' },
    { process: 'Accès Système', before: 'VPN Instable / Bureau', after: 'Cloud & Mobile 24/7', gain: 'Mobilité Totale' },
    { process: 'PPSPS', before: 'Word (3h/affaire)', after: 'Automatique (Clic)', gain: 'Gain 3h/affaire' },
    { process: 'Mise à jour Prix', before: 'Manuelle (1 sem/an)', after: 'API Fournisseurs', gain: 'Prix à jour J+1' },
    { process: 'Validation', before: 'Papiers / Mails', after: 'Workflow Digital', gain: 'Approbation rapide' }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80" 
            alt="Business meeting" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="inline-block bg-purple-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">
            Service Commercial
          </div>
          <h1 className="text-5xl font-bold mb-3">Direction des Affaires</h1>
          <p className="text-purple-200 text-xl mb-6">
            Modernisation du Chiffrage et de la Gestion Commerciale
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold">40-80</span>
              <span className="text-xs text-purple-200">Devis / Mois</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-red-400">2h</span>
              <span className="text-xs text-purple-200">Temps Moyen Actuel</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-green-400">30min</span>
              <span className="text-xs text-purple-200">Temps Cible</span>
            </div>
          </div>

          <div className="flex gap-4">
            <PDFDownloadButton
              pdfPath="/pdfs/service-direction-affaires.pdf"
              fileName="Service_Direction_Affaires.pdf"
            />
            <UMLDownloadButton serviceKey="direction-affaires" />
          </div>
        </div>
      </div>

      {/* État des Lieux - Personas */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-8 h-8 text-slate-700" />
          <h2 className="text-3xl font-bold text-slate-900">La Réalité Quotidienne (Personas)</h2>
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
            <ArrowRight className="w-6 h-6 text-purple-600" />
            Transformation : Avant vs Après
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-600 uppercase font-bold">
              <tr>
                <th className="p-4">Processus</th>
                <th className="p-4 text-red-600">Situation Actuelle (Obsolète)</th>
                <th className="p-4 text-green-600">Situation Cible (Moderne)</th>
                <th className="p-4 text-purple-600">Bénéfice Direct</th>
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
                  <td className="p-4 text-purple-700 font-bold bg-purple-50/50">
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
          <Database className="w-8 h-8 text-purple-400" />
          Architecture Cible
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-purple-500/30 -translate-y-1/2 z-0"></div>

          {/* Block 1: Odoo Sales */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-colors">
            <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-purple-900/50">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Odoo Ventes</h3>
            <p className="text-slate-400 text-sm mb-4">Chiffrage & Devis</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Bibliothèque Templates</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Intégration Rexel/Sonepar</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Génération PDF Auto</li>
            </ul>
          </div>

          {/* Block 2: Cloud & Mobile */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-pink-500 transition-colors transform md:-translate-y-4">
            <div className="bg-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-pink-900/50">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Cloud & Mobile</h3>
            <p className="text-slate-400 text-sm mb-4">Accès Universel</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Accès sans VPN</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> App Mobile Native</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Validation en déplacement</li>
            </ul>
          </div>

          {/* Block 3: Automation */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-900/50">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Automatisation</h3>
            <p className="text-slate-400 text-sm mb-4">Workflows Intelligents</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> PPSPS Automatique</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Alertes Reliquats</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Suivi Marge Temps Réel</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Data & AI Opportunities */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold text-purple-900">Opportunités Data & IA</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
            <h3 className="font-bold text-lg text-purple-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-500" />
              Scoring Prédictif des Affaires
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Analyse historique pour prédire la probabilité de gain d&apos;un devis et la rentabilité finale attendue.
              <br/><br/>
              <strong>Gain :</strong> Priorisation des efforts commerciaux sur les affaires les plus rentables.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
            <h3 className="font-bold text-lg text-purple-900 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              Optimisation du Pricing
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Recommandation dynamique des marges en fonction de la complexité, du client et de la charge du planning.
              <br/><br/>
              <strong>Gain :</strong> Maximisation de la marge sans perdre en compétitivité.
            </p>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="border-t border-slate-200 pt-12 mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Calendar className="w-8 h-8 text-slate-700" />
          Roadmap de Déploiement
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Phase 1 (M1-M2)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Fondations & Templates</h3>
            <p className="text-sm text-slate-600">Setup Odoo Ventes, Création Bibliothèque Templates, Migration Données Clients.</p>
          </div>
          <div className="border-l-4 border-pink-500 pl-6 py-2">
            <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Phase 2 (M3-4)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Automatisation</h3>
            <p className="text-sm text-slate-600">Génération Auto PPSPS, Intégration APIs Fournisseurs, Workflows Validation.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Phase 3 (M5-6)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Optimisation & Mobile</h3>
            <p className="text-sm text-slate-600">Déploiement App Mobile, Dashboards Direction, Formation Avancée.</p>
          </div>
        </div>
      </div>

      {/* Diagrammes UML */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <LayoutDashboard className="w-8 h-8 text-purple-600" />
          Diagrammes UML - Visualisation & Téléchargement
        </h2>
        <p className="text-slate-600 mb-6">
          Explorez tous les diagrammes UML de ce service : architecture, processus, cas d'usage, et plus encore.
          Visualisez-les directement ou téléchargez-les individuellement.
        </p>
        <UMLGallery serviceKey="direction-affaires" />
      </div>

      {/* Footer navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link href="/services/chantiers" className="text-slate-600 hover:text-purple-600 font-semibold transition-colors">
          ← Chantiers
        </Link>
        <Link href="/services/gestion-operationnelle" className="text-slate-600 hover:text-purple-600 font-semibold transition-colors">
          Gestion Opérationnelle →
        </Link>
      </div>
    </div>
  );
}
