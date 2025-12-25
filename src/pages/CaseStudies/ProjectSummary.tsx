import { useParams, Link } from "react-router-dom";
import { projects } from "./projectsData";
import { Box } from "@mantine/core";
import { FaImage } from "react-icons/fa";

const ProjectSummary = () => {
  const { projectId } = useParams();
  const index = projects.findIndex((p) => p.id === projectId);

  if (index === -1) return <p>Project not found</p>;

  const project = projects[index];
  const prev = projects[index - 1];
  const next = projects[index + 1];

  const hasImage = Boolean(project.cardImage);

  return (
    <article className="max-w-3xl mx-auto py-12 px-4 mt-10">
      <section className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="italic text-gray-500 mb-6">{project.role}</p>
      </section>

      <Box className="grid place-items-start mb-8 md:grid-cols-2 md:gap-16">
        {hasImage ? (
          <img
            src={project.cardImage}
            alt={`${project.title} project image`}
            className="w-full h-[60vh] object-cover mb-8 md:h-auto md:mb-0 rounded-lg"
          />
        ) : (
          <div
            role="img"
            aria-label={`${project.title} project image placeholder`}
            className="w-full h-[40vh] flex flex-row gap-4 items-start justify-start
                 bg-gray-100 rounded-2xl text-black mb-8 md:mb-0 p-8"
          >
            <FaImage size={24} className="text-4xl mb-2 text-blue-400" aria-hidden="true" />
            <span className="text-sm">{project.title} image</span>
          </div>
        )}

        <p className="text-lg mb-8">{project.summary}</p>
      </Box>

      {project.hasCaseStudy && (
        <Link
          to={`/case-studies/${project.id}`}
          className="inline-block mb-12 underline"
        >
          View full case study →
        </Link>
      )}

      <nav className="flex justify-between pt-6">
        {prev ? (
          <Link to={`/projects/${prev.id}`}>← {prev.title}</Link>
        ) : (
          <span />
        )}

        {next && <Link to={`/projects/${next.id}`}>{next.title} →</Link>}
      </nav>
    </article>
  );
};

export default ProjectSummary;
