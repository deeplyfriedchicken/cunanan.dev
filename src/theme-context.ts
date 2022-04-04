import { createContext } from 'react';
import { ETheme } from './interfaces';

type TThemeContext = {
  setMode: (theme: ETheme) => void;
};

export default createContext<TThemeContext>({
  setMode: () => 'white',
});
