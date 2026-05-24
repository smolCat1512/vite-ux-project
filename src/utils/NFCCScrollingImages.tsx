import { Box } from "@mantine/core";
import NFCCWizardWireframe from "../assets/nfcc_images/NFCCWireframe1.png";
import NFCCAgencies from "../assets/nfcc_images/NFCC_Agencies.png";
import NFCCServiceSetup from "../assets/nfcc_images/NFCC_ServiceSetup1.png";
import NFCCBilling from "../assets/nfcc_images/NFCC_Billing.png";
import NFCCHolidays from "../assets/nfcc_images/NFCC_Holidays.png";
import NFCCInsights from "../assets/nfcc_images/NFCC_Insights.png";
import NFCCServices1 from "../assets/nfcc_images/NFCC_ManageServices01.png";
import NFCCServices2 from "../assets/nfcc_images/NFCC_ManageServices02.png";
import NFCCProfile from "../assets/nfcc_images/NFCC_Profile.png";
import NFCCVideoAgencies from "../assets/nfcc_images/NFCC_VideoAgencies.png";

import ZoomableImage from "./ZoomableImage";

const images = [
  { name: "WizardStart", image: NFCCWizardWireframe },
  { name: "Agencies", image: NFCCAgencies },
  { name: "ServiceSetup", image: NFCCServiceSetup },
  { name: "Billing", image: NFCCBilling },
  { name: "Holidays", image: NFCCHolidays },
  { name: "Insights", image: NFCCInsights },
  { name: "Services1", image: NFCCServices1 },
  { name: "Services2", image: NFCCServices2 },
  { name: "Profile", image: NFCCProfile },
  { name: "VideoAgencies", image: NFCCVideoAgencies },
];

const row1 = images.filter((_, i) => i % 2 === 0);
const row2 = images.filter((_, i) => i % 2 !== 0);

interface ScrollRowProps {
  items: typeof images;
  direction: "left" | "right";
  duration: number;
}

const ScrollRow = ({ items, direction, duration }: ScrollRowProps) => {
  const animationName = direction === "left" ? "scrollLeft" : "scrollRight";
  const repeated = [...items, ...items, ...items]; // Duplicate items for seamless scrolling

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      {" "}
      {/* 👈 wrapper */}
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: `${animationName} ${duration}s linear infinite`,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState =
            "paused";
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
              padding: "8px 0",
              overflow: "visible",
            }}
          >
            {repeated.map((images, index) => (
              <li
                key={index}
                style={{
                  padding: "8px",
                }}
              >
                <ZoomableImage
                  src={images.image}
                  alt={images.name}
                  w={320}
                  h={240}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

const CaseStudyImagesBanner = () => {
  return (
    <Box
      style={{
        overflow: "hidden",
        margin: "auto",
        width: "100%",
        paddingTop: "12px",
        paddingBottom: "12px",
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <ScrollRow items={row1} direction="left" duration={45} />
        <ScrollRow items={row2} direction="right" duration={45} />
      </div>
    </Box>
  );
};

export default CaseStudyImagesBanner;
