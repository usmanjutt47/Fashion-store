import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Wrapper from "./Wrapper";

interface TextEditorProps extends TextInputProps {
  placeholder: string;
  cursorColor?: string;
  secureTextEntry?: boolean;
}

const TextEditor: React.FC<TextEditorProps> = ({
  placeholder,
  cursorColor,
  secureTextEntry = false,
  ...props
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        cursorColor={cursorColor}
        secureTextEntry={isSecure}
        style={styles.textInput}
        {...props}
      />
      {secureTextEntry && (
        <TouchableOpacity
          onPress={() => setIsSecure(!isSecure)}
          style={styles.iconContainer}
        >
          <Ionicons
            name={isSecure ? "eye-off" : "eye"}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    height: 60,
    borderWidth: 1,
    backgroundColor: "transparent",
    borderRadius: 34,
    paddingLeft: 10,
    marginTop: 10,
    borderColor: "#A2A5A7",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingRight: 10,
    marginBottom: "5%",
  },
  textInput: {
    flex: 1,
  },
  iconContainer: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default React.memo(TextEditor);
