import { ThemeOptions } from '@mui/material';
import { ETheme } from '../interfaces';

export const themes: Record<ETheme, ThemeOptions> = {
  white: {
    palette: {
      background: {
        default: '#ffffff',
      },
      svgs: {
        arrow: '#32384C',
        blob: '#f9f9fb',
      },
      swatch: {
        main: '#FFFFFF',
        dark: '#E6E6E6',
      },
      primary: {
        light: '#535766',
        main: '#32384C',
        dark: '#222633',
        contrastText: '#fff',
      },
      secondary: {
        light: '#5b5f6f',
        main: '#535766',
        dark: '#232735',
        contrastText: '#fff',
      },
    },
  },
  chestnut: {
    palette: {
      background: {
        default: '#ffffff',
      },
      svgs: {
        arrow: '#e2ab9b',
        blob: '#fcf9f8',
      },
      swatch: {
        main: '#E8B9AB',
        dark: '#CFA598',
      },
      primary: {
        light: '#debbb2',
        main: '#CE9584',
        dark: '#CFA598',
        contrastText: '#fff',
      },
      secondary: {
        light: '#fcf9f8',
        main: '#CE9584',
        dark: '#CE9584',
        contrastText: '#fff',
      },
    },
  },
  green: {
    palette: {
      background: {
        default: '#ffffff',
      },
      svgs: {
        arrow: '#ADBCA5',
        blob: '#f8f9f6',
      },
      swatch: {
        main: '#ADBCA5',
        dark: '#96A38F',
      },
      primary: {
        light: '#c9d4c5',
        main: '#ADBCA5',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ADBCA5',
        main: '#ADBCA5',
        dark: '#CE9584',
        contrastText: '#fff',
      },
    },
  },
  wheat: {
    palette: {
      background: {
        default: '#ffffff',
      },
      svgs: {
        arrow: '#F6D8AE',
        blob: '#fdfbf5',
      },
      swatch: {
        main: '#F6D8AE',
        dark: '#DBC19B',
      },
      primary: {
        light: '#e6c798',
        main: '#F6D8AE',
        contrastText: '#fff',
      },
      secondary: {
        light: '#F6D8AE',
        main: '#F6D8AE',
        dark: '#CE9584',
        contrastText: '#fff',
      },
    },
  },
  charcoal: {
    palette: {
      background: {
        default: '#262a3b',
      },
      svgs: {
        arrow: '#FFFFFF',
        blob: '#2a2e3f',
      },
      swatch: {
        main: '#32384C',
        dark: '#222633',
      },
      primary: {
        light: '#fff',
        main: '#fff',
        dark: '#E6E6E6',
        contrastText: '#32384C',
      },
      secondary: {
        light: '#fff',
        main: '#fff',
        dark: '#CE9584',
        contrastText: '#fff',
      },
    },
  },
};

export const catThemes: Record<ETheme, string> = {
  white: 'https://assets8.lottiefiles.com/packages/lf20_OT15QW.json',
  chestnut: 'https://assets3.lottiefiles.com/packages/lf20_1hcciifw.json',
  green: 'https://assets4.lottiefiles.com/packages/lf20_d8mn4nlt.json',
  wheat: 'https://assets9.lottiefiles.com/packages/lf20_g0h6bslu.json',
  charcoal: 'https://assets2.lottiefiles.com/packages/lf20_mjkyokvo.json',
};

export default themes;
