// Map service directory names (kebab-case) to UML folder names (PascalCase-with-Dash)
export const serviceToUMLMapping: Record<string, string> = {
  'achats-logistique': 'Achats-Logistique',
  'albertville': 'Albertville',
  'chantiers': 'Chantiers',
  'direction-affaires': 'Direction-Affaires',
  'finance-comptabilite': 'Finance-Comptabilite',
  'gestion-operationnelle': 'Gestion-Operationnelle',
  'maintenance-technique': 'Maintenance-Technique',
  'ressources-humaines': 'Ressources-Humaines',
  'service-client': 'Service-Client',
};

export const serviceLabelMapping: Record<string, string> = {
  'achats-logistique': 'Achats & Logistique',
  'albertville': 'Albertville',
  'chantiers': 'Chantiers',
  'direction-affaires': 'Direction Affaires',
  'finance-comptabilite': 'Finance & Comptabilité',
  'gestion-operationnelle': 'Gestion Opérationnelle',
  'maintenance-technique': 'Maintenance Technique',
  'ressources-humaines': 'Ressources Humaines',
  'service-client': 'Service Client',
};
