import PortfolioCard from "./PortfolioCard";
import Shelter from "../assets/portfolio_card_images/shelter_portfolio_card.jpg";
import NFCC from "../assets/portfolio_card_images/nfcc_portfolio_card.png";

const caseStudies = [
  {
    title: "Shelter",
    description: "Digital Advice Webchat development and migration.",
    role: "Research, Design, Frontend Development, Design System",
    image: Shelter,
    slug: "shelter",
    site: "https://england.shelter.org.uk/get_help/webchat",
  },
  {
    title: "NFCC",
    description:
      "Digital service development for the National Foundation for Credit Counseling.",
    role: "Research, Design, Frontend Development",
    image: NFCC,
    slug: "nfcc",
    site: "https://www.nfcc.org/",
  },
  {
    title: "Project Shane",
    description: "LGBTQIA+ safety and inclusivity app",
    role: "Research, Design, Frontend Development",
    image: "https://via.placeholder.com/300",
    slug: "shane",
    site: "https://getshane.io/",
  },
];

const Portfolio = () => {
  return (
    <section
      className="my-8 md:w-10/12 flex flex-col"
      id="portfolio"
      aria-label="Portfolio Case Studies"
    >
      <div className="flex justify-center">
        <h2 className="text-3xl mb-2">Portfolio</h2>
      </div>
      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-8 items-start"
        id="case-studies"
        role="list"
      >
        {caseStudies.map((study) => (
          <div role="listitem" key={study.slug}>
            <PortfolioCard {...study} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
