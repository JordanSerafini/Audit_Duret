import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
      <Link
        href="/"
        className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1"
        aria-label="Retour à l'accueil"
      >
        <Home className="w-4 h-4" />
        <span className="hidden sm:inline">Accueil</span>
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-slate-400" aria-hidden="true" />
          {index === items.length - 1 ? (
            <span className="text-slate-900 font-medium" aria-current="page">
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className="text-slate-500 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
