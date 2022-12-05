import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import Home from './Components/Home';
import Profile from './Components/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Components/Login';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login">
          {(props) => <Login setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}