import { motion, useReducedMotion } from "framer-motion";
import { Button, useMantineTheme } from "@mantine/core";
import { FaRegHandshake } from "react-icons/fa";
import { useEffect, useState, type ReactNode } from "react";

interface ContactButtonProps {
  children: ReactNode;
  animate?: boolean;
  mobileBreakpoint?: number;
}

const ContactButton = ({
  children,
  animate = true,
  mobileBreakpoint = 768,
}: ContactButtonProps) => {
  const shouldReduceMotion = useReducedMotion();

  const theme = useMantineTheme();
  const connectTheme = theme.other.connect;

  const [isMobile, setIsMobile] = useState(false);

  const handleScrollToConnect = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const connectSection = document.getElementById("connect");
    if (connectSection) {
      connectSection.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        // Adding a slight offset to account for fixed headers or spacing
        block: "center",
      });
    }
  };

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
      <Button
        type="submit"
        size={isMobile ? "xl" : "lg"}
        radius="xl"
        mt="md"
        style={{
          backgroundColor: connectTheme.button.background,
          color: connectTheme.button.text,
        }}
        styles={{
          root: {
            "&:hover": {
              backgroundColor: connectTheme.button.hoverBackground,
            },
          },
        }}
        onClick={handleScrollToConnect}
        rightSection={
          <FaRegHandshake size="2rem" className="inline-block mr-2" />
        }
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default ContactButton;
