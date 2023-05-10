import { View, Text, ScrollView, StyleSheet, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SearchBar } from '@rneui/themed';

function CategoryButton({ imageSource, text, onPress, category }) {
    return (
        <View style={styles.imagebottomview}>
            <Pressable onPress={() => onPress(category)}>
            <Image source={imageSource} style={styles.image}/>
                <Text style={styles.regularText}>{text}</Text>
            </Pressable>
        </View>
    );
}



export default function Home({ navigation }) {
    const [search, setSearch] = useState('');
    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <View style={styles.view}>
            <View style={styles.HeaderView}>
                <Text style={styles.headerText}>
                    Welcome Back !
                </Text>
                <Text style={styles.subheaderText}>
                    find more than 100 providers
                </Text>
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
                <CategoryButton
                    imageSource={require('../../assets/plumber.jpg')}
                    text="Plumber"
                    onPress={(category) => navigation.navigate('Listprofiles', { category })}
                    category="plumber"
                />
                <CategoryButton
                    imageSource={require('../../assets/electrician.jpg')}
                    text="Electrician"
                    onPress={(category) => navigation.navigate('Listprofiles', { category })}
                    category="electrician"
                />
                <CategoryButton
                    imageSource={require('../../assets/carpenter.jpg')}
                    text="Carpenter"
                    onPress={(category) => navigation.navigate('Listprofiles', { category })}
                    category="carpenter"
                />
                <CategoryButton
                    imageSource={require('../../assets/painter.jpg')}
                    text="Painter"
                    onPress={(category) => navigation.navigate('Listprofiles', { category })}
                    category="painter"
                />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "#ffffff"
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
        fontWeight: "bold"
    },
    subheaderText: {
        fontSize: 17,
        color: "#3d4b77",
    },
    regularText: {
        fontSize: 17,
        color: "#3d4b77",
        textAlign: 'center',
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
        alignSelf: 'center',
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
      },
});
