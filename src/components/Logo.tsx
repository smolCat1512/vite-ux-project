import { Button } from "@mantine/core";
import React from "react";
import { FaHome } from "react-icons/fa";

type LogoProps = {
  onClick?: () => void;
};

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return (
    <Button
      onClick={onClick}
      className="group relative flex w-auto font-bold text-xl"
      aria-label="Go to home page"
      size="md"
      variant="transparent"
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
        <span className="relative -top-2 mr-1.5">S</span>
        <span className="relative top-1">H</span>
      </span>

      {/* Icon that appears on hover */}
      <span
        className={`absolute transition-transform duration-500 transform left-2 ${
          prefersReducedMotion ? "" : "translate-y-10 group-hover:translate-y-0"
        } opacity-0 group-hover:opacity-100`}
        aria-hidden="true"
      >
        <FaHome
          size="18"
          focusable={false}
          aria-hidden="true"
        />
      </span>
    </Button>
  );
};

export default Logo;
