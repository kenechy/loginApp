import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import globalstyles from "./src/config/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import colors from "./src/config/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/components/screen/loginScreen";
import RegisterScreen from "./src/components/screen/registerScreen";
import LandingScreen from "./src/components/screen/landingScreen";
import RecoverScreen from "./src/components/screen/recoverScreen";
import HomeScreen from "./src/components/screen/homeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: colors.colors,
    mode: "exact",
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">

            <Stack.Screen
              options={{ headerShown: false }}
              name="Landing"
              component={LandingScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Register"
              component={RegisterScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Recover"
              component={RecoverScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={HomeScreen}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create(globalstyles);