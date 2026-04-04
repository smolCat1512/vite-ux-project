import { Link } from "react-router-dom";
import { useState } from "react";
import type { Project } from "../pages/CaseStudies/projectsData";
import PortfolioCardImagePlaceholder from "../design-system/portfolio/PortfolioCardImagePlaceholder";
import PortfolioCardTitle from "../design-system/portfolio/PortfolioCardTitle";
import { motion, AnimatePresence } from "framer-motion";

type PortfolioMobileCardProps = Project;

const PortfolioMobileCard = ({
  id,
  title,
  summary,
  cardImage,
  hasCaseStudy,
}: PortfolioMobileCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <article className="relative w-full overflow-hidden rounded-sm h-[320px]">
      {/* Fixed height container so overlay always has enough room */}
      <div
        className="relative w-full h-[320px] cursor-pointer"
        onClick={() => setOverlayOpen((prev) => !prev)}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${title}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOverlayOpen((prev) => !prev);
          }
        }}
      >
        {/* Image fills the fixed-height container */}
        {imageError || !cardImage ? (
          <PortfolioCardImagePlaceholder showText={false} />
        ) : (
          <img
            src={cardImage}
            alt={`${title} project screenshot`}
            className="w-full h-[320px] object-cover"
            onError={() => setImageError(true)}
          />
        )}

        {/* Tap hint — only visible when overlay is closed */}
        <AnimatePresence>
          {!overlayOpen && (
            <motion.div
              className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-black/40 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span>Tap for details</span>
              <span>↑</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slide-up overlay */}
        <AnimatePresence>
          {overlayOpen && (
            <motion.div
              className="absolute inset-0 flex flex-col"
              style={{ backgroundColor: "var(--overlay-bg, rgba(10,10,10,0.96))" }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-3 p-5 h-full justify-between">
                {/* Close button */}
                <div className="flex justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOverlayOpen(false);
                    }}
                    className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1"
                    aria-label="Close overlay"
                  >
                    <span>Close</span>
                    <span>↓</span>
                  </button>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 flex-1 justify-center">

                  <PortfolioCardTitle>
                    <span className="text-white">{title}</span>
                  </PortfolioCardTitle>

                  {summary && (
                    <p className="text-sm leading-relaxed text-white/70">
                      {summary}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-row flex-wrap gap-3 items-center pb-1">
                  {hasCaseStudy && (
                    <Link
                      to={`/case-studies/${id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-white/60 text-white rounded-sm hover:bg-white hover:text-black transition-all duration-200 group"
                      aria-label={`Read full case study for ${title}`}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Read Case Study</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Title bar below image — always visible */}
      <div className="flex flex-row justify-between items-center mt-3 px-1">
        <PortfolioCardTitle>{title}</PortfolioCardTitle>
      </div>
    </article>
  );
};

export default PortfolioMobileCard;
