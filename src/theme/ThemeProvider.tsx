import { MantineProvider } from "@mantine/core";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import { themes } from "./themes";
import type { ThemeName } from "./themes";

type Props = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<ThemeName>("default");
  const [colorScheme, setColorScheme] =
    useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-mantine-color-scheme",
      colorScheme
    );
  }, [colorScheme]);

  const toggleColorScheme = () =>
    setColorScheme((c) => (c === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, colorScheme, toggleColorScheme }}
    >
      <MantineProvider
        theme={themes[theme]}
        defaultColorScheme={colorScheme}
      >
        {children}
      </MantineProvider>
    </ThemeContext.Provider>
  );
}
