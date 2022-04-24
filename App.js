import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesList from "./components/MoviesList";
import MovieDetail from './screens/MovieDetail';
import Login from './screens/Login';
import VideoScreen from './screens/VideoScreen';
import SettingsScreen from './screens/SettingsScreen';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
        title="Go to feed"
        onPress={() => navigation.navigate('Feed')}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
        title="Go to Mensajes"
        onPress={() => navigation.navigate('Mensajes')}
      />
    </View>
  );
}
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={MoviesList} />
      <Stack.Screen name="Detail" component={MovieDetail} />
    </Stack.Navigator>
  )
}
function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Video" component={VideoScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
