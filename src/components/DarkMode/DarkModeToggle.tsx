import React, { useEffect } from "react";
import useDarkMode from "use-dark-mode";
import { FiSun, FiMoon } from "react-icons/fi";

import {
  SwitchWrapper,
  SwitchContainer,
  SwitchCircle,
  SwitchIconLeft,
  SwitchIconRight,
} from "./styled.DarkModeToogle";
// import { useDarkMode } from "./useDarkMode";

export const DarkModeToggle: React.FC = () => {
  const darkMode = useDarkMode();

  console.log("Box (component):", darkMode.value);

  useEffect(() => {
    console.log("Box (useEffect):", darkMode.value);
  }, [darkMode.value]);

  return (
    <SwitchWrapper
      onClick={darkMode.toggle}
      isEnabled={darkMode.value}
      aria-checked={darkMode.value}
      role="switch"
      tabIndex={0}
    >
      <SwitchContainer>
        <SwitchIconLeft>
          <FiMoon color="#321" />
        </SwitchIconLeft>
        <SwitchIconRight>
          <FiSun color="#DEF" />
        </SwitchIconRight>
      </SwitchContainer>
      <SwitchCircle />
    </SwitchWrapper>
  );
};
