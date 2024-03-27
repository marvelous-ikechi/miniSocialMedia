import React, { FunctionComponent } from "react";
import { Stack } from "expo-router";
import { AuthStackParamList } from "../types/AuthStackParamList";

interface Screen {
  name: keyof AuthStackParamList;
}

const screens: Screen[] = [
  {
    name: "Login",
  },
];

const AuthLayout: FunctionComponent = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {screens.map((screen) => (
        <Stack.Screen key={screen.name} name={screen.name} />
      ))}
    </Stack>
  );
};

export default AuthLayout;
