import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo: React.FC = () => {
  return (
    <Image
      source={require('../assets/images/logo_app.png')}
      style={styles.logo}
      accessibilityLabel="Logo"
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 179,
    marginBottom: 32,
  },
});

export default Logo;
