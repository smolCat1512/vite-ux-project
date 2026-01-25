import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface PortfolioCardTechnologiesProps {
  children: ReactNode;
}

const PortfolioCardTechnologies = ({ children }: PortfolioCardTechnologiesProps) => {
  const theme = useMantineTheme();
  const techColor = theme.other?.portfolio?.card?.technologies?.color ?? "#6c757d";

  return (
    <p className="text-sm italic mb-2" style={{ color: techColor }}>
      {children}
    </p>
  );
};

export default PortfolioCardTechnologies;