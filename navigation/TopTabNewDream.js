import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import RecitScreen from '../screens/RecitScreen';
import DetailScreen from '../screens/DetailScreen';
import InterpretationScreen from '../screens/InterpretationScreen';



const topTab = createMaterialTopTabNavigator();


const TopTabNewDream = () => {



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


    </topTab.Navigator>
    )
}
export default TopTabNewDream 