import Link from 'next/link';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import PDFDownloadButton from '@/components/PDFDownloadButton';

export const metadata = {
  title: 'Service Client - Audit IT Duret',
  description: 'Service Client - Gestion des demandes et tickets',
};

export default function ServiceClientPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-800 to-cyan-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="relative z-10 p-8 text-white">
          <div className="inline-block bg-teal-500 px-4 py-2 rounded-lg mb-4 text-sm font-bold">
            Service Essentiel
          </div>
          <h1 className="text-5xl font-bold mb-3">Service Client</h1>
          <p className="text-teal-100 text-xl mb-6 max-w-3xl">
            Transformation de la gestion client vers un système structuré et traçable.
          </p>

          <PDFDownloadButton
            pdfPath="/pdfs/service-service-client.pdf"
            fileName="Service_Client.pdf"
          />
        </div>
      </div>

      {/* Enjeux */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-8 mb-8">
        <AlertTriangle className="w-10 h-10 text-amber-600 mb-4" />
        <h2 className="text-3xl font-bold text-amber-900 mb-4">Enjeux</h2>
        <p className="text-amber-800 text-lg">Système post-it, ~50 mails/jour non structurés, double base clients, pas de suivi appels, relances manuelles.</p>
      </div>

      {/* Solution */}
      <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-8 mb-8">
        <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
        <h2 className="text-3xl font-bold text-green-900 mb-4">Solution</h2>
        <p className="text-green-800 text-lg">Odoo CRM + Helpdesk : tickets digitaux, historique 360°, base unique, relances auto, portail client.</p>
      </div>

      {/* Footer navigation */}
      <div className="mt-12 flex justify-between border-t border-slate-300 pt-6">
        <Link href="/services/ressources-humaines" className="text-slate-600 hover:text-teal-600 font-semibold">← Ressources Humaines</Link>
        <Link href="/services/finance-comptabilite" className="text-slate-600 hover:text-teal-600 font-semibold">Finance & Comptabilité →</Link>
      </div>
    </div>
  );
}
