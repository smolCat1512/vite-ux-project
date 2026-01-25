import { useMantineTheme } from "@mantine/core";
import { HiPhotograph } from "react-icons/hi";

interface PortfolioCardImagePlaceholderProps {
  showText?: boolean;
}

const PortfolioCardImagePlaceholder = ({ 
  showText = true 
}: PortfolioCardImagePlaceholderProps) => {
  const theme = useMantineTheme();
  const iconColor = theme.other?.portfolio?.card?.placeholder?.iconColor ?? "#9ca3af";
  const textColor = theme.other?.portfolio?.card?.placeholder?.textColor ?? "#6b7280";
  const backgroundColor = theme.other?.portfolio?.card?.placeholder?.backgroundColor ?? "#e5e7eb";

  return (
    <div 
      className="w-full h-50 flex flex-col items-center justify-center gap-2"
      style={{ backgroundColor }}
    >
      <HiPhotograph size={48} style={{ color: iconColor }} />
      {showText && (
        <span className="text-sm" style={{ color: textColor }}>
          No image available
        </span>
      )}
    </div>
  );
};

export default PortfolioCardImagePlaceholder;