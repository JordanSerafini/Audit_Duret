import Link from 'next/link';
import { AlertTriangle, TrendingUp, Database, Zap, Users, Clock } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';
import UMLDownloadButton from '@/components/UMLDownloadButton';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import PersonaCard from '@/components/ui/PersonaCard';
import ProblemCard from '@/components/ui/ProblemCard';
import OpportunityCard from '@/components/ui/OpportunityCard';
import ComparisonTable from '@/components/ui/ComparisonTable';
import KpiCard from '@/components/ui/KpiCard';
import ArchitectureSection from '@/components/sections/ArchitectureSection';
import { personas, comparison, problems, opportunities, kpis, heroStats, criticalStats } from '@/data/achats-logistique';

export const metadata = {
  title: 'Achats & Logistique - Audit IT Duret',
  description: 'Service Achats & Logistique - Transformation E-Procurement',
};

export default function AchatsLogistiquePage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Services', href: '/services' },
          { label: 'Achats & Logistique', href: '/services/achats-logistique' }
        ]}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 p-8 text-white backdrop-blur-[2px]">
          <div className="inline-block bg-blue-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">
            Service Opérationnel
          </div>
          <h1 className="text-5xl font-bold mb-3">Achats & Logistique</h1>
          <p className="text-slate-100 text-xl mb-6 max-w-3xl">
            De la <strong>gestion manuelle</strong> à une <strong>plateforme e-procurement intelligente</strong> et connectée.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            {heroStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <span className={`block text-2xl font-bold ${stat.color === 'red' ? 'text-red-400' : 'text-green-400'}`}>
                  {stat.value}
                </span>
                <span className="text-xs text-slate-100">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <PDFDownloadButton
              pdfPath="/pdfs/service-achats-logistique.pdf"
              fileName="Service_Achats_Logistique.pdf"
            />
            <UMLDownloadButton serviceKey="achats-logistique" />
          </div>
        </div>
      </div>

      {/* Contexte - Alerte */}
      <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-6 mb-8 shadow-md">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-red-900 mb-3">Constat Critique : 50% Commandes Incomplètes</h2>
            <p className="text-red-900 text-lg mb-4">
              <strong>Faits constatés :</strong> Seulement 50% des commandes arrivent complètes. Processus 100% manuel (téléphone, papier, Excel).
              Sage MDE jugé &quot;calamiteux&quot; avec doublons et même produit à 2 prix différents.
              <strong> Impact :</strong> Chantiers régulièrement bloqués, 6 ressaisies par commande, 3 jours de délai moyen.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              {criticalStats.map((stat, index) => (
                <div key={index} className="bg-white/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-red-700">{stat.value}</div>
                  <div className="text-xs text-red-800">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Problèmes Majeurs Identifiés */}
      <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 text-red-600" />
          7 Problèmes Critiques Identifiés
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              title={problem.title}
              description={problem.description}
              severity={problem.severity}
            />
          ))}
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
            <PersonaCard
              key={index}
              name={persona.name}
              role={persona.role}
              painPoints={persona.painPoints}
              color={persona.color}
              icon={persona.icon}
            />
          ))}
        </div>
      </div>

      {/* Avant / Après Comparison */}
      <div className="mb-12">
        <ComparisonTable data={comparison} />
      </div>

      {/* Solution Architecture */}
      <div className="mb-12">
        <ArchitectureSection />
      </div>

      {/* Data & AI Opportunities */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-blue-900">5 Opportunités Data & Machine Learning</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity, index) => (
            <OpportunityCard
              key={index}
              title={opportunity.title}
              description={opportunity.description}
              gain={opportunity.gain}
              Icon={opportunity.Icon}
              color={opportunity.color}
            />
          ))}
        </div>
        <div className="mt-6 bg-blue-900 text-white p-5 rounded-xl">
          <div className="flex items-start gap-3">
            <Database className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold mb-2">Architecture Data Complète</h4>
              <p className="text-sm text-blue-100">
                Data Lake (S3/MinIO) → Data Warehouse (PostgreSQL) → BI Dashboards (Metabase) + ML Models (TensorFlow/PyTorch).
                Pipeline ETL quotidiens avec Airflow. Monitoring 24/7 avec Prometheus/Grafana.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* KPIs Cibles */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-green-600" />
          Objectifs de Performance
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi, index) => (
            <KpiCard
              key={index}
              label={kpi.label}
              current={kpi.current}
              target={kpi.target}
            />
          ))}
        </div>
      </div>

      {/* Roadmap */}
      <div className="border-t border-slate-200 pt-12 mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Clock className="w-8 h-8 text-slate-700" />
          Roadmap de Déploiement (18 Mois)
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Phase 1 (M1-M6)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Fondations</h3>
            <p className="text-sm text-slate-600 mb-3">Nettoyage Données, Catalogue Unifié, Pilote 1-2 Chantiers.</p>
            <div className="text-xs text-slate-500 space-y-1">
              <div>• Setup infrastructure & nettoyage Sage MDE</div>
              <div>• Workflow digital v1 & Web app MVP</div>
              <div>• Mobile app v1 & pilote terrain</div>
              <div>• Data Lake & Dashboards essentiels</div>
            </div>
          </div>
          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Phase 2 (M7-M12)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Automatisation</h3>
            <p className="text-sm text-slate-600 mb-3">APIs Fournisseurs, 3-way Matching, ML v1, Généralisation.</p>
            <div className="text-xs text-slate-500 space-y-1">
              <div>• APIs Rexel/Sonepar (catalogues, EDI)</div>
              <div>• 3-way matching automatique</div>
              <div>• ML v1: Prévisions & Détection anomalies</div>
              <div>• Généralisation tous chantiers</div>
            </div>
          </div>
          <div className="border-l-4 border-indigo-500 pl-6 py-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Phase 3 (M13-M18)</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Excellence</h3>
            <p className="text-sm text-slate-600 mb-3">Auto-réapprovisionnement, ML Avancé, Optimisation Continue.</p>
            <div className="text-xs text-slate-500 space-y-1">
              <div>• Auto-réapprovisionnement intelligent</div>
              <div>• ML avancé: NLP classification articles</div>
              <div>• Optimisation multi-objectifs</div>
              <div>• Features innovantes (RA, vocal)</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center mb-12 shadow-xl">
        <h3 className="text-2xl font-bold mb-3">Prêt pour la Transformation Digitale ?</h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Passez de 50% à &gt;95% de commandes complètes. Réduisez vos délais de 3 jours à &lt;2 heures.
          Automatisez 80% de vos processus achats.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <PDFDownloadButton
            pdfPath="/pdfs/service-achats-logistique.pdf"
            fileName="Service_Achats_Logistique.pdf"
          />
          <Link
            href="/services"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Voir tous les services
          </Link>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="flex justify-between items-center border-t border-slate-300 pt-6">
        <Link href="/services/service-client" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">
          ← Service Client
        </Link>
        <Link href="/services/chantiers" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">
          Chantiers →
        </Link>
      </div>
    </div>
  );
}
