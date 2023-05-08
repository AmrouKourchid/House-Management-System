import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';
import axios from 'axios';

const Rating = ({ workerId }) => {
  const [rating, setRating] = useState(0);
  const [confirmedRating, setConfirmedRating] = useState(0);

  const handleRatingPress = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleConfirm = () => {
    if (rating === 0) {
      Alert.alert('Error', 'Please select a rating');
    } else {
      saveRating();
    }
  };

  const saveRating = () => {
    // Send the rating to the backend server
    axios
      .post(`http://192.168.48.185:3000/ratings`, {
        workerId: workerId,
        rating: rating,
      })
      .then((response) => {
        const average = response.data.average;
        setConfirmedRating(rating);
        Alert.alert('Success', `Rating confirmed: ${rating}`);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Error', 'Failed to save rating');
      });
  };

  
  const renderStars = () => {
    const stars = [];
    const totalStars = 5;

    for (let i = 1; i <= totalStars; i++) {
      const starColor = i <= rating ? 'gold' : 'gray';

      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRatingPress(i)}>
          <Svg width="30" height="30">
            <Polygon
              points="15,0 18,10 30,11 20,19 23,30 15,24 7,30 10,19 0,11 12,10"
              fill={starColor}
            />
          </Svg>
        </TouchableOpacity>
      );
    }

    return stars;
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row' }}>{renderStars()}</View>
      <TouchableOpacity onPress={handleConfirm} style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Confirm</Text>
      </TouchableOpacity>
      {confirmedRating !== 0 && (
        <Text style={{ marginTop: 10 }}>
          Rating confirmed: {confirmedRating}
        </Text>
      )}
    </View>
  );
};

export default Rating;
