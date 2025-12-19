import { Hero, Category } from './types';

export const MOCK_HEROES: Hero[] = [
  {
    id: '1',
    title: 'Linear',
    description: 'The standard for modern issue tracking and project management.',
    imageUrl: 'https://picsum.photos/id/1/1600/900',
    websiteUrl: 'https://linear.app',
    category: Category.SaaS,
    industry: 'Productivity',
    style: ['Dark Mode', 'Minimal', 'Gradient'],
    techStack: ['React', 'Next.js', 'Tailwind'],
    colors: ['#000000', '#5E6AD2', '#FFFFFF'],
    features: {
      layout: 'Split Center',
      cta: 'Primary Button',
      animation: 'Subtle Fade-in',
    },
    breakdown: {
      headline: 'Large sans-serif, high contrast white on black.',
      hierarchy: 'Clear distinction between H1 and subtext.',
      motion: 'Particles effect in background on mouse move.',
    },
    savedCount: 1240,
    dateAdded: '2023-10-15',
  },
  {
    id: '2',
    title: 'Raycast',
    description: 'A blazingly fast, extensible launcher for Mac.',
    imageUrl: 'https://picsum.photos/id/20/1600/900',
    websiteUrl: 'https://raycast.com',
    category: Category.DevTools,
    industry: 'Productivity',
    style: ['Dark Mode', 'Red Accent', 'Technical'],
    techStack: ['React', 'Custom WebGL'],
    colors: ['#1A1A1A', '#FF6363', '#FFFFFF'],
    features: {
      layout: 'Centered',
      cta: 'Download Button',
      animation: '3D Product Demo',
    },
    breakdown: {
      headline: 'Bold, action-oriented typography.',
      hierarchy: 'Product screenshot is the primary focal point.',
      motion: 'Smooth scrolling integration.',
    },
    savedCount: 890,
    dateAdded: '2023-11-02',
  },
  {
    id: '3',
    title: 'Midjourney',
    description: 'An independent research lab exploring new mediums of thought.',
    imageUrl: 'https://picsum.photos/id/28/1600/900',
    websiteUrl: 'https://midjourney.com',
    category: Category.AI,
    industry: 'Generative AI',
    style: ['Brutalist', 'Monospace', 'Experimental'],
    techStack: ['Vue', 'Three.js'],
    colors: ['#000000', '#FFFFFF'],
    features: {
      layout: 'Asymmetrical',
      cta: 'Text Link',
      animation: 'Glitch Effect',
    },
    breakdown: {
      headline: 'Cryptic and intriguing text style.',
      hierarchy: 'Flat hierarchy, encourages exploration.',
      motion: 'Rapid changing images.',
    },
    savedCount: 2300,
    dateAdded: '2023-12-10',
  },
  {
    id: '4',
    title: 'Stripe',
    description: 'Financial infrastructure platform for the internet.',
    imageUrl: 'https://picsum.photos/id/48/1600/900',
    websiteUrl: 'https://stripe.com',
    category: Category.Fintech,
    industry: 'Payments',
    style: ['Clean', 'Colorful', 'Isometic'],
    techStack: ['HTML5', 'Canvas'],
    colors: ['#635BFF', '#0A2540', '#FFFFFF'],
    features: {
      layout: 'Split Diagonal',
      cta: 'Dual Buttons',
      animation: 'Complex Mesh Gradient',
    },
    breakdown: {
      headline: 'Friendly yet professional serif font.',
      hierarchy: 'Very strong visual guidance towards CTA.',
      motion: 'Fluid gradient mesh animation.',
    },
    savedCount: 4500,
    dateAdded: '2023-09-20',
  },
  {
    id: '5',
    title: 'Shopify Editions',
    description: 'Showcasing the latest updates to the Shopify platform.',
    imageUrl: 'https://picsum.photos/id/60/1600/900',
    websiteUrl: 'https://shopify.com/editions',
    category: Category.Ecommerce,
    industry: 'Commerce',
    style: ['Editorial', 'Typography-heavy', 'Interactive'],
    techStack: ['Hydrogen', 'React'],
    colors: ['#90EE90', '#000000'],
    features: {
      layout: 'Full Screen',
      cta: 'Scroll Indicator',
      animation: 'Scroll-triggered reveals',
    },
    breakdown: {
      headline: 'Massive, magazine-style typography.',
      hierarchy: 'Content-led design.',
      motion: 'Parallax scrolling effects.',
    },
    savedCount: 670,
    dateAdded: '2024-01-15',
  },
  {
    id: '6',
    title: 'Vercel',
    description: 'Develop. Preview. Ship. The frontend cloud.',
    imageUrl: 'https://picsum.photos/id/180/1600/900',
    websiteUrl: 'https://vercel.com',
    category: Category.DevTools,
    industry: 'Cloud Computing',
    style: ['Monochrome', 'Geometric', 'Clean'],
    techStack: ['Next.js', 'React'],
    colors: ['#000000', '#FFFFFF', '#333333'],
    features: {
      layout: 'Centered Grid',
      cta: 'Deploy Button',
      animation: 'Lines drawing on scroll',
    },
    breakdown: {
      headline: 'Modern geometric sans-serif (Geist).',
      hierarchy: 'High contrast black and white.',
      motion: 'Subtle line animations.',
    },
    savedCount: 1500,
    dateAdded: '2023-08-05',
  },
  {
    id: '7',
    title: 'Fey',
    description: 'The definitive app for the modern investor.',
    imageUrl: 'https://picsum.photos/id/201/1600/900',
    websiteUrl: 'https://feyapp.com',
    category: Category.Fintech,
    industry: 'Investing',
    style: ['High-End', 'Glassmorphism', 'Dark'],
    techStack: ['React', 'Framer Motion'],
    colors: ['#111111', '#EAEAEA'],
    features: {
      layout: 'Device Frame Center',
      cta: 'Join Waitlist',
      animation: 'UI elements floating',
    },
    breakdown: {
      headline: 'Luxurious, spaced-out typography.',
      hierarchy: 'Premium feel through whitespace.',
      motion: 'Slow, elegant transitions.',
    },
    savedCount: 320,
    dateAdded: '2024-02-01',
  },
  {
    id: '8',
    title: 'Reflect',
    description: 'Note-taking for how you think.',
    imageUrl: 'https://picsum.photos/id/366/1600/900',
    websiteUrl: 'https://reflect.app',
    category: Category.SaaS,
    industry: 'Productivity',
    style: ['Warm', 'Paper-like', 'Soft'],
    techStack: ['React'],
    colors: ['#FBFBFB', '#333333', '#5E5CE6'],
    features: {
      layout: 'Two Column',
      cta: 'Start Trial',
      animation: 'Handwriting effect',
    },
    breakdown: {
      headline: 'Approachable, rounded typography.',
      hierarchy: 'Friendly and inviting.',
      motion: 'Micro-interactions on hover.',
    },
    savedCount: 410,
    dateAdded: '2023-11-20',
  }
];

export const CATEGORIES_LIST = Object.values(Category);

export const FILTER_OPTIONS = {
  style: {
    label: 'Style',
    options: ['Minimal', 'Clean', 'Brutalist', 'Geometric', 'Typography-heavy', 'Experimental', 'High-End']
  },
  theme: {
    label: 'Color Theme',
    options: ['Dark Mode', 'Colorful', 'Monochrome', 'Warm', 'Gradient']
  },
  layout: {
    label: 'Layout Type',
    options: ['Centered', 'Split', 'Full Screen', 'Asymmetrical', 'Grid']
  },
  tool: {
    label: 'Tool Used',
    options: ['React', 'Next.js', 'Tailwind', 'Vue', 'Framer Motion', 'WebGL']
  }
};