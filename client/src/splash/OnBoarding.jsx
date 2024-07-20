import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

export default function OnBoarding() {
  const navigation = useNavigation();

  const [loaded] = useFonts({
    GolosText: require("../../assets/fonts/GolosText[wght].ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/splashAssets/splash.png")}
          style={styles.image}
        />
        <LinearGradient
          colors={["transparent", "#fff"]}
          style={styles.gradient}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.heading1]}>Find the Latest</Text>
        <Text style={[styles.heading2]}>Collection</Text>
        <Text style={[styles.subHeading, { marginTop: "4%" }]}>
          Explore the latest fashion collections designed to
        </Text>
        <Text style={[styles.subHeading]}>
          reflect modern elegance and style.
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.buttonText]}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "70%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  heading1: {
    marginTop: "5%",
    fontWeight: "bold",
    fontSize: 40,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  heading2: {
    fontWeight: "bold",
    fontSize: 40,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  subHeading: {
    fontWeight: "medium",
    fontSize: 14,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#3AA2ED",
    height: 61,
    justifyContent: "center",
    width: "85%",
    borderRadius: 36,
    position: "absolute",
    bottom: "1%",
    alignSelf: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontFamily: "GolosText",
  },
});
