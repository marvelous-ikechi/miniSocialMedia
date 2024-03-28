import {
  FlatList,
  ListRenderItem,
  TextInput,
  TouchableOpacity,
} from "react-native";
import tw from "@/lib/tailwind";
import { View } from "@/components/Themed";
import { DocumentData } from "firebase/firestore";
import useColors from "@/hooks/useColors";
import ScreenContainer from "@/components/ScreenContainer";
import CustomText from "@/components/CustomText";
import useMessaging from "@/hooks/useMessaging";
import { useState } from "react";
import CustomBtn from "@/components/CustomBtn";
import useAuth from "@/hooks/useAuth";
import Message from "@/components/Message";

export default function TabOneScreen() {
  const { sendMessage, allMessages } = useMessaging();
  const { logout } = useAuth();

  const { borderColor } = useColors();
  const [message, setMessage] = useState<string>("");

  const renderMessages: ListRenderItem<DocumentData> = ({ item }) => {
    return (
      <Message
        message={item.message}
        sender={item?.sender}
        time={item?.time?.seconds}
      />
    );
  };
  return (
    <ScreenContainer>
      <View style={tw`flex-1 mx-3 `}>
        <CustomBtn
          title="Logout"
          titleColor="white"
          style={tw`w-20 bg-pink-500 self-end mt-4`}
          onPress={logout}
        />
        <View>
          <FlatList data={allMessages} renderItem={renderMessages} />
        </View>
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
