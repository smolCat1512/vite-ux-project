import { Link } from "react-router-dom";
import { UnstyledButton, useMantineTheme } from "@mantine/core";
import type { ReactNode } from "react";

interface ProjectSummaryNavButtonProps {
  to: string;
  variant: "previous" | "next";
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  children: ReactNode;
}

const ProjectSummaryNavButton = ({
  to,
  variant,
  leftSection,
  rightSection,
  children,
}: ProjectSummaryNavButtonProps) => {
  const theme = useMantineTheme();
  const config = theme.other.projectSummary.navigation[variant];

  return (
    <UnstyledButton
      component={Link}
      to={to}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.75rem 1.25rem",
        borderRadius: theme.radius.lg,
        background: config.background,
        color: config.text,
        border: config.border ? `1px solid ${config.border}` : "none",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          config.hoverBackground ?? config.background;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = config.background;
      }}
    >
      {leftSection}
      {children}
      {rightSection}
    </UnstyledButton>
  );
};

export default ProjectSummaryNavButton;
