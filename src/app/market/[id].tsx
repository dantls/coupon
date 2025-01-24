import { View, Text, Alert, Modal } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { api } from "@/services/api";
import { useEffect, useRef, useState } from "react";
import { useCameraPermissions, CameraView } from "expo-camera";
import { Button } from "@/components/button";


export default function Market() {
  const params = useLocalSearchParams<{ id: string }>();
  const [coupon, setCoupon] = useState<string | null>();
  const [couponIsFetching, setCouponIsFetching] = useState(false); 
  const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false);
  const [_, requestPermission] = useCameraPermissions();
  const qrLock = useRef(false);

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

  function handleUseCoupon(id: string) {
    setIsVisibleCameraModal(false);
    Alert.alert(
      "Coupon",
      "Redeemed coupon cannot be reused. Do you really want to redeem the coupon?",
      [
        {
          style: "cancel",
          text: "No",
        },
        {
          text: "Yes",
          onPress: () => getCoupon(id),
        },
      ]
    );
  }

  async function handleOpenCamera() {
    try {
      const { granted } = await requestPermission();

      if (!granted) {
        return Alert.alert("Camera", "We need to access the camera");
      }

      qrLock.current = false;
      setIsVisibleCameraModal(true);
    } catch (error) {
      console.log(error);
      Alert.alert("Camera", "It doesn`t possible to access the camera");
    }
  }

  useEffect(() => {
    fetchMarket();
  }, [params.id]);

  return (
    <View className="flex-1 justify-center items-center">
      <Text>{params.id}</Text>

      <Modal style={{ flex: 1 }} visible={isVisibleCameraModal}>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={({ data }) => {
            if (data && !qrLock.current) {
              qrLock.current = true;
              setTimeout(() => handleUseCoupon(data), 500);
            }
          }}
        />
        <View style={{ position: "absolute", bottom: 32, left: 32, right: 32 }}>
          <Button
            onPress={() => setIsVisibleCameraModal(false)}
            isLoading={couponIsFetching}
          >
            <Button.Title>Back</Button.Title>
          </Button>
        </View>
    </View>
  );
}
