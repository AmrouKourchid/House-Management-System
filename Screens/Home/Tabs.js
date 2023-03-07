import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from '../About';
import Home from './Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Tabs() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName='Home'
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
        iconName = focused
        ? 'home'
        : 'home-outline';
        }
        else if (route.name === 'About') {
            iconName = focused 
            ? 'abc'
            : 'abd';
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        // headerShown:false
        })}
        >
        <Tab.Screen name="About" component={About}
        options={{headerTitle:"About Us",headerTitleStyle:{fontFamily:"Verdana", fontSize:16}
        }} />
        <Tab.Screen name="Home" component={Home} />
</Tab.Navigator>
)
}
const styles = StyleSheet.create({})
