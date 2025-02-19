import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import React, { useState } from "react";

import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";
import axios from "axios";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [loaded] = useFonts({
    GolosText: require("../../assets/fonts/GolosText[wght].ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
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
            <BlurView
              style={{
                width: 44,
                height: 44,
                justifyContent: "center",
                borderRadius: 36,
                marginLeft: "5%",
                overflow: "hidden",
              }}
            >
              <Pressable onPress={() => navigation.goBack()}>
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="#1E1E1E"
                  style={{ alignSelf: "center" }}
                />
              </Pressable>
            </BlurView>

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

          <BlurView
            style={styles.blurViewContainer}
            intensity={100}
            tint="default"
            experimentalBlurMethod="dimezisBlurView"
          >
            <View
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "space-between",
                padding: "5%",
              }}
            >
              <View
                style={{
                  marginTop: "5%",
                }}
              >
                <Text style={[styles.welcomeHeading]}>Welcome</Text>
                <Text style={styles.label}>Email or phone number</Text>
                <TextInput
                  style={[styles.emailInput]}
                  placeholder="Enter email or phone number"
                  placeholderTextColor="#4e4e4e"
                  selectionColor={"#000"}
                  cursorColor={"#4e4e4e"}
                  value={emailOrPhone}
                  onChangeText={setEmailOrPhone}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  keyboardType="email-address"
                />

                <Text style={[styles.label, { marginTop: 10 }]}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={[styles.passwordInput]}
                    placeholder="Enter Password"
                    placeholderTextColor="#4e4e4e"
                    selectionColor={"#000"}
                    cursorColor={"#004e4e4e"}
                    value={password}
                    onChangeText={setPassword}
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
                    secureTextEntry={!showPassword}
                  />
                  <Pressable
                    style={styles.eyeIcon}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Ionicons
                      name={showPassword ? "eye-off" : "eye"}
                      size={24}
                      color="#1E1E1E"
                    />
                  </Pressable>
                  <Pressable
                    onPress={() => navigation.navigate("ForgotPassword")}
                    style={{
                      width: "28%",
                      marginTop: "4%",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      Forgot Password?
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 20,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "medium",
                      color: "#DCDCDB",
                    }}
                  >
                    Don’t have an account?
                  </Text>
                  <Pressable onPress={() => navigation.navigate("SignUp")}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      Register
                    </Text>
                  </Pressable>
                </View>
                <Pressable
                  style={{
                    backgroundColor: "#3AA2ED",
                    height: 48,
                    justifyContent: "center",
                    borderRadius: 33,
                  }}
                >
                  <Text style={[styles.buttonText]}>Login</Text>
                </Pressable>
              </View>
            </View>
          </BlurView>
          <Toast />
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
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
    color: "#1E1E1E",
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
  },
  welcomeHeading: {
    fontSize: 30,
    color: "#1E1E1E",
    alignSelf: "center",
    marginBottom: "15%",
  },
  emailPasswordSection: {
    justifyContent: "center",
  },
  label: {
    color: "#1E1E1E",
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },

  emailInput: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 48,
    borderColor: "#6F7072",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "transparent",
    color: "#1E1E1E",
  },
  passwordContainer: {
    position: "relative",
    width: "100%",
  },
  passwordInput: {
    paddingLeft: 20,
    paddingRight: 50,
    height: 48,
    borderColor: "#6F7072",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "transparent",
    color: "#1E1E1E",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 12,
    height: 24,
    width: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "medium",
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontFamily: "GolosText",
  },
});
