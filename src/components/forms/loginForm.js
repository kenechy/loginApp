import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function LoginForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);
  const logouri =  require('../../photos/shopBite.png')
  const [email, setEmail] = useState('admin');
  const [password, setPassword] = useState('admin');

  const handleLogin = () => {
    const adminEmail = 'admin';
    const adminPassword = 'admin';

    if (email.trim() === adminEmail && password.trim() === adminPassword) {
      console.log('Login successful');
      navigation.navigate("Home")
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <View styles={{ flex: 1 }}>
       <View style={styles.hero}>
          <Image
            source={logouri}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>
      <Text variant="displayMedium" style={{textAlign: "center", fontSize: 30, bottom: 20, color: "#7B3911"}}>Login</Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 , bottom: 20}}
        error={false}
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        label="Password"
        secureTextEntry={showPass}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
        style={{ marginTop: 10, bottom: 20 }}
      />
      <View style={{bottom: 10}}>
      <Button style={styles.button} onPress={(handleLogin)}>
        <Text style={styles.buttonText}>Login</Text>
      </Button>

        <View style= {{alignItems: "center", marginBottom: 20}}>

          <Text>Don't have an account?</Text>
          <Button style={styles.green} onPress={() => navigation.navigate("Register")}>Signup</Button>

          
          <Button style={styles.red} onPress={() => navigation.navigate("Recover")}>Forgot Password</Button>
        </View>

      <Button style={styles.button} onPress={() => navigation.navigate("Landing")}>
      <Text style={styles.buttonText}>Go Back</Text>
      </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    backgroundColor: '#7B3911',
    margin: 1,
    borderRadius: 13,
    padding: 10,
    height: "30%",
    bottom: 20,
  },
  heroImage: {
    width: '100%',
    borderRadius: 10,
    height: "100%"
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '400',
    color: '#7B3911',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: '#FFBD59',
  },
  button: {
      flexDirection: 'row',
      backgroundColor: '#7B3911',
      paddingVertical: 5,
      paddingHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      margin: 10,
    },
  fade:{
    opacity: '50%',
  },
  green: {
    textDecorationColor: "green",
    color: "DC661F",
  },
  red: {
    textDecorationColor: "red",
    color: "DC661F"
  },
});