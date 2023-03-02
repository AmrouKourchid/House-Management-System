import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import Login from './Screens/LoginScreen';
import Signup from './Screens/SignUpScreen';
import HomeScreen from './Screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='About' screenOptions={{headerTitleAlign: 'center', headerStyle: {
      backgroundColor:"#C0EEF2"
    }}}>
      <Stack.Screen name='About' component={HomeScreen}/>
      <Stack.Screen name='Signup' component={Signup}/>
      <Stack.Screen name='Login' component={Login}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181823',
  },
});
