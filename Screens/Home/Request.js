import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import axios from "axios";
export default function Request() {
  const [workerEmail, setWorkerEmail] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Display the request information
    axios.get(`http://192.168.1.19:3000/testmail/${workerEmail}/${cellPhone}/${address}/${description}`)
    .then(response => console.log(response))
    .catch(error => console.log(error));

    // Set the submitted state to true
    setSubmitted(true);

    // Reset the form fields
    setWorkerEmail('');
    setCellPhone('');
    setAddress('');
    setDescription('');
  };
  const handlePress = () => {
    handleSubmit();
    Alert.alert('Request Sent!');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Worker's Email:</Text>
      <TextInput
        style={styles.input}
        value={workerEmail}
        onChangeText={setWorkerEmail}
        mode={'outlined'}
        placeholder="Enter worker's email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Cell Phone:</Text>
      <TextInput
        style={styles.input}
        value={cellPhone}
        onChangeText={setCellPhone}
        mode={'outlined'}
        placeholder="Enter your cell phone"
      />

      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        mode={'outlined'}
        placeholder="Enter your address"
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        mode={'outlined'}
        placeholder="Enter description"
        multiline
      />

      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Send Request</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'rgba(34, 50, 99, 1)',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submittedContainer: {
    marginTop: 24,
  },
  submittedText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
