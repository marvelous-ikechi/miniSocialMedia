import React, { FunctionComponent } from "react";
import { View } from "react-native";
import CustomText from "./CustomText";
import tw from "@/lib/tailwind";
import { DocumentData } from "firebase/firestore";
import { formatDateAndTime } from "@/app/utils/timeFormatter";

const Message: FunctionComponent<DocumentData> = ({
  message,
  sender,
  time,
}) => {
  return (
    <View style={tw`bg-purple mb-3 w-40 rounded-lg py-2 px-2`}>
      <CustomText style={tw`text-white text-[13px]`}>{message}</CustomText>
      <View style={tw`flex-row justify-between`}>
        {sender && (
          <CustomText style={tw`text-black text-xs `}>{sender}</CustomText>
        )}
        {time && (
          <CustomText style={tw`text-black text-xs `}>
            {formatDateAndTime(Number(time))}
          </CustomText>
        )}
      </View>
    </View>
  );
};

export default Message;
