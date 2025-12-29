import { Typography } from "@mantine/core";
import { useThemeController } from "../theme/ThemeProvider";

const Connect = () => {
  const { themeName } = useThemeController();

  // Simple mapping to check current theme colors
  const bgColor = {
    light: "#ffffff",
    dark: "#121212",
    synthwave: "#1a0033",
    forest: "#0b2e13",
  }[themeName];

  const textColor = {
    light: "#000000",
    dark: "#ededed",
    synthwave: "#ff80d5",
    forest: "#a8d5a2",
  }[themeName];

  return (
    <div
      className="h-screen flex flex-col items-center justify-center p-4 w-11/12 transition-colors duration-500"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <Typography className="text-3xl font-bold pb-6">Connect</Typography>
      <Typography>Current theme: {themeName}</Typography>
    </div>
  );
};

export default Connect;
