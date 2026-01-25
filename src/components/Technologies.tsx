import { useEffect, useState } from "react";
import { Box } from "@mantine/core";
import { useReducedMotion } from "framer-motion";
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
import TechnologiesHeader from "../design-system/technologies/TechnologiesHeader";
import TechnologiesCard from "../design-system/technologies/TechnologiesCard";
import TechnologiesText from "../design-system/technologies/TechnologiesText";
import TechnologiesIcon from "../design-system/technologies/TechnologiesIcon";

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
  const [jiggleIndex, setJiggleIndex] = useState<number | null>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * technologies.length);
      setJiggleIndex(random);
    }, 3000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="p-4 md:w-8/12 text-center">
      <TechnologiesHeader>Technologies</TechnologiesHeader>
      <Box className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center align-middle mt-18 mb-18">
        {technologies.map((tech, index) => (
          <TechnologiesCard
            key={tech.name}
            shouldReduceMotion={!!shouldReduceMotion}
            jiggle={jiggleIndex === index}
          >
            <TechnologiesText>{tech.name}</TechnologiesText>
            <TechnologiesIcon icon={tech.icon} />
          </TechnologiesCard>
        ))}
      </Box>
    </div>
  );
};

export default Technologies;