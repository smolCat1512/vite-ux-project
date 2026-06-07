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
  roles: string | string[];
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
    roles: [
      "Research",
      "Design",
      "Frontend Development",
      "Design System",
      "Project Management",
    ],
    client: "Shelter",
    duration: "Initial build - 3 months",
    overview: `
    Shelter is a UK-based charity campaigning for housing justice in England 
    and Scotland. They provide advice, support, and advocacy to individuals, 
    and run national campaigns to address housing issues. Shelter deliver this 
    support from in-person hubs, and via voice and digital channels. They have 
    been using an online web chat service for roughly 2 years, and are a 
    relative newcomer to the provision and adoption of digital services.
  `,
    challenge: `
    The previous web chat service was constrained by an inflexible platform, 
    weak triage, and a dated experience for both end users and support staff. 
    Shelter needed a system that could better prioritise urgent needs, reflect 
    their brand more accurately, and be set up for ongoing iteration — all 
    within a tight three-month timeline. The engagement required balancing the 
    needs of end users, frontline staff, and a wide range of organisational 
    stakeholders, with project and stakeholder management sitting alongside 
    the design and development work.
  `,
    solution: `
    Working alongside a backend-focused solutions engineer, I took full 
    ownership of the research, design, and frontend development — from initial 
    requirements gathering through to a shipped product. Designed and built a 
    custom web chat interface with a more robust triage system, giving users 
    clearer pathways and staff better visibility of incoming demand. I also 
    delivered a separate custom CMS to support content ownership by the Shelter 
    team. Throughout, I ran stakeholder demos, gathered iterative feedback, and 
    managed competing priorities across a wide range of internal and external 
    parties. A custom design system was built in parallel, providing a consistent 
    component library and accelerating the development process.
  `,
    outcome: `
    Delivered a more tailored and resilient web chat service for one of the UK's 
    leading housing charities — increasing handled webchats by roughly 20% in 
    the first three months post-launch. Users gained real-time visibility of 
    chat availability and queue position, reducing uncertainty during high-stress 
    moments. The project shipped a custom design system alongside the product, 
    creating a more consistent experience and a stronger foundation for future 
    iteration — all delivered within a tight three-month timeline across a 
    complex, multi-stakeholder environment.
  `,
    images: [ShelterStart, ShelterTriage, ShelterPostChat],
    imagesCaption:
      "Pictured above: Wireframes of the web chat interface, and design system components.",
    liveUrl: "https://england.shelter.org.uk/get_help/webchat",
    liveUrlText: `
    To visit the live site, click the button below. This will take you to the 
    Shelter Helpline England live service, where you can experience the web chat 
    in action. Please note that this is a live service for people seeking help 
    with emergency housing issues, so if you do visit, please be respectful and 
    mindful that real people are using it to get support.
  `,
    technologies: ["React", "TypeScript", "Figma", "Mantine", "Vite"],
    cardImage: ShelterCard,
    hasDetailPage: true,
  },
  {
    id: "nfcc",
    title: "NFCC",
    tagline: "Financial Counselling Platform",
    roles: [
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
      "Empowered agencies to self-serve their own onboarding, removing a significant administrative burden from NFCC staff and freeing them up for higher-value work. Reduced the onboarding process from 3-4 days to 1-2 hours. The platform gave agencies direct control over their services, availability, and presence — replacing a slow, manual process with a polished, accessible product that scaled across their national network of member agencies.",
    images: [NFCCWizardStart, NFCCServiceSetup, NFCCAgencies],
    imagesCaption:
      "Early wireframe of the onboarding wizard; The service setup interface; Agency member dashboard;",
    liveUrl: "https://www.nfcc.org/agency-finder/",
    liveUrlText:
      "The agency locator tool requires an authorised username and password, so I can't provide a live link to the onboarding platform. However, if you visit the NFCC financial counselling page, you can see and read up on the agency locator and its functionality.",
    technologies: ["React", "TypeScript", "Figma", "Twilio Paste"],
    cardImage: NFCCCard,
    hasDetailPage: true,
  },
];
