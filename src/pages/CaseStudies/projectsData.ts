import ShelterCard from "../../assets/portfolio_card_images/shelter_portfolio_card.jpg";
import NFCCCard from "../../assets/portfolio_card_images/nfcc_portfolio_card.png";

export interface Project {
  id: string;
  title: string;
  summary: string;
  technologies: string;
  process: Array<string | { icon: string; text: string }>;
  cardImage: string;
  liveUrl?: string;
  role?: string;

  // navigation
  hasCaseStudy: boolean;
}

export const projects: Project[] = [
  {
    id: "shelter",
    title: "Shelter",
    role: "Frontend / Research / Design",
    summary:
      "Digital advice webchat for people facing homelessness or harm in the UK.",
    technologies: "React, TypeScript, Figma",
    process: [
      { icon: "search", text: "User research and requirements gathering" },
      { icon: "pencil", text: "Wireframing and prototyping" },
      { icon: "code", text: "Frontend development with React TypeScript" },
      { icon: "vial", text: "Usability testing and iteration" },
      { icon: "rocket", text: "Deployment and continuous development" },
    ],
    cardImage: ShelterCard,
    liveUrl: "https://england.shelter.org.uk/get_help/webchat",
    hasCaseStudy: false,
  },
  {
    id: "nfcc",
    title: "NFCC",
    role: "Frontend / UI Design",
    summary: "Financial counselling platform for the US nonprofit sector.",
    technologies: "React, TypeScript, Figma, Twilio Paste",
    process: [
      { icon: "pencil", text: "UI design and prototyping" },
      { icon: "code", text: "Frontend development with React TypeScript" },
      { icon: "server", text: "Integration with backend services" },
      {
        icon: "accessibility",
        text: "Accessibility and performance optimization",
      },
    ],
    cardImage: NFCCCard,
    liveUrl: "https://www.nfcc.org/",
    hasCaseStudy: false,
  },
  {
    id: "shane",
    title: "Shane - Desktop Application",
    role: "Design, Frontend",
    summary: "LGBTQIA+ safety and inclusivity mobile concept.",
    technologies: "Tamagui, React Native, TypeScript",
    process: [
      { icon: "search", text: "Concept ideation and user research" },
      { icon: "pencil", text: "UI/UX design and prototyping" },
      { icon: "code", text: "Frontend development with React Typescript" },
      { icon: "vial", text: "User testing and feedback incorporation" },
    ],
    cardImage: "",
    liveUrl: "https://getshane.io/",
    hasCaseStudy: false,
  },
];
