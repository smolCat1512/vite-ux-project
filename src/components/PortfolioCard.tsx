import { Link } from "react-router-dom";
import { useState } from "react";
import type { Project } from "../pages/CaseStudies/projectsData";
import { Box } from "@mantine/core";
import PortfolioCardTitle from "../design-system/portfolio/PortfolioCardTitle";
import PortfolioCardTechnologies from "../design-system/portfolio/PortfolioCardTechnologies";
import PortfolioCardLink from "../design-system/portfolio/PortfolioCardLink";
import PortfolioCardImagePlaceholder from "../design-system/portfolio/PortfolioCardImagePlaceholder";
import {
  getProcessIcon,
  normalizeProcessStep,
} from "../design-system/portfolio/PortfolioProcess";

const PortfolioCard = ({
  id,
  title,
  technologies,
  process = [],
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
  const innerFrameClass = cardInnerFrameClass ?? "items-center justify-center";
  const imageClass = cardImageClass ?? "";

  const imageContent = (
    <div
      className={`relative flex aspect-4/3 w-full items-center justify-center overflow-hidden rounded-sm ${backgroundClass}`}
    >
      <div
        className={`flex h-3/4 w-3/4 overflow-hidden rounded-sm ${innerFrameClass}`}
      >
        {imageError || !cardImage ? (
          <PortfolioCardImagePlaceholder showText={true} />
        ) : (
          <img
            src={cardImage}
            alt={`${title} project screenshot`}
            className={`h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02] ${imageClass}`}
            onError={() => setImageError(true)}
          />
        )}
      </div>

      {/* Process steps — revealed on hover, doesn't affect card height */}
      {process.length > 0 && (
        <div
          className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/75 pointer-events-none"
          aria-hidden="true"
        >
          <ul className="flex flex-col gap-2.5">
            {process.map((step, i) => {
              const { icon, text } = normalizeProcessStep(step);
              return (
                <li
                  key={i}
                  className="flex items-center gap-2.5 text-white text-xs md:text-sm"
                >
                  {icon && (
                    <span className="shrink-0 text-white/60">
                      {getProcessIcon(icon)}
                    </span>
                  )}
                  <span>{text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <article className="flex flex-col">
      {caseStudyHref ? (
        <Link
          to={caseStudyHref}
          aria-label={`View ${title} case study`}
          className="group block brightness-100 transition-all hover:brightness-90 duration-500"
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
          <PortfolioCardTechnologies>{technologies}</PortfolioCardTechnologies>
        </Box>
        {liveUrl && (
          <PortfolioCardLink href={liveUrl} title={`Open ${title} live site`} />
        )}
      </Box>
    </article>
  );
};

export default PortfolioCard;
