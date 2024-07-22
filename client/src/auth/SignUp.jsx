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
  const [withCountryNameButton, setWithCountryNameButton] = useState(false); // Hide country name
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

  // Method to get the flag image URL
  const getFlagImageUrl = (countryCode) => {
    return `https://www.countryflags.io/${countryCode}/shiny/64.png`;
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
                onPress={() => navigation.navigate("SignUp")}
                style={styles.loginLink}
              >
                <Text style={styles.loginText}>
                  I have an account?{" "}
                  <Text style={styles.loginLinkText}>Login</Text>
                </Text>
              </Pressable>
              <Pressable style={styles.signUpButton}>
                <Text style={styles.buttonText}>Sign up</Text>
              </Pressable>
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
    marginTop: 10,
    backgroundColor: "transparent",
  },
  flagImage: {
    width: 48,
    height: 48,
    marginLeft: 10,
  },
  countryCodeText: {
    fontWeight: "bold",
    color: "#1E1E1E",
    marginLeft: 10,
    marginRight: 5,
  },
  phoneNumberInput: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 20,
    height: 48,
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
  focusedInput: {
    borderColor: "#007bff",
  },
  footerContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  loginLink: {
    marginBottom: 10,
  },
  loginText: {
    color: "#1E1E1E",
    fontSize: 16,
  },
  loginLinkText: {
    fontWeight: "bold",
    color: "#007bff",
  },
  signUpButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
