
import React, { useState, useCallback, useRef} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigator, StackNavigator, createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import Tabs from './bottom_tabs';
import TopTabNewDream from './TopTabNewDream';


const Stack = createStackNavigator()


function StackNewDream() {


  
    return (
      <Stack.Navigator>
       
        <Stack.Screen 
            name="Mon reve" 
            component={TopTabNewDream}
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