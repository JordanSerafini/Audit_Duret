import Link from 'next/link';
import { Plug, DollarSign, Package, MapPin, FileCheck, Cloud, TrendingUp, MessageSquare, AlertTriangle, Landmark } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function ApisPage() {
  const apis = [
    {
      title: 'Rexel & Sonepar',
      category: 'Fournisseurs',
      description: 'Commandes automatiques, tarifs temps réel et tracking livraisons',
      icon: Package,
      color: 'from-orange-600 to-red-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      href: '/annexes/apis/rexel-sonepar',
      priority: 'Priorité 1',
      priorityColor: 'bg-red-500',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    },
    {
      title: 'Chorus Pro',
      category: 'Marchés Publics',
      description: 'Facturation électronique obligatoire secteur public',
      icon: FileCheck,
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      href: '/annexes/apis/chorus-pro',
      priority: 'Priorité 1',
      priorityColor: 'bg-red-500',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    },
    {
      title: 'Sage API',
      category: 'Comptabilité',
      description: 'Intégration comptable temps réel et suppression double saisie',
      icon: DollarSign,
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      href: '/annexes/apis/sage',
      priority: 'Priorité 1',
      priorityColor: 'bg-red-500',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    },
    {
      title: 'Google Maps',
      category: 'Géolocalisation',
      description: 'Optimisation des trajets techniciens et calcul frais déplacement',
      icon: MapPin,
      color: 'from-green-600 to-teal-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      href: '/annexes/apis/google-maps',
      priority: 'Priorité 2',
      priorityColor: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80',
    },
    {
      title: 'Pappers/INSEE',
      category: 'Conformité',
      description: 'Vérification solvabilité et RGE des sous-traitants',
      icon: AlertTriangle,
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      href: '/annexes/apis/pappers',
      priority: 'Priorité 2',
      priorityColor: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    },
    {
      title: 'Open Banking',
      category: 'Trésorerie',
      description: 'Rapprochement bancaire automatique et lettrage paiements',
      icon: Landmark,
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      href: '/annexes/apis/open-banking',
      priority: 'Priorité 2',
      priorityColor: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80',
    },
    {
      title: 'Marchés Publics',
      category: 'Veille Commerciale',
      description: 'Détection automatique des appels d\'offres pertinents',
      icon: TrendingUp,
      color: 'from-yellow-600 to-orange-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      href: '/annexes/apis/marches-publics',
      priority: 'Priorité 2',
      priorityColor: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    },
    {
      title: 'Météo France',
      category: 'Sécurité',
      description: 'Justification retards et arrêts pour intempéries',
      icon: Cloud,
      color: 'from-slate-600 to-slate-700',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200',
      href: '/annexes/apis/meteo-france',
      priority: 'Priorité 3',
      priorityColor: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
    },
    {
      title: 'CONSUEL',
      category: 'Conformité Électrique',
      description: 'Fluidification attestations de conformité NF C 15-100',
      icon: FileCheck,
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      href: '/annexes/apis/consuel',
      priority: 'Priorité 3',
      priorityColor: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header avec gradient */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-8 text-white shadow-2xl mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg mb-4 text-sm font-semibold">
              Annexes Techniques
            </div>
            <h1 className="text-5xl font-bold mb-3">APIs & Intégrations</h1>
            <p className="text-purple-200 text-xl">
              Catalogue des APIs stratégiques pour l'automatisation et la transformation digitale
            </p>
          </div>
          <Plug className="w-24 h-24 text-white/30" />
        </div>
        <div className="mt-6">
          <PDFDownloadButton
            pdfPath="/pdfs/annexes-apis.pdf"
            fileName="Annexes_APIs_Audit.pdf"
          />
        </div>
      </div>

      {/* Matrice de priorisation */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Matrice de Priorisation</h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Classement des 10 APIs identifiées selon leur impact stratégique et leur priorité d'implémentation
          dans le cadre du projet de transformation digitale.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Priorité 1 */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-900">Priorité 1</h3>
                <p className="text-red-700 text-sm">Critique - Fondations</p>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-red-800">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm">Sage API (Comptabilité)</span>
              </li>
              <li className="flex items-center gap-2 text-red-800">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm">Chorus Pro (Marchés Publics)</span>
              </li>
              <li className="flex items-center gap-2 text-red-800">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm">Rexel/Sonepar (Fournisseurs)</span>
              </li>
            </ul>
          </div>

          {/* Priorité 2 */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-300 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-900">Priorité 2</h3>
                <p className="text-orange-700 text-sm">Haute - Opérationnel</p>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-orange-800">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm">Open Banking (Trésorerie)</span>
              </li>
              <li className="flex items-center gap-2 text-orange-800">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm">Pappers/INSEE (Conformité)</span>
              </li>
              <li className="flex items-center gap-2 text-orange-800">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm">Google Maps (Géolocalisation)</span>
              </li>
              <li className="flex items-center gap-2 text-orange-800">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm">Marchés Publics (Veille)</span>
              </li>
            </ul>
          </div>

          {/* Priorité 3 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900">Priorité 3</h3>
                <p className="text-blue-700 text-sm">Moyenne - Optimisations</p>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-blue-800">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">CONSUEL (Conformité)</span>
              </li>
              <li className="flex items-center gap-2 text-blue-800">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Météo France (Sécurité)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Grille des APIs */}
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Catalogue des APIs Évaluées</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {apis.map((api, index) => (
          <Link
            key={index}
            href={api.href}
            className={`${api.bgColor} border-2 ${api.borderColor} rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1`}
          >
            {/* Image d'illustration */}
            <div className="h-40 overflow-hidden relative">
              <img
                src={api.image}
                alt={api.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className={`absolute top-3 right-3 ${api.priorityColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                {api.priority}
              </div>
            </div>

            {/* Contenu */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className={`bg-gradient-to-r ${api.color} p-2 rounded-lg`}>
                  <api.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">{api.title}</h3>
                  <p className="text-sm text-slate-600">{api.category}</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                {api.description}
              </p>
              <div className="mt-4 flex items-center text-indigo-600 text-sm font-semibold group-hover:text-indigo-800">
                Voir les détails
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Plan d'implémentation */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-8 text-white mb-12">
        <h2 className="text-3xl font-bold mb-6">Plan d'Implémentation Global</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Phase 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
              Le Socle
            </h3>
            <p className="text-slate-300 text-sm mb-4">Mois 1-3</p>
            <ul className="space-y-2 text-slate-200 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">▸</span>
                <span>Rexel/Sonepar (Achats)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">▸</span>
                <span>Sage API (Comptabilité)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">▸</span>
                <span>Chorus Pro (Marchés Publics)</span>
              </li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
              Opérationnel
            </h3>
            <p className="text-slate-300 text-sm mb-4">Mois 4-9</p>
            <ul className="space-y-2 text-slate-200 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">▸</span>
                <span>Open Banking (Trésorerie)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">▸</span>
                <span>Google Maps (Géolocalisation)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">▸</span>
                <span>Pappers/INSEE (Conformité)</span>
              </li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
              Optimisation
            </h3>
            <p className="text-slate-300 text-sm mb-4">Mois 10-18</p>
            <ul className="space-y-2 text-slate-200 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▸</span>
                <span>Marchés Publics (Veille)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▸</span>
                <span>CONSUEL (Conformité)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▸</span>
                <span>Météo France (Sécurité)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section bénéfices */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-6">Bénéfices Attendus</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-green-200">
            <h3 className="text-xl font-bold text-green-900 mb-3">🎯 Gains de Productivité</h3>
            <ul className="space-y-2 text-green-800 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Suppression de la double saisie comptable</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Automatisation des commandes fournisseurs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Optimisation des trajets techniciens (-15%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Rapprochement bancaire automatisé</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-green-200">
            <h3 className="text-xl font-bold text-green-900 mb-3">⚡ Gains Stratégiques</h3>
            <ul className="space-y-2 text-green-800 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Fiabilité des stocks et tarifs en temps réel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Conformité légale marchés publics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Sécurisation sous-traitance (devoir de vigilance)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Veille commerciale automatique</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link
          href="/annexes/logiciels"
          className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors"
        >
          ← Logiciels
        </Link>
        <Link
          href="/synthese"
          className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors"
        >
          Synthèse →
        </Link>
      </div>
    </div>
  );
}
