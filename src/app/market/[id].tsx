import { View, Text, Alert, Modal, ScrollView, StatusBar } from "react-native";
import { Redirect, useLocalSearchParams } from "expo-router";
import { api } from "@/services/api";
import { useEffect, useRef, useState } from "react";
import { useCameraPermissions, CameraView } from "expo-camera";
import { Button } from "@/components/button";
import { Cover } from "./cover";
import { Details, PropsDetails } from "./details";
import { Coupon } from "./coupon";
import { Loading } from "@/components/loading";

type DataProps = PropsDetails & {
  cover: string;
};

export default function Market() {
  const [data, setData] = useState<DataProps>();
  const params = useLocalSearchParams<{ id: string }>();
  const [coupon, setCoupon] = useState<string | null>();
  const [couponIsFetching, setCouponIsFetching] = useState(false);
  const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false);
  const [_, requestPermission] = useCameraPermissions();
  const qrLock = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
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

  if (isLoading) return <Loading />;

  if (!data) {
    return <Redirect href="/home" />;
  }

  return (
    <View className="flex-1 justify-center items-center">
      <StatusBar barStyle={"light-content"} hidden={false} />

      <ScrollView showsHorizontalScrollIndicator={false}>
        <Cover uri={data.cover} />
        <Details data={data} />
        {coupon && <Coupon code={coupon} />}
      </ScrollView>

      <View style={{ padding: 32 }}>
        <Button onPress={() => handleOpenCamera()}>
          <Button.Title>Ler QR Code</Button.Title>
        </Button>
      </View>

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
      </Modal>
    </View>
  );
}
