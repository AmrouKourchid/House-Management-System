import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { useCallback } from "react";
const Header = () => {
  const [fontsLoaded] = useFonts({
    "Montserrat-Light": require("./fonts/Montserrat-Light.ttf"),
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
        Welcome!
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181823',
    width:500,
    height:100,
    marginBottom:690,

  },
  headerText: {
    fontFamily:"Montserrat-Light",
    padding: 20,
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginTop:15,
  },
});