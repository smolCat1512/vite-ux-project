import PortfolioCard from "./PortfolioCard";
import { projects } from "../pages/CaseStudies/projectsData";
import type { JSX } from "react/jsx-runtime";
import type { Project } from "../pages/CaseStudies/projectsData";
import PortfolioHeader from "../design-system/portfolio/PortfolioHeader";

const Portfolio = () => {
  return (
    <section className="my-8 md:w-10/12">
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {projects.map((project: JSX.IntrinsicAttributes & Project) => (
          <PortfolioCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;