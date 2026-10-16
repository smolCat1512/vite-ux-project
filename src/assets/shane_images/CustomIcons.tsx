import { FaTransgenderAlt, FaRainbow } from "react-icons/fa";

export const RainbowIcon = ({ size = 44 }: { size?: number }) => {
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF0000" />
            <stop offset="16.67%" stopColor="#FF7F00" />
            <stop offset="33.33%" stopColor="#FFFF00" />
            <stop offset="50%" stopColor="#00FF00" />
            <stop offset="66.67%" stopColor="#0000FF" />
            <stop offset="83.33%" stopColor="#4B0082" />
            <stop offset="100%" stopColor="#8B00FF" />
          </linearGradient>
        </defs>
      </svg>
      <FaRainbow size={size} style={{ fill: "url(#rainbow-gradient)" }} />
    </>
  );
};

export const TransgenderIcon = ({ size = 44 }: { size?: number }) => {
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="transgender-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#55CDFC" />
            <stop offset="25%" stopColor="#55CDFC" />
            <stop offset="40%" stopColor="#F7A8B8" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F7A8B8" />
            <stop offset="75%" stopColor="#55CDFC" />
            <stop offset="100%" stopColor="#55CDFC" />
          </linearGradient>
        </defs>
      </svg>
      <FaTransgenderAlt size={size} style={{ fill: "url(#transgender-gradient)" }} />
    </>
  );
};