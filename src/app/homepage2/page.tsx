import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsCards from "@/components/sections/StatsCards";
import Thesis from "@/components/sections/Thesis";
import InsightCarousel from "@/components/sections/InsightCarousel";

export default function HomePage2() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsCards />
        <Thesis />
        <InsightCarousel />
      </main>
      <Footer />
    </>
  );
}
