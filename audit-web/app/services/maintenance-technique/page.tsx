import Link from 'next/link';
import { Tool, AlertTriangle, CheckCircle } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function MaintenanceTechniquePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative bg-gradient-to-r from-yellow-900 to-orange-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80" alt="Electrical maintenance" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="inline-block bg-yellow-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">Service Terrain</div>
          <h1 className="text-5xl font-bold mb-3">Maintenance Technique</h1>
          <p className="text-yellow-200 text-xl mb-6">Interventions, dépannage et SAV</p>
          <PDFDownloadButton pdfPath="/pdfs/service-maintenance-technique.pdf" fileName="Service_Maintenance_Technique.pdf" />
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-8 mb-8">
        <AlertTriangle className="w-10 h-10 text-amber-600 mb-4" />
        <h2 className="text-3xl font-bold text-amber-900 mb-4">Enjeux</h2>
        <p className="text-amber-800 text-lg">CERFA manuscrits, pas de devis terrain, pointage manuel, photos perdues, planning Excel.</p>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-8 mb-8">
        <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
        <h2 className="text-3xl font-bold text-green-900 mb-4">Solution</h2>
        <p className="text-green-800 text-lg">Odoo Field Service : bons digitaux, app mobile, pointage GPS, photos géolocalisées, e-signature.</p>
      </div>

      <div className="mt-12 flex justify-between border-t border-slate-300 pt-6">
        <Link href="/services/gestion-operationnelle" className="text-slate-600 hover:text-yellow-600 font-semibold">← Gestion Opérationnelle</Link>
        <Link href="/services/ressources-humaines" className="text-slate-600 hover:text-yellow-600 font-semibold">Ressources Humaines →</Link>
      </div>
    </div>
  );
}
