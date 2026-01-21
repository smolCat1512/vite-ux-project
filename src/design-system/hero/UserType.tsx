import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";
import { getTextGlow } from "../utils/glow";
import { motion } from "framer-motion";

interface UserTypeProps {
  children?: ReactNode;
  words?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const UserType = ({
  words = ["users", "developers", "designers", "teams", "people"],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: UserTypeProps) => {
  const theme = useMantineTheme();
  const highlight = theme.other?.hero?.highlight;
  const color = highlight?.color ?? "#ffee00";
  const glow = highlight?.glow ?? false;
  const textGlow = getTextGlow(color, glow, 1.5);
  const cursorColor = theme.other?.hero?.cursor?.color ?? color;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting && currentText === currentWord) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        } else {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    isPaused,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span
      className={glow ? "animate-hero-glow" : ""}
      style={{
        color,
        textShadow: textGlow,
      }}
    >
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ display: "inline-block", marginLeft: "0.5rem", color: cursorColor}}
      >
        |
      </motion.span>
    </span>
  );
};

export default UserType;
