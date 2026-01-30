import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "HotStart Angels | HotStart VC",
  description:
    "Join HotStart Angels — invest alongside us in the next wave of celebrity-founded brands. Minimum $5K entry.",
};

export default function HotStartAngelsPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="px-6 pt-12 pb-20 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-widest text-foreground/40">
              For Investors
            </p>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              HotStart Angels
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/60 md:text-xl">
              An angel syndicate enabling individual investors to co-invest
              alongside HotStart VC in celebrity-founded brands — with entry
              amounts starting at $5,000.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-t border-border px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              How It Works
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/[0.04]">
                  <span className="text-xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold">Deal Flow</h3>
                <p className="text-base leading-relaxed text-foreground/60">
                  We source deals from our network of celebrity founders,
                  managers, and agents — opportunities most investors never see.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/[0.04]">
                  <span className="text-xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold">Invest</h3>
                <p className="text-base leading-relaxed text-foreground/60">
                  Review curated deals and choose which celebrity-founded brands
                  to back. Minimum check size of $5,000 per deal.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/[0.04]">
                  <span className="text-xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold">Grow</h3>
                <p className="text-base leading-relaxed text-foreground/60">
                  Our team provides hands-on support to portfolio companies,
                  increasing the likelihood of outsized returns for all investors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="border-t border-border px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Why Join
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-foreground/[0.04] p-8">
                <h3 className="text-xl font-bold">Exclusive Access</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/60">
                  Get access to deals in celebrity-founded brands that are
                  typically reserved for institutional investors and insiders.
                </p>
              </div>

              <div className="rounded-2xl bg-foreground/[0.04] p-8">
                <h3 className="text-xl font-bold">Low Minimums</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/60">
                  Start investing with as little as $5,000 per deal — no fund
                  commitment required.
                </p>
              </div>

              <div className="rounded-2xl bg-foreground/[0.04] p-8">
                <h3 className="text-xl font-bold">Domain Expertise</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/60">
                  Our team has been involved in 55+ celebrity ventures, including
                  co-founding Feastables and The Honest Co.
                </p>
              </div>

              <div className="rounded-2xl bg-foreground/[0.04] p-8">
                <h3 className="text-xl font-bold">Community</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/60">
                  Join a network of like-minded investors, founders, family
                  offices, and even celebrities who invest alongside us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Ready to invest in the next wave?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-foreground/60">
              Apply to join HotStart Angels and get access to our next deal.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-base font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Apply Now
              </Link>
              <a
                href="mailto:contact@hotstart.vc"
                className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-8 py-3 text-base font-medium text-foreground transition-colors hover:border-foreground/40"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
