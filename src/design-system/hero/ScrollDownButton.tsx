import { useMantineTheme } from "@mantine/core";
import { FaChevronDown } from "react-icons/fa6";
import { getIconGlow } from "../utils/glow";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type ScrollDownButtonProps = {
  ariaLabel?: string;
  animate?: boolean;
  mobileBreakpoint?: number;
};

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({
  ariaLabel = "Scroll to next section",
  animate = true,
  mobileBreakpoint = 768,
}) => {
  const theme = useMantineTheme();

  const iconColor = theme.other?.hero?.scrollButton?.iconColor ?? "#000000";
  const borderColor = theme.other?.hero?.scrollButton?.borderColor ?? "#000000";
  const hoverBg =
    theme.other?.hero?.scrollButton?.hoverBackground ?? "rgba(0, 0, 0, 0.1)";
  const focusRingColor =
    theme.other?.hero?.scrollButton?.focusRing ?? "#ff6e00";

  const glowColor = theme.other?.hero?.scrollButton?.glowColor;
  const glow = theme.other?.hero?.scrollButton?.glow ?? false;

  const iconGlow = getIconGlow(glowColor, glow);

  const handleScrollToTechnologies = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const techSection = document.getElementById("technologies");
    if (techSection) {
      techSection.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileBreakpoint]);

  return (
    <div
      className="flex justify-center"
      style={{ marginTop: isMobile ? "2rem" : "4rem" }}
    >
      <motion.div
        initial={animate ? { opacity: 0, y: 12 } : false}
        animate={animate ? { opacity: 1, y: 0 } : false}
        transition={animate ? { duration: 0.6, delay: 1.5 } : {}}
      >
        <motion.div
          animate={animate ? { y: [0, -10, 0], opacity: [0.3, 1, 0.3] } : false}
          transition={
            animate
              ? { duration: 3, delay: 1.8, repeat: Infinity, ease: "easeInOut" }
              : {}
          }
        >
          <button
            onClick={handleScrollToTechnologies}
            className="cursor-pointer rounded-full p-2 transition-all duration-200 flex items-center justify-center"
            aria-label={ariaLabel}
            style={{
              border: `3px solid ${borderColor}`,
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = hoverBg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = "none";
              e.currentTarget.style.boxShadow = `0 0 0 2px ${focusRingColor}`;
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <FaChevronDown
              size={16}
              aria-hidden="true"
              style={{
                color: iconColor,
                filter: iconGlow,
              }}
            />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollDownButton;
