import { ScrollView, View, Text, StyleSheet, useColorScheme } from 'react-native';
import React from 'react';
export default function About() {
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
          ]}>About Us</Text>
      </View>
      <Text style={[styles.regularText,    
        colorScheme === "light"
        ? {color: "black"}
        : {color: 'white'}
    ]}>
        We are a group of software engineering students aiming to match property owners with handymen who struggle to work at these difficult times. if you're one or the other, you're in the right place!
      </Text>
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
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    textAlign: 'center',
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