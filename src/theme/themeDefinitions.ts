import type { MantineThemeOverride } from "@mantine/core";
import "../index.css"

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
        cursor: {
          color: "#0576F2",
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
        },
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

      technologies: {
        header: {
          color: "#343a40",
        },
        card: {
          background:
            "linear-gradient(to right, rgba(219, 234, 254, 0.5), rgba(191, 219, 254, 0.5))",
          border: "#dee2e6",
        },
        text: {
          color: "#343a40",
        },
        icon: {
          color: "#495057",
        },
      },

      portfolio: {
        header: {
          color: "#343a40",
        },
        card: {
          title: {
            color: "#343a40",
          },
          technologies: {
            color: "#6c757d",
          },
          link: {
            color: "#ff6e00",
            hoverColor: "#e66300",
          },
          placeholder: {
            backgroundColor: "#e5e7eb",
            iconColor: "#9ca3af",
            textColor: "#6b7280",
          },
        },
      },
      caseStudy: {
        header: {
          title: {
            color: "#343a40",
          },
          tagline: {
            color: "#6c757d",
          },
        },
        detailsGrid: {
          background: "#f3f4f6",
          heading: {
            color: "#343a40",
          },
          text: {
            color: "#6c757d",
          },
        },
        section: {
          heading: {
            color: "#343a40",
          },
          text: {
            color: "#495057",
          },
        },
        technologies: {
          background: "#e9d5ff",
          text: "#7e22ce",
        },
        liveButton: {
          background: "#c2410c",
          text: "#ffffff",
          hoverBackground: "#9a3412",
        },
        navigation: {
          text: "#6c757d",
          hoverText: "#343a40",
          border: "#e5e7eb",
        },
        imagePlaceholder: {
          backgroundColor: "#e5e7eb",
          iconColor: "#9ca3af",
          textColor: "#6b7280",
        },
      },
      projectSummary: {
        header: {
          title: {
            color: "#343a40",
          },
          role: {
            color: "#6c757d",
          },
          technologies: {
            color: "#495057",
          },
        },
        content: {
          summary: {
            color: "#495057",
          },
          processHeading: {
            color: "#495057",
          },
          processText: {
            color: "#495057",
          },
          processIcon: {
            color: "#6c757d",
          },
        },
        caseStudyLink: {
          color: "#ff6e00",
          hoverColor: "#e66300",
        },
        caseStudyComingSoon: {
          color: "#6c757d",
        },
        imagePlaceholder: {
          backgroundColor: "#f3f4f6",
          iconColor: "#60a5fa",
          textColor: "#343a40",
        },
        navigation: {
          previous: {
            background: "transparent",
            text: "#434a50",
            border: "#dee2e6",
            hoverBackground: "#f3f4f6",
          },
          next: {
            background: "#ff6e00",
            text: "#000000",
            hoverBackground: "#e66300",
          },
        },
      },
    },
  },

  dark: {
    fontFamily: "Lexend, sans-serif",
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
        cursor: {
          color: "#05E6F2",
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
        },
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

      technologies: {
        header: {
          color: "#ededed",
        },
        card: {
          background: "rgba(30, 30, 30, 0.6)",
          border: "#3a3a3a",
        },
        text: {
          color: "#ededed",
        },
        icon: {
          color: "#9ca3af",
        },
      },

      portfolio: {
        header: {
          color: "#ededed",
        },
        card: {
          title: {
            color: "#ededed",
          },
          technologies: {
            color: "#9ca3af",
          },
          link: {
            color: "#f59e0b",
            hoverColor: "#d97706",
          },
          placeholder: {
            backgroundColor: "#374151",
            iconColor: "#6b7280",
            textColor: "#9ca3af",
          },
        },
      },
      caseStudy: {
        header: {
          title: {
            color: "#ededed",
          },
          tagline: {
            color: "#9ca3af",
          },
        },
        detailsGrid: {
          background: "#1f2937",
          heading: {
            color: "#ededed",
          },
          text: {
            color: "#9ca3af",
          },
        },
        section: {
          heading: {
            color: "#ededed",
          },
          text: {
            color: "#d1d5db",
          },
        },
        technologies: {
          background: "#581c87",
          text: "#e9d5ff",
        },
        liveButton: {
          background: "#ea580c",
          text: "#ffffff",
          hoverBackground: "#c2410c",
        },
        navigation: {
          text: "#9ca3af",
          hoverText: "#ededed",
          border: "#374151",
        },
        imagePlaceholder: {
          backgroundColor: "#374151",
          iconColor: "#6b7280",
          textColor: "#9ca3af",
        },
      },
      projectSummary: {
        header: {
          title: {
            color: "#ededed",
          },
          role: {
            color: "#9ca3af",
          },
          technologies: {
            color: "#d1d5db",
          },
        },
        content: {
          summary: {
            color: "#d1d5db",
          },
          processHeading: {
            color: "#d1d5db",
          },
          processText: {
            color: "#d1d5db",
          },
          processIcon: {
            color: "#9ca3af",
          },
        },
        caseStudyLink: {
          color: "#f59e0b",
          hoverColor: "#d97706",
        },
        caseStudyComingSoon: {
          color: "#9ca3af",
        },
        imagePlaceholder: {
          backgroundColor: "#1f2937",
          iconColor: "#60a5fa",
          textColor: "#ededed",
        },
        navigation: {
          previous: {
            background: "transparent",
            text: "#ffffff",
            border: "#ffffff",
          },
          next: {
            background: "#ededed",
            text: "#121212",
            hoverBackground: "#d1d5db",
          },
        },
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
        cursor: {
          color: "#2de2e6",
          glow: true,
          glowColor: "#2de2e6",
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
        },
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

      technologies: {
        header: {
          color: "#ff4dc4",
        },
        card: {
          background:
            "linear-gradient(135deg, rgba(255, 26, 179, 0.2), rgba(45, 226, 230, 0.2))",
          border: "#ff4dc4",
        },
        text: {
          color: "#ffed1a",
        },
        icon: {
          color: "#2de2e6",
        },
      },

      portfolio: {
        header: {
          color: "#ff4dc4",
        },
        card: {
          title: {
            color: "#ffed1a",
          },
          technologies: {
            color: "#2de2e6",
          },
          link: {
            color: "#ff4dc4",
            hoverColor: "#ff1ab3",
          },
          placeholder: {
            backgroundColor: "rgba(77, 0, 51, 0.5)",
            iconColor: "#ff80d5",
            textColor: "#2de2e6",
          },
        },
      },
      caseStudy: {
        header: {
          title: {
            color: "#ff4dc4",
          },
          tagline: {
            color: "#2de2e6",
          },
        },
        detailsGrid: {
          background: "rgba(77, 0, 51, 0.5)",
          heading: {
            color: "#ffed1a",
          },
          text: {
            color: "#2de2e6",
          },
        },
        section: {
          heading: {
            color: "#ffed1a",
          },
          text: {
            color: "#ff80d5",
          },
        },
        technologies: {
          background: "rgba(255, 26, 179, 0.3)",
          text: "#ffed1a",
        },
        liveButton: {
          background: "#ff1ab3",
          text: "#1a0033",
          hoverBackground: "#e60099",
        },
        navigation: {
          text: "#2de2e6",
          hoverText: "#ffed1a",
          border: "#ff4dc4",
        },
        imagePlaceholder: {
          backgroundColor: "rgba(77, 0, 51, 0.5)",
          iconColor: "#ff80d5",
          textColor: "#2de2e6",
        },
      },
      projectSummary: {
        header: {
          title: {
            color: "#ff4dc4",
          },
          role: {
            color: "#2de2e6",
          },
          technologies: {
            color: "#ff80d5",
          },
        },
        content: {
          summary: {
            color: "#ff80d5",
          },
          processHeading: {
            color: "#ffed1a",
          },
          processText: {
            color: "#ff80d5",
          },
          processIcon: {
            color: "#2de2e6",
          },
        },
        caseStudyLink: {
          color: "#ffed1a",
          hoverColor: "#e6d500",
        },
        caseStudyComingSoon: {
          color: "#2de2e6",
        },
        imagePlaceholder: {
          backgroundColor: "rgba(77, 0, 51, 0.5)",
          iconColor: "#2de2e6",
          textColor: "#ffed1a",
        },
        navigation: {
          previous: {
            background: "transparent",
            text: "#2de2e6",
            border: "#ff4dc4",
            hoverBackground: "rgba(255, 26, 179, 0.2)",
          },
          next: {
            background: "#ff1ab3",
            text: "#ffffff",
            hoverBackground: "#e60099",
          },
        },
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
        cursor: {
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
        },
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

      technologies: {
        header: {
          color: "#d1fae5",
        },
        card: {
          background: "rgba(6, 78, 59, 0.4)",
          border: "#10b981",
        },
        text: {
          color: "#d1fae5",
        },
        icon: {
          color: "#6ee7b7",
        },
      },

      portfolio: {
        header: {
          color: "#d1fae5",
        },
        card: {
          title: {
            color: "#d1fae5",
          },
          technologies: {
            color: "#6ee7b7",
          },
          link: {
            color: "#34d399",
            hoverColor: "#10b981",
          },
          placeholder: {
            backgroundColor: "#064e3b",
            iconColor: "#6ee7b7",
            textColor: "#a7f3d0",
          },
        },
      },
      caseStudy: {
        header: {
          title: {
            color: "#d1fae5",
          },
          tagline: {
            color: "#6ee7b7",
          },
        },
        detailsGrid: {
          background: "#064e3b",
          heading: {
            color: "#d1fae5",
          },
          text: {
            color: "#6ee7b7",
          },
        },
        section: {
          heading: {
            color: "#d1fae5",
          },
          text: {
            color: "#a7f3d0",
          },
        },
        technologies: {
          background: "#065f46",
          text: "#a7f3d0",
        },
        liveButton: {
          background: "#10b981",
          text: "#ffffff",
          hoverBackground: "#059669",
        },
        navigation: {
          text: "#6ee7b7",
          hoverText: "#d1fae5",
          border: "#10b981",
        },
        imagePlaceholder: {
          backgroundColor: "#064e3b",
          iconColor: "#6ee7b7",
          textColor: "#a7f3d0",
        },
      },
      projectSummary: {
        header: {
          title: {
            color: "#d1fae5",
          },
          role: {
            color: "#6ee7b7",
          },
          technologies: {
            color: "#a7f3d0",
          },
        },
        content: {
          summary: {
            color: "#a7f3d0",
          },
          processHeading: {
            color: "#d1fae5",
          },
          processText: {
            color: "#a7f3d0",
          },
          processIcon: {
            color: "#6ee7b7",
          },
        },
        caseStudyLink: {
          color: "#34d399",
          hoverColor: "#10b981",
        },
        caseStudyComingSoon: {
          color: "#6ee7b7",
        },
        imagePlaceholder: {
          backgroundColor: "#064e3b",
          iconColor: "#34d399",
          textColor: "#d1fae5",
        },
        navigation: {
          previous: {
            background: "transparent",
            text: "#6ee7b7",
            border: "#10b981",
            hoverBackground: "rgba(52, 211, 153, 0.15)",
          },
          next: {
            background: "#10b981",
            text: "#000000",
            hoverBackground: "#059669",
          },
        },
      },
    },
  },
};
