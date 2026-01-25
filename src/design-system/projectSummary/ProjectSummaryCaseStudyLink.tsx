import { useState } from "react";
import { Link } from "react-router-dom";
import { useMantineTheme } from "@mantine/core";

interface ProjectSummaryCaseStudyLinkProps {
  to: string;
  children: string;
}

const ProjectSummaryCaseStudyLink = ({ to, children }: ProjectSummaryCaseStudyLinkProps) => {
  const theme = useMantineTheme();
  const linkColor = theme.other?.projectSummary?.caseStudyLink?.color ?? "#ff6e00";
  const hoverColor = theme.other?.projectSummary?.caseStudyLink?.hoverColor ?? "#e66300";
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      className="inline-block mb-12 underline text-center mt-6"
      style={{ color: isHovered ? hoverColor : linkColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  );
};

export default ProjectSummaryCaseStudyLink;