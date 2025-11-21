import Link from 'next/link';
import { AlertTriangle, CheckCircle, User, FileText, MapPin, Clock, Smartphone, Database, Zap, ArrowRight, LayoutDashboard, Users, Calendar } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function MaintenanceTechniquePage() {
  const personas = [
    {
      name: 'Gaëtan',
      role: 'Technicien SAV Senior',
      age: '42 ans',
      painPoints: [
        'Perd 1h/jour à remplir des CERFA papier',
        'Ne peut pas faire de devis sur place (opportunités perdues)',
        'Photos sur téléphone perso (mélangées, perdues)',
        'Pas d\'historique client lors de l\'intervention'
      ],
      color: 'bg-blue-50 border-blue-200 text-blue-900',
      icon: User
    },
    {
      name: 'Clothilde',
      role: 'Assistante Planning',
      age: '38 ans',
      painPoints: [
        'Gère 300 clients sur Excel (non partagé)',
        'Prise de RDV 100% téléphone (interruptions constantes)',
        'Ressaisie manuelle des rapports techniciens',
        'Aucune alerte automatique pour fin de contrats'
      ],
      color: 'bg-purple-50 border-purple-200 text-purple-900',
      icon: Users
    }
  ];

  const comparison = [
    { process: 'Rapport Intervention', before: 'CERFA Papier manuscrit', after: 'App Mobile (Dictée vocale)', gain: 'Gain 1h/jour/tech' },
    { process: 'Devis Terrain', before: 'Impossible (Note papier)', after: 'Génération PDF immédiate', gain: '+15% Chiffre d\'Affaires' },
    { process: 'Planification', before: 'Appels + Excel', after: 'Portail Client + Drag&Drop', gain: '-50% Appels entrants' },
    { process: 'Photos', before: 'Dispersées (WhatsApp/Perso)', after: 'Centralisées & Géolocalisées', gain: 'Traçabilité 100%' },
    { process: 'Facturation', before: 'Délai 1-2 semaines', after: 'J+1 (Automatique)', gain: 'Cashflow accéléré' }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-900 to-orange-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80" 
            alt="Electrical maintenance" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="inline-block bg-yellow-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">
            Service Terrain
          </div>
          <h1 className="text-5xl font-bold mb-3">Maintenance Technique & SAV</h1>
          <p className="text-yellow-200 text-xl mb-6">
            Digitalisation complète : Du CERFA papier à l&apos;Excellence Opérationnelle
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold">250+</span>
              <span className="text-xs text-yellow-200">Contrats Actifs</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-red-400">100%</span>
              <span className="text-xs text-yellow-200">Process Papier Actuel</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-green-400">-50%</span>
              <span className="text-xs text-yellow-200">Temps Admin Cible</span>
            </div>
          </div>

          <PDFDownloadButton 
            pdfPath="/pdfs/service-maintenance-technique.pdf" 
            fileName="Service_Maintenance_Technique.pdf" 
          />
        </div>
      </div>

      {/* État des Lieux - Personas */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-8 h-8 text-slate-700" />
          <h2 className="text-3xl font-bold text-slate-900">La Réalité Terrain (Personas)</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <div key={index} className={`rounded-xl p-6 border-2 ${persona.color} shadow-sm`}>
              <div className="flex items-center gap-4 mb-4 border-b border-black/10 pb-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <persona.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{persona.name}</h3>
                  <p className="text-sm opacity-80">{persona.role} • {persona.age}</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-sm uppercase tracking-wide opacity-70">Points de Douleur :</p>
                <ul className="space-y-2">
                  {persona.painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-500" />
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
            Transformation Digitale : Avant vs Après
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-600 uppercase font-bold">
              <tr>
                <th className="p-4">Processus</th>
                <th className="p-4 text-red-600">Situation Actuelle (Papier)</th>
                <th className="p-4 text-green-600">Situation Cible (Digitale)</th>
                <th className="p-4 text-blue-600">Bénéfice Direct</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {comparison.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">{row.process}</td>
                  <td className="p-4 text-slate-600 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-400" />
                    {row.before}
                  </td>
                  <td className="p-4 text-slate-900 font-medium flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-green-500" />
                    {row.after}
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
          Architecture Cible
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-500/30 -translate-y-1/2 z-0"></div>

          {/* Block 1: ERP */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-900/50">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. ERP Terrain</h3>
            <p className="text-slate-400 text-sm mb-4">Back-office Planning & Gestion</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Planning Drag&Drop</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Base Clients Centralisée</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Facturation Auto</li>
            </ul>
          </div>

          {/* Block 2: Mobile App */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-colors transform md:-translate-y-4">
            <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-green-900/50">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. App Technicien</h3>
            <p className="text-slate-400 text-sm mb-4">Outil Terrain Offline</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Mode Déconnecté</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Signature Électronique</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Photos Géolocalisées</li>
            </ul>
          </div>

          {/* Block 3: Portal */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-colors">
            <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-purple-900/50">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Portail Client</h3>
            <p className="text-slate-400 text-sm mb-4">Self-Service 24/7</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Prise de RDV en ligne</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Historique Interventions</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Téléchargement Factures</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Data & AI Opportunities */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-indigo-600" />
          <h2 className="text-3xl font-bold text-indigo-900">Opportunités Data & IA</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
            <h3 className="font-bold text-lg text-indigo-900 mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-indigo-500" />
              Zoning Intelligent (Smart Routing)
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              L&apos;algorithme analyse les trajets historiques et les temps d&apos;intervention pour optimiser les tournées.
              <br/><br/>
              <strong>Gain :</strong> Réduction de 20% des kilomètres parcourus et augmentation du nombre d&apos;interventions par jour.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
            <h3 className="font-bold text-lg text-indigo-900 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-indigo-500" />
              Maintenance Prédictive
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Analyse des fréquences de panne par type d&apos;équipement pour anticiper les remplacements avant la panne critique.
              <br/><br/>
              <strong>Gain :</strong> Réduction des interventions d&apos;urgence (plus coûteuses) au profit d&apos;interventions planifiées.
            </p>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="border-t border-slate-200 pt-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Calendar className="w-8 h-8 text-slate-700" />
          Roadmap de Déploiement
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Mois 1-2</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Pilote & Configuration</h3>
            <p className="text-sm text-slate-600">Configuration ERP, Import Base Clients Excel, Formation Pilotes (2 techniciens).</p>
          </div>
          <div className="border-l-4 border-green-500 pl-6 py-2">
            <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Mois 3-4</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Déploiement Général</h3>
            <p className="text-sm text-slate-600">Formation équipe complète, Abandon définitif papier, Activation App Mobile.</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Mois 5-6</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Portail & Optimisation</h3>
            <p className="text-sm text-slate-600">Ouverture Portail Client, Activation Algorithmes de Routing, Analyse KPIs.</p>
          </div>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link href="/services/gestion-operationnelle" className="text-slate-600 hover:text-yellow-600 font-semibold transition-colors">
          ← Gestion Opérationnelle
        </Link>
        <Link href="/services/ressources-humaines" className="text-slate-600 hover:text-yellow-600 font-semibold transition-colors">
          Ressources Humaines →
        </Link>
      </div>
    </div>
  );
}
