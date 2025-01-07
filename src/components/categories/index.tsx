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
      renderItem={({ item }) => <Category name={item.name} iconId={item.id} />}
    />
  );
};
