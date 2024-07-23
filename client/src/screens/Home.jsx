import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{ width: "100%", height: "7.33%", backgroundColor: "red" }}
      ></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    height: "100%",
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
