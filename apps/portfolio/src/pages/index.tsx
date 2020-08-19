import React, { FC, useEffect } from "react";
import BasicLayout from "../layouts/BasicLayout";
import { View, Grid, Header, Heading } from "@adobe/react-spectrum";

const Index: FC = () => {
  return (
    <BasicLayout title="Home">
      <Grid
        areas={["header  header", "sidebar content", "footer  footer"]}
        columns={["1fr", "3fr"]}
        rows={["size-1000", "auto", "size-1000"]}
        height="100%"
        gap="size-100"
      >
        <View backgroundColor="celery-400" gridArea="header">
          <Header>
            <Heading level={1}>Ben Chidlow</Heading>
          </Header>
        </View>
        <View backgroundColor="blue-400" gridArea="sidebar" />
        <View backgroundColor="purple-400" gridArea="content" />
        <View backgroundColor="magenta-400" gridArea="footer" />
      </Grid>
    </BasicLayout>
  );
};

export default Index;
