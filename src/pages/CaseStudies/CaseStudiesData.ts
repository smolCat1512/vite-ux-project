import ShelterCard from "../../assets/portfolio_card_images/shelter_portfolio_card.jpg";
import NFCCCard from "../../assets/portfolio_card_images/nfcc_portfolio_card.jpg";
import ShelterStart from "../../assets/shelter-wireframes/start.png";
import ShelterTriage from "../../assets/shelter-wireframes/triage.png";
import ShelterPostChat from "../../assets/shelter-wireframes/postChat.png";
import NFCCWizardStart from "../../assets/nfcc_images/NFCCWireframe1.png";
import NFCCAgencies from "../../assets/nfcc_images/NFCC_Agencies.png";
import NFCCServiceSetup from "../../assets/nfcc_images/NFCC_ServiceSetup1.png";

export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  role: string | string[];
  client?: string;
  duration?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  technologies?: string[];
  images?: string[];
  imagesCaption?: string;
  liveUrl?: string;
  liveUrlText?: string;
  cardImage: string;
  hasDetailPage: boolean;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "shelter",
    title: "Shelter",
    tagline: "Digital Advice Webchat",
    role: ["Research", "Design", "Frontend Development", "Design System"],
    client: "Shelter",
    duration: "initial build - 3 months",
    overview:
      "Shelter is a UK-based charity campaigning for housing justice in England and Scotland. They provide advice, support, and advocacy to individuals, and run national campaigns to address housing issues. Shelter deliver this support from in-person hubs, and via voice and digital channels. They have been using an online web chat service for roughly 2 years, and are a relative newcomer to the provision and adoption of digital services.",
    challenge:
      "The previous web chat service was constrained by an inflexible platform, weak triage, and a dated agent and end-user experience. Shelter needed a system that could better prioritise urgent needs, support staff workflows, and reflect their service more accurately. The project also needed to be delivered within a tight timeline, and set up for ongoing iteration and improvement. Adding to this was a large range of stakeholders, and a need to balance the needs of end users with those of staff and the organisation as a whole. This involved additionally taking on project management and stakeholder management responsibilities, to ensure the project was delivered on time and met the needs of all parties involved.",
    solution:
      "I worked across multiple stages and responsibilities on the project - starting at user research and requirements gathering, an iterative design process, and the frontend development. Throught these processes I was interacting with stakeholders and colleagues, to iteratively demo and refine the product and process. The project involved building a custom web chat interface, and on a seperate piece of the project, a custom content management system. This involved implementing a more robust triage system, and working closely with Shelter staff to ensure the design met their needs. I also built a custom design system for the project, to support a more efficient development process and a more consistent product experience.",
    outcome:
      "The project delivered to Shelter a more tailored and resilient service experience, improved the clarity of the journey for people seeking help, and created a stronger foundation for ongoing iteration. Users now received timely and visible feedback, in relation to the availability of web chat, and in queue positioning UI feedback. The increase of handled webchats increased by roughly 20% in the first 3 months after launch, and the project has been well received by both staff and end users. The project also set up a stronger foundation for ongoing iteration, with a custom design system and a more flexible platform for future improvements. The project has also been a valuable learning experience for me, in terms of working with a large range of stakeholders, balancing different needs and priorities, and delivering a complex project within a tight timeline.",
    images: [ShelterStart, ShelterTriage, ShelterPostChat],
    imagesCaption:
      "Pictured above: Wireframes of the web chat interface, and design system components.",
    liveUrl: "https://england.shelter.org.uk/get_help/webchat",
    liveUrlText:
      "To visit the live site, click the button below. This will take to Shelter Helpline England live service, where you can experience the web chat service in action. Please note that this is a live service for people seeking help with emergency housing issues, so if you do visit the site, please be respectful and mindful of the fact that real people are using the service to get support.",
    technologies: ["React", "TypeScript", "Figma", "Design Systems"],
    cardImage: ShelterCard,
    hasDetailPage: true,
  },
  {
    id: "nfcc",
    title: "NFCC",
    tagline: "Financial Counselling Platform",
    role: [
      "Research",
      "Design",
      "Frontend Development",
      "Integrating Backend Services",
    ],
    client: "National Foundation for Credit Counseling",
    duration: "18 months",
    overview:
      "Helped build a financial agency onboarding and management platform, known as the Agency Locator, for the US nonprofit sector, from no front end system existing, to a polished and accessible product experience. The National Foundation for Credit Counseling (NFCC) (Americanised spelling of counselling) is a US-based nonprofit organisation, that provides financial counselling and education services to individuals and families. They work with a network of member agencies across the country, who provide these services via voice, email or online video.",
    challenge:
      "NFCC were manually onboarding agencies themselves, requiring a large amount of initial and ongoing administrative work. There was no front end system to speak of, so the process was slow, inefficient, prone to mistakes and frustrating. This project involved building a new user interface for both NFCC and agencies to onboard and manage services, holidays, billing and much more. As no front end system existed, this involved creating and harnessing a design system from scratch, and integrating with completely new backend services and APIs, and migrating existing data. The application also needed to be secure, so we harnessed Auth0 to provide secure authentication and authorisation, and set up automated password resetting and 2 factor authentication services. We worked closely with key stakeholders and end user member agencies, to ensure the design and functionality met their needs, and iterating on the designs based on feedback. This project also had a strong focus on accessibility and performance, to ensure the platform was usable by a wide range of users, and performed well even on slower connections or devices.",
    solution:
      "I worked across multiple stages and responsibilities on the project - starting at user research and requirements gathering, an iterative design process, and the frontend development integrating with backend services. I worked closely with stakeholders to understand their needs and priorities, and to ensure the design met their needs. I also worked closely with backend developers to integrate with backend services and APIs, and to ensure a smooth handoff between frontend and backend development. The project involved building a new frontend system for agencies to onboard themselves, and manage their presence on the platform. This involved working within an established design system, and iterating on the design based on feedback from users and stakeholders. The project also had a strong focus on accessibility and performance, to ensure the platform was usable by a wide range of users, and performed well even on slower connections or devices.",
    outcome:
      "The work created a new onboarding platform for NFCC and their member agencies, which significantly reduced the administrative work required to onboard new agencies, and provided a much improved user experience for member agencies. The platform also allowed agencies to manage their presence on the NFCC platform more easily, and provided a stronger foundation for ongoing iteration and improvement. The project was well received by stakeholders and users, and has been a valuable learning experience for me in terms of working with a large range of stakeholders, balancing different needs and priorities, and delivering a complex project over an extended timeline.",
    images: [NFCCWizardStart, NFCCServiceSetup, NFCCAgencies],
    imagesCaption: "Early wireframe of the onboarding wizard; The service setup interface; Agency member dashboard;",
    liveUrl: "https://www.nfcc.org/agency-finder/",
    liveUrlText:
      "The agency locator tool requires an authorised username and password, so I can't provide a live link to the onboarding platform. However, if you visit the NFCC financial counselling page, you can see and read up on the agency locator and its functionality.",
    technologies: ["React", "TypeScript", "Figma", "Twilio Paste"],
    cardImage: NFCCCard,
    hasDetailPage: true,
  },
];
