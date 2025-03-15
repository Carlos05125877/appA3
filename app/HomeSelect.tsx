import * as React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

interface HomeSelectProps {
  imageUrl: string;
  label: string;
  fontFamily?: string;
  onPress?: () => void;
}

const HomeSelect: React.FC<HomeSelectProps> = ({
  imageUrl,
  label,
  fontFamily = "Inter",
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.labelContainer}>
        <Text style={[styles.label, { fontFamily }]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  image: {
    width: 86,
    height: 86,
  },
  labelContainer: {
    marginTop: 3,
  },
  label: {
    color: "#1D1B20",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: 0.1,
  },
});

export default HomeSelect;
