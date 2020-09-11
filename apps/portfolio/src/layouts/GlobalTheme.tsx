import React, { FC } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import OrbitronFontVariable from "../fonts/Orbitron-VariableFont_wght.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Orbitron;
    src: url(${OrbitronFontVariable});
  }

  body {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;
    background-color: #282828;
    color: #ffffff;
    font-family: 'Orbitron', sans-serif;
  }
`;

const theme = {};

const GlobalTheme: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default GlobalTheme;
