"use client";

import { useEffect, useRef, useCallback } from "react";

const EMOJIS = ["🚀", "🎯", "📱", "⚡", "🎬", "🎵", "🌟", "🔥", "💰", "✨"];

interface EmojiBurstProps {
  children: React.ReactNode;
  className?: string;
}

export default function EmojiBurst({ children, className = "" }: EmojiBurstProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawnRef = useRef(0);
  const activeRef = useRef(false);

  const spawnEmoji = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const count = 3 + Math.floor(Math.random() * 3); // 3-5 emojis per burst

    for (let i = 0; i < count; i++) {
      const el = document.createElement("span");
      const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      el.textContent = emoji;
      el.setAttribute("aria-hidden", "true");

      // Random horizontal position across the section
      const x = 5 + Math.random() * 90;
      // Start from bottom half
      const startY = 60 + Math.random() * 40;
      // Random size
      const size = 2.5 + Math.random() * 3;
      // Random drift
      const driftX = -60 + Math.random() * 120;
      // Random duration
      const duration = 1200 + Math.random() * 1200;
      // Random delay within burst
      const delay = Math.random() * 200;

      el.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${startY}%;
        font-size: ${size}rem;
        pointer-events: none;
        z-index: 10;
        opacity: 0;
        animation: emoji-burst ${duration}ms ${delay}ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        --drift-x: ${driftX}px;
      `;

      container.appendChild(el);

      // Clean up after animation
      setTimeout(() => {
        el.remove();
      }, duration + delay + 100);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        activeRef.current = entry.isIntersecting;
      },
      { threshold: 0.2 }
    );

    observer.observe(container);

    function onScroll() {
      if (!activeRef.current) return;

      const now = Date.now();
      // Throttle: spawn burst every 400ms while scrolling through
      if (now - lastSpawnRef.current < 400) return;
      lastSpawnRef.current = now;

      spawnEmoji();
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [spawnEmoji]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
