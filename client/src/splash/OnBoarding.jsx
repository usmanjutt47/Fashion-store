import { View, Text, Image } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

export default function OnBoarding() {
  const [loaded] = useFonts({
    GolosText: require("../../assets/fonts/GolosText[wght].ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ backgroundColor: "red" }}>
      <View style={{ position: "relative" }}>
        <Image
          source={require("../../assets/splashAssets/splash.png")} // replace with your image path
          style={{ width: 100, height: 100 }} // set the desired width and height
        />
      </View>
      <Text style={{ fontFamily: "GolosText", fontSize: 40 }}>OnBoarding</Text>
    </View>
  );
}
