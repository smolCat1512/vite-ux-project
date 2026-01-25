import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface ProjectSummaryProcessHeadingProps {
  children: ReactNode;
}

const ProjectSummaryProcessHeading = ({ children }: ProjectSummaryProcessHeadingProps) => {
  const theme = useMantineTheme();
  const headingColor = theme.other?.projectSummary?.content?.processHeading?.color ?? "#495057";

  return (
    <h2 className="text-xl font-bold mb-4" style={{ color: headingColor }}>
      {children}
    </h2>
  );
};

export default ProjectSummaryProcessHeading;