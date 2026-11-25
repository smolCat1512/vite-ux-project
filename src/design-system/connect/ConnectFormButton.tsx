import { motion, useReducedMotion } from "framer-motion";
import { Button, useMantineTheme } from "@mantine/core";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { getTextGlow } from "../utils/glow";

interface ConnectFormButtonProps {
  children: ReactNode;
  animate?: boolean;
  mobileBreakpoint?: number;
  /** Time for the orb to complete one lap, in ms */
  orbDuration?: number;
  /** Orb diameter in px */
  orbSize?: number;
}

const BORDER_WIDTH = 3; // matches the wrapper's padding

/** Total length of a rounded rectangle's perimeter */
const perimeterLength = (w: number, h: number, r: number) => {
  const straightW = w - 2 * r;
  const straightH = h - 2 * r;
  return 2 * straightW + 2 * straightH + 2 * Math.PI * r;
};

/** Point at distance `s` along a rounded rectangle, starting top-left, going clockwise */
const pointOnPerimeter = (s: number, w: number, h: number, r: number) => {
  const straightW = w - 2 * r;
  const straightH = h - 2 * r;
  const q = (Math.PI * r) / 2;
  const total = perimeterLength(w, h, r);
  s = ((s % total) + total) % total;

  if (s < straightW) return { x: r + s, y: 0 }; // top edge
  s -= straightW;
  if (s < q) {
    const a = -Math.PI / 2 + s / r; // top-right corner
    return { x: w - r + r * Math.cos(a), y: r + r * Math.sin(a) };
  }
  s -= q;
  if (s < straightH) return { x: w, y: r + s }; // right edge
  s -= straightH;
  if (s < q) {
    const a = s / r; // bottom-right corner
    return { x: w - r + r * Math.cos(a), y: h - r + r * Math.sin(a) };
  }
  s -= q;
  if (s < straightW) return { x: w - r - s, y: h }; // bottom edge
  s -= straightW;
  if (s < q) {
    const a = Math.PI / 2 + s / r; // bottom-left corner
    return { x: r + r * Math.cos(a), y: h - r + r * Math.sin(a) };
  }
  s -= q;
  if (s < straightH) return { x: 0, y: h - r - s }; // left edge
  s -= straightH;
  const a = Math.PI + s / r; // top-left corner
  return { x: r + r * Math.cos(a), y: r + r * Math.sin(a) };
};

const ConnectFormButton: React.FC<ConnectFormButtonProps> = ({
  children,
  animate = true,
  mobileBreakpoint = 768,
  orbDuration = 11000,
  orbSize = 90,
}: ConnectFormButtonProps) => {
  const shouldReduceMotion = useReducedMotion();

  const theme = useMantineTheme();
  const connectTheme = theme.other.connect;
  const gradientFrom = theme.other?.connect?.button?.gradientFrom;
  const gradientTo = theme.other?.connect?.button?.gradientTo;
  const text = theme.other?.connect?.button?.text;
  const glowColor = theme.other?.connect?.button?.glowColor;
  const glow = theme.other?.connect?.button?.glow ?? false;
  const textGlow = getTextGlow(glowColor, glow);
  const buttonBackground = theme.other?.connect?.button?.buttonBackground;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const sizeRef = useRef({ w: 0, h: 0, r: 0 });

  const [isMobile, setIsMobile] = useState(false);

  // Keep the measured size up to date (no state, so no re-renders)
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      const r = parseFloat(getComputedStyle(el).borderRadius) || 0;
      sizeRef.current = { w: width, h: height, r };
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileBreakpoint]);

  // Move the orb around the border at constant speed
  useEffect(() => {
    if (shouldReduceMotion) return;

    let frameId: number;
    let progress = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const delta = now - last;
      last = now;

      const { w, h, r } = sizeRef.current;
      const orb = orbRef.current;

      if (orb && w > 0 && h > 0) {
        // Path runs along the middle of the border ring
        const pw = w - BORDER_WIDTH;
        const ph = h - BORDER_WIDTH;
        const pr = Math.max(r - BORDER_WIDTH / 2, 0);

        progress = (progress + delta / orbDuration) % 1;
        const p = pointOnPerimeter(
          progress * perimeterLength(pw, ph, pr),
          pw,
          ph,
          pr,
        );

        const offset = BORDER_WIDTH / 2;
        orb.style.transform = `translate(${p.x + offset - orbSize / 2}px, ${
          p.y + offset - orbSize / 2
        }px)`;
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [shouldReduceMotion, orbDuration, orbSize]);

  return (
    <motion.div
      initial={animate && !shouldReduceMotion ? { y: 40, opacity: 0 } : false}
      animate={animate && !shouldReduceMotion ? { y: 0, opacity: 1 } : false}
      transition={{ duration: 1, delay: 0.7 }}
      ref={wrapperRef}
      style={{
        marginTop: isMobile ? 4 : 12,
        position: "relative",
        padding: `${BORDER_WIDTH}px`,
        borderRadius: "var(--mantine-radius-lg)",
        overflow: "hidden",
        width: "100%",
        background: shouldReduceMotion
          ? `radial-gradient(circle, ${gradientTo} 0%, ${gradientFrom} 20%, transparent)`
          : "transparent",
      }}
    >
      {!shouldReduceMotion && (
        // Layer above the button, masked so only the border ring shows
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "var(--mantine-radius-lg)",
            padding: `${BORDER_WIDTH}px`,
            zIndex: 2,
            pointerEvents: "none",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            mask: "linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)",
          }}
        >
          <div
            ref={orbRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: orbSize,
              height: orbSize,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${gradientTo} 0%, ${gradientFrom} 40%, transparent 70%)`,
              willChange: "transform",
            }}
          />
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        fullWidth
        style={{
          position: "relative",
          zIndex: 1,
          borderRadius: "calc(var(--mantine-radius-lg) - 3px)",
          backgroundColor: buttonBackground,
          color: connectTheme.button.text,
        }}
        styles={{
          root: {
            "&:hover": {
              backgroundColor: connectTheme.button.hoverBackground,
            },
          },
        }}
      >
        <span
          style={{ color: text, textShadow: textGlow, fontWeight: "lighter" }}
        >
          {children}
        </span>
      </Button>
    </motion.div>
  );
};

export default ConnectFormButton;