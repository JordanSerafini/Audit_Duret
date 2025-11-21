import Link from 'next/link';
import { AlertTriangle, CheckCircle, Users, FileText, Clock, Database, Zap, ArrowRight, LayoutDashboard, Smartphone, TrendingUp, Package, MapPin, Calendar, DollarSign, Target, ShoppingCart } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';
import UMLDownloadButton from '@/components/UMLDownloadButton';

export const metadata = {
  title: 'Albertville - Audit IT Duret',
  description: 'Albertville (Chantiers BTP) - Transformation digitale des grands chantiers',
};

export default function AlbertvillePage() {
  const personas = [
    {
      name: 'Thomas',
      role: 'Responsable d\'Affaire',
      age: '42 ans',
      painPoints: [
        'Situations mensuelles extrêmement longues (plusieurs jours/mois)',
        'Budgets complémentaires invisibles (pilotage à l\aveugle)',
        'Délais traitement devis trop longs (pertes opportunités)',
        'Gestion commandes Excel sans visualisation prix'
      ],
      cost: '150 000€/an',
      color: 'bg-blue-50 border-blue-200 text-blue-900',
      icon: TrendingUp
    },
    {
      name: 'Laurent',
      role: 'Chef de Chantier',
      age: '38 ans',
      painPoints: [
        'Remontée BL 100% manuelle papier (délai 2-5 jours)',
        'Aucune info sur réception/tracking commandes',
        'Pas de visibilité stock temps réel',
        'Stress permanent sur livraisons'
      ],
      cost: '80 000€/an',
      color: 'bg-orange-50 border-orange-200 text-orange-900',
      icon: Package
    },
    {
      name: 'Pierre',
      role: 'Responsable Activité',
      age: '48 ans',
      painPoints: [
        'Recherche références compliquée (10-15x/jour)',
        'Chiffrage non standardisé (écarts énormes)',
        'Impossible ouvrir 2 fichiers Sage simultanément',
        'Contrats sous-traitance en Excel (pas de checklist)'
      ],
      cost: '85 000€/an',
      color: 'bg-purple-50 border-purple-200 text-purple-900',
      icon: FileText
    },
    {
      name: 'Sophie',
      role: 'Assistante Relation Client',
      age: '35 ans',
      painPoints: [
        '8-10 fichiers Excel non connectés à gérer',
        'Planning hebdo manuel (3-4h chaque vendredi)',
        'Multiples saisies, dispersion information',
        'Suivi CONSUEL et réservations complexe'
      ],
      cost: '10 000€/an',
      color: 'bg-pink-50 border-pink-200 text-pink-900',
      icon: Users
    }
  ];

  const painPoints = [
    { id: 1, title: 'Situations Mensuelles', severity: 'Critique', time: 'Plusieurs jours/mois', cost: '120K€/an' },
    { id: 2, title: 'Budgets Complémentaires', severity: 'Critique', time: '3-5x/mois', cost: 'Risque marge' },
    { id: 3, title: 'Remontée BL Papier', severity: 'Critique', time: '5-8 livraisons/sem', cost: '80K€/an' },
    { id: 4, title: 'Recherche Références', severity: 'Critique', time: '10-15x/jour', cost: '25K€/an' },
    { id: 5, title: 'Commandes sans Prix', severity: 'Critique', time: '5-10/jour', cost: 'Risque budget' }
  ];

  const comparison = [
    { process: 'Situations Mensuelles', before: 'Plusieurs jours traitement', after: 'Extraction Auto + ML', gain: '- 80% Temps (-120K€/an)' },
    { process: 'Remontée BL', before: 'Papier (2-5 jours délai)', after: 'QR Code Temps Réel', gain: 'Traçabilité 100% (-80K€/an)' },
    { process: 'Budgets Complémentaires', before: 'Invisibles (pilotage aveugle)', after: 'Dashboard Consolidé Live', gain: 'Visibilité Totale + Alertes' },
    { process: 'Recherche Références', before: 'Lent et compliqué (minutes)', after: 'Recherche Intelligente (secondes)', gain: '- 90% Temps (-25K€/an)' },
    { process: 'Fichiers Excel', before: '15+ Non connectés', after: 'Plateforme Unique Centralisée', gain: 'Fin Silos (-10K€/an)' },
    { process: 'Chiffrage', before: 'Non standardisé (écarts)', after: 'Bibliothèque Prix Normalisée', gain: 'Homogénéité + Précision' },
    { process: 'Travail Collaboratif', before: '1 fichier Sage à la fois', after: 'Multi-utilisateurs RBAC', gain: 'Productivité +40%' }
  ];

  const projects = [
    {
      phase: 'Phase 1 (M1-6)',
      title: 'Quick Wins',
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-700',
      investment: '93-140K€',
      gains: '120-180K€/an',
      payback: '8-12 mois',
      items: [
        '📱 App Mobile BL (QR Code/Scan) - 40K€ → 80K€/an',
        '📊 Dashboard Budgets (Initial + Complémentaire) - 20K€',
        '⏰ Rappels Automatiques Devis - 10K€ → 30K€/an',
        '🔍 Recherche Références Améliorée - 15K€ → 25K€/an',
        '💰 Module Commandes avec Prix - 30K€ → 35K€/an'
      ]
    },
    {
      phase: 'Phase 2 (M7-18)',
      title: 'Automatisation',
      color: 'purple',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-500',
      textColor: 'text-purple-700',
      investment: '185-275K€',
      gains: '250-400K€/an',
      payback: '12-18 mois',
      items: [
        '🚀 Refonte Situations Mensuelles (ML Prédictif) - 75K€',
        '📚 Standardisation Chiffrage (Bibliothèque Prix m²) - 45K€',
        '🏷️ Gestion Familles/Sous-Familles Avancée - 25K€',
        '🔗 Plateforme Collaborative (Fin 15+ Excel) - 50K€',
        '💼 Système Contrats Sous-Traitance - 37K€'
      ]
    },
    {
      phase: 'Phase 3 (M19-24)',
      title: 'Excellence',
      color: 'indigo',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-500',
      textColor: 'text-indigo-700',
      investment: '295-470K€',
      gains: '400-700K€/an',
      payback: '12-24 mois',
      items: [
        '📱 Mobile Terrain (Devis Offline + Signature) - 85K€',
        '🔐 RBAC & Accès Distant Sécurisés - 32K€',
        '🤖 Prédictions ML & Analytics Avancés - 65K€',
        '⚙️ Évaluation/Migration Optima (optionnel) - 200K€'
      ]
    }
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
            Site Albertville - Chantiers BTP Moyens & Gros
          </div>
          <h1 className="text-5xl font-bold mb-3">Albertville</h1>
          <p className="text-blue-100 text-xl mb-6 max-w-3xl">
            Transformation digitale des <strong>grands chantiers BTP</strong> : du chaos manuel vers l'automatisation et le pilotage temps réel.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-red-400">325K€</span>
              <span className="text-xs text-blue-200">Pertes Annuelles Identifiées</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-red-400">13</span>
              <span className="text-xs text-blue-200">Pain Points Critiques</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-green-400">-80%</span>
              <span className="text-xs text-blue-200">Temps Situations Cible</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-green-400">8</span>
              <span className="text-xs text-blue-200">mois Payback Phase 1</span>
            </div>
          </div>

          <div className="flex gap-4">
            <PDFDownloadButton
              pdfPath="/pdfs/service-albertville.pdf"
              fileName="Service_Albertville.pdf"
            />
            <UMLDownloadButton serviceKey="albertville" />
          </div>
        </div>
      </div>

      {/* Contexte - Alerte */ }
      <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-6 mb-8 shadow-md">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-red-900 mb-3">Urgence : 325 000€/an de Pertes Identifiées</h2>
            <p className="text-red-900 text-lg mb-4">
              <strong>Pain point #1 :</strong> Les situations mensuelles nécessitent <strong>plusieurs jours de traitement</strong> (120K€/an). <strong>Pain point #2 :</strong> Les budgets complémentaires sont <strong>invisibles</strong> (risque dépassement marge). <strong>Pain point #3 :</strong> La remontée des BL est <strong>100% papier</strong> avec 2-5 jours de retard (80K€/an). <strong>Au total : 13 pain points critiques bloquent l'efficacité opérationnelle</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Top 5 Pain Points Critiques */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-8 h-8 text-red-600" />
          <h2 className="text-3xl font-bold text-slate-900">Top 5 Pain Points Critiques</h2>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {painPoints.map((point) => (
            <div key={point.id} className="bg-red-50 border-2 border-red-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">#{point.id}</span>
                <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full font-bold">{point.severity}</span>
              </div>
              <h3 className="text-sm font-bold text-red-900 mb-2">{point.title}</h3>
              <p className="text-xs text-red-700 mb-1">⏱️ {point.time}</p>
              <p className="text-xs font-bold text-red-800">💰 {point.cost}</p>
            </div>
          ))}
        </div>
      </div>

      {/* État des Lieux - Personas */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-8 h-8 text-slate-700" />
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Impact Humain (Personas)</h2>
            <p className="text-slate-600 text-sm">4 profils audités, 325 000€/an de pertes cumulées</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <div key={index} className={`rounded-xl p-6 border-2 ${persona.color} shadow-sm hover:shadow-lg transition-shadow`}>
              <div className="flex items-center gap-4 mb-4 border-b border-black/10 pb-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <persona.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{persona.name}</h3>
                  <p className="text-xs opacity-80">{persona.role}</p>
                  <p className="text-xs font-semibold mt-1">{persona.age}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white/40 rounded-lg px-3 py-2 border border-black/10">
                  <p className="text-xs font-bold text-red-600 mb-1">Coût Estimé/an</p>
                  <p className="text-lg font-bold">{persona.cost}</p>
                </div>
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
            Transformation : Avant vs Après (7 Processus Clés)
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
          Architecture Cible Double Volet (IT + Data/ML)
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative mb-8">
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
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Scan QR Code BL fournisseur</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Validation ligne à ligne</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Photo BL</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Sync temps réel + Offline</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Devis terrain (Phase 3)</li>
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
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Situations Auto (ML)</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Alertes Dépassement</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Recherche Intelligente</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Commandes avec Prix</li>
            </ul>
          </div>

          {/* Block 3: Plateforme Collaborative */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-colors">
            <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-green-900/50">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Plateforme Unifiée</h3>
            <p className="text-slate-400 text-sm mb-4">Fin des 15+ Excel Silos</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Gestion Véhicules</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Suivi CONSUEL</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Salles Réunion</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Planning Hebdo Auto</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Contrats Sous-Traitance</li>
            </ul>
          </div>
        </div>

        {/* Data Pipeline */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-bold mb-4 text-cyan-400">Pipeline Data/ML</h3>
          <div className="flex items-center gap-3 overflow-x-auto">
            <div className="bg-slate-700 px-4 py-2 rounded-lg text-sm whitespace-nowrap">Sources (Sage, MDE, Lireco)</div>
            <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <div className="bg-slate-700 px-4 py-2 rounded-lg text-sm whitespace-nowrap">Data Lake</div>
            <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <div className="bg-slate-700 px-4 py-2 rounded-lg text-sm whitespace-nowrap">Data Warehouse</div>
            <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <div className="bg-slate-700 px-4 py-2 rounded-lg text-sm whitespace-nowrap">Analytics</div>
            <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <div className="bg-cyan-600 px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap">Dashboards/ML</div>
          </div>
        </div>
      </div>

      {/* Data & AI Opportunities */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-blue-900">Opportunités Data & IA (4 Modèles ML)</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
            <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              1. Prédiction Dépenses Chantier (LSTM)
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              Analyse avancement réel (heures + achats) pour anticiper dépenses à venir par chantier et réajuster planning selon reste à faire.
            </p>
            <p className="text-sm"><strong className="text-blue-700">Gain :</strong> Prédictibilité trésorerie, réduction dérives budgétaires.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
            <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-blue-500" />
              2. Détection Anomalies Budgétaires
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              Surveillance continue : comparaison auto devis initial vs budgets complémentaires vs réalisé avec alertes immédiates.
            </p>
            <p className="text-sm"><strong className="text-blue-700">Gain :</strong> Sécurisation marge, anticipation dérives <strong>avant</strong> dépassement.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
            <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-500" />
              3. Optimisation Chiffrage (Random Forest)
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              Benchmark chiffrages internes, détection écarts méthodologie, amélioration précision (moins sous/sur-estimation).
            </p>
            <p className="text-sm"><strong className="text-blue-700">Gain :</strong> Homogénéité chiffrages, compétitivité renforcée.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
            <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              4. Prédiction Délais Situations
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              Estimation temps traitement selon complexité chantier pour optimiser planning RH/Compta et lisser charge travail.
            </p>
            <p className="text-sm"><strong className="text-blue-700">Gain :</strong> Équipes moins surchargées, facturation plus rapide.</p>
          </div>
        </div>
      </div>

      {/* ROI & Roadmap */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <DollarSign className="w-8 h-8 text-green-600" />
          <div>
            <h2 className="text-3xl font-bold text-green-900">ROI & Roadmap 24 Mois</h2>
            <p className="text-slate-600 text-sm">Approche progressive avec Quick Wins puis structuration</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((phase, index) => (
            <div key={index} className={`${phase.bgColor} rounded-xl p-6 border-2 ${phase.borderColor} shadow-sm`}>
              <span className={`inline-block ${phase.textColor} font-bold text-sm uppercase tracking-wider mb-3`}>
                {phase.phase}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{phase.title}</h3>
              
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-white/60 rounded-lg p-2 text-center">
                  <p className="text-xs text-slate-600 font-semibold">Investissement</p>
                  <p className="text-sm font-bold text-slate-900">{phase.investment}</p>
                </div>
                <div className="bg-white/60 rounded-lg p-2 text-center">
                  <p className="text-xs text-slate-600 font-semibold">Gains/an</p>
                  <p className="text-sm font-bold text-green-700">{phase.gains}</p>
                </div>
                <div className="bg-white/60 rounded-lg p-2 text-center">
                  <p className="text-xs text-slate-600 font-semibold">Payback</p>
                  <p className="text-sm font-bold text-blue-700">{phase.payback}</p>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-slate-700">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Décision Stratégique */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-12 shadow-md">
        <h2 className="text-2xl font-bold text-amber-900 mb-3">Décision Stratégique : Option A (Optimisation Sage) Recommandée</h2>
        <div className="text-amber-900 text-sm leading-relaxed">
          <p className="mb-3">
            <strong>Recommandation :</strong> Approche progressive avec optimisation Sage actuel <strong>PAR DÉFAUT</strong>. Migration Optima Sidev uniquement si POC (M13-M18) démontre gains fonctionnels &gt; 40% et ROI &lt; 24 mois.
          </p>
          <p className="mb-2"><strong>Pourquoi Option A par défaut ?</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>✅ Risque migration élevé (disruption produits, résistance utilisateurs)</li>
            <li>✅ Sage actuel connu, maîtrisé par équipes</li>
            <li>✅ Quick Wins Phase 1-2 possibles sans migration (210K€ gains/an en 6 mois)</li>
            <li>✅ Décision migration peut être prise M18-24 avec recul terrain</li>
          </ul>
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
