import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigator, StackNavigator, createAppContainer } from 'react-navigation'
import JournalScreen from '../screens/journalScreen';
import RecitScreen from '../screens/RecitScreen';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { processFontFamily } from 'expo-font';
import Header from '../components/header';
import { Dimensions } from 'react-native';


const Stack = createStackNavigator();


const Home = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="JournalScreen" component={JournalScreen}
      options={{
        headerShown:false,
        
      }}
      />
      <Stack.Screen name="RecitScreen" component={RecitScreen}
      options={{
        title:'Mon rêve',

        // headerTitle: () => <Header/>,
        headerStyle: {
          backgroundColor: '#23195E',
          height:100
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize:35,
          fontFamily:'Rancho'
         
        },
      }}
      />
    </Stack.Navigator>
    )
}
export default Home 