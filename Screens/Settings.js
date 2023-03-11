import { View, Text, ScrollView, Switch, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function Settings({navigation}){
    return (
        <View>
            <View style={styles.container}>
                <Pressable 
                onPress={()=> navigation.navigate('Login') }
                style={styles.button}
                >
                <Text style={styles.buttontext}>
                Log out
                </Text>
                </Pressable>
                <Pressable 
                onPress={()=> navigation.navigate('Form') }
                style={styles.button}
                >
                <Text style={styles.buttontext}>
                Edit Profile
                </Text>
                </Pressable>
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        
        justifyContent:"center",
        alignItems:"center"
    },
    button: {
        marginTop: 70,
        marginLeft: 0,
        backgroundColor: "#df4759",
        height: 50,
        width: 150,
        borderRadius: 30,
        alignSelf:"center",

      },
      buttontext: {
        textAlign:"center",
        color:"#ffffff",
        marginTop:12
      }
})