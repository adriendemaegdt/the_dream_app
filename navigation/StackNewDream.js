
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import Header from '../components/customHeaderStack';

// import Tabs from './bottom_tabs';
import TopTabNewDream from './TopTabNewDream';
import Tabs from './bottom_tabs';
import {connect} from 'react-redux'



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
            color="blue"
          /> ),
        headerTitleStyle: {
                fontWeight: 'bold',
              },

      })}

      
      >
       <Stack.Screen
          name='Home'
          component={Tabs}
        ></Stack.Screen>

        <Stack.Screen 
          name="myDream" 
          component={TopTabNewDream}
        //   options={ () => ({
            
        //     headerTitle: () => <Header title= 'Mon reve'/>
          
        //   })
        // }
          
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