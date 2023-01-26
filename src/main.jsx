import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/global';

import { Details } from './pages/Details';
import { Selected } from './pages/Selected'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <Selected />
    </ThemeProvider>
  </React.StrictMode>,
)
