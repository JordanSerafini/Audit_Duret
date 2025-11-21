import Link from 'next/link';
import { Database, CheckCircle, AlertTriangle, TrendingUp, Users, Package, DollarSign, Smartphone, BarChart3, Zap } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function OdooERPPage() {
  const modules = [
    { name: 'CRM et Ventes', icon: TrendingUp, color: 'text-blue-600' },
    { name: 'Gestion Projets', icon: BarChart3, color: 'text-purple-600' },
    { name: 'Field Service', icon: Smartphone, color: 'text-green-600' },
    { name: 'Stocks et Achats', icon: Package, color: 'text-orange-600' },
    { name: 'Comptabilité', icon: DollarSign, color: 'text-emerald-600' },
    { name: 'Ressources Humaines', icon: Users, color: 'text-pink-600' },
    { name: 'BI et Analytics', icon: BarChart3, color: 'text-indigo-600' },
    { name: 'Automatisation', icon: Zap, color: 'text-yellow-600' },
  ];

  const problemsSolved = [
    {
      service: 'Service Client',
      problems: [
        { issue: 'Système post-it', solution: 'Tickets digitaux, traçabilité 100%' },
        { issue: 'Pas de suivi appels', solution: 'Historique appels, notes centralisées' },
        { issue: '~50 mails/jour non structurés', solution: 'Création tickets auto depuis emails' },
        { issue: 'Double base clients (ERP+SAGE)', solution: 'Une seule base centralisée' },
        { issue: 'Planning chronophage', solution: 'Planning partagé, prise RDV auto' },
      ],
      color: 'border-teal-300 bg-teal-50',
    },
    {
      service: 'Maintenance Technique',
      problems: [
        { issue: 'CERFA remplis à la main', solution: 'Bons intervention digitaux' },
        { issue: 'Génération devis live impossible', solution: 'Catalogue produits mobile' },
        { issue: 'Pointage manuel', solution: 'Pointage géolocalisé automatique' },
        { issue: 'Photos avant/après manquantes', solution: 'Photos mobiles géolocalisées' },
        { issue: 'Planning Excel', solution: 'Planning collaboratif temps réel' },
      ],
      color: 'border-orange-300 bg-orange-50',
    },
    {
      service: 'Direction Affaires',
      problems: [
        { issue: 'Accès distance très lent', solution: 'Cloud Odoo performant partout' },
        { issue: 'ERP obsolète, plantages', solution: 'Stable, rapide, UI/UX moderne' },
        { issue: 'MAJ prix fournisseurs manuelle', solution: 'APIs fournisseurs, import auto' },
        { issue: 'Pas de copie devis', solution: 'Duplication devis 1 clic' },
      ],
      color: 'border-purple-300 bg-purple-50',
    },
    {
      service: 'Gestion Opérationnelle',
      problems: [
        { issue: 'Tout Excel, tout perso', solution: 'Fin Excel, données centralisées' },
        { issue: 'KPI manuels Excel', solution: 'Dashboards temps réel automatisés' },
        { issue: 'Compta analytique inexistante', solution: 'Analytique par chantier/projet' },
        { issue: 'Remontée info trop longue', solution: 'BI temps réel immédiat' },
      ],
      color: 'border-cyan-300 bg-cyan-50',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Hero avec image */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
            alt="Odoo ERP"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="inline-block bg-green-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">
                ✓ RECOMMANDÉ
              </div>
              <h1 className="text-5xl font-bold mb-3">Odoo ERP</h1>
              <p className="text-blue-200 text-xl mb-2">
                Solution tout-en-un pour PME - Open Source
              </p>
              <div className="flex items-center gap-6 text-blue-100 text-sm">
                <span>🇧🇪 Odoo S.A. (Belgique)</span>
                <span>👥 7M+ utilisateurs</span>
                <span>📦 Version 18 (2025)</span>
              </div>
            </div>
            <Database className="w-24 h-24 text-white/40" />
          </div>
          <PDFDownloadButton
            pdfPath="/pdfs/logiciel-odoo-erp.pdf"
            fileName="Odoo_ERP_Audit.pdf"
          />
        </div>
      </div>

      {/* Présentation */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Présentation</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Odoo est un ERP open source modulaire couvrant tous les besoins d'une entreprise : CRM, Ventes, Achats,
          Stocks, Fabrication, Comptabilité, RH, Marketing, Site web, etc. Avec plus de 7 millions d'utilisateurs
          dans le monde, Odoo est reconnu pour sa <strong>flexibilité</strong>, son <strong>approche progressive</strong> et
          son excellent <strong>rapport qualité-prix</strong>.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-blue-900 font-semibold text-sm mb-1">Cible</p>
            <p className="text-blue-700 text-sm">PME et ETI (5-500+ salariés)</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <p className="text-purple-900 font-semibold text-sm mb-1">Spécialisation</p>
            <p className="text-purple-700 text-sm">Généraliste multi-secteurs</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <p className="text-green-900 font-semibold text-sm mb-1">Modèle</p>
            <p className="text-green-700 text-sm">Open Source + Enterprise</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <p className="text-orange-900 font-semibold text-sm mb-1">Force</p>
            <p className="text-orange-700 text-sm">Modularité progressive</p>
          </div>
        </div>
      </div>

      {/* Modules clés */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Modules Clés</h2>
        <div className="grid md:grid-cols-4 gap-4">
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

      {/* Nouveautés 2025 */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-10 h-10 text-blue-600" />
          <h2 className="text-3xl font-bold text-blue-900">Nouveautés 2025 (Odoo 18)</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-blue-200">
            <h3 className="font-bold text-blue-900 mb-3">🆕 Field Service Amélioré</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">▸</span>
                <span>Groupement tâches géographique (par code postal)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">▸</span>
                <span>Affectation par compétences techniciens</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">▸</span>
                <span>Liste matériel à emporter via bouton smart</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">▸</span>
                <span>Tracking GPS automatique, optimisation tournées</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-blue-200">
            <h3 className="font-bold text-blue-900 mb-3">🆕 Autres Améliorations</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">▸</span>
                <span>Mobile-first : Interface optimisée terrain</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">▸</span>
                <span>Package Électriciens : Templates spécialisés</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">▸</span>
                <span>IA générative : Emails, descriptions auto</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">▸</span>
                <span>Rapprochement bancaire IA amélioré</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tarifs */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Tarifs 2025</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Community */}
          <div className="border-2 border-slate-300 rounded-xl p-6 bg-slate-50">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Community</h3>
            <p className="text-4xl font-bold text-slate-900 mb-4">0€</p>
            <p className="text-slate-600 text-sm mb-4">Open Source Gratuit</p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Tous modules de base</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Utilisateurs illimités</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                <span>Pas de Field Service</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                <span>Support communauté uniquement</span>
              </li>
            </ul>
          </div>

          {/* Enterprise Standard */}
          <div className="border-2 border-green-500 rounded-xl p-6 bg-gradient-to-br from-green-50 to-emerald-50 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold">
              RECOMMANDÉ
            </div>
            <h3 className="text-2xl font-bold text-green-900 mb-2">Enterprise</h3>
            <p className="text-4xl font-bold text-green-900 mb-1">24,90€</p>
            <p className="text-green-700 text-sm mb-1">/utilisateur/mois</p>
            <p className="text-xs text-green-600 font-semibold mb-4">19,90€ la 1ère année (promo)</p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Tous modules Enterprise</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Field Service complet</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Support email + chat</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Mises à jour incluses</span>
              </li>
            </ul>
          </div>

          {/* Custom */}
          <div className="border-2 border-purple-300 rounded-xl p-6 bg-purple-50">
            <h3 className="text-2xl font-bold text-purple-900 mb-2">Custom</h3>
            <p className="text-4xl font-bold text-purple-900 mb-1">37,40€</p>
            <p className="text-purple-700 text-sm mb-1">/utilisateur/mois</p>
            <p className="text-xs text-purple-600 font-semibold mb-4">29,90€ la 1ère année (promo)</p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                <span>Tout Enterprise +</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                <span>Personnalisations avancées</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                <span>Support prioritaire</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                <span>Développements sur-mesure</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-900 text-sm">
            <strong>Odoo.sh (Hébergement managé) :</strong> +10€/user/mois optionnel - Cloud sécurisé, backups auto, mises à jour gérées
          </p>
        </div>
      </div>

      {/* Problèmes résolus */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Problèmes Résolus chez Duret Électricité</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {problemsSolved.map((section, index) => (
            <div key={index} className={`border-2 ${section.color} rounded-xl p-6`}>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                {section.service}
              </h3>
              <div className="space-y-3">
                {section.problems.map((problem, pIndex) => (
                  <div key={pIndex} className="bg-white rounded-lg p-3 border border-slate-200">
                    <p className="text-red-700 text-sm font-semibold mb-1">❌ {problem.issue}</p>
                    <p className="text-green-700 text-sm flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{problem.solution}</span>
                    </p>
                  </div>
                ))}
              </div>
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
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span><strong>Couverture fonctionnelle 100%</strong> des besoins Duret</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span><strong>Modularité :</strong> Démarrer simple, enrichir progressivement</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span><strong>Open Source :</strong> Pas de vendor lock-in, communauté active</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span><strong>Field Service adapté électricité</strong> (Package métier)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span><strong>ROI rapide :</strong> Gains productivité dès 6 mois</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span><strong>Data & BI natif :</strong> Préparation à l'IA</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-orange-900 mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8" />
            Points de Vigilance
          </h2>
          <ul className="space-y-3 text-orange-800">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 text-xl">⚠</span>
              <span><strong>POC Field Service obligatoire</strong> (formulaires CERFA)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 text-xl">⚠</span>
              <span><strong>Intégration PayFit/Lucca</strong> nécessite validation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 text-xl">⚠</span>
              <span><strong>Conduite du changement critique</strong> (formation utilisateurs)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 text-xl">⚠</span>
              <span><strong>Hébergement Odoo.sh :</strong> Préférer On-premise/OVH</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 text-xl">⚠</span>
              <span><strong>RFID non natif :</strong> Modules tiers ou dev custom</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Recommandation finale */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white mb-8">
        <h2 className="text-3xl font-bold mb-4">Recommandation Finale</h2>
        <p className="text-green-100 text-lg leading-relaxed mb-6">
          Odoo Enterprise est la solution <strong>la plus adaptée</strong> aux ambitions de transformation digitale de Duret Électricité.
          La solution couvre 100% des besoins identifiés avec un excellent rapport qualité-prix. Le Field Service (Odoo 18) répond
          parfaitement aux contraintes métier de l'électricité.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-green-200 text-sm font-semibold mb-1">Validation Technique</p>
            <p className="text-white font-bold">POC Field Service 2 semaines</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-green-200 text-sm font-semibold mb-1">Validation Budgétaire</p>
            <p className="text-white font-bold">Approbation CODIR requise</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-green-200 text-sm font-semibold mb-1">Déploiement</p>
            <p className="text-white font-bold">Phase 1-3 sur 24 mois</p>
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
          href="/annexes/logiciels/lucca-sirh"
          className="text-slate-600 hover:text-blue-600 font-semibold transition-colors"
        >
          Lucca SIRH →
        </Link>
      </div>
    </div>
  );
}
