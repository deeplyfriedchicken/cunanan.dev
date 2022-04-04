import { createContext } from 'react';
import { ETheme } from './interfaces';

type TThemeContext = {
  setMode?: (theme: ETheme) => void;
  mode: ETheme;
};

export default createContext<TThemeContext>({
  mode: 'white',
});
