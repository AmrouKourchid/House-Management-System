import React, { useState } from 'react';
import {ScrollView,Text,StyleSheet,TextInput,Pressable,Image,KeyboardAvoidingView} from 'react-native';

export default function Signup({ navigation }) {

    const [fullname, setfullname] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [repassword, onChangerePassword] = useState('');

  return (

    <ScrollView style={styles.container} keyboardDismissMode='on-drag'>
        <KeyboardAvoidingView>
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
        <Text style={styles.regularText}>Have an account? <Text style={styles.link}>Register</Text></Text>
        
        
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
    marginTop:10,
    textAlign: 'center',
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
    marginVertical: 10,
    borderRadius: 5,
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