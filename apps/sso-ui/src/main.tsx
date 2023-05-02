import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles.scss';
import App from './app/app';
import { ThemeProvider } from '@mui/material';
import { Provider as StoreProvider } from 'react-redux';
import store from './app/shared/store';
import { theme } from '@todo-nx/theme';

ReactDOM
  .createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      <BrowserRouter>
        <StoreProvider store={store}>
          <ThemeProvider theme={theme}>
            <App/>
          </ThemeProvider>
        </StoreProvider>
      </BrowserRouter>
    </StrictMode>
  );
