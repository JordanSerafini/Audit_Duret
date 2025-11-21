import Link from 'next/link';
import { Package, AlertTriangle, TrendingUp, Smartphone, BarChart3, Zap } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function AchatsLogistiquePage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
            alt="Logistics warehouse"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="inline-block bg-blue-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">
            Service Opérationnel
          </div>
          <h1 className="text-5xl font-bold mb-3">Achats & Logistique</h1>
          <p className="text-blue-200 text-xl mb-6">
            Transformation digitale vers une plateforme e-procurement intelligente
          </p>
          <PDFDownloadButton
            pdfPath="/pdfs/service-achats-logistique.pdf"
            fileName="Service_Achats_Logistique.pdf"
          />
        </div>
      </div>

      {/* État des lieux */}
      <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-8 mb-8 shadow-lg">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl font-bold text-red-900 mb-4">Constats Terrain - Problèmes Majeurs</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <h3 className="font-bold text-red-900 mb-3">❌ Problèmes Identifiés</h3>
                <ul className="space-y-2 text-red-800 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span><strong>Taux élevé commandes incomplètes</strong> (chantiers bloqués)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span><strong>Processus 100% manuel</strong> (téléphone, papier, Excel)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span><strong>Base données chaotique</strong> (même produit 2 prix différents)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span><strong>Aucune traçabilité</strong> digitale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span><strong>Sage MDE "calamiteux"</strong> (verbatim utilisateurs)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <h3 className="font-bold text-red-900 mb-3">📊 Volume d&apos;Activité</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-red-800 text-sm">Références/an</span>
                    <span className="text-2xl font-bold text-red-900">9-11K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-red-800 text-sm">Ressaisies multiples</span>
                    <span className="text-xl font-bold text-red-900">Nombreuses</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-red-800 text-sm">Acteurs impliqués</span>
                    <span className="text-xl font-bold text-red-900">5 types</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Causes racines */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Causes Racines</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6">
            <h3 className="text-xl font-bold text-orange-900 mb-4">1. Données Éparpillées</h3>
            <ul className="space-y-2 text-orange-800 text-sm">
              <li>• Sage MDE (serveur vieillissant)</li>
              <li>• Excel x4 versions désynchronisées</li>
              <li>• Email + Téléphone (pas de trace)</li>
              <li>• Bons papier manuscrits</li>
            </ul>
          </div>
          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-900 mb-4">2. Processus Inefficace</h3>
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <p className="text-red-800 text-xs font-mono leading-relaxed">
                Marc (Chantier)<br/>
                ↓ Téléphone<br/>
                Sylvie (Bureau)<br/>
                ↓ RE-SAISIES<br/>
                ↓ Téléphone<br/>
                Fournisseur<br/>
                = Délais + Erreurs
              </p>
            </div>
          </div>
          <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-900 mb-4">3. Goulots d&apos;Étranglement</h3>
            <ul className="space-y-2 text-purple-800 text-sm">
              <li>• Sylvie = hub central (dépendance totale)</li>
              <li>• 1 seul PC au dépôt</li>
              <li>• Pas d'APIs fournisseurs</li>
              <li>• Pas de validation auto</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Impact utilisateurs */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Impact Utilisateurs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { persona: 'Marc (Chef Chantier)', pain: 'Perd du temps en appels, chantier bloqué fréquemment', color: 'orange' },
            { persona: 'Sylvie (Achats)', pain: 'Débordée, ressaisies multiples, validation manuelle, pompier', color: 'red' },
            { persona: 'Éric (Dépôt)', pain: 'Nomenclatures incohérentes, 1 seul PC, pas de scan', color: 'purple' },
            { persona: 'Julien (Resp. Affaires)', pain: 'Aucune visibilité temps réel sur ses chantiers', color: 'blue' },
            { persona: 'Christine (Direction)', pain: 'Pas de KPIs, pas de pilotage, pas de prévisions', color: 'slate' },
          ].map((user, index) => (
            <div key={index} className={`bg-${user.color}-50 border border-${user.color}-200 rounded-xl p-4`}>
              <p className={`font-bold text-${user.color}-900 mb-2 text-sm`}>{user.persona}</p>
              <p className={`text-${user.color}-800 text-xs`}>{user.pain}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision cible */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-10 h-10 text-green-600" />
          <h2 className="text-3xl font-bold text-green-900">Vision Cible</h2>
        </div>
        <p className="text-green-800 text-lg mb-6">
          Transformation en <strong>plateforme e-procurement intelligente</strong>
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { icon: Smartphone, label: 'Digital-first', desc: 'Mobile app chantiers', color: 'blue' },
            { icon: Zap, label: 'Temps réel', desc: 'Notifications, tracking', color: 'purple' },
            { icon: Package, label: 'Intelligent', desc: 'Automatisation', color: 'indigo' },
            { icon: Package, label: 'Intégré', desc: 'APIs Rexel, Sonepar', color: 'orange' },
            { icon: BarChart3, label: 'Pilotable', desc: 'BI dashboards KPIs', color: 'cyan' },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-4 border border-green-200 text-center">
              <item.icon className={`w-8 h-8 text-${item.color}-600 mx-auto mb-2`} />
              <p className="font-bold text-green-900 text-sm mb-1">{item.label}</p>
              <p className="text-green-700 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture proposée */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 text-white mb-8">
        <h2 className="text-3xl font-bold mb-6">Architecture Proposée</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">📱 Mobile App (Chefs Chantier)</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>• Commande simplifiée</li>
              <li>• Scan codes-barres</li>
              <li>• Tracking temps réel</li>
              <li>• Mode offline</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">💻 Web App (Gestionnaires)</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>• Validation workflows</li>
              <li>• Dashboards BI</li>
              <li>• Gestion stock</li>
              <li>• Rapports analytiques</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bénéfices attendus */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Bénéfices Attendus</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">🎯 Gains Opérationnels</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>-80% temps passé</strong> sur commandes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>-90% erreurs</strong> de commande</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Zéro ressaisie</strong> manuelle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Traçabilité 100%</strong> digitale</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-900 mb-4">⚡ Gains Stratégiques</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span><strong>Visibilité temps réel</strong> stocks et commandes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span><strong>Pilotage par KPIs</strong> (dashboards)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span><strong>Prévisions automatiques</strong> besoins</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span><strong>Optimisation tournées</strong> livraison</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Opportunités Data & IA */}
      <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-xl p-8 mb-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="w-8 h-8 text-indigo-600" />
          <h2 className="text-2xl font-bold text-indigo-900">Opportunités Data & IA</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border border-indigo-100">
            <h3 className="font-bold text-indigo-900 mb-2">1. Saisie Automatique (OCR)</h3>
            <p className="text-indigo-800 text-sm mb-3">
              L&apos;IA lit les PDFs (Rexel, Sonepar) et saisit les lignes automatiquement.
            </p>
            <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded text-xs inline-block font-semibold">
              Gain : Fin des erreurs de saisie
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-indigo-100">
            <h3 className="font-bold text-indigo-900 mb-2">2. Prédiction des Besoins</h3>
            <p className="text-indigo-800 text-sm mb-3">
              Analyse des chantiers à venir pour suggérer les commandes 2 semaines à l'avance.
            </p>
            <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded text-xs inline-block font-semibold">
              Gain : Fin des ruptures urgentes
            </div>
          </div>
        </div>
      </div>

      {/* Approche Progressive (Roadmap) */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Approche Progressive</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Phase 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-blue-500">
            <div className="bg-blue-50 p-4 border-b border-blue-100">
              <h3 className="font-bold text-blue-900">PHASE 1 : FONDATIONS</h3>
              <p className="text-xs text-blue-700 mt-1">Objectif : Système fonctionnel</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>Nettoyage Sage MDE</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>Catalogue unifié v1</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><strong>PILOTE 1-2 chantiers</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>Dashboards essentiels</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-orange-500">
            <div className="bg-orange-50 p-4 border-b border-orange-100">
              <h3 className="font-bold text-orange-900">PHASE 2 : AUTOMATISATION</h3>
              <p className="text-xs text-orange-700 mt-1">Objectif : Optimiser</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>APIs Rexel + Sonepar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>3-way matching auto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span><strong>GÉNÉRALISATION</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Scoring fournisseurs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-green-500">
            <div className="bg-green-50 p-4 border-b border-green-100">
              <h3 className="font-bold text-green-900">PHASE 3 : EXCELLENCE</h3>
              <p className="text-xs text-green-700 mt-1">Objectif : Auto-pilotage</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Auto-réapprovisionnement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Optimisation multi-objectifs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Classification IA avancée</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Risques & Prochaines étapes */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Risques */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            Risques à Maîtriser
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-800">Adoption utilisateurs</p>
              <p className="text-xs text-slate-500">Mitigation : Pilote intensif, formation, champions</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Migration données</p>
              <p className="text-xs text-slate-500">Mitigation : Nettoyage préalable, coexistence Sage</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">APIs fournisseurs</p>
              <p className="text-xs text-slate-500">Mitigation : Fallback Excel, cache, retry</p>
            </div>
          </div>
        </div>

        {/* Prochaines étapes */}
        <div className="bg-slate-900 rounded-xl shadow-sm p-6 text-white">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            Prochaines Étapes
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">1</div>
              <div>
                <p className="text-sm font-semibold">Validation Direction</p>
                <p className="text-xs text-slate-400">Valider approche progressive</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">2</div>
              <div>
                <p className="text-sm font-semibold">Étude Faisabilité</p>
                <p className="text-xs text-slate-400">Chiffrage précis & Planning</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">3</div>
              <div>
                <p className="text-sm font-semibold">Préparation Pilote</p>
                <p className="text-xs text-slate-400">Identifier 1-2 chantiers</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link href="/" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">
          ← Accueil
        </Link>
        <Link href="/services/chantiers" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">
          Chantiers →
        </Link>
      </div>
    </div>
  );
}
