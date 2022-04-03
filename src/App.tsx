import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import ReactGA from 'react-ga';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import Container from './containers/Container';

import store, { persistor } from './store';

const { REACT_APP_TRACKING_ID } = process.env;

if (REACT_APP_TRACKING_ID) {
  ReactGA.initialize(REACT_APP_TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const theme = createTheme({
  palette: {
    background: {
      default: '#ffffff',
    },
    primary: {
      light: '#ffffff',
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
});

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container />
              </ThemeProvider>
            </StyledEngineProvider>
          </div>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
