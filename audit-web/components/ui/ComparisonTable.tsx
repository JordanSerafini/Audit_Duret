import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

interface ComparisonRow {
  process: string;
  before: string;
  after: string;
  gain: string;
}

interface ComparisonTableProps {
  data: ComparisonRow[];
}

export default function ComparisonTable({ data }: ComparisonTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <ArrowRight className="w-6 h-6 text-blue-600" />
          Transformation : Du Manuel au Digital
        </h2>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-600 uppercase font-bold">
            <tr>
              <th className="p-4">Processus</th>
              <th className="p-4 text-red-600">Situation Actuelle (Manuel)</th>
              <th className="p-4 text-green-600">Situation Cible (Digital)</th>
              <th className="p-4 text-blue-600">Gain Mesurable</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-semibold text-slate-900">{row.process}</td>
                <td className="p-4 text-slate-600">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    {row.before}
                  </div>
                </td>
                <td className="p-4 text-slate-900 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {row.after}
                  </div>
                </td>
                <td className="p-4 text-blue-700 font-bold bg-blue-50/50">
                  {row.gain}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden divide-y divide-slate-200">
        {data.map((row, index) => (
          <div key={index} className="p-4 hover:bg-slate-50 transition-colors">
            <h3 className="font-bold text-slate-900 mb-3 text-base">{row.process}</h3>

            <div className="space-y-3">
              {/* Before */}
              <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                <div className="text-xs font-bold text-red-700 uppercase mb-1 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  Actuel (Manuel)
                </div>
                <div className="text-sm text-slate-900">{row.before}</div>
              </div>

              {/* After */}
              <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                <div className="text-xs font-bold text-green-700 uppercase mb-1 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Cible (Digital)
                </div>
                <div className="text-sm text-slate-900 font-medium">{row.after}</div>
              </div>

              {/* Gain */}
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <div className="text-xs font-bold text-blue-700 uppercase mb-1">Gain Mesurable</div>
                <div className="text-base text-blue-900 font-bold">{row.gain}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
