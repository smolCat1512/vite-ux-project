import { useState, useEffect, useRef } from "react";
import { useMantineTheme } from "@mantine/core";
import { getTextGlow } from "../utils/glow";

interface UserTypeProps {
  words?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const UserType = ({ 
  words = ["users", "people", "customers", "clients", "audiences"],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000
}: UserTypeProps) => {
  const theme = useMantineTheme();
  const highlight = theme.other?.hero?.highlight;
  const color = highlight?.color ?? "#ffee00";
  const glow = highlight?.glow ?? false;
  const textGlow = getTextGlow(color, glow, 1.5);
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
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

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <>
      <style>
        {`
          @keyframes blink {
            from, to { opacity: 1; }
            50% { opacity: 0; }
          }
          .typewriter-cursor {
            animation: blink 1s step-end infinite;
          }
        `}
      </style>
      <span
        ref={measureRef}
        className={glow ? "animate-hero-glow" : ""}
        style={{
          display: "inline-block",
          minWidth: minWidth > 0 ? `${minWidth}px` : undefined,
          color,
          textShadow: textGlow,
        }}
      >
        {currentText}
        <span className="typewriter-cursor" style={{ marginLeft: '2px' }}>
          |
        </span>
      </span>
    </>
  );
};

export default UserType;