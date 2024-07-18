import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { hp } from "../../helpers/Common";
import { theme } from "../../constant/Theme";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const OnBoarding = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../../assets/welcomeAssets/splash.png")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.5)",
            "#fff",
            "#fff",
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Find the Latest</Text>
          <Text style={styles.title}>Collections</Text>
          <Text style={styles.puchLine}>
            Explore the latest fashion collections designed to
          </Text>
          <Text>reflect modern elegance and style.</Text>
          <View>
            <Pressable
              style={styles.startButton}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Text style={styles.startText}>Start Explore</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    height: "70%",
    width: "100%",
    position: "absolute",
  },
  gradient: {
    width: "100%",
    height: "65%",
    position: "absolute",
    bottom: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 40,
    color: "#000",
  },
  puchLine: {
    fontSize: 14,
    fontWeight: theme.fontWeight.medium,
    textAlign: "center",
  },
  startButton: {
    backgroundColor: theme.colors.neutral(0.9),
    padding: 15,
    paddingHorizontal: 90,
  },
  startText: {
    color: theme.colors.white,
  },
});
