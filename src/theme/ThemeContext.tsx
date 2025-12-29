// src/theme/ThemeContext.tsx
import { createContext } from "react";
import type { ThemeName } from "./themes";

export type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  colorScheme: "light" | "dark";
  toggleColorScheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);
