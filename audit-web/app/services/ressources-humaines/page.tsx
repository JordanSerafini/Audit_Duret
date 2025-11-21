import Link from 'next/link';
import { Users, AlertTriangle, CheckCircle } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function RessourcesHumainesPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative bg-gradient-to-r from-pink-900 to-rose-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80" alt="Team meeting" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="inline-block bg-pink-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">Service Support</div>
          <h1 className="text-5xl font-bold mb-3">Ressources Humaines</h1>
          <p className="text-pink-200 text-xl mb-6">Gestion RH, paie et recrutement</p>
          <PDFDownloadButton pdfPath="/pdfs/service-ressources-humaines.pdf" fileName="Service_Ressources_Humaines.pdf" />
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-8 mb-8">
        <AlertTriangle className="w-10 h-10 text-amber-600 mb-4" />
        <h2 className="text-3xl font-bold text-amber-900 mb-4">Enjeux</h2>
        <p className="text-amber-800 text-lg">Paie externalisée (Lucca/PayFit), congés papier, recrutement manuel, pas de portail collaborateur.</p>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-8 mb-8">
        <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
        <h2 className="text-3xl font-bold text-green-900 mb-4">Solution</h2>
        <p className="text-green-800 text-lg">Odoo RH + intégration PayFit/Lucca : congés digitaux, notes de frais, recrutement, portail self-service.</p>
      </div>

      <div className="mt-12 flex justify-between border-t border-slate-300 pt-6">
        <Link href="/services/maintenance-technique" className="text-slate-600 hover:text-pink-600 font-semibold">← Maintenance Technique</Link>
        <Link href="/services/service-client" className="text-slate-600 hover:text-pink-600 font-semibold">Service Client →</Link>
      </div>
    </div>
  );
}
