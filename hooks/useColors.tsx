import Colors from "@/constants/Colors";
import { useColorScheme } from "react-native";

const useColors = () => {
  const colorScheme = useColorScheme();
  const textColor = Colors[colorScheme ?? "light"].text.toString();
  const borderColor = Colors[colorScheme ?? "light"].borderColor.toString();
  return {
    textColor,
    borderColor,
  };
};

export default useColors;
