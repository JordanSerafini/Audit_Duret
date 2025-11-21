interface KpiCardProps {
  label: string;
  current: string;
  target: string;
}

export default function KpiCard({ label, current, target }: KpiCardProps) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-green-100 hover:shadow-md hover:scale-[1.02] transition-all duration-200">
      <div className="text-sm text-slate-600 mb-2">{label}</div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-red-600">{current}</span>
        <span className="text-slate-400">→</span>
        <span className="text-3xl font-bold text-green-600">{target}</span>
      </div>
    </div>
  );
}
