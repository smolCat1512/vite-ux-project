import { useEffect, useId, useRef, useState } from "react";
import { useMantineTheme } from "@mantine/core";
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
  speed?: number;
  height?: number;
  gap?: number;
  mobileBreakpoint?: number;
}

const DEFAULT_WORD_DEFS: WordEntry[] = [
  { label: "design", icon: <FaPencil /> },
  { label: "research", icon: <FaMagnifyingGlass /> },
  { label: "develop", icon: <FaCode /> },
  { label: "build", icon: <FaWrench /> },
  { label: "test", icon: <FaVial /> },
  { label: "deploy", icon: <FaRocket /> },
  { label: "optimise", icon: <FaCog /> },
];

const RoleType = ({
  words,
  speed = 3,
  height,
  gap = 2,
  mobileBreakpoint = 768,
}: RoleTypeProps) => {
  const theme = useMantineTheme();
  const marqueeId = useId().replace(/:/g, "");
  const color = theme?.other?.hero?.drumText?.color ?? "#ff6e00";
  const glow = theme?.other?.hero?.drumText?.glow ?? false;
  const iconColor = theme?.other?.hero?.drumIcon?.color ?? "#ff6e00";
  const textGlow = getTextGlow(color, glow, 1.5);

  const getBaselineOffset = () => {
    const font = theme.fontFamily ?? "";
    if (font.includes("Lexend")) return "42%";
    if (font.includes("Orbitron")) return "44%";
    if (font.includes("Inter")) return "42.5%";
    if (font.includes("JetBrains")) return "41%";
    return "43%";
  };

  const activeWords =
    words ??
    DEFAULT_WORD_DEFS.map((word) => ({
      ...word,
      icon: <span style={{ color: iconColor }}>{word.icon}</span>,
    }));

  const rulerRef = useRef<HTMLDivElement>(null);
  const firstTrackRef = useRef<HTMLDivElement>(null);
  const [measuredWidth, setMeasuredWidth] = useState<number | null>(null);
  const [itemHeight, setItemHeight] = useState(52);
  const [trackOffset, setTrackOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const measure = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);

      if (!rulerRef.current) return;
      const children = Array.from(rulerRef.current.children) as HTMLElement[];
      if (!children.length) return;

      const maxWidth = Math.max(...children.map((child) => child.offsetWidth));
      const tallestHeight = Math.max(...children.map((child) => child.offsetHeight));

      setMeasuredWidth(maxWidth + 24);
      if (tallestHeight > 0) setItemHeight(tallestHeight);
      if (firstTrackRef.current) {
        setTrackOffset(firstTrackRef.current.offsetHeight + gap);
      }
    };

    measure();
    document.fonts?.ready?.then(measure);
    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, [activeWords, mobileBreakpoint, gap]);

  const rowHeight = itemHeight;
  const mobileWindowHeight = rowHeight * 2.7 + gap;
  const desktopWindowHeight = rowHeight * 3 + gap * 2;
  const windowHeight = height ?? (isMobile ? mobileWindowHeight : desktopWindowHeight);
  const duration = Math.max(activeWords.length * speed, 4);

  const containerStyle: React.CSSProperties = isMobile
    ? {
        display: "block",
        position: "relative",
        width: measuredWidth ?? "auto",
        height: windowHeight,
        margin: "0.1rem auto 0",
        overflow: "hidden",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 12%, black 34%, black 66%, rgba(0,0,0,0.3) 88%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 12%, black 34%, black 66%, rgba(0,0,0,0.3) 88%, transparent 100%)",
      }
    : {
        display: "inline-block",
        position: "relative",
        width: measuredWidth ?? "auto",
        height: windowHeight,
        overflow: "hidden",
        verticalAlign: "baseline",
        transform: `translateY(${getBaselineOffset()})`,
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.45) 18%, black 36%, black 64%, rgba(0,0,0,0.45) 82%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.45) 18%, black 36%, black 64%, rgba(0,0,0,0.45) 82%, transparent 100%)",
      };

  const itemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: isMobile ? "center" : "flex-start",
    gap: "0.35em",
    height: rowHeight,
    whiteSpace: "nowrap",
    color,
    textShadow: textGlow,
    paddingInline: "0.15em",
    font: "inherit",
  };

  return (
    <>
      <style>
        {`
          @keyframes role-type-marquee-${marqueeId} {
            from {
              transform: translate3d(0, 0, 0);
            }
            to {
              transform: translate3d(0, calc(-1 * var(--track-offset)), 0);
            }
          }
        `}
      </style>

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
          gap: `${gap}px`,
        }}
      >
        {activeWords.map((word) => (
          <div key={word.label} style={itemStyle}>
            <span>{word.label}</span>
            <span
              style={{
                display: "inline-flex",
                lineHeight: 1,
                color: iconColor,
                fontSize: "0.82em",
              }}
            >
              {word.icon}
            </span>
          </div>
        ))}
      </div>

      <div style={containerStyle}>
        <div
          style={
            {
              display: "flex",
              flexDirection: "column",
              gap: `${gap}px`,
              width: "100%",
              "--track-offset": `${trackOffset}px`,
              animation: `role-type-marquee-${marqueeId} ${duration}s linear infinite`,
              willChange: "transform",
              backfaceVisibility: "hidden",
            } as React.CSSProperties
          }
        >
          <div
            ref={firstTrackRef}
            style={{ display: "flex", flexDirection: "column", gap: `${gap}px` }}
          >
            {activeWords.map((word, index) => (
              <div key={`${word.label}-${index}`} style={itemStyle}>
                <span>{word.label}</span>
                <span
                  style={{
                    display: "inline-flex",
                    lineHeight: 1,
                    color: iconColor,
                    fontSize: "0.82em",
                  }}
                >
                  {word.icon}
                </span>
              </div>
            ))}
          </div>
          <div
            aria-hidden="true"
            style={{ display: "flex", flexDirection: "column", gap: `${gap}px` }}
          >
            {activeWords.map((word, index) => (
              <div key={`${word.label}-duplicate-${index}`} style={itemStyle}>
                <span>{word.label}</span>
                <span
                  style={{
                    display: "inline-flex",
                    lineHeight: 1,
                    color: iconColor,
                    fontSize: "0.82em",
                  }}
                >
                  {word.icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RoleType;
