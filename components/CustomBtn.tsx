import React, { FunctionComponent } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ActivityIndicator,
} from "react-native";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import tw from "@/lib/tailwind";
import useColors from "@/hooks/useColors";

interface Props extends TouchableOpacityProps {
  title: string;
  titleColor: string;
  isLoading?: boolean;
}

const CustomBtn: FunctionComponent<Props> = ({
  titleColor,
  title,
  style,
  isLoading,
  disabled,
  ...props
}) => {
  const { textColor } = useColors();
  titleColor = titleColor ?? textColor;

  // Determine the text color class based on titleColor.
  const textColorStyle = tw`text-${titleColor} text-base`;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        tw`items-center flex-row w-full h-12 justify-center rounded bg-${
          disabled ? "grey" : "purple"
        }`,
        style,
      ]}
      {...props}
    >
      <Text style={textColorStyle}>{title}</Text>
      {isLoading && <ActivityIndicator color={"white"} />}
    </TouchableOpacity>
  );
};

export default CustomBtn;
