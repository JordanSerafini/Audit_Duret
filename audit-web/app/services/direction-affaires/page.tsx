import Link from 'next/link';
import { Briefcase, AlertTriangle, CheckCircle } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function DirectionAffairesPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80" alt="Business meeting" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="inline-block bg-purple-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">Service Commercial</div>
          <h1 className="text-5xl font-bold mb-3">Direction des Affaires</h1>
          <p className="text-purple-200 text-xl mb-6">Chiffrage, devis et gestion commerciale</p>
          <PDFDownloadButton pdfPath="/pdfs/service-direction-affaires.pdf" fileName="Service_Direction_Affaires.pdf" />
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-8 mb-8">
        <AlertTriangle className="w-10 h-10 text-amber-600 mb-4" />
        <h2 className="text-3xl font-bold text-amber-900 mb-4">Enjeux</h2>
        <p className="text-amber-800 text-lg">ERP obsolète et lent, processus devis chronophage, pas de templates, accès distance impossible.</p>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-8 mb-8">
        <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
        <h2 className="text-3xl font-bold text-green-900 mb-4">Solution</h2>
        <p className="text-green-800 text-lg">Odoo Ventes + CRM : génération rapide devis, templates, accès cloud, intégration fournisseurs.</p>
      </div>

      <div className="mt-12 flex justify-between border-t border-slate-300 pt-6">
        <Link href="/services/chantiers" className="text-slate-600 hover:text-purple-600 font-semibold">← Chantiers</Link>
        <Link href="/services/gestion-operationnelle" className="text-slate-600 hover:text-purple-600 font-semibold">Gestion Opérationnelle →</Link>
      </div>
    </div>
  );
}
