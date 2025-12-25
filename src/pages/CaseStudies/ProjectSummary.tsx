import { useParams, Link } from "react-router-dom";
import { projects } from "./projectsData";

const ProjectSummary = () => {
  const { projectId } = useParams();
  const index = projects.findIndex((p) => p.id === projectId);

  if (index === -1) return <p>Project not found</p>;

  const project = projects[index];
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <article className="max-w-3xl mx-auto py-12 px-4 mt-10">
      <section className="flex flex-col items-center mb-8">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="italic text-gray-500 mb-6">{project.role}</p>
      </section>

      <img
        src={project.cardImage}
        alt=""
        className="w-full h-[60vh] object-cover mb-8"
      />

      <p className="text-lg mb-8">{project.summary}</p>

      {project.hasCaseStudy && (
        <Link
          to={`/case-studies/${project.id}`}
          className="inline-block mb-12 underline"
        >
          View full case study →
        </Link>
      )}

      <nav className="flex justify-between border-t pt-6">
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
