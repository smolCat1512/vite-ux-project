import { Menu, Button, useMantineTheme } from "@mantine/core";
import { FaPalette } from "react-icons/fa";
import { useThemeController } from "../../theme/ThemeProvider";
import type { ThemeName } from "../../theme/themeDefinitions";
import { getTextGlow, getIconGlow } from "../../design-system/utils/glow";

const themeOptions: ThemeName[] = ["light", "dark", "synthwave", "forest"];

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
          '--menu-item-hover': menu?.hoverBackground,
        },
        item: {
          color: menu?.text,
        },
      }}
    >
      <Menu.Target>
        <Button
          leftSection={<FaPalette />}
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
