import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@todo-nx/theme";
import './styles.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        <App />
      </ThemeProvider>
    </BrowserRouter>
    <CssBaseline enableColorScheme />
  </StrictMode>
);
