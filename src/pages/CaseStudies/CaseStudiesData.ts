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
    tagline: "Digital Advice Webchat & Ongoing Product Ownership",
    roles: [
      "Research",
      "Design",
      "Frontend Development",
      "Design System",
      "Technical Project Management",
      "Commercial Management",
    ],
    client: "Shelter",
    duration: "2023 — Present",
    overview: `
    Shelter is a UK-based charity campaigning for housing justice in England 
    and Scotland, delivering advice and support via in-person hubs, voice, 
    and digital channels. What began as a three-month engagement to replace 
    an underperforming web chat service has grown into an ongoing product 
    relationship — spanning multiple separate engagements, a large-scale 
    Dynamics 365 implementation, and future-facing AI integration work.
  `,
    challenge: `
    The original web chat service was constrained by an inflexible platform, 
    weak triage, and a dated experience for both end users and support staff. 
    Shelter needed a system that could better prioritise urgent needs, reflect 
    their brand, and be set up for ongoing iteration — all within a tight 
    three-month timeline. Beyond the initial build, subsequent engagements 
    have required owning the full project lifecycle independently: from 
    requirements gathering and commercial scoping through to delivery and 
    sign-off.
  `,
    solution: `
    Phase 1 — Initial Build: Working alongside a backend-focused solutions 
    engineer, I took full ownership of the research, design, and frontend 
    development. Designed and built a custom web chat interface with a more 
    robust triage system, giving users clearer pathways and staff better 
    visibility of incoming demand. A custom CMS was delivered alongside the 
    product to support content ownership by the Shelter team, and a bespoke 
    design system was built in parallel to accelerate development and ensure 
    consistency. Throughout, I ran stakeholder demos, gathered iterative 
    feedback, and managed competing priorities across a wide range of internal 
    and external parties.

    Phase 2 — Ongoing Ownership & Expansion: Following the initial delivery, 
    Shelter returned with a series of separate engagements — each scoped, 
    priced, and delivered independently. I authored Statements of Requirements 
    and Statements of Work, agreed pricing, obtained client sign-off, and 
    managed delivery end to end. Projects included a quick exit button 
    (a safeguarding feature allowing users to rapidly leave the service in 
    sensitive situations), sound notifications, maximise and minimise 
    controls, and an automated webchat deletion script. The deletion script 
    replaced a manual, one-at-a-time API process taking 20-30 seconds per 
    record — across hundreds of thousands of webchats — with a fully automated 
    GitHub Actions workflow running every Monday at 2am, requiring zero human 
    intervention and reporting any errors automatically.

    Currently leading a large-scale Dynamics 365 implementation for Shelter, 
    owning the full engagement across project management, development, and 
    delivery. A Twilio AI Copilot integration has also been built and demoed 
    to the client, securing commitment for future adoption.
  `,
    outcome: `
    Delivered a more tailored and resilient web chat service for one of the 
    UK's leading housing charities — increasing handled webchats by roughly 
    20% in the first three months post-launch. Users gained real-time 
    visibility of chat availability and queue position, reducing uncertainty 
    during high-stress moments. The initial engagement grew into a trusted 
    ongoing client relationship spanning multiple engagements worth £10k+, 
    with full commercial ownership sitting with me across scoping, pricing, 
    and delivery. The automated deletion scripting eliminated a previously 
    unscalable manual process entirely, replacing hundreds of thousands of 
    individual API calls with a zero-intervention automated workflow.
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
    technologies: [
      "React",
      "TypeScript",
      "Figma",
      "Mantine",
      "Vite",
      "Twilio",
      "Dynamics 365",
      "GitHub Actions",
    ],
    cardImage: ShelterCard,
    hasDetailPage: true,
  },
  {
    id: "nfcc",
    title: "NFCC",
    tagline: "Financial Counselling Agency Platform",
    roles: [
      "Research",
      "Design",
      "Frontend Development",
      "Backend Integration",
      "Technical Project Management",
    ],
    client: "National Foundation for Credit Counseling",
    duration: "18 months",
    overview: `
    The National Foundation for Credit Counseling (NFCC) is a US-based nonprofit 
    providing financial counselling and education services through a national 
    network of member agencies. Working alongside a backend-focused solutions 
    engineer, I helped take their agency onboarding and management platform — 
    known as the Agency Locator — from no frontend system at all, to a polished, 
    accessible, and fully integrated product used by agencies across the country.
  `,
    challenge: `
    NFCC were manually onboarding member agencies themselves, a slow and 
    error-prone process that consumed significant staff time and limited their 
    ability to scale. No frontend system existed — agencies had no way to 
    self-serve, manage their own services, or update their availability. The 
    platform needed to integrate with multiple data sources and services, 
    including a Snowflake data platform, AWS infrastructure, timezone and 
    state-based APIs for geographic routing, and Twilio for call routing and 
    data handling. Security was a hard requirement, necessitating Auth0 for 
    authentication, two-factor authentication, and automated password management. 
    Accessibility was a formal requirement throughout, targeting WCAG 2.1 AA 
    as a baseline with a push to AAA wherever achievable.
  `,
    solution: `
    I led the research, design, and frontend development across the full 
    18-month engagement — running client workshops, presenting iterative demos 
    to stakeholders, managing feature agreement, and coordinating access to 
    systems and platforms across both teams. On the frontend, I built the agency 
    onboarding wizard, service management interface, and agency dashboard — 
    working within and extending Twilio Paste, their design system, building 
    custom components where Paste's coverage was limited, inline with its base 
    styling and tokens.

    Key integrations included bridging NFCC's Snowflake data platform with AWS 
    infrastructure — later migrated to NFCC's own AWS environment — alongside 
    timezone and US state recognition APIs to surface agency availability 
    accurately across regions. The platform connected directly with Twilio to 
    manage call routing and data handling, enabling agencies to offer services 
    across state lines and handle overflow demand for the first time. 
    Accessibility was treated as a first-class requirement throughout, with high 
    Google Lighthouse scores achieved across the platform.
  `,
    outcome: `
    Empowered agencies to self-serve their own onboarding and service management 
    — reducing the onboarding process from 3-4 days to 1-2 hours, and removing 
    a significant administrative burden from NFCC staff. The platform enabled 
    agencies to offer services across state lines and manage overflow demand in 
    ways their previous setup couldn't support, directly contributing to an 
    uptick in agencies onboarded and additional funding secured by NFCC. The 
    engagement expanded to include a kiosk product build, demonstrating the 
    strength of the ongoing relationship and the platform's potential for 
    further reach.
  `,
    images: [NFCCWizardStart, NFCCServiceSetup, NFCCAgencies],
    imagesCaption:
      "Early wireframe of the onboarding wizard; The service setup interface; Agency member dashboard.",
    liveUrl: "https://www.nfcc.org/agency-finder/",
    liveUrlText: `
    The agency management platform requires authorised credentials, so a direct 
    link isn't possible. You can read more about the Agency Locator and its 
    impact on the NFCC website via the link below.
  `,
    technologies: [
      "React",
      "TypeScript",
      "Figma",
      "Twilio Paste",
      "Twilio",
      "Auth0",
      "AWS",
      "Snowflake",
    ],
    cardImage: NFCCCard,
    hasDetailPage: true,
  },
  {
    id: "unhcr",
    title: "UNHCR",
    tagline: "Refugee Support Platform",
    roles: ["Research", "Design", "Frontend Development"],
    client: "United Nations High Commissioner for Refugees",
    duration: "3 months",
    overview: ``,
    challenge: ``,
    solution: ``,
    outcome: ``,
    images: [],
    imagesCaption: "",
    liveUrl: "",
    liveUrlText: "",
    technologies: [],
    cardImage: "",
    hasDetailPage: true,
  },
];
