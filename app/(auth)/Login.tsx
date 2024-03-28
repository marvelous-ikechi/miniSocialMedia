import CustomTextInput from "@/components/CustomTextInput";
import ScreenContainer from "@/components/ScreenContainer";
import tw from "@/lib/tailwind";
import React, { FunctionComponent, useState } from "react";
import { Pressable, View } from "react-native";
import CustomBtn from "@/components/CustomBtn";
import CustomText from "@/components/CustomText";
import { router } from "expo-router";
import useAuth, { LoginParams } from "@/hooks/useAuth";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

const Login: FunctionComponent = () => {
  const { loading, login, error } = useAuth();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<LoginParams>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginParams> = (data) => login(data);

  return (
    <ScreenContainer>
      <View style={tw`flex-1 px-3 `}>
        <View style={tw`flex-1 items-center  justify-center w-full`}>
          <CustomText style={tw`text-lg w-full font-bold text-left`}>
            Login
          </CustomText>
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                onChangeText={onChange}
                value={value}
                placeholder="Email"
                onBlur={onBlur}
              />
            )}
            name="email"
          />
          {errors?.email && (
            <CustomText style={tw`text-red-600 -mt-2 text-left w-full`}>
              {errors.email.message}
            </CustomText>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                onChangeText={onChange}
                placeholder="Password"
                secureTextEntry
                value={value}
                onBlur={onBlur}
              />
            )}
            name="password"
          />
          {errors?.password && (
            <CustomText style={tw`text-red-600 -mt-2 text-left w-full`}>
              {errors.password.message}
            </CustomText>
          )}
          <CustomBtn
            onPress={handleSubmit(onSubmit)}
            title="Submit"
            style={tw`mt-5`}
            titleColor={"white"}
            isLoading={loading}
            disabled={!isValid}
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
