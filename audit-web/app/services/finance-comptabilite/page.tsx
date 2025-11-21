import { promises as fs } from 'fs';
import path from 'path';
import MarkdownContent from '@/components/MarkdownContent';
import PDFDownloadButton from '@/components/PDFDownloadButton';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Finance & Comptabilité - Audit IT Duret',
  description: 'Service Finance & Comptabilité - Transformation de la comptabilité',
};

export default async function FinanceComptabilitePage() {
  // Lire le contenu du fichier compta.md
  const filePath = path.join(process.cwd(), '..', 'compta.md');
  const content = await fs.readFile(filePath, 'utf-8');

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Finance & Comptabilité
            </h1>
            <p className="text-slate-600 text-lg">
              Transformation de la comptabilité de silo technique vers outil de pilotage temps réel
            </p>
          </div>

          <PDFDownloadButton
            pdfPath="/pdfs/finance-comptabilite.pdf"
            fileName="Service_Finance_Comptabilite.pdf"
          />
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
        <MarkdownContent content={content} />
      </div>

      {/* Footer navigation */}
      <div className="mt-8 flex justify-between">
        <Link
          href="/services/service-client"
          className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
        >
          ← Service Client
        </Link>
        <Link
          href="/annexes/logiciels"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Annexes →
        </Link>
      </div>
    </div>
  );
}
