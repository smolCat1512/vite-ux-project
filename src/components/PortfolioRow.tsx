import { Link } from "react-router-dom";
import { useState } from "react";
import type { Project } from "../pages/CaseStudies/projectsData";
import PortfolioCardImagePlaceholder from "../design-system/portfolio/PortfolioCardImagePlaceholder";
import PortfolioCardTechnologies from "../design-system/portfolio/PortfolioCardTechnologies";
import PortfolioCardTitle from "../design-system/portfolio/PortfolioCardTitle";
import PortfolioCardLink from "../design-system/portfolio/PortfolioCardLink";
import { motion } from "framer-motion";
import { Box } from "@mantine/core";

interface PortfolioRowProps extends Project {
  index: number;
}

const PortfolioRow = ({
  id,
  title,
  role,
  summary,
  technologies,
  cardImage,
  liveUrl,
  hasCaseStudy,
  index,
}: PortfolioRowProps) => {
  const [imageError, setImageError] = useState(false);
  const isReversed = index % 2 !== 0;

  const imagePanel = (
    <div className="relative w-full md:w-3/5 overflow-hidden group">
      <Link
        to={`/projects/${id}`}
        aria-label={`View ${title} project details`}
        className="block h-full"
      >
        {imageError || !cardImage ? (
          <PortfolioCardImagePlaceholder showText={true} />
        ) : (
          <img
            src={cardImage}
            alt={`${title} project screenshot`}
            className="w-full h-72 md:h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
            onError={() => setImageError(true)}
          />
        )}
      </Link>
    </div>
  );

  const contentPanel = (
    <div className="flex flex-col justify-center gap-4 w-full md:w-2/5 px-6 py-8 md:py-10">
      {role && (
        <span className="text-xs uppercase tracking-widest opacity-50 font-medium">
          {role}
        </span>
      )}

      <PortfolioCardTitle>
        <Link
          to={`/projects/${id}`}
          aria-label={`View ${title} project details`}
          className="hover:opacity-70 transition-opacity duration-200"
        >
          {title}
        </Link>
      </PortfolioCardTitle>

      {summary && (
        <p className="text-sm leading-relaxed opacity-70 max-w-sm">{summary}</p>
      )}

      <Box className="mt-1">
        <PortfolioCardTechnologies>{technologies}</PortfolioCardTechnologies>
      </Box>

      <div className="flex flex-row flex-wrap gap-3 mt-2 items-center">
        {hasCaseStudy && (
          <Link
            to={`/projects/${id}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-current rounded-sm hover:bg-current hover:text-white transition-all duration-200 group"
            aria-label={`Read full case study for ${title}`}
          >
            <span>Read Case Study</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        )}
        {liveUrl && (
          <PortfolioCardLink
            href={liveUrl}
            title={`Open ${title} live site`}
          />
        )}
      </div>
    </div>
  );

  return (
    <motion.article
      className="flex flex-col md:flex-row w-full overflow-hidden rounded-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {isReversed ? (
        <>
          {contentPanel}
          {imagePanel}
        </>
      ) : (
        <>
          {imagePanel}
          {contentPanel}
        </>
      )}
    </motion.article>
  );
};

export default PortfolioRow;