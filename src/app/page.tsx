import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsCards from "@/components/sections/StatsCards";
import Thesis from "@/components/sections/Thesis";
import InsightTabs from "@/components/sections/InsightTabs";

export const metadata: Metadata = {
  title: "HotStart VC | Fund Fast. Scale Smart. Win Big.",
  description:
    "HotStart is a new fund investing in celebrity-founded brands.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f5f5f3]">
        <Hero />
        <StatsCards />
        <Thesis />
        <InsightTabs />
      </main>
      <Footer />
    </>
  );
}
