import CustomTextInput from "@/components/CustomTextInput";
import ScreenContainer from "@/components/ScreenContainer";
import tw from "@/lib/tailwind";
import React, { FunctionComponent } from "react";
import { Pressable, View } from "react-native";
import useColors from "@/hooks/useColors";
import CustomBtn from "@/components/CustomBtn";
import CustomText from "@/components/CustomText";

const Login: FunctionComponent = () => {
  const { textColor } = useColors();
  return (
    <ScreenContainer>
      <View style={tw`flex-1 px-3 `}>
        <View style={tw`flex-1 items-center  justify-center w-full`}>
          <CustomTextInput placeholder="Email" placeholderTextColor={"black"} />
          <CustomTextInput
            placeholder="Password"
            placeholderTextColor={"black"}
            secureTextEntry
          />
          <CustomBtn title="Submit" style={tw`mt-5`} titleColor={"white"} />
          <Pressable style={tw`w-full mt-3 items-end justify-end`}>
            <CustomText>Signup instead</CustomText>
          </Pressable>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Login;
