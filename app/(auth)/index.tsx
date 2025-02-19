import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { BlurView } from "expo-blur";
import CustomButton from "@/components/CustomButton";
import React from "react";
import { StatusBar } from "expo-status-bar";
import TextEditor from "@/components/TextEditor";
import Wrapper from "@/components/Wrapper";

export default function Login() {
  return (
    <Wrapper>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("@/assets/splashAssets/splash.png")}
        style={styles.imageContainer}
        blurRadius={5}
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
            <View>
              <Text style={styles.welcomeText}>Welcome back</Text>
              <Text style={styles.infoText}>We’ve sent a code to</Text>
              <View style={styles.inputContainer}>
                <Text>Email or phone number</Text>
                <TextEditor placeholder="Enter your email" />
              </View>
              <View style={styles.inputContainer}>
                <Text>Password</Text>
                <TextEditor placeholder="Password" secureTextEntry />
              </View>
              <TouchableOpacity style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.loginButtonContainer}>
              <CustomButton text="Login" />
            </View>
          </View>
        </BlurView>
      </ImageBackground>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
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
    justifyContent: "space-between",
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
  inputContainer: {
    marginTop: "5%",
  },
  forgotPasswordContainer: {
    alignSelf: "flex-start",
  },
  forgotPasswordText: {
    color: "#3AA2ED",
    fontWeight: "600",
    flexWrap: "wrap",
  },
  loginButtonContainer: {
    marginBottom: "10%",
    width: "95%",
    alignSelf: "center",
  },
});
