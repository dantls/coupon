import { Image, Text, View } from "react-native";

export function Welcome() {
  return (
    <View className="gap-6">
      <Image source={require("@/assets/logo.png")} className="size-12" />
      <Text className="color-gray-600 font-bold text-2xl">
        Welcome to Nearby!
      </Text>
      <Text>Get advantage coupons to use at your favorite places.</Text>
    </View>
  );
}
