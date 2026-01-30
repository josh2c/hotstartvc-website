"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealCardProps {
  children: React.ReactNode;
  index: number;
}

export default function ScrollRevealCard({
  children,
  index,
}: ScrollRevealCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the reveal based on card index
          setTimeout(() => setRevealed(true), index * 150);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  // Alternate direction based on even/odd index
  const direction = index % 2 === 0 ? -1 : 1;

  return (
    <div
      ref={ref}
      style={{
        transform: revealed
          ? "perspective(1200px) rotateY(0deg) rotateX(0deg) translateX(0px) translateY(0px) scale(1)"
          : `perspective(1200px) rotateY(${14 * direction}deg) rotateX(6deg) translateX(${80 * direction}px) translateY(50px) scale(0.85)`,
        opacity: revealed ? 1 : 0,
        transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-out",
      }}
    >
      {children}
    </div>
  );
}
