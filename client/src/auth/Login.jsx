import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../../assets/splashAssets/splash.png")}
          style={styles.image}
          blurRadius={2.5}
        >
          <View
            style={{
              height: 100,
              backgroundColor: "red",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Pressable
              style={{
                width: 44,
                height: 44,
                backgroundColor: "#9CADBA",
                borderRadius: 36,
              }}
              onPress={() => navigation.goBack()}
            ></Pressable>

            <View
              style={{
                flex: 1,
                backgroundColor: "blue",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: 24,
                  letterSpacing: 2,
                }}
              >
                Elegancia
              </Text>
            </View>
          </View>

          <BlurView
            style={styles.inputContainer}
            intensity={80}
            tint="default"
            experimentalBlurMethod="dimezisBlurView"
          >
            <Text style={styles.text}>This is another container</Text>
          </BlurView>
        </ImageBackground>
      </View>
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
    height: "80%",
  },
  image: {
    flex: 1,
    // resizeMode: "cover",
  },
  headerContainer: {
    height: 100,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    height: "76%",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    overflow: "hidden",
  },
  eleganciaHeading: {
    fontSize: 40,
    color: "#fff",
    alignSelf: "center",
    backgroundColor: "blue",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
