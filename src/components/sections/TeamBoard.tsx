"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import TeamMemberCard from "@/components/ui/TeamMemberCard";
import { teamMembers } from "@/lib/team-data";

// Board is a large 2D canvas measured in vw/vh
const BOARD_W = 380; // vw
const BOARD_H = 300; // vh
const CARD_PX = 520;

// Default card positions scattered across the full 2D board
const defaultPlacements = [
  { x: 3, y: 2, rotate: -4.5 },
  { x: 22, y: 10, rotate: 3 },
  { x: 9.6, y: 38.6, rotate: -2 },
  { x: 28, y: 34.9, rotate: 5 },
  { x: 49.3, y: 47.3, rotate: -3.5 },
  { x: 60.8, y: 22.8, rotate: 4 },
  { x: 76.8, y: 47.9, rotate: -5 },
  { x: 78.7, y: 20.4, rotate: 3.5 },
];

// Lines connecting cards
const connections = [
  [0, 1],
  [0, 3],
  [1, 2],
  [1, 4],
  [2, 4],
  [3, 4],
  [3, 5],
  [4, 6],
  [5, 6],
  [5, 7],
  [6, 7],
  [1, 3],
];

const CARD_CW = 6; // approx card center offset x%
const CARD_CH = 5; // approx card center offset y%

