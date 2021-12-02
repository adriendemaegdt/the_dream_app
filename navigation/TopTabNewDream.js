import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button } from 'react-native';
import RecitScreen from '../screens/RecitScreen';
import DetailScreen from '../screens/DetailScreen';
import InterpretationScreen from '../screens/InterpretationScreen';
import {connect} from 'react-redux'
// import { SEND_DREAM_TO_DB } from '../Store/Reducers/dreamReducer';




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
    headerMode = 'float'
    ScreenOptions = {{animationEnabled: true}}
    mode= 'modal' 
    screenOptions={{
      tabBarShowLabel:true,
      tabBarLabelStyle:{
        fontSize: 18, fontFamily:'Harmattan-Bold'
      },
      tabBarStyle:{
        
        backgroundColor:"#0F1538",
        height:70,
      },
      tabBarIndicatorStyle: {
        "backgroundColor": "white"
      },
      tabBarStyle: {
        "backgroundColor": "#0F1538",
        "height": 70
      },
      tabBarActiveTintColor: "white",
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
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
// const mapDispatchToProps = (dispatch) => {
//   return {
//     sendDreamToDataBase
//   }
// }
export default connect(mapStateToProps)(TopTabNewDream)