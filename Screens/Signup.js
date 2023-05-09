import React, { useState } from 'react';
import {Text,StyleSheet,TextInput,Pressable,Image,KeyboardAvoidingView, ScrollView} from 'react-native';
import axios from 'axios';

export default function Signup({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const validateEmail = (email) => {
        const emailPattern = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
        return emailPattern.test(email);
    }

    const handleSignUp = async () => {
        if (!validateEmail(email)) {
            setEmailError(true);
            return;
        }
        if (password !== repassword) {
            setPasswordMatchError(true);
            return;
        }
        if (email.trim() === '') {
          // Email is empty
          return;
      }
      if (password.trim() === '') {
          // Password is empty
          setPasswordMatchError(false);
          setPasswordError(true);
          return;
      }
        try {
          const response = await axios.post('http://192.168.1.19:3000/Signup', { email, password });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      navigation.navigate('Login')
      };
        
    
  return (

    <ScrollView style={styles.Signup} keyboardDismissMode='on-drag'>
        <KeyboardAvoidingView style={styles.Group446}>
        <Image source={require('../assets/Logo.png')} style={styles.Logo}/>
        <Text style={styles.headerText}>Let's Get Started</Text>
        <Text style={styles.subheaderText}>Create a new account</Text>
        <TextInput
            style={[styles.inputBox, emailError && styles.inputBoxError]}
            placeholder={'Your Email'}
            keyboardType={'email-address'}
            selectionColor={"#0283a9"}
            mode="outlined"
            returnKeyType="next"
            value={email}
            onChangeText={text => setEmail(text)}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
        />
        {emailError && <Text style={styles.errorText}>Please enter a valid email</Text>}
        <TextInput
            style={styles.inputBox}
            placeholder={'Password'}
            keyboardType={'default'}
            secureTextEntry={true}
            selectionColor={"#0283a9"}
            mode="outlined"
            returnKeyType="next"
            value={password}
            onChangeText={text => setPassword(text)}
            autoCapitalize="none"
        />
<TextInput
    style={[styles.inputBox, passwordMatchError && styles.inputBoxError]}
    placeholder={'Password Again'}
    keyboardType={'default'}
    secureTextEntry={true}
    selectionColor={"#0283a9"}
    mode="outlined"
    returnKeyType="next"
    value={repassword}
    onChangeText={text => setRepassword(text)}
    autoCapitalize="none"
/>
{passwordMatchError && <Text style={styles.errorText}>Passwords do not match</Text>}
{passwordError && <Text style={styles.errorText}>Please enter a password</Text>}

        <Pressable onPress={handleSignUp} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
        <Text style={styles.regularText}>Have an account? </Text>
        <Pressable onPress={()=> navigation.navigate('Login')}>
        <Text style={styles.link}>Log In</Text>
        </Pressable>
    </KeyboardAvoidingView>
    </ScrollView>
  );
  
  }
const styles = StyleSheet.create({
  Signup: {
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
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
  },
});
