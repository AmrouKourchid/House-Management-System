import {StyleSheet,Text,View,FlatList,ActivityIndicator,} from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import uuid from "react-native-uuid";
import User from "./User";

export default function Listprofiles() {

    const [state, setData] = useState([]);
    const url = "https://randomuser.me/api/?results=100";
    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const renderProfile = () =>
        state.map((elt) => (
            <User
                key={uuid.v4()}
                cellPhone={elt.cell}
                emailUser={elt.email}
                ageUser={elt.dob.age}
                countryUser = { elt.state }
                firstName = { elt.name.first }
                lastName = { elt.name.last }
                pictureUser = { elt.picture.medium }
            />
    ));
    return (
        <View style={styles.container}>
            {state.length === 0 ? (
                <ActivityIndicator size="large" color="pink" />
            ) : (
                <View>
                    <FlatList
                        data={state}
                        renderItem={renderProfile}
                        style={{ marginTop: 30 }}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    },
    });
    
