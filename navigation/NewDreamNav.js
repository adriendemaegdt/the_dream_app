import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigator, StackNavigator, createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import JournalScreen from '../screens/journalScreen';
import RecitScreen from '../screens/RecitScreen';
import DetailScreen from '../screens/DetailScreen';
import InterpretationScreen from '../screens/InterpretationScreen';

import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { processFontFamily } from 'expo-font';
import Header from '../components/header';
import { Dimensions } from 'react-native';


const topTab = createMaterialTopTabNavigator();


const NewDream = () => {


  
  return(
    <topTab.Navigator
    
    screenOptions={{
      headerStyle: { backgroundColor: '#633689' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
    }}
    headerMode = 'float'
    ScreenOptions = {{animationEnabled: true}}
    mode= 'modal' 
    
    tabBarOptions={{
      showLabel:true,
      labelStyle: { fontSize: 18, fontFamily:'Harmattan-Bold' },
      style:{
        
        backgroundColor:"#23195E",
        height:70,
      },
      activeTintColor:'white', 
      indicatorStyle:{backgroundColor:'white'}
    }}
    >
      <topTab.Screen name="RecitScreen" component={RecitScreen}
      
      options={{
        headerTitle: 'Mon rêve',
        headerRight:()=> (

          <Button 
          onPress= {() => alert('This is a button!')}
          title="Save"
          color="red"
          />
        ),
        title: 'Mon Récit',
        headerShown:true,
        animationEnabled: true,
        
        
    }} 

      />
      <topTab.Screen name="DetailScreen" component={DetailScreen}
      options={{
        title:'Détails',
        headerShown:true,
        animationEnabled: true
        
      }}
      />
      <topTab.Screen name="InterpretationScreen" component={InterpretationScreen}
      options={{
        title:'Interprétation', 
        headerShown:false,
        animationEnabled: true
        
      }}
      />

      {/* <Stack.Screen name="RecitScreen" component={RecitScreen}
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
      /> */}


    </topTab.Navigator>
    )
}
export default NewDream 