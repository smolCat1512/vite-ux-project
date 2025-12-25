// CaseStudyDetail.tsx

import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import type { CaseStudy } from "./caseStudiesData";

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

  return (
    <motion.article
      className="max-w-4xl mx-auto px-4 py-8"
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-xl text-gray-600">{tagline}</p>
      </header>

      {/* Project details */}
      <section className="mb-8">
        <div className="grid md:grid-cols-3 gap-4 p-4 bg-gray-100 rounded-lg">
          <div>
            <h3 className="font-semibold">Role</h3>
            <p className="text-sm">{role}</p>
          </div>
          <div>
            <h3 className="font-semibold">Client</h3>
            <p className="text-sm">{client}</p>
          </div>
          <div>
            <h3 className="font-semibold">Duration</h3>
            <p className="text-sm">{duration}</p>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <Section title="Overview">{overview}</Section>
      <Section title="The Challenge">{challenge}</Section>
      <Section title="The Solution">{solution}</Section>

      {images.length > 0 && (
        <Section title="Project Images">
          <div className="grid md:grid-cols-2 gap-4">
            {images.map((img, i) => (
              <img
                key={img}
                src={img}
                alt={`${title} screenshot ${i + 1}`}
                loading="lazy"
                className="w-full rounded-lg shadow"
              />
            ))}
          </div>
        </Section>
      )}

      <Section title="Outcome">{outcome}</Section>

      {/* Technologies */}
      <Section title="Technologies Used">
        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Section>

      {/* Live site */}
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex mt-8 px-6 py-3 bg-orange-700 text-white rounded-lg hover:bg-orange-800"
        >
          Visit Live Site →
        </a>
      )}

      {/* Navigation */}
      <nav className="border-t pt-8 mt-12 flex justify-between items-center">
        <button
          onClick={() => navigate("/#portfolio")}
          className="text-gray-600 hover:text-gray-900"
        >
          ← Back to Portfolio
        </button>

        <div className="flex gap-4">
          {previousStudy && (
            <button
              onClick={() =>
                navigate(`/case-studies/${previousStudy.slug}`)
              }
            >
              ← {previousStudy.title}
            </button>
          )}
          {nextStudy && (
            <button
              onClick={() =>
                navigate(`/case-studies/${nextStudy.slug}`)
              }
            >
              {nextStudy.title} →
            </button>
          )}
        </div>
      </nav>
    </motion.article>
  );
};

export default CaseStudyDetail;

/* Small helper */
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="text-gray-700">{children}</div>
  </section>
);
