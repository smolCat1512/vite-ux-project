import {
  Container,
  Grid,
  Title,
  Text,
  TextInput,
  Textarea,
  Button,
  Paper,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  FaEnvelope,
  FaLocationPin,
  FaLinkedin,
  FaGithub,
  FaCheck,
  FaXmark,
} from "react-icons/fa6";
import { sendEmail } from "../services/emailService";
import { notifications } from "@mantine/notifications";

const Connect = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 characters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) =>
        value.length < 10 ? "Message must be at least 10 characters" : null,
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    try {
      await sendEmail(values);
      notifications.show({
        title: "Success!",
        message: "Your message has been sent successfully - have a great day!",
        color: "teal",
        icon: <FaCheck />,
      });
      form.reset();
    } catch (error) {
      notifications.show({
        title: "Ah no :(",
        message: "Failed to send message. Please try again later.",
        color: "red",
        icon: <FaXmark />,
      });
      console.error("Email sending error:", error);
    }
  };

  return (
    <Container size="lg" py={80} id="connect">
      <Grid gutter={50}>
        {/* Left Side - Text Content */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Stack gap="xl">
            <div>
              <Title order={2} size="h1" mb="md">
                Get in Touch
              </Title>
              <Text size="lg" c="dimmed">
                Have a project in mind or just want to chat? I'd love to hear
                from you. Drop me a message and I'll get back to you as soon as
                possible.
              </Text>
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
          <Paper
            shadow="md"
            p="xl"
            radius="md"
            style={{
              backgroundColor: "var(--mantine-color-body)",
              border: "1px solid var(--mantine-color-default-border)",
            }}
          >
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack gap="md">
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  required
                  {...form.getInputProps("name")}
                />

                <TextInput
                  label="Email"
                  placeholder="your.email@example.com"
                  required
                  type="email"
                  {...form.getInputProps("email")}
                />

                <TextInput
                  label="Phone Number"
                  placeholder="+44 123 456 7890"
                  {...form.getInputProps("phone")}
                />

                <Textarea
                  label="Message"
                  placeholder="Tell me about your project or just say hello..."
                  required
                  minRows={5}
                  {...form.getInputProps("message")}
                />

                <Button type="submit" size="lg" fullWidth mt="md">
                  Send Message
                </Button>
              </Stack>
            </form>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Connect;
