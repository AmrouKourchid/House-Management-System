import { View, Text, ScrollView, Switch, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function Settings({navigation}){
    return (
        <View>
            <View style={styles.container}>
                <Pressable 
                onPress={()=> navigation.popToTop() }
                style={styles.button}
                >
                <Text style={styles.buttontext}>
                Log out
                </Text>
                </Pressable>
                <Pressable 
                onPress={()=> navigation.navigate('EditProfile') }
                style={styles.button}
                >
                <Text style={styles.buttontext}>
                Edit Profile
                </Text>
                </Pressable>

                <Pressable 
                onPress={()=> navigation.navigate('Addworker') }
                style={styles.button}
                >
                <Text style={styles.buttontext}>
                Become Worker
                </Text>
                </Pressable>
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      marginTop: 70,
      marginLeft: 0,
      backgroundColor: "rgba(34, 50, 99, 1)", // Updated color
      height: 50,
      width: 150,
      borderRadius: 30,
      alignSelf: "center",
    },
    buttontext: {
      textAlign: "center",
      color: "#FFFFFF", // White color
      marginTop: 12,
    },
  });
  