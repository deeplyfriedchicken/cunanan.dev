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

import { themes } from './constants';

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

function App() {
  const [mode, setMode] = useState<ETheme>('white');
  const theme = useMemo(
    () => createTheme({ ...typographyTheme, ...themes[mode] }),
    [mode],
  );

  const changeMode = useMemo(
    () => ({
      mode,
      setMode: (value: ETheme) => {
        setMode(value);
      },
    }),
    [mode],
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
