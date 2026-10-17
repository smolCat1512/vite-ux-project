import { Typography, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

interface HeroSubheadingProps {
  children: ReactNode;
  animate?: boolean;
  mobileBreakpoint?: number;
}

const HeroSubheading2 = ({
  children,
  animate = true,
  mobileBreakpoint = 768,
}: HeroSubheadingProps) => {
  const theme = useMantineTheme();
  const subheading2 = theme.other?.hero?.subheading2;
  const color = subheading2?.color ?? theme.colors.gray[7];
  const glow = subheading2?.glow;

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
    <motion.div
      initial={animate ? { y: 40, opacity: 0 } : false}
      animate={animate ? { y: 0, opacity: 1 } : false}
      transition={{ duration: 1, delay: 0.9 }}
      style={{ marginTop: isMobile ? 2 : 24, width: isMobile ? "90%" : "70%", marginLeft: "auto", marginRight: "auto" }}
      id="HeroSubheading"
    >
      <Typography
        className="text-center text-base"
        style={{
          color,
          textShadow: glow ? `0 0 8px ${color}, 0 0 16px ${color}` : undefined,
        }}
      >
        {children}
      </Typography>
    </motion.div>
  );
};

export default HeroSubheading2;
