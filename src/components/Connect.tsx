import { Container, Grid, Text, Stack } from "@mantine/core";
import { FaGithub } from "react-icons/fa6";
import ConnectHeading from "../design-system/connect/ConnectHeading";
import ConnectSubheading from "../design-system/connect/ConnectSubheading";
import ContactFormContainer from "../design-system/connect/ContactFormContainer";
import ConnectLinkedIn from "../design-system/connect/ConnectLinkedIn";
import ConnectLocation from "../design-system/connect/ConnectLocation";
import ConnectCv from "../design-system/connect/ConnectCv";

const Connect = () => {
  return (
    <Container size="lg" py={80} id="connect">
      <Grid gutter={50}>
        {/* Left Side - Text Content */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Stack gap="xl">
            <div>
              <ConnectHeading>Connect</ConnectHeading>
              <ConnectSubheading>
                Have a project in mind or just want to chat? I'd love to hear
                from you. Drop me a message and I'll get back to you as soon as
                possible.
              </ConnectSubheading>
            </div>

            <Stack gap="md">
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <ConnectLocation />
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <ConnectCv />
              </div>
              {/* Optional: Add social links */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <ConnectLinkedIn />
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <FaGithub size={20} />
                <Text>github.com/yourusername</Text>
              </div>
            </Stack>
          </Stack>
        </Grid.Col>

        {/* Right Side - Contact Form */}
        <Grid.Col span={{ base: 12, md: 7 }}>
          <ContactFormContainer />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Connect;
