import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface TechnologiesTextProps {
  children: ReactNode;
}

const TechnologiesText = ({ children }: TechnologiesTextProps) => {
  const theme = useMantineTheme();
  const textColor = theme.other?.technologies?.text?.color ?? "#343a40";

  return (
    <p className="font-semibold" style={{ color: textColor }}>
      {children}
    </p>
  );
};

export default TechnologiesText;