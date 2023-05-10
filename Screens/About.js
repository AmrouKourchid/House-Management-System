import { ScrollView, View, Text, StyleSheet, Linking } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
export default function About() {
  const phoneNumber = '92603313';

  const callNumber = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper} >
        <Text  style={styles.headerText}>About Us</Text>
      </View>
      <Text style={styles.regularText}>
        We are a group of software engineering students aiming to match property owners with handymen who struggle to work on these difficult times. if you're one or the other, you're in the right place!
      </Text>
      <View style={styles.buttoncontainer}>
      <Button style={styles.button} mode="contained"  onPress={callNumber}>
        Contact Us
      </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    color: '#3d4b77',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    textAlign: 'center',
    color: '#3d4b77',
  },
  buttoncontainer: {
    flexDirection:"row",
    justifyContent:"center"
    
  },
  button: {
    backgroundColor:"rgba(34,50,99,1)",
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