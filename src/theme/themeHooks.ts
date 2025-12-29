import { useThemeController } from "../theme/ThemeProvider";

export const useTheme = () => {
  const { themeName, setThemeName, toggleTheme } = useThemeController();
  return { themeName, setThemeName, toggleTheme };
};
