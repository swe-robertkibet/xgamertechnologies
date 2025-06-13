// src/components/landing-page/landing-types.ts

export interface WhyChooseUsFeature {
  icon: string;
  title: string;
  description: string;
}

export interface FeaturedCategory {
  title: string;
  description: string;
  image: string;
  startingPrice: number;
  slug: string;
}

export interface PopularBuild {
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

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
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

export interface ContactInfo {
  icon: string;
  text: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

// Event types for component communication
export interface LandingPageEvents {
  onStartCustomBuild: () => void;
  onBrowseDeals: () => void;
  onNavigateToCategory: (slug: string) => void;
  onStartBuilder: () => void;
  onViewBuild: (buildId: number) => void;
  onBookRepair: () => void;
  onViewCareers: () => void;
  onSubscribeNewsletter: (email: string) => Promise<void>;
  onOpenSocial: (url: string) => void;
}

// Component props interfaces
export interface HeroSectionProps {
  onStartCustomBuild: () => void;
  onBrowseDeals: () => void;
}

export interface FeaturedCategoriesProps {
  categories: FeaturedCategory[];
  onNavigateToCategory: (slug: string) => void;
}

export interface PopularBuildsProps {
  builds: PopularBuild[];
  onViewBuild: (buildId: number) => void;
}

export interface LandingFooterProps {
  socialLinks: SocialLink[];
  onOpenSocial: (url: string) => void;
}

export interface NewsletterSignupProps {
  onSubscribe: (email: string) => Promise<void>;
}

// Theme colors interface
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
}
