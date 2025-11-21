'use client';

import { Download } from 'lucide-react';

interface PDFDownloadButtonProps {
  pdfPath: string;
  fileName: string;
}

export default function PDFDownloadButton({ pdfPath, fileName }: PDFDownloadButtonProps) {
  return (
    <a
      href={pdfPath}
      download={fileName}
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
    >
      <Download className="w-5 h-5" />
      <span className="font-semibold">Télécharger PDF</span>
    </a>
  );
}
