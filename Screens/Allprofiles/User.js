import { View } from "react-native";
import React from "react";
import { Text, Card } from "@rneui/themed";
import {Button} from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

export default function User({
  firstName,
  lastName,
  cellPhone,
  addressUser, 
}) {
    const navigation = useNavigation(); 
  return (
    <Card containerStyle={{ borderRadius: 30, shadowRadius: 10 }}>
      <Card.Title
        style={{ fontSize: 14, flexDirection: "row", justifyContent: "center" }}
      >
        {firstName} {lastName}
      </Card.Title>
      <Card.Divider />
      <View style={{ flexDirection: "row" }}>
        
        <View>
          <Text style={{ marginTop: 10, fontSize: 12, fontWeight: "bold" }}>
            Phone: <Text style={{ fontWeight: "500" }}>{cellPhone}</Text>
          </Text>
          <Text style={{ marginTop: 10, fontSize: 12, fontWeight: "bold" }}>
            Address:
            <Text style={{ fontWeight: "500" }}>{addressUser}</Text>
          </Text>
        </View>
      </View>
      <Card.Divider />
      <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
      <Button mode="contained" buttonColor="rgba(34,50,99,1)" onPress={() =>  navigation.navigate('Request')}>
    Request
  </Button>
  <Button mode="outlined" textColor="rgba(34,50,99,1)" onPress={() => console.log('Pressed')}>
    Rate
  </Button>
  </View>
    </Card>
  );
}
