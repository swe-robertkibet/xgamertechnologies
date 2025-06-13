// Landing Page Component Types

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Category {
  title: string;
  description: string;
  image: string;
  startingPrice: number;
  slug: string;
}

export interface Build {
  id: number;
  name: string;
  description: string;
  image: string;
  keySpecs: string[];
  currentPrice: number;
  originalPrice: number | null;
  isOnSale: boolean;
  discount: number;
}

export interface RepairFeature {
  icon: string;
  title: string;
  description: string;
}

export interface CareerStat {
  value: string;
  label: string;
}

export interface FooterLink {
  name: string;
  url: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export interface ContactInfo {
  type: string;
  icon: string;
  value: string;
}
