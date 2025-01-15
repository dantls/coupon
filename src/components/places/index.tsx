import { Text, useWindowDimensions } from "react-native";
import { Place, PlaceProps } from "../place";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { colors } from "@/styles/colors";
import { router } from "expo-router";

type Props = {
  data: PlaceProps[];
};

export function Places({ data }: Props) {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = {
    min: 278,
    max: dimensions.height - 128,
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      enableOverDrag={false}
      handleIndicatorStyle={{
        width: 80,
        height: 4,
        backgroundColor: colors.gray[300],
      }}
      backgroundStyle={{ backgroundColor: colors.gray[100] }}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Place
            data={item}
            onPress={() => router.navigate(`/market/${item.id}`)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 12,
          padding: 24,
        }}
        ListHeaderComponent={() => (
          <Text className="text-gray-600 font-regular text-base mb-4">
            Explore places near you
          </Text>
        )}
      />
    </BottomSheet>
  );
}
