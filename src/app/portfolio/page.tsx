import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioWall from "@/components/sections/PortfolioWall";

export const metadata: Metadata = {
  title: "Portfolio | HotStart VC",
  description:
    "Explore the HotStart VC portfolio — celebrity-founded brands across beauty, wellness, food & beverage, lifestyle, tech, and fashion.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-[#f5f5f3] text-foreground">
        <PortfolioWall />
      </main>
      <Footer />
    </>
  );
}
