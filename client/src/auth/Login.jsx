import React, { useContext, useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.imageContainer}>
        {/* Background Image */}
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
            {/* Back button */}
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

            {/* Elegancia heading */}
            <View
              style={{
                flex: 1,
                position: "absolute",
                width: "100%",
              }}
            >
              <Text style={[styles.eleganciaHeading]}>Elegancia</Text>
            </View>
          </View>

          {/* Login Container */}
          <BlurView
            style={styles.blurViewContainer}
            intensity={80}
            tint="default"
            experimentalBlurMethod="dimezisBlurView"
          >
            <Text style={[styles.welcomeHeading]}>Welcome</Text>

            {/* Email & Password section */}
            <View style={styles.emailPasswordSection}>
              {/* Email label and input field */}
              <Text style={styles.label}>Email or phone number</Text>
              <TextInput
                style={styles.emailInput}
                placeholder="Enter email or phone number"
                placeholderTextColor="#6F7072"
                cursorColor={"#fff"}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />

              {/* Password label and input field */}
              <Text style={[styles.label, styles.marginTop]}>Password</Text>
              <TextInput
                style={styles.passwordInput}
                placeholder="Enter Password"
                placeholderTextColor="#6F7072"
                cursorColor={"#fff"}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
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
  },
  eleganciaHeading: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#fff",
    alignSelf: "center",
  },
  blurViewContainer: {
    width: "100%",
    height: "76%",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    overflow: "hidden",
    backgroundColor: "blue",
  },
  welcomeHeading: {
    fontSize: 30,
    color: "#fff",
    alignSelf: "center",
    marginTop: 20,
  },
  emailPasswordSection: {
    justifyContent: "center",
    width: "90%",
    alignSelf: "center",
    marginTop: "10%",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  marginTop: {
    marginTop: 10,
  },
  emailInput: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    borderColor: "#6F7072",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "transparent",
    color: "#fff",
  },
  passwordInput: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    borderColor: "#6F7072",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "transparent",
    color: "#fff",
  },
});
