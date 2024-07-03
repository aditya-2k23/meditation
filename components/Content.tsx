import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const Content = ({ children }: any) => {
  return <SafeAreaView className="flex-1 px-5 py-12">{children}</SafeAreaView>;
};

export default Content;
