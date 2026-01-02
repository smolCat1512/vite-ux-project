import { useMantineTheme } from "@mantine/core";
import { FaChevronDown } from "react-icons/fa6";
import { getIconGlow } from "../utils/glow";

type ScrollDownButtonProps = {
  onClick: () => void;
  ariaLabel?: string;
};

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({
  onClick,
  ariaLabel = "Scroll to next section",
}) => {
  const theme = useMantineTheme();

  const iconColor = theme.other?.hero?.scrollButton?.iconColor ?? "#000000";
  const borderColor = theme.other?.hero?.scrollButton?.borderColor ?? "#000000";
  const hoverBg = theme.other?.hero?.scrollButton?.hoverBackground ?? "rgba(0, 0, 0, 0.1)";
  const focusRingColor = theme.other?.hero?.scrollButton?.focusRing ?? "#ff6e00";
  
  const glowColor = theme.other?.hero?.scrollButton?.glowColor;
  const glow = theme.other?.hero?.scrollButton?.glow ?? false;
  
  const iconGlow = getIconGlow(glowColor, glow);

  return (
    <button
      onClick={onClick}
      className="cursor-pointer rounded-full p-2 transition-all duration-200 flex items-center justify-center"
      aria-label={ariaLabel}
      style={{
        border: `3px solid ${borderColor}`,
        backgroundColor: "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverBg;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = "none";
        e.currentTarget.style.boxShadow = `0 0 0 2px ${focusRingColor}`;
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <FaChevronDown
        size={16}
        aria-hidden="true"
        style={{
          color: iconColor,
          filter: iconGlow,
        }}
      />
    </button>
  );
};

export default ScrollDownButton;