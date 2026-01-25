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
    <div>
      <h3 className="font-semibold" style={{ color: headingColor }}>
        {label}
      </h3>
      <p className="text-sm" style={{ color: textColor }}>
        {children}
      </p>
    </div>
  );
};

export default CaseStudyDetailItem;