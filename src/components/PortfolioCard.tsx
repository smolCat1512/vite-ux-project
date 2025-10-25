// src/components/PortfolioCard.tsx
import { Box } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

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
        {!isMobile() && (
          <img
            src={image}
            alt={title}
            className="h-80 w-80 px-2 transition-transform duration-300 object-fill"
          />
        )}
        {isMobile() && (
          <img
            src={image}
            alt={title}
            className="w-full px-2 transition-transform duration-300"
          />
        )}

        {/* Overlay */}
        {!isMobile() && (
          <div
            className={`w-80 h-80 absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-4 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Link
              to={`/portfolio/${slug}`}
              className="px-6 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors rounded-3xl"
            >
              Process
            </Link>
            <Link
              to={`/case-studies/${slug}`}
              className="px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors rounded-3xl"
            >
              Full Case Study
            </Link>
          </div>
        )}
      </div>

      <Box className="mt-4 px-2">
        {isMobile() && (
          <div className="flex gap-4 mb-2 justify-evenly align-middle">
            <Link
              to={`/portfolio/${slug}`}
              className="px-4 py-2 bg-white text-black font-medium hover:bg-gray-200 transition-colors rounded-3xl border"
            >
              Process
            </Link>
            <Link
              to={`/case-studies/${slug}`}
              className="px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors rounded-3xl"
            >
              Full Case Study
            </Link>
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-4"
        >
          <h2 className="text-1xl">{title}</h2>
          <p className="text-gray-250">{description}</p>
          <p className="text-gray-400 mt-2">{role}</p>
        </motion.div>
      </Box>
    </div>
  );
};

export default PortfolioCard;
