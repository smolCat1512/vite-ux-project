import type { ReactNode } from "react";

interface CaseStudyDetailsGridProps {
  children: ReactNode;
}

const CaseStudyDetailsGrid = ({ children }: CaseStudyDetailsGridProps) => {

  return (
    <div 
      className="grid md:grid-cols-2 gap-24 p-8 md:p-16"
    >
      {children}
    </div>
  );
};

export default CaseStudyDetailsGrid;