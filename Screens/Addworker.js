import React, { useState } from "react";
import { View, TextInput, Text, Pressable, StyleSheet } from "react-native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";

// Move the API URL to a configuration file
const API_URL = "http://192.168.48.185:3000";

const Addworker = () => {
  const [name, setName] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [addressUser, setAddressUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("Plumber");
  const [existingWorker, setExistingWorker] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const addWorker = () => {
    // Add input validation
    if (!name || !cellPhone || !addressUser) {
      setErrorMessage("Please enter all fields.");
      return;
    }

    axios
      .post(`${API_URL}/checkUser`, {
        email,
      })
      .then((response) => {
        if (!response.data.existing) {
          console.log("User does not exist");
          setErrorMessage("User does not exist");
        } else {
          axios
            .post(`${API_URL}/addWorker`, {
              name,
              category,
              cellPhone,
              addressUser,
              email,
              password,
            })
            .then((response) => {
              console.log(response.data);
              const existing = response.data.existing;
              if (existing) {
                console.log("Worker with the same number or address already exists");
                setExistingWorker(true);
                setErrorMessage("Worker with the same number or address already exists");
              } else {
                setName("");
                setCellPhone("");
                setAddressUser("");
                setEmail("");
                setPassword("");
                setCategory("Plumber");
                setExistingWorker(false);
                setErrorMessage(null);
              }
            })
            .catch((error) => {
              console.log(error);
              setErrorMessage("you are already a worker.");
            });
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("An error occurred.");
      });
  };


  return (
    <View style={styles.container}>
  {existingWorker && (
    <Text style={styles.errorText}>
      Worker with the same number or address already exists
    </Text>
  )}
  <TextInput
    style={styles.input}
    placeholder="Name"
    value={name}
    onChangeText={setName}
  />
  <TextInput
    style={styles.input}
    placeholder="Cell Phone"
    value={cellPhone}
    onChangeText={setCellPhone}
    keyboardType="numeric"
  />
  <TextInput
    style={styles.input}
    placeholder="Address"
    value={addressUser}
    onChangeText={setAddressUser}
  />
  <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
  />
  <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
  />
  <Picker
    selectedValue={category}
    onValueChange={(itemValue) => setCategory(itemValue)}
    style={styles.picker}
  >
    <Picker.Item label="Plumber" value="Plumber" />
    <Picker.Item label="Electrician" value="Electrician" />
    <Picker.Item label="Carpenter" value="Carpenter" />
    <Picker.Item label="Painter" value="Painter" />
  </Picker>
  <Pressable style={styles.button} onPress={addWorker}>
    <Text style={styles.buttonText}>Add Worker</Text>
  </Pressable>
  {errorMessage && (
    <Text style={styles.errorText}>
      {errorMessage}
    </Text>
  )}
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  picker: {
    backgroundColor: "#FFFFFF",
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#00BFFF",
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Addworker;
