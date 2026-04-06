import type { ReactNode } from "react";

interface CaseStudyDetailsGridProps {
  children: ReactNode;
}

const CaseStudyDetailsGrid = ({ children }: CaseStudyDetailsGridProps) => {

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-72"
    >
      {children}
    </div>
  );
};

export default CaseStudyDetailsGrid;