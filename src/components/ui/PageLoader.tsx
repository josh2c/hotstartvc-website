"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const SESSION_KEY = "hotstart-loader-seen";

export default function PageLoader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Check sessionStorage only on the client, inside useEffect
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "1") return;
    } catch {
      // sessionStorage unavailable — show loader
    }

    // First visit this session — show the loader
    setHidden(false);

    // Count up from 0 to 100 over 900ms (synced with CSS progress bar)
    const duration = 900;
    const interval = 30;
    const steps = duration / interval;
    const increment = 100 / steps;
    let current = 0;

    const counter = setInterval(() => {
      current += increment;
      if (current >= 100) {
        current = 100;
        clearInterval(counter);
      }
      setPercent(Math.round(current));
    }, interval);

    // 900ms CSS animation + 200ms hold, then fade out over 500ms
    const holdTimer = setTimeout(() => setDone(true), 1100);
    const hideTimer = setTimeout(() => {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // silently fail
      }
      setHidden(true);
    }, 1600);

    return () => {
      clearInterval(counter);
      clearTimeout(holdTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <div className="mb-10 animate-pulse">
        <Image
          src="/hotstart-logo.avif"
          alt="HotStart VC"
          width={220}
          height={80}
          priority
          className="object-contain"
        />
      </div>

      {/* Progress bar — CSS-driven animation */}
      <div className="w-48 h-[2px] bg-black/10 rounded-full overflow-hidden">
        <div className="h-full bg-[#0a0a0a] rounded-full animate-loader-progress" />
      </div>

      {/* Percentage counter */}
      <p className="mt-4 text-sm font-medium tabular-nums text-[#0a0a0a]/60">
        {percent}%
      </p>
    </div>
  );
}
