// src/components/PortfolioCard.tsx
import { Anchor, Box } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { motion } from "framer-motion";
import { IoOpenOutline } from "react-icons/io5";

type CaseStudyCardProps = {
  title: string;
  description: string;
  role: string;
  image: string;
  slug: string;
  site: string;
};

const PortfolioCard = ({
  title,
  role,
  image,
  slug,
  site
}: CaseStudyCardProps) => {
  const [, setIsHovered] = useState(false);

  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  return (
    <div className="flex flex-col align-middle justify-center">
      <div
        className="md:relative md:overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/case-studies/${slug}`}>
          {!isMobile() && (
            <img
              src={image}
              alt={title}
              className="h-80 w-80 px-2 transition-hover duration-300 object-fill hover:opacity-70 hover:scale-110 hover"
            />
          )}
          {isMobile() && (
            <img
              src={image}
              alt={title}
              className="w-full px-2 transition-transform duration-300"
            />
          )}
        </Link>
      </div>
      <Box className="px-4 py-2 mt-12 text-start">
        <Box>
        <h3 className="text-start font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 italic">Role: {role}</p>
        </Box>
        <Box>
          <Anchor href={site} target="_blank">
            <IoOpenOutline className="inline mb-1 mr-1" />
          </Anchor>
        </Box>
      </Box>
    </div>
  );
};

export default PortfolioCard;
