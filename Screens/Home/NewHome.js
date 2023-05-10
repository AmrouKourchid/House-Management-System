import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SearchBar } from "@rneui/themed";
import { Card, Avatar, Button, Text} from "react-native-paper";

export default function Home({ navigation }) {
  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  return (
    <View style={styles.view}>
      <View style={styles.HeaderView}>
        <Text style={styles.headerText}>Welcome Back !</Text>
        <Text style={styles.subheaderText}>find more than 100 providers</Text>
      </View>
      <View style={styles.searchbarview}>
        <SearchBar
          placeholder="Find On HMS..."
          onChangeText={updateSearch}
          value={search}
          lightTheme={true}
          round={true}
        />
      </View>
      <ScrollView style={styles.imagetopview}>
      <Card>
         <Card.Cover source={require('../../assets/plumber.jpg')} />
          <Card.Title
            title="Card Title"
          />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  searchbarview: {
    marginTop: 10,
  },
  HeaderView: {
    marginTop: 30,
  },
  headerText: {
    color: "#3d4b77",
    fontSize: 20,
    fontWeight: "bold",
  },
  subheaderText: {
    fontSize: 17,
    color: "#3d4b77",
  },
  regularText: {
    fontSize: 17,
    color: "#3d4b77",
    textAlign: "center",
  },
  imagetopview: {
    marginTop: 50,
  },
  imagebottomview: {
    borderColor: "#3d4b77",
    borderWidth: 2,
    width: "50%",
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
});
