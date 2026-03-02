import type { ReactNode } from "react";

interface TechnologiesTextProps {
  children: ReactNode;
}

const TechnologiesText = ({ children }: TechnologiesTextProps) => {

  return (
    <p className="font-semibold" style={{ color: "#343a40" }}>
      {children}
    </p>
  );
};

export default TechnologiesText;