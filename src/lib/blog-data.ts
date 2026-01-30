export type BlogCategory =
  | "Insights"
  | "Portfolio"
  | "Industry"
  | "Founder Stories"
  | "News";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  publishedAt: string;
  readTimeMinutes: number;
  coverImage?: string;
  accentColor: string;
  body: string[];
}

export const blogCategories: BlogCategory[] = [
  "Insights",
  "Portfolio",
  "Industry",
  "Founder Stories",
  "News",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "why-celebrity-brands-outperform",
    title: "Why Celebrity-Founded Brands Outperform Traditional Brands",
    excerpt:
      "Data shows that celebrity-founded brands consistently achieve faster growth and higher valuations. Here's why the model works.",
    category: "Insights",
    author: "Scott van den Berg",
    publishedAt: "2025-01-15",
    readTimeMinutes: 6,
    accentColor: "74, 158, 255",
    body: [
      "The rise of celebrity-founded brands is not a passing trend — it's a structural shift in consumer behavior. Over the past decade, we've watched household names move from endorsement deals to equity stakes, and the results speak for themselves.",
      "When a celebrity founder brings authentic passion and an existing audience, the traditional customer acquisition funnel is fundamentally disrupted. Instead of spending millions on brand awareness, these companies launch with day-one demand and built-in trust.",
      "Consider the numbers: celebrity-founded brands in the consumer space have achieved an average valuation premium of 2-3x compared to their non-celebrity counterparts at similar revenue stages. This isn't about fame alone — it's about the unique combination of audience, authenticity, and product-market fit.",
      "At HotStart VC, we've seen this pattern repeat across beauty, food & beverage, wellness, and fashion verticals. The playbook is clear: when the right founder meets the right product category, magic happens.",
      "The key differentiator is authenticity. Consumers can tell when a celebrity is genuinely passionate about their product versus simply lending their name. The brands that win are the ones where the founder would use the product regardless of their fame.",
    ],
  },
  {
    slug: "the-hotstart-thesis",
    title: "The HotStart Thesis: Investing at the Intersection of Fame and Product-Market Fit",
    excerpt:
      "Our investment thesis explained — what we look for, why it works, and how we evaluate celebrity-founded ventures.",
    category: "Insights",
    author: "Scott van den Berg",
    publishedAt: "2025-01-08",
    readTimeMinutes: 8,
    accentColor: "91, 207, 165",
    body: [
      "HotStart VC was founded on a simple observation: celebrities who genuinely care about their product category build better companies. But not all celebrity ventures are created equal — and knowing the difference is where our edge lies.",
      "We evaluate every deal on three axes: founder authenticity, product differentiation, and audience alignment. A famous name alone isn't enough. We need to see that the founder has a genuine connection to the product category and that their audience naturally maps to the target customer.",
      "Product differentiation is equally critical. The best celebrity brands don't just slap a name on a commodity — they bring a unique perspective that creates genuine innovation. Think Fenty Beauty's shade range or PRIME's flavor profiles.",
      "Audience alignment is the third pillar. A musician launching a fashion line makes intuitive sense. A tech entrepreneur launching a beauty brand less so. We look for natural connections between the founder's personal brand and the product they're building.",
      "Our thesis has been validated repeatedly across our portfolio. The companies that score highest on all three axes consistently outperform, and we continue to refine our evaluation framework with every investment.",
    ],
  },
  {
    slug: "how-prime-became-a-billion-dollar-brand",
    title: "How PRIME Became a Billion-Dollar Brand in Under Two Years",
    excerpt:
      "A deep dive into the meteoric rise of PRIME hydration and what it reveals about the power of creator-led brands.",
    category: "Portfolio",
    author: "HotStart Team",
    publishedAt: "2024-12-20",
    readTimeMinutes: 5,
    accentColor: "255, 107, 53",
    body: [
      "When Logan Paul and KSI announced PRIME in January 2022, skeptics dismissed it as another celebrity vanity project. Two years later, the brand crossed $1.2 billion in retail sales, proving that the creator economy has fundamentally changed how consumer brands are built.",
      "What the skeptics underestimated was the combined reach of two creators with over 40 million subscribers each — and more importantly, the genuine enthusiasm both founders have for fitness and hydration. This wasn't a licensing deal. This was two founders building a brand they personally use every day.",
      "PRIME's success formula combines authentic founder passion with distribution excellence and community-first marketing. Every product launch is an event. Every flavor drop generates genuine excitement. The community doesn't just buy the product — they evangelize it.",
      "The distribution strategy was equally brilliant. Rather than going direct-to-consumer only, PRIME secured major retail partnerships early, creating real-world scarcity that amplified online buzz. Lines around stores became social media content, which drove more demand.",
      "PRIME represents the new playbook for consumer brands: founder authenticity × audience reach × distribution excellence = category disruption. It's a formula we look for in every deal.",
    ],
  },
  {
    slug: "the-future-of-influencer-founded-startups",
    title: "The Future of Influencer-Founded Startups",
    excerpt:
      "What the next wave of influencer entrepreneurship looks like — and where the biggest opportunities lie.",
    category: "Industry",
    author: "HotStart Team",
    publishedAt: "2024-12-10",
    readTimeMinutes: 7,
    accentColor: "110, 60, 140",
    body: [
      "The influencer economy has matured beyond brand deals and sponsorships. The next frontier is equity ownership — creators who don't just promote products but build, own, and operate the companies behind them.",
      "We're seeing a new generation of creators who think like founders from day one. They understand unit economics, supply chain logistics, and brand positioning. They've watched the first wave of celebrity founders and learned from both their successes and failures.",
      "The verticals with the most opportunity remain beauty, wellness, food & beverage, and fashion — but we're starting to see expansion into fintech, edtech, and health tech. As creator audiences become more sophisticated, so do the products they demand.",
      "One trend we're watching closely is the rise of micro-celebrity founders — creators with audiences of 500K to 5M who have incredibly high engagement rates and deep trust with their communities. These founders often build more sustainable businesses than mega-celebrities.",
      "The infrastructure supporting creator-founders is also evolving. From specialized agencies to creator-focused venture funds (like ours), the ecosystem is maturing to support the unique needs of celebrity-founded brands at every stage.",
    ],
  },
  {
    slug: "from-followers-to-founders",
    title: "From Followers to Founders: Why Creators Make Great CEOs",
    excerpt:
      "The skills that build an audience are surprisingly transferable to building a company. Here's what we've learned.",
    category: "Founder Stories",
    author: "Scott van den Berg",
    publishedAt: "2024-11-28",
    readTimeMinutes: 6,
    accentColor: "180, 120, 20",
    body: [
      "There's a misconception that celebrities and influencers are merely brand ambassadors who lend their name and move on. The reality is far more interesting — the best creator-founders are deeply operational leaders who bring unique skills to the CEO role.",
      "The best creator-founders understand their audience at a level that traditional market research can't replicate. They've spent years in direct conversation with millions of people, learning what resonates and what falls flat. That intuition is invaluable in product development.",
      "Content creation itself is an exercise in rapid iteration, audience feedback, and storytelling — the same skills that define great product leaders. A creator who has published thousands of pieces of content has essentially run thousands of A/B tests on what their audience wants.",
      "We've also found that creators bring an unmatched ability to generate earned media and organic buzz. While traditional founders spend 20-30% of their budget on marketing, creator-founders often achieve better results through their own channels at a fraction of the cost.",
      "The transition from creator to CEO isn't always smooth — operational complexity, team management, and supply chain logistics are real challenges. But the founders who pair their audience expertise with strong operational partners build the most formidable companies.",
    ],
  },
];
