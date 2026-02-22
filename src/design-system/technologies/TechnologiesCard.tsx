import type { ReactNode } from "react";
import { useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";

interface TechnologiesCardProps {
  children: ReactNode;
  shouldReduceMotion: boolean;
  jiggle: boolean;
}

const TechnologiesCard = ({
  children,
  shouldReduceMotion,
  jiggle,
}: TechnologiesCardProps) => {
  const theme = useMantineTheme();
  const cardBg = theme.other?.technologies?.card?.background ?? "rgba(219, 234, 254, 0.5)";
  const cardBorder = theme.other?.technologies?.card?.border ?? "#dee2e6";
  const textColor = theme.other?.technologies?.text?.color ?? "#343a40";

  return (
    <motion.div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        padding: "6px 12px",
        borderRadius: "999px",
        background: cardBg,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: cardBorder,
        color: textColor,
        fontSize: "0.85rem",
        fontWeight: 500,
        backdropFilter: "blur(8px)",
        cursor: "default",
        whiteSpace: "nowrap",
      }}
      initial={shouldReduceMotion ? {} : { y: 50, opacity: 0 }}
      whileInView={shouldReduceMotion ? {} : { y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      animate={
        jiggle
          ? { rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.6 } }
          : { rotate: 0, transition: { duration: 0.2 } }
      }
    >
      {children}
    </motion.div>
  );
};

export default TechnologiesCard;