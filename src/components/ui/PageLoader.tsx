"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const SESSION_KEY = "hotstart-loader-seen";

function hasSeenLoader(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function markLoaderSeen(): void {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // Silently fail — loader shows every time if storage unavailable
  }
}

export default function PageLoader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(() => hasSeenLoader());

  useEffect(() => {
    if (hasSeenLoader()) return;

    markLoaderSeen();

    // 900ms CSS animation + 200ms hold, then fade out over 500ms
    const holdTimer = setTimeout(() => setDone(true), 1100);
    const hideTimer = setTimeout(() => setHidden(true), 1600);

    return () => {
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
    </div>
  );
}
