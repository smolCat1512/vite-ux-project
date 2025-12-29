import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { MantineProvider } from "@mantine/core";
import { themeDefinitions } from "./themeDefinitions";
import type { ThemeName } from "./themeDefinitions";
import type { Dispatch, SetStateAction} from "react";

interface ThemeContextProps {
  themeName: ThemeName;
  setThemeName: Dispatch<SetStateAction<ThemeName>>;
  toggleTheme: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeName, setThemeName] = useState<ThemeName>("light");

  const toggleTheme = () => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  };

  const currentTheme = themeDefinitions[themeName];
  useEffect(() => {
    document.body.style.backgroundColor = currentTheme.background;
    document.body.style.color = currentTheme.text;

    document.documentElement.style.setProperty(
      "--mantine-color-background",
      currentTheme.background
    );
    document.documentElement.style.setProperty(
      "--mantine-color-text",
      currentTheme.text
    );
  }, [themeName, currentTheme]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, toggleTheme }}>
      <MantineProvider theme={currentTheme}>{children}</MantineProvider>
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeController = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error("useThemeController must be used within ThemeProvider");
  return ctx;
};
