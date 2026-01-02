import { Typography, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HeroDescriptionProps {
  children: ReactNode;
  animate?: boolean;
}

const HeroDescription = ({ children, animate = true }: HeroDescriptionProps) => {
  const theme = useMantineTheme();
  const description = theme.other?.hero?.description;
  const color = description?.color ?? theme.colors.gray[6];
  const glow = description?.glow;

  return (
    <motion.div
      initial={animate ? { y: 40, opacity: 0 } : false}
      animate={animate ? { y: 0, opacity: 1 } : false}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Typography
        className="text-2xl text-center w-10/12 mx-auto md:w-2/3"
        style={{
          color,
          textShadow: glow
            ? `0 0 8px ${color}, 0 0 16px ${color}`
            : undefined,
        }}
      >
        {children}
      </Typography>
    </motion.div>
  );
};

export default HeroDescription;