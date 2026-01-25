import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface CaseStudyDetailsGridProps {
  children: ReactNode;
}

const CaseStudyDetailsGrid = ({ children }: CaseStudyDetailsGridProps) => {
  const theme = useMantineTheme();
  const background = theme.other?.caseStudy?.detailsGrid?.background ?? "#f3f4f6";

  return (
    <div 
      className="grid md:grid-cols-3 gap-4 p-4 rounded-lg"
      style={{ background }}
    >
      {children}
    </div>
  );
};

export default CaseStudyDetailsGrid;