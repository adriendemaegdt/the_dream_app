

import data_dream from "../../data/data_dream"


import thunkMiddleware from "redux-thunk"
import thunk from "redux-thunk";

/// ----------------Redux-Firestore import -----------------------////

import { reduxFirestore , getFirestore} from "redux-firestore";
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' 

/// ----------------Redux import -----------------------////

import { createStore, combineReducers, compose } from 'redux'
import {  applyMiddleware  } from "redux";

/// ----------------React redux firebase import -----------------------////
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'


import { db } from "../../firebase-config"
import { doc, setDoc } from "firebase/firestore";
import { auth } from "../../firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";


//
//Initial State
//
// const date = new Date()
// date = date.toString().substring(4,15)
const initialState = {
  newDream: {
    title:"", 
    story:"", 
    date: ""
  }
}

//
//reducer addDream
//


// function addDream(state =initialState, action) {
//   let nextState 
  
//   switch (action.type) {
//     case 'SAVE_VALUE':
//         const key = Object.keys(action.value)[0]
//         const value = action.value[key]
//         nextState = {...state}
//         nextState.newDream[key] = value 
//         return nextState
    
//     case 'CLEAR_DREAM':
//         nextState = {...state}
//         nextState.newDream = {}
//         return nextState

//     case 'SEND_DREAM_TO_DB':
//         return {...state, dream_data: action.value}


//     case 'SAVE_DREAM':
//         nextState = {...state}
        
//         // nextState.myDreams.push(action.value)
//         // // console.log(action.value)
//         // nextState.newDream = {}
//         return nextState

      
//   default:
//     return state
//   }
// }


const dreamReducer = (state = initialState, action) =>{
  
  switch(action.type){
    
    case 'SAVE_VALUE':{
        const key = Object.keys(action.value)[0]
        const value = action.value[key]
        state.newDream[key] = value 
        
        
        return state
    }
    case 'ADD_DREAM':{

        console.log(('dream has been added'))
        // console.log(state)
        
        state.newDream = {}
        return state
    }
    default: return state
  }
}

//
//Action Creator
//






//
// Combine Reducer
//

const rootReducer = combineReducers({
  dreamReducer: dreamReducer, 
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

//
//Store
//
const store = createStore(
  
  rootReducer, 
  applyMiddleware(thunk.withExtraArgument({getFirebase}))
  )


export {store}
