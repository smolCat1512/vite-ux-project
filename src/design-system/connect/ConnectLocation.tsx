import { useMantineTheme } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationPin } from "react-icons/fa6";
import { useState } from "react";

const ConnectLocation = () => {
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
          "https://www.google.com/maps/place/Cambridgeshire/@52.5210765,-0.197744,10.82z/data=!4m6!3m5!1s0x47d7f6109908f5a1:0x4e86a925f16b22fa!8m2!3d52.2761928!4d-0.0965375!16zL20vMDF3MHY?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D",
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
            style={{
              display: "block",
              color,
              fontSize: "1rem",
              textDecoration: "underline",
              textDecorationColor: underlineColor,
            }}
          >
            Location
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
              <FaLocationPin size={20} />
            </span>
            <span
              style={{
                color: gradientStart,
                filter: iconGlow
                  ? `drop-shadow(0 0 6px ${iconGlowColor})`
                  : undefined,
              }}
            >
              Open in Maps
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConnectLocation;
