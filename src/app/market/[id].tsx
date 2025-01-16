import { View, Text, Alert } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { api } from "@/services/api";
import { useEffect } from "react";

export default function Market() {
  const params = useLocalSearchParams<{ id: string }>();

  async function fetchMarket() {
    try {
      const { data } = await api.get(`/markets/${params.id}`);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Could not load data");
    }
  }

  useEffect(() => {
    fetchMarket();
  }, [params.id]);

  return (
    <View className="flex-1 justify-center items-center">
      <Text>{params.id}</Text>
    </View>
  );
}
