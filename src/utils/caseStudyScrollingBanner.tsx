import { Box } from "@mantine/core";
import NFCCWizardWireframe from "../assets/nfcc_images/NFCCWireframe1.png";
import NFCCAgencies from "../assets/nfcc_images/NFCC_Agencies.png";
import NFCCServiceSetup from "../assets/nfcc_images/NFCC_ServiceSetup1.png";

const images = [
  { name: "WizzrdStart", image: NFCCWizardWireframe },
  { name: "Agencies", image: NFCCAgencies },
  { name: "ServiceSetup", image: NFCCServiceSetup },
];

const row1 = images.slice(0, 7); // → left
const row2 = images.slice(7, 14); // → right

interface ScrollRowProps {
  items: typeof images;
  direction: "left" | "right";
  duration: number;
}

const ScrollRow = ({ items, direction, duration }: ScrollRowProps) => {
  const animationName = direction === "left" ? "scrollLeft" : "scrollRight";

  return (
    <div
      style={{
        display: "flex",
        width: "max-content",
        animation: `${animationName} ${duration}s linear infinite`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.animationPlayState =
          "running";
      }}
    >
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1}
          style={{
            display: "flex",
            flexWrap: "nowrap",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {items.map((images, index) => (
            <li
              key={index}
              style={{ display: "inline-flex", paddingRight: "12px" }}
            >
              <img
                src={images.image}
                alt={images.name}
                width={240}
                height={240}
              />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

const CaseStudyImagesBanner = () => {
  return (
    <Box
      className="mx-4 my-12"
      id="technologies-section"
      style={{
        overflow: "hidden",
        maxWidth: "80vw",
        margin: "auto",
        width: "100%",
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <ScrollRow items={row1} direction="left" duration={25} />
        <ScrollRow items={row2} direction="right" duration={35} />
      </div>
    </Box>
  );
};

export default CaseStudyImagesBanner;
