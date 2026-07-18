import { motion, useReducedMotion, useTime, useTransform } from "framer-motion";
import { Button, useMantineTheme } from "@mantine/core";
import { useEffect, useState, type ReactNode } from "react";
import { getTextGlow } from "../utils/glow";

interface ConnectFormButtonProps {
  children: ReactNode;
  animate?: boolean;
  mobileBreakpoint?: number;
}

const ConnectFormButton: React.FC<ConnectFormButtonProps> = ({
  children,
  animate = true,
  mobileBreakpoint = 768,
}: ConnectFormButtonProps) => {
  const shouldReduceMotion = useReducedMotion();

  const theme = useMantineTheme();
  const connectTheme = theme.other.connect;
  const gradientFrom = theme.other?.connect?.button?.gradientFrom;
  const gradientTo = theme.other?.connect?.button?.gradientTo;
  const text = theme.other?.connect?.button?.text ?? "#000000";
  console.log("connect button text:", text);
  const glowColor = theme.other?.connect?.button?.glowColor;
  const glow = theme.other?.connect?.button?.glow ?? false;
  const textGlow = getTextGlow(glowColor, glow);
  const buttonBackground = theme.other?.connect?.button?.buttonBackground;

  const time = useTime();
  const rotate = useTransform(time, [0, 6000], [0, 360], { clamp: false });
  const rotatingBorder = useTransform(
    rotate,
    (r) => `conic-gradient(from ${r}deg, ${gradientFrom}, ${gradientTo})`,
  );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileBreakpoint]);

  return (
    <motion.div
      initial={animate && !shouldReduceMotion ? { y: 40, opacity: 0 } : false}
      animate={animate && !shouldReduceMotion ? { y: 0, opacity: 1 } : false}
      transition={{ duration: 1, delay: 0.7 }}
      style={{ marginTop: isMobile ? 4 : 12 }}
    >
      <motion.div
        style={{
          padding: "3px",
          background: shouldReduceMotion
            ? `conic-gradient(from 0deg, ${gradientFrom}, ${gradientTo})`
            : rotatingBorder,
          borderRadius: "var(--mantine-radius-lg)",
          display: "inline-flex",
          color: text,
          width: "100%",
        }}
      >
        <Button
          type="submit"
          size="lg"
          fullWidth
          style={{
            borderRadius: "calc(var(--mantine-radius-lg) - 3px)",
            backgroundColor: buttonBackground,
            color: connectTheme.button.text,
          }}
          styles={{
            root: {
              "&:hover": {
                backgroundColor: connectTheme.button.hoverBackground,
              },
            },
          }}
        >
          <span style={{ color: text, textShadow: textGlow, fontWeight: "lighter" }}>{children}</span>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default ConnectFormButton;
