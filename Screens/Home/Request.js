import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, {useState} from "react";
import { TextInput, Button } from "react-native-paper";
const Request = () => {
  const user = {
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    job: "",
    email: "",
  };
  const [userInfo, setUserInfo] = useState(user);
  console.log(userInfo);
  return (
    <View style={styles.container}>
        <ScrollView style={styles.subContainer}>
        <Text style={styles.title}> Request a Service</Text>
          <TextInput
            label="First Name"
            value={userInfo.firstName}
            mode="outlined"
            onChangeText={(text) => {
              setUserInfo({ firstName: text });
            }}
            style={styles.input}
          />
          <TextInput
            label="Last Name"
            mode="outlined"
            value={userInfo.lastName}
            onChangeText={(text) => {
              setUserInfo({ lastName: text });
            }}
            
            style={styles.input}
          />
          <TextInput
            label="Phone Number"
            mode="outlined"
            value={userInfo.phone}
            onChangeText={(text) => {
              setUserInfo({ phone: text });
            }}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            label="City"
            value={userInfo.city}
            mode="outlined"
            onChangeText={(text) => {
              setUserInfo({ city: text });
            }}
            style={styles.input}
          />
          <TextInput
            label="Email"
            mode="outlined"
            value={userInfo.email}
            onChangeText={(text) => {
              setUserInfo({ email: text });
            }}
            style={styles.input}
            keyboardType="email-address"
          />
            <Button mode="contained" buttonColor="rgba(34,50,99,1)" onPress={() => alert("Request sent!")}>Request</Button>
        </ScrollView>
    </View>
  );
};

export default Request;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",

    },
    containerScroll: {
        flex: 1,
        height: 300,
        marginBottom: 30,
    },
    subContainer: {
        width: 250,
        marginTop: 90,
    },
    title: {
        fontSize: 16,
        textAlign:"center",
        marginBottom:1
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        borderRadius:5000,
    },
    input: {
        marginBottom: 10,
    },
});