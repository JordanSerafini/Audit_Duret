import { LucideIcon } from 'lucide-react';

interface OpportunityCardProps {
  title: string;
  description: string;
  gain: string;
  Icon: LucideIcon;
  color: 'blue' | 'green' | 'purple' | 'red';
}

const colorThemes = {
  blue: {
    border: 'border-blue-100',
    icon: 'text-blue-500',
    title: 'text-blue-900',
    badgeBg: 'bg-green-50',
    badgeText: 'text-green-700'
  },
  green: {
    border: 'border-green-100',
    icon: 'text-green-500',
    title: 'text-green-900',
    badgeBg: 'bg-green-50',
    badgeText: 'text-green-700'
  },
  purple: {
    border: 'border-purple-100',
    icon: 'text-purple-500',
    title: 'text-purple-900',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-700'
  },
  red: {
    border: 'border-red-100',
    icon: 'text-red-500',
    title: 'text-red-900',
    badgeBg: 'bg-red-50',
    badgeText: 'text-red-700'
  }
};

export default function OpportunityCard({ title, description, gain, Icon, color }: OpportunityCardProps) {
  const theme = colorThemes[color];

  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm border ${theme.border} hover:shadow-lg hover:scale-[1.02] transition-all duration-200`}>
      <h3 className={`font-bold text-lg ${theme.title} mb-3 flex items-center gap-2`}>
        <Icon className={`w-5 h-5 ${theme.icon}`} />
        {title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-3">
        {description}
      </p>
      <div className={`text-xs ${theme.badgeBg} ${theme.badgeText} p-2 rounded font-medium`}>
        <strong>Gain :</strong> {gain}
      </div>
    </div>
  );
}
