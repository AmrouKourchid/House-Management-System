import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Screens/Home/Tabs';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Listprofiles from './Screens/Allprofiles/Listprofiles';
import Form from './Screens/Form';

const Stack = createNativeStackNavigator();
export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={ ({}) => ({
        headerShown:false
      })}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Tabs" component={Tabs}  />
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Listprofiles" component={Listprofiles} options={{headerShown:true}}/>
        <Stack.Screen name="Form" component={Form} options={{headerShown:true}}/>
        
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
