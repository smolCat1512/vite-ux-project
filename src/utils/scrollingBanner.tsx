import { Box } from "@mantine/core";
import TechnologiesCard from "../design-system/technologies/TechnologiesCard";
import TechnologiesIcon from "../design-system/technologies/TechnologiesIcon";
import TechnologiesText from "../design-system/technologies/TechnologiesText";
import {
  FaAws,
  FaCloudflare,
  FaCss3Alt,
  FaFigma,
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

const technologies = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "Python", icon: FaPython },
  { name: "Typescript", icon: BiLogoTypescript },
  { name: "JavaScript", icon: RiJavascriptFill },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Sass", icon: FaSass },
  { name: "AWS", icon: FaAws },
  { name: "Cloudflare", icon: FaCloudflare },
  { name: "Netlify", icon: BiLogoNetlify },
  { name: "Git", icon: FaGitAlt },
  { name: "Figma", icon: FaFigma },
  { name: "Framer", icon: SiFramer },
  { name: "Sketch", icon: FaSketch },
  { name: "Vite", icon: TbBrandVite },
  { name: "NPM", icon: FaNpm },
  { name: "Storybook", icon: TbBrandStorybook },
  { name: "Mantine", icon: SiMantine },
  { name: "Shadcn", icon: SiShadcnui },
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
            gap: "12px",
            flexWrap: "nowrap",
            paddingRight: "12px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {items.map((tech, index) => (
            <li key={index}>
              <TechnologiesCard shouldReduceMotion={true} jiggle={false}>
                <TechnologiesText>{tech.name}</TechnologiesText>
                <TechnologiesIcon icon={tech.icon} size={28} />
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
