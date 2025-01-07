import { categoriesIcons } from "@/utils/categories-icons";
import { Text, Pressable, PressableProps } from "react-native";
type Props = PressableProps & {
  iconId: string;
  isSelected?: boolean;
  name: string;
};
export const Category = ({ name, iconId, isSelected = false }: Props) => {
  const Icon = categoriesIcons[iconId];

  return (
    <Pressable>
      <Icon size={16} />
      <Text className="">{name}</Text>
    </Pressable>
  );
};
