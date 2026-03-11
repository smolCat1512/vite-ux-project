import { Menu, Button, useMantineTheme } from "@mantine/core";
import { FaPalette } from "react-icons/fa";
import { useThemeController } from "../../theme/ThemeProvider";
import type { ThemeName } from "../../theme/themeDefinitions";
import { getTextGlow, getIconGlow } from "../../design-system/utils/glow";
import { GiPalmTree } from "react-icons/gi";
import { MdForest } from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";
import { IoSunny } from "react-icons/io5";

const SynthwaveIcon = () => (
  <span className="relative inline-flex items-center justify-center w-10 h-10">
    <svg width="0" height="0" className="absolute">
      <defs>
        {/* Neon pink-to-orange gradient for the icon */}
        <linearGradient id="sw-icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff2dce" /> {/* hot pink */}
          <stop offset="100%" stopColor="#ff6b00" /> {/* neon orange */}
        </linearGradient>
        {/* Deep purple background for the circle */}
        <linearGradient id="sw-bg-grad" x1="135deg" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a0533" /> {/* deep purple-black */}
          <stop offset="100%" stopColor="#2d0a5e" /> {/* rich purple */}
        </linearGradient>
        {/* Neon border glow gradient */}
        <linearGradient id="sw-border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff2dce" />
          <stop offset="100%" stopColor="#ff6b00" />
        </linearGradient>
        {/* Glow filter */}
        <filter id="sw-glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>

    {/* Circle with deep purple bg + neon border */}
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className="absolute inset-0"
    >
      <circle cx="20" cy="20" r="19" fill="url(#sw-bg-grad)" />
      <circle
        cx="20"
        cy="20"
        r="19"
        fill="none"
        stroke="url(#sw-border-grad)"
        strokeWidth="1.5"
        filter="url(#sw-glow)"
      />
    </svg>

    {/* Palm tree with neon glow */}
    <GiPalmTree
      size="22"
      className="relative z-10"
      style={{
        fill: "url(#sw-icon-grad)",
        filter: "drop-shadow(0 0 4px #ff2dce) drop-shadow(0 0 8px #ff6b0066)",
      }}
    />
  </span>
);

const themeOptions: ThemeName[] = ["light", "dark", "synthwave", "forest"];

const themeIcons: Record<ThemeName, React.ReactNode> = {
  light: <IoSunny className="text-yellow-300" size="28" />,
  dark: <RiMoonClearFill className="text-gray-400" size="28" />,
  synthwave: <SynthwaveIcon />,
  forest: <MdForest className="text-green-500" size="28" />,
};

const HeaderThemeSwitch = () => {
  const { themeName, setThemeName } = useThemeController();
  const theme = useMantineTheme();

  const buttonColor =
    theme.other?.header?.button?.color ?? theme.other?.layout?.text;

  const bg = theme.other?.layout?.background ?? "#ffffff";
  const text = theme.other?.layout?.text ?? "#000000";
  const glowColor = theme.other?.header?.button?.glowColor;
  const glow = theme.other?.header?.button?.glow ?? false;

  const textGlow = getTextGlow(glowColor, glow);
  const iconGlow = getIconGlow(glowColor, glow);

  const menu = theme.other?.menu;

  return (
    <Menu
      shadow="md"
      width={200}
      transitionProps={{ transition: "pop", duration: 300 }}
      styles={{
        dropdown: {
          backgroundColor: menu?.background,
          "--menu-item-hover": menu?.hoverBackground,
        },
        item: {
          color: menu?.text,
        },
      }}
    >
      <Menu.Target>
        <Button
          leftSection={<FaPalette size="20" />}
          variant="outline"
          radius="md"
          styles={{
            label: {
              color: buttonColor,
              textShadow: textGlow,
            },
            section: {
              color: buttonColor,
              filter: iconGlow,
            },
          }}
        >
          Theme
        </Button>
      </Menu.Target>

      <Menu.Dropdown
        style={{
          backgroundColor: bg,
          color: text,
        }}
      >
        {themeOptions.map((option) => {
          const isActive = themeName === option;

          return (
            <Menu.Item
              key={option}
              onClick={() => setThemeName(option)}
              leftSection={themeIcons[option]}
              style={{
                color: text,
                fontWeight: isActive ? 700 : 400,
                opacity: isActive ? 1 : 0.7,
                backdropFilter: isActive ? "brightness(1.5)" : undefined,
              }}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
};

export default HeaderThemeSwitch;
