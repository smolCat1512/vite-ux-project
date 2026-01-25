import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface PortfolioCardTitleProps {
  children: ReactNode;
}

const PortfolioCardTitle = ({ children }: PortfolioCardTitleProps) => {
  const theme = useMantineTheme();
  const titleColor = theme.other?.portfolio?.card?.title?.color ?? "#343a40";

  return (
    <h3 className="font-semibold text-xl" style={{ color: titleColor }}>
      {children}
    </h3>
  );
};

export default PortfolioCardTitle;