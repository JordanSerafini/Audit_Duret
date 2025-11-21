import PDFDownloadButton from '@/components/PDFDownloadButton';
import { ArrowLeft, AlertTriangle, CheckCircle, TrendingUp, Database, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Finance & Comptabilité - Audit IT Duret',
  description: 'Service Finance & Comptabilité - Transformation de la comptabilité',
};

export default function FinanceComptabilitePage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white shadow-2xl">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg mb-4 text-sm font-semibold">
                Service Transverse
              </div>
              <h1 className="text-5xl font-bold mb-3">
                Finance & Comptabilité
              </h1>
              <p className="text-emerald-100 text-xl max-w-3xl">
                Transformation de la comptabilité de <strong>silo technique</strong> vers <strong>outil de pilotage temps réel</strong>
              </p>
            </div>
            <div className="ml-6">
              <PDFDownloadButton
                pdfPath="/pdfs/finance-comptabilite.pdf"
                fileName="Service_Finance_Comptabilite.pdf"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contexte - Alerte */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-8 shadow-md">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-amber-900 mb-3">Contexte : Le Paradoxe "RAS"</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-amber-800 mb-2">✓ Apparence</p>
                <ul className="space-y-1 text-amber-900 text-sm">
                  <li>• Bilans et déclarations dans les délais</li>
                  <li>• Sage maîtrisé par l'équipe</li>
                  <li>• Aucune alerte remontée</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-800 mb-2">⚠️ Réalité</p>
                <p className="text-amber-900 text-sm">
                  Cette stabilité masque une <strong>déconnexion critique</strong> avec les opérations métier
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impacts identifiés */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-slate-300">
          Impacts Identifiés sur les Autres Services
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-red-900 mb-3">🎯 Direction</h3>
            <ul className="space-y-2 text-red-800">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><strong>Opacité rentabilité :</strong> Marges connues 1-2 mois après travaux</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><strong>Pilotage prédictif :</strong> Impossible d'ajuster en cours de projet</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-orange-900 mb-3">🏢 Commercial</h3>
            <ul className="space-y-2 text-orange-800">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Double saisie clients :</strong> CRM puis Sage manuellement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Risques :</strong> Erreurs, doublons, incohérences</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-yellow-900 mb-3">📝 Facturation</h3>
            <ul className="space-y-2 text-yellow-800">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span>Process manuel : terrain → vérif → ressaisie Sage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span><strong>Conséquences :</strong> Lenteur, erreurs, litiges</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-purple-900 mb-3">💰 Comptabilité</h3>
            <ul className="space-y-2 text-purple-800">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Rapprochement bancaire chronophage (manuel)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Tâches sans valeur ajoutée automatisables</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Comparaison Sage vs Odoo */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-slate-300">
          Analyse Comparative : Sage vs Odoo
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sage */}
          <div className="bg-slate-50 border-2 border-slate-300 rounded-2xl p-6 relative">
            <div className="absolute -top-4 left-6 bg-slate-600 text-white px-4 py-2 rounded-lg font-bold">
              ACTUEL : Sage
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm text-slate-600 font-semibold mb-1">Philosophie</p>
                <p className="text-slate-900">Logiciel orienté "Expert-Comptable"</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 font-semibold mb-1">Objectif principal</p>
                <p className="text-slate-900">Production liasses fiscales conformes</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 font-semibold mb-1">Architecture</p>
                <p className="text-slate-900">Silo isolé des opérations métier</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 font-semibold mb-1">Compta analytique</p>
                <p className="text-slate-900">Nécessite ressaisie complète</p>
              </div>
              <div className="bg-slate-200 rounded-lg p-4 mt-4">
                <p className="text-slate-700 font-semibold">✓ Verdict</p>
                <p className="text-sm text-slate-600">Excellent conformité, inadapté pilotage</p>
              </div>
            </div>
          </div>

          {/* Odoo */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-500 rounded-2xl p-6 relative shadow-lg">
            <div className="absolute -top-4 left-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg font-bold">
              CIBLE : Odoo
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm text-emerald-700 font-semibold mb-1">Philosophie</p>
                <p className="text-slate-900 font-semibold">Gestion d'entreprise intégrée</p>
              </div>
              <div>
                <p className="text-sm text-emerald-700 font-semibold mb-1">Principe clé</p>
                <p className="text-slate-900 font-semibold">Compta = conséquence automatique des opérations</p>
              </div>
              <div>
                <p className="text-sm text-emerald-700 font-semibold mb-1">Architecture</p>
                <p className="text-slate-900 font-semibold">Intégration native tous modules métier</p>
              </div>
              <div>
                <p className="text-sm text-emerald-700 font-semibold mb-1">Compta analytique</p>
                <p className="text-slate-900 font-semibold">Native et temps réel</p>
              </div>
              <div className="bg-emerald-600 text-white rounded-lg p-4 mt-4">
                <p className="font-bold flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Verdict
                </p>
                <p className="text-sm">Transformation en outil de pilotage stratégique</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mécanismes d'automatisation */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
          <Zap className="w-8 h-8" />
          Mécanismes d'Automatisation Odoo
        </h3>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="space-y-4 font-mono text-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-slate-700 font-semibold">Opération métier</span>
              <span className="text-slate-500">→</span>
              <span className="text-emerald-700 font-semibold">Impact comptable automatique</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Devis validé</span>
              <span className="text-slate-400">→</span>
              <span className="text-emerald-600">Prévision de trésorerie</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Facture fournisseur (OCR)</span>
              <span className="text-slate-400">→</span>
              <span className="text-emerald-600">Charge imputée au chantier</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Paiement client</span>
              <span className="text-slate-400">→</span>
              <span className="text-emerald-600">Lettrage automatique</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Validation étape chantier</span>
              <span className="text-slate-400">→</span>
              <span className="text-emerald-600">Facture brouillon générée</span>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Recommandée */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-slate-300 flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-emerald-600" />
          Solution Recommandée
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-emerald-500 transition-colors">
            <Database className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Compta Analytique Native</h3>
            <p className="text-slate-700 mb-3">
              Chaque ligne de facture liée auto au compte analytique du chantier.
            </p>
            <p className="text-sm text-emerald-700 font-semibold">
              → Visibilité temps réel marge brute par chantier
            </p>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-emerald-500 transition-colors">
            <Zap className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Facturation Automatisée</h3>
            <ul className="text-slate-700 text-sm space-y-2">
              <li>• Déclenchement : validation étape terrain</li>
              <li>• Génération : facture brouillon auto</li>
              <li>• Envoi : connexion Chorus Pro</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-emerald-500 transition-colors">
            <CheckCircle className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Rapprochement Bancaire IA</h3>
            <p className="text-slate-700 mb-3 text-sm">
              Connexion bancaire DSP2 + suggestion lettrage par IA + validation humaine
            </p>
            <p className="text-sm text-emerald-700 font-semibold">
              Gain : -70% temps de rapprochement
            </p>
          </div>
        </div>
      </div>

      {/* Stratégie de Transition */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-8 text-white mb-12">
        <h2 className="text-3xl font-bold mb-6">Stratégie de Transition</h2>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold mb-3">Scénario Recommandé : "Rupture Douce"</h3>
          <p className="text-slate-200 mb-4">
            <strong>Principe :</strong> Bascule complète comptabilité générale sur Odoo (pas d'interface Sage-Odoo)
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-emerald-300 mb-2">Quotidien (interne)</p>
              <p className="text-slate-300">Saisie, facturation, banque et relance dans Odoo</p>
            </div>
            <div>
              <p className="font-semibold text-blue-300 mb-2">Expert-comptable (externe)</p>
              <p className="text-slate-300">Option A : Portail Expert Odoo<br/>Option B : Export FEC standard</p>
            </div>
          </div>
        </div>

        {/* Risques */}
        <div className="bg-white/5 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">⚠️ Risques Identifiés</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-2 px-3">Risque</th>
                  <th className="text-center py-2 px-3">Impact</th>
                  <th className="text-left py-2 px-3">Mitigation</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-3">Résistance expert-comptable</td>
                  <td className="text-center"><span className="bg-orange-500 px-2 py-1 rounded text-xs font-bold text-white">Élevé</span></td>
                  <td className="py-3 px-3">Validation en amont, démo FEC</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-3">Erreurs reprise données</td>
                  <td className="text-center"><span className="bg-red-500 px-2 py-1 rounded text-xs font-bold text-white">Critique</span></td>
                  <td className="py-3 px-3">Double-run Sage/Odoo 1 mois</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-3">Surcharge cognitive équipe</td>
                  <td className="text-center"><span className="bg-yellow-500 px-2 py-1 rounded text-xs font-bold text-white">Moyen</span></td>
                  <td className="py-3 px-3">Formation progressive, hotline</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold text-emerald-900 mb-4">Recommandation Finale</h2>
        <p className="text-emerald-800 text-lg mb-4">
          <strong>La migration complète de la comptabilité vers Odoo est la condition nécessaire</strong> pour obtenir :
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
            <span className="text-emerald-900">Pilotage rentabilité temps réel</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
            <span className="text-emerald-900">Réduction tâches faible valeur ajoutée</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
            <span className="text-emerald-900">Cohérence données entre services</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
            <span className="text-emerald-900">Capacité analyse prédictive (tréso, marges)</span>
          </div>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="mt-8 flex justify-between">
        <Link
          href="/services/service-client"
          className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-semibold"
        >
          ← Service Client
        </Link>
        <Link
          href="/annexes/logiciels"
          className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
        >
          Annexes →
        </Link>
      </div>
    </div>
  );
}
