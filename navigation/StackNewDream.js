
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


import { db, auth } from '../firebase-config';
import { addDoc, doc, setDoc, collection, getDocs, getDoc, query } from "firebase/firestore";


const Stack = createStackNavigator()


function StackNewDream(props) {

    
                // GET DATA OF STATE

    const data_dream_to_send = props.newDream.dreamReducer.newDream


                // SEND NEW DREAM TO FIRESTORE

    const sendDreamToDb = async () => {

                            ///
                            /// get uid (id of user)
                            ///
        const uid =  auth.currentUser.uid

                            ///
                            /// Get number of dreams 
                            ///
        const dreamsCollectionRef = query(collection(db, "users", uid, "dreams" ))
        const querySnapshot = await getDocs(dreamsCollectionRef);
        let numberOfDreams = 0
        querySnapshot.forEach((doc) => {
            numberOfDreams += 1
            // console.log(doc.id, " => ", doc.data());
        });

                            ///
                            /// Send dream to db
                            ///
        const dreamDocRef = doc(db,"users", uid , "dreams", "dream_"+numberOfDreams  )
        await setDoc(dreamDocRef, data_dream_to_send);
    }

    //Function that takes the dispatched action clear new dream in dispatchstatetoprops and tell to navigate back

    const clearNewDream = ( navigation) => {
        console.log(data_dream_to_send)

        props.clearNewDream()
        navigation.navigate('Journal')
        
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
              
              onPress={ () => {

                sendDreamToDb()
                clearNewDream(navigation)
                
              }}
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
            name='Journal'
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
                options={{headerShown: false}} 
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
        
      newDream: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearNewDream: navigation => dispatch({type : 'ADD_DREAM' ,value : ""})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StackNewDream)