import Link from "next/link";
import { FileText, BookOpen, Code, ArrowRight } from "lucide-react";

export default function AnnexesPage() {
  const sections = [
    {
      title: "Logiciels",
      href: "/annexes/logiciels",
      icon: Code,
      description: "Analyses détaillées des solutions logicielles : ERP, CRM, SIRH",
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-600",
      textColor: "text-blue-600"
    },
    {
      title: "APIs",
      href: "/annexes/apis",
      icon: FileText,
      description: "Documentation des APIs et intégrations techniques",
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      iconBg: "bg-green-600",
      textColor: "text-green-600"
    },
    {
      title: "Documents Markdown",
      href: "/annexes/markdown",
      icon: BookOpen,
      description: "Tous les documents source de l'audit (111 fichiers)",
      color: "from-amber-50 to-orange-100",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-600",
      textColor: "text-amber-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-2 mb-6"
          >
            ← Retour à l'accueil
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <FileText className="w-10 h-10 text-blue-600" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Annexes</h1>
              <p className="text-gray-600 mt-2">
                Documentation technique et analyses détaillées
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className={`bg-gradient-to-br ${section.color} border-2 ${section.borderColor} rounded-2xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all group relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${section.color} opacity-30 rounded-full blur-2xl group-hover:w-48 group-hover:h-48 transition-all`}></div>
              <div className="relative z-10">
                <div className={`${section.iconBg} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform inline-flex mb-4`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-slate-900 mb-3">{section.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  {section.description}
                </p>
                <div className={`flex items-center gap-2 ${section.textColor} font-semibold text-sm`}>
                  <span>Explorer</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
