import React, { FunctionComponent } from "react";
import { TextInput, TextInputProps, View } from "react-native";

interface Props extends TextInputProps {}

const CustomTextInput: FunctionComponent<Props> = ({ ...props }) => {
  return (
    <View>
      <TextInput {...props} />
    </View>
  );
};

export default CustomTextInput;
