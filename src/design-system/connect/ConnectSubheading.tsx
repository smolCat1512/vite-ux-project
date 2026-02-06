import { Typography, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ConnectSubheadingProps {
  children: ReactNode;
  animate?: boolean;
}

const ConnectSubheading = ({ children, animate = true }: ConnectSubheadingProps) => {
  const theme = useMantineTheme();
  const subheading = theme.other?.hero?.subheading;
  const color = subheading?.color ?? theme.colors.gray[7];
  const glow = subheading?.glow;

  return (
    <motion.div
      initial={animate ? { y: 40, opacity: 0 } : false}
      animate={animate ? { y: 0, opacity: 1 } : false}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <Typography
        className="text-1xl"
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

export default ConnectSubheading;