import CustomText from "@/components/CustomText";
import ScreenContainer from "@/components/ScreenContainer";
import tw from "@/lib/tailwind";
import { Link, Stack, router } from "expo-router";
import { Pressable, View } from "react-native";

export default function Root() {
  return (
    <ScreenContainer>
      <View style={tw`flex-1 items-center justify-center`}>
        <Pressable onPress={() => router.navigate("/(auth)/Login")}>
          <CustomText style={tw`font-semibold text-lg`}>Welcome</CustomText>
        </Pressable>
      </View>
    </ScreenContainer>
  );
}
