import type { JSX } from "react";
import {
  FaSearch,
  FaPencilAlt,
  FaCog,
  FaCode,
  FaVial,
  FaRocket,
  FaServer,
  FaUniversalAccess,
} from "react-icons/fa";

// Add new icon keys here as new "icon" strings appear in projectsData.ts
const processIconMap: Record<string, JSX.Element> = {
  search: <FaSearch />,
  pencil: <FaPencilAlt />,
  cog: <FaCog />,
  code: <FaCode />,
  vial: <FaVial />,
  rocket: <FaRocket />,
  server: <FaServer />,
  accessibility: <FaUniversalAccess />,
};

export const getProcessIcon = (icon?: string): JSX.Element | null =>
  icon ? (processIconMap[icon] ?? null) : null;

export interface ProcessStep {
  icon?: string;
  text: string;
}

// process items can be a plain string or { icon, text } — normalize to one shape
export const normalizeProcessStep = (
  step: string | { icon: string; text: string },
): ProcessStep => (typeof step === "string" ? { text: step } : step);
