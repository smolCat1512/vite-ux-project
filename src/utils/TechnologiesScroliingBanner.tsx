import { Marquee, Stack } from "@mantine/core";
import TechnologiesCard from "../design-system/technologies/TechnologiesCard";
import TechnologiesIcon from "../design-system/technologies/TechnologiesIcon";
import TechnologiesText from "../design-system/technologies/TechnologiesText";
import {
  FaAws,
  FaCloudflare,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNpm,
  FaPython,
  FaReact,
  FaSass,
  FaSketch,
} from "react-icons/fa6";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoNetlify } from "react-icons/bi";
import { SiFramer, SiMantine, SiShadcnui } from "react-icons/si";
import { TbBrandVite, TbBrandStorybook } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";

const technologies = [
  { name: "React", icon: FaReact, color: "#58C4DC" },
  { name: "Next.js", icon: RiNextjsFill, color: "#000000" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Typescript", icon: BiLogoTypescript, color: "#e34c26" },
  { name: "JavaScript", icon: RiJavascriptFill, color: "#f7df1e" },
  { name: "HTML5", icon: FaHtml5, color: "#e34c26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#663399" },
  { name: "Sass", icon: FaSass, color: "#CC6699" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Cloudflare", icon: FaCloudflare, color: "#F48120" },
  { name: "Netlify", icon: BiLogoNetlify, color: "#05BDBA" },
  { name: "Git", icon: FaGitAlt, color: "#F1502F" },
  { name: "Figma", icon: IoLogoFigma, color: "#a259ff" },
  { name: "Framer", icon: SiFramer, color: "#0055FF" },
  { name: "Sketch", icon: FaSketch, color: "#FFD32C" },
  { name: "Vite", icon: TbBrandVite, color: "#9575CD" },
  { name: "NPM", icon: FaNpm, color: "#cb3837" },
  { name: "Storybook", icon: TbBrandStorybook, color: "#FF4785" },
  { name: "Mantine", icon: SiMantine, color: "#339af0" },
  { name: "Shadcn", icon: SiShadcnui, color: "#3B4F82" },
];

const row1 = technologies.slice(0, 7);
const row2 = technologies.slice(7, 14);
const row3 = technologies.slice(14, 20);

const TechnologiesScrollingBanner = () => {
  return (
    <Stack
      id="technologies-section"
      gap="xs"
      mx="auto"
      maw="80vw"
      w="100%"
      my="xl"
    >
      <Marquee pauseOnHover duration={25000} fadeEdgeSize="8%">
        {row1.map((tech) => (
          <TechnologiesCard
            key={tech.name}
            shouldReduceMotion={true}
            jiggle={false}
          >
            <TechnologiesText>{tech.name}</TechnologiesText>
            <TechnologiesIcon icon={tech.icon} size={28} color={tech.color} />
          </TechnologiesCard>
        ))}
      </Marquee>

      <Marquee pauseOnHover reverse duration={35000} fadeEdgeSize="8%">
        {row2.map((tech) => (
          <TechnologiesCard
            key={tech.name}
            shouldReduceMotion={true}
            jiggle={false}
          >
            <TechnologiesText>{tech.name}</TechnologiesText>
            <TechnologiesIcon icon={tech.icon} size={28} color={tech.color} />
          </TechnologiesCard>
        ))}
      </Marquee>

      <Marquee pauseOnHover duration={28000} fadeEdgeSize="8%">
        {row3.map((tech) => (
          <TechnologiesCard
            key={tech.name}
            shouldReduceMotion={true}
            jiggle={false}
          >
            <TechnologiesText>{tech.name}</TechnologiesText>
            <TechnologiesIcon icon={tech.icon} size={28} color={tech.color} />
          </TechnologiesCard>
        ))}
      </Marquee>
    </Stack>
  );
};

export default TechnologiesScrollingBanner;
