import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigator, StackNavigator, createAppContainer } from 'react-navigation'

import Tabs from './navigation/bottom_tabs';
import NewDream from './navigation/TopTabNewDream';
import NestedStackNavigator from './navigation/StackNewDream';

import OneDream from './components/oneDream';
import Plus from './components/plus';
import { render } from 'react-dom';
import {LinearGradient} from 'expo-linear-gradient'
import Header from './components/header';
import JournalScreen from './screens/journalScreen';
import NavBar from './components/navBar';
import QuestionInput from './components/questionInput';
import RecitScreen from './screens/RecitScreen';
import DetailScreen from './screens/DetailScreen';
import InterpretationScreen from './screens/InterpretationScreen';
import StackNewDream from './navigation/StackNewDream';
// REDUX
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
// FIREBASE
import firebase from 'firebase/app'
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyDTzGLl_JO7majGwKcqedCIYD5gM5cPf5Y",
  authDomain: "appdream.firebaseapp.com",
  projectId: "appdream",
  storageBucket: "appdream.appspot.com",
  messagingSenderId: "422707936108",
  appId: "1:422707936108:web:9008db775ca2ee21d61149"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const getFonts = () => Font.loadAsync({
  'Harmattan-Bold':require('./assets/fonts/Harmattan-Bold.ttf'),
  'Harmattan-Regular': require('./assets/fonts/Harmattan-Regular.ttf'),
  'Rancho': require('./assets/fonts/Rancho-Regular.ttf'),
    });


export default function App(){

  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(!fontsLoaded){
    return (
      // <Text style= {{fontFamily: 'Harmattan-Bold'}}> MyGod</Text>
      <AppLoading 
        startAsync = {getFonts}
        onFinish = {() => setFontsLoaded(true)}
        onError={console.warn}
      />
    )
    
  }
  else{
    return (

      <Provider store = {Store}>
        {/* <JournalScreen></JournalScreen> */}
        <NavigationContainer>
          <StackNewDream>
            
          </StackNewDream>
        </NavigationContainer>
      </Provider>

    )
  }
}