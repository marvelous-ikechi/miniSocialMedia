import {
  Pressable,
  TextInput,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import tw from "@/lib/tailwind";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import firestore from "firebase/firestore";
import useColors from "@/hooks/useColors";
import ScreenContainer from "@/components/ScreenContainer";
import CustomText from "@/components/CustomText";
import useMessaging from "@/hooks/useMessaging";
import { useState } from "react";

export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  const { sendMessage } = useMessaging();

  const { backgroundColor, borderColor } = useColors();
  const [message, setMessage] = useState<string>("");
  return (
    <ScreenContainer>
      <View style={tw`flex-1 mx-3 `}>
        <View style={tw`flex-1  justify-end `}>
          <View style={tw` flex-row items-center mb-8 justify-between`}>
            <TextInput
              style={tw`border h-12 p-3 w-3/4 rounded  border-[${borderColor}]`}
              placeholder="your messge"
              value={message}
              onChangeText={setMessage}
            />
            <TouchableOpacity
              onPress={() => sendMessage(message)}
              style={tw`bg-black h-12 items-center justify-center rounded w-1/5`}
            >
              <CustomText style={tw`text-white text-base`}>send</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </ScreenContainer>
  );
}
