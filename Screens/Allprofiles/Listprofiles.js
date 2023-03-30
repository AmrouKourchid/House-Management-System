import { View } from "react-native";
import React from "react";
import User from "./User";

const providers = [
  { id: 1, name: "Taha Bouzahar", category: "plumber", pictureUser: require('../../assets/taha.jpg'), cellPhone: 15678943, addressUser: "tomato,tunis" },
  { id: 2, name: "Amrou Kourchid", category: "electrician", pictureUser: require('../../assets/amrou.jpg'), cellPhone: 15468739, addressUser:"potatp, tunis"},
  { id: 3, name: "Hachem Drissi", category: "carpenter", pictureUser: require('../../assets/hachem.jpg'), cellPhone: 27963348, addressUser:"toto,tunis"},
  { id: 4, name: "Zeineb Guellouze", category: "painter", pictureUser: require('../../assets/zeineb.jpg'), cellPhone: 46321497, addressUser: "tata,tunis"},
  { id: 5, name: "Sami Trabelsi", category: "plumber", pictureUser: require('../../assets/sami.jpg'), cellPhone: 23467859, addressUser: "uiui,tunis"},
  { id: 6, name: "Yosr Fourati", category: "electrician", pictureUser: require('../../assets/yosr.jpg'), cellPhone: 46987320, addressUser: "vcvc,tunis"},
  { id: 7, name: "Hamza Snoussi", category: "carpenter", pictureUser: require('../../assets/hamza.jpg'), cellPhone: 16478963, addressUser: "lmlm,tunis"},
  { id: 8, name: "Mouhamed Kooli", category: "painter", pictureUser: require('../../assets/kooli.jpg'), cellPhone: 12347898, addressUser: "klkl,tunis"},
];

export default function Listprofiles({ route }) {
  const { category } = route.params;
  const filteredProviders = providers.filter(
    (provider) => provider.category === category
  );

  return (
    <View>
      {filteredProviders.map((provider) => (
        <User
          key={provider.id}
          firstName={provider.name.split(" ")[0]}
          lastName={provider.name.split(" ")[1]}
          pictureUser={provider.pictureUser}
          cellPhone={provider.cellPhone}
          addressUser={provider.addressUser}
        />
      ))}
    </View>
  );
}
