import CustomTextInput from "@/components/CustomTextInput";
import ScreenContainer from "@/components/ScreenContainer";
import tw from "@/lib/tailwind";
import React, { FunctionComponent, useCallback, useState } from "react";
import { Pressable, View } from "react-native";
import CustomBtn from "@/components/CustomBtn";
import CustomText from "@/components/CustomText";
import "@/firebaseConfig";
import { router } from "expo-router";
import useAuth, { SignupParams } from "@/hooks/useAuth";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

const Signup: FunctionComponent = () => {
  const { loading, error, signup } = useAuth();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<SignupParams>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SignupParams> = (data) => signup(data);

  return (
    <ScreenContainer>
      <View style={tw`flex-1 px-3 `}>
        <View style={tw`flex-1 items-center  justify-center w-full`}>
          <CustomText style={tw`text-lg w-full font-bold text-left`}>
            Register
          </CustomText>
          <Controller
            control={control}
            rules={{
              required: true,
              minLength: {
                value: 3,
                message: "First name must be at least 3 characters",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                onChangeText={onChange}
                placeholder="First Name"
                value={value}
                onBlur={onBlur}
              />
            )}
            name="firstName"
          />
          {errors?.firstName && (
            <CustomText style={tw`text-red-600 -mt-2 text-left w-full`}>
              {errors.firstName.message}
            </CustomText>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
              minLength: {
                value: 3,
                message: "Last name must be at least 3 characters",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                onChangeText={onChange}
                placeholder="Last Name"
                value={value}
                onBlur={onBlur}
              />
            )}
            name="lastName"
          />
          {errors?.lastName && (
            <CustomText style={tw`text-red-600 -mt-2 text-left w-full`}>
              {errors.lastName.message}
            </CustomText>
          )}

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
              minLength: 6,
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
