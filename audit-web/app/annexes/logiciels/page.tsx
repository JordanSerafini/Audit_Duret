import Link from 'next/link';
import { FileText, Database, Users, TrendingUp, Package, ShoppingCart, CheckCircle, BarChart3, Smartphone, Euro, Zap, Shield } from 'lucide-react';
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
      price: '24,90€/user/mois',
      coverage: '100%',
      highlights: ['Field Service natif', 'Open Source', 'Modulaire']
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
      price: '~100€/user/mois',
      coverage: '88%',
      highlights: ['Spécialisé BTP', 'Interface Tarifeo', 'Support français']
    },
    {
      title: 'HubSpot CRM',
      category: 'CRM',
      description: 'CRM et service client avec UX exceptionnelle',
      icon: ShoppingCart,
      color: 'from-orange-600 to-red-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      href: '/annexes/logiciels/hubspot-crm',
      status: 'Alternative',
      statusColor: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
      price: '0€ (Free) → 90€/user',
      coverage: '30%',
      highlights: ['UX excellente', 'Support 24/7', 'Version gratuite']
    },
    {
      title: 'Lucca SIRH',
      category: 'RH',
      description: 'Gestion des ressources humaines et congés',
      icon: Users,
      color: 'from-pink-600 to-rose-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      href: '/annexes/logiciels/lucca-sirh',
      status: 'Complémentaire',
      statusColor: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      price: '12,10€/user/mois',
      coverage: 'SIRH uniquement',
      highlights: ['Meilleur SIRH français', 'Support 97%', 'Interface moderne']
    },
    {
      title: 'PayFit',
      category: 'Paie & SIRH',
      description: 'Solution de paie automatisée et gestion RH',
      icon: Euro,
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      href: '/annexes/logiciels/payfit',
      status: 'Complémentaire',
      statusColor: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
      price: '17€/salarié/mois',
      coverage: 'Paie + SIRH basique',
      highlights: ['Paie automatisée', 'DSN', 'Interface simple']
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
      price: '9,99€/user/mois',
      coverage: 'BI uniquement',
      highlights: ['Visualisations avancées', 'Intégration Microsoft', 'IA prédictive']
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

      {/* Scénarios d'implémentation */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">3 Scénarios d'Implémentation</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Scénario 1 */}
          <div className="border-2 border-green-300 rounded-xl p-6 bg-green-50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-green-900">Scénario 1</h3>
              <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">Recommandé</span>
            </div>
            <h4 className="font-semibold text-green-800 mb-2">Odoo Tout-en-Un</h4>
            <p className="text-sm text-green-700 mb-4">Solution unique intégrée avec tous les modules nécessaires</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-green-900">Couverture 100%</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-green-900">Simplicité maximale</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-green-900">Data Lake unique</span>
              </div>
            </div>
            <div className="border-t border-green-300 pt-4">
              <p className="text-2xl font-bold text-green-900">190k€</p>
              <p className="text-xs text-green-700">sur 3 ans (100 users)</p>
            </div>
          </div>

          {/* Scénario 2 */}
          <div className="border-2 border-orange-300 rounded-xl p-6 bg-orange-50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-orange-900">Scénario 2</h3>
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">Alternative</span>
            </div>
            <h4 className="font-semibold text-orange-800 mb-2">EBP + Compléments</h4>
            <p className="text-sm text-orange-700 mb-4">Solutions spécialisées best-of-breed par domaine</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm">
                <Package className="w-4 h-4 text-orange-600 mr-2" />
                <span className="text-orange-900">Spécialisation BTP</span>
              </div>
              <div className="flex items-center text-sm">
                <Users className="w-4 h-4 text-orange-600 mr-2" />
                <span className="text-orange-900">Support français</span>
              </div>
              <div className="flex items-center text-sm">
                <Shield className="w-4 h-4 text-orange-600 mr-2" />
                <span className="text-orange-900">5 solutions à gérer</span>
              </div>
            </div>
            <div className="border-t border-orange-300 pt-4">
              <p className="text-2xl font-bold text-orange-900">295k€</p>
              <p className="text-xs text-orange-700">sur 3 ans (+55%)</p>
            </div>
          </div>

          {/* Scénario 3 */}
          <div className="border-2 border-purple-300 rounded-xl p-6 bg-purple-50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-purple-900">Scénario 3</h3>
              <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">Premium</span>
            </div>
            <h4 className="font-semibold text-purple-800 mb-2">Hybride Best-of-Breed</h4>
            <p className="text-sm text-purple-700 mb-4">Odoo + HubSpot + Apps custom + Lucca</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm">
                <Smartphone className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-purple-900">Apps sur-mesure</span>
              </div>
              <div className="flex items-center text-sm">
                <Zap className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-purple-900">UX excellente</span>
              </div>
              <div className="flex items-center text-sm">
                <TrendingUp className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-purple-900">Complexité élevée</span>
              </div>
            </div>
            <div className="border-t border-purple-300 pt-4">
              <p className="text-2xl font-bold text-purple-900">396k€</p>
              <p className="text-xs text-purple-700">sur 3 ans (+108%)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparatif Odoo vs EBP */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Comparatif Détaillé ERP</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Critère</th>
                <th className="text-center py-3 px-4 font-semibold text-blue-700">Odoo ERP</th>
                <th className="text-center py-3 px-4 font-semibold text-teal-700">EBP Bâtiment</th>
                <th className="text-center py-3 px-4 font-semibold text-orange-700">HubSpot CRM</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-3 px-4 font-medium">Prix/user/mois</td>
                <td className="py-3 px-4 text-center text-green-600 font-bold">24,90€</td>
                <td className="py-3 px-4 text-center">~100€</td>
                <td className="py-3 px-4 text-center">0€ → 90€</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="py-3 px-4 font-medium">Couverture besoins</td>
                <td className="py-3 px-4 text-center text-green-600 font-bold">100%</td>
                <td className="py-3 px-4 text-center">88%</td>
                <td className="py-3 px-4 text-center">30%</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-3 px-4 font-medium">Field Service</td>
                <td className="py-3 px-4 text-center">✅ Natif complet</td>
                <td className="py-3 px-4 text-center">⚠️ Basique</td>
                <td className="py-3 px-4 text-center">❌ Absent</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="py-3 px-4 font-medium">Spécialisation BTP</td>
                <td className="py-3 px-4 text-center">⚠️ Généraliste</td>
                <td className="py-3 px-4 text-center text-green-600">✅ Expert</td>
                <td className="py-3 px-4 text-center">❌ Non</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-3 px-4 font-medium">RFID Stocks</td>
                <td className="py-3 px-4 text-center text-green-600">✅ Oui</td>
                <td className="py-3 px-4 text-center">❌ Non</td>
                <td className="py-3 px-4 text-center">❌ N/A</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="py-3 px-4 font-medium">Open Source</td>
                <td className="py-3 px-4 text-center text-green-600">✅ Oui</td>
                <td className="py-3 px-4 text-center">❌ Propriétaire</td>
                <td className="py-3 px-4 text-center">❌ Propriétaire</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-3 px-4 font-medium">Scalabilité</td>
                <td className="py-3 px-4 text-center text-green-600">5-5000+ users</td>
                <td className="py-3 px-4 text-center">Max 20 users</td>
                <td className="py-3 px-4 text-center">Illimitée</td>
              </tr>
              <tr className="bg-green-50 font-bold">
                <td className="py-3 px-4">Coût 3 ans (100 users)</td>
                <td className="py-3 px-4 text-center text-green-700">190k€</td>
                <td className="py-3 px-4 text-center text-orange-600">295k€</td>
                <td className="py-3 px-4 text-center text-orange-600">167k€ (+ ERP)</td>
              </tr>
            </tbody>
          </table>
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
