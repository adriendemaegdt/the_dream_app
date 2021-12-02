import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import StackNewDream from './navigation/StackNewDream'
import StackResume from './navigation/StackResume';

import LoginStack from './navigation/loginStack'



// REDUX
import { Provider } from 'react-redux'
import {store} from './Store/Reducers/dreamReducer'

import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'


// FIREBASE
import { db } from './firebase-config';
import { auth } from './firebase-config';
import { app } from './firebase-config';
import firebase from 'firebase/compat'

const firebaseConfig = {
  apiKey: "AIzaSyDTzGLl_JO7majGwKcqedCIYD5gM5cPf5Y",
  authDomain: "appdream.firebaseapp.com",
  projectId: "appdream",
  storageBucket: "appdream.appspot.com",
  messagingSenderId: "422707936108" ,
  appId: "1:422707936108:web:2dd39f351423b4cbd61149"
};

const rrfConfig = { userProfile: 'users' } // react-redux-firebase config

firebase.initializeApp(firebaseConfig)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
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

      <Provider store = {store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
        {/* <AuthScreen></AuthScreen> */}
        {/* <ResumeScreen></ResumeScreen> */}
        <LoginStack></LoginStack>
         {/* <NavigationContainer>
          <StackNewDream></StackNewDream>
        </NavigationContainer>   */}
        </ReactReduxFirebaseProvider>
      </Provider>

    )
  }
}