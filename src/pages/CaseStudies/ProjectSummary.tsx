import { useParams, Link } from "react-router-dom";
import { projects } from "./projectsData";
import { Box, Button } from "@mantine/core";
import { FaArrowLeft, FaArrowRight, FaImage, FaHome } from "react-icons/fa";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { FaPencil, FaMagnifyingGlass, FaCode, FaRocket } from "react-icons/fa6";
import { RiTestTubeFill } from "react-icons/ri";
import { BsServer } from "react-icons/bs";
import { IoAccessibility } from "react-icons/io5";

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
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-gray-500 mb-2">{project.role}</p>
          <p className="text-md text-center">{project.technologies}</p>
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
              <div
                role="img"
                aria-label={`${project.title} project image placeholder`}
                className="w-4/5 h-[40vh] flex flex-row gap-4 items-center justify-center
                   bg-gray-100 rounded-2xl text-black mb-8 md:mb-0 p-8"
              >
                <FaImage
                  size={24}
                  className="text-4xl mb-2 text-blue-400"
                  aria-hidden="true"
                />
                <span className="text-sm">{project.title} image</span>
              </div>
            )}

            {project.hasCaseStudy ? (
              <Link
                to={`/case-studies/${project.id}`}
                className="inline-block mb-12 underline text-center mt-6"
              >
                View full case study →
              </Link>
            ) : (
              <p className="italic mb-12 text-center mt-6">
                Full case study coming soon
              </p>
            )}
          </Box>

          <Box className="flex flex-col justify-between">
            <Box className="flex flex-col gap-4">
              <p className="text-md">{project.summary}</p>

              <h2 className="text-xl font-bold mb-4 text-gray-700">
                The Process
              </h2>

              {project.process && project.process.length > 0 && (
                <ul className="space-y-3">
                  {project.process.map((step, index) => {
                    // Map icon names to components
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
                      <li key={index} className="flex items-start gap-3">
                        {Icon && (
                          <Icon className="mt-1 flex-shrink-0" />
                        )}
                        <span>{text}</span>
                      </li>
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
                  <Button
                    component={Link}
                    to={`/projects/${prev.id}`}
                    variant="outline"
                    color="gray"
                    radius="lg"
                    leftSection={<FaArrowLeft />}
                  >
                    Previous
                  </Button>
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
                  <Button
                    component={Link}
                    to={`/projects/${next.id}`}
                    variant="filled"
                    color="gray"
                    radius="lg"
                    rightSection={<FaArrowRight />}
                    styles={{
                      root: {
                        backgroundColor: "var(--mantine-color-gray-8)",
                        "&:hover": {
                          backgroundColor: "var(--mantine-color-gray-8)",
                        },
                      },
                    }}
                  >
                    Next
                  </Button>
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
                  <Button
                    component={Link}
                    to="/"
                    variant="filled"
                    color="gray"
                    radius="lg"
                    leftSection={<FaHome />}
                    styles={{
                      root: {
                        backgroundColor: "var(--mantine-color-gray-8)",
                        "&:hover": {
                          backgroundColor: "var(--mantine-color-gray-8)",
                        },
                      },
                    }}
                  >
                    Home
                  </Button>
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
