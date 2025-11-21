import Link from 'next/link';
import { AlertTriangle, CheckCircle, Users, MessageSquare, PhoneCall, Clock, RefreshCw, Smartphone, LayoutDashboard } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';
import UMLDownloadButton from '@/components/UMLDownloadButton';

export const metadata = {
  title: 'Service Client - Audit IT Duret',
  description: 'Service Client - Transformation digitale de la relation client',
};

export default function ServiceClientPage() {
  const personas = [
    {
      name: 'Claire',
      role: 'Assistante Relation Client',
      painPoints: [
        'Système post-it - risque d\'oubli élevé',
        'Prise de RDV longue et complexe',
        'Double saisie ERP + SAGE',
        '~50 mails/jour à traiter manuellement'
      ],
      color: 'bg-red-50 border-red-200 text-red-900',
      icon: Users
    },
    {
      name: 'Gaëtan',
      role: 'Technicien Maintenance',
      painPoints: [
        'CERFA papier chronophage',
        'Pas de devis terrain possible',
        'Photos perdues',
        'Planning Excel non synchronisé'
      ],
      color: 'bg-orange-50 border-orange-200 text-orange-900',
      icon: PhoneCall
    },
    {
      name: 'Client',
      role: 'Particuliers & Entreprises',
      painPoints: [
        'Attente excessive pour confirmation RDV',
        'Pas de portail self-service',
        'Relances manuelles peu fréquentes',
        'Image "pas organisés"'
      ],
      color: 'bg-slate-50 border-slate-200 text-slate-900',
      icon: MessageSquare
    }
  ];

  const comparison = [
    { process: 'Système de Suivi', before: 'Post-it (risque oubli)', after: 'CRM + Ticketing Digital', gain: 'Traçabilité 100%' },
    { process: 'Prise de RDV', before: 'Excel + Mails + Attente', after: 'Calendrier Partagé Temps Réel', gain: 'Confirmation Immédiate' },
    { process: 'Gestion Clients', before: 'Double Saisie ERP/SAGE', after: 'Base Unique Synchronisée', gain: 'Cohérence Garantie' },
    { process: 'Demandes Techniciens', before: 'Non Tracées (Post-it)', after: 'Formulaire App Mobile', gain: 'Opportunités Captées' },
    { process: 'Satisfaction Client', before: 'Envoi Manuel Irrégulier', after: 'Automatisation J+2', gain: 'Pilotage Continu' }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-800 to-cyan-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
            alt="Service Client"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="inline-block bg-teal-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">
            Service Critique
          </div>
          <h1 className="text-5xl font-bold mb-3">Service Client</h1>
          <p className="text-teal-100 text-xl mb-6 max-w-3xl">
            Du <strong>système post-it chaotique</strong> vers un <strong>CRM digital moderne</strong> avec traçabilité complète.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-red-400">~50</span>
              <span className="text-xs text-teal-200">Appels/Jour</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-red-400">~50</span>
              <span className="text-xs text-teal-200">Mails/Jour</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="block text-2xl font-bold text-red-400">Post-it</span>
              <span className="text-xs text-teal-200">Système Actuel</span>
            </div>
          </div>

          <PDFDownloadButton
            pdfPath="/pdfs/service-service-client.pdf"
            fileName="Service_Client.pdf"
          />
        </div>
      </div>

      {/* Contexte - Alerte */}
      <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-6 mb-8 shadow-md">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-red-900 mb-3">Urgence : Système Post-it Non Tenable</h2>
            <p className="text-red-900 text-lg mb-4">
              Le système actuel repose sur des <strong>post-it</strong> pour noter les demandes clients, avec un risque d&apos;oubli élevé.
              Double saisie ERP/SAGE, planning RDV archaïque (Excel + mails), et aucune traçabilité des demandes techniciens.
              <strong> Opportunités commerciales perdues et image client dégradée.</strong>
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg border border-red-200">
                <p className="text-2xl font-bold text-red-700">~100k€</p>
                <p className="text-xs text-red-600">Clients perdus/an (10 clients × 10k€)</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-red-200">
                <p className="text-2xl font-bold text-red-700">~41k€</p>
                <p className="text-xs text-red-600">Temps perdu prise RDV/an (825h)</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-red-200">
                <p className="text-2xl font-bold text-red-700">48h</p>
                <p className="text-xs text-red-600">Délai confirmation RDV (vs 2min cible)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* État des Lieux - Personas */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-8 h-8 text-slate-700" />
          <h2 className="text-3xl font-bold text-slate-900">Impact Humain (Personas)</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((persona, index) => (
            <div key={index} className={`rounded-xl p-6 border-2 ${persona.color} shadow-sm`}>
              <div className="flex items-center gap-4 mb-4 border-b border-black/10 pb-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <persona.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{persona.name}</h3>
                  <p className="text-xs opacity-80">{persona.role}</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-xs uppercase tracking-wide opacity-70">Points de Douleur :</p>
                <ul className="space-y-2">
                  {persona.painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-1 text-red-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Avant / Après Comparison */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mb-12">
        <div className="p-6 bg-slate-50 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <RefreshCw className="w-6 h-6 text-teal-600" />
            Transformation : Du Chaos à l&apos;Ordre
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-600 uppercase font-bold">
              <tr>
                <th className="p-4">Processus</th>
                <th className="p-4 text-red-600">Situation Actuelle (Chaos)</th>
                <th className="p-4 text-green-600">Situation Cible (Ordre)</th>
                <th className="p-4 text-teal-600">Gain Mesurable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {comparison.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">{row.process}</td>
                  <td className="p-4 text-slate-600">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      {row.before}
                    </div>
                  </td>
                  <td className="p-4 text-slate-900 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {row.after}
                    </div>
                  </td>
                  <td className="p-4 text-teal-700 font-bold bg-teal-50/50">
                    {row.gain}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Solution Architecture */}
      <div className="bg-slate-900 rounded-2xl p-8 text-white mb-12 shadow-2xl">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <LayoutDashboard className="w-8 h-8 text-teal-400" />
          Architecture CRM Cible (Odoo/HubSpot)
        </h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-teal-500/30 -translate-y-1/2 z-0"></div>

          {/* Block 1: CRM Central */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-500 transition-colors">
            <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-teal-900/50">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. CRM Central</h3>
            <p className="text-slate-400 text-sm mb-4">Fin du Post-it</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Ticketing Digital</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Historique 360° Client</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Base Unique (vs ERP+SAGE)</li>
            </ul>
          </div>

          {/* Block 2: Automatisation */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-colors transform md:-translate-y-4">
            <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-purple-900/50">
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Automatisation</h3>
            <p className="text-slate-400 text-sm mb-4">Relances & Alertes</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Rappels RDV Auto</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Questionnaire J+2</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Templates Mails</li>
            </ul>
          </div>

          {/* Block 3: Portail & Mobile */}
          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-900/50">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Digital Terrain</h3>
            <p className="text-slate-400 text-sm mb-4">App Mobile Techniciens</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Bon Intervention Digital</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Devis Terrain</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Portail Client Self-Service</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gains Attendus & ROI */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-6">Gains Attendus & ROI</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-bold text-green-900 mb-4">💰 Gains Temps (Quantifiés)</h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-slate-900 mb-1">Prise RDV</p>
                <p className="text-sm text-slate-600 mb-1">Actuel : 15min/RDV → Cible : 2min/RDV</p>
                <p className="text-lg font-bold text-green-700">Gain : 825h/an = 41k€</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-slate-900 mb-1">Double saisie SAGE/ERP</p>
                <p className="text-sm text-slate-600 mb-1">30min/jour → Élimination</p>
                <p className="text-lg font-bold text-green-700">Gain : 110h/an = 5,5k€</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-slate-900 mb-1">Recherche info client</p>
                <p className="text-sm text-slate-600 mb-1">30min/jour → Accès instantané</p>
                <p className="text-lg font-bold text-green-700">Gain : 110h/an = 5,5k€</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-900 mb-4">📈 Gains Qualité & CA</h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-slate-900 mb-1">Clients perdus (oublis)</p>
                <p className="text-sm text-slate-600 mb-1">10 clients/an × 10k€ CA moyen</p>
                <p className="text-lg font-bold text-green-700">Gain : 100k€/an</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-slate-900 mb-1">Opportunités techniciens</p>
                <p className="text-sm text-slate-600 mb-1">Demandes terrain tracées et exploitées</p>
                <p className="text-lg font-bold text-green-700">Gain estimé : 20-30k€/an</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-slate-900 mb-1">Image & Satisfaction</p>
                <p className="text-sm text-slate-600 mb-1">Professionnalisme, différenciation BTP</p>
                <p className="text-lg font-bold text-green-700">Fidélisation clients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-700 text-white rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm mb-1">Total Gains Estimés/An</p>
              <p className="text-4xl font-bold">172k€+</p>
              <p className="text-xs text-green-200 mt-1">Hypothèses conservatrices à valider</p>
            </div>
            <div className="text-right">
              <p className="text-green-100 text-sm mb-1">Investissement 18 Mois</p>
              <p className="text-3xl font-bold">À chiffrer</p>
              <p className="text-xs text-green-200 mt-1">Phase pilote recommandée</p>
            </div>
          </div>
        </div>
      </div>

      {/* Opportunités Data & IA */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <LayoutDashboard className="w-8 h-8 text-teal-600" />
          <h2 className="text-3xl font-bold text-teal-900">Opportunités Data & IA (Phase 3)</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100">
            <h3 className="font-bold text-lg text-teal-900 mb-3 flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-teal-500" />
              CTI - Remontée Fiche Automatique
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              Intégration téléphonie-CRM : remontée automatique de la fiche client au moment de l&apos;appel entrant.
            </p>
            <p className="text-sm font-semibold text-teal-700">
              Gain : Contexte immédiat, économie 2-3min/appel (×50 appels = 110h/an)
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100">
            <h3 className="font-bold text-lg text-teal-900 mb-3 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-teal-500" />
              Analyse Sentiment (NLP)
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              Analyse automatique des emails et transcriptions d&apos;appels pour détecter les clients mécontents avant qu&apos;ils ne partent.
            </p>
            <p className="text-sm font-semibold text-teal-700">
              Gain : Intervention proactive, réduction churn client -20%
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100">
            <h3 className="font-bold text-lg text-teal-900 mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-teal-500" />
              Segmentation Intelligente
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              Clustering automatique des clients (Bailleurs pressés, Particuliers exigeants, Syndics récurrents) pour adapter la communication.
            </p>
            <p className="text-sm font-semibold text-teal-700">
              Gain : Campagnes ciblées, augmentation panier moyen +15%
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100">
            <h3 className="font-bold text-lg text-teal-900 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-teal-500" />
              Prédiction Maintenance
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              Algorithme prédictif sur historique interventions pour anticiper les besoins de maintenance avant panne.
            </p>
            <p className="text-sm font-semibold text-teal-700">
              Gain : Interventions proactives, satisfaction client, ventes additionnelles
            </p>
          </div>
        </div>
      </div>

      {/* KPIs de Succès */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">KPIs de Succès à Suivre</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-blue-900 mb-4">Phase 1 (M3)</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <p className="text-xs text-blue-700 font-semibold">Traçabilité appels</p>
                <p className="text-lg font-bold text-blue-900">0% → 100%</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <p className="text-xs text-blue-700 font-semibold">Post-it/jour</p>
                <p className="text-lg font-bold text-blue-900">~50 → 0</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <p className="text-xs text-blue-700 font-semibold">Temps prise RDV</p>
                <p className="text-lg font-bold text-blue-900">15min → 5min</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-purple-900 mb-4">Phase 2 (M6)</h3>
            <div className="space-y-3">
              <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                <p className="text-xs text-purple-700 font-semibold">Satisfaction client (NPS)</p>
                <p className="text-lg font-bold text-purple-900">Actuel → +20pts</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                <p className="text-xs text-purple-700 font-semibold">RDV pris en ligne</p>
                <p className="text-lg font-bold text-purple-900">0% → 30%</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                <p className="text-xs text-purple-700 font-semibold">Clients perdus/an</p>
                <p className="text-lg font-bold text-purple-900">10 → 2</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-green-900 mb-4">Phase 3 (M12-18)</h3>
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <p className="text-xs text-green-700 font-semibold">Temps admin Claire</p>
                <p className="text-lg font-bold text-green-900">-40%</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <p className="text-xs text-green-700 font-semibold">Opportunités captées</p>
                <p className="text-lg font-bold text-green-900">+50%</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <p className="text-xs text-green-700 font-semibold">Appels entrants</p>
                <p className="text-lg font-bold text-green-900">-25%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="border-t border-slate-200 pt-12 mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Clock className="w-8 h-8 text-slate-700" />
          Roadmap de Déploiement (18 Mois)
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-l-4 border-teal-500 pl-6 py-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Phase 1 (M1-M3)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Quick Wins</h3>
            <p className="text-sm text-slate-600 mb-3">CRM (HubSpot gratuit ou Odoo), Templates Mails, Planning Partagé, Questionnaire Auto.</p>
            <div className="text-xs text-teal-700 font-semibold">
              ✓ Fin post-it<br/>
              ✓ Traçabilité 100%<br/>
              ✓ Gains temps immédiat
            </div>
          </div>
          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Phase 2 (M4-M6)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Intégrations</h3>
            <p className="text-sm text-slate-600 mb-3">CTI Téléphonie, Sync SAGE ↔ CRM, Portail Client Basique, GED.</p>
            <div className="text-xs text-purple-700 font-semibold">
              ✓ Remontée fiche auto<br/>
              ✓ Fin double saisie<br/>
              ✓ RDV en ligne 24/7
            </div>
          </div>
          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Phase 3 (M7-M18)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Excellence</h3>
            <p className="text-sm text-slate-600 mb-3">App Mobile Techniciens, Workflows Avancés, Chatbot, Analytics, IA.</p>
            <div className="text-xs text-blue-700 font-semibold">
              ✓ Opportunités captées<br/>
              ✓ CERFA digitalisé<br/>
              ✓ Analyse prédictive
            </div>
          </div>
        </div>
      </div>

      {/* Prochaines Étapes */}
      <div className="bg-gradient-to-r from-teal-700 to-cyan-700 rounded-2xl p-8 text-white mb-12">
        <h2 className="text-3xl font-bold mb-4">🚀 Prochaines Étapes Immédiates</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="font-bold mb-2">Semaine 1-2</p>
            <p className="text-sm text-teal-100">Test HubSpot gratuit (ou Odoo CRM), import 50 contacts pilotes, feedback Claire</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="font-bold mb-2">Semaine 3-4</p>
            <p className="text-sm text-teal-100">POC validation, mesure gains temps réels, décision GO/NO-GO</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="font-bold mb-2">Mois 3</p>
            <p className="text-sm text-teal-100">Go-live Phase 1, CRM opérationnel, formation complète équipe</p>
          </div>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link href="/services/ressources-humaines" className="text-slate-600 hover:text-teal-600 font-semibold transition-colors">
          ← Ressources Humaines
        </Link>
        <Link href="/services/finance-comptabilite" className="text-slate-600 hover:text-teal-600 font-semibold transition-colors">
          Finance & Comptabilité →
        </Link>
      </div>
    </div>
  );
}
