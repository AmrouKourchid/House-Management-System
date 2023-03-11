import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, Card } from "@rneui/themed";
import { faker } from '@faker-js/faker';
export default function User({ firstName, lastName, pictureUser, cellPhone,
    countryUser, ageUser }) {
    return (
        <Card containerStyle={{ borderRadius: 30, shadowRadius: 10 }}>
            <Card.Title style={{ fontSize: 14 }}>
                {firstName} {lastName}
            </Card.Title>
            <Card.Divider />
            <View style={{ flexDirection: "row" }}>
                <Card.Image
                    style={{ width: 90, marginHorizontal: 9, height: 100, borderRadius: 80 }}
                    source={{
                        uri: pictureUser
                    }}
                />
                <View>
                    <Text style={{ marginTop: 10, fontSize: 12, fontWeight: "bold" }}>Phone: <Text
                        style={{ fontWeight: "500" }}>{cellPhone}</Text></Text>
                    <Text style={{ marginTop: 10, fontSize: 12, fontWeight: "bold" }}>Country:
                        <Text style={{ fontWeight: "500" }}>{faker.address.country()}</Text></Text>
                    <Text style={{ marginTop: 10, fontSize: 12, fontWeight: "bold" }}>Age: <Text
                        style={{ fontWeight: "500" }}>{ageUser}</Text></Text>
                    <Text style={{ marginTop: 10, fontSize: 12, fontWeight: "bold" }}>Job:<Text
                        style={{ fontWeight: "500" }}>{faker.name.jobType()}</Text></Text>
                </View>
            </View>
        </Card>
    );
}
