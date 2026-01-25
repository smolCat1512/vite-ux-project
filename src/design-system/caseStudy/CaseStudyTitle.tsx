import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface CaseStudyTitleProps {
  children: ReactNode;
}

const CaseStudyTitle = ({ children }: CaseStudyTitleProps) => {
  const theme = useMantineTheme();
  const titleColor = theme.other?.caseStudy?.header?.title?.color ?? "#343a40";

  return (
    <h1 className="text-4xl font-bold mb-2" style={{ color: titleColor }}>
      {children}
    </h1>
  );
};

export default CaseStudyTitle;