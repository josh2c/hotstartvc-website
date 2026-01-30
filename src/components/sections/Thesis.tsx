import Image from "next/image";

export default function Thesis() {
  return (
    <section className="relative overflow-hidden bg-muted px-6 py-24 lg:px-8">
      {/* Dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #0a0a0a 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Celebrity-founded brands outperform traditional brands
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
            Celebrities have generated unparalleled success and growth, building
            their own company with market leaders such as The Honest Co, PRIME,
            Aviation Gin, SKIMS, and Fenty. This is just the beginning. Inspired
            by their peers&apos; success, more celebrities are actively exploring
            opportunities to launch their own ventures, signaling a continuing
            wave of high-potential brands that HotStart VC fuels with funding and
            expertise.
          </p>
        </div>

        {/* Image area */}
        <div className="relative flex justify-center">
          {/* Decorative badge — top right */}
          <div className="absolute -top-4 -right-2 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-pink-300">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>

          {/* Main image */}
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl">
            <Image
              src="/hero-image.jpg"
              alt="MrBeast Burger grand opening event with massive crowd"
              fill
              className="h-full w-full object-cover"
            />
          </div>

          {/* Decorative badge — bottom left */}
          <div className="absolute -bottom-3 -left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground bg-background">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
          </div>

          {/* Brand pill — bottom right */}
          <div className="absolute -right-4 -bottom-4 z-10 rounded-full border-2 border-foreground bg-background px-5 py-2">
            <span className="text-sm font-extrabold tracking-tight">
              HotStart VC
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
