import { motion, useReducedMotion, useTime, useTransform } from "framer-motion";
import { Button, useMantineTheme } from "@mantine/core";
import { FaRegHandshake } from "react-icons/fa";
import { useEffect, useState, type ReactNode } from "react";
import { getIconGlow, getTextGlow } from "../utils/glow";

interface ContactButtonProps {
  children: ReactNode;
  animate?: boolean;
  mobileBreakpoint?: number;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  children,
  animate = true,
  mobileBreakpoint = 768,
}: ContactButtonProps) => {
  const shouldReduceMotion = useReducedMotion();

  const theme = useMantineTheme();
  const gradientFrom = theme.other?.connect?.button?.gradientFrom;
  const gradientTo = theme.other?.connect?.button?.gradientTo;
  const buttonBackground = theme.other?.connect?.button?.buttonBackground;
  const text = theme.other?.connect?.button?.text ?? "#000000";
  console.log("connect button text:", text);
  const glowColor = theme.other?.connect?.button?.glowColor;
  const glow = theme.other?.connect?.button?.glow ?? false;
  const textGlow = getTextGlow(glowColor, glow);
  const iconGlow = getIconGlow(glowColor, glow);

  const time = useTime();
  const rotate = useTransform(time, [0, 6000], [0, 360], { clamp: false });
  const rotatingBorder = useTransform(
    rotate,
    (r) => `conic-gradient(from ${r}deg, ${gradientFrom}, ${gradientTo})`,
  );

  const [isMobile, setIsMobile] = useState(false);

  const handleScrollToConnect = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const connectSection = document.getElementById("connect");
    if (connectSection) {
      connectSection.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        // Adding a slight offset to account for fixed headers or spacing
        block: "center",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileBreakpoint]);

  return (
    <motion.div
      initial={animate && !shouldReduceMotion ? { y: 40, opacity: 0 } : false}
      animate={animate && !shouldReduceMotion ? { y: 0, opacity: 1 } : false}
      transition={{ duration: 1, delay: 0.7 }}
      style={{ marginTop: isMobile ? 4 : 12 }}
    >
      <motion.div
        style={{
          padding: "4px",
          background: shouldReduceMotion
            ? `conic-gradient(from 0deg, ${gradientFrom}, ${gradientTo})`
            : rotatingBorder,
          borderRadius: "var(--mantine-radius-lg)",
          display: "inline-flex",
          color: text,
        }}
      >
        <Button
          type="submit"
          variant="transparent"
          size={isMobile ? "xl" : "lg"}
          radius="lg"
          style={{
            borderRadius: "calc(var(--mantine-radius-lg) - 3px)",
          }}
          styles={{
            label: { color: text, textShadow: textGlow },
            root: { backgroundColor: buttonBackground },
          }}
          onClick={handleScrollToConnect}
          rightSection={
            <FaRegHandshake
              size="2rem"
              className="inline-block mr-2"
              style={{ color: text, filter: iconGlow }}
            />
          }
        >
          <span
            className="text-lg font-bold"
            style={{ color: text, textShadow: textGlow }}
          >
            {children}
          </span>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default ContactButton;
