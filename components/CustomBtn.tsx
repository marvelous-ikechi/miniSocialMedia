import React, { FunctionComponent } from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import tw from "@/lib/tailwind";

interface Props extends TouchableOpacityProps {
  title: string;
  titleColor: string;
}

const CustomBtn: FunctionComponent<Props> = ({
  titleColor,
  title,
  ...props
}) => {
  const colorScheme = useColorScheme();
  titleColor = Colors[colorScheme ?? "light"].text.toString();
  return (
    <TouchableOpacity {...props}>
      <Text style={tw`text-titleColor`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;
