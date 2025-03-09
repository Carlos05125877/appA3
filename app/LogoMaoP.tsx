import React from "react";
import { Image, StyleSheet } from "react-native";

const LogoMaoP: React.FC = () => {
  return (
    <Image
    source={{
        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/80949d1e86ab825de929566e6c4f4522ba7b142e6035e3f06de2b5e473336600?placeholderIfAbsent=true&apiKey=5029cd45afe3420dae0ca23b92810094",
      }}
      style={styles.LogoMaoP}
      resizeMode="contain"
      accessibilityLabel="LogoMaoP"
    />
  );
};

const styles = StyleSheet.create({
    LogoMaoP: {
    width: 70,
    height: 63, 

  },
});

export default LogoMaoP;
