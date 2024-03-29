import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, Pressable, Alert } from 'react-native';
import axios from 'axios';
import { TextInput } from 'react-native-paper';
export default function EditProfile({ navigation }) {
  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSaveChanges = async () => {
    try {
      const response = await axios.post('http://192.168.1.19:3000/update-profile', {
        email,
        newEmail,
        password,
        newPassword,
      });

      if (response.status === 200) {
        console.log('Success: Profile updated successfully');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.log('Error:', error.response.data.error);
      } else {
        console.log('Error: An error occurred. Please try again later.');
      }
    }
  };
  const handlePress = () => {
    handleSaveChanges();
    Alert.alert('Account Updated!'); };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Current Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        mode={'outlined'}
      />

      <Text style={styles.label}>New Email</Text>
      <TextInput
        style={styles.input}
        placeholder="New Email"
        value={newEmail}
        onChangeText={setNewEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        mode={'outlined'}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Current Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        mode={'outlined'}
      />

      <Text style={styles.label}>New Password</Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
        autoCapitalize="none"
        mode={'outlined'}
      />

      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderRadius: 5,


    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgba(34,50,99,1)',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
