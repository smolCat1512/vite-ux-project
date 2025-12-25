import { useParams } from "react-router-dom";
import CaseStudyDetail from "./CaseStudyDetail";
import { caseStudiesData } from "./caseStudiesData";

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const index = caseStudiesData.findIndex(
    (study: { id: string | undefined; }) => study.id === slug
  );

  if (index === -1) {
    return <p>Case study not found.</p>;
  }

  const study = caseStudiesData[index];
  const previous = caseStudiesData[index - 1];
  const next = caseStudiesData[index + 1];

  return (
    <CaseStudyDetail
      {...study}
      previousStudy={
        previous
          ? { title: previous.title, slug: previous.id }
          : undefined
      }
      nextStudy={
        next
          ? { title: next.title, slug: next.id }
          : undefined
      }
    />
  );
};

export default CaseStudyPage;
