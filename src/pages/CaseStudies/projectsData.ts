import ShelterCard from "../../assets/portfolio_card_images/shelter_portfolio_card.jpg";
import NFCCCard from "../../assets/portfolio_card_images/nfcc_portfolio_card.png";

export interface Project {
  id: string;
  title: string;
  summary: string;
  technologies: string;
  cardImage: string;
  liveUrl?: string;

  // navigation
  hasCaseStudy: boolean;
}

export const projects: Project[] = [
  {
    id: "shelter",
    title: "Shelter",
    summary: "Digital advice webchat for people facing housing issues.",
    technologies: "React, TypeScript, Figma",
    cardImage: ShelterCard,
    liveUrl: "https://england.shelter.org.uk/get_help/webchat",
    hasCaseStudy: true,
  },
  {
    id: "nfcc",
    title: "NFCC",
    summary: "Financial counselling platform for the US nonprofit sector.",
    technologies: "React, TypeScript, Figma, Twilio Paste",
    cardImage: NFCCCard,
    liveUrl: "https://www.nfcc.org/",
    hasCaseStudy: true,
  },
  {
    id: "shane",
    title: "Shane",
    summary: "LGBTQIA+ safety and inclusivity mobile concept.",
    technologies: "Tamagui, React Native, TypeScript",
    cardImage: "",
    liveUrl: "https://getshane.io/",
    hasCaseStudy: false,
  },
];
