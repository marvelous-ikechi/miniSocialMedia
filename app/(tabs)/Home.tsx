import { useColorScheme } from "react-native";
import tw from "@/lib/tailwind";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";

export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? "light"].background.toString();
  return (
    <View style={tw`bg-[${backgroundColor}] flex-1`}>
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}
