import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface ProjectSummarySummaryTextProps {
  children: ReactNode;
}

const ProjectSummarySummaryText = ({ children }: ProjectSummarySummaryTextProps) => {
  const theme = useMantineTheme();
  const summaryColor = theme.other?.projectSummary?.content?.summary?.color ?? "#495057";

  return (
    <p className="text-md" style={{ color: summaryColor }}>
      {children}
    </p>
  );
};

export default ProjectSummarySummaryText;