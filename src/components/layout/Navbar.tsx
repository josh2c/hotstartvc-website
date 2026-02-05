"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navColor, setNavColor] = useState<string | null>(null);
  const isDark = variant === "dark";

  useEffect(() => {
    function onScroll() {
      const sections = document.querySelectorAll<HTMLElement>("[data-navbar-color]");
      let matched: string | null = null;

      // Last section in DOM order whose top has reached the navbar wins
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 64) {
          matched = section.dataset.navbarColor || null;
        }
      });

      setNavColor(matched);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const defaultBg = isDark ? "bg-[#0a0a0a]" : "bg-background";

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${navColor ? "" : defaultBg}`}
      style={navColor ? { backgroundColor: navColor } : undefined}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/hotstart-logo.avif"
            alt="HotStart VC"
            width={140}
            height={40}
            priority
            className={`object-contain ${isDark ? "brightness-0 invert" : ""}`}
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className={`hidden items-center gap-1 rounded-full border px-2 py-1 md:flex ${isDark ? "border-white/20" : "border-border"}`}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${isDark ? "text-white/70 hover:text-white" : "text-foreground/70 hover:text-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA — fanned buttons */}
        <div className="relative hidden h-16 w-44 md:block">
          <Link
            href="/hotstart-angels"
            className={`absolute left-0 top-7 z-0 inline-flex items-center justify-center rounded-full border px-5 py-2 text-sm font-medium transition-all hover:z-20 hover:scale-105 ${isDark ? "border-white/30 bg-[#0a0a0a] text-white hover:bg-white/10" : "border-foreground/20 bg-white text-foreground hover:border-foreground/40"}`}
            style={{ transform: "rotate(-4deg)" }}
          >
            Invest With Us 🚀
          </Link>
          <Link
            href="/contact"
            className={`absolute left-5 top-0 z-10 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-all hover:z-20 hover:scale-105 ${isDark ? "bg-white text-[#0a0a0a] hover:bg-white/90" : "bg-foreground text-background hover:bg-foreground/90"}`}
            style={{ transform: "rotate(2deg)" }}
          >
            Got an Idea?
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isDark ? "text-white" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
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
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`border-t px-6 pb-6 md:hidden ${isDark ? "border-white/10 bg-[#0a0a0a]" : "border-border bg-background"}`}>
          <div className="flex flex-col gap-3 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${isDark ? "text-white/70 hover:text-white" : "text-foreground/70 hover:text-foreground"}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/hotstart-angels"
              onClick={() => setMobileOpen(false)}
              className={`rounded-full border px-5 py-2 text-center text-sm font-medium ${isDark ? "border-white/30 text-white" : "border-foreground/20 text-foreground"}`}
            >
              Invest With Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className={`rounded-full px-5 py-2 text-center text-sm font-medium ${isDark ? "bg-white text-[#0a0a0a]" : "bg-foreground text-background"}`}
            >
              Got an Idea?
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
