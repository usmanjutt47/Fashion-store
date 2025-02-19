import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { BlurView } from "expo-blur";
import React from "react";
import { StatusBar } from "expo-status-bar";
import TextEditor from "@/components/TextEditor";

export default function Login() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("@/assets/splashAssets/splash.png")}
        style={styles.imageContainer}
        blurRadius={2.5}
      >
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Elegancia</Text>
        </View>
        <BlurView
          style={styles.blurViewContainer}
          intensity={100}
          tint="default"
          experimentalBlurMethod="dimezisBlurView"
        >
          <View style={styles.blurContent}>
            <Text style={styles.welcomeText}>Welcome back</Text>
            <Text style={styles.infoText}>We’ve sent a code to</Text>
            <View style={{ marginTop: "10%" }}>
              <Text>Email or phone number</Text>
              <TextEditor />
            </View>
          </View>
        </BlurView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  headingContainer: {
    marginTop: "20%",
    marginBottom: "25%",
  },
  heading: {
    fontFamily: "GolosText",
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
  blurViewContainer: {
    flex: 1,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    overflow: "hidden",
  },
  blurContent: {
    flex: 1,
    width: "95%",
    alignSelf: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: "GolosText",
    fontWeight: "600",
    textAlign: "center",
    marginTop: "5%",
    color: "#000",
  },
  infoText: {
    fontSize: 14,
    fontFamily: "GolosText",
    fontWeight: "500",
    textAlign: "center",
    marginTop: "2%",
    color: "#1C1A18",
  },
});
