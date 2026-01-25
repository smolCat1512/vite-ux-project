import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface ProjectSummaryCaseStudyComingSoonProps {
  children: ReactNode;
}

const ProjectSummaryCaseStudyComingSoon = ({ children }: ProjectSummaryCaseStudyComingSoonProps) => {
  const theme = useMantineTheme();
  const textColor = theme.other?.projectSummary?.caseStudyComingSoon?.color ?? "#6c757d";

  return (
    <p className="italic mb-12 text-center mt-6" style={{ color: textColor }}>
      {children}
    </p>
  );
};

export default ProjectSummaryCaseStudyComingSoon;