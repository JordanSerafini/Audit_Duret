import Link from 'next/link';
import { BarChart3, CheckCircle, AlertTriangle, TrendingUp, PieChart, LineChart, Database, Zap, Cloud } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function PowerBIPage() {
  const features = [
    { name: 'Dashboards Interactifs', icon: BarChart3, color: 'text-blue-600' },
    { name: 'Reporting Temps Réel', icon: TrendingUp, color: 'text-green-600' },
    { name: 'Connecteurs Data', icon: Database, color: 'text-purple-600' },
    { name: 'Visualisations Avancées', icon: PieChart, color: 'text-orange-600' },
    { name: 'IA & Prédiction', icon: Zap, color: 'text-yellow-600' },
    { name: 'Cloud & Mobile', icon: Cloud, color: 'text-cyan-600' },
  ];

  const strengths = [
    'Leader mondial de la Business Intelligence (Gartner)',
    'Intégration native avec Microsoft 365 (Teams, Excel)',
    'Connecteurs natifs pour 200+ sources de données',
    'IA générative pour insights automatiques (Copilot)',
    'Interface drag-and-drop intuitive',
    'Communauté énorme (templates, formations)',
  ];

  const weaknesses = [
    'Tarifs élevés (20€/user/mois minimum)',
    'Courbe d\'apprentissage DAX (langage formules)',
    'Performance limitée avec gros volumes (>1GB)',
    'Nécessite Power BI Premium pour partage externe',
    'Dépendance à l\'écosystème Microsoft',
  ];

  const useCases = [
    {
      title: 'Direction Générale',
      icon: TrendingUp,
      color: 'blue',
      dashboards: [
        'KPI Chiffre d\'affaires / Marge / CA par client',
        'Rentabilité par chantier',
        'Trésorerie prévisionnelle',
        'Performance commerciale (taux transformation)',
      ],
    },
    {
      title: 'Chef d\'Exploitation',
      icon: BarChart3,
      color: 'green',
      dashboards: [
        'Charge techniciens (taux occupation)',
        'Retards chantiers vs planning',
        'Consommation matériel par type de chantier',
        'Temps moyen d\'intervention',
      ],
    },
    {
      title: 'Service Achat',
      icon: Database,
      color: 'orange',
      dashboards: [
        'Évolution prix fournisseurs (Rexel/Sonepar)',
        'Top 10 achats par montant',
        'Délais livraison moyens',
        'Taux rupture stock',
      ],
    },
  ];

  const pricingTiers = [
    {
      name: 'Power BI Free',
      price: '0€',
      period: '/utilisateur/mois',
      features: ['Création rapports locaux', 'Partage limité (pas de cloud)', 'Données jusqu\'à 1GB', 'Usage personnel uniquement'],
      best: false,
      color: 'slate',
    },
    {
      name: 'Power BI Pro',
      price: '10€',
      period: '/utilisateur/mois',
      features: ['Partage cloud illimité', 'Collaboration équipe', 'Refresh données 8x/jour', 'Datasets jusqu\'à 1GB'],
      best: true,
      color: 'blue',
    },
    {
      name: 'Power BI Premium',
      price: '4,995€',
      period: '/capacité/mois',
      features: ['Capacité partagée illimitée', 'Gros volumes (>100GB)', 'Refresh temps réel', 'Partage externe (clients)'],
      best: false,
      color: 'purple',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Hero */}
      <div className="relative bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
            alt="Power BI"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="inline-block bg-yellow-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold text-gray-900">
                BUSINESS INTELLIGENCE
              </div>
              <h1 className="text-5xl font-bold mb-3">Power BI</h1>
              <p className="text-yellow-100 text-xl mb-2">
                Business Intelligence & Data Visualization - Microsoft
              </p>
              <div className="flex items-center gap-6 text-yellow-100 text-sm">
                <span>🇺🇸 Microsoft (USA)</span>
                <span>👥 Leader mondial BI (Gartner)</span>
                <span>⭐ 4.5/5 (G2)</span>
              </div>
            </div>
            <BarChart3 className="w-24 h-24 text-white/40" />
          </div>
          <PDFDownloadButton
            pdfPath="/pdfs/logiciel-power-bi.pdf"
            fileName="Power_BI_Audit.pdf"
          />
        </div>
      </div>

      {/* Présentation */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Présentation</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Power BI est la <strong>plateforme de Business Intelligence</strong> de Microsoft, leader mondial selon le
          Magic Quadrant de Gartner. Elle permet de <strong>transformer des données brutes</strong> en rapports interactifs
          et dashboards visuels, accessibles sur web, mobile et intégrés dans Teams/SharePoint. Power BI se connecte
          nativement à des centaines de sources (SQL, Excel, APIs REST, Odoo, EBP, etc.) et propose des fonctionnalités
          d'<strong>IA générative</strong> (Copilot) pour créer automatiquement des insights métier.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <p className="text-yellow-900 font-semibold text-sm mb-1">Cible</p>
            <p className="text-yellow-700 text-sm">PME, ETI, Grandes Entreprises</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <p className="text-orange-900 font-semibold text-sm mb-1">Spécialisation</p>
            <p className="text-orange-700 text-sm">Business Intelligence</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-blue-900 font-semibold text-sm mb-1">Modèle</p>
            <p className="text-blue-700 text-sm">SaaS / Desktop Hybrid</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <p className="text-purple-900 font-semibold text-sm mb-1">Force</p>
            <p className="text-purple-700 text-sm">Écosystème Microsoft</p>
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
              className="bg-white border-2 border-slate-200 rounded-xl p-4 hover:border-yellow-400 transition-colors hover:shadow-lg"
            >
              <feature.icon className={`w-10 h-10 ${feature.color} mb-3`} />
              <p className="font-semibold text-slate-900 text-sm">{feature.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cas d'usage Duret */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Cas d'Usage chez Duret Électricité</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`bg-${useCase.color}-50 border-2 border-${useCase.color}-200 rounded-xl p-6 hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-center gap-3 mb-4">
                <useCase.icon className={`w-8 h-8 text-${useCase.color}-600`} />
                <h3 className={`text-xl font-bold text-${useCase.color}-900`}>{useCase.title}</h3>
              </div>
              <ul className="space-y-2 text-slate-700 text-sm">
                {useCase.dashboards.map((dashboard, dIndex) => (
                  <li key={dIndex} className="flex items-start gap-2">
                    <span className={`text-${useCase.color}-600 mt-1`}>▸</span>
                    <span>{dashboard}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture recommandée */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">Architecture Recommandée pour Duret</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 border border-purple-200">
            <h3 className="text-xl font-bold text-purple-900 mb-4">🔌 Sources de Données</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-slate-900 mb-2">Données Opérationnelles</p>
                <ul className="space-y-1 text-slate-700 text-sm">
                  <li>• Odoo ERP (via connecteur PostgreSQL ou API REST)</li>
                  <li>• PayFit (export CSV mensuel paie)</li>
                  <li>• Lucca (API REST temps & congés)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-900 mb-2">Données Externes</p>
                <ul className="space-y-1 text-slate-700 text-sm">
                  <li>• API Rexel/Sonepar (prix fournisseurs)</li>
                  <li>• Fichiers Excel legacy (archives historiques)</li>
                  <li>• API Google Maps (calcul distances chantiers)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-purple-200">
            <h3 className="text-xl font-bold text-purple-900 mb-4">📊 Dashboards Prioritaires</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="font-bold text-blue-900 mb-2">Phase 1 (M1-M3)</p>
                <ul className="space-y-1 text-slate-700 text-sm">
                  <li>• CA & Marge par client/chantier</li>
                  <li>• Suivi trésorerie</li>
                  <li>• Performance commerciale</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="font-bold text-green-900 mb-2">Phase 2 (M4-M6)</p>
                <ul className="space-y-1 text-slate-700 text-sm">
                  <li>• Analyse prix fournisseurs</li>
                  <li>• Charge techniciens</li>
                  <li>• Prédictions CA (IA)</li>
                </ul>
              </div>
            </div>
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
                tier.best
                  ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50'
                  : tier.color === 'purple'
                  ? 'border-purple-300 bg-purple-50'
                  : 'border-slate-300 bg-slate-50'
              } rounded-xl p-6 relative`}
            >
              {tier.best && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                  RECOMMANDÉ
                </div>
              )}
              <h3
                className={`text-2xl font-bold ${
                  tier.best ? 'text-blue-900' : tier.color === 'purple' ? 'text-purple-900' : 'text-slate-900'
                } mb-2`}
              >
                {tier.name}
              </h3>
              <p
                className={`text-4xl font-bold ${
                  tier.best ? 'text-blue-900' : tier.color === 'purple' ? 'text-purple-900' : 'text-slate-900'
                } mb-1`}
              >
                {tier.price}
              </p>
              <p
                className={`${
                  tier.best ? 'text-blue-700' : tier.color === 'purple' ? 'text-purple-700' : 'text-slate-600'
                } text-sm mb-4`}
              >
                {tier.period}
              </p>
              <ul className="space-y-2 text-slate-700 text-sm">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <CheckCircle
                      className={`w-4 h-4 ${
                        tier.best ? 'text-blue-600' : tier.color === 'purple' ? 'text-purple-600' : 'text-slate-600'
                      } mt-1 flex-shrink-0`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-900 text-sm">
            <strong>Estimation Duret :</strong> Power BI Pro pour 10 utilisateurs décisionnaires : 10 × 10€ = 100€/mois soit 1,200€/an
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

      {/* Alternative Odoo BI */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-300 rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">Alternative : Odoo Analytics (Intégré)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-cyan-200">
            <h3 className="font-bold text-cyan-900 mb-3">✅ Avantages Odoo BI</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                <span>Inclus dans licence Odoo (pas de coût additionnel)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                <span>Dashboards natifs sur données Odoo (temps réel)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                <span>Simplicité : pas de connecteurs à configurer</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-orange-200">
            <h3 className="font-bold text-orange-900 mb-3">⚠ Limites Odoo BI</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 mt-1" />
                <span>Personnalisation graphiques limitée</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 mt-1" />
                <span>Pas de croisement avec données externes (Excel, APIs)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 mt-1" />
                <span>Pas d'IA prédictive avancée</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recommandation */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-white mb-8">
        <h2 className="text-3xl font-bold mb-4">Position dans l'Audit</h2>
        <p className="text-yellow-100 text-lg leading-relaxed mb-6">
          Power BI est <strong>recommandé en Phase 2</strong> (après déploiement Odoo) pour croiser les données de
          multiples sources (Odoo, PayFit, APIs Rexel, Google Maps) et créer des analyses prédictives avancées. En
          Phase 1, les <strong>dashboards natifs d'Odoo</strong> suffiront pour les besoins opérationnels immédiats.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-yellow-200 text-sm font-semibold mb-1">Phase 1 (M1-M6)</p>
            <p className="text-white font-bold text-sm">Utiliser Odoo Analytics uniquement</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-yellow-200 text-sm font-semibold mb-1">Phase 2 (M7-M12)</p>
            <p className="text-white font-bold text-sm">Déployer Power BI Pro (10 users)</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-yellow-200 text-sm font-semibold mb-1">Coût Total Année 1</p>
            <p className="text-white font-bold text-sm">600€ (6 mois × 100€/mois)</p>
          </div>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link
          href="/annexes/logiciels"
          className="text-slate-600 hover:text-yellow-600 font-semibold transition-colors"
        >
          ← Retour aux Logiciels
        </Link>
        <Link
          href="/annexes/logiciels/ebp-batiment"
          className="text-slate-600 hover:text-yellow-600 font-semibold transition-colors"
        >
          EBP Bâtiment →
        </Link>
      </div>
    </div>
  );
}
