
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import Header from '../components/customHeaderStack';

// import Tabs from './bottom_tabs';
import TopTabNewDream from './TopTabNewDream';
import Tabs from './bottom_tabs';
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
      mode = 'modal'
      headerMode='screen'
      headerTitle = 'Mon rêve'
      screenOptions={({route, navigation}) => ({
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
                
                  // Color:'"white'
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
            // headerStyle: {height: 60}
          })
        }
          
          />
        
      </Stack.Navigator>
    );
  }

  const mapStateToProps = (state) => {
    return {
      newDream: state.newDream
    }
}
export default connect(mapStateToProps)(StackNewDream)