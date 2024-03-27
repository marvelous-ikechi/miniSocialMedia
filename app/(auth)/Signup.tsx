import CustomTextInput from "@/components/CustomTextInput";
import ScreenContainer from "@/components/ScreenContainer";
import tw from "@/lib/tailwind";
import React, { FunctionComponent } from "react";
import { Pressable, View } from "react-native";
import CustomBtn from "@/components/CustomBtn";
import CustomText from "@/components/CustomText";
import { router } from "expo-router";

const Signup: FunctionComponent = () => {
  return (
    <ScreenContainer>
      <View style={tw`flex-1 px-3 `}>
        <View style={tw`flex-1 items-center  justify-center w-full`}>
          <CustomText style={tw`text-lg w-full font-bold text-left`}>
            Register
          </CustomText>
          <CustomTextInput placeholder="First Name" />
          <CustomTextInput placeholder="Last Name" />
          <CustomTextInput placeholder="Password" secureTextEntry />
          <CustomTextInput placeholder="Email" />
          <CustomBtn title="Submit" style={tw`mt-5`} titleColor={"white"} />
          <Pressable
            onPress={() => router.navigate("/(auth)/Login")}
            style={tw`w-full mt-3 items-end justify-end`}
          >
            <CustomText>Login instead</CustomText>
          </Pressable>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Signup;
