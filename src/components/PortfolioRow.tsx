import { Link } from "react-router-dom";
import { useState } from "react";
import type { Project } from "../pages/CaseStudies/projectsData";
import PortfolioCardImagePlaceholder from "../design-system/portfolio/PortfolioCardImagePlaceholder";
import PortfolioCardTitle from "../design-system/portfolio/PortfolioCardTitle";
import { motion } from "framer-motion";

const PortfolioLayout = ({
  id,
  title,
  summary,
  cardImage,
}: Project) => {
  const [imageError, setImageError] = useState(false);

  const imagePanel = (
    <div className="group relative w-full">
      <Link to={`/projects/${id}`} aria-label={`View ${title} project details`}>
        {imageError || !cardImage ? (
          <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-stone-100">
            <div className="flex h-full w-full items-center justify-center p-8 md:p-10">
              <div className="flex h-[70%] w-[70%] items-center justify-center overflow-hidden rounded-sm border border-black/8 bg-white shadow-sm">
                <PortfolioCardImagePlaceholder showText={true} />
              </div>
            </div>
          </div>
        ) : (
          <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-stone-100 justify-center items-center flex">
              <div className="flex justify-center align-middle">
                <img
                  src={cardImage}
                  alt={`${title} project screenshot`}
                  className="h-3/4 w-3/4 object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  onError={() => setImageError(true)}
                />
              </div>
          </div>
        )}
      </Link>
    </div>
  );

  const contentPanel = (
    <div className="flex flex-col gap-4 px-1 py-5 md:px-0 md:py-6">
      <PortfolioCardTitle>{title}</PortfolioCardTitle>

      {summary && (
        <p className="max-w-xl text-sm leading-relaxed opacity-70">{summary}</p>
      )}
    </div>
  );

  return (
    <motion.article
      className="flex flex-col w-full overflow-hidden rounded-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {imagePanel}
      {contentPanel}
    </motion.article>
  );
};

export default PortfolioLayout;
