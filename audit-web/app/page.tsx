import Link from "next/link";
import { Folder, FileText, CheckCircle, Zap, Building2, TrendingUp, Users, AlertTriangle, Clock, Target, Sparkles, ArrowRight, Shield, Rocket } from "lucide-react";

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
                <div className="inline-block bg-emerald-500/20 border border-emerald-400/30 px-4 py-1 rounded-full mb-3">
                  <span className="text-emerald-300 text-sm font-bold">⭐⭐⭐⭐⭐ Audit Externe Validé</span>
                </div>
                <h1 className="text-5xl font-bold text-white mb-3">
                  Audit IT - Duret Électricité
                </h1>
                <p className="text-blue-200 text-xl max-w-2xl">
                  PME en crise de croissance : 100 collaborateurs freinés par des systèmes obsolètes
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-6">
            <p className="text-white text-lg mb-4 leading-relaxed">
              <strong className="text-blue-300">Contexte :</strong> Duret Électricité (électricité générale, maintenance, chantiers)
              gère des chantiers de 50k€ à 2.5M€ mais perd <strong className="text-red-300">4 000h/an</strong> en ressaisies
              et découvre sa rentabilité <strong className="text-orange-300">uniquement à la clôture comptable</strong>.
            </p>
            <div className="flex items-center gap-3 text-blue-200">
              <Shield className="w-5 h-5 text-emerald-400" />
              <p className="text-sm">
                <strong>Verdict :</strong> Solution recommandée validée par audit externe indépendant (Gemini AI) - ROI &lt;18 mois
              </p>
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

      {/* Navigation rapide */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Navigation</h2>
        <div className="grid grid-cols-2 gap-6">
          <Link
            href="/services/achats-logistique"
            className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all group"
          >
            <Folder className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg text-slate-900 mb-2">Services</h3>
            <p className="text-slate-600 text-sm">
              Analyse détaillée des 8 services de l'entreprise
            </p>
          </Link>

          <Link
            href="/annexes/logiciels"
            className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition-all group"
          >
            <FileText className="w-8 h-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg text-slate-900 mb-2">Annexes</h3>
            <p className="text-slate-600 text-sm">
              Documentation logiciels et APIs
            </p>
          </Link>

          <Link
            href="/synthese"
            className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-xl p-6 hover:shadow-lg transition-all group col-span-2"
          >
            <CheckCircle className="w-8 h-8 text-purple-600 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg text-slate-900 mb-2">Synthèse & Validation Externe</h3>
            <p className="text-slate-600 text-sm">
              Analyse de cohérence globale et recommandations stratégiques
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
