import React, { FunctionComponent } from "react";
import { SafeAreaView, View } from "react-native";
import { useColorScheme } from "./useColorScheme";
import tw from "@/lib/tailwind";
import Colors from "@/constants/Colors";

interface Props {
  children: React.ReactNode;
}

const ScreenContainer: FunctionComponent<Props> = ({ children }) => {
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? "light"].background.toString();
  return (
    <SafeAreaView style={tw`bg-${backgroundColor}`}>{children}</SafeAreaView>
  );
};

export default ScreenContainer;
