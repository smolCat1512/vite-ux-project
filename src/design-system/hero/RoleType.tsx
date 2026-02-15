import { useState, useEffect, useRef } from "react";
import { useMantineTheme } from "@mantine/core";
import { getTextGlow } from "../utils/glow";

interface WordEntry {
  label: string;
  icon: string;
}

interface RoleTypeProps {
  words?: WordEntry[];
  slideDuration?: number;
  pauseDuration?: number;
  /** Breakpoint (px) below which mobile layout is used. Default: 768 */
  mobileBreakpoint?: number;
}

const DEFAULT_WORDS: WordEntry[] = [
  { label: "design", icon: "✏️" },
  { label: "research", icon: "🔍" },
  { label: "develop", icon: "💻" },
  { label: "build", icon: "🔧" },
  { label: "test", icon: "🧪" },
  { label: "deploy", icon: "🚀" },
  { label: "optimize", icon: "⚡" },
];

/**
 * Rolodex / drum-style word cycler.
 *
 * Desktop: inline-block, verticalAlign baseline, translateY(-43%) to sit
 *          flush with surrounding headline text.
 * Mobile:  block, centred, no translateY — sits on its own line cleanly.
 *
 * Width + lineHeight are re-measured on every resize so the drum stays
 * correctly sized at every viewport / font-size combination.
 */
const RoleType = ({
  words = DEFAULT_WORDS,
  slideDuration = 420,
  pauseDuration = 2200,
  mobileBreakpoint = 768,
}: RoleTypeProps) => {
  const theme = useMantineTheme();
  const highlight = theme.other?.hero?.highlight;
  const color = highlight?.color ?? "#ffee00";
  const glow = highlight?.glow ?? false;
  const textGlow = getTextGlow(color, glow, 1.5);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [measuredWidth, setMeasuredWidth] = useState<number | null>(null);
  const [lineHeight, setLineHeight] = useState(52);
  const [isMobile, setIsMobile] = useState(false);

  const rulerRef = useRef<HTMLDivElement>(null);

  // ── Measure + track mobile breakpoint ────────────────────────────────────
  useEffect(() => {
    const measure = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);

      if (!rulerRef.current) return;
      const children = Array.from(rulerRef.current.children) as HTMLElement[];
      if (!children.length) return;

      const maxW = Math.max(...children.map((el) => el.offsetWidth));
      const lh = children[0].offsetHeight;

      setMeasuredWidth(maxW + 4); // +4px breathing room
      if (lh > 0) setLineHeight(lh);
    };

    measure();
    document.fonts?.ready?.then(measure);

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [mobileBreakpoint]);

  // ── Advance index ─────────────────────────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsSliding(false);
      }, slideDuration);
    }, pauseDuration + slideDuration);

    return () => clearInterval(interval);
  }, [words.length, pauseDuration, slideDuration]);

  // ── Helpers ───────────────────────────────────────────────────────────────
  const getEntry = (offset: number): WordEntry =>
    words[(currentIndex + offset + words.length) % words.length];

  const SLOTS = [-2, -1, 0, 1, 2];

  const slotStyle = (offset: number): React.CSSProperties => {
    const shift = isSliding ? offset - 1 : offset;
    const absShift = Math.abs(shift);

    const opacity = absShift === 0 ? 1 : absShift === 1 ? 0.22 : 0;

    const scale = absShift === 0 ? 1 : absShift === 1 ? 0.8 : 0.65;

    return {
      position: "absolute",
      left: isMobile ? "50%" : 0,
      top: "50%",
      transform: isMobile
        ? `translate(-50%, calc(-50% + ${shift * lineHeight}px)) scale(${scale})`
        : `translateY(calc(-50% + ${shift * lineHeight}px)) scale(${scale})`,
      transformOrigin: isMobile ? "center center" : "left center",
      opacity,
      transition: isSliding
        ? `transform ${slideDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
           opacity   ${slideDuration}ms ease`
        : "none",
      whiteSpace: "nowrap",
      display: "flex",
      alignItems: "center",
      gap: "0.3em",
      color: offset === 0 ? color : "inherit",
      textShadow: offset === 0 ? textGlow : undefined,
    };
  };

  const windowHeight = lineHeight * 3;

  // ── Desktop: inline, shifted up to align with headline ───────────────────
  const windowStyle: React.CSSProperties = isMobile
    ? {
        display: "block",
        margin: "0 auto",
        position: "relative",
        width: measuredWidth ?? "auto",
        height: windowHeight,
        overflow: "hidden",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 20%, black 35%, black 65%, rgba(0,0,0,0.6) 80%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 20%, black 35%, black 65%, rgba(0,0,0,0.6) 80%, transparent 100%)",
      }
    : {
        display: "inline-block",
        position: "relative",
        verticalAlign: "baseline",
        transform: "translateY(43%)",
        width: measuredWidth ?? "auto",
        height: windowHeight,
        overflow: "hidden",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 20%, black 35%, black 65%, rgba(0,0,0,0.6) 80%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 20%, black 35%, black 65%, rgba(0,0,0,0.6) 80%, transparent 100%)",
      };

  return (
    <>
      {/* ── Hidden ruler ─────────────────────────────────────────────────── */}
      <div
        ref={rulerRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {words.map((w) => (
          <div
            key={w.label}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3em",
              whiteSpace: "nowrap",
            }}
          >
            <span>{w.label}</span>
            <span style={{ fontSize: "0.82em" }}>{w.icon}</span>
          </div>
        ))}
      </div>

      {/* ── Drum window ──────────────────────────────────────────────────── */}
      <span style={windowStyle}>
        {SLOTS.map((offset) => (
          <span key={offset} style={slotStyle(offset)}>
            <span>{getEntry(offset).label}</span>
            <span
              style={{
                fontSize: "0.82em",
                lineHeight: 1,
                display: "inline-block",
              }}
            >
              {getEntry(offset).icon}
            </span>
          </span>
        ))}
      </span>
    </>
  );
};

export default RoleType;
