export interface Hero {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // Placeholder or real URL
  websiteUrl: string;
  category: Category;
  industry: string;
  style: string[];
  techStack: string[];
  colors: string[];
  features: {
    layout: string;
    cta: string;
    animation: string;
  };
  breakdown: {
    headline: string;
    hierarchy: string;
    motion: string;
  };
  savedCount: number;
  dateAdded: string;
}

export enum Category {
  All = 'All',
  SaaS = 'SaaS',
  AI = 'AI',
  Web3 = 'Web3',
  Fintech = 'Fintech',
  Ecommerce = 'eCommerce',
  Agency = 'Agency',
  Portfolio = 'Portfolio',
  DevTools = 'Developer Tools',
  Marketing = 'Marketing',
}

export interface NavigationItem {
  name: string;
  icon?: React.ReactNode;
  count?: number;
  path: string;
}