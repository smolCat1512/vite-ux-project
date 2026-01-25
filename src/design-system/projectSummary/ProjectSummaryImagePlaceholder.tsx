import { useMantineTheme } from "@mantine/core";
import { FaImage } from "react-icons/fa";

interface ProjectSummaryImagePlaceholderProps {
  title: string;
}

const ProjectSummaryImagePlaceholder = ({ title }: ProjectSummaryImagePlaceholderProps) => {
  const theme = useMantineTheme();
  const backgroundColor = theme.other?.projectSummary?.imagePlaceholder?.backgroundColor ?? "#f3f4f6";
  const iconColor = theme.other?.projectSummary?.imagePlaceholder?.iconColor ?? "#60a5fa";
  const textColor = theme.other?.projectSummary?.imagePlaceholder?.textColor ?? "#343a40";

  return (
    <div
      role="img"
      aria-label={`${title} project image placeholder`}
      className="w-4/5 h-[40vh] flex flex-row gap-4 items-center justify-center rounded-2xl mb-8 md:mb-0 p-8"
      style={{ backgroundColor }}
    >
      <FaImage
        size={24}
        className="text-4xl mb-2"
        style={{ color: iconColor }}
        aria-hidden="true"
      />
      <span className="text-sm" style={{ color: textColor }}>
        {title} image
      </span>
    </div>
  );
};

export default ProjectSummaryImagePlaceholder;