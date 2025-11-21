import Link from 'next/link';
import { CheckCircle, AlertTriangle, TrendingUp, Zap } from 'lucide-react';

export default function SynthesePage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-10 bg-grid-white/10"></div>
        <div className="relative z-10 p-8 text-white">
          <div className="grid grid-cols-3 items-center gap-6 mb-6 pb-6 border-b-2 border-white/20">
            <div className="text-left">
              <div className="bg-white px-6 py-4 rounded-xl inline-block shadow-xl">
                <div className="text-3xl font-bold text-blue-900">⚡ DURET</div>
                <div className="text-sm text-blue-600 font-semibold">ÉLECTRICITÉ</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs uppercase tracking-widest opacity-90 mb-2">Audit IT & Transformation Digitale</div>
              <h1 className="text-4xl font-bold mb-1">VALIDATION EXTERNE</h1>
              <p className="text-blue-200">Analyse de Cohérence Technologique</p>
            </div>
            <div className="text-right">
              <div className="bg-white/95 px-6 py-4 rounded-xl inline-block shadow-xl">
                <div className="text-2xl font-bold text-slate-900">💡 SOLUTION LOGIQUE</div>
                <div className="text-xs text-slate-600 font-medium">Conseil IT & Architecture SI</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {[
              { icon: '📅', label: 'Date', value: 'Janvier 2025' },
              { icon: '🏗️', label: 'Secteur', value: 'BTP Électricité' },
              { icon: '🤖', label: 'Technologies', value: 'ERP • IA • Data' },
              { icon: '✅', label: 'Verdict', value: 'GO', special: true },
            ].map((item, index) => (
              <div key={index} className={`text-center p-4 rounded-xl backdrop-blur-sm ${item.special ? 'bg-green-500/20 border-2 border-green-400' : 'bg-white/10'}`}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-xs uppercase opacity-80 mb-1">{item.label}</div>
                <div className={`font-bold text-lg ${item.special ? 'text-green-300' : ''}`}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 1: Enjeux Métier */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">1. Compréhension des Enjeux Métier</h2>
        <p className="text-xl text-slate-700 mb-8 leading-relaxed">
          L'audit révèle une PME d'environ <strong>100 collaborateurs</strong> en <strong>crise de croissance</strong>,
          freinée par des outils obsolètes et une dispersion de la donnée.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mb-6">🎯 Les 4 Crises Identifiées</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: '🏗️',
              title: 'Fracture Bureau/Terrain',
              desc: 'Déconnexion majeure entre équipes terrain et bureau',
              issues: ['Process manuels (papier, Excel, oral)', 'Délais facturation importants', 'Perte traçabilité complète'],
              color: 'orange',
            },
            {
              icon: '💰',
              title: 'Opacité Financière',
              desc: 'Rentabilité connue uniquement à la clôture',
              issues: ['Aucune compta analytique temps réel', '~30 fichiers Excel isolés', 'Aucune réactivité sur dérives'],
              color: 'red',
            },
            {
              icon: '📝',
              title: 'Lourdeur Administrative',
              desc: 'Ressaisie omniprésente',
              issues: ['Commandes ressaisies multiples fois', 'Heures techniciens ressaisies', 'Validation factures chronophage'],
              color: 'purple',
            },
            {
              icon: '📦',
              title: 'Approvisionnement Critique',
              desc: 'Stocks et prix non fiabilisés',
              issues: ['Stocks câbles mal gérés', 'Prix fournisseurs non actualisés', 'Risque : Perte marge + arrêts'],
              color: 'blue',
            },
          ].map((crisis, index) => (
            <div key={index} className={`bg-${crisis.color}-50 border-2 border-${crisis.color}-300 rounded-xl p-6`}>
              <div className="text-4xl mb-3">{crisis.icon}</div>
              <h4 className={`text-xl font-bold text-${crisis.color}-900 mb-2`}>{crisis.title}</h4>
              <p className={`text-${crisis.color}-800 mb-4`}>{crisis.desc}</p>
              <ul className="space-y-2">
                {crisis.issues.map((issue, i) => (
                  <li key={i} className={`flex items-start gap-2 text-sm text-${crisis.color}-800`}>
                    <span className="text-red-600 mt-1">✗</span>
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Solutions */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">2. Analyse de la Logique Métier & Solutions</h2>

        <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-8 mb-8 shadow-lg">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-12 h-12 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-green-900 mb-3">✅ Stratégie Validée</h3>
              <p className="text-green-800 text-lg leading-relaxed">
                <strong>Centralisation autour d'un ERP unique (Odoo)</strong>, complété par des APIs
                spécifiques au métier de l'électricité.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-6">💼 Comparaison des Scénarios</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 text-center">
            <div className="text-sm font-semibold text-red-700 mb-2">❌ Scénario 2 : EBP (Rejeté)</div>
            <div className="text-4xl font-bold text-red-900 mb-4">~213k€</div>
            <ul className="text-sm text-red-800 space-y-1">
              <li>• Silos de données</li>
              <li>• Architecture fermée</li>
              <li>• Intégrations coûteuses</li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-6xl font-bold text-slate-300">VS</div>
          </div>

          <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 text-center shadow-lg">
            <div className="text-sm font-semibold text-green-700 mb-2">✅ Scénario 1 : Odoo (Recommandé)</div>
            <div className="text-4xl font-bold text-green-900 mb-4">Budget optimisé</div>
            <ul className="text-sm text-green-800 space-y-1">
              <li>• Données unifiées</li>
              <li>• Open Source évolutif</li>
              <li>• APIs natives</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Architecture */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">3. Architecture Proposée</h2>

        <div className="bg-white border-2 border-slate-300 rounded-2xl p-8 shadow-lg">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl p-6 mb-6 text-center">
            <div className="text-2xl font-bold">🎯 ODOO ERP (Cœur)</div>
            <p className="text-blue-200 text-sm mt-2">Unique Source de Vérité - Single Source of Truth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Rexel/Sonepar', desc: 'Commandes & Stocks', icon: '📦' },
              { title: 'PayFit/Lucca', desc: 'Paie & RH', icon: '👥' },
              { title: 'Google Maps', desc: 'Géolocalisation', icon: '📍' },
              { title: 'Power BI', desc: 'Dashboards BI', icon: '📊' },
              { title: 'Chorus Pro', desc: 'Facturation publique', icon: '🏛️' },
              { title: 'Pappers/INSEE', desc: 'Conformité tiers', icon: '✓' },
            ].map((api, index) => (
              <div key={index} className="bg-slate-50 border-2 border-blue-300 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">{api.icon}</div>
                <h4 className="font-bold text-blue-900 mb-1">{api.title}</h4>
                <p className="text-xs text-slate-600">{api.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Verdict Final */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">4. Verdict Final</h2>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-4xl">✅</div>
            <div>
              <h3 className="text-3xl font-bold">GO - Confiance Haute</h3>
              <p className="text-green-100">Le projet de transformation est validé et recommandé</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Couverture Fonctionnelle', value: '100%', desc: 'Tous besoins couverts' },
              { label: 'ROI Attendu', value: '< 18 mois', desc: 'Retour sur investissement rapide' },
              { label: 'Risque Global', value: 'Maîtrisé', desc: 'Conditions suspensives définies' },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-green-200 text-xs uppercase mb-1">{item.label}</p>
                <p className="text-2xl font-bold mb-1">{item.value}</p>
                <p className="text-green-100 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-10 h-10 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Conditions Suspensives (Go/No-Go)</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: 'POC Field Service', desc: 'Test formulaires CERFA terrain (2 semaines)' },
                  { title: 'Validation Budgétaire', desc: 'Approbation CODIR après étude de faisabilité' },
                  { title: 'Planification RFID', desc: 'Report déploiement à 18 mois minimum' },
                ].map((condition, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-amber-200">
                    <p className="font-bold text-amber-900 mb-2">{condition.title}</p>
                    <p className="text-amber-800 text-sm">{condition.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 text-white text-center mb-8">
        <Zap className="w-16 h-16 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Prêt pour la Transformation</h2>
        <p className="text-blue-200 text-lg max-w-3xl mx-auto">
          Duret Électricité dispose d'une feuille de route claire et validée pour sa transformation digitale.
          L'architecture proposée répond aux enjeux métier avec une approche pragmatique et progressive.
        </p>
      </div>

      {/* Footer navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link href="/annexes/apis" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">
          ← Annexes APIs
        </Link>
        <Link href="/" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">
          Accueil →
        </Link>
      </div>
    </div>
  );
}
