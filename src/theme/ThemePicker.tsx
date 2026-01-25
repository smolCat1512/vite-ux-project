import { Menu, Button } from "@mantine/core";
import { FaPalette } from "react-icons/fa";
import { useThemeController } from "../theme/ThemeProvider";
import type { ThemeName } from "../theme/themeDefinitions";

const themeOptions: ThemeName[] = ["light", "dark", "synthwave", "forest"];

const ThemePicker = () => {
  const { themeName, setThemeName } = useThemeController();

  if (!themeName || !setThemeName) return null;

  return (
    <Menu shadow="md" width={200} trigger="click-hover">
      <Menu.Target>
        <Button leftSection={<FaPalette />} variant="subtle" radius="md">
          Theme
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        {themeOptions.map((theme) => (
          <Menu.Item
            key={theme}
            onClick={() => setThemeName(theme)}
            style={{
              fontWeight: themeName === theme ? 700 : 400,
              color:
                themeName === theme
                  ? theme === "synthwave"
                    ? "#ff80d5"
                    : theme === "forest"
                    ? "#1ab31a"
                    : theme === "dark"
                    ? "#ededed"
                    : "#000000"
                  : undefined,
            }}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default ThemePicker;
