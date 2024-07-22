import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import CountryPicker from "react-native-country-picker-modal";

const SignUp = ({
  defaultCountryCode = "US",
  defaultWithFlag = true,
  defaultWithEmoji = false,
  defaultWithFilter = true,
  defaultWithAlphaFilter = false,
  defaultWithCallingCode = true,
}) => {
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

  const [countryCode, setCountryCode] = useState(defaultCountryCode);
  const [withFlag, setWithFlag] = useState(defaultWithFlag);
  const [withEmoji, setWithEmoji] = useState(defaultWithEmoji);
  const [withFilter, setWithFilter] = useState(defaultWithFilter);
  const [withAlphaFilter, setWithAlphaFilter] = useState(
    defaultWithAlphaFilter
  );
  const [withCallingCode, setWithCallingCode] = useState(
    defaultWithCallingCode
  );

  const handleSelectCountry = (country) => {
    setCountry(country);
    setCountryCode(country.cca2);
    setShowCountryPicker(false);
  };

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
          <View style={styles.headerContainer}>
            <BlurView style={styles.backButton}>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Ionicons
                  name="chevron-back"
                  size={24}
                  style={{
                    color: "#1e1e1e",
                    alignSelf: "center",
                  }}
                />
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
                style={[styles.input, isNameFocused && styles.focusedInput]}
                placeholder="Enter Your Name"
                placeholderTextColor="#4e4e4e"
                value={name}
                onChangeText={setName}
                onFocus={() => setIsNameFocused(true)}
                onBlur={() => setIsNameFocused(false)}
              />

              <Text style={[styles.label, styles.marginTop]}>Email</Text>
              <TextInput
                style={[styles.input, isEmailFocused && styles.focusedInput]}
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
                    containerButtonStyle={{
                      marginLeft: 5,
                      marginRight: 5,
                    }}
                  />
                </Pressable>

                <TextInput
                  style={[
                    styles.phoneInputType,
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
                style={[styles.input, isPasswordFocused && styles.focusedInput]}
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

            <Pressable
              style={styles.signUpButton}
              onPress={() => {
                /* Your sign-up logic here */
              }}
            >
              <Text style={styles.buttonText}>Sign up</Text>
            </Pressable>
          </BlurView>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

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
  input: {
    fontWeight: "bold",
    paddingLeft: 10,
    height: 48,
    borderColor: "#6F7072",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "transparent",
    color: "#1E1E1E",
  },
  phoneInputType: {
    fontWeight: "bold",
    paddingLeft: 10,
    height: 48,
    borderColor: "#6F7072",
    backgroundColor: "transparent",
    color: "#1E1E1E",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
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
  phoneNumberInput: {
    flex: 1,
  },
  focusedInput: {
    backgroundColor: "#ffffff",
    borderColor: "#4E4E4E",
  },
  footerContainer: {
    justifyContent: "center",
    width: "85%",
    alignSelf: "center",
    marginTop: "40%",
  },
  loginText: {},
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

export default SignUp;
