import { colors } from "@/styles/colors";
import { IconTicket } from "@tabler/icons-react-native";
import {
  Image,
  Text,
  View,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native";

export type PlaceProps = {
  id: string;
  name: string;
  description: string;
  coupons: number;
  cover: string;
  address: string;
};

type Props = TouchableOpacityProps & {
  data: PlaceProps;
};

export function Place({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      className="h-30 w-full rounded-xl border border-gray-200 bg-gray-100 gap-4 p-3 flex-row items-center"
    >
      <Image
        className="h-[104px] w-[116px] rounded-xl bg-gray-200 "
        source={{ uri: data.cover }}
      />
      <View className="gap-2 flex-1">
        <Text className="text-sm font-semiBold">{data.name}</Text>
        <Text className="text-xs font-regular" numberOfLines={2}>
          {data.description}
        </Text>

        <View className="flex-row items-center gap-[6px]">
          <IconTicket size={16} color={colors.red.base} />
          <Text className="text-xs font-regular">
            {data.coupons} coupons availables
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
