import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import CountryCodeDropdownPicker from "react-native-dropdown-country-picker";
import axios from "axios";
import Toast from "react-native-toast-message";

export default function SignUp() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [selected, setSelected] = useState("+92");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = async () => {
    const fullPhoneNumber = `${selected}${phone}`;

    if (!name || !email || !fullPhoneNumber || !password) {
      Toast.show({
        type: "error",
        text1: "Validation Failed",
        text2: "Please fill in all fields.",
      });
      return;
    }

    console.log({
      name,
      email,
      phone: fullPhoneNumber,
      password,
    });

    try {
      const response = await axios.post(
        "http://192.168.100.175:8080/api/v1/auth/register",
        {
          name,
          email,
          phone: fullPhoneNumber,
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
        setName("");
        setEmail("");
        setPhoneNumber("");
        setPassword("");
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
              <Pressable
                onPress={() => navigation.navigate("Login")}
                style={{ justifyContent: "center" }}
              >
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="#1E1E1E"
                  style={{ alignSelf: "center" }}
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
            <View
              style={{
                flexDirection: "column",
                height: "100%",
                width: "100%",
                justifyContent: "space-between",
                padding: "5%",
              }}
            >
              <View>
                <Text style={styles.createAccountHeading}>Create Account</Text>
                <View style={styles.signUpFormSection}>
                  <Text style={styles.label}>Name</Text>
                  <TextInput
                    style={[styles.input]}
                    placeholder="Enter Your Name"
                    placeholderTextColor="#4e4e4e"
                    value={name}
                    onChangeText={setName}
                    onFocus={() => setIsNameFocused(true)}
                    onBlur={() => setIsNameFocused(false)}
                  />

                  <Text style={[styles.label, styles.marginTop]}>Email</Text>
                  <TextInput
                    style={[styles.input]}
                    placeholder="Enter Your Email"
                    placeholderTextColor="#4e4e4e"
                    value={email}
                    onChangeText={setEmail}
                    onFocus={() => setIsEmailFocused(true)}
                    onBlur={() => setIsEmailFocused(false)}
                    keyboardType="email-address"
                  />

                  <Text style={styles.label}>Phone number</Text>
                  <TouchableWithoutFeedback
                    onPressIn={() => setIsPhoneNumberFocused(true)}
                    onPressOut={() => setIsPhoneNumberFocused(false)}
                  >
                    <View style={[styles.countryContainer]}>
                      <CountryCodeDropdownPicker
                        selected={selected}
                        setSelected={setSelected}
                        setCountryDetails={setCountry}
                        phone={phone}
                        setPhone={setPhone}
                        countryCodeTextStyles={styles.countryCodeTextStyle}
                        dropdownStyles={styles.dropDownStyle}
                        searchStyles={styles.searchStyle}
                        countryCodeContainerStyles={styles.countryCodeContainer}
                        phoneStyles={styles.phoneStyle}
                      />
                    </View>
                  </TouchableWithoutFeedback>

                  <Text style={[styles.label, styles.marginTop]}>Password</Text>
                  <TextInput
                    style={[styles.input]}
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
              </View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 20,
                  }}
                >
                  <Text style={{ color: "#c3c3c3" }}>I have an account</Text>
                  <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={{ color: "#fff", fontWeight: "bold" }}>
                      {"  "}
                      Login
                    </Text>
                  </Pressable>
                </View>

                <Pressable
                  onPress={handleRegister}
                  style={{
                    backgroundColor: "#3AA2ED",
                    height: 48,
                    justifyContent: "center",
                    borderRadius: 36,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                      color: "#fff",
                      fontWeight: "medium",
                      letterSpacing: 0.5,
                    }}
                  >
                    Sign up
                  </Text>
                </Pressable>
              </View>
            </View>
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
    paddingLeft: 20,
    paddingRight: 20,
    height: 48,
    borderColor: "#6F7072",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "transparent",
    color: "#1E1E1E",
  },
  countryContainer: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#6F7072",
    overflow: "hidden",
    marginTop: 10,
  },
  countryCodeTextStyle: {
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  dropDownStyle: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "transparent",
    overflow: "hidden",
    marginRight: 3,
  },
  searchStyle: {
    backgroundColor: "transparent",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  countryCodeContainer: {
    borderRadius: 30,
    height: 44,
    margin: 5,
    backgroundColor: "transparent",
    borderColor: "#7d7c7b",
    borderWidth: 1,
  },
  phoneStyle: {
    backgroundColor: "transparent",
    borderRadius: 5,
    borderWidth: null,
  },
});
