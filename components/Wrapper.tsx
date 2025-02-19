import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";

import React from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View>{children}</View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
