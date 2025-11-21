import Link from 'next/link';
import { Wrench, AlertTriangle, CheckCircle, Smartphone, WifiOff, Cloud, FileText, MessageSquare, Clock, TrendingUp, Target, ArrowRight, LayoutDashboard, Users, Camera, Database, Zap } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function ChantiersPage() {
  const personas = [
    {
      name: "Marc",
      role: "Chef de Chantier",
      age: "42 ans",
      situation: "Terrain 100%",
      painPoints: [
        "Perd 1h/jour à chercher des infos sur WhatsApp",
        "Doit refaire ses rapports le soir (2h)",
        "Photos mélangées dans son téléphone perso",
        "Frustré par l'administratif papier"
      ],
      quote: "Je suis là pour construire, pas pour faire de la paperasse le soir.",
      icon: Users,
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200"
    },
    {
      name: "Julien",
      role: "Responsable Affaire",
      age: "38 ans",
      situation: "Bureau / Déplacements",
      painPoints: [
        "Pas de visibilité temps réel sur l'avancement",
        "Découvre les problèmes trop tard",
        "Doit appeler 10 fois pour une info simple",
        "Difficulté à justifier les travaux supp."
      ],
      quote: "Je pilote à l'aveugle entre deux visites de chantier.",
      icon: LayoutDashboard,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200"
    },
    {
      name: "Sophie",
      role: "Bureau d'Études",
      age: "32 ans",
      situation: "Bureau",
      painPoints: [
        "Reçoit des photos inexploitables (floues, sans contexte)",
        "Manque d'infos pour les plans d'exécution",
        "Perd du temps à relancer le terrain",
        "Données techniques non structurées"
      ],
      quote: "Sans remontées terrain fiables, mes plans sont théoriques.",
      icon: FileText,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200"
    }
  ];

  const comparisonData = [
    {
      feature: "Remontée Info",
      before: "WhatsApp, Oral, Post-its",
      after: "App Mobile Structurée",
      icon: MessageSquare
    },
    {
      feature: "Gestion Photos",
      before: "Dispersées (Tél perso), Perte",
      after: "Centralisées, Géolocalisées, Taguées",
      icon: Camera
    },
    {
      feature: "Rapports",
      before: "Manuels, Ressaisie soir (2h)",
      after: "Automatisés, Dictée vocale (10min)",
      icon: FileText
    },
    {
      feature: "Connexion",
      before: "Dépendance réseau mobile",
      after: "Mode Offline (Sous-sol ok)",
      icon: WifiOff
    },
    {
      feature: "Traçabilité",
      before: "Inexistante (Litiges fréquents)",
      after: "Totale (Horodatage, GPS)",
      icon: Database
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Hero */}
      <div className="relative bg-gradient-to-r from-orange-900 to-red-900 rounded-2xl overflow-hidden shadow-2xl mb-12">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80" 
            alt="Construction site" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative z-10 p-8 md:p-12 text-white">
          <div className="inline-block bg-orange-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold shadow-lg">
            Service Opérationnel
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Gestion des Chantiers</h1>
          <p className="text-orange-100 text-xl md:text-2xl mb-8 max-w-2xl">
            Digitalisation du terrain : Du chaos WhatsApp à la performance mobile connectée.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
              <span className="block text-3xl font-bold">100+</span>
              <span className="text-sm text-orange-200 uppercase tracking-wider">Chantiers Actifs</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
              <span className="block text-3xl font-bold">15</span>
              <span className="text-sm text-orange-200 uppercase tracking-wider">Chefs Chantier</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
              <span className="block text-3xl font-bold">500+</span>
              <span className="text-sm text-orange-200 uppercase tracking-wider">Photos / Jour</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
              <span className="block text-3xl font-bold">-90%</span>
              <span className="text-sm text-orange-200 uppercase tracking-wider">Temps Admin</span>
            </div>
          </div>
          <PDFDownloadButton 
            pdfPath="/pdfs/service-chantiers.pdf" 
            fileName="Service_Chantiers.pdf" 
          />
        </div>
      </div>

      {/* Contexte - Alerte */}
      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-12 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-red-800 mb-2">Urgence : Perte d'Information Critique</h3>
            <p className="text-red-700 leading-relaxed">
              Le système actuel repose sur l'informel (WhatsApp, Oral). Les informations cruciales (modifications, problèmes, preuves) sont perdues ou inaccessibles, générant des litiges et des retards.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Humain (Personas) */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Users className="w-8 h-8 text-orange-600" />
          Impact Humain (Personas)
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div key={index} className={`bg-white rounded-2xl p-6 shadow-lg border-t-4 ${persona.border} hover:shadow-xl transition-shadow`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-full ${persona.bg}`}>
                  <persona.icon className={`w-8 h-8 ${persona.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{persona.name}</h3>
                  <p className={`text-sm font-medium ${persona.color}`}>{persona.role}</p>
                  <p className="text-xs text-slate-500">{persona.age} • {persona.situation}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Points de Douleur</h4>
                <ul className="space-y-2">
                  {persona.painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-red-500 mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-4 rounded-xl ${persona.bg} border ${persona.border}`}>
                <p className={`italic text-sm ${persona.color}`}>"{persona.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transformation (Comparison Table) */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-blue-600" />
          Transformation : Du Chaos au Structuré
        </h2>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 p-4 font-bold text-slate-700 text-sm uppercase tracking-wider">
            <div className="col-span-4">Enjeu</div>
            <div className="col-span-4 text-red-600">Avant (Actuel)</div>
            <div className="col-span-4 text-green-600">Après (Cible)</div>
          </div>
          <div className="divide-y divide-slate-100">
            {comparisonData.map((item, index) => (
              <div key={index} className="grid grid-cols-12 p-6 hover:bg-slate-50 transition-colors items-center">
                <div className="col-span-4 flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-slate-900">{item.feature}</span>
                </div>
                <div className="col-span-4 text-slate-600 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></span>
                  {item.before}
                </div>
                <div className="col-span-4 text-slate-900 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></span>
                  {item.after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Architecture Visuelle */}
      <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white mb-16 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Cloud className="w-8 h-8 text-blue-400" />
            Architecture Mobile & Cloud
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Mobile App */}
            <div className="flex-1 bg-white/5 p-6 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/50">
                <Smartphone className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">App Mobile Offline</h3>
              <p className="text-slate-400 text-sm mb-4">Chefs de Chantier</p>
              <ul className="text-left text-xs text-slate-300 space-y-2 bg-black/20 p-4 rounded-lg">
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" /> Photos Géolocalisées</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" /> Rapports Vocaux</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" /> Plans Offline</li>
              </ul>
            </div>

            {/* Flow Arrows */}
            <div className="flex flex-col items-center gap-2 text-slate-500">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest">Sync Auto</span>
                <ArrowRight className="w-6 h-6 animate-pulse text-blue-400" />
              </div>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-6 h-6 animate-pulse text-purple-400 rotate-180" />
                <span className="text-xs font-mono uppercase tracking-widest">Données</span>
              </div>
            </div>

            {/* Cloud Platform */}
            <div className="flex-1 bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                  <Cloud className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Plateforme Cloud</h3>
                <p className="text-purple-300 text-sm mb-6">Centralisation & Intelligence</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800 p-2 rounded border border-slate-700 text-xs text-slate-300">Stockage S3</div>
                  <div className="bg-slate-800 p-2 rounded border border-slate-700 text-xs text-slate-300">PostgreSQL</div>
                  <div className="bg-slate-800 p-2 rounded border border-slate-700 text-xs text-slate-300">API REST</div>
                  <div className="bg-slate-800 p-2 rounded border border-slate-700 text-xs text-slate-300">Backups</div>
                </div>
              </div>
            </div>

            {/* Flow Arrows */}
            <div className="flex flex-col items-center gap-2 text-slate-500">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest">Temps Réel</span>
                <ArrowRight className="w-6 h-6 animate-pulse text-green-400" />
              </div>
            </div>

            {/* Office Dashboard */}
            <div className="flex-1 bg-white/5 p-6 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/50">
                <LayoutDashboard className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Web Dashboard</h3>
              <p className="text-slate-400 text-sm mb-4">Bureaux & Direction</p>
              <ul className="text-left text-xs text-slate-300 space-y-2 bg-black/20 p-4 rounded-lg">
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" /> Suivi Avancement</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" /> Validation Incidents</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" /> KPIs & Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* KPIs & Roadmap */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* KPIs */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-red-500" />
            KPIs de Succès
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-slate-700">Temps rapport intervention</span>
                <span className="font-bold text-green-600">-90%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-[90%]"></div>
              </div>
              <p className="text-xs text-slate-500 mt-1">2h &rarr; 10min</p>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-slate-700">Traçabilité incidents</span>
                <span className="font-bold text-green-600">100%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-full"></div>
              </div>
              <p className="text-xs text-slate-500 mt-1">Vs ~50% actuellement</p>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-slate-700">Appels entrants bureau</span>
                <span className="font-bold text-green-600">-70%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-[70%]"></div>
              </div>
              <p className="text-xs text-slate-500 mt-1">Moins d'interruptions</p>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-500" />
            Roadmap Déploiement
          </h3>
          <div className="space-y-6 relative pl-4 border-l-2 border-slate-200">
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
              <h4 className="font-bold text-slate-900">Phase 1 (Mois 1-3)</h4>
              <p className="text-sm text-slate-600 mb-2">Fondations & Quick Wins</p>
              <ul className="text-xs text-slate-500 list-disc list-inside">
                <li>App Mobile MVP (Photos)</li>
                <li>Rapports PDF auto</li>
                <li>Messagerie chantier</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-orange-500 border-2 border-white"></div>
              <h4 className="font-bold text-slate-900">Phase 2 (Mois 4-6)</h4>
              <p className="text-sm text-slate-600 mb-2">Processus Métier</p>
              <ul className="text-xs text-slate-500 list-disc list-inside">
                <li>Workflow Incidents</li>
                <li>Commandes matériel</li>
                <li>Dashboard Responsables</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
              <h4 className="font-bold text-slate-900">Phase 3 (Mois 7-12)</h4>
              <p className="text-sm text-slate-600 mb-2">Excellence & Data</p>
              <ul className="text-xs text-slate-500 list-disc list-inside">
                <li>Plans interactifs</li>
                <li>Analytics prédictifs</li>
                <li>Optimisation planning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link href="/services/achats-logistique" className="text-slate-600 hover:text-orange-600 font-semibold transition-colors">
          ← Achats-Logistique
        </Link>
        <Link href="/services/direction-affaires" className="text-slate-600 hover:text-orange-600 font-semibold transition-colors">
          Direction Affaires →
        </Link>
      </div>
    </div>
  );
}