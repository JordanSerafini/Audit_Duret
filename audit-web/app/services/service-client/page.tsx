import Link from 'next/link';
import { AlertTriangle, CheckCircle, Users, MessageSquare, PhoneCall, Clock, RefreshCw, Smartphone, LayoutDashboard } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

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

      {/* Opportunités Data & IA */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <LayoutDashboard className="w-8 h-8 text-teal-600" />
          <h2 className="text-3xl font-bold text-teal-900">Opportunités Data & Automatisation</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100">
            <h3 className="font-bold text-lg text-teal-900 mb-3 flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-teal-500" />
              CTI - Remontée Fiche Automatique
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Intégration téléphonie-CRM : remontée automatique de la fiche client au moment de l&apos;appel entrant.
              <br/><br/>
              <strong>Gain :</strong> Contexte immédiat, traçabilité complète des appels.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100">
            <h3 className="font-bold text-lg text-teal-900 mb-3 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-teal-500" />
              Analyse Sentiment (NLP)
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Analyse automatique des emails et transcriptions d&apos;appels pour détecter les clients mécontents avant qu&apos;ils ne partent.
              <br/><br/>
              <strong>Gain :</strong> Intervention proactive, réduction du churn client.
            </p>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="border-t border-slate-200 pt-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Clock className="w-8 h-8 text-slate-700" />
          Roadmap de Déploiement (18 Mois)
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-l-4 border-teal-500 pl-6 py-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Phase 1 (M1-M3)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Quick Wins</h3>
            <p className="text-sm text-slate-600">CRM (HubSpot gratuit), Templates Mails, Planning Partagé, Questionnaire Auto.</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Phase 2 (M4-M6)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Intégrations</h3>
            <p className="text-sm text-slate-600">CTI Téléphonie, Sync SAGE ↔ CRM, Portail Client Basique.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Phase 3 (M7-M18)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Excellence</h3>
            <p className="text-sm text-slate-600">App Mobile Techniciens, Workflows Avancés, Chatbot, Analytics.</p>
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
