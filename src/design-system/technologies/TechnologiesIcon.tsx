import type { IconType } from "react-icons";

interface TechnologiesIconProps {
  icon: IconType;
  size?: number;
  color?: string;
}

const TechnologiesIcon = ({ icon: Icon, size = 24, color }: TechnologiesIconProps) => {
  const iconColor = color;

  return (
    <Icon
      size={size}
      style={{ color: iconColor }}
      aria-hidden="true"
    />
  );
};

export default TechnologiesIcon;