import { createContext, useState, type ReactNode } from "react";
import type { ThemeName } from "./themeDefinitions";

interface ThemeContextProps {
  themeName: ThemeName;
  setThemeName: (theme: ThemeName) => void;
  toggleTheme: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeName, setThemeName] = useState<ThemeName>("light");

  const toggleTheme = () => {
    setThemeName((prev: ThemeName) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};