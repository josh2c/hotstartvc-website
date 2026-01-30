"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface Slide {
  number: number;
  before: string;
  emphasis: string;
  after: string;
  custom?: boolean;
  pillColor: string;
}

const slides: Slide[] = [
  {
    number: 1,
    before: "People buy from",
    emphasis: "people they trust.",
    after: "Fans don\u2019t just follow celebrities, they buy what they build.",
    pillColor: "#f4b8c1",
  },
  {
    number: 2,
    before: "Millions of followers means",
    emphasis: "instant distribution.",
    after:
      "No ad spend needed. Honest Co, PRIME, SKIMS, and Fenty proved it.",
    pillColor: "#a8e6cf",
  },
  {
    number: 3,
    before: "Celebrity brands now rival legacy giants and",
    emphasis: "the wave is just starting.",
    after: "HotStart VC fuels what\u2019s next with capital and expertise.",
    pillColor: "#c3b1e1",
  },
  {
    number: 4,
    before: "Are you a",
    emphasis: "founder or investor?",
    after: "Let\u2019s build something extraordinary together.",
    custom: true,
    pillColor: "#f4b8c1",
  },
];

export default function InsightCarousel() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    if (!wrapper || !sticky) return;

    const slideEls = sticky.querySelectorAll<HTMLDivElement>("[data-slide]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      wrapper.style.height = "auto";
      slideEls.forEach((el, i) => {
        el.style.opacity = i === 0 ? "1" : "0";
        el.style.transform = "none";
      });
      return;
    }

    function onScroll() {
      const rect = wrapper!.getBoundingClientRect();
      const scrollableDistance = wrapper!.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / scrollableDistance));

      slideEls.forEach((el) => {
        const index = parseInt(el.dataset.slide || "0", 10);
        // Each slide occupies an equal portion of the scroll
        const slideStart = index / slides.length;
        const slideEnd = (index + 1) / slides.length;

        const fadeOut = 0.05; // outgoing disappears fast
        const gap = 0.03;    // pause between out and in
        const fadeIn = 0.05; // incoming appears fast

        // Outgoing ends at slideEnd, incoming starts after a gap
        const outStart = slideEnd - fadeOut;
        const inEnd = slideStart + fadeIn;

        let opacity: number;
        let translateY: number;
        let scale: number;

        if (progress < slideStart - gap - fadeIn) {
          // Not yet visible
          opacity = 0;
          translateY = 60;
          scale = 0.95;
        } else if (progress < inEnd) {
          // Fading in
          const t = (progress - (slideStart - gap - fadeIn)) / (gap + fadeIn * 2);
          opacity = Math.min(1, t);
          translateY = 60 * (1 - Math.min(1, t));
          scale = 0.95 + 0.05 * Math.min(1, t);
        } else if (progress < outStart) {
          // Fully visible
          opacity = 1;
          translateY = 0;
          scale = 1;
        } else if (index === slides.length - 1 && progress >= outStart) {
          // Last slide stays visible
          opacity = 1;
          translateY = 0;
          scale = 1;
        } else if (progress < slideEnd) {
          // Fading out (fast)
          const t = (progress - outStart) / fadeOut;
          opacity = 1 - t;
          translateY = -80 * t;
          scale = 1 - 0.05 * t;
        } else {
          // Past
          opacity = 0;
          translateY = -80;
          scale = 0.95;
        }

        // First slide starts visible
        if (index === 0 && progress <= fadeIn) {
          opacity = 1;
          translateY = 0;
          scale = 1;
        }

        el.style.opacity = String(opacity);
        el.style.transform = `translateY(${translateY}px) scale(${scale})`;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${(slides.length + 1) * 100}vh` }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 flex min-h-screen items-center justify-center px-6 lg:px-8"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.number}
            data-slide={i}
            className="absolute mx-auto max-w-5xl text-center transition-none"
            style={{ opacity: 0 }}
          >
            {/* Pill number badge */}
            <div className="mb-12 flex justify-center">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full text-xl font-extrabold italic text-[#1a1a2e]"
                style={{ backgroundColor: slide.pillColor }}
              >
                {slide.number}
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              {slide.custom ? (
                <>
                  {slide.before}{" "}
                  <span className="relative inline-block">
                    {/* Arrow curving from upper-right into founder pill */}
                    <svg
                      className="absolute -top-12 right-0 text-foreground/30 md:-top-16"
                      width="90"
                      height="50"
                      viewBox="0 0 90 50"
                      fill="none"
                    >
                      <path
                        d="M85 8 C70 2, 50 2, 45 20 C42 30, 44 40, 45 47"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="4 3"
                      />
                      <path
                        d="M41 41 L45 48 L49 41"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="absolute -top-14 -right-14 text-xs font-medium text-foreground/35 md:-top-[4.5rem] md:-right-16 md:text-sm">
                      pitch us
                    </span>
                    <Link
                      href="/contact"
                      className="relative z-10 inline-block rounded-full px-6 py-1 italic text-[#1a1a2e] transition-opacity hover:opacity-80 md:px-10 md:py-2"
                      style={{ backgroundColor: slide.pillColor }}
                    >
                      founder
                    </Link>
                  </span>
                  {" "}or{" "}
                  <span className="relative inline-block">
                    {/* Squiggle arrow from the left */}
                    <svg
                      className="absolute top-1/2 -left-20 -translate-y-1/2 text-foreground/30 md:-left-28"
                      width="70"
                      height="30"
                      viewBox="0 0 70 30"
                      fill="none"
                    >
                      <path
                        d="M0 15 C10 5, 15 25, 25 15 C35 5, 40 25, 50 15 C55 10, 58 13, 62 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="4 3"
                      />
                      <path
                        d="M58 10 L63 15 L58 20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="absolute top-1/2 -left-28 -translate-y-1/2 text-xs font-medium text-foreground/35 md:-left-40 md:text-sm">
                      join us
                    </span>
                    <Link
                      href="/hotstart-angels"
                      className="relative z-10 inline-block rounded-full px-6 py-1 italic text-[#1a1a2e] transition-opacity hover:opacity-80 md:px-10 md:py-2"
                      style={{ backgroundColor: "#a8e6cf" }}
                    >
                      investor?
                    </Link>
                  </span>
                  {" "}
                  {slide.after}
                </>
              ) : (
                <>
                  {slide.before}{" "}
                  <span
                    className="inline-block rounded-full px-6 py-1 italic text-[#1a1a2e] md:px-10 md:py-2"
                    style={{ backgroundColor: slide.pillColor }}
                  >
                    {slide.emphasis}
                  </span>{" "}
                  {slide.after}
                </>
              )}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
