
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-8 mb-8">
        <AlertTriangle className="w-10 h-10 text-amber-600 mb-4" />
        <h2 className="text-3xl font-bold text-amber-900 mb-4">Enjeux</h2>
        <p className="text-amber-800 text-lg">Système post-it, ~50 mails/jour non structurés, double base clients, pas de suivi appels, relances manuelles.</p>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-8 mb-8">
        <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
        <h2 className="text-3xl font-bold text-green-900 mb-4">Solution</h2>
        <p className="text-green-800 text-lg">Odoo CRM + Helpdesk : tickets digitaux, historique 360°, base unique, relances auto, portail client.</p>
      </div>

      <div className="mt-12 flex justify-between border-t border-slate-300 pt-6">
        <Link href="/services/ressources-humaines" className="text-slate-600 hover:text-teal-600 font-semibold">← Ressources Humaines</Link>
        <Link href="/services/finance-comptabilite" className="text-slate-600 hover:text-teal-600 font-semibold">Finance & Comptabilité →</Link>
      </div>
    </div>
  );
}
