import Colors from "@/constants/Colors";
import { useColorScheme } from "react-native";

const useColors = () => {
  const colorScheme = useColorScheme();
  const textColor = Colors[colorScheme ?? "light"].text;
  const borderColor = Colors[colorScheme ?? "light"].borderColor;
  const backgroundColor = Colors[colorScheme ?? "light"].background;
  return {
    textColor,
    borderColor,
    backgroundColor,
  };
};

export default useColors;
