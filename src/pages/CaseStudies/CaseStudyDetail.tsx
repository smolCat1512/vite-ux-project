// import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import type { CaseStudy } from "./CaseStudiesData";
// import { useMantineTheme } from "@mantine/core";
import CaseStudyTitle from "../../design-system/caseStudy/CaseStudyTitle";
import CaseStudyTagline from "../../design-system/caseStudy/CaseStudyTagline";
import CaseStudyDetailsGrid from "../../design-system/caseStudy/CaseStudyDetailsGrid";
import CaseStudyDetailItem from "../../design-system/caseStudy/CaseStudyDetailItem";
import CaseStudySection from "../../design-system/caseStudy/CaseStudySection";
import CaseStudyTechnologyBadge from "../../design-system/caseStudy/CaseStudyTechnologyBadge";
import CaseStudyLiveButton from "../../design-system/caseStudy/CaseStudyLiveButton";
// import CaseStudyNavButton from "../../design-system/caseStudy/CaseStudyNavButton";
import CaseStudyImage from "../../design-system/caseStudy/CaseStudyImage";

<link
  href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap"
  rel="stylesheet"
></link>;

type CaseStudyDetailProps = CaseStudy & {
  previousStudy?: { title: string; slug: string };
  nextStudy?: { title: string; slug: string };
};

const CaseStudyDetail = ({
  title,
  tagline,
  role,
  client,
  overview,
  challenge,
  solution,
  outcome,
  images = [],
  liveUrl,
  technologies = [],
  cardImage,
  // previousStudy,
  // nextStudy,
}: CaseStudyDetailProps) => {
  // const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  // const theme = useMantineTheme();
  // const borderColor = theme.other?.caseStudy?.navigation?.border ?? "#e5e7eb";

  return (
    <motion.article
      className="mx-auto"
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ fontFamily: "Red Hat Display, sans-serif !important" }}
    >
      {/* Header */}
      <motion.header
        initial={shouldReduceMotion ? {} : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="pt-12 pb-12 px-4 md:grid gap-6 grid-cols-2 items-start md:py-24 md:p-42"
        style={{ backgroundColor: "#efefef" }}
      >
        <div className="text-gray-500 mb-2">
          <CaseStudyTitle>{title}</CaseStudyTitle>
          <CaseStudyTagline>{tagline}</CaseStudyTagline>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0 justify-center items-center">
          <img src={cardImage} alt={`${title} hero`} />
        </div>
      </motion.header>

      {/* Project details */}
      <motion.section
        className="mb-8 flex justify-center"
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <CaseStudyDetailsGrid>
          <CaseStudyDetailItem label="Role">{role}</CaseStudyDetailItem>
          <CaseStudyDetailItem label="Client">{client}</CaseStudyDetailItem>
        </CaseStudyDetailsGrid>
      </motion.section>

      <motion.section
        className="mb-8 bg-gray-100 flex flex-row h-[320px] items-center justify-center"
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p>Supplementary images here</p>
      </motion.section>

      {/* Content sections */}
      <motion.section
        className="mb-16 md:w-7/12 mx-auto px-4"
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <CaseStudySection title="01. Overview">{overview}</CaseStudySection>
        <CaseStudySection title="02. The Challenge">
          {challenge}
        </CaseStudySection>
        <CaseStudySection title="03. The Solution">{solution}</CaseStudySection>
      </motion.section>

      {images.length > 0 && (
        <motion.section
          className="mb-8 mx-auto px-4"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ backgroundColor: "#f9f9f9" }}
        >
          <CaseStudySection title="">
            <div className="pt-8 mb-8 md:w-7/12 mx-auto px-4 flex flex-row gap-6">
              {images.map((img, i) => (
                <CaseStudyImage
                  key={img}
                  src={img}
                  alt={`${title} screenshot ${i + 1}`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center italic pb-8">
              Pictured above: Wireframes of the web chat interface, and design
              system components.
            </p>
          </CaseStudySection>
        </motion.section>
      )}

      <motion.section
        className="mb-8 md:w-7/12 mx-auto px-4"
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <CaseStudySection title="Outcome">{outcome}</CaseStudySection>
      </motion.section>

      {/* Technologies */}
      <motion.section
        className="mb-8 md:w-7/12 mx-auto px-4"
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <CaseStudySection title="Technologies Used">
          <ul className="flex flex-wrap gap-8 pt-4">
            {technologies.map((tech) => (
              <CaseStudyTechnologyBadge key={tech} technology={tech} />
            ))}
          </ul>
        </CaseStudySection>
      </motion.section>

      {/* Live site */}
      {liveUrl && (
        <motion.section
          className="mb-16 md:w-7/12 mx-auto px-4 flex justify-center"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <CaseStudyLiveButton href={liveUrl}>
            Visit Live Site →
          </CaseStudyLiveButton>
        </motion.section>
      )}

      {/* Navigation */}
      {/* <nav
        className="border-t pt-8 mt-12 flex justify-between items-center"
        style={{ borderColor }}
      > */}
      {/* <CaseStudyNavButton onClick={() => navigate("/#portfolio")}>
          ← Back to Portfolio
        </CaseStudyNavButton> */}

      {/* <div className="flex gap-4">
          {previousStudy && (
            <CaseStudyNavButton
              onClick={() => navigate(`/case-studies/${previousStudy.slug}`)}
            >
              ← {previousStudy.title}
            </CaseStudyNavButton>
          )}
          {nextStudy && (
            <CaseStudyNavButton
              onClick={() => navigate(`/case-studies/${nextStudy.slug}`)}
            >
              {nextStudy.title} →
            </CaseStudyNavButton>
          )}
        </div> */}
      {/* </nav> */}
    </motion.article>
  );
};

export default CaseStudyDetail;
