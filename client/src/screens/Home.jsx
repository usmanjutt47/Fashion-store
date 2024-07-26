import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../../components/Carousel";

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
      <Text style={styles.collectionTitle}>Collection</Text>
      <View style={styles.scrollViewContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {buttonData.map((button) => (
            <TouchableOpacity
              key={button.key}
              onPress={() => handlePress(button.key)}
              style={[
                styles.pressableButton,
                {
                  backgroundColor:
                    selected === button.key ? "#000000" : "#EBF2F4",
                  width: button.width,
                },
                button !== buttonData[0] && { marginHorizontal: 5 },
              ]}
            >
              <Text
                style={[
                  styles.pressableText,
                  {
                    color: selected === button.key ? "#FFFFFF" : "#000000",
                  },
                ]}
              >
                {button.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingLeft: "5%",
          paddingRight: "5%",
          marginTop: "5%",
        }}
      >
        <View>
          <Carousel />
        </View>
        <View
          style={{
            width: "100%",
            marginTop: "10%",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontFamily: "GolosText",
              fontSize: 24,
            }}
          >
            Elegance T-shirt
          </Text>
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
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  scrollViewContainer: {
    height: 60,
    width: "100%",
    marginTop: 15,
    paddingLeft: "5%",
  },
  scrollViewContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
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
    backgroundColor: "red",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
});
