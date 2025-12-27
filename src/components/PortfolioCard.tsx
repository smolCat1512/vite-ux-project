import { Link } from "react-router-dom";
import { IoOpenOutline } from "react-icons/io5";
import type { Project } from "../pages/CaseStudies/projectsData";
import { Box } from "@mantine/core";

const PortfolioCard = ({
  id,
  title,
  technologies,
  cardImage,
  liveUrl,
}: Project) => {
  return (
    <article className="flex flex-col">
      <Link
        to={`/projects/${id}`}
        aria-label={`View ${title} project`}
        className="overflow-hidden"
      >
        <img
          src={cardImage}
          alt={`Screenshot of ${title}`}
          className="w-full h-50 object-cover transition-transform duration-300 hover:opacity-80"
        />
      </Link>

      <Box className="mt-4 flex flex-row justify-between items-start">
        <Box className="flex flex-col gap-1">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-sm italic text-gray-600 mb-2">
          {technologies}
        </p>
        </Box>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm"
          >
            <IoOpenOutline size="24" title="Open live site" className="mr-1" />
          </a>
        )}
      </Box>
    </article>
  );
};

export default PortfolioCard;
