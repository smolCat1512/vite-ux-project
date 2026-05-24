import { Box } from "@mantine/core";
import ShelterImageZoom from "./shelterImageZoom";
import ShelterWebchat1 from "../assets/shelter_images/ShelterWebchat1.png";
import ShelterWebchat2 from "../assets/shelter_images/ShelterWebchat2.png";
import ShelterWebchat3 from "../assets/shelter_images/ShelterWebchat3.png";
import ShelterWebchat4 from "../assets/shelter_images/ShelterWebchat4.png";
import ShelterWebchat5 from "../assets/shelter_images/ShelterWebchat5.png";
import ShelterWebchat6 from "../assets/shelter_images/ShelterWebchat6.png";

const images = [
  { name: "Webchat1", image: ShelterWebchat1 },
  { name: "Webchat2", image: ShelterWebchat2 },
  { name: "Webchat3", image: ShelterWebchat3 },
  { name: "Webchat4", image: ShelterWebchat4 },
  { name: "Webchat5", image: ShelterWebchat5 },
  { name: "Webchat6", image: ShelterWebchat6 },
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
                <ShelterImageZoom
                  src={images.image}
                  alt={images.name}
                  w={240}
                  h={400}
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
