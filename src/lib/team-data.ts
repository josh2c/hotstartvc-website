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
    name: "Ben Acott",
    role: "Venture Partner",
    bio: "Co-Founder & CMO of Feastables with MrBeast ($1.5B). Founder of Magnetic Labs (celebrity venture studio). Ex Manscaped & Meta.",
    image: "/team/ben-acott.avif",
    location: "Los Angeles, California",
    linkedin: "https://linkedin.com/in/benacott",
  },
  {
    name: "Marina Mogilko",
    role: "Venture Partner",
    bio: "Creator (Linguamarina, Silicon Valley Girl, Marina Mogilko). Serial Entrepreneur. First creator ever to raise a venture round (led by Slow Ventures - $1.7M). Co-founder of a better-for-you snack brand for kids currently in stealth. 17 Million Followers.",
    image: "/team/marina-mogilko.avif",
  },
  {
    name: "Jerome Aceti",
    role: "Venture Partner",
    bio: "18-year digital creator. Serial entrepreneur with ventures in merchandising, aerospace, and data solutions. Angel investor. Co-Founder of NexTide (AdTech), building patent-pending AI infrastructure for livestream brand safety (>$1M raised). 8 Million Followers.",
    image: "/team/jerome-aceti.avif",
  },
  {
    name: "Chelsea Maclin",
    role: "Venture Partner",
    bio: "Employee #7 at Bumble ($12B IPO). Employee #10 at LTK ($2B). Worked with 1000's of influencers and celebrities such as Priyanka Chopra & Serena Williams. Angel investor.",
    image: "/team/chelsea-maclin.avif",
  },
  {
    name: "Alexandra Wilderson",
    role: "Venture Partner",
    bio: "Investment banker at Tudor, Pickering, Holt & Co., a Goldman Sachs spin-out. Private equity investor at The Amherst Group, a Goldman Sachs spin-out. PE/VC investor at the Teachers Retirement System of Texas (~$3B).",
    image: "/team/alexandra-wilderson.avif",
  },
  {
    name: "Christopher Gavigan",
    role: "Venture Partner",
    bio: "Co-founder of HONEST Co. with Jessica Alba (NASDAQ: $HNST - $1.44B). Co-founder of PRIMA (Acquired). Best-selling author. Angel investor.",
    image: "/team/christopher-gavigan.avif",
  },
];
