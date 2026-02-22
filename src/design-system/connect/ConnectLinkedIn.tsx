import { useMantineTheme } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from "react";

const ConnectLinkedIn = () => {
  const theme = useMantineTheme();
  const text = theme.other?.hero?.heading;
  const color = text?.color ?? theme.colors.gray[9];
  const gradientStart = theme?.other?.connect?.icons?.iconStart;
  const iconGlow = theme?.other?.connect?.icons?.glow ?? false;
  const iconGlowColor = theme?.other?.connect?.icons?.glowColor;
  const underlineColor = theme?.other?.connect?.icons?.underlineColor;

  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        height: "2rem",
        display: "block",
        width: "200px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() =>
        window.open(
          "https://www.linkedin.com/in/shaun-halliday-5001a6b2",
          "_blank",
        )
      }
    >
      <AnimatePresence mode="wait">
        {!hovered ? (
          <motion.span
            key="text"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ display: "block", color, fontSize: "1rem", textDecoration: "underline", textDecorationColor: underlineColor }}
          >
            LinkedIn
          </motion.span>
        ) : (
          <motion.div
            key="icons"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "1rem",
            }}
          >
            <span
              style={{
                color: gradientStart,
                filter: iconGlow
                  ? `drop-shadow(0 0 6px ${iconGlowColor})`
                  : undefined,
              }}
            >
              <FaLinkedin size={20} />
            </span>
            <span
              style={{
                color: gradientStart,
                filter: iconGlow
                  ? `drop-shadow(0 0 6px ${iconGlowColor})`
                  : undefined,
              }}
            >
              Open in new tab
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConnectLinkedIn;