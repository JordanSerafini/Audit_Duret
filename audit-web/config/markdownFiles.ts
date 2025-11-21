export interface MarkdownFile {
  name: string;
  path: string;
  title: string;
}

export const getServiceMarkdownFiles = (serviceName: string): MarkdownFile[] => {
  const serviceMap: Record<string, string> = {
    'achats-logistique': 'Achats-Logistique',
    'chantiers': 'Chantiers',
    'direction-affaires': 'Direction-Affaires',
    'finance-comptabilite': 'Finance-Comptabilite',
    'gestion-operationnelle': 'Gestion-Operationnelle',
    'maintenance-technique': 'Maintenance-Technique',
    'ressources-humaines': 'Ressources-Humaines',
    'service-client': 'Service-Client'
  };

  const servicePath = serviceMap[serviceName];
  if (!servicePath) return [];

  const basePath = `/markdown/Services/${servicePath}`;

  return [
    {
      name: '01_PERSONAS_Pain_Points.md',
      path: `${basePath}/docs/01_PERSONAS_Pain_Points.md`,
      title: 'Personas & Pain Points'
    },
    {
      name: '02_ARCHITECTURE_Actuelle_Chaos.md',
      path: `${basePath}/docs/02_ARCHITECTURE_Actuelle_Chaos.md`,
      title: 'Architecture Actuelle'
    },
    {
      name: '03_JOURNEY_MAPS_Parcours_Utilisateurs.md',
      path: `${basePath}/docs/03_JOURNEY_MAPS_Parcours_Utilisateurs.md`,
      title: 'Journey Maps'
    },
    {
      name: `Plan_Action_${servicePath}.md`,
      path: `${basePath}/plan/Plan_Action_${servicePath}.md`,
      title: "Plan d'Action"
    },
    {
      name: '01_Architecture_Cible.md',
      path: `${basePath}/implementation/it-logiciel/01_Architecture_Cible.md`,
      title: 'Architecture Cible'
    },
    {
      name: '01_Architecture_DataDriven.md',
      path: `${basePath}/implementation/bi-data-ml/01_Architecture_DataDriven.md`,
      title: 'Architecture Data & IA'
    },
    {
      name: '02_Planning_Implementation.md',
      path: `${basePath}/implementation/02_Planning_Implementation.md`,
      title: "Planning d'Implémentation"
    },
    {
      name: 'README.md',
      path: `${basePath}/README.md`,
      title: 'Vue d\'ensemble'
    },
    {
      name: 'SYNTHESE_EXECUTIVE.md',
      path: `${basePath}/SYNTHESE_EXECUTIVE.md`,
      title: 'Synthèse Executive'
    }
  ];
};
