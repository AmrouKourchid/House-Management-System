import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Screens/Home/Tabs';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Listprofiles from './Screens/Allprofiles/Listprofiles';
import EditProfile from './Screens/EditProfile';
import Request from './Screens/Home/Request';
import User from './Screens/Allprofiles/User';
import Addworker from './Screens/Addworker';
import Rating from './Screens/Rating';
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
        <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown:true}}/>
        <Stack.Screen name="Request" component={Request} options={{headerShown:true}}/>
        <Stack.Screen name="Profiles" component={User} />
        <Stack.Screen name="Addworker" component={Addworker} options={{headerShown:true}}/>
        <Stack.Screen name="Rating" component={Rating} options={{headerShown:true}}/>

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
