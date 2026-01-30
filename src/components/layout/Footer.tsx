"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");

  return (
    <footer className="bg-background px-6 py-16 md:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-20">
        {/* Left Column */}
        <div>
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* X / Twitter */}
            <Link
              href="https://x.com/hotstartvc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground/80 transition-colors hover:bg-foreground hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>

            {/* Instagram */}
            <Link
              href="https://instagram.com/hotstartvc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-white transition-opacity hover:opacity-80"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://linkedin.com/company/hotstartvc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground/80 transition-colors hover:bg-foreground hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>

          {/* Email */}
          <p className="mt-10 text-2xl font-bold tracking-tight md:text-3xl">
            contact@hotstart.vc
          </p>

          {/* Nav Links */}
          <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "About", href: "/about" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Team", href: "/team" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/50 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Column — Newsletter */}
        <div>
          <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
            What&apos;s the team at HotStart thinking about this week?
          </h3>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="mt-8 flex flex-col gap-0"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-foreground/20 bg-transparent py-4 text-lg text-foreground placeholder:text-foreground/35 outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 transition-colors focus:border-foreground/50"
            />
            <label htmlFor="footer-twitter" className="sr-only">
              Twitter handle (optional)
            </label>
            <input
              id="footer-twitter"
              type="text"
              placeholder="@ twitter (optional)"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              className="border-b border-foreground/20 bg-transparent py-4 text-lg text-foreground placeholder:text-foreground/35 outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 transition-colors focus:border-foreground/50"
            />
            <label htmlFor="footer-instagram" className="sr-only">
              Instagram handle (optional)
            </label>
            <input
              id="footer-instagram"
              type="text"
              placeholder="@ instagram (optional)"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              className="border-b border-foreground/20 bg-transparent py-4 text-lg text-foreground placeholder:text-foreground/35 outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 transition-colors focus:border-foreground/50"
            />

            <button
              type="submit"
              className="mt-8 w-fit rounded-full border border-foreground/30 px-8 py-3 text-base font-medium text-foreground/70 transition-colors hover:border-foreground hover:text-foreground"
            >
              Sign up for our newsletter
            </button>
          </form>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mx-auto mt-16 max-w-7xl text-xs text-foreground/30">
        &copy; {new Date().getFullYear()} HotStart VC. All rights reserved.
      </div>
    </footer>
  );
}
