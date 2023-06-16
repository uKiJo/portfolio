import React from "react";
import * as Switch from "@radix-ui/react-switch";
import { MdDarkMode, MdLightMode, MdOutlineDarkMode } from "react-icons/md";

import "./switch.scss";
import ThemeContext from "../../context/ThemeContext";

interface SwitchProps {}

const SwitchButton: React.FC<SwitchProps> = (props) => {
  const { currentTheme, changeCurrentTheme } = React.useContext(ThemeContext);
  return (
    <form>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Switch.Root
          aria-label="switch-root"
          className="SwitchRoot dark:bg-txt bg-primary"
          id="airplane-mode"
          onClick={() =>
            changeCurrentTheme(currentTheme === "light" ? "dark" : "light")
          }
        >
          <Switch.Thumb className="SwitchThumb dark:bg-primary bg-white">
            {currentTheme === "light" ? <MdLightMode /> : <MdDarkMode />}
          </Switch.Thumb>
        </Switch.Root>
      </div>
    </form>
  );
};

export default SwitchButton;
