import CustomTextInput from "@/components/CustomTextInput";
import ScreenContainer from "@/components/ScreenContainer";
import tw from "@/lib/tailwind";
import React, { FunctionComponent } from "react";
import { View } from "react-native";
import useColors from "@/hooks/useColors";

const Login: FunctionComponent = () => {
  const { textColor } = useColors();
  return (
    <ScreenContainer>
      <View style={tw`flex-1 px-3 items-center  justify-center`}>
        <CustomTextInput placeholder="Email" placeholderTextColor={"black"} />
        <CustomTextInput
          placeholder="Password"
          placeholderTextColor={"black"}
          secureTextEntry
        />
      </View>
    </ScreenContainer>
  );
};

export default Login;
