import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface ProjectSummaryProcessItemProps {
  icon?: React.ElementType;
  children: ReactNode;
}

const ProjectSummaryProcessItem = ({ icon: Icon, children }: ProjectSummaryProcessItemProps) => {
  const theme = useMantineTheme();
  const textColor = theme.other?.projectSummary?.content?.processText?.color ?? "#495057";
  const iconColor = theme.other?.projectSummary?.content?.processIcon?.color ?? "#6c757d";

  return (
    <li className="flex items-start gap-3">
      {Icon && (
        <Icon className="mt-1 flex-shrink-0" style={{ color: iconColor }} />
      )}
      <span style={{ color: textColor }}>{children}</span>
    </li>
  );
};

export default ProjectSummaryProcessItem;