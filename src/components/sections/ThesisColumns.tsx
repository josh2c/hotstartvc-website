import Image from "next/image";

const purposeText =
  "At HotStart VC, our focus is clear: we invest in celebrity-founded brands that have a unique and differentiated product-market-fit. For us, celebrities encompass a broad spectrum\u2014ranging from influencers and creators to athletes, actors, musicians, and others who wield substantial influence over their followers.";

export default function ThesisColumns() {
  return (
    <section className="px-6 py-24 md:py-32 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
        {/* Left — large photo */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:aspect-auto md:min-h-[500px]">
          <Image
            src="/hero-image.jpg"
            alt="MrBeast Burger grand opening event with massive crowd"
            fill
            className="object-cover"
          />
        </div>

        {/* Right — purpose content */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-widest text-foreground/40">
            Our Purpose
          </p>

          <p className="mt-8 text-xl leading-relaxed text-foreground/60 md:text-2xl">
            {purposeText}
          </p>
        </div>
      </div>
    </section>
  );
}
