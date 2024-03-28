import CustomText from "@/components/CustomText";
import ScreenContainer from "@/components/ScreenContainer";
import useUser from "@/hooks/useUser";
import tw from "@/lib/tailwind";
import { ActivityIndicator, Pressable, View } from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

export default function Root() {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(true); // Start with isLoading as true
  const router = useRouter();

  useEffect(() => {
    // Set a timeout to wait for 2 seconds
    const timeoutId = setTimeout(() => {
      if (user) {
        router.navigate("/Home"); // Navigate to the home screen if the user is authenticated
      }
      setIsLoading(false); // Stop showing the loading indicator
    }, 2000);

    return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts
  }, [user, router]);

  return (
    <ScreenContainer>
      <View style={tw`flex-1 items-center justify-center`}>
        <CustomText style={tw`font-semibold text-lg mb-8`}>Welcome</CustomText>
        {isLoading ? (
          <ActivityIndicator color={"#9747FF"} />
        ) : (
          <Pressable
            style={tw`bg-purple p-3 rounded-md`}
            onPress={() => {
              setIsLoading(true);
              router.navigate("/(auth)/Login"); // Navigate to Login screen
            }}
          >
            <CustomText style={tw`font-semibold text-lg text-white`}>
              Continue
            </CustomText>
          </Pressable>
        )}
      </View>
    </ScreenContainer>
  );
}
