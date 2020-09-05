import React, { FC, useEffect } from "react";
import BasicLayout from "../layouts/BasicLayout";
import { View, Grid, Header, Heading, Footer } from "@adobe/react-spectrum";

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
        <View borderWidth="thin" borderColor="celery-400" gridArea="header">
          <Header>
            <Heading level={1}>Ben Chidlow</Heading>
          </Header>
        </View>
        <View borderWidth="thin" borderColor="blue-400" gridArea="sidebar">
          <nav>This is a nav</nav>
        </View>
        <View borderWidth="thin" borderColor="purple-400" gridArea="content">
          <main>This is a main</main>
        </View>
        <View borderWidth="thin" borderColor="magenta-400" gridArea="footer">
          <Footer>This is a footer</Footer>
        </View>
      </Grid>
    </BasicLayout>
  );
};

export default Index;
