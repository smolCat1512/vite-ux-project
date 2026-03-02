import { Box } from "@mantine/core";
import TechnologiesHeader from "../design-system/technologies/TechnologiesHeader";
import ScrollingBanner from "../utils/scrollingBanner";


const Technologies = () => {
  return (
    <Box className="flex flex-col p-4 text-center w-full">
      <TechnologiesHeader>Technologies</TechnologiesHeader>
      <ScrollingBanner />
    </Box>
  );
};

export default Technologies;