import { Box } from "@mantine/core";
import ZoomableImage from "../../utils/zoomableImage";

export interface ImageItem {
  name: string;
  image: string;
}

interface ScrollRowProps {
  items: ImageItem[];
  direction: "left" | "right";
  duration: number;
  imageWidth: number;
  imageHeight: number;
}

const ScrollRow = ({
  items,
  direction,
  duration,
  imageWidth,
  imageHeight,
}: ScrollRowProps) => {
  const animationName = direction === "left" ? "scrollLeft" : "scrollRight";
  const repeated = [...items, ...items, ...items];

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
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
            {repeated.map((item, index) => (
              <li key={index} style={{ padding: "8px" }}>
                <ZoomableImage
                  src={item.image}
                  alt={item.name}
                  w={imageWidth}
                  h={imageHeight}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

interface CaseStudyImagesBannerProps {
  images: ImageItem[];
  imageWidth?: number;
  imageHeight?: number;
  row1Duration?: number;
  row2Duration?: number;
}

const CaseStudyImagesBanner = ({
  images,
  imageWidth = 320,
  imageHeight = 240,
  row1Duration = 45,
  row2Duration = 35,
}: CaseStudyImagesBannerProps) => {
  const row1 = images.filter((_, i) => i % 2 === 0);
  const row2 = images.filter((_, i) => i % 2 !== 0);

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
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <ScrollRow
          items={row1}
          direction="left"
          duration={row1Duration}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
        />
        <ScrollRow
          items={row2}
          direction="right"
          duration={row2Duration}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
        />
      </div>
    </Box>
  );
};

export default CaseStudyImagesBanner;
