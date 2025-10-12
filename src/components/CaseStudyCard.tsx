// src/components/CaseStudyCard.tsx
import { Box } from "@mantine/core";
import { Link } from "react-router-dom";

type CaseStudyCardProps = {
  title: string;
  description: string;
  languages: string;
  image: string;
  slug: string;
};

// ! - Need images for case studies

const CaseStudyCard = ({
  title,
  description,
  languages,
  image,
  slug,
}: CaseStudyCardProps) => {
  return (
    <div className="flex flex-col">
      <div>
        <Link to={`/case-studies/${slug}`}>
          {/* !TODO -  Need Shelter website with webchat open image */}
          <img src={image} alt={title} height={300} className="w-10/12 px-2" />
        </Link>
        <Box>
          <h2 className="text-1xl">{title}</h2>
          <p className="text-gray-250">{description}</p>
          <p className="text-gray-400 mt-2">{languages}</p>
        </Box>
      </div>
    </div>
  );
};

export default CaseStudyCard;
