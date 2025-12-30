import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface HeroHighlightProps {
  children: ReactNode;
}

const HeroHighlight = ({ children }: HeroHighlightProps) => {
  const theme = useMantineTheme();

  const highlight = theme.other?.hero?.highlight;

  const color = highlight?.color ?? "#ffee00"; // default neon yellow
  const glow = highlight?.glow ?? false;

  return (
    <span
      className={glow ? "animate-hero-glow" : ""}
      style={{
        color,
        textShadow: glow
          ? `0 0 6px ${color}, 0 0 12px ${color}, 0 0 20px ${color}`
          : undefined,
      }}
    >
      {children}
    </span>
  );
};

export default HeroHighlight;
