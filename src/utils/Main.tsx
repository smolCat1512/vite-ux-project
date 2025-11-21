import { type ReactNode, useEffect, useRef } from "react";

interface MainProps {
  children: ReactNode;
  className?: string;
}

const Main = ({ children, className }: MainProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <main ref={ref} tabIndex={-1} className={className} id="main-content">
      {children}
    </main>
  );
};

export default Main;
