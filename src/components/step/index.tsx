import { Text, View } from "react-native";
import { IconProps } from "@tabler/icons-react-native";

type Props = {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
};

export function Step({ title, description, icon: Icon }: Props) {
  return (
    <View className="w-full flex-row gap-4">
      {Icon && <Icon size={32} className="color-red-base" />}
      <View className="flex-1">
        <Text className="color-gray-600 font-semiBold text-base">{title}</Text>
        <Text className="color-gray-500 font-regular text-sm mt-1">
          {description}
        </Text>
      </View>
    </View>
  );
}
