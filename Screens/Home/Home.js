import { View, Text, ScrollView, StyleSheet, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SearchBar } from '@rneui/themed';


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
                <Text style={styles.regularText}>
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
            <View style={styles.Categoryview}>
                <Text style={styles.CategoryText}>Category</Text>
                <Pressable onPress={() => navigation.navigate('Categories')}>
                    <Text style={styles.CategoryText}>More Categories</Text>
                </Pressable>
            </View>
            <ScrollView horizontal={true} style={styles.imagetopview}>
                <View style={styles.imagebottomview}>
                    <Pressable onPress={() => navigation.navigate('Listprofiles')}>
                        <Image source={require('../../assets/Category1.png')} style={styles.image} resizeMode="cover" />
                        <Text style={styles.regularText}>Maintenance And Repair </Text>
                    </Pressable>
                </View>

                <View style={styles.imagebottomview}>
                    <Pressable onPress={() => navigation.navigate('Listprofiles')}>
                        <Image source={require('../../assets/Category2.png')} style={styles.image} />
                        <Text style={styles.regularText}>Appliance Repair</Text>
                    </Pressable>
                </View>
                <View style={styles.imagebottomview}>
                    <Pressable onPress={() => navigation.navigate('Listprofiles')}>
                        <Image source={require('../../assets/Category3.png')} style={styles.image} />
                        <Text style={styles.regularText}>House Cleaning</Text>
                    </Pressable>
                </View>
                <View style={styles.imagebottomview}>
                    <Pressable onPress={() => navigation.navigate('Listprofiles')}>
                        <Image source={require('../../assets/Category4.png')} style={styles.image} />
                        <Text style={styles.regularText}>Pick Up & Delivery</Text>
                    </Pressable>
                </View>
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
    regularText: {
        fontSize: 17,
        color: "#3d4b77",
    },
    Categoryview: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    CategoryText: {
        fontSize: 17,
        color: "#3d4b77",
        fontWeight: "bold"
    },
    imagetopview: {
        marginTop: 25,
    },
    image: {
        marginLeft: 20
    },
    imagebottomview: {
        borderColor: "#3d4b77", borderWidth: 2, borderRadius: 5, marginBottom: 350, borderRightWidth: 1
    }



})