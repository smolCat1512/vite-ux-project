import ShelterCard from "../../assets/portfolio_card_images/shelter_portfolio_card.jpg";
import NFCCCard from "../../assets/portfolio_card_images/nfcc_portfolio_card.png";

export interface Project {
  id: string;
  title: string;
  summary: string;
  technologies: string;
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
    summary: "Digital advice webchat for people facing housing issues.",
    technologies: "React, TypeScript, Figma",
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
    cardImage: NFCCCard,
    liveUrl: "https://www.nfcc.org/",
    hasCaseStudy: false,
  },
  {
    id: "shane",
    title: "Shane",
    role: "Design, Frontend",
    summary: "LGBTQIA+ safety and inclusivity mobile concept.",
    technologies: "Tamagui, React Native, TypeScript",
    cardImage: "",
    liveUrl: "https://getshane.io/",
    hasCaseStudy: false,
  },
];
