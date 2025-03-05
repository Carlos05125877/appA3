import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ActionButtonProps {
  title: string;
  onPress?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 40,
    borderRadius: 100,
    backgroundColor: "#A8D5BA",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  buttonText: {
    color: "#333",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default ActionButton;
