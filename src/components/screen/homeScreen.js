import { View } from "react-native";
import React from "react";
import Home from "../forms/homeForm";

export default function HomeScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <Home {...props} />
    </View>
  );
}