import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { StatusBar } from "expo-status-bar";

export default function OnBoarding() {
  const navigation = useNavigation(); // Use the hook here
  const [loaded] = useFonts({
    GolosText: require("../../assets/fonts/GolosText[wght].ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

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
        <Text style={styles.heading1}>Find the Latest</Text>
        <Text style={styles.heading2}>Collection</Text>
        <Text style={styles.subHeading1}>
          Explore the latest fashion collections designed to
        </Text>
        <Text style={styles.subHeading2}>
          reflect modern elegance and style.
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
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
    height: "100%",
  },
  heading1: {
    fontFamily: "GolosText",
    fontWeight: "bold",
    fontSize: 40,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  heading2: {
    fontFamily: "GolosText",
    fontWeight: "bold",
    fontSize: 40,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  subHeading1: {
    fontFamily: "GolosText",
    fontWeight: "semibold",
    fontSize: 14,
    letterSpacing: 0.5,
    textAlign: "center",
    marginTop: 10,
  },
  subHeading2: {
    fontFamily: "GolosText",
    fontWeight: "semibold",
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
    bottom: 15,
  },
  buttonText: {
    textAlign: "center",
  },
});
