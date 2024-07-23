import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";

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
          <Pressable
            onPress={() => handlePress("All")}
            style={[
              styles.pressableButton,
              {
                backgroundColor: selected === "All" ? "#000000" : "#EBF2F4",
                width: 66,
              },
            ]}
          >
            <Text
              style={[
                styles.pressableText,
                {
                  color: selected === "All" ? "#FFFFFF" : "#000000",
                },
              ]}
            >
              All
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handlePress("Hoodie")}
            style={[
              styles.pressableButton,
              {
                backgroundColor: selected === "Hoodie" ? "#000000" : "#EBF2F4",
                width: 94,
              },
            ]}
          >
            <Text
              style={[
                styles.pressableText,
                {
                  color: selected === "Hoodie" ? "#FFFFFF" : "#000000",
                },
              ]}
            >
              Hoodie
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handlePress("Sweater")}
            style={[
              styles.pressableButton,
              {
                backgroundColor: selected === "Sweater" ? "#000000" : "#EBF2F4",
                width: 101,
              },
            ]}
          >
            <Text
              style={[
                styles.pressableText,
                {
                  color: selected === "Sweater" ? "#FFFFFF" : "#000000",
                },
              ]}
            >
              Sweater
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handlePress("T-Shirt")}
            style={[
              styles.pressableButton,
              {
                backgroundColor: selected === "T-Shirt" ? "#000000" : "#EBF2F4",
                width: 101,
              },
            ]}
          >
            <Text
              style={[
                styles.pressableText,
                {
                  color: selected === "T-Shirt" ? "#FFFFFF" : "#000000",
                },
              ]}
            >
              T-Shirt
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: "5%",
    paddingTop: "5%",
  },
  header: {
    width: "100%",
    height: "7.33%",
    justifyContent: "center",
    marginTop: "5%",
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
    borderRadius: 100,
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
    marginRight: "5%",
  },
  collectionTitle: {
    fontWeight: "bold",
    fontSize: 24,
    fontFamily: "GolosText",
    marginTop: "5%",
  },
  scrollViewContainer: {
    height: 60,
    width: "100%",
    marginTop: "3%",
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
    marginHorizontal: 5,
  },
  pressableText: {
    fontFamily: "GolosText",
    fontWeight: "medium",
    fontSize: 14,
  },
});
