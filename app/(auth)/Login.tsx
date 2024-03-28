import CustomTextInput from "@/components/CustomTextInput";
import ScreenContainer from "@/components/ScreenContainer";
import tw from "@/lib/tailwind";
import React, { FunctionComponent, useState } from "react";
import { Pressable, View } from "react-native";
import CustomBtn from "@/components/CustomBtn";
import CustomText from "@/components/CustomText";
import { router } from "expo-router";
import useAuth from "@/hooks/useAuth";

const Login: FunctionComponent = () => {
  const { loading, login, error } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    login({
      email,
      password,
    });
  };
  return (
    <ScreenContainer>
      <View style={tw`flex-1 px-3 `}>
        <View style={tw`flex-1 items-center  justify-center w-full`}>
          <CustomText style={tw`text-lg w-full font-bold text-left`}>
            Login
          </CustomText>
          <CustomTextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
          <CustomTextInput
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            value={password}
          />
          <CustomBtn
            onPress={handleSubmit}
            title="Submit"
            style={tw`mt-5`}
            titleColor={"white"}
            isLoading={loading}
          />
          <Pressable
            onPress={() => router.navigate("/(auth)/Signup")}
            style={tw`w-full mt-3 items-end justify-end`}
          >
            <CustomText>Signup instead</CustomText>
          </Pressable>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Login;
