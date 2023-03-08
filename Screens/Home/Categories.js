import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React, {useState} from 'react'
import { SearchBar } from '@rneui/themed';
export default function Categories(){
    const [searchCategory,setSearchCategory]= useState('');
    const updateSearchCategory = (searchCategory) => {
        setSearchCategory(searchCategory);
      };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.searchview}>
            <SearchBar 
            placeholder="Find On HMS..."
            onChangeText={updateSearchCategory}
            value={searchCategory}
            lightTheme={true}
            round={true}
            />
            </View>
            <ScrollView horizontal={true} style={styles.imagetopview} contentContainerStyle={{flexWrap:"wrap", flex:1, flexDirection:"row"}}>
                <View style={styles.imagebottomview}>
                <Image source={require('../../assets/Category1.png')} style={styles.image} resizeMode="cover"/>
                <Text style={styles.regularText}>Maintenance And Repair </Text>
                </View>
                <View style={styles.imagebottomview}>
                <Image source={require('../../assets/Category2.png')} style={styles.image}/>
                <Text style={styles.regularText}>Appliance Repair</Text>
                </View>
                <View style={styles.imagebottomview}>
                <Image source={require('../../assets/Category3.png')} style={styles.image}/>
                <Text style={styles.regularText}>House Cleaning</Text>
                </View>
                <View style={styles.imagebottomview}>
                <Image source={require('../../assets/Category4.png')} style={styles.image}/>
                <Text style={styles.regularText}>Pick Up & Delivery</Text>
                </View>
            </ScrollView>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ffffff"
    },
    imagetopview:{
        marginTop:25,
     },
     image:{
        marginLeft:20
     },
     imagebottomview:{
        borderColor:"#3d4b77", borderWidth:2, borderRadius:5, marginBottom:20, borderRightWidth:1
     },
     regularText:{
        fontSize:17,
        color:"#3d4b77",
     },

})