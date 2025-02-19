import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";

export default function ForgotPassword() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        placeholder="Enter valid email address"
        style={{
          height: 48,
          paddingLeft: 10,
          width: "80%",
          borderWidth: 1,
        }}
      />
      <TextInput
        placeholder="Enter valid email address"
        style={{
          height: 48,
          paddingLeft: 10,
          width: "80%",
          borderWidth: 1,
          marginTop: 10,
        }}
      />
      <Pressable
        style={{
          backgroundColor: "#3AA2ED",
          padding: 10,
          width: "80%",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Send OTP</Text>
      </Pressable>
    </View>
  );
}
