import { View, TextInput, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import User from "./User";
import axios from "axios";

export default function Listprofiles({ route }) {
  const { category } = route.params;
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    axios.get(`http://192.168.48.185:3000/workers/${category}`)
      .then(response => setWorkers(response.data))
      .catch(error => console.log(error));
  }, []);

  const filteredWorkers = workers.filter(
    (worker) => worker.category === category
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {workers.map((worker) => (
          <User
            key={worker.id}
            firstName={worker.name.split(" ")[0]}
            lastName={worker.name.split(" ")[1]}
            cellPhone={worker.cellPhone}
            addressUser={worker.addressUser}
            rating={worker.rating}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
