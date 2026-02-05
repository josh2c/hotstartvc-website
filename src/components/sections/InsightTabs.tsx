"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface InsightTab {
  id: number;
  label: string;
  before: string;
  emphasis: string;
  after: string;
  pillColor: string;
  isCta?: boolean;
}

const tabs: InsightTab[] = [
  {
    id: 1,
    label: "Trust",
    before: "People buy from",
    emphasis: "people they trust.",
    after: "Fans don\u2019t just follow celebrities, they buy what they build.",
    pillColor: "#f4b8c1",
  },
  {
    id: 2,
    label: "Distribution",
    before: "Millions of followers means",
    emphasis: "instant distribution.",
    after: "No ad spend needed. Honest Co, PRIME, SKIMS, and Fenty proved it.",
    pillColor: "#a8e6cf",
  },
  {
    id: 3,
    label: "The Wave",
    before: "Celebrity brands now rival legacy giants and",
    emphasis: "the wave is just starting.",
    after: "HotStart VC fuels what\u2019s next with capital and expertise.",
    pillColor: "#c3b1e1",
  },
  {
    id: 4,
    label: "Join Us",
    before: "Are you a",
    emphasis: "founder or investor?",
    after: "Let\u2019s build something extraordinary together.",
    pillColor: "#f4b8c1",
    isCta: true,
  },
];

export default function InsightTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-6 py-24 md:py-32 lg:px-8"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <div className="mx-auto max-w-5xl text-center">
        {/* Section label */}
        <p className="text-sm font-bold uppercase tracking-widest text-foreground/40">
          Our Thesis
        </p>

        {/* Tab bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className="rounded-full px-4 py-1.5 text-sm font-bold transition-all duration-300 md:px-6 md:py-2 md:text-base"
              style={{
                backgroundColor:
                  activeTab === i ? tab.pillColor : "rgba(10,10,10,0.06)",
                color: activeTab === i ? "#1a1a2e" : "rgba(10,10,10,0.5)",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="relative mt-16 md:mt-20" style={{ minHeight: "380px" }}>
          {tabs.map((tab, i) => (
            <div
              key={tab.id}
              className="absolute inset-0 flex flex-col items-center justify-start"
              style={{
                opacity: activeTab === i ? 1 : 0,
                transform:
                  activeTab === i ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                pointerEvents: activeTab === i ? "auto" : "none",
              }}
            >
              {/* Headline */}
              <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
                {tab.isCta ? (
                  <>
                    {tab.before}{" "}
                    <span className="relative inline-block">
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
                        style={{ backgroundColor: tab.pillColor }}
                      >
                        founder
                      </Link>
                    </span>{" "}
                    or{" "}
                    <span className="relative inline-block">
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
                    </span>{" "}
                    {tab.after}
                  </>
                ) : (
                  <>
                    {tab.before}{" "}
                    <span
                      className="inline-block rounded-full px-6 py-1 italic text-[#1a1a2e] md:px-10 md:py-2"
                      style={{ backgroundColor: tab.pillColor }}
                    >
                      {tab.emphasis}
                    </span>{" "}
                    {tab.after}
                  </>
                )}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
