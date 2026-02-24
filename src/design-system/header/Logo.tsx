import { Button, useMantineTheme } from "@mantine/core";
import React from "react";
import { FaHome } from "react-icons/fa";
import { getTextGlow, getIconGlow } from "../utils/glow";

type LogoProps = {
  onClick?: () => void;
};

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const theme = useMantineTheme();
  const text = theme.other?.header?.logo?.color ?? "#000000";
  const glowColor = theme.other?.header?.logo?.glowColor;
  const glow = theme.other?.header?.logo?.glow ?? false;
  const textGlow = getTextGlow(glowColor, glow);
  const iconGlow = getIconGlow(glowColor, glow);

  // Pull your gradient colours from the theme or hardcode them
  const gradientFrom = theme.other?.header?.logo?.gradientFrom;
  const gradientTo = theme.other?.header?.logo?.gradientTo;
  const buttonBackground = theme.other?.header?.logo?.buttonBackground;

  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        padding: "4px",          
        borderRadius: "var(--mantine-radius-md)",
        display: "inline-flex",
        color: text,
      }}
    >
      <Button
        onClick={onClick}
        className="group relative flex w-auto font-bold text-xl"
        aria-label="Go to home page"
        size="lg"
        variant="transparent"
        style={{
          borderRadius: "calc(var(--mantine-radius-md) - 2px)",
        }}
        styles={{
          label: {
            color: text,
            textShadow: textGlow,
          },
          root: {
            backgroundColor: buttonBackground,
          },
        }}
      >
        {/* Initial letters */}
        <span
          className={`absolute transition-transform duration-500 transform left-2 ${
            prefersReducedMotion
              ? ""
              : "translate-y-0 group-hover:-translate-y-10"
          } opacity-100 group-hover:opacity-0`}
          aria-hidden="true"
        >
          <span
            className="relative -top-2.5 right-1 text-2xl"
            style={{ color: text, textShadow: textGlow }}
          >
            S
          </span>
          <span
            className="relative top-2.5 left-1.5  text-2xl"
            style={{ color: text, textShadow: textGlow }}
          >
            H
          </span>
        </span>

        {/* Icon that appears on hover */}
        <span
          className={`absolute transition-transform duration-500 transform left-2 ${
            prefersReducedMotion ? "" : "translate-y-10 group-hover:translate-y-0"
          } opacity-0 group-hover:opacity-100`}
          aria-hidden="true"
        >
          <FaHome
            size={22}
            focusable={false}
            aria-hidden="true"
            style={{
              color: text,
              filter: iconGlow,
              position: "relative",
              top: "2px",
              left: "8px",
            }}
          />
        </span>
      </Button>
    </div>
  );
};

export default Logo;