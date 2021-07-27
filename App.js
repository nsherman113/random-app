import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Animated,
  ProgressViewIOSComponent,
} from "react-native";
import { homePage } from "./components/home.js";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
});
// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <FadeInView style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require("./assets/VintageATX-logo.png")}
        />
      </FadeInView>
    </SafeAreaView>
  );
};
