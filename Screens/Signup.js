import React, { useState } from 'react';
import {View,Text,StyleSheet,TextInput,Pressable,Image,KeyboardAvoidingView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Signup({ navigation }) {

    const [fullname, setfullname] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [repassword, onChangerePassword] = useState('');

  return (

    <View style={styles.Signup} keyboardDismissMode='on-drag'>
        <KeyboardAvoidingView style={styles.Group446}>
        <Image source={require('../assets/Logo.png')} style={styles.Logo}/>
        <Text style={styles.headerText}>Let's Get Started</Text>
        <Text style={styles.subheaderText}>Create a new account</Text>
        <TextInput
            style={styles.inputBox}
            placeholder={'Full Name'}
            keyboardType={'default'}
            selectionColor={"#0283a9"}
            mode="outlined"
            returnKeyType="next"
            value={fullname.value}
            //onChangeText={(text) => setfullname({ value: text })}
            autoCapitalize="none"
            
        />
        <TextInput
            style={styles.inputBox}
            placeholder={'Your Email'}
            keyboardType={'email-address'}
            selectionColor={"#0283a9"}
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
        <TextInput
            style={styles.inputBox}
            placeholder={'Password Again'}
            keyboardType={'default'}
            secureTextEntry={true}
            selectionColor={"#0283a9"}
            mode="outlined"
            returnKeyType="next"
            value={repassword.value}
            //onChangeText={(text) => setrePassword({ value: text })}
            autoCapitalize="none"
        />
        <Pressable
            onPress={() => navigation.navigate('Login')}
            style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
        <Text style={styles.regularText}>Have an account? </Text>
        <Pressable onPress={()=> navigation.navigate('Login')}>
        <Text style={styles.link}>Log In</Text>
        </Pressable>
        
        
        
    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  Signup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: "100%",
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
    marginTop: 50,
    width: 100,
    height: 100,
  },
  headerText: {
    fontSize: 30,
    color: "rgba(34,50,99,1)",
    textAlign: 'center',
    fontWeight: "bold",
    lineHeight: 50,
    letterSpacing: 0.5,
    marginTop: 10,
  },
  subheaderText: {
    fontSize: 20,
    color: "rgba(144,152,177,1)",
    textAlign: 'center',
    marginBottom: 30,
    letterSpacing: 0.5,
  },
  regularText: {
    fontSize: 20,
    color: "rgba(144,152,177,1)",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  link: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "rgba(34,50,99,1)",
    textAlign: 'center',
    letterSpacing: 0.5,
},
  inputBox: {
    borderWidth: 1,
    paddingLeft: 14,
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 20,
    borderColor: "rgba(235,240,255,1)",
    width: '85%',
    borderRadius: 5,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 15,
  },
  button: {
    padding: 16,
    marginVertical: 20,
    borderColor: '#EE9972',
    borderRadius: 5,
    width: '25%',
    backgroundColor: "rgba(34,50,99,1)",
    boxSizing: "border-box",
  },
  buttonText: {
    color: "rgba(255,255,255,1)",
    textAlign: 'center',
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});