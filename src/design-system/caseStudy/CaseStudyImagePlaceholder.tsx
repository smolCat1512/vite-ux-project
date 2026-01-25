import { useMantineTheme } from "@mantine/core";
import { HiPhotograph } from "react-icons/hi";

interface CaseStudyImagePlaceholderProps {
  showText?: boolean;
}

const CaseStudyImagePlaceholder = ({ 
  showText = true 
}: CaseStudyImagePlaceholderProps) => {
  const theme = useMantineTheme();
  const iconColor = theme.other?.caseStudy?.imagePlaceholder?.iconColor ?? "#9ca3af";
  const textColor = theme.other?.caseStudy?.imagePlaceholder?.textColor ?? "#6b7280";
  const backgroundColor = theme.other?.caseStudy?.imagePlaceholder?.backgroundColor ?? "#e5e7eb";

  return (
    <div 
      className="w-full rounded-lg shadow flex flex-col items-center justify-center gap-2 min-h-64"
      style={{ backgroundColor }}
    >
      <HiPhotograph size={48} style={{ color: iconColor }} />
      {showText && (
        <span className="text-sm" style={{ color: textColor }}>
          Image unavailable
        </span>
      )}
    </div>
  );
};

export default CaseStudyImagePlaceholder;