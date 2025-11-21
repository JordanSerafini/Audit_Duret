import Link from 'next/link';
import { ArrowLeft, FileCheck, Building2, Euro, CheckCircle, AlertTriangle, Clock, Shield } from 'lucide-react';

export default function ChorusProPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <Link href="/annexes/apis" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux APIs & Intégrations
        </Link>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl mb-8">
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-block bg-red-500 px-4 py-2 rounded-lg mb-4">
              <span className="text-sm font-semibold">Priorité 1 - Obligatoire</span>
            </div>
            <h1 className="text-5xl font-bold mb-3">Chorus Pro</h1>
            <p className="text-blue-100 text-xl mb-6">
              Plateforme de facturation électronique obligatoire pour les marchés publics
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold">🏛️ État Français</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold">API REST</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold">Gratuit</span>
              </div>
            </div>
          </div>
          <FileCheck className="w-32 h-32 text-white/30" />
        </div>
      </div>

      {/* Métriques clés */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
          <AlertTriangle className="w-8 h-8 text-red-600 mb-3" />
          <p className="text-sm text-red-700 font-semibold mb-1">Statut</p>
          <p className="text-3xl font-bold text-red-900">Obligatoire</p>
          <p className="text-xs text-red-600">secteur public</p>
        </div>
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
          <Euro className="w-8 h-8 text-green-600 mb-3" />
          <p className="text-sm text-green-700 font-semibold mb-1">Coût</p>
          <p className="text-3xl font-bold text-green-900">Gratuit</p>
          <p className="text-xs text-green-600">API publique</p>
        </div>
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
          <Clock className="w-8 h-8 text-blue-600 mb-3" />
          <p className="text-sm text-blue-700 font-semibold mb-1">Délai</p>
          <p className="text-3xl font-bold text-blue-900">3-6 mois</p>
          <p className="text-xs text-blue-600">implémentation</p>
        </div>
        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
          <Shield className="w-8 h-8 text-purple-600 mb-3" />
          <p className="text-sm text-purple-700 font-semibold mb-1">Sécurité</p>
          <p className="text-3xl font-bold text-purple-900">Élevée</p>
          <p className="text-xs text-purple-600">Standard ANSSI</p>
        </div>
      </div>

      {/* Contexte réglementaire */}
      <div className="bg-orange-50 border-l-4 border-orange-500 rounded-xl p-8 mb-12 shadow-lg">
        <div className="flex items-start gap-4">
          <Building2 className="w-10 h-10 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl font-bold text-orange-900 mb-4">Contexte Réglementaire</h2>
            <p className="text-orange-800 text-lg leading-relaxed mb-4">
              Depuis janvier 2020, <strong>toutes les entreprises travaillant avec le secteur public</strong> doivent
              obligatoirement transmettre leurs factures via la plateforme Chorus Pro. Cette obligation concerne
              Duret Électricité pour tous ses marchés publics.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <p className="text-orange-700 text-sm font-semibold mb-1">Sanction en cas de non-conformité</p>
                <p className="text-slate-700 text-sm">Rejet automatique des factures</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <p className="text-orange-700 text-sm font-semibold mb-1">Impact financier</p>
                <p className="text-slate-700 text-sm">Retards de paiement majeurs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fonctionnalités */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Fonctionnalités Chorus Pro</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="font-bold text-blue-900 mb-3 text-lg">✅ Fonctions Principales</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                <span><strong>Dépôt factures</strong> : Transmission électronique automatisée</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                <span><strong>Suivi statut</strong> : Traçabilité complète du cycle de vie</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                <span><strong>Pièces justificatives</strong> : Attachement documents</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                <span><strong>Format UBL</strong> : Standard européen e-invoicing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                <span><strong>Accords cadres</strong> : Gestion marchés à bon de commande</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                <span><strong>SIRET auto</strong> : Pré-remplissage données entités publiques</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
            <h3 className="font-bold text-orange-900 mb-3 text-lg">⚠️ Points de Vigilance</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 mt-1" />
                <span><strong>Complexité API</strong> : Courbe d'apprentissage importante</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 mt-1" />
                <span><strong>Test nécessaire</strong> : Environnement de qualification obligatoire</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 mt-1" />
                <span><strong>Certificat RGS**</strong> : Signature électronique conforme</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 mt-1" />
                <span><strong>Format strict</strong> : Rejet si erreur dans XML/UBL</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 mt-1" />
                <span><strong>Pas de modification</strong> : Facture immuable après dépôt</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 mt-1" />
                <span><strong>Évolutions fréquentes</strong> : Mises à jour API régulières</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bénéfices attendus */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-green-900 mb-6">Bénéfices pour Duret</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-green-200">
            <h3 className="text-xl font-bold text-green-900 mb-3">🎯 Gains Opérationnels</h3>
            <ul className="space-y-2 text-green-800 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Suppression saisie manuelle portail Chorus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Réduction erreurs de transmission (-80%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Gain de temps comptabilité (2-3h/semaine)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Suivi temps réel statut factures</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-green-200">
            <h3 className="text-xl font-bold text-green-900 mb-3">⚡ Gains Financiers</h3>
            <ul className="space-y-2 text-green-800 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Accélération des paiements (J+10 en moyenne)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Réduction litiges et rejets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Meilleure trésorerie prévisionnelle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Conformité réglementaire garantie</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Plan d'implémentation */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-8 text-white mb-12">
        <h2 className="text-3xl font-bold mb-6">Plan d'Implémentation (6 mois)</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
              Préparation
            </h3>
            <p className="text-slate-300 text-sm mb-4">Mois 1-2</p>
            <ul className="space-y-2 text-slate-200 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">▸</span>
                <span>Inscription Chorus Pro</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">▸</span>
                <span>Obtention certificat RGS**</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">▸</span>
                <span>Documentation technique ERP</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
              Développement
            </h3>
            <p className="text-slate-300 text-sm mb-4">Mois 3-4</p>
            <ul className="space-y-2 text-slate-200 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">▸</span>
                <span>Intégration API Chorus Pro</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">▸</span>
                <span>Tests environnement qualif</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">▸</span>
                <span>Mapping données ERP → UBL</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
              Déploiement
            </h3>
            <p className="text-slate-300 text-sm mb-4">Mois 5-6</p>
            <ul className="space-y-2 text-slate-200 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">▸</span>
                <span>Mise en production progressive</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">▸</span>
                <span>Formation équipes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">▸</span>
                <span>Migration backlog factures</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link href="/annexes/apis" className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors">
          ← Toutes les APIs
        </Link>
        <Link href="/annexes/apis/sage" className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors">
          Sage API →
        </Link>
      </div>
    </div>
  );
}
