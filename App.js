import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';



// REDUX
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

import LoginStack from './navigation/loginStack'


// FIREBASE
import { db } from './firebase-config';
import { auth } from './firebase-config';

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
        {/* <AuthScreen></AuthScreen> */}
        {/* <ResumeScreen></ResumeScreen> */}
        <LoginStack></LoginStack>
        {/* <NavigationContainer>
          <StackNewDream>
            
          </StackNewDream>
          {/* <StackResume></StackResume> */}
        {/* </NavigationContainer> */} 
      </Provider>

    )
  }
}