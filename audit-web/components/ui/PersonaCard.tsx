import { AlertTriangle, LucideIcon } from 'lucide-react';

interface PersonaCardProps {
  name: string;
  role: string;
  painPoints: string[];
  color: string;
  icon: LucideIcon;
}

export default function PersonaCard({ name, role, painPoints, color, icon: Icon }: PersonaCardProps) {
  return (
    <div className={`rounded-xl p-6 border-2 ${color} shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-200`}>
      <div className="flex items-center gap-4 mb-4 border-b border-black/10 pb-4">
        <div className="bg-white p-3 rounded-full shadow-sm">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-xs opacity-80">{role}</p>
        </div>
      </div>
      <div className="space-y-3">
        <p className="font-semibold text-xs uppercase tracking-wide opacity-70">Points de Douleur :</p>
        <ul className="space-y-2">
          {painPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-1 text-red-500" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
