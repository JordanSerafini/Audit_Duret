import Link from 'next/link';
import { BarChart3, AlertTriangle, CheckCircle, User, FileText, TrendingUp, Clock, Database, Zap, ArrowRight, LayoutDashboard, Users, Calendar, Package, ClipboardList } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';
import UMLDownloadButton from '@/components/UMLDownloadButton';
import CollapsibleUMLSection from '@/components/CollapsibleUMLSection';
import MarkdownViewer from '@/components/MarkdownViewer';
import { getServiceMarkdownFiles } from '@/config/markdownFiles';

export default function GestionOperationnellePage() {
  const markdownFiles = getServiceMarkdownFiles('gestion-operationnelle');

  const personas = [
    {
      name: 'Sylvie',
      role: 'Contrôleuse de Gestion',
      age: '52 ans',
      painPoints: [
        'Passe 24h/mois à générer des KPIs manuels',
        'Jongle avec 30+ fichiers Excel non connectés',
        'Remontée d\'info à J+15 (trop tardif)',
        'Stress constant de l\'erreur de formule'
      ],
      color: 'bg-blue-50 border-blue-200 text-blue-900',
      icon: BarChart3
    },
    {
      name: 'Thomas',
      role: 'Responsable BE Transverse',
      age: '38 ans',
      painPoints: [
        'Surcharge chronique (demandes par mail/téléphone)',
        'Pas de visibilité sur la charge de son équipe',
        'Priorisation subjective ("celui qui crie le plus fort")',
        'Perte de temps en allers-retours'
      ],
      color: 'bg-purple-50 border-purple-200 text-purple-900',
      icon: Users
    },
    {
      name: 'Isabelle',
      role: 'Responsable Stocks',
      age: '45 ans',
      painPoints: [
        'Comptage manuel des stocks (papier)',
        'Valorisation incohérente (2 prix pour le même produit)',
        'Ruptures non anticipées',
        'Réception marchandises chronophage'
      ],
      color: 'bg-orange-50 border-orange-200 text-orange-900',
      icon: Package
    }
  ];

  const comparison = [
    { process: 'Reporting KPI', before: 'Manuel (24h/mois)', after: 'Automatisé (Temps réel)', gain: 'Gain 3 jours/mois' },
    { process: 'Gestion Stocks', before: 'Inventaire Papier', after: 'RFID / QR Code', gain: '-70% Temps réception' },
    { process: 'Tickets BE', before: 'Mails & Appels', after: 'Portail Centralisé', gain: 'Priorisation objective' },
    { process: 'Suivi Budget', before: 'Excel J+15', after: 'Dashboard Live', gain: 'Réactivité immédiate' },
    { process: 'Fiabilité Données', before: 'Risque erreur élevé', after: 'Source unique (SSOT)', gain: 'Confiance 100%' }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-cyan-900 to-blue-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" 
            alt="Business analytics" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="inline-block bg-cyan-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">
            Service Transverse
          </div>
          <h1 className="text-5xl font-bold mb-3">Gestion Opérationnelle</h1>
          <p className="text-cyan-200 text-xl mb-6">
            Du Chaos Excel au Pilotage Temps Réel
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-red-400">30+</span>
              <span className="text-xs text-cyan-200">Fichiers Excel Silos</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-red-400">J+15</span>
              <span className="text-xs text-cyan-200">Délai Reporting Actuel</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-green-400">Live</span>
              <span className="text-xs text-cyan-200">Visibilité Cible</span>
            </div>
          </div>

          <div className="flex gap-4">
            <PDFDownloadButton
              pdfPath="/pdfs/service-gestion-operationnelle.pdf"
              fileName="Service_Gestion_Operationnelle.pdf"
            />
            <UMLDownloadButton serviceKey="gestion-operationnelle" />
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
            <ArrowRight className="w-6 h-6 text-cyan-600" />
            Transformation : Avant vs Après
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-600 uppercase font-bold">
              <tr>
                <th className="p-4">Processus</th>
                <th className="p-4 text-red-600">Situation Actuelle (Chaos)</th>
                <th className="p-4 text-green-600">Situation Cible (Contrôle)</th>
                <th className="p-4 text-cyan-600">Bénéfice Direct</th>
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
                  <td className="p-4 text-cyan-700 font-bold bg-cyan-50/50">
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
          <Database className="w-8 h-8 text-cyan-400" />
          Architecture Cible
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-cyan-500/30 -translate-y-1/2 z-0"></div>

          {/* Block 1: ERP */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-colors">
            <div className="bg-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-cyan-900/50">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Odoo ERP</h3>
            <p className="text-slate-400 text-sm mb-4">Cœur du Système</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Comptabilité Analytique</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Gestion des Stocks</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Ticketing BE</li>
            </ul>
          </div>

          {/* Block 2: Power BI */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-yellow-500 transition-colors transform md:-translate-y-4">
            <div className="bg-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-yellow-900/50">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Power BI</h3>
            <p className="text-slate-400 text-sm mb-4">Intelligence Décisionnelle</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Dashboards Temps Réel</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Drill-down par Affaire</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Alertes Budgétaires</li>
            </ul>
          </div>

          {/* Block 3: RFID */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-colors">
            <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-purple-900/50">
              <Package className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. IoT & RFID</h3>
            <p className="text-slate-400 text-sm mb-4">Automatisation Terrain</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Entrées/Sorties Auto</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Inventaires Rapides</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Traçabilité Matériel</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Data & AI Opportunities */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-cyan-600" />
          <h2 className="text-3xl font-bold text-cyan-900">Opportunités Data & IA</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-cyan-100">
            <h3 className="font-bold text-lg text-cyan-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-500" />
              Projection CA (Forecasting)
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Utilisation de modèles de séries temporelles (Time Series) pour prédire le Chiffre d&apos;Affaires mensuel à 3-6 mois.
              <br/><br/>
              <strong>Gain :</strong> Anticipation de la trésorerie et ajustement des ressources.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-cyan-100">
            <h3 className="font-bold text-lg text-cyan-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-cyan-500" />
              Détection d&apos;Anomalies Budgétaires
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Algorithmes surveillant les consommations par rapport aux devis pour alerter <em>avant</em> le dépassement.
              <br/><br/>
              <strong>Gain :</strong> Réactivité immédiate et préservation des marges.
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
          <div className="border-l-4 border-cyan-500 pl-6 py-2">
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Phase 1 (M1-M6)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Quick Wins</h3>
            <p className="text-sm text-slate-600">Mise en place RFID Stocks, Dashboards Power BI pilotes, Système Tickets BE simple.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Phase 2 (M7-M18)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Structurant</h3>
            <p className="text-sm text-slate-600">Migration ERP Odoo complète, RBAC (Droits d&apos;accès), Intégration Comptable.</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Phase 3 (M19-M24)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Optimisation</h3>
            <p className="text-sm text-slate-600">Modèles ML Prédictifs, Gouvernance des Données, Culture Data-Driven.</p>
          </div>
        </div>
      </div>

      {/* Diagrammes UML */}
      <CollapsibleUMLSection serviceKey="gestion-operationnelle" serviceLabel="Gestion Opérationnelle" />
      {/* Documents Markdown */}
      <div className="mt-8">
        <MarkdownViewer
          files={markdownFiles}
          title="Documents Sources - Gestion Operationnelle"
          defaultExpanded={false}
        />
      </div>



      {/* Footer navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link href="/services/direction-affaires" className="text-slate-600 hover:text-cyan-600 font-semibold transition-colors">
          ← Direction Affaires
        </Link>
        <Link href="/services/maintenance-technique" className="text-slate-600 hover:text-cyan-600 font-semibold transition-colors">
          Maintenance Technique →
        </Link>
      </div>
    </div>
  );
}
