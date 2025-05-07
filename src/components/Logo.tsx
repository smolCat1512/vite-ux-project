import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="group relative flex items-center justify-center w-16 h-16 border-2 border-purple-700 text-white font-bold text-xl overflow-hidden">
      {/* SH Text (Default State, Purple Color) */}
      <span className="absolute transition-transform duration-500 transform translate-y-0 text-purple-500 group-hover:-translate-y-10 opacity-100 group-hover:opacity-0">
        <span className="relative -top-2 mr-1.5">S</span>
        <span className="relative top-1">H</span>
      </span>
      {/* HOME Text (Appears on Hover, Slides Up) */}
      <span className="absolute transition-transform duration-500 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-sky-400">
        Home
      </span>
    </div>
  );
};

export default Logo;
