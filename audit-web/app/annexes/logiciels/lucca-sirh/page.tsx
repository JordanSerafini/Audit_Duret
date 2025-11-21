import Link from 'next/link';
import { Users, CheckCircle, AlertTriangle, Calendar, FileText, CreditCard, TrendingUp, Clock, Heart } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function LuccaSIRHPage() {
  const modules = [
    { name: 'Congés & Absences', icon: Calendar, color: 'text-blue-600' },
    { name: 'Notes de Frais', icon: CreditCard, color: 'text-green-600' },
    { name: 'Temps & Activités', icon: Clock, color: 'text-purple-600' },
    { name: 'Entretiens', icon: FileText, color: 'text-orange-600' },
    { name: 'Core RH', icon: Users, color: 'text-indigo-600' },
    { name: 'Talents', icon: TrendingUp, color: 'text-pink-600' },
  ];

  const strengths = [
    'Interface utilisateur française exceptionnelle',
    'Support client réputé excellent',
    'Adoption rapide par les collaborateurs',
    'Spécialisé SIRH (focus RH uniquement)',
    'Conformité législation française',
    'Mobile app performante',
  ];

  const weaknesses = [
    'Ne couvre que les besoins RH (20% des besoins totaux)',
    'Nécessite intégration avec ERP pour paie complète',
    'Tarifs élevés pour PME',
    'Pas de gestion opérationnelle (chantiers, stocks)',
    'Dépendance à PayFit ou autre logiciel de paie',
  ];

  const integrations = [
    { system: 'PayFit', status: 'Recommandée', color: 'text-green-600', description: 'Intégration native paie' },
    { system: 'Odoo', status: 'Possible', color: 'text-blue-600', description: 'API REST disponible' },
    { system: 'EBP', status: 'Limitée', color: 'text-orange-600', description: 'Export CSV manuel' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Hero */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
            alt="Lucca SIRH"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="inline-block bg-blue-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">
                ALTERNATIVE SIRH
              </div>
              <h1 className="text-5xl font-bold mb-3">Lucca SIRH</h1>
              <p className="text-blue-200 text-xl mb-2">
                Solution RH Française - Gestion des Talents
              </p>
              <div className="flex items-center gap-6 text-blue-100 text-sm">
                <span>🇫🇷 Lucca (France)</span>
                <span>👥 6,000+ entreprises clientes</span>
                <span>⭐ 4.6/5 (Gartner)</span>
              </div>
            </div>
            <Heart className="w-24 h-24 text-white/40" />
          </div>
          <PDFDownloadButton
            pdfPath="/pdfs/logiciel-lucca-sirh.pdf"
            fileName="Lucca_SIRH_Audit.pdf"
          />
        </div>
      </div>

      {/* Présentation */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Présentation</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Lucca est une suite SIRH (Système d'Information RH) 100% française, spécialisée dans la <strong>gestion
          des temps</strong>, <strong>congés & absences</strong>, <strong>notes de frais</strong> et <strong>entretiens
          professionnels</strong>. Réputée pour son interface utilisateur exceptionnelle et son support client de qualité,
          Lucca est très appréciée des PME françaises. La solution se concentre exclusivement sur les processus RH et
          nécessite une intégration avec un logiciel de paie comme PayFit.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-blue-900 font-semibold text-sm mb-1">Cible</p>
            <p className="text-blue-700 text-sm">PME françaises (20-500 salariés)</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <p className="text-purple-900 font-semibold text-sm mb-1">Spécialisation</p>
            <p className="text-purple-700 text-sm">SIRH pur (RH uniquement)</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <p className="text-green-900 font-semibold text-sm mb-1">Modèle</p>
            <p className="text-green-700 text-sm">SaaS modulaire</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <p className="text-orange-900 font-semibold text-sm mb-1">Force</p>
            <p className="text-orange-700 text-sm">UX & Conformité FR</p>
          </div>
        </div>
      </div>

      {/* Modules clés */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Modules Disponibles</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white border-2 border-slate-200 rounded-xl p-4 hover:border-blue-400 transition-colors hover:shadow-lg"
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
        <div className="grid md:grid-cols-3 gap-6">
          {/* Starter */}
          <div className="border-2 border-blue-300 rounded-xl p-6 bg-blue-50">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Starter</h3>
            <p className="text-4xl font-bold text-blue-900 mb-1">8€</p>
            <p className="text-blue-700 text-sm mb-1">/utilisateur/mois</p>
            <p className="text-xs text-blue-600 font-semibold mb-4">Congés + Absences</p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Gestion congés payés</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Workflows validation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Mobile app</span>
              </li>
            </ul>
          </div>

          {/* Professional */}
          <div className="border-2 border-green-500 rounded-xl p-6 bg-gradient-to-br from-green-50 to-emerald-50 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold">
              POPULAIRE
            </div>
            <h3 className="text-2xl font-bold text-green-900 mb-2">Professional</h3>
            <p className="text-4xl font-bold text-green-900 mb-1">12-15€</p>
            <p className="text-green-700 text-sm mb-1">/utilisateur/mois</p>
            <p className="text-xs text-green-600 font-semibold mb-4">Congés + Notes de Frais</p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Tout Starter +</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Notes de frais complètes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span>OCR reçus automatique</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Kilométrage GPS</span>
              </li>
            </ul>
          </div>

          {/* Enterprise */}
          <div className="border-2 border-purple-300 rounded-xl p-6 bg-purple-50">
            <h3 className="text-2xl font-bold text-purple-900 mb-2">Enterprise</h3>
            <p className="text-4xl font-bold text-purple-900 mb-1">20-25€</p>
            <p className="text-purple-700 text-sm mb-1">/utilisateur/mois</p>
            <p className="text-xs text-purple-600 font-semibold mb-4">Suite complète RH</p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                <span>Tous modules inclus</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                <span>Core RH & Entretiens</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                <span>Gestion talents</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                <span>Support prioritaire</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-900 text-sm">
            <strong>Note :</strong> Tarifs dégressifs selon le nombre d'utilisateurs. Pour 50 collaborateurs, compter environ 600-750€/mois.
          </p>
        </div>
      </div>

      {/* Intégrations */}
      <div className="bg-gradient-to-br from-slate-50 to-gray-50 border-2 border-slate-200 rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Intégrations Possibles</h2>
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
              Ce que Lucca couvre
            </h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Gestion congés et absences (RTT, CP, maladie)</li>
              <li>• Notes de frais techniciens (déplacements)</li>
              <li>• Entretiens annuels RH</li>
              <li>• Suivi temps de travail</li>
              <li>• Base de données collaborateurs</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-orange-200">
            <h3 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              Ce que Lucca ne couvre PAS
            </h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Paie et bulletins de salaire (besoin PayFit)</li>
              <li>• Gestion chantiers et projets</li>
              <li>• CRM et relation client</li>
              <li>• Stocks et achats</li>
              <li>• Comptabilité et facturation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recommandation */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
        <h2 className="text-3xl font-bold mb-4">Position dans l'Audit</h2>
        <p className="text-blue-100 text-lg leading-relaxed mb-6">
          Lucca est une <strong>excellente solution SIRH</strong> spécialisée, mais elle ne couvre que les besoins RH
          (<strong>~20% des besoins totaux</strong> de Duret Électricité). Si l'entreprise choisit Odoo ERP, le module
          RH d'Odoo peut suffire pour les besoins de base, rendant Lucca moins prioritaire. Lucca devient intéressant
          uniquement si Duret souhaite une expérience RH exceptionnelle et des fonctionnalités RH avancées (gestion
          talents, entretiens structurés).
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-blue-200 text-sm font-semibold mb-1">Recommandation</p>
            <p className="text-white font-bold">Solution complémentaire optionnelle si budget disponible</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-blue-200 text-sm font-semibold mb-1">Alternative</p>
            <p className="text-white font-bold">Module RH Odoo Enterprise peut suffire en Phase 1</p>
          </div>
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
          href="/annexes/logiciels/payfit"
          className="text-slate-600 hover:text-blue-600 font-semibold transition-colors"
        >
          PayFit →
        </Link>
      </div>
    </div>
  );
}
