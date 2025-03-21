import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Logo from "./Logo";
import InputField from "./InputField";
import GoogleButton from "./GoogleButton";
import ActionButton from "./ActionButton";
import { useRouter } from "expo-router";

const LoginScreen: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#87CEEB" />
      <View style={styles.content}>

        <Logo />

        <View style={styles.loginText}>
          <Text style={styles.loginTextContent}>Efetue seu login</Text>
        </View>

        <View style={styles.inputContainer}>
          <InputField label="Email" inputType="email" secureTextEntry={false} />

          <InputField
            label="Senha"
            inputType="password"
            secureTextEntry={true}
          />
        </View>

        <GoogleButton />

        <ActionButton onPress={() => router.push('/HomeScreen')} title="Acessar" />

        <View style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Esqueceu senha</Text>
        </View>

        <TouchableOpacity onPress={() => router.push('/SignUpScreen')}>
          <Text style={styles.registerText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {

    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 133,
    paddingRight: 55,
    paddingBottom: 133,
    paddingLeft: 55,
    backgroundColor: "#87CEEB",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 302,
  },
  loginText: {
    marginBottom: 32,
  },
  loginTextContent: {
    color: "#333",
    fontFamily: "Inter",
    fontSize: 20,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginBottom: 32,
    gap: 32,
  },
  forgotPassword: {
    marginBottom: 32,
  },
  forgotPasswordText: {
    color: "#333",
    fontFamily: "Inter",
    fontSize: 12,
  },
  registerText: {
    color: "#333",
    fontFamily: "Inter",
    fontSize: 15,
    fontWeight: "700",
  },
});

export default LoginScreen;
