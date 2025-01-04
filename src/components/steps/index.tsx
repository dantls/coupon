import { Text, View } from "react-native";
import { Step } from "../step";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

export function Steps() {
  return (
    <View className="gap-6 flex-1">
      <Text className="color-gray-600 font-regular text-base">
        Here's how it works:
      </Text>

      <Step
        icon={IconMapPin}
        title="Find Establishments:"
        description="See places near you that are partners"
      />

      <Step
        icon={IconQrcode}
        title="Activate the coupon with QR code"
        description="Scan the code at the establishment to use the benefit"
      />
      <Step
        icon={IconTicket}
        title="Get benefits near you"
        description="Activate coupons wherever you are in different types of establishments"
      />
    </View>
  );
}
