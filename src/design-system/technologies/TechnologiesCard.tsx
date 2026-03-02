import type { ReactNode } from "react";
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

  return (
    <motion.div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        padding: "18px 22px",
        fontSize: "0.9rem",
        borderRadius: "999px",
        background: "#ffffff",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "rgba(0,0,0,0.1)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        color: "#000000",
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
