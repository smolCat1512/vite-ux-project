import { Marquee, Stack } from "@mantine/core";
import TechnologiesCard from "../design-system/technologies/TechnologiesCard";
import TechnologiesIcon from "../design-system/technologies/TechnologiesIcon";
import TechnologiesText from "../design-system/technologies/TechnologiesText";
import {
  IconRefresh,
  IconUsersGroup,
  IconLayoutKanban,
  IconFilter,
  IconTimeline,
  IconUserSearch,
  IconDeviceDesktop,
  IconBulb,
  IconFlask,
  IconSitemap,
  IconUsers,
  IconAffiliate,
  IconMessage2Check,
  IconPresentationAnalytics,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const methodologies = [
  // Process / delivery — blue/teal cluster
  { name: "Agile", icon: IconRefresh, color: "#0ea5e9" },
  { name: "Scrum", icon: IconUsersGroup, color: "#0284c7" },
  { name: "Kanban", icon: IconLayoutKanban, color: "#0d9488" },
  { name: "Backlog Grooming", icon: IconFilter, color: "#14b8a6" },
  { name: "Roadmapping", icon: IconTimeline, color: "#38bdf8" },

  // Design / UX — purple/violet cluster
  { name: "UX Research", icon: IconUserSearch, color: "#8b5cf6" },
  { name: "Wireframing", icon: IconDeviceDesktop, color: "#a855f7" },
  { name: "Prototyping", icon: IconBulb, color: "#7c3aed" },
  { name: "Usability Testing", icon: IconFlask, color: "#6366f1" },
  { name: "Design Systems", icon: IconSitemap, color: "#c026d3" },

  // People / comms — orange/amber cluster
  { name: "Stakeholder Mgmt", icon: IconUsers, color: "#f59e0b" },
  { name: "Cross-functional", icon: IconAffiliate, color: "#f97316" },
  { name: "Workshops", icon: IconMessage2Check, color: "#ea580c" },
  { name: "Presentations", icon: IconPresentationAnalytics, color: "#eab308" },
];

const row1 = methodologies.slice(0, 5);
const row2 = methodologies.slice(5, 10);
const row3 = methodologies.slice(10, 14);

const MethodologiesScrollingBanner = () => {
  const smallerDevices = useMediaQuery("(max-width: 768px)");

  return (
    <Stack
      id="methodologies-section"
      gap="xs"
      mx="auto"
      maw="80vw"
      w={smallerDevices ? "100%" : "80%"}
      my="xl"
    >
      <Marquee pauseOnHover duration={28000} fadeEdgeSize="8%">
        {row1.map((item) => (
          <TechnologiesCard
            key={item.name}
            shouldReduceMotion={true}
            jiggle={false}
          >
            <TechnologiesText>{item.name}</TechnologiesText>
            <TechnologiesIcon icon={item.icon} size={28} color={item.color} />
          </TechnologiesCard>
        ))}
      </Marquee>

      <Marquee pauseOnHover reverse duration={38000} fadeEdgeSize="8%">
        {row2.map((item) => (
          <TechnologiesCard
            key={item.name}
            shouldReduceMotion={true}
            jiggle={false}
          >
            <TechnologiesText>{item.name}</TechnologiesText>
            <TechnologiesIcon icon={item.icon} size={28} color={item.color} />
          </TechnologiesCard>
        ))}
      </Marquee>

      <Marquee pauseOnHover duration={32000} fadeEdgeSize="8%">
        {row3.map((item) => (
          <TechnologiesCard
            key={item.name}
            shouldReduceMotion={true}
            jiggle={false}
          >
            <TechnologiesText>{item.name}</TechnologiesText>
            <TechnologiesIcon icon={item.icon} size={28} color={item.color} />
          </TechnologiesCard>
        ))}
      </Marquee>
    </Stack>
  );
};

export default MethodologiesScrollingBanner;
