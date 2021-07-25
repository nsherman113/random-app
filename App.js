import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  // console.log("app executed");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to VintageATX</Text>
      <Image
        style={styles.tinyLogo}
        source={require("./assets/VintageATX-logo.png")}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});
