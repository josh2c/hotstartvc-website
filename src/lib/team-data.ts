export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  location?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Scott van den Berg",
    role: "Managing Partner",
    bio: "3x Founder, 1x Exit. Founder of Influencer Capital, an organization that structures equity deals between startups and celebrities. Angel investor in 15 celebrity-founded brands and founder of an angel syndicate that invests in celebrity-founded brands (350+ angels). Co-founded Straise (Exit). 26K followers & 15M views on content created about celebrity-founded brands.",
    image: "/team/scott-van-den-berg.avif",
    location: "California",
    linkedin: "https://linkedin.com/in/scottvandenberg",
    twitter: "https://x.com/scottvandenberg",
    instagram: "https://instagram.com/scottvandenberg",
  },
  {
    name: "Sasha Pieterse",
    role: "Venture Partner",
    bio: "Actress known for her roles in Pretty Little Liars, Inherent Vice, and Heroes. Host of the Women In The Nude podcast. Co-Founder of Hippie Water. 20 Million Followers.",
    image: "/team/sasha-p.avif",
    location: "Los Angeles, California",
    linkedin: "https://linkedin.com/in/sashapieterse",
    twitter: "https://x.com/sabornsasha",
    instagram: "https://instagram.com/sashapieterse",
  },
  {
    name: "Member Three",
    role: "Partner, Investments",
    bio: "Drives deal evaluation and due diligence. Deep expertise in celebrity and influencer-led brand economics and market positioning.",
    location: "New York, New York",
  },
  {
    name: "Member Four",
    role: "Partner, Operations",
    bio: "Supports portfolio companies with operational excellence, supply chain optimization, and go-to-market strategy.",
    location: "Austin, Texas",
  },
  {
    name: "Member Five",
    role: "Vice President",
    bio: "Manages investor relations and fund communications. Background in institutional finance and alternative asset management.",
    location: "San Francisco, California",
  },
  {
    name: "Member Six",
    role: "Principal",
    bio: "Focuses on sourcing and evaluating early-stage celebrity-founded ventures across beauty, wellness, food, and lifestyle verticals.",
    location: "Miami, Florida",
  },
  {
    name: "Member Seven",
    role: "Associate",
    bio: "Conducts market research and competitive analysis. Supports deal teams through financial modeling and sector mapping.",
    location: "Chicago, Illinois",
  },
  {
    name: "Member Eight",
    role: "Head of Platform",
    bio: "Builds the network and resources that help portfolio founders scale — from talent acquisition to brand partnerships and distribution.",
    location: "Los Angeles, California",
  },
];
