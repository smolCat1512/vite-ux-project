import PortfolioRow from "./PortfolioRow";
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
      className={`my-8 md:w-10/12 ${isMobile ? "pt-10" : "pt-30"}`}
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
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project: JSX.IntrinsicAttributes & Project) => (
            <PortfolioMobileCard key={project.id} {...project} />
          ))}
        </div>
      ) : (
        // Tablet / Desktop: full-width alternating rows
        <div className="flex flex-col gap-10">
          {projects.map(
            (project: JSX.IntrinsicAttributes & Project, index: number) => (
              <PortfolioRow key={project.id} {...project} index={index} />
            )
          )}
        </div>
      )}
    </motion.section>
  );
};

export default Portfolio;