import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInUp,
} from "react-native-reanimated";
import { Entypo, FontAwesome } from "@expo/vector-icons";

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLoginPress = () => {
    if (!username.trim()) {
      setButtonClicked(true);
    } else {
      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View
        entering={FadeInUp.delay(600).springify()}
        style={styles.headingContainer}
      >
        <Text style={styles.heading}>SignUp</Text>
      </Animated.View>

      {/*name section starts below*/}
      <Animated.View
        entering={FadeInLeft.delay(100)}
        style={styles.animatedContainer}
      >
        <View style={styles.inputContainer}>
          <FontAwesome
            name="user"
            size={20}
            color="black"
            style={styles.icon}
          />
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            cursorColor={"#000"}
          />
        </View>
        {buttonClicked && !username.trim() && (
          <Text style={styles.errorMessage}>Please enter your name</Text>
        )}
      </Animated.View>

      {/* email section starts below */}
      <Animated.View
        entering={FadeInLeft.delay(100)}
        style={styles.animatedContainer}
      >
        <View style={styles.inputContainer}>
          <FontAwesome
            name="envelope"
            size={20}
            color="black"
            style={styles.icon}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            cursorColor={"#000"}
          />
        </View>
        {buttonClicked && !email.trim() && (
          <Text style={styles.errorMessage}>Please enter your email</Text>
        )}
      </Animated.View>

      {/* password section starts below */}
      <Animated.View
        entering={FadeInLeft.delay(100).springify()}
        style={styles.animatedContainer}
      >
        <View style={styles.passwordContainer}>
          <Entypo name="lock" size={20} color="#000" style={styles.icon} />
          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
            cursorColor={"#000"}
          />
          <Pressable onPress={togglePasswordVisibility}>
            <FontAwesome
              name={passwordVisible ? "eye" : "eye-slash"}
              size={20}
              color="#000"
              style={{ marginRight: 10 }}
            />
          </Pressable>
        </View>
        {buttonClicked && !password.trim() && (
          <Text style={[styles.errorMessage, { marginRight: "54%" }]}>
            Please enter password
          </Text>
        )}
      </Animated.View>
      {/* confirmPassword section starts below */}
      <Animated.View
        entering={FadeInLeft.delay(100).springify()}
        style={styles.animatedContainer}
      >
        <View style={styles.passwordContainer}>
          <Entypo name="lock" size={20} color="#000" style={styles.icon} />
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!passwordVisible}
            cursorColor={"#000"}
          />
          <Pressable onPress={togglePasswordVisibility}>
            <FontAwesome
              name={passwordVisible ? "eye" : "eye-slash"}
              size={20}
              color="#000"
              style={{ marginRight: 10 }}
            />
          </Pressable>
        </View>
        {buttonClicked && !confirmPassword.trim() && (
          <Text style={[styles.errorMessage, { marginRight: "54%" }]}>
            Please Confrim Password
          </Text>
        )}
      </Animated.View>
      <Animated.View
        entering={FadeInDown.delay(600).springify()}
        style={{
          width: "80%",
          backgroundColor: "#000",
          height: 50,
          borderRadius: 30,
          marginTop: 20,
          justifyContent: "center",
        }}
      >
        <Pressable onPress={handleLoginPress}>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            SignUp
          </Text>
        </Pressable>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(600).springify()}>
        <Pressable>
          <Text style={{ color: "#000", marginTop: "5%" }}>
            Don't have an account?{"  "}
            <Text style={{ color: "#000", fontWeight: "bold" }}>SignUp</Text>
          </Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cecece",
    justifyContent: "center",
    alignItems: "center",
  },
  headingContainer: {},
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: 50,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "#fff",
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#000",
  },
  animatedContainer: {
    width: "90%",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "center",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: 50,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "#fff",
    paddingLeft: 10,
  },
  errorMessage: {
    color: "#f00",
    marginRight: "45%",
  },
});
