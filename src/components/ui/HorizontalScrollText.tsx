"use client";

import { useEffect, useRef, useState } from "react";

export interface FloatingCard {
  title: string;
  description: string;
  color: string;
  position: { top: string; left: string };
}

interface HorizontalScrollTextProps {
  text: string;
  className?: string;
  cards?: FloatingCard[];
}

export default function HorizontalScrollText({ text, className = "", cards = [] }: HorizontalScrollTextProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [openCard, setOpenCard] = useState<number | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const textEl = textRef.current;
    if (!wrapper || !textEl) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      wrapper.style.height = "auto";
      textEl.style.transform = "translateX(0)";
      return;
    }

    function onScroll() {
      const rect = wrapper!.getBoundingClientRect();
      const wrapperHeight = wrapper!.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = wrapperHeight - viewportHeight;

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / scrollableDistance));

      const textWidth = textEl!.scrollWidth;
      const viewportWidth = window.innerWidth;
      const overflow = textWidth - viewportWidth;

      const translateX = -(overflow + viewportWidth * 0.1) * progress;

      textEl!.style.transform = `translateX(${translateX}px)`;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: "300vh" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Scrolling text + cards move together */}
        <div
          ref={textRef}
          className={`relative ${className}`}
          style={{ whiteSpace: "nowrap", willChange: "transform" }}
        >
          {text}

          {/* Floating cards — positioned relative to the text */}
          {cards.map((card, i) => (
            <div
              key={i}
              className="absolute z-10"
              style={{ top: card.position.top, left: card.position.left, fontSize: "1.125rem", letterSpacing: "normal", lineHeight: "1.5", fontWeight: 600 }}
            >
              <button
                onClick={() => setOpenCard(openCard === i ? null : i)}
                className="flex w-max items-center gap-3 whitespace-nowrap rounded-full px-6 py-3 text-lg font-semibold shadow-lg transition-transform hover:scale-105"
                style={{ backgroundColor: card.color, color: "#1a1a2e" }}
              >
                {card.title}
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a1a2e]"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${openCard === i ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              {/* Expanded card */}
              <div
                className="mt-2 w-max overflow-hidden whitespace-normal rounded-2xl shadow-xl transition-all duration-300"
                style={{
                  backgroundColor: card.color,
                  color: "#1a1a2e",
                  maxHeight: openCard === i ? "300px" : "0",
                  opacity: openCard === i ? 1 : 0,
                  padding: openCard === i ? "24px" : "0 24px",
                }}
              >
                <p className="max-w-sm text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
