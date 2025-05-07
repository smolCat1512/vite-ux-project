import { motion } from "framer-motion";
import CaseStudyCard from "../pages/CaseStudies/CaseStudyCard";

const caseStudies = [
  {
    title: "Project Shelter",
    description:
      "Digital Advice Webchat development and migration.",
    year: "2024/25",
    image: "/images/project-alpha.jpg",
    slug: "shelter",
  },
  {
    title: "Project NFCC",
    description:
      "Digital service development for the National Foundation for Credit Counseling.",
    year: "2023/24",
    image: "/images/project-beta.jpg",
    slug: "nfcc",
  },
];

const CaseStudies = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.1 }} // Ensures it only animates once when 10% of it is in view
      className="pt-8 justify-center w-11/12"
      id="case-studies"
    >
      {caseStudies.map((study) => (
        <CaseStudyCard key={study.slug} {...study} />
      ))}
    </motion.section>
  );
}

export default CaseStudies;