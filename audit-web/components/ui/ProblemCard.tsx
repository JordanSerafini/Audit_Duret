interface ProblemCardProps {
  title: string;
  description: string;
  severity: 'critical' | 'important' | 'moderate';
}

const severityConfig = {
  critical: {
    border: 'border-red-500',
    badge: 'bg-red-500',
    badgeText: 'text-white',
    label: '🔴 Critique',
    ring: 'ring-red-100'
  },
  important: {
    border: 'border-orange-500',
    badge: 'bg-orange-500',
    badgeText: 'text-white',
    label: '🟠 Important',
    ring: 'ring-orange-100'
  },
  moderate: {
    border: 'border-yellow-500',
    badge: 'bg-yellow-500',
    badgeText: 'text-white',
    label: '🟡 Modéré',
    ring: 'ring-yellow-100'
  }
};

export default function ProblemCard({ title, description, severity }: ProblemCardProps) {
  const config = severityConfig[severity];

  return (
    <div className={`relative bg-white p-5 rounded-xl shadow-sm border-l-4 ${config.border} hover:shadow-md hover:scale-[1.01] transition-all duration-200 group`}>
      {/* Severity Badge */}
      <div className={`absolute top-3 right-3 ${config.badge} ${config.badgeText} text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wide shadow-sm`}>
        {config.label}
      </div>

      {/* Title */}
      <h3 className="font-bold text-slate-900 mb-2 pr-24">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
