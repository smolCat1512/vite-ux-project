import { useParams } from "react-router-dom";
import { projects } from "./projectsData";
import { Box } from "@mantine/core";
import { FaArrowLeft, FaArrowRight, FaHome } from "react-icons/fa";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { FaPencil, FaMagnifyingGlass, FaCode, FaRocket } from "react-icons/fa6";
import { RiTestTubeFill } from "react-icons/ri";
import { BsServer } from "react-icons/bs";
import { IoAccessibility } from "react-icons/io5";
import ProjectSummaryTitle from "../../design-system/projectSummary/ProjectSummaryTitle";
import ProjectSummaryRole from "../../design-system/projectSummary/ProjectSummaryRole";
import ProjectSummaryTechnologies from "../../design-system/projectSummary/ProjectSummaryTechnologies";
import ProjectSummarySummaryText from "../../design-system/projectSummary/ProjectSummarySummaryText";
import ProjectSummaryProcessHeading from "../../design-system/projectSummary/ProjectSummaryProcessHeading";
import ProjectSummaryProcessItem from "../../design-system/projectSummary/ProjectSummaryProcessItem";
import ProjectSummaryImagePlaceholder from "../../design-system/projectSummary/ProjectSummaryImagePlaceholder";
import ProjectSummaryCaseStudyLink from "../../design-system/projectSummary/ProjectSummaryCaseStudyLink";
import ProjectSummaryCaseStudyComingSoon from "../../design-system/projectSummary/ProjectSummaryCaseStudyComingSoon";
import ProjectSummaryNavButton from "../../design-system/projectSummary/ProjectSummaryNavButton";

const ProjectSummary = () => {
  const { projectId } = useParams();
  const shouldReduceMotion = useReducedMotion();

  const index = projects.findIndex((p) => p.id === projectId);
  if (index === -1) return <p>Project not found</p>;

  const project = projects[index];
  const prev = projects[index - 1];
  const next = projects[index + 1];

  const hasImage = Boolean(project.cardImage);

  const motionVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={project.id}
        initial={shouldReduceMotion ? undefined : motionVariants.initial}
        animate={shouldReduceMotion ? undefined : motionVariants.animate}
        exit={shouldReduceMotion ? undefined : motionVariants.exit}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto px-4 md:w-10/12 lg:w-8/12 pt-16"
      >
        {/* Header */}
        <section className="flex flex-col items-center py-6">
          <ProjectSummaryTitle>{project.title}</ProjectSummaryTitle>
          <ProjectSummaryRole>{project.role}</ProjectSummaryRole>
          <ProjectSummaryTechnologies>
            {project.technologies}
          </ProjectSummaryTechnologies>
        </section>

        {/* Content */}
        <Box className="md:grid mb-8 md:grid-cols-2 md:gap-16">
          <Box className="flex flex-col items-center mb-12 md:mb-0 md:h-4/5">
            {hasImage ? (
              <img
                src={project.cardImage}
                alt={`${project.title} project image`}
                className="w-4/5 object-cover h-auto md:mb-0 rounded-lg"
              />
            ) : (
              <ProjectSummaryImagePlaceholder title={project.title} />
            )}

            {project.hasCaseStudy ? (
              <ProjectSummaryCaseStudyLink to={`/case-studies/${project.id}`}>
                View full case study →
              </ProjectSummaryCaseStudyLink>
            ) : (
              <ProjectSummaryCaseStudyComingSoon>
                Full case study coming soon
              </ProjectSummaryCaseStudyComingSoon>
            )}
          </Box>

          <Box className="flex flex-col justify-between">
            <Box className="flex flex-col gap-4">
              <ProjectSummarySummaryText>
                {project.summary}
              </ProjectSummarySummaryText>

              <ProjectSummaryProcessHeading>
                The Process
              </ProjectSummaryProcessHeading>

              {project.process && project.process.length > 0 && (
                <ul className="space-y-3">
                  {project.process.map((step, index) => {
                    const iconMap: Record<string, React.ElementType> = {
                      search: FaMagnifyingGlass,
                      pencil: FaPencil,
                      code: FaCode,
                      vial: RiTestTubeFill,
                      rocket: FaRocket,
                      server: BsServer,
                      accessibility: IoAccessibility
                    };

                    const Icon =
                      typeof step === "string" ? null : iconMap[step.icon];

                    const text = typeof step === "string" ? step : step.text;

                    return (
                      <ProjectSummaryProcessItem key={index} icon={Icon || undefined}>
                        {text}
                      </ProjectSummaryProcessItem>
                    );
                  })}
                </ul>
              )}
            </Box>

            {/* Navigation */}
            <nav
              aria-label="Project navigation"
              className="flex justify-end pt-6 gap-8"
            >
              {prev && (
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? { opacity: 0.9 }
                      : { y: -4, opacity: 0.9 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ display: "inline-block" }}
                >
                  <ProjectSummaryNavButton
                    to={`/projects/${prev.id}`}
                    variant="previous"
                    leftSection={<FaArrowLeft />}
                  >
                    Previous
                  </ProjectSummaryNavButton>
                </motion.div>
              )}

              {next ? (
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? { opacity: 0.9 }
                      : { y: -4, opacity: 0.9 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ display: "inline-block" }}
                >
                  <ProjectSummaryNavButton
                    to={`/projects/${next.id}`}
                    variant="next"
                    rightSection={<FaArrowRight />}
                  >
                    Next
                  </ProjectSummaryNavButton>
                </motion.div>
              ) : (
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? { opacity: 0.9 }
                      : { y: -4, opacity: 0.9 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ display: "inline-block" }}
                >
                  <ProjectSummaryNavButton
                    to="/"
                    variant="next"
                    leftSection={<FaHome />}
                  >
                    Home
                  </ProjectSummaryNavButton>
                </motion.div>
              )}
            </nav>
          </Box>
        </Box>
      </motion.article>
    </AnimatePresence>
  );
};

export default ProjectSummary;