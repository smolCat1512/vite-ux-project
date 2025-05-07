// src/components/CaseStudyCard.tsx
import { Link } from "react-router-dom";

type CaseStudyCardProps = {
  title: string;
  description: string;
  year: string;
  image: string;
  slug: string;
};

const CaseStudyCard = ({ title, description, year, image, slug }: CaseStudyCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      {/* Left - Text */}
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-gray-300">{description}</p>
        <p className="text-gray-400 mt-2">{year}</p>
        <Link
          to={`/case-studies/${slug}`}
          className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          View Case Study
        </Link>
      </div>

      {/* Right - Image */}
      <div>
        <img
          src={image}
          alt={title}
          width={300}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default CaseStudyCard;
