import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from 'styled-components';

import { theme } from 'constants/theme';
import { App } from './components/App/App';
import { GlobalStyle } from './constants/GlobalStyle';

import 'modern-normalize/modern-normalize.css';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </StrictMode>,
);
