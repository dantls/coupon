import { FlatList } from "react-native";

import { Category } from "../category";

export type CategoriesProps = {
  id: string;
  name: string;
}[];

type Props = {
  data: CategoriesProps;
};

export const Categories = ({ data }: Props) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <Category isSelected name={item.name} iconId={item.id} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: 8,
        paddingHorizontal: 24,
      }}
      style={{ maxHeight: 36, position: "absolute", zIndex: 1, top: 64 }}
    />
  );
};
