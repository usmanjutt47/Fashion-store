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
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const navigation = useNavigation();
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
        <ImageBackground
          source={require("../../assets/splashAssets/splash.png")}
          style={styles.image}
          blurRadius={2.5}
        >
          <View
            style={{
              height: 100,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            {/* back button pressable */}
            <Pressable
              style={{
                width: 44,
                height: 44,
                justifyContent: "center",
                backgroundColor: "#9CADBA",
                borderRadius: 36,
                zIndex: 99,
                marginLeft: "5%",
              }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons
                name="chevron-back"
                size={24}
                color="#fff"
                style={{ alignSelf: "center" }}
              />
            </Pressable>

            {/* Elegancia heading section */}
            <View
              style={{
                flex: 1,
                position: "absolute",
                width: "100%",
              }}
            >
              <Text style={styles.eleganciaHeading}>Elegancia</Text>
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
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: "GolosText",
    color: "#fff",
    alignSelf: "center",
  },
});
