import ShelterCard from "../../assets/portfolio_card_images/shelter_portfolio_card.jpg";
import NFCCCard from "../../assets/portfolio_card_images/nfcc_portfolio_card.jpg";
import ShelterHero from "../../assets/shelter-wireframes/shelterHero.png";
import ShelterStart from "../../assets/shelter-wireframes/start.png";
import ShelterTriage from "../../assets/shelter-wireframes/triage.png";
import ShelterPostChat from "../../assets/shelter-wireframes/postChat.png";

export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  role: string;
  client?: string;
  duration?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  technologies?: string[];
  images?: string[];
  liveUrl?: string;
  cardImage: string;
  hasDetailPage: boolean;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "shelter",
    title: "Shelter",
    tagline: "Digital Advice Webchat",
    role: "Research, Design, Frontend Development, Design System",
    client: "Shelter",
    duration: "initial build - 3 months",
    overview:
      "Shelter is a UK-based charity campaigning for housing justice in England and Scotland. They provide advice, support, and advocacy to individuals, and run national campaigns to address housing issues. Shelter proide this support from in-person hubs, and via voice and digital channels. They had been using an online web chat service for 2 years, and are a relatively newcomer to digital services.",
    challenge:
      "The previous service was constrained by an inflexible platform, weak triage, and a dated agent experience. Shelter needed a system that could better prioritise urgent need, support staff workflows, and reflect their service more accurately.",
    solution:
      "I worked across research, interaction design, UI, and frontend implementation to shape a custom interface in React and TypeScript, with clearer queue states, stronger triage, and a more maintainable design system approach.",
    outcome:
      "The project gave Shelter a more tailored and resilient service experience, improved the clarity of the journey for people seeking help, and created a stronger foundation for ongoing iteration.",
    images: [
      ShelterHero,
      ShelterStart,
      ShelterTriage,
      ShelterPostChat,
      ShelterCard,
    ],
    liveUrl: "https://england.shelter.org.uk/get_help/webchat",
    technologies: ["React", "TypeScript", "Figma", "Design Systems"],
    cardImage: ShelterCard,
    hasDetailPage: true,
  },
  {
    id: "nfcc",
    title: "NFCC",
    tagline: "Financial Counseling Platform",
    role: "Research, Design, Frontend Development",
    client: "National Foundation for Credit Counseling",
    duration: "18 months",
    overview:
      "Helped shape a financial counselling platform for the US nonprofit sector, focusing on a clearer UI, accessible patterns, and a more dependable front-end experience for people navigating complex support journeys.",
    challenge:
      "The product needed a cleaner and more trustworthy interface for users dealing with high-stress financial situations, while also supporting nonprofit partner workflows and evolving product requirements.",
    solution:
      "I contributed across UI design and frontend delivery, refining flows, building reusable interface patterns, and working within an established component system to improve clarity and consistency.",
    outcome:
      "The work moved the platform toward a more polished and accessible product experience, with stronger visual consistency and a UI better suited to sensitive, decision-heavy tasks.",
    images: [NFCCCard],
    liveUrl: "https://www.nfcc.org/financial-counseling",
    technologies: ["React", "TypeScript", "Figma", "Twilio Paste"],
    cardImage: NFCCCard,
    hasDetailPage: true,
  },
];
