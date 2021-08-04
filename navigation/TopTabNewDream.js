import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button } from 'react-native';
import RecitScreen from '../screens/RecitScreen';
import DetailScreen from '../screens/DetailScreen';
import InterpretationScreen from '../screens/InterpretationScreen';
import {connect} from 'react-redux'


const topTab = createMaterialTopTabNavigator();


const TopTabNewDream = (props) => {

  const saveNewDream = () => {
    const action = {type : 'SAVE_DREAM' ,value : props.newDream}
    props.dispatch(action)

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button 
        title = 'Enregistrer'
        color="#841584"
        onPress={()=>{
          saveNewDream()
          props.navigation.goBack
        }} />
      ),
    });
  }, [props.navigation]);


  }

  return(

    <topTab.Navigator
    screenOptions={{
      
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
        
        backgroundColor:"#0F1538",
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

const mapStateToProps = (state) => {
  return {
    newDream: state.newDream
  }
}
export default connect(mapStateToProps)(TopTabNewDream)