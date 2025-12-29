import { Box } from "@mantine/core";
import type { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
  className?: string;
}

const Main = ({ children, className }: MainProps) => {
  return (
    <Box id="main-content" tabIndex={-1} className={className}>
      {children}
    </Box>
  );
};

export default Main;