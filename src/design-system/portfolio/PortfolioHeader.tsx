import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface PortfolioHeaderProps {
  children: ReactNode;
}

const PortfolioHeader = ({ children }: PortfolioHeaderProps) => {
  const theme = useMantineTheme();
  const headerColor = theme.other?.portfolio?.header?.color ?? "#343a40";

  return (
    <h2 className="text-3xl text-center mb-6" style={{ color: headerColor }}>
      {children}
    </h2>
  );
};

export default PortfolioHeader;