import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { useCallback } from "react";
const Footer = () => {
  const [fontsLoaded] = useFonts({
    "Montserrat-Lightitalic": require("./fonts/Montserrat-LightItalic.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <Text style={styles.headerText}>
        All rights reserved by HMS, 2023
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181823',
    width:500,
    height:30,

  },
  headerText: {
    fontFamily:"Montserrat-Lightitalic",
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
  },
});