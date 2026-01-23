import { useState, useEffect, useRef } from "react";
import { useMantineTheme } from "@mantine/core";
import { getTextGlow } from "../utils/glow";
import { motion, AnimatePresence } from "framer-motion";

interface RoleTypeProps {
  words?: string[];
  flipDuration?: number;
  pauseDuration?: number;
}

const RoleType = ({
  words = ["design", "research", "develop", "test", "deploy", "improve"],
  flipDuration = 0.6,
  pauseDuration = 2000,
}: RoleTypeProps) => {
  const theme = useMantineTheme();
  const highlight = theme.other?.hero?.highlight;
  const color = highlight?.color ?? "#ffee00";
  const glow = highlight?.glow ?? false;
  const textGlow = getTextGlow(color, glow, 1.5);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [minWidth, setMinWidth] = useState(0);
  const measureRef = useRef<HTMLSpanElement>(null);

  // Measure the actual width of the longest word
  useEffect(() => {
    if (measureRef.current) {
      const longestWord = words.reduce((a, b) => a.length > b.length ? a : b, "");
      const tempSpan = document.createElement("span");
      tempSpan.style.visibility = "hidden";
      tempSpan.style.position = "absolute";
      tempSpan.style.whiteSpace = "nowrap";
      tempSpan.style.font = window.getComputedStyle(measureRef.current).font;
      tempSpan.textContent = longestWord;
      document.body.appendChild(tempSpan);
      const width = tempSpan.getBoundingClientRect().width;
      document.body.removeChild(tempSpan);
      setMinWidth(width);
    }
  }, [words]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, pauseDuration + flipDuration * 1000);

    return () => clearInterval(interval);
  }, [words.length, pauseDuration, flipDuration]);

  return (
    <span
      ref={measureRef}
      style={{
        display: "inline-block",
        perspective: "1000px",
        minWidth: minWidth > 0 ? `${minWidth}px` : "120px",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{
            duration: flipDuration,
            ease: "easeInOut",
          }}
          className={glow ? "animate-hero-glow" : ""}
          style={{
            display: "inline-block",
            transformOrigin: "center center",
            color,
            textShadow: textGlow,
          }}
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RoleType;