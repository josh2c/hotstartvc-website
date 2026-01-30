import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioCarousel from "@/components/sections/PortfolioCarousel";

export const metadata: Metadata = {
  title: "Portfolio | HotStart VC",
  description:
    "Explore the portfolio of celebrity-founded brands backed by HotStart VC.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-background text-foreground">
        <PortfolioCarousel />
      </main>
      <Footer />
    </>
  );
}
