import Link from "next/link";
import { Folder, FileText, CheckCircle, Zap, Building2, TrendingUp, Users, AlertTriangle, Clock, Target, Sparkles, ArrowRight, Shield, Rocket, BookOpen } from "lucide-react";

export default function Home() {
  const stats = [
    { label: "Services Analysés", value: "8", icon: Folder, color: "bg-blue-500" },
    { label: "Collaborateurs", value: "~100", icon: Users, color: "bg-emerald-500" },
    { label: "Heures de Ressaisie/an", value: "4 000h", icon: Clock, color: "bg-red-500" },
    { label: "ROI Attendu", value: "<18 mois", icon: TrendingUp, color: "bg-green-500" },
  ];

  const crises = [
    {
      title: "Fracture Bureau/Terrain",
      description: "Déconnexion totale entre équipes. Processus manuels (papier, Excel, WhatsApp)",
      impact: "Pertes traçabilité, délais facturation",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50 border-red-200",
    },
    {
      title: "Opacité Financière",
      description: "Rentabilité connue qu'à la clôture comptable. ~30 fichiers Excel isolés",
      impact: "Aucune réactivité sur dérives budgétaires",
      icon: Target,
      color: "text-orange-600",
      bgColor: "bg-orange-50 border-orange-200",
    },
    {
      title: "Lourdeur Administrative",
      description: "Commandes ressaisies multiple fois. Heures techniciens ressaisies",
      impact: "4 000h/an de ressaisie perdue",
      icon: Clock,
      color: "text-amber-600",
      bgColor: "bg-amber-50 border-amber-200",
    },
    {
      title: "Approvisionnement Critique",
      description: "Stocks câbles mal gérés. Prix fournisseurs non actualisés",
      impact: "Fiabilité livraison 50%, risque marge",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50 border-red-200",
    },
  ];

  const highlights = [
    {
      title: "Centralisation ERP Odoo",
      description: "Système cohérent qui couvre 90% des besoins vs collection de 30+ fichiers Excel",
      icon: Building2,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Architecture Validée",
      description: "Solution recommandée par audit externe : Centrale Odoo + Satellites spécialisés",
      icon: Shield,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Transformation Data & IA",
      description: "IA prédictive pour détecter dérives budgétaires et optimiser achats",
      icon: Sparkles,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "ROI < 18 mois",
      description: "Gains sur CA additionnel, marge brute et productivité. Économies -27% vs alternatives",
      icon: Zap,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section - Plus impactant */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 mb-12 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-4xl shadow-2xl">
                ⚡
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white mb-3">
                  Audit IT - Duret Électricité
                </h1>
                <p className="text-blue-200 text-xl max-w-2xl">
                  Transformation Digitale & Architecture SI
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-blue-200 text-xs uppercase tracking-wide mb-1">Client</p>
              <p className="text-white font-semibold text-lg">Duret Électricité</p>
              <p className="text-blue-300 text-xs mt-1">~100 collaborateurs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-blue-200 text-xs uppercase tracking-wide mb-1">Consultant</p>
              <p className="text-white font-semibold text-lg">Solution Logique</p>
              <p className="text-blue-300 text-xs mt-1">Janvier 2025</p>
            </div>
            <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-400/30">
              <p className="text-emerald-200 text-xs uppercase tracking-wide mb-1">Verdict</p>
              <p className="text-emerald-300 font-bold text-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                GO - Confiance Haute
              </p>
              <p className="text-emerald-300 text-xs mt-1">Note 5/5</p>
            </div>
            <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30">
              <p className="text-blue-200 text-xs uppercase tracking-wide mb-1">Économies</p>
              <p className="text-blue-300 font-bold text-lg">-27%</p>
              <p className="text-blue-300 text-xs mt-1">vs alternatives EBP</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats avec impact visuel */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-200 hover:shadow-2xl hover:border-blue-400 transition-all group"
          >
            <div className={`${stat.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
              <stat.icon className="w-7 h-7 text-white" />
            </div>
            <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
            <p className="text-slate-600 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* 4 Crises Identifiées - Section Critique */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-9 h-9 text-red-600" />
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Les 4 Crises Identifiées</h2>
            <p className="text-slate-600 text-sm">PME freinée par des systèmes informatiques obsolètes</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {crises.map((crise, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 border-2 ${crise.bgColor} shadow-sm hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <crise.icon className={`w-6 h-6 ${crise.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{crise.title}</h3>
                  <p className="text-slate-700 text-sm mb-3 leading-relaxed">{crise.description}</p>
                  <div className="bg-white/60 rounded-lg px-3 py-2 border border-slate-200">
                    <p className="text-xs font-semibold text-slate-600">Impact : <span className={crise.color}>{crise.impact}</span></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solution & Points Clés */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Rocket className="w-9 h-9 text-blue-600" />
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Solution Recommandée</h2>
            <p className="text-slate-600 text-sm">Architecture validée par audit externe indépendant</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all group`}
            >
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform">
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap Transformation - Timeline visuelle */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 mb-12">
        <div className="flex items-center gap-3 mb-8">
          <Clock className="w-9 h-9 text-slate-700" />
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Roadmap de Transformation</h2>
            <p className="text-slate-600 text-sm">Feuille de route en 3 phases sur 18 mois</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500 shadow-sm hover:shadow-lg transition-shadow">
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">Phase 1 • M1-M6</span>
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              Arrêter l&apos;Hémorragie
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>ERP Odoo + CRM (unifier processus)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>App Mobile Chantier (sécuriser facturation)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Socle Achats/Ventes (remplacer ERP lent)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-4 border-emerald-500 shadow-sm hover:shadow-lg transition-shadow">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">Phase 2 • M6-M12</span>
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-600" />
              Structurer
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Stocks Code-barres (RFID M18)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Migration RH/SIRH</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Compta Analytique par chantier</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>APIs Rexel/Sonepar (prix temps réel)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500 shadow-sm hover:shadow-lg transition-shadow">
            <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">Phase 3 • M12-M18</span>
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              Optimiser & IA
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Portail Client 24/7</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>IA Prédictive (dérives budgétaires)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Optimisation achats automatique</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Data Lake centralisé</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation rapide améliorée */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Folder className="w-8 h-8 text-slate-700" />
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Explorer l&apos;Audit</h2>
            <p className="text-slate-600 text-sm">Navigation rapide vers les sections clés</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/services/achats-logistique"
            className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl group-hover:w-48 group-hover:h-48 transition-all"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <Folder className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-slate-900">Services</h3>
                  <p className="text-blue-700 text-sm font-medium">8 services analysés</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                Analyse détaillée de chaque service : Achats-Logistique, Chantiers, Finance, RH, Service Client, Maintenance, Direction Affaires, Gestion Opérationnelle
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                <span>Explorer les services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>

          <Link
            href="/annexes/logiciels"
            className="bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl group-hover:w-48 group-hover:h-48 transition-all"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-slate-900">Annexes</h3>
                  <p className="text-emerald-700 text-sm font-medium">Documentation technique</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                Fiches logiciels (Odoo ERP), documentation APIs (Rexel, Sonepar Punchout), guides techniques et recommandations d&apos;intégration
              </p>
              <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                <span>Consulter les annexes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>

          <Link
            href="/synthese"
            className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl group-hover:w-48 group-hover:h-48 transition-all"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-slate-900">Synthèse & Validation Externe</h3>
                  <p className="text-purple-700 text-sm font-medium">Audit indépendant - Note 5/5</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                Analyse de cohérence globale par IA externe (Gemini). Validation méthodologique, architecture technique, ROI économique, conduite du changement.
                <strong className="text-purple-700"> Verdict : GO SOLIDE - Confiance haute</strong>
              </p>
              <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm">
                <span>Lire la synthèse complète</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>

          <Link
            href="/annexes/markdown"
            className="bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl group-hover:w-48 group-hover:h-48 transition-all"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-amber-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-slate-900">Documents Markdown</h3>
                  <p className="text-amber-700 text-sm font-medium">111 fichiers source disponibles</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                Accédez à tous les documents Markdown d&apos;origine de l&apos;audit : analyses, synthèses, architectures, plans d&apos;action. Consultez en ligne ou téléchargez.
              </p>
              <div className="flex items-center gap-2 text-amber-600 font-semibold text-sm">
                <span>Parcourir les documents</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
