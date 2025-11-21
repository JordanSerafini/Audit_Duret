import Link from 'next/link';
import { FileText, Database, Users, TrendingUp, Package, ShoppingCart, CheckCircle, BarChart3 } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function LogicielsPage() {
  const logiciels = [
    {
      title: 'Odoo ERP',
      category: 'ERP',
      description: 'Solution ERP complète pour unifier tous les processus métier',
      icon: Database,
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      href: '/annexes/logiciels/odoo-erp',
      status: 'Recommandé',
      statusColor: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    },
    {
      title: 'Lucca SIRH',
      category: 'RH',
      description: 'Gestion des ressources humaines et paie',
      icon: Users,
      color: 'from-pink-600 to-rose-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      href: '/annexes/logiciels/lucca-sirh',
      status: 'Complémentaire',
      statusColor: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    },
    {
      title: 'Monday CRM',
      category: 'CRM',
      description: 'Gestion de la relation client et pipeline commercial',
      icon: TrendingUp,
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      href: '/annexes/logiciels/monday-crm',
      status: 'Alternative',
      statusColor: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    },
    {
      title: 'Power BI',
      category: 'BI & Analytics',
      description: 'Business Intelligence et tableaux de bord décisionnels',
      icon: BarChart3,
      color: 'from-yellow-600 to-orange-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      href: '/annexes/logiciels/power-bi',
      status: 'Recommandé',
      statusColor: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
    {
      title: 'EBP Bâtiment',
      category: 'ERP',
      description: 'Solution ERP spécialisée pour le secteur du bâtiment',
      icon: Package,
      color: 'from-teal-600 to-cyan-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      href: '/annexes/logiciels/ebp-batiment',
      status: 'Alternative',
      statusColor: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    },
    {
      title: 'HubSpot CRM',
      category: 'CRM',
      description: 'CRM et marketing automation tout-en-un',
      icon: ShoppingCart,
      color: 'from-orange-600 to-red-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      href: '/annexes/logiciels/hubspot-crm',
      status: 'Alternative',
      statusColor: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header avec gradient */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-8 text-white shadow-2xl mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg mb-4 text-sm font-semibold">
              Annexes Techniques
            </div>
            <h1 className="text-5xl font-bold mb-3">Solutions Logicielles</h1>
            <p className="text-slate-300 text-xl">
              Analyse comparative des solutions ERP, SIRH, CRM et BI pour Duret Électricité
            </p>
          </div>
          <FileText className="w-24 h-24 text-white/30" />
        </div>
        <div className="mt-6">
          <PDFDownloadButton
            pdfPath="/pdfs/annexes-logiciels.pdf"
            fileName="Annexes_Logiciels_Audit.pdf"
          />
        </div>
      </div>

      {/* Synthèse exécutive */}
      <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-8 mb-12 shadow-lg">
        <div className="flex items-start gap-4">
          <CheckCircle className="w-10 h-10 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl font-bold text-green-900 mb-4">Recommandation Principale</h2>
            <p className="text-green-800 text-lg leading-relaxed mb-4">
              L'audit confirme la pertinence du choix de la solution <strong>Odoo Enterprise</strong> pour accompagner
              la transformation digitale de Duret Électricité, sous réserve de la levée de trois conditions suspensives critiques.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="text-green-700 text-sm font-semibold mb-1">Validation Technique</p>
                <p className="text-slate-600 text-sm">POC Field Service (2 semaines)</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="text-green-700 text-sm font-semibold mb-1">Validation Budgétaire</p>
                <p className="text-slate-600 text-sm">Approbation CODIR après étude</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="text-green-700 text-sm font-semibold mb-1">Planification RFID</p>
                <p className="text-slate-600 text-sm">Report à 18 mois minimum</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparatif Odoo vs EBP */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Comparatif Odoo vs EBP</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-slate-700 font-semibold">Couverture fonctionnelle</span>
              <span className="text-green-600 font-bold">Odoo 100% > EBP 90%</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-slate-700 font-semibold">Évolutivité</span>
              <span className="text-green-600 font-bold">Odoo supérieur</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-slate-700 font-semibold">Data & BI</span>
              <span className="text-green-600 font-bold">Odoo supérieur</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-slate-700 font-semibold">Coût</span>
              <span className="text-green-600 font-bold">Odoo compétitif</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Verdict</h3>
            <p className="text-blue-800 leading-relaxed">
              Odoo maintient sa position de solution préférentielle grâce à sa couverture fonctionnelle complète,
              son évolutivité supérieure et ses capacités avancées en Business Intelligence. Le choix est justifié
              par la nécessité de modernisation et la préparation à l'IA.
            </p>
          </div>
        </div>
      </div>

      {/* Grille des logiciels */}
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Catalogue des Solutions Évaluées</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {logiciels.map((logiciel, index) => (
          <Link
            key={index}
            href={logiciel.href}
            className={`${logiciel.bgColor} border-2 ${logiciel.borderColor} rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1`}
          >
            {/* Image d'illustration */}
            <div className="h-40 overflow-hidden relative">
              <img
                src={logiciel.image}
                alt={logiciel.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className={`absolute top-3 right-3 ${logiciel.statusColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                {logiciel.status}
              </div>
            </div>

            {/* Contenu */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className={`bg-gradient-to-r ${logiciel.color} p-2 rounded-lg`}>
                  <logiciel.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">{logiciel.title}</h3>
                  <p className="text-sm text-slate-600">{logiciel.category}</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                {logiciel.description}
              </p>
              <div className="mt-4 flex items-center text-blue-600 text-sm font-semibold group-hover:text-blue-800">
                Voir les détails
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Section risques */}
      <div className="bg-gradient-to-r from-orange-900 to-red-900 rounded-2xl p-8 text-white mb-12">
        <h2 className="text-3xl font-bold mb-6">Gestion des Risques</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">🔒 Vendor Lock-in</h3>
            <p className="text-orange-100 mb-2">Dépendance hébergement Odoo.sh</p>
            <p className="text-orange-200 text-sm">
              <strong>Atténuation :</strong> Privilégier hébergement On-premise ou serveur dédié OVH
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">💼 Complexité Paie</h3>
            <p className="text-orange-100 mb-2">Intégration Odoo-PayFit délicate</p>
            <p className="text-orange-200 text-sm">
              <strong>Atténuation :</strong> POC Paie Blanche obligatoire avant bascule
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">📱 Field Service</h3>
            <p className="text-orange-100 mb-2">Formulaires CERFA complexes</p>
            <p className="text-orange-200 text-sm">
              <strong>Atténuation :</strong> POC 2 semaines pour validation terrain
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">🛡️ Cybersécurité</h3>
            <p className="text-orange-100 mb-2">Menaces Ransomware actuelles</p>
            <p className="text-orange-200 text-sm">
              <strong>Atténuation :</strong> Budget annuel sécurité (EDR + audits)
            </p>
          </div>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-slate-300 pt-6">
        <Link
          href="/services/finance-comptabilite"
          className="text-slate-600 hover:text-blue-600 font-semibold transition-colors"
        >
          ← Services
        </Link>
        <Link
          href="/annexes/apis"
          className="text-slate-600 hover:text-blue-600 font-semibold transition-colors"
        >
          APIs →
        </Link>
      </div>
    </div>
  );
}
