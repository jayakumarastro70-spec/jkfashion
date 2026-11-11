export interface AnatomySpot {
  id: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  title: string;
  description: string;
}

export interface FabricSpecs {
  composition: string;
  origin: string;
  silhouette: string;
  weight: string;
  drapeFactor: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
  role: string;
}

export interface Comment {
  id: string;
  author: string;
  role: string;
  date: string;
  content: string;
  likes: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Womenswear' | 'Menswear' | 'Atelier & Runway' | 'Couture Dialogue';
  gender: 'women' | 'men' | 'both';
  issue: string;
  date: string;
  readTime: string;
  curator: {
    name: string;
    role: string;
    location: string;
  };
  heroImage: string;
  imageAlt: string;
  imageCaption: string;
  excerpt: string;
  content: {
    openingDropCap: string;
    bodySection1: string;
    pullQuote: string;
    pullQuoteAuthor?: string;
    bodySection2: string;
    curatorVerdict: string;
  };
  anatomyHotspots: AnatomySpot[];
  fabricSpecs: FabricSpecs;
  colorPalette: ColorSwatch[];
  tags: string[];
  likesCount: number;
  featured: boolean;
  comments: Comment[];
}
