/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";
import { MantineProvider, type MantineThemeOverride } from "@mantine/core";
import { themeDefinitions, type ThemeName } from "./themeDefinitions";

interface ThemeContextProps {
  themeName: ThemeName;
  setThemeName: (theme: ThemeName) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeName, setThemeName] = useState<ThemeName>("light");

  const toggleTheme = () => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  };

  const currentTheme: MantineThemeOverride = themeDefinitions[themeName];

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, toggleTheme }}>
      <MantineProvider theme={currentTheme}>{children}</MantineProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeController = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeController must be used within ThemeProvider");
  return ctx;
};
