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
import InputField from "./InputField";
import CustomButton from "./CustomButton";
import ActionButton from "./ActionButton";
import LogoSeta from "./LogoSeta";
import LogoMaoP from "./LogoMaoP";


const SignUpScreen = () => {
  const [childName, setChildName] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignUp = () => {
    // Handle sign up logic here
    console.log({ childName, birthDate, email, password });
  };

  return (


        <View style={styles.container}>
          <View style={styles.content}>
            
              <View style={styles.logoContainer}>
              <LogoSeta />
              <LogoMaoP />
              
              </View>

            
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Crie sua Conta</Text>
              </View>
              <View style={styles.inputContainer}>
                <InputField
                  label="Nome da Criança" inputType="text" secureTextEntry={false}
                  
                />

                <InputField
                  label="Data de Nascimento" inputType="date" secureTextEntry={false}
                  
                />

                <InputField
                  label="Email" inputType="email" secureTextEntry={false}
                  
                  
                />

                <InputField
                  label="Senha" inputType="password" secureTextEntry={true}
                  
                  
                />
              </View>
              <ActionButton title="Cadastrar" />
          </View>
        </View>
  );
};

const styles = StyleSheet.create({

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 40,
    paddingRight: 55,
    paddingBottom: 200,
    paddingLeft: 55,
    backgroundColor: "#87CEEB",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    
  },
  smallLogo: {
    width: 40,
    height: 40,
    marginTop: "auto",
    marginBottom: "auto",
  },
  largeLogo: {
    width: 70,
    height: 63, 
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginBottom: 32,
    gap: 32,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 302,
  },
  titleContainer: {
    marginTop: 50,
    marginBottom: 50,
  },
  title: {
    paddingTop: 50,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "Open Sans, -apple-system, Roboto, Helvetica, sans-serif",
    color: "rgba(51, 51, 51, 1)",
  },
});

export default SignUpScreen;
