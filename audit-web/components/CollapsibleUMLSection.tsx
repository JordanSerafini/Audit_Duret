'use client';

import { useState } from 'react';
import { LayoutDashboard, ChevronDown, ChevronUp } from 'lucide-react';
import UMLGallery from './UMLGallery';

interface CollapsibleUMLSectionProps {
  serviceKey: string;
  serviceLabel: string;
}

export default function CollapsibleUMLSection({ serviceKey, serviceLabel }: CollapsibleUMLSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 mb-12 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex items-center justify-between hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <LayoutDashboard className="w-8 h-8 text-teal-600" />
          <div className="text-left">
            <h2 className="text-3xl font-bold text-slate-900">
              Diagrammes UML - Visualisation & Téléchargement
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Explorez tous les diagrammes UML du {serviceLabel}
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-slate-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-slate-600" />
          )}
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-8 pb-8">
          <p className="text-slate-600 mb-6">
            Architecture, processus, cas d&apos;usage, et plus encore.
            Visualisez-les directement ou téléchargez-les individuellement.
          </p>
          <UMLGallery serviceKey={serviceKey} />
        </div>
      </div>
    </div>
  );
}
