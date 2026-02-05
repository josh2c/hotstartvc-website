"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  portfolioCompanies,
  type PortfolioCompany,
} from "@/lib/portfolio-data";

export default function PortfolioWall() {
  const [selected, setSelected] = useState<PortfolioCompany | null>(null);
  const [panelVisible, setPanelVisible] = useState(false);

  function openPanel(company: PortfolioCompany) {
    setSelected(company);
    // Allow DOM to paint before animating in
    requestAnimationFrame(() => setPanelVisible(true));
  }

  function closePanel() {
    setPanelVisible(false);
    setTimeout(() => setSelected(null), 350);
  }

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") closePanel();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lock body scroll when panel is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section className="px-6 pb-24 pt-28 md:pb-32 md:pt-36 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Portfolio
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground/50 md:text-xl">
          The brands and founders we back. Click any company to learn more.
        </p>
      </div>

      {/* Company Grid */}
      <div className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioCompanies.map((company) => (
          <button
            key={company.name}
            onClick={() => openPanel(company)}
            className="group relative text-left transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Card with thick accent border */}
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{
                border: `5px solid rgb(${company.accentColor})`,
              }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4]">
                {company.image ? (
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center"
                    style={{
                      backgroundColor: `rgba(${company.accentColor}, 0.1)`,
                    }}
                  >
                    <span
                      className="text-8xl font-extrabold"
                      style={{ color: `rgb(${company.accentColor})` }}
                    >
                      {company.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Info badge — overlapping bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
                <div
                  className="relative overflow-hidden rounded-2xl px-6 pb-5 pt-5"
                  style={{ backgroundColor: `rgb(${company.accentColor})` }}
                >
                  {/* Arrow icon */}
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke={`rgb(${company.accentColor})`}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 13L13 1M13 1H3M13 1V11" />
                    </svg>
                  </div>

                  {/* Company name */}
                  <h3 className="pr-12 text-xl font-extrabold leading-tight tracking-tight text-white md:text-2xl">
                    {company.name}
                  </h3>

                  {/* Founder tag */}
                  <span className="mt-3 inline-block rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold text-white">
                    {company.founder}
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Backdrop overlay */}
      {selected && (
        <div
          className="fixed inset-0 z-40 transition-opacity duration-350"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            opacity: panelVisible ? 1 : 0,
          }}
          onClick={closePanel}
        />
      )}

      {/* Detail Panel — slides in from right */}
      {selected && (
        <aside
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-lg flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-350 ease-out md:max-w-xl"
          style={{
            transform: panelVisible ? "translateX(0)" : "translateX(100%)",
          }}
        >
          {/* Close button */}
          <button
            onClick={closePanel}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-foreground/70 backdrop-blur-sm transition-colors hover:bg-black/20"
            aria-label="Close"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Company Image */}
          <div className="relative aspect-[4/3] w-full flex-shrink-0">
            {selected.image ? (
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 576px"
              />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center"
                style={{
                  backgroundColor: `rgba(${selected.accentColor}, 0.15)`,
                }}
              >
                <span
                  className="text-7xl font-extrabold"
                  style={{ color: `rgb(${selected.accentColor})` }}
                >
                  {selected.name.charAt(0)}
                </span>
              </div>
            )}
            {/* Gradient fade into content */}
            <div
              className="absolute inset-x-0 bottom-0 h-24"
              style={{
                background: `linear-gradient(to top, rgb(${selected.accentColor}), transparent)`,
              }}
            />
          </div>

          {/* Content area */}
          <div
            className="flex flex-1 flex-col gap-6 px-8 pb-10 pt-8 md:px-10"
            style={{
              backgroundColor: `rgb(${selected.accentColor})`,
            }}
          >
            {/* Category badge */}
            <span className="w-fit rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
              {selected.category}
            </span>

            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              {selected.name}
            </h2>

            <p className="text-lg font-medium text-white/80">
              Founded by {selected.founder}
            </p>

            <p className="text-base leading-relaxed text-white/70 md:text-lg">
              {selected.description}
            </p>
          </div>
        </aside>
      )}
    </section>
  );
}
