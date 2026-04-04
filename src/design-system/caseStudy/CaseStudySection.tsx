import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface CaseStudySectionProps {
  title: string;
  children: ReactNode;
}

const CaseStudySection = ({ title, children }: CaseStudySectionProps) => {
  const theme = useMantineTheme();
  const headingColor = theme.other?.caseStudy?.section?.heading?.color ?? "#343a40";
  const textColor = theme.other?.caseStudy?.section?.text?.color ?? "#495057";

  return (
    <section className="mb-8">
      <h2 className="text-3xl mb-4" style={{ color: headingColor }}>
        {title}
      </h2>
      <div className="text-base/10" style={{ color: textColor }}>
        {children}
      </div>
    </section>
  );
};

export default CaseStudySection;