import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import ErrorBoundary from "../components/ErrorBoundary";
import { Link } from "gatsby";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;
    background-color: #282828;
    color: #ffffff;
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
    <div>
      <GlobalStyle />
      <Helmet defer={false}>
        <title>{title}</title>
        <html lang="en"></html>
        <meta name="description" content={description} />
      </Helmet>
      <Link to="/">Home</Link>
      <Link to="/inspo">Inspo</Link>
      <ErrorBoundary>{children}</ErrorBoundary>
    </div>
  );
};

export default BasicLayout;
