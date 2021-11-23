import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Button } from 'react-native';
import {connect} from 'react-redux'
import ResumeScreen from '../screens/ResumeScreen';
import JournalScreen from '../screens/journalScreen';

const Stack = createStackNavigator()

function StackResume({props, navigation, route}){

    // navigation.setOptions({ tabBarVisible: route.state ? route.state.index > 0 ? false : true : null });
    const getTabBarVisibility = (route) => {
        const routeName = route.state
          ? route.state.routes[route.state.index].name
          : '';
      
        if (routeName === 'ResumeScreen') {
          return false;
        }
      
        return true;
      }
    return(
        <Stack.Navigator
        // initialRouteName="Journal"
        mode = 'modal'
        headerMode='screen'
        headerTitle = 'Mon rêve'
        screenOptions={({route, navigation}) => ({
          headerRight: () => (
            <Button
              onPress={() => console.log('i want modfie') }
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
            
            options={{headerShown: false}} 
            name='Journal'
            component={JournalScreen}
          ></Stack.Screen>
  
          <Stack.Screen 
            name="ResumeScreen" 
            component={ResumeScreen}
            options={ () => ({
              title: 'Mon Rêve', 
            })
          }
            
            />
          
        </Stack.Navigator>
      );
    }
  
    const mapStateToProps = (state) => {
      return {
        myDreams: state.myDreams
      }
  }
  export default connect(mapStateToProps)(StackResume)