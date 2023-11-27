import { View } from "react-native";
import React from "react";
import Landing from "../forms/landingForm";

export default function LandingScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <Landing {...props} />
    </View>
  );
}