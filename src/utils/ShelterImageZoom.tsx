import { Box, Image, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

interface ZoomableImageProps {
  src: string;
  alt: string;
  w: number;
  h: number;
}

function ZoomableImage({ src, alt, w, h }: ZoomableImageProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box
      style={{
        display: "inline-block",
        overflow: "visible",
        width: w,
        height: h,
        flexShrink: 0,
        padding: "8px",
        boxSizing: "content-box",
      }}
    >
      <Image
        src={src}
        alt={alt}
        onClick={open}
        style={{
          cursor: "zoom-in",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        }}
      />
      <Modal opened={opened} onClose={close} size="100%" centered>
        <Image src={src} alt={alt} />
      </Modal>
    </Box>
  );
}

export default ZoomableImage;
