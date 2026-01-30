export type PortfolioCategory =
  | "Beauty"
  | "Wellness"
  | "Food & Beverage"
  | "Lifestyle"
  | "Tech"
  | "Fashion";

export interface PortfolioCompany {
  name: string;
  founder: string;
  category: PortfolioCategory;
  description: string;
  image?: string;
  accentColor: string;
}

export const portfolioCategories: PortfolioCategory[] = [
  "Beauty",
  "Wellness",
  "Food & Beverage",
  "Lifestyle",
  "Tech",
  "Fashion",
];

export const portfolioCompanies: PortfolioCompany[] = [
  {
    name: "FYR",
    founder: "Derek Wolf",
    category: "Food & Beverage",
    description: "Premium grilling and outdoor cooking brand.",
    image: "/portfolio/fyr-derek-wolf.jpg",
    accentColor: "90, 70, 40",
  },
  {
    name: "Serendipity",
    founder: "Selena Gomez",
    category: "Food & Beverage",
    description: "Ice cream and frozen treats brand.",
    image: "/portfolio/serendipity-selena-gomez.avif",
    accentColor: "200, 80, 120",
  },
  {
    name: "Standard Giving Co",
    founder: "Zachary Dereniowski",
    category: "Lifestyle",
    description: "Social impact brand spreading kindness and giving back.",
    image: "/portfolio/standard-giving.jpg",
    accentColor: "60, 130, 80",
  },
  {
    name: "Hippie Water",
    founder: "Sarah Sheaffer",
    category: "Food & Beverage",
    description: "Premium canned water and beverage brand.",
    image: "/portfolio/hippie-water.webp",
    accentColor: "40, 160, 140",
  },
  {
    name: "Betr",
    founder: "Jake Paul",
    category: "Tech",
    description: "Sports betting and media platform.",
    image: "/portfolio/betr-jake-paul.webp",
    accentColor: "120, 50, 200",
  },
  {
    name: "Honest Company",
    founder: "Jessica Alba",
    category: "Wellness",
    description: "Clean beauty and baby essentials brand.",
    accentColor: "74, 158, 255",
  },
  {
    name: "PRIME",
    founder: "Logan Paul & KSI",
    category: "Food & Beverage",
    description: "Hydration and energy drink brand.",
    accentColor: "91, 207, 165",
  },
  {
    name: "Aviation Gin",
    founder: "Ryan Reynolds",
    category: "Food & Beverage",
    description: "Premium American gin brand.",
    accentColor: "255, 107, 53",
  },
  {
    name: "SKIMS",
    founder: "Kim Kardashian",
    category: "Fashion",
    description: "Shapewear, clothing, and swimwear brand.",
    accentColor: "180, 120, 20",
  },
  {
    name: "Fenty Beauty",
    founder: "Rihanna",
    category: "Beauty",
    description: "Inclusive cosmetics and skincare brand.",
    accentColor: "110, 60, 140",
  },
  {
    name: "Liquid Death",
    founder: "Mike Cessario",
    category: "Food & Beverage",
    description: "Canned water and iced tea brand with punk branding.",
    accentColor: "20, 20, 20",
  },
];
