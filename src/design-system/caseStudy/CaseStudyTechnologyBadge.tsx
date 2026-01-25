import { useMantineTheme } from "@mantine/core";

interface CaseStudyTechnologyBadgeProps {
  technology: string;
}

const CaseStudyTechnologyBadge = ({ technology }: CaseStudyTechnologyBadgeProps) => {
  const theme = useMantineTheme();
  const background = theme.other?.caseStudy?.technologies?.background ?? "#e9d5ff";
  const textColor = theme.other?.caseStudy?.technologies?.text ?? "#7e22ce";

  return (
    <li
      className="px-3 py-1 rounded-full text-sm"
      style={{ 
        backgroundColor: background,
        color: textColor 
      }}
    >
      {technology}
    </li>
  );
};

export default CaseStudyTechnologyBadge;