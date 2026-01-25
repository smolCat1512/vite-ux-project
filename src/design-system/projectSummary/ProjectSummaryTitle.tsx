import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface ProjectSummaryTitleProps {
  children: ReactNode;
}

const ProjectSummaryTitle = ({ children }: ProjectSummaryTitleProps) => {
  const theme = useMantineTheme();
  const titleColor = theme.other?.projectSummary?.header?.title?.color ?? "#343a40";

  return (
    <h1 className="text-4xl font-bold mb-4" style={{ color: titleColor }}>
      {children}
    </h1>
  );
};

export default ProjectSummaryTitle;