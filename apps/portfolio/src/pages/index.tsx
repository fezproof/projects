import React, { FC } from "react";
import BasicLayout from "../layouts/BasicLayout";
import { Flex, View } from "@adobe/react-spectrum";

const Index: FC = () => {
  return (
    <BasicLayout title="Home">
      <Flex direction="column" width="size-2000" gap="size-100">
        <View>this is a thing</View>
        <View>this is a thing</View>
        <View>this is a thing</View>
        <View>this is a thing</View>
      </Flex>
    </BasicLayout>
  );
};

export default Index;
