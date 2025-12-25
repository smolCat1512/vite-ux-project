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
    client: "Shelter England",
    duration: "18 months",
    overview:
      "Led the development and migration of Shelter's digital advice webchat service...",
    challenge:
      "The existing webchat system was outdated and difficult to maintain...",
    solution:
      "Built a modern, accessible webchat interface using React...",
    outcome:
      "Improved user satisfaction by 40%...",
    images: ["/images/shelter1.jpg", "/images/shelter2.jpg"],
    liveUrl: "https://england.shelter.org.uk/get_help/webchat",
    technologies: ["React", "TypeScript", "Design System"],
    cardImage: "/images/shelter_card.jpg",
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
      "Developed a user-friendly financial counseling platform...",
    challenge:
      "The previous platform had low engagement rates...",
    solution:
      "Implemented a responsive design with intuitive navigation...",
    outcome:
      "Increased user engagement by 35%...",
    images: ["/images/nfcc1.jpg", "/images/nfcc2.jpg"],
    liveUrl: "https://www.nfcc.org/financial-counseling",
    technologies: ["Vue.js", "JavaScript", "CSS Modules"],
    cardImage: "/images/nfcc_card.jpg",
    hasDetailPage: true,
  },
];
