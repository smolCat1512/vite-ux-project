import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface CaseStudyDetailItemProps {
  label: string;
  children: ReactNode;
}

const CaseStudyDetailItem = ({ label, children }: CaseStudyDetailItemProps) => {
  const theme = useMantineTheme();
  const headingColor = theme.other?.caseStudy?.detailsGrid?.heading?.color ?? "#343a40";
  const textColor = theme.other?.caseStudy?.detailsGrid?.text?.color ?? "#6c757d";

  return (
    <div className="flex flex-col gap-1 text-center">
      <h3 style={{ color: headingColor }}>
        {label}
      </h3>
      <p className="italic " style={{ color: textColor }}>
        {Array.isArray(children) ? children.map((child, index) => <span className="flex flex-col" key={index}>{child}</span>) : children}
      </p>
    </div>
  );
};

export default CaseStudyDetailItem;