import ScreenContainer from "@/components/ScreenContainer";
import { useColorScheme } from "@/components/useColorScheme";
import tw from "@/lib/tailwind";
import React, { FunctionComponent } from "react";
import { SafeAreaView, View, Text } from "react-native";

const Login: FunctionComponent = () => {
  const colorScheme = useColorScheme();
  return (
    <ScreenContainer>
      <View>
        <Text style={tw``}>Hello there</Text>
      </View>
    </ScreenContainer>
  );
};

export default Login;
