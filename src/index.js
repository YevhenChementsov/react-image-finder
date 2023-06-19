import React from 'react';

import { theme } from 'constants/theme';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './components/App/App';
import { GlobalStyle } from './constants/GlobalStyle';

import 'modern-normalize/modern-normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
);
