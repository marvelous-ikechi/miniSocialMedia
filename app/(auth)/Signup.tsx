import CustomTextInput from "@/components/CustomTextInput";
import ScreenContainer from "@/components/ScreenContainer";
import tw from "@/lib/tailwind";
import React, { FunctionComponent, useCallback, useState } from "react";
import { Pressable, View } from "react-native";
import CustomBtn from "@/components/CustomBtn";
import CustomText from "@/components/CustomText";
import "@/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { router } from "expo-router";
import useAuth from "@/hooks/useAuth";

const Signup: FunctionComponent = () => {
  const auth = getAuth();
  const { loading, error, signup } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleError = useCallback(() => {
    if (
      email.length === 0 ||
      password.length < 5 ||
      firstName.length === 0 ||
      lastName.length === 0
    ) {
      setIsDisabled(true);
      return true;
    } else {
      setIsDisabled(false);
      return false;
    }
  }, [email, password, firstName, lastName]);

  const handleSubmit = () => {
    const hasError = handleError();
    hasError
      ? null
      : signup({
          email,
          password,
          firstName,
          lastName,
        });
  };

  return (
    <ScreenContainer>
      <View style={tw`flex-1 px-3 `}>
        <View style={tw`flex-1 items-center  justify-center w-full`}>
          <CustomText style={tw`text-lg w-full font-bold text-left`}>
            Register
          </CustomText>
          <CustomTextInput
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <CustomTextInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />

          <CustomTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <CustomTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <CustomBtn
            isLoading={loading}
            onPress={() => handleSubmit()}
            title="Submit"
            style={tw`mt-5`}
            titleColor={"white"}
            disabled={isDisabled}
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
