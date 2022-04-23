import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesList from "./components/MoviesList";
import MovieDetailScreen from './screens/MovieDetailScreen';
import MovieDetail from './screens/MovieDetail';
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
function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
      <Button
        title="Go to home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Feed" component={MoviesList} options={{ StackBarBadge: 3 }} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTab} />
        <Stack.Screen name="Settings" component={MovieDetailScreen} />
        <Stack.Screen name="Pelicula" component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
