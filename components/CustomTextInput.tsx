import useColors from "@/hooks/useColors";
import tw from "@/lib/tailwind";
import React, { FunctionComponent } from "react";
import { TextInput, TextInputProps, View } from "react-native";

interface Props extends TextInputProps {}

const CustomTextInput: FunctionComponent<Props> = ({
  placeholderTextColor,
  ...props
}) => {
  const { borderColor, textColor } = useColors();
  return (
    <View
      style={[
        tw`border w-full h-12 my-3 rounded p-3 justify-center`,
        { borderColor: borderColor },
      ]}
    >
      <TextInput
        placeholderTextColor={textColor}
        style={[
          props.style,
          {
            fontFamily: "SpaceMono",
          },
        ]}
        {...props}
      />
    </View>
  );
};

export default CustomTextInput;
