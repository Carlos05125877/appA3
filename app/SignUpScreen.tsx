import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
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
   
    console.log({ childName, birthDate, email, password });
  };

  return (


      <View style={styles.container}>
        
          
            <View style={styles.logoContainer}>
            <LogoSeta />
            <LogoMaoP />
            </View>
            <View style={styles.content}>
          
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
    width: "100%",
    backgroundColor: "#87CEEB",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 100,
    paddingLeft: 30,
    paddingRight: 30,
  },
  logoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    
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
