import React from "react";
import { Image, StyleSheet } from "react-native";

const LogoSeta: React.FC = () => {
  return (
    <Image
    source={require('../assets/images/Seta.png')}
      style={styles.LogoSeta}
      resizeMode="contain"
      accessibilityLabel="LogoSeta"
    />
  );
};

const styles = StyleSheet.create({
  LogoSeta: {
    width: 50,
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,

  },
});

export default LogoSeta;
