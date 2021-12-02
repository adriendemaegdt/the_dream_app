
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
import { set } from 'react-native-reanimated';

import { useState, useEffect } from "react";




const Stack = createStackNavigator()


function StackNewDream(props) {
  
  const clearNewDream = () => {
    const action = {type : 'CLEAR_DREAM' ,value : {}}
    props.dispatch(action)
    
  }

  const saveNewDream = (navigation) => {
    const action = {type : 'SAVE_DREAM' ,value : props.newDream}
    props.dispatch(action)
    navigation.navigate('Journal')
    
  }

  //
  // Firebase Functions
  //

  const getDataDream = async () =>{

    if (auth.currentUser != null) {
    const uid = auth.currentUser.uid
    }
    else{
        const uid = 'kAsMQWA5NmS4IdTi6SBKqqAQOOj2'
    }
    // const uid = auth.currentUser.uid
    const data = []
    const dreamsCollectionRef = query(collection(db, "users", uid, "dreams" ))
    const querySnapshot = await getDocs(dreamsCollectionRef);
    querySnapshot.forEach((doc) => {
      const dream = doc.data()
      Object.assign(dream, {"id": doc.id})

      data.push(dream)
    });
    

  }



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
      console.log(numberOfDreams)

///
/// get dream data from state
///
const data_dream = props.newDream
console.log(data_dream)

///
/// Send dream to db
///
      const dreamDocRef = doc(db,"users", uid , "dreams", "dream_"+numberOfDreams  )
      await setDoc(dreamDocRef, data_dream);
}

// essai use State

// const [dreams, setDreams] = useState([]);

// useEffect(() => {
//    const getDataDream = async () => {
//       const uid = auth.currentUser.uid
//       console.log(uid)
//       const dreamsCollectionRef = query(collection(db, "users", uid, "dreams" ))
//       const data = await getDocs(dreamsCollectionRef);
//       setDreams(dreamsCollectionRef.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     
//    }
//    getDataDream();
// }, [])

// console.log(dreams)

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

                // getDataDream()
                
                sendDreamToDb()

                 saveNewDream(navigation); 
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
      newDream: state.newDream
    }
}
export default connect(mapStateToProps)(StackNewDream)