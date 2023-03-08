import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from '../About';
import Home from './Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from '../Settings';
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
            ? 'information-circle'
            : 'information-circle-outline';
        }
        else if (route.name === 'Settings') {
            iconName = focused 
            ? 'md-settings-sharp'
            : 'md-settings-outline';
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
         headerShown:false
        })}
        >
        <Tab.Screen name="About" component={About}
        options={{headerTitle:"About Us",headerTitleStyle:{fontSize:16}
        }} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
</Tab.Navigator>
)
}
const styles = StyleSheet.create({})
