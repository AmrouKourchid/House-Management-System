import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable, Image, KeyboardAvoidingView, View } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validUsers = [
    { email: 'bouzahartaha7@gmail.com', password: 'Taha@01022002' },
    { email: 'a', password: '1' },
  ];

  const handleLogin = () => {
    const isValidUser = validUsers.some(user => user.email === email && user.password === password);

    if (isValidUser) {
      setErrorMessage('');
      navigation.navigate('Tabs');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <ScrollView
      style={styles.Login}
      keyboardDismissMode="on-drag"
      contentContainerStyle={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}>
      <KeyboardAvoidingView style={styles.Group446}>
        <Image source={require('../assets/Logo.png')} style={styles.Logo} />
        <Text style={styles.headerText}>Welcome to HMS</Text>
        <Text style={styles.subheaderText}>Log in to continue</Text>
        <TextInput
          style={styles.inputBox}
          placeholder={'Your Email'}
          keyboardType={'email-address'}
          selectionColor={'rgba(144,152,177,1)'}
          mode="outlined"
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.inputBox}
          placeholder={'Password'}
          keyboardType={'default'}
          secureTextEntry={true}
          selectionColor={'rgba(144,152,177,1)'}
          mode="outlined"
          returnKeyType="next"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <Pressable onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </Pressable>

        {errorMessage !== '' && <Text style={styles.errorText}>{errorMessage}</Text>}

        <Text style={styles.link}>Forgot Pasword?</Text>
        <Text style={styles.regularText}>Don't have a account?</Text>
        <Pressable onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}>Register</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Login: {
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
    marginTop: 100,
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
    marginTop: 20,
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
    marginTop: 10,
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
    color: 'red',
    marginBottom: 10,
  },
});
