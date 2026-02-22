import { Typography, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { getTextGlow } from "../utils/glow";

interface HeroHeadingProps {
  children: ReactNode;
  animate?: boolean;
}

const HeroHeading = ({ children, animate = true }: HeroHeadingProps) => {
  const theme = useMantineTheme();

  const heading = theme.other?.hero?.heading;

  const color = heading?.color ?? theme.colors.gray[9];
  const glow = heading?.glow ?? false;
  
  const textGlow = getTextGlow(color, glow, 1.5);

  return (
    <motion.div
      initial={animate ? { y: 40, opacity: 0 } : false}
      animate={animate ? { y: 0, opacity: 1 } : false}
      transition={{ duration: 1 }}
    >
      <Typography
        component="h1"
        fw={700}
        fz="2rem"
        style={{
          color,
          textShadow: textGlow,
        }}
      >
        {children}
      </Typography>
    </motion.div>
  );
};

export default HeroHeading;
