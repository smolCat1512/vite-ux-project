import {
  Paper,
  Stack,
  TextInput,
  Textarea,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { sendEmail } from "../../services/emailService";
import { notifications } from "@mantine/notifications";
import { getTextGlow } from "../utils/glow";

const ContactFormContainer = () => {
  const theme = useMantineTheme();
  const connectTheme = theme.other.connect;

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
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{
        backgroundColor: connectTheme.formContainer.background,
        border: `1px solid ${connectTheme.formContainer.border}`,
      }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput
            label="Name"
            placeholder="Your name"
            required
            styles={{
              input: {
                backgroundColor: connectTheme.input.background,
                borderColor: connectTheme.input.border,
                color: connectTheme.input.text,
                textShadow: getTextGlow(
                  connectTheme.input.text,
                  connectTheme.input.glow ?? false,
                  1.5,
                ),
                "--input-placeholder-color": connectTheme.input.placeholder
              },
            }}
            {...form.getInputProps("name")}
          />

          <TextInput
            label="Email"
            placeholder="your.email@example.com"
            required
            type="email"
            styles={{
              input: {
                backgroundColor: connectTheme.input.background,
                borderColor: connectTheme.input.border,
                color: connectTheme.input.text,
                textShadow: getTextGlow(
                  connectTheme.input.text,
                  connectTheme.input.glow ?? false,
                  1.5,
                ),
                "--input-placeholder-color": connectTheme.input.placeholder
              },
            }}
            {...form.getInputProps("email")}
          />

          <TextInput
            label="Phone Number"
            placeholder="+44 123 456 7890"
            styles={{
              input: {
                backgroundColor: connectTheme.input.background,
                borderColor: connectTheme.input.border,
                color: connectTheme.input.text,
                textShadow: getTextGlow(
                  connectTheme.input.text,
                  connectTheme.input.glow ?? false,
                  1.5,
                ),
                "--input-placeholder-color": connectTheme.input.placeholder,
              },
            }}
            {...form.getInputProps("phone")}
          />

          <Textarea
            label="Message"
            placeholder="Tell me about your project or just say hello..."
            required
            minRows={5}
            styles={{
              input: {
                backgroundColor: connectTheme.input.background,
                borderColor: connectTheme.input.border,
                color: connectTheme.input.text,
                textShadow: getTextGlow(
                  connectTheme.input.text,
                  connectTheme.input.glow ?? false,
                  1.5,
                ),
                "--input-placeholder-color": connectTheme.input.placeholder,
              },
            }}
            {...form.getInputProps("message")}
          />

          <Button
            type="submit"
            size="lg"
            fullWidth
            mt="md"
            style={{
              backgroundColor: connectTheme.button.background,
              color: connectTheme.button.text,
            }}
            styles={{
              root: {
                "&:hover": {
                  backgroundColor: connectTheme.button.hoverBackground,
                },
              },
            }}
          >
            Send Message
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default ContactFormContainer;
