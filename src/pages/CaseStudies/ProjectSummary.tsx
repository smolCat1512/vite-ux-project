import { useParams, Link } from "react-router-dom";
import { projects } from "./projectsData";
import { Box, Button } from "@mantine/core";
import { FaArrowLeft, FaArrowRight, FaImage } from "react-icons/fa";

const ProjectSummary = () => {
  const { projectId } = useParams();
  const index = projects.findIndex((p) => p.id === projectId);

  if (index === -1) return <p>Project not found</p>;

  const project = projects[index];
  const prev = projects[index - 1];
  const next = projects[index + 1];

  const hasImage = Boolean(project.cardImage);

  return (
    <article className="mx-auto py-24 px-4 md:w-10/12 lg:w-8/12">
      <section className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-gray-500 mb-2">{project.role}</p>
        <p className="text-md text-center">{project.technologies}</p>
      </section>

      <Box className="grid place-items-start mb-8 md:grid-cols-2 md:gap-16">
        {hasImage ? (
          <img
            src={project.cardImage}
            alt={`${project.title} project image`}
            className="w-full h-[40vh] object-cover mb-8 md:h-auto md:mb-0 rounded-lg"
          />
        ) : (
          <div
            role="img"
            aria-label={`${project.title} project image placeholder`}
            className="w-full h-[40vh] flex flex-row gap-4 items-start justify-start
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

        <p className="text-md mb-8">{project.summary}</p>
      </Box>

      {project.hasCaseStudy && (
        <Link
          to={`/case-studies/${project.id}`}
          className="inline-block mb-12 underline"
        >
          View full case study →
        </Link>
      )}

      <nav className="flex justify-end pt-6 gap-8">
        {prev ? (
          <Button
            variant="outline"
            color="grey"
            radius="lg"
            leftSection={<FaArrowLeft />}
            component="a"
            href={`/projects/${prev.id}`}
          >
            Previous
          </Button>
        ) : (
          <span />
        )}

        {next && (
          <Button
            variant="filled"
            color="grey"
            radius="lg"
            rightSection={<FaArrowRight />}
            component="a"
            href={`/projects/${next.id}`}
          >
            Next
          </Button>
        )}
      </nav>
    </article>
  );
};

export default ProjectSummary;
