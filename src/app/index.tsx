import { Button } from "@/components/button";
import { Steps } from "@/components/steps";
import { Welcome } from "@/components/welcome";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 p-10 gap-10">
      <StatusBar style="auto" />
      <Welcome />
      <Steps />
      <Button onPress={() => router.navigate("/home")}>
        <Button.Title>Start</Button.Title>
      </Button>
    </View>
  );
}
