import Link from 'next/link';
import { Wrench, AlertTriangle, CheckCircle } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function ChantiersPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative bg-gradient-to-r from-orange-900 to-red-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80" alt="Construction site" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="inline-block bg-orange-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">Service Opérationnel</div>
          <h1 className="text-5xl font-bold mb-3">Chantiers</h1>
          <p className="text-orange-200 text-xl mb-6">Gestion de projet et coordination terrain</p>
          <PDFDownloadButton pdfPath="/pdfs/service-chantiers.pdf" fileName="Service_Chantiers.pdf" />
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-8 mb-8">
        <AlertTriangle className="w-10 h-10 text-amber-600 mb-4" />
        <h2 className="text-3xl font-bold text-amber-900 mb-4">Enjeux</h2>
        <p className="text-amber-800 text-lg">Coordination complexe entre BE, chantiers, fournisseurs et sous-traitants. Besoin de traçabilité et pilotage temps réel.</p>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-8 mb-8">
        <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
        <h2 className="text-3xl font-bold text-green-900 mb-4">Solution</h2>
        <p className="text-green-800 text-lg">Module Odoo Projet + Field Service pour planning, suivi heures, marges et collaboration.</p>
      </div>

      <div className="mt-12 flex justify-between border-t border-slate-300 pt-6">
        <Link href="/services/achats-logistique" className="text-slate-600 hover:text-orange-600 font-semibold">← Achats-Logistique</Link>
        <Link href="/services/direction-affaires" className="text-slate-600 hover:text-orange-600 font-semibold">Direction Affaires →</Link>
      </div>
    </div>
  );
}
