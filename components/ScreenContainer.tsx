import React, { FunctionComponent } from "react";
import { SafeAreaView } from "react-native";
import tw from "@/lib/tailwind";
import useColors from "@/hooks/useColors";

interface Props {
  children: React.ReactNode;
}

const ScreenContainer: FunctionComponent<Props> = ({ children }) => {
  const { backgroundColor } = useColors();
  return (
    <SafeAreaView style={tw`flex-1 bg-[${backgroundColor}]`}>
      {children}
    </SafeAreaView>
  );
};

export default ScreenContainer;
