import React, { FC } from "react";
import BasicLayout from "../layouts/BasicLayout";

const Index: FC = () => {
  return (
    <BasicLayout
      title="Home"
      description="Ben Chidlow is an aspiring full stack developer based in Perth Western Australia"
    >
      <h1>This is a page</h1>
    </BasicLayout>
  );
};

export default Index;
