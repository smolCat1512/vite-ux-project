import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface CaseStudyTaglineProps {
  children: ReactNode;
}

const CaseStudyTagline = ({ children }: CaseStudyTaglineProps) => {
  const theme = useMantineTheme();
  const taglineColor = theme.other?.caseStudy?.header?.tagline?.color ?? "#6c757d";

  return (
    <p className="text-xl" style={{ color: taglineColor }}>
      {children}
    </p>
  );
};

export default CaseStudyTagline;