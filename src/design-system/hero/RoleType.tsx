import { useState, useEffect, useRef } from "react";
import { Typography, useMantineTheme } from "@mantine/core";
import { getTextGlow } from "../utils/glow";
import {
  FaPencil,
  FaMagnifyingGlass,
  FaCode,
  FaWrench,
  FaVial,
  FaRocket,
} from "react-icons/fa6";
import { FaCog } from "react-icons/fa";

interface WordEntry {
  label: string;
  icon: React.ReactNode;
}

interface RoleTypeProps {
  words?: WordEntry[];
  slideDuration?: number;
  pauseDuration?: number;
  mobileBreakpoint?: number;
}

// Default words are set here, and then overridden inside the component, so
// that theme colors are in scope for the icons and text and text glow effects.
const DEFAULT_WORD_DEFS: WordEntry[] = [
  { label: "design", icon: <FaPencil /> },
  { label: "research", icon: <FaMagnifyingGlass /> },
  { label: "develop", icon: <FaCode /> },
  { label: "build", icon: <FaWrench /> },
  { label: "test", icon: <FaVial /> },
  { label: "deploy", icon: <FaRocket /> },
  { label: "optimise", icon: <FaCog /> },
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
  words,
  slideDuration = 420,
  pauseDuration = 2200,
  mobileBreakpoint = 768,
}: RoleTypeProps) => {
  const theme = useMantineTheme();
  const color = theme?.other?.hero?.drumText?.color ?? "#ff6e00";
  const glow = theme?.other?.hero?.drumText?.glow ?? false;
  const iconColor = theme?.other?.hero?.drumIcon?.color ?? "#ff6e00";
  const textGlow = getTextGlow(color, glow, 1.5);

  const getBaselineOffset = () => {
    const font = theme.fontFamily ?? "";
    if (font.includes("Lexend")) return "42%";
    if (font.includes("Orbitron")) return "44%";
    if (font.includes("Inter")) return "42.5%";
    return "43%";
  };

  // Build default words inside the component so iconColor is in scope
  const defaultWords: WordEntry[] = DEFAULT_WORD_DEFS.map((w) =>
    w.label === "design" ? { ...w, icon: <FaPencil color={iconColor} /> } : w,
  );

  const activeWords = words ?? defaultWords;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [measuredWidth, setMeasuredWidth] = useState<number | null>(null);
  const [lineHeight, setLineHeight] = useState(52);
  const [isMobile, setIsMobile] = useState(false);
  const rulerRef = useRef<HTMLDivElement>(null);
  const effectiveLineHeight = isMobile ? lineHeight * 0.8 : lineHeight;

  // useEffect to measure word widths and line height, and track mobile breakpoint
  useEffect(() => {
    const measure = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);

      if (!rulerRef.current) return;
      const children = Array.from(rulerRef.current.children) as HTMLElement[];
      if (!children.length) return;

      const maxW = Math.max(...children.map((el) => el.offsetWidth));
      const lh = children[0].offsetHeight;

      setMeasuredWidth(maxW + 4);
      if (lh > 0) setLineHeight(lh);
    };

    measure();
    document.fonts?.ready?.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [mobileBreakpoint]);

  // useEffect to handle the sliding interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % activeWords.length);
        setIsSliding(false);
      }, slideDuration);
    }, pauseDuration + slideDuration);
    return () => clearInterval(interval);
  }, [activeWords.length, pauseDuration, slideDuration]);

  // Helper to get the word entry for a given slot offset
  const getEntry = (offset: number): WordEntry =>
    activeWords[
      (currentIndex + offset + activeWords.length) % activeWords.length
    ];

  // Function to render 5 slots: the current word in the center, one above and one below
  // it, and two more (fading out) above and below those, to create a smooth drum effect.
  const SLOTS = [-2, -1, 0, 1, 2];

  // Style function for each slot, based on its offset from the current
  // word and whether we're currently sliding. Returns absolute positioning to stack the
  // words, with transforms to shift them up/down and scale them, and opacity to fade
  // out the words further from the center.
  const slotStyle = (offset: number): React.CSSProperties => {
    const shift = isSliding ? offset - 1 : offset;
    const absShift = Math.abs(shift);
    const opacity = absShift === 0 ? 1 : absShift === 1 ? 0.22 : 0;
    const scale = absShift === 0 ? 1 : absShift === 1 ? 0.8 : 0.65;

    return {
      position: "absolute",
      left: isMobile ? "50%" : 0,
      top: "50%",
      color: color,
      textShadow: textGlow,
      transform: isMobile
        ? `translate(-50%, calc(-50% + ${shift * effectiveLineHeight}px)) scale(${scale})`
        : `translateY(calc(-50% + ${shift * effectiveLineHeight}px)) scale(${scale})`,
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
      paddingLeft: "0.15em",
    };
  };

  // The "window" for the "drum" is set to 3 lines tall
  const windowHeight = effectiveLineHeight * 3;

  // The window is an inline-block on desktop, with a translateY to sit flush with the headline text.
  // On mobile it's a block, centred, with no translateY so it sits on its own line - as we have less
  // width to work with, the translateY can cause awkward cropping of the top and bottom of the words,
  // so better to just let it sit in the flow of the text.
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
        transform: `translateY(${getBaselineOffset()})`,
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
      {/* Hidden ruler to measure text width, so we can set the window width to match */}
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
        {activeWords.map((w) => (
          <div
            key={w.label}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3em",
              whiteSpace: "nowrap",
            }}
          >
            <Typography>{w.label}</Typography>
            <div style={{ fontSize: "0.82em" }}>{w.icon}</div>
          </div>
        ))}
      </div>

      {/* Drum window, so we can show only a subset of the words */}
      <div style={windowStyle}>
        {SLOTS.map((offset) => (
          <div key={offset} style={slotStyle(offset)}>
            <Typography>{getEntry(offset).label}</Typography>
            <div
              style={{
                fontSize: "0.82em",
                lineHeight: 1,
                display: "inline-block",
                color: iconColor,
              }}
            >
              {getEntry(offset).icon}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RoleType;
