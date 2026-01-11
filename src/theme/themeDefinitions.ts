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
        subheading: {
          color: "#495057",
          glow: false,
        },
        description: {
          color: "#6c757d",
          glow: false,
        },
        scrollButton: {
          iconColor: "#343a40",
          borderColor: "#343a40",
          hoverBackground: "rgba(0, 0, 0, 0.05)",
          focusRing: "#ff6e00",
          glow: false,
        },
        socials: {
          circleColor: "#e9ecef",
          iconColor: "#777b7e",
          glow: false,
        }
      },

      header: {
        button: {
          color: "#777b7e",
          glow: false,
          hoverBg: "#f0f0f0",
        },
        logo: {
          color: "#777b7e",
          glow: false,
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
        subheading: {
          color: "#d1d5db",
          glow: false,
        },
        description: {
          color: "#9ca3af",
          glow: false,
        },
        scrollButton: {
          iconColor: "#d1d5db",
          borderColor: "#6b7280",
          hoverBackground: "rgba(255, 255, 255, 0.1)",
          focusRing: "#f59e0b",
          glow: false,
        },
        socials: {
          circleColor: "#3d3434",
          iconColor: "#ededed",
          glow: false,
        }
      },

      header: {
        button: {
          color: "#ededed",
          glow: false,
          hoverBg: "#1c1c1c",
        },
        logo: {
          color: "#ededed",
          glow: false,
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
          glow: true,
          glowColor: "#ff4dc4",
        },
        highlight: {
          color: "#ffed1a",
          glow: true,
          glowColor: "#ffed1a",
        },
        subheading: {
          color: "#2de2e6",
          glow: true,
          glowColor: "#2de2e6",
        },
        description: {
          color: "#ff8c00",
          glow: true,
          glowColor: "#ff8c00",
        },
        scrollButton: {
          iconColor: "#ffed1a",
          borderColor: "#ff4dc4",
          hoverBackground: "rgba(255, 26, 179, 0.2)",
          focusRing: "#ffed1a",
          glow: true,
          glowColor: "#ffed1a",
        },
        socials: {
          circleColor: "transparent",
          iconColor: "#2de2e6",
          glow: true,
          glowColor: "#2de2e6",
        }
      },

      header: {
        button: {
          color: "#ffed1a",
          glow: true,
          glowColor: "#ffed1a",
          hoverBg: "#330026",
        },
        logo: {
          color: "#ffed1a",
          glow: true,
          glowColor: "#ffed1a",
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
        subheading: {
          color: "#a7f3d0",
          glow: false,
        },
        description: {
          color: "#6ee7b7",
          glow: false,
        },
        scrollButton: {
          iconColor: "#34d399",
          borderColor: "#10b981",
          hoverBackground: "rgba(52, 211, 153, 0.15)",
          focusRing: "#34d399",
          glow: false,
        },
        socials: {
          circleColor: "#064e3b",
          iconColor: "#d1fae5",
          glow: false,
        }
      },

      header: {
        button: {
          color: "#d1fae5",
          glow: false,
          hoverBg: "#144620",
        },
        logo: {
          color: "#d1fae5",
          glow: false,
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