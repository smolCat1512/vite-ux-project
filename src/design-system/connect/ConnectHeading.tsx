import { Typography, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ConnectHeadingProps {
  children: ReactNode;
  animate?: boolean;
}

const ConnectHeading = ({ children, animate = true }: ConnectHeadingProps) => {
  const theme = useMantineTheme();

  const heading = theme.other?.hero?.heading;

  const color = heading?.color ?? theme.colors.gray[9];
  const glow = heading?.glow;

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

export default ConnectHeading;
