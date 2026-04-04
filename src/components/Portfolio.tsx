import PortfolioCard from "./PortfolioCard";
import PortfolioMobileCard from "./PortfolioMobileCard";
import { projects } from "../pages/CaseStudies/projectsData";
import type { JSX } from "react/jsx-runtime";
import type { Project } from "../pages/CaseStudies/projectsData";
import PortfolioHeader from "../design-system/portfolio/PortfolioHeader";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const isMobile = useMediaQuery("(max-width: 480px)");

  return (
    <motion.section
      className={`my-8 w-full overflow-hidden md:w-10/12 ${isMobile ? "pt-10" : "pt-30"} ${isMobile ? "px-6" : "px-0"}`}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2 id="portfolio-heading" className="sr-only">
        Portfolio
      </h2>

      <Box mb={24} className="text-center">
        <PortfolioHeader>Portfolio</PortfolioHeader>
      </Box>

      {isMobile ? (
        // Mobile: card grid with slide-up overlay
        <div className="flex flex-col gap-20 w-full">
          {projects.map((project: JSX.IntrinsicAttributes & Project) => (
            <PortfolioMobileCard key={project.id} {...project} />
          ))}
        </div>
      ) : (
        // Tablet / Desktop: two-column portfolio grid
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 pb-20 md:grid-cols-2">
          {projects.map((project: JSX.IntrinsicAttributes & Project) => (
            <PortfolioCard key={project.id} {...project} />
          ))}
        </div>
      )}
    </motion.section>
  );
};

export default Portfolio;
