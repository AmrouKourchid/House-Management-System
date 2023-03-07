import React, { useState } from 'react';
import {ScrollView,Text,StyleSheet,TextInput,Pressable,Image,KeyboardAvoidingView} from 'react-native';

export default function Login({ navigation }) {

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (

    <ScrollView style={styles.container} keyboardDismissMode='on-drag'>
        <KeyboardAvoidingView>
        <Text style={styles.headerText}>Welcome to HMS</Text>
        <Text style={styles.subheaderText}>Sign in to continue</Text>
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
        <Pressable
            onPress={() => navigation.navigate('Welcome')}
            style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>

        <Text style={styles.link}>Forgot Pasword?</Text>
        <Text style={styles.regularText}>Don't have a account? <Text style={styles.link}>Register</Text></Text>
        
        
        </KeyboardAvoidingView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 25,
    color: '#0283a9',
    textAlign: 'center',
    paddingVertical: 12,
    fontWeight: 'bold',
  },
  subheaderText: {
    fontSize: 20,
    color: "grey",
    textAlign: 'center',
    marginBottom: 30,
  },
  regularText: {
    fontSize: 17,
    color: "grey",
  },
  link: {
    fontSize: 17,
    fontWeight: 'bold',
    color: "#0283a9",
    textAlign: 'center',
},
  inputBox: {
    borderWidth: 0.5,
    padding: 10,
    fontSize: 16,
    borderColor: 'grey',
    width: '100%',
    marginVertical: 12,
    backgroundColor: 'white',
  },
  button: {
    fontSize: 15,
    padding: 10,
    marginVertical: 8,
    borderColor: '#EE9972',
    borderRadius: 5,
    width: '100%',
    backgroundColor: "#0283a9",
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
});