export type Sector = 'marine' | 'industrial' | 'both';

export type ProductCategory = 
  | 'Engine Spare Parts'
  | 'Turbochargers'
  | 'Compressors'
  | 'Pumps'
  | 'Valves'
  | 'Motors'
  | 'Navigation Equipment'
  | 'Automation Systems'
  | 'Electrical Equipment'
  | 'Anchors'
  | 'Ropes'
  | 'Stores';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  sector: Sector;
  model: string;
  partNumber?: string;
  oemEquivalent?: string;
  compatibleBrands: string[];
  description: string;
  shortDescription: string;
  specifications: Record<string, string>;
  image: string;
  inStock: boolean;
  leadTime: string;
  certification?: string[];
  featured?: boolean;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroImage: string;
  bgPattern?: string;
  capabilities: string[];
  keyFeatures: { title: string; desc: string; iconName: string }[];
  processSteps: { step: string; title: string; desc: string }[];
  portCoverage: string[];
  emergencyAvailable: boolean;
}
