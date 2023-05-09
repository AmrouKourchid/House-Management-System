import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import axios from "axios";
export default function Request() {
  const [workerEmail, setWorkerEmail] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Display the request information
    console.log('Request Information:');
    console.log('Worker\'s Email:', workerEmail);
    console.log('Cell Phone:', cellPhone);
    console.log('Address:', address);
    console.log('Description:', description);
  
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

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Worker's Email:</Text>
      <TextInput
        style={styles.input}
        value={workerEmail}
        onChangeText={setWorkerEmail}
        placeholder="Enter worker's email"
      />

      <Text style={styles.label}>Cell Phone:</Text>
      <TextInput
        style={styles.input}
        value={cellPhone}
        onChangeText={setCellPhone}
        placeholder="Enter your cell phone"
      />

      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your address"
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
        multiline
      />

      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Send Request</Text>
      </Pressable>

      {submitted && (
        <View style={styles.submittedContainer}>
          <Text style={styles.submittedText}>Submitted Request Information:</Text>
          <Text>Worker's Email: {workerEmail}</Text>
          <Text>Cell Phone: {cellPhone}</Text>
          <Text>Address: {address}</Text>
          <Text>Description: {description}</Text>
        </View>
      )}
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#3478f6',
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
