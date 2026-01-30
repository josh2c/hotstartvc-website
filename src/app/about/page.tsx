import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollRevealText from "@/components/ui/ScrollRevealText";
import HorizontalScrollText, { type FloatingCard } from "@/components/ui/HorizontalScrollText";


const scrollCards: FloatingCard[] = [
  {
    title: "Celebrity-Led Growth",
    description:
      "Celebrity founders bring built-in audiences of millions, dramatically reducing customer acquisition costs and accelerating brand awareness from day one.",
    color: "#a8e6cf",
    position: { top: "18%", left: "15%" },
  },
  {
    title: "Authentic Brand Stories",
    description:
      "We invest in founders whose personal narratives are inseparable from their brands — creating deep consumer trust that competitors can't replicate.",
    color: "#f4b8c1",
    position: { top: "12%", left: "55%" },
  },
  {
    title: "Category Defining",
    description:
      "From beauty to beverages, our portfolio companies don't just enter markets — they create entirely new categories and set the standard for what comes next.",
    color: "#c3b1e1",
    position: { top: "28%", left: "38%" },
  },
];

export const metadata: Metadata = {
  title: "About Us | HotStart VC",
  description:
    "Learn more about HotStart VC — the fund backing celebrity-founded brands that outperform.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-background text-foreground">

        {/* Hero Statement */}
        <section className="relative overflow-hidden bg-background px-6 pt-28 pb-16 md:pt-36 md:pb-24 lg:px-8">
          {/* Dot pattern background */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center">
            {/* Jake Paul headshot — top right */}
            <div className="pointer-events-none absolute -right-4 top-0 hidden md:block lg:-right-8">
              <div className="h-[120px] w-[120px] overflow-hidden rounded-full shadow-xl lg:h-[140px] lg:w-[140px]">
                <Image
                  src="/jake-paul-headshot.webp"
                  alt="Jake Paul"
                  width={140}
                  height={140}
                  className="animate-float-slow h-full w-full object-cover"
                />
              </div>
            </div>


            {/* Floating Oath product — middle right */}
            <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 md:block lg:right-16">
              <div className="h-[100px] w-[100px] overflow-hidden rounded-full shadow-xl lg:h-[120px] lg:w-[120px]">
                <Image
                  src="/oath-oats.webp"
                  alt="Oath Overnight Oats"
                  width={120}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Hippie Water product — left middle */}
            <div className="pointer-events-none absolute left-8 top-1/3 hidden -translate-y-1/2 md:block lg:left-16">
              <div className="h-[100px] w-[100px] overflow-hidden rounded-full shadow-xl lg:h-[120px] lg:w-[120px]">
                <Image
                  src="/hippie-water.webp"
                  alt="Hippie Water"
                  width={120}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Freaks of Nature product — bottom right */}
            <div className="pointer-events-none absolute bottom-4 right-20 hidden md:block lg:right-32">
              <div className="h-[100px] w-[100px] overflow-hidden rounded-full shadow-xl lg:h-[120px] lg:w-[120px]">
                <Image
                  src="/freaks-of-nature.jpg"
                  alt="Freaks of Nature"
                  width={120}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Feastables product — top left */}
            <div className="pointer-events-none absolute left-12 top-2 hidden md:block lg:left-24">
              <div className="h-[100px] w-[100px] overflow-hidden rounded-full shadow-xl lg:h-[120px] lg:w-[120px]">
                <Image
                  src="/feastables.avif"
                  alt="Feastables"
                  width={120}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* DJ Khaled floating headshot — left bottom area */}
            <div className="pointer-events-none absolute -left-2 bottom-8 hidden md:block lg:left-4">
              <Image
                src="/dj-khaled.jpg"
                alt="DJ Khaled"
                width={120}
                height={146}
                className="animate-float-slow rounded-full object-cover drop-shadow-xl"
                style={{ animationDelay: "2.5s" }}
              />
            </div>

            {/* Row 1 */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <span className="inline-block rounded-full bg-[#f4b8c1] px-8 py-3 text-4xl font-extrabold italic tracking-tight text-[#1a1a2e] md:px-12 md:py-4 md:text-6xl lg:text-7xl">
                Investing
              </span>
              <span className="inline-block rounded-full border-2 border-foreground/20 px-8 py-3 text-4xl font-extrabold tracking-tight text-foreground md:px-12 md:py-4 md:text-6xl lg:text-7xl">
                in
              </span>
            </div>

            {/* Row 2 */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:mt-6 md:gap-6">
              <span className="inline-block rounded-full bg-[#a8e6cf] px-8 py-3 text-4xl font-extrabold italic tracking-tight text-[#1a1a2e] md:px-12 md:py-4 md:text-6xl lg:text-7xl">
                celebrities
              </span>
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#c3b1e1] text-2xl font-extrabold text-[#1a1a2e] md:h-20 md:w-20 md:text-3xl">
                who
              </span>
              <span className="inline-block rounded-full border-2 border-foreground/20 px-8 py-3 text-4xl font-extrabold tracking-tight text-foreground md:px-12 md:py-4 md:text-6xl lg:text-7xl">
                are
              </span>
            </div>

            {/* Row 3 */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:mt-6 md:gap-6">
              <span className="inline-block rounded-full bg-[#c3b1e1] px-8 py-3 text-4xl font-extrabold italic tracking-tight text-[#1a1a2e] md:px-12 md:py-4 md:text-6xl lg:text-7xl">
                category-defining
              </span>
            </div>

            {/* Row 4 */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:mt-6 md:gap-6">
              <span className="inline-block rounded-full border-2 border-foreground/20 px-8 py-3 text-4xl font-extrabold tracking-tight text-foreground md:px-12 md:py-4 md:text-6xl lg:text-7xl">
                founders
              </span>
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#f4b8c1] text-2xl md:h-20 md:w-20">
                🔥
              </span>
            </div>
          </div>
        </section>

        {/* Our Purpose — sticky scroll reveal */}
        <section className="relative">
          <div className="mx-auto max-w-7xl">
            <ScrollRevealText
              segments={[
                { type: "word", value: "At" },
                { type: "word", value: "HotStart" },
                { type: "word", value: "VC," },
                { type: "word", value: "our" },
                { type: "word", value: "focus" },
                { type: "word", value: "is" },
                { type: "word", value: "clear:" },
                { type: "word", value: "we" },
                { type: "word", value: "invest" },
                { type: "word", value: "in" },
                { type: "word", value: "celebrity-founded" },
                { type: "word", value: "brands" },
                { type: "emoji", value: "🚀" },
                { type: "word", value: "that" },
                { type: "word", value: "have" },
                { type: "word", value: "a" },
                { type: "word", value: "unique" },
                { type: "word", value: "and" },
                { type: "word", value: "differentiated" },
                { type: "word", value: "product-market-fit." },
                { type: "emoji", value: "🎯" },
                { type: "word", value: "For" },
                { type: "word", value: "us," },
                { type: "word", value: "celebrities" },
                { type: "word", value: "encompass" },
                { type: "word", value: "a" },
                { type: "word", value: "broad" },
                { type: "word", value: "spectrum—ranging" },
                { type: "word", value: "from" },
                { type: "word", value: "influencers" },
                { type: "emoji", value: "📱" },
                { type: "word", value: "and" },
                { type: "word", value: "creators" },
                { type: "word", value: "to" },
                { type: "word", value: "athletes," },
                { type: "emoji", value: "⚡" },
                { type: "word", value: "actors," },
                { type: "emoji", value: "🎬" },
                { type: "word", value: "musicians," },
                { type: "emoji", value: "🎵" },
                { type: "word", value: "and" },
                { type: "word", value: "others" },
                { type: "word", value: "who" },
                { type: "word", value: "wield" },
                { type: "word", value: "substantial" },
                { type: "word", value: "influence" },
                { type: "word", value: "over" },
                { type: "word", value: "their" },
                { type: "word", value: "followers." },
                { type: "emoji", value: "🌟" },
              ]}
              className="mt-6 max-w-4xl text-center text-3xl font-semibold leading-snug tracking-tight md:text-4xl lg:text-5xl"
            />
          </div>
        </section>

        {/* Horizontal Scroll Text */}
        <section className="relative bg-background">
          <HorizontalScrollText
            text="We Back Bold Founders"
            className="text-[20vw] font-extrabold leading-none tracking-tighter text-foreground"
            cards={scrollCards}
          />
        </section>

        {/* Domain Expertise */}
        <section data-navbar-color="#ffffff" className="relative z-[1] bg-background px-6 py-24 md:py-32 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Section Heading */}
            <h2 className="text-4xl font-extrabold italic tracking-tight md:text-5xl lg:text-6xl">
              Uniquely positioned
              <br />
              to invest
            </h2>

            {/* Cards Grid */}
            <div className="mt-12 grid gap-4 md:mt-16">
              {/* Top Row — 2 cards */}
              <div className="grid gap-4 md:grid-cols-5">
                <div className="group flex min-h-[280px] cursor-pointer flex-col justify-between rounded-2xl bg-foreground/[0.04] p-8 transition-colors duration-500 hover:bg-[#6b3ce3] md:col-span-3 md:p-10">
                  <h3 className="text-2xl font-bold tracking-tight transition-colors duration-500 group-hover:text-white md:text-3xl">
                    Domain Expertise
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/60 transition-colors duration-500 group-hover:text-white/85 md:text-lg">
                    We are uniquely positioned to invest in celebrity-founded
                    brands as we have domain expertise.
                  </p>
                </div>

                <div className="group flex min-h-[280px] cursor-pointer flex-col justify-between rounded-2xl bg-foreground/[0.04] p-8 transition-colors duration-500 hover:bg-[#e63946] md:col-span-2 md:p-10">
                  <h3 className="text-2xl font-bold tracking-tight transition-colors duration-500 group-hover:text-white md:text-3xl">
                    Proven Founders
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/60 transition-colors duration-500 group-hover:text-white/85 md:text-lg">
                    Our team brings unparalleled experience, including
                    co-founders of some of the most successful celebrity-founded
                    brands like Feastables and The Honest Co.
                  </p>
                </div>
              </div>

              {/* Bottom Row — 3 cards */}
              <div className="grid gap-4 md:grid-cols-3">
                <div className="group flex min-h-[280px] cursor-pointer flex-col justify-between rounded-2xl bg-foreground/[0.04] p-8 transition-colors duration-500 hover:bg-[#0d9488] md:p-10">
                  <h3 className="text-2xl font-bold tracking-tight transition-colors duration-500 group-hover:text-white md:text-3xl">
                    Billion-Dollar
                    <br />
                    Builders
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/60 transition-colors duration-500 group-hover:text-white/85 md:text-lg">
                    We know what it takes to turn a celebrity-founded brand into
                    a billion-dollar enterprise.
                  </p>
                </div>

                <div className="group flex min-h-[280px] cursor-pointer flex-col justify-between rounded-2xl bg-foreground/[0.04] p-8 transition-colors duration-500 hover:bg-[#2563eb] md:p-10">
                  <h3 className="text-2xl font-bold tracking-tight transition-colors duration-500 group-hover:text-white md:text-3xl">
                    Hands-On
                    <br />
                    Advisors
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/60 transition-colors duration-500 group-hover:text-white/85 md:text-lg">
                    We serve as advisors to our portfolio companies, guiding
                    them through every stage of growth.
                  </p>
                </div>

                <div className="group flex min-h-[280px] cursor-pointer flex-col justify-between rounded-2xl bg-foreground/[0.04] p-8 transition-colors duration-500 hover:bg-[#ea580c] md:p-10">
                  <h3 className="text-2xl font-bold tracking-tight transition-colors duration-500 group-hover:text-white md:text-3xl">
                    Scaling Celebrity
                    <br />
                    Influence
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/60 transition-colors duration-500 group-hover:text-white/85 md:text-lg">
                    Sharing practical strategies for leveraging celebrity
                    influence to scale successfully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section data-navbar-color="#ffffff" className="relative z-[1] overflow-hidden bg-background px-6 py-24 md:py-32 lg:px-8">
          <div className="relative z-10 mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-20">
            {/* Left Column */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-foreground/40">
                  Why Us
                </p>
                <p className="mt-8 max-w-md text-lg leading-relaxed text-foreground/60 md:text-xl">
                  As a VC fund exclusively focused on celebrity-founded brands,
                  HotStart VC provides a unique value-add that other
                  institutional investors may not be able to offer. We create
                  value for our portfolio companies in the following key areas:
                </p>
              </div>

              <a
                href="/team"
                className="mt-12 inline-flex w-fit items-center gap-4 rounded-full border border-border px-8 py-4 font-mono text-sm text-foreground/60 transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                Meet the team
                <span className="text-lg">&rarr;</span>
              </a>
            </div>

            {/* Right Column — numbered items */}
            <div className="flex flex-col gap-0">
              {/* Item 01 */}
              <div className="flex items-start gap-8 pb-10 pt-2">
                <div className="flex flex-shrink-0 flex-col items-center gap-2">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-border font-mono text-sm text-foreground/50">
                    01
                  </span>
                  <span className="text-xs tracking-wide text-foreground/35">
                    Strategy
                  </span>
                </div>
                <h3 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl lg:text-4xl">
                  Celebrity Strategy
                  <br />
                  &amp; Brokering.
                </h3>
              </div>
              <div className="h-px w-full bg-border" />

              {/* Item 02 */}
              <div className="flex items-start gap-8 pb-10 pt-10">
                <div className="flex flex-shrink-0 flex-col items-center gap-2">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-border font-mono text-sm text-foreground/50">
                    02
                  </span>
                  <span className="text-xs tracking-wide text-foreground/35">
                    Operations
                  </span>
                </div>
                <h3 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl lg:text-4xl">
                  Advisory Operating
                  <br />
                  Team.
                </h3>
              </div>
              <div className="h-px w-full bg-border" />

              {/* Item 03 */}
              <div className="flex items-start gap-8 pb-2 pt-10">
                <div className="flex flex-shrink-0 flex-col items-center gap-2">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-border font-mono text-sm text-foreground/50">
                    03
                  </span>
                  <span className="text-xs tracking-wide text-foreground/35">
                    Growth
                  </span>
                </div>
                <h3 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl lg:text-4xl">
                  Fundraising.
                </h3>
              </div>
              <div className="h-px w-full bg-border" />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
