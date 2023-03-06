import React, { useState } from 'react';
import {ScrollView,Text,StyleSheet,TextInput,Pressable,Image,KeyboardAvoidingView, View} from 'react-native';

export default function Login({ navigation }) {

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (

    <View style={styles.Login} keyboardDismissMode='on-drag'>
        <KeyboardAvoidingView style={styles.Group446}>
        <Text style={styles.headerText}>Welcome to HMS</Text>
        <Text style={styles.subheaderText}>Sign in to continue</Text>
        <Image source={require('../assets/Logo.png')} style={styles.Logo}/>
        <TextInput
            style={styles.inputBox}
            placeholder={'Your Email'}
            keyboardType={'email-address'}
            selectionColor={"rgba(144,152,177,1)"}
            mode="outlined"
            returnKeyType="next"
            value={email.value}
            //onChangeText={(text) => setEmail({ value: text })}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
        />
        <TextInput
            style={styles.inputBox}
            placeholder={'Password'}
            keyboardType={'default'}
            secureTextEntry={true}
            selectionColor={"#0283a9"}
            mode="outlined"
            returnKeyType="next"
            value={password.value}
            //onChangeText={(text) => setPassword({ value: text })}
            autoCapitalize="none"
        />
        <Pressable
            onPress={() => navigation.navigate('Welcome')}
            style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
        <Pressable>
        <Text style={styles.link}>Forgot Pasword?</Text>
        </Pressable>
        <Text style={styles.regularText}>Don't have a account?</Text>
        <Pressable>
        <Text style={styles.link}>Register</Text>
        </Pressable>
        
        
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  Login: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 375,
    height: 812,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Group446: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Logo: {
    width: 72,
    height: 72,
  },
  headerText: {
    fontSize: 20,
    color: "rgba(34,50,99,1)",
    textAlign: 'center',
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  subheaderText: {
    fontSize: 12,
    color: "rgba(144,152,177,1)",
    textAlign: 'center',
    marginBottom: 30,
    letterSpacing: 0.5,
  },
  regularText: {
    fontSize: 12,
    color: "rgba(144,152,177,1)",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  link: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "rgba(34,50,99,1)",
    textAlign: 'center',
    letterSpacing: 0.5,
},
  inputBox: {
    borderWidth: 1,
    paddingLeft: 14,
    paddingRight: 223,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    borderColor: "rgba(235,240,255,1)",
    width: '100%',
    borderRadius: 5,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  button: {
    fontSize: 15,
    padding: 16,
    marginVertical: 8,
    borderColor: '#EE9972',
    borderRadius: 5,
    width: '25%',
    backgroundColor: "rgba(34,50,99,1)",
    boxSizing: "border-box",
  },
  buttonText: {
    color: "rgba(255,255,255,1)",
    textAlign: 'center',
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});