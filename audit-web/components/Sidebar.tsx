'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Folder, FileText, CheckCircle, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { navigation } from '@/lib/navigation';

const iconMap = {
  Home,
  Folder,
  FileText,
  CheckCircle
};

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>(['/services', '/annexes']);

  const toggleExpand = (href: string) => {
    setExpandedItems(prev =>
      prev.includes(href)
        ? prev.filter(item => item !== href)
        : [...prev, href]
    );
  };

  const isActive = (href: string) => pathname === href;
  const isParentActive = (item: any) => {
    if (item.children) {
      return item.children.some((child: any) => pathname === child.href);
    }
    return false;
  };

  return (
    <aside className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white min-h-screen fixed left-0 top-0 overflow-y-auto shadow-2xl">
      {/* Header */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-xl">
            ⚡
          </div>
          <div>
            <h1 className="font-bold text-lg">Audit IT</h1>
            <p className="text-xs text-slate-400">Duret Électricité</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon ? iconMap[item.icon as keyof typeof iconMap] : null;
          const hasChildren = item.children && item.children.length > 0;
          const isExpanded = expandedItems.includes(item.href);
          const active = isActive(item.href) || isParentActive(item);

          return (
            <div key={item.href}>
              {hasChildren ? (
                <button
                  onClick={() => toggleExpand(item.href)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                    active
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {Icon && <Icon className="w-5 h-5" />}
                    <span className="font-medium">{item.title}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    active
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  <span className="font-medium">{item.title}</span>
                </Link>
              )}

              {/* Children */}
              {hasChildren && isExpanded && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-700 pl-4">
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-4 py-2 rounded-lg text-sm transition-all ${
                        isActive(child.href)
                          ? 'bg-blue-600 text-white font-medium'
                          : 'hover:bg-slate-700 text-slate-400'
                      }`}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700 mt-auto">
        <div className="text-xs text-slate-500 text-center">
          <p className="font-semibold text-slate-400">Solution Logique</p>
          <p className="mt-1">Janvier 2025</p>
        </div>
      </div>
    </aside>
  );
}
