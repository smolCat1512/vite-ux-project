import CaseStudyCard from "./CaseStudyCard";

const caseStudies = [
  {
    title: "Project Shelter",
    description: "Digital Advice Webchat development and migration.",
    role: "Resarch, Design, Frontend Development, Design System",
    image: "/images/project-alpha.jpg",
    slug: "shelter",
  },
  {
    title: "Project NFCC",
    description:
      "Digital service development for the National Foundation for Credit Counseling.",
    role: "Research, Design, Frontend Development",
    image: "/images/project-beta.jpg",
    slug: "nfcc",
  },
];

const CaseStudies = () => {
  return (
    <section>
      <div className="flex justify-center">
        <span className="text-3xl mb-2">Portfolio</span>
      </div>
      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-8"
        id="case-studies"
      >
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} {...study} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
