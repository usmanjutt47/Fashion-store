import { AntDesign, Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

const SRC_WIDTH = Dimensions.get("window").width;
const CARD_LENGTH = SRC_WIDTH * 0.9;
const SPACING = SRC_WIDTH * 0.0;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.0) / 2;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface ItemProps {
  index: number;
  scrollX: Animated.SharedValue<number>;
  item: { title: string, category: string, image: any, price?: string };
}

function Item({ index, scrollX, item }: ItemProps) {
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
      <Image source={item.image} style={styles.image} />
      <View style={styles.overlay}>
        <View>
          <Text style={[styles.text, { color: "#fff", fontWeight: "bold" }]}>
            {item.title}
          </Text>
          {item.price && (
            <Text
              style={[styles.text, { color: "#b5c5c7", fontWeight: "medium" }]}
            >
              {item.category}
            </Text>
          )}
        </View>
        <View style={{ flexDirection: "row" }}>
          <BlurView
            style={{
              width: 41,
              height: 41,
              justifyContent: "center",
              borderRadius: 26,
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "#b5c5c7",
            }}
            intensity={100}
          >
            <Pressable>
              <AntDesign
                name="heart"
                color="#fff"
                size={20}
                style={{ alignSelf: "center" }}
              />
            </Pressable>
          </BlurView>
          <BlurView
            style={{
              width: 68,
              height: 41,
              justifyContent: "center",
              borderRadius: 26,
              overflow: "hidden",
              marginLeft: "5%",
              borderWidth: 1,
              borderColor: "#b5c5c7",
            }}
            intensity={100}
          >
            <Pressable>
              <Text
                style={{
                  letterSpacing: 0.5,
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                {item.price}
              </Text>
            </Pressable>
          </BlurView>
        </View>
      </View>
    </Animated.View>
  );
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Flex Shirt Cream",
    category: "T-shirt",
    image: require("../assets/images/Card.png"),
    price: "$299",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Flex Shirt Blue",
    category: "T-shirt",
    image: require("../assets/images/category2.png"),
    price: "$199",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Flex Shirt Green",
    category: "T-shirt",
    image: require("../assets/images/category1.png"),
    price: "$499",
  },
];

export default function Carousel() {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  return (
    <View style={styles.container}>
      <AnimatedFlatList
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={CARD_LENGTH + SPACING}
        contentContainerStyle={{ paddingHorizontal: SIDECARD_LENGTH }}
        data={DATA}
        horizontal
        renderItem={({ item, index }) => {
          return <Item index={index} scrollX={scrollX} item={item} />;
        }}
        keyExtractor={(item) => item.id}
        onScroll={scrollHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: CARD_LENGTH * 1.5,
  },
  card: {
    width: CARD_LENGTH,
    height: CARD_LENGTH * 1.5,
    overflow: "hidden",
    borderRadius: 37,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: "5%",
    right: "5%",
    top: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  text: {
    color: "white",
    fontSize: 18,
  },
});
