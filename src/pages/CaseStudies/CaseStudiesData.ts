import ShelterCard from "../../assets/portfolio_card_images/shelter_portfolio_card.jpg";
import NFCCCard from "../../assets/portfolio_card_images/nfcc_portfolio_card.jpg";
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
      "Shelter is a UK-based charity campaigning for housing justice in England and Scotland. They provide advice, support, and advocacy to individuals, and run national campaigns to address housing issues. Shelter proide this support from in-person hubs, and via voice and digital channels. They had been using an online web chat service for roughly 2 years, and are a relatively newcomer to digital services.",
    challenge:
      "The previous web chat service was constrained by an inflexible platform, weak triage, and a dated agent and end-user experience. Shelter needed a system that could better prioritise urgent needs, support staff workflows, and reflect their service more accurately. The project also needed to be delivered within a tight timeline, and set up for ongoing iteration and improvement. Adding to this was a large range of stakeholders, and a need to balance the needs of end users with those of staff and the organisation as a whole. This involved additionally taking on project management and stakeholder management responsibilities, to ensure the project was delivered on time and met the needs of all parties involved.",
    solution:
      "I worked across multiple stages and responsibilities on the project - starting at user research and requirements gathering, an iterative design process, and the frontend development. Throught these processes I was interacting with stakeholders and colleagues, to iteratively demo and refine the product and process. The project involved building a custom web chat interface, and on a seperate piece of the project, a custom content management system. This involved implementing a more robust triage system, and working closely with Shelter staff to ensure the design met their needs. I also built a custom design system for the project, to support a more efficient development process and a more consistent product experience.",
    outcome:
      "The project delivered to Shelter a more tailored and resilient service experience, improved the clarity of the journey for people seeking help, and created a stronger foundation for ongoing iteration. Users now received timely and visible feedback, in relation to the availability of web chat, and in queue positioning UI feedback. The increase of handled webchats increased by roughly 20% in the first 3 months after launch, and the project has been well received by both staff and end users. The project also set up a stronger foundation for ongoing iteration, with a custom design system and a more flexible platform for future improvements. The project has also been a valuable learning experience for me, in terms of working with a large range of stakeholders, balancing different needs and priorities, and delivering a complex project within a tight timeline.",
    images: [
      ShelterStart,
      ShelterTriage,
      ShelterPostChat,
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
