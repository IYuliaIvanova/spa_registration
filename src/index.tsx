import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { themes } from './constants/themes';
import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${themes.colors.bgColor};
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={themes}>
    <GlobalStyle/>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ThemeProvider>
);
