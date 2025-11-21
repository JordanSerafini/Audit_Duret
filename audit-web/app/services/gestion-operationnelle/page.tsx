import Link from 'next/link';
import { BarChart3, AlertTriangle, CheckCircle } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export default function GestionOperationnellePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative bg-gradient-to-r from-cyan-900 to-blue-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt="Business analytics" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 p-8 text-white">
          <div className="inline-block bg-cyan-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">Service Transverse</div>
          <h1 className="text-5xl font-bold mb-3">Gestion Opérationnelle</h1>
          <p className="text-cyan-200 text-xl mb-6">Pilotage, KPIs et Business Intelligence</p>
          <PDFDownloadButton pdfPath="/pdfs/service-gestion-operationnelle.pdf" fileName="Service_Gestion_Operationnelle.pdf" />
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-8 mb-8">
        <AlertTriangle className="w-10 h-10 text-amber-600 mb-4" />
        <h2 className="text-3xl font-bold text-amber-900 mb-4">Enjeux</h2>
        <p className="text-amber-800 text-lg">"Tout Excel, tout perso". KPIs manuels, pas de compta analytique, remontée info trop tardive.</p>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-8 mb-8">
        <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
        <h2 className="text-3xl font-bold text-green-900 mb-4">Solution</h2>
        <p className="text-green-800 text-lg">Odoo BI + Compta analytique : dashboards temps réel, KPIs automatisés, transparence par rôle.</p>
      </div>

      <div className="mt-12 flex justify-between border-t border-slate-300 pt-6">
        <Link href="/services/direction-affaires" className="text-slate-600 hover:text-cyan-600 font-semibold">← Direction Affaires</Link>
        <Link href="/services/maintenance-technique" className="text-slate-600 hover:text-cyan-600 font-semibold">Maintenance Technique →</Link>
      </div>
    </div>
  );
}
