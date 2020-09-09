import React from "react";
import PagetransitionLayout from "./src/layouts/PagetransitionLayout";

export const wrapPageElement = ({ element, props }) => {
  return <PagetransitionLayout {...props}>{element}</PagetransitionLayout>;
};
