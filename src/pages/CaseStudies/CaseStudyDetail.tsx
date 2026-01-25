import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import type { CaseStudy } from "./CaseStudiesData";
import { useMantineTheme } from "@mantine/core";
import CaseStudyTitle from "../../design-system/caseStudy/CaseStudyTitle";
import CaseStudyTagline from "../../design-system/caseStudy/CaseStudyTagline";
import CaseStudyDetailsGrid from "../../design-system/caseStudy/CaseStudyDetailsGrid";
import CaseStudyDetailItem from "../../design-system/caseStudy/CaseStudyDetailItem";
import CaseStudySection from "../../design-system/caseStudy/CaseStudySection";
import CaseStudyTechnologyBadge from "../../design-system/caseStudy/CaseStudyTechnologyBadge";
import CaseStudyLiveButton from "../../design-system/caseStudy/CaseStudyLiveButton";
import CaseStudyNavButton from "../../design-system/caseStudy/CaseStudyNavButton";
import CaseStudyImage from "../../design-system/caseStudy/CaseStudyImage";

type CaseStudyDetailProps = CaseStudy & {
  previousStudy?: { title: string; slug: string };
  nextStudy?: { title: string; slug: string };
};

const CaseStudyDetail = ({
  title,
  tagline,
  role,
  client,
  duration,
  overview,
  challenge,
  solution,
  outcome,
  images = [],
  liveUrl,
  technologies = [],
  previousStudy,
  nextStudy,
}: CaseStudyDetailProps) => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const theme = useMantineTheme();
  const borderColor = theme.other?.caseStudy?.navigation?.border ?? "#e5e7eb";

  return (
    <motion.article
      className="max-w-4xl mx-auto px-4"
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <header className="mb-8">
        <CaseStudyTitle>{title}</CaseStudyTitle>
        <CaseStudyTagline>{tagline}</CaseStudyTagline>
      </header>

      {/* Project details */}
      <section className="mb-8">
        <CaseStudyDetailsGrid>
          <CaseStudyDetailItem label="Role">{role}</CaseStudyDetailItem>
          <CaseStudyDetailItem label="Client">{client}</CaseStudyDetailItem>
          <CaseStudyDetailItem label="Duration">{duration}</CaseStudyDetailItem>
        </CaseStudyDetailsGrid>
      </section>

      {/* Content sections */}
      <CaseStudySection title="Overview">{overview}</CaseStudySection>
      <CaseStudySection title="The Challenge">{challenge}</CaseStudySection>
      <CaseStudySection title="The Solution">{solution}</CaseStudySection>

      {images.length > 0 && (
        <CaseStudySection title="Project Images">
          <div className="grid md:grid-cols-2 gap-4">
            {images.map((img, i) => (
              <CaseStudyImage
                key={img}
                src={img}
                alt={`${title} screenshot ${i + 1}`}
              />
            ))}
          </div>
        </CaseStudySection>
      )}

      <CaseStudySection title="Outcome">{outcome}</CaseStudySection>

      {/* Technologies */}
      <CaseStudySection title="Technologies Used">
        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <CaseStudyTechnologyBadge key={tech} technology={tech} />
          ))}
        </ul>
      </CaseStudySection>

      {/* Live site */}
      {liveUrl && (
        <CaseStudyLiveButton href={liveUrl}>
          Visit Live Site →
        </CaseStudyLiveButton>
      )}

      {/* Navigation */}
      <nav 
        className="border-t pt-8 mt-12 flex justify-between items-center"
        style={{ borderColor }}
      >
        <CaseStudyNavButton onClick={() => navigate("/#portfolio")}>
          ← Back to Portfolio
        </CaseStudyNavButton>

        <div className="flex gap-4">
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
        </div>
      </nav>
    </motion.article>
  );
};

export default CaseStudyDetail;