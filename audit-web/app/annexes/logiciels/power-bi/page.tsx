import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PowerBIPage() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <Link href="/annexes/logiciels" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour aux Solutions Logicielles
      </Link>

      <h1 className="text-4xl font-bold mb-4">Power BI</h1>
      <p className="text-slate-600">Page en construction</p>
    </div>
  );
}
