import React, { FC } from "react";
import BasicLayout from "../layouts/BasicLayout";
import {
  Flex,
  IllustratedMessage,
  Heading,
  Content,
} from "@adobe/react-spectrum";
import NotFound from "@spectrum-icons/illustrations/NotFound";

const PageNotFound: FC = () => {
  return (
    <BasicLayout
      title="No page found"
      description="This page was not found. Try visting another page on this site to find out more about ben chidlow"
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <IllustratedMessage>
          <NotFound />
          <Heading>Error 404: Page not found</Heading>
          <Content>
            This page isn't available. Try checking the URL or visit a different
            page.
          </Content>
        </IllustratedMessage>
      </Flex>
    </BasicLayout>
  );
};

export default PageNotFound;
