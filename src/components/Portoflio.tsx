import PortfolioCard from "./PortfolioCard";
import { projects } from "../pages/CaseStudies/projectsData";
import type { JSX } from "react/jsx-runtime";
import type { Project } from "../pages/CaseStudies/projectsData";

const Portfolio = () => {
  return (
    <section className="my-8 md:w-10/12">
      <h2 className="text-3xl text-center mb-6">Portfolio</h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {projects.map((project: JSX.IntrinsicAttributes & Project) => (
          <PortfolioCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
