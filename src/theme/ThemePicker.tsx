import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import { Menu, Button } from "@mantine/core";

const ThemeMenu = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) return null;

  const { setTheme, toggleColorScheme } = ctx;

  return (
    <Menu>
      <Menu.Target>
        <Button variant="subtle">Theme</Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={() => setTheme("default")}>
          Default
        </Menu.Item>
        <Menu.Item onClick={() => setTheme("synthwave")}>
          Synthwave
        </Menu.Item>
        <Menu.Item onClick={() => setTheme("forest")}>
          Forest
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item onClick={toggleColorScheme}>
          Toggle light / dark
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ThemeMenu;