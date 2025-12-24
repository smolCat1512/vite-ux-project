// components/Main.tsx
import type { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
  className?: string;
}

const Main = ({ children, className }: MainProps) => {
  return (
    <main id="main-content" tabIndex={-1} className={className}>
      {children}
    </main>
  );
};

export default Main;