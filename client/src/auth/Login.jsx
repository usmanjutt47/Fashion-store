import React, { useState } from "react";
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
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

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
                color="#1E1E1E"
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
            intensity={100}
            tint="default"
            experimentalBlurMethod="dimezisBlurView"
          >
            <Text style={[styles.welcomeHeading]}>Welcome</Text>

            {/* Email & Password section */}
            <View style={styles.emailPasswordSection}>
              {/* Email label and input field */}
              <Text style={styles.label}>Email or phone number</Text>
              <TextInput
                style={[
                  styles.emailInput,
                  isEmailFocused && {
                    borderColor: "#fff",
                    backgroundColor: "#fff",
                  },
                ]}
                placeholder="Enter email or phone number"
                placeholderTextColor="#4e4e4e"
                selectionColor={"#000"}
                cursorColor={"#4e4e4e"}
                value={email}
                onChangeText={setEmail}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                keyboardType="email-address"
              />

              {/* Password label and input field */}
              <Text style={[styles.label, styles.marginTop]}>Password</Text>
              <TextInput
                style={[
                  styles.passwordInput,
                  isPasswordFocused && {
                    borderColor: "#fff",
                    backgroundColor: "#fff",
                  },
                ]}
                placeholder="Enter Password"
                placeholderTextColor="#4e4e4e"
                selectionColor={"#000"}
                cursorColor={"#004e4e4e"}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                secureTextEntry
              />
              <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: "semibold",
                    marginTop: "4%",
                  }}
                >
                  Forgot Password
                </Text>
              </Pressable>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={[styles.buttonText]}>Login</Text>
            </Pressable>
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
    marginTop: 20,
  },
  emailPasswordSection: {
    justifyContent: "center",
    width: "85%",
    alignSelf: "center",
    marginTop: "10%",
  },
  label: {
    color: "#1E1E1E",
    fontSize: 16,
    marginBottom: 5,
  },
  marginTop: {
    marginTop: 10,
  },
  emailInput: {
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
    height: 48,
    borderColor: "#6F7072",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "transparent",
    color: "#1E1E1E",
  },
  passwordInput: {
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
    height: 48,
    borderColor: "#6F7072",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "transparent",
    color: "#1E1E1E",
  },
  button: {
    backgroundColor: "#3AA2ED",
    height: 48,
    justifyContent: "center",
    width: "85%",
    borderRadius: 36,
    position: "absolute",
    alignSelf: "center",
    bottom: "1%",
  },
  buttonText: {
    fontWeight: "medium",
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontFamily: "GolosText",
  },
});
