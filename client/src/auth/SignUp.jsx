import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import CountryPicker from "react-native-country-picker-modal";
import axios from "axios";
import Toast from "react-native-toast-message";

export default function SignUp() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState(null);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  const [countryCode, setCountryCode] = useState("US");
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(false);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(true);

  const handleSelectCountry = (country) => {
    setCountry(country);
    setCountryCode(country.cca2);
    setShowCountryPicker(false);
  };

  const handleRegister = async () => {
    console.log({
      name,
      email,
      phone: phoneNumber,
      password,
    });

    try {
      const response = await axios.post(
        "http://192.168.10.5:8080/api/v1/auth/register",
        {
          name,
          email,
          phone: phoneNumber,
          password,
        }
      );

      if (response.data.success) {
        Toast.show({
          type: "success",
          text1: "Registration Successful",
          text2: "Please login with your credentials",
          visibilityTime: 500,
          onHide: () => {
            navigation.navigate("Login");
          },
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Registration Failed",
          text2: response.data.message || "An error occurred",
        });
      }
    } catch (error) {
      console.error("Error registering user:", error);
      Toast.show({
        type: "error",
        text1: "Registration Failed",
        text2:
          error.response?.data?.message ||
          "An error occurred while registering user",
      });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../../assets/splashAssets/splash.png")}
          style={styles.image}
          blurRadius={2.5}
        >
          <View style={styles.headerContainer}>
            <BlurView style={styles.backButton}>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Ionicons name="chevron-back" size={24} color="#1E1E1E" />
              </Pressable>
            </BlurView>
            <View style={styles.headingContainer}>
              <Text style={styles.eleganciaHeading}>Elegancia</Text>
            </View>
          </View>

          <BlurView
            style={styles.blurViewContainer}
            intensity={100}
            tint="default"
            experimentalBlurMethod="dimezisBlurView"
          >
            <Text style={styles.createAccountHeading}>Create Account</Text>
            <View style={styles.signUpFormSection}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={[styles.nameInput, isNameFocused && styles.focusedInput]}
                placeholder="Enter Your Name"
                placeholderTextColor="#4e4e4e"
                value={name}
                onChangeText={setName}
                onFocus={() => setIsNameFocused(true)}
                onBlur={() => setIsNameFocused(false)}
              />

              <Text style={[styles.label, styles.marginTop]}>Email</Text>
              <TextInput
                style={[
                  styles.emailInput,
                  isEmailFocused && styles.focusedInput,
                ]}
                placeholder="Enter Your Email"
                placeholderTextColor="#4e4e4e"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                keyboardType="email-address"
              />

              <Text style={styles.label}>Phone number</Text>
              <View style={styles.phoneInputWrapper}>
                <Pressable onPress={() => setShowCountryPicker(true)}>
                  <CountryPicker
                    containerButtonStyle={{ marginLeft: 15 }}
                    countryCode={countryCode}
                    withFlag={withFlag}
                    withCallingCodeButton={true}
                    withEmoji={withEmoji}
                    withFilter={withFilter}
                    withAlphaFilter={withAlphaFilter}
                    withCallingCode={withCallingCode}
                    onSelect={handleSelectCountry}
                    visible={showCountryPicker}
                    onClose={() => setShowCountryPicker(false)}
                  />
                </Pressable>

                <TextInput
                  style={[
                    styles.phoneNumberInput,
                    isPhoneNumberFocused && styles.focusedInput,
                  ]}
                  placeholder="Enter Your Phone Number"
                  placeholderTextColor="#4e4e4e"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  onFocus={() => setIsPhoneNumberFocused(true)}
                  onBlur={() => setIsPhoneNumberFocused(false)}
                />
              </View>

              <Text style={[styles.label, styles.marginTop]}>Password</Text>
              <TextInput
                style={[
                  styles.passwordInput,
                  isPasswordFocused && styles.focusedInput,
                ]}
                placeholder="Enter Password"
                placeholderTextColor="#4e4e4e"
                value={password}
                onChangeText={setPassword}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                secureTextEntry
              />
            </View>
            <StatusBar style="auto" />

            <View style={styles.footerContainer}>
              <Pressable
                onPress={() => navigation.navigate("Login")}
                style={{ width: "50%" }}
              >
                <Text style={styles.loginText}>
                  I have an account?
                  <Text style={styles.loginLinkText}> Login</Text>
                </Text>
              </Pressable>
            </View>

            <Pressable style={styles.signUpButton} onPress={handleRegister}>
              <Text style={styles.buttonText}>Sign up</Text>
            </Pressable>
          </BlurView>
        </ImageBackground>
      </View>
      <Toast />
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
  headerContainer: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
    borderRadius: 36,
    marginLeft: "5%",
    overflow: "hidden",
  },
  headingContainer: {
    flex: 1,
    position: "absolute",
    width: "100%",
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
  createAccountHeading: {
    fontSize: 30,
    color: "#1E1E1E",
    alignSelf: "center",
    marginTop: 20,
  },
  signUpFormSection: {
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
  nameInput: {
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
  phoneInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#6F7072",
    borderWidth: 1,
    borderRadius: 30,
    height: 48,
    marginTop: 10,
  },
  phoneNumberInput: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
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
  focusedInput: {
    borderColor: "#1E1E1E",
  },
  footerContainer: {
    justifyContent: "center",
    width: "85%",
    alignSelf: "center",
    marginTop: "40%",
  },
  loginLink: {
    marginBottom: 10,
  },
  loginText: {
    color: "#1E1E1E",
    fontSize: 16,
  },
  loginLinkText: {
    color: "#fff",
    fontWeight: "bold",
  },
  signUpButton: {
    backgroundColor: "#3AA2ED",
    height: 48,
    justifyContent: "center",
    borderRadius: 33,
    marginTop: "4%",
    width: "85%",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontWeight: "medium",
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontFamily: "GolosText",
  },
});
