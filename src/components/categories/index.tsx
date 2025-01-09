import { FlatList } from "react-native";

import { Category } from "../category";

export type CategoriesProps = {
  id: string;
  name: string;
}[];

type Props = {
  data: CategoriesProps;
  selected: string;
  onSelect: (id: string) => void;
};

export const Categories = ({ data, selected, onSelect }: Props) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <Category
          isSelected={item.id === selected}
          name={item.name}
          iconId={item.id}
          onPress={() => onSelect(item.id)}
        />
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
