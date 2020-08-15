import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

interface BasicLayoutProps {
  title: string;
}

const BasicLayout: FC<BasicLayoutProps> = ({ children, title }) => {
  return (
    <Provider theme={defaultTheme} defaultColorScheme="dark" height="100vh">
      <GlobalStyle />
      <Helmet defer={false}>
        <title>{title}</title>
      </Helmet>
      {children}
    </Provider>
  );
};

export default BasicLayout;
