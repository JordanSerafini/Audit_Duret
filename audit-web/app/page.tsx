import Link from "next/link";
import { Folder, FileText, CheckCircle, Zap, Building2, TrendingUp } from "lucide-react";

export default function Home() {
  const stats = [
    { label: "Services Analysés", value: "8", icon: Folder, color: "bg-blue-500" },
    { label: "Annexes", value: "2", icon: FileText, color: "bg-green-500" },
    { label: "Documents", value: "30+", icon: CheckCircle, color: "bg-purple-500" },
  ];

  const highlights = [
    {
      title: "Centralisation ERP",
      description: "Transition vers Odoo pour unifier tous les processus",
      icon: Building2,
      color: "text-blue-600",
    },
    {
      title: "Transformation Data & IA",
      description: "Préparer l'entreprise à l'intelligence artificielle",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      title: "ROI < 18 mois",
      description: "Retour sur investissement rapide et mesurable",
      icon: Zap,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header avec gradient */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 mb-12 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-3xl shadow-lg">
              ⚡
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Audit IT - Duret Électricité
              </h1>
              <p className="text-blue-100 text-lg">
                Transformation Digitale & Architecture SI
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-blue-100 text-sm uppercase tracking-wide mb-1">Client</p>
              <p className="text-white font-semibold text-xl">Duret Électricité</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-blue-100 text-sm uppercase tracking-wide mb-1">Consultant</p>
              <p className="text-white font-semibold text-xl">Solution Logique</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-blue-100 text-sm uppercase tracking-wide mb-1">Date</p>
              <p className="text-white font-semibold text-xl">Janvier 2025</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-blue-100 text-sm uppercase tracking-wide mb-1">Verdict</p>
              <p className="text-green-300 font-bold text-xl">✓ GO - Confiance Haute</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
          >
            <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
            <p className="text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Points clés */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Points Clés de l'Audit</h2>
        <div className="grid grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-blue-300 transition-colors"
            >
              <item.icon className={`w-10 h-10 ${item.color} mb-4`} />
              <h3 className="font-semibold text-lg text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.description}</p>
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
