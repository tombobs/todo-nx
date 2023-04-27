import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { theme } from './theme';
import { Provider as StoreProvider } from 'react-redux';
import store from './app/shared/store';
import { ThemeProvider } from '@mui/material';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <App />
        </StoreProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
