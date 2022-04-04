import { useMemo, useState } from 'react';
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  ThemeOptions,
} from '@mui/material/styles';
import ReactGA from 'react-ga';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeContext from './theme-context';

import { ETheme } from './interfaces';
import Container from './containers/Container';

import store, { persistor } from './store';

const { REACT_APP_TRACKING_ID } = process.env;

if (REACT_APP_TRACKING_ID) {
  ReactGA.initialize(REACT_APP_TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const typographyTheme: ThemeOptions = {
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily:
      '"Merriweather", "Merriweather Sans", "Helvetica", "Arial", sans-serif',
    overline: {
      fontFamily: '"Merriweather Sans", "Helvetica", "Arial", sans-serif',
      letterSpacing: '0.3em',
    },
  },
};

const themes: Record<ETheme, ThemeOptions> = {
  white: {
    palette: {
      background: {
        default: '#ffffff',
      },
      blob: {
        main: '#f9f9fb',
      },
      primary: {
        light: '#535766',
        main: '#32384C',
        dark: '#32384C',
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
      blob: {
        main: '#fcf9f8',
      },
      primary: {
        light: '#debbb2',
        main: '#CE9584',
        dark: '#CE9584',
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
      blob: {
        main: '#f8f9f6',
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
      blob: {
        main: '#fdfbf5',
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
      blob: {
        main: '#2a2e3f',
      },
      primary: {
        light: '#fff',
        main: '#fff',
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

function App() {
  const [mode, setMode] = useState<ETheme>('white');
  const theme = useMemo(
    () => createTheme({ ...typographyTheme, ...themes[mode] }),
    [mode],
  );

  const changeMode = useMemo(
    () => ({
      setMode: (value: ETheme) => {
        setMode(value);
      },
    }),
    [],
  );

  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <StyledEngineProvider injectFirst>
              <ThemeContext.Provider value={changeMode}>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <Container />
                </ThemeProvider>
              </ThemeContext.Provider>
            </StyledEngineProvider>
          </div>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
