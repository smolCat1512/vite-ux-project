import PortfolioCard from "./PortfolioCard";
import { projects } from "../pages/CaseStudies/projectsData";
import type { JSX } from "react/jsx-runtime";
import type { Project } from "../pages/CaseStudies/projectsData";
import PortfolioHeader from "../design-system/portfolio/PortfolioHeader";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      className="my-8 md:w-10/12"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2 id="portfolio-heading" className="sr-only">
        Portfolio
      </h2>
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {projects.map((project: JSX.IntrinsicAttributes & Project) => (
          <PortfolioCard key={project.id} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
