import React from 'react';

import * as Switch from '@radix-ui/react-switch';
import './switch.scss';
import ThemeContext from '../../context/ThemeContext';

interface SwitchProps {}

const SwitchButton: React.FC<SwitchProps> = (props) => {
  const { currentTheme, changeCurrentTheme } = React.useContext(ThemeContext);
  return (
    <form>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Switch.Root
          className="SwitchRoot dark:bg-txt bg-lsecondary"
          id="airplane-mode"
          onClick={() =>
            changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
          }
        >
          <Switch.Thumb className="SwitchThumb dark:bg-primary bg-white" />
        </Switch.Root>
      </div>
    </form>
  );
};

export default SwitchButton;
