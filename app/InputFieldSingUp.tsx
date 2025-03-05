import * as React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
} from "react-native";

interface InputFieldSingUpProps extends TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

const InputFieldSingUp: React.FC<InputFieldSingUpProps> = ({
  label,
  value,
  onChangeText,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, isFocused && styles.focusedInput]}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...restProps}
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 28,
    width: "100%",
  },
  inputContainer: {
    borderRadius: 4,
    borderColor: "rgba(51, 51, 51, 1)",
    borderStyle: "solid",
    borderWidth: 1,
    minHeight: 46,
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 8,
  },
  focusedInput: {
    borderColor: "#007AFF",
  },
  input: {
    fontFamily: "Open Sans, -apple-system, Roboto, Helvetica, sans-serif",
    fontSize: 16,
    color: "rgba(51, 51, 51, 1)",
    padding: 0,
  },
  labelContainer: {
    position: "absolute",
    zIndex: 1,
    paddingHorizontal: 3,
    paddingVertical: 7,
    backgroundColor: "white",
    left: 10,
    top: -18,
  },
  label: {
    fontFamily: "Open Sans, -apple-system, Roboto, Helvetica, sans-serif",
    fontSize: 16,
    color: "rgba(51, 51, 51, 1)",
    fontWeight: "400",
  },
});

export default InputFieldSingUp;
