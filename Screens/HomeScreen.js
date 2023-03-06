import { ScrollView, View, Text, StyleSheet, Pressable, useColorScheme } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback } from "react";
import React from 'react';
export default function HomeScreen({ navigation }) {
    // fonts
    const [fontsLoaded] = useFonts({
        "Montserrat-light": require("../components/fonts/Montserrat-Light.ttf"),
      });
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      const [fontLoaded] = useFonts({
        "Montserrat-Bold": require("../components/fonts/Montserrat-Bold.ttf"),
      });
      const onLayout = useCallback(async () => {
        if (fontLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontLoaded]);

      //theme 
      const colorScheme = useColorScheme();
  return (
    <ScrollView style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#E9F8F9" }
          : { backgroundColor: "#181823" },
      ]}>
      <View style={styles.headerWrapper} >
        <Text  style={[styles.headerText,
            colorScheme === "light"
              ? { color: 'black' }
              : { color: 'white' },
          ]} onLayout={onLayout}>About Us</Text>
      </View>
      <Text style={[styles.regularText,
        colorScheme === "light"
        ? {color: "black"}
        : {color: 'white'}
    ]} onLayout={onLayoutRootView}>
        We are a group of software engineering students aiming to match property owners with handymen who struggle to work at these difficult times. if you're one or the other, you're in the right place!
      </Text>
      <View style={styles.buttoncontainer}>
      <Pressable
        onPress={() => navigation.navigate('Signup')}
        style={styles.button}>
        <Text style={styles.buttontext} onLayout={onLayoutRootView}>Sign up</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Login')}
        style={styles.button2}>
        <Text style={styles.buttontext} onLayout={onLayoutRootView}>Login</Text>
      </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181823',
  },
  headerWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    textAlign: 'center',
    //fontFamily:"Montserrat-Bold",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    textAlign: 'center',
    //fontFamily:"Montserrat-light",
  },
  buttoncontainer: {
    flexDirection:"row",
    
  },
  button: {
    marginTop: 230,
    marginLeft: 5,
    backgroundColor: "#537FE7",
    height: 50,
    width: 150,
    borderRadius: 30,
    alignSelf:"flex-start"
  },
  buttontext: {
    //fontFamily:"Montserrat-light",
    color: "white",
    textAlign: "center",
    marginTop:11
  },
  button2: {
    marginTop: 230,
    marginLeft: 50,
    backgroundColor: "#FFD523",
    height: 50,
    width: 150,
    borderRadius: 30,
  }
});