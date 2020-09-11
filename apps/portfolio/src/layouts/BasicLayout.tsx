import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import ErrorBoundary from "../components/ErrorBoundary";
import { Link } from "gatsby";
import GlobalTheme from "./GlobalTheme";

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
    <GlobalTheme>
      <Helmet defer={false}>
        <title>{title}</title>
        <html lang="en"></html>
        <meta name="description" content={description} />
      </Helmet>
      <Link to="/">Home</Link>
      <Link to="/inspo">Inspo</Link>
      <ErrorBoundary>{children}</ErrorBoundary>
    </GlobalTheme>
  );
};

export default BasicLayout;
