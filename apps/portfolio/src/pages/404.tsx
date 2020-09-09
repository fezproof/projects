import React, { FC } from "react";
import BasicLayout from "../layouts/BasicLayout";

import NotFound from "@spectrum-icons/illustrations/NotFound";
import Centeriser from "../components/Centeriser";

const PageNotFound: FC = () => {
  return (
    <BasicLayout
      title="No page found"
      description="This page was not found. Try visting another page on this site to find out more about ben chidlow"
    >
      <Centeriser>
        <main>
          <NotFound />
          <h1>Error 404: Page not found</h1>
          <div>
            This page isn't available. Try checking the URL or visit a different
            page.
          </div>
        </main>
      </Centeriser>
    </BasicLayout>
  );
};

export default PageNotFound;
