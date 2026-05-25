import { Marquee, Stack } from "@mantine/core";
import TechnologiesCard from "../design-system/technologies/TechnologiesCard";
import TechnologiesIcon from "../design-system/technologies/TechnologiesIcon";
import TechnologiesText from "../design-system/technologies/TechnologiesText";
import {
  MdOutlineAutorenew,
  MdOutlineGroupWork,
  MdOutlineTrackChanges,
  MdOutlineChecklist,
  MdOutlineTimeline,
  MdOutlinePeople,
  MdOutlineHub,
} from "react-icons/md";
import {
  TbLayoutKanban,
  TbBulb,
  TbPresentationAnalytics,
  TbRoute,
  TbMessage2Check,
  TbUserSearch,
  TbDeviceDesktop,
  TbArrowsShuffle,
} from "react-icons/tb";
import { LuWorkflow } from "react-icons/lu";
import { BiTestTube } from "react-icons/bi";

const methodologies = [
  { name: "Agile", icon: MdOutlineAutorenew, color: "#0ea5e9" },
  { name: "Scrum", icon: MdOutlineGroupWork, color: "#6366f1" },
  { name: "Kanban", icon: TbLayoutKanban, color: "#f59e0b" },
  { name: "Sprint Planning", icon: MdOutlineTrackChanges, color: "#10b981" },
  { name: "Retrospectives", icon: MdOutlineChecklist, color: "#8b5cf6" },
  { name: "Backlog Grooming", icon: TbRoute, color: "#ec4899" },
  { name: "Roadmapping", icon: MdOutlineTimeline, color: "#14b8a6" },
  { name: "UX Research", icon: TbUserSearch, color: "#f97316" },
  { name: "Wireframing", icon: TbDeviceDesktop, color: "#6366f1" },
  { name: "Prototyping", icon: TbBulb, color: "#eab308" },
  { name: "Usability Testing", icon: BiTestTube, color: "#ef4444" },
  { name: "Design Systems", icon: LuWorkflow, color: "#a855f7" },
  { name: "Stakeholder Mgmt", icon: MdOutlinePeople, color: "#0ea5e9" },
  { name: "Cross-functional", icon: MdOutlineHub, color: "#10b981" },
  { name: "Workshops", icon: TbMessage2Check, color: "#f59e0b" },
  { name: "Presentations", icon: TbPresentationAnalytics, color: "#ec4899" },
  { name: "Iterative Dev", icon: TbArrowsShuffle, color: "#8b5cf6" },
];

const row1 = methodologies.slice(0, 6);
const row2 = methodologies.slice(6, 12);
const row3 = methodologies.slice(12, 17);

const MethodologiesScrollingBanner = () => {
  return (
    <Stack
      id="methodologies-section"
      gap="xs"
      mx="auto"
      maw="80vw"
      w="100%"
      my="xl"
    >
      <Marquee pauseOnHover duration={28000} fadeEdgeSize="8%">
        {row1.map((item) => (
          <TechnologiesCard key={item.name} shouldReduceMotion={true} jiggle={false}>
            <TechnologiesText>{item.name}</TechnologiesText>
            <TechnologiesIcon icon={item.icon} size={28} color={item.color} />
          </TechnologiesCard>
        ))}
      </Marquee>

      <Marquee pauseOnHover reverse duration={38000} fadeEdgeSize="8%">
        {row2.map((item) => (
          <TechnologiesCard key={item.name} shouldReduceMotion={true} jiggle={false}>
            <TechnologiesText>{item.name}</TechnologiesText>
            <TechnologiesIcon icon={item.icon} size={28} color={item.color} />
          </TechnologiesCard>
        ))}
      </Marquee>

      <Marquee pauseOnHover duration={32000} fadeEdgeSize="8%">
        {row3.map((item) => (
          <TechnologiesCard key={item.name} shouldReduceMotion={true} jiggle={false}>
            <TechnologiesText>{item.name}</TechnologiesText>
            <TechnologiesIcon icon={item.icon} size={28} color={item.color} />
          </TechnologiesCard>
        ))}
      </Marquee>
    </Stack>
  );
};

export default MethodologiesScrollingBanner;