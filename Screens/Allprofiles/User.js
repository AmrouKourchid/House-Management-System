import React from "react";
import { View } from "react-native";
import { Text, Card } from "@rneui/themed";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function User({
  firstName,
  lastName,
  cellPhone,
  addressUser,
  rating,
}) {
  const navigation = useNavigation();

  const renderRatingStars = () => {
    const starColor = "#FFD700"; // Color for filled stars
    const emptyStarColor = "#CCCCCC"; // Color for empty stars
    const maxRating = 5;

    const filledStars = rating > 0 ? Math.floor(rating) : 0;
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      const starIcon =
        i <= filledStars
          ? "star"
          : hasHalfStar && i === filledStars + 1
          ? "star-half"
          : "star-outline";
      const starColorStyle = i <= filledStars ? starColor : emptyStarColor;

      stars.push(
        <Ionicons
          key={i}
          name={starIcon}
          size={16}
          color={starColorStyle}
          style={{ marginRight: 2 }}
        />
      );
    }
    return stars;
  };

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
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Button
          mode="contained"
          buttonColor="rgba(34,50,99,1)"
          onPress={() => navigation.navigate("Request")}
        >
          Request
        </Button>
        <Button
          mode="outlined"
          textColor="rgba(34,50,99,1)"
          onPress={() => navigation.navigate("Rating")}
        >
          Rate
        </Button>
      </View>
      {rating > 0 && (
        <View style={{ marginTop: 10, alignItems: "center" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Rating: {renderRatingStars()}
          </Text>
        </View>
      )}
    </Card>
  );
}
