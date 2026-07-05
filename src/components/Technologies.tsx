import { Box, SimpleGrid } from "@mantine/core";
import TechnologiesHeader from "../design-system/technologies/TechnologiesHeader";
import TechnologiesScrollingBanner from "../utils/TechnologiesScroliingBanner";
import MethodologiesScrollingBanner from "../utils/MethodologiesScrollingBanner";

const Technologies = () => {
  return (
    <Box py="xl" ta="center">
      <TechnologiesHeader> Technologies &amp; Methodologies</TechnologiesHeader>
      <SimpleGrid 
        cols={{ base: 1, md: 2 }}
        spacing="xl"

      >
        <TechnologiesScrollingBanner />
        <MethodologiesScrollingBanner />
      </SimpleGrid>
    </Box>
  );
};

export default Technologies;
