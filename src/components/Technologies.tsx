import { Box } from "@mantine/core";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaAws, FaGitAlt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";

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
    name: "AWS",
    icon: FaAws,
  },
  {
    name: "Git",
    icon: FaGitAlt,
  },
  {
    name: "Figma",
    icon: FaFigma,
  },
];

const Technologies = () => {
  return (
    <section
      className="p-4 justify-center w-7/12 text-center mb-8"
      id="technologies"
    >
      <span className="text-3xl">Technologies</span>
      <Box className="grid grid-cols-4 gap-4 justify-center align-middle mt-18 mb-18">
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            className="flex flex-row p-4 border rounded-4xl border-gray-200 align-middle justify-center gap-4 w-40"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-semibold">{tech.name}</p>
            <tech.icon size={24} className="text-neutral-700" />
          </motion.div>
        ))}
      </Box>
    </section>
  );
};

export default Technologies;
