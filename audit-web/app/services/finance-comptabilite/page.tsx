import Link from 'next/link';
import { ArrowLeft, AlertTriangle, CheckCircle, TrendingUp, Database, Zap, Users, FileText, Clock, PieChart, ArrowRight, Calculator, Landmark, Target, Shield, Sparkles, DollarSign, BarChart3 } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';
import UMLDownloadButton from '@/components/UMLDownloadButton';
import CollapsibleUMLSection from '@/components/CollapsibleUMLSection';
import MarkdownViewer from '@/components/MarkdownViewer';
import { getServiceMarkdownFiles } from '@/config/markdownFiles';

export const metadata = {
  title: 'Finance & Comptabilité - Audit IT Duret',
  description: 'Service Finance & Comptabilité - Transformation vers pilotage stratégique temps réel',
};

export default function FinanceComptabilitePage() {
  const markdownFiles = getServiceMarkdownFiles('finance-comptabilite');

  const stats = [
    { label: "Délai Rentabilité", value: "1-2 mois", subtext: "Trop tard pour réagir", icon: Clock, color: "bg-red-500" },
    { label: "Temps Rapprochement", value: "8h/mois", subtext: "100% manuel", icon: FileText, color: "bg-orange-500" },
    { label: "Délai Facturation", value: "5-10j", subtext: "Impact trésorerie", icon: Calculator, color: "bg-amber-500" },
    { label: "ROI Solution", value: "<10 mois", subtext: "Retour garanti", icon: TrendingUp, color: "bg-green-500" },
  ];

  const crises = [
    {
      title: "Opacité Rentabilité",
      description: "Marges réelles connues 1-2 mois après les travaux. Direction pilote à l'aveugle.",
      impact: "Chantiers déficitaires détectés trop tard",
      icon: Target,
      color: "text-red-600",
      bgColor: "bg-red-50 border-red-200",
    },
    {
      title: "Double Saisie Clients",
      description: "Client créé dans CRM → RE-CRÉÉ manuellement dans Sage. 5-10 min perdues par client.",
      impact: "Erreurs, doublons, factures perdues",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-50 border-orange-200",
    },
    {
      title: "Facturation Lente",
      description: "Processus manuel : collecte papier → vérification → ressaisie Sage → envoi.",
      impact: "5-10 jours entre fin travaux et facturation",
      icon: FileText,
      color: "text-amber-600",
      bgColor: "bg-amber-50 border-amber-200",
    },
    {
      title: "Rapprochement Chronophage",
      description: "Pointage un par un des virements avec factures clients. Téléchargement → Import → Pointage ligne par ligne.",
      impact: "8h/mois sans valeur ajoutée",
      icon: Landmark,
      color: "text-red-600",
      bgColor: "bg-red-50 border-red-200",
    },
  ];

  const personas = [
    {
      name: 'Sylvie',
      role: 'Comptable',
      satisfaction: { before: '3/10', after: '9/10' },
      painPoints: [
        'Ressaisies multiples (87 min/facture)',
        'Rapprochement bancaire 8h/mois',
        'Saisie manuelle factures fournisseurs',
        'Pompier permanent sur litiges'
      ],
      gains: [
        'Gain -95% temps facturation (87 min → 4 min)',
        'Rapprochement en 1 clic avec IA',
        'OCR pré-remplit factures fournisseurs',
        'Focus sur analyse vs saisie'
      ],
      color: 'bg-purple-50 border-purple-200 text-purple-900',
      icon: Calculator
    },
    {
      name: 'Julien',
      role: 'Responsable d\'Affaires',
      satisfaction: { before: '2/10', after: '9/10' },
      painPoints: [
        'Découvre rentabilité 1-2 mois après fin chantier',
        'Impossible de voir en temps réel si dérape',
        'Pas de tableau de bord (extractions manuelles)',
        'Décisions à l\'aveugle, réaction impossible'
      ],
      gains: [
        'Dashboard rentabilité temps réel',
        'Alertes auto si dépassement budgétaire',
        'Visibilité Budget vs Réalisé instantanée',
        'Décisions correctives en cours de chantier'
      ],
      color: 'bg-blue-50 border-blue-200 text-blue-900',
      icon: BarChart3
    },
    {
      name: 'Christine',
      role: 'Direction',
      satisfaction: { before: '2/10', after: '10/10' },
      painPoints: [
        'Aucun tableau de bord temps réel',
        'Trésorerie manuelle Excel bricolée',
        'Données périmées, incomplètes',
        'Décisions retardées par manque visibilité'
      ],
      gains: [
        'Dashboard temps réel : CA, marges, trésorerie',
        'Prévisions automatiques fiables',
        'KPIs accessibles en 1 clic',
        'Décisions immédiates basées sur données fraîches'
      ],
      color: 'bg-emerald-50 border-emerald-200 text-emerald-900',
      icon: TrendingUp
    }
  ];

  const comparison = [
    { process: 'Rentabilité Chantier', before: '1-2 mois après', after: 'Temps Réel', gain: '-95% délai' },
    { process: 'Rapprochement Bancaire', before: '8h/mois manuel', after: '2.4h (IA 70%)', gain: '-70% temps' },
    { process: 'Double Saisie Clients', before: '100% ressaisie', after: '0% (Unique)', gain: '-100% erreurs' },
    { process: 'Délai Facturation', before: '5-10 jours', after: '< 48h Auto', gain: '-90% délai' },
    { process: 'Visibilité Trésorerie', before: 'J+30 (Excel)', after: 'J+1 (Auto)', gain: '-97% délai' },
  ];

  const roadmap = [
    {
      phase: 'Phase 1',
      duration: 'M1-M3',
      title: 'Fondations',
      color: 'border-blue-500',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700',
      items: [
        'Audit plan comptable Sage + nettoyage',
        'Validation expert-comptable (GO/NO-GO)',
        'Reprise à-nouveaux + données tiers',
        'Paramétrage Odoo comptabilité',
        'Formation équipe compta (2 jours)'
      ]
    },
    {
      phase: 'Phase 2',
      duration: 'M4-M5',
      title: 'Bascule Comptable',
      color: 'border-emerald-500',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-700',
      items: [
        'Bascule comptabilité générale Odoo',
        'Double-run Sage/Odoo (1 mois sécurité)',
        'Activation Bank Sync DSP2',
        'Facturation automatisée',
        'Connexion Chorus Pro (marchés publics)'
      ]
    },
    {
      phase: 'Phase 3',
      duration: 'M6-M9',
      title: 'Analytique & IA',
      color: 'border-purple-500',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700',
      items: [
        'Compta analytique temps réel par chantier',
        '3-way matching auto factures fournisseurs',
        'OCR factures (scan → saisie auto)',
        'Prévisions trésorerie automatisées',
        'ML : prédictions impayés, détection anomalies'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 rounded-3xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 p-8 text-white">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="inline-block bg-emerald-500/20 border border-emerald-400/30 px-4 py-1 rounded-full mb-3">
                <span className="text-emerald-300 text-sm font-bold">Service Transverse</span>
              </div>
              <h1 className="text-5xl font-bold mb-3">Finance & Comptabilité</h1>
              <p className="text-emerald-100 text-xl max-w-3xl">
                Transformation de silo technique vers outil de pilotage stratégique temps réel
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <PDFDownloadButton
              pdfPath="/pdfs/service-finance-comptabilite.pdf"
              fileName="Service_Finance_Comptabilite.pdf"
            />
            <UMLDownloadButton serviceKey="finance-comptabilite" />
          </div>
        </div>
      </div>

      {/* Stats Critiques */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-200 hover:shadow-2xl hover:border-emerald-400 transition-all group"
          >
            <div className={`${stat.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
              <stat.icon className="w-7 h-7 text-white" />
            </div>
            <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
            <p className="text-xs text-slate-500">{stat.subtext}</p>
          </div>
        ))}
      </div>

      {/* Paradoxe RAS */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-12 shadow-md">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-amber-900 mb-3">Le Paradoxe &quot;RAS&quot;</h2>
            <p className="text-amber-900 text-lg leading-relaxed">
              <strong>Sage Comptabilité fonctionne techniquement</strong> (bilans OK, TVA OK, aucune alerte).
              L&apos;équipe comptable maîtrise l&apos;outil. <strong className="text-red-700">MAIS</strong> cette stabilité apparente
              masque une <strong className="text-red-700">déconnexion critique</strong> : complète isolation des opérations métier.
              Résultat : <strong>direction pilote à l&apos;aveugle</strong>, rentabilité connue 1-2 mois trop tard, décisions retardées.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Crises Identifiées */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-9 h-9 text-red-600" />
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Les 4 Crises Critiques</h2>
            <p className="text-slate-600 text-sm">Problèmes bloquants identifiés dans la gestion financière</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {crises.map((crise, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 border-2 ${crise.bgColor} shadow-sm hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <crise.icon className={`w-6 h-6 ${crise.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{crise.title}</h3>
                  <p className="text-slate-700 text-sm mb-3 leading-relaxed">{crise.description}</p>
                  <div className="bg-white/60 rounded-lg px-3 py-2 border border-slate-200">
                    <p className="text-xs font-semibold text-slate-600">
                      Impact : <span className={crise.color}>{crise.impact}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transformation Avant/Après */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mb-12">
        <div className="p-6 bg-slate-50 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <ArrowRight className="w-6 h-6 text-emerald-600" />
            Transformation : Avant vs Après
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-600 uppercase font-bold">
              <tr>
                <th className="p-4">Processus</th>
                <th className="p-4 text-red-600">Situation Actuelle</th>
                <th className="p-4 text-green-600">Situation Cible</th>
                <th className="p-4 text-emerald-600">Gain</th>
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
                  <td className="p-4 text-emerald-700 font-bold bg-emerald-50/50">
                    {row.gain}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Impact Utilisateurs - Personas */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-9 h-9 text-slate-700" />
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Impact Utilisateurs (Personas)</h2>
            <p className="text-slate-600 text-sm">Transformation concrète pour chaque profil</p>
          </div>
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

              <div className="mb-4">
                <p className="font-semibold text-xs uppercase tracking-wide opacity-70 mb-2">Satisfaction :</p>
                <div className="flex items-center gap-2">
                  <span className="text-red-600 font-bold">{persona.satisfaction.before}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                  <span className="text-green-600 font-bold text-xl">{persona.satisfaction.after}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-xs uppercase tracking-wide opacity-70 mb-2">Pain Points :</p>
                  <ul className="space-y-2">
                    {persona.painPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs">
                        <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5 text-red-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-xs uppercase tracking-wide opacity-70 mb-2">Gains :</p>
                  <ul className="space-y-2">
                    {persona.gains.map((gain, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs">
                        <CheckCircle className="w-3 h-3 flex-shrink-0 mt-0.5 text-green-500" />
                        <span className="font-medium">{gain}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Cible */}
      <div className="bg-slate-900 rounded-2xl p-8 text-white mb-12 shadow-2xl">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Database className="w-8 h-8 text-emerald-400" />
          Architecture Cible : Odoo Comptabilité Intégré
        </h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-emerald-500/30 -translate-y-1/2 z-0"></div>

          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 transition-colors">
            <div className="bg-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-emerald-900/50">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Odoo Comptabilité</h3>
            <p className="text-slate-400 text-sm mb-4">Cœur du Système</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Plan Comptable Général FR</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Analytique Native Multi-Axes</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Export FEC Certifié</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> TVA & Déclarations Auto</li>
            </ul>
          </div>

          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-500 transition-colors transform md:-translate-y-4">
            <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-teal-900/50">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Bank Sync & OCR</h3>
            <p className="text-slate-400 text-sm mb-4">Automatisation Saisie</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Synchro Bancaire DSP2</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> OCR Factures Fournisseurs</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Lettrage IA (70% auto)</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> 3-way Matching Auto</li>
            </ul>
          </div>

          <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-900/50">
              <PieChart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Pilotage Temps Réel</h3>
            <p className="text-slate-400 text-sm mb-4">Décisionnel</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Dashboards Rentabilité</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Trésorerie Prévisionnelle</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Alertes Marge Chantier</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400"/> Détection Anomalies IA</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ROI & Gains */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <DollarSign className="w-9 h-9 text-emerald-600" />
          <div>
            <h2 className="text-3xl font-bold text-emerald-900">ROI & Gains Financiers</h2>
            <p className="text-slate-600 text-sm">Retour sur investissement démontré</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100">
            <h3 className="font-bold text-xl text-emerald-900 mb-4">Gains Annuels Estimés</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-slate-700">Temps équipe compta gagné</span>
                <span className="font-bold text-emerald-700">18k€/an</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-slate-700">Réduction chantiers déficitaires</span>
                <span className="font-bold text-emerald-700">30-50k€/an</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-slate-700">Amélioration trésorerie</span>
                <span className="font-bold text-emerald-700">10-15k€/an</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-slate-700">Réduction impayés (-20%)</span>
                <span className="font-bold text-emerald-700">5-10k€/an</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-slate-700">Facturation rapide</span>
                <span className="font-bold text-emerald-700">8-12k€/an</span>
              </div>
              <div className="flex justify-between items-center pt-2 bg-emerald-100 p-3 rounded-lg">
                <span className="font-bold text-emerald-900">TOTAL Gains annuels</span>
                <span className="font-bold text-2xl text-emerald-700">71-105k€</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100">
            <h3 className="font-bold text-xl text-emerald-900 mb-4">ROI Prévisionnel</h3>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm text-slate-600 mb-2">Investissement initial</p>
                <p className="text-3xl font-bold text-slate-900">~65k€</p>
                <p className="text-xs text-slate-500 mt-1">Licences + intégrateur + formation</p>
              </div>
              <div className="bg-emerald-100 p-4 rounded-lg">
                <p className="text-sm text-emerald-700 mb-2">ROI Année 1</p>
                <p className="text-3xl font-bold text-emerald-900">118%</p>
                <p className="text-xs text-emerald-700 mt-1">77k€ gains / 65k€ investissement</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-sm text-green-700 mb-2">Retour sur investissement</p>
                <p className="text-3xl font-bold text-green-900">&lt; 10 mois</p>
                <p className="text-xs text-green-700 mt-1">Retour garanti rapide</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Migration Sage → Odoo */}
      <div className="border-t border-slate-200 pt-12 mb-12">
        <div className="flex items-center gap-3 mb-8">
          <Clock className="w-9 h-9 text-slate-700" />
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Roadmap Migration Sage → Odoo</h2>
            <p className="text-slate-600 text-sm">Approche progressive sécurisée en 3 phases sur 9 mois</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {roadmap.map((item, index) => (
            <div key={index} className={`bg-white rounded-xl p-6 border-l-4 ${item.color} shadow-sm hover:shadow-lg transition-shadow`}>
              <span className={`inline-block ${item.bgColor} ${item.textColor} px-3 py-1 rounded-full text-xs font-bold uppercase mb-3`}>
                {item.phase} • {item.duration}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {item.items.map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg text-blue-900 mb-2">Approche Sécurisée</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                <strong>Validation expert-comptable = étape BLOQUANTE Phase 1.</strong> Double-run Sage/Odoo pendant 1 mois
                (Phase 2) pour garantir cohérence 100% avant bascule définitive. Migration complète recommandée
                (pas d&apos;hybride) pour éviter complexité interfaces et désynchronisations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Opportunités IA */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-9 h-9 text-purple-600" />
          <div>
            <h2 className="text-3xl font-bold text-purple-900">Opportunités IA/ML (Phase 3)</h2>
            <p className="text-slate-600 text-sm">Intelligence artificielle au service de la comptabilité</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
            <h3 className="font-bold text-lg text-purple-900 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-500" />
              OCR Factures Fournisseurs
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              Scan PDF → Extraction données automatique → Pré-remplissage écritures comptables.
            </p>
            <p className="text-sm"><strong className="text-purple-700">Gain :</strong> 7 min → 1 min par facture (-86%)</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
            <h3 className="font-bold text-lg text-purple-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-500" />
              Prédiction Impayés Clients
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              Scoring clients basé historique paiements. Alertes préventives et recommandations (relance, provision).
            </p>
            <p className="text-sm"><strong className="text-purple-700">Gain :</strong> Réduction impayés -20%</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
            <h3 className="font-bold text-lg text-purple-900 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-500" />
              Détection Anomalies
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              Scan automatique écritures : écarts prix inhabituels, doublons factures, incohérences TVA.
            </p>
            <p className="text-sm"><strong className="text-purple-700">Gain :</strong> Audit continu, réduction risques fiscaux</p>
          </div>
        </div>
      </div>

      {/* Diagrammes UML */}
      <CollapsibleUMLSection serviceKey="finance-comptabilite" serviceLabel="Finance & Comptabilité" />
      {/* Documents Markdown */}
      <div className="mt-8">
        <MarkdownViewer
          files={markdownFiles}
          title="Documents Sources - Finance Comptabilite"
          defaultExpanded={false}
        />
      </div>



      {/* Footer navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link href="/services/direction-affaires" className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Direction Affaires
        </Link>
        <Link href="/services/ressources-humaines" className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 font-semibold transition-colors">
          Ressources Humaines
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
