import { Box } from "@mantine/core";
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

const row1 = technologies.slice(0, 7); // → left
const row2 = technologies.slice(7, 14); // → right
const row3 = technologies.slice(14, 20); // → left

interface ScrollRowProps {
  items: typeof technologies;
  direction: "left" | "right";
  duration: number;
}

const ScrollRow = ({ items, direction, duration }: ScrollRowProps) => {
  const animationName = direction === "left" ? "scrollLeft" : "scrollRight";

  return (
    <div
      style={{
        display: "flex",
        width: "max-content",
        animation: `${animationName} ${duration}s linear infinite`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.animationPlayState =
          "running";
      }}
    >
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1}
          style={{
            display: "flex",
            flexWrap: "nowrap",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {items.map((tech, index) => (
            <li
              key={index}
              style={{ display: "inline-flex", paddingRight: "12px" }}
            >
              <TechnologiesCard shouldReduceMotion={true} jiggle={false}>
                <TechnologiesText>{tech.name}</TechnologiesText>
                <TechnologiesIcon
                  icon={tech.icon}
                  size={28}
                  color={tech.color}
                />
              </TechnologiesCard>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

const ScrollingBanner = () => {
  return (
    <Box
      className="mx-4 my-12"
      id="technologies-section"
      style={{
        overflow: "hidden",
        maxWidth: "80vw",
        margin: "auto",
        width: "100%",
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <ScrollRow items={row1} direction="left" duration={25} />
        <ScrollRow items={row2} direction="right" duration={35} />
        <ScrollRow items={row3} direction="left" duration={28} />
      </div>
    </Box>
  );
};

export default ScrollingBanner;
