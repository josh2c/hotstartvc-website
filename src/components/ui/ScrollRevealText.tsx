"use client";

import { useEffect, useRef } from "react";

type Segment = { type: "word"; value: string } | { type: "emoji"; value: string };

interface ScrollRevealTextProps {
  segments: Segment[];
  className?: string;
}

export default function ScrollRevealText({ segments, className = "" }: ScrollRevealTextProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    if (!wrapper || !sticky) return;

    const items = sticky.querySelectorAll<HTMLSpanElement>("[data-scroll-item]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      wrapper.style.height = "auto";
      items.forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "scale(1)";
      });
      return;
    }

    function onScroll() {
      const rect = wrapper!.getBoundingClientRect();
      const wrapperHeight = wrapper!.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Scrollable distance = wrapper height minus one viewport (the sticky portion)
      const scrollableDistance = wrapperHeight - viewportHeight;

      // How far through the wrapper we've scrolled (0 at top, 1 at bottom)
      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / scrollableDistance));

      items.forEach((item) => {
        const threshold = parseFloat(item.dataset.threshold || "0");
        const revealed = threshold < progress;

        if (item.dataset.type === "emoji") {
          item.style.opacity = revealed ? "1" : "0.15";
          item.style.transform = revealed ? "scale(1)" : "scale(0.4)";
        } else {
          item.style.opacity = revealed ? "1" : "0.15";
        }
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Tall wrapper creates the scroll distance; 3x viewport height
    <div ref={wrapperRef} style={{ height: "300vh" }}>
      {/* Sticky container pins the text to the center of the screen */}
      <div
        ref={stickyRef}
        className="sticky top-0 flex min-h-screen items-center justify-center px-6 lg:px-8"
      >
        <p className={className}>
          {segments.map((seg, i) => {
            const threshold = i / segments.length;

            if (seg.type === "emoji") {
              return (
                <span
                  key={i}
                  data-scroll-item
                  data-type="emoji"
                  data-threshold={threshold}
                  className="inline-block transition-all duration-300"
                  style={{ opacity: 0.15, transform: "scale(0.4)" }}
                >
                  {seg.value}
                </span>
              );
            }

            return (
              <span
                key={i}
                data-scroll-item
                data-type="word"
                data-threshold={threshold}
                className="inline transition-opacity duration-150"
                style={{ opacity: 0.15 }}
              >
                {seg.value}{" "}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
