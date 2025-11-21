import { CheckCircle, Database, LayoutDashboard, Smartphone, Truck } from 'lucide-react';

export default function ArchitectureSection() {
  return (
    <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Database className="w-8 h-8 text-blue-400" />
        Architecture E-Procurement
      </h2>

      <div className="relative">
        {/* Grid Container */}
        <div className="grid md:grid-cols-3 gap-8 relative">

          {/* SVG Arrows - Hidden on Mobile */}
          <svg
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
            aria-hidden="true"
          >
            {/* Arrow from Block 1 to Block 2 */}
            <defs>
              <marker
                id="arrowhead-blue"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
              </marker>
            </defs>

            {/* Line 1 -> 2 */}
            <line
              x1="33%"
              y1="50%"
              x2="48%"
              y2="45%"
              stroke="#3b82f6"
              strokeWidth="3"
              markerEnd="url(#arrowhead-blue)"
              opacity="0.6"
            />

            {/* Line 2 -> 3 */}
            <line
              x1="69%"
              y1="48%"
              x2="82%"
              y2="50%"
              stroke="#3b82f6"
              strokeWidth="3"
              markerEnd="url(#arrowhead-blue)"
              opacity="0.6"
            />
          </svg>

          {/* Block 1: Chantier (Mobile) */}
          <div className="relative bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-200 hover:scale-[1.02]" style={{ zIndex: 10 }}>
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-900/50">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Chantier (App)</h3>
            <p className="text-slate-400 text-sm mb-4">Commande & Réception</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0"/>
                Scan Code-barres
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0"/>
                Catalogue Unifié
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0"/>
                Suivi Livraison
              </li>
            </ul>
          </div>

          {/* Block 2: Bureau (Web) */}
          <div className="relative bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-200 transform md:-translate-y-4 hover:scale-[1.02]" style={{ zIndex: 10 }}>
            <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-purple-900/50">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Bureau (Web)</h3>
            <p className="text-slate-400 text-sm mb-4">Validation & Pilotage</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0"/>
                Workflow Validation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0"/>
                Dashboards Achats
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0"/>
                Gestion Stock
              </li>
            </ul>
          </div>

          {/* Block 3: Fournisseurs (API) */}
          <div className="relative bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-200 hover:scale-[1.02]" style={{ zIndex: 10 }}>
            <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-green-900/50">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Fournisseurs</h3>
            <p className="text-slate-400 text-sm mb-4">Connexion Directe</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0"/>
                API Rexel / Sonepar
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0"/>
                EDI Commandes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0"/>
                Facturation Auto
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
