import { Anchor, Box } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoOpenOutline } from "react-icons/io5";

type CaseStudyCardProps = {
  title: string;
  description?: string;
  role: string;
  image: string;
  slug: string;
  site: string;
};

const PortfolioCard = ({ title, role, image, slug, site }: CaseStudyCardProps) => {
  const [, setIsHovered] = useState(false);

  const isMobile = () => window.innerWidth <= 768;

  return (
    <article className="flex flex-col items-center justify-center">
      <div
        className="md:relative md:overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          to={`/case-studies/${slug}`}
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          <img
            src={image}
            alt={title}
            className={`transition-transform duration-300 ${
              !isMobile()
                ? "h-80 w-80 px-2 hover:opacity-70 hover:scale-110"
                : "w-full px-2"
            }`}
          />
        </Link>
      </div>

      <Box className="px-4 py-2 mt-6 text-start w-full md:w-80">
        <h3 className="text-start font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 italic mb-2">Role: {role}</p>
        <Anchor
          href={site}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          aria-label={`Visit live site for ${title}`}
        >
          <IoOpenOutline className="inline mb-1 mr-1" />
          Live Site
        </Anchor>
      </Box>
    </article>
  );
};

export default PortfolioCard;
