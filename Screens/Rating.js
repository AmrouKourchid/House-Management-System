import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

const Rating = () => {
  const [workerId, setWorkerId] = useState("");
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);

  const submitRating = () => {
    if (workerId === "" || rating === 0) {
      setErrorMessage("Please enter the worker ID and select a rating.");
      return;
    }

    axios
      .post("http://192.168.1.19:3000/api/ratings", { workerId, rating })
      .then((response) => {
        console.log(response.data);
        setWorkerId("");
        setRating(0);
        setErrorMessage(null);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("An error occurred.");
      });
  };

  const handleRatingPress = (selectedRating) => {
    setRating(selectedRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starIcon = i <= rating ? "star" : "star-outline";
      stars.push(
        <Pressable
          key={i}
          onPress={() => handleRatingPress(i)}
          style={styles.star}
        >
          <Ionicons name={starIcon} size={32} color="#FFD700" />
        </Pressable>
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate the Worker</Text>
      <TextInput
        style={styles.input}
        placeholder="Worker ID"
        value={workerId}
        onChangeText={setWorkerId}
        keyboardType="numeric"
      />
      <View style={styles.starsContainer}>{renderStars()}</View>
      <Pressable style={styles.button} onPress={submitRating}>
        <Text style={styles.buttonText}>Submit Rating</Text>
      </Pressable>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  star: {
    padding: 8,
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
  errorText: {
    color: "red",
    marginTop: 8,
  },
});

export default Rating;
