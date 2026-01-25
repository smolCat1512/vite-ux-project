import { useState } from "react";
import { useMantineTheme } from "@mantine/core";

interface CaseStudyLiveButtonProps {
  href: string;
  children: string;
}

const CaseStudyLiveButton = ({ href, children }: CaseStudyLiveButtonProps) => {
  const theme = useMantineTheme();
  const background = theme.other?.caseStudy?.liveButton?.background ?? "#c2410c";
  const textColor = theme.other?.caseStudy?.liveButton?.text ?? "#ffffff";
  const hoverBackground = theme.other?.caseStudy?.liveButton?.hoverBackground ?? "#9a3412";
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex mt-8 px-6 py-3 rounded-lg"
      style={{
        backgroundColor: isHovered ? hoverBackground : background,
        color: textColor,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
};

export default CaseStudyLiveButton;