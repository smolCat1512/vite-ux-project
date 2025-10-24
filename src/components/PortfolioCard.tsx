// src/components/PortfolioCard.tsx
import { Box } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";

type CaseStudyCardProps = {
  title: string;
  description: string;
  role: string;
  image: string;
  slug: string;
};

const PortfolioCard = ({
  title,
  description,
  role,
  image,
  slug,
}: CaseStudyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={image} 
          alt={title} 
          height={300} 
          className="w-10/12 px-2 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/70 flex items-center justify-center gap-4 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Link
            to={`/portfolio/${slug}`}
            className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors"
          >
            Quick View
          </Link>
          <Link
            to={`/case-studies/${slug}`}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
          >
            Case Study
          </Link>
        </div>
      </div>
      
      <Box className="mt-4 px-2">
        <h2 className="text-1xl">{title}</h2>
        <p className="text-gray-250">{description}</p>
        <p className="text-gray-400 mt-2">{role}</p>
      </Box>
    </div>
  );
};

export default PortfolioCard;