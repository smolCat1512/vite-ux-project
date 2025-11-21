import { Box } from "@mantine/core";
import { motion, useReducedMotion } from "framer-motion";
import { FaReact, FaPython, FaAws, FaGitAlt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { FaNpm } from "react-icons/fa";
import { FaSketch } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiMantine } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { FaCloudflare } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { TbBrandStorybook } from "react-icons/tb";

const technologies = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Next.js",
    icon: RiNextjsFill,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "Typescript",
    icon: BiLogoTypescript,
  },
  {
    name: "JavaScript",
    icon: RiJavascriptFill,
  },
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
  },
  {
    name: "Sass",
    icon: FaSass,
  },
  {
    name: "AWS",
    icon: FaAws,
  },
  {
    name: "Cloudflare",
    icon: FaCloudflare,
  },
  {
    name: "Netlify",
    icon: BiLogoNetlify,
  },
  {
    name: "Git",
    icon: FaGitAlt,
  },
  {
    name: "Figma",
    icon: FaFigma,
  },
  {
    name: "Framer",
    icon: SiFramer,
  },
  {
    name: "Sketch",
    icon: FaSketch,
  },
  {
    name: "Vite",
    icon: TbBrandVite,
  },
  {
    name: "NPM",
    icon: FaNpm,
  },
  {
    name: "Storybook",
    icon: TbBrandStorybook,
  },
  {
    name: "Mantine",
    icon: SiMantine,
  },
  {
    name: "Shadcn",
    icon: SiShadcnui,
  },
];

const Technologies = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="p-4 justify-center md:w-8/12 text-center mb-8"
      id="technologies"
      aria-label="Technologies I use"
    >
      <h2 className="text-3xl">Technologies</h2>
      <Box
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center align-middle mt-18 mb-18"
        role="list"
      >
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            className="flex flex-row p-4 border rounded-4xl border-gray-200 align-middle justify-center gap-4 w-42 backdrop-blur-lg bg-gradient-to-r from-blue-100[.50] to-blue-200"
            initial={shouldReduceMotion ? {} : { y: 50, opacity: 0 }}
            whileInView={shouldReduceMotion ? {} : { y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            role="listitem"
          >
            <p className="font-semibold">{tech.name}</p>
            <tech.icon size={24} className="text-neutral-700" aria-hidden="true" />
          </motion.div>
        ))}
      </Box>
    </section>
  );
};

export default Technologies;
