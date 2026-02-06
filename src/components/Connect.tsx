import { Container, Grid, Text, Stack } from "@mantine/core";
import {
  FaEnvelope,
  FaLocationPin,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
import ConnectHeading from "../design-system/connect/ConnectHeading";
import ConnectSubheading from "../design-system/connect/ConnectSubheading";
import ContactFormContainer from "../design-system/connect/ContactFormContainer";

const Connect = () => {
  return (
    <Container size="lg" py={80} id="connect">
      <Grid gutter={50}>
        {/* Left Side - Text Content */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Stack gap="xl">
            <div>
              <ConnectHeading>Get in Touch</ConnectHeading>
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
                <FaLocationPin size={20} />
                <Text>Coates, Cambridgeshire, England, UK</Text>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <FaEnvelope size={20} />
                <Text>your.email@example.com</Text>
              </div>
              {/* Optional: Add social links */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <FaLinkedin size={20} />
                <Text>linkedin.com/in/yourprofile</Text>
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
