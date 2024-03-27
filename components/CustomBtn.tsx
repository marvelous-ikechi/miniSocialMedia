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
  ...props
}) => {
  const { textColor } = useColors();
  titleColor = titleColor ?? textColor;

  // Determine the text color class based on titleColor.
  const textColorStyle = tw`text-${titleColor} text-base`;

  return (
    <TouchableOpacity
      style={[
        tw`items-center w-full h-12 justify-center rounded bg-purple`,
        style,
      ]}
      {...props}
    >
      {!isLoading ? (
        <Text style={textColorStyle}>{title}</Text>
      ) : (
        <ActivityIndicator />
      )}
    </TouchableOpacity>
  );
};

export default CustomBtn;