const pinColors = [
  "180,40,50",
  "45,100,160",
  "60,140,80",
  "180,120,20",
  "110,60,140",
  "20,140,130",
  "190,80,50",
  "60,80,130",
];

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function TeamBoard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1440
  );
  const mouseOffset = useRef({ x: 0, y: 0 });
  const [mouseShift, setMouseShift] = useState({ x: 0, y: 0 });

  // Edit mode state
  const [editMode, setEditMode] = useState(false);
  const [placements, setPlacements] = useState(defaultPlacements);
  const [dragging, setDragging] = useState<number | null>(null);
  const dragStart = useRef({ mouseX: 0, mouseY: 0, origX: 0, origY: 0 });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const container = containerRef.current;
      if (container) container.style.height = "auto";
      return;
    }

    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const scrollableHeight = container.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      setScrollProgress(Math.max(0, Math.min(1, scrolled / scrollableHeight)));
    };

    const onResize = () => setWindowWidth(window.innerWidth);

    const onMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseOffset.current = { x: nx, y: ny };
    };

    let raf: number;
    const animate = () => {
      setMouseShift((prev) => ({
        x: prev.x + (mouseOffset.current.x * 18 - prev.x) * 0.08,
        y: prev.y + (mouseOffset.current.y * 12 - prev.y) * 0.08,
      }));
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Drag handlers for edit mode
  const handleDragStart = useCallback(
    (i: number, e: React.MouseEvent) => {
      if (!editMode) return;
      e.preventDefault();
      e.stopPropagation();
      setDragging(i);
      dragStart.current = {
        mouseX: e.clientX,
        mouseY: e.clientY,
        origX: placements[i].x,
        origY: placements[i].y,
      };
    },
    [editMode, placements]
  );

  useEffect(() => {
    if (dragging === null) return;

    const onMove = (e: MouseEvent) => {
      const board = boardRef.current;
      if (!board) return;
      const boardRect = board.getBoundingClientRect();
      const dx = e.clientX - dragStart.current.mouseX;
      const dy = e.clientY - dragStart.current.mouseY;
      // Convert pixel delta to % of board size
      const dxPct = (dx / boardRect.width) * 100;
      const dyPct = (dy / boardRect.height) * 100;
      setPlacements((prev) =>
        prev.map((p, idx) =>
          idx === dragging
            ? {
                ...p,
                x: Math.round((dragStart.current.origX + dxPct) * 10) / 10,
                y: Math.round((dragStart.current.origY + dyPct) * 10) / 10,
              }
            : p
        )
      );
    };

    const onUp = () => setDragging(null);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dragging]);

  const copyPlacements = () => {
    const code = `const cardPlacements = [\n${placements
      .map(
        (p, i) =>
          `  { x: ${p.x}, y: ${p.y}, rotate: ${p.rotate} },${
            i < placements.length - 1 ? "" : ""
          }`
      )
      .join("\n")}\n];`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Use editable placements for rendering
  const activePlacements = placements;

  // Interpolate camera position between card centers
  const cardWidthVw = (CARD_PX / windowWidth) * 100;
  const { translateX, translateY } = (() => {
    const n = activePlacements.length;
    const cardFloat = scrollProgress * (n - 1);
    const cardIndex = Math.floor(cardFloat);
    const cardNext = Math.min(cardIndex + 1, n - 1);
    const eased = easeInOutCubic(cardFloat - cardIndex);

    const from = activePlacements[cardIndex];
    const to = activePlacements[cardNext];

    const fromX = (from.x / 100) * BOARD_W + cardWidthVw / 2;
    const toX = (to.x / 100) * BOARD_W + cardWidthVw / 2;
    const targetX = fromX + (toX - fromX) * eased;

    const fromY = (from.y / 100) * BOARD_H;
    const toY = (to.y / 100) * BOARD_H;
    const targetY = fromY + (toY - fromY) * eased;

    const xAnchor = 25 + scrollProgress * 25;
    const yAnchor = 5 + scrollProgress * 40;
    return {
      translateX: -(targetX - xAnchor),
      translateY: -(targetY - yAnchor),
    };
  })();

  return (
    <>
      {/* Mobile: simple vertical layout */}
      <div className="md:hidden">
        <div className="flex flex-col gap-10 px-4 pb-16">
          {teamMembers.map((member, i) => (
            <TeamMemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>

      {/* Desktop: 2D scroll board */}
      <div
        ref={containerRef}
        className="relative hidden md:block"
        style={{ height: "600vh" }}
      >
        {/* Edit Mode Toggle & Panel */}
        {editMode && (
          <div
            className="fixed top-4 right-4 z-50 rounded-xl border border-black/10 bg-white p-4 shadow-2xl"
            style={{ width: 320, maxHeight: "90vh", overflowY: "auto" }}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-bold tracking-tight">
                Edit Layout
              </span>
              <button
                onClick={() => setEditMode(false)}
                className="rounded-md bg-black/5 px-2 py-1 text-xs font-medium hover:bg-black/10"
              >
                Done
              </button>
            </div>

            <div className="space-y-2">
              {activePlacements.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-lg bg-black/[0.03] px-3 py-2 text-xs"
                  style={{
                    outline:
                      dragging === i ? "2px solid rgba(59,130,246,0.5)" : "none",
                  }}
                >
                  <span
                    className="inline-block h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: `rgba(${pinColors[i]}, 0.9)`,
                    }}
                  />
                  <span className="w-6 font-bold">{i + 1}</span>
                  <label className="text-black/40">x</label>
                  <input
                    type="number"
                    step={0.5}
                    value={p.x}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value) || 0;
                      setPlacements((prev) =>
                        prev.map((pp, idx) =>
                          idx === i ? { ...pp, x: val } : pp
                        )
                      );
                    }}
                    className="w-14 rounded border border-black/10 bg-white px-1.5 py-0.5 text-xs"
                  />
                  <label className="text-black/40">y</label>
                  <input
                    type="number"
                    step={0.5}
                    value={p.y}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value) || 0;
                      setPlacements((prev) =>
                        prev.map((pp, idx) =>
                          idx === i ? { ...pp, y: val } : pp
                        )
                      );
                    }}
                    className="w-14 rounded border border-black/10 bg-white px-1.5 py-0.5 text-xs"
                  />
                  <label className="text-black/40">r</label>
                  <input
                    type="number"
                    step={0.5}
                    value={p.rotate}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value) || 0;
                      setPlacements((prev) =>
                        prev.map((pp, idx) =>
                          idx === i ? { ...pp, rotate: val } : pp
                        )
                      );
                    }}
                    className="w-14 rounded border border-black/10 bg-white px-1.5 py-0.5 text-xs"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={copyPlacements}
              className="mt-3 w-full rounded-lg bg-black px-3 py-2 text-xs font-semibold text-white hover:bg-black/80"
            >
              {copied ? "Copied!" : "Copy Placements"}
            </button>
          </div>
        )}

        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Edit mode toggle button */}
          <button
            onClick={() => setEditMode((v) => !v)}
            className="absolute bottom-4 right-4 z-50 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold shadow-lg hover:bg-black/5"
          >
            {editMode ? "Exit Edit" : "Edit Layout"}
          </button>

          {/* Board surface */}
          <div
            ref={boardRef}
            className="absolute"
            style={{
              width: `${BOARD_W}vw`,
              height: `${BOARD_H}vh`,
              transform: editMode
                ? `translateX(calc(${translateX}vw + ${mouseShift.x}px)) translateY(calc(${translateY}vh + ${mouseShift.y}px))`
                : `translateX(calc(${translateX}vw + ${mouseShift.x}px)) translateY(calc(${translateY}vh + ${mouseShift.y}px))`,
              willChange: "transform",
              background: "#ffffff",
              backgroundImage: [
                "radial-gradient(circle, rgba(0,0,0,0.035) 1px, transparent 1px)",
                "linear-gradient(rgba(0,0,0,0.015) 1px, transparent 1px)",
                "linear-gradient(90deg, rgba(0,0,0,0.015) 1px, transparent 1px)",
              ].join(", "),
              backgroundSize: "24px 24px, 48px 48px, 48px 48px",
            }}
          >
            {/* SVG connection lines */}
            <svg
              className="absolute inset-0 pointer-events-none"
              style={{ width: "100%", height: "100%" }}
              preserveAspectRatio="none"
              viewBox={`0 0 ${BOARD_W * 10} ${BOARD_H * 10}`}
            >
              {connections.map(([a, b], i) => {
                const ax = (activePlacements[a].x + CARD_CW) * 10;
                const ay = (activePlacements[a].y + CARD_CH) * 10;
                const bx = (activePlacements[b].x + CARD_CW) * 10;
                const by = (activePlacements[b].y + CARD_CH) * 10;
                const mx = (ax + bx) / 2 + (i % 2 === 0 ? 40 : -40);
                const my = (ay + by) / 2 + (i % 3 === 0 ? 50 : -30);
                return (
                  <g key={i}>
                    <path
                      d={`M ${ax} ${ay} Q ${mx} ${my} ${bx} ${by}`}
                      fill="none"
                      stroke="rgba(0,0,0,0.06)"
                      strokeWidth="2"
                      strokeDasharray="10 8"
                    />
                    <circle cx={ax} cy={ay} r="5" fill="rgba(0,0,0,0.1)" />
                    <circle cx={bx} cy={by} r="5" fill="rgba(0,0,0,0.1)" />
                  </g>
                );
              })}
            </svg>

            {/* Team cards */}
            {teamMembers.map((member, i) => {
              const placement = activePlacements[i];
              if (!placement) return null;
              return (
                <div
                  key={member.name}
                  className="absolute"
                  style={{
                    left: `${placement.x}%`,
                    top: `${placement.y}%`,
                    width: `${CARD_PX}px`,
                    transform: `rotate(${placement.rotate}deg)`,
                    cursor: editMode ? "grab" : "default",
                    zIndex: dragging === i ? 20 : 1,
                  }}
                  onMouseDown={(e) => handleDragStart(i, e)}
                >
                  {/* Edit mode: card number badge */}
                  {editMode && (
                    <div className="absolute -left-3 -top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white shadow">
                      {i + 1}
                    </div>
                  )}
                  {/* Magnet pin */}
                  <div
                    className="absolute -top-2.5 left-1/2 z-10 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-white shadow-lg"
                    style={{
                      backgroundColor: `rgba(${pinColors[i]}, 0.9)`,
                      boxShadow: `0 2px 6px rgba(${pinColors[i]}, 0.4)`,
                    }}
                  />
                  <TeamMemberCard member={member} index={i} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
