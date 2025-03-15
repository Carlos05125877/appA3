import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fba3ddf3bca41a60a938dc6be9b0097c8225aa87",
        }}
        style={styles.progressBarImage}
        accessibilityLabel="ProgressBar"
      />
      <View style={styles.percentageContainer}>
        <Text style={styles.percentageText}>{progress}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 30,
    position: "relative",
  },
  progressBarImage: {
    width: "100%",
    height: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  percentageContainer: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: [{ translateX: -10 }, { translateY: -10 }],
  },
  percentageText: {
    color: "#333333",
    textAlign: "center",
    fontFamily: "Ribeye Marrow",
    lineHeight: 20,
    letterSpacing: 0.1,
  },
});

export default ProgressBar;
