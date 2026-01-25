import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface ProjectSummaryTechnologiesProps {
  children: ReactNode;
}

const ProjectSummaryTechnologies = ({ children }: ProjectSummaryTechnologiesProps) => {
  const theme = useMantineTheme();
  const techColor = theme.other?.projectSummary?.header?.technologies?.color ?? "#495057";

  return (
    <p className="text-md text-center" style={{ color: techColor }}>
      {children}
    </p>
  );
};

export default ProjectSummaryTechnologies;