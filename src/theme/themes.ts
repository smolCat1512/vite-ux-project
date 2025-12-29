import type { MantineThemeOverride } from "@mantine/core";

export type ThemeName = "default" | "synthwave" | "forest";

export const themes: Record<ThemeName, MantineThemeOverride> = {
  default: {
    primaryColor: "gray",
  },

  synthwave: {
    primaryColor: "pink",
    colors: {
      pink: [
        "#ffe6f7",
        "#ffb3e6",
        "#ff80d5",
        "#ff4dc4",
        "#ff1ab3",
        "#e60099",
        "#b30077",
        "#800055",
        "#4d0033",
        "#26001a",
      ],
    },
  },

  forest: {
    primaryColor: "green",
  },
};
