import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()

 export default function LoginStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options = {{headerShown:false}} name="Login" component= {LoginScreen} />
        <Stack.Screen name="Home" component= {HomeScreen} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default LoginStack()
