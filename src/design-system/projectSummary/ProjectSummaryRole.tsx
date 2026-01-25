import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";

interface ProjectSummaryRoleProps {
  children: ReactNode;
}

const ProjectSummaryRole = ({ children }: ProjectSummaryRoleProps) => {
  const theme = useMantineTheme();
  const roleColor = theme.other?.projectSummary?.header?.role?.color ?? "#6c757d";

  return (
    <p className="text-lg mb-2" style={{ color: roleColor }}>
      {children}
    </p>
  );
};

export default ProjectSummaryRole;