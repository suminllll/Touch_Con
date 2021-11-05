import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
