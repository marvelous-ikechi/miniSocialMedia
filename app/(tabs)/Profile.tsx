import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import useUser from "@/hooks/useUser";
import CustomText from "@/components/CustomText";
import ScreenContainer from "@/components/ScreenContainer";
import tw from "@/lib/tailwind";

export default function TabTwoScreen() {
  const { user } = useUser();
  return (
    <ScreenContainer>
      <View style={tw`flex-1 items-center justify-center`}>
        <CustomText style={tw`text-xl text-center`}>
          About me {"\n"}
          <CustomText>({user?.email})</CustomText>
        </CustomText>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
