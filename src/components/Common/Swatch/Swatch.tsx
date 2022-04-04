/** @jsxImportSource @emotion/react */
import { Paper } from '@mui/material';
import clsx from 'clsx';
import { css } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { themes } from '../../../constants';
import { ETheme } from '../../../interfaces';
import ThemeContext from '../../../theme-context';

import classes from './Swatch.module.css';

export type TSwatch = {
  color: ETheme;
  className?: string;
};

function Swatch({ color, className }: TSwatch) {
  const { palette: { swatch: swatchColors } = {} } = createTheme(themes[color]);
  return (
    <ThemeContext.Consumer>
      {({ setMode, mode }) => (
        <Paper
          css={css`
            background-color: ${swatchColors?.main};
            &.active {
              background-color: ${swatchColors?.dark};
            }
            &.active::before {
              background-color: ${swatchColors?.main};
            }
          `}
          className={clsx(className, classes.swatch, {
            active: mode === color,
          })}
          onClick={() => setMode?.(color)}
        />
      )}
    </ThemeContext.Consumer>
  );
}

export default Swatch;
