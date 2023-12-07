import React from "react";
import { View, StyleSheet, Image, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Button, Text, TextInput, HelperText } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";

export default function LoginForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);
  const logouri = require("../../photos/shopBite.png");

  const showToast = (message = "Something went wrong") => {
    console.log(message);
  };

  const handleLogin = async (values) => {
    try {
      console.debug(values);
      // Add your login logic here using the values from Formik
      // const url = "http://172.20.8.250/api/v1/login";
      // const result = await fetchServices.postData(url, values);

      // if (result.message != null) {
      //   showToast(result?.message);
      // } else {
      //   navigation.navigate("Home");
      // }
    } catch (e) {
      console.debug(e.toString());
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <View style={styles.hero}>
            <Image source={logouri} style={styles.heroImage} resizeMode="contain" />
          </View>
          <Text variant="displayMedium" style={{ textAlign: "center", fontSize: 30, bottom: 20, color: "#7B3911" }}>
            Login
          </Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (values, { setSubmitting }) => {
              await handleLogin(values);
              setSubmitting(false);
            }}
            validationSchema={validationSchema}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              errors,
              touched,
              setTouched,
            }) => (
              <View style={{ bottom: 5 }}>
                <TextInput
                  mode="outlined"
                  placeholder="Email"
                  label="Email"
                  left={<TextInput.Icon icon="email" />}
                  style={{ marginTop: 10 }}
                  defaultValue={values.email}
                  value={values.email}
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email && touched.email}
                  onFocus={() => setTouched({ email: true }, false)}
                />
                {errors.email && touched.email && (
                  <HelperText type="error" visible={errors.email}>
                    {errors.email}
                  </HelperText>
                )}
                <TextInput
                  mode="outlined"
                  placeholder="Password"
                  label="Password"
                  left={<TextInput.Icon icon="lock" />}
                  secureTextEntry={!showPass}
                  right={
                    <TextInput.Icon
                      icon={showPass ? "eye" : "eye-off"}
                      onPress={() => setShowPass(!showPass)}
                    />
                  }
                  style={{ marginTop: 10 }}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={errors.password && touched.password}
                  onFocus={() => setTouched({ password: true }, false)}
                />
                {errors.password && touched.password && (
                  <HelperText type="error" visible={errors.password}>
                    {errors.password}
                  </HelperText>
                )}
                <Button 
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  onPress={handleSubmit}
                  mode="contained"
                  style={styles.button}
                >
                  Login
                </Button>
              </View>
            )}
          </Formik>
          <View style={{ alignItems: "center", Bottom: 5 }}>
            <Text>Don't have an account?</Text>
            <Button style={styles.green} onPress={() => navigation.navigate("Register")}>
              Signup
            </Button>
            <Text>or</Text>
            <Button style={styles.red} onPress={() => navigation.navigate("Recover")}>
              Forgot Password
            </Button>
          </View>
          <Button style={styles.button} onPress={() => navigation.navigate("Landing")}>
            <Text style={styles.buttonText}>Back</Text>
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    backgroundColor: "#DC661F",
    margin: 1,
    borderRadius: 10,
    padding: 10,
    height: "25%",
    bottom: 20,
  },
  heroImage: {
    width: "100%",
    borderRadius: 10,
    height: "100%",
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "400",
    color: "#7B3911",
    textAlign: "center",
  },
  buttonText: {
    fontSize: 15,
    color: "#FFBD59",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#7B3911",
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginTop: 10,
  },
  fade: {
    opacity: "50%",
  },
  green: {
    textDecorationColor: "green",
    color: "DC661F",
  },
  red: {
    textDecorationColor: "red",
    color: "DC661F",
  },
});
