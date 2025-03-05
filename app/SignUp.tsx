import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import InputFieldSingUp from "./InputFieldSingUpSingUp";
import CustomButton from "./CustomButton";

const SignUp = () => {
  const [childName, setChildName] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignUp = () => {
    // Handle sign up logic here
    console.log({ childName, birthDate, email, password });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/45c762fd83f9e9b6d8e7af7ed7a79dcc36df1a64d456353fd244f1dc82426f06?placeholderIfAbsent=true&apiKey=5029cd45afe3420dae0ca23b92810094",
              }}
              style={styles.smallLogo}
              resizeMode="contain"
            />
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/80949d1e86ab825de929566e6c4f4522ba7b142e6035e3f06de2b5e473336600?placeholderIfAbsent=true&apiKey=5029cd45afe3420dae0ca23b92810094",
              }}
              style={styles.largeLogo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.formContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Crie sua Conta</Text>
            </View>

            <InputFieldSingUp
              label="Nome da Criança"
              value={childName}
              onChangeText={setChildName}
            />

            <InputFieldSingUp
              label="Data de Nascimento"
              value={birthDate}
              onChangeText={setBirthDate}
            />

            <InputFieldSingUp
              label="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <InputFieldSingUp
              label="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <CustomButton title="Cadastrar" onPress={handleSignUp} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 21,
    paddingBottom: 40,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
  smallLogo: {
    width: 40,
    height: 40,
    marginTop: "auto",
    marginBottom: "auto",
  },
  largeLogo: {
    width: 70,
    height: 63, // Calculated based on aspect ratio 1.11
  },
  formContainer: {
    alignSelf: "center",
    marginTop: 179,
    width: "100%",
    maxWidth: 302,
  },
  titleContainer: {
    marginBottom: 28,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "Open Sans, -apple-system, Roboto, Helvetica, sans-serif",
    color: "rgba(51, 51, 51, 1)",
  },
});

export default SignUp;
