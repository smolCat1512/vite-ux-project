import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";
import { getTextGlow } from "../../design-system/utils/glow";

interface PortfolioHeaderProps {
  children: ReactNode;
}

const PortfolioHeader = ({ children }: PortfolioHeaderProps) => {
  const theme = useMantineTheme();

  const highlight = theme.other?.hero?.highlight;

  const color = theme.other?.portfolio?.header?.color ?? "#343a40";
  const glow = highlight?.glow ?? false;

  const textGlow = getTextGlow(color, glow, 1.5);

  return (
    <span
      className={`${glow ? "animate-hero-glow" : ""} text-3xl font-inherit`}
      style={{
        color,
        textShadow: textGlow,
      }}
    >
      {children}
    </span>
  );
};

export default PortfolioHeader;
