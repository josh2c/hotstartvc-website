"use client";

import { useState, useRef, useCallback, useEffect, type MouseEvent } from "react";
import { cn } from "@/lib/cn";
import {
  portfolioCompanies,
  portfolioCategories,
  type PortfolioCategory,
} from "@/lib/portfolio-data";
import PortfolioCard from "@/components/ui/PortfolioCard";

export default function PortfolioCarousel() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory | "All">("All");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  // Custom cursor state
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Sticky horizontal scroll refs
  const stickyWrapperRef = useRef<HTMLDivElement>(null);

  const filteredCompanies =
    activeFilter === "All"
      ? portfolioCompanies
      : portfolioCompanies.filter((c) => c.category === activeFilter);

  function handleFilterClick(category: PortfolioCategory | "All") {
    setActiveFilter(category);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }

  // Vertical scroll → horizontal scroll translation
  useEffect(() => {
    const wrapper = stickyWrapperRef.current;
    const scroller = scrollRef.current;
    if (!wrapper || !scroller) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      wrapper.style.height = "auto";
      return;
    }

    function onScroll() {
      const rect = wrapper!.getBoundingClientRect();
      const wrapperHeight = wrapper!.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = wrapperHeight - viewportHeight;

      // How far into the sticky section we've scrolled (0→1)
      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / scrollableDistance));

      // Map vertical progress to horizontal scroll
      const maxScrollLeft = scroller!.scrollWidth - scroller!.clientWidth;
      scroller!.scrollLeft = progress * maxScrollLeft;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [filteredCompanies]);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    dragStart.current = {
      x: e.pageX - scrollRef.current.offsetLeft,
      scrollLeft: scrollRef.current.scrollLeft,
    };
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (carouselRef.current) {
        const rect = carouselRef.current.getBoundingClientRect();
        setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }

      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - dragStart.current.x) * 1.5;
      scrollRef.current.scrollLeft = dragStart.current.scrollLeft - walk;
    },
    [isDragging]
  );

  const stopDrag = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <section>
      {/* Heading — normal flow above sticky area */}
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-12 lg:px-8 lg:pt-36">
        <div className="max-w-5xl">
          <p className="max-w-4xl text-3xl font-semibold leading-snug tracking-tight md:text-4xl lg:text-5xl">
            A selection of celebrity-founded brands we&apos;ve been fortunate
            enough to back. From beauty to beverages, these founders are building
            category-defining companies.
          </p>
        </div>

        {/* Filter pills */}
        <div className="mt-10">
          <div className="flex flex-wrap gap-2">
            {(["All", ...portfolioCategories] as const).map((category) => (
              <button
                key={category}
                onClick={() => handleFilterClick(category)}
                className={cn(
                  "cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                  activeFilter === category
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-transparent text-foreground/70 hover:border-foreground/30 hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky scroll wrapper — tall container that drives horizontal scroll */}
      <div ref={stickyWrapperRef} style={{ height: "300vh" }}>
        <div className="sticky top-0 flex h-screen items-center">
          {/* Carousel */}
          <div
            ref={carouselRef}
            className="relative w-full overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              setHoveredCompany(null);
              stopDrag();
            }}
          >
            {/* Custom cursor — arrow + company name label */}
            <div
              className="pointer-events-none absolute z-50 hidden md:block"
              style={{
                left: cursorPos.x,
                top: cursorPos.y,
                transform: "translate(-50%, -120%)",
                opacity: hoveredCompany ? 1 : 0,
                transition: "opacity 0.2s ease",
              }}
            >
              <div className="flex items-center gap-2 rounded-full bg-foreground px-4 py-2 shadow-lg">
                <span className="whitespace-nowrap text-xs font-semibold text-background">
                  {hoveredCompany || ""}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-background"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>

            <div
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseUp={stopDrag}
              className={cn(
                "scrollbar-hide flex gap-5 overflow-x-auto px-6 md:gap-6 lg:px-8",
                isDragging ? "cursor-grabbing select-none" : "cursor-none"
              )}
            >
              {filteredCompanies.length > 0 ? (
                filteredCompanies.map((company) => (
                  <div
                    key={company.name}
                    onMouseEnter={() => setHoveredCompany(company.name)}
                    onMouseLeave={() => setHoveredCompany(null)}
                  >
                    <PortfolioCard company={company} />
                  </div>
                ))
              ) : (
                <div className="flex w-full items-center justify-center py-20">
                  <p className="text-lg text-foreground/40">
                    No companies in this category yet.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
