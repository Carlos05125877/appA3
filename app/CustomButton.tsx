import * as React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    display: "flex",
    marginTop: 28,
    minHeight: 40,
    width: "100%",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007AFF", 
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  buttonText: {
    fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0.1,
    color: "white",
    fontSize: 16,
  },
});

export default CustomButton;
