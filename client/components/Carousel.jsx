import React, { useState } from "react";
import { View, StyleSheet, FlatList, Image, Dimensions } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

const SRC_WIDTH = Dimensions.get("window").width;
const CARD_LENGTH = SRC_WIDTH * 0.6;
const SPACING = SRC_WIDTH * 0.0;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.07) / 1;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface ItemProps {
  index: number;
  scrollX: Animated.SharedValue<number>;
}

function Item({ index, scrollX }: ItemProps) {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [
        (index - 1) * (CARD_LENGTH + SPACING),
        index * (CARD_LENGTH + SPACING),
        (index + 1) * (CARD_LENGTH + SPACING),
      ],
      [0.7, 1, 0.7],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale }],
    };
  });

  return (
    <Animated.View
      style={[
        styles.card,
        animatedStyle,
        {
          marginLeft: index === 0 ? SIDECARD_LENGTH : SPACING,
          marginRight: index === DATA.length - 1 ? SIDECARD_LENGTH : SPACING,
        },
      ]}
    >
      <Image
        source={require("../assets/images/Card.png")}
        style={{ width: "100%", height: "100%" }}
      />
    </Animated.View>
  );
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

export default function Carousel() {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  return (
    <Animated.View style={styles.container}>
      <AnimatedFlatList
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={CARD_LENGTH + SPACING}
        contentContainerStyle={{ paddingHorizontal: SIDECARD_LENGTH }}
        data={DATA}
        horizontal
        renderItem={({ item, index }) => {
          return <Item index={index} scrollX={scrollX} />;
        }}
        keyExtractor={(item) => item.id}
        onScroll={scrollHandler}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: CARD_LENGTH,
    height: "47.1%",
    overflow: "hidden",
    borderRadius: 37,
  },
});
