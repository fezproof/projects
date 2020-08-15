import React, { FC } from "react";
import { Helmet } from "react-helmet";

interface BasicLayoutProps {
  title: string;
}

const BasicLayout: FC<BasicLayoutProps> = ({ children, title }) => {
  return (
    <div>
      <Helmet defer={false}>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
};

export default BasicLayout;
