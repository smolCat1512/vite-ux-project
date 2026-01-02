import type { MantineThemeOverride } from "@mantine/core";

export type ThemeName = "light" | "dark" | "synthwave" | "forest";

export const themeDefinitions: Record<ThemeName, MantineThemeOverride> = {
  light: {
    fontFamily: "Poppins, sans-serif",
    primaryColor: "gray",

    colors: {
      gray: [
        "#f8f9fa",
        "#e9ecef",
        "#dee2e6",
        "#ced4da",
        "#adb5bd",
        "#6c757d",
        "#495057",
        "#343a40",
        "#212529",
        "#121416",
      ],
    },

    other: {
      layout: {
        background: "#ffffff",
        text: "#000000",
      },

      hero: {
        heading: {
          color: "#777b7e",
          glow: false,
        },
        highlight: {
          color: "#ff6e00",
          glow: false,
        },
      },

      header: {
        button: {
          color: "#777b7e",
          glow: false,
          hoverBg: "#f0f0f0",
        },
      },
      menu: {
        background: "#ffffff",
        text: "#000000",
        hoverBackground: "#f0f0f0",
        activeBackground: "#e0e0e0",
      },
    },
  },

  dark: {
    fontFamily: "Inter, sans-serif",
    primaryColor: "gray",

    colors: {
      gray: [
        "#121212",
        "#1c1c1c",
        "#2a2a2a",
        "#3a3a3a",
        "#4a4a4a",
        "#5a5a5a",
        "#6a6a6a",
        "#7a7a7a",
        "#8a8a8a",
        "#9a9a9a",
      ],
    },

    other: {
      layout: {
        background: "#121212",
        text: "#ededed",
      },

      hero: {
        heading: {
          color: "#ededed",
          glow: false,
        },
        highlight: {
          color: "#f59e0b",
          glow: false,
        },
      },

      header: {
        button: {
          color: "#ededed",
          glow: false,
          hoverBg: "#1c1c1c",
        },
      },

      menu: {
        background: "#121212",
        text: "#ededed",
        hoverBackground: "#1c1c1c",
        activeBackground: "#2a2a2a",
      },
    },
  },

  synthwave: {
    fontFamily: "Orbitron, sans-serif",
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
      yellow: [
        "#fffde6",
        "#fff9b3",
        "#fff580",
        "#fff14d",
        "#ffed1a",
        "#e6d500",
        "#b3a800",
        "#807b00",
        "#4d4e00",
        "#262700",
      ],
    },

    other: {
      layout: {
        background: "#1a0033",
        text: "#ff80d5",
      },

      hero: {
        heading: {
          color: "#ff4dc4",
          // glow: true,
          // glowColor: "#ff4dc4",
        },
        highlight: {
          color: "#ffed1a",
          glow: true,
          glowColor: "#ffed1a",
        },
      },

      header: {
        button: {
          color: "#ffed1a",
          glow: true,
          glowColor: "#ffed1a",
          hoverBg: "#330026",
        },
      },

      menu: {
        background: "#1a0033",
        text: "#ff80d5",
        hoverBackground: "#330026",
        activeBackground: "#4d001a",
      },
    },
  },

  forest: {
    fontFamily: "Inter, sans-serif",
    primaryColor: "green",

    colors: {
      green: [
        "#e6f5e6",
        "#b3e6b3",
        "#80d580",
        "#4dc54d",
        "#1ab31a",
        "#009900",
        "#007700",
        "#005500",
        "#003300",
        "#001a00",
      ],
    },

    other: {
      layout: {
        background: "#0b2e13",
        text: "#a8d5a2",
      },

      hero: {
        heading: {
          color: "#d1fae5",
          glow: false,
        },
        highlight: {
          color: "#34d399",
          glow: false,
        },
      },

      header: {
        button: {
          color: "#d1fae5",
          glow: false,
          hoverBg: "#144620",
        },
      },

      menu: {
        background: "#0b2e13",
        text: "#a8d5a2",
        hoverBackground: "#145a32",
        activeBackground: "#1e8449",
      },
    },
  },
};
