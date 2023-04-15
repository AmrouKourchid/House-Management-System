import React, { useState } from "react";
import { View, TextInput, Text, Pressable, StyleSheet } from "react-native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";

const Addworker = ({ setWorkers }) => {
  const [name, setName] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [addressUser, setAddressUser] = useState("");
  const [category, setCategory] = useState("Plumber");

  const addWorker = () => {
    axios
      .post("http://192.168.0.10:3000/addWorker", {
        name,
        category,
        cellPhone,
        addressUser,
      })
      .then((response) => {
        console.log(response.data);
        setWorkers([...workers, { name, cellPhone, addressUser }]);
        setName("");
        setCellPhone("");
        setAddressUser("");
        setCategory("Plumber");
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
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
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={addressUser}
        onChangeText={setAddressUser}
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
