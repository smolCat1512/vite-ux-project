import { Link } from "react-router-dom";
import { IoOpenOutline } from "react-icons/io5";
import type { Project } from "../pages/CaseStudies/projectsData";

const PortfolioCard = ({
  id,
  title,
  role,
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
          className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>

      <div className="mt-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm italic text-gray-500 mb-2">
          Role: {role}
        </p>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm"
          >
            <IoOpenOutline className="mr-1" />
            Live site
          </a>
        )}
      </div>
    </article>
  );
};

export default PortfolioCard;
