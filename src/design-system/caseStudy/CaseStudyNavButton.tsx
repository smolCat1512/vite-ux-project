import { useState } from "react";
import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface CaseStudyNavButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const CaseStudyNavButton = ({ onClick, children }: CaseStudyNavButtonProps) => {
  const theme = useMantineTheme();
  const textColor = theme.other?.caseStudy?.navigation?.text ?? "#6c757d";
  const hoverColor = theme.other?.caseStudy?.navigation?.hoverText ?? "#343a40";
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      style={{ color: isHovered ? hoverColor : textColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export default CaseStudyNavButton;