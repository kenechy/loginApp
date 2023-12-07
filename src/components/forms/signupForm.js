import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";

export default function LoginForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);
  const logouri = require('../../photos/shopBite.png');

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
      })}
      onSubmit={(values) => {
        // Add logic here
        console.log(values);
        // navigation.navigate("")
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={{ flex: 1 }}>
          <View style={styles.hero}>
            <Image
              source={logouri}
              style={styles.heroImage}
              resizeMode="contain"
            />
          </View>
          <Text variant="displayMedium" style={{ textAlign: "center", fontSize: 30, bottom: 20, color: "#3a2740" }}>
            Create an Account
          </Text>
          <TextInput
            mode="outlined"
            placeholder="Username"
            label="Username"
            style={{ marginTop: 10, bottom: 20 }}
            value={values.username}
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            error={touched.username && errors.username}
          />
          <TextInput
            mode="outlined"
            placeholder="Email"
            label="Email"
            style={{ marginTop: 10, bottom: 20 }}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            error={touched.email && errors.email}
          />
          <TextInput
            mode="outlined"
            placeholder="Password"
            label="Password"
            secureTextEntry={showPass}
            style={{ marginTop: 10, bottom: 20 }}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            error={touched.password && errors.password}
          />
          <View style={{ bottom: 10 }}>
            <Button style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Register</Text>
            </Button>

            <Button style={styles.button} onPress={() => navigation.pop()}>
              <Text style={styles.buttonText}>Go Back</Text>
            </Button>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    backgroundColor: '#DC661F',
    margin: 1,
    borderRadius: 16,
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
    color: '#9992a7',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
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
  fade: {
    opacity: '50%',
  },
  green: {
    textDecorationColor: "green",
    color: "green",
  },
  red: {
    textDecorationColor: "red",
    color: "red"
  },
});
