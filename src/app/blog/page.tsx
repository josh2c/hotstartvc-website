import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogGrid from "@/components/sections/BlogGrid";
import NewsletterSignup from "@/components/sections/NewsletterSignup";

export const metadata: Metadata = {
  title: "Blog | HotStart VC",
  description:
    "Insights, analysis, and stories from HotStart VC on celebrity-founded brands and the future of influencer entrepreneurship.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-background text-foreground">
        {/* Page header */}
        <div className="px-6 pt-28 pb-12 md:pt-36 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              Blog
            </h1>
            <p className="mt-4 max-w-lg text-lg text-foreground/50">
              Insights and stories from the world of celebrity-founded brands.
            </p>
          </div>
        </div>

        <BlogGrid />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
