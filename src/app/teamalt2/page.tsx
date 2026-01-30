import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import TeamBoard from "@/components/sections/TeamBoard";

export const metadata: Metadata = {
  title: "Team | HotStart VC",
  description:
    "Meet the team behind HotStart VC — backing celebrity-founded brands.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-background text-foreground">
        <div className="px-6 pt-32 pb-4 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              Our Team
            </h1>
            <p className="mt-4 max-w-lg text-lg text-foreground/50">
              The people fueling the next generation of celebrity-founded
              brands.
            </p>
          </div>
        </div>

        <TeamBoard />
      </main>
    </>
  );
}
