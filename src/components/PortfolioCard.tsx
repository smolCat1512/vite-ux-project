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
        className="group block"
      >
        {imageError || !cardImage ? (
          <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-sm bg-stone-100">
            <div className="flex h-3/4 w-3/4 items-center justify-center overflow-hidden rounded-sm">
              <PortfolioCardImagePlaceholder showText={true} />
            </div>
          </div>
        ) : (
          <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-sm bg-stone-100">
            <div className="flex h-3/4 w-3/4 items-center justify-center overflow-hidden rounded-sm">
              <img
                src={cardImage}
                alt={`${title} project screenshot`}
                className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                onError={() => setImageError(true)}
              />
            </div>
          </div>
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
