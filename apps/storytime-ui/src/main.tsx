import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { storytimeTheme } from "./app/storytime-theme";
import { ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider theme={storytimeTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
