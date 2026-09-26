import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import {
  MdOutlineChat,
  MdOutlineHome,
  MdOutlinePeople,
  MdOutlineSupport,
  MdOutlineAccountBalance,
  MdOutlineBusinessCenter,
  MdOutlineVerified,
  MdOutlinePublic,
  MdOutlineHandshake,
  MdOutlineMessage,
  MdOutlineVolunteerActivism,
} from "react-icons/md";
import type { IconType } from "react-icons";

interface CardConfig {
  gradient: string;
  icons: {
    icon: IconType;
    color: string;
    top: string;
    left: string;
    rotate: number;
    duration: number;
    delay: number;
    size: number;
  }[];
}

const cardConfigs: Record<string, CardConfig> = {
  "homelessness-webchat": {
    gradient: "linear-gradient(135deg, #c8001a 0%, #8b0012 50%, #4a0009 100%)",
    icons: [
      {
        icon: MdOutlineChat,
        color: "#ffffff",
        top: "15%",
        left: "10%",
        rotate: -12,
        duration: 3.2,
        delay: 0,
        size: 40,
      },
      {
        icon: MdOutlineHome,
        color: "#ffb3bc",
        top: "55%",
        left: "20%",
        rotate: 8,
        duration: 2.8,
        delay: 0.4,
        size: 48,
      },
      {
        icon: MdOutlinePeople,
        color: "#ffffff",
        top: "20%",
        left: "55%",
        rotate: 15,
        duration: 3.6,
        delay: 0.8,
        size: 44,
      },
      {
        icon: MdOutlineSupport,
        color: "#ffb3bc",
        top: "60%",
        left: "65%",
        rotate: -8,
        duration: 3.0,
        delay: 1.2,
        size: 36,
      },
    ],
  },
  "us-financial-counselling-nonprofit": {
    gradient: "linear-gradient(135deg, #00c1e1 0%, #0086a0 50%, #004a5a 100%)",
    icons: [
      {
        icon: MdOutlineAccountBalance,
        color: "#ffffff",
        top: "15%",
        left: "10%",
        rotate: -10,
        duration: 3.4,
        delay: 0,
        size: 44,
      },
      {
        icon: MdOutlineBusinessCenter,
        color: "#b3f0fb",
        top: "55%",
        left: "18%",
        rotate: 12,
        duration: 2.9,
        delay: 0.5,
        size: 40,
      },
      {
        icon: MdOutlinePeople,
        color: "#ffffff",
        top: "20%",
        left: "58%",
        rotate: -8,
        duration: 3.7,
        delay: 0.9,
        size: 48,
      },
      {
        icon: MdOutlineVerified,
        color: "#b3f0fb",
        top: "62%",
        left: "68%",
        rotate: 10,
        duration: 3.1,
        delay: 1.3,
        size: 36,
      },
    ],
  },
  "unhcr": {
    gradient: "linear-gradient(135deg, #0072bc 0%, #004f85 50%, #002d4d 100%)",
    icons: [
      {
        icon: MdOutlinePublic,
        color: "#ffffff",
        top: "15%",
        left: "10%",
        rotate: -12,
        duration: 3.5,
        delay: 0,
        size: 48,
      },
      {
        icon: MdOutlineHandshake,
        color: "#b3d9f5",
        top: "55%",
        left: "18%",
        rotate: 10,
        duration: 3.0,
        delay: 0.6,
        size: 40,
      },
      {
        icon: MdOutlineMessage,
        color: "#ffffff",
        top: "20%",
        left: "58%",
        rotate: -8,
        duration: 3.8,
        delay: 1.0,
        size: 44,
      },
      {
        icon: MdOutlineVolunteerActivism,
        color: "#b3d9f5",
        top: "62%",
        left: "65%",
        rotate: 14,
        duration: 3.2,
        delay: 1.4,
        size: 36,
      },
    ],
  },
};

interface CaseStudyCardImageProps {
  projectId: string;
}

const CaseStudyCardImage = ({ projectId }: CaseStudyCardImageProps) => {
  const shouldReduceMotion = useReducedMotion();
  const config = cardConfigs[projectId];

  if (!config) return null;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: config.gradient,
        borderRadius: "0.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {config.icons.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              top: item.top,
              left: item.left,
              rotate: item.rotate,
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -12, 0],
                  }
            }
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <Icon size={item.size} color={item.color} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default CaseStudyCardImage;