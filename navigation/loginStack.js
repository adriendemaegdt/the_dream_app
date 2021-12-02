import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNewDream from './StackNewDream';

import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()

 export default function LoginStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options = {{headerShown:false}} name="Login" component= {LoginScreen} />
        <Stack.Screen options = {{headerShown:false}} name="StackNewDream" component= {StackNewDream} />
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
