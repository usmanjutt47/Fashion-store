import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

interface CustomButtonProps {
  text: string;
}

export default function CustomButton({ text }: CustomButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          height: 61,
          width: "100%",
          backgroundColor: "#3AA2ED",
          borderRadius: 34,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "medium",
            fontSize: 14,
            color: "#fff",
            fontFamily: "GolosText",
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
