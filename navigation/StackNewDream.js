
import React, { useState, useCallback, useRef} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigator, StackNavigator, createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import Tabs from './bottom_tabs';
import NewDream from './TopTabNewDream';

const Stack = createStackNavigator()


function StackNewDream() {

  // const inputRef = useRef()
  const clearText = useCallback(()=> {
    this._input.setNativeProps({text:''})
  }, [] )

  
    return (
      <Stack.Navigator>
       
        <Stack.Screen 
            name="Mon reve" 
            component={NewDream}
            options={{
                headerTitle: 'Mon rêve',
              
                headerRight: () => (
                  <Button
                    onPress={() => alert('This is a button!')}
                    title="Sauvegarder"
                    color="green"
                  />
                ),
                headerLeft: () => (
                  <Button
                    onPress={clearText}
                    title="Annuler"
                    color="pink"
                  />
                ),
              }}
            />
      </Stack.Navigator>
    );
  }
export default StackNewDream