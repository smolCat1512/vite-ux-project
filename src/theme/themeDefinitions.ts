import type { MantineThemeOverride } from "@mantine/core";

export type ThemeName = "light" | "dark" | "synthwave" | "forest";

export const themeDefinitions: Record<ThemeName, MantineThemeOverride & { background: string; text: string }> = {
  light: {
    primaryColor: "gray",
    fontFamily: "Poppins, sans-serif",
    colors: {
      gray: ["#f8f9fa","#e9ecef","#dee2e6","#ced4da","#adb5bd","#6c757d","#495057","#343a40","#212529","#121416"],
    },
    background: "#ffffff",
    text: "#000000",
  },
  dark: {
    primaryColor: "gray",
    fontFamily: "Inter, sans-serif",
    colors: {
      gray: ["#121212","#1c1c1c","#2a2a2a","#3a3a3a","#4a4a4a","#5a5a5a","#6a6a6a","#7a7a7a","#8a8a8a","#9a9a9a"],
    },
    background: "#121212",
    text: "#ededed",
  },
  synthwave: {
    primaryColor: "pink",
    fontFamily: "Orbitron, sans-serif",
    colors: {
      pink: ["#ffe6f7","#ffb3e6","#ff80d5","#ff4dc4","#ff1ab3","#e60099","#b30077","#800055","#4d0033","#26001a"],
    },
    background: "#1a0033",
    text: "#ff80d5",
  },
  forest: {
    primaryColor: "green",
    fontFamily: "Inter, sans-serif",
    colors: {
      green: ["#e6f5e6","#b3e6b3","#80d580","#4dc54d","#1ab31a","#009900","#007700","#005500","#003300","#001a00"],
    },
    background: "#0b2e13",
    text: "#a8d5a2",
  },
};
