import Link from 'next/link';
import { Package, CheckCircle, AlertCircle, TrendingUp, Zap, DollarSign, Truck, Database } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function RexelSoneparAPIPage() {
  const features = [
    { name: 'Punchout OCI', description: 'Accès catalogue depuis Odoo, panier intégré', icon: Package },
    { name: 'Stock Temps Réel', description: 'Disponibilité agence avant commande', icon: Database },
    { name: 'Commande EDI', description: 'Envoi direct dans ERP distributeur', icon: Zap },
    { name: 'Tracking Livraison', description: 'Suivi transporteur et date prévue', icon: Truck },
    { name: 'Facture Dématérialisée', description: 'Réception automatique EDI', icon: DollarSign },
  ];

  const benefits = [
    'Suppression totale de la ressaisie des commandes',
    'Application automatique prix nets contractuels',
    'Visibilité dates livraison pour planification chantiers',
    'Fin des écarts de facturation',
    'Fiabilité stock avant commande',
    'Flux de prix temps réel pour IA prédictive',
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Hero */}
      <div className="relative bg-gradient-to-r from-orange-900 to-red-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80"
            alt="Warehouse logistics"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="inline-block bg-red-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">
                🔴 PRIORITÉ 1 - CRITIQUE
              </div>
              <h1 className="text-5xl font-bold mb-3">API Rexel & Sonepar</h1>
              <p className="text-orange-200 text-xl mb-2">
                Intégration Distributeurs Électriques - EDI & Punchout
              </p>
              <div className="flex items-center gap-6 text-orange-100 text-sm">
                <span>📦 Logistique/Achats</span>
                <span>🔌 Cœur de métier</span>
                <span>💰 Coût : Inclus contrat</span>
              </div>
            </div>
            <Package className="w-24 h-24 text-white/40" />
          </div>
          <PDFDownloadButton
            pdfPath="/pdfs/api-rexel-sonepar.pdf"
            fileName="API_Rexel_Sonepar.pdf"
          />
        </div>
      </div>

      {/* Contexte & Enjeux */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-8 mb-8 shadow-lg">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-10 h-10 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Contexte & Enjeux</h2>
            <p className="text-amber-800 text-lg leading-relaxed mb-4">
              Les achats de matériel électrique représentent une part majeure des coûts de Duret Électricité.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <p className="text-red-700 font-semibold mb-2">❌ Problème Actuel</p>
                <ul className="text-amber-800 text-sm space-y-1">
                  <li>• Commandes par mail/téléphone</li>
                  <li>• Prix non à jour dans ERP</li>
                  <li>• Pas de visibilité livraison</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <p className="text-orange-700 font-semibold mb-2">⚠️ Risque</p>
                <ul className="text-amber-800 text-sm space-y-1">
                  <li>• Erreurs de commande</li>
                  <li>• Chantiers bloqués par retard</li>
                  <li>• Factures non conformes</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <p className="text-green-700 font-semibold mb-2">✓ Opportunité</p>
                <ul className="text-amber-800 text-sm space-y-1">
                  <li>• Punchout catalogue</li>
                  <li>• EDI Commande automatique</li>
                  <li>• Tracking temps réel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fonctionnalités clés */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Fonctionnalités Clés de l'API</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-2 border-orange-200 rounded-xl p-6 hover:border-orange-400 transition-colors hover:shadow-lg"
            >
              <feature.icon className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="font-bold text-lg text-slate-900 mb-2">{feature.name}</h3>
              <p className="text-slate-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Workflow cible */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Workflow Cible</h2>
        <div className="relative">
          {/* Timeline verticale */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-600 to-red-600"></div>

          <div className="space-y-6">
            {[
              { step: 1, title: 'Achat', desc: 'Chef chantier/Acheteur ouvre "Catalogue Rexel" dans Odoo', color: 'bg-orange-500' },
              { step: 2, title: 'Sélection', desc: 'Navigation sur site Rexel et remplissage du panier', color: 'bg-orange-600' },
              { step: 3, title: 'Import', desc: 'Retour dans Odoo → Lignes commande créées avec Réf, Désignation, Prix Net', color: 'bg-red-500' },
              { step: 4, title: 'Validation', desc: 'Validation interne workflow Duret', color: 'bg-red-600' },
              { step: 5, title: 'Envoi', desc: 'Commande EDI envoyée chez Rexel automatiquement', color: 'bg-red-700' },
              { step: 6, title: 'Suivi', desc: 'Odoo interroge API toutes les heures pour statut livraison', color: 'bg-red-800' },
            ].map((item) => (
              <div key={item.step} className="relative flex items-start gap-6 ml-4">
                <div className={`${item.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10 flex-shrink-0`}>
                  {item.step}
                </div>
                <div className="bg-slate-50 rounded-lg p-4 flex-1 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-700 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Intégration Odoo */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Intégration Odoo</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Architecture Technique</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">▸</span>
                <span><strong>Standard OCI</strong> (Open Catalog Interface) pour Punchout</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">▸</span>
                <span><strong>Module Odoo</strong> : <code className="bg-blue-100 px-2 py-0.5 rounded text-xs">purchase_oci</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">▸</span>
                <span><strong>APIs REST</strong> : Rexel Developer Portal pour tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">▸</span>
                <span><strong>EDI</strong> : Format EDIFACT pour commandes/factures</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Coûts & Délai</h3>
            <div className="space-y-4">
              <div>
                <p className="text-slate-600 text-sm font-semibold mb-2">Setup Initial</p>
                <p className="text-2xl font-bold text-blue-900">5 jours</p>
                <p className="text-slate-600 text-xs">Config OCI + Dev connecteur API Tracking</p>
              </div>
              <div>
                <p className="text-slate-600 text-sm font-semibold mb-2">Coût Récurrent</p>
                <p className="text-2xl font-bold text-green-600">0€</p>
                <p className="text-slate-600 text-xs">Inclus dans contrat cadre distributeur</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bénéfices */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-10 h-10 text-green-600" />
          <h2 className="text-3xl font-bold text-green-900">Bénéfices Attendus</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-green-200">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-green-800 text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Usage IA */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-10 h-10" />
          <h2 className="text-3xl font-bold">Usage pour l'IA Prédictive</h2>
        </div>
        <p className="text-purple-100 text-lg mb-6">
          Les APIs Rexel/Sonepar ne sont pas qu'un outil de commande - elles deviennent la <strong>source de données prix</strong> pour
          l'algorithme de pricing prédictif.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">📊 Data Intelligence</h3>
            <ul className="space-y-2 text-purple-100 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-300 mt-1">•</span>
                <span>Analyser fluctuations prix matériaux pour optimiser achats groupés</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-300 mt-1">•</span>
                <span>Alimenter Assistant de Chiffrage IA avec prix réels actualisés</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-300 mt-1">•</span>
                <span>Prédiction marges : alertes si devis devient non rentable</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">🤖 Machine Learning</h3>
            <p className="text-purple-100 text-sm leading-relaxed">
              L'historique des prix sur 2-3 ans permettra de <strong>prédire les évolutions saisonnières</strong> et
              d'optimiser la stratégie d'achat. L'algorithme identifiera les périodes favorables pour les achats
              groupés et anticipera les hausses de tarifs.
            </p>
          </div>
        </div>
      </div>

      {/* Verdict */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white mb-8">
        <h2 className="text-3xl font-bold mb-4">Verdict</h2>
        <p className="text-red-100 text-lg leading-relaxed mb-6">
          <strong>CRITIQUE - PRIORITÉ 1.</strong> Cette intégration est au cœur du métier de Duret Électricité.
          Elle remplace avantageusement l'idée d'une API "Chronopost" générique en se connectant directement à la source
          (le distributeur) qui gère sa propre logistique. C'est le <strong>standard de l'industrie BTP</strong> efficace.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-red-200 text-sm font-semibold mb-1">Gains</p>
            <p className="text-white font-bold">100% automatisation achats</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-red-200 text-sm font-semibold mb-1">ROI</p>
            <p className="text-white font-bold">Immédiat (inclus contrat)</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-red-200 text-sm font-semibold mb-1">Implémentation</p>
            <p className="text-white font-bold">Phase 1 (Mois 1-3)</p>
          </div>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link
          href="/annexes/apis"
          className="text-slate-600 hover:text-orange-600 font-semibold transition-colors"
        >
          ← Retour aux APIs
        </Link>
        <Link
          href="/annexes/apis/google-maps"
          className="text-slate-600 hover:text-orange-600 font-semibold transition-colors"
        >
          Google Maps API →
        </Link>
      </div>
    </div>
  );
}
