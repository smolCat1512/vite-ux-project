import {
  Paper,
  Stack,
  TextInput,
  Textarea,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { sendEmail } from "../../services/emailService";
import { notifications } from "@mantine/notifications";
import { getTextGlow } from "../utils/glow";
import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import ConnectFormButton from "./ConnectFormButton";

const ContactFormContainer = () => {
  const theme = useMantineTheme();
  const connectTheme = theme.other.connect;
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const isMobile = useMediaQuery("(max-width: 480px)");

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
    if (!turnstileToken) {
      notifications.show({
        title: "Verification Required",
        message: "Please complete the verification challenge.",
        color: "yellow",
        icon: <FaXmark />,
        position: isMobile ? "bottom-center" : "top-right",
      });
      return;
    }
    try {
      await sendEmail(values);
      notifications.show({
        title: "Success!",
        message: "Your message has been sent successfully - have a great day!",
        color: "teal",
        icon: <FaCheck />,
        position: isMobile ? "bottom-center" : "top-right",
      });
      form.reset();
      setTurnstileToken(null);
    } catch (error) {
      notifications.show({
        title: "Ah no :(",
        message: "Failed to send message. Please try again later.",
        color: "red",
        icon: <FaXmark />,
        position: isMobile ? "bottom-center" : "top-right",
      });
      console.error("Email sending error:", error);
    }
  };

  const inputStyles = {
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
  };

  return (
    // Card: capped width, centred on the page
    <Paper
      shadow="md"
      p={isMobile ? "md" : "lg"}
      radius="md"
      w="100%"
      maw={420}
      mx="auto"
      style={{
        backgroundColor: connectTheme.formContainer.background,
        border: `1px solid ${connectTheme.formContainer.border}`,
      }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="sm">
          <TextInput
            label="Name"
            placeholder="Your name"
            required
            styles={inputStyles}
            {...form.getInputProps("name")}
          />

          <TextInput
            label="Email"
            placeholder="your.email@example.com"
            required
            type="email"
            styles={inputStyles}
            {...form.getInputProps("email")}
          />

          <TextInput
            label="Phone Number"
            placeholder="+44 123 456 7890"
            styles={inputStyles}
            {...form.getInputProps("phone")}
          />

          <Textarea
            label="Message"
            placeholder="Tell me about your project or just say hello..."
            required
            minRows={3}
            autosize
            styles={inputStyles}
            {...form.getInputProps("message")}
          />

          {/* Turnstile Widget */}
          <Turnstile
            siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
            onSuccess={(token: string) => setTurnstileToken(token)}
            onError={() => setTurnstileToken(null)}
            onExpire={() => setTurnstileToken(null)}
            style={{ marginTop: isMobile ? 8 : 16, alignSelf: "center" }}
          />

          <ConnectFormButton>Send Message</ConnectFormButton>
        </Stack>
      </form>
    </Paper>
  );
};

export default ContactFormContainer;