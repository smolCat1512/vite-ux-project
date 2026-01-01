import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";
import { getTextGlow } from "../../design-system/utils/glow";

interface HeroHighlightProps {
  children: ReactNode;
}

const HeroHighlight = ({ children }: HeroHighlightProps) => {
  const theme = useMantineTheme();

  const highlight = theme.other?.hero?.highlight;

  const color = highlight?.color ?? "#ffee00";
  const glow = highlight?.glow ?? false;

  const textGlow = getTextGlow(color, glow, 1.5);

  return (
    <span
      className={glow ? "animate-hero-glow" : ""}
      style={{
        color,
        textShadow: textGlow,
      }}
    >
      {children}
    </span>
  );
};

export default HeroHighlight;
