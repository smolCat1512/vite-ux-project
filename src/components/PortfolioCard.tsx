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
  hasCaseStudy,
  cardBackgroundClass,
  cardInnerFrameClass,
  cardImageClass,
}: Project) => {
  const [imageError, setImageError] = useState(false);
  const caseStudyHref = hasCaseStudy ? `/case-studies/${id}` : null;
  const backgroundClass = cardBackgroundClass ?? "bg-stone-100";
  const innerFrameClass =
    cardInnerFrameClass ?? "items-center justify-center";
  const imageClass = cardImageClass ?? "";

  const imageContent = imageError || !cardImage ? (
    <div
      className={`flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-sm ${backgroundClass}`}
    >
      <div
        className={`flex h-3/4 w-3/4 overflow-hidden rounded-sm ${innerFrameClass}`}
      >
        <PortfolioCardImagePlaceholder showText={true} />
      </div>
    </div>
  ) : (
    <div
      className={`flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-sm ${backgroundClass}`}
    >
      <div
        className={`flex h-3/4 w-3/4 overflow-visible rounded-sm ${innerFrameClass}`}
      >
        <img
          src={cardImage}
          alt={`${title} project screenshot`}
          className={`h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02] ${imageClass}`}
          onError={() => setImageError(true)}
        />
      </div>
    </div>
  );

  return (
    <article className="flex flex-col">
      {caseStudyHref ? (
        <Link
          to={caseStudyHref}
          aria-label={`View ${title} case study`}
          className="group block"
          target="_blank"
          rel="noopener noreferrer"
        >
          {imageContent}
        </Link>
      ) : (
        <div className="group block">{imageContent}</div>
      )}
      <Box className="mt-4 flex flex-row justify-between items-start">
        <Box className="flex flex-col gap-1">
          {caseStudyHref ? (
            <Link
              to={caseStudyHref}
              aria-label={`View ${title} case study`}
              className="w-fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PortfolioCardTitle>{title}</PortfolioCardTitle>
            </Link>
          ) : (
            <PortfolioCardTitle>{title}</PortfolioCardTitle>
          )}
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
