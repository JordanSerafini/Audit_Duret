import Link from 'next/link';
import { ShoppingCart, CheckCircle, AlertTriangle, Users, Mail, MessageSquare, TrendingUp, BarChart3 } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function HubSpotCRMPage() {
  const modules = [
    { name: 'CRM Gratuit', icon: Users, color: 'text-blue-600' },
    { name: 'Service Hub', icon: MessageSquare, color: 'text-green-600' },
    { name: 'Sales Hub', icon: TrendingUp, color: 'text-orange-600' },
    { name: 'Marketing Hub', icon: Mail, color: 'text-purple-600' },
    { name: 'Operations Hub', icon: BarChart3, color: 'text-indigo-600' },
  ];

  const strengths = [
    'Interface utilisateur exceptionnelle et intuitive',
    'Version gratuite puissante pour démarrer',
    'Support client 24/7 réputé excellent',
    'Intégrations nombreuses (1000+ apps)',
    'Adoption utilisateur très rapide',
    'Mobile app performante',
  ];

  const weaknesses = [
    'Ne couvre que 30% des besoins (CRM + Service uniquement)',
    'Tarifs élevés dès passage à version payante',
    'Pas de gestion stocks, achats, comptabilité',
    'Nécessite ERP complémentaire obligatoire',
    'Coût total élevé en mode hybride',
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Hero */}
      <div className="relative bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80"
            alt="HubSpot CRM"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="inline-block bg-orange-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">
                ALTERNATIVE
              </div>
              <h1 className="text-5xl font-bold mb-3">HubSpot CRM</h1>
              <p className="text-orange-100 text-xl mb-2">
                CRM et Service Client - UX Exceptionnelle
              </p>
              <div className="flex items-center gap-6 text-orange-100 text-sm">
                <span>🇺🇸 HubSpot Inc. (USA)</span>
                <span>👥 200,000+ entreprises clientes</span>
                <span>⭐ 4.5/5 (G2, Capterra)</span>
              </div>
            </div>
            <ShoppingCart className="w-24 h-24 text-white/40" />
          </div>
          <PDFDownloadButton
            pdfPath="/pdfs/logiciel-hubspot-crm.pdf"
            fileName="HubSpot_CRM_Audit.pdf"
          />
        </div>
      </div>

      {/* Présentation */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Présentation</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          HubSpot CRM est une solution cloud spécialisée dans la <strong>relation client</strong> et le <strong>service après-vente</strong>.
          Réputée pour son interface utilisateur exceptionnelle et son modèle freemium généreux, HubSpot est particulièrement
          apprécié des équipes commerciales et service client. La solution propose un CRM gratuit complet et des modules
          payants pour les ventes, marketing, service et opérations.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <p className="text-orange-900 font-semibold text-sm mb-1">Cible</p>
            <p className="text-orange-700 text-sm">Startups, PME (5-500 salariés)</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <p className="text-red-900 font-semibold text-sm mb-1">Spécialisation</p>
            <p className="text-red-700 text-sm">CRM + Service Client</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-blue-900 font-semibold text-sm mb-1">Modèle</p>
            <p className="text-blue-700 text-sm">Freemium → SaaS Premium</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <p className="text-purple-900 font-semibold text-sm mb-1">Force</p>
            <p className="text-purple-700 text-sm">UX & Adoption utilisateur</p>
          </div>
        </div>
      </div>

      {/* Modules */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Modules Disponibles</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white border-2 border-slate-200 rounded-xl p-4 hover:border-orange-400 transition-colors hover:shadow-lg"
            >
              <module.icon className={`w-10 h-10 ${module.color} mb-3`} />
              <p className="font-semibold text-slate-900 text-sm">{module.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tarifs */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Tarifs 2025</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {/* Free */}
          <div className="border-2 border-green-300 rounded-xl p-6 bg-green-50">
            <h3 className="text-2xl font-bold text-green-900 mb-2">Free</h3>
            <p className="text-4xl font-bold text-green-900 mb-4">0€</p>
            <p className="text-green-600 text-sm mb-4">Gratuit à vie</p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span>CRM complet</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Utilisateurs illimités</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                <span>Fonctions limitées</span>
              </li>
            </ul>
          </div>

          {/* Starter */}
          <div className="border-2 border-blue-300 rounded-xl p-6 bg-blue-50">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Starter</h3>
            <p className="text-4xl font-bold text-blue-900 mb-1">18€</p>
            <p className="text-blue-700 text-sm mb-1">/utilisateur/mois</p>
            <p className="text-xs text-blue-600 font-semibold mb-4">2 utilisateurs minimum</p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Automatisations basiques</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Tickets illimités</span>
              </li>
            </ul>
          </div>

          {/* Professional */}
          <div className="border-2 border-orange-300 rounded-xl p-6 bg-orange-50">
            <h3 className="text-2xl font-bold text-orange-900 mb-2">Professional</h3>
            <p className="text-4xl font-bold text-orange-900 mb-1">90€</p>
            <p className="text-orange-700 text-sm mb-1">/utilisateur/mois</p>
            <p className="text-xs text-orange-600 font-semibold mb-4">5 utilisateurs minimum</p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                <span>Workflows avancés</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                <span>Reporting personnalisé</span>
              </li>
            </ul>
          </div>

          {/* Enterprise */}
          <div className="border-2 border-purple-300 rounded-xl p-6 bg-purple-50">
            <h3 className="text-2xl font-bold text-purple-900 mb-2">Enterprise</h3>
            <p className="text-4xl font-bold text-purple-900 mb-1">150€</p>
            <p className="text-purple-700 text-sm mb-1">/utilisateur/mois</p>
            <p className="text-xs text-purple-600 font-semibold mb-4">10 utilisateurs minimum</p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                <span>Toutes fonctionnalités</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                <span>Support prioritaire</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <p className="text-orange-900 text-sm">
            <strong>Note :</strong> Pour un usage complet (Service Hub + Sales Hub), compter environ 180€/user/mois en version Professional
          </p>
        </div>
      </div>

      {/* Avantages vs Inconvénients */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
            <CheckCircle className="w-8 h-8" />
            Avantages
          </h2>
          <ul className="space-y-3 text-green-800">
            {strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-orange-900 mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8" />
            Inconvénients
          </h2>
          <ul className="space-y-3 text-orange-800">
            {weaknesses.map((weakness, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-orange-600 text-xl">⚠</span>
                <span>{weakness}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cas d'usage Duret */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Cas d'Usage chez Duret Électricité</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-blue-200">
            <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Ce que HubSpot couvre
            </h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Gestion contacts clients (CRM)</li>
              <li>• Tickets service client</li>
              <li>• Suivi des appels téléphoniques</li>
              <li>• Historique interactions clients</li>
              <li>• Prise de RDV automatisée</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-orange-200">
            <h3 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              Ce que HubSpot ne couvre PAS
            </h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Gestion chantiers et projets</li>
              <li>• Field Service (interventions terrain)</li>
              <li>• Gestion stocks et achats</li>
              <li>• Comptabilité et facturation</li>
              <li>• Gestion RH et paie</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recommandation */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white mb-8">
        <h2 className="text-3xl font-bold mb-4">Position dans l'Audit</h2>
        <p className="text-orange-100 text-lg leading-relaxed mb-6">
          HubSpot CRM est une <strong>excellente solution</strong> pour la gestion de la relation client, mais elle ne couvre que
          <strong> 30% des besoins</strong> de Duret Électricité. Elle nécessiterait un ERP complémentaire (Odoo ou EBP) pour
          gérer les chantiers, stocks, achats et comptabilité. Cette approche hybride augmenterait significativement les coûts
          et la complexité d'intégration.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <p className="text-orange-200 text-sm font-semibold mb-1">Recommandation</p>
          <p className="text-white font-bold">Solution complémentaire uniquement si besoin CRM avancé post-déploiement Odoo</p>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link
          href="/annexes/logiciels"
          className="text-slate-600 hover:text-blue-600 font-semibold transition-colors"
        >
          ← Retour aux Logiciels
        </Link>
        <Link
          href="/annexes/logiciels/power-bi"
          className="text-slate-600 hover:text-blue-600 font-semibold transition-colors"
        >
          Power BI →
        </Link>
      </div>
    </div>
  );
}
