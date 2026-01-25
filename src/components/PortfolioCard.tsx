import { Link } from "react-router-dom";
import { useState } from "react";
import type { Project } from "../pages/CaseStudies/projectsData";
import { Box } from "@mantine/core";
import PortfolioCardTitle from "../design-system/portfolio/PortfolioCardTitle";
import PortfolioCardTechnologies from "../design-system/portfolio/PortfolioCardTechnologies";
import PortfolioCardLink from "../design-system/portfolio/PortfolioCardLink";
import PortfolioCardImagePlaceholder from "../design-system/portfolio/PortfolioCardImagePlaceholder";

const PortfolioCard = ({
  id,
  title,
  technologies,
  cardImage,
  liveUrl,
}: Project) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="flex flex-col">
      <Link
        to={`/projects/${id}`}
        aria-label={`View ${title} project details`}
        className="overflow-hidden block"
      >
        {imageError || !cardImage ? (
          <PortfolioCardImagePlaceholder showText={true} />
        ) : (
          <img
            src={cardImage}
            alt={`${title} project screenshot`}
            className="w-full h-50 object-cover transition-transform duration-300 hover:opacity-80"
            onError={() => setImageError(true)}
          />
        )}
      </Link>
      <Box className="mt-4 flex flex-row justify-between items-start">
        <Box className="flex flex-col gap-1">
          <PortfolioCardTitle>{title}</PortfolioCardTitle>
          <PortfolioCardTechnologies>
            {technologies}
          </PortfolioCardTechnologies>
        </Box>
        {liveUrl && (
          <PortfolioCardLink 
            href={liveUrl} 
            title={`Open ${title} live site`}
          />
        )}
      </Box>
    </article>
  );
};

export default PortfolioCard;