import Link from 'next/link';
import { AlertTriangle, CheckCircle, Users, FileText, Clock, Database, Zap, ArrowRight, LayoutDashboard, Smartphone, TrendingUp, Package, MapPin, Calendar, BarChart3, Shield, Wrench } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export const metadata = {
  title: 'Gestion Opérationnelle - Audit IT Duret',
  description: 'Gestion Opérationnelle - Du chaos Excel au pilotage temps réel data-driven',
};

export default function AlbertvillePage() {
  const personas = [
    {
      name: 'Sylvie',
      role: 'Contrôleuse de Gestion',
      age: '52 ans',
      painPoints: [
        'Tableau Excel KPI entièrement manuel (3-4 jours/mois)',
        'Remontée info J-15 minimum (pas temps réel)',
        '30+ fichiers Excel non connectés (silos)',
        'Aucune transparence: chefs chantier sans visibilité budget'
      ],
      color: 'bg-blue-50 border-blue-200 text-blue-900',
      icon: BarChart3,
      impact: '40 jours/an perdus en consolidation'
    },
    {
      name: 'Thomas',
      role: 'Responsable BE Transverse',
      age: '38 ans',
      painPoints: [
        'Surcharge chronique: 220h demandes vs 160h capacité',
        'Priorisation subjective sans système tickets',
        'Demandes de 20+ personnes (chaos)',
        'Planning BE manuel Excel (gestion chaotique)'
      ],
      color: 'bg-orange-50 border-orange-200 text-orange-900',
      icon: Wrench,
      impact: '60h/semaine non traitées → retards'
    },
    {
      name: 'Isabelle',
      role: 'Responsable Stocks',
      age: '45 ans',
      painPoints: [
        'Valorisation incohérente: même produit à 2 prix',
        'Réception 100% manuelle: 8h20/jour comptage',
        'Stock sous-utilisé: achats inutiles (15-20%)',
        'Inventaires mensuels pénibles (2-3 jours)'
      ],
      color: 'bg-purple-50 border-purple-200 text-purple-900',
      icon: Package,
      impact: '2000h/an perdues en comptage manuel'
    }
  ];

  const comparison = [
    { process: 'Situations Mensuelles', before: 'Plusieurs jours', after: 'Extraction Auto + ML', gain: '-80% Temps' },
    { process: 'Remontée BL', before: 'Papier (plusieurs jours)', after: 'QR Code Temps Réel', gain: 'Traçabilité 100%' },
    { process: 'Budgets Complémentaires', before: 'Invisibles', after: 'Dashboard Consolidé', gain: 'Visibilité Totale' },
    { process: 'Recherche Références', before: 'Lent et compliqué', after: 'Recherche Intelligente', gain: '-90% Temps' },
    { process: 'Fichiers Excel', before: '15+ Non connectés', after: 'Plateforme Unique', gain: 'Centralisation' }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80" 
            alt="Construction BTP" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="inline-block bg-blue-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">
            Site Albertville - Chantiers BTP
          </div>
          <h1 className="text-5xl font-bold mb-3">Albertville</h1>
          <p className="text-blue-100 text-xl mb-6 max-w-3xl">
            Transformation digitale des <strong>grands chantiers BTP</strong> : automatisation, standardisation et pilotage temps réel.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-red-400">15+</span>
              <span className="text-xs text-blue-200">Fichiers Excel Actuels</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-red-400">100%</span>
              <span className="text-xs text-blue-200">Process Manuel BL</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-green-400">-80%</span>
              <span className="text-xs text-blue-200">Temps Situations Cible</span>
            </div>
          </div>

          <PDFDownloadButton 
            pdfPath="/pdfs/service-albertville.pdf" 
            fileName="Service_Albertville.pdf" 
          />
        </div>
      </div>

      {/* Contexte - Alerte */}
      <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-6 mb-8 shadow-md">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-red-900 mb-3">Urgence : Processus Manuels Critiques</h2>
            <p className="text-red-900 text-lg mb-4">
              Les situations mensuelles nécessitent <strong>plusieurs jours de traitement</strong>, les budgets complémentaires sont <strong>invisibles</strong> (risque de dépassement), et la remontée des BL est <strong>100% papier</strong> avec plusieurs jours de retard.
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            Transformation : Avant vs Après
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
          Architecture Cible Double Volet
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-500/30 -translate-y-1/2 z-0"></div>

          {/* Block 1: Mobile App Chantier */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-900/50">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. App Mobile Chantier</h3>
            <p className="text-slate-400 text-sm mb-4">Terrain Digitalisé</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Scan QR Code BL</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Validation Ligne à Ligne</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Photo BL</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Mode Offline</li>
            </ul>
          </div>

          {/* Block 2: Web App Métier */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-colors transform md:-translate-y-4">
            <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-purple-900/50">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Dashboards Métier</h3>
            <p className="text-slate-400 text-sm mb-4">Pilotage Temps Réel</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Vue Budgets Consolidée</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Situations Auto</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Alertes Dépassement</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Commandes avec Prix</li>
            </ul>
          </div>

          {/* Block 3: Plateforme Collaborative */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-colors">
            <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-green-900/50">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Plateforme Unifiée</h3>
            <p className="text-slate-400 text-sm mb-4">Fin des Silos Excel</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Gestion Véhicules</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Suivi CONSUEL</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Planning</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Workflows Auto</li>
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
              <TrendingUp className="w-5 h-5 text-blue-500" />
              Prédiction Situations de Travaux
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Analyse de l&apos;avancement réel (heures + achats) pour pré-remplir automatiquement la situation mensuelle.
              <br/><br/>
              <strong>Gain :</strong> Réduction drastique du temps administratif (plusieurs jours → quelques heures).
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
            <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-blue-500" />
              Détection Anomalies Budgétaires
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Comparaison automatique entre devis initial, budgets complémentaires et réalisé avec alertes immédiates.
              <br/><br/>
              <strong>Gain :</strong> Sécurisation de la marge, anticipation des dérives.
            </p>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="border-t border-slate-200 pt-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Calendar className="w-8 h-8 text-slate-700" />
          Roadmap de Transformation (24 Mois)
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Phase 1 (M1-M6)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Quick Wins</h3>
            <p className="text-sm text-slate-600">App BL Mobile (QR), Dashboard Budgets, Rappels Devis, Recherche Améliorée.</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Phase 2 (M7-M18)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Automatisation</h3>
            <p className="text-sm text-slate-600">Situations Auto (ML), Chiffrage Standardisé, Plateforme Collaborative.</p>
          </div>
          <div className="border-l-4 border-indigo-500 pl-6 py-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Phase 3 (M19-M24)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Excellence</h3>
            <p className="text-sm text-slate-600">Devis Terrain Offline, RBAC Sécurisé, ML Prédictif Avancé.</p>
          </div>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link href="/services/achats-logistique" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">
          ← Achats & Logistique
        </Link>
        <Link href="/services/chantiers" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">
          Chantiers →
        </Link>
      </div>
    </div>
  );
}
