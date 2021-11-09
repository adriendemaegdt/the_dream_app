
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import Header from '../components/customHeaderStack';

// import Tabs from './bottom_tabs';
import TopTabNewDream from './TopTabNewDream';
import Tabs from './bottom_tabs';
import StackResume from './StackResume';
import ResumeScreen from '../screens/ResumeScreen';
import {connect} from 'react-redux'
import firebase from 'firebase' 



const Stack = createStackNavigator()


function StackNewDream(props) {
  
  const clearNewDream = () => {
    const action = {type : 'CLEAR_DREAM' ,value : {}}
    props.dispatch(action)
    
  }

  const saveNewDream = (navigation) => {
    const action = {type : 'SAVE_DREAM' ,value : props.newDream}
    props.dispatch(action)
    navigation.navigate('Home')
    
  }

    return (
      <Stack.Navigator
      // mode = 'modal'
      
      >
        <Stack.Group
        
        screenOptions={({route, navigation}) => ({
          presentation : 'modal',
          headerRight: () => (
            <Button
              
              onPress={() => saveNewDream(navigation)}
              title="Sauvegarder"
              color="white"
              
            /> ),
          headerTitleStyle: {
                  fontWeight: 'bold',
                  fontFamily:'Rancho', 
                  fontSize: 30, 
                },
          headerStyle:{
            backgroundColor:'#23195E',
            height: 80
          }, 
          headerTintColor:'white'
        })}
        >
           <Stack.Screen
            options={{headerShown: false}} 
            name='Home'
            component={Tabs}
          ></Stack.Screen>

          <Stack.Screen 
            name="MyDream" 
            component={TopTabNewDream}
            options={ () => ({
              title: 'Mon Rêve', 
            })
          }       
            />
        </Stack.Group>

        <Stack.Group
        
        screenOptions={({route, navigation}) => ({
          presentation : 'modal',
          headerTitle : 'Résumé',
          headerRight: () => (
            <Button
              
              onPress={() => console.log("je veux modifier")}
              title="Modifier"
              color="white"
              
            /> ),
          headerTitleStyle: {
                  fontWeight: 'bold',
                  fontFamily:'Rancho', 
                  fontSize: 30, 
                },
          headerStyle:{
            backgroundColor:'#23195E',
            height: 80
          }, 
          headerTintColor:'white'
        })}
        >
            <Stack.Screen
                options={{headerShown: true}} 
                options={ () => ({
                  title: '',
                  color:'red'
                })
              }
                name='ResumeScreen'
                component={ResumeScreen}
            ></Stack.Screen>
                    
        </Stack.Group>
      
        
      </Stack.Navigator>
    );
  }

  const mapStateToProps = (state) => {
    return {
      newDream: state.newDream
    }
}
export default connect(mapStateToProps)(StackNewDream)