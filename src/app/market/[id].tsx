import { View, Text, Alert } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { api } from "@/services/api";
import { useEffect, useState } from "react";

export default function Market() {
  const params = useLocalSearchParams<{ id: string }>();
  const [coupon, setCoupon] = useState<string | null>();
  const [couponIsFetching, setCouponIsFetching] = useState(false);

  async function fetchMarket() {
    try {
      const { data } = await api.get(`/markets/${params.id}`);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Could not load data");
    }
  }
  async function getCoupon(id: string) {
    try {
      setCouponIsFetching(true);
      const { data } = await api.patch("/coupons/" + id);
      Alert.alert("Coupom", data.coupon);
      setCoupon(data.coupon);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Could not load data");
    } finally {
      setCouponIsFetching(false);
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
