import React, { FC } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import OrbitronFontVariable from "../fonts/Orbitron-VariableFont_wght.ttf";
import ChakraPetchMedium from "../fonts/Chakra_Petch/ChakraPetch-Medium.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Orbitron;
    src: url(${OrbitronFontVariable});
  }

  @font-face {
    font-family: Chakra Petch;
    src: url(${ChakraPetchMedium});
  }

  body {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;
    background-color: #101010;
    color: #ffffff;
    font-family: 'Chakra Petch', sans-serif;
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
