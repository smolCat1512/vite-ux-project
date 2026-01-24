import type { IconType } from "react-icons";
import { useMantineTheme } from "@mantine/core";

interface TechnologiesIconProps {
  icon: IconType;
  size?: number;
}

const TechnologiesIcon = ({ icon: Icon, size = 24 }: TechnologiesIconProps) => {
  const theme = useMantineTheme();
  const iconColor = theme.other?.technologies?.icon?.color ?? "#495057";

  return (
    <Icon
      size={size}
      style={{ color: iconColor }}
      aria-hidden="true"
    />
  );
};

export default TechnologiesIcon;