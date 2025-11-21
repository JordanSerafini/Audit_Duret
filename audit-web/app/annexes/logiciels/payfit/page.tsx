import Link from 'next/link';
import { DollarSign, CheckCircle, AlertTriangle, Calculator, FileCheck, Users, Clock, Shield, TrendingUp } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function PayFitPage() {
  const features = [
    { name: 'Paie Automatisée', icon: Calculator, color: 'text-blue-600' },
    { name: 'DSN Automatique', icon: FileCheck, color: 'text-green-600' },
    { name: 'Conformité Légale', icon: Shield, color: 'text-purple-600' },
    { name: 'Portail Salarié', icon: Users, color: 'text-orange-600' },
    { name: 'Gestion Congés', icon: Clock, color: 'text-indigo-600' },
    { name: 'Variables de Paie', icon: TrendingUp, color: 'text-pink-600' },
  ];

  const strengths = [
    'Automatisation complète de la paie française',
    'DSN (Déclaration Sociale Nominative) automatique',
    'Interface moderne et intuitive',
    'Conformité légale garantie (veille réglementaire)',
    'Support client réactif',
    'Intégration Lucca native',
  ];

  const weaknesses = [
    'Tarif élevé pour PME (>40€/fiche paie)',
    'Personnalisation limitée pour cas complexes',
    'Dépendance totale au SaaS (pas d\'export)',
    'Marges CCN spécifiques parfois mal gérées',
    'Pas de gestion opérationnelle hors paie',
  ];

  const integrations = [
    { system: 'Lucca', status: 'Native', color: 'text-green-600', description: 'Synchronisation temps de travail' },
    { system: 'Odoo', status: 'API REST', color: 'text-blue-600', description: 'Export variables paie via API' },
    { system: 'Expert-comptable', status: 'Export', color: 'text-orange-600', description: 'FEC et écritures comptables' },
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '39€',
      period: '/fiche paie/mois',
      color: 'blue',
      features: ['Paie automatisée', 'DSN automatique', 'Portail salarié', 'Support email'],
      best: false,
    },
    {
      name: 'Professional',
      price: '49€',
      period: '/fiche paie/mois',
      color: 'green',
      features: ['Tout Starter +', 'Gestion congés avancée', 'Notes de frais', 'Support téléphone prioritaire'],
      best: true,
    },
    {
      name: 'Enterprise',
      price: 'Sur devis',
      period: 'à partir de 50 salariés',
      color: 'purple',
      features: ['Tout Professional +', 'Personnalisations', 'API complète', 'Account manager dédié'],
      best: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Hero */}
      <div className="relative bg-gradient-to-r from-emerald-900 to-teal-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80"
            alt="PayFit"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="inline-block bg-green-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">
                SOLUTION PAIE
              </div>
              <h1 className="text-5xl font-bold mb-3">PayFit</h1>
              <p className="text-emerald-200 text-xl mb-2">
                Logiciel de Paie Automatisé - Made in France
              </p>
              <div className="flex items-center gap-6 text-emerald-100 text-sm">
                <span>🇫🇷 PayFit (France)</span>
                <span>👥 10,000+ entreprises clientes</span>
                <span>⭐ 4.5/5 (Trustpilot)</span>
              </div>
            </div>
            <DollarSign className="w-24 h-24 text-white/40" />
          </div>
          <PDFDownloadButton
            pdfPath="/pdfs/logiciel-payfit.pdf"
            fileName="PayFit_Audit.pdf"
          />
        </div>
      </div>

      {/* Présentation */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Présentation</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          PayFit est un <strong>logiciel de paie 100% automatisé</strong> spécialement conçu pour les PME françaises.
          La solution gère l'ensemble du processus de paie : calcul des bulletins, génération de la DSN (Déclaration
          Sociale Nominative), gestion des congés, notes de frais et conformité légale. PayFit se distingue par sa
          <strong> veille réglementaire permanente</strong> qui garantit la conformité avec les évolutions législatives
          françaises (URSSAF, CCN, etc.).
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
            <p className="text-emerald-900 font-semibold text-sm mb-1">Cible</p>
            <p className="text-emerald-700 text-sm">PME françaises (5-300 salariés)</p>
          </div>
          <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
            <p className="text-teal-900 font-semibold text-sm mb-1">Spécialisation</p>
            <p className="text-teal-700 text-sm">Paie & DSN</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-blue-900 font-semibold text-sm mb-1">Modèle</p>
            <p className="text-blue-700 text-sm">SaaS à la fiche</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <p className="text-purple-900 font-semibold text-sm mb-1">Force</p>
            <p className="text-purple-700 text-sm">Automatisation totale</p>
          </div>
        </div>
      </div>

      {/* Fonctionnalités clés */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Fonctionnalités Clés</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-2 border-slate-200 rounded-xl p-4 hover:border-emerald-400 transition-colors hover:shadow-lg"
            >
              <feature.icon className={`w-10 h-10 ${feature.color} mb-3`} />
              <p className="font-semibold text-slate-900 text-sm">{feature.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Processus automatisé */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Processus Paie Automatisé</h2>
        <div className="relative">
          {/* Timeline */}
          <div className="space-y-6">
            {[
              { step: 1, title: 'Collecte Variables', desc: 'Import automatique temps/congés depuis Lucca ou saisie RH', color: 'bg-blue-500' },
              { step: 2, title: 'Calcul Paie', desc: 'Moteur calcul automatique selon CCN et législation', color: 'bg-blue-600' },
              { step: 3, title: 'Validation RH', desc: 'Vérification bulletins en interface web', color: 'bg-cyan-500' },
              { step: 4, title: 'Génération DSN', desc: 'Export DSN automatique vers URSSAF/MSA', color: 'bg-cyan-600' },
              { step: 5, title: 'Distribution', desc: 'Mise à disposition bulletins sur portail salarié', color: 'bg-teal-600' },
              { step: 6, title: 'Comptabilité', desc: 'Export écritures comptables (FEC) pour expert-comptable', color: 'bg-teal-700' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <div className={`${item.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10 flex-shrink-0`}>
                  {item.step}
                </div>
                <div className="bg-white rounded-lg p-4 flex-1 border border-blue-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-700 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tarifs */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Tarifs 2025</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`border-2 ${
                tier.best ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50' : 'border-slate-300 bg-slate-50'
              } rounded-xl p-6 relative`}
            >
              {tier.best && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                  RECOMMANDÉ
                </div>
              )}
              <h3 className={`text-2xl font-bold ${tier.best ? 'text-green-900' : 'text-slate-900'} mb-2`}>{tier.name}</h3>
              <p className={`text-4xl font-bold ${tier.best ? 'text-green-900' : 'text-slate-900'} mb-1`}>{tier.price}</p>
              <p className={`${tier.best ? 'text-green-700' : 'text-slate-600'} text-sm mb-4`}>{tier.period}</p>
              <ul className="space-y-2 text-slate-700 text-sm">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <CheckCircle className={`w-4 h-4 ${tier.best ? 'text-green-600' : 'text-slate-600'} mt-1 flex-shrink-0`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-amber-900 text-sm">
            <strong>Estimation Duret :</strong> Pour 50 salariés en formule Professional : 50 × 49€ = 2,450€/mois soit 29,400€/an
          </p>
        </div>
      </div>

      {/* Intégrations */}
      <div className="bg-gradient-to-br from-slate-50 to-gray-50 border-2 border-slate-200 rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Intégrations Disponibles</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {integrations.map((integration, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">{integration.system}</h3>
              <p className={`${integration.color} font-semibold text-sm mb-2`}>{integration.status}</p>
              <p className="text-slate-600 text-xs">{integration.description}</p>
            </div>
          ))}
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
            Points de Vigilance
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
              Ce que PayFit couvre
            </h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Paie automatisée des 50 collaborateurs</li>
              <li>• DSN mensuelle automatique</li>
              <li>• Gestion congés payés et RTT</li>
              <li>• Notes de frais (déplacements chantiers)</li>
              <li>• Portail salarié (bulletins dématérialisés)</li>
              <li>• Export comptable FEC</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-orange-200">
            <h3 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              Ce que PayFit ne couvre PAS
            </h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Gestion chantiers et projets</li>
              <li>• CRM et relation client</li>
              <li>• Stocks et achats de matériel</li>
              <li>• Comptabilité générale</li>
              <li>• Planification interventions terrain</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recommandation */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white mb-8">
        <h2 className="text-3xl font-bold mb-4">Position dans l'Audit</h2>
        <p className="text-emerald-100 text-lg leading-relaxed mb-6">
          PayFit est la <strong>solution de paie automatisée de référence</strong> en France pour les PME. Cependant,
          elle représente un <strong>coût élevé</strong> (~30k€/an pour 50 salariés). Si l'entreprise choisit
          <strong> Odoo ERP</strong>, deux options s'offrent à Duret :
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-emerald-200 text-sm font-semibold mb-1">Option 1 : Odoo Paie</p>
            <p className="text-white font-bold text-sm">Module Paie Odoo (moins cher mais setup complexe)</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-emerald-200 text-sm font-semibold mb-1">Option 2 : PayFit Standalone</p>
            <p className="text-white font-bold text-sm">PayFit + Intégration API avec Odoo (recommandé si budget ok)</p>
          </div>
        </div>
        <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <p className="text-emerald-200 text-sm font-semibold mb-1">Recommandation Finale</p>
          <p className="text-white font-bold">Utiliser PayFit si budget disponible, sinon tester module Paie Odoo en POC</p>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link
          href="/annexes/logiciels"
          className="text-slate-600 hover:text-emerald-600 font-semibold transition-colors"
        >
          ← Retour aux Logiciels
        </Link>
        <Link
          href="/annexes/logiciels/power-bi"
          className="text-slate-600 hover:text-emerald-600 font-semibold transition-colors"
        >
          Power BI →
        </Link>
      </div>
    </div>
  );
}
