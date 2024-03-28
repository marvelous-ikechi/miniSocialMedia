import { View } from "@/components/Themed";
import useUser from "@/hooks/useUser";
import CustomText from "@/components/CustomText";
import ScreenContainer from "@/components/ScreenContainer";
import tw from "@/lib/tailwind";
import CustomBtn from "@/components/CustomBtn";
import useAuth from "@/hooks/useAuth";

export default function TabTwoScreen() {
  const { user } = useUser();
  const { logout } = useAuth();
  return (
    <ScreenContainer>
      <View style={tw`flex-1 px-3 items-center justify-center`}>
        <CustomText style={tw`text-xl text-center`}>
          About me {"\n"}
          <CustomText>({user?.email})</CustomText>
        </CustomText>
        <CustomBtn
          title="Logout"
          titleColor="white"
          style={tw`  bg-pink-500  mt-20`}
          onPress={logout}
        />
      </View>
    </ScreenContainer>
  );
}
