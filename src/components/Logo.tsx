import React from "react";
import { TbPencilCode } from "react-icons/tb";

type LogoProps = {
  onClick?: () => void;
};

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return (
    <button
      onClick={onClick}
      className="group relative flex items-center justify-center w-16 h-16 border-2 border-purple-700 text-white font-bold text-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      aria-label="Go to home page"
    >
      {/* Initial letters */}
      <span
        className={`absolute transition-transform duration-500 transform ${
          prefersReducedMotion
            ? ""
            : "translate-y-0 group-hover:-translate-y-10"
        } opacity-100 group-hover:opacity-0 text-purple-500`}
        aria-hidden="true"
      >
        <span className="relative -top-2 mr-1.5">S</span>
        <span className="relative top-1">H</span>
      </span>

      {/* Icon that appears on hover */}
      <span
        className={`absolute transition-transform duration-500 transform ${
          prefersReducedMotion ? "" : "translate-y-10 group-hover:translate-y-0"
        } opacity-0 group-hover:opacity-100 text-orange-700`}
        aria-hidden="true"
      >
        <TbPencilCode
          size="42"
          className="inline-block mr-1 text-orange-500"
          focusable={false}
          aria-hidden="true"
        />
      </span>
    </button>
  );
};

export default Logo;
