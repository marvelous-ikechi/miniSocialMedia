import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import tw from "@/lib/tailwind";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={tw`flex-1 items-center justify-center`}>
        <Text>This screen doesn't exist.</Text>

        <Link href="/">
          <Text style={tw``}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
