import Link from 'next/link';
import { Wrench, AlertTriangle, CheckCircle, Smartphone, WifiOff, Cloud, FileText, MessageSquare, Clock, TrendingUp, Target, ArrowRight, LayoutDashboard, Users } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function ChantiersPage() {
  const painPoints = [
    {
      title: 'Remontée info non structurée',
      desc: 'WhatsApp, Oral, Post-its : aucune traçabilité, perte d\'infos fréquente.',
      icon: MessageSquare,
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-200'
    },
    {
      title: 'Aucun outil métier terrain',
      desc: 'Dépendance totale au téléphone personnel. Pas d\'accès aux plans/infos en mobilité.',
      icon: Smartphone,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      border: 'border-orange-200'
    },
    {
      title: 'Photos dispersées',
      desc: 'Stockage sur téléphones individuels. Perte de données, recherche impossible.',
      icon: FileText,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200'
    },
    {
      title: 'Rapports manuels (2h/rapport)',
      desc: 'Ressaisie le soir ou weekend. Délai de transmission important.',
      icon: Clock,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200'
    }
  ];

  const quickWins = [
    {
      title: 'App Mobile Photos',
      desc: 'Photos géolocalisées, upload auto cloud, tri par chantier.',
      icon: Smartphone,
      color: 'text-blue-600'
    },
    {
      title: 'Templates Rapports',
      desc: 'Pré-remplissage, génération PDF en 1 clic.',
      icon: FileText,
      color: 'text-green-600'
    },
    {
      title: 'Messagerie Chantier',
      desc: 'Canal dédié par chantier, traçabilité complète (vs WhatsApp).',
      icon: MessageSquare,
      color: 'text-indigo-600'
    },
    {
      title: 'Formulaires Incidents',
      desc: 'Remontée structurée, routing automatique vers le bon service.',
      icon: AlertTriangle,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Hero */}
      <div className="relative bg-gradient-to-r from-orange-900 to-red-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80" 
            alt="Construction site" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="inline-block bg-orange-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">
            Service Opérationnel
          </div>
          <h1 className="text-5xl font-bold mb-3">Gestion des Chantiers</h1>
          <p className="text-orange-200 text-xl mb-6">
            Digitalisation du terrain : Mobile, Offline & Temps Réel
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold">100+</span>
              <span className="text-xs text-orange-200">Chantiers actifs</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold">15</span>
              <span className="text-xs text-orange-200">Chefs de chantier</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold">500+</span>
              <span className="text-xs text-orange-200">Photos / jour</span>
            </div>
          </div>
          <PDFDownloadButton 
            pdfPath="/pdfs/service-chantiers.pdf" 
            fileName="Service_Chantiers.pdf" 
          />
        </div>
      </div>

      {/* État des Lieux - Pain Points */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-8 h-8 text-red-600" />
          <h2 className="text-3xl font-bold text-slate-900">État des Lieux : Le Chaos "WhatsApp"</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <div key={index} className={`rounded-xl p-6 border-2 ${point.border} ${point.bg} hover:shadow-lg transition-shadow`}>
              <point.icon className={`w-10 h-10 ${point.color} mb-4`} />
              <h3 className={`font-bold text-lg mb-2 ${point.color}`}>{point.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Recommandée */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white mb-12 shadow-xl">
        <div className="flex items-center gap-3 mb-8">
          <Smartphone className="w-10 h-10 text-blue-400" />
          <div>
            <h2 className="text-3xl font-bold">Solution Cible : Plateforme Mobile + Cloud</h2>
            <p className="text-slate-400">Une application terrain connectée à un cœur central intelligent</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mobile First */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold">Mobile First</h3>
            </div>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                <span>Interface simplifiée pour le terrain</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                <span>Accès plans et docs en 1 clic</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                <span>Dictée vocale pour les rapports</span>
              </li>
            </ul>
          </div>

          {/* Offline Mode */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <WifiOff className="w-6 h-6 text-orange-400" />
              <h3 className="text-xl font-bold">Mode Offline</h3>
            </div>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                <span>Fonctionne sans réseau (sous-sol)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                <span>Synchro auto dès connexion</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                <span>Pas de perte de données</span>
              </li>
            </ul>
          </div>

          {/* Centralisation */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Cloud className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-bold">Cloud Central</h3>
            </div>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                <span>Stockage sécurisé (S3)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                <span>Traçabilité totale des actions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                <span>Dashboards temps réel</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Wins */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Quick Wins (Mois 1-3)</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {quickWins.map((win, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
              <win.icon className={`w-10 h-10 ${win.color} mb-4`} />
              <h3 className="font-bold text-slate-900 mb-2">{win.title}</h3>
              <p className="text-slate-600 text-sm">{win.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Visuelle */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Flux de Données Cible</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
          {/* Mobile Users */}
          <div className="text-center z-10">
            <div className="bg-blue-100 p-6 rounded-full mb-4 w-32 h-32 flex items-center justify-center mx-auto border-4 border-blue-200">
              <Smartphone className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="font-bold text-slate-900">Chefs Chantier</h3>
            <p className="text-xs text-slate-500">App Mobile Offline</p>
          </div>

          {/* Arrow 1 */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="h-1 bg-slate-200 w-full relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs font-bold text-slate-400">
                Synchro Auto
              </div>
              <ArrowRight className="absolute -right-2 -top-2.5 text-slate-300 w-6 h-6" />
            </div>
          </div>

          {/* Cloud Platform */}
          <div className="text-center z-10">
            <div className="bg-purple-100 p-6 rounded-2xl mb-4 w-40 h-32 flex flex-col items-center justify-center mx-auto border-4 border-purple-200 shadow-inner">
              <Cloud className="w-12 h-12 text-purple-600 mb-2" />
              <span className="font-bold text-purple-900 text-sm">Plateforme</span>
            </div>
            <h3 className="font-bold text-slate-900">Cloud Central</h3>
            <p className="text-xs text-slate-500">Stockage & Traitement</p>
          </div>

          {/* Arrow 2 */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="h-1 bg-slate-200 w-full relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs font-bold text-slate-400">
                Temps Réel
              </div>
              <ArrowRight className="absolute -right-2 -top-2.5 text-slate-300 w-6 h-6" />
            </div>
          </div>

          {/* Office Users */}
          <div className="text-center z-10">
            <div className="bg-green-100 p-6 rounded-full mb-4 w-32 h-32 flex items-center justify-center mx-auto border-4 border-green-200">
              <LayoutDashboard className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="font-bold text-slate-900">Bureaux</h3>
            <p className="text-xs text-slate-500">Dashboards Web</p>
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
              <p className="text-xs text-slate-500 mt-1">Moins d&apos;interruptions</p>
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
