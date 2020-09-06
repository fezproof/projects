import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import { createGlobalStyle } from "styled-components";
import ErrorBoundary from "../components/ErrorBoundary";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

interface BasicLayoutProps {
  title: string;
  description: string;
}

const BasicLayout: FC<BasicLayoutProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <Provider
      theme={defaultTheme}
      defaultColorScheme="dark"
      colorScheme="dark"
      height="100vh"
      position="relative"
    >
      <GlobalStyle />
      <Helmet defer={false}>
        <title>{title}</title>
        <html lang="en"></html>
        <meta name="description" content={description} />
      </Helmet>
      <ErrorBoundary>{children}</ErrorBoundary>
    </Provider>
  );
};

export default BasicLayout;
