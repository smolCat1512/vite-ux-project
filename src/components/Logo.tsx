import React from "react";
import { TbPencilCode } from "react-icons/tb";

const Logo: React.FC = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return (
    <button
      className="group relative flex items-center justify-center w-16 h-16 border-2 border-purple-700 text-white font-bold text-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      aria-label="Go to home page"
    >
      <span
        className={`absolute transition-transform duration-500 transform ${
          prefersReducedMotion
            ? ""
            : "translate-y-0 group-hover:-translate-y-10"
        } opacity-100 group-hover:opacity-0 text-purple-500`}
      >
        <span className="relative -top-2 mr-1.5">S</span>
        <span className="relative top-1">H</span>
      </span>

      <span
        className={`absolute transition-transform duration-500 transform ${
          prefersReducedMotion ? "" : "translate-y-10 group-hover:translate-y-0"
        } opacity-0 group-hover:opacity-100 text-orange-700`}
      >
        <TbPencilCode size="42" className="inline-block mr-1 text-orange-500" />
      </span>
    </button>
  );
};

export default Logo;
