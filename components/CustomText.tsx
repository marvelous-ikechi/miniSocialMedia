import useColors from "@/hooks/useColors";
import tw from "@/lib/tailwind";
import React, { FunctionComponent } from "react";
import { Text, TextProps } from "react-native";

interface Props extends TextProps {
  children: React.ReactNode;
}

const CustomText: FunctionComponent<Props> = ({
  children,
  style,
  ...props
}) => {
  const { textColor } = useColors();
  return (
    <Text {...props} style={[tw`text-[${textColor}] text-sm`, style]}>
      {children}
    </Text>
  );
};

export default CustomText;
