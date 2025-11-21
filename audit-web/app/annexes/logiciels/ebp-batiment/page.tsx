import Link from 'next/link';
import { ArrowLeft, Package, AlertTriangle, CheckCircle, XCircle, TrendingUp, Euro } from 'lucide-react';

export default function EBPBatimentPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <Link href="/annexes/logiciels" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux Solutions Logiciels
        </Link>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl mb-8">
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-block bg-orange-500 px-4 py-2 rounded-lg mb-4">
              <span className="text-sm font-semibold">Alternative</span>
            </div>
            <h1 className="text-5xl font-bold mb-3">EBP Bâtiment</h1>
            <p className="text-teal-100 text-xl mb-6">
              Solution ERP spécialisée pour les entreprises du BTP et de l'électricité
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold">📧 EBP (France)</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold">Spécialisé BTP</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold">Local ou SaaS</span>
              </div>
            </div>
          </div>
          <Package className="w-32 h-32 text-white/30" />
        </div>
      </div>

      {/* Prix et métriques */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
          <Euro className="w-8 h-8 text-orange-600 mb-3" />
          <p className="text-sm text-orange-700 font-semibold mb-1">Prix estimé</p>
          <p className="text-3xl font-bold text-orange-900">~100€</p>
          <p className="text-xs text-orange-600">par user/mois</p>
        </div>
        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
          <AlertTriangle className="w-8 h-8 text-orange-600 mb-3" />
          <p className="text-sm text-orange-700 font-semibold mb-1">Couverture</p>
          <p className="text-3xl font-bold text-orange-900">88%</p>
          <p className="text-xs text-orange-600">des besoins Duret</p>
        </div>
        <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6">
          <CheckCircle className="w-8 h-8 text-teal-600 mb-3" />
          <p className="text-sm text-teal-700 font-semibold mb-1">Spécialisation</p>
          <p className="text-3xl font-bold text-teal-900">Expert</p>
          <p className="text-xs text-teal-600">BTP & Électricité</p>
        </div>
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
          <TrendingUp className="w-8 h-8 text-red-600 mb-3" />
          <p className="text-sm text-red-700 font-semibold mb-1">Coût 3 ans</p>
          <p className="text-3xl font-bold text-red-900">295k€</p>
          <p className="text-xs text-red-600">avec compléments</p>
        </div>
      </div>

      {/* Fonctionnalités */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Fonctionnalités Clés BTP</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
            <h3 className="font-bold text-teal-900 mb-3 text-lg">✅ Points Forts</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                <span><strong>Devis & Métrés intégrés</strong> : Chiffrages précis avec tranches de travaux</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                <span><strong>Attestations TVA taux réduit</strong> : Génération automatique</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                <span><strong>Interface Tarifeo</strong> : Accès +700 fournisseurs BTP, tarifs à jour</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                <span><strong>Intégration Sonepar native</strong> : Import offres de prix automatique</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                <span><strong>Gestion primes CEE, MaPrimeRenov'</strong> : Primes déductibles</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                <span><strong>Support français</strong> : Assistance téléphone direct</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <h3 className="font-bold text-red-900 mb-3 text-lg">❌ Limites Critiques</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 mt-1" />
                <span><strong>Pas de CRM</strong> : Besoin HubSpot ou autre en complément</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 mt-1" />
                <span><strong>Field Service basique</strong> : App mobile limitée, pas CERFA avancé</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 mt-1" />
                <span><strong>Pas de RFID stocks</strong> : Scan basique uniquement</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 mt-1" />
                <span><strong>Pas de SIRH</strong> : Besoin Lucca ou PayFit en complément</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 mt-1" />
                <span><strong>Scalabilité limitée</strong> : Max 20 users version PRO</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 mt-1" />
                <span><strong>Impasse Data/IA</strong> : Base propriétaire fermée (Score 1,2/10)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Comparatif avec Odoo */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-300 mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">EBP vs Odoo : Verdict</h2>
        <div className="bg-white rounded-xl p-6 mb-6">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="text-left py-2 px-3 text-sm">Critère</th>
                <th className="text-center py-2 px-3 text-sm text-teal-700">EBP</th>
                <th className="text-center py-2 px-3 text-sm text-blue-700">Odoo</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-2 px-3">Prix/user/mois</td>
                <td className="py-2 px-3 text-center">~100€</td>
                <td className="py-2 px-3 text-center text-green-600 font-bold">24,90€</td>
              </tr>
              <tr className="border-b bg-slate-50">
                <td className="py-2 px-3">Spécialisation BTP</td>
                <td className="py-2 px-3 text-center text-green-600 font-bold">Expert</td>
                <td className="py-2 px-3 text-center">Généraliste</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3">CRM intégré</td>
                <td className="py-2 px-3 text-center">❌</td>
                <td className="py-2 px-3 text-center text-green-600">✅</td>
              </tr>
              <tr className="border-b bg-slate-50">
                <td className="py-2 px-3">SIRH intégré</td>
                <td className="py-2 px-3 text-center">❌</td>
                <td className="py-2 px-3 text-center text-green-600">✅</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3">App mobile Field Service</td>
                <td className="py-2 px-3 text-center">Basique</td>
                <td className="py-2 px-3 text-center text-green-600 font-bold">Complète</td>
              </tr>
              <tr className="border-b bg-slate-50">
                <td className="py-2 px-3">Open Source</td>
                <td className="py-2 px-3 text-center">❌</td>
                <td className="py-2 px-3 text-center text-green-600">✅</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3">Scalabilité</td>
                <td className="py-2 px-3 text-center">Max 20</td>
                <td className="py-2 px-3 text-center text-green-600 font-bold">5-5000+</td>
              </tr>
              <tr className="bg-blue-50 font-bold">
                <td className="py-2 px-3">Coût 3 ans (100 users)</td>
                <td className="py-2 px-3 text-center text-red-600">295k€</td>
                <td className="py-2 px-3 text-center text-green-600">190k€</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-blue-600 text-white rounded-lg p-6">
          <p className="text-lg font-semibold mb-2">💡 Recommandation</p>
          <p className="text-blue-100">
            <strong>Odoo maintient sa position de solution préférentielle</strong> grâce à sa couverture 100%,
            son prix compétit if (-35% vs EBP+compléments), et sa préparation Data/IA. EBP excelle en spécialisation
            BTP mais nécessite 4-5 solutions complémentaires pour couvrir tous les besoins Duret.
          </p>
        </div>
      </div>

      {/* Tarifs estimés */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Tarifs 2025 (Estimés)</h2>
        <p className="text-slate-600 mb-6">⚠️ EBP ne communique pas publiquement ses tarifs. Estimations marché :</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-2 border-slate-300 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">ACTIV</h3>
            <p className="text-3xl font-bold text-slate-900 mb-1">40-60€</p>
            <p className="text-xs text-slate-600 mb-4">/user/mois estimé</p>
            <p className="text-sm text-slate-700">Fonctions basiques</p>
          </div>
          <div className="border-2 border-teal-500 rounded-xl p-6 bg-teal-50">
            <h3 className="text-xl font-bold text-teal-900 mb-2">PRO</h3>
            <p className="text-3xl font-bold text-teal-900 mb-1">80-120€</p>
            <p className="text-xs text-teal-600 mb-4">/user/mois estimé</p>
            <p className="text-sm text-teal-700">Recommandé PME BTP</p>
          </div>
          <div className="border-2 border-purple-300 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-900 mb-2">ELITE</h3>
            <p className="text-3xl font-bold text-purple-900 mb-1">150-250€</p>
            <p className="text-xs text-purple-600 mb-4">/user/mois estimé</p>
            <p className="text-sm text-purple-700">Fonctions avancées</p>
          </div>
        </div>
      </div>

      {/* Recommandation finale */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white mb-8">
        <h2 className="text-3xl font-bold mb-4">❌ Non Recommandé comme Solution Unique</h2>
        <p className="text-orange-100 text-lg mb-4">
          EBP Bâtiment est une <strong>excellente solution spécialisée BTP</strong>, mais ne couvre que 88% des besoins Duret.
          Le coût combiné EBP + compléments (295k€ sur 3 ans) dépasse largement Odoo (190k€) pour une couverture moindre.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-orange-200 text-sm mb-1">Prix sur 3 ans</p>
            <p className="font-bold">+105k€ vs Odoo</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-orange-200 text-sm mb-1">Solutions nécessaires</p>
            <p className="font-bold">5 outils à gérer</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-orange-200 text-sm mb-1">Couverture</p>
            <p className="font-bold">88% besoins</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link href="/annexes/logiciels/odoo-erp" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">
          ← Odoo ERP
        </Link>
        <Link href="/annexes/logiciels/hubspot-crm" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">
          HubSpot CRM →
        </Link>
      </div>
    </div>
  );
}
