import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface CaseStudyTaglineProps {
  children: ReactNode;
}

const CaseStudyTagline = ({ children }: CaseStudyTaglineProps) => {
  const theme = useMantineTheme();
  const taglineColor = theme.other?.caseStudy?.header?.tagline?.color ?? "#343a40";

  return (
    <p className="text-md font-medium" style={{ color: taglineColor }}>
      {children}
    </p>
  );
};

export default CaseStudyTagline;