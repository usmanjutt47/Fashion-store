import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../../components/Carousel";
import { BlurView } from "expo-blur";

const buttonData = [
  { key: "All", label: "All", width: 66 },
  { key: "Hoodie", label: "Hoodie", width: 94 },
  { key: "Sweater", label: "Sweater", width: 101 },
  { key: "T-Shirt", label: "T-Shirt", width: 101 },
  { key: "Pants", label: "Pants", width: 101 },
];

export default function Home() {
  const [loaded] = useFonts({
    GolosText: require("../../assets/fonts/GolosText[wght].ttf"),
  });

  const [selected, setSelected] = useState("All");

  if (!loaded) {
    return null;
  }

  const handlePress = (item) => {
    setSelected(item);
  };

  const data = ["All", "Hoodie", "Sweater", "T-Shirt", "Pants"];

  // Render function for FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handlePress(item)}
      style={[
        styles.pressableButton,
        {
          backgroundColor: selected === item ? "#000000" : "#EBF2F4",
          width: item === "All" ? 66 : 94,
          marginHorizontal: 5,
        },
      ]}
    >
      <Text
        style={[
          styles.pressableText,
          {
            color: selected === item ? "#FFFFFF" : "#000000",
          },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={require("../../assets/images/profile.png")}
            style={styles.image}
          />
          <Text style={styles.title}>Elegancia</Text>
          <AntDesign
            name="search1"
            size={25}
            color="black"
            style={styles.icon}
          />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.collectionTitle}>Collection</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.buttonContainer}
        />

        <View style={styles.carouselContainer}>
          <Carousel />
        </View>

        <View style={styles.scrollInnerContainer}>
          <Text style={styles.tShirtText}>Elegance T-shirt</Text>
          <View style={[styles.imageContainer]}>
            <Pressable style={styles.itemContainer}>
              <Image
                source={require("../../assets/images/category1.png")}
                style={styles.itemImage}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemText}>Flex Shirt Cream</Text>
                <Text style={{ color: "#b5c5c7" }}>T-shirt</Text>
              </View>
              <View style={styles.itemBlurContainer}>
                <BlurView
                  style={styles.blurContainer}
                  intensity={50}
                  tint="default"
                  experimentalBlurMethod="dimezisBlurView"
                >
                  <Pressable>
                    <Text style={styles.priceText}>$299</Text>
                  </Pressable>
                </BlurView>
                <BlurView
                  style={{
                    width: 41,
                    height: 41,
                    justifyContent: "center",
                    borderRadius: 36,
                    overflow: "hidden",
                  }}
                  intensity={50}
                  tint="default"
                  experimentalBlurMethod="dimezisBlurView"
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
              </View>
            </Pressable>
            <Pressable style={styles.itemContainer}>
              <Image
                source={require("../../assets/images/category2.png")}
                style={styles.itemImage}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemText}>Flex Shirt Cream</Text>
                <Text style={{ color: "#b5c5c7" }}>T-shirt</Text>
              </View>
              <View style={styles.itemBlurContainer}>
                <BlurView
                  style={styles.blurContainer}
                  intensity={50}
                  tint="default"
                  experimentalBlurMethod="dimezisBlurView"
                >
                  <Pressable>
                    <Text style={styles.priceText}>$299</Text>
                  </Pressable>
                </BlurView>
                <BlurView
                  style={styles.blurView}
                  intensity={50}
                  tint="default"
                  experimentalBlurMethod="dimezisBlurView"
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
              </View>
            </Pressable>
          </View>
          <View style={styles.imageContainer}>
            <Pressable style={styles.itemContainer}>
              <Image
                source={require("../../assets/images/category3.png")}
                style={styles.itemImage}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemText}>Flex Shirt Cream</Text>
                <Text style={{ color: "#b5c5c7" }}>T-shirt</Text>
              </View>
              <View style={styles.itemBlurContainer}>
                <BlurView
                  style={styles.blurContainer}
                  intensity={50}
                  tint="default"
                  experimentalBlurMethod="dimezisBlurView"
                >
                  <Pressable>
                    <Text style={styles.priceText}>$299</Text>
                  </Pressable>
                </BlurView>
                <BlurView
                  style={styles.blurView}
                  intensity={50}
                  tint="default"
                  experimentalBlurMethod="dimezisBlurView"
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
              </View>
            </Pressable>
            <Pressable style={styles.itemContainer}>
              <Image
                source={require("../../assets/images/category4.png")}
                style={styles.itemImage}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemText}>Flex Shirt Cream</Text>
                <Text style={{ color: "#b5c5c7" }}>T-shirt</Text>
              </View>
              <View style={styles.itemBlurContainer}>
                <BlurView
                  style={styles.blurContainer}
                  intensity={50}
                  tint="default"
                  experimentalBlurMethod="dimezisBlurView"
                >
                  <Pressable>
                    <Text style={styles.priceText}>$299</Text>
                  </Pressable>
                </BlurView>
                <BlurView
                  style={styles.blurView}
                  intensity={50}
                  tint="default"
                  experimentalBlurMethod="dimezisBlurView"
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
              </View>
            </Pressable>
          </View>
          <View style={[styles.imageContainer, { marginBottom: "5%" }]}>
            <Pressable style={styles.itemContainer}>
              <Image
                source={require("../../assets/images/category5.png")}
                style={styles.itemImage}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemText}>Flex Shirt Cream</Text>
                <Text style={{ color: "#b5c5c7" }}>T-shirt</Text>
              </View>
              <View style={styles.itemBlurContainer}>
                <BlurView
                  style={styles.blurContainer}
                  intensity={50}
                  tint="default"
                  experimentalBlurMethod="dimezisBlurView"
                >
                  <Pressable>
                    <Text style={styles.priceText}>$299</Text>
                  </Pressable>
                </BlurView>
                <BlurView
                  style={styles.blurView}
                  intensity={50}
                  tint="default"
                  experimentalBlurMethod="dimezisBlurView"
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
              </View>
            </Pressable>
            <Pressable style={styles.itemContainer}>
              <Image
                source={require("../../assets/images/Card.png")}
                style={styles.itemImage}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemText}>Flex Shirt Cream</Text>
                <Text style={{ color: "#b5c5c7" }}>T-shirt</Text>
              </View>
              <View style={styles.itemBlurContainer}>
                <BlurView
                  style={styles.blurContainer}
                  intensity={50}
                  tint="default"
                  experimentalBlurMethod="dimezisBlurView"
                >
                  <Pressable>
                    <Text style={styles.priceText}>$299</Text>
                  </Pressable>
                </BlurView>
                <BlurView
                  style={styles.blurView}
                  intensity={50}
                  tint="default"
                  experimentalBlurMethod="dimezisBlurView"
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
              </View>
            </Pressable>
          </View>
          <View style={[styles.carouselContainer, { marginBottom: "5%" }]}>
            <Carousel />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: "5%",
  },
  header: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    marginTop: 20,
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#000",
    fontFamily: "GolosText",
    letterSpacing: 0.5,
  },
  icon: {
    alignSelf: "center",
    marginRight: 20,
  },
  collectionTitle: {
    fontWeight: "bold",
    fontSize: 24,
    fontFamily: "GolosText",
    marginTop: 20,
  },
  buttonContainer: {
    height: 60,
    marginTop: "3%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  pressableButton: {
    height: 51,
    borderRadius: 29,
    alignItems: "center",
    justifyContent: "center",
  },
  pressableText: {
    fontFamily: "GolosText",
    fontWeight: "500",
    fontSize: 14,
  },
  carouselContainer: {
    alignItems: "center",
    marginTop: "5%",
  },
  scrollContainer: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  scrollInnerContainer: {
    width: "100%",
    marginTop: "10%",
  },
  tShirtText: {
    fontWeight: "bold",
    fontFamily: "GolosText",
    fontSize: 24,
  },
  imageContainer: {
    flexDirection: "row",
    width: "100%",
    height: 264,
    gap: 10,
    marginTop: "5%",
  },
  imagePressable: {
    backgroundColor: "red",
    height: "100%",
    width: "50%",
  },
  itemContainer: {
    width: "48.5%",
    height: "100%",
    borderRadius: 30,
    overflow: "hidden",
  },
  itemImage: {
    height: "100%",
    width: "100%",
  },
  itemTextContainer: {
    position: "absolute",
    width: "100%",
    marginTop: "10%",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  itemText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  itemBlurContainer: {
    position: "absolute",
    bottom: "5%",
    left: 0,
    right: 0,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  blurContainer: {
    width: 68,
    height: 44,
    justifyContent: "center",
    borderRadius: 36,
    overflow: "hidden",
  },
  priceText: {
    alignSelf: "center",
    letterSpacing: 0.4,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "GolosText",
    color: "#fff",
  },
  blurView: {
    width: 41,
    height: 41,
    justifyContent: "center",
    borderRadius: 36,
    overflow: "hidden",
  },
});
