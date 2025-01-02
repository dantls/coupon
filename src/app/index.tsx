import { Welcome } from "@/components/welcome";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 p-10 gap-10">
      <StatusBar style="auto" />
      <Welcome />
    </View>
  );
}
