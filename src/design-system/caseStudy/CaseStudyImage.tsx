import { useState } from "react";
import CaseStudyImagePlaceholder from "./CaseStudyImagePlaceholder";

interface CaseStudyImageProps {
  src: string;
  alt: string;
}

const CaseStudyImage = ({ src, alt }: CaseStudyImageProps) => {
  const [imageError, setImageError] = useState(false);

  if (imageError || !src) {
    return <CaseStudyImagePlaceholder showText={true} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full rounded-lg shadow"
      onError={() => setImageError(true)}
    />
  );
};

export default CaseStudyImage;