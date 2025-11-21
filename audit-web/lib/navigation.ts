// Navigation structure for the audit website
export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    title: "Accueil",
    href: "/",
    icon: "Home"
  },
  {
    title: "Services",
    href: "/services",
    icon: "Folder",
    children: [
      {
        title: "Achats & Logistique",
        href: "/services/achats-logistique"
      },
      {
        title: "Chantiers",
        href: "/services/chantiers"
      },
      {
        title: "Direction des Affaires",
        href: "/services/direction-affaires"
      },
      {
        title: "Gestion Opérationnelle",
        href: "/services/gestion-operationnelle"
      },
      {
        title: "Maintenance Technique",
        href: "/services/maintenance-technique"
      },
      {
        title: "Ressources Humaines",
        href: "/services/ressources-humaines"
      },
      {
        title: "Service Client",
        href: "/services/service-client"
      },
      {
        title: "Finance & Comptabilité",
        href: "/services/finance-comptabilite"
      }
    ]
  },
  {
    title: "Annexes",
    href: "/annexes",
    icon: "FileText",
    children: [
      {
        title: "Logiciels",
        href: "/annexes/logiciels"
      },
      {
        title: "APIs",
        href: "/annexes/apis"
      }
    ]
  },
  {
    title: "Synthèse",
    href: "/synthese",
    icon: "CheckCircle"
  }
];
